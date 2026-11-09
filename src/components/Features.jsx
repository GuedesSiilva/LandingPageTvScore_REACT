
export default function Features({ tilt }) {
  return (
<section className="wrap features" id="recursos">
            <div className="heading">
                <div>
                    <div className="eyebrow">UM APP. MUITAS POSSIBILIDADES.</div>
                    <h2>Escolher o que ver<br />também pode ser <em>bom.</em></h2>
                </div>
                <p>Da primeira curiosidade à sua lista de favoritos, o TvScore acompanha suas descobertas.</p>
            </div>
            <div className="cards">
                <article onPointerEnter={tilt.enter} onPointerMove={tilt.move} onPointerLeave={tilt.reset} onPointerCancel={tilt.reset}>
                    <div className="icon">✦ <small>01</small></div>
                    <h3>Saia do óbvio.</h3>
                    <p>Encontre filmes em destaque e explore histórias que merecem a sua atenção.</p>
                    <div className="card-foot">Novas descobertas <span>↗</span></div>
                </article>
                <article onPointerEnter={tilt.enter} onPointerMove={tilt.move} onPointerLeave={tilt.reset} onPointerCancel={tilt.reset}>
                    <div className="icon gold">★ <small>02</small></div>
                    <h3>Escolha com contexto.</h3>
                    <p>Confira notas, gêneros e sinopses para encontrar a história que combina com seu momento.</p>
                    <div className="card-foot">Cada detalhe conta <span>↗</span></div>
                </article>
                <article onPointerEnter={tilt.enter} onPointerMove={tilt.move} onPointerLeave={tilt.reset} onPointerCancel={tilt.reset}>
                    <div className="icon">♡ <small>03</small></div>
                    <h3>Guarde a vontade.</h3>
                    <p>Reúna seus títulos favoritos para lembrar das histórias que despertaram seu interesse.</p>
                    <div className="card-foot">Sua seleção pessoal <span>↗</span></div>
                </article>
            </div>
        </section>
  );
}
