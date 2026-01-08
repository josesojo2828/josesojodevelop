import { RegisterApiData } from '@/types/type';
import PrintSkils from '../partials/PrintSkils';
/**
 * Nota Técnica:
 * Hemos integrado una versión local de PrintSkils y sustituido los componentes 
 * de Next.js (Link) por etiquetas estándar para asegurar que el código sea 
 * autónomo y se pueda previsualizar correctamente en este entorno.
 */

// const InternalPrintSkils = ({ skils }) => {
//     return (
//         <div className="flex flex-wrap gap-3">
//             {skils?.map((item, index) => (
//                 <div 
//                     key={index} 
//                     className="flex items-center gap-2 bg-black/5 px-3 py-1.5 rounded-lg border border-black/5 hover:border-blue-500/30 transition-all duration-300"
//                 >
//                     {item.skill?.logo && (
//                         <img 
//                             src={item.skill.logo} 
//                             alt={item.skill.name} 
//                             className="w-4 h-4 object-contain filter brightness-0 invert opacity-60" 
//                         />
//                     )}
//                     <span className="text-[9px] text-black/50 font-mono uppercase tracking-widest font-bold">
//                         {item.skill?.name}
//                     </span>
//                 </div>
//             ))}
//         </div>
//     );
// };

interface HeroProps {
    data: RegisterApiData;
}

export default function Hero({ data }: HeroProps) {
    const { about, skils } = data;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden font-sans">
            {/* Efecto de iluminación ambiental DevOps (Deep Blue Glow) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full  rounded-[3rem] p-8 md:p-24 shadow-2xl">
                <div className="mb-14">
                    <div className="space-y-2">
                        <span className="block font-mono text-[11px] font-black uppercase tracking-[0.6em] mb-4">
                            Fullstack Engineer & Cloud Specialist
                        </span>

                        <h1 className="text-6xl md:text-9xl font-black text-black leading-[0.85] tracking-tighter uppercase italic">
                            Hola, Soy <br />
                            <span className="text-transparent bg-clip-text pr-5 bg-gradient-to-r from-black via-black-100 to-blue-600">
                                {about.fullName}
                            </span>
                        </h1>
                    </div>

                    {/* Skill Tags Container */}
                    <div className="mt-14 max-w-2xl">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-[8px] font-mono text-black uppercase tracking-[0.2em]">Core_Stack</span>
                            <div className="h-[1px] flex-grow bg-black/5"></div>
                        </div>
                        <PrintSkils w={8} skils={skils} />
                    </div>
                </div>

                {/* Main Action Callbacks */}
                <div className="flex flex-wrap items-center gap-6">
                    <a
                        href="#work"
                        className="group relative px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-blue-600 hover:text-white shadow-2xl shadow-black/5 overflow-hidden"
                    >
                        <span className="relative z-10">Proyectos</span>
                        <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </a>

                    <a
                        href="/vlog"
                        className="p-5 text-black text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:bg-blue-500/50 border border-gray-600/20 rounded text-center hover:translate-x-2"
                    >
                        Portafolio
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center gap-3 p-5 text-black text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300 hover:bg-blue-500/50 border border-gray-600/20 rounded hover:translate-x-2"
                    >
                        <span>Contacto</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
