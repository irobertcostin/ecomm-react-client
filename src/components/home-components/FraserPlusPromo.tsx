const FraserPlusPromo: React.FC = () => {
    return (
        <div className="lg:px-40 pt-10 xl:py-10  relative flex justify-center">
            <div className="w-full relative overflow-hidden   py-5 sm:py-0 sm:px-5 bg-gradient-to-r from-black to-slate-800   md:justify-center md:items-center flex justify-between ">
                <div className="text-white px-4 py-2  flex flex-col justify-center  sm:w-full sm:flex-row sm:justify-between">
                    <div className=" pb-2">
                        <p className="text-2xl "><span className="font-extrabold text-2xl">FRASER</span>PLUS</p>
                        <p className="font-extrabold  leading-5 text-xl w-[200px]">Buy now. Pay later. Earn Rewards</p>
                        <div className="text-xs">
                            <p>Credit subject to status</p>
                            <p>Representative APR: 39.9% (variable)</p>
                        </div>
                    </div>
                    <div className=" flex justify-center py-2  rounded-sm  sm:items-center">
                        <a href="https://www.houseoffraser.co.uk/frasersplus" target="_blank" rel="noreferrer" className="w-full">
                            <button className="py-3 sm:px-4 font-extrabold border w-full rounded-sm bg-fuchsia-700  hover:bg-[#CCFF00] hover:text-black ease-in-out duration-300 sm:border-0" >LEARN MORE</button>
                        </a>
                    </div>
                </div>
                <div className=" relative  sm:absolute sm:overflow-hidden ">
                    <img className="w-60 h-auto" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875828/setters-client/frasers-plus-min_ieqsif.png" alt="fraser-link"></img>
                </div>
            </div>
        </div>
    )
}


export default FraserPlusPromo;