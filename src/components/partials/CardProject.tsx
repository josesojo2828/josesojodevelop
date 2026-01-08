import { Vlog } from "@/types/type";
import PrintSkils from './PrintSkils';

export default function CardProject({ project }: { project: Vlog }) {
    const imageList = Array.isArray(project.imagePath) ? project.imagePath : [];
    const skills = project.skils || [];

    // Mapeamos las habilidades para pasarlas al componente PrintSkils
    const customSkils = skills.map(it => it.skill);

    return (
        <div
            className="project-card group h-[450px] md:h-[420px] w-full rounded-2xl shadow-2xl overflow-hidden relative border border-white/10 bg-zinc-950"
            style={{
                backgroundImage: `url(${imageList[0] || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* AJUSTE MOBILE: 
                - 'opacity-100 md:opacity-0' -> Visible siempre en móvil, hover en PC.
                - 'bg-gradient' más oscuro en la base para móvil para asegurar legibilidad.
            */}
            <div className="
                absolute inset-0 
                bg-gradient-to-b from-black/20 via-black/80 to-black 
                md:from-transparent md:via-black/70 md:to-black
                h-full w-full flex items-end 
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition-all duration-500 ease-out
                backdrop-blur-[3px] md:backdrop-blur-[6px]
            ">
                {/* AJUSTE DE TRANSFORMACIÓN:
                    - El texto no "salta" en móvil (translate-y-0).
                    - En PC mantiene la animación de entrada.
                */}
                <div className="p-6 md:p-7 w-full transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <div className="flex flex-col justify-between mb-4 items-start">
                        <h3 className="text-xl md:text-2xl text-white font-black tracking-tight mb-2 uppercase italic">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-[9px] text-blue-400 border border-blue-500/30 bg-blue-500/5 px-2.5 py-1 rounded-md font-black uppercase tracking-widest">
                                Release: {project.year}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-300 md:text-gray-400 mb-6 text-xs line-clamp-3 leading-relaxed font-medium">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <PrintSkils skils={customSkils} w={5} />
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                        <a
                            href={`/vlog/${project.id}`}
                            className="text-[10px] font-black py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-500 active:scale-95 transition-all duration-300 uppercase tracking-[0.2em] shadow-lg shadow-blue-600/20"
                        >
                            Ver Proyecto
                        </a>

                        <div className="flex flex-col items-end opacity-100 md:opacity-40 md:group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] text-white/60 font-mono uppercase tracking-widest">Deploy Status</span>
                            <span className="text-[9px] text-green-400 font-bold uppercase flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                Production
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}