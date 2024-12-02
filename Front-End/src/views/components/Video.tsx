export const Video = ({Src, TitleVideo}: {Src: string, TitleVideo: string}) => {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-start items-stretch gap-12 p-16 bg-white">
                <iframe 
                    src={Src}
                    title={TitleVideo} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="w-full h-96"
                    >
                </iframe>
            </div>
        </>
    )
}