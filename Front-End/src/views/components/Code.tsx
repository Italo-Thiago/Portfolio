import { useState } from 'react';
import { Download } from "lucide-react";

export const Code = ({ Code }: {Code: string}) => {
    const lines = Code.split('\n');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(Code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <>
        <div className="relative bg-black border-2 border-gray-600 rounded-lg px-2 mb-4 mt-2 mx-12 h-auto w-auto flex flex-row justify-start items-stretch">
            <div className="text-white text-right max-w-16 w-auto border-r-2 pr-1 border-gray-600">
                {lines.map((_, index) => (
                    <div key={index}> {index + 1}</div>
                ))}
            </div>
            <pre className="pl-2">
                <code>
                    {lines.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </code>
            </pre>
            <div className="absolute flex flex-row gap-4 right-0 border-b-2 border-l-2 border-gray-700 bg-black text-white px-3 py-2 rounded-bl-xl hover:bg-gray-600 hover:font-bold {linesHidden}" >
                <p className="flex items-center justify-center">{copied ? 'Copiado!' : 'Copiar'}</p>
                <div>
                    <button 
                        className="p-1 border-2 rounded-full hover:bg-green-600"
                        onClick={handleCopy}
                    >
                        <Download width="32" height="20"/>   
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}