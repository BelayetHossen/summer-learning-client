import { Helmet } from "react-helmet";

const Dashboard = () => {
    return (
        <div>
            <Helmet><title>Dashboard | Summer learning language</title></Helmet>
            <section className="bg-white dark:bg-gray-900 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">This page will be some features taken</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">the work is processing....</p>


                    </div>

                </div>
            </section>
        </div>
    );
};

export default Dashboard;