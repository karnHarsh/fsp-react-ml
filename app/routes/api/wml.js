// 1. Import dependencies
const express = require("express");
const router = express.Router();
const request = require("request-promise");

// 2. Setup router
router.post("/score", async (req, res) => {

    // 3. Get access token from WML
    const options = {
        method: "POST",
        url: process.env.AUTH_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
            apikey: process.env.WML_API_KEY,
            grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        },
    };
    let response = "";
    let access_token = "";
    try {
        response = await request(options);
        access_token = JSON.parse(response)["access_token"];
        //res.send(access_token);
    } catch (err) {
        console.log(err);
        res.send(err);
    }


    // 4. Make a scoring request
    const { year, month, costCentre, account } = req.body;
    console.log(year, month, costCentre, account);

    //   5. Populate template
    const template = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ];
})