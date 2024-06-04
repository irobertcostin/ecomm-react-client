

const PromoOne: React.FC = () => {


    return (
        <div className="w-full py-10 px-4 grid grod-cols-1 md:grid-cols-2 lg:px-40 gap-5 lg:gap-20 lg:pb-20">
            <div className="w-full cursor-pointer h-96 lg:h-[500px] 2xl:h-[600px]  bg-cover bg-[url('https://res.cloudinary.com/dqvazcqdl/image/upload/v1716884826/setters-client/valentino_mrcdje.jpg')]">
                <div className="w-full  h-full bg-black bg-opacity-0 hover:bg-opacity-50 duration-500 ease-in-out">
                    <div className="flex flex-col h-full gap-5 items-center justify-end pb-10   text-white font-extrabold text-3xl text-center">
                        <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">SPOTLIGHT ON: VALENTINO</h1>
                        <div className="border-t-2 border-[#CCFF00] px-5">
                            <h3 className="text-lg ">SHOP NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full cursor-pointer h-96 lg:h-[500px] 2xl:h-[600px]  bg-cover bg-[url('https://res.cloudinary.com/dqvazcqdl/image/upload/v1716884825/setters-client/adidas_nedmbz.avif')]">
                <div className="w-full  h-full bg-black bg-opacity-0 hover:bg-opacity-50 duration-500 ease-in-out">
                    <div className="flex flex-col h-full gap-5 items-center justify-end pb-10   text-white font-extrabold text-3xl text-center">
                        <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] lg:px-36">JUST LANDED: ADIDAS X WALES BONNER</h1>
                        <div className="border-t-2 border-[#CCFF00] px-5">
                            <h3 className="text-lg ">SHOP NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PromoOne