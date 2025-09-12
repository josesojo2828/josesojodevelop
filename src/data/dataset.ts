import { Vlog,Skill } from "@/types/type";
import { About, Prisma } from "@prisma/client";

// export const PROJECTS = [
//     {
//         date: "2024/2025",
//         title: "Biblioteca Virtual de Postgrado",
//         description:
//             image: "/image.jpg",
//         skils: [
//             { ...ALL_SKILS.react },
//             ALL_SKILS.nest,
//             ALL_SKILS.mysql,
//             ALL_SKILS.ts,
//             ALL_SKILS.js,
//             ALL_SKILS.docker,
//         ],
//         github: "https://github.com/",
//     },
//     {
//         date: "2024",
//         title: "Sistema de Administración Financiera",
//         description:
//             "Aplicación para registrar, organizar y analizar ingresos y egresos de una institución. Permite estructurar operaciones por tipos y categorías, generando reportes claros para una mejor toma de decisiones financieras.",
//         image: "/image.jpg",
//         skils: [ALL_SKILS.express, ALL_SKILS.mysql, ALL_SKILS.ts, ALL_SKILS.js],
//         github: "https://github.com/",
//     },
//     {
//         date: "2024",
//         title: "Gestión de Citas Médicas",
//         description:
//             "Sistema para la administración de médicos, consultas e historiales clínicos. Facilita el agendamiento de citas, el seguimiento de pacientes y la organización de la información médica en un solo lugar.",
//         image: "/image.jpg",
//         skils: [ALL_SKILS.express, ALL_SKILS.postgresql, ALL_SKILS.ts, ALL_SKILS.js],
//         github: "https://github.com/",
//     },
//     {
//         date: "2024",
//         title: "Plataforma de Producción y Finanzas para Manufactura",
//         description:
//             "Aplicación integral para gestionar procesos de producción en una empresa manufacturera. Incluye control de ingresos, egresos y seguimiento de operaciones productivas, mejorando la eficiencia en la gestión empresarial.",
//         image: "/image.jpg",
//         skils: [ALL_SKILS.express, ALL_SKILS.mysql, ALL_SKILS.ts, ALL_SKILS.js],
//         github: "https://github.com/",
//     },
//     {
//         date: "2024",
//         title: "Control de Insumos Odontológicos",
//         description:
//             "Sistema diseñado para consultorios odontológicos que permite gestionar insumos y materiales médicos. Facilita el control de inventario, optimizando recursos y asegurando la disponibilidad de suministros.",
//         image: "/image.jpg",
//         skils: [ALL_SKILS.express, ALL_SKILS.mysql, ALL_SKILS.ts, ALL_SKILS.js],
//         github: "https://github.com/",
//     },
//     {
//         date: "2024",
//         title: "Sistema de Control y Gestión para Fotocopiadora",
//         description:
//             "Aplicación para automatizar y optimizar las operaciones de una fotocopiadora. Permite la gestión de inventario de insumos (papel, tóner), registro de trabajos de impresión, cálculo de costos por servicio y generación de reportes de ventas y uso de materiales. Un sistema integral para mejorar la eficiencia y el control administrativo del negocio.",
//         image: "/fotocopiadora.jpg",
//         skils: [
//             ALL_SKILS.express,
//             ALL_SKILS.react,
//             ALL_SKILS.mysql,
//             ALL_SKILS.js,
//             ALL_SKILS.ts,
//         ],
//         github: "https://github.com/",
//     },
// ];

export const ALL_SKILS: { [key: string]: Skill } = {
    js: { type: 'fronent', description: '', id: 1, logo: "/js.png", name: "JavaScript" },
    ts: { type: 'backend', description: '', id: 2, logo: "/ts.svg", name: "TypeScript" },
    python: { type: 'backend', description: '', id: 3, logo: "/python.png", name: "Python" },

    mysql: { type: 'database', description: '', id: 4, logo: "/mysql.svg", name: "MySql" },
    postgresql: { type: 'database', description: '', id: 5, logo: "/postgresql.svg", name: "Postgres" },
    mongodb: { type: 'database', description: '', id: 6, logo: "/mongodb.svg", name: "MongoDB" },

    react: { type: 'fronent', description: '', id: 7, logo: "/react.svg", name: "React" },
    next: { type: 'fronent', description: '', id: 8, logo: "/next.svg", name: "Next" },
    tailwindcss: { type: 'fronent', description: '', id: 9, logo: "/tailwindcss.svg", name: "Tailwind CSS" },

    nest: { type: 'backend', description: '', id: 10, logo: "/nest.svg", name: "NestJs" },
    express: { type: 'backend', description: '', id: 11, logo: "/express.png", name: "ExpressJs" },
    fastapi: { type: 'backend', description: '', id: 12, logo: "/fastapi.svg", name: "FastAPI" },
    symfony: { type: 'backend', description: '', id: 13, logo: "/symfony.svg", name: "Symfony" },

    docker: { type: 'devops', description: '', id: 14, logo: "/docker.svg", name: "Docker" },
    bash: { type: 'devops', description: '', id: 15, logo: "/bash.svg", name: "Bash" },
    nginx: { type: 'devops', description: '', id: 16, logo: "/nginx.png", name: "Nginx" },

    grafana: { type: 'devops', description: '', id: 17, logo: "/grafana.svg", name: "Grafana" },
    prometheus: { type: 'devops', description: '', id: 18, logo: "/prometheus.svg", name: "Prometheus" },
    influxdb: { type: 'devops', description: '', id: 19, logo: "/influxdb.svg", name: "InfluxDB" },
};

export const SKILS_LIST: Skill[] = [
    { ...ALL_SKILS.js, },
    { ...ALL_SKILS.ts },
    { ...ALL_SKILS.python },
    { ...ALL_SKILS.mysql },
    { ...ALL_SKILS.postgresql },
    { ...ALL_SKILS.mongodb },
    { ...ALL_SKILS.react },
    { ...ALL_SKILS.next },
    { ...ALL_SKILS.tailwindcss },
    { ...ALL_SKILS.express },
    { ...ALL_SKILS.nest },
    { ...ALL_SKILS.fastapi },
    { ...ALL_SKILS.symfony },
    { ...ALL_SKILS.docker },
    { ...ALL_SKILS.bash },
    { ...ALL_SKILS.nginx },
    { ...ALL_SKILS.grafana },
    { ...ALL_SKILS.influxdb },
    { ...ALL_SKILS.prometheus },
];

export const ABOUT_INFO = [
    {
        title: "Frontend",
        description:
            "Conocimiento y habilidad en tecnologias modernas para el desarrollo de software, como React, Next, Tailwindcss, DaysiUI",
    },
    {
        title: "Backend",
        description:
            "Conocimiento y habilidad en tecnologias para el desarrollo de backend, como Nestjs, Express, FastAPI, Laravel, Symfony",
    },
    {
        title: "Bases de datos",
        description:
            "Conocimiento y habilidad en bases de datos relacionales, Postgres, MySql, y no relacionales, Mongodb",
    },
    {
        title: "Despliegue",
        description:
            "Conocimiento y habilidad en entornos linux como servidores en debian, ubuntu, asi como en contenedores Docker, asi como redes en docker, Bash como lenguaje de script, y herramientas de observabilidad Grafana, Prometheus, Influxdb, Node Exporter.",
    },
];

export const INFO: About = {
    id: 1,
    bio: 'Soy José Sojo, un desarrollador de software venezolano de 23 años. Me especializo en la creación de soluciones digitales robustas y eficientes utilizando tecnologías modernas como React, Next.js, NestJS y Docker. Mi enfoque es transformar ideas en aplicaciones funcionales que resuelvan problemas reales.',
    country: 'Venezuela',
    email: "josesojo2828@gmail.com",
    fullName: 'Jose Sojo',
    github: 'https://github.com/JoseSojo',
    linkedin: 'https://www.linkedin.com/in/jose-sojo-14899b380/',
    location: '',
    phone: '+584128606734',
    website: '',
    presentationSkils: ABOUT_INFO,
    facebook: 'https://www.facebook.com/jose.josejaimes.9',
    instagram: 'https://www.instagram.com/josesojo28/',
    tiktok: '',
    x: 'https://x.com/JoseSojoJ'
}

export const VLOGS: Prisma.VlogCreateInput[] = [
    {
        title: "Biblioteca Virtual de Postgrado",
        slogan: "Plataforma para la gestión académica y de investigación.",
        description:
            'Plataforma académica para gestionar trabajos de grado, proyectos especiales y tesis doctorales de la Universidad Nacional Experimental "Rómulo Gallegos". Incluye registro, revisión y control del estado de cada investigación, optimizando el proceso de gestión académica.',
        year: 2024,
        imagePath: [
            '/projects/ociti/1.png',
            '/projects/ociti/2.png',
            '/projects/ociti/3.png',
            '/projects/ociti/4.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-09-01"),
        endDate: new Date("2025-02-10"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.react.id },
                    { skillId: ALL_SKILS.nest.id },
                    { skillId: ALL_SKILS.mysql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                    { skillId: ALL_SKILS.docker.id },
                ]
            }
        },
        project: true,
        primary: true,
    },
    {
        title: "Sistema de Administración Financiera",
        slogan: "Control total de ingresos y egresos para una mejor toma de decisiones.",
        description:
            "Aplicación para registrar, organizar y analizar ingresos y egresos de una institución. Permite estructurar operaciones por tipos y categorías, generando reportes claros para una mejor toma de decisiones financieras.",
        year: 2024,
        imagePath: [
            '/projects/eventos/1.png',
            '/projects/eventos/2.png',
            '/projects/eventos/3.png',
            '/projects/eventos/4.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-10-01"),
        endDate: new Date("2025-02-01"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.express.id },
                    { skillId: ALL_SKILS.mysql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                ]
            }
        },
        project: true,
        primary: false,
    },
    {
        title: "Gestión de Citas Médicas",
        slogan: "Centraliza la administración de pacientes y consultas médicas.",
        description:
            "Sistema para la administración de médicos, consultas e historiales clínicos. Facilita el agendamiento de citas, el seguimiento de pacientes y la organización de la información médica en un solo lugar.",
        year: 2024,
        imagePath: [
            '/projects/citas/1.png',
            '/projects/citas/2.png',
            '/projects/citas/3.png',
            '/projects/citas/4.png',
            '/projects/citas/5.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-10-01"),
        endDate: new Date("2025-02-01"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.express.id },
                    { skillId: ALL_SKILS.postgresql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                ]
            }
        },
        project: true,
        primary: false,
    },
    {
        title: "Plataforma de Producción y Finanzas para Manufactura",
        slogan: "Optimización de procesos productivos y control financiero.",
        description:
            "Aplicación integral para gestionar procesos de producción en una empresa manufacturera. Incluye control de ingresos, egresos y seguimiento de operaciones productivas, mejorando la eficiencia en la gestión empresarial.",
        year: 2024,
        imagePath: [
            '/projects/manufactura/1.png',
            '/projects/manufactura/2.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-10-01"),
        endDate: new Date("2025-02-01"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.express.id },
                    { skillId: ALL_SKILS.mysql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                ]
            }
        },
        project: true,
        primary: false,
    },
    {
        title: "Control de Insumos Odontológicos",
        slogan: "Sistema de inventario para consultorios dentales.",
        description:
            "Sistema diseñado para consultorios odontológicos que permite gestionar insumos y materiales médicos. Facilita el control de inventario, optimizando recursos y asegurando la disponibilidad de suministros.",
        year: 2024,
        imagePath: [
            '/projects/insumos/1.png',
            '/projects/insumos/2.png',
            '/projects/insumos/3.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-10-01"),
        endDate: new Date("2025-02-01"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.express.id },
                    { skillId: ALL_SKILS.postgresql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                ]
            }
        },
        project: true,
        primary: true,
    },
    {
        title: "Sistema de Control y Gestión para Fotocopiadora",
        slogan: "Automatización completa para el negocio de fotocopias.",
        description:
            "Aplicación para automatizar y optimizar las operaciones de una fotocopiadora. Permite la gestión de inventario de insumos (papel, tóner), registro de trabajos de impresión, cálculo de costos por servicio y generación de reportes de ventas y uso de materiales. Un sistema integral para mejorar la eficiencia y el control administrativo del negocio.",
        year: 2024,
        imagePath: [
            '/projects/fotocopia/1.png',
            '/projects/fotocopia/2.png',
            '/projects/fotocopia/3.png',
            '/projects/fotocopia/4.png',
        ],
        linkToGithub: "https://github.com/",
        startDate: new Date("2024-07-01"),
        endDate: new Date("2024-10-01"),
        skils: {
            createMany: {
                data: [
                    { skillId: ALL_SKILS.express.id },
                    { skillId: ALL_SKILS.mysql.id },
                    { skillId: ALL_SKILS.ts.id },
                    { skillId: ALL_SKILS.js.id },
                    { skillId: ALL_SKILS.docker.id },
                ]
            }
        },
        project: true,
        primary: true,
    },
];
