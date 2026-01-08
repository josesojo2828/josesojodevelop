import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star, User, ShieldCheck, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    tags: string[];
}

/**
 * Componente TestimonialCard
 * Mantiene la coherencia visual con las tarjetas de Servicios.
 */
const TestimonialCard: React.FC<Testimonial> = ({ name, role, company, content, rating, tags }) => (
    <div className="group bg-white border border-zinc-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full snap-start shrink-0 w-[85vw] md:w-[400px]">
        {/* Header de la tarjeta con estrellas e icono */}
        <div className="flex justify-between items-start mb-6">
            <div className="flex gap-1 text-blue-600">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                ))}
            </div>
            <div className="p-2 rounded-lg bg-zinc-50 text-zinc-300 group-hover:text-blue-600 transition-colors">
                <Quote size={20} />
            </div>
        </div>

        {/* Contenido del Testimonio */}
        <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow italic">
            "{content}"
        </p>

        {/* Info del Cliente */}
        <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
            <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 overflow-hidden">
                <User size={24} />
            </div>
            <div>
                <h4 className="text-sm font-black text-zinc-900 uppercase tracking-tight">
                    {name}
                </h4>
                <p className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest">
                    {role} @ {company}
                </p>
            </div>
        </div>

        {/* Tags Técnicos del Proyecto */}
        <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span key={i} className="font-mono text-[8px] bg-zinc-50 text-zinc-400 px-2 py-1 rounded-md border border-zinc-100 uppercase tracking-tighter">
                    #{tag}
                </span>
            ))}
        </div>
    </div>
);

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials: Testimonial[] = [
        {
            name: "Carlos Méndez",
            role: "CTO",
            company: "TechFlow SaaS",
            content: "Jose no solo construyó nuestra plataforma, sino que rediseñó nuestra forma de escalar. Su enfoque en DevOps eliminó por completo los cuellos de botella que teníamos en despliegue.",
            rating: 5,
            tags: ["Architecture", "DevOps", "Scalability"]
        },
        {
            name: "Elena Rodríguez",
            role: "Founder",
            company: "InnovateApp",
            content: "Teníamos un modelo de negocio complejo que nadie lograba aterrizar en una web. Jose capturó la esencia de nuestra propuesta única desde el primer sprint.",
            rating: 5,
            tags: ["LandingPage", "UX/UI", "NextJS"]
        },
        {
            name: "Marco Silva",
            role: "Operations Director",
            company: "Logística 360",
            content: "La automatización que implementó redujo en un 40% el tiempo operativo de nuestro equipo. Es un activo invaluable para cualquier negocio que busque eficiencia real.",
            rating: 5,
            tags: ["Automation", "Process_Optimization", "Python"]
        },
        {
            name: "Lucía Vargas",
            role: "Product Manager",
            company: "FinTech Hub",
            content: "Su capacidad para mantener sistemas críticos bajo control mediante observabilidad nos dio la paz mental que necesitábamos para crecer agresivamente.",
            rating: 5,
            tags: ["Monitoring", "Reliability", "NestJS"]
        }
    ];

    // Lógica de movimiento automático
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;

                // Si llegamos al final, volvemos al inicio de forma suave
                if (scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Desplazamos el ancho de una tarjeta aproximado
                    scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }
        }, 3500); // Se mueve cada 3.5 segundos

        return () => clearInterval(interval);
    }, [isPaused]);

    // Función para navegación manual
    const handleManualScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="testimonials"
            className="relative py-32 bg-white font-sans overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] bg-zinc-900 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest">
                                Feedback_System / v1.0
                            </span>
                            <div className="h-px w-12 bg-zinc-200"></div>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-zinc-900 uppercase italic tracking-tighter mb-8 leading-tight">
                            Lo que dicen <br />
                            <span className="text-blue-600">mis aliados_</span>
                        </h2>

                        <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                            Logs de satisfacción: Testimonios reales sobre el impacto de arquitecturas robustas y modelos de negocio optimizados.
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
            <div className="max-w-7xl mx-auto px-6 relative">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .scrollbar-hide::-webkit-scrollbar { display: none; }
                        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                    `}} />

                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                        />
                    ))}

                    {/* Tarjeta de Cierre con Trust Indicator */}
                    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center snap-start shrink-0 w-[85vw] md:w-[400px]">
                        <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-black uppercase italic text-zinc-900 mb-2">Resultados_Verificados</h3>
                        <p className="text-zinc-500 text-xs mb-6">Arquitecturas desplegadas con éxito en entornos de alta demanda.</p>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest px-4 py-2 bg-white border border-zinc-100 rounded-xl">
                                <span>SLA_Compliance</span>
                                <span className="text-green-500">99.9%</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest px-4 py-2 bg-white border border-zinc-100 rounded-xl">
                                <span>Client_Retention</span>
                                <span className="text-blue-500">HIGH</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-6">
                <div className="mt-12 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <Terminal size={12} className="text-blue-500" />
                            Logs: Fetched_Successfully
                        </span>
                        <span className="flex items-center gap-1.5 ml-2">
                            <span className={`w-1 h-1 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-green-500 animate-pulse'}`}></span>
                            <span className="text-[7px]">{isPaused ? 'NAV_MANUAL_MODE' : 'AUTO_SCROLL_ACTIVE'}</span>
                        </span>
                    </div>
                    <span>Total_Entries: {testimonials.length}</span>
                    <span className="hidden md:block">Environment: Production_Feedback</span>
                </div>
            </div>
        </section>
    );
}
