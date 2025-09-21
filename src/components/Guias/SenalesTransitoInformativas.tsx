import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, MapPin, Heart, Car, Utensils } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SenalesTransitoInformativas: React.FC = () => {
  useEffect(() => {
    document.title = 'Señales de Tránsito Informativas en Argentina | Guía del Conductor';
    
    // Add FAQ JSON-LD for SEO
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué significan las señales de tránsito informativas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Son señales que orientan y guían a los conductores sobre servicios, lugares de interés y referencias turísticas, sin imponer obligaciones."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué color tienen las señales informativas en Argentina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generalmente presentan fondo azul o verde con símbolos blancos, lo que las diferencia de las reglamentarias (rojas) y preventivas (amarillas)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Dónde se colocan las señales de información turística y de servicios?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se instalan en rutas, accesos a ciudades y zonas turísticas para indicar servicios como hospitales, alojamientos, estaciones de servicio y más."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué es importante conocer las señales informativas para el examen de manejo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porque forman parte del examen teórico en todo el país y ayudan a circular con mayor seguridad y confianza en la vía pública."
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

  // Señales informativas con imágenes reales disponibles
  const senales = [
    { id: 1, nombre: 'Puesto Sanitario', descripcion: 'Indica la ubicación de un puesto de primeros auxilios', categoria: 'salud', imagen: 'puesto sanitario.png' },
    { id: 2, nombre: 'Teléfono', descripcion: 'Ubicación de teléfono público', categoria: 'servicios', imagen: 'servicio telefonico.png' },
    { id: 3, nombre: 'Estación de Servicio', descripcion: 'Combustible y servicios para vehículos', categoria: 'servicios', imagen: 'estacion de servicio.png' },
    { id: 4, nombre: 'Mecánico', descripcion: 'Taller mecánico o servicios de reparación', categoria: 'servicios', imagen: 'servicio mecanico.png' },
    { id: 5, nombre: 'Hotel', descripcion: 'Alojamiento y hospedaje', categoria: 'turismo', imagen: 'hotel.png' },
    { id: 6, nombre: 'Restaurante', descripcion: 'Servicio de comidas', categoria: 'turismo', imagen: 'restaurante.png' },
    { id: 7, nombre: 'Bar', descripcion: 'Servicio de bebidas y comidas', categoria: 'turismo', imagen: 'bar.png' },
    { id: 8, nombre: 'Zona de Camping', descripcion: 'Área habilitada para acampar', categoria: 'turismo', imagen: 'campamento.png' },
    { id: 9, nombre: 'Aeropuerto', descripcion: 'Dirección hacia el aeropuerto', categoria: 'transporte', imagen: 'aeropuerto.png' },
    { id: 10, nombre: 'Terminal de Ómnibus', descripcion: 'Estación de autobuses', categoria: 'transporte', imagen: 'terminal de omnibus.png' },
    { id: 11, nombre: 'Taxi', descripcion: 'Parada de taxis', categoria: 'transporte', imagen: 'taxi.png' },
    { id: 12, nombre: 'Telesférico', descripcion: 'Transporte aéreo por cable', categoria: 'transporte', imagen: 'telesférico.png' },
    { id: 13, nombre: 'Detención Transporte Público', descripcion: 'Parada de autobús o transporte público', categoria: 'transporte', imagen: 'detencion transporte publico.png' },
    { id: 14, nombre: 'Estacionamiento', descripcion: 'Zona de estacionamiento', categoria: 'servicios', imagen: 'estacionamiento.png' },
    { id: 15, nombre: 'Estacionamiento Casas Rodantes', descripcion: 'Área específica para casas rodantes', categoria: 'servicios', imagen: 'estacionamiento casas rodantes.png' },
    { id: 16, nombre: 'Correo', descripcion: 'Oficina postal', categoria: 'servicios', imagen: 'correo.png' },
    { id: 17, nombre: 'Policía', descripcion: 'Comisaría o puesto policial', categoria: 'servicios', imagen: 'policia.png' },
    { id: 18, nombre: 'Gomería', descripcion: 'Servicio de reparación de neumáticos', categoria: 'servicios', imagen: 'gomeria.png' },
    { id: 19, nombre: 'Fiscalización de Velocidad', descripcion: 'Zona de control de velocidad', categoria: 'servicios', imagen: 'fiscalizacion de velocidad.png' },
    { id: 20, nombre: 'Zona Recreativa', descripcion: 'Área de recreación y esparcimiento', categoria: 'turismo', imagen: 'lugar para recreacion.png' },
    { id: 21, nombre: 'Museo', descripcion: 'Museo o sitio de interés cultural', categoria: 'turismo', imagen: 'museo.png' },
    { id: 22, nombre: 'Plaza', descripcion: 'Espacio público de recreación', categoria: 'turismo', imagen: 'plaza.png' },
    { id: 23, nombre: 'Balneario', descripcion: 'Zona de playa y recreación acuática', categoria: 'turismo', imagen: 'balneario.png' },
    { id: 24, nombre: 'Punto Panorámico', descripcion: 'Mirador o punto de vista panorámico', categoria: 'turismo', imagen: 'punto panoramico.png' }
  ];

  const categorias = {
    salud: { color: 'bg-red-50 border-red-200', icon: Heart, iconColor: 'text-red-600' },
    servicios: { color: 'bg-blue-50 border-blue-200', icon: Info, iconColor: 'text-blue-600' },
    turismo: { color: 'bg-green-50 border-green-200', icon: MapPin, iconColor: 'text-green-600' },
    transporte: { color: 'bg-purple-50 border-purple-200', icon: Car, iconColor: 'text-purple-600' }
  };

  const faqItems = [
    {
      pregunta: '¿Qué significan las señales de tránsito informativas?',
      respuesta: 'Son señales que orientan y guían a los conductores sobre servicios, lugares de interés y referencias turísticas, sin imponer obligaciones.'
    },
    {
      pregunta: '¿Qué color tienen las señales informativas en Argentina?',
      respuesta: 'Generalmente presentan fondo azul o verde con símbolos blancos, lo que las diferencia de las reglamentarias (rojas) y preventivas (amarillas).'
    },
    {
      pregunta: '¿Dónde se colocan las señales de información turística y de servicios?',
      respuesta: 'Se instalan en rutas, accesos a ciudades y zonas turísticas para indicar servicios como hospitales, alojamientos, estaciones de servicio y más.'
    },
    {
      pregunta: '¿Por qué es importante conocer las señales informativas para el examen de manejo?',
      respuesta: 'Porque forman parte del examen teórico en todo el país y ayudan a circular con mayor seguridad y confianza en la vía pública.'
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
              <span className="text-gray-900">Señales de Tránsito Informativas</span>
            </nav>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Info className="w-8 h-8 text-blue-600" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Señales de Tránsito Informativas
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Señales de información turística y de servicios
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
              Las señales de tránsito informativas en Argentina cumplen un rol esencial al orientar y guiar a los conductores durante su recorrido. A diferencia de las señales reglamentarias o preventivas, estas no imponen obligaciones ni advierten sobre peligros, sino que brindan datos prácticos para facilitar la circulación y mejorar la experiencia de viaje. Reconocerlas y comprender su significado es clave para una conducción más segura y eficiente.
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
              Señales Informativas en Argentina
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
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    {/* Imagen real de la señal */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                      <img 
                        src={`/assets/senales-informativas/${encodeURIComponent(senal.imagen)}`}
                        alt={senal.nombre}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.error(`Error loading image: ${senal.imagen}`);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
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
              Preguntas frecuentes sobre señales informativas
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="border-l-4 border-blue-500 pl-6 py-4"
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

export default SenalesTransitoInformativas;
