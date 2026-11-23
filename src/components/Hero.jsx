import PhoneFrame from './PhoneFrame.jsx';
import { APP_WEB_URL } from '../config.js';

export default function Hero() {
    return (
        <section className="hero wrap" id="inicio">
            <div className="copy">
                <div className="eyebrow">● &nbsp; PARA QUEM AMA UMA BOA HISTÓRIA</div>
                <h1>Seu próximo<br />filme favorito<br />começa <em>aqui.</em></h1>
                <p className="lead">Menos tempo escolhendo.<br />Mais histórias que ficam com você.</p>
                <p className="description">Explore destaques, confira avaliações e guarde os filmes que você quer conhecer.
                    Tudo no seu TvScore.</p>
                <div className="actions"><a className="button" href="#acesso">
                    Ver disponibilidade <span aria-hidden="true">↗</span>
                </a><a
                    className="text-link" href={APP_WEB_URL} target="_blank" rel="noopener noreferrer">▷ &nbsp; Utilizar na Web</a></div>
                <div className="note"><span>✦</span> Um novo olhar para o seu universo de filmes.</div>
            </div>
            <div className="hero-art">
                <div className="orbit"></div>
                <PhoneFrame className="phone back"><img src="./assets/details.png" alt="Tela de detalhes de Naruto no TvScore" /></PhoneFrame>
                <PhoneFrame className="phone front"><img src="./assets/home.png"
                    alt="Tela inicial do TvScore com recomendações de filmes e séries" /></PhoneFrame>
                <div className="floating rating"><span>★</span>
                    <div>Boas histórias.<small>Grandes descobertas.</small></div>
                </div>
                <div className="floating favorite"><span>♡</span> Seu próximo favorito</div>
                <div className="caption">01 — 03 &nbsp; &nbsp; &nbsp; UM UNIVERSO PARA EXPLORAR</div>
            </div>
        </section>
    );
}
