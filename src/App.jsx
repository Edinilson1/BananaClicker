import { useState } from 'react'
import './App.css'
import Banana from './assets/banana site.png'

function App() {


  const [pontos, setPontos] = useState([])
    const [clicado, setClicado] = useState(false)

 function handleClick(e) {
  e.preventDefault()

  // animação
  setClicado(true)
  setTimeout(() => setClicado(false), 80)

  // +1
  const novo = {
    id: Date.now(),
    x: e.clientX + 20,
    y: e.clientY
  }

  setPontos(prev => [...prev, novo])

  setTimeout(() => {
    setPontos(prev => prev.filter(p => p.id !== novo.id))
  }, 200)
}


  return (



    <div className='w-screen h-screen flex items-center justify-center bg-amber-300'>

      <div  className="relative ">
        <div  className="absolute m-auto w-100 h-80 inset-0 bg-white blur-3xl rounded-full opacity-30 animate-spin brightness-200"></div>
        <img   
        onDragStart={(e) => e.preventDefault()} src={Banana} draggable="false" alt="imagem de uma banana" onClick={handleClick} 
        className={`${clicado ? "scale-95 duration-80" : "scale-100 hover:scale-110 duration-400 ease"}  w-100 h-auto cursor-pointer  relative z-10 brightness-110 select-none` }/> 

        </div>

      {pontos.map(p => (
        <span
          key={p.id}
          className= "fixed pointer-events-none text-white font-bold animate-ping  cursor-pointer z-20 select-none  "
          style={{ left: p.x, top: p.y }}
        >
          +1
        </span>
      ))}


    </div>


  )
}

export default App
