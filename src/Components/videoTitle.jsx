export const VideoTitle=({title,overview})=>{
    return(
        <div className=" px-16  aspect-video pt-[10%] absolute text-white bg-gradient-to-b from-black">
            <h1 className="text-7xl font-bold m-4">{title}</h1>
            <p  className="m-4 py-6 text-lg w-1/3">{overview}</p>
                        <div className="px-6">
                <button className="w-30 mx-2 h-10 text-black bg-white/100 text-lg bg-opacity-50 rounded-lg cursor-pointer"> Play</button>
                <button className="w-30 h-10 text-black bg-gray-500 text-lg inset-0 rounded-lg cursor-pointer">More info</button>
            </div>
        </div>
    )
}