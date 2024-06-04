import Newsletter from "./Newsletter";


const Footer: React.FC = () => {



    return (
        <footer className="bg-black mt-10 xl:mt-10 text-center  xl:bottom-0 w-full text-white flex flex-col justify-center items-center">
            <div className="w-full relative text-sm  pt-5 sm:pt-0 ">
                <Newsletter />
                <div className="flex flex-col justify-center items-center mt-5 gap-2  lg:gap-5  sm:absolute sm:bottom-0 sm: sm:h-16 sm:mt-0 py-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 ">
                    <div className="w-full flex justify-center items-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mr-6  sm:bg-black sm:rounded-md">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875829/setters-client/facebook_yqniou.png" alt="facebook-link"></img>
                        </a>
                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="mr-6 sm:bg-black sm:rounded-md">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875824/setters-client/tiktok2_sztykd.png" alt="tiktok-link"></img>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className=" sm:bg-black sm:rounded-md">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875827/setters-client/insta_vajuoq.png" alt="instagram-link"></img>
                        </a>
                    </div>
                </div>
                <div className="w-full  flex justify-between items-center px-5 py-2 text-black bg-[#CCFF00] 3 sm:h-16">
                    <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl ">SETTERS</h1>
                    <p className="text-nowrap sm:text-wrap text-xs"> © 2024 Copyright: Robert Ion</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;