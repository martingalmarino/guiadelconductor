import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
  icon: string;
  action: string;
}

const ChatBot: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [predefinedResponses, setPredefinedResponses] = useState<Record<string, any>>({});

  // API Key de OpenAI desde variable de entorno
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY || "";

  // Lista de temas permitidos para validación
  const temasPermitidos = [
    // Licencia / carnet
    "licencia", "carnet", "carné", "carne", "carnet de conducir", "sacar licencia", "sacar carnet", 
    "permiso de conducir", "registro", "registro de conducir",
    
    // Examen
    "examen", "teórico", "práctico", "practico", "test", "prueba", 
    "simulacro", "preguntas", "teorico de manejo", "examen de manejo",
    
    // Trámite / requisitos
    "requisitos", "documentación", "documento", "papeles", "dni", "cuota", "trámite", "tramite",
    "gestoría", "gestoria",
    
    // Lugares / CPC
    "cpc", "centro de participación comunal", "municipalidad", "municipio", "oficina", "sede", "lugar", "donde rendir", "dónde rendir",
    
    // Costos / tasas
    "costo", "costos", "precio", "precios", "valor", "tasa", "tasas", "importe", "pagar", "arancel",
    
    // Renovación / duplicado
    "renovar", "renovación", "renovacion", "renueve", "vencer", "vencimiento", 
    "duplicado", "reposición", "reposición de licencia", "perdí", "perdi", "robo", "extravié", "extravie", "extravío",
    
    // Categorías
    "categoría", "categoria", "categorías", "categorias", "tipo de licencia", "tipo de carnet", "clase de licencia", "clase b", "clase a", "profesional",
    
    // Multas / antecedentes
    "multa", "multas", "infracción", "infraccion", "infracciones", "antecedente", "antecedentes", "cenat", "boleta", "pago de multas",
    
    // Vigencia / validez
    "vigencia", "validez", "duración", "caducidad", "vencimiento",
    
    // Turnos
    "turno", "turnos", "cita", "citas", "sacar turno", "pedir turno", "solicitar turno", "reserva",
    
    // Otros relacionados
    "autoescuela", "escuela de manejo", "curso de manejo", "curso de conducir",
    "vehículo", "vehiculo", "moto", "camión", "colectivo", "taxi", "remis", "transporte"
  ];

  // Diccionario de mapeo para respuestas predefinidas
  const mapeoClaves = {
    "requisitos": [
      "requisito", "sacar carnet", "sacar licencia", "primer carnet", 
      "registro por primera vez", "documentación", "documento", "papeles"
    ],
    "costos": [
      "costo", "costos", "precio", "precios", "valor", "tasa", "tasas", 
      "importe", "arancel", "pagar", "cuánto sale", "cuanto cuesta"
    ],
    "lugares": [
      "lugar", "lugares", "donde rendir", "dónde rendir", "cpc", 
      "centro de participación comunal", "municipalidad", "sede", "oficina"
    ],
    "examen": [
      "examen", "teórico", "teorico", "práctico", "practico", "test", 
      "prueba", "simulacro", "preguntas", "evaluación"
    ],
    "renovacion": [
      "renovar", "renovación", "renovacion", "renovando", 
      "vencer", "vencimiento", "revalidar", "extender licencia"
    ],
    "categorias": [
      "categoría", "categoria", "categorías", "categorias", 
      "tipo de licencia", "tipo de carnet", "clase de licencia", "clase b", "clase a", "profesional"
    ],
    "multas": [
      "multa", "multas", "infracción", "infraccion", "infracciones", 
      "antecedente", "antecedentes", "cenat", "boleta", "pago de multas"
    ],
    "validez": [
      "vigencia", "validez", "duración", "caducidad", "valido", "vence", "tiempo de validez"
    ],
    "turnos": [
      "turno", "turnos", "cita", "citas", "sacar turno", "pedir turno", 
      "solicitar turno", "reserva", "agenda", "turnero"
    ],
    "profesionales": [
      "profesional", "camión", "camion", "colectivo", "taxi", 
      "remis", "transporte de pasajeros", "categoría d", "categoría e", "categoria c"
    ],
    "duplicado": [
      "duplicado", "reposición", "reposicion", "copia de licencia", 
      "perdí", "perdi", "robo", "extravié", "extravie", "extravío"
    ],
    "documentacion": [
      "documentación", "documentacion", "documentos", "dni", 
      "papeles", "que llevar", "qué necesito"
    ],
    "horarios": [
      "horario", "horarios", "hora", "atención", "atencion", 
      "cpc abierto", "a qué hora", "cuando atienden"
    ],
    "contacto": [
      "contacto", "teléfono", "telefono", "mail", "correo", "email", "whatsapp"
    ]
  };
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Función de validación
  const esConsultaValida = (userText: string): boolean => {
    return temasPermitidos.some(t => userText.toLowerCase().includes(t));
  };

  // Función para detectar clave de respuesta predefinida
  const detectarClave = (texto: string): string | null => {
    const lower = texto.toLowerCase();
    
    // Primero intentar con las respuestas predefinidas del JSON
    for (const clave in predefinedResponses) {
      const item = predefinedResponses[clave];
      if (item && item.keywords) {
        if (item.keywords.some((palabra: string) => lower.includes(palabra.toLowerCase()))) {
          return clave;
        }
      }
    }
    
    // Fallback al mapeo local si no hay respuestas cargadas
    for (const clave in mapeoClaves) {
      if (mapeoClaves[clave as keyof typeof mapeoClaves].some(palabra => lower.includes(palabra))) {
        return clave;
      }
    }
    
    return null;
  };

  // Función para llamar a la API de OpenAI
  const getGPTResponse = async (message: string): Promise<string> => {
    if (!OPENAI_API_KEY) {
      return 'Lo siento, el servicio de IA no está disponible en este momento. Por favor, usa los botones de respuestas rápidas.';
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'Sos GuíaBot, un asistente experto en tránsito y licencias de conducir en Córdoba, Argentina. Tu función es responder únicamente consultas relacionadas con: requisitos para sacar la licencia, examen teórico y práctico, costos y tasas, lugares oficiales para rendir, normativas de tránsito, categorías de licencias, renovación, duplicados, multas, vigencia y turnos. Si el usuario pregunta algo fuera de este tema, respondé siempre: 🚦 Lo siento, solo puedo responder consultas relacionadas con licencias y examen de conducir en Córdoba.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Error en la API de OpenAI');
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error al obtener respuesta de GPT:', error);
      return 'Lo siento, hubo un error al procesar tu consulta. Por favor, intenta de nuevo.';
    }
  };

  // Ocultar chatbot en la página de test
  const shouldHideChatbot = location.pathname === '/test';

  const quickReplies: QuickReply[] = [
    { id: 'requisitos', text: 'Requisitos', icon: '', action: 'requisitos' },
    { id: 'costos', text: 'Costos', icon: '', action: 'costos' },
    { id: 'lugares', text: 'Lugares', icon: '', action: 'lugares' },
    { id: 'examen', text: 'Examen teórico', icon: '', action: 'examen' },
    { id: 'renovacion', text: 'Renovación', icon: '', action: 'renovacion' },
    { id: 'categorias', text: 'Categorías', icon: '', action: 'categorias' },
  ];

  // Cargar respuestas predefinidas
  useEffect(() => {
    const loadResponses = async () => {
      try {
        const response = await fetch('/data/respuestas.json');
        if (response.ok) {
          const data = await response.json();
          setPredefinedResponses(data);
        }
      } catch (error) {
        console.error('Error al cargar respuestas:', error);
      }
    };

    loadResponses();
  }, []);

  // Mensaje de bienvenida - agregar inmediatamente cuando se abre el chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage('bot', '¡Hola! Soy GuíaBot, tu asistente especializado en tránsito y licencias de conducir en Córdoba. ¿En qué puedo ayudarte?');
    }
  }, [isOpen, messages.length]);

  // Eliminar scroll automático - mantener siempre el principio del texto visible

  // Detectar si es móvil y teclado virtual
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const handleResize = () => {
      checkIsMobile();
      const initialHeight = window.innerHeight;
      const currentHeight = window.innerHeight;
      
      // Si la altura cambió significativamente, probablemente el teclado se abrió/cerró
      if (Math.abs(initialHeight - currentHeight) > 150) {
        setIsKeyboardOpen(currentHeight < initialHeight);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ocultar menú de navegación cuando el chatbot esté abierto en móviles
  useEffect(() => {
    if (isMobile && isOpen) {
      // Ocultar el menú de navegación del navegador
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restaurar el comportamiento normal
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobile, isOpen]);

  // Ocultar la burbuja después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Función para detectar clave de respuesta predefinida (mejorada)
  const detectKeyword = (text: string): string | null => {
    return detectarClave(text);
  };


  const handleSendMessage = async (message?: string) => {
    const text = message || inputValue.trim();
    if (!text || isLoading) return;

    addMessage('user', text);
    setInputValue('');
    setIsLoading(true);

    try {
      // 1. VALIDACIÓN: Verificar si la consulta es válida
      if (!esConsultaValida(text)) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage('bot', '🚦 Lo siento, solo puedo responder consultas relacionadas con licencias y examen de conducir en Córdoba.');
          setIsLoading(false);
        }, 800);
        return;
      }

      // 2. BUSCAR RESPUESTA PREDEFINIDA
      const keyword = detectKeyword(text);
      if (keyword && predefinedResponses[keyword]) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const response = predefinedResponses[keyword].respuesta || predefinedResponses[keyword];
          addMessage('bot', response);
          setIsLoading(false);
        }, 1000 + Math.random() * 1000);
        return;
      }

      // 3. LLAMAR A GPT para consultas más complejas
      setIsTyping(true);
      const response = await getGPTResponse(text);
      setIsTyping(false);
      addMessage('bot', response);
    } catch (error) {
      console.error('Error al procesar mensaje:', error);
      setIsTyping(false);
      addMessage('bot', 'Lo siento, hubo un error al procesar tu consulta. Por favor, intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowBubble(false); // Ocultar la burbuja al abrir el chat
    if (!isOpen) {
      // En móviles, no hacer focus automático para mostrar primero el mensaje de bienvenida
      if (!isMobile) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300);
      }
    }
  };

  // No mostrar el chatbot en la página de test
  if (shouldHideChatbot) {
    return null;
  }

  return (
    <>
      {/* Botón flotante - solo visible cuando el chat está cerrado */}
      {!isOpen && (
        <div className="fixed bottom-16 right-8 sm:bottom-6 sm:right-6 z-[60]">
          {/* Speech Bubble */}
          <AnimatePresence>
            {showBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
                className="absolute -left-44 sm:-left-48 -top-4 sm:-top-6 bg-white text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-xl border border-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap cursor-pointer z-[70]"
                onClick={() => setShowBubble(false)}
              >
                Poné primera y consultame
                {/* Arrow pointing to button */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-t-8 border-t-white border-l-4 border-l-transparent border-r-4 border-r-transparent"></div>
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-t-6 border-t-gray-200 border-l-3 border-l-transparent border-r-3 border-r-transparent"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón del chatbot */}
          <motion.button
            onClick={toggleChat}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center touch-manipulation relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Abrir chat"
            aria-label="Abrir chat GuíaBot"
          >
            <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
            
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
          </motion.button>
        </div>
      )}

      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed bg-white z-[9999] flex flex-col overflow-hidden ${
            isMobile
              ? 'inset-0 w-full h-full'
              : `right-6 w-96 h-[600px] max-w-md mx-auto rounded-2xl shadow-2xl border border-gray-200 ${
                  isKeyboardOpen ? 'bottom-2' : 'bottom-20'
                }`
          }`}
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">GuíaBot</h3>
                  <p className="text-sm opacity-80">Disponible ahora</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                title="Cerrar chat"
                aria-label="Cerrar chat"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 sm:gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] px-3 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white ml-auto'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: message.content }}
                      className="text-sm leading-relaxed"
                    />
                  </div>
                  {message.type === 'user' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 sm:gap-3 justify-start"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-600 rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-3 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce bounce-delay-1" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce bounce-delay-2" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleSendMessage(reply.action)}
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] text-center"
                  >
                    <span>{reply.text}</span>
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-3 p-4">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe un mensaje..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:border-primary-600 focus:outline-none text-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  title="Enviar mensaje"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
