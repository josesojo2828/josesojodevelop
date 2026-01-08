import React, { useState, useEffect } from 'react';
import Link from "next/link";

/**
 * Componente Nav - Versión Premium Engineering
 * Diseño flotante con efecto blur y estética de terminal.
 */
export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Efecto para cambiar el estilo al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 ${isScrolled
                    ? 'md:py-4'
                    : 'md:py-8'
                }`}
        >
            <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl border ${isScrolled
                    ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl py-3 px-6'
                    : 'bg-gray-900 border-gray-900 py-3 px-6'
                }`}>
                <div className="flex justify-between items-center">

                    {/* Brand / Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white italic uppercase tracking-tighter transition-all group-hover:text-blue-500">
                                Jose <span className="text-blue-600 group-hover:text-white">Sojo_</span>
                            </span>
                            <div className="h-[1px] w-0 bg-blue-600 transition-all group-hover:w-full"></div>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {[
                                { name: 'Inicio', href: '/' },
                                { name: 'Proyectos', href: '/vlog' },
                                { name: 'Sobre mi', href: '#about' },
                                { name: 'Contacto', href: '#contact' }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group relative font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] transition-colors hover:text-white"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* System Indicator / Auth Mock */}
                        <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2 rounded-lg">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                            </span>
                            <span className="font-mono text-[8px] text-blue-400 font-black uppercase tracking-widest">
                                Dev_Session: active
                            </span>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Minimalista) */}
                    <div className="md:hidden">
                        <button className="text-white p-2">
                            <div className="w-6 h-[1px] bg-white mb-1.5"></div>
                            <div className="w-6 h-[1px] bg-blue-600"></div>
                        </button>
                    </div>

                </div>
            </div>

            {/* Línea decorativa de carga (opcional) */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-full opacity-30"></div>
        </nav>
    );
}