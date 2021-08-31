import React from "react";
import App from "./App";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";
import Dashboard from "./Dashboard";

const stripePromise = loadStripe("pk_test_51JSxqfK3k0EFut97ypT1pMNRRXT2Ft96vikrYWvXWanXYcSXz9mlEnnYYCZZSfdrfxayiee5A3vbaXefrRiK8wZh00BiLM290q");

const Payments = ({ handleHomeBtn, homeBtnClicked, handleMenuItemClick, dashboardClicked, array, paymentsClicked }) => {

    if (homeBtnClicked) {
        return (
            <App />
        )
    } else if (dashboardClicked) {
        return (
            <Dashboard
                handleHomeBtn={handleHomeBtn} homeBtnClicked={homeBtnClicked} array={array} handleMenuItemClick={handleMenuItemClick} paymentsClicked={paymentsClicked} dashboardClicked={dashboardClicked}
            />
        )
    } else {
        return (
            <Elements stripe={stripePromise}>
                <PaymentForm handleHomeBtn={handleHomeBtn} handleMenuItemClick={handleMenuItemClick} array={array} />
            </Elements>
        )
    }
}

export default Payments;