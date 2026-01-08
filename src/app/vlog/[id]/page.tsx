"use client";

import React, { useState } from 'react';
import {
    Calendar,
    Share2,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';
import { useParams } from "next/navigation";
import { useVlogStore } from '@/lib/store/storeData';
import { Vlog } from '@/types/type';
import Nav from '@/components/sections/Nav';
import Link from 'next/link';
import Image from 'next/image';
import {
    Database,
    Layout,
    ShieldCheck,
    Cpu,
    Globe,
    Code2,
    ExternalLink,
    Terminal
} from 'lucide-react';
import PrintSkils from '@/components/partials/PrintSkils';

/**
 * SingleVlogPost - El "Reporte Técnico" del Sistema
 * Diseñado con estética de ingeniería para demostrar capacidad técnica profunda.
 */
export default function SingleVlogPost() {


    const { id }: { id: string } = useParams();
    const { vlogData } = useVlogStore();
    if (!vlogData) return <></>;
    const data = vlogData.vlog.find(vlg => vlg.id == Number(id));
    if (!data) return <></>;

    const [index, setIndex] = useState(0);
    const imageList = data.imagePath || [];

    const nextImage = () => setIndex((prev) => (prev + 1) % imageList.length);
    const prevImage = () => setIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

    const stats = [
        { label: "Versión", value: "v1.0.4", icon: <Terminal size={14} /> },
        { label: "Status", value: "Production", icon: <ShieldCheck size={14} className="text-green-500" /> },
        { label: "Año", value: data.year, icon: <Calendar size={14} /> }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-zinc-900">
            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/vlog" className="group flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Volver_al_Repositorio
                    </a>
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] font-bold text-zinc-300 uppercase">System_ID: 00{data.id}</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Lado Izquierdo: Galería y Descripción (8 col) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Galería de Sistema con Estética de Monitor */}
                        <div className="relative group">
                            <div className="aspect-video bg-zinc-100 rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl">
                                <img
                                    src={imageList[index]}
                                    alt={data.title}
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />

                                {/* Controles de Galería */}
                                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                                    <button
                                        onClick={prevImage}
                                        className="pointer-events-auto p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl text-zinc-900 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                                    >
                                        <ArrowLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="pointer-events-auto p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl text-zinc-900 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                                    >
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Indicador de Posición */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {imageList.map((_: any, i: number) => (
                                    <div
                                        key={i}
                                        className={`h-1 rounded-full transition-all ${index === i ? 'w-8 bg-blue-600' : 'w-2 bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Título y Resumen */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                                <Database size={12} />
                                <span className="font-mono text-[10px] font-black uppercase tracking-widest">Architectural_Log</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 uppercase italic tracking-tighter">
                                {data.title}
                            </h1>
                            <p className="text-zinc-500 text-lg leading-relaxed max-w-3xl">
                                {data.description}
                            </p>
                        </div>

                        {/* Sección de "Carpintería Técnica" */}
                            {/* <div className="pt-12 border-t border-zinc-100">
                                <h3 className="font-mono text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-3">
                                    <Code2 size={16} className="text-blue-600" />
                                    Implementación_y_Lógica
                                </h3>
                                <div className="prose prose-zinc max-w-none text-zinc-600">
                                    <p>
                                        Este sistema fue diseñado bajo una arquitectura modular para garantizar que cada componente pueda escalar
                                        de forma independiente. Se implementaron patrones de diseño para el manejo de estados complejos y
                                        optimizaciones de base de datos para consultas de alto volumen.
                                    </p>
                                </div>
                            </div> */}
                    </div>

                    {/* Lado Derecho: Especificaciones Técnicas (4 col) */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* Ficha Técnica */}
                        <div className="bg-zinc-950 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
                                <Cpu size={120} />
                            </div>

                            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 relative z-10">Especificaciones</h4>

                            <div className="space-y-6 relative z-10">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
                                        <div className="flex items-center gap-3 text-white/50">
                                            {stat.icon}
                                            <span className="text-[10px] font-mono uppercase font-bold tracking-widest">{stat.label}</span>
                                        </div>
                                        <span className="text-xs font-black uppercase italic">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 space-y-4 relative z-10">
                                <button className="w-full py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
                                    <Globe size={14} />
                                    Ver Demo Online
                                </button>
                                <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                                    <ExternalLink size={14} />
                                    Repositorio_Git
                                </button>
                            </div>
                        </div>

                        {/* Stack Tecnológico Detallado */}
                        <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2.5rem]">
                            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Tecnologias</h4>
                            <div className="flex flex-wrap gap-2">
                                <PrintSkils skils={data.skils} w={8} />
                            </div>
                        </div>

                        {/* Call to action sutil */}
                        <div className="p-8 border border-dashed border-zinc-200 rounded-[2.5rem] text-center">
                            <p className="text-[11px] text-zinc-400 font-medium mb-4 italic">¿Necesitas una solución similar para tu infraestructura?</p>
                            <a href="/#contact" className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">Solicitar_Consultoría_</a>
                        </div>
                    </aside>

                </div>
        </main>

        </div>
    );
}