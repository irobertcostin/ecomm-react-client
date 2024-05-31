
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserCircleIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import { DialogPanel, Dialog } from '@headlessui/react'
import ShoppingCart from "../user-components/ShoppingCart";

interface Category {
    name: string
    path: string
}



const Navbar: React.FC = () => {

    let navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)

    const categories = [
        {
            name: "NEW IN",
            path: "/new-in",
        },
        {
            name: "DESIGNERS",
            path: "/designers",
        },
        {
            name: "WOMEN",
            path: "/women",
        },
        {
            name: "MEN",
            path: "/men",
        },
        {
            name: "KIDS",
            path: "/kids",
        }
    ]





    return (
        <div className=" bg-black fixed top-0 w-full z-50">
            <div className="bg-white shadow">
                <div className='w-full bg-[#CCFF00] text-center px-20 text-sm'>
                    <p><span className="font-semibold">SETTERS X EVENTS NOW ON!</span> Elevate your wardrobe with us!</p>
                </div>
            </div>
            <div className="mx-auto px-1 relative">
                <div className="grid grid-cols-3 items-center h-16 px-2 lg:grid-cols-2 lg:px-20">
                    <div className="  flex items-center lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mx-auto   text-center lg:mx-0 lg:text-start">
                        <h1 onClick={() => { navigate('/') }} className="text-3xl cursor-pointer  py-1 font-bold tracking-tight text-[#CCFF00]">SETTERS</h1>
                    </div>
                    <div className="flex gap-2 justify-end lg:gap-5">
                        <button onClick={() => { navigate("/contul-meu") }} className=' w-8 hidden lg:flex'>
                            <UserCircleIcon color='white' />
                        </button>

                        <button onClick={() => { navigate("/wishlist") }} className='flex  w-8'>
                            <HeartIcon color='white' />
                        </button>
                        <button onClick={() => { setOpenCart(true) }} className='flex  w-8'>
                            <ShoppingBagIcon color='white' />
                        </button>
                    </div>
                </div>
                <div className=" pb-4 px-4 lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-xl lg:pt-4 flex justify-center items-center">
                    <div className="border-b border-gray-600 px-2  justify-between py-2 flex items-center gap-5 lg:py-1 sm:mx-40 lg:mx-0 w-full">
                        <MagnifyingGlassIcon className="h-5 w-5 text-[#CCFF00]  `" aria-hidden="true" />
                        <input
                            type="text"
                            name="search-string"
                            id="search-string"
                            autoComplete="search-string"
                            className="block flex-1 border-0 bg-transparent py-1.5  pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Shop by product or designer"
                        />
                    </div>
                </div>
                <div className="w-full pb-4 px-4 gap-5 flex items-center justify-start overflow-scroll text-white sm:justify-between sm:px-20 sm:gap-0 lg:pt-4">
                    {
                        categories.map((item: Category, index: number) => (
                            <button key={index} onClick={() => { navigate(item.path) }}
                                className=" px-6 py-2 border text-nowrap sm:w-full sm:border-0 sm:hover:bg-[#CCFF00] sm:hover:text-black"
                            >{item.name}</button>
                        ))
                    }
                </div>
            </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-40 " />
                <DialogPanel className="fixed inset-y-0  right-0 z-50 w-full overflow-y-auto bg-black px-3 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-start">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                </DialogPanel>
            </Dialog>
            <ShoppingCart open={openCart} setOpen={setOpenCart} />
        </div>

    )
}


export default Navbar;