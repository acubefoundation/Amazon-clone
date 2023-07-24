// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51NW3CWAsrZQjnhHtQAd4iC9qYm53tdmp9G2dAyZ8f6Z5vC4OSNIHuInBQLSLxbkYmGN67D3nSM3wEVOCgYwftunm00MwjP5S5T')



const app = express();
app.use(cors({origin: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("hello from firebase functions...")
});
app.get('/test', (req, res) => {
    res.status(200).send("hello from firebase test functions... yes")
});
app.post('/payments/create', async (req, res) => {
    const total = request.query.total;
    console.log(`payment request recieved for this ammount>>> ${total}`) ;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    response.status(201).send({ClientSecret: paymentIntent.client_secret})
})

exports.api = functions.https.onRequest(app)

//http://127.0.0.1:5001/aa-amaz-clone/us-central1/api