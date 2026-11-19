import FaqItem from './FaqItem.jsx';

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
                    <p>O link oficial de download será disponibilizado aqui em breve. Enquanto isso, conheça as telas e
                        os recursos do aplicativo.</p>
                </FaqItem>
            </div>
        </section>
  );
}
