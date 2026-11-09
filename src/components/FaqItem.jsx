import { useEffect, useRef } from 'react';

export default function FaqItem({ initiallyOpen = false, children }) {
  const element = useRef(null);
  const expanded = useRef(initiallyOpen);
  const animation = useRef(null);
  useEffect(() => () => animation.current?.cancel(), []);
  function toggle(event) {
    if (!event.target.closest('summary')) return;
    event.preventDefault();
    const item = element.current;
    const startHeight = item.getBoundingClientRect().height;
    animation.current?.cancel();
    expanded.current = !expanded.current;
    item.dataset.expanded = String(expanded.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !item.animate) {
      item.open = expanded.current;
      return;
    }
    item.open = false;
    const closedHeight = item.getBoundingClientRect().height;
    item.open = true;
    const openedHeight = item.getBoundingClientRect().height;
    const current = item.animate([{ height: startHeight + 'px' }, { height: (expanded.current ? openedHeight : closedHeight) + 'px' }],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' });
    animation.current = current;
    current.onfinish = () => {
      item.open = expanded.current;
      current.cancel();
      animation.current = null;
    };
  }
  return <details ref={element} open={initiallyOpen} data-expanded={String(initiallyOpen)} onClick={toggle}>{children}</details>;
}
