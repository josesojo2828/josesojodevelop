import { Skill } from "@/types/type";

interface PrintSkilsProps {
    skils: Skill[];
    w?: number;
}

export default function PrintSkils({ skils, w = 5 }: PrintSkilsProps) {
    // Si no hay habilidades, no renderizamos nada para evitar errores
    if (!skils || skils.length === 0) return null;

    return (
        <div className="gap-3">
            <div
                className="flex flex-wrap gap-2"
            >
                {/* Renderizado del logo de la tecnología */}
                {skils.map((item, index) => {
                    const skillColor = item?.color || '#ffffff';
                    return (
                        <div
                            key={index}
                            className="relative backdrop-blur-xl p-2 rounded-lg border border-white/5 transition-all duration-300 flex items-center justify-center group/icon"
                            title={item?.name || "Tech"}
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
                            {item.logo && (
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className={`${w ? `w-${w} h-${w}` : 'w-4 h-4'} object-contain filter group-hover/icon:opacity-100 group-hover/icon:filter-none group-hover/icon:scale-110 transition-all duration-300`}
                                />
                            )}
                        </div>
                    );
                })}

            </div>
        </div>
    );
};