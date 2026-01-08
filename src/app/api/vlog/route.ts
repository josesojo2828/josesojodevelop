export async function GET() {
  try {

    // // GET ALL INFO
    // const prisma = new PrismaClient();

    // const aboutPromise = prisma.about.findFirst({ where: { id: 1 } });

    // const skilsPromise = prisma.skill.findMany({
    //   include: {
    //     _count: true,
    //   },
    //   orderBy: {
    //     type: 'asc'
    //   }
    // });

    // const vlogPromise = prisma.vlog.findMany({
    //   include: {
    //     _count: true,
    //     skils: {
    //       include: {
    //         skill: true,
    //       }
    //     }
    //   }
    // });

    // const projectPromise = prisma.vlog.findMany({
    //   include: {
    //     _count: true,
    //     skils: {
    //       include: {
    //         skill: true,
    //       }
    //     }
    //   },
    //   where: { primary: true }
    // });

    // const about = await aboutPromise;
    // const skils = await skilsPromise;
    // const vlog = await vlogPromise;
    // const project = await projectPromise;

    // console.log(JSON.stringify(
    //     {
    //       about,
    //       skils,
    //       vlog,
    //       project
    //     }
    //   ))
    // Fuente única de verdad para las tecnologías (Skills)
    const SKILLS_DATA = {
      // Ecosistema Python
      PYTHON: { id: 3, name: "Python", description: "Versatilidad en lógica de negocio, scripting y backend.", type: "backend", logo: "/python.png", color: "#3776AB", _count: { projects: 1, experiences: 0 } },
      FASTAPI: { id: 9, name: "FastAPI", description: "Backend moderno de alto rendimiento con Python.", type: "backend", logo: "/fastapi.svg", color: "#05998B", _count: { projects: 0, experiences: 0 } },

      // Ecosistema JavaScript / TypeScript
      TS: { id: 2, name: "TypeScript", description: "Desarrollo tipado para aplicaciones robustas y escalables.", type: "backend", logo: "/ts.svg", color: "#3178C6", _count: { projects: 6, experiences: 0 } },
      JS: { id: 1, name: "JavaScript", description: "Lenguaje base para el desarrollo web dinámico.", type: "frontend", logo: "/js.png", color: "#F7DF1E", _count: { projects: 6, experiences: 0 } },

      // Plataformas y Frameworks
      NEXT: { id: 5, name: "Next", description: "Framework de React para aplicaciones web optimizadas.", type: "frontend", logo: "/next.svg", color: "#000000", _count: { projects: 2, experiences: 0 } },
      NEST: { id: 8, name: "NestJs", description: "Arquitectura modular y escalable para el servidor.", type: "backend", logo: "/nest.svg", color: "#E0234E", _count: { projects: 1, experiences: 0 } },
      EXPRESS: { id: 7, name: "ExpressJs", description: "Framework minimalista para servicios web ágiles.", type: "backend", logo: "/express.png", color: "#808080", _count: { projects: 1, experiences: 0 } },
      SYMFONY: { id: 10, name: "Symfony", description: "Framework PHP profesional para aplicaciones empresariales.", type: "backend", logo: "/symfony.svg", color: "#000000", _count: { projects: 1, experiences: 0 } },
      TAILWIND: { id: 6, name: "Tailwind CSS", description: "Diseño de interfaces modernas mediante utilidades CSS.", type: "frontend", logo: "/tailwindcss.svg", color: "#06B6D4", _count: { projects: 2, experiences: 0 } },

      // Bases de Datos
      MYSQL: { id: 4, name: "MySql", description: "Gestión de bases de datos relacionales robustas.", type: "database", logo: "/mysql.svg", color: "#4479A1", _count: { projects: 4, experiences: 0 } },
      INFLUX: { id: 16, name: "InfluxDB", description: "Base de datos de series temporales para monitoreo.", type: "devops", logo: "/influxdb.svg", color: "#22ADF6", _count: { projects: 1, experiences: 0 } },

      // DevOps e Infraestructura
      DOCKER: { id: 11, name: "Docker", description: "Containerización y orquestación de servicios.", type: "devops", logo: "/docker.svg", color: "#2496ED", _count: { projects: 5, experiences: 0 } },
      K8S: { id: 18, name: "Kubernetes", description: "Orquestación de contenedores a escala.", type: "devops", logo: "/k8s.png", color: "#326CE5", _count: { projects: 1, experiences: 0 } },
      LINUX: { id: 19, name: "Linux", description: "Administración y gestión de servidores Debian/Ubuntu.", type: "os", logo: "/linux.png", color: "#FCC624", _count: { projects: 5, experiences: 0 } },
      NGINX: { id: 13, name: "Nginx", description: "Servidor web de alto rendimiento y proxy inverso.", type: "devops", logo: "/nginx.png", color: "#009639", _count: { projects: 1, experiences: 0 } },
      BASH: { id: 12, name: "Bash", description: "Automatización mediante scripting en entornos Unix.", type: "devops", logo: "/bash.svg", color: "#4EAA25", _count: { projects: 2, experiences: 0 } },

      // Observabilidad
      GRAFANA: { id: 14, name: "Grafana", description: "Análisis y visualización de métricas en tiempo real.", type: "devops", logo: "/grafana.svg", color: "#F46800", _count: { projects: 2, experiences: 0 } },
      PROMETHEUS: { id: 15, name: "Prometheus", description: "Monitoreo y alerta para infraestructuras dinámicas.", type: "devops", logo: "/prometheus.svg", color: "#E6522C", _count: { projects: 1, experiences: 0 } },

      // Cloud
      AWS: { id: 17, name: "AWS", description: "Servicios e infraestructura en la nube.", type: "cloud", logo: "/aws.svg", color: "#FF9900", _count: { projects: 2, experiences: 0 } }
    };

    const obj = {
      "about": {
        "id": 1,
        "fullName": "Jose Sojo",
        "bio": "Ingeniero de Software especializado en el desarrollo de ecosistemas digitales de alto rendimiento. Con un enfoque integral en soluciones Full Stack y una sólida base en cultura DevOps, me dedico a transformar requerimientos complejos en aplicaciones robustas, escalables y eficientes. Mi propósito es diseñar tecnología que no solo funcione, sino que impulse el crecimiento real de los negocios mediante el uso de React, Next.js, NestJS y arquitecturas basadas en contenedores.",
        "email": "josesojo2828@gmail.com",
        "country": "Venezuela",
        "phone": "+584128606734",
        "location": "San Juan de los Morros, Guárico",
        "linkedin": "https://www.linkedin.com/in/jose-sojo-14899b380/",
        "x": "https://x.com/JoseSojoJ",
        "facebook": "https://www.facebook.com/jose.josejaimes.9",
        "github": "https://github.com/JoseSojo",
        "tiktok": "",
        "instagram": "https://www.instagram.com/josesojo28/",
        "website": "",
        "presentationSkils": "[{\"title\":\"Frontend\",\"description\":\"Dominio de arquitecturas modernas orientadas a componentes y experiencias de usuario intuitivas utilizando React, Next.js y Tailwind CSS para interfaces de alto impacto.\"},{\"title\":\"Backend\",\"description\":\"Diseño y construcción de APIs robustas y sistemas distribuidos escalables bajo estándares de industria con tecnologías como NestJS, Symfony y FastAPI.\"},{\"title\":\"Bases de Datos\",\"description\":\"Estructuración y optimización de esquemas relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB), garantizando la integridad y velocidad de los datos.\"},{\"title\":\"Infraestructura & DevOps\",\"description\":\"Especialista en el despliegue de entornos Linux, orquestación de contenedores con Docker y monitorización avanzada mediante herramientas de observabilidad como Grafana y Prometheus.\"}]"
      },
      "skils": Object.values(SKILLS_DATA),
      "vlog": [
        {
          "id": 1,
          "imagePath": ["/projects/ociti/1.png", "/projects/ociti/2.png", "/projects/ociti/3.png", "/projects/ociti/4.png"],
          "title": "Biblioteca Virtual de Postgrado",
          "slogan": "Gestión digital centralizada para la investigación académica.",
          "description": "Ecosistema académico diseñado para la Universidad Nacional Experimental 'Rómulo Gallegos'. Automatiza el flujo de registro, revisión y control de tesis doctorales y proyectos especiales, mejorando la trazabilidad institucional y eliminando cuellos de botella administrativos.",
          "year": 2024,
          "linkToGithub": "https://github.com/",
          "startDate": "2024-09-01T00:00:00.000Z",
          "endDate": "2025-02-10T00:00:00.000Z",
          "project": true,
          "primary": true,
          "_count": { "skils": 6 },
          "skils": [
            { "vlogId": 1, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 1, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 1, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 1, "skillId": SKILLS_DATA.EXPRESS.id, "skill": SKILLS_DATA.EXPRESS },
            { "vlogId": 1, "skillId": SKILLS_DATA.SYMFONY.id, "skill": SKILLS_DATA.SYMFONY },
            { "vlogId": 1, "skillId": SKILLS_DATA.GRAFANA.id, "skill": SKILLS_DATA.GRAFANA }
          ]
        },
        {
          "id": 2,
          "imagePath": ["/projects/eventos/1.png", "/projects/eventos/2.png", "/projects/eventos/3.png", "/projects/eventos/4.png"],
          "title": "Sistema de Administración Financiera",
          "slogan": "Inteligencia financiera para una gestión operativa impecable.",
          "description": "Plataforma integral para el control de flujos de caja. Permite la categorización avanzada de ingresos y egresos, facilitando la toma de decisiones estratégicas mediante el análisis de reportes financieros dinámicos.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 2, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 2, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 2, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 2, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 3,
          "imagePath": ["/projects/citas/1.png", "/projects/citas/2.png", "/projects/citas/3.png", "/projects/citas/4.png", "/projects/citas/5.png"],
          "title": "Gestión de Citas Médicas",
          "slogan": "Centralización y eficiencia en la atención al paciente.",
          "description": "Sistema de gestión sanitaria enfocado en la administración de consultas, médicos y registros clínicos. Optimiza el agendamiento y seguimiento de pacientes, garantizando una atención organizada y profesional.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 3, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 3, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 3, "skillId": SKILLS_DATA.NEXT.id, "skill": SKILLS_DATA.NEXT },
            { "vlogId": 3, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 4,
          "imagePath": ["/projects/manufactura/1.png", "/projects/manufactura/2.png"],
          "title": "Ecosistema Industrial de Manufactura",
          "slogan": "Optimización del ciclo productivo y control de costos.",
          "description": "Solución técnica para empresas manufactureras que integra la gestión de producción con el control financiero. Mejora la visibilidad operativa y la eficiencia en el uso de recursos empresariales.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 4, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 4, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 4, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 4, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 5,
          "imagePath": ["/projects/insumos/1.png", "/projects/insumos/2.png", "/projects/insumos/3.png"],
          "title": "Control de Insumos Odontológicos",
          "slogan": "Trazabilidad y control inteligente de stock médico.",
          "description": "Herramienta especializada para la gestión de inventarios en clínicas dentales. Previene la rotura de stock y optimiza los costos operativos mediante una monitorización precisa de los materiales médicos.",
          "year": 2024,
          "project": true,
          "primary": true,
          "skils": [
            { "vlogId": 5, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 5, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 5, "skillId": SKILLS_DATA.NEXT.id, "skill": SKILLS_DATA.NEXT },
            { "vlogId": 5, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 6,
          "imagePath": ["/projects/fotocopia/1.png", "/projects/fotocopia/2.png", "/projects/fotocopia/3.png", "/projects/fotocopia/4.png"],
          "title": "Gestión Operativa para Fotocopiadoras",
          "slogan": "Automatización integral para el sector de servicios.",
          "description": "Aplicación diseñada para la transformación digital de centros de impresión. Automatiza el cálculo de servicios, la gestión de insumos críticos y genera analíticas detalladas sobre la rentabilidad del negocio.",
          "year": 2024,
          "project": true,
          "primary": true,
          "skils": [
            { "vlogId": 6, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 6, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 6, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 6, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER },
            { "vlogId": 6, "skillId": SKILLS_DATA.GRAFANA.id, "skill": SKILLS_DATA.GRAFANA }
          ]
        }
      ],
      "project": [
        {
          "id": 1,
          "imagePath": ["/projects/ociti/1.png", "/projects/ociti/2.png", "/projects/ociti/3.png", "/projects/ociti/4.png"],
          "title": "Biblioteca Virtual de Postgrado",
          "slogan": "Gestión digital centralizada para la investigación académica.",
          "description": "Ecosistema académico diseñado para la Universidad Nacional Experimental 'Rómulo Gallegos'. Automatiza el flujo de registro, revisión y control de tesis doctorales y proyectos especiales, mejorando la trazabilidad institucional y eliminando cuellos de botella administrativos.",
          "year": 2024,
          "linkToGithub": "https://github.com/",
          "startDate": "2024-09-01T00:00:00.000Z",
          "endDate": "2025-02-10T00:00:00.000Z",
          "project": true,
          "primary": true,
          "_count": { "skils": 6 },
          "skils": [
            { "vlogId": 1, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 1, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 1, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 1, "skillId": SKILLS_DATA.EXPRESS.id, "skill": SKILLS_DATA.EXPRESS },
            { "vlogId": 1, "skillId": SKILLS_DATA.SYMFONY.id, "skill": SKILLS_DATA.SYMFONY },
            { "vlogId": 1, "skillId": SKILLS_DATA.GRAFANA.id, "skill": SKILLS_DATA.GRAFANA }
          ]
        },
        {
          "id": 2,
          "imagePath": ["/projects/eventos/1.png", "/projects/eventos/2.png", "/projects/eventos/3.png", "/projects/eventos/4.png"],
          "title": "Sistema de Administración Financiera",
          "slogan": "Inteligencia financiera para una gestión operativa impecable.",
          "description": "Plataforma integral para el control de flujos de caja. Permite la categorización avanzada de ingresos y egresos, facilitando la toma de decisiones estratégicas mediante el análisis de reportes financieros dinámicos.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 2, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 2, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 2, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 2, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 3,
          "imagePath": ["/projects/citas/1.png", "/projects/citas/2.png", "/projects/citas/3.png", "/projects/citas/4.png", "/projects/citas/5.png"],
          "title": "Gestión de Citas Médicas",
          "slogan": "Centralización y eficiencia en la atención al paciente.",
          "description": "Sistema de gestión sanitaria enfocado en la administración de consultas, médicos y registros clínicos. Optimiza el agendamiento y seguimiento de pacientes, garantizando una atención organizada y profesional.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 3, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 3, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 3, "skillId": SKILLS_DATA.NEXT.id, "skill": SKILLS_DATA.NEXT },
            { "vlogId": 3, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 4,
          "imagePath": ["/projects/manufactura/1.png", "/projects/manufactura/2.png"],
          "title": "Ecosistema Industrial de Manufactura",
          "slogan": "Optimización del ciclo productivo y control de costos.",
          "description": "Solución técnica para empresas manufactureras que integra la gestión de producción con el control financiero. Mejora la visibilidad operativa y la eficiencia en el uso de recursos empresariales.",
          "year": 2024,
          "project": true,
          "primary": false,
          "skils": [
            { "vlogId": 4, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 4, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 4, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 4, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 5,
          "imagePath": ["/projects/insumos/1.png", "/projects/insumos/2.png", "/projects/insumos/3.png"],
          "title": "Control de Insumos Odontológicos",
          "slogan": "Trazabilidad y control inteligente de stock médico.",
          "description": "Herramienta especializada para la gestión de inventarios en clínicas dentales. Previene la rotura de stock y optimiza los costos operativos mediante una monitorización precisa de los materiales médicos.",
          "year": 2024,
          "project": true,
          "primary": true,
          "skils": [
            { "vlogId": 5, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 5, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 5, "skillId": SKILLS_DATA.NEXT.id, "skill": SKILLS_DATA.NEXT },
            { "vlogId": 5, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER }
          ]
        },
        {
          "id": 6,
          "imagePath": ["/projects/fotocopia/1.png", "/projects/fotocopia/2.png", "/projects/fotocopia/3.png", "/projects/fotocopia/4.png"],
          "title": "Gestión Operativa para Fotocopiadoras",
          "slogan": "Automatización integral para el sector de servicios.",
          "description": "Aplicación diseñada para la transformación digital de centros de impresión. Automatiza el cálculo de servicios, la gestión de insumos críticos y genera analíticas detalladas sobre la rentabilidad del negocio.",
          "year": 2024,
          "project": true,
          "primary": true,
          "skils": [
            { "vlogId": 6, "skillId": SKILLS_DATA.JS.id, "skill": SKILLS_DATA.JS },
            { "vlogId": 6, "skillId": SKILLS_DATA.TS.id, "skill": SKILLS_DATA.TS },
            { "vlogId": 6, "skillId": SKILLS_DATA.MYSQL.id, "skill": SKILLS_DATA.MYSQL },
            { "vlogId": 6, "skillId": SKILLS_DATA.DOCKER.id, "skill": SKILLS_DATA.DOCKER },
            { "vlogId": 6, "skillId": SKILLS_DATA.GRAFANA.id, "skill": SKILLS_DATA.GRAFANA }
          ]
        }
      ],
    };

    return new Response(
      JSON.stringify(obj),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
