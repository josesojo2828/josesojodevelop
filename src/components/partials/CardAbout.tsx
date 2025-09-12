import { Database, Dock, Ear, Monitor, Navigation, Server, Shell } from "lucide-react"

export default function CardAbout({ description,title }: { title:string, description:string }) {

    const ico = title === "Frontend" ? <Monitor />
        : title === "Backend" ? <Server />
        : title === "Despliegue" ? <Dock />
        : <Database />

    return (
        <div className="p-6 border border-gray-200 bg-white hover:shadow-sm transition-all duration-300">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {ico}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    )
}
