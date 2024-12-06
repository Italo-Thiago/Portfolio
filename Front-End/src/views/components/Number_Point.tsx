export const Number_Point = ({ Itens }: {Itens: string[]}) => {
    const listItens = Itens.map((Context: string, index: number) => 
        <li key={index} className="font-semibold">
            {Context}
        </li>
    );
    return (
        <ol className="py-2 px-16 list-decimal list-inside">
            {listItens}
        </ol>
    );
}