import { Card } from "./Card";

export const CardGrid = () => {
    return (
        <>
            <div className="w-fu h-auto flex flex-col justify-start items-stretch gap-12 p-8 bg-white">
                <div className="h-4/5 self-stretch flex-grow-0 flex flex-col justify-start items-stretch gap-6 p-0">
                    <Card Title="Titulo" Description="Isto e uma descrição"/>
                </div>
            </div>
        </>
    );
}