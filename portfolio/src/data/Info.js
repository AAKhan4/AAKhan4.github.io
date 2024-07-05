import ghLogo from "../images/necessaryIcons/github-mark-white.svg";
import flaskIcon from "../images/necessaryIcons/flask_icon.png";

export const Bio = {
  name: "Aditya Khan",
  roles: ["Software Engineering Student..."],
  email: "aditya041004@gmail.com",
  description:
    "In my final year of study at Lancaster University. Highly motivated self-sufficient learner, dedicated to expanding my skill set through independent research & online courses both within & beyond the scope of my university curriculum. Seeking internship opportunities to apply current knowledge, learn, contribute & gain real life experience working in a professional environment.",
  github: "https://github.com/AAKhan4",
  linkedin: "https://www.linkedin.com/in/aditya-a-khan/",
  resume:
    "https://www.linkedin.com/in/aditya-a-khan/overlay/1714064891861/single-media-viewer/?profileId=ACoAAEsb9vEBV0nXGgRs9RY0iMolDlx0Ki08bnc",
};

export const Skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
      },
      {
        name: "HTML",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png",
      },
      {
        name: "CSS",
        image: "https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",
      },
      {
        name: "Python",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
      },
      {
        name: "Flask",
        image: flaskIcon,
      },
      {
        name: "Django",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png",
      },
      {
        name: "Java",
        image: "https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: "https://cdn.iconscout.com/icon/free/png-512/git-225996.png",
      },
      {
        name: "GitHub",
        image: ghLogo,
      },
      {
        name: "VS Code",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/visual-studio-code-1868941-1583105.png",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
      },
      {
        name: "Java",
        image: "https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png",
      },
      {
        name: "C",
        image: "https://cdn.iconscout.com/icon/free/png-512/c-57-1175191.png",
      },
      {
        name: "C++",
        image: "https://cdn.iconscout.com/icon/free/png-512/csharp-569563.png",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/docker-226091.png",
      },
      {
        name: "GitHub Actions",
        image: ghLogo,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png",
      },
      {
        name: "PostgreSQL",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/postgresql-226047.png",
      },
    ],
  }
];

export const Projects = [
  {
    title: "Portfolio",
    type: "frontend",
    SubTitle: "Jun - Jul 2024",
    description:
      "A personal portfolio website to showcase my projects, skills and experience.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Material-UI", "EmailJS"],
    github: "https://github.com/AAKhan4/Portfolio",
  },
  {
    title: "Recipe App API",
    type: "backend",
    SubTitle: "Mar - Apr 2024",
    description:
      "Backend API for a recipe app with CRUD functionality. Briefly deployed using AWS - EC2.",
    tags: ["Python", "PostgreSQL", "Docker", "Django", "uWSGI", "Swagger"],
  },
  {
    title: "IoTA: IoT Automation",
    type: "fullstack",
    SubTitle: "Jan - Mar 2024",
    description:
      "2nd year university group project. IoT automation system with web interface & RESTful API.",
    tags: [
      "Vue.js",
      "Bootstrap",
      "Python",
      "Flask",
      "MySQL",
      "Docker",
      "Postman",
    ],
  },
  {
    title: "Using React",
    type: "frontend",
    SubTitle: "Jun 2024",
    description:
      "Number of mini projects to learn React. Includes dummy movie DB, book library & bug reporter app.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Air Hockey Game",
    type: "other",
    SubTitle: "May 2023",
    description:
      "A simple 2-player air hockey game built using Java Swing. First-year university coursework.",
    tags: ["Java", "Java Swing", "Game"],
  },
];

export const Education = [
  {
    institution: "Lancaster University",
    degree: "BSc (Hons) Software Engineering",
    date: "2022 - Present",
    grades: [
      "Expected First Class",
      "Current Average: 19.4/24",
      "Algorithms, Data Structures & Discrete Maths: 22.1/24",
      "Operating Systems: 20.5/24",
    ],
    desc: "Completed 2 years of study in Software Engineering at Lancaster University, on track to achieve degree with first-class distinction. I have taken courses in Algorithms & Data Structures, Software Design, Operating Systems, HCI, Databases & Computer Networking. Also participated in a group studio project & created app to automate IoT devices in an intuitive manner via code blocks using Flask, Vue.js & MySQL. Looking forward to studying AI, Security & Distributed Systems in my final year.",
  },
  { 
    institution: "International School of Amsterdam",
    degree: "International Baccalaureate Diploma",
    date: "2020 - 2022",
    grades: ["Overall 40/45", "Maths Analysis & Approaches HL: 7/7"],
    desc: "Received my Highschool & International Baccalaureate Diploma from the International School of Amsterdam. I studied Maths Analysis & Approaches, Physics & Chemistry at higher level. I honed my research, critical thinking, and problem-solving skills through my 4,000-word extended essay in Physics. This project also allowed me to explore my non-academic interests by using motion tracking technology to study and identify the 'sweet spots' on a cricket bat.",
  },
  {
    institution: "International School of Frankfurt",
    degree: "Cambridge IGCSEs",
    date: "2019 - 2020",
    grades: ["Computer Science: A*", "Mathematics: A*"],
    desc: "Attained A* in IGCSE Computer Science, Mathematics & English. During this time, I also participated in maths competitions & played in school badminton club. I also gained skills necessary for independent study & research, trying to learn topics beyond scope of my courses (for example, I learnt C++ along side my Computer Science studies), which I have continued to develop throughout my academic career.",
  },
];
