export const Paragraph = ({ Heading, SubHeading, Text }: {Heading: string, SubHeading: string, Text: string}) => {
    return (
        <>
            <div className="w-full h-auto flex flex-row justify-start items-center gap-12 p-16  bg-white">
                <div className="h-auto flex-grow flex flex-col justify-start items-stretch gap-6 p-0">
                    <div className="h-auto self-stretch flex-grow-0 flex flex-col content-start items-stretch gap-2 p-0">
                        <h3 className="h-auto self-stretch flex-grow-0 text-2xl font-semibold tracking-[-0.48] text-center text-black">
                            {Heading}
                        </h3>
                        <h4 className="h-auto self-stretch flex-grow-0 flex flex-col justify-start items-stretch text-center gap-2 p-0">
                            {SubHeading}
                        </h4>
                    </div>

                    <p className="h-auto flex-grow-0 opacity-80 text-base text-justify text-black">
                        {Text}
                    </p>
                </div>
            </div>
        </>
    );
}