import { useState } from 'react'
import Card from './components/Card.jsx'
import Contador from './components/Contador.jsx'
import './App.css'

const conceitos = [
  {
    titulo: 'Componente',
    descricao: 'Bloco reutilizável de interface. Recebe dados via props e decide o que renderizar.',
  },
  {
    titulo: 'Estado (State)',
    descricao: 'Dados internos do componente. Quando o estado muda, o componente re-renderiza.',
  },
  {
    titulo: 'Props',
    descricao: 'Parâmetros passados de um componente pai para um filho. São somente leitura.',
  },
]

function App() {
  const [tema, setTema] = useState('claro')

  const alternarTema = () => setTema(t => (t === 'claro' ? 'escuro' : 'claro'))

  return (
    <div className={`app tema-${tema}`}>
      <header className="header">
        <div className="header-titulo">
          <span className="logo">🐳</span>
          <h1>Simple React App</h1>
        </div>
        <button className="btn-tema" onClick={alternarTema}>
          {tema === 'claro' ? '🌙 Escuro' : '☀️ Claro'}
        </button>
      </header>

      <main className="main">
        <section className="secao">
          <h2>Componente com Estado</h2>
          <p className="descricao-secao">
            O componente abaixo usa <code>useState</code> para guardar um valor e atualizar a tela quando ele muda.
          </p>
          <Contador />
        </section>

        <section className="secao">
          <h2>Componente com Props</h2>
          <p className="descricao-secao">
            Cada card abaixo é o mesmo componente <code>Card</code>, renderizado com props diferentes.
          </p>
          <div className="grid">
            {conceitos.map(c => (
              <Card key={c.titulo} titulo={c.titulo} descricao={c.descricao} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        Construído com React + Vite · Servido por Nginx em Docker
      </footer>
    </div>
  )
}

export default App
