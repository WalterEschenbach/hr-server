const express = require('express');
const router = express.Router();

const getSample = (req, res) => {
    res.json({ message: 'Hello, this is a sample JSON response!' });
};

module.exports = {
    getSample
};
