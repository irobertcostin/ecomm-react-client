
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const Newsletter: React.FC = () => {
    return (
        <div className="relative isolate overflow-hidden sm:py-10 w-full flex justify-center">
            <div className="w-full max-w-7xl px-6 ">
                <div className="mx-auto order w-full gap-x-8 gap-y-5 flex justify-center">

                    <div className="w-full  max-w-4xl ">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-start">STAY IN THE KNOW</h2>
                        <div className='w-full sm:flex items-center justify-between  sm:mt-5 '>
                            <div className="mt-6 flex w-full justify-center items-center sm:max-w-md  lg:max-w-md gap-x-4 sm:mt-0 " >
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-[#CCFF00] sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-sm bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#CCFF00] "
                                >
                                    Subscribe
                                </button>
                            </div>
                            <dl className="flex  justify-center gap-x-10 mt-5 sm:max-w-xs  sm:mt-0">
                                <div className="flex   items-center gap-4">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ">
                                        <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <dt className=" font-semibold text-white">Weekly articles</dt>

                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                        <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <dt className=" font-semibold text-white">No spam</dt>
                                </div>
                            </dl>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}


export default Newsletter;