import { RegisterApiData } from "@/types/type";
import CardProject from "../partials/CardProject";
import Link from "next/link";

interface Props {
    vlog: RegisterApiData
}

export default function Work({ vlog }: Props) {

    // const { projects } = usePortfolioStore();

    return (
        <section id="work" className="py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Proyectos</h2>
                    <div className="mono text-sm tracking-wider">Proyectos recientes</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        vlog.project.map(item => (
                            <CardProject       
                                key={`project-${item.id}`}                         
                                project={item}
                            />
                        ))
                    }
                </div>

                <div className="text-center mt-12">
                    <Link href="/vlog" className="px-8 py-3 border border-black rounded-sm font-medium text-sm mono hover:bg-gray-100 transition-all duration-300 inline-flex items-center hover-scale">
                        View Full Portfolio <i className="fas fa-arrow-right ml-2 text-xs"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}
