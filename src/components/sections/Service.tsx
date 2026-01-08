import React, { useEffect, useRef, useState } from 'react';
import {
    Rocket,
    Box,
    Smartphone,
    RefreshCw,
    Cpu,
    CheckCircle2,
    AlertCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    pains: string[];
    problems: string[];
}

/**
 * Componente ServiceCard - Versión Light Premium
 * Optimizado para desplazamiento horizontal con snap alignment.
 */
const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, pains, problems }) => (
    <div className="group bg-white border border-zinc-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full snap-start shrink-0 w-[85vw] md:w-[450px]">
        {/* Icono con contenedor estilizado */}
        <div className="mb-8 p-4 w-fit rounded-2xl bg-zinc-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            {icon}
        </div>

        <h3 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter mb-4">
            {title}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
            {description}
        </p>

        {/* Sección de Dolores (Pains) */}
        <div className="space-y-4 pt-6 border-t border-zinc-100">
            <div>
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-blue-600 block mb-3">
                    Puntos_Críticos_detectados
                </span>
                <ul className="space-y-2">
                    {pains.map((pain, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-600 leading-tight">
                            <AlertCircle size={12} className="mt-0.5 text-zinc-300 flex-shrink-0" />
                            <span>"{pain}"</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sección de Problemas (Resultados Negativos) */}
            <div className="pt-2">
                <span className="font-mono text-[9px] font-black uppercase tracking-widest text-red-500/70 block mb-3">
                    Impacto_en_Negocio
                </span>
                <ul className="space-y-1.5">
                    {problems.map((prob, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-tight">
                            <CheckCircle2 size={10} className="text-blue-500" />
                            {prob}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const services = [
        {
            title: "Modelos Únicos & Validación",
            description: "Landing Pages estratégicas diseñadas para que el mercado entienda propuestas innovadoras que hoy no existen, capturando el valor real de tu nicho específico.",
            icon: <Rocket size={24} />,
            pains: [
                "Mi modelo es tan nuevo que no entienden cómo ayuda",
                "Las plantillas genéricas diluyen mi idea innovadora",
                "Atraigo tráfico pero no capturo el valor del nicho"
            ],
            problems: [
                "Invisibilidad estratégica",
                "Mensaje de valor diluido",
                "Fuga de clientes por desconfianza"
            ]
        },
        {
            title: "Web Apps & SaaS de Alto Impacto",
            description: "El motor de un negocio que ya no puede usar herramientas estándar. Creamos soluciones a medida para procesos únicos que exigen control total.",
            icon: <Box size={24} />,
            pains: [
                "Las soluciones 'listas para usar' ya no cubren mis procesos",
                "La tecnología actual es un techo para mi crecimiento",
                "Dependo de parches entre 10 herramientas diferentes"
            ],
            problems: [
                "Rigidez tecnológica limitante",
                "Pérdida de ventaja competitiva",
                "Falta de escalabilidad operativa"
            ]
        },
        {
            title: "Movilidad Estratégica",
            description: "Software a medida en el bolsillo del cliente. Eliminamos la fricción y creamos canales de comunicación directos y constantes.",
            icon: <Smartphone size={24} />,
            pains: [
                "Mis clientes necesitan interacción en tiempo real",
                "La fricción móvil hace que abandonen mi plataforma",
                "Pierdo presencia de marca por falta de canal directo"
            ],
            problems: [
                "Baja retención de usuarios",
                "Desconexión digital-cliente",
                "Oportunidades de venta perdidas"
            ]
        },
        {
            title: "Evolución de Activos",
            description: "Re-ingeniería de software estancado. Convertimos sistemas que son un gasto en activos tecnológicos que vuelven a generar dinero.",
            icon: <RefreshCw size={24} />,
            pains: [
                "Pánico a cambiar algo por miedo a que se rompa",
                "Nuevas ideas tardan meses por deuda técnica",
                "El software es un gasto en lugar de una inversión"
            ],
            problems: [
                "Parálisis por innovación (Stagnation)",
                "Riesgo crítico de seguridad",
                "Coste de oportunidad masivo"
            ]
        },
        {
            title: "IA & Optimización de Procesos",
            description: "Hacemos que tu modelo de negocio sea eficiente y autosustentable mediante automatización inteligente y procesamiento de datos.",
            icon: <Cpu size={24} />,
            pains: [
                "Mi equipo pierde el 60% del tiempo en tareas repetitivas",
                "Al escalar, los errores humanos cuestan dinero",
                "Tengo datos pero no capacidad de procesarlos"
            ],
            problems: [
                "Márgenes de beneficio erosionados",
                "Cuellos de botella operativos",
                "Falta de agilidad en decisiones"
            ]
        }
    ];

    // Lógica de movimiento automático
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;

                if (scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
            }
        }, 4000); // Se mueve cada 4 segundos

        return () => clearInterval(interval);
    }, [isPaused]);

    // Función para navegación manual
    const handleManualScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -450 : 450;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="services"
            className="relative py-32 bg-zinc-50 font-sans overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Decoración de fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-zinc-200/50 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest">
                                Strategic_Partner / v2.0
                            </span>
                            <div className="h-px w-12 bg-zinc-200"></div>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase italic tracking-tighter mb-8 leading-tight">
                            ¿Cómo puedo <br />
                            <span className="text-blue-600">ayudarte?_</span>
                        </h2>

                        <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                            Identifico las barreras tecnológicas que frenan tu crecimiento y las transformo en ventajas competitivas.
                        </p>
                    </div>

                    {/* Controles de Navegación Manual */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleManualScroll('left')}
                            className="p-4 rounded-2xl bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-500/50 hover:shadow-xl transition-all active:scale-95"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => handleManualScroll('right')}
                            className="p-4 rounded-2xl bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-500/50 hover:shadow-xl transition-all active:scale-95"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Contenedor de Scroll Horizontal con Ancho Máximo */}
            <div className="max-w-7xl mx-auto relative px-6">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .scrollbar-hide::-webkit-scrollbar { display: none; }
                        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                    `}} />

                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                        />
                    ))}

                    {/* Tarjeta de Cierre / Call to Action */}
                    <div className="bg-blue-600 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white snap-start shrink-0 w-[85vw] md:w-[450px] group cursor-pointer hover:bg-blue-700 transition-colors">
                        <h3 className="text-3xl font-black uppercase italic mb-4">¿Tienes un reto <br /> diferente?</h3>
                        <p className="text-blue-100 text-sm mb-8 max-w-[250px]">Hablemos sobre cómo escalar tu modelo de negocio único.</p>
                        <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                            Iniciar Consultoría_
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="mt-12 pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-blue-500 animate-pulse'}`}></span>
                            {isPaused ? 'NAV_MANUAL_MODE' : 'AUTO_SCROLL_ENABLED'}
                        </span>
                        <span>/</span>
                        <span>Performance: Optimized</span>
                    </div>
                    <span className="hidden md:block">Strategy: Tailored_to_Business</span>
                    <span className="hidden md:block">Status: Verified_Architecture</span>
                </div>
            </div>
        </section>
    );
}