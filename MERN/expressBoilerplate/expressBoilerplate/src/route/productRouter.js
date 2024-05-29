import { Router } from "express";
import { Product } from "../schema/model.js";

export let productRouter = Router();

productRouter
.route("/")
.post(async(req, res,next) => {
    let data=req.body
    //now storing this above data to product(database)

    //error handling


    try{

    
    let result=await  Product.create(data);
    res.status(200).json({
        success : true,
        message : "Product added successfully",
        result : result
    })
}
catch(error) {
    res.status(400).json({
        success: false,
        message: error.message
    })



}
})

.get(async(req, res, next) => {
    //it must give all products from db to postman
    //error handling
    try {

        let result=await Product.find({})
    res.json({
        success: true,
        message: "Product read successfully",
        result:result
    })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


// productRouter
//    .route("/:id")
//    .get((req, res,next) => {
//     console.log(req.params.id);
//     res.json({
//         success: true
    
    
//    })



//     })


    productRouter
    .route("/:id")
    .get(async(req, res, next) => {
        try{
            let result=await Product.findById(req.params.id);
            res.json({
                success: true,
                message: "Product read successfully",
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
            let result = await Product.findByIdAndDelete(req.params.id);
             res.json({
                 success: true,
                 message: "Product deleted successfully",
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
            let result = await Product.findByIdAndUpdate(req.params.id, req.body);
            res.json({
                success: true,
                message: "Product updated successfully",
                result:result
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
            
        }
     })