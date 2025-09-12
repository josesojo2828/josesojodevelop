"use client";

import { FormEvent, useState } from "react";
import { toast } from 'react-toastify'; // Importamos la función toast


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Función para validar el formato del email
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // --- VALIDACIONES ---
        if (!name.trim()) {
            toast.error("Por favor, ingresa tu nombre.");
            return;
        }
        if (!email.trim()) {
            toast.error("Por favor, ingresa tu correo electrónico.");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("El formato del correo no es válido.");
            return;
        }
        if (!message.trim() || message.length < 10) {
            toast.error("El mensaje no puede estar vacío y debe tener al menos 10 caracteres.");
            return;
        }

        const valuesString = JSON.stringify({ name, email, message });
        console.log(valuesString);

        // --- ENVÍO CON TOAST PROMISE ---
        const promise = await fetch('/api/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: valuesString,
        }).then(response => {
            if (!response.ok) {
                // Si la respuesta no es exitosa, lanzamos un error para que lo capture el catch de la promesa.
                return response.json().then(data => Promise.reject(data));
            }
            return response.json();
        });

        toast.promise(promise, {
            pending: 'Enviando tu mensaje...',
            success: '¡Mensaje enviado con éxito! 👋',
            error: {
                render({ data }) {
                    // 1. Verificamos que 'data' sea un objeto y tenga la propiedad 'error'
                    if (data && typeof data === 'object' && 'error' in data && typeof data.error === 'string') {
                        // 2. Si es así, ahora TypeScript sabe que puede acceder a data.error de forma segura
                        return `Error: ${data.error}`;
                    }
                    // 3. Si no, mostramos un mensaje genérico
                    return 'Error: No se pudo enviar el mensaje.';
                }
            }
        });


        promise.then(() => {
            // Limpiar el formulario solo si el envío fue exitoso
            setName('');
            setEmail('');
            setMessage('');
        }).catch((error: Error) => {
            console.error('Error en el envío del formulario:', error);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="mono text-sm block mb-2">Tu Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="mono text-sm block mb-2">Tu Correo Electronico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="mono text-sm block mb-2">Mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition"
                    ></textarea>
                </div>
                <button type="submit" className="px-8 py-4 bg-black text-white rounded-sm font-medium text-sm mono hover:bg-gray-800 transition-all duration-300 w-full hover-scale">
                    Enviar
                </button>
            </form>
        </div>
    );
}