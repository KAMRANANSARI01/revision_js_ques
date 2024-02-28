//q-2 write a program square root of a number.
function result(num1) {
  return Math.sqrt(num1);
}

console.log(result(439));
//solve this question without using inbuild fuction.(this question will be solve using binary search so we will solve it later.)

// q-11 check if the num is a prime num or not?

function primeNum(num){
    if(num<0){
        return NaN
    }
    if(num == 1 || num ==2){
        console.log("this is primeNumber")
    };
    for(let i =2; i<num; i++){
        if(num%i !== 0){
             console.log(`this ${num} is a prime number`);
             break;
        }else{
            console.log("this is not prime number")
        }
    }
}

// console.log(primeNum(7))

// q-17 program to print fibonacci sequence.(0,1,1,2,3,5,8,13,21.....)

let first = 0;
let second = 1;
let next;
let fixed = [0, 1];
let fSeries = [...fixed];
function fibonacci(num) {
    for (let i = 2; i < num; i++) { // Start from index 2 to avoid duplicates
        next = first + second;
        first = second;
        second = next;
        fSeries.push(next);
    }
}

fibonacci(10);
console.log(fSeries);

//print armstrong number,(153 = 1*1*1 + 5*5*5 +3*3*3 =153).

function armstrong(num){
    numString = num.toString()
    let digit = numString.length;
    let tem = num
    let sum = 0
    for(let i =0; i<digit; i++){
        let rem = tem % 10;
        sum += rem**digit;
        tem = Math.floor(tem/10)
    }
     if(sum===num){
        return `${num} is armstrong num.`
     }else{
        return false
     }
}
console.log(armstrong(153))

