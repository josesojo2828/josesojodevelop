import { Database, Dock, Monitor, Server } from "lucide-react"

export default function CardAbout({ description, title }: { title: string, description: string }) {

    const ico = title === "Frontend" ? <Monitor />
        : title === "Backend" ? <Server />
            : title === "Despliegue" ? <Dock />
                : <Database />

    return (
        <div className="group bg-zinc-50/50 backdrop-blur-sm border border-zinc-200 p-6 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:animate-ping" />
                <h3 className="font-mono text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}
