import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Info, Car, Clock, Users } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SenalesReglamentarias: React.FC = () => {
  useEffect(() => {
    document.title = 'Señales de Tránsito Reglamentarias en Argentina | Guía del Conductor';
    
    // Add FAQ JSON-LD for SEO
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué significan las señales reglamentarias?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Son señales de tránsito que establecen prohibiciones, obligaciones o restricciones que los conductores deben respetar de forma obligatoria."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se reconocen las señales de tránsito reglamentarias?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tienen forma circular: fondo blanco con borde rojo para prohibiciones/restricciones y fondo azul para obligaciones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuáles son ejemplos de señales reglamentarias en Argentina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Algunos ejemplos son: Prohibido girar a la izquierda, Velocidad máxima, Uso obligatorio de cinturón y Sentido único."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué es importante respetar las señales reglamentarias?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porque su incumplimiento constituye una infracción de tránsito y pone en riesgo la seguridad propia y de los demás usuarios de la vía."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
      // Remove the JSON-LD script when component unmounts
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  // Señales reglamentarias con imágenes reales disponibles
  const senales = [
    // Prohibiciones (fondo blanco, borde rojo)
    { id: 1, nombre: 'Prohibido Girar a la Izquierda', descripcion: 'No se permite giro hacia la izquierda', categoria: 'prohibiciones', imagen: 'no girar a la izquierda.png' },
    { id: 2, nombre: 'Prohibido Girar a la Derecha', descripcion: 'No se permite giro hacia la derecha', categoria: 'prohibiciones', imagen: 'no girar a la derecha.png' },
    { id: 3, nombre: 'Prohibido Girar en U', descripcion: 'No se permite cambio de sentido', categoria: 'prohibiciones', imagen: 'no girar en U (no retornar).png' },
    { id: 4, nombre: 'Prohibido Adelantar', descripcion: 'No se permite sobrepasar otros vehículos', categoria: 'prohibiciones', imagen: 'prohibido adelantar.png' },
    { id: 5, nombre: 'No Avanzar', descripcion: 'Prohibido continuar o avanzar', categoria: 'prohibiciones', imagen: 'no avanzar.png' },
    { id: 6, nombre: 'Prohibido Estacionar', descripcion: 'No se permite dejar el vehículo', categoria: 'prohibiciones', imagen: 'no estacionar.png' },
    { id: 7, nombre: 'Prohibido Estacionar ni Detenerse', descripcion: 'No se permite parar ni estacionar', categoria: 'prohibiciones', imagen: 'no estacionar ni detenerse.png' },
    { id: 8, nombre: 'Prohibido Ruidos Molestos', descripcion: 'No se permite usar bocina o hacer ruido', categoria: 'prohibiciones', imagen: 'no ruidos molestos.png' },
    { id: 9, nombre: 'Contramano', descripcion: 'Prohibido circular en sentido contrario', categoria: 'prohibiciones', imagen: 'contramano.png' },
    { id: 10, nombre: 'Prohibido Cambiar de Carril', descripcion: 'No se permite cambio de carril', categoria: 'prohibiciones', imagen: 'prohibicion de cambiar de carril.png' },
    { id: 11, nombre: 'Prohibido Circular Autos', descripcion: 'Acceso restringido para automóviles', categoria: 'prohibiciones', imagen: 'prohibicion de cirular autos.png' },
    { id: 12, nombre: 'Prohibido Circular Bicicletas', descripcion: 'Acceso restringido para bicicletas', categoria: 'prohibiciones', imagen: 'prohibicion de cirular bicicletas.png' },
    { id: 13, nombre: 'Prohibido Circular Motos', descripcion: 'Acceso restringido para motocicletas', categoria: 'prohibiciones', imagen: 'prohibicion de circular motos.png' },
    { id: 14, nombre: 'Prohibido Circular Peatón', descripcion: 'Acceso restringido para peatones', categoria: 'prohibiciones', imagen: 'prohibicion de circular peaton.png' },
    { id: 15, nombre: 'Prohibido Circular Camiones', descripcion: 'Acceso restringido para vehículos de carga', categoria: 'prohibiciones', imagen: 'prohibicion de circular camiones.png' },
    { id: 16, nombre: 'Prohibido Circular Acoplado', descripcion: 'Prohibido vehículos con acoplado', categoria: 'prohibiciones', imagen: 'prohibicion de circular acoplado.png' },
    { id: 17, nombre: 'Prohibido Circular Carro de Mano', descripcion: 'Prohibido carros de mano', categoria: 'prohibiciones', imagen: 'prohibicion de circular carro de mano.png' },
    { id: 18, nombre: 'Prohibido Circular Jinetes', descripcion: 'Prohibido paso de jinetes', categoria: 'prohibiciones', imagen: 'prohibicion de circular jinetes.png' },
    { id: 19, nombre: 'Prohibido Tracción Animal', descripcion: 'Prohibido vehículos de tracción animal', categoria: 'prohibiciones', imagen: 'prohibicion de circular traccion animal.png' },
    { id: 20, nombre: 'Prohibido Circular Tractor', descripcion: 'Prohibido paso de tractores', categoria: 'prohibiciones', imagen: 'prohibicion de circular tractor.png' }
  ];

  const categorias = {
    prohibiciones: { color: 'bg-red-50 border-red-200', icon: XCircle, iconColor: 'text-red-600' },
    limites: { color: 'bg-orange-50 border-orange-200', icon: Info, iconColor: 'text-orange-600' },
    obligaciones: { color: 'bg-blue-50 border-blue-200', icon: CheckCircle, iconColor: 'text-blue-600' },
    exclusivos: { color: 'bg-purple-50 border-purple-200', icon: Users, iconColor: 'text-purple-600' },
    horarios: { color: 'bg-green-50 border-green-200', icon: Clock, iconColor: 'text-green-600' }
  };

  const faqItems = [
    {
      pregunta: '¿Qué significan las señales reglamentarias?',
      respuesta: 'Son señales de tránsito que establecen prohibiciones, obligaciones o restricciones que los conductores deben respetar de forma obligatoria.'
    },
    {
      pregunta: '¿Cómo se reconocen las señales de tránsito reglamentarias?',
      respuesta: 'Tienen forma circular: fondo blanco con borde rojo para prohibiciones/restricciones y fondo azul para obligaciones.'
    },
    {
      pregunta: '¿Cuáles son ejemplos de señales reglamentarias en Argentina?',
      respuesta: 'Algunos ejemplos son: Prohibido girar a la izquierda, Velocidad máxima, Uso obligatorio de cinturón y Sentido único.'
    },
    {
      pregunta: '¿Por qué es importante respetar las señales reglamentarias?',
      respuesta: 'Porque su incumplimiento constituye una infracción de tránsito y pone en riesgo la seguridad propia y de los demás usuarios de la vía.'
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <nav className="text-sm text-gray-600">
              <Link to="/" className="hover:text-primary-600">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to="/guias" className="hover:text-primary-600">Guías</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Señales Reglamentarias</span>
            </nav>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
              Señales de Tránsito Reglamentarias
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Señales de prohibiciones, obligaciones y restricciones
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Las señales reglamentarias de tránsito en Argentina son aquellas que indican prohibiciones, obligaciones o restricciones específicas que los conductores deben cumplir de manera obligatoria. Su función es ordenar la circulación y garantizar la seguridad vial, estableciendo límites claros en cuanto a maniobras, velocidad o comportamientos en la vía.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
              Se reconocen fácilmente por su forma circular, con fondo blanco y borde rojo en el caso de las prohibiciones y restricciones, y con fondo azul cuando indican obligaciones. Ejemplos comunes son "Prohibido estacionar", "Velocidad máxima", "Uso obligatorio de cinturón" o "Sentido único". Conocerlas es indispensable para rendir el examen de manejo y para circular cumpliendo con la normativa vial vigente en todo el país.
            </p>
          </motion.div>

          {/* Señales Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
              Señales de Prohibición en Argentina
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {senales.map((senal, index) => {
                const categoria = categorias[senal.categoria as keyof typeof categorias];
                const IconComponent = categoria.icon;
                
                return (
                  <motion.div
                    key={senal.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    {/* Imagen real de la señal */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                      <img 
                        src={`/assets/senales-reglamentarias/${senal.imagen}`}
                        alt={senal.nombre}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1 sm:mb-2 leading-tight px-1">
                      {senal.nombre}
                    </h3>
                    
                    <p className="text-xs text-gray-600 leading-tight px-1 hidden sm:block">
                      {senal.descripcion}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preguntas frecuentes sobre señales reglamentarias
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="border-l-4 border-red-500 pl-6 py-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {item.pregunta}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.respuesta}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para practicar con el simulador?
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                Pon a prueba tus conocimientos sobre señales de tránsito con nuestro test online
              </p>
              <Link
                to="/test"
                className="inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Comenzar Test Online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SenalesReglamentarias;
