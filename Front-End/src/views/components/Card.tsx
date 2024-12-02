export const Card = ({ Title, Description}: {Title: string, Description: string}) => {
    return (
        <>
            <div className="h-full self-stretch flex-grow-0 flex flex-row justify-start items-start gap-6 p-6 rounded-lg border bg-white">
                <img 
                    src="" 
                    alt="Isto e um Card" 
                    className="w-40 h-40 flex-grow-0 flex flex-col justify-center items-stretch p-0 rounded-md bg-slate-400 rounded-m"
                />
                <div className="h-auto self-stretch flex-grow-0 flex flex-col items-stretch gap-8 p-0">
                    <p className="h-7 self-stretch flex-grow-0 text-2xl font-semibold tracking-[-0.48] text-left text-red-600">
                        {Title}
                    </p>
                    <p className="h-11 self-stretch flex-grow-0 text-base tracking-[1.4] text-left text-black">
                        {Description}
                    </p>
                </div>
            </div> 
        </>
    );
}

