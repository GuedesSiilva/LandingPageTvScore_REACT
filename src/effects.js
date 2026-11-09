import { useEffect, useRef } from 'react';

export function useCardTilt() {
  const bounds = useRef(new WeakMap());
  const allowed = () => window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;
  function reset(event) {
    const card = event.currentTarget;
    bounds.current.delete(card);
    card.classList.remove('is-hovered');
    ['--tilt-x', '--tilt-y', '--light-x', '--light-y'].forEach(key => card.style.removeProperty(key));
  }
  return {
    enter(event) { if (!allowed()) return; bounds.current.set(event.currentTarget, event.currentTarget.getBoundingClientRect()); event.currentTarget.classList.add('is-hovered'); },
    move(event) {
      const card = event.currentTarget;
      const box = bounds.current.get(card);
      if (!allowed() || !box) return;
      const x = Math.max(0, Math.min(1, (event.clientX - box.left) / box.width));
      const y = Math.max(0, Math.min(1, (event.clientY - box.top) / box.height));
      card.style.setProperty('--tilt-x', ((0.5 - y) * 10) + 'deg');
      card.style.setProperty('--tilt-y', ((x - 0.5) * 10) + 'deg');
      card.style.setProperty('--light-x', (x * 100) + '%');
      card.style.setProperty('--light-y', (y * 100) + '%');
    }, reset
  };
}

export function usePageEffects() {
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0];
    const previous = history.scrollRestoration;
    if (navigation?.type === 'reload') {
      history.scrollRestoration = 'manual';
      if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    return () => { history.scrollRestoration = previous; };
  }, []);
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !Element.prototype.animate || !CSS.supports('translate', '0 20px') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cleanup = [];
    const pending = new Map();
    const sections = document.querySelectorAll("main > section, footer");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const state = pending.get(entry.target);
        if (!state) return;

        // A seção só desaparece quando está totalmente fora da tela.
        // Assim o texto não some enquanto ainda está sendo lido.
        const visible = entry.isIntersecting;
        if (visible === state.visible) return;
        state.visible = visible;

        state.elements.forEach((element, index) => {
          const previous = state.animations.get(element);
          const opacity = getComputedStyle(element).opacity;
          const translate = getComputedStyle(element).translate;

          if (previous) {
            previous.onfinish = null;
            previous.cancel();
          }

          const animation = element.animate(
            [
              {
                opacity,
                translate: translate === "none" ? "0 0" : translate
              },
              {
                opacity: visible ? 1 : 0,
                translate: visible ? "0 0" : "0 16px"
              }
            ],
            {
              duration: visible ? 650 : 300,
              delay: visible ? Math.min(index * 70, 280) : 0,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "both"
            }
          );

          state.animations.set(element, animation);
          if (visible) {
            animation.onfinish = () => {
              if (state.animations.get(element) !== animation) return;
              animation.cancel();
              state.animations.delete(element);
            };
          }
        });
      });
    }, { threshold: 0 });

    function revealForFocus(state) {
      state.visible = true;
      state.animations.forEach((animation) => {
        animation.onfinish = null;
        animation.cancel();
      });
      state.animations.clear();
    }

    try {
      sections.forEach((section) => {
        if (section.dataset.pageReveal) return;
        section.dataset.pageReveal = "true";

        const firstSection = section.matches(".hero, #inicio");
        let candidates;

        if (firstSection) {
          // O primeiro bloco aparece direto e só anima após sair da tela.
          // Anima o grupo, sem interferir no balanço dos celulares.
          candidates = [...section.children];
        } else {
          candidates = [...section.querySelectorAll(
            ".heading, .cards > article, .screens > .screen, " +
            ".step-list > article, .faq-list > details, " +
            ".cta > :not(.star), .gallery-note"
          )];

          if (section.matches(".steps, .faq")) {
            const intro = section.firstElementChild;
            if (intro) candidates.unshift(...intro.children);
          }
          if (section.matches("footer")) {
            candidates.push(...section.children);
          }
        }

        const unique = [...new Set(candidates)];
        const elements = unique.filter(
          (element) => !unique.some(
            (other) => other !== element && other.contains(element)
          )
        );
        if (!elements.length) elements.push(...section.children);

        const bounds = section.getBoundingClientRect();
        const initiallyVisible = firstSection ||
          (bounds.bottom > 0 && bounds.top < window.innerHeight);
        const state = {
          visible: initiallyVisible,
          elements,
          animations: new Map()
        };
        pending.set(section, state);

        if (!initiallyVisible) {
          elements.forEach((element) => {
            const animation = element.animate(
              [
                { opacity: 0, translate: "0 16px" },
                { opacity: 0, translate: "0 16px" }
              ],
              { duration: 1, fill: "both" }
            );
            animation.pause();
            state.animations.set(element, animation);
          });
        }

        // O teclado nunca fica focado em um controle invisível.
        const focus = () => revealForFocus(state);
        section.addEventListener("focusin", focus);
        cleanup.push(() => section.removeEventListener("focusin", focus));
        observer.observe(section);
      });
    } catch (error) {
      pending.forEach(revealForFocus);
      observer.disconnect();
    }
    return () => {
      observer.disconnect();
      cleanup.forEach(fn => fn());
      pending.forEach(state => state.animations.forEach(animation => animation.cancel()));
      sections.forEach(section => delete section.dataset.pageReveal);
    };
  }, []);
}
