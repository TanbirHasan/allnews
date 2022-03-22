import { data } from "./Constants/Data.js";
import news from "./modal/news.js";


const DefaultData = async () => {

    try{
        await news.deleteMany({})
        await news.insertMany(data);
        console.log('data exported succesfully')

    }catch(error){
        console.log(error.message);
    }
   
};

export default DefaultData;