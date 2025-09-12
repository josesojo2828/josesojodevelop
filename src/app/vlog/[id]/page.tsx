"use client";

import React, { useState } from 'react';
import {
    Calendar,
    Share2,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';
import { useParams } from "next/navigation";
import { useVlogStore } from '@/lib/store/storeData';
import { Vlog } from '@/types/type';
import Nav from '@/components/sections/Nav';
import Link from 'next/link';
import Image from 'next/image';


export default function SingleVlogPost() {
    const { id }: { id:string } = useParams();
    const { vlogData } = useVlogStore();
    if (!vlogData) return <></>;
    const data = vlogData.vlog.find(vlg => vlg.id == Number(id));
    if (!data) return <></>;

    function SingleVlog({ data }: { data: Vlog }) {
        const start = new Date(data.startDate);
        const end = data.endDate ? new Date(data.endDate) : null;
        const [index, setIndex] = useState(0);

        const ChangeIndex = (action: 'l' | 'r') => {
            const len = data.imagePath.length;

            if (action === 'l') {
                // Si la acción es 'l' (izquierda)
                // Decrementa el índice, si llega a -1, vuelve al final (len - 1)
                setIndex((prevIndex) => (prevIndex - 1 + len) % len);
            } else {
                // Si la acción es 'r' (derecha)
                // Incrementa el índice, si llega al final, vuelve a 0
                setIndex((prevIndex) => (prevIndex + 1) % len);
            }
        };

        return (
            <>
                <Nav />
                <div className="min-h-screen pt-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Back Button */}
                        <Link
                            href={'/vlog'}
                            className="flex items-center space-x-2 text-gray-400 hover:text-black mb-8 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Volver</span>
                        </Link>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden group">
                                    <Image
                                        src={data.imagePath[index]}
                                        alt={data.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 px-6 bg-black/40 flex items-center justify-between">
                                        <button onClick={() => ChangeIndex('l')} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group-hover:scale-110 transform duration-200">
                                            <ArrowLeft className="w-5 h-5 text-gray-900 ml-1" />
                                        </button>
                                        <button onClick={() => ChangeIndex('r')} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group-hover:scale-110 transform duration-200">
                                            <ArrowRight className="w-5 h-5 text-gray-900 ml-1" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="flex items-center space-x-4 text-sm text-gray-800">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{start.getFullYear()}</span>
                                                </div>

                                                {
                                                    end &&
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{end.getFullYear()}</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                                            {data.title}
                                        </h1>

                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {data.description}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between py-4 border-t border-gray-700">
                                        <div className="flex items-center space-x-6">
                                            <button className="flex items-center space-x-2 bg-gray-900 text-white hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
                                                <Share2 className="w-5 h-5" />
                                                <span>Share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full bg-gray-200 rounded-lg p-4'>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return !vlogData || !data
        ? <></>
        : <SingleVlog data={data} />
}


