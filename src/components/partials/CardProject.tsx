import { Vlog } from "@/types/type";
import Link from "next/link";

export default function CardProject({ project }: { project: Vlog }) {

    const imageList = project.imagePath as string[];
    const start = new Date(project.startDate);
    const end = project.endDate ? new Date(project.endDate) : null;

    return (
        <div
            className={`project-card group h-[350px] w-full rounded shadow`}
            style={{
                backgroundImage: `url(${imageList[0]})`,
                backgroundSize: 'cover', // Cambiado a 'cover'
                backgroundPosition: 'center', // Opcional: Centra la imagen de fondo
                backgroundRepeat: 'no-repeat', // Opcional: Evita que la imagen se repita
                backgroundOrigin: 'border-box' // 'initial' es un valor general, 'border-box' es el valor por defecto y común para el origen. Si no especificas, se comporta así.
            }}
        >
            <div className="
                bg-gradient-to-b from-transparent to-black 
                h-full flex items-end 
                opacity-0 duration-500 group-hover:opacity-100
            ">
                <div className="p-6">
                    <div className="flex flex-col justify-between mb-3 items-start">
                        <h3 className="text-xl text-white font-bold">{project.title}</h3>
                        <div className="flex justify-between gap-4">
                            <span className="mono text-[11px] text-white bg-black font-black p-1 rounded-full">
                                {`${start.getFullYear()}`}
                                {end && `/${end.getFullYear()}`}
                            </span>
                        </div>
                    </div>
                    <p className="text-white mb-4 text-sm">{project.description}</p>
                            <Link href={`/vlog/${project.id}`} className="text-sm py-2 mt-3 btn btn-sm bg-blue-500 rounded px-5 text-white">Ver</Link>
                </div>
            </div>
        </div>
    )
}
