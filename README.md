# 🚗 Guía del Conductor - Simulador Examen Teórico Córdoba

Un simulador moderno y completo para el examen teórico de conducir en Córdoba, Argentina. Desarrollado con React, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- 🎯 **Preguntas oficiales** del examen teórico de Córdoba
- 📱 **Diseño responsive** optimizado para móviles
- ⚡ **Feedback inmediato** con explicaciones detalladas
- 🎨 **Animaciones suaves** con Framer Motion
- 📊 **Seguimiento de progreso** personalizado
- 🎭 **Interfaz moderna** inspirada en las mejores prácticas de UX

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **Lucide React** - Iconos SVG modernos

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
cd "/Users/martingalmarino/Desktop/GUIA DEL CONDUCTOR"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración (irreversible)

## 📁 Estructura del Proyecto

```
guia-del-conductor/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Hero.tsx            # Sección hero con CTA
│   │   ├── InfoSection.tsx     # Información del simulador
│   │   ├── Beneficios.tsx      # Beneficios del servicio
│   │   ├── DatosSection.tsx    # Estadísticas y datos
│   │   ├── CTA.tsx             # Llamada a la acción
│   │   ├── FAQ.tsx             # Preguntas frecuentes
│   │   └── Footer.tsx          # Pie de página
│   ├── App.tsx                 # Componente principal
│   ├── index.tsx               # Punto de entrada
│   └── index.css               # Estilos globales
├── tailwind.config.js          # Configuración de Tailwind
├── package.json
└── README.md
```

## 🎨 Guía de Estilo

### Colores

- **Primario**: `#FF6600` (Naranja)
- **Secundario**: `#0052CC` (Azul)
- **Fondo**: `#FFFFFF` / `#F8F9FA`
- **Texto**: `#333333`

### Tipografía

- **Títulos**: Poppins (font-display)
- **Cuerpo**: Inter (font-sans)

### Componentes

- **Botones**: `rounded-2xl` con hover animations
- **Cards**: `rounded-2xl` con shadow-lg
- **Spacing**: Padding y margins consistentes

## 📱 Responsive Design

El diseño sigue un enfoque **mobile-first**:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎭 Animaciones

Todas las animaciones están implementadas con **Framer Motion**:

- Fade in al hacer scroll
- Hover effects en botones y cards
- Micro-interactions en iconos
- Transiciones suaves entre secciones

## 🔧 Personalización

### Modificar colores

Editar `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#TU_COLOR_AQUI'
      }
    }
  }
}
```

### Agregar nuevas secciones

1. Crear componente en `src/components/`
2. Importar en `App.tsx`
3. Agregar al layout principal

## 🚀 Deployment

### Netlify
```bash
npm run build
# Subir carpeta build/ a Netlify
```

### Vercel
```bash
npx vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d build
```

## 📈 Performance

- ✅ Lazy loading de componentes
- ✅ Optimización de imágenes
- ✅ Minificación de CSS/JS
- ✅ Compresión gzip
- ✅ Preload de fuentes críticas

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para los conductores de Córdoba, Argentina.

---

**¿Necesitás ayuda?** Abrí un [issue](https://github.com/tu-usuario/guia-del-conductor/issues) o contactanos en info@guiadelconductor.com.ar
