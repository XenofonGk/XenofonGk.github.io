import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      subtitle: "Software Engineer Portfolio",
      tagline:
        "Specializing in low-level systems programming, robust enterprise backend solutions, and accessible, high-performance web applications.",
      experienceTitle: "Professional Timeline",
      experienceSub:
        "Verified commercial experience in full-time and sprint team operations.",
      projectsTitle: "Technical Showcases",
      projectsSub:
        "Filter across production architectures, automated test suites, and database systems.",
      connectTitle: "Let's Connect",
      connectSub:
        "I am actively looking for my next core engineering opportunity. Let's discuss backend production pipelines, React architecture patterns, or memory optimization strategies.",
      formSend: "Send Message",
      formSending: "Sending Message...",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Message",
      formPlaceholder:
        "Describe your project, timeline, or open role requirements...",
      mercellTitle: "Software Engineer Intern",
      mercellDetails:
        "Collaborating within an Agile engineering team to deliver frontend features and maintain global shared components used across the entire product ecosystem. Actively picking up diverse sprint tasks ranging from core UI development and feature enhancements to enterprise-wide WCAG accessibility optimization.",
      spinworksTitle: "Junior Software Engineer",
      spinworksDetails:
        "Developed an enterprise B2B e-commerce platform using PHP and OroCommerce frameworks.",
      p1Title: "Global Shared Components & Accessibility",
      p1Desc:
        "Maintained and optimized core shared components used across all Mercell frontend applications. Resolved global layout issues—including sidebar navigation nesting violations (ui/li structure)—and color contrast bugs to ensure enterprise-wide WCAG compliance.",
      p2Title: "B2B E-Commerce Platform",
      p2Desc:
        "Developed and maintained a production-ready enterprise B2B application during my time at Spinworks Ltd, utilizing OroCommerce and custom PHP workflows.",
      p3Title: "LexiStore: Key-Value Database Engine",
      p3Desc:
        "A high-performance, completely custom Key-Value database engine built from scratch focusing on raw performance and manual memory architecture.",
      p4Title: "Train Yard Safety Management System",
      p4Desc:
        "An industrial inventory system enforcing strict safety protocol checks, locomotive pull capacity limits, and custom C++ unit testing architecture (MSTest).",
      p5Title: "Baby Name Finder & Data Analyzer",
      p5Desc:
        "A data analysis tool processing 180,000+ records across 110 years of CSV data, featuring case-insensitive searching and custom ASCII terminal data visualization.",
    },
  },
  zh: {
    translation: {
      subtitle: "软件工程师作品集",
      tagline:
        "专注于底层系统编程、高可靠性企业后端解决方案以及无障碍、高性能的Web应用程序。",
      experienceTitle: "职业时间线",
      experienceSub: "经验证的全职和敏捷团队开发商业经验。",
      projectsTitle: "技术成果展示",
      projectsSub: "筛选生产级架构、自动化测试套件和数据库系统项目。",
      connectTitle: "保持联系",
      connectSub:
        "我正在积极寻找核心工程师的发展机会。欢迎探讨后端生产管线、React架构模式或内存优化策略。",
      formSend: "发送留言",
      formSending: "正在发送...",
      formName: "姓名",
      formEmail: "电子邮箱",
      formMessage: "留言内容",
      formPlaceholder: "请描述您的项目需求、时间线或岗位招聘要求...",
      mercellTitle: "软件工程师实习生",
      mercellDetails:
        "在敏捷工程团队中协作开发前端功能，并维护贯穿整个产品生态系统的全局共享组件。积极承接各类迭代任务，涵盖核心UI开发、功能增强以及企业级WCAG无障碍可访问性优化。",
      spinworksTitle: "初级软件工程师",
      spinworksDetails:
        "使用PHP和OroCommerce框架开发并维护企业级B2B电子商务平台。",
      p1Title: "全局共享组件与无障碍开发",
      p1Desc:
        "维护和优化用于所有Mercell前端应用程序的核心共享组件。解决了全局布局问题——包括侧边栏导航嵌套违规（ui/li 结构）——以及色彩对比度漏洞，以确保企业级WCAG合规性。",
      p2Title: "B2B电子商务平台",
      p2Desc:
        "在Spinworks Ltd期间，利用OroCommerce和自定义PHP工作流开发并维护了生产级企业B2B应用程序。",
      p3Title: "LexiStore: 键值数据库引擎",
      p3Desc:
        "一个高性能、完全自研的键值数据库引擎，从零开始构建，专注于原生性能和手动内存架构。",
      p4Title: "火车站场安全管理系统",
      p4Desc:
        "一种工业库存系统，执行严格的安全协议检查、机车牵引能力限制以及定制的C++单元测试架构（MSTest）。",
      p5Title: "婴儿姓名查找器与数据分析器",
      p5Desc:
        "一款数据分析工具，可处理110年CSV数据中的180,000多条记录，具有不区分大小写的搜索和自定义ASCII终端数据可视化功能。",
    },
  },
  hi: {
    translation: {
      subtitle: "सॉफ्टवेयर इंजीनियर पोर्टफोलियो",
      tagline:
        "लो-लेवल सिस्टम प्रोग्रामिंग, मजबूत एंटरप्राइज बैकएंड सॉल्यूशंस और सुलभ, हाई-परफॉर्मेंस वेब एप्लिकेशन्स में विशेषज्ञता।",
      experienceTitle: "प्रोफेशनल टाइमलाइन",
      experienceSub:
        "पूर्णकालिक और स्प्रिंट टीम ऑपरेशन्स में सत्यापित व्यावसायिक अनुभव।",
      projectsTitle: "तकनीकी शोकेस",
      projectsSub:
        "प्रोडक्शन आर्किटेक्चर, ऑटोमेटेड टेस्ट सूट्स और डेटाबेस सिस्टम को फ़िल्टर करें।",
      connectTitle: "आइए जुड़ें",
      connectSub:
        "मैं सक्रिय रूप से अपने अगले कोर इंजीनियरिंग अवसर की तलाश कर रहा हूं। बैकएंड प्रोडक्शन पाइपलाइनों, रिएक्ट आर्किटेक्चर पैटर्न, या मेमोरी ऑप्टिमाइजेशन रणनीतियों पर चर्चा करें।",
      formSend: "संदेश भेजें",
      formSending: "संदेश भेजा जा रहा है...",
      formName: "पूरा नाम",
      formEmail: "ईमेल पता",
      formMessage: "संदेश",
      formPlaceholder:
        "अपने प्रोजेक्ट, टाइमलाइन या ओपन रोल आवश्यकताओं का वर्णन करें...",
      mercellTitle: "सॉफ्टवेयर इंजीनियर इंटर्न",
      mercellDetails:
        "फ्रंटエンド फीचर्स देने और पूरे उत्पाद पारिस्थितिकी तंत्र में उपयोग किए जाने वाले वैश्विक साझा घटकों को बनाए रखने के लिए एक चुस्त इंजीनियरिंग टीम के भीतर सहयोग करना। मुख्य यूआई विकास और फीचर एन्हांसमेंट से लेकर एंटरप्राइज़-वाइड WCAG एक्सेसिबिलिटी ऑप्टिमाइजेशन तक विविध स्प्रिंट कार्यों को सक्रिय रूप से चुनना।",
      spinworksTitle: "जूनियर सॉफ्टवेयर इंजीनियर",
      spinworksDetails:
        "PHP और OroCommerce फ्रेमवर्क का उपयोग करके एक एंटरप्राइज B2B ई-कॉमर्स प्लेटफॉर्म विकसित किया।",
      p1Title: "वैश्विक साझा घटक और पहुंच",
      p1Desc:
        "सभी मर्चेल फ्रंटएंड अनुप्रयोगों में उपयोग किए जाने वाले मुख्य साझा घटकों को बनाए रखा और अनुकूलित किया। वैश्विक लेआउट मुद्दों का समाधान किया गया- जिसमें साइडबार नेविगेशन नेस्टिंग उल्लंघन (यूआई/ली संरचना) शामिल है- और एंटरप्राइज़-वाइड WCAG अनुपालन सुनिश्चित करने के लिए रंग विपरीत कीड़े।",
      p2Title: "बी2बी ई-कॉमर्स प्लेटफॉर्म",
      p2Desc:
        "ओरोकॉमर्स और कस्टम पीएचपी वर्कफ़्लो का उपयोग करके स्पिनवर्क्स लिमिटेड में मेरे समय के दौरान एक प्रोडक्शन-रेडी एंटरप्राइज़ बी2बी एप्लिकेशन विकसित और बनाए रखा गया।",
      p3Title: "लेक्सीस्टोर: की-वैल्यू डेटाबेस इंजन",
      p3Desc:
        "रॉ प्रदर्शन और मैन्युअल मेमोरी आर्किटेक्चर पर ध्यान केंद्रित करते हुए स्क्रैच से निर्मित एक उच्च-प्रदर्शन, पूरी तरह से कस्टम की-वैल्यू डेटाबेस इंजन।",
      p4Title: "ट्रेन यार्ड सुरक्षा प्रबंधन प्रणाली",
      p4Desc:
        "सख्त सुरक्षा प्रोटोकॉल जांच, लोकोमोटिव पुल क्षमता सीमा और कस्टम सी ++ यूनिट परीक्षण आर्किटेक्चर (एमएसटेस्ट) को लागू करने वाली एक औद्योगिक सूची प्रणाली।",
      p5Title: "बेबी नाम खोजक और डेटा विश्लेषक",
      p5Desc:
        "110 वर्षों के सीएसवी डेटा में 180,000+ रिकॉर्ड्स को संसाधित करने वाला एक डेटा विश्लेषण टूल, जिसमें केस-असंवेदनशील खोज और कस्टम एएससीआईआई टर्मिनल डेटा विज़ुअलाइज़ेशन शामिल है।",
    },
  },
  es: {
    translation: {
      subtitle: "Portafolio de Ingeniería de Software",
      tagline:
        "Especializado en programación de sistemas de bajo nivel, soluciones robustas de backend empresarial y aplicaciones web accesibles y de alto rendimiento.",
      experienceTitle: "Historial Profesional",
      experienceSub:
        "Experiencia comercial verificada en operaciones de tiempo completo y equipos de sprint.",
      projectsTitle: "Demostraciones Técnicas",
      projectsSub:
        "Filtre entre arquitecturas de producción, suites de pruebas automatizadas y sistemas de bases de datos.",
      connectTitle: "Conectemos",
      connectSub:
        "Busco activamente mi próxima oportunidad en ingeniería central. ¡Hablemos de pipelines de producción backend, patrones de arquitectura React o estrategias de optimización de memoria!",
      formSend: "Enviar Mensaje",
      formSending: "Enviando Mensaje...",
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formMessage: "Mensaje",
      formPlaceholder:
        "Describa su proyecto, plazos o requisitos del puesto...",
      mercellTitle: "Ingeniero de Software Pasante",
      mercellDetails:
        "Colaboración dentro de un equipo de ingeniería ágil para entregar funcionalidades frontend y mantener componentes compartidos globales utilizados en todo el ecosistema del producto. Asumiendo activamente tareas de sprint que van desde el desarrollo de la interfaz de usuario principal hasta la optimización de la accesibilidad WCAG a nivel empresarial.",
      spinworksTitle: "Ingeniero de Software Junior",
      spinworksDetails:
        "Desarrollo de una plataforma de comercio electrónico B2B empresarial utilizando los frameworks PHP y OroCommerce.",
      p1Title: "Componentes Compartidos Globales y Accesibilidad",
      p1Desc:
        "Mantenimiento y optimización de componentes compartidos centrales utilizados en todas las aplicaciones frontend de Mercell. Se resolvieron problemas de diseño global, incluidas las violaciones de anidamiento de navegación de la barra lateral (estructura ui/li) y los errores de contraste de color para garantizar el cumplimiento de WCAG a nivel de toda la empresa.",
      p2Title: "Plataforma de Comercio Electrónico B2B",
      p2Desc:
        "Desarrollo y mantenimiento de una aplicación B2B empresarial lista para producción durante mi tiempo en Spinworks Ltd, utilizando OroCommerce y flujos de trabajo PHP personalizados.",
      p3Title: "LexiStore: Motor de Base de Datos Clave-Valor",
      p3Desc:
        "Un motor de base de datos Clave-Valor de alto rendimiento completamente personalizado, construido desde cero con un enfoque en el rendimiento bruto y la arquitectura de memoria manual.",
      p4Title: "Sistema de Gestión de Seguridad en Patios de Trenes",
      p4Desc:
        "Un sistema de inventario industrial que aplica controles estrictos de protocolos de seguridad, límites de capacidad de tracción de locomotoras y una arquitectura de pruebas unitarias C++ personalizada (MSTest).",
      p5Title: "Buscador de Nombres de Bebés y Analizador de Datos",
      p5Desc:
        "Una herramienta de análisis de datos que procesa más de 180,000 registros a lo largo de 110 años de datos CSV, con búsqueda insensible a mayúsculas y minúsculas y visualización de datos en terminal ASCII personalizada.",
    },
  },
  fr: {
    translation: {
      subtitle: "Portfolio d'Ingénieur Logiciel",
      tagline:
        "Spécialisé dans la programmation de systèmes de bas niveau, les solutions backend d'entreprise robustes et les applications web accessibles et performantes.",
      experienceTitle: "Parcours Professionnel",
      experienceSub:
        "Expérience commerciale vérifiée au sein d'équipes à plein temps et en mode sprint.",
      projectsTitle: "Vitrines Techniques",
      projectsSub:
        "Filtrez parmi les architectures de production, les suites de tests automatisés et les systèmes de bases de données.",
      connectTitle: "Contactez-moi",
      connectSub:
        "Je recherche activement ma prochaine opportunité en ingénierie. Discutons de pipelines de production backend, d'architecture React ou de stratégies d'optimisation de la mémoire !",
      formSend: "Envoyer le Message",
      formSending: "Envoi en cours...",
      formName: "Nom Complet",
      formEmail: "Adresse E-mail",
      formMessage: "Message",
      formPlaceholder:
        "Décrivez votre projet, vos délais ou les exigences du poste...",
      mercellTitle: "Stagiaire Ingénieur Logiciel",
      mercellDetails:
        "Collaboration au sein d'une équipe d'ingénierie Agile pour livrer des fonctionnalités frontend et maintenir des composants partagés mondiaux utilisés dans tout l'écosystème du produit. Prise en charge active de tâches de sprint variées allant du développement de l'UI principale à l'optimisation de l'accessibilité WCAG à l'échelle de l'entreprise.",
      spinworksTitle: "Ingénieur Logiciel Junior",
      spinworksDetails:
        "Développement d'une plateforme e-commerce B2B d'entreprise à l'aide des frameworks PHP et OroCommerce.",
      p1Title: "Composants Partagés Mondiaux & Accessibilité",
      p1Desc:
        "Maintenance et optimisation des composants partagés de base utilisés dans toutes les applications frontend de Mercell. Résolution des problèmes de mise en page globale, y compris les violations d'imbrication de navigation dans la barre latérale (structure ui/li), et les bogues de contraste de couleurs pour assurer la conformité WCAG à l'échelle de l'entreprise.",
      p2Title: "Plateforme E-Commerce B2B",
      p2Desc:
        "Développement et maintenance d'une application B2B d'entreprise prête pour la production pendant mon temps chez Spinworks Ltd, en utilisant OroCommerce et des flux de travail PHP personnalisés.",
      p3Title: "LexiStore: Moteur de Base de Données Clé-Valeur",
      p3Desc:
        "Un moteur de base de données Clé-Valeur ultra-performant et entièrement personnalisé, construit à partir de zéro en mettant l'accent sur les performances brutes et l'architecture de mémoire manuelle.",
      p4Title: "Système de Gestion de la Sécurité des gares de Triage",
      p4Desc:
        "Un système d'inventaire industriel imposant des vérifications strictes des protocoles de sécurité, des limites de capacité de traction des locomotives et une architecture de tests unitaires C++ personnalisée (MSTest).",
      p5Title: "Chercheur de Prénoms de Bébé & Analyseur de Données",
      p5Desc:
        "Un outil d'analyse de données traitant plus de 180 000 enregistrements sur 110 ans de données CSV, avec recherche insensible à la casse et visualisation des données de terminal ASCII personnalisée.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
