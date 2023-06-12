
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";


const PopularInstructor = () => {
    const { data: instructors = [] } = useQuery(['instructors'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/popularInstructor`)
            return res.data;
        },
    })
    return (
        <div className="bg-purple-100 -mt-12 py-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                <section className="mb-32 text-center">
                    <h2 className="my-12 text-3xl font-bold">
                        Popular <u className="text-primary dark:text-primary-400">instructors</u>
                    </h2>

                    <div className="grid gap-x-6 md:grid-cols-6 lg:gap-x-12 gap-5">
                        {instructors.map((instructor) => {

                            return (
                                <>
                                    <Link to={`/instructor/${instructor?.email}`}>
                                        <div key={instructor._id} className="mb-6 lg:mb-0 hover:scale-105 duration-500">
                                            <div
                                                className="block rounded-lg bg-purple-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

                                                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                                    <img src={instructor.photoURL} className="w-full rounded-t-lg" />

                                                    <svg className="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 1440 320">
                                                        <path fill="currentColor"
                                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                                        </path>
                                                    </svg>
                                                </div>


                                            </div>
                                        </div>
                                    </Link>
                                </>
                            );
                        })}



                    </div>
                </section>
            </div >
        </div >
    );
};

export default PopularInstructor;