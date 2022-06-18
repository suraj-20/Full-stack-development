
const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant");

exports.add = async (restaurant)=>{
    try{
        const result = await Restaurant.create(restaurant);
        return result;
    }catch(err){
        console.log(err);
    }
}

exports.get = async (page)=>{
    try{
        const result = await Restaurant.aggregate(
            [
                {
                    $lookup:{
                        from: "menus",
                        localField: "_id",
                        foreignField: "restauratID",
                        pipeline:[
                            // {$match: {type: "Breakfast"}},
                            {$project: {restauratID:0}}
                        ],
                        as: "menus"
                    }
                },
                {$skip: (page-1)*5},
                {$limit: 5}
            ]
        );
        return result;
    }catch(err){
        console.log(err);
        return null;
    }
}