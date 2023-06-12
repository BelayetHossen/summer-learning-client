import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../layouts/SocialLogin";
import { Alert, Button, Spinner } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import Loader from "../../Loader";
import { Helmet } from "react-helmet";


const Login = () => {
    const { loginEmailPassword } = useContext(AuthContext);
    const [warning, setWarning] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [spinning, setSpinning] = useState(false);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const loginEmailPass = () => {
        setSpinning(true)
        const { email, password } = getValues();
        loginEmailPassword(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setWarning("");
                toast.success("You have successfully Login");
                navigate(from, { replace: true });
                setSpinning(false)
            })
            .catch((error) => {
                setWarning(error.message);
                setSpinning(false)
            });
    };


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden py-4 bg-purple-600">
            <Helmet><title>Login | Summer learning language</title></Helmet>
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                {spinning && <Loader />}
                {warning && (
                    <Alert
                        color="red"
                        icon={
                            <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        }
                    >
                        {warning}
                    </Alert>
                )}



                <form className="mt-6" onSubmit={handleSubmit(loginEmailPass)}>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input defaultValue="" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    {errors.email?.type === 'required' && <p className="text-red-400">Email field is required</p>}

                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <div className="flex items-center">
                            <input
                                {...register("password", { required: "Password is required!" })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type={passwordType}

                            />
                            {
                                passwordType == "password" ? <svg onClick={() => setPasswordType("text")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-8 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg> : <svg onClick={() => setPasswordType("password")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-8 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </div>
                    </div>
                    {errors.password?.type === 'required' && <p className="text-red-400">Password field is required</p>}

                    <div className="mt-6">
                        <Button
                            variant="gradient"
                            size="sm"
                            className="from-purple-600 w-full py-3"
                            type="submit"
                        >
                            {!spinning ? <span>Login</span> : <Spinner color="red" className="w-[70px] mx-auto" />}


                        </Button>

                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>

                <SocialLogin></SocialLogin>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Dont have an account?{" "}
                    <Link to={'/register'} className="font-medium text-purple-600 hover:underline">Sign up</Link>

                </p>
            </div>
        </div>
    );
}


export default Login;