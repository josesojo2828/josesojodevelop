import React, { useEffect, useRef, useState } from 'react';
import { RegisterApiData } from "@/types/type";
import { ArrowUpRight, Trophy, ChevronLeft, ChevronRight, Terminal } from "lucide-react";

/**
 * Sección "Top Proyectos" - Mi Orgullo
 * Diseño imponente con desplazamiento horizontal y controles de ingeniería.
 * Muestra exclusivamente los 3 proyectos más destacados en un carrusel de alto impacto.
 */
export default function TopWork({ vlog }: { vlog: RegisterApiData }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Filtramos y limitamos a los 3 proyectos principales
    const topProjects = (vlog.project || []).slice(0, 3);

    // Lógica de movimiento automático para destacar los proyectos TOP
    useEffect(() => {
        if (isPaused || topProjects.length <= 1) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;

                if (scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
                }
            }
        }, 5000); // Cambio cada 5 segundos para permitir lectura

        return () => clearInterval(interval);
    }, [isPaused, topProjects.length]);

    const handleManualScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="work"
            className="py-32 bg-white overflow-hidden font-sans"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Cabecera de la sección */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-8xl font-black text-zinc-900 uppercase italic tracking-tighter mb-4 leading-none">
                            Top <span className="text-blue-600">Proyectos_</span>
                        </h2>
                        <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                            Mi selección élite: Arquitecturas que definen mi estándar de excelencia.
                        </p>
                    </div>

                    {/* Controles de Navegación Premium */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleManualScroll('left')}
                            className="p-5 rounded-[1.5rem] bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-500/40 hover:shadow-xl transition-all active:scale-95 group"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => handleManualScroll('right')}
                            className="p-5 rounded-[1.5rem] bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-500/40 hover:shadow-xl transition-all active:scale-95 group"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Contenedor de Scroll Horizontal (Carousel) */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-12 pb-16 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .scrollbar-hide::-webkit-scrollbar { display: none; }
                        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                    `}} />

                    {topProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center snap-start shrink-0 w-full"
                        >
                            {/* Imagen de alto impacto - Ocupa el 60% del ancho en escritorio */}
                            <div className="w-full lg:w-3/5 relative overflow-hidden rounded-[2.5rem] bg-zinc-100 aspect-video shadow-2xl transition-transform duration-700 group">
                                <img
                                    src={Array.isArray(project.imagePath) ? project.imagePath[0] : project.imagePath}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                                {/* Badge de posición del proyecto */}
                                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white font-mono text-[10px] font-black uppercase tracking-widest">
                                    Project_0{index + 1}
                                </div>
                            </div>

                            {/* Info del Proyecto - Ocupa el 40% del ancho */}
                            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                                <span className="font-mono text-[11px] text-blue-600 font-black uppercase tracking-[0.4em] mb-4">
                                    Release_Date // {project.year}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic tracking-tighter mb-6 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-12">
                                    {project.skils?.slice(0, 4).map((item: any, i: number) => (
                                        <span key={i} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-xl text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                                            #{item.name}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={`/project/${project.id}`}
                                    className="inline-flex items-center gap-4 px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/20 group/btn shadow-xl shadow-zinc-200"
                                >
                                    Explorar Caso
                                    <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}