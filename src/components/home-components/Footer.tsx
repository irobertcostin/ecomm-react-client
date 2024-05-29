


const Footer: React.FC = () => {



    return (
        <footer className="bg-black mt-10 xl:mt-10 text-center  xl:bottom-0 w-full text-white flex flex-col justify-center items-center lg:placeholder-teal-400 ">

            <div className="w-full relative text-sm container px-6 pt-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:px-24 md:justify-center md:items-start ">

                <div className="mx-auto  w-full flex flex-col justify-center items-center border-b pb-3 mb-5 gap-2 border-[#CCFF00] md:border-0 md:pt-6">

                    <h1 className="text-xl md:text-3xl sm:text-3xl py-1 font-bold tracking-tight text-[#CCFF00]">SETTERS STORE</h1>
                    <div className=" w-full ">

                    </div>

                    <p className="md:absolute md:top-2 md:w-full  md:right-0">
                        Discover exquisite craftsmanship, timeless elegance, and fashion-forward pieces that make a statement.
                    </p>
                </div>


                <div className="flex flex-col justify-center items-center  border-b  border-[#CCFF00] pb-3 mb-5 gap-2 md:border-0 lg:gap-5">

                    <p>Follow us on social media:</p>
                    <div className="w-full flex justify-center items-center">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mr-6  text-neutral-600 dark:text-neutral-200">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875829/setters-client/facebook_yqniou.png" alt="facebook-link"></img>
                        </a>

                        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875824/setters-client/tiktok2_sztykd.png" alt="tiktok-link"></img>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                            <img className="h-10 w-10" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875827/setters-client/insta_vajuoq.png" alt="instagram-link"></img>
                        </a>
                    </div>

                </div>

                <div className=" w-full flex flex-col    justify-center items-center border-b border-[#CCFF00] pb-3 mb-5 gap-2 md:border-0">
                    <p>Payments powered by:</p>
                    <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1716875826/setters-client/netopia-black_hqnjee.png" alt="netopia-payments"></img>
                </div>


                <div className="  flex flex-col justify-center items-center pb-3 gap-2 lg:gap-3">
                    <p> © 2023 Copyright: Robert Ion</p>

                    <div className="flex w-full justify-center gap-2 mt-2">
                        <a
                            href="https://www.linkedin.com/in/irobertcostin/"
                            type="button"
                            target="_blank"
                            rel="noreferrer"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com/irobertcostin"
                            type="button"
                            target="_blank"
                            rel="noreferrer"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer;