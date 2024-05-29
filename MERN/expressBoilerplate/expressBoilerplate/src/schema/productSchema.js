import { Schema } from "mongoose";

/*
products=[
    {name: "laptop",price: 100000,quantity: 100,isInShop: true}
]


*/
export let productSchema=Schema({
    name:{


        type:String,
        required:[true, "name field is required"]
    },
    price:{
        type:Number,
        required:[true, "price field is required"]
    },
    quantity:{
        type:Number,
        required:[true, "quantity field is required"]
    },
    isInShop:{
        type:Boolean,
        required:[true, "isInShop field is required"]
    }


}

/*
// //defining object=> schema
// name=>String
// price=>Number
// quantity=>Number
// isInShop=>Boolean

//defining array=>model
name,Object
*/






)