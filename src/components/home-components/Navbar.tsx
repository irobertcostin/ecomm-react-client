
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserCircleIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import { DialogPanel, Dialog } from '@headlessui/react'
import ShoppingCart from "../user-components/ShoppingCart";




const Navbar: React.FC = () => {

    let navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)







    return (
        <div className=" bg-black fixed top-0 w-full">
            <div className="bg-white shadow">
                <div className='w-full bg-[#CCFF00] text-center px-2'>
                    <p>SETTERS X EVENTS NOW ON! Elevate your wardrobe with us!</p>
                </div>
            </div>
            <div className="mx-auto px-1">
                <div className="grid grid-cols-3 items-center h-20 px-2 lg:grid-cols-2 lg:px-20">
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
                        <h1 onClick={() => { navigate('/') }} className="text-2xl  cursor-pointer sm:text-3xl py-1 font-bold tracking-tight text-[#CCFF00]">SETTERS</h1>
                    </div>
                    <div className="flex gap-2 justify-end lg:gap-5">
                        <button onClick={() => { navigate("/contul-meu") }} className=' w-8 hidden lg:flex'>
                            <UserCircleIcon color='white' />
                        </button>

                        <button onClick={() => { navigate("/contul-meu") }} className='flex  w-8'>
                            <HeartIcon color='white' />
                        </button>
                        <button onClick={() => { setOpenCart(true) }} className='flex  w-8'>
                            <ShoppingBagIcon color='white' />
                        </button>
                    </div>
                </div>
            </div>

            <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 " />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-start">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white "
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