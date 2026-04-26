"use client"

import { useState } from "react"
import Image from "next/image"
import Banana from "@/public/banana.png"

type Ponto = {
  id: number
  x: number
  y: number
}

export default function Home() {
  const [pontos, setPontos] = useState<Ponto[]>([])
  const [clicado, setClicado] = useState(false)

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    e.preventDefault()

    setClicado(true)
    setTimeout(() => setClicado(false), 80)

    const novo: Ponto = {
      id: Date.now(),
      x: e.clientX + 20,
      y: e.clientY,
    }

    setPontos((prev) => [...prev, novo])

    setTimeout(() => {
      setPontos((prev) => prev.filter((p) => p.id !== novo.id))
    }, 200)
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-amber-300">
      <div className="relative">
        <div className="absolute m-auto w-100 h-80 inset-0 bg-white blur-3xl rounded-full opacity-30 animate-spin brightness-200" />

        <Image
          src={Banana}
          alt="imagem de uma banana"
          onClick={handleClick}
          onDragStart={(e) => e.preventDefault()}
          draggable={false}
          priority
          className={`${
            clicado
              ? "scale-95 duration-75"
              : "scale-100 hover:scale-110 duration-300 ease-in-out"
          } w-100 h-auto cursor-pointer relative z-10 brightness-110 select-none`}
        />
      </div>

      {pontos.map((p) => (
        <span
          key={p.id}
          className="fixed pointer-events-none text-white font-bold animate-ping z-20 select-none"
          style={{ left: p.x, top: p.y }}
        >
          +1
        </span>
      ))}
    </div>
  )
}