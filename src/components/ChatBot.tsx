import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
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
  const [predefinedResponses, setPredefinedResponses] = useState<Record<string, string>>({});
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // Scroll automático - solo para nuevos mensajes, no para el mensaje de bienvenida inicial
  useEffect(() => {
    // Solo hacer scroll automático si hay más de 1 mensaje (no solo el de bienvenida)
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages.length]);

  // Scroll automático cuando el bot está escribiendo
  useEffect(() => {
    if (isTyping) {
      scrollToBottom();
    }
  }, [isTyping]);

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const detectKeyword = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('requisito')) return 'requisitos';
    if (lowerText.includes('costo') || lowerText.includes('precio') || lowerText.includes('valor')) return 'costos';
    if (lowerText.includes('lugar') || lowerText.includes('dónde') || lowerText.includes('donde')) return 'lugares';
    if (lowerText.includes('examen')) return 'examen';
    if (lowerText.includes('renovar') || lowerText.includes('renovación')) return 'renovacion';
    if (lowerText.includes('categoria')) return 'categorias';
    if (lowerText.includes('multa')) return 'multas';
    if (lowerText.includes('vigencia') || lowerText.includes('validez')) return 'validez';
    if (lowerText.includes('turno')) return 'turnos';
    return null;
  };

  const getGPTResponse = async (message: string): Promise<string> => {
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || "TU_API_KEY_DE_OPENAI";
    const url = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { 
              role: "system", 
              content: "Sos GuíaBot, un asistente experto en tránsito y licencias de conducir en Córdoba, Argentina. Respondé en formato HTML limpio y con listas cuando sea necesario. Sé amigable, profesional y útil." 
            },
            { role: "user", content: message }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error GPT:', error);
      return "Lo siento, no pude procesar tu consulta en este momento. Por favor, intenta de nuevo o usa los botones de respuestas rápidas.";
    }
  };

  const handleSendMessage = async (message?: string) => {
    const text = message || inputValue.trim();
    if (!text || isLoading) return;

    addMessage('user', text);
    setInputValue('');
    setIsLoading(true);

    // Buscar respuesta predefinida
    const keyword = detectKeyword(text);
    if (keyword && predefinedResponses[keyword]) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage('bot', predefinedResponses[keyword]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000);
      return;
    }

    // Usar GPT si no hay respuesta predefinida
    setIsTyping(true);
    try {
      const response = await getGPTResponse(text);
      setIsTyping(false);
      addMessage('bot', response);
    } catch (error) {
      setIsTyping(false);
      addMessage('bot', "Lo siento, no pude procesar tu consulta en este momento. Por favor, intenta de nuevo.");
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
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
        <motion.button
          onClick={toggleChat}
          className="fixed bottom-16 left-4 sm:bottom-6 sm:left-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-[0_15px_0_15px] shadow-lg hover:shadow-xl hover:shadow-primary-600/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 z-[60] flex items-center justify-center touch-manipulation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Abrir chat"
          aria-label="Abrir chat GuíaBot"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>
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
                : `left-6 w-96 h-[600px] max-w-md mx-auto rounded-2xl shadow-2xl border border-gray-200 ${
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
