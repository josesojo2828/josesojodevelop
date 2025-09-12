import Link from "next/link";

export default function Nav() {


    return (
        <nav className="fixed w-full bg-white shadow z-50 py-6 px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl mono font-medium tracking-wide">Jose Sojo</div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="nav-link text-sm">Inicio</Link>
                    <Link href="/vlog" className="nav-link text-sm">Proyectos</Link>
                </div>
            </div>
        </nav>
    )
}
