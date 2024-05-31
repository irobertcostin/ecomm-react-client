import { useNavigate } from "react-router-dom";


const HomeHero: React.FC = () => {

    const navigate = useNavigate();


    const goShop = () => {
        navigate('/gallery')
    }


    return (
        <div className="home-comm  h-[470px] w-full flex flex-col justify-end items-center sm:h-[600px]">
            <div className="w-[200px] md:w-[300px] mb-8 text-center pb-2 border-b-4 border-[#CCFF00] [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
                <p className="text-white text-lg font-extrabold mb-2">THIS IS</p>
                <p className="home-comm-label text-white text-4xl font-extrabold">HOT GIRL SUMMER</p>
            </div>
            <div>
                <button
                    onClick={goShop}
                    className=" mb-12 bg-white px-6 py-3 rounded-sm font-bold hover:bg-[#CCFF00]  ease-in-out duration-300">DISCOVER THE VARIETY</button>
            </div>
        </div>
    )
}


export default HomeHero;