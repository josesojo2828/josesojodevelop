"use client";

import CardProject from "@/components/partials/CardProject";
import Nav from "@/components/sections/Nav";
import { useVlogStore } from "@/lib/store/storeData";

export default function VlogPage() {
    const { vlogData } = useVlogStore();
    if (!vlogData) return <></>;

    const filteredVlogs = vlogData.vlog;

    return (
        <>
            <Nav />

            <section className="py-28" id="vlogs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredVlogs.map((vlog, index) => (
                            <CardProject key={index} project={vlog} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}