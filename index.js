const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req,res,) => {
    return res.status(200).send("Wellcome to demo project API");
});

app.get("/health", (req,res,) => {
    return res.status(200).send("API server health is at 100%");
});

app.listen(port, () => {
    console.log('Server is running on port http://localhost:${port}');
});