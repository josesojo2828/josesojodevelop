import { RegisterApiData } from "@/types/type";
import { Download } from "lucide-react";
import CardAbout from "../partials/CardAbout";

interface Props {
    vlog: RegisterApiData
}

export default function AboutMe({ vlog }: Props) {

    const data = JSON.parse(vlog.about.presentationSkils);
    console.log(data);


    return (
        <section id="about" className="py-20 px-8 border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre mi</h2>
                        <div className="h-px w-20 bg-black mb-8"></div>
                        <p className="text-gray-600 mb-6 text-lg">
                            {vlog.about.bio}
                        </p>
                        <p className="text-gray-600 mb-8 text-lg">
                            Siempre estudiando y esforzandome en hacer crecer mi perfil profesional, adquiriendo habilidades
                            y conocimientos en despliegue, redes, monitoreo, automatizaciones, y seguridad
                        </p>
                        <a href="#" className="px-6 py-3 border border-black rounded-sm font-medium text-sm mono hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center hover-scale">
                            Descargar CV <Download className="w-5 h-5 ml-5" />
                        </a>
                    </div>
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {
                                data.map((item: {title:string, description:string}) =>
                                    <CardAbout
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
