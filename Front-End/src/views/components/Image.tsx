export const Image = ({ Src, Alt }: {Src: string, Alt: string}) => {
    return (
        <>
            <div className="relative w-full h-full flex items-center justify-center p-6">
                <img className="max-w-full max-h-full object-contain rounded-md border-2 border-black" src={Src} alt={Alt} />
            </div>
        </>
    );
}