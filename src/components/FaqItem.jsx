import { useId, useState } from 'react';

export default function FaqItem({ question, initiallyOpen = false, children }) {
  const answerId = useId();
  const [expanded, setExpanded] = useState(initiallyOpen);

  return (
    <div className="faq-item">
      <button className="faq-question" type="button" aria-expanded={expanded} aria-controls={answerId}
        onClick={() => setExpanded((previous) => !previous)}>
        {question}<span aria-hidden="true">+</span>
      </button>
      <div className="faq-answer" id={answerId} hidden={!expanded}>
        {children}
      </div>
    </div>
  );
}
