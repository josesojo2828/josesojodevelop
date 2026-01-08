
/**
 * Componente Footer Mejorado
 * Estética de ingeniería, minimalista y alineada con el modo oscuro.
 */
export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-blue/50 bg-white font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand / Logo Style */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-2xl font-black text-gray-900 italic uppercase tracking-tighter">
                            Jose <span className="text-blue-600">Sojo_</span>
                        </span>
                        <p className="font-mono text-[10px] text-gray-900 uppercase tracking-[0.5em]">
                            Fullstack Engineer | Cloud specialist
                        </p>
                    </div>

                    {/* Metadata / System Status */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-4 text-[9px] font-mono text-gray-900 uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                                System_Ready
                            </span>
                            <span className="opacity-20">|</span>
                            <span>© 2025</span>
                            <span className="opacity-20">|</span>
                            <span>v2.4.0</span>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <nav className="flex items-center gap-8">
                        {['Proyectos', 'Sobre mi', 'Contacto'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '-')}`}
                                className="group relative text-[10px] font-mono text-gray-900 uppercase tracking-widest transition-colors hover:text-gray-900"
                            >
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                </div>
            </div>
        </footer>
    );
}