import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";


const PopularClass = () => {
    const { data: classes = [] } = useQuery(['classes'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/popularClass`)
            return res.data;
        },
    })
    return (
        <div className="bg-purple-100 py-6">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                <section className="mb-32 text-center">
                    <h2 className="my-12 text-3xl font-bold">
                        Popular <u className="text-primary dark:text-primary-400">classes</u>
                    </h2>

                    <div className="grid md:grid-cols-5 lg:gap-x-8 gap-5">
                        {classes.map((myClass) => {

                            return (
                                <div key={myClass._id} className="mb-6 lg:mb-0 shadow-xl hover:scale-105 duration-500">
                                    <div
                                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                            <img src={myClass.photoName} className="w-full rounded-t-lg" />
                                            <a href="#!">
                                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                                            </a>

                                        </div>
                                        <div className="p-1">
                                            <h5 className="bg-purple-400 rounded p-2 text-lg font-bold">{myClass.name}</h5>
                                            <p className="mb-1 text-neutral-500 dark:text-neutral-300">Total seats: {myClass.seats}</p>
                                            <p className="mb-1 text-neutral-500 dark:text-neutral-300">Total enrolled: {myClass.enrolled}</p>
                                            <p className="mb-1 dark:text-neutral-300 text-green-600">Available seats: {myClass.seats - myClass.enrolled}</p>
                                            <ul className="mx-auto flex list-inside justify-center mb-3">
                                                <Link to={`/class/${myClass._id}`}>
                                                    <Button

                                                        variant="gradient"
                                                        size="sm"
                                                        className="from-purple-600 w-full py-3"
                                                        type="submit"
                                                    >
                                                        Details

                                                    </Button>
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}



                    </div>
                </section>
            </div>
        </div>
    );
};

export default PopularClass;