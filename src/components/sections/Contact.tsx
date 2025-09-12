import { RegisterApiData } from "@/types/type"
import Image from "next/image"

interface Props {
    vlog: RegisterApiData
}

export default function Contact({ vlog }: Props) {

    return (
        <section id="contact" className="py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactame</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Interesado en realizar algun proyecto? llena el formulario para contactarme.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="mono text-sm block mb-2">Tu Nombre:</label>
                                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="mono text-sm block mb-2">Tu Correo Electronico:</label>
                                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition" />
                            </div>
                            <div>
                                <label htmlFor="message" className="mono text-sm block mb-2">Mensaje:</label>
                                <textarea id="message" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition"></textarea>
                            </div>
                            <button type="submit" className="px-8 py-4 bg-black text-white rounded-sm font-medium text-sm mono hover:bg-gray-800 transition-all duration-300 w-full hover-scale">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="mono text-sm mb-6">Informacion de contacto</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="mono text-xs text-gray-500 mb-1">Correo</div>
                                    <div className="text-lg">{vlog.about.email}</div>
                                </div>
                                <div>
                                    <div className="mono text-xs text-gray-500 mb-1">Telefono</div>
                                    <div className="text-lg">{vlog.about.phone}</div>
                                </div>
                                <div>
                                    <div className="mono text-xs text-gray-500 mb-1">Direccion</div>
                                    <div className="text-lg">{vlog.about.country}</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="mono text-sm mb-6">Redes Sociales</h3>
                            <div className="flex space-x-4">
                                {
                                    vlog.about.linkedin &&
                                    <a href={vlog.about.linkedin} target="_blank">
                                        <Image src={'/link.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.github &&
                                    <a href={vlog.about.github} target="_blank">
                                        <Image src={'/github.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.x &&
                                    <a href={vlog.about.x} target="_blank">
                                        <Image src={'/x.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.facebook &&
                                    <a href={vlog.about.facebook} target="_blank">
                                        <Image src={'/fb.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.instagram &&
                                    <a href={vlog.about.instagram} target="_blank">
                                        <Image src={'/ig.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
