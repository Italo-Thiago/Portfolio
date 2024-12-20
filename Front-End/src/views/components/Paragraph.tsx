export const Paragraph = ({ Heading, SubHeading }: {Heading: string, SubHeading: string, }) => {
    return (
        <>
            <div className="w-full h-auto flex flex-row justify-start items-center gap-12 p-16  bg-white">
                <div className="h-auto flex-grow flex flex-col justify-start items-stretch gap-6 p-0">
                    <div className="h-auto self-stretch flex-grow-0 flex flex-col content-start items-stretch gap-2 p-0">
                        <h3 className="h-auto self-stretch flex-grow-0 text-2xl font-semibold tracking-[-0.48] text-center text-black">
                            {Heading}
                        </h3>
                        <hr className="absolute -translate-x-1/2 left-1/2 w-4/5 h-px my-9 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <h4 className="h-auto self-stretch flex-grow-0 flex flex-col justify-start items-stretch text-center gap-2 p-0">
                            {SubHeading}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}