import { Button } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div>
            <Helmet><title>404 page | Summer learning language</title></Helmet>
            <section className="bg-white dark:bg-gray-900 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We can’t find that page</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesnt exist or has been moved.</p>

                        <div className="flex items-center mt-6 gap-x-3">

                            <Link to={'/'}>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="from-purple-600 w-full py-3"
                                    type="submit"
                                >
                                    Tale me home
                                </Button></Link>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/34SC4xN/404.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Page404;