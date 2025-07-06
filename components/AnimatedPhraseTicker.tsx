'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* 🎈 Frases inspiradoras de Almie (versión Chile 2025) */
const PHRASES = [
  '🌈 ¡Cada emoción es válida, dale su espacio!',
  '🎉 Hoy es un buen día para aprender algo nuevo.',
  '😄 Tu sonrisa puede iluminar todo el colegio.',
  '📔 Escribe tus sueños, mañana serán tu mapa.',
  '🫂 Pedir ayuda demuestra tu fortaleza, no tu debilidad.',
  '🪁 Respira profundo… como brisa en Valparaíso.',
  '🧩 Si algo no encaja, gira la pieza: ¡insiste!',
  '⚽ Un «gol» comienza con un buen pase: colabora.',
  '🚀 Las ideas grandes caben en cuadernos pequeños.',
  '🥟 Comparte tus “empanadas” de alegría con tus amigos.',
  '🗻 Eres tan grande como los Andes; ¡no lo olvides!',
  '🔍 Pregunta, explora, equivócate… y vuelve a intentar.',
  '🍓 Cuida tu mente como a las frutillas de la once.',
  '🐧 Paso a paso, como pingüino en la Antártica.',
  '🏆 Tu esfuerzo de hoy será tu medalla de mañana.',
  '💌 Envía un mensaje amable, tal vez cambies un día.',
  '🎨 Pinta tu mundo con los colores que más te gusten.',
  '💡 Una idea brillante nace después de muchas dudas.',
  '🤸‍♀️ Muévete, respira, ¡tu cuerpo también habla!',
  '🔔 Cuando suene el timbre, lleva contigo la alegría.',
  '🌟 Brilla tanto que inspires a quien esté a tu lado.',
  '📚 Cada página que lees abre una ventana nueva.',
  '🛡️ La amabilidad es tu mejor superpoder.',
  '💜 Recuerda: tú importas, tus emociones también.',
]

export default function AnimatedPhraseTicker() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  /* ✔️ Para que nunca repita la misma al azar al refrescar */
  const ordered = useMemo(() => {
    const start = Math.floor(Math.random() * PHRASES.length)
    return [...PHRASES.slice(start), ...PHRASES.slice(0, start)]
  }, [])

  /* Ciclo automático cada 8 s, salvo que el usuario lo pause */
  useEffect(() => {
    if (paused) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % ordered.length),
      8000,
    )
    return () => clearInterval(id)
  }, [paused, ordered.length])

  const phrase = ordered[index]

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center select-none pointer-events-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ pointerEvents: 'auto' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={phrase}
          initial={{ y: '120%', scale: 0.6, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: '-120%', scale: 0.4, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="relative mb-6 sm:mb-10 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-xl shadow-blue-800/20 text-sm sm:text-base max-w-xs sm:max-w-md text-center"
        >
          {/* “Cola” de globo */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1.5 w-3 h-3 rotate-45 bg-blue-500" />
          {phrase}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
