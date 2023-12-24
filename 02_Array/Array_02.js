const arrDemo1 = [10,20,30,60,50,40];
let arrDemo2 = [90,80,70,30,20,10];

let splicearray = arrDemo2.splice(1,3)

// console.log(splicearray);
// console.log(arrDemo2.splice(1,3));
let spliceArray = arrDemo1.splice(1,6)
// console.log(spliceArray);

let sliceArray = arrDemo2.slice(1,5);
console.log(sliceArray);
console.log(arrDemo2.slice(1,5));

function Spliceing(num1,num2){
    let newArrays = [];
    let arrDemo2 = [90,80,70,30,20,10];

    for(let i=num1 ; i<=num2 ; i++){
        newArrays.push(arrDemo2[i])
    }
    return newArrays;
}

let resultArray = Spliceing(1,3);
console.log(resultArray);