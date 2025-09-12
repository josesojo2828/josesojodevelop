import { NextResponse } from "next/server";
import { INFO, SKILS_LIST, VLOGS } from "@/data/dataset";
import { PrismaClient } from "@prisma/client";
import { Skill } from "@/types/type";

export async function GET() {
    try {

        const prisma = new PrismaClient();
        // Create Promise Info
        const aboutPromise = prisma.about.upsert({
            create: {
                bio: INFO.bio,
                email: INFO.email,
                fullName: INFO.fullName,
                country: INFO.country,
                github: INFO.github,
                facebook: INFO.facebook,
                instagram: INFO.instagram,
                tiktok: INFO.tiktok,
                x: INFO.x,
                linkedin: INFO.linkedin,
                phone: INFO.phone,
                website: INFO.website,
                presentationSkils: JSON.stringify(INFO.presentationSkils),
            },
            update: {
                bio: INFO.bio,
                email: INFO.email,
                fullName: INFO.fullName,
                country: INFO.country,
                github: INFO.github,
                facebook: INFO.facebook,
                instagram: INFO.instagram,
                tiktok: INFO.tiktok,
                x: INFO.x,
                linkedin: INFO.linkedin,
                phone: INFO.phone,
                website: INFO.website,
                presentationSkils: JSON.stringify(INFO.presentationSkils),
            },
            where: { id: INFO.id }
        });

        // Create Promise and execute Skills
        const skilsPromise: any = [];
        SKILS_LIST.forEach(async (sk: Skill) => {
            const fnAsync = prisma.skill.upsert({
                create: {
                    description: sk.description,
                    logo: sk.logo,
                    name: sk.name,
                    type: sk.type,
                },
                update: {
                    description: sk.description,
                    logo: sk.logo,
                    name: sk.name,
                    type: sk.type,
                },
                where: { id: sk.id }
            })
            skilsPromise.push(fnAsync);
        });
        Promise.all(skilsPromise);

        // Create Promise Vlog
        const vlogPromise: any = [];
        VLOGS.forEach(async (vlg,i: number) => {
            const fnAsync = prisma.vlog.upsert({
                create: vlg,
                update: vlg,
                where: { id: i+1 }
            })
            vlogPromise.push(fnAsync);
        });
        Promise.all(vlogPromise);

        // Execute Info
        await aboutPromise;
        return NextResponse.json({ message: "Check terminal" }, { status: 200 });
    } catch (error: any) {
        console.log(error)
    }
}
