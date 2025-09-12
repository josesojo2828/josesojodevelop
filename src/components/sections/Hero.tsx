import { RegisterApiData } from "@/types/type";
import PrintSkils from "../partials/PrintSkils";
import Link from "next/link";

interface Props {
    vlog: RegisterApiData
}

export default function Hero({ vlog }: Props) {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <span className="mono text-sm tracking-wider">Desarrollador de Software</span>
                    <h1 className="hero-title font-bold mt-4 mb-8">Hola, Soy <span className="border-b-2 border-black">Jose Sojo</span></h1>
                    <PrintSkils skils={vlog.skils} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#work" className="px-6 py-3 bg-black text-white rounded-sm font-medium text-sm mono hover:bg-gray-800 transition-all duration-300 hover-scale inline-flex items-center justify-center">
                        Proyectos
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-black rounded-sm font-medium text-sm mono hover:bg-gray-100 transition-all duration-300 hover-scale inline-flex items-center justify-center">
                        Contacto
                    </a>
                    <Link href="/vlog" className="px-6 py-3 bg-black text-white rounded-sm font-medium text-sm mono hover:bg-gray-800 transition-all duration-300 hover-scale inline-flex items-center justify-center">
                        portafolio
                    </Link>
                </div>
            </div>
        </section>
    )
}
