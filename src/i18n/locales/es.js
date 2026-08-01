/*
 * Source of truth for every user-visible string.
 *
 * Only translatable prose lives here. Structural data that is the same in every
 * language — slugs, repo URLs, stack names, dates, email — stays in src/data.
 *
 * Keys must match exactly across locale files; a missing key falls back to this
 * file rather than rendering empty.
 */

export default {
  nav: {
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    language: 'Idioma',
    theme: 'Cambiar tema',
    skip: 'Saltar al contenido principal',
    primary: 'Principal',
  },

  home: {
    eyebrow: 'Toronto → Copenhagen',
    revision: 'Rev. 2026',
    headlineStart: 'Construyo software de la misma manera en que antes construía ',
    headlineAccent: 'casas',
    lede: 'Xenofon Gkioka — desarrollador full-stack que trabaja con C#/.NET, React y TypeScript. Becario de Ingeniería de Software en Mercell, en Copenhagen. Anteriormente supervisor de obra en Toronto.',
    tags: ['Según el plano', 'A tiempo', 'Portante'],
    ctaWork: 'Ver el trabajo',
    ctaAbout: 'Sobre mí',
    ctaContact: 'Contactar',
    dims: [
      { num: '4', lbl: 'Años construyendo cosas' },
      { num: '2', lbl: 'Países desde los que he trabajado' },
      { num: 'C→WASM', lbl: 'Compilado para correr en tu navegador' },
      { num: '0', lbl: 'Violaciones de accesibilidad' },
    ],
    featuredLabel: 'Destacado',
    featuredNote: 'Se ejecuta en el navegador',
    featuredTitle: 'Un programa en C, ejecutándose aquí',
    featuredBody:
      'El validador de patio de trenes está escrito en C y probado con MSTest. Como toda su entrada y salida por consola está aislada en main.c, la capa de lógica compila sin problemas a WebAssembly, así que el mismo código que ejercita la suite de pruebas se ejecuta directamente en esta página. Nada está reimplementado en JavaScript.',
    featuredCta: 'Abrir la demo',
  },

  projects: {
    label: 'Proyectos',
    note: 'Conforme a obra',
    title: 'Trabajo seleccionado',
    intro:
      'Abre cualquier proyecto para leer los detalles y, cuando la haya, una demo que puedes ejecutar aquí mismo en la página.',
    open: 'Abrir',
    repo: 'Ver repositorio',
    liveDemo: 'Demo en vivo',
    alsoLabel: 'También construido',
    alsoTitle: 'Piezas más pequeñas',
    stack: 'Stack',
    role: 'Rol',
    source: 'Código fuente',
    close: 'Cerrar',
    liveNote: 'Compilado de C a WebAssembly',
    apiNote: 'ASP.NET Core y PostgreSQL, verificado en cada push',
    arenaNote: 'Compilado de C++ a WebAssembly',

    items: {
      'train-yard-manager': {
        title: 'Sistema de Gestión de Patio de Trenes',
        role: 'Proyecto grupal, Seneca Polytechnic',
        summary:
          'Inventario ferroviario y validación de seguridad en C. Aplica límites de peso, la capacidad de tracción de las locomotoras y los protocolos por tipo de vagón, con una suite de pruebas que ejercita la misma capa de lógica.',
        body: [
          'Un tren solo puede salir del patio si cumple un conjunto de reglas de acoplamiento y carga. Este sistema modela el inventario del patio y valida un tren contra esas reglas antes de poder darlo por aprobado.',
          'La restricción interesante es estructural más que algorítmica: todas las locomotoras deben ir al frente, el peso de la carga no puede superar la capacidad de tracción que ofrecen las locomotoras, los vagones de madera y de petróleo no pueden acoplarse de forma adyacente, y el primer vagón de carga nunca puede ser de petróleo. Quitar un vagón obliga a revalidar todo el conjunto, porque retirar uno puede invalidar lo que queda.',
          'Toda la entrada y salida por consola está aislada en main.c, así que train_yard.c es lógica pura, sin ningún printf o scanf en su interior. Esa separación es lo que permite que la suite de pruebas ejercite las mismas funciones, y también es lo que hizo posible la demo en el navegador: el C se compila a WebAssembly y se llama directamente, sin nada reimplementado en JavaScript.',
        ],
      },
      'taskmanager-api': {
        title: 'TaskManager REST API',
        role: 'Proyecto personal',
        summary:
          'API de tareas en contenedores — Entity Framework Core con migraciones code-first sobre PostgreSQL, desplegada como un stack de dos servicios con Docker Compose.',
        body: [
          'Una API REST sobre un modelo de tareas, construida para experimentar de primera mano con el pipeline de peticiones de ASP.NET Core y con Entity Framework Core, más que para lanzar un producto.',
          'El esquema de la base de datos es code-first: el modelo se define en C#, y EF Core genera las migraciones que construyen el esquema de PostgreSQL. Docker Compose levanta la API y la base de datos juntas como un solo stack, de modo que todo funciona con un único comando en una máquina limpia.',
          "Las peticiones se vinculan a DTOs y no directamente a la entidad. Si el binding se hiciera directamente sobre la entidad, quien llama podría enviar su propio id y EF Core lo aceptaría, de modo que una petición que nombrara una fila existente podría sobrescribir una que nunca debía tocar. Las cadenas de conexión se proporcionan mediante variables de entorno y user-secrets de .NET, en lugar de quedar guardadas en el repositorio.",
        ],
      },
      'inventory-crud': {
        title: 'CRUD de Inventario',
        role: 'Trabajo de curso, ampliado',
        summary:
          'Gestión de categorías y proveedores sobre ASP.NET Core MVC — vistas Razor, view models y migraciones de EF Core sobre SQL Server.',
        body: [
          'Una aplicación MVC renderizada en el servidor que cubre el ciclo completo de crear, leer, actualizar y eliminar en dos entidades relacionadas.',
          'Construida para entender el patrón MVC de principio a fin: el enrutamiento hacia los controladores, los controladores pasando view models —en lugar de entidades— a las vistas Razor, y las migraciones de EF Core manteniendo el esquema de SQL Server sincronizado con el modelo.',
        ],
      },
      arenacore: {
        title: 'Motor de RPG ArenaCore',
        role: 'Trabajo de curso',
        summary:
          'Motor en C++ construido alrededor de una jerarquía abstracta de combatientes, aplicando la Regla de Tres, sobrecarga de operadores y gestión manual de memoria.',
        body: [
          'Una pequeña arena por turnos usada como vehículo para los fundamentos de la orientación a objetos en C++: una interfaz abstracta de combatiente, las subclases concretas Warrior y Mage, y un contenedor Arena que posee su plantel a través de punteros crudos.',
          'Como Arena posee memoria de heap directamente, tiene que tomar una postura respecto a la copia. Elimina por completo el constructor de copia y la asignación de copia en lugar de escribir copias profundas, lo que mantiene la propiedad sin ambigüedades.',
        ],
      },
      portfolio: {
        title: 'Este portafolio',
        role: 'Proyecto personal',
        summary:
          'El sitio que estás leyendo. React y Vite, un sistema de diseño en CSS hecho a mano, desplegado en GitHub Pages mediante un workflow de Actions en cada push.',
        body: [
          'Construido sin un framework de UI ni una librería de componentes: el sistema de diseño es un conjunto de custom properties de CSS, y cada componente es JSX puro.',
          'El despliegue se ejecuta como un workflow de GitHub Actions: instala, compila y publica el resultado. La accesibilidad se verifica con axe-core, y el objetivo es cero violaciones, no una puntuación.',
        ],
      },
    },

    also: {
      'c-projects': {
        title: 'Proyectos en C',
        note: 'Búsqueda de popularidad de nombres de bebés sobre CSVs censales, y una app de consola para inventario de trenes.',
      },
      'cpp-exercises': {
        title: 'Ejercicios de C++',
        note: 'Mercado, validación de tarjetas de crédito, pedidos de restaurante, ordenamiento, y un motor de tienda léxica.',
      },
      'csharp-fundamentals': {
        title: 'Fundamentos de C#',
        note: 'Aplicaciones de consola que cubren los fundamentos de POO: simulador bancario, gestor de biblioteca, registro de calificaciones.',
      },
      'shell-scripts': {
        title: 'Scripts de Shell',
        note: 'Scripts utilitarios para automatizar el flujo de trabajo de desarrollo.',
      },
      'ai-tools': {
        title: 'Herramientas de IA para Programación',
        note: 'Notas y referencias sobre prompting, fundamentos de redes neuronales, y licenciamiento de software.',
      },
    },
  },

  about: {
    label: 'Sobre mí',
    scale: 'Escala 1:1',
    title: 'De planos a diagramas de arquitectura',
    paragraphs: [
      'Soy estudiante de segundo año de Computer Programming en Seneca Polytechnic, originario de Greece y actualmente radicado entre Toronto y Copenhagen. Antes de escribir una sola línea de código de forma profesional trabajé en construcción en Canada, donde ascendí de peón a supervisor de obra, liderando cuadrillas y cumpliendo plazos bajo presión real. Ese pasado es la razón por la que no romantizo eso de "lanzar rápido": he gestionado cronogramas donde el costo de fallar era bastante más concreto que un ticket de Jira.',
      'Entré en la programación a través de un puesto junior de backend en Spinworks, en Athens, trabajando con PHP, Symfony y OroCommerce en sistemas de comercio electrónico B2B. Ahí nació mi interés por el SaaS B2B, lo que finalmente me llevó a Mercell.',
      'Ahora mismo desarrollo funcionalidades de front-end en React y TypeScript en Mercell, una empresa de SaaS de compras en Copenhagen, mientras termino mi diploma y aprendo por mi cuenta el stack de C#/.NET.',
    ],
    specs: {
      based: 'Ubicación',
      focus: 'Enfoque',
      current: 'Actual',
      education: 'Educación',
      languages: 'Idiomas',
      status: 'Estado',
    },
    specValues: {
      based: 'Toronto / Copenhagen',
      focus: 'Full-stack — React, C#/.NET',
      current: 'Becario SWE, Mercell',
      education: 'Seneca Polytechnic',
      languages: 'Griego, Inglés',
      status: 'RP de Canada · Ciudadano UE',
    },
    experienceLabel: 'Experiencia',
    experienceNote: 'Alzado',
    experienceTitle: 'Dónde he trabajado',
    skillsLabel: 'Habilidades',
    skillsNote: 'Lista de materiales',
    skillsTitle: 'Herramientas que uso',
    skillGroups: {
      languages: 'Lenguajes',
      frameworks: 'Frameworks',
      data: 'Datos e Infraestructura',
      practice: 'Prácticas',
    },
    jobs: {
      mercell: {
        title: 'Becario de Ingeniería de Software',
        date: 'Jun 2026 – Actualidad',
        bullets: [
          'Construí una biblioteca de documentos y un componente compartido de carga de archivos en React y TypeScript, ambos desplegados a producción para los usuarios de la plataforma.',
          'Resolví violaciones de accesibilidad en flujos de usuario clave, llevándolos a cumplir con WCAG.',
          'Entregué funcionalidades en un entorno Agile de ritmo acelerado: daily stand-ups, sprint planning, backlog refinement, PI planning.',
        ],
      },
      spinworks: {
        title: 'Desarrollador Backend Junior',
        date: 'Ago 2021 – Ago 2022',
        bullets: [
          'Construí y mantuve plataformas de comercio electrónico B2B usando PHP, Symfony y OroCommerce.',
          'Reescribí consultas de base de datos lentas que afectaban el tiempo de carga en tiendas de alto tráfico.',
          'Realicé revisiones de código y pruebas de integración en un flujo de trabajo basado en Git antes de cada despliegue a producción.',
        ],
      },
      canera: {
        title: 'Supervisor de Obra',
        date: 'Sep 2022 – May 2026',
        bullets: [
          'Ascendí de peón a supervisor; lideré cuadrillas y coordiné cronogramas bajo plazos estrictos.',
          'Gestioné la resolución de conflictos en obra y la asignación de recursos en entornos de alta presión.',
        ],
      },
      ssf: {
        title: 'Coordinador de Campus',
        date: 'Feb 2026 – Actualidad',
        bullets: [
          'Elegido para representar al alumnado en Newnham Campus, actuando de enlace entre estudiantes, SSF y la administración.',
        ],
      },
    },
  },

  contact: {
    label: 'Contacto',
    note: 'Visto bueno',
    title: '¿Construyendo algo en Copenhagen o Toronto?',
    body: 'Estoy abierto a puestos de ingeniería para recién graduados y junior, y encantado de hablar sobre front-end, .NET, o cualquier cosa cercana al metal.',
    email: 'Correo electrónico',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  demo: {
    intro: "Un tren solo puede salir del patio si cumple todas las reglas de acoplamiento y carga. Añada vagones y observe qué reglas los rechazan — y tenga en cuenta que quitar un vagón también se rechaza cuando el tren que quedaría no es seguro.",
    tryThis: 'Pruebe uno de estos',
    sentenceEnd: '.',
    rejectedBecause: 'Vagón de tipo {type} con peso {weight} rechazado — {reason}',
    removeRejectedBecause: 'El vagón {i} no se puede quitar — {reason}',
    reasons: {
      none: 'aceptado',
      nullTrain: 'no hay tren',
      trainFull: 'el tren ya está en su límite de 50 vagones',
      badType: 'ese no es un tipo de vagón válido',
      badWeight: 'un vagón debe pesar más que nada',
      totalWeight: 'el tren superaría su límite de peso total de 20.000',
      engineOrder: 'todas las locomotoras deben ir al frente, y ya hay carga acoplada',
      oilFirstFreight: 'el primer vagón de carga detrás de las locomotoras no puede ser de petróleo',
      woodOilAdjacent: 'pondría un vagón de madera junto a uno de petróleo',
      pullCapacity: 'la carga pesaría más de lo que las locomotoras pueden remolcar',
      badIndex: 'no hay ningún vagón en esa posición',
      lastEngine: 'un tren debe conservar al menos una locomotora',
    },
    scenarios: {
      oilFirst: {
        label: 'Petróleo primero',
        rejected: "Rechazado: {reason} Ponga primero un vagón de alimentos o de madera detrás de la locomotora; entonces el petróleo será admitido.",
        accepted: 'Aceptado.',
      },
      buffer: {
        label: 'Quitar el separador',
        rejected: 'Este es el caso interesante. El tren es Locomotora, Madera, Alimentos, Petróleo — el vagón de alimentos mantiene separados a la madera y el petróleo. Quitarlo se rechaza: {reason} Las reglas son simétricas, así que lo que no se puede construir tampoco se puede desmontar.',
        accepted: 'Aceptado.',
      },
      capacity: {
        label: 'Sobrecargar locomotoras',
        rejected: 'Rechazado: {reason} El peso total y la capacidad de tracción son límites separados — este tren está muy por debajo de 20.000, pero una locomotora solo puede remolcar 5.000.',
        accepted: 'Aceptado.',
      },
      engineOrder: {
        label: 'Locomotora al final',
        rejected: 'Rechazado: {reason} Las locomotoras solo se pueden añadir mientras todo vagón por delante de ellas sea también una locomotora.',
        accepted: 'Aceptado.',
      },
    },
    carType: 'Tipo de vagón',
    weight: 'Peso',
    addCar: 'Añadir vagón',
    reset: 'Reiniciar',
    remove: 'Quitar',
    removeCar: 'Quitar vagón {i}, {type}, peso {weight}',
    cars: 'Vagones',
    engines: 'Locomotoras',
    totalWeight: 'Peso total',
    freightCapacity: 'Carga / capacidad',
    status: 'Estado',
    safe: 'SAFE',
    unsafe: 'UNSAFE',
    loading: 'Cargando el validador compilado…',
    failed: 'La demo interactiva no pudo cargar en este navegador. El código fuente y la suite de pruebas están enlazados arriba.',
    added: 'Vagón de tipo {type} con peso {weight} añadido.',
    rejected: 'El vagón de tipo {type} con peso {weight} fue rechazado: infringiría una de las reglas de abajo.',
    removed: 'Vagón {i} eliminado.',
    removeRejected: 'El vagón {i} no se puede quitar: el tren restante quedaría inválido.',
    resetDone: 'Tren reiniciado.',
    rulesTitle: 'Reglas aplicadas por el validador en C',
    rules: [
      'Todas las locomotoras deben ir al frente del tren.',
      'El peso total no puede superar 20.000.',
      'El peso de la carga no puede superar la capacidad de tracción (5.000 por locomotora).',
      'Los vagones de madera y de petróleo no pueden estar adyacentes.',
      'El primer vagón de carga no puede ser de petróleo.',
    ],
    types: {
      engine: 'Locomotora',
      food: 'Alimento',
      wood: 'Madera',
      oil: 'Petróleo',
    },
  },

  taskDemo: {
    title: 'Título de la tarea',
    placeholder: 'p. ej. Revisar el pull request',
    add: 'Añadir tarea',
    complete: 'Completar',
    reopen: 'Reabrir',
    delete: 'Eliminar',
    created: 'Tarea creada — la API devolvió 201 con su location.',
    rejected: 'Rechazada con 400 — una tarea necesita un título.',
    deleted: 'Eliminada — la API devolvió 204.',
    waking: "La base de datos se está despertando… se duerme cuando está inactiva en el plan gratuito, así que la primera petición tarda un momento.",
    offline: 'La API en vivo no está disponible en este momento, así que aquí se muestra una sesión grabada. El código fuente y el registro completo de peticiones están enlazados arriba.',
    unhosted: "Esta API no está desplegada en un host público. Se ejecuta con un solo comando mediante Docker Compose, y cada endpoint de abajo se vuelve a verificar contra una PostgreSQL real en cada push: el badge del repositorio muestra el último resultado.",
    transcriptCaption: 'Peticiones registradas contra la API y el estado que devolvió cada una',
    method: 'Método',
    endpoint: 'Endpoint',
    status: 'Estado',
    notesTitle: 'Qué demuestra esto',
    notes: [
      'Cada petición llega a un servicio real de ASP.NET Core respaldado por PostgreSQL, no a un mock.',
      "Las peticiones se vinculan a DTOs, así que quien llama no puede fijar el id ni la hora de creación — eso lo controla el servidor.",
      'Los códigos de estado son los que se espera que devuelva cada verbo: 201 con location al crear, 400 ante un cuerpo inválido, 404 para un id desconocido, 204 al actualizar y eliminar.',
      'La base de datos se escala a cero cuando está inactiva, así que la primera petición tras una pausa tiene que despertarla.',
    ],
  },

  arenaDemo: {
    loading: 'Cargando la arena compilada…',
    failed: 'La demo interactiva no se pudo cargar en este navegador. El código fuente está enlazado arriba.',
    warrior: 'Guerrero',
    mage: 'Mago',
    health: 'HP',
    level: 'Niv.',
    damage: 'DAÑ',
    takeTurn: 'Jugar turno',
    hint: "Sube de nivel para pegar más fuerte, recibir menos y atacar primero: el nivel más alto siempre abre. Luego elige un rival.",
    defence: 'DEF',
    opponent: 'Rival',
    ready: 'Listo.',
    reset: 'Reiniciar',
    finished: 'Combate terminado',
    addPower: '+3 poder',
    levelUp: 'Subir de nivel',
    toAct: 'actúa.',
    wins: 'gana.',
    notesTitle: 'Qué demuestra esto',
    notes: [
      "Guerrero y Mago se compilan a partir del C++ del repositorio y se ejecutan aquí como WebAssembly — el combate no está reimplementado en JavaScript.",
      'El daño se despacha a través de la clase base abstracta Character, así que la subclase que actúa decide si se suman habilidades o poder mágico.',
      "Los cambios de salud pasan por el operator+= propio de la clase, y añadir poder usa operator+= en el tipo concreto.",
      'Los valores iniciales provienen del archivo de plantilla del repositorio, así que un combate aquí produce los mismos números que el binario nativo.',
    ],
  },

  footer: {
    drawnBy: 'Dibujado por',
    location: 'Ubicación',
    contact: 'Contacto',
    revision: 'Revisión',
  },

  notFound: {
    label: 'Hoja no encontrada',
    title: 'No aparece en ningún plano',
    body: 'Esa página no existe. Puede que haya sido renombrada, o que el enlace sea incorrecto.',
    home: 'Volver al inicio',
    projects: 'Ver los proyectos',
  },

  /* Shown in the language menu and the footer whenever a non-verified locale is
     active. Deliberately plain — it is a statement about provenance, not an
     apology. */
  translationNote:
    'Esta página ha sido traducida con asistencia automática y revisada con el mayor cuidado posible, aunque no por un traductor profesional. La versión en inglés es la autoritativa.',
  translationNoteShort: 'Traducción asistida por máquina',
}
