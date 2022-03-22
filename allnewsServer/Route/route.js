import express from 'express';
import { getNews } from '../Controller/Newscontroller.js';


const route = express.Router();


route.get('/news',getNews)





export default route;