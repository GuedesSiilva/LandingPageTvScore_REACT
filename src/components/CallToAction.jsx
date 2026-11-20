import { APP_DOWNLOAD_URL } from '../config.js';

export default function CallToAction() {
  return (
<section className="wrap" id="acesso">
            <div className="cta"><span className="star" aria-hidden="true">✧</span>
                <div className="eyebrow">SUA PRÓXIMA GRANDE HISTÓRIA.</div>
                <h2>Seu próximo favorito está no <em>TvScore.</em></h2>
                <p>Baixe o TvScore para Android e explore suas próximas histórias.</p>
                <div className="access-actions">
                    <a className="button" href={APP_DOWNLOAD_URL}>Baixar para Android <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </section>
  );
}
