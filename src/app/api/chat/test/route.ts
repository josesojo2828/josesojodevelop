import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {

        const url = process.env.GEMINI_URL as string;
        const key = process.env.GEMINI_KEY as string;

        const body = {
            contents: [
                {
                    "parts": [
                        {
                            "text": "Hola, como estas?"
                        }
                    ]
                }
            ]
        }

        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': key
            }
        });

        return NextResponse.json({ message: "Check terminal" }, { status: 200 });
    } catch (error: any) {
        console.log(error)
    }
}
