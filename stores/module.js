import { defineStore } from 'pinia';

export const useModuleStore = defineStore('module', {
  state: () => ({
    currentModule: 0,
    userAnswers: {},
    completedModules: [],
    modules: [
      {
        title: "Triangulo de exposicion",
        description: "Fundamentos de la fotografía y conceptos básicos",
        icon: "fas fa-camera",
        theory: `
          <p>La fotografía es el arte y la técnica de capturar imágenes mediante la luz. Combina aspectos técnicos y creativos para crear composiciones visuales que comunican historias y emociones.</p>
          <p>Elementos fundamentales de la fotografía:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Exposición: Control de la cantidad de luz</li>
            <li>Composición: Organización de elementos visuales</li>
            <li>Enfoque: Definición de la nitidez</li>
            <li>Perspectiva: Punto de vista del fotógrafo</li>
          </ul>
        `,
        examples: [
          {
            title: "Video: Triángulo de Exposición",
            type: "video",
            url: "https://youtube.com/embed/a2Bb9pR_LKE?si=YF08NSfEW0DX3hGz",
            description: "Aprende los fundamentos del triángulo de exposición: apertura, velocidad de obturación e ISO"
          },
          {
            title: "Imagen: Efectos de Apertura",
            type: "image", 
            url: "https://www.dzoom.org.es/wp-content/uploads/2011/12/diafragma-apertura-numero-f-810x540.jpg",
            description: "Comparativa visual de diferentes aperturas y su efecto en la profundidad de campo"
          },
          {
            title: "Video: Regla de Tercios",
            type: "video",
            url: "https://youtube.com/embed/hZRpQiqrziE?si=Opgu0KocECC8dJJD",
            description: "Guía práctica para aplicar la regla de tercios en tus composiciones fotográficas"
          }
        ],
        quiz: [
          
           {
            id: "conceptos-basicos",
            title: "Conceptos Básicos de Fotografía",
            description: "Evalúa tus conocimientos sobre los fundamentos fotográficos",
             type: "iframe",
    url: "https://quizizz.com/embed/quiz/685349bdd5f0f18e7b630da4"
  },
        
        ]
      },
      {
        title: "Planos",
        description: "Tipos de planos fotográficos",
        icon: "fas fa-film",
        theory: `
          <p>Los planos fotográficos son la base de la composición visual. Cada tipo de plano transmite diferentes sensaciones y sirve para distintos propósitos narrativos.</p>
          <p>Clasificación de planos:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li><strong>Plano General:</strong> Muestra el entorno completo</li>
            <li><strong>Plano Medio:</strong> Del torso hacia arriba</li>
            <li><strong>Primer Plano:</strong> Rostro y expresiones</li>
            <li><strong>Plano Detalle:</strong> Elementos específicos</li>
          </ul>
        `,
        examples: [
          {
            title: "Video: Tipos de Planos",
            type: "video",
            url: "https://youtube.com/embed/Ju9Tty6KS8g?si=5f2Udy4Os96AL3WT",
            description: "Tutorial completo sobre los diferentes tipos de planos fotográficos y cuándo usarlos"
          },
          {
            title: "Imagen: Comparativa de Planos",
            type: "image",
            url: "https://th.bing.com/th/id/R.6995cc915bae39b7ecd6c90cdf281276?rik=lt%2fS%2fzcikHbJYQ&pid=ImgRaw&r=0", 
            description: "Infografía visual mostrando todos los tipos de planos con ejemplos prácticos"
          },
          {
            title: "Video: Planos en Retrato",
            type: "video",
            url: "https://youtube.com/embed/UfxOW5dkzNc?si=Gn7Xh9-q0iCP1QTp",
            description: "Cómo usar diferentes planos para crear retratos más impactantes"
          }
        ],
        quiz: [
          {
            id: "planos-fotograficos",
            title: "Tipos de Planos Fotográficos", 
            description: "Identifica y comprende los diferentes planos en fotografía",
            type: "iframe",
    url: "https://quizizz.com/embed/quiz/68534c2bba84ff8884e5805d"
          },
        ]
      },
      
          
      {
        title: "Tecnicas visuales",
        description: "Composición avanzada y elementos visuales",
        icon: "fas fa-palette",
        theory: `
          <p>La composición fotográfica es el arte de organizar elementos visuales dentro del encuadre para crear imágenes equilibradas y atractivas.</p>
          <p>Elementos de composición avanzada:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Líneas directrices y patrones</li>
            <li>Simetría y asimetría</li>
            <li>Contraste y balance tonal</li>
            <li>Espacio negativo y respiración</li>
          </ul>
        `,
        examples: [
          {
            title: "Video: Composición Avanzada",
            type: "video",
            url: "https://youtube.com/embed/mobgyLP-uAo?si=3RjdUrSA5gWXH9ym",
            description: "Técnicas avanzadas de composición: líneas directrices, patrones y espacio negativo"
          },
          
        ],
        quiz: [
          {
            id: "composicion-avanzada",
            title: "Composición Fotográfica Avanzada",
            description: "Perfecciona tus habilidades compositivas",
           type: "iframe",
    url: "https://quizizz.com/embed/quiz/68534d7ac95f2a34c51ed992"
          },
          {
            id: "tecnicas-creativas", 
            title: "Técnicas Creativas",
            description: "Explora métodos avanzados de composición visual",
            questions: [
              {
                text: "Los marcos naturales en fotografía sirven para:",
                options: [
                  "Decorar la imagen",
                  "Dirigir la atención al sujeto principal",
                  "Ocupar espacio vacío",
                  "Crear simetría perfecta"
                ],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
      
    ]
  }),
  
  actions: {
    setCurrentModule(index) {
      this.currentModule = index;
    },
    
    selectAnswer(moduleIndex, questionIndex, optionIndex) {
      if (!this.userAnswers[moduleIndex]) {
        this.userAnswers[moduleIndex] = {};
      }
      
      this.userAnswers[moduleIndex][questionIndex] = optionIndex;
    },
    
    completeModule(moduleIndex) {
      if (!this.completedModules.includes(moduleIndex)) {
        this.completedModules.push(moduleIndex);
      }
    },
    
    resetProgress() {
      this.userAnswers = {};
      this.completedModules = [];
    }
  }
});