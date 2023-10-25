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
const target = process.env.PROXY_HOST || 'http://ahmedkira.com'
console.log(target)
app.use('/', createProxyMiddleware({ target: target, changeOrigin: true }));

app.listen(process.env.PORT || 5000);
