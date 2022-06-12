
const Restaurant = require("../models/restaurant")
const repo = require("../repositories/restaurant")

exports.add = async(req, res)=>{
    const restaurant = new Restaurant(req.body.name, req.body.location, req.body.contact);
    const result = await repo.add(restaurant);
    if(result){
        return res.send("Restaurant is added");
    }else{
        return res.send("Restaurant failed to added");
    }
}

exports.get = async (req, res)=>{
    const result = await repo.get();
    if(result==-1){
        return res.send("Failed to get records")
    }else{
        return res.send(result);
    }
}

exports.getByLocation = async (req, res)=>{
    const result = await repo.getByLocation(req.params.city);
    if(result==-1){
        return res.send("Failed to get restaurant")
    }else{
        return res.send(result);
    }
}