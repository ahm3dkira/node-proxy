const express = require('express');
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
require("dotenv").config();

const app = express();
app.use(cors())

app.use('/', (req, res, next) => {
    // log the proxy request URL for debugging
    console.log(`redirecting to ${req.url}`);
    next();
});

app.use('/', createProxyMiddleware({ target: process.env.PROXT_HOST, changeOrigin: true }));

app.listen(process.env.PORT || 5000);
