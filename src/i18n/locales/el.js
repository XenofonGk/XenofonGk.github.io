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
    projects: 'Έργα',
    about: 'Σχετικά',
    contact: 'Επικοινωνία',
    language: 'Γλώσσα',
    theme: 'Εναλλαγή θέματος',
    skip: 'Μετάβαση στο κύριο περιεχόμενο',
    primary: 'Κύριο',
  },

  home: {
    eyebrow: 'Τορόντο → Κοπεγχάγη',
    revision: 'Αναθ. 2026',
    headlineStart: 'Χτίζω λογισμικό με τον τρόπο που έχτιζα ',
    headlineAccent: 'σπίτια',
    lede: 'Ξενοφών Γκιόκα — full-stack developer σε C#/.NET, React και TypeScript. Ασκούμενος Μηχανικός Λογισμικού στη Mercell, στην Κοπεγχάγη. Πρώην επιβλέπων εργοταξίου στο Τορόντο.',
    tags: ['Εντός προδιαγραφών', 'Στην ώρα του', 'Φέρον στοιχείο'],
    ctaWork: 'Δες τη δουλειά',
    ctaAbout: 'Σχετικά με εμένα',
    ctaContact: 'Επικοινώνησε',
    dims: [
      { num: '4', lbl: 'Χρόνια χτίζοντας πράγματα' },
      { num: '2', lbl: 'Χώρες από τις οποίες δούλεψα' },
      { num: 'C→WASM', lbl: 'Μεταγλωττισμένο για να τρέχει στον browser σου' },
      { num: '0', lbl: 'Παραβιάσεις προσβασιμότητας' },
    ],
    featuredLabel: 'Προτεινόμενο',
    featuredNote: 'Τρέχει στον browser',
    featuredTitle: 'Ένα πρόγραμμα C, τρέχει εδώ',
    featuredBody:
      'Ο validator του σιδηροδρομικού σταθμού είναι γραμμένος σε C και ελέγχεται με MSTest. Επειδή όλο το console I/O του είναι απομονωμένο στο main.c, το επίπεδο λογικής μεταγλωττίζεται καθαρά σε WebAssembly — οπότε ο ίδιος κώδικας που εκτελεί το test suite τρέχει απευθείας σε αυτή τη σελίδα. Τίποτα δεν είναι ξαναγραμμένο σε JavaScript.',
    featuredCta: 'Άνοιξε το demo',
  },

  projects: {
    label: 'Έργα',
    note: 'Ως κατασκευάστηκε',
    title: 'Επιλεγμένη δουλειά',
    intro:
      'Άνοιξε οποιοδήποτε έργο για την περιγραφή και, όπου υπάρχει, ένα demo που μπορείς να τρέξεις εδώ, μέσα στη σελίδα.',
    open: 'Άνοιγμα',
    repo: 'Προβολή αποθετηρίου',
    liveDemo: 'Ζωντανό demo',
    alsoLabel: 'Επίσης έφτιαξα',
    alsoTitle: 'Μικρότερα κομμάτια',
    stack: 'Τεχνολογίες',
    role: 'Ρόλος',
    source: 'Πηγή',
    close: 'Κλείσιμο',
    liveNote: 'Μεταγλωττισμένο από C σε WebAssembly',

    items: {
      'train-yard-manager': {
        title: 'Σύστημα Διαχείρισης Σιδηροδρομικού Σταθμού',
        role: 'Ομαδική εργασία, Seneca Polytechnic',
        summary:
          'Απογραφή βαγονιών και έλεγχος ασφαλείας σε C. Επιβάλλει όρια βάρους, ικανότητα έλξης ατμομηχανών και πρωτόκολλα τύπου βαγονιού, με ένα test suite που οδηγεί το ίδιο επίπεδο λογικής.',
        body: [
          'Ένα τρένο επιτρέπεται να φύγει από τον σταθμό μόνο αν ικανοποιεί ένα σύνολο κανόνων σύζευξης και φόρτωσης. Αυτό το σύστημα μοντελοποιεί την απογραφή του σταθμού και επικυρώνει ένα τρένο βάσει αυτών των κανόνων πριν αυτό εγκριθεί.',
          'Ο πιο ενδιαφέρων περιορισμός είναι δομικός παρά αλγοριθμικός: όλες οι μηχανές πρέπει να βρίσκονται στην αρχή, το βάρος του φορτίου δεν μπορεί να ξεπερνά την ικανότητα έλξης που προσφέρουν οι μηχανές, τα βαγόνια ξυλείας και πετρελαίου δεν επιτρέπεται να συζευχθούν διπλανά το ένα στο άλλο, και το πρώτο βαγόνι φορτίου δεν μπορεί ποτέ να είναι πετρέλαιο. Η αφαίρεση ενός βαγονιού απαιτεί επανέλεγχο όλων, γιατί η αφαίρεσή του μπορεί να ακυρώσει την εγκυρότητα των υπολοίπων.',
          'Όλο το console I/O είναι απομονωμένο στο main.c, οπότε το train_yard.c είναι καθαρή λογική, χωρίς printf ή scanf πουθενά μέσα του. Αυτός ο διαχωρισμός είναι που επιτρέπει στις ίδιες συναρτήσεις να οδηγούνται από το test suite, και είναι επίσης αυτό που έκανε εφικτό το demo στον browser — η C μεταγλωττίζεται σε WebAssembly και καλείται απευθείας, χωρίς τίποτα να είναι ξαναγραμμένο σε JavaScript.',
        ],
      },
      'taskmanager-api': {
        title: 'TaskManager REST API',
        role: 'Προσωπική πρωτοβουλία',
        summary:
          'API για λίστες εργασιών (todo) σε containers — Entity Framework Core με code-first migrations πάνω σε PostgreSQL, στημένο ως two-service stack με Docker Compose.',
        body: [
          'Ένα REST API πάνω σε ένα μοντέλο todo, φτιαγμένο για να αποκτήσω πρακτική εμπειρία με το request pipeline του ASP.NET Core και το Entity Framework Core, παρά για να παραδώσω ένα προϊόν.',
          'Το σχήμα της βάσης δεδομένων είναι code-first: το μοντέλο ορίζεται σε C#, και το EF Core δημιουργεί τα migrations που χτίζουν το σχήμα στην PostgreSQL. Το Docker Compose ανεβάζει το API και τη βάση μαζί ως ένα stack, οπότε όλο το σύστημα τρέχει με μία μόνο εντολή σε ένα καθαρό μηχάνημα.',
          'Τα requests δένονται σε DTOs και όχι απευθείας στην ίδια την entity. Αν δένονταν κατευθείαν στην entity, ο caller θα μπορούσε να στείλει δικό του id και το EF Core θα το δεχόταν, οπότε ένα request που αναφέρει μια υπάρχουσα εγγραφή θα μπορούσε να αντικαταστήσει μια άλλη που δεν έπρεπε ποτέ να αγγίξει. Τα connection strings παρέχονται μέσω environment variables και .NET user-secrets, αντί να γίνονται commit στο repository.',
        ],
      },
      'inventory-crud': {
        title: 'Inventory CRUD',
        role: 'Εργασία μαθήματος (επεκτεταμένη)',
        summary:
          'Διαχείριση κατηγοριών και προμηθευτών σε ASP.NET Core MVC — Razor views, view models, και EF Core migrations πάνω σε SQL Server.',
        body: [
          'Μια server-rendered εφαρμογή MVC που καλύπτει τον πλήρη κύκλο create, read, update και delete πάνω σε δύο σχετιζόμενες οντότητες.',
          'Φτιαγμένη για να κατανοήσω το μοτίβο MVC από άκρη σε άκρη: routing προς τους controllers, controllers που περνούν view models αντί για entities στα Razor views, και EF Core migrations που κρατούν το σχήμα της SQL Server συγχρονισμένο με το μοντέλο.',
        ],
      },
      arenacore: {
        title: 'ArenaCore RPG Engine',
        role: 'Εργασία μαθήματος',
        summary:
          'Μηχανή σε C++ χτισμένη γύρω από μια αφηρημένη ιεραρχία μαχητών (combatant), εφαρμόζοντας τον Κανόνα των Τριών (Rule of Three), operator overloading και χειροκίνητη διαχείριση μνήμης.',
        body: [
          'Μια μικρή arena turn-based που χρησιμοποιήθηκε ως όχημα για τα βασικά του αντικειμενοστρεφούς προγραμματισμού σε C++: ένα αφηρημένο interface combatant, συγκεκριμένες υποκλάσεις Warrior και Mage, και ένα container Arena που κατέχει τη λίστα του μέσα από raw pointers.',
          'Επειδή η Arena κατέχει απευθείας μνήμη στο heap, πρέπει να πάρει θέση απέναντι στην αντιγραφή. Διαγράφει εντελώς τον copy constructor και το copy assignment αντί να γράφει deep copies, κάτι που κρατά την ιδιοκτησία (ownership) σαφή.',
        ],
      },
      portfolio: {
        title: 'Αυτό το Portfolio',
        role: 'Προσωπική πρωτοβουλία',
        summary:
          'Η σελίδα που διαβάζεις αυτή τη στιγμή. React και Vite, ένα χειροφτιαγμένο design system σε CSS, που γίνεται deploy στο GitHub Pages από ένα Actions workflow σε κάθε push.',
        body: [
          'Φτιαγμένο χωρίς UI framework ή component library — το design system είναι ένα σύνολο από CSS custom properties, και κάθε component είναι απλό JSX.',
          'Το deployment τρέχει ως ένα GitHub Actions workflow: κάνει install, build και δημοσιεύει το αποτέλεσμα. Η προσβασιμότητα ελέγχεται με axe-core, και ο στόχος είναι μηδέν παραβιάσεις, όχι απλώς ένα σκορ.',
        ],
      },
    },

    also: {
      'c-projects': {
        title: 'Έργα σε C',
        note: 'Αναζήτηση δημοφιλίας ονομάτων μωρών πάνω σε CSV απογραφής, και μια console εφαρμογή απογραφής τρένων.',
      },
      'cpp-exercises': {
        title: 'Ασκήσεις σε C++',
        note: 'Marketplace, επικύρωση πιστωτικής κάρτας, παραγγελίες εστιατορίου, ταξινόμηση, και μια λεξική μηχανή αποθήκευσης.',
      },
      'csharp-fundamentals': {
        title: 'Βασικά της C#',
        note: 'Εφαρμογές κονσόλας που καλύπτουν τα βασικά του OOP — προσομοιωτής τράπεζας, διαχειριστής βιβλιοθήκης, καταγραφή βαθμών.',
      },
      'shell-scripts': {
        title: 'Σενάρια Shell',
        note: 'Βοηθητικά scripts για την αυτοματοποίηση της ροής ανάπτυξης.',
      },
      'ai-tools': {
        title: 'Εργαλεία Προγραμματισμού με AI',
        note: 'Σημειώσεις και αναφορές πάνω σε prompting, βασικά νευρωνικών δικτύων, και αδειοδότηση λογισμικού.',
      },
    },
  },

  about: {
    label: 'Σχετικά',
    scale: 'Κλίμακα 1:1',
    title: 'Από τα σχέδια στα διαγράμματα αρχιτεκτονικής',
    paragraphs: [
      "Είμαι δευτεροετής φοιτητής στον κλάδο Computer Programming στο Seneca Polytechnic, καταγόμενος από την Ελλάδα, και αυτή τη στιγμή μοιράζω τη βάση μου ανάμεσα στο Τορόντο και την Κοπεγχάγη. Πριν γράψω κώδικα επαγγελματικά δούλεψα στις κατασκευές στον Καναδά — προήχθην από μέλος συνεργείου σε επιβλέποντα εργοταξίου, καθοδηγώντας συνεργεία και τηρώντας προθεσμίες υπό πραγματική πίεση. Αυτό το υπόβαθρο είναι ο λόγος που δεν εξωραΐζω το «shipping fast»: έχω διαχειριστεί χρονοδιαγράμματα όπου το κόστος μιας καθυστέρησης ήταν πολύ πιο απτό από ένα Jira ticket.",
      "Μπήκα στον προγραμματισμό μέσα από μια junior θέση backend στη Spinworks, στην Αθήνα, δουλεύοντας με PHP, Symfony και OroCommerce πάνω σε συστήματα B2B e-commerce. Εκεί ξεκίνησε το ενδιαφέρον μου για το B2B SaaS, το οποίο με οδήγησε τελικά στη Mercell.",
      'Αυτή τη στιγμή χτίζω front-end features σε React και TypeScript στη Mercell, μια εταιρεία procurement SaaS στην Κοπεγχάγη, ενώ παράλληλα ολοκληρώνω το δίπλωμά μου και μαθαίνω μόνος μου το stack C#/.NET.',
    ],
    specs: {
      based: 'Έδρα',
      focus: 'Εστίαση',
      current: 'Τρέχον',
      education: 'Εκπαίδευση',
      languages: 'Γλώσσες',
      status: 'Καθεστώς',
    },
    specValues: {
      based: 'Τορόντο / Κοπεγχάγη',
      focus: 'Full-stack — React, C#/.NET',
      current: 'Ασκούμενος Μηχανικός Λογισμικού, Mercell',
      education: 'Seneca Polytechnic',
      languages: 'Ελληνικά, Αγγλικά',
      status: 'Μόνιμος Κάτοικος Καναδά · Πολίτης ΕΕ',
    },
    experienceLabel: 'Εμπειρία',
    experienceNote: 'Όψη',
    experienceTitle: 'Πού έχω δουλέψει',
    skillsLabel: 'Δεξιότητες',
    skillsNote: 'Κατάλογος υλικών',
    skillsTitle: 'Εργαλεία που χρησιμοποιώ',
    skillGroups: {
      languages: 'Γλώσσες',
      frameworks: 'Frameworks',
      data: 'Data & Infra',
      practice: 'Πρακτικές',
    },
    jobs: {
      mercell: {
        title: 'Ασκούμενος Μηχανικός Λογισμικού',
        date: 'Ιούν 2026 – Σήμερα',
        bullets: [
          'Έφτιαξα μια βιβλιοθήκη εγγράφων και ένα κοινόχρηστο component για ανέβασμα αρχείων σε React και TypeScript, και τα δύο σε production για τους χρήστες της πλατφόρμας.',
          'Επίλυσα παραβιάσεις προσβασιμότητας σε βασικές ροές χρηστών, φέρνοντάς τες σε συμμόρφωση με το WCAG.',
          'Παρέδωσα features μέσα σε ένα γρήγορο Agile περιβάλλον — daily stand-ups, sprint planning, backlog refinement, PI planning.',
        ],
      },
      spinworks: {
        title: 'Junior Προγραμματιστής Backend',
        date: 'Αύγ 2021 – Αύγ 2022',
        bullets: [
          'Έφτιαξα και συντήρησα πλατφόρμες B2B e-commerce χρησιμοποιώντας PHP, Symfony, και OroCommerce.',
          'Ξαναέγραψα αργά database queries που επηρέαζαν τον χρόνο φόρτωσης σε καταστήματα με υψηλή επισκεψιμότητα.',
          'Διεξήγαγα code reviews και integration testing σε ένα Git-based workflow πριν από κάθε production deploy.',
        ],
      },
      canera: {
        title: 'Επιβλέπων Εργοταξίου',
        date: 'Σεπ 2022 – Μάιος 2026',
        bullets: [
          'Προήχθην από μέλος συνεργείου σε επιβλέποντα· καθοδήγησα συνεργεία και συντόνισα χρονοδιαγράμματα υπό αυστηρές προθεσμίες.',
          'Διαχειρίστηκα την επίλυση συγκρούσεων επί τόπου και την κατανομή πόρων σε περιβάλλοντα υψηλής πίεσης.',
        ],
      },
      ssf: {
        title: 'Συντονιστής Πανεπιστημιούπολης',
        date: 'Φεβ 2026 – Σήμερα',
        bullets: [
          'Εκλεγμένος εκπρόσωπος του φοιτητικού σώματος στο Newnham Campus, λειτουργώντας ως σύνδεσμος μεταξύ φοιτητών, SSF και διοίκησης.',
        ],
      },
    },
  },

  contact: {
    label: 'Επικοινωνία',
    note: 'Υπογραφή',
    title: 'Χτίζεις κάτι στην Κοπεγχάγη ή στο Τορόντο;',
    body: 'Είμαι ανοιχτός σε θέσεις graduate και junior engineering, και ευχαρίστως θα μιλήσω για front-end δουλειά, .NET, ή οτιδήποτε είναι κοντά στο metal.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  demo: {
    carType: 'Τύπος βαγονιού',
    weight: 'Βάρος',
    addCar: 'Προσθήκη βαγονιού',
    reset: 'Επαναφορά',
    remove: 'Αφαίρεση',
    removeCar: 'Αφαίρεση βαγονιού {i}, {type}, βάρος {weight}',
    cars: 'Βαγόνια',
    engines: 'Μηχανές',
    totalWeight: 'Συνολικό βάρος',
    freightCapacity: 'Φορτίο / Χωρητικότητα',
    status: 'Κατάσταση',
    safe: 'SAFE',
    unsafe: 'UNSAFE',
    loading: 'Φόρτωση του μεταγλωττισμένου validator…',
    failed: 'Το διαδραστικό demo δεν μπόρεσε να φορτωθεί σε αυτόν τον browser. Ο πηγαίος κώδικας και το test suite είναι συνδεδεμένα παραπάνω.',
    added: 'Προστέθηκε βαγόνι {type} βάρους {weight}.',
    rejected: 'Το βαγόνι {type} βάρους {weight} απορρίφθηκε — θα παραβίαζε έναν από τους παρακάτω κανόνες.',
    removed: 'Το βαγόνι {i} αφαιρέθηκε.',
    removeRejected: 'Το βαγόνι {i} δεν μπορεί να αφαιρεθεί — το υπόλοιπο τρένο θα ήταν μη έγκυρο.',
    resetDone: 'Το τρένο επαναφέρθηκε.',
    rulesTitle: 'Κανόνες που επιβάλλονται από τον validator σε C',
    rules: [
      'Όλες οι μηχανές πρέπει να βρίσκονται στην αρχή του τρένου.',
      'Το συνολικό βάρος δεν μπορεί να ξεπερνά τις 20.000.',
      'Το βάρος του φορτίου δεν μπορεί να ξεπερνά την ικανότητα έλξης (5.000 ανά μηχανή).',
      'Τα βαγόνια ξυλείας και πετρελαίου δεν μπορούν να είναι διπλανά.',
      'Το πρώτο βαγόνι φορτίου δεν μπορεί να είναι πετρέλαιο.',
    ],
    types: {
      engine: 'Μηχανή',
      food: 'Τρόφιμα',
      wood: 'Ξυλεία',
      oil: 'Πετρέλαιο',
    },
  },

  footer: {
    drawnBy: 'Σχεδιάστηκε από',
    location: 'Τοποθεσία',
    contact: 'Επικοινωνία',
    revision: 'Αναθεώρηση',
  },

  notFound: {
    label: 'Το σχέδιο δεν βρέθηκε',
    title: 'Δεν υπάρχει σε κανένα σχέδιο',
    body: 'Αυτή η σελίδα δεν υπάρχει. Μπορεί να έχει μετονομαστεί, ή ο σύνδεσμος να είναι λάθος.',
    home: 'Πίσω στην αρχή',
    projects: 'Δες τα έργα',
  },

  /* Shown in the language menu and the footer whenever a non-verified locale is
     active. Deliberately plain — it is a statement about provenance, not an
     apology. */
  translationNote:
    'Αυτή η σελίδα έχει μεταφραστεί με μηχανική υποβοήθηση και έχει ελεγχθεί όσο πιο προσεκτικά μπόρεσα, αλλά όχι από επαγγελματία μεταφραστή. Η αγγλική έκδοση είναι η επίσημη.',
  translationNoteShort: 'Μετάφραση με μηχανική υποβοήθηση',
}
