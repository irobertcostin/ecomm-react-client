import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Wishlist: React.FC = () => {

    const navigate = useNavigate()
    const [items, setItems] = useState<[]>()


    return (
        <div className="min-h-[70vh] sm:min-h-[74.5vh]  pt-32 ">
            {
                items && items.length > 0 ?
                    (
                        <div className="w-full border fixed px-4 text-lg font-bold leading-4 py-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex justify-between items-center lg:px-20">
                            <div className=" flex justify-start items-center gap-5 font-normal">
                                <h1>MY WISH LIST</h1>
                                <div >
                                    <p>0 ITEMS</p>
                                </div>
                            </div>

                            <button onClick={() => { navigate("/contul-meu") }} className=' w-8  sm:hidden'>
                                <UserCircleIcon color='black' />
                            </button>

                            <button onClick={() => { navigate("/contul-meu") }} className='  hidden sm:flex black-btn px-20 py-3  font-normal'>
                                SIGN IN
                            </button>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col justify-center  items-center py-32 gap-5 sm:text-lg px-10">
                            <h1>Your wish list is empty</h1>
                            <div className='flex  w-10 lg:w-14'>
                                <HeartIcon color='black' />
                            </div>

                            <h1 className="text-center">Sign in to share your wish list and sync across all your devices.</h1>

                            <button onClick={() => { navigate("/contul-meu") }} className=' black-btn px-24 lg:px-32 py-3  font-normal mt-10 xl:mt-20'>
                                SIGN IN
                            </button>
                        </div>
                    )
            }
        </div>
    )
}

export default Wishlist