"use client";

import { useChatStore } from "@/store/chatStorage";
import { Bot, MessageCircle, Minimize2, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {}

export default function Chat({  }: Props) {
    const { messages, sendMessage } = useChatStore();

    const [inputText, setInputText] = useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;
        sendMessage(inputText);
        setInputText('');
    };

    if (isMinimized) {
        return (
            <div className="fixed bottom-20 md:bottom-6 right-20 z-50">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-20 md:bottom-6 right-4 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col max-h-96">
            {/* Header */}
            <div className="bg-gray-900 text-white p-4 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-700 rounded-full p-2">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Bot</h3>
                        <p className="text-sm opacity-90 relative pl-4">
                            <span className="absolute top-1 left-0 block w-3 h-3 animate-pulse bg-green-500 rounded-full"></span>
                            En línea
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setIsMinimized(true)}
                        className="hover:bg-indigo-700 p-1 rounded transition-colors"
                    >
                        <Minimize2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-64">
                {messages.map((message) => (
                    <div
                        key={crypto.randomUUID()}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex items-start space-x-2 max-w-xs ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`rounded-full p-2 bg-gray-900`}>
                                {message.role === 'user' ? (
                                    <User className="w-4 h-4 text-white" />
                                ) : (
                                    <Bot className="w-4 h-4 text-white" />
                                )}
                            </div>
                            <div className={`rounded-lg p-3 ${message.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                <p className="text-sm">{message.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={inputText.trim() === ''}
                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
