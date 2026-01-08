import React from 'react';
import { RegisterApiData } from "@/types/type";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Github,
    Instagram,
    Facebook,
    Twitter
} from "lucide-react";
import FormSendMessage from '../partials/FormSendMessage';


interface ContactInfoProps {
    label: string;
    value: string;
    icon: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoProps> = ({ label, value, icon }) => (
    <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.05] hover:border-blue-500/30">
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1">{label}</p>
            <p className="text-white text-sm font-medium">{value}</p>
        </div>
    </div>
);

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    color: string;
    name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, color, name }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-3 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 group/social overflow-hidden"
        style={{ '--hover-color': color } as React.CSSProperties}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${color}40`;
            e.currentTarget.style.boxShadow = `0 0 15px ${color}20`;
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div className="relative z-10 text-white/50 group-hover/social:text-white transition-colors">
            {icon}
        </div>
        <div
            className="absolute inset-0 opacity-0 group-hover/social:opacity-10 transition-opacity"
            style={{ backgroundColor: color }}
        />
    </a>
);

export default function Contact({ data }: { data: RegisterApiData }) {
    const { about } = data;

    return (
        <section id="contact" className="relative py-24 px-6 overflow-hidden bg-black font-sans">
            {/* Iluminación de fondo sutil */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="font-mono text-[10px] text-blue-500 font-black uppercase tracking-[0.4em]">
                            Contact_Interface / v1.0
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
                        ¿Listo para <span className="text-blue-600">conectar?_</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
                        Si tienes un proyecto en mente o simplemente quieres charlar sobre tecnología,
                        estoy a un mensaje de distancia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">


                    {/* Formulario Estilo Terminal */}
                    <div className="lg:col-span-7 bg-zinc-950/40 backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-[2rem]">
                        <FormSendMessage />
                        
                    </div>

                    {/* Info de Contacto y Redes */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <h3 className="font-mono text-xs text-blue-500 font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                                Endpoints_Contacto
                            </h3>
                            <div className="space-y-3">
                                <ContactInfoItem label="Email_Primary" value={about.email} icon={<Mail size={18} />} />
                                <ContactInfoItem label="Phone_Direct" value={about.phone || "N/A"} icon={<Phone size={18} />} />
                                <ContactInfoItem label="Location_Node" value={about.country || "Venezuela"} icon={<MapPin size={18} />} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-mono text-xs text-blue-500 font-black uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500/30" />
                                Social_Sync
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {about.linkedin && <SocialLink href={about.linkedin} icon={<Linkedin size={20} />} color="#0077B5" name="LinkedIn" />}
                                {about.github && <SocialLink href={about.github} icon={<Github size={20} />} color="#FFFFFF" name="GitHub" />}
                                {about.x && <SocialLink href={about.x} icon={<Twitter size={20} />} color="#1DA1F2" name="X" />}
                                {about.instagram && <SocialLink href={about.instagram} icon={<Instagram size={20} />} color="#E4405F" name="Instagram" />}
                                {about.facebook && <SocialLink href={about.facebook} icon={<Facebook size={20} />} color="#1877F2" name="Facebook" />}
                            </div>
                        </div>

                        {/* Footer decorativo de la tarjeta */}
                        <div className="pt-6 border-t border-white/5 opacity-20">
                            <p className="font-mono text-[8px] uppercase tracking-[0.5em] text-white">
                                Handcrafted_by / {about.fullName.replace(" ", "_").toUpperCase()}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}