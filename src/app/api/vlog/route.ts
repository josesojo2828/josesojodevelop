import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {

    // GET ALL INFO
    const prisma = new PrismaClient();

    const aboutPromise = prisma.about.findFirst({ where: { id: 1 } });

    const skilsPromise = prisma.skill.findMany({
      include: {
        _count: true,
      },
      orderBy: {
        type: 'asc'
      }
    });

    const vlogPromise = prisma.vlog.findMany({
      include: {
        _count: true,
        skils: {
          include: {
            skill: true,
          }
        }
      }
    });

    const projectPromise = prisma.vlog.findMany({
      include: {
        _count: true,
        skils: {
          include: {
            skill: true,
          }
        }
      },
      where: { primary: true }
    });

    const about = await aboutPromise;
    const skils = await skilsPromise;
    const vlog = await vlogPromise;
    const project = await projectPromise;


    return new Response(
      JSON.stringify(
        {
          about,
          skils,
          vlog,
          project
        }
      ),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
