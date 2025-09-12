
export default function Footer() {

    return (
        <footer className="py-12 px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl mono font-medium tracking-wide mb-6 md:mb-0">Jose Sojo</div>
                    <div className="mono text-sm tracking-wider mb-6 md:mb-0">
                        © 2025
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="footer-link mono text-sm">Proyectos</a>
                        <a href="#" className="footer-link mono text-sm">Sobre mi</a>
                        <a href="#" className="footer-link mono text-sm">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
