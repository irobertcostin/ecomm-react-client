import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Trending: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            url: "https://res.cloudinary.com/dqvazcqdl/image/upload/v1716884253/setters-client/off-white-comm_qgltkn.jpg",
            title: "OFF-WHITE CROMATICS",
            link: "#"
        },
        {
            url: "https://res.cloudinary.com/dqvazcqdl/image/upload/v1716961764/setters-client/flannels-hp-wk54-b2-240521_bfwknd.avif",
            title: "SUMMER BRONZE",
            link: "#"
        }, {
            url: "https://res.cloudinary.com/dqvazcqdl/image/upload/v1716961869/setters-client/flannels-wk3-hp-split-secondary-1-130524_s9zlqs.avif",
            title: "NEW IN: REPRESENT 247 X EVERLAST",
            link: "#"
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-full  bg-black px-5 lg:px-40 py-10 lg:py-20 clear-start text-white flex flex-col justify-center gap-10 md:gap-20">
            <h1 className="text-center text-xl lg:text-2xl">STAY IN THE KNOW: TRENDING NOW</h1>
            <div className="relative w-full sm:grid sm:grid-cols-3 gap-4">
                <div className="sm:hidden w-full overflow-hidden">
                    <div className="w-full h-96  lg:h-[500px] flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 w-full bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }}>
                                <div className="w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 duration-500 ease-in-out px-2">
                                    <div className="flex flex-col h-full gap-5 items-center justify-end pb-10 text-white font-extrabold text-3xl text-center">
                                        <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">{image.title}</h1>
                                        <div className="border-t-2 border-[#CCFF00] px-5">
                                            <h3 className="text-lg">SHOP NOW</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {images.map((image, index) => (
                    <div key={index} className="hidden sm:block w-full h-80 cursor-pointer lg:h-[450px] max-w-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }}>
                        <div className="w-full h-full bg-black bg-opacity-0 hover:bg-opacity-50 duration-500 ease-in-out px-2">
                            <div className="flex flex-col h-full gap-5 items-center justify-end pb-10 text-white font-extrabold text-3xl text-center">
                                <h1 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">{image.title}</h1>
                                <div className="border-t-2 border-[#CCFF00] px-5">
                                    <h3 className="text-lg">SHOP NOW</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute top-[45%] flex justify-between px-2 sm:hidden w-full">
                    <button onClick={handlePrev} className="rounded-full p-2 bg-white text-black">
                        <ArrowLeftIcon className="h-6" />
                    </button>
                    <button onClick={handleNext} className="rounded-full p-2 bg-white text-black">
                        <ArrowRightIcon className="h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trending;
