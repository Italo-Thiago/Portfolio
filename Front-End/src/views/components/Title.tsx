export const Title = ({Title, Subtitle}: {Title: string, Subtitle:string }) => {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-start items-center p-1 mt-8 bg-white">
                <div className="w-auto h-auto flex-grow-0 flex flex-col justify-start items-stretch gap-2 p-0">
                    <p className="h-auto self-stretch flex-grow-0 text-7xl font-bold tracking-[-2.16] text-center text-black">
                        {Title}
                    </p>
                    <p className="h-auto self-stretch flex-grow-0 text-4xl tracking-[1.2] text-center text-black">
                        {Subtitle}
                    </p>
                </div>
            </div>
        </>
    )
}