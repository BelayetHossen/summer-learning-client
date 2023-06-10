
import SingleClass from "../layouts/SingleClass";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import PageTitle from "../layouts/PageTitle";

const AllClasses = () => {


    const { data: allClasses = [], isLoading } = useQuery(['allClasses'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allClasses`)
            return res.data
        },
    })


    if (isLoading)
        return (
            <Loader />
        );



    return (
        <>
            <PageTitle title="All classes" text="All approved classes" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"></PageTitle>
            <div className="bg-purple-100 pt-8">
                <div className="container mx-auto pb-20 x-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex flex-col gap-10">
                            {
                                allClasses.map((singleClass) => (
                                    <SingleClass key={singleClass._id} singleClass={singleClass} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


export default AllClasses;