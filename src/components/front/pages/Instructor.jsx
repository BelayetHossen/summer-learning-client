import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet";


const Instructor = () => {
    const data = useLoaderData();

    return (
        <div className="bg-purple-100 pb-8">
            <Helmet><title>Instractor | Summer learning language</title></Helmet>
            <PageTitle title={data.displayName} text="" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"></PageTitle>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <section className="my-24">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                                <div className="flex lg:py-12">
                                    <img src={data.photoURL}
                                        className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] lg:mt-10" alt="image" />
                                </div>
                            </div>

                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="h-full rounded-lg bg-purple-600 p-6 text-center text-white lg:pl-12 lg:text-left">
                                    <div className="lg:pl-12">
                                        <h2 className="mb-8 text-3xl font-bold">{data.displayName}</h2>
                                        <h2 className="mb-8 text-xl font-bold">{data.email}</h2>
                                        <p className="mb-1 text-neutral-500 dark:text-neutral-300">Phone: {data.phone}</p>
                                        <p className="mb-1 text-neutral-500 dark:text-neutral-300">Total students: {data.students}</p>
                                        <p className="mb-1 dark:text-neutral-300 text-green-600">Address: {data.address}</p>

                                    </div>
                                    <div className="flex justify-between items-center gap-2 w-full mt-4">
                                        <Link to={`/instructor/classes/${data?.email}`}>
                                            <Button
                                                variant="gradient"
                                                size="sm"
                                                className="from-purple-600 mt-6 w-full"
                                            >
                                                <span>See classes</span>
                                            </Button>
                                        </Link>


                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default Instructor;