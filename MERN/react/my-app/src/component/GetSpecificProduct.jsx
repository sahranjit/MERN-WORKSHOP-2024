import React from 'react'
import {useParams} from "react-router-dom";

const GetSpecificProduct = () => {
    let params=useParams();
    console.log(params);
    console.log(params.id)
  return (
    <div>GetSpecificProduct</div>
  )
}

export default GetSpecificProduct