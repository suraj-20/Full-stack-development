
// Connect to Mongodb Database.

const mongodb = require("mongodb");

const mongodbClient = mongodb.MongoClient;

const url = "mongodb+srv://sura_j20:s8u2r8a7j@cluster0.dtydm.mongodb.net/foodDeliveryAppDB?retryWrites=true&w=majority";

exports.connect = async ()=>{

    try{
        var client = await mongodbClient.connect(url);
        console.log("DB id connected.");
    }catch(err){
        console.log(err);
    }
    
}