export const Bullet_Point = ({ Itens }: {Itens: string[]}) => {
    const listItens = Itens.map((Context: string, index: number) => 
        <li key={index} className="font-semibold">
            {Context}
        </li>
    );
    return (
        <ul className="py-2 px-16 list-disc list-inside">
            {listItens}
        </ul>
    );
}