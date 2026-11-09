
export default function Header() {
  return (
<header><a className="brand" href="#inicio"><img src="./assets/logo transparente.png"
                alt="" /><span>TV<b>Score</b></span></a>
        <nav aria-label="Menu principal"><a href="#recursos">Recursos</a><a href="#app">O aplicativo</a><a
                href="#como">Como funciona</a><a href="#duvidas">Dúvidas</a></nav>
        <a className="download-button" href="#acesso">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
            </svg>

            Conhecer o TvScore
        </a>
    </header>
  );
}
