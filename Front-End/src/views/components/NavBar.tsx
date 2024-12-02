import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <header className="box-border flex items-center justify-between px-8 py-4 bg-black border-b border-gray-300 w-full h-[99px]">
            <div className="flex items-center pr-8 cursor-pointer">
                <Link to="/">
                    <img 
                        src="" 
                        alt="Logo" 
                        className="h-16 w-16 bg-white"
                    />
                </Link>
            </div>

            <nav className="flex gap-6">
                <Link to="/project" className="text-gray-700 hover:text-gray-900 transition">Projetos</Link>
                <Link to="/blog" className="text-gray-700 hover:text-gray-900 transition">Blog</Link>
            </nav>
        </header>
    );
}