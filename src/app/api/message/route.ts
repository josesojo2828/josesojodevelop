import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        // Detectar si estamos en local (Venezuela) o en Vercel
        const isLocal = process.env.NODE_ENV === 'development';

        // Proxy alternativo (si uno falla, probamos otro)
        // Puedes intentar con 'api.telegram.org.run' o 'tapi.bale.ai'
        const baseUrl = isLocal
            ? "https://tapi.bale.ai"
            : "https://api.telegram.org";

        const text = `📬 *Nuevo mensaje*\n*De:* ${name}\n*Email:* ${email}\n*Mensaje:* ${message}`;

        const response = await fetch(`${baseUrl}/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ // ¡Asegúrate de que solo haya UNA llave aquí!
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        return NextResponse.json({ message: 'Enviado' });
    } catch (error) {
        console.error("Error detallado:", error);
        return NextResponse.json({ error: 'Fallo al enviar' }, { status: 500 });
    }
}