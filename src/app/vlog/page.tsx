"use client";

import React, { useState, useMemo } from 'react';
import {
    Search,
    Database,
    Terminal,
    Filter,
    ExternalLink,
    Box,
    Cpu,
    Layout,
    Server,
    ArrowLeft
} from "lucide-react";
import { RegisterApiData, Vlog } from "@/types/type";
import { useVlogStore } from '@/lib/store/storeData';
import CardProject from '@/components/partials/CardProject';
import PrintSkils from '@/components/partials/PrintSkils';

/**
 * VlogPage - La Bitácora Completa de Ingeniería
 * Diseñada como una página independiente de exploración técnica.
 */
export default function VlogPage() {
    const { isLoading, vlogData } = useVlogStore();


    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("TODOS");

    const allSystems = vlogData.vlog || [];

    // Filtros lógicos
    const filteredSystems = useMemo(() => {
        return allSystems.filter(sys => {
            const matchesSearch = sys.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sys.description.toLowerCase().includes(searchTerm.toLowerCase());

            // Lógica simple de categorías basada en skills o títulos (personalizable)
            if (activeFilter === "TODOS") return matchesSearch;
            return matchesSearch && sys.title.toLowerCase().includes(activeFilter.toLowerCase());
        });
    }, [searchTerm, activeFilter, allSystems]);

    // Estadísticas para el panel lateral
    const stats = {
        total: allSystems.length,
        deployed: allSystems.length, // Mock
        latest: allSystems[0]?.year || 2024
    };

    return (
        <div className="min-h-screen bg-white font-sans text-zinc-900">
            {/* Header de Navegación / Breadcrumbs */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <a href="/" className="group flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Regresar_al_Home
                    </a>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-tighter text-zinc-400">
                            Database_Status: Connected
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-20">
                {/* Hero de la Página */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal size={20} className="text-blue-600" />
                        <span className="font-mono text-[11px] bg-blue-600 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest">
                            Systems_Archive / v3.0
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                        Vlog de <span className="text-blue-600">Sistemas_</span>
                    </h1>
                    <p className="text-zinc-500 text-xl leading-relaxed max-w-3xl font-medium">
                        Explora la bitácora completa de arquitecturas, desde soluciones SaaS escalables hasta microservicios y herramientas de automatización industrial.
                    </p>
                </div>

                {/* Barra de Herramientas: Buscador y Filtros */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start lg:items-center justify-between border-b border-zinc-100 pb-12">
                    <div className="relative w-full lg:max-w-md">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar en el repositorio..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all font-medium text-sm"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {["TODOS", "SaaS", "Dashboard", "Inventario", "Académico"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-3 rounded-xl font-mono text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === filter
                                    ? 'bg-zinc-900 text-white shadow-xl shadow-zinc-200'
                                    : 'bg-white border border-zinc-200 text-zinc-400 hover:border-zinc-400'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Grid de Sistemas */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSystems.length > 0 ? (
                            filteredSystems.map((sys) => (
                                <>
                                    {/* <CardProject project={sys} /> */}
                                    <div
                                        key={sys.id}
                                        className="group bg-white border border-zinc-200 p-8 rounded-[2.5rem] transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-4 bg-zinc-50 rounded-2xl text-zinc-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                                                <Database size={24} />
                                            </div>
                                            <div className="text-right">
                                                <span className="font-mono text-[9px] text-zinc-300 font-bold block mb-1">NODE_ID</span>
                                                <span className="font-mono text-xs font-black text-zinc-400">00{sys.id}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-zinc-900 uppercase italic tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                                            {sys.title}
                                        </h3>

                                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                                            {sys.description}
                                        </p>

                                        <PrintSkils skils={sys.skils} w={5} />

                                        <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                                            <a
                                                href={`/vlog/${sys.id}`}
                                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:text-blue-600 transition-colors"
                                            >
                                                Ver <ExternalLink size={14} />
                                            </a>
                                            <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-widest">
                                                {sys.year}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-100 rounded-[3rem]">
                                <div className="text-zinc-300 mb-4 flex justify-center"><Box size={48} /></div>
                                <p className="font-mono text-sm text-zinc-400 uppercase tracking-widest">No se encontraron registros en el nodo actual.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar de Estadísticas del Repositorio */}
                    <aside className="hidden lg:col-span-3 space-y-8">
                        {/* <div className="bg-zinc-900 text-white p-8 rounded-[2.5rem] shadow-2xl">
                            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-8">Repo_Stats</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-4xl font-black italic tracking-tighter mb-1">{stats.total}</p>
                                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest font-bold">Total_Systems</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black italic tracking-tighter mb-1">{stats.deployed}</p>
                                    <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest font-bold">Active_Deploys</p>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-xl font-black italic tracking-tighter mb-1">LATEST_SYNC</p>
                                    <p className="font-mono text-[9px] text-blue-400 uppercase tracking-widest font-bold">{stats.latest}</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Tipos de Sistemas */}
                        {/* <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-[2.5rem]">
                            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Sys_Architecture</h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Cloud_SaaS', value: '45%', icon: <Server size={14} /> },
                                    { label: 'Admin_Tools', value: '30%', icon: <Cpu size={14} /> },
                                    { label: 'Frontend_Apps', value: '25%', icon: <Layout size={14} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-zinc-600 uppercase flex items-center gap-2">
                                            {item.icon} {item.label}
                                        </span>
                                        <span className="font-mono text-[10px] text-zinc-400">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </aside>
                </div>
            </main>

            {/* Terminal Footer */}
            <footer className="py-12 border-t border-zinc-100 opacity-30 text-center font-mono text-[9px] text-zinc-400 uppercase tracking-[1em]">
                DIRECTORY_END // INDEX_READ_COMPLETE
            </footer>
        </div>
    );
}