import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Km0P2LRtyDYwsXGAKLFr0LwnqcLBlNVhzCZAtBBFoCNxN8TS6EXLvb0UwRm2DIFVhWeULZyfnYQ1JT0jaVtr2ed00AqkU830A');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect( () => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    }, [appointmentId]);

    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h2>Pay: $ {appointment.price}</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


/*
1. isntall stripe and stripe-react
2. set publishable key 
3. Elements
4. Checkout Form
--------------
5. create payment method

*/