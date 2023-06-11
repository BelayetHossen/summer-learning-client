import { Button } from "@material-tailwind/react";
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <section className="background-radial-gradient mb-40 overflow-hidden -mb-4">


                <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
                    <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0" style={{ 'z-index': 10 }}>
                                <h1
                                    className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                    Help any? <br /><span className="text-[hsl(218,81%,75%)]">easy contact by an email</span>
                                </h1>
                                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Temporibus, expedita iusto veniam atque, magni tempora
                                    mollitia dolorum consequatur nulla, neque debitis eos
                                    reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                                </p>
                            </div>
                            <div className="relative mb-12 lg:mb-0">
                                <div id="radius-shape-1" className="absolute rounded-full shadow-lg"></div>
                                <div id="radius-shape-2" className="absolute shadow-lg"></div>
                                <div
                                    className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12">
                                    <form>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <input type="text"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-gray-400"
                                                id="exampleFormControlInput1" placeholder="First name" />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Name
                                            </label>
                                        </div>

                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <input type="email"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-gray-400"
                                                id="exampleFormControlInput3" placeholder="Email address" />
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                                                address
                                            </label>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <textarea className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 bg-gray-400" cols="30" rows="10"></textarea>

                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Your massage
                                            </label>
                                        </div>


                                        <Button
                                            variant="gradient"
                                            size="sm"
                                            className="from-purple-600 w-full py-3"
                                        >
                                            Send
                                        </Button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Contact;