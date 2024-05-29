import { Router } from "express";

export let bikeRouter = Router();

bikeRouter
.route("/")
.post((req,res,next)=>{
res.json({
    success: true,
    message:"bike added successfully"
})
})

.get((req, res, next)=>{
    res.json({
        success: true,
        message:"bike read successfully"
    })
})

.patch((req, res, next)=>{
    res.json({
        success: true,
        message:"bike updated successfully"
    })
})

.delete((req, res, next)=>{
    res.json({
        success: true,
        message:"bike deleted successfully"
    })
})


bikeRouter
.route("/:id1")//localhost:8000/bikes
.get((req, res,next)=>
{
    console.log(req.body)
    console.log(req.params)    //req.params gives dynamic params
    res.json({
        success: true,
        message:"bike get successfully"
    })
})
.post((req, res, next)=>{
    res.json({
        success: true,
        message:"bike post successfully"
    })
})

.patch((req, res, next)=>{
    res.json({
        success: true,
        message:"bike patch successfully"
    })
})
.delete((req, res, next)=>{
    res.json({
        success: true,
        message:"bike delete successfully"
    })
})