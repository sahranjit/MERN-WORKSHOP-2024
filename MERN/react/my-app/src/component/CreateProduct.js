import  axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
    let [name,setName]=useState("")
    let [price,setPrice]=useState("")
    let [quantity,setQuantity]=useState("")
    let [isInShop,setIsInShop]=useState()
  return (
    <div>
      <ToastContainer ></ToastContainer>


<form
        onSubmit={async(e) => {
          e.preventDefault();     //used to prevent default refreshing the screen.
                                    //.this holds the screen data till the data is submitted.
          let data={
            name:name,
            price:price,
            quantity:quantity,
            isInShop:isInShop,
          };
        //   console.log(data);
          try{
            let result=await axios({ 
            url:"http://localhost:8000/products",
            method:"post",
            data:data

              

            });
              //clear field when button is clicked or submitted
              setName("");
              setQuantity("");
              setPrice("");
              setIsInShop(false);

              //show toast message
              toast.success(result.data.message);

          }catch(error){
            toast.error(error.response.data.message);


          }

        }}
      >
            <div>
                <label htmlFor="name">Name</label>
                <input id="name"
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                ></input>
                
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input id="price"
                type="number"
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}
                ></input>
                
            </div>

            <div>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => {
                    setQuantity(e.target.value);
                }}
                ></input>
                
            </div>


            <div>
                <label htmlFor="isInShop">isInShop</label>
                <input 
                id="isInShop"
                type="checkbox"
                checked={isInShop}
                onChange={(e) => {
                    setIsInShop(e.target.checked);
                }}
                ></input>
                
            </div>


                    <br></br>

        <button type="submit">Send</button>
      </form>


    </div>
  )
}

export default CreateProduct