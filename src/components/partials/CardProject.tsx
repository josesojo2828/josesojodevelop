import React from 'react';
import { Vlog } from "@/types/type";

/**
 * Componente CardProject
 * Muestra una tarjeta de proyecto con efectos de Glassmorphism.
 * Los iconos de habilidades (skills) recuperan su color original al hacer hover.
 */
export default function CardProject({ project }: { project: Vlog }) {
    const imageList = Array.isArray(project.imagePath) ? project.imagePath : [];
    const skills = project.skils || [];

    return (
        <div
            className="project-card group h-[420px] w-full rounded-2xl shadow-2xl overflow-hidden relative border border-white/10 bg-zinc-950"
            style={{
                backgroundImage: `url(${imageList[0] || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Overlay con Glassmorphism y desenfoque dinámico */}
            <div className="
                absolute inset-0 
                bg-gradient-to-b from-transparent via-black/70 to-black 
                h-full w-full flex items-end 
                opacity-0 duration-500 group-hover:opacity-100
                transition-all ease-out
                backdrop-blur-[6px]
            ">
                <div className="p-7 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <div className="flex flex-col justify-between mb-4 items-start">
                        <h3 className="text-2xl text-white font-black tracking-tight mb-2 uppercase">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-blue-400 border border-blue-500/30 bg-blue-500/5 px-2.5 py-1 rounded-md font-black uppercase tracking-widest">
                                Release: {project.year}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-400 mb-6 text-xs line-clamp-3 leading-relaxed font-medium">
                        {project.description}
                    </p>

                    {/* Rejilla de Tecnologías (Skills) con Efecto de Color Dinámico e Iconos Reales */}
                    <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 mb-8">
                        {skills.map((item, index) => {
                            const skillColor = item.skill?.color || '#ffffff';
                            return (
                                <div
                                    key={index}
                                    className="relative bg-white/5 backdrop-blur-xl p-2 rounded-lg border border-white/5 transition-all duration-300 flex items-center justify-center group/icon"
                                    title={item.skill?.name || "Tech"}
                                    style={{
                                        '--hover-color': skillColor,
                                        '--glow-opacity': '0.3'
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = skillColor;
                                        e.currentTarget.style.backgroundColor = `${skillColor}20`;
                                        e.currentTarget.style.boxShadow = `0 0 15px ${skillColor}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {item.skill?.logo && (
                                        <img
                                            src={item.skill.logo}
                                            alt={item.skill.name}
                                            className="w-5 h-5 object-contain filter group-hover/icon:opacity-100 group-hover/icon:filter-none group-hover/icon:scale-110 transition-all duration-300"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                        <a
                            href={`/vlog/${project.id}`}
                            className="text-[10px] font-black py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all duration-300 uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20"
                        >
                            Ver Proyecto
                        </a>

                        <div className="flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] text-white font-mono uppercase tracking-widest">Deploy Status</span>
                            <span className="text-[9px] text-green-400 font-bold uppercase">● Production</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}