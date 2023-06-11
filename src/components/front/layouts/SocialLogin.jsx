import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser } from "../../../api/User";
import { toast } from "react-toastify";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const LoginGoogleHandler = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                const userData = {
                    displayName: loggedUser.displayName,
                    email: loggedUser.email,
                    photoURL: loggedUser.photoURL,
                    role: "Student",
                    phone: "",
                    gender: "",
                    address: "",
                    selectedClass: []
                }
                addUser(userData)
                    .then(data => {
                        toast.warning(data.message);
                    })
                    .catch(err => console.log(err))
                navigate(from, { replace: true });
                toast.success("You have successfully LoggedIn!");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>

            <div className="flex mt-4 gap-x-2">
                <button
                    onClick={LoginGoogleHandler}
                    type="button"
                    className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current text-red-600"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;