import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SingleClass = ({ singleClass }) => {

    return (
        <div>
            <div className={`md:flex justify-between gap-20 gap-3 shadow-md hover:shadow-2xl hover:scale-102 duration-300 px-8 py-7 rounded overflow-hidden ${singleClass.seats == 0 ? "bg-red-300" : "bg-gray-100"}`}>
                <div className="w-full">
                    <img
                        className="w-full object-contain hover:scale-105 duration-500"
                        src={singleClass?.photoName}
                        alt={singleClass?.name}
                    />
                </div>
                <div className="w-full flex flex-col gap-3 my-3">
                    <Link
                        className="hover:text-rose-500 duration-300 flex justify-between items-center"
                    >
                        <h2 className="text-stone-950 font-semibold text-xl capitalize">
                            {singleClass?.name.slice(0, 20)}
                        </h2>
                    </Link>
                    <p className="text-sm text-gray-600">
                        Instructor name: <span className="font-semibold capitalize text-gray-600">{singleClass?.name}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Available seats: <span className="font-semibold capitalize text-gray-600">{singleClass?.seats}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                        Price: <span className="text-rose-500 font-semibold text-gray-600">{singleClass?.price}</span>
                    </p>
                </div>


                <div className="flex md:flex-col justify-between items-center gap-2 w-full">
                    <Button className="btn bg-purple-700 w-full">Select class</Button>
                    <Button className="btn bg-purple-700 w-full">Enroll now</Button>

                </div>
            </div>
        </div >
    );
};

export default SingleClass;