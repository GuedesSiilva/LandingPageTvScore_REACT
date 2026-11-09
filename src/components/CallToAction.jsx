import { useState } from 'react';

export default function CallToAction() {
  const [requested, setRequested] = useState(false);
  return (
<section className="wrap" id="acesso">
            <div className="cta"><span className="star" aria-hidden="true">✧</span>
                <div className="eyebrow">SUA PRÓXIMA GRANDE HISTÓRIA.</div>
                <h2>Tem um mundo de filmes<br />esperando por <em>você.</em></h2>
                <p>Descubra. Escolha. Favorite. Do seu jeito, no TvScore.</p><button className="button"
                    id="availability" onClick={() => setRequested(true)}>Quero conhecer o TvScore <span>↗</span></button>
                <p className="status" id="availability-status" role="status">{requested ? 'O link oficial de download estará disponível aqui em breve.' : 'Link de download em breve.'}</p>
            </div>
        </section>
  );
}
