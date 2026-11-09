# TvScore — React + Vite

Landing page convertida para React, preservando textos, imagens, estilos responsivos e interações do original.

## Executar

Requer Node.js 20.19+ ou 22.12+ (recomendado: versão LTS atual).

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal.

## Build e prévia

```bash
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em uma hospedagem estática. O build usa caminhos relativos.

## Estrutura

- `src/components/`: cabeçalho, seções, rodapé, galeria e FAQ.
- `src/App.jsx`: composição da página e estado da galeria.
- `src/effects.js`: hooks de inclinação dos cards, revelação e retorno ao início ao recarregar.
- `src/styles.css`: CSS original.
- `public/assets/`: imagens originais.

Edite os textos nos componentes e as cores em `src/styles.css`. As fontes são carregadas pelo Google Fonts, com fontes alternativas em caso de indisponibilidade.

A galeria abre por clique e fecha pelo botão, pelo fundo ou pela tecla Esc. O FAQ mantém a animação de expansão. Os efeitos de JavaScript respeitam a preferência de movimento reduzido.

O link oficial do aplicativo ainda não foi fornecido; o botão mantém a mensagem de disponibilidade futura. Esta é a landing page de apresentação: as telas do app são imagens.
