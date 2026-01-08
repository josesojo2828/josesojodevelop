"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';

/**
 * Componente FormSendMessage integrado con la estética del Canvas
 */
export default function FormSendMessage () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Por favor, llena todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Correo electrónico no válido.");
            return;
        }

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
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Nombre_Usuario</label>
                    <input
                        disabled={isSending}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre..."
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Email_Address</label>
                    <input
                        disabled={isSending}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[10px] text-white/30 uppercase tracking-widest ml-1">Mensaje_Payload</label>
                <textarea
                    disabled={isSending}
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>
            <button
                type="submit"
                disabled={isSending}
                className={`group w-full py-5 font-black text-[11px] uppercase tracking-[0.4em] rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl
                    ${isSending
                        ? 'bg-zinc-800 text-white/50 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-blue-600 hover:text-white shadow-white/5'
                    }`}
            >
                {isSending ? (
                    <>
                        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Enviar Mensaje
                    </>
                )}
            </button>
        </form>
    );
};