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
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Message",
      formPlaceholder:
        "Describe your project, timeline, or open role requirements...",
      formSend: "Send Message",
      formSending: "Sending Message...",
      mercellTitle: "Software Engineer Intern",
      mercellDetails:
        "Collaborating within an Agile engineering team to deliver frontend features and maintain global shared components used across the entire product ecosystem. Actively picking up diverse sprint tasks ranging from core UI development and feature enhancements to enterprise-wide WCAG accessibility optimization.",
      spinworksTitle: "Junior Software Engineer",
      spinworksDetails:
        "Developed an enterprise B2B e-commerce platform using PHP and OroCommerce frameworks.",
    },
  },
  zh: {
    // Mandarin Chinese
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
      formName: "姓名",
      formEmail: "电子邮箱",
      formMessage: "留言内容",
      formPlaceholder: "请描述您的项目需求、时间线或岗位招聘要求...",
      formSend: "发送留言",
      formSending: "正在发送...",
      mercellTitle: "软件工程师实习生",
      mercellDetails:
        "在敏捷工程团队中协作开发前端功能，并维护贯穿整个产品生态系统的全局共享组件。积极承接各类迭代任务，涵盖核心UI开发、功能增强以及企业级WCAG无障碍可访问性优化。",
      spinworksTitle: "初级软件工程师",
      spinworksDetails:
        "使用PHP和OroCommerce框架开发并维护企业级B2B电子商务平台。",
    },
  },
  hi: {
    // Hindi
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
      formName: "पूरा नाम",
      formEmail: "ईमेल पता",
      formMessage: "संदेश",
      formPlaceholder:
        "अपने प्रोजेक्ट, टाइमलाइन या ओपन रोल आवश्यकताओं का वर्णन करें...",
      formSend: "संदेश भेजें",
      formSending: "संदेश भेजा जा रहा है...",
      mercellTitle: "सॉफ्टवेयर इंजीनियर इंटर्न",
      mercellDetails:
        "फ्रंटएंड फीचर्स देने और पूरे उत्पाद पारिस्थितिकी तंत्र में उपयोग किए जाने वाले वैश्विक साझा घटकों को बनाए रखने के लिए एक चुस्त इंजीनियरिंग टीम के भीतर सहयोग करना। मुख्य यूआई विकास और फीचर एन्हांसमेंट से लेकर एंटरप्राइज़-वाइड WCAG एक्सेसिबिलिटी ऑप्टिमाइजेशन तक विविध स्प्रिंट कार्यों को सक्रिय रूप से चुनना।",
      spinworksTitle: "जूनियर सॉफ्टवेयर इंजीनियर",
      spinworksDetails:
        "PHP और OroCommerce फ्रेमवर्क का उपयोग करके एक एंटरप्राइज B2B ई-कॉमर्स प्लेटफॉर्म विकसित किया।",
    },
  },
  es: {
    // Spanish
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
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formMessage: "Mensaje",
      formPlaceholder:
        "Describa su proyecto, plazos o requisitos del puesto...",
      formSend: "Enviar Mensaje",
      formSending: "Enviando Mensaje...",
      mercellTitle: "Ingeniero de Software Pasante",
      mercellDetails:
        "Colaboración dentro de un equipo de ingeniería ágil para entregar funcionalidades frontend y mantener componentes compartidos globales utilizados en todo el ecosistema del producto. Asumiendo activamente tareas de sprint que van desde el desarrollo de la interfaz de usuario principal hasta la optimización de la accesibilidad WCAG a nivel empresarial.",
      spinworksTitle: "Ingeniero de Software Junior",
      spinworksDetails:
        "Desarrollo de una plataforma de comercio electrónico B2B empresarial utilizando los frameworks PHP y OroCommerce.",
    },
  },
  fr: {
    // French
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
      formName: "Nom Complet",
      formEmail: "Adresse E-mail",
      formMessage: "Message",
      formPlaceholder:
        "Décrivez votre projet, vos délais ou les exigences du poste...",
      formSend: "Envoyer le Message",
      formSending: "Envoi en cours...",
      mercellTitle: "Stagiaire Ingénieur Logiciel",
      mercellDetails:
        "Collaboration au sein d'une équipe d'ingénierie Agile pour livrer des fonctionnalités frontend et maintenir des composants partagés mondiaux utilisés dans tout l'écosystème du produit. Prise en charge active de tâches de sprint variées allant du développement de l'UI principale à l'optimisation de l'accessibilité WCAG à l'échelle de l'entreprise.",
      spinworksTitle: "Ingénieur Logiciel Junior",
      spinworksDetails:
        "Développement d'une plateforme e-commerce B2B d'entreprise à l'aide des frameworks PHP et OroCommerce.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default setting
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
