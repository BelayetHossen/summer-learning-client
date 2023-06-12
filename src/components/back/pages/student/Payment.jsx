import { Card, CardHeader, Typography } from "@material-tailwind/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import ChecoutForm from "../../layouts/ChecoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const myClass = useLoaderData();



    return (
        <div>
            <Helmet><title>Payment | Summer learning language</title></Helmet>

            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-6">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Payment for complete enroll
                            </Typography>
                        </div>

                    </div>

                </CardHeader>

                <div className="p-5">
                    <Elements stripe={stripePromise}><ChecoutForm myClass={myClass}></ChecoutForm></Elements>
                </div>

            </Card>

        </div>
    );
};

export default Payment;