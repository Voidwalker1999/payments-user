import React, { useState } from 'react';

function Paymentuser() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [currency, setCurrency] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [secretCode, setSecretCode] = useState('');
    const [cardDetails, setCardDetails] = useState([]);
    const [newCard, setNewCard] = useState({
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        secretCode: ''
    });

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleCardTypeChange = (event) => {
        setCardType(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleCardHolderNameChange = (event) => {
        setCardHolderName(event.target.value);
    };

    const handleExpirationDateChange = (event) => {
        setExpirationDate(event.target.value);
    };

    const handleSecretCodeChange = (event) => {
        setSecretCode(event.target.value);
    };

    const handleCardDetailsChange = (event) => {
        setNewCard({
            ...newCard,
            [event.target.id]: event.target.value
        });
    };

    const handleAddCard = () => {
        const newCardDetails = {
            cardType,
            cardNumber,
            cardHolderName,
            expirationDate,
            secretCode
        };
        setCardDetails([...cardDetails, newCardDetails]);
        setCardType('');
        setCardNumber('');
        setCardHolderName('');
        setExpirationDate('');
        setSecretCode('');
    };

    const handleRemoveCard = (index) => {
        const updatedCardDetails = [...cardDetails];
        updatedCardDetails.splice(index, 1);
        setCardDetails(updatedCardDetails);
    };

    return (
        <div>
            <h1>Payment Settings</h1>
            <h3>Customize payment options</h3>
            <div id="paymentMethodDiv">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Card Payments</option>
                    <option value="paypal">PayPal</option>
                    <option value="directBank">Direct Bank Transaction</option>
                </select>
            </div>

            <div id="currencyDiv">
                <label htmlFor="currency">Currency:</label>
                <select id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="">Select Currency</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
            </div>

            {paymentMethod === 'creditCard' && (
                <div id="cardTypeDiv">
                    <label htmlFor="cardType">Card Type:</label>
                    <select id="cardType" value={cardType} onChange={handleCardTypeChange}>
                        <option value="">Select Card Type</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                    </select>
                </div>
            )}

            {paymentMethod === 'creditCard' && (
                <div id="cardNumberDiv">
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input id="cardNumber" type="text" value={cardNumber} onChange={handleCardNumberChange} />
                </div>
            )}

            {paymentMethod === 'creditCard' && (
                <div id="cardHolderNameDiv">
                    <label htmlFor="cardHolderName">Card Holder Name:</label>
                    <input id="cardHolderName" type="text" value={cardHolderName} onChange={handleCardHolderNameChange} />
                </div>
            )}

            {paymentMethod === 'creditCard' && (
                <div id="expirationDateDiv">
                    <label htmlFor="expirationDate">Expiration Date:</label>
                    <input id="expirationDate" type="text" value={expirationDate} onChange={handleExpirationDateChange} />
                </div>
            )}

            {paymentMethod === 'creditCard' && (
                <div id="secretCodeDiv">
                    <label htmlFor="secretCode">Secret Code:</label>
                    <input id="secretCode" type="text" value={secretCode} onChange={handleSecretCodeChange} />
                </div>
            )}

            <div id="cardDetailsDiv">
                <button onClick={handleAddCard}>Add Card</button>
            </div>

            <div>
                <h2>Saved Card Details:</h2>
                {cardDetails.map((card, index) => (
                    <div key={index}>
                        <p>Card Type: {card.cardType}</p>
                        <p>Card Number: {card.cardNumber}</p>
                        <p>Card Holder Name: {card.cardHolderName}</p>
                        <p>Expiration Date: {card.expirationDate}</p>
                        <p>Secret Code: {card.secretCode}</p>
                        <button onClick={() => handleRemoveCard(index)}>Remove</button>
                    </div>
                ))}

                {newCard.cardNumber && (
                    <div>
                        <p>Card Type: {newCard.cardType}</p>
                        <p>Card Number: {newCard.cardNumber}</p>
                        <p>Card Holder Name: {newCard.cardHolderName}</p>
                        <p>Expiration Date: {newCard.expirationDate}</p>
                        <p>Secret Code: {newCard.secretCode}</p>
                        <button onClick={handleRemoveCard}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Paymentuser;
