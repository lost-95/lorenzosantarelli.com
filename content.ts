// All site copy, in English (main language) and Italian.
// Source of truth: the final CVs (EN/IT). Keep both languages in sync.
import { Content, Lang } from './types';

export const EMAIL = 'lorenzosantarelli95@gmail.com';
export const PHONE = '+39 335 672 0071';
export const LINKEDIN = 'https://www.linkedin.com/in/lorenzo-santarelli/';
export const GITHUB = 'https://github.com/lost-95';
export const CV_EN = '/Lorenzo_Santarelli_CV_EN.pdf';
export const CV_IT = '/Lorenzo_Santarelli_CV_IT.pdf';

const F1_LIVE = '/f1-predictor/';
const F1_REPO = 'https://github.com/lost-95/f1-predictor';
const CHURN_REPO = 'https://github.com/lost-95/customer-churn-banking';
const NEXUX = 'https://nexuxstudio.it/';

const en: Content = {
  meta: {
    title: 'Lorenzo Santarelli | AI & Automation Specialist | IT Manager',
    description:
      'Lorenzo Santarelli – AI & Automation Specialist and IT Manager. Python tools, process automation, LLM integrations and IT management. Projects, experience and CV.',
  },
  pageTitles: {
    home: 'Lorenzo Santarelli | AI & Automation Specialist | IT Manager',
    experience: 'Experience | Lorenzo Santarelli',
    projects: 'Projects | Lorenzo Santarelli',
    contact: 'Contact | Lorenzo Santarelli',
    notFound: 'Page not found | Lorenzo Santarelli',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    menu: 'Menu',
    switchTo: 'Leggi in italiano',
    skip: 'Skip to content',
  },
  title: 'AI & Automation Specialist | IT Manager',
  location: 'Civitanova Marche, Italy',
  cvFile: CV_EN,
  home: {
    badge: 'Open to AI Automation and Digital Transformation roles · Remote / EU',
    intro:
      'I work across IT management, automation and applied AI. I develop Python tools and practical technology solutions that simplify business operations and improve existing systems.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    focusTitle: 'What I work on',
    focusSubtitle: 'The kind of problems I deal with day to day.',
    focus: [
      {
        title: 'Process automation',
        text: 'Repetitive manual work – reports, data reconciliation, lead handling – replaced with Python tools and n8n workflows.',
      },
      {
        title: 'Applied AI',
        text: 'LLMs, RAG and AI agents connected to real business processes, with human review where a decision matters.',
      },
      {
        title: 'Software development',
        text: 'Web apps for the local network, API integrations and maintenance of legacy business software.',
      },
      {
        title: 'IT management',
        text: 'Servers, virtual machines, Active Directory, network configuration and Microsoft 365, plus vendors and technology projects.',
      },
    ],
    workTitle: 'Selected work',
    workSubtitle: 'Projects and case studies, described with what was actually built.',
    allProjects: 'See all projects',
    readMore: 'Read the case study',
    skillsTitle: 'Technical skills',
    skillsSubtitle: 'What I use in my work and projects.',
    nextTitle: 'Where I’m heading',
    nextText: [
      'I want to keep building AI solutions inside business processes: automations that save real time, LLM integrations that people actually use, and better internal systems.',
      'I’m looking for AI Automation and Digital Transformation roles, ideally in an international, remote-first team, with room to grow towards technical project management.',
    ],
    nextCta: 'Get in touch',
  },
  skills: [
    {
      category: 'AI & Machine Learning',
      items: [
        'AI agents and automated workflows',
        'Chatbots',
        'LLM integration',
        'RAG with vector databases',
        'Regression, classification and decision tree models',
        'Model training and evaluation',
      ],
    },
    {
      category: 'Python & Automation',
      items: ['Python scripting', 'pandas, openpyxl', 'Data processing and pipelines', 'Process automation', 'n8n workflows'],
    },
    {
      category: 'Data & API Integration',
      items: ['Analysis, cleaning and manipulation of large datasets', 'SQL', 'Excel', 'API integration', 'Google Workspace integration'],
    },
    {
      category: 'IT Infrastructure',
      items: ['Servers', 'Virtual machines', 'Active Directory', 'Network configuration', 'Microsoft 365 administration'],
    },
    {
      category: 'Development Tools',
      items: ['Git', 'VS Code', 'Jupyter Notebook', 'Claude Code', 'JavaScript and XML (legacy maintenance)'],
    },
  ],
  experiencePage: {
    title: 'Experience',
    subtitle: 'AI & Automation Specialist | IT Manager',
    downloadEn: 'CV in English (PDF)',
    downloadIt: 'CV in Italian (PDF)',
    experience: 'Work experience',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    skills: 'Technical skills',
  },
  experience: [
    {
      role: 'AI & Automation Specialist | IT Manager',
      company: 'Zeis Excelsa S.p.A.',
      place: 'Montegranaro (FM), Italy',
      dates: 'Jun 2026 – Present',
      intro: 'Hired mainly to build automations and support AI adoption.',
      bullets: [
        'Rebuilt the company’s barcode decoder from scratch in Python, as a web app on the local network, to make reading merchandise barcodes simpler and faster.',
        'Developed Python tools (pandas, openpyxl) that automate commercial reporting and support logistics analysis and data reconciliation.',
        'Use LLMs and AI tools every day for development and analysis, and help colleagues adopt them.',
        'Run IT and consolidate the infrastructure: servers, virtual machines, Active Directory, network configuration and Microsoft 365 administration.',
        'Coordinate external vendors and the company’s technology projects.',
      ],
      tags: ['Python', 'pandas', 'openpyxl', 'LLMs', 'Active Directory', 'Microsoft 365'],
    },
    {
      role: 'Automation Specialist (Freelance)',
      company: 'Nexux Studio',
      dates: 'Feb 2026 – May 2026',
      link: { label: 'nexuxstudio.it', href: NEXUX, external: true },
      intro: 'A short freelance engagement on how a small business acquires and handles new leads.',
      bullets: [
        'Analysed the existing lead intake process, found where it was slow or manual, and redesigned it.',
        'Built n8n automations connecting Telegram and WhatsApp chatbots, Google Workspace (Drive and other services) and LLM APIs.',
        'Added automated lead scoring and classification, with different operational paths depending on the prospect.',
        'Set up automated emails and real-time notifications on the owner’s phone, so new contacts get a timely reply.',
        'Defined a first-contact procedure with human review and approval at set steps.',
        'Delivered the tools together with a working method to organise, assess and follow up new contacts consistently. I also designed and built the studio’s website.',
      ],
      tags: ['n8n', 'Telegram', 'WhatsApp', 'Google Workspace', 'LLM APIs'],
    },
    {
      role: 'Software Developer – ERP (Internship)',
      company: 'SYS-DAT Group',
      dates: 'Oct 2025 – Feb 2026',
      bullets: [
        'Helped develop and maintain D-Moda Web and D-Moda Retail, management software for fashion companies.',
        'Maintained and updated legacy code, using SQL, XML and JavaScript to find and fix application bugs.',
        'Worked within the development team’s process: tickets, testing, documentation and releases.',
      ],
      tags: ['SQL', 'XML', 'JavaScript'],
    },
    {
      role: 'Project Coordinator',
      company: 'WebWiseItalia (startup)',
      dates: 'Mar 2023 – Jul 2025',
      bullets: [
        'Coordinated a small team – a designer, a developer and a salesperson – setting priorities and deadlines.',
        'Delivered web apps, landing pages and showcase websites to improve clients’ online presence and conversions.',
        'Turned client requests into tasks and followed them through to delivery.',
      ],
      tags: ['Project coordination', 'Web apps', 'Landing pages'],
    },
  ],
  education: [
    { title: 'BSc Computer Science (in progress)', school: 'University of Camerino (UNICAM)' },
    { title: 'Erasmus exchange – Computer Engineering', school: 'Universidad de Sevilla', dates: 'Sep 2022 – Feb 2023' },
    { title: 'Technical High School Diploma', school: 'Information Technology' },
  ],
  certifications: [
    { name: 'Google AI Essentials', issuer: 'Google' },
    { name: 'Machine Learning A–Z', issuer: 'SuperDataScience' },
    { name: 'SQL for Data Analysis', issuer: 'Maven Analytics' },
  ],
  languages: ['Italian (native)', 'English B2 (Cambridge)'],
  projectsPage: {
    title: 'Projects',
    subtitle: 'Personal projects and work case studies. Company work is described without confidential data.',
    problem: 'Problem',
    solution: 'What I built',
    result: 'Result',
    githubTitle: 'Code on GitHub',
    githubText: 'F1 Race Predictor and Customer Churn are public repositories. Company work stays private.',
    githubCta: 'Open GitHub profile',
  },
  projects: [
    {
      id: 'f1-predictor',
      title: 'F1 Race Predictor',
      kind: 'Personal project · Live app',
      summary: 'A web app that predicts Formula 1 race results from about 25 years of race history and weather data.',
      problem:
        'Predict the finishing order of the next Grand Prix using only public data, and keep the predictions up to date after every race weekend without manual work.',
      solution: [
        'Data pipeline from the Jolpica F1 API (results, qualifying, lap times) and Open-Meteo (race-day weather), from 2001 to today.',
        'LightGBM ranking models that order drivers by expected performance, before and after qualifying.',
        'A scheduled GitHub Actions job fetches new results, retrains the models when the data changes and republishes the site.',
        'Web interface in English, Italian and Spanish, with season history and a fantasy F1 team builder.',
      ],
      result:
        'Each season is predicted by models trained only on earlier seasons. On 232 races from 2016 to 2026, the post-qualifying model picks the winner in 57% of races.',
      tools: ['Python', 'pandas', 'LightGBM', 'API integration', 'GitHub Actions', 'JavaScript'],
      links: [
        { label: 'Open live app', href: F1_LIVE },
        { label: 'GitHub', href: F1_REPO, external: true },
      ],
      image: '/f1-predictor-cover.svg',
    },
    {
      id: 'nexux-lead-automation',
      title: 'Lead management automation',
      kind: 'Freelance case study · Nexux Studio',
      summary: 'n8n workflows, chatbots and LLMs to organise how a small business handles new leads.',
      problem:
        'Collecting and handling new leads relied on manual steps, so replies could be slow and contacts were hard to keep organised.',
      solution: [
        'Mapped the existing lead intake process and redesigned it.',
        'n8n workflows connecting Telegram and WhatsApp chatbots, Google Workspace and LLM APIs.',
        'Automated scoring and classification of each lead, with different paths depending on the prospect.',
        'Automated emails and real-time phone notifications for the owner, with human approval at set steps.',
      ],
      result:
        'A more organised and timely first-contact process that depends less on manual work, delivered with a working method for following up new contacts.',
      tools: ['n8n', 'Telegram', 'WhatsApp', 'Google Workspace', 'LLM APIs'],
      links: [{ label: 'nexuxstudio.it', href: NEXUX, external: true }],
    },
    {
      id: 'barcode-decoder',
      title: 'Barcode Decoder',
      kind: 'Work project · Zeis Excelsa',
      summary: 'The company’s barcode decoding tool, rebuilt from scratch in Python as a web app on the local network.',
      problem: 'Reading merchandise barcodes needed to be simpler and faster for the people who do it every day.',
      solution: [
        'Rebuilt the decoder from scratch in Python.',
        'Served it as a web app reachable from the local network.',
      ],
      result: 'A simpler and faster way to read merchandise barcodes.',
      tools: ['Python', 'Web app', 'Local network'],
      links: [],
      note: 'Internal tool: no code or company data is shown.',
    },
    {
      id: 'customer-churn-banking',
      title: 'Customer Churn – Banking',
      kind: 'Personal project · Data analysis & segmentation',
      summary: 'Analysis of 10,000 bank customers to find which factors are linked to churn.',
      problem: 'Which customer segments are more likely to leave the bank, and what patterns help explain it?',
      solution: [
        'Data quality checks and feature engineering for segmentation.',
        'Exploratory, bivariate and multivariate analysis in a Jupyter notebook.',
        'Priority segments and practical retention recommendations.',
      ],
      result:
        'Churn rises sharply from age 41, Germany is the highest-risk market, and inactive customers with a single product are the most fragile group. A prediction model is the next step and is not built yet.',
      tools: ['Python', 'pandas', 'Jupyter Notebook'],
      links: [{ label: 'GitHub', href: CHURN_REPO, external: true }],
    },
  ],
  contactPage: {
    title: 'Contact',
    subtitle: 'The quickest way to reach me is email.',
    text: 'Based in Civitanova Marche, Italy, and open to remote roles. I usually reply within a couple of days.',
    emailCta: 'Write me an email',
    copy: 'Copy address',
    copied: 'Copied',
    subject: 'Hello Lorenzo',
    elsewhere: 'Also on',
  },
  footer: {
    tagline: 'AI & Automation Specialist | IT Manager. Python tools, process automation, applied AI and IT management.',
    explore: 'Explore',
    connect: 'Connect',
    rights: 'Lorenzo Santarelli',
    remote: 'Open to remote opportunities',
  },
  notFound: { title: 'This page doesn’t exist.', back: 'Back to the home page' },
};

const it: Content = {
  meta: {
    title: 'Lorenzo Santarelli | AI & Automation Specialist | IT Manager',
    description:
      'Lorenzo Santarelli – AI & Automation Specialist e IT Manager. Strumenti Python, automazione dei processi, integrazioni LLM e gestione IT. Progetti, esperienza e CV.',
  },
  pageTitles: {
    home: 'Lorenzo Santarelli | AI & Automation Specialist | IT Manager',
    experience: 'Esperienza | Lorenzo Santarelli',
    projects: 'Progetti | Lorenzo Santarelli',
    contact: 'Contatti | Lorenzo Santarelli',
    notFound: 'Pagina non trovata | Lorenzo Santarelli',
  },
  nav: {
    home: 'Home',
    experience: 'Esperienza',
    projects: 'Progetti',
    contact: 'Contatti',
    cv: 'CV',
    menu: 'Menu',
    switchTo: 'Read in English',
    skip: 'Vai al contenuto',
  },
  title: 'AI & Automation Specialist | IT Manager',
  location: 'Civitanova Marche (MC)',
  cvFile: CV_IT,
  home: {
    badge: 'Disponibile per ruoli in AI Automation e Digital Transformation · Remoto / UE',
    intro:
      'Mi occupo di gestione IT, automazione e applicazione dell’AI ai processi aziendali. Sviluppo strumenti Python e soluzioni tecnologiche per semplificare le attività operative e migliorare i sistemi esistenti.',
    ctaProjects: 'Vedi i progetti',
    ctaCv: 'Scarica il CV',
    focusTitle: 'Di cosa mi occupo',
    focusSubtitle: 'Il tipo di problemi che affronto ogni giorno.',
    focus: [
      {
        title: 'Automazione dei processi',
        text: 'Lavoro manuale e ripetitivo – report, riconciliazioni, gestione dei lead – sostituito con strumenti Python e workflow n8n.',
      },
      {
        title: 'AI applicata',
        text: 'LLM, RAG e AI agent collegati a processi aziendali reali, con supervisione umana dove una decisione conta.',
      },
      {
        title: 'Sviluppo software',
        text: 'Web app per la rete locale, integrazioni API e manutenzione di software gestionale legacy.',
      },
      {
        title: 'Gestione IT',
        text: 'Server, macchine virtuali, Active Directory, configurazione di rete e Microsoft 365, oltre a fornitori e progetti tecnologici.',
      },
    ],
    workTitle: 'Lavori selezionati',
    workSubtitle: 'Progetti e casi di studio, descritti per quello che è stato realizzato davvero.',
    allProjects: 'Tutti i progetti',
    readMore: 'Leggi il caso di studio',
    skillsTitle: 'Competenze tecniche',
    skillsSubtitle: 'Quello che uso nel lavoro e nei progetti.',
    nextTitle: 'Dove voglio arrivare',
    nextText: [
      'Voglio continuare a costruire soluzioni AI dentro i processi aziendali: automazioni che fanno risparmiare tempo vero, integrazioni LLM che le persone usano davvero e sistemi interni migliori.',
      'Cerco ruoli in AI Automation e Digital Transformation, idealmente in un team internazionale e remote-first, con spazio per crescere verso il technical project management.',
    ],
    nextCta: 'Contattami',
  },
  skills: [
    {
      category: 'AI & Machine Learning',
      items: [
        'AI agent e workflow automatizzati',
        'Chatbot',
        'Integrazione di LLM',
        'RAG con database vettoriali',
        'Modelli di regressione, classificazione e alberi decisionali',
        'Addestramento e valutazione dei modelli',
      ],
    },
    {
      category: 'Python & Automazione',
      items: ['Scripting Python', 'pandas, openpyxl', 'Elaborazione dati e pipeline', 'Automazione dei processi', 'Workflow n8n'],
    },
    {
      category: 'Dati & Integrazione API',
      items: ['Analisi, pulizia e manipolazione di dataset di grandi dimensioni', 'SQL', 'Excel', 'Integrazione API', 'Integrazione Google Workspace'],
    },
    {
      category: 'Infrastruttura IT',
      items: ['Server', 'Macchine virtuali', 'Active Directory', 'Configurazione di rete', 'Amministrazione Microsoft 365'],
    },
    {
      category: 'Strumenti di sviluppo',
      items: ['Git', 'VS Code', 'Jupyter Notebook', 'Claude Code', 'JavaScript e XML (manutenzione legacy)'],
    },
  ],
  experiencePage: {
    title: 'Esperienza',
    subtitle: 'AI & Automation Specialist | IT Manager',
    downloadEn: 'CV in inglese (PDF)',
    downloadIt: 'CV in italiano (PDF)',
    experience: 'Esperienza professionale',
    education: 'Formazione',
    certifications: 'Certificazioni',
    languages: 'Lingue',
    skills: 'Competenze tecniche',
  },
  experience: [
    {
      role: 'AI & Automation Specialist | IT Manager',
      company: 'Zeis Excelsa S.p.A.',
      place: 'Montegranaro (FM)',
      dates: 'giu 2026 – oggi',
      intro: 'Assunto principalmente per sviluppare automazioni e favorire l’adozione dell’AI.',
      bullets: [
        'Ho ricostruito da zero il Barcode Decoder aziendale in Python, come web app accessibile dalla rete locale, per rendere più semplice e veloce la lettura dei codici a barre della merce.',
        'Ho sviluppato strumenti Python (pandas, openpyxl) per automatizzare la reportistica commerciale e supportare l’analisi logistica e la riconciliazione dei dati.',
        'Uso ogni giorno LLM e strumenti di AI per sviluppo e analisi e aiuto i colleghi ad adottarli.',
        'Gestisco l’IT e consolido l’infrastruttura: server, macchine virtuali, Active Directory, configurazione di rete e amministrazione Microsoft 365.',
        'Coordino i fornitori esterni e i progetti tecnologici dell’azienda.',
      ],
      tags: ['Python', 'pandas', 'openpyxl', 'LLM', 'Active Directory', 'Microsoft 365'],
    },
    {
      role: 'Automation Specialist (freelance)',
      company: 'Nexux Studio',
      dates: 'feb 2026 – mag 2026',
      link: { label: 'nexuxstudio.it', href: NEXUX, external: true },
      intro: 'Una breve collaborazione freelance su come una piccola attività acquisisce e gestisce i nuovi contatti.',
      bullets: [
        'Ho analizzato il processo esistente di acquisizione dei lead, individuato i passaggi lenti o manuali e l’ho riprogettato.',
        'Ho sviluppato automazioni n8n che collegano chatbot Telegram e WhatsApp, Google Workspace (Drive e altri servizi) e API di LLM.',
        'Ho introdotto valutazione e classificazione automatica dei lead, con percorsi operativi diversi in base al potenziale cliente.',
        'Ho integrato email automatiche e notifiche in tempo reale sullo smartphone del titolare, per rispondere subito ai nuovi contatti.',
        'Ho definito una procedura per i primi contatti con supervisione e approvazione umana nei passaggi previsti.',
        'Ho consegnato gli strumenti insieme a un metodo operativo per organizzare, valutare e seguire i nuovi contatti in modo sistematico. Ho anche progettato e realizzato il sito dello studio.',
      ],
      tags: ['n8n', 'Telegram', 'WhatsApp', 'Google Workspace', 'API LLM'],
    },
    {
      role: 'Software Developer – ERP (tirocinio)',
      company: 'SYS-DAT Group',
      dates: 'ott 2025 – feb 2026',
      bullets: [
        'Ho partecipato a sviluppo e manutenzione di D-Moda Web e D-Moda Retail, gestionali per le aziende della moda.',
        'Ho mantenuto e aggiornato codice legacy, usando SQL, XML e JavaScript per individuare e correggere bug applicativi.',
        'Ho lavorato seguendo il processo del team di sviluppo: ticket, test, documentazione e rilasci.',
      ],
      tags: ['SQL', 'XML', 'JavaScript'],
    },
    {
      role: 'Project Coordinator',
      company: 'WebWiseItalia (startup)',
      dates: 'mar 2023 – lug 2025',
      bullets: [
        'Coordinavo un piccolo team – un designer, uno sviluppatore e un commerciale – definendo priorità e scadenze.',
        'Realizzavamo web app, landing page e siti vetrina per migliorare la presenza online e le conversioni delle aziende clienti.',
        'Trasformavo le richieste dei clienti in attività e le seguivo fino alla consegna.',
      ],
      tags: ['Coordinamento progetti', 'Web app', 'Landing page'],
    },
  ],
  education: [
    { title: 'Laurea triennale in Informatica (in corso)', school: 'Università di Camerino (UNICAM)' },
    { title: 'Erasmus – Ingegneria Informatica', school: 'Universidad de Sevilla', dates: 'set 2022 – feb 2023' },
    { title: 'Diploma Istituto Tecnico Tecnologico', school: 'Indirizzo Informatica' },
  ],
  certifications: [
    { name: 'Google AI Essentials', issuer: 'Google' },
    { name: 'Machine Learning A–Z', issuer: 'SuperDataScience' },
    { name: 'SQL for Data Analysis', issuer: 'Maven Analytics' },
  ],
  languages: ['Italiano (madrelingua)', 'Inglese B2 (Cambridge)'],
  projectsPage: {
    title: 'Progetti',
    subtitle: 'Progetti personali e casi di studio dal lavoro. Il lavoro aziendale è descritto senza dati riservati.',
    problem: 'Problema',
    solution: 'Cosa ho realizzato',
    result: 'Risultato',
    githubTitle: 'Codice su GitHub',
    githubText: 'F1 Race Predictor e Customer Churn sono repository pubblici. Il lavoro aziendale resta privato.',
    githubCta: 'Apri il profilo GitHub',
  },
  projects: [
    {
      id: 'f1-predictor',
      title: 'F1 Race Predictor',
      kind: 'Progetto personale · App online',
      summary: 'Una web app che prevede i risultati delle gare di Formula 1 da circa 25 anni di storico gare e dati meteo.',
      problem:
        'Prevedere l’ordine d’arrivo del prossimo Gran Premio usando solo dati pubblici, e mantenere le previsioni aggiornate dopo ogni weekend di gara senza lavoro manuale.',
      solution: [
        'Pipeline di dati dalla Jolpica F1 API (risultati, qualifiche, tempi sul giro) e da Open-Meteo (meteo del giorno di gara), dal 2001 a oggi.',
        'Modelli di ranking LightGBM che ordinano i piloti per performance attesa, prima e dopo le qualifiche.',
        'Un job pianificato su GitHub Actions scarica i nuovi risultati, riaddestra i modelli quando i dati cambiano e ripubblica il sito.',
        'Interfaccia in italiano, inglese e spagnolo, con storico della stagione e un team builder per il fantasy F1.',
      ],
      result:
        'Ogni stagione è prevista da modelli addestrati solo sulle stagioni precedenti. Su 232 gare dal 2016 al 2026, il modello post-qualifiche indovina il vincitore nel 57% dei casi.',
      tools: ['Python', 'pandas', 'LightGBM', 'Integrazione API', 'GitHub Actions', 'JavaScript'],
      links: [
        { label: 'Apri l’app', href: F1_LIVE },
        { label: 'GitHub', href: F1_REPO, external: true },
      ],
      image: '/f1-predictor-cover.svg',
    },
    {
      id: 'nexux-lead-automation',
      title: 'Automazione della gestione lead',
      kind: 'Caso di studio freelance · Nexux Studio',
      summary: 'Workflow n8n, chatbot e LLM per organizzare la gestione dei nuovi contatti di una piccola attività.',
      problem:
        'La raccolta e la gestione dei nuovi lead si basavano su passaggi manuali: le risposte potevano essere lente e i contatti difficili da tenere in ordine.',
      solution: [
        'Ho mappato il processo di acquisizione dei lead e l’ho riprogettato.',
        'Workflow n8n che collegano chatbot Telegram e WhatsApp, Google Workspace e API di LLM.',
        'Valutazione e classificazione automatica di ogni lead, con percorsi diversi in base al potenziale cliente.',
        'Email automatiche e notifiche in tempo reale per il titolare, con approvazione umana nei passaggi previsti.',
      ],
      result:
        'Un processo di primo contatto più organizzato e tempestivo, meno dipendente dal lavoro manuale, consegnato insieme a un metodo per seguire i nuovi contatti.',
      tools: ['n8n', 'Telegram', 'WhatsApp', 'Google Workspace', 'API LLM'],
      links: [{ label: 'nexuxstudio.it', href: NEXUX, external: true }],
    },
    {
      id: 'barcode-decoder',
      title: 'Barcode Decoder',
      kind: 'Progetto di lavoro · Zeis Excelsa',
      summary: 'Lo strumento aziendale per decodificare i codici a barre, ricostruito da zero in Python come web app sulla rete locale.',
      problem: 'La lettura dei codici a barre della merce doveva diventare più semplice e veloce per chi la fa ogni giorno.',
      solution: ['Ho ricostruito il decoder da zero in Python.', 'L’ho reso disponibile come web app accessibile dalla rete locale.'],
      result: 'Un modo più semplice e veloce per leggere i codici a barre della merce.',
      tools: ['Python', 'Web app', 'Rete locale'],
      links: [],
      note: 'Strumento interno: non vengono mostrati codice o dati aziendali.',
    },
    {
      id: 'customer-churn-banking',
      title: 'Customer Churn – Banking',
      kind: 'Progetto personale · Analisi dati e segmentazione',
      summary: 'Analisi di 10.000 clienti bancari per capire quali fattori sono legati all’abbandono.',
      problem: 'Quali segmenti di clienti hanno più probabilità di lasciare la banca, e quali schemi aiutano a spiegarlo?',
      solution: [
        'Controllo della qualità dei dati e feature engineering per la segmentazione.',
        'Analisi esplorativa, bivariata e multivariata in un notebook Jupyter.',
        'Segmenti prioritari e raccomandazioni pratiche per la fidelizzazione.',
      ],
      result:
        'L’abbandono cresce molto dai 41 anni, la Germania è il mercato più a rischio e i clienti inattivi con un solo prodotto sono il gruppo più fragile. Il modello predittivo è il prossimo passo e non è ancora stato realizzato.',
      tools: ['Python', 'pandas', 'Jupyter Notebook'],
      links: [{ label: 'GitHub', href: CHURN_REPO, external: true }],
    },
  ],
  contactPage: {
    title: 'Contatti',
    subtitle: 'Il modo più rapido per raggiungermi è l’email.',
    text: 'Vivo a Civitanova Marche e sono disponibile per ruoli da remoto. Di solito rispondo entro un paio di giorni.',
    emailCta: 'Scrivimi un’email',
    copy: 'Copia indirizzo',
    copied: 'Copiato',
    subject: 'Ciao Lorenzo',
    elsewhere: 'Mi trovi anche su',
  },
  footer: {
    tagline: 'AI & Automation Specialist | IT Manager. Strumenti Python, automazione dei processi, AI applicata e gestione IT.',
    explore: 'Esplora',
    connect: 'Contatti',
    rights: 'Lorenzo Santarelli',
    remote: 'Disponibile per opportunità da remoto',
  },
  notFound: { title: 'Questa pagina non esiste.', back: 'Torna alla home' },
};

export const CONTENT: Record<Lang, Content> = { en, it };
