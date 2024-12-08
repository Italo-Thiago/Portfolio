export const Image = ({ Src, Alt }: {Src: string, Alt: string}) => {
    return (
        <>
            <div className="relative w-full h-full flex items-center justify-center py-4">
                <img className="max-w-full max-h-full object-contain px-6" src={Src} alt={Alt} />
            </div>
        </>
    );
}