import React from 'react'

const Map = () => {
    let products = [
        { name: "Mobile", price: 1000, quantity: 10, isInShop: true },
        { name: "Laptop", price: 2000, quantity: 11, isInShop: false },
        { name: "Tv", price: 3000, quantity: 15, isInShop: true },
      ];
  return (
    <div>
    {

        products.map((value,i)=>{
            return(
            <div style={{border:"solid red 3px", marginBottom:"20px"}}>

                <p>product is {value.name}</p>
                <p>price is {value.price}</p>
                <p>quantity is {value.quantity}</p>
                <p>isInShop {value.isInShop===true?"yes":"no"}</p>
            </div>)
        })

    }
    </div>
  )
}

export default Map


   



