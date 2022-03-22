import express from "express";

import Connection from './connection/Connection.js'
import DefaultData from "./connection/DefaultData.js";

const app = express();

const port = 8000;


Connection();

app.listen(port,() => {
    console.log(`Server is running successfully on ${port}`)
});


DefaultData();