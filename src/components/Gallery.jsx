import { useLayoutEffect, useRef } from 'react';
import PhoneFrame from './PhoneFrame.jsx';

export default function Gallery({ image, onClose, returnFocusRef }) {
  const dialogRef = useRef(null);
  const stageRef = useRef(null);

  function closeGallery() {
    dialogRef.current?.close();
    onClose();
    returnFocusRef.current?.focus({ preventScroll: true });
  }

  useLayoutEffect(() => {
    const dialog = dialogRef.current;

    if (!image) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();

    const phone = stageRef.current?.querySelector('.gallery-phone');
    if (!phone?.animate || !image.from) return;

    const target = phone.getBoundingClientRect();
    const x = image.from.x - (target.left + target.width / 2);
    const y = image.from.y - (target.top + target.height / 2);
    const scale = image.from.width / target.width;

    const flight = phone.animate(
      [
        {
          transform: `translate3d(${x}px, ${y}px, 0)
            perspective(1000px) scale(${scale}) rotateY(0deg)`,
        },
        {
          transform: `translate3d(0, 0, 0)
            perspective(1000px) scale(1) rotateY(360deg)`,
        },
      ],
      {
        duration: 850,
        easing: 'cubic-bezier(0.22, 0.75, 0.25, 1)',
      },
    );

    return () => flight.cancel();
  }, [image]);

  return (
    <dialog
      id="gallery"
      ref={dialogRef}
      aria-label={image?.title || 'Galeria do TvScore'}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeGallery();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        closeGallery();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeGallery();
      }}
    >
      {image && (
        <div className="gallery-stage" ref={stageRef}>
          <button
            type="button"
            className="close"
            aria-label="Fechar imagem"
            onClick={closeGallery}
          >
            ×
          </button>

          <PhoneFrame className="gallery-phone">
            <img src={image.src} alt={image.title} />
          </PhoneFrame>

          <p>{image.title}</p>
        </div>
      )}
    </dialog>
  );
}