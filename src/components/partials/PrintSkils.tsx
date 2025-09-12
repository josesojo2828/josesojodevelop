import { Skill } from "@/types/type";
import Image from "next/image";

export default function PrintSkils({ skils }: { skils: Skill[] }) {

    return (
        <div className="flex flex-wrap max-w-[60%] gap-2">
            {skils.map(sk => <Image key={`1-${sk.name}`} src={`${sk.logo}`} alt="Logo" width={7} height={7} className="w-7 h-7" />)}
        </div>
    )
}
