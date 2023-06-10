
import SingleClass from "../layouts/SingleClass";
import { useLoaderData } from "react-router-dom";

const InstructorClassess = () => {
    const classes = useLoaderData()



    return (
        <div className="">
            <div className="container mx-auto pb-20 x-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl py-10">Classes by Instuctor</h2>
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
    );
};


export default InstructorClassess;