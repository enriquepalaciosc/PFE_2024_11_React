import { useState } from 'react'
// automaticamente se considera "node_modules" como raíz
import 'bootstrap/dist/css/bootstrap.min.css'
import './fragments/InformacionCalamaFragment'
import InformacionCalamaFragment from "./fragments/InformacionCalamaFragment";

function App() {
    // let platoFavorito = "Lasaña"
    const [platoFavorito, setPlatoFavorito] = useState('Lasaña')
    const [color, setColor] = useState('Perú') // Estado de ejemplo, inicializado con perú

//  const [count, setCount] = useState(0)
  // function handleClick() { } // se reemplaza acá dentro por funciones flechas
  const handleClick = () => {
     // platoFavorito = 'Cazuela' // no se pueden cambiar estados así
     // se hacen de esta forma:
     setPlatoFavorito('Cazuela')
  }

  return (
    <>
        {/* a través de estos paréntesis se pueden incluir: expresiones, estados y otros */}
        {2*2}<br />
        {platoFavorito} <br />
        <hr />
        <button className="btn btn-primary"  type="button" onClick={handleClick}>
            Presiona para cambiar Lasaña por Cazuela
        </button>
        <hr className="mb-4" />
        <InformacionCalamaFragment />
    </>
  )
}

export default App
