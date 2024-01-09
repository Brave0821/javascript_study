let x = 5;
let y = x+10;
console.log(`x=${x}, y=${y}`)//5 15

// 목표) 이항연산 피연산자를 2개 적고 "=" 버튼을 클릭하면 결과값 출력하기 
/* 
1. 변수선언 (val1, val2, calcBtn, result)
2.  calc1Btn 클릭 이벤트 
2-1 val1, val2 값 가져오기 
2-2 위 값 더하기 
2-3 result 잡기 
2-4 위 대상 결과 출력 
다 이벤트 안에 들어있어서 2-4 붙여놓은 이유.
*/

let val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2")
console.log(val1,val2)
const calcBtn = document.querySelector("#calcBtn")
console.log(calcBtn)
const calc1 = document.querySelector("#calc1")
console.log(calc1)

calcBtn.addEventListener("click", function(){
    total = Number(val1.value)+ Number(val2.value)
    result.innerHTML = total.toLocaleString("ko-kr")

})
console.log("--------------------------------------")
console.log(6/2) //3
console.log(6%2) //0

const num1 = 10; // 변하지 않는 고정값
let num2 = 3;
let total1 = num1 % num2 // 나머지 연산의 결과는 0, 1 
num2 = 2;

console.log(total1)
console.log("--------------------------------------")

// let a = 5;

// let b = ++a; // 6
// let b = a++; // 5
// let b = --a; // 4
// let b = a--;
// console.log(`a=${a}, b=${b}`);

console.log("-------문제1-------")
let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d) // 결과 : 10, 20, 30, 40 
console.log("-------문제2-------")
a++ 
b-- 
c++ // 증감연산자는 1증가 1감소 무조건.
d--
console.log(a,b,c,d) // 결과 : 11, 19, 31, 39
console.log("-------문제3-------")
a = ++b 
b = a++ // 후위에 있으면 증가 전을 보내겠다.
console.log(a,b,c,d) // 결과 :21, 20,  
console.log("-------문제4-------")
c = a+b
d = ++c
console.log(a,b,c,d) // 결과 : 42, 42
console.log("-------문제5-------")
a = ++c + 10
b = --d + 1
console.log(a,b,c,d) // 결과 : 53, 42, 43, 41
console.log("-------------")
// 복합대입연산자 

let number = 10;
number += 5; // 넘버 = 기존 넘버에 + 5를 더해서 대입한다.
console.log(`변경 값 = ${number}`); //15

number -= 5; // number = number -5
console.log (`변경 값 = ${number}`); // 10 

number *= 5; //number = number*5
console.log (`변경 값 = ${number}`); // 50 

number /= 5; //number = number/5
console.log (`변경 값 = ${number}`); // 10 

number %= 2; // number = number%2
console.log (`변경 값 = ${number}`); // 0 

console.log("----------------------------------------------------")
