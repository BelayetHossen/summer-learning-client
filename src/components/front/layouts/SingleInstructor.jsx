import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleInstructor = ({ instuctor }) => {

    return (
        <div>
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img className="w-full" src={instuctor.photoURL} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {instuctor.displayName}
                    </Typography>
                    <Typography color="purple" className="font-medium" textGradient>
                        {instuctor.role}
                    </Typography>
                    <Typography color="gray" className="font-medium" textGradient>
                        <span className="bold text-[#424242]">Email:</span> {instuctor.email}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-2">
                    <div className="flex justify-center gap-7">
                        <Tooltip content="Like">
                            <Typography
                                as="a"
                                href="#"
                                textGradient
                            >
                                <FaFacebook className="text-blue-700" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#"
                                textGradient
                            >
                                <FaTwitter className="text-blue-500" />
                            </Typography>
                        </Tooltip>
                        <Tooltip content="Follow">
                            <Typography
                                as="a"
                                href="#"
                                textGradient
                            >
                                <FaInstagram className="text-red-500" />
                            </Typography>
                        </Tooltip>
                    </div>
                    <Link to={`/instructor/classes/${instuctor?.email}`}>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="from-purple-600 mt-6 w-full"
                        >
                            <span>See classes</span>
                        </Button>
                    </Link>
                    <Link to={`/instructor/${instuctor?.email}`}>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="from-purple-600 mt-6 w-full"
                        >
                            <span>View profile</span>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SingleInstructor;

