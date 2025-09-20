import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, MapPin, Heart, Car, Utensils } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SenalesPreventivas: React.FC = () => {
  useEffect(() => {
    document.title = 'Señales de Tránsito Preventivas en Argentina | Guía del Conductor';
    
    // Add FAQ JSON-LD for SEO
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué son las señales de tránsito preventivas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Son señales viales que advierten sobre peligros o condiciones especiales en el camino, ayudando al conductor a reducir riesgos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué color y forma tienen las señales preventivas en Argentina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generalmente son de fondo amarillo con símbolos negros y forma cuadrada o romboidal, diseñadas para captar la atención de los conductores."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuáles son ejemplos de señales preventivas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Algunos ejemplos son: curva peligrosa, calzada resbaladiza, animales en la vía, cruce escolar y pendiente pronunciada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué es importante conocer las señales preventivas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Porque anticipan riesgos en la ruta y permiten reaccionar a tiempo, reduciendo accidentes y garantizando una conducción más segura."
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

  // Señales preventivas con imágenes reales disponibles
  const senales = [
    { id: 1, nombre: 'Curva Común', descripcion: 'Advierte sobre una curva en el camino', categoria: 'curvas', imagen: 'curva comun.png' },
    { id: 2, nombre: 'Curva y Contracurva', descripcion: 'Advierte sobre curvas consecutivas', categoria: 'curvas', imagen: 'curva (contracurva).png' },
    { id: 3, nombre: 'Curva en S', descripcion: 'Secuencia de curvas en forma de S', categoria: 'curvas', imagen: 'curva en S.png' },
    { id: 4, nombre: 'Camino Sinuoso', descripcion: 'Tramo con múltiples curvas sucesivas', categoria: 'curvas', imagen: 'camino sinuoso.png' },
    { id: 5, nombre: 'Calzada Resbaladiza', descripcion: 'Superficie de la vía con riesgo de deslizamiento', categoria: 'condiciones', imagen: 'calzada resbaladiza.png' },
    { id: 6, nombre: 'Pendiente Descendente', descripcion: 'Declive pronunciado en el camino', categoria: 'pendientes', imagen: 'pendiente (Descendente).png' },
    { id: 7, nombre: 'Pendiente Ascendente', descripcion: 'Inclinación pronunciada ascendente', categoria: 'pendientes', imagen: 'pendiente (Ascendente).png' },
    { id: 8, nombre: 'Perfil Irregular', descripcion: 'Superficie de la vía en mal estado', categoria: 'condiciones', imagen: 'perfil irregular.png' },
    { id: 9, nombre: 'Proyección de Piedras', descripcion: 'Riesgo de proyección de piedras', categoria: 'condiciones', imagen: 'proyeccion de piedas.png' },
    { id: 10, nombre: 'Derrumbes', descripcion: 'Zona propensa a caída de rocas o tierra', categoria: 'condiciones', imagen: 'derrumbes.png' },
    { id: 11, nombre: 'Badén', descripcion: 'Depresión en la calzada para drenaje', categoria: 'estructuras', imagen: 'Baden.png' },
    { id: 12, nombre: 'Lomada', descripcion: 'Elevación en la calzada', categoria: 'estructuras', imagen: 'lomada.png' },
    { id: 13, nombre: 'Estrechamiento Una Mano', descripcion: 'Reducción del ancho de la vía en un sentido', categoria: 'restricciones', imagen: 'estechamiento (una sola mano).png' },
    { id: 14, nombre: 'Estrechamiento Doble Mano', descripcion: 'Reducción del ancho de la vía en ambos sentidos', categoria: 'restricciones', imagen: 'estrechamiento (en sus dos manos).png' },
    { id: 15, nombre: 'Altura Limitada', descripcion: 'Paso con restricción de altura', categoria: 'restricciones', imagen: 'altura limitada.png' },
    { id: 16, nombre: 'Ancho Limitado', descripcion: 'Paso con restricción de ancho', categoria: 'restricciones', imagen: 'ancho limitado.png' },
    { id: 17, nombre: 'Cruce Escolar', descripcion: 'Zona de cruce frecuente de escolares', categoria: 'cruces', imagen: 'escolares.png' },
    { id: 18, nombre: 'Encrucijada Bifurcación', descripcion: 'División del camino en dos vías', categoria: 'intersecciones', imagen: 'encrucijada (bifurcación).png' },
    { id: 19, nombre: 'Encrucijada Cruce', descripcion: 'Cruce de caminos adelante', categoria: 'intersecciones', imagen: 'encrucijada (cruce).png' },
    { id: 20, nombre: 'Encrucijada Empalme', descripcion: 'Unión de caminos', categoria: 'intersecciones', imagen: 'encrucijada (empalme).png' },
    { id: 21, nombre: 'Incorporación de Tránsito Lateral', descripcion: 'Vía que se incorpora lateralmente', categoria: 'incorporaciones', imagen: 'incorporacion de transito lateral.png' },
    { id: 22, nombre: 'Inicio Doble Circulación', descripcion: 'Cambio a vía de doble mano', categoria: 'circulacion', imagen: 'inicio doble ciculacion.png' },
    { id: 23, nombre: 'Calzada Dividida', descripcion: 'Separación central de la calzada', categoria: 'circulacion', imagen: 'calzada dividida.png' },
    { id: 24, nombre: 'Puente Angosto', descripcion: 'Puente con ancho reducido', categoria: 'estructuras', imagen: 'puente angosto.png' },
    { id: 25, nombre: 'Puente Móvil', descripcion: 'Puente levadizo o móvil', categoria: 'estructuras', imagen: 'puente movil.png' },
    { id: 26, nombre: 'Túnel', descripcion: 'Paso subterráneo adelante', categoria: 'estructuras', imagen: 'tunel.png' },
    { id: 27, nombre: 'Rotonda', descripcion: 'Rotonda o glorieta adelante', categoria: 'intersecciones', imagen: 'rotonda.png' }
  ];

  const categorias = {
    curvas: { color: 'bg-yellow-50 border-yellow-200', icon: AlertTriangle, iconColor: 'text-yellow-600' },
    condiciones: { color: 'bg-orange-50 border-orange-200', icon: AlertTriangle, iconColor: 'text-orange-600' },
    pendientes: { color: 'bg-red-50 border-red-200', icon: AlertTriangle, iconColor: 'text-red-600' },
    cruces: { color: 'bg-blue-50 border-blue-200', icon: AlertTriangle, iconColor: 'text-blue-600' },
    animales: { color: 'bg-green-50 border-green-200', icon: AlertTriangle, iconColor: 'text-green-600' },
    intersecciones: { color: 'bg-purple-50 border-purple-200', icon: AlertTriangle, iconColor: 'text-purple-600' },
    incorporaciones: { color: 'bg-indigo-50 border-indigo-200', icon: AlertTriangle, iconColor: 'text-indigo-600' },
    estructuras: { color: 'bg-gray-50 border-gray-200', icon: AlertTriangle, iconColor: 'text-gray-600' },
    obras: { color: 'bg-amber-50 border-amber-200', icon: AlertTriangle, iconColor: 'text-amber-600' },
    vehiculos: { color: 'bg-cyan-50 border-cyan-200', icon: Car, iconColor: 'text-cyan-600' },
    señalizacion: { color: 'bg-pink-50 border-pink-200', icon: AlertTriangle, iconColor: 'text-pink-600' },
    ferroviario: { color: 'bg-slate-50 border-slate-200', icon: AlertTriangle, iconColor: 'text-slate-600' },
    restricciones: { color: 'bg-rose-50 border-rose-200', icon: AlertTriangle, iconColor: 'text-rose-600' },
    circulacion: { color: 'bg-teal-50 border-teal-200', icon: AlertTriangle, iconColor: 'text-teal-600' },
    pavimento: { color: 'bg-stone-50 border-stone-200', icon: AlertTriangle, iconColor: 'text-stone-600' },
    zonas: { color: 'bg-lime-50 border-lime-200', icon: MapPin, iconColor: 'text-lime-600' },
    aereo: { color: 'bg-sky-50 border-sky-200', icon: AlertTriangle, iconColor: 'text-sky-600' },
    general: { color: 'bg-neutral-50 border-neutral-200', icon: AlertTriangle, iconColor: 'text-neutral-600' }
  };

  const faqItems = [
    {
      pregunta: '¿Qué son las señales de tránsito preventivas?',
      respuesta: 'Son señales viales que advierten sobre peligros o condiciones especiales en el camino, ayudando al conductor a reducir riesgos.'
    },
    {
      pregunta: '¿Qué color y forma tienen las señales preventivas en Argentina?',
      respuesta: 'Generalmente son de fondo amarillo con símbolos negros y forma cuadrada o romboidal, diseñadas para captar la atención de los conductores.'
    },
    {
      pregunta: '¿Cuáles son ejemplos de señales preventivas?',
      respuesta: 'Algunos ejemplos son: curva peligrosa, calzada resbaladiza, animales en la vía, cruce escolar y pendiente pronunciada.'
    },
    {
      pregunta: '¿Por qué es importante conocer las señales preventivas?',
      respuesta: 'Porque anticipan riesgos en la ruta y permiten reaccionar a tiempo, reduciendo accidentes y garantizando una conducción más segura.'
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
              <span className="text-gray-900">Señales Preventivas</span>
            </nav>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
              Señales de Tránsito Preventivas
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Señales de advertencia y prevención de peligros
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
              Las señales de tránsito preventivas en Argentina advierten a los conductores sobre riesgos o condiciones especiales en la vía, ayudando a anticipar maniobras y reducir accidentes. Se caracterizan por su fondo amarillo, símbolos negros y forma romboidal, lo que las hace fácilmente reconocibles y altamente visibles en cualquier entorno vial.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
              Ejemplos frecuentes son la advertencia de curvas peligrosas, calzada resbaladiza, cruce escolar, pendientes pronunciadas o animales sueltos. Conocerlas es fundamental para aprobar el examen teórico de manejo y, sobre todo, para conducir de manera segura en rutas y ciudades, protegiendo tanto a los ocupantes del vehículo como a los peatones y demás usuarios de la vía pública.
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
              27 Señales Preventivas Principales
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
                        src={`/assets/senales-preventivas/${senal.imagen}`}
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
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                * 27 imágenes reales disponibles - Las restantes se irán agregando próximamente
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
              Preguntas frecuentes sobre señales preventivas
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="border-l-4 border-yellow-500 pl-6 py-4"
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

export default SenalesPreventivas;
