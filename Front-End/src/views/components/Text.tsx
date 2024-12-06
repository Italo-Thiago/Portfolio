export const Text = ({ Text }: {Text: string}) => {
    return (
        <div className="w-full h-auto flex flex-row justify-start items-center gap-12 px-16 py-1 bg-white">
            <div className="h-auto flex-grow flex flex-col justify-start items-stretch gap-6 p-0">
                <p className="h-auto flex-grow-0 opacity-80 text-lg text-justify text-black">
                    {Text}
                </p>
            </div>
        </div>
    );
}
