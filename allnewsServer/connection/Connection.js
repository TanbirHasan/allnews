

import mongoose from 'mongoose';

 const Connection = async () => {
    try{
         const url = `mongodb://dbuser:I98QskZrWe61Tzqq@cluster0-shard-00-00.vtdxx.mongodb.net:27017,cluster0-shard-00-01.vtdxx.mongodb.net:27017,cluster0-shard-00-02.vtdxx.mongodb.net:27017/newsdata?ssl=true&replicaSet=atlas-z750yh-shard-0&authSource=admin&retryWrites=true&w=majority`;

         await mongoose.connect(url, { useNewUrlParser: true });
         console.log('Database Connected Succesfully')

    }catch(error){
        console.log('Error white connecting database',error)

    }
   
};

export default Connection;