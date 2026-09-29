/* es strings. Keys mirror en.js exactly (npm run check:locales). */

export default {
  "nav": {
    "projects": "Proyectos",
    "about": "Sobre mí",
    "contact": "Contacto",
    "language": "Idioma",
    "theme": "Cambiar tema",
    "skip": "Saltar al contenido principal",
    "primary": "Principal",
    "work": "Trabajos",
    "sites": "Obras",
    "clients": "Clientes",
    "engineRoom": "Sala de máquinas",
    "cv": "CV",
    "palette": "Ir a…",
    "paletteLabel": "Abrir la paleta de comandos"
  },
  "home": {
    "eyebrow": "Desarrollador full-stack · Toronto · disponible",
    "headline": "Construyo software como antes construía casas: según lo especificado, a tiempo y hecho para durar.",
    "lede": "Soy Xenofon Gkioka, desarrollador full-stack con React, TypeScript y C#/.NET. He entregado funcionalidades en producción en Mercell (Copenhague), he creado dos sitios web para clientes que están en línea y ejecuto mis propios proyectos en un servidor que monté y mantengo yo mismo.",
    "ctaWork": "Ver trabajo en línea",
    "ctaProjects": "Todos los proyectos",
    "ctaContact": "Contacto",
    "live": "En línea",
    "liveLabel": "En línea ahora",
    "liveTitle": "Lo que puedes abrir ahora mismo",
    "liveIntro": "Dos sitios web de clientes y dos servicios que funcionan en mi propio servidor. Cada enlace es una dirección pública real.",
    "visit": "Abrir",
    "caseStudy": "Caso de estudio",
    "details": "Detalles",
    "kinds": {
      "client": "Sitio de cliente",
      "server": "En mi servidor"
    },
    "cards": {
      "azclean": {
        "title": "AZ Clean",
        "note": "Sitio web para una empresa de limpieza de sofás y colchones en Atenas, Grecia."
      },
      "way": {
        "title": "WAY Empowerment",
        "note": "Nuevo sitio web para una ONG de voluntarios que apoya a mujeres y jóvenes en Kenia."
      },
      "tasks": {
        "title": "TaskManager API",
        "note": "API REST en ASP.NET Core y PostgreSQL con documentación Swagger interactiva."
      },
      "classifier": {
        "title": "Resume Classifier",
        "note": "Servicio de aprendizaje automático en Python que clasifica currículums en cinco familias de empleo."
      }
    },
    "hostLabel": "Cómo funciona",
    "hostTitle": "Alojado en hardware que gestiono yo",
    "hostIntro": "Los servicios funcionan en un portátil antiguo que convertí en servidor doméstico, configurado como un entorno de producción, solo que más pequeño.",
    "hostPoints": [
      "Ningún puerto abierto en mi router: el tráfico llega por un túnel saliente de Cloudflare.",
      "Cada push a main compila, analiza y firma una imagen de contenedor, y el servidor verifica la firma antes de desplegarla.",
      "Monitorización, alertas en mi móvil y copias de seguridad que se prueban restaurándolas de verdad."
    ],
    "hostCta": "Cómo está montado el servidor",
    "featuredLabel": "Destacado",
    "featuredTitle": "Un programa en C, ejecutándose aquí",
    "featuredBody": "El validador de patio de trenes está escrito en C y probado con MSTest. Como toda su entrada y salida por consola está aislada en main.c, la capa de lógica compila sin problemas a WebAssembly, así que el mismo código que ejercita la suite de pruebas se ejecuta directamente en esta página. Nada está reimplementado en JavaScript.",
    "featuredCta": "Abrir la demo",
    "notice": "Aviso de obra en curso · Toronto",
    "permitTitle": "Software en construcción.",
    "permitLede": "Cuatro años supervisando obras de viviendas en Toronto. Ahora construyo software igual: según el plano, a tiempo y hecho para durar. Full-stack con React, TypeScript y C#/.NET, y lo que construyo lo ejecuto en mi propio servidor.",
    "ctaSites": "Recorrer las obras",
    "ctaCv": "Imprimir mi CV",
    "permit": {
      "title": "Licencia de obra",
      "no": "N.º XG-2026-05",
      "contractor": "Contratista",
      "status": "Estado",
      "statusValue": "Disponible",
      "trade": "Oficio",
      "tradeValue": "Full-stack · DevOps",
      "licensed": "Permiso de trabajo",
      "licensedValue": "Canadá (PR) · UE",
      "log": "Registro de inspecciones · en vivo desde mi servidor",
      "last": "Última inspección",
      "offline": "Ahora no hay lectura: el servidor puede estar en reposo.",
      "passed": "Aprobado",
      "failed": "Fallido",
      "deploy": "Despliegue firmado verificado",
      "backup": "Copia de seguridad comprobada",
      "checks": "Comprobaciones superadas",
      "post": "Colóquese en lugar visible"
    },
    "sitesTitle": "Obras activas",
    "sitesHint": "Elige una obra para abrir su expediente",
    "site": "Obra",
    "stamps": {
      "live": "En vivo",
      "down": "Caído",
      "result": "0 → 27/59",
      "open": "Código abierto",
      "progress": "En curso"
    },
    "file": {
      "label": "Expediente",
      "problem": "Problema",
      "approach": "Enfoque",
      "hard": "La parte difícil",
      "result": "Resultado",
      "open": "Abrir el expediente completo",
      "source": "Código",
      "live": "Verlo en vivo"
    },
    "clientsTitle": "Webs para clientes",
    "clientsIntro": "Sitios que construí para un negocio en Atenas y una ONG en Kenia, en vivo en sus propios dominios.",
    "clientsCta": "Ver el trabajo para clientes",
    "engineTitle": "La sala de máquinas",
    "engineIntro": "Todo lo anterior corre en un portátil viejo que configuré como producción. Mira cómo está construido y qué está haciendo ahora mismo.",
    "engineCta": "Recorrer la sala de máquinas",
    "contactTitle": "¿Contratando? Hablemos.",
    "contactBody": "Puestos full-stack en Canadá o la UE. Respondo en menos de un día.",
    "contactCta": "Escríbeme",
    "diagram": {
      "title": "Cómo llega una petición a mi servidor",
      "alt": "Diagrama: un visitante llega a la red de Cloudflare, que reenvía por un túnel saliente a Caddy en el servidor doméstico y de ahí a los contenedores. Aparte, GitHub Actions construye y firma una imagen que el servidor descarga y verifica antes de desplegarla. Las copias de seguridad nocturnas y las alertas al móvil se ejecutan en el servidor.",
      "visitor": "Visitante",
      "edge": "Red de Cloudflare",
      "tunnel": "Túnel saliente",
      "proxy": "Caddy",
      "apps": "Contenedores",
      "ci": "GitHub Actions",
      "registry": "Imagen firmada",
      "deploy": "Descarga + verificación",
      "backup": "Copia nocturna",
      "alerts": "Alertas al móvil",
      "router": "Router de casa: sin puertos abiertos",
      "host": "Servidor doméstico"
    },
    "inspect": {
      "title": "Inspección de obra",
      "live": "Lectura en vivo",
      "loading": "Tomando una lectura…",
      "unavailable": "No hay lectura ahora mismo. El servidor puede estar suspendido o reiniciándose; los enlaces del cuadro de arriba muestran si cada servicio responde.",
      "taken": "Lectura tomada",
      "services": "Servicios que responden",
      "deploy": "Último despliegue",
      "verified": "firma verificada",
      "backup": "Última copia",
      "checks": "Comprobaciones superadas",
      "uptime": "Encendido desde hace",
      "days": "{n} d",
      "hours": "{n} h"
    }
  },
  "projects": {
    "label": "Proyectos",
    "note": "Conforme a obra",
    "title": "Trabajo seleccionado",
    "intro": "Abre cualquier proyecto para leer los detalles y, cuando la haya, una demo que puedes ejecutar aquí mismo en la página.",
    "open": "Abrir",
    "repo": "Ver repositorio",
    "liveDemo": "Demo en vivo",
    "alsoLabel": "También construido",
    "alsoTitle": "Piezas más pequeñas",
    "stack": "Stack",
    "role": "Rol",
    "source": "Código fuente",
    "close": "Cerrar",
    "liveNote": "Compilado de C a WebAssembly",
    "apiNote": "ASP.NET Core y PostgreSQL, verificado en cada push",
    "arenaNote": "Compilado de C++ a WebAssembly",
    "items": {
      "train-yard-manager": {
        "title": "Sistema de Gestión de Patio de Trenes",
        "role": "Proyecto grupal, Seneca Polytechnic",
        "summary": "Inventario ferroviario y validación de seguridad en C. Aplica límites de peso, la capacidad de tracción de las locomotoras y los protocolos por tipo de vagón, con una suite de pruebas que ejercita la misma capa de lógica.",
        "body": [
          "Un tren solo puede salir del patio si cumple un conjunto de reglas de acoplamiento y carga. Este sistema modela el inventario del patio y valida un tren contra esas reglas antes de poder darlo por aprobado.",
          "La restricción interesante es estructural más que algorítmica: todas las locomotoras deben ir al frente, el peso de la carga no puede superar la capacidad de tracción que ofrecen las locomotoras, los vagones de madera y de petróleo no pueden acoplarse de forma adyacente, y el primer vagón de carga nunca puede ser de petróleo. Quitar un vagón obliga a revalidar todo el conjunto, porque retirar uno puede invalidar lo que queda.",
          "Toda la entrada y salida por consola está aislada en main.c, así que train_yard.c es lógica pura, sin ningún printf o scanf en su interior. Esa separación es lo que permite que la suite de pruebas ejercite las mismas funciones, y también es lo que hizo posible la demo en el navegador: el C se compila a WebAssembly y se llama directamente, sin nada reimplementado en JavaScript."
        ]
      },
      "taskmanager-api": {
        "title": "TaskManager REST API",
        "role": "Proyecto personal",
        "summary": "API REST en contenedor con EF Core y PostgreSQL, escrituras protegidas con clave y una imagen firmada que mi servidor despliega automáticamente.",
        "body": [
          "Una API REST sobre un modelo de tareas, hecha para practicar con el pipeline de peticiones de ASP.NET Core y Entity Framework Core. Está en línea en mi servidor doméstico, con documentación Swagger interactiva en tasks.xgbuilds.dev.",
          "El esquema es code-first: EF Core genera las migraciones que crean el esquema de PostgreSQL. Las peticiones se enlazan a DTOs y no a la entidad, así que nadie puede fijar su propio id y sobrescribir una fila que no le corresponde.",
          "Las lecturas son públicas; las escrituras requieren una clave de API, comparada en tiempo constante. Cada push a main ejecuta la prueba de contrato contra un PostgreSQL real y luego compila, analiza y firma la imagen que despliega el servidor."
        ],
        "file": {
          "problem": "Construir una API REST como se construyen las de producción, no una lista de tareas de tutorial.",
          "approach": "Migraciones code-first con EF Core, DTOs para que nadie fije su propio id, lecturas públicas y escrituras con clave, en Docker.",
          "hard": "Que sea seguro dejarla abierta en internet: la clave de API se compara en tiempo constante y cada push ejecuta el test de contrato contra una PostgreSQL real antes de firmar la imagen.",
          "result": "En vivo en tasks.xgbuilds.dev con documentación Swagger, desplegada automáticamente cuando aparece una nueva imagen firmada."
        }
      },
      "inventory-crud": {
        "title": "CRUD de Inventario",
        "role": "Trabajo de curso, ampliado",
        "summary": "Gestión de categorías y proveedores sobre ASP.NET Core MVC — vistas Razor, view models y migraciones de EF Core sobre SQL Server.",
        "body": [
          "Una aplicación MVC renderizada en el servidor que cubre el ciclo completo de crear, leer, actualizar y eliminar en dos entidades relacionadas.",
          "Construida para entender el patrón MVC de principio a fin: el enrutamiento hacia los controladores, los controladores pasando view models —en lugar de entidades— a las vistas Razor, y las migraciones de EF Core manteniendo el esquema de SQL Server sincronizado con el modelo."
        ]
      },
      "arenacore": {
        "title": "Motor de RPG ArenaCore",
        "role": "Trabajo de curso",
        "summary": "Motor en C++ construido alrededor de una jerarquía abstracta de combatientes, aplicando la Regla de Tres, sobrecarga de operadores y gestión manual de memoria.",
        "body": [
          "Una pequeña arena por turnos usada como vehículo para los fundamentos de la orientación a objetos en C++: una interfaz abstracta de combatiente, las subclases concretas Warrior y Mage, y un contenedor Arena que posee su plantel a través de punteros crudos.",
          "Como Arena posee memoria de heap directamente, tiene que tomar una postura respecto a la copia. Elimina por completo el constructor de copia y la asignación de copia en lugar de escribir copias profundas, lo que mantiene la propiedad sin ambigüedades."
        ]
      },
      "portfolio": {
        "title": "Este portafolio",
        "role": "Proyecto personal",
        "summary": "El sitio que estás leyendo. React y Vite, un sistema de diseño en CSS hecho a mano, desplegado en GitHub Pages mediante un workflow de Actions en cada push.",
        "body": [
          "Construido sin un framework de UI ni una librería de componentes: el sistema de diseño es un conjunto de custom properties de CSS, y cada componente es JSX puro.",
          "El despliegue se ejecuta como un workflow de GitHub Actions: instala, compila y publica el resultado. La accesibilidad se verifica con axe-core, y el objetivo es cero violaciones, no una puntuación."
        ]
      },
      "resume-classifier": {
        "title": "Resume Classifier API",
        "role": "Proyecto propio",
        "summary": "Clasifica texto de currículums en cinco familias de empleo con TF-IDF y regresión logística, servido como API desde mi servidor doméstico.",
        "body": [
          "Un pipeline de scikit-learn (limpieza, características TF-IDF y regresión logística) servido con FastAPI. Se entrena con un corpus generado, porque los currículums reales son datos personales.",
          "El primer generador daba a cada puesto sus propias palabras y el modelo obtenía un 1,00 perfecto, que medía el conjunto de datos y no el modelo. Ahora el corpus comparte frases y herramientas entre campos, y el 45 % de los currículums toma una línea de otro campo. La precisión en texto generado ronda el 0,98: prueba de que el pipeline funciona de principio a fin, y nada más.",
          "Cada etiqueta incluye una confianza. Un texto sin relación obtiene cerca del 22 %, apenas por encima del 20 % del azar: es el modelo diciendo que no lo sabe."
        ],
        "file": {
          "problem": "Clasificar currículums por familia de puestos sin entrenar con datos personales de nadie.",
          "approach": "Un corpus generado, características TF-IDF y regresión logística, servido con FastAPI en un contenedor firmado.",
          "hard": "El primer modelo sacó un 1.00 perfecto. Eso medía el dataset, no el modelo: cada rol tenía sus propias palabras. Rehíce el corpus con relleno y herramientas compartidas entre áreas hasta que la puntuación significara algo.",
          "result": "En vivo y honesto: cada etiqueta lleva una confianza, y un texto sin relación saca un 22%, cerca del 20% del azar."
        }
      },
      "aoda-scan": {
        "title": "aoda-scan",
        "role": "Código abierto",
        "summary": "Herramienta de línea de comandos que recorre un sitio web entero y lo evalúa frente a WCAG 2.1 AA y la AODA de Ontario.",
        "body": [
          "La mayoría de herramientas de accesibilidad revisan una página cada vez, pero un sitio falla en conjunto: el mismo componente roto falla en cada página que lo usa. aoda-scan recorre el sitio, prueba cada página con axe-core en un navegador real y resume los resultados en una nota, un porcentaje de conformidad y una lista ordenada de qué corregir primero.",
          "Se ejecuta con npx aoda-scan y una URL. Muestra un resumen en la terminal y genera un informe HTML al lado."
        ],
        "file": {
          "problem": "Las herramientas de accesibilidad revisan una página cada vez, pero los sitios reales fallan igual en cincuenta.",
          "approach": "Recorre todo el sitio, ejecuta axe-core en cada página con Playwright y lo resume en una nota y una lista de arreglos por prioridad.",
          "hard": "Convertir el ruido en trabajo: un fallo en una cabecera compartida aparece en todas las páginas, así que el informe lo agrupa como un arreglo en vez de cincuenta hallazgos.",
          "result": "Código abierto, probado en Node 20, 22 y 24, con una GitHub Action que revisa un sitio en cada push."
        }
      },
      "agentmesh": {
        "title": "AgentMesh",
        "role": "Código abierto",
        "summary": "Plataforma autoalojada para ejecutar agentes de programación con IA en varios proveedores de modelos, donde cada usuario aporta sus propias claves.",
        "body": [
          "AgentMesh es software que ejecutas tú, no un servicio en el que te registras. Una aplicación Next.js y una API en Fastify lanzan agentes en cinco proveedores (Claude, Gemini, DeepSeek, Grok y Ollama), con transcripción en vivo y una pantalla para revisar cada cambio.",
          "La seguridad es el centro del diseño. Las claves de los proveedores están en una bóveda cifrada, los agentes corren en contenedores aislados que nunca ven una clave y sus peticiones pasan por un proxy interno que añade la clave, elimina secretos de los registros y limita la frecuencia. Por eso no hay demo pública."
        ],
        "file": {
          "problem": "Ejecutar agentes de programación con IA en varios proveedores sin entregar tus claves de API a los agentes.",
          "approach": "Una bóveda de credenciales y un proxy, cinco adaptadores de proveedores, un runner aislado y una pantalla para revisar lo que cambió el agente.",
          "hard": "El límite de seguridad: las claves viven solo en la bóveda, el proxy las inyecta por petición y el runner no tiene ruta a ninguno de los dos.",
          "result": "Fases 0 a 5 construidas y probadas; la publicación como código abierto está en curso."
        }
      },
      "home-server": {
        "title": "Servidor doméstico",
        "role": "Proyecto propio",
        "summary": "Un portátil antiguo gestionado como producción: Cloudflare Tunnel, despliegues firmados por pull, monitorización y copias de seguridad probadas.",
        "body": [
          "Los proyectos en línea de este sitio funcionan en un portátil Asus antiguo con 5,7 GB de RAM. Ese límite marcó cada decisión: cada contenedor tiene un tope de memoria, nada toca la configuración de red y ningún puerto está abierto a internet. El tráfico llega por un túnel saliente de Cloudflare.",
          "Los despliegues son por pull: la CI publica una imagen firmada y el servidor comprueba la firma contra el workflow exacto que la construyó antes de ejecutarla. Las decisiones quedan escritas como registros de decisiones de arquitectura y las caídas tienen su postmortem sin culpables."
        ],
        "file": {
          "problem": "Alojar mis proyectos desde un portátil en casa, por Wi-Fi, sin abrir ni un puerto en el router.",
          "approach": "Cloudflare Tunnel delante, Caddy dentro, el edge escrito como código en OpenTofu e imágenes firmadas que se verifican antes de cada despliegue.",
          "hard": "Copias que solo parecían estar bien: un cron se saltaba noches en silencio cuando el portátil estaba apagado. Lo pasé a un temporizador de systemd que recupera y añadí un aviso de hombre muerto que me escribe si falta una noche.",
          "result": "Dos APIs públicas en vivo, 49 comprobaciones automáticas superadas, alertas en el móvil y restauraciones probadas, no supuestas."
        }
      },
      "ai-eng": {
        "title": "ai-eng",
        "role": "Proyecto propio",
        "summary": "Aplica mutation testing a un diff escrito por IA para ver si tus tests detectarían un error real. En 59 errores reales de zod marcó 27; los tests existentes no detectaron ninguno.",
        "body": [
          "Una suite de tests en verde dice que los tests se ejecutaron. No dice si notarían que el código está mal, y cuanto más código escribe la IA, más importa esa diferencia.",
          "ai-eng toma un diff, muta solo las líneas cambiadas (condiciones invertidas, límites desplazados, signos cambiados) y ejecuta la suite existente contra cada mutante. Un mutante que sobrevive señala código que ningún test comprueba de verdad.",
          "Para medirlo con honestidad reintroduje 60 errores reales de la librería zod revirtiendo sus correcciones, y guardé el test de cada corrección como clave de respuestas."
        ],
        "file": {
          "problem": "Una suite en verde dice que los tests se ejecutaron, no que detectarían un error en código que una IA acaba de escribir.",
          "approach": "Mutation testing del diff: invertir una condición, un límite o un signo en las líneas cambiadas y ver si algún test lo nota.",
          "hard": "Demostrarlo con errores reales y no de juguete. Revertí 60 correcciones reales de la librería zod y guardé el test de cada corrección como clave de respuestas.",
          "result": "Los tests existentes detectaron 0 de 59 errores reintroducidos. ai-eng marcó las líneas erróneas en 27 (45,8%)."
        }
      }
    },
    "also": {
      "c-projects": {
        "title": "Proyectos en C",
        "note": "Búsqueda de popularidad de nombres de bebés sobre CSVs censales, y una app de consola para inventario de trenes."
      },
      "cpp-exercises": {
        "title": "Ejercicios de C++",
        "note": "Mercado, validación de tarjetas de crédito, pedidos de restaurante, ordenamiento, y un motor de tienda léxica."
      },
      "csharp-fundamentals": {
        "title": "Fundamentos de C#",
        "note": "Aplicaciones de consola que cubren los fundamentos de POO: simulador bancario, gestor de biblioteca, registro de calificaciones."
      },
      "shell-scripts": {
        "title": "Scripts de Shell",
        "note": "Scripts utilitarios para automatizar el flujo de trabajo de desarrollo."
      },
      "ai-tools": {
        "title": "Herramientas de IA para Programación",
        "note": "Notas y referencias sobre prompting, fundamentos de redes neuronales, y licenciamiento de software."
      }
    },
    "liveBadge": "En línea",
    "openLive": "Abrir en línea",
    "fileTitle": "Expediente"
  },
  "about": {
    "label": "Sobre mí",
    "scale": "Escala 1:1",
    "title": "De planos a diagramas de arquitectura",
    "paragraphs": [
      "Estudio Computer Programming & Analysis en Seneca Polytechnic, en Toronto, y soy de Grecia. También he trabajado en la construcción en Canadá, donde pasé de miembro de la cuadrilla a supervisor de obra, dirigiendo equipos y cumpliendo plazos bajo presión real. Por eso no idealizo el «entregar rápido»: he gestionado calendarios donde el coste de retrasarse era mucho más concreto que un ticket de Jira.",
      "Empecé a programar en un puesto de backend junior en Spinworks, en Atenas, con PHP, Symfony y OroCommerce en sistemas de comercio electrónico B2B. Ahí nació mi interés por el SaaS B2B, que me llevó a Mercell.",
      "Este verano desarrollé funcionalidades de front-end con React y TypeScript en Mercell, una empresa SaaS de contratación en Copenhague. Ahora estoy de vuelta en Toronto terminando mi diploma, creando sitios web para clientes y ejecutando mis propios proyectos en un servidor que monté y mantengo."
    ],
    "specs": {
      "based": "Ubicación",
      "focus": "Enfoque",
      "current": "Actual",
      "education": "Educación",
      "languages": "Idiomas",
      "status": "Estado"
    },
    "specValues": {
      "based": "Toronto, Canadá",
      "focus": "Full-stack — React, C#/.NET",
      "current": "Disponible para puestos junior e intermedios",
      "education": "Seneca Polytechnic",
      "languages": "Griego, Inglés",
      "status": "RP de Canada · Ciudadano UE"
    },
    "experienceLabel": "Experiencia",
    "experienceNote": "Alzado",
    "experienceTitle": "Dónde he trabajado",
    "skillsLabel": "Habilidades",
    "skillsNote": "Lista de materiales",
    "skillsTitle": "Herramientas que uso",
    "skillGroups": {
      "languages": "Lenguajes",
      "frameworks": "Frameworks",
      "data": "Datos e Infraestructura",
      "practice": "Prácticas"
    },
    "jobs": {
      "mercell": {
        "title": "Becario de Ingeniería de Software",
        "date": "jun – ago 2026",
        "bullets": [
          "Construí una biblioteca de documentos y un componente compartido de carga de archivos en React y TypeScript, ambos desplegados a producción para los usuarios de la plataforma.",
          "Resolví violaciones de accesibilidad en flujos de usuario clave, llevándolos a cumplir con WCAG.",
          "Entregué funcionalidades en un entorno Agile de ritmo acelerado: daily stand-ups, sprint planning, backlog refinement, PI planning."
        ]
      },
      "spinworks": {
        "title": "Desarrollador Backend Junior",
        "date": "Ago 2021 – Ago 2022",
        "bullets": [
          "Construí y mantuve plataformas de comercio electrónico B2B usando PHP, Symfony y OroCommerce.",
          "Reescribí consultas de base de datos lentas que afectaban el tiempo de carga en tiendas de alto tráfico.",
          "Realicé revisiones de código y pruebas de integración en un flujo de trabajo basado en Git antes de cada despliegue a producción."
        ]
      },
      "canera": {
        "title": "Supervisor de Obra",
        "date": "Sep 2022 – May 2026",
        "bullets": [
          "Ascendí de peón a supervisor; lideré cuadrillas y coordiné cronogramas bajo plazos estrictos.",
          "Gestioné la resolución de conflictos en obra y la asignación de recursos en entornos de alta presión."
        ]
      },
      "ssf": {
        "title": "Coordinador de Campus",
        "date": "Feb 2026 – Actualidad",
        "bullets": [
          "Elegido para representar al alumnado en Newnham Campus, actuando de enlace entre estudiantes, SSF y la administración."
        ]
      }
    }
  },
  "contact": {
    "label": "Contacto",
    "note": "Visto bueno",
    "title": "¿Construyendo algo en Copenhagen o Toronto?",
    "body": "Estoy abierto a puestos de ingeniería para recién graduados y junior, y encantado de hablar sobre front-end, .NET, o cualquier cosa cercana al metal.",
    "email": "Correo electrónico",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "demo": {
    "intro": "Un tren solo puede salir del patio si cumple todas las reglas de acoplamiento y carga. Añada vagones y observe qué reglas los rechazan — y tenga en cuenta que quitar un vagón también se rechaza cuando el tren que quedaría no es seguro.",
    "tryThis": "Pruebe uno de estos",
    "sentenceEnd": ".",
    "rejectedBecause": "Vagón de tipo {type} con peso {weight} rechazado — {reason}",
    "removeRejectedBecause": "El vagón {i} no se puede quitar — {reason}",
    "reasons": {
      "none": "aceptado",
      "nullTrain": "no hay tren",
      "trainFull": "el tren ya está en su límite de 50 vagones",
      "badType": "ese no es un tipo de vagón válido",
      "badWeight": "un vagón debe pesar más que nada",
      "totalWeight": "el tren superaría su límite de peso total de 20.000",
      "engineOrder": "todas las locomotoras deben ir al frente, y ya hay carga acoplada",
      "oilFirstFreight": "el primer vagón de carga detrás de las locomotoras no puede ser de petróleo",
      "woodOilAdjacent": "pondría un vagón de madera junto a uno de petróleo",
      "pullCapacity": "la carga pesaría más de lo que las locomotoras pueden remolcar",
      "badIndex": "no hay ningún vagón en esa posición",
      "lastEngine": "un tren debe conservar al menos una locomotora"
    },
    "scenarios": {
      "oilFirst": {
        "label": "Petróleo primero",
        "rejected": "Rechazado: {reason} Ponga primero un vagón de alimentos o de madera detrás de la locomotora; entonces el petróleo será admitido.",
        "accepted": "Aceptado."
      },
      "buffer": {
        "label": "Quitar el separador",
        "rejected": "Este es el caso interesante. El tren es Locomotora, Madera, Alimentos, Petróleo — el vagón de alimentos mantiene separados a la madera y el petróleo. Quitarlo se rechaza: {reason} Las reglas son simétricas, así que lo que no se puede construir tampoco se puede desmontar.",
        "accepted": "Aceptado."
      },
      "capacity": {
        "label": "Sobrecargar locomotoras",
        "rejected": "Rechazado: {reason} El peso total y la capacidad de tracción son límites separados — este tren está muy por debajo de 20.000, pero una locomotora solo puede remolcar 5.000.",
        "accepted": "Aceptado."
      },
      "engineOrder": {
        "label": "Locomotora al final",
        "rejected": "Rechazado: {reason} Las locomotoras solo se pueden añadir mientras todo vagón por delante de ellas sea también una locomotora.",
        "accepted": "Aceptado."
      }
    },
    "carType": "Tipo de vagón",
    "weight": "Peso",
    "addCar": "Añadir vagón",
    "reset": "Reiniciar",
    "remove": "Quitar",
    "removeCar": "Quitar vagón {i}, {type}, peso {weight}",
    "cars": "Vagones",
    "engines": "Locomotoras",
    "totalWeight": "Peso total",
    "freightCapacity": "Carga / capacidad",
    "status": "Estado",
    "safe": "SAFE",
    "unsafe": "UNSAFE",
    "loading": "Cargando el validador compilado…",
    "failed": "La demo interactiva no pudo cargar en este navegador. El código fuente y la suite de pruebas están enlazados arriba.",
    "added": "Vagón de tipo {type} con peso {weight} añadido.",
    "rejected": "El vagón de tipo {type} con peso {weight} fue rechazado: infringiría una de las reglas de abajo.",
    "removed": "Vagón {i} eliminado.",
    "removeRejected": "El vagón {i} no se puede quitar: el tren restante quedaría inválido.",
    "resetDone": "Tren reiniciado.",
    "rulesTitle": "Reglas aplicadas por el validador en C",
    "rules": [
      "Todas las locomotoras deben ir al frente del tren.",
      "El peso total no puede superar 20.000.",
      "El peso de la carga no puede superar la capacidad de tracción (5.000 por locomotora).",
      "Los vagones de madera y de petróleo no pueden estar adyacentes.",
      "El primer vagón de carga no puede ser de petróleo."
    ],
    "types": {
      "engine": "Locomotora",
      "food": "Alimento",
      "wood": "Madera",
      "oil": "Petróleo"
    }
  },
  "taskDemo": {
    "title": "Título de la tarea",
    "placeholder": "p. ej. Revisar el pull request",
    "add": "Añadir tarea",
    "complete": "Completar",
    "reopen": "Reabrir",
    "delete": "Eliminar",
    "created": "Tarea creada — la API devolvió 201 con su location.",
    "rejected": "Rechazada con 400 — una tarea necesita un título.",
    "deleted": "Eliminada — la API devolvió 204.",
    "waking": "La base de datos se está despertando… se duerme cuando está inactiva en el plan gratuito, así que la primera petición tarda un momento.",
    "offline": "La API en vivo no está disponible en este momento, así que aquí se muestra una sesión grabada. El código fuente y el registro completo de peticiones están enlazados arriba.",
    "unhosted": "La API está en línea en tasks.xgbuilds.dev: abre su página de Swagger para llamar tú mismo a los endpoints de lectura. Las escrituras requieren una clave de API, así que aquí tienes una sesión grabada con cada endpoint y el código que devuelve.",
    "transcriptCaption": "Peticiones registradas contra la API y el estado que devolvió cada una",
    "method": "Método",
    "endpoint": "Endpoint",
    "status": "Estado",
    "notesTitle": "Qué demuestra esto",
    "notes": [
      "Cada petición llega a un servicio real de ASP.NET Core respaldado por PostgreSQL, no a un mock.",
      "Las peticiones se vinculan a DTOs, así que quien llama no puede fijar el id ni la hora de creación — eso lo controla el servidor.",
      "Los códigos de estado son los que se espera que devuelva cada verbo: 201 con location al crear, 400 ante un cuerpo inválido, 404 para un id desconocido, 204 al actualizar y eliminar.",
      "La base de datos se escala a cero cuando está inactiva, así que la primera petición tras una pausa tiene que despertarla."
    ]
  },
  "arenaDemo": {
    "loading": "Cargando la arena compilada…",
    "failed": "La demo interactiva no se pudo cargar en este navegador. El código fuente está enlazado arriba.",
    "warrior": "Guerrero",
    "mage": "Mago",
    "health": "HP",
    "level": "Niv.",
    "damage": "DAÑ",
    "takeTurn": "Jugar turno",
    "hint": "Sube de nivel para pegar más fuerte, recibir menos y atacar primero: el nivel más alto siempre abre. Luego elige un rival.",
    "defence": "DEF",
    "opponent": "Rival",
    "ready": "Listo.",
    "reset": "Reiniciar",
    "finished": "Combate terminado",
    "addPower": "+3 poder",
    "levelUp": "Subir de nivel",
    "toAct": "actúa.",
    "wins": "gana.",
    "notesTitle": "Qué demuestra esto",
    "notes": [
      "Guerrero y Mago se compilan a partir del C++ del repositorio y se ejecutan aquí como WebAssembly — el combate no está reimplementado en JavaScript.",
      "El daño se despacha a través de la clase base abstracta Character, así que la subclase que actúa decide si se suman habilidades o poder mágico.",
      "Los cambios de salud pasan por el operator+= propio de la clase, y añadir poder usa operator+= en el tipo concreto.",
      "Los valores iniciales provienen del archivo de plantilla del repositorio, así que un combate aquí produce los mismos números que el binario nativo."
    ]
  },
  "footer": {
    "drawnBy": "Dibujado por",
    "location": "Ubicación",
    "contact": "Contacto",
    "revision": "Revisión"
  },
  "notFound": {
    "label": "Hoja no encontrada",
    "title": "No aparece en ningún plano",
    "body": "Esa página no existe. Puede que haya sido renombrada, o que el enlace sea incorrecto.",
    "home": "Volver al inicio",
    "projects": "Ver los proyectos"
  },
  "translationNote": "Esta página ha sido traducida con asistencia automática y revisada con el mayor cuidado posible, aunque no por un traductor profesional. La versión en inglés es la autoritativa.",
  "translationNoteShort": "Traducción asistida por máquina",
  "work": {
    "label": "Trabajo para clientes",
    "title": "Sitios web para clientes reales",
    "intro": "Sitios que creé para una empresa y una organización sin ánimo de lucro, ambos en línea con su propio dominio.",
    "client": "Cliente",
    "role": "Mi papel",
    "stack": "Tecnologías",
    "year": "Año",
    "visit": "Abrir el sitio",
    "items": {
      "azclean": {
        "title": "AZ Clean",
        "tagline": "Limpieza de sofás y colchones, Glyfada",
        "client": "AZ Clean, empresa de limpieza en Glyfada, Atenas",
        "role": "Diseño, desarrollo, dominio y lanzamiento",
        "summary": "Un sitio rápido en griego que explica a la gente del sur de Atenas qué ofrece el servicio y cómo reservarlo.",
        "body": [
          "AZ Clean limpia sofás, colchones, alfombras, coches y barcos en casa del cliente en toda el Ática. La empresa necesitaba un sitio que apareciera en las búsquedas locales y convirtiera una visita desde el móvil en una reserva.",
          "Lo construí con React y Vite y lo publiqué como archivos estáticos en GitHub Pages con el dominio azclean.gr. Registré el dominio, configuré el DNS y conecté Google Search Console con un sitemap para que las páginas se indexen."
        ]
      },
      "way": {
        "title": "WAY Empowerment",
        "tagline": "Empoderando a mujeres y jóvenes en Kenia",
        "client": "WAY (Women and Youth) Empowerment, ONG de voluntarios con sede en Dinamarca",
        "role": "Reconstrucción y relanzamiento",
        "summary": "Un sitio renovado que explica lo que hace la ONG y facilita donar, hacerse socio y colaborar como voluntario.",
        "body": [
          "WAY lleva proyectos de negocio para viudas y programas deportivos para jóvenes en Kenia. Su sitio anterior era difícil de navegar y no dejaba clara la forma de donar.",
          "Lo reconstruí como un tema de bloques de WordPress a medida en el alojamiento de one.com que ya tenía la ONG, conservando su logotipo y su contenido. El nuevo sitio empieza por la misión, da a cada programa su propia página y deja donar, hacerse socio y el voluntariado a un clic."
        ]
      }
    }
  },
  "engine": {
    "label": "Sala de máquinas",
    "title": "El servidor doméstico, tal como se construyó",
    "intro": "Un portátil viejo detrás de un Cloudflare Tunnel, configurado como producción. Ningún puerto abierto en mi router, cada imagen firmada y cada noche una copia de seguridad comprobada.",
    "statusTitle": "Ahora mismo",
    "stepsTitle": "Cómo llega un cambio a producción",
    "steps": [
      "Hago push a main. GitHub Actions ejecuta los tests, construye la imagen, la analiza y la firma.",
      "La imagen va al registro de GitHub con su firma y una lista de materiales (SBOM).",
      "Cada pocos minutos el servidor busca una imagen nueva y comprueba la firma antes de ejecutar nada.",
      "Solo una imagen verificada sustituye a la actual, y si falla una comprobación de salud, recibo una alerta en Telegram."
    ],
    "backupTitle": "Copias de seguridad que he restaurado de verdad",
    "backupBody": "Cada noche restic hace una copia cifrada en un disco USB y en Backblaze B2, y luego la comprueba. Un aviso de hombre muerto me escribe si falta una noche, y la restauración está probada, no supuesta.",
    "privateNote": "El código del servidor está en un repositorio privado mientras lo reviso en busca de secretos."
  },
  "cv": {
    "label": "CV",
    "title": "Currículum",
    "intro": "Una página, igual que el PDF. Imprímelo o descárgalo.",
    "print": "Imprimir",
    "pdfLetter": "PDF · Letter (Canadá)",
    "pdfA4": "PDF · A4 (UE)",
    "englishOnly": "El CV en sí está escrito en inglés."
  },
  "palette": {
    "placeholder": "Ir a una obra, página o acción…",
    "pages": "Páginas",
    "sites": "Obras",
    "actions": "Acciones",
    "copyEmail": "Copiar el email",
    "copied": "Email copiado",
    "theme": "Cambiar turno de día / noche",
    "language": "Idioma",
    "empty": "No hay coincidencias",
    "hint": "↑ ↓ para moverte · Enter para abrir · Esc para cerrar",
    "close": "Cerrar"
  },
  "privacy": {
    "label": "Privacidad",
    "title": "Privacidad",
    "updated": "Última actualización: 29 de septiembre de 2026",
    "short": "En resumen: sin cookies, sin analítica, sin anuncios, sin seguimiento. No me llega nada de tu visita.",
    "sections": [
      {
        "h": "Quién gestiona este sitio",
        "p": "Xenofon Gkioka, Toronto, Canadá. Para cualquier cuestión sobre tus datos: ksenofwn58@gmail.com."
      },
      {
        "h": "Lo que guarda tu navegador",
        "p": "Si eliges un idioma o cambias entre modo claro y oscuro, tu navegador recuerda esa elección en su almacenamiento local. Nunca sale de tu dispositivo y puedes borrarla cuando quieras desde los ajustes. No hay cookies."
      },
      {
        "h": "Lo que ven los proveedores de alojamiento",
        "p": "Como cualquier web, los servidores que la entregan tratan tu dirección IP para enviarte las páginas y protegerse de abusos. Este sitio está alojado en GitHub Pages (consulta la declaración de privacidad de GitHub). Las demos en vivo y el estado del servidor vienen de mi propio servidor a través de Cloudflare, que puede fijar una cookie de seguridad estrictamente necesaria (__cf_bm) en esas direcciones para filtrar bots (consulta la política de privacidad de Cloudflare). Mi servidor no guarda direcciones IP de visitantes."
      },
      {
        "h": "Las demos en vivo",
        "p": "El texto que pegas en el Resume Classifier se clasifica en memoria y nunca se guarda ni se registra. Aun así, no pegues datos personales reales. La API de TaskManager solo permite a los visitantes leer datos de ejemplo."
      },
      {
        "h": "Tipografías",
        "p": "Todas las tipografías se sirven desde este sitio. Tu navegador no hace ninguna petición a Google ni a otro servicio de fuentes."
      },
      {
        "h": "Si me escribes",
        "p": "Uso tu email solo para responderte. Pídemelo y lo borro."
      },
      {
        "h": "Tus derechos",
        "p": "Según el RGPD y la ley de privacidad canadiense puedes preguntar qué datos tengo sobre ti y pedir que se corrijan o borren. Como este sitio no recoge nada, la respuesta suele ser solo tus emails. Escríbeme a la dirección de arriba."
      }
    ]
  }
}
