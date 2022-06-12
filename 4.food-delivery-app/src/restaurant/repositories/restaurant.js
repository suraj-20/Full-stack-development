
const mongodbConfig = require("../../../config/mongodb")

module.exports.add = async (restaurant)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
    await collection.insertOne({name:restaurant.name, location:restaurant.location, contact:restaurant.contact});
    }catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.get = async(req, res)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const result = await collection.find().toArray();
        return result;
    }catch(err){
        console.log(err);
        return -1;
    }
}

exports.getByLocation = async(_location)=>{
    const collection = mongodbConfig.getCollection("Restaurant");
    try{
        const filterExpression = {location:_location}
        const result = await collection.find(filterExpression).toArray();
        return result;
    }catch(err){
        console.log(err);
        return -1;
    }
}