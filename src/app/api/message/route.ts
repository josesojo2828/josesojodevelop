import { NextResponse } from "next/server";

export async function POST(req: Request) {
    let body;
    try {
        // Debes parsear el cuerpo de la solicitud JSON manualmente.
        body = await req.json();
    } catch (error) {
        console.error("Error al parsear el cuerpo de la solicitud:", error);
        return NextResponse.json({ error: 'Formato de solicitud no válido.' }, { status: 400 });
    }

    const { name, email, message } = body;

    // Validar que los datos no estén vacíos
    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const groupId = process.env.TELEGRAM_GROUP_ID;

    if (!botToken || !groupId) {
        console.error("Variables de entorno de Telegram no configuradas");
        return NextResponse.json({ error: 'Error de configuración en el servidor.' }, { status: 500 });
    }

    // Formatear el mensaje para Telegram
    const text = `
📬 **Nuevo Mensaje del Formulario** 📬

**Nombre:** ${name}
**Correo:** ${email}

**Mensaje:**
${message}
    `;

    // URL de la API de Telegram para enviar mensajes
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    console.log(url);
    console.log(groupId);
    console.log(botToken);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: groupId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error('Error de la API de Telegram:', data);
            return NextResponse.json({ error: 'No se pudo enviar el mensaje.' }, { status: 500 });
        }

        // Éxito
        return NextResponse.json({ message: 'Mensaje enviado con éxito!' }, { status: 200 });

    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
    }
}