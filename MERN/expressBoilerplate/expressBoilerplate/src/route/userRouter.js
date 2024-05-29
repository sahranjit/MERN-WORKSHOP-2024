import { Router } from "express";
import { User } from "../schema/model.js";

export let userRouter= Router();
userRouter
.route("/")
.post(async(req, res,next) => {
    let data=req.body
    try{
        let result= await User.create(data)
        console.log(req.body);
        res.json({
            success: true,
            message:"user added successfully"
        })
    }
    catch(error) {
        res.json({
            success: false,
            message: error.message
        })
    }
    
    
})

// .get(async(req, res, next) => {
//     //it must give all products from db to postman
//     //error handling
//     try {

//         let result=await User.find({})
//     res.json({
//         success: true,
//         message: "User read successfully",
//         result:result
//     })
//     } catch (error) {
//         res.json({
//             success: false,
//             message: error.message
//         })
//     }
// })

userRouter
.route('/:id')
.get(async(req, res, next) => {
    try{
        let result=await User.findById(req.params.id);
        res.json({
            success: true,
            message: "User read successfully",
            result:result
            
        })
    }
    catch(error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})
.delete(async(req, res,next) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
         res.json({
             success: true,
             message: "User deleted successfully",
             result:result
         })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
        
    }
 })

 .patch(async(req, res,next) => {
    try {
        let result = await User.findByIdAndUpdate(req.params.id, req.body);
        res.json({
            success: true,
            message: "User updated successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
        
    }
 })