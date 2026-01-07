"use client";

import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';

export default function FormSendMessage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Estado para controlar el envío
    const [isSending, setIsSending] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validaciones básicas
        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Por favor, llena todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Correo electrónico no válido.");
            return;
        }

        // Activamos el estado de carga
        setIsSending(true);

        const values = { name, email, message };

        try {
            const response = await fetch('/api/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("¡Mensaje enviado con éxito! 👋");
                // Limpiamos el formulario
                setName('');
                setEmail('');
                setMessage('');
            } else {
                toast.error(data.error || "Error al enviar el mensaje.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error de conexión. Inténtalo de nuevo.");
        } finally {
            // Desactivamos el estado de carga, sin importar si falló o no
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="mono text-sm block mb-2 uppercase">Nombre</label>
                <input
                    disabled={isSending}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition disabled:bg-gray-50"
                    placeholder="Tu nombre"
                />
            </div>
            <div>
                <label htmlFor="email" className="mono text-sm block mb-2 uppercase">Email</label>
                <input
                    disabled={isSending}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition disabled:bg-gray-50"
                    placeholder="tu@email.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="mono text-sm block mb-2 uppercase">Mensaje</label>
                <textarea
                    disabled={isSending}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition disabled:bg-gray-50"
                    placeholder="¿En qué puedo ayudarte?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSending}
                className={`px-8 py-4 bg-black text-white rounded-sm font-medium text-sm mono transition-all duration-300 w-full flex items-center justify-center
                    ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 hover-scale'}`}
            >
                {isSending ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        ENVIANDO...
                    </>
                ) : 'ENVIAR MENSAJE'}
            </button>
        </form>
    );
}