import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addPayment, } from '../../../api/Class';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Loader from '../../Loader';

const ChecoutForm = ({ myClass }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [spinning, setSpinning] = useState(false);

    useEffect(() => {
        const getSecret = async () => {
            setSpinning(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ price: myClass.price })
            });

            const data = await response.json();
            return data;
        };
        getSecret().then(data => {
            setClientSecret(data.clientSecret)
            setSpinning(false)
        })
            .catch((error) => { toast.success(error); })

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinning(true)
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            toast.warning(error.message)
            setSpinning(false)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setSpinning(false)
        }

        const { paymentIntent, error: confError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: "Unknown"
                }
            }
        })
        if (confError) {
            toast.warning(confError.message)
            setSpinning(false)
        }

        if (paymentIntent.status === 'succeeded') {

            const paymentData = {
                paymentId: paymentIntent.id,
                amount: paymentIntent.amount / 100,
                email: user?.email
            }

            addPayment(paymentData, myClass._id).then(data => {
                if (data.insertedId) {
                    toast.success("Your payment is successfully");
                    navigate("/dashboard/student/selectedClass", { replace: true });


                    setSpinning(false)
                }
            })
                .catch((error) => { toast.success(error); setSpinning(false) })

        }





    }
    return (
        <div>
            {spinning && <Loader />}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default ChecoutForm;