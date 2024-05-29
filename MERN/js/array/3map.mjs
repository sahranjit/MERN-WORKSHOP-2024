let arr1=[1,2,3]

//[1,2,3]=>[11,12,13]


let arr2=arr1.map((value,i)=>{

console.log("helloBoy");


})

/*


*/


let arr3=[1,2,3]
let arr4=arr3.map((value,i)=>{
    let result=value*2;
    return result;
})

console.log(arr4);




let arr5=[1,2,3]
let arr6=arr3.map((value,i)=>{
    let result=value+10;
    return result;
})

console.log(arr6);


let arr7=["ranjit","ram","hari"]
let arr8=arr7.map((value,i)=>{
    let result=value+" sah";
    return result;
})

console.log(arr8);

let name=["ranjit","ram","hari"]
let arr9=name.map((value,i)=>{
    return `${value} sah`
})

console.log(arr9);


//input array
//output array
//map is used to manipulate elements of array
