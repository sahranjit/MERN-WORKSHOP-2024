let arr1=[
{name: "ranjit",age:22, isMarried:false},
{name: "kishan",age:21, isMarried:true},
{name: "Bishal",age:23, isMarried:false},





]
let arr2=arr1.map((value,i)=>
{
    let result=value.name;
    return result;
})
console.log(arr2);