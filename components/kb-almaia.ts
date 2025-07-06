/**  kb-almaia.ts
 *  Mapa de conocimiento para el chat simulado de Almie
 */

export type Node = {
  key: string[]        // palabras o frases disparadoras (en minúsculas)
  answer: string       // respuesta que el bot enviará
}

export const KB: Node[] = [
  /* ---------- INTRO / QUÉ ES ---------- */
  {
    
    key: [
      'qué es', 'que es', 'qué hacen', 'que hacen', 'objetivo', 'introducción',
      'plataforma', 'almaia'
    ],
    answer:
      'AlmaIA es una plataforma chilena creada por psicólogos, docentes y expertos en IA que fortalece el bienestar emocional ' +
      'de estudiantes (6.º básico – 4.º medio). Incluye diario emocional, IA para detectar patrones y un botón SOS para alertas inmediatas.',
  },
    {
    key: ['fundador', 'fundadores', 'alex medel', 'naz herrera', 'cristian rivas'],
    answer:
      'AlmaIA fue fundada por Alex Medel, Naz Herrera y Cristian Rivas, junto a profesionales latinoamericanos especializados en psicología, docencia e IA.',
  },
  {
    key: ['qué es', 'que es', 'qué hacen', 'que hacen', 'plataforma', 'objetivo'],
    answer:
      'AlmaIA es una plataforma chilena que fortalece el bienestar emocional escolar (6.º básico – 4.º medio) mediante IA, diario emocional, botón SOS y reportes automáticos. Próximamente abarcará 1.º – 5.º básico y adaptaciones para neurodivergencias y discapacidades sensoriales o motrices.',
  },

  /* ---------- FUNCIONAMIENTO ---------- */
  {
    key: [
      'cómo funciona', 'funciona', 'registro diario', 'diario emocional',
      'ia', 'patrones', 'botón sos', 'asistente almie', 'reportes automáticos'
    ],
    answer:
      'Así funciona AlmaIA:\n' +
      '• Registro emocional diario de <1 min.\n' +
      '• Botón SOS de contención inmediata.\n' +
      '• IA detecta ansiedad, aislamiento o tristeza.\n' +
      '• Almie envía recordatorios y apoyo.\n' +
      '• Reportes automáticos para estudiantes, docentes y familias.',
  },
    {
    key: ['cómo funciona', 'registro diario', 'diario emocional', 'botón sos', 'asistente almie', 'identifica patrones'],
    answer:
      'Funciona así:\n• Registro emocional diario < 1 min.\n• Botón SOS ante crisis.\n• IA detecta ansiedad, tristeza o aislamiento.\n• Asistente Almie guía y envía recordatorios.\n• Reportes automáticos para estudiantes, docentes, familias y directivos.',
  },

  /* ---------- BENEFICIOS POR PERFIL ---------- */
  {
    key: ['beneficios estudiantes', 'estudiante', 'alumno', 'autonomía emocional'],
    answer:
      'Estudiantes: autonomía emocional, diario Almie interactivo y botón SOS para pedir ayuda al instante.',
  },
  {
    key: ['beneficios docentes', 'docente', 'profesor', 'alertas', 'gráficos'],
    answer:
      'Docentes: alertas tempranas, gráficas semanales de ánimo y 40 % menos carga administrativa por reportes automáticos.',
  },
  {
    key: ['beneficios apoderados', 'padres', 'familia', 'informes mensuales'],
    answer:
      'Apoderados: informes mensuales claros y consejos para acompañar a sus hijos desde casa.',
  },
  {
    key: ['beneficios directivos', 'uatp', 'dashboard', 'planificación'],
    answer:
      'UATP/Directivos: dashboards consolidados que facilitan la planificación y las decisiones basadas en datos emocionales.',
  },
  {
    key: ['beneficios slep', 'municipio', 'servicios locales'],
    answer:
      'Municipios y SLEP: evidencia objetiva para presupuesto, rendición de cuentas y políticas de bienestar estudiantil.',
  },
    {
    key: ['beneficios estudiantes', 'estudiante', 'autonomía emocional'],
    answer:
      'Estudiantes: diario emocional guiado, botón SOS y refuerzo de autonomía y autoexpresión.',
  },
  {
    key: ['beneficios apoderados', 'padres', 'familia', 'reportes mensuales'],
    answer:
      'Apoderados: reportes mensuales con lenguaje didáctico, herramientas psicoeducativas y participación activa en el acompañamiento.',
  },
  {
    key: ['beneficios colegio', 'uatp', 'convivencia escolar', 'dashboard', 'carga administrativa'],
    answer:
      'Colegio/UATP: dashboard con alertas y comparativos, preguntas personalizables, exportación de informes y hasta 60 % menos carga administrativa.',
  },
  {
    key: ['beneficios directivos', 'sostenedor', 'municipio', 'slep'],
    answer:
      'Directivos y SLEP: evidencia objetiva para decisiones, presupuestos y rendición ante sostenedores o comunidad educativa.',
  },

  /* ---------- EVIDENCIA TÉCNICA ---------- */
  {
    key: ['evidencia', 'resultados', '40 %', '48 %', 'unicef', 'oms', 'harvard'],
    answer:
      'Evidencia: -40 % en síntomas depresivos y +48 % en expresión emocional en 1 mes, respaldada por UNICEF, OMS, BID, Harvard, PUC, MIDAP y Fundación CAP.',
  },
    {
    key: ['resultados', 'síntomas depresivos', 'expresión emocional', '40%', '48%'],
    answer:
      'Estudios muestran -40 % en síntomas depresivos y +48 % en expresión emocional tras un mes de uso.',
  },

  /* ---------- CONTRIBUCIÓN A SLEP ---------- */
  {
    key: ['slep', 'ley 21.040', 'seis ejes', 'contribución', 'servicios locales'],
    answer:
      'AlmaIA apoya los 6 ejes SLEP 2024: 1) traspaso y convenios, 2) capacidad operativa, 3) vinculación comunitaria, 4) soporte DEP, 5) coordinación intersectorial y 6) institucionalización con datos objetivos.',
  },

  /* ---------- PREGUNTAS FRECUENTES ---------- */
  {
    key: ['quién puede contratar', 'contratar', 'cliente', 'colegio', 'fundación', 'municipio'],
    answer:
      'Pueden contratar AlmaIA colegios, redes educativas, fundaciones, municipios y SLEP.',
  },
  {
    key: ['qué niveles', 'niveles', 'cursos', '6.º', '4.º medio', '1.º básico'],
    answer:
      'Actualmente cubre de 6.º básico a 4.º medio. Próximamente se integrarán 1.º – 5.º básico y adaptaciones para estudiantes neurodivergentes.',
  },
  {
    key: ['privacidad', 'datos', 'cifrado', 'diagnósticos'],
    answer:
      'Privacidad: datos cifrados, acceso estrictamente controlado y sin diagnósticos automáticos.',
  },
  {
    key: ['qué pasa', 'botón sos', 'sos', 'alerta'],
    answer:
      'Al presionar SOS se activa un protocolo inmediato con el equipo del colegio y se registra la incidencia.',
  },
  {
    key: ['reportes apoderados', 'qué reciben', 'informes padres'],
    answer:
      'Los apoderados reciben informes mensuales y, si el estudiante se retira, pueden descargar un histórico.',
  },
  {
    key: ['cobertura', '100 %', '12 % manual'],
    answer:
      'AlmaIA abarca el 100 % del alumnado objetivo, superando el 12 % promedio de métodos manuales.',
  },
  {
    key: ['adaptaciones', 'inclusiva', 'discapacidad', 'neurodivergente'],
    answer:
      'Próximas versiones incluirán interfaz inclusiva para discapacidades visuales, auditivas, motoras y estudiantes neurodivergentes.',
  },
  {
    key: ['costo', 'precio', 'valor', 'hamburguesa'],
    answer:
      'El costo es menor que una hamburguesa doble queso por estudiante al mes y cubre soporte y actualizaciones.',
  },
  {
    key: ['ejemplos de reportes', 'dashboards'],
    answer:
      'Sí, ofrecemos dashboards por curso, comparativos emocionales e informes descargables en PDF.',
  },
  {
    key: ['piloto', 'demo', 'cómo iniciar'],
    answer:
      'Para iniciar un piloto: contacto, carga de datos, formación inicial, monitoreo y evaluación conjunta en 30 días.',
  },
    {
    key: ['quién usa', 'quién puede', 'usuarios', 'colegios', 'fundaciones'],
    answer:
      'Pueden usar AlmaIA estudiantes, apoderados, docentes, psicólogos escolares, directivos, fundaciones, municipios y SLEP.',
  },
  {
    key: ['botón sos', 'qué es sos', 'alerta inmediata'],
    answer:
      'El botón SOS permite al estudiante pedir ayuda inmediata; genera una alerta al equipo escolar según su protocolo.',
  },
  {
    key: ['privacidad', 'cifrado', 'datos privados', 'diagnóstico'],
    answer:
      'Privacidad garantizada: datos cifrados, acceso solo a roles autorizados y sin diagnósticos automáticos ni etiquetas al estudiante.',
  },
  {
    key: ['costo', 'precio', '1 uf', 'hamburguesa'],
    answer:
      'El costo estándar parte en 1 UF anual por estudiante (≈ una hamburguesa doble queso al mes). Se ofrece piloto sin costo.',
  },
  {
    key: ['internet', 'conexión', 'offline'],
    answer:
      'Requiere conexión regular, pero los registros pueden realizarse con acceso intermitente; se sincronizan al restablecer la red.',
  },
  {
    key: ['no quiere usar', 'mi hijo no quiere', 'rechazo'],
    answer:
      'Se recomienda validar sus emociones, acompañar el proceso gradualmente y coordinar con el colegio estrategias de motivación.',
  },
  {
    key: ['reemplaza psicólogo', 'sustituye psicologo', 'terapia'],
    answer:
      'No sustituye al psicólogo clínico; AlmaIA es una herramienta complementaria para la gestión emocional escolar.',
  },
  {
    key: ['informes', 'reportes', 'dashboard'],
    answer:
      'Entregamos informes mensuales por estudiante, curso y establecimiento, además de dashboards comparativos y descargables.',
  },
  {
    key: ['diferencia', 'otros sistemas', 'competencia'],
    answer:
      'AlmaIA detecta emociones a diario de forma automatizada con alertas inmediatas y sin sobrecargar al personal educativo.',
  },
  {
    key: ['emociones graves', 'riesgo', 'crisis'],
    answer:
      'Ante emociones graves se genera una alerta inmediata que el equipo escolar gestiona según su protocolo interno.',
  },
  {
    key: ['personalizar preguntas', 'importar excel'],
    answer:
      'Sí, el colegio puede personalizar preguntas y cargarlas desde Excel.',
  },
  {
    key: ['respaldo', 'científico', 'unicef', 'oms', 'harvard', 'minsap', 'midap', 'puc'],
    answer:
      'Respaldo de UNICEF, OMS, MINSAL, BID y Harvard. Resultados validados por MIDAP y la Pontificia Universidad Católica.',
  },
  {
    key: ['acceso apoderados', 'invitación', 'correo'],
    answer:
      'Los apoderados reciben un correo con instrucciones y pueden instalar la app en sus dispositivos.',
  },
  {
    key: ['piloto', 'demo', 'cómo comienza', 'fase piloto'],
    answer:
      'Piloto en 5 pasos: 1) contacto formal, 2) carga de datos, 3) capacitación, 4) monitoreo, 5) evaluación para decidir continuidad.',
  },
    {
    key: ['quién puede contratar', 'contratar almaia', 'alumno individual'],
    answer:
      'Hoy pueden contratar AlmaIA colegios, redes, fundaciones, municipios y SLEP. La contratación por alumno estará disponible en una versión futura.',
  },
  {
    key: ['niveles', '1.º básico', '5.º básico', '6.º', '4.º medio'],
    answer:
      'Cobertura actual: 6.º básico a 4.º medio. Próximamente: 1.º a 5.º básico y adaptaciones para estudiantes con discapacidades.',
  },
  {
    key: ['protección de datos', 'confidencialidad', 'data cifrada'],
    answer:
      'La data está cifrada y sólo acceden perfiles autorizados. No se generan diagnósticos ni etiquetas y se cumplen protocolos de confidencialidad.',
  },
  {
    key: ['qué pasa', 'pulsan sos', 'botón sos'],
    answer:
      'Al pulsar el botón SOS se envía una alerta inmediata al equipo escolar, que activa su protocolo de apoyo.',
  },
  {
    key: ['qué reciben apoderados', 'informes padres', 'reportes familiares'],
    answer:
      'Los apoderados reciben informes mensuales. Si el colegio no continúa tras el piloto, pueden descargar los reportes históricos.',
  },
  {
    key: ['cobertura 100%', '12% manual', 'cobertura'],
    answer:
      'AlmaIA alcanza al 100 % de los estudiantes objetivo, muy por encima del 12 % típico de métodos manuales.',
  },
  {
    key: ['resultados observados', '40 %', '48 %', 'un mes'],
    answer:
      'Resultados: reducción del 40 % en síntomas depresivos y aumento del 48 % en expresión emocional tras sólo un mes de uso.',
  },
  {
    key: ['adaptaciones previstas', 'daltónicos', 'sordos', 'movilidad'],
    answer:
      'En desarrollo: módulos para 1.º–5.º básico y interfaces adaptativas para daltónicos, personas sordas o con movilidad limitada.',
  },
  {
    key: ['costo mensual', 'precio', 'hamburguesa'],
    answer:
      'El valor por estudiante es menor que el precio de una hamburguesa doble queso al mes.',
  },
  {
    key: ['evidencia respaldada', 'fundación cap', 'midap', 'mit', 'harvard'],
    answer:
      'La evidencia está respaldada por estudios de PUC, MIDAP, Fundación CAP y protocolos de MIT, Harvard y UNICEF.',
  },
  {
    key: ['ejemplos de reportes', 'dashboards', 'gráficas'],
    answer:
      'Disponemos de ejemplos de dashboards con evolución emocional por curso, alumno y alertas generadas.',
  },
  {
    key: ['cómo iniciar piloto', 'pasos piloto', 'demo'],
    answer:
      'Pasos piloto: 1) contacto institucional, 2) carga de datos y autorización, 3) formación del equipo, 4) monitoreo, 5) evaluación final.',
  },
  {
    key: ['recursos disponibles', 'manuales de uso', 'presentación institucional', 'youtube almaia'],
    answer:
      'Recursos: presentación institucional, manuales por perfil, informes tipo, sección web “Almie te guía”, canal YouTube AlmaIA-Chile y correos institucionales para soporte.',
  },

    /* ---------- 6. ADAPTACIONES Y COBERTURA ---------- */
  {
    key: ['adaptaciones', 'neurodivergente', 'discapacidad', 'accesible'],
    answer:
      'Se trabaja en soporte accesible (contraste, audio, voz) para estudiantes con TEA, TDAH y discapacidades visuales, auditivas o motrices.',
  },
  {
    key: ['cobertura', '12%', '100%'],
    answer:
      'AlmaIA cubre el 100 % del alumnado objetivo, comparado con el 12 % promedio de métodos manuales.',
  },

  /* ---------- 7. MATERIALES / RECURSOS ---------- */
  {
    key: ['materiales', 'recursos', 'manuales', 'presentación', 'youtube'],
    answer:
      'Disponibles: presentación institucional, manuales, informes de ejemplo y recursos en www.almaia.cl y YouTube “AlmaIA-Chile”.',
  },

  /* ---------- 9. QUIÉNES SOMOS Y FUNDADORES ---------- */
  {
    key: ['quiénes somos', 'equipo', 'fundadores', 'alex medel', 'naz herrera', 'cristian rivas'],
    answer:
      'AlmaIA fue creada en Chile por Alex Medel, Naz Herrera y Cristian Rivas junto a psicólogos, docentes y expertos en IA latinoamericanos.',
  },

  /* ---------- 10. FUNCIONALIDADES ESPECÍFICAS ---------- */
  {
    key: ['asistente almie', 'almie virtual', 'diario guiado'],
    answer:
      'Almie es el asistente emocional digital que guía al estudiante: diario guiado, recordatorios y expresión emocional divertida, fácil y segura.',
  },
  {
    key: ['detección temprana', 'ia patrones', 'trastornos sueño', 'alimentarios'],
    answer:
      'Nuestra IA detecta patrones de ansiedad, aislamiento, tristeza y cambios en sueño o alimentación para alertar de forma preventiva.',
  },

  /* ---------- 11. SOPORTE TÉCNICO / COBERTURA ---------- */
  {
    key: ['100 % cobertura', '12 % manual', 'cobertura total'],
    answer:
      'AlmaIA cubre el 100 % de la matrícula, superando ampliamente el 12 % de métodos manuales tradicionales.',
  },
  {
    key: ['60 % carga administrativa', 'reducción carga'],
    answer:
      'Automatizamos recolección y procesamiento de datos, reduciendo hasta un 60 % la carga administrativa del personal escolar.',
  },

  /* ---------- 12. COSTO EN UF ---------- */
  {
    key: ['1 uf', 'uf anual', 'costo uf'],
    answer:
      'El costo base es desde 1 UF al año por estudiante, equivalente a menos que una hamburguesa doble queso mensual.',
  },


/* ---------- 13. RESULTADOS CLÍNICOS ---------- */
  {
    key: ['resultados clínicos', 'validado un mes'],
    answer:
      'Estudios (PUC, MIDAP, Fundación CAP) demuestran –40 % en síntomas depresivos y +48 % en expresión emocional tras solo un mes de uso.',
  },


/* ---------- 14. ADAPTACIONES E INCLUSIÓN ---------- */
  {
    key: ['neurodivergencia', 'tea', 'tdah', 'altas capacidades'],
    answer:
      'En desarrollo: soporte para estudiantes neurodivergentes (TEA, TDAH, altas capacidades) con ajustes de interfaz y contenidos.',
  },
  {
    key: ['discapacidad visual', 'auditiva', 'motora', 'contraste', 'voz', 'teclado'],
    answer:
      'Versiones inclusivas incorporarán contraste alto, apoyo de audio y control por voz para discapacidades visuales, auditivas y motrices.',
  },


/* ---------- 15. APLICABILIDAD INSTITUCIONAL ---------- */
  {
    key: ['pel', 'plan estratégico local', 'slep gabriela mistral'],
    answer:
      'Los datos emocionales robustos de AlmaIA alimentan el PEL del SLEP (ej. Gabriela Mistral) y otras políticas públicas de salud mental.',
  },


/* ---------- 16. RECURSOS ADICIONALES ---------- */
  {
    key: ['materiales disponibles', 'presentación', 'manuales', 'youtube almaia', 'almie te guía'],
    answer:
      'Recursos: presentación institucional, manuales por perfil, informes tipo y videos en YouTube “AlmaIA-Chile”.',
  },
  {
  key: [
    'plan',
    'planes',
    'costos',
    'precio',
    'tarifa',
    'costo mensual',
    'cuánto vale',
    'cuanto cuesta'
  ],
  answer: '💰 AlmaIA tiene planes por estudiante que incluyen soporte, capacitaciones y actualizaciones. El valor mensual equivale a menos que una hamburguesa doble queso. Solicita tu cotización personalizada escribiendo a almora@almaia.cl.'
},
{
  key: [
    'contratar',
    'como obtener',
    'adquirir',
    'comprar',
    'suscripción',
    'registrarse',
    'licencia'
  ],
  answer: '🚀 Para contratar AlmaIA, tu colegio o red puede firmar un acuerdo de licencia. Escríbenos a almora@almaia.cl y coordinamos una demostración sin costo.'
},
{
  key: [
    'agenda',
    'agendar',
    'agenda demo',
    'pedir demo',
    'ver demo',
    'solicitar demo'
  ],
  answer: '✅ Podemos agendar una reunión o demostración sin costo. Escríbenos a contacto@almaia.cl o deja tus datos en el formulario de contacto y coordinamos la mejor fecha.'
},
{
  key: [
    'fundador',
    'fundadores',
    'quién fundó',
    'quienes crearon',
    'creadores'
  ],
  answer: '👥 AlmaIA fue fundada por Alex Medel, Naz Herrera y Cristian Rivas, junto a profesionales latinoamericanos en psicología, docencia e inteligencia artificial.'
},
{
  key: [
    'ayuda',
    'necesito ayuda',
    'me ayudas',
    'sos',
    'emergencia',
    'auxilio'
  ],
  answer: '🚨 El botón SOS de AlmaIA conecta al estudiante con un adulto de confianza del colegio para asistencia inmediata y registra el incidente en el panel del docente.'
},
{
  key: [
    'contacto',
    'correo',
    'email',
    'escribir',
    'atención',
    'soporte'
  ],
  answer: '📧 Puedes contactarnos en contacto@almaia.cl para cualquier duda, soporte o solicitudes de información adicional.'
},

{
  key: [
    'por favor',
    'porfa',
    'favor',
    'porfis'
  ],
  answer: '🙏 Gracias por tu cortesía. Dime, ¿quieres que te cuente sobre planes, el botón SOS, o cómo funciona AlmaIA? Estoy aquí para ayudarte.'
},
{
  key: [
    'urgente',
    'es urgente',
    'ayuda urgente',
    'auxilio urgente'
  ],
  answer: '🚨 Entiendo que es urgente. Si eres estudiante, recuerda que el botón SOS avisa de inmediato a un adulto de confianza en tu colegio. ¿Deseas más detalles sobre cómo funciona?'
},
{
  key: [
    'oye',
    'aló',
    'aloo',
    'hola hola'
  ],
  answer: '👋 ¡Aquí estoy! Soy Almie, tu asistente emocional. Pregúntame sobre el diario emocional, alertas, planes o el botón SOS, y con gusto te explico.'
},
{
  key: [
    'ayuda',
    'ayudame',
    'necesito ayuda',
    'socorro'
  ],
  answer: '🆘 ¿Necesitas orientación? Puedo explicarte cómo usar el botón SOS o contactar al equipo del colegio. Dime qué información buscas.'
},
{
  key: [
    'gracias',
    'mil gracias',
    'muchas gracias',
    'te agradezco'
  ],
  answer: '💜 ¡Siempre a tu servicio! Si te queda alguna duda sobre AlmaIA, avísame.'
},
{
  key: [
    'quiero hablar',
    'hablar',
    'conversar'
  ],
  answer: '🗣️ Claro, podemos conversar. Puedes preguntarme sobre AlmaIA, su funcionamiento, beneficios o planes. ¿Por dónde quieres empezar?'
},
{
  key: ['todo', 'dime todo', 'quiero saber todo', 'cuéntame más', 'cuentame mas', 'todo sobre almaia'],
  answer: '📝 AlmaIA combina IA y psicología para bienestar escolar. Puedo explicarte el diario, el botón SOS, las alertas, planes y evidencia técnica. ¿Por cuál empezamos?'
},
{
  key: ['agenda', 'agendar', 'quiero agendar', 'programar cita'],
  answer: '✅ Podemos agendar una demo sin costo. Escríbenos a contacto@almaia.cl o completa el formulario web y coordinamos fecha.'
},
{
  key: ['te quedaste pegado', 'me respondes lo mismo', 'no sabes', 'pero que dices'],
  answer: '😅 Perdón si me repito. ¡Aún estoy aprendiendo! Pregunta sobre el diario, el botón SOS, o planes, y te aclaro con más detalle.'
},
{
  key: ['por favor', 'porfa', 'favor'],
  answer: '🙏 Gracias por tu cortesía. Recuerda que puedes pedirme ayuda sobre el funcionamiento de AlmaIA, precios, agenda de demostraciones o informes.'
},
{
  key: ['ayuda', 'ayudame', 'socorro'],
  answer: '🆘 Puedo explicarte el botón SOS o contactar a tu colegio en caso de urgencia. ¿Te interesa saber cómo funciona el protocolo de apoyo?'
},
{
  key: ['salud mental', 'emociones', 'bienestar', 'ayuda emocional', 'apoyo emocional'],
  answer: "AlmaIA promueve la salud mental de los estudiantes mediante acompañamiento diario, alertas automáticas y el apoyo de Almie, su asistente emocional interactivo."
},
{
  key: ['dueño', 'fundador', 'quién creo', 'quién está detrás', 'fundadores'],
  answer: "AlmaIA fue creada por un equipo chileno de psicólogos, docentes y expertos en IA, liderados por Alex Medel, Naz Herrera y Cristian Rivas, con colaboradores de toda Latinoamérica."
},
{
  key: ['beneficios', 'para qué sirve', 'por qué usar', 'ventajas', 'qué gana el colegio'],
  answer: "AlmaIA ofrece beneficios para estudiantes (bienestar emocional), docentes (alertas tempranas y menos carga administrativa), familias (informes claros) y sostenedores (datos objetivos para decisiones)."
},
{
  key: ['agendar', 'reunión', 'demo', 'mostrar', 'ver presentación'],
  answer: "Podemos coordinar una reunión o demostración gratuita para tu colegio. Escríbenos a contacto@almaia.cl y programamos la mejor fecha."
}

]