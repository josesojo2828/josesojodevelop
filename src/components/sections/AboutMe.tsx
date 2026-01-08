"use client";

import { RegisterApiData } from "@/types/type";
import { Download } from "lucide-react";
import CardAbout from "../partials/CardAbout";
import { useMemo } from "react";

interface Props {
    vlog: RegisterApiData
}

interface PresentationSkill {
    title: string;
    description: string;
}

export default function AboutMe({ vlog }: Props) {
    const { about } = vlog;

    // Parseo seguro de las habilidades de presentación para evitar errores de ejecución
    const presentationSkills = useMemo(() => {
        try {
            return typeof about.presentationSkils === 'string'
                ? JSON.parse(about.presentationSkils)
                : about.presentationSkils || [];
        } catch (e) {
            console.error("Error parsing presentationSkils", e);
            return [];
        }
    }, [about.presentationSkils]);

    return (
        <section id="about" className="relative py-24 px-6 overflow-hidden bg-white font-sans">
            {/* Decoración de fondo sutil para dar profundidad */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16 md:gap-24">

                    {/* Lado Izquierdo: Biografía Profesional y Perfil */}
                    <div className="lg:w-5/12">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="font-mono text-[10px] bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                                Profile_System / v2.1
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-8 uppercase italic tracking-tighter">
                            Sobre <span className="text-blue-600">mí_</span>
                        </h2>

                        <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                            <p className="font-medium text-zinc-900">
                                {about.bio}
                            </p>
                            <p>
                                Mi enfoque principal se centra en la arquitectura de software avanzada y la cultura
                                <span className="text-zinc-900 font-bold"> DevOps</span>. Me apasiona construir sistemas
                                robustos que sean fáciles de escalar, monitorear y asegurar en entornos de producción.
                            </p>
                            <p className="text-base text-zinc-500 italic">
                                Siempre en constante investigación de nuevas tecnologías de despliegue automatizado,
                                gestión de redes y observabilidad en tiempo real.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href={about.linkedin || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/20"
                            >
                                Descargar CV
                                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                            </a>
                        </div>
                    </div>

                    {/* Lado Derecho: Matriz de Especialidades Técnicas */}
                    <div className="lg:w-7/12 w-full">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="h-px flex-grow bg-zinc-100"></div>
                            <span className="font-mono text-[9px] text-zinc-300 uppercase tracking-[0.4em]">Expertise_Matrix</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {presentationSkills.map((item: PresentationSkill, index: number) => (
                                <CardAbout
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
