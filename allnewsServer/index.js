import express from "express";

import bodyParser from 'body-parser';
import Cors from "cors";

import Connection from './connection/Connection.js'
import DefaultData from "./connection/DefaultData.js";
import route from "./Route/route.js";



const app = express();
app.use(Cors());
app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json());


app.use("/", route);


const port = 8000;


Connection();

app.listen(port,() => {
    console.log(`Server is running successfully on ${port}`)
});


DefaultData();