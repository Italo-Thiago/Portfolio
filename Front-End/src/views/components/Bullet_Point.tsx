import DOMPurify from 'dompurify';

type ListItem = string | { text: string; subItems: ListItem[] };

export const Bullet_Point = ({ Itens }: {Itens: ListItem[] }) => {
    const renderList = (list: ListItem[]) => {
        return list.map((item, index) => {
            if (typeof item === "string") {
                return (
                    <li 
                        key={index} 
                        className="text-lg font-semibold"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item)
                        }}
                    />
                );
            } else {
                return (
                    <li key={index} className="text-lg font-semibold">
                        <span dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.text)
                        }} />
                        <ul className="pl-4 list-disc list-inside">
                            {renderList(item.subItems)}
                        </ul>
                    </li>
                );
            }
        });
    };

    return (
        <ul className="py-2 px-16 list-disc list-inside">
            {renderList(Itens)}
        </ul>
    );
}