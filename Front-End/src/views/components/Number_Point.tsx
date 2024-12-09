type ListItem = string | { text: string; subItems: ListItem[] };

export const Number_Point = ({ Itens }: {Itens: ListItem[]}) => {
    const renderList = (list: ListItem[]) => {
        return list.map((item, index) => {
            if (typeof item === "string") {
                return (
                    <li key={index} className="text-lg font-semibold">
                        {item}
                    </li>
                );
            } else {
                return (
                    <li key={index} className="text-lg font-semibold">
                        {item.text}
                        <ol className="pl-4 list-disc list-inside">
                            {renderList(item.subItems)}
                        </ol>
                    </li>
                );
            }
        });
    };

    return (
        <ol className="py-2 px-16 list-decimal list-inside">
            {renderList(Itens)}
        </ol>
    );
}