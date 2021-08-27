const express = require("express");
const router = express.Router();

const Signup = require("../model/signupModel");


router.get("/", async (req, res) => {
    try {
        const x = await Signup.find().lean().exec();
        res.send(x);
    } catch (err) {
        res.status(400).send(err.message);
    }
})


router.post("/", async (req, res) => {
    try {
        const x = await Signup.create(req.body);
        res.send(x);
    } catch (err) {
        res.status(400).send(err.message);
    }
})

module.exports = router;