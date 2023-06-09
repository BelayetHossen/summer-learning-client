import { Button, Spinner } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../layouts/SocialLogin";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { addUser } from "../../../api/User";
import Loader from "../../Loader";


const Register = () => {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();
    const { createUser, userNamePhoto } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState("password");
    const [conPasswordType, setConPasswordType] = useState("password");
    const [spinning, setSpinning] = useState(false);
    const navigate = useNavigate();

    const submitRegister = (e) => {

        setSpinning(true)
        const { name, email, password, phone, gender, address } = getValues();
        // Image Upload
        const photo = e.photo[0]
        const formData = new FormData()
        formData.append('image', photo)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_SECRET_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const photoName = imageData.data.display_url
                const userData = {
                    displayName: name,
                    email,
                    photoURL: photoName,
                    role: "Student",
                    phone,
                    gender,
                    address
                }

                createUser(email, password)
                    .then((result) => {
                        const registeredUser = result.user;
                        update(registeredUser, name, photoName);
                        reset()
                        navigate("/", { replace: true });
                        setSpinning(false)
                    })
                    .catch((error) => {
                        console.log(error);
                        setSpinning(false)
                    });

                addUser(userData)
                    .then(data => {
                        toast.warning(data.message);
                        setSpinning(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                toast.error(err.message)
                setSpinning(false)
            })

    };

    const update = (registeredUser, name, photo) => {
        userNamePhoto(registeredUser, name, photo)
            .then(() => {
                toast.success("You have successfully registered!");
                setSpinning(false)
            })
            .catch((error) => {
                console.log(error);
                setSpinning(false)
            });
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden py-4 bg-purple-600">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign up
                </h1>
                {spinning && <Loader />}

                <form onSubmit={handleSubmit(submitRegister)} className="text-black">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Name
                        </label>
                        <input defaultValue="" {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    {errors.name?.type === 'required' && <span className="text-red-400">Name field is required</span>}
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input defaultValue="" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
                    </div>
                    {errors.email?.type === 'required' && <p className="text-red-400">Email field is required</p>}

                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>

                        <div className="flex items-center">
                            <input
                                {...register("password", { required: "Password is required!", pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/ })}
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
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-400">Password must should be 6 carts a capital letter and a special character</p>}

                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Confirm Password
                        </label>
                        <div className="flex items-center">
                            <input
                                {...register("passwordConfirmation", {
                                    required: "Please confirm password!",
                                    validate: {
                                        matchesPreviousPassword: (value) => {
                                            const { password } = getValues();
                                            return password === value || "Passwords should match!";
                                        }
                                    }
                                })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                type={conPasswordType}
                            />
                            {
                                conPasswordType == "password" ? <svg onClick={() => setConPasswordType("text")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-8 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg> : <svg onClick={() => setConPasswordType("password")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-8 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </div>

                    </div>
                    {errors.passwordConfirmation && (
                        <p style={{ color: "red" }}>
                            {errors.passwordConfirmation.message}
                        </p>
                    )}

                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Phone number <small>(Optional)</small>
                        </label>
                        <input defaultValue="" {...register("phone")} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Gender<small>(Optional)</small>
                        </label>
                        <select defaultValue="" {...register("gender")} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option value="">-Select-</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Address<small>(Optional)</small>
                        </label>
                        <textarea defaultValue="" {...register("address")} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" cols="30" rows="10"></textarea>
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Profile photo <small>jpg/png (200*200 recommanded)</small>
                        </label>
                        <input defaultValue="" {...register("photo", { required: true })} aria-invalid={errors.photo ? "true" : "false"} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="file" />
                    </div>
                    {errors.photo?.type === 'required' && <p className="text-red-400">Upload a profile photo</p>}


                    <div className="mt-6">
                        <Button
                            variant="gradient"
                            size="sm"
                            className="from-purple-600 w-full py-3"
                            type="submit"
                        >
                            {!spinning ? <span>Register</span> : <Spinner color="red" className="w-[70px] mx-auto" />}
                        </Button>

                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <SocialLogin></SocialLogin>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to={'/login'} className="font-medium text-purple-600 hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
}


export default Register;