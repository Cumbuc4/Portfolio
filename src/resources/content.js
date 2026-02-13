import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Leandro",
  lastName: "Gabriel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cybersecurity Specialist & Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "leandrogabriel@buenodevsec.com.br",
  location: "America/Sao_Paulo", // e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English", "Russian"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
}; 

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lg-bueno",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/leandro--gabriel/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const contact = {
  email: `mailto:${person.email}`,
  whatsapp: "https://wa.me/5562985200918",
  instagram: "https://instagram.com/seu_usuario",
  linkedin: "https://www.linkedin.com/in/leandro--gabriel/",
  github: "https://github.com/lg-bueno",
};

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Red Team Operator & Desenvolvedor Full Stack",
  featured: {
    display: false,
    title: "Recent project: Once UI",
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: "Construo soluções seguras, escaláveis e eficientes, unindo desenvolvimento e práticas de cibersegurança.",
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, especialista em cibersegurança e desenvolvedor full stack`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Apresentação",
    description: (
      <>
        Especialista em cibersegurança com foco em segurança ofensiva e defensiva, combinando experiência em desenvolvimento full stack com práticas avançadas de segurança. Entusiasta de CTFs, automação de ferramentas e pesquisa em segurança da informação.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência Profissional",
    experiences: [
      {
        company: "NOX5 Offensive Security",
        timeframe: "2024 - Presente",
        role: "Junior - Red Team",
        achievements: [
          <>
            Administração e otimização de ambientes Active Directory e Microsoft 365 para gestão de identidades e acessos corporativos.
          </>,
          <>
            Configuração e proteção de infraestrutura de rede com firewalls Fortinet e Sophos, implementando políticas de segurança avançadas.
          </>,
          <>
            Desenvolvimento de scripts para automação de tarefas de segurança e operação, contribuindo para a eficiência e resiliência da defesa da empresa.
          </>,
        ],
        images: [],
      },
      {
        company: "OVG - Organização das Voluntárias de Goiás",
        timeframe: "2022 - 2023",
        role: "Estagiário de Desenvolvimento Back-End",
        achievements: [
          <>
            Desenvolvimento e manutenção de sistemas internos utilizando C++ e Python, focando em performance e segurança.
          </>,
          <>
            Modernização de aplicações legadas, implementando melhorias de arquitetura e estabilidade.
          </>,
        ],
        images: [],
      },
      {
        company: "Assembleia Legislativa do Estado de Goiás",
        timeframe: "2021 - 2022",
        role: "Estagiário de Desenvolvimento Front-End",
        achievements: [
          <>
            Desenvolvimento de interfaces responsivas com HTML5, CSS3 e JavaScript, priorizando acessibilidade e usabilidade.
          </>,
          <>
            Implementação de funcionalidades modernas com React.js em projetos institucionais.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "Acadi-TI",
        description: <>Pós-graduação em Cibersegurança - Especialização em segurança ofensiva e defensiva.</>,
      },
      {
        name: "Universidade Estácio de Sá",
        description: <>Bacharelado em Ciência da Computação - Formação sólida em fundamentos da computação.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Competências Técnicas",
    skills: [
      {
        title: "Desenvolvimento",
        description: <>Python, JavaScript, C/C++, Bash Scripting, React.js, Node.js, SQL, Git.</>, 
        images: [],
      },
      {
        title: "Segurança da Informação",
        description: <>Pentesting, análise de malware, forense digital, análise de vulnerabilidades, CTFs.</>,
        images: [],
      },
      {
        title: "Ferramentas e Tecnologias",
        description: <>Kali Linux, Windows Server, Ubuntu, Nmap, Burp Suite, Wireshark, Metasploit, entre outras.</>,
        images: [],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Write-ups",
  title: `Write-ups de Segurança – ${person.name}`,
  description: `Pesquisas em segurança e write-ups de CTFs por ${person.name}`,
  // Create new write-up pages by adding a new .mdx file to app/work/projects
  // All write-ups will be listed on the /home and /work routes
};

const certifications = {
  path: "/certifications",
  label: "Certificações",
  title: `Certificações e Badges – ${person.name}`,
  description: `Credenciais e reconhecimentos em segurança da informação`,
};

export { person, social, contact, newsletter, home, about, work, certifications };
