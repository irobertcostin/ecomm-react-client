
import React, { useEffect, useState, Fragment } from "react";
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserCircleIcon, HeartIcon, MagnifyingGlassIcon, TagIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import { DialogPanel, Dialog, Transition, TransitionChild } from '@headlessui/react'
import ShoppingCart from "../user-components/ShoppingCart";
import NavCategories from "./NavCategories";
import NavAccount from "./NavAccount";

interface Category {
    name: string
    path: string
}

const TAG = 'tag'
const ACCOUNT = 'account'


const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState<boolean>(false)
    const [openCart, setOpenCart] = useState<boolean>(false)
    const [page, setPage] = useState<string>(TAG)


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
        }]








    return (
        <div className=" bg-black fixed top-0 w-full z-50">
            <div className="bg-white shadow">
                <div className='w-full bg-[#CCFF00] text-center px-20 text-sm'>
                    <p><span className="font-semibold">SETTERS X EVENTS NOW ON!</span> Elevate your wardrobe with us!</p>
                </div>
            </div>
            <div className="mx-auto px-1 relative">
                <div className="grid grid-cols-3 items-center h-16 px-2 sm:grid-cols-2 lg:px-20 ">
                    <div className="  flex items-center sm:hidden ">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mx-auto  text-center lg:mx-0 sm:text-start sm:mx-0 ">
                        <h1 onClick={() => { navigate('/') }} className="text-3xl cursor-pointer  py-1 font-bold tracking-tight text-[#CCFF00]">SETTERS</h1>
                    </div>
                    <div className="flex gap-2 justify-end lg:gap-5 ">
                        <button onClick={() => { navigate("/contul-meu") }} className=' w-8 hidden sm:flex'>
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
            <Transition show={open} as={Fragment}>
                <Dialog className="relative z-50 sm:hidden" onClose={setOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity " />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
                                <TransitionChild
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <DialogPanel className="pointer-events-auto w-screen max-w-lg">
                                        <div className="flex h-full  flex-col overflow-y-scroll bg-black shadow-xl  pt-8">
                                            <div className="flex-1 overflow-y-auto bg-white">
                                                <div className="flex items-center justify-center   relative bg-black pb-4">
                                                    <div className="ml-4 mt-6 flex  items-center  absolute left-0 ">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-300 hover:text-white"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                    <div className="mx-auto  text-center  mt-4">
                                                        <h1 onClick={() => { navigate('/') }} className="text-3xl cursor-pointer  py-1 font-bold tracking-tight text-[#CCFF00]">SETTERS</h1>
                                                    </div>
                                                </div>
                                                <div className="w-full flex justify-between bg-black bg-opacity-90 ">
                                                    <h1
                                                        className="px-6 text-white pt-0.5 text-nowrap w-full flex justify-center text-3xl"
                                                    >
                                                        €
                                                    </h1>
                                                    <button onClick={() => { setPage(TAG) }}
                                                        className={` ${page == TAG ? "bg-[#CCFF00]" : ""} px-6 py-2 text-nowrap w-full flex justify-center`}
                                                    >
                                                        <TagIcon color={`${page == TAG ? "black" : "white"}`} className="w-7" />
                                                    </button>
                                                    <button onClick={() => { setPage(ACCOUNT) }}
                                                        className={` ${page == ACCOUNT ? "bg-[#CCFF00]" : ""} px-6 py-2 text-nowrap w-full flex justify-center`}
                                                    >
                                                        <UserCircleIcon color={`${page == ACCOUNT ? "black" : "white"}`} className="w-7" />
                                                    </button>
                                                </div>
                                                <div className="w-full">
                                                    {(() => {
                                                        switch (page) {
                                                            case TAG:
                                                                return <NavCategories setOpen={setOpen} />;
                                                            case ACCOUNT:
                                                                return <NavAccount setOpen={setOpen} />
                                                            default:
                                                                return <NavCategories setOpen={setOpen} />
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ShoppingCart open={openCart} setOpen={setOpenCart} />
        </div>

    )
}


export default Navbar;