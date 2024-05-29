/* eslint-disable no-unused-vars */
import { Router } from "express";

export let firstRouter = Router();

firstRouter
  .route("/") //localhost:8000/
  .post((req, res, next) => {
    res.json("home post");
  })
  .get((req, res, next) => {
    res.json("home get");
  })
  .patch((req, res, next) => {
    res.json("home update");
  })
  .delete((req, res, next) => {
    res.json("home delete");
  });



  //api hit 
  firstRouter
  .route("/a")   //localhost:8000/a
  .post((req, res, next) => {
     console.log("hello post a");
    res.json("hello post a");
  })
  .get((req, res, next) => {
    res.json("hello get a");
  })

  .patch((req, res, next) => {
    res.json("hello patch a");
  })

  .delete((req, res, next) => {
    res.json("hello delete a");
  })






  firstRouter
  .route("/products")   //localhost:8000/a
  .post((req, res, next) => {
     console.log("hello post products");
    res.json("hello post products");
  })
  .get((req, res, next) => {
    res.json("hello get products");
  })

  .patch((req, res, next) => {
    res.json("hello patch products");
  })

  .delete((req, res, next) => {
    res.json("hello delete products");
  })
