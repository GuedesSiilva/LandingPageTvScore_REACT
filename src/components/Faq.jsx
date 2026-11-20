import FaqItem from './FaqItem.jsx';
import { APP_DOWNLOAD_URL, APP_WEB_URL } from '../config.js';

export default function Faq() {
  return (
<section className="wrap faq" id="duvidas">
            <div>
                <div className="eyebrow">ANTES DE COMEÇAR.</div>
                <h2>Ficou com<br />alguma <em>dúvida?</em></h2>
            </div>
            <div className="faq-list">
                <FaqItem question="O que é o TvScore?" initiallyOpen>
                    <p>É um aplicativo para descobrir filmes, consultar avaliações e sinopses e reunir seus favoritos em
                        um só lugar.</p>
                </FaqItem>
                <FaqItem question="O que encontro na tela inicial?">
                    <p>Explore filmes em destaque e títulos mais bem avaliados. Cada filme traz informações para ajudar
                        na sua escolha.</p>
                </FaqItem>
                <FaqItem question="Posso salvar meus filmes favoritos?">
                    <p>Sim. O TvScore tem uma área de favoritos para reunir os títulos que você quer guardar.</p>
                </FaqItem>
                <FaqItem question="Como faço para baixar?">
                    <p>Você pode <a href={APP_DOWNLOAD_URL}>baixar o APK para Android</a> pelos botões deste site.
                        Se preferir, <a href={APP_WEB_URL} target="_blank" rel="noopener noreferrer">utilize o TvScore na Web</a>, diretamente pelo navegador.</p>
                </FaqItem>
            </div>
        </section>
  );
}
