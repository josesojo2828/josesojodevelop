import { PROJECTS, ABOUT_INFO, SKILS_LIST } from "@/data/dataset";
import { NextResponse } from "next/server";
import axios from "axios";
import { ApiResponse } from "@/types/requets";

const docs = [
    ...ABOUT_INFO.map(a => ({ type: "about", text: `${a.title}: ${a.description}` })),
    ...PROJECTS.map(p => ({ type: "project", text: `${p.title}: ${p.description}` })),
    ...SKILS_LIST.map(s => ({ type: "skill", text: s.name })),
];

const systemPromptGenerate = (query: string) => {
    return `
        Eres un asistente conversacional especializado en mi portafolio.
        Tu única fuente de información es el siguiente texto:
        ${docs.map(doc => doc.text).join('\n')}

        Reglas estrictas:
        1. Responde solo con información contenida en el texto proporcionado.
        2. Si la pregunta del usuario es sobre un tema que no está en el texto, responde cortésmente que no tienes información al respecto.
        3. No inventes información, no uses conocimientos previos, y no ofrezcas detalles fuera del texto.
        4. Mantén tus respuestas breves y directas.
        5. Caramente debes centralizar las respuestas por ejemplo no mencionar grandes cantidades de texto si no algo mas puntual, ya que eso se estara mostrando a empleadores y distinto publico
        6. En caso de que soliciten algun servicio o algo debes mencionar que llenen el formulario para ser contactados
        7. Evita responder algo asi "según la información proporcionada" responde como si tu fueras yo y estas hablando directamente con un reclutador
        8. Si te preguntan por un proyecto en especifico respondes con las informacion que tiene elproyecto


        En base a los ya mencionado responde a esto: ${query} 
    `;
}



export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        const url = process.env.GEMINI_URL as string;
        const key = process.env.GEMINI_KEY as string;

        const query = systemPromptGenerate(message);

        // console.log("# # # # # # # # # # # # # # # # # # # # # # # #")
        // console.log(query);
        // console.log("# # # # # # # # # # # # # # # # # # # # # # # #")

        const body = {
            contents: [
                { "parts": [{ "text": query }] }
            ]
        }



        const response = await axios.post<ApiResponse>(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': key
            }
        });

        // console.log(response.data.candidates);

        return NextResponse.json({ context: response.data.candidates }, { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}
