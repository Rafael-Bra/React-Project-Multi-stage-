# Simple React

Projeto de modelo utilizado na **Aula 03 — Docker, Dockerfile e Build Multistage** da disciplina de IoT, Cloud e Segurança.

## O que é este projeto?

Uma aplicação React simples construída com **Vite**, pensada para ser o ponto de partida da atividade prática de containerização. Os alunos recebem este código pronto e criam o `Dockerfile` do zero durante a aula.

## O que o app faz?

- **Contador interativo** — demonstra o hook `useState` do React.
- **Cards com props** — demonstra como criar componentes reutilizáveis que recebem dados via props.
- **Alternância de tema** — claro/escuro, mostrando como o estado pode afetar toda a interface.

## Estrutura

```
simple-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Card.jsx
        ├── Card.css
        ├── Contador.jsx
        └── Contador.css
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Como containerizar (atividade da aula)

O objetivo da aula é criar um `Dockerfile` de build multistage que:

1. Use `node:18-alpine` para instalar as dependências e compilar o projeto (`npm run build`).
2. Use `nginx:alpine` para servir os arquivos estáticos gerados em `dist/`.

```bash
docker build -t simple-react .
docker run -d -p 3000:80 simple-react
```
