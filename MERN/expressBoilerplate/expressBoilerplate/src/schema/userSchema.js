import { Schema } from "mongoose";

export let userSchema=Schema({
    fullName:{
        type:String,
        required:[true, "fullName field is required"]
    } ,
    phoneNumber:{
        type:Number,
        required:[true, "phoneNumber field is required"]
    },
    address:{
        type:String,
        required:[true, "address field is required"]
    },
    password:{
        type:String,
        required:[true, "password field is required"]
    }

})