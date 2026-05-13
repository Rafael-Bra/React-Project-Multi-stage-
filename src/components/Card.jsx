import './Card.css'

function Card({ titulo, descricao }) {
  return (
    <div className="card">
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
    </div>
  )
}

export default Card
