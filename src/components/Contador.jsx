import { useState } from 'react'
import './Contador.css'

function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <div className="contador">
      <span className="contador-valor">{valor}</span>
      <div className="contador-botoes">
        <button onClick={() => setValor(v => v - 1)}>−</button>
        <button className="btn-reset" onClick={() => setValor(0)}>Resetar</button>
        <button onClick={() => setValor(v => v + 1)}>+</button>
      </div>
    </div>
  )
}

export default Contador
