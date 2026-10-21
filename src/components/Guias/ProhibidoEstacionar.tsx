import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Clock, MapPin, Shield, FileText } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const ProhibidoEstacionar: React.FC = () => {
  useEffect(() => {
    document.title = 'Prohibido estacionar en Córdoba: guía de cordones | Guía del Conductor';
    
    // Meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conocé dónde está prohibido estacionar en Córdoba y qué significa cada color de cordón. Evitá multas y remociones con esta guía práctica.');
    }

    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Prohibido estacionar en Córdoba: guía por colores de cordón');
    if (!document.querySelector('meta[property="og:title"]')) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Descubrí qué significa cada color de cordón en Córdoba, dónde podés y no podés estacionar, y las multas por incumplir.');
    if (!document.querySelector('meta[property="og:description"]')) document.head.appendChild(ogDescription);

    // Article Schema.org JSON-LD
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Dónde está prohibido estacionar en Córdoba: guía por colores de cordón",
      "description": "Conocé dónde está prohibido estacionar en Córdoba y qué significa cada color de cordón. Evitá multas y remociones con esta guía práctica.",
      "author": {
        "@type": "Organization",
        "name": "Guía del Conductor"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Guía del Conductor",
        "url": "https://www.guiadelconductor.ar"
      },
      "datePublished": "2026-09-21",
      "dateModified": "2026-09-21",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.guiadelconductor.ar/guias/prohibido-estacionar-guia-por-colores-de-cordon/"
      }
    };

    // FAQ Schema.org JSON-LD
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué significa el cordón amarillo en Córdoba?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prohíbe estacionar, pero permite detenciones breves para ascenso y descenso."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo estacionar en cordón blanco frente a una escuela?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, está prohibido por seguridad aunque el cordón no esté pintado."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuántos metros debo dejar libre en una parada de colectivo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mínimo 10 metros antes y después de la parada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si estaciono en un cordón rojo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Es una infracción grave y el vehículo puede ser removido."
          }
        }
      ]
    };

    // HowTo Schema.org JSON-LD
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Cómo identificar dónde está prohibido estacionar en Córdoba",
      "description": "Guía paso a paso para identificar zonas de estacionamiento permitido y prohibido según colores de cordón",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Identificar el color del cordón",
          "text": "Observá el color pintado en el cordón de la vereda"
        },
        {
          "@type": "HowToStep",
          "name": "Verificar señalización vertical",
          "text": "Buscá carteles que complementen o modifiquen las reglas del cordón"
        },
        {
          "@type": "HowToStep",
          "name": "Revisar ubicación específica",
          "text": "Verificá que no sea frente a escuelas, hospitales, cocheras o paradas de colectivo"
        }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.textContent = JSON.stringify(howToSchema);
    document.head.appendChild(script3);
    
    return () => {
      document.title = 'Guía del Conductor - Simulador Examen Teórico Córdoba';
      // Remove the JSON-LD scripts when component unmounts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  const coloresCordones = [
    {
      color: 'Rojo',
      significado: 'Prohibición absoluta',
      descripcion: 'No se puede estacionar ni detenerse durante las 24 hs.',
      detalles: 'Puede estar acompañado por carteles de señalización vertical.',
      multa: 'Estacionamiento o detención en lugar indebido',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconColor: 'text-red-600'
    },
    {
      color: 'Amarillo',
      significado: 'Prohibición de estacionar',
      descripcion: 'Permitidas detenciones breves para ascenso y descenso de pasajeros o carga.',
      detalles: 'Puede usarse junto con señalización vertical.',
      multa: 'Estacionamiento indebido',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-600'
    },
    {
      color: 'Blanco o sin pintar',
      significado: 'Permitido con excepciones',
      descripcion: 'Se puede estacionar si no hay cartelería que lo prohíba.',
      detalles: 'Prohibido frente a garajes, cocheras, escuelas, hospitales y espacios reservados.',
      multa: 'Depende de la infracción específica',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    }
  ];

  const lugaresProhibidos = [
    'En aceras, plazas, parques, rotondas y paseos',
    'Dentro de 5 metros de una senda peatonal o ciclística',
    'A menos de 10 metros de paradas de transporte público',
    'Frente a entradas de cocheras, estaciones de servicio y playas de estacionamiento',
    'En la izquierda de la calzada, salvo señalización que lo autorice',
    'Frente a accesos de hospitales, escuelas, bomberos, policía y otros servicios públicos',
    'En zonas señalizadas como prohibidas o reservadas'
  ];

  const consejos = [
    'Revisá siempre los colores del cordón y la cartelería antes de estacionar',
    'Respetá distancias mínimas de sendas peatonales y paradas de colectivo',
    'Evitá estacionar en doble fila o en accesos a propiedades privadas',
    'Usá aplicaciones o mapas de estacionamiento autorizado',
    'Si dudás, buscá otro lugar o estacionamiento privado'
  ];

  const faqItems = [
    {
      pregunta: '¿Qué significa el cordón amarillo en Córdoba?',
      respuesta: 'Prohíbe estacionar, pero permite detenciones breves para ascenso y descenso.'
    },
    {
      pregunta: '¿Puedo estacionar en cordón blanco frente a una escuela?',
      respuesta: 'No, está prohibido por seguridad aunque el cordón no esté pintado.'
    },
    {
      pregunta: '¿Cuántos metros debo dejar libre en una parada de colectivo?',
      respuesta: 'Mínimo 10 metros antes y después de la parada.'
    },
    {
      pregunta: '¿Qué pasa si estaciono en un cordón rojo?',
      respuesta: 'Es una infracción grave y el vehículo puede ser removido.'
    },
    {
      pregunta: '¿Dónde puedo consultar las zonas de estacionamiento permitido?',
      respuesta: 'En el sitio oficial de la Municipalidad de Córdoba.'
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
              <span className="text-gray-900">Prohibido estacionar en Córdoba</span>
            </nav>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dónde está prohibido estacionar en Córdoba: guía por colores de cordón
            </h1>
          </motion.div>


          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-12"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Tabla de contenidos
            </h2>
            <ol className="space-y-2 text-gray-700">
              <li><a href="#introduccion" className="hover:text-primary-600">1. Introducción</a></li>
              <li><a href="#colores-cordon" className="hover:text-primary-600">2. Significado de los colores de cordón</a></li>
              <li><a href="#lugares-prohibidos" className="hover:text-primary-600">3. Lugares donde está prohibido estacionar siempre</a></li>
              <li><a href="#sanciones" className="hover:text-primary-600">4. Sanciones y remoción de vehículos</a></li>
              <li><a href="#consejos" className="hover:text-primary-600">5. Consejos para evitar multas</a></li>
              <li><a href="#faq" className="hover:text-primary-600">6. Preguntas frecuentes</a></li>
              <li><a href="#recursos" className="hover:text-primary-600">7. Recursos y enlaces útiles</a></li>
            </ol>
          </motion.div>

          {/* Introducción */}
          <motion.section
            id="introduccion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Introducción
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                En la ciudad de Córdoba, no todos los lugares son aptos para estacionar, incluso si no hay un cartel a la vista. La <strong>Ordenanza Municipal Nº 9981/98</strong> establece que los colores pintados en los cordones y ciertas ubicaciones específicas determinan si está permitido, restringido o prohibido estacionar.
              </p>
              <p className="leading-relaxed">
                Conocer estas normas no solo evita multas, sino que también mejora la fluidez del tránsito y la seguridad vial.
              </p>
            </div>
          </motion.section>

          {/* Significado de los colores de cordón */}
          <motion.section
            id="colores-cordon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Significado de los colores de cordón
            </h2>
            
            <div className="space-y-6">
              {coloresCordones.map((cordon, index) => (
                <motion.div
                  key={cordon.color}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`${cordon.bgColor} ${cordon.borderColor} border-2 rounded-2xl p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${cordon.bgColor} rounded-full flex items-center justify-center border-2 ${cordon.borderColor}`}>
                      <AlertTriangle className={`w-6 h-6 ${cordon.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${cordon.textColor} mb-2`}>
                        Cordón {cordon.color.toLowerCase()} – {cordon.significado}
                      </h3>
                      <p className={`${cordon.textColor} mb-3 font-medium`}>
                        {cordon.descripcion}
                      </p>
                      <p className={`text-gray-600 text-sm mb-2`}>
                        {cordon.detalles}
                      </p>
                      <p className={`text-gray-800 text-sm font-medium`}>
                        <strong>Multa:</strong> {cordon.multa}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Lugares prohibidos */}
          <motion.section
            id="lugares-prohibidos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Lugares donde está prohibido estacionar siempre
            </h2>
            <p className="text-gray-700 mb-6">
              Según el <strong>Art. 76 de la Ordenanza Municipal</strong>, está prohibido estacionar:
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <ul className="space-y-3">
                {lugaresProhibidos.map((lugar, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-red-500 font-bold text-lg">•</span>
                    <span>{lugar}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Sanciones */}
          <motion.section
            id="sanciones"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Sanciones y remoción de vehículos
            </h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                La Municipalidad puede remover un vehículo si:
              </h3>
              <ul className="space-y-2 text-orange-800">
                <li>• Está estacionado en lugar prohibido</li>
                <li>• Obstruye el tránsito o accesos</li>
                <li>• No tiene patentes visibles o documentación exigida</li>
                <li>• Ocupa espacios reservados sin autorización</li>
                <li>• Excede el tiempo máximo en zonas de estacionamiento medido</li>
              </ul>
              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <p className="text-orange-900 text-sm font-medium">
                  📌 <strong>Dato:</strong> La grúa deja señalización en el lugar donde estaba el vehículo para informar la remoción.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Consejos */}
          <motion.section
            id="consejos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Consejos para evitar multas
            </h2>
            
            <div className="grid gap-4">
              {consejos.map((consejo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{consejo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {item.pregunta}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.respuesta}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recursos */}
          <motion.section
            id="recursos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Recursos y enlaces útiles
            </h2>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <a 
                    href="https://cordoba.gob.ar/normativa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    📄 Ordenanza Municipal Nº 9981/98 – Texto completo
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <a 
                    href="https://cordoba.gob.ar/tramites/estacionamiento-medido/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    🚗 Mapa oficial de estacionamiento medido en Córdoba
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <a 
                    href="https://www.argentina.gob.ar/seguridadvial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    📜 Ley Nacional de Tránsito Nº 24.449
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para practicar con el simulador?
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                Pon a prueba tus conocimientos sobre normas de tránsito con nuestro test online
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

export default ProhibidoEstacionar;
