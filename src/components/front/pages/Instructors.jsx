
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader";
import SingleInstructor from "../layouts/SingleInstructor";
import PageTitle from "../layouts/PageTitle";
import { Helmet } from "react-helmet";

const Instructors = () => {


    const { data: instuctors = [], isLoading } = useQuery(['instuctors'], {
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allInstuctors`)
            return res.data
        },
    })


    if (isLoading)
        return (
            <Loader />
        );



    return (
        <>
            <Helmet><title>All instructors | Summer learning language</title></Helmet>
            <PageTitle title="All Instructors" text="All instuctor approved classes" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply">

            </PageTitle>
            <div className="bg-purple-100 pt-4">
                <div className="container mx-auto pb-20 x-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="md:grid grid-cols-3 gap-10">
                            {
                                instuctors.map((instuctor) => (
                                    <SingleInstructor key={instuctor._id} instuctor={instuctor} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Instructors;