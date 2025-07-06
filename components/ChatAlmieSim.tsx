'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Send, X } from 'lucide-react'
import { KB } from './kb-almaia'

type Msg = { role: 'user' | 'almie'; content: string }

/* ---------------- MINI-MEMORIA ---------------- */
let lastTopic: Context | null = null           // recuerda la última intención
type Context =
  | 'saludo'
  | 'intro'
  | 'diario'
  | 'alertas'
  | 'familia'
  | 'acceso'
  | 'precio'
  | 'sos'
    | 'contratacion'


/* --------------- RESPUESTAS ------------------- */
function getResponse(text: string): string {
  const p = text.trim().toLowerCase();

  const has = (...words: string[]) => words.some((w) => p.includes(w));

    // Small-talk
  if (has("hola")) {
    lastTopic = "saludo";
    return "¡Hola! Soy Almie, tu guía emocional.";
  }

  if (has("cómo estás")) {
    lastTopic = "saludo";
    return "¡Estoy bien, gracias! Listo para ayudarte.";
  }

  // Intención: contratar
  if (has("colegio", "contratar", "licencia", "probar")) {
    lastTopic = "contratacion";
    return "Pueden contratar AlmaIA colegios, fundaciones, municipios y SLEP. ¿Quieres saber cómo iniciar?";
  }

  if (has("cómo lo hago", "como lo hago", "como puedo")) {
    if (lastTopic === "contratacion") {
      return "Para comenzar con AlmaIA, contáctanos a contacto@almaia.cl, definimos el alcance y coordinamos la capacitación.";
    }
  }

  // Si nada coincide pero existe lastTopic, refina
  if (has("dime más", "cuéntame más", "mas", "más")) {
    switch (lastTopic) {
      case "contratacion":
        return "Te puedo explicar más sobre los planes, los beneficios o la instalación de AlmaIA. ¿Cuál te interesa?";
      case "saludo":
        return "¿Quieres que te cuente cómo funciona el diario emocional o el botón SOS?";
      default:
        return "¿Podrías aclarar a qué te refieres? Estoy para apoyarte.";
    }
  }


  // 1. Buscar primero en la KB
  const node = KB.find((n) =>
  n.key.some((k) => p.includes(k) || k.includes(p))
);
  if (node) {
    // opcional: actualizar memoria contextual
    if (node.key.includes('diario emocional')) lastTopic = 'diario';
    // aquí podrías mapear otras categorías
    return node.answer;
  }

  // 2. Small-talk y cortesías
  if (has('gracias', 'thank')) {
    lastTopic = 'saludo';
    return '¡Con gusto! 💜 ¿Hay algo más en lo que pueda ayudarte?';
  }
  if (has('hola', 'buenas', 'hey')) {
    lastTopic = 'saludo';
    return '¡Hola! 😊 Soy Almie. Puedo contarte sobre el diario, las alertas, los planes o el botón SOS.';
  }
  if (has('cómo estás', 'como estas', 'qué tal', 'que tal')) {
    return '¡Muy bien, gracias por preguntar! Listo para ayudarte. ✨';
  }

  // 3. Temas principales
  if (has('qué hacen', 'que hacen', 'qué hace', 'que es', 'objetivo')) {
    lastTopic = 'intro';
    return 'Alma IA es una plataforma chilena que ayuda a niños y colegios a gestionar las emociones mediante un diario interactivo, alertas para docentes y reportes para la familia.';
  }
  if (has('diario', 'emocion', 'escribir', 'journaling')) {
    lastTopic = 'diario';
    return '📝 *Diario emocional*: cada estudiante registra cómo se siente con emojis y notas. El maestro ve un resumen (no el texto) y detecta cambios bruscos.';
  }
  if (has('alerta', 'docente', 'profesor', 'profe', 'panel')) {
    lastTopic = 'alertas';
    return '📊 *Alertas docentes*: los profesores reciben gráficas semanales y notificaciones si alguien muestra un cambio drástico de ánimo.';
  }
  if (has('padre', 'madre', 'familia', 'papá', 'mamá')) {
    lastTopic = 'familia';
    return '🫂 *Modulo familia*: los responsables reciben reportes mensuales y consejos prácticos para fortalecer el bienestar en casa.';
  }
  if (has('acceso', 'ingresar', 'licencia', 'demo', 'probar', 'registrar')) {
    lastTopic = 'acceso';
    return '🚀 Trabajamos con licencias escolares. Si tu colegio desea probar Alma IA, escríbenos a *almora@almaia.cl* y coordinamos una demo.';
  }
  if (has('precio', 'costo', 'valor', 'plan')) {
    lastTopic = 'precio';
    return '💰 El coste depende del número de estudiantes. Incluye soporte, capacitaciones y actualizaciones. Solicita tu cotización por correo.';
  }
  if (has('sos', 'denuncia', 'ayuda', 'emergencia', 'seguridad')) {
    lastTopic = 'sos';
    return '🚨 El botón SOS conecta al estudiante con un adulto de confianza del colegio para ayuda urgente. También registra la incidencia en el panel del docente.';
  }

  // 4. Seguimiento
  if (has('sí', 'si', 'ok', 'vale', 'claro', 'entiendo', 'interesante', 'cuéntame', 'cuentame', 'más')) {
    switch (lastTopic) {
      case 'intro':
        return 'Podemos profundizar en:\n• Diario emocional\n• Alertas docentes\n• Módulo familia\n¿Cuál te interesa?';
      case 'diario':
        return 'El diario usa emojis, colores y texto libre. Sólo el estudiante y su profesor pueden verlo.';
      case 'alertas':
        return 'Las alertas se basan en variaciones de ánimo; el docente decide cómo intervenir.';
      case 'familia':
        return 'Los padres reciben un informe mensual y tips para conversaciones empáticas.';
      case 'precio':
        return 'Ejemplo: para 300 estudiantes, el plan anual cuesta ~X USD. Escríbenos para una oferta exacta.';
      case 'acceso':
        return 'Basta que tu colegio firme un acuerdo y definamos la fecha de capacitación.';
      default:
        return 'Genial. ¿Te interesan el diario, las alertas o los planes de licencia?';
    }
  }

    // 5. fallback inteligente
  if (!node) {
    // armar lista dinámica de temas del KB
   const temasDisponibles = [
  ...new Set(KB.map((n) => n.key[0]))
]
.slice(0,5)
.join(', ')

const fallbackOptions = [
  '🤖 No estoy seguro de haberte comprendido. ¿Te refieres a AlmaIA, sus planes, o el botón SOS?',
  '🙈 Ups, creo que me perdí. ¿Quieres detalles sobre diario emocional, alertas o cómo agendar una demo?',
  '💙 No entendí completamente, pero puedo hablar de beneficios para docentes, estudiantes o familias. ¿Qué te interesa?',
  '🤔 Podrías explicarme un poco más, por favor? Así puedo orientarte mejor.'
];
   return fallbackOptions[Math.floor(Math.random() * fallbackOptions.length)];

  }
return (
  "🤗 Gracias por tu pregunta, aunque no estoy 100% seguro de haberla comprendido por completo. " +
  "AlmaIA busca fortalecer la salud mental escolar a través de registro emocional diario, botón SOS, " +
  "alertas tempranas y reportes para familias y docentes. ¿Te gustaría conocer más sobre alguno de estos temas?"
);
}


export default function ChatAlmieSim() {
  /* estado */
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  /* autoscroll */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999 })
  }, [messages])

  /* enviar */
// Sustituye el bloque send() en ChatAlmieSim.tsx
const send = () => {
  if (!input.trim()) return
  const next = [
    ...messages,
    { role: 'user' as const, content: input.trim() }   // 👈 as const
  ]
  setMessages([
    ...next,
    { role: 'almie' as const, content: getResponse(input) } // 👈 as const
  ])
  setInput('')
}


  /* ------------ UI ------------- */
  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {/* BOTÓN FLOTANTE */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
          aria-label="Abrir chat de Almie"
        >
          <Image
            src="/ninos/chat.svg"
            alt="Chat Almie"
            width={32}
            height={32}
            className="invert brightness-0"
          />
        </button>
      )}

      {/* VENTANA DE CHAT */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border">
          {/* header */}
          <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
            <span className="font-bold">Almie IA</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="hover:opacity-80"
            >
              <X size={20} />
            </button>
          </div>

          {/* mensajes */}
          <div
            ref={scrollRef}
            className="flex-1 p-3 overflow-y-auto space-y-2 text-sm"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] rounded-xl p-2 ${
                  m.role === 'user'
                    ? 'bg-blue-100 self-end ml-auto'
                    : 'bg-gray-100 self-start'
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          {/* input */}
          <div className="flex p-2 gap-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none"
              placeholder="Escribe tu mensaje…"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg disabled:opacity-50"
              aria-label="Enviar"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
