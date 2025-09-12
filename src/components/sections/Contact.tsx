import { RegisterApiData } from "@/types/type"
import Image from "next/image"
import FormSendMessage from "../partials/FormSendMessage";

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
                    <FormSendMessage />
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
                                        <Image width={100} height={100} src={'/link.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.github &&
                                    <a href={vlog.about.github} target="_blank">
                                        <Image width={100} height={100} src={'/github.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.x &&
                                    <a href={vlog.about.x} target="_blank">
                                        <Image width={100} height={100} src={'/x.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.facebook &&
                                    <a href={vlog.about.facebook} target="_blank">
                                        <Image width={100} height={100} src={'/fb.svg'} alt="Linkedin" className="w-10 h-10" />
                                    </a>
                                }
                                {
                                    vlog.about.instagram &&
                                    <a href={vlog.about.instagram} target="_blank">
                                        <Image width={100} height={100} src={'/ig.svg'} alt="Linkedin" className="w-10 h-10" />
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
