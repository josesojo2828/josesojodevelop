/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { create } from "zustand";

interface ChatMessage {
    id: string;
    role: "user" | "ai";
    content: string;
}

interface ChatState {
    messages: ChatMessage[];
    sendMessage: (message: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
    messages: [
        {
            id: 'index-current-id',
            content: '¡Hola! Soy el asistente virtual de Jose Sojo. ¿En qué puedo ayudarte hoy?',
            role: 'ai',
        }
    ],
    sendMessage: async (message) => {
        const newMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: message };
        set({ messages: [...get().messages, newMsg] });

        const res = await axios.post<any>("/api/chat", { message });
        const current = res.data.context[0].content.parts[0].text;

        set({
            messages: [
                ...get().messages,
                newMsg,
                {
                    id: crypto.randomUUID(),
                    role: "ai",
                    content: current
                }
            ],
        });
    },
}));
