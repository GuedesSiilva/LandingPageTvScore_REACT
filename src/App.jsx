import { useRef, useState } from 'react';
import { usePageEffects, useCardTilt } from './effects.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';
import Steps from './components/Steps.jsx';
import Faq from './components/Faq.jsx';
import CallToAction from './components/CallToAction.jsx';
import Gallery from './components/Gallery.jsx';

export default function App() {
  const [image, setImage] = useState(null);
  const origin = useRef(null);
  const position = useRef(null);
  const tilt = useCardTilt();
  usePageEffects();
  async function openGallery(event) {
  const button = event.currentTarget;
  const frame = button.querySelector('.frame');
  const screenImage = button.querySelector('img');

  if (!frame || !screenImage) return;

  const rect = frame.getBoundingClientRect();

  origin.current = button;
  position.current = { left: window.scrollX, top: window.scrollY };

  setImage({
    src: screenImage.currentSrc || screenImage.src,
    title: button.dataset.title || screenImage.alt,
    from: {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
    },
  });
}
  function closeGallery() {
    setImage(null);
    origin.current?.focus({ preventScroll: true });
    if (position.current) window.scrollTo({ ...position.current, behavior: 'instant' });
  }
  return <>
    <Header />
    <main>
      <Hero />
      <div className="ribbon" aria-hidden="true">DESCOBRIR <span>✦</span> EXPLORAR <span>✦</span> FAVORITAR <span>✦</span>
            SE APAIXONAR <span>✦</span> DESCOBRIR <span>✦</span> EXPLORAR</div>
      <Features tilt={tilt} />
      <Showcase onOpen={openGallery} />
      <Steps />
      <Faq />
      <CallToAction />
    </main>
    <Footer />
    <Gallery image={image} onClose={closeGallery} />
  </>;
}
