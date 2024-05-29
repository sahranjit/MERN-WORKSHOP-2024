/*
defining array=>model
name,object


*/

import { Model, model } from "mongoose";
import { productSchema } from "./productSchema.js";
import { userSchema } from "./userSchema.js";


export let Product= model("Product",productSchema) 
export let User=model("User",userSchema) 
//variable name must be same as model name
//model name must be firstLetter capital and singular