
import PageTitle from "../layouts/PageTitle";
import SingleClass from "../layouts/SingleClass";
import { useLoaderData } from "react-router-dom";

const InstructorClassess = () => {
    const classes = useLoaderData()



    return (
        <>
            <PageTitle title="Classes by Instuctor" text="Single instuctor approved classes" img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply">

            </PageTitle>
            <div className="">
                <div className="container mx-auto pb-20 x-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl py-10"></h2>
                    <div className="">
                        <div className="flex flex-col gap-10">
                            {
                                classes.map((singleClass) => (
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


export default InstructorClassess;