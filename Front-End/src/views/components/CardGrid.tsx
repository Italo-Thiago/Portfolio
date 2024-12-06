import { Link } from "react-router-dom";
import { Card } from "./Card";

export const CardGrid = () => {
    return (
        <>
            <div className="w-fu h-auto flex flex-col justify-start items-stretch gap-12 p-8 bg-white">
                <div className="h-4/5 self-stretch flex-grow-0 flex flex-col justify-start items-stretch gap-6 p-0">
                    <Link to="/complexity" >
                        <Card Title="Titulo" Description="Isto e uma descrição"/>
                    </Link>
                    <Link to="/c_data_structure">
                        <Card Title="Estrutura de Dados em C e C#" Description="Isto e uma descrição"/>
                    </Link>
                </div>
            </div>
        </>
    );
}