//filter greater than 18
let arr1=[1,21,25,12]
let arr2=arr1.filter((value,i)=>{
if (value>18)
{

return true;

}
else{

    return false;
}


});
console.log(arr2);




//filter even number

let arr3=[1,21,25,12,32,33,35,36,48,50]
let arr4=arr3.filter((value,i)=>{
    if(value%2==0)
    {
        return true;
    }
    else{
        return false;
    }
});
console.log(arr4);
