import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info, MapPin, Heart, Car, Utensils } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SenalesTransitoInformativas: React.FC = () => {
  useEffect(() => {
    document.title = 'Señales de Tránsito Informativas en Argentina | Guía del Conductor';
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
    };
  }, []);

  // Datos de las 25 señales informativas más comunes
  const senales = [
    { id: 1, nombre: 'Puesto Sanitario', descripcion: 'Indica la ubicación de un puesto de primeros auxilios', categoria: 'salud', imagen: 'puesto sanitario.png' },
    { id: 2, nombre: 'Hospital', descripcion: 'Señala la dirección hacia un hospital', categoria: 'salud' },
    { id: 3, nombre: 'Cruz Roja', descripcion: 'Indica servicios de la Cruz Roja', categoria: 'salud' },
    { id: 4, nombre: 'Farmacia', descripcion: 'Ubicación de farmacia o servicio médico', categoria: 'salud' },
    { id: 5, nombre: 'Información Turística', descripcion: 'Centro de información para turistas', categoria: 'turismo' },
    { id: 6, nombre: 'Teléfono', descripcion: 'Ubicación de teléfono público', categoria: 'servicios', imagen: 'servicio telefonico.png' },
    { id: 7, nombre: 'Estación de Servicio', descripcion: 'Combustible y servicios para vehículos', categoria: 'servicios', imagen: 'estacion de servicio.png' },
    { id: 8, nombre: 'Mecánico', descripción: 'Taller mecánico o servicios de reparación', categoria: 'servicios' },
    { id: 9, nombre: 'Hotel', descripcion: 'Alojamiento y hospedaje', categoria: 'turismo' },
    { id: 10, nombre: 'Restaurante', descripcion: 'Servicio de comidas', categoria: 'turismo' },
    { id: 11, nombre: 'Zona de Camping', descripcion: 'Área habilitada para acampar', categoria: 'turismo' },
    { id: 12, nombre: 'Aeropuerto', descripcion: 'Dirección hacia el aeropuerto', categoria: 'transporte' },
    { id: 13, nombre: 'Puerto', descripcion: 'Ubicación del puerto marítimo', categoria: 'transporte' },
    { id: 14, nombre: 'Terminal de Ómnibus', descripcion: 'Estación de autobuses', categoria: 'transporte' },
    { id: 15, nombre: 'Estación de Tren', descripcion: 'Terminal ferroviaria', categoria: 'transporte' },
    { id: 16, nombre: 'Taxi', descripcion: 'Parada de taxis', categoria: 'transporte' },
    { id: 17, nombre: 'Estacionamiento', descripcion: 'Zona de estacionamiento', categoria: 'servicios' },
    { id: 18, nombre: 'WC / Sanitarios', descripcion: 'Servicios higiénicos públicos', categoria: 'servicios' },
    { id: 19, nombre: 'Agua Potable', descripcion: 'Fuente de agua potable', categoria: 'servicios' },
    { id: 20, nombre: 'Zona Recreativa', descripcion: 'Área de recreación y esparcimiento', categoria: 'turismo' },
    { id: 21, nombre: 'Mirador', descripcion: 'Punto panorámico o mirador', categoria: 'turismo' },
    { id: 22, nombre: 'Museo', descripcion: 'Museo o sitio de interés cultural', categoria: 'turismo' },
    { id: 23, nombre: 'Iglesia', descripcion: 'Templo religioso', categoria: 'servicios' },
    { id: 24, nombre: 'Correo', descripcion: 'Oficina postal', categoria: 'servicios' },
    { id: 25, nombre: 'Policía', descripcion: 'Comisaría o puesto policial', categoria: 'servicios' },
    { id: 26, nombre: 'Telesférico', descripcion: 'Transporte aéreo por cable', categoria: 'transporte', imagen: 'telesférico.png' }
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
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Las señales informativas son elementos fundamentales de la señalización vial que proporcionan 
              información útil a los conductores sobre servicios, lugares de interés y referencias turísticas. 
              A diferencia de las señales reglamentarias y preventivas, estas no imponen obligaciones sino 
              que orientan y facilitan la navegación.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Características principales</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Fondo generalmente azul o verde</li>
                  <li>• Símbolos y texto en blanco</li>
                  <li>• Forma rectangular</li>
                  <li>• Proporcionan orientación sin obligar</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Importancia en el examen</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Parte del examen teórico nacional</li>
                  <li>• Ayudan a la orientación vial</li>
                  <li>• Mejoran la seguridad del conductor</li>
                  <li>• Facilitan el turismo y los viajes</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Señales Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              26 Señales Informativas Principales
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {senales.map((senal, index) => {
                const categoria = categorias[senal.categoria as keyof typeof categorias];
                const IconComponent = categoria.icon;
                
                return (
                  <motion.div
                    key={senal.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`${categoria.color} border-2 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                  >
                    {/* Imagen real de la señal o icono placeholder */}
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg border-2 border-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                      {senal.imagen ? (
                        <img 
                          src={`/assets/senales-informativas/${senal.imagen}`}
                          alt={senal.nombre}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <IconComponent className={`w-8 h-8 ${categoria.iconColor}`} />
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                      {senal.nombre}
                    </h3>
                    
                    <p className="text-xs text-gray-600 leading-tight">
                      {senal.descripcion}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                * 4 imágenes reales disponibles - Las restantes se irán agregando próximamente
              </p>
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
