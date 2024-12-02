import { Music2Icon, YoutubeIcon } from "lucide-react";

export const Footer = () => {
    return (
        <div className="flex flex-wrap w-full items-start justify-center gap-10 p-4 bg-gray-100 border border-gray-300">
            <div className="flex flex-col w-64 gap-4">
                <h2 className="text-lg font-bold text-gray-900">Minhas Redes</h2>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon className="cursor-pointer" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <Music2Icon className="cursor-pointer"/>
                </a>
            </div>
            <div className="flex flex-col w-64 gap-4">
                <h2 className="text-lg font-bold text-gray-900">Entre em Contato</h2>
                <a className="text-sm text-gray-700" href="">Whatsapp</a>
                <a className="text-sm text-gray-700" href="mailto:italothiago220@gmail.com">E-mail</a>
            </div>
        </div>
    );
}