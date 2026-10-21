export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: '¿Cómo saber cuánto debo estudiar para el examen teórico en Córdoba?',
    answer:
      'Recomendamos practicar hasta alcanzar de forma consistente un 85% o más en los simulacros. La mayoría de quienes usan el sitio necesitan entre 2 y 4 semanas de práctica regular (unos 30 minutos diarios). El historial de resultados te ayuda a ver cuándo estás listo para el examen real.',
  },
  {
    question: '¿El simulador es completamente gratis?',
    answer:
      'Sí. El simulador es gratuito e incluye acceso a las preguntas del temario, simulacros ilimitados y feedback inmediato. No necesitás registrarte ni cargar datos de tarjeta.',
  },
  {
    question: '¿Puedo practicar desde el celular?',
    answer:
      'Sí. El simulador está pensado para celulares, tablets y computadoras. Podés practicar en cualquier momento; la interfaz se adapta al tamaño de pantalla y todas las funciones están disponibles en móvil.',
  },
  {
    question: '¿Las preguntas son las mismas que aparecen en el examen real?',
    answer:
      'Trabajamos con el temario y el formato del examen teórico de la Provincia de Córdoba. El contenido se actualiza para reflejar cambios en la normativa de tránsito, de modo que practiques con material alineado al examen.',
  },
  {
    question: '¿Cuánto tiempo tengo para completar cada simulacro?',
    answer:
      'Cada simulacro replica condiciones típicas del examen: 20 minutos para responder 60 preguntas. También podés usar modos de práctica sin límite de tiempo para estudiar a tu ritmo y revisar las explicaciones.',
  },
  {
    question: '¿Qué pasa si no apruebo el simulacro?',
    answer:
      'Es parte del aprendizaje. Al terminar ves qué preguntas fallaste y por qué. Podés revisar las explicaciones, reforzar esos temas e intentarlo de nuevo sin límite de intentos.',
  },
  {
    question: '¿Cuántas preguntas tiene el examen teórico de conducir en Córdoba?',
    answer:
      'En nuestro simulador respondés 60 preguntas en 20 minutos, con un 70% de aciertos para aprobar. Ese formato te prepara para las condiciones del examen teórico en Córdoba.',
  },
  {
    question: '¿Para quién es Guía del Conductor?',
    answer:
      'Es para quienes van a rendir el examen teórico de la licencia de conducir en Córdoba (capital o provincia) y quieren practicar con simulacros, señales de tránsito y guías prácticas como estacionamiento por colores de cordón.',
  },
  {
    question: '¿Qué incluye además del simulacro online?',
    answer:
      'Además del test online tenés guías de señales preventivas, reglamentarias e informativas, la guía del buen conductor de Córdoba y la guía de cordones (dónde está prohibido estacionar), pensadas para estudiar y consultar antes del examen.',
  },
];

export const PREVENTIVAS_FAQ: FaqItem[] = [
  {
    question: '¿Qué son las señales de tránsito preventivas?',
    answer:
      'Son señales viales que advierten sobre peligros o condiciones especiales en el camino, ayudando al conductor a reducir riesgos.',
  },
  {
    question: '¿Qué color y forma tienen las señales preventivas en Argentina?',
    answer:
      'Generalmente son de fondo amarillo con símbolos negros y forma cuadrada o romboidal, diseñadas para captar la atención de los conductores.',
  },
  {
    question: '¿Cuáles son ejemplos de señales preventivas?',
    answer:
      'Algunos ejemplos son: curva peligrosa, calzada resbaladiza, animales en la vía, cruce escolar y pendiente pronunciada.',
  },
  {
    question: '¿Por qué es importante conocer las señales preventivas?',
    answer:
      'Porque anticipan riesgos en la ruta y permiten reaccionar a tiempo, reduciendo accidentes y garantizando una conducción más segura.',
  },
];

export const REGLAMENTARIAS_FAQ: FaqItem[] = [
  {
    question: '¿Qué significan las señales reglamentarias?',
    answer:
      'Son señales de tránsito que establecen prohibiciones, obligaciones o restricciones que los conductores deben respetar de forma obligatoria.',
  },
  {
    question: '¿Cómo se reconocen las señales de tránsito reglamentarias?',
    answer:
      'Tienen forma circular: fondo blanco con borde rojo para prohibiciones/restricciones y fondo azul para obligaciones.',
  },
  {
    question: '¿Cuáles son ejemplos de señales reglamentarias en Argentina?',
    answer:
      'Algunos ejemplos son: Prohibido girar a la izquierda, Velocidad máxima, Uso obligatorio de cinturón y Sentido único.',
  },
  {
    question: '¿Por qué es importante respetar las señales reglamentarias?',
    answer:
      'Porque su incumplimiento constituye una infracción de tránsito y pone en riesgo la seguridad propia y de los demás usuarios de la vía.',
  },
];

export const INFORMATIVAS_FAQ: FaqItem[] = [
  {
    question: '¿Qué significan las señales de tránsito informativas?',
    answer:
      'Son señales que orientan y guían a los conductores sobre servicios, lugares de interés y referencias turísticas, sin imponer obligaciones.',
  },
  {
    question: '¿Qué color tienen las señales informativas en Argentina?',
    answer:
      'Generalmente presentan fondo azul o verde con símbolos blancos, lo que las diferencia de las reglamentarias (rojas) y preventivas (amarillas).',
  },
  {
    question: '¿Dónde se colocan las señales de información turística y de servicios?',
    answer:
      'Se instalan en rutas, accesos a ciudades y zonas turísticas para indicar servicios como hospitales, alojamientos, estaciones de servicio y más.',
  },
  {
    question: '¿Por qué es importante conocer las señales informativas para el examen de manejo?',
    answer:
      'Porque forman parte del examen teórico en todo el país y ayudan a circular con mayor seguridad y confianza en la vía pública.',
  },
];

export const ESTACIONAR_FAQ: FaqItem[] = [
  {
    question: '¿Qué significa el cordón amarillo en Córdoba?',
    answer: 'Prohíbe estacionar, pero permite detenciones breves para ascenso y descenso.',
  },
  {
    question: '¿Puedo estacionar en cordón blanco frente a una escuela?',
    answer: 'No, está prohibido por seguridad aunque el cordón no esté pintado.',
  },
  {
    question: '¿Cuántos metros debo dejar libre en una parada de colectivo?',
    answer: 'Mínimo 10 metros antes y después de la parada.',
  },
  {
    question: '¿Qué pasa si estaciono en un cordón rojo?',
    answer: 'Es una infracción grave y el vehículo puede ser removido.',
  },
  {
    question: '¿Dónde puedo consultar los colores de cordón en Córdoba?',
    answer:
      'En esta guía de Guía del Conductor encontrás el significado de cada color de cordón y zonas habituales donde está prohibido estacionar en Córdoba.',
  },
];

export const TEST_FAQ: FaqItem[] = [
  {
    question: '¿Cómo funciona el test online del examen teórico?',
    answer:
      'Elegís comenzar el simulacro, respondés 60 preguntas en 20 minutos y al final ves tu puntaje. Necesitás al menos 70% de aciertos para aprobar el simulacro.',
  },
  {
    question: '¿Puedo repetir el test las veces que quiera?',
    answer:
      'Sí. Podés hacer tantos simulacros como quieras; las preguntas se presentan en un formato similar al examen teórico de Córdoba.',
  },
];
