let arr=[1,2,3,4,5,6,7,8,9,10]

let n=arr.length

let evensum=0;
let oddsum=0;

for(let i=0;i<n;i++){
    if(arr[i]%2==0){
        evensum+=arr[i]
    }else{
        oddsum+=arr[i]
    }
}

console.log("Sum of even numbers:",evensum)

console.log("Sum of odd numbers:",oddsum)
