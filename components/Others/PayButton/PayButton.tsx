import axios from 'axios';
import React from 'react';


const PayButton = ({ checkoutItems, btnName }:any) => {
    console.log(checkoutItems);
    const handleCheckout = () => {
        axios.post(`https://lovbuy-ecommerce-server.vercel.app/api/v1/stripe/create-checkout-session`, {
            checkoutItems
        }).then(res => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        }).catch((err) => console.log(err.message))
    }
    return (
        <>
        <button onClick={() => handleCheckout()} className="my-2 block w-full bg-lime-500 py-4 text-gray-900 duration-200 hover:bg-lime-400 md:w-2/5">{btnName}</button>
        </>
    );
};

export default PayButton;