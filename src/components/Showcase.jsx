import PhoneFrame from './PhoneFrame.jsx';

export default function Showcase({ onOpen }) {
  return (
<section className="showcase" id="app">
            <div className="wrap">
                <div className="heading">
                    <div>
                        <div className="eyebrow">PRAZER, TVSCORE.</div>
                        <h2>Bonito de olhar.<br />Simples de <em>explorar.</em></h2>
                    </div>
                    <p>Uma interface que deixa as histórias no centro de tudo. Conheça o app por dentro.</p>
                </div>
                <div className="screens"><button className="screen" data-title="Seu ponto de partida" onClick={onOpen}>
                        <PhoneFrame className="frame"><img src="./assets/login.png" alt="Tela de acesso do TvScore"
                                loading="lazy" /><span>↗</span></PhoneFrame>
                        <div className="screen-label"><small>01</small>
                            <h3>Seu ponto de partida</h3>
                            <p>Entre no seu universo.</p>
                        </div>
                    </button><button className="screen elevated" data-title="Uma descoberta a cada visita" onClick={onOpen}>
                        <PhoneFrame className="frame"><img src="./assets/home.png" alt="Destaques e filmes mais bem avaliados"
                                loading="lazy" /><span>↗</span></PhoneFrame>
                        <div className="screen-label"><small>02</small>
                            <h3>Uma descoberta a cada visita</h3>
                            <p>Destaques que chamam sua atenção.</p>
                        </div>
                    </button><button className="screen" data-title="Os detalhes fazem a diferença" onClick={onOpen}>
                        <PhoneFrame className="frame"><img src="./assets/details.png"
                                alt="Página de filme com nota, gênero e sinopse" loading="lazy" /><span>↗</span></PhoneFrame>
                        <div className="screen-label"><small>03</small>
                            <h3>Os detalhes fazem a diferença</h3>
                            <p>Conheça antes de escolher.</p>
                        </div>
                    </button></div>
                <p className="gallery-note">Clique em uma tela para ver de perto ↗</p>
            </div>
        </section>
  );
}
