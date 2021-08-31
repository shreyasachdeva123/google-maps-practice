import React from "react";
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Sidebar from "./Sidebar";

const PaymentForm = ({ handleHomeBtn, array, handleMenuItemClick }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");

    const formInfo = [
        { label: "First Name:", inputVal: firstName, updateFormInfo: setFirstName },
        { label: "Last Name:", inputVal: lastName, updateFormInfo: setLastName },
        { label: "Phone Number:", inputVal: phoneNum, updateFormInfo: setPhoneNum },
        { label: "Email:", inputVal: email, updateFormInfo: setEmail },
        { label: "Address:", inputVal: address, updateFormInfo: setAddress },
        { label: "Amount:", inputVal: amount, updateFormInfo: setAmount }
    ];

    const stripe = useStripe();
    const elements = useElements();

    const cardPaymentStyle = {
        style: {
            base: {
                color: "black",
                fontSize: "16px",
                fontFamily: "Public Sans sans-serif",
                fontWeight: 400
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: { name: firstName, email: email, phone: phoneNum, address: address }
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setFirstName("");
        setLastName("");
        setPhoneNum("");
        setEmail("");
        setAddress("");
        setAmount("");
    };

    return (
        <div className="RFIDformWrapper">
            <Sidebar handleHomeBtn={handleHomeBtn} handleMenuItemClick={handleMenuItemClick} array={array} />
            <form className="paymentForm">
                {
                    formInfo.map((formDetails, index) => {
                        return (
                            <div className="paymentLabel" key={index}>
                                <label htmlFor={index}>{formDetails.label}</label>
                                <input type="text" id={index} value={formDetails.inputVal} onChange={(e) => { formDetails.updateFormInfo(e.target.value) }} />
                            </div>
                        )
                    })
                }

                <div className="cardNumDiv">
                    <CardElement options={cardPaymentStyle} />
                </div>
                <button className="payNowBtn" type="button" onClick={handleSubmit}>Pay Now</button>
            </form>

        </div>
    )
}

export default PaymentForm;