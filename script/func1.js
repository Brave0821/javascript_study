// window.alet()
/* 
window.alet("hello")
window.alet(1)
window.alet(1+1)
method or function

<함수라고 부를 수 있는 것들> 

funtion(){}

Number()

String()

dom.appendChild() - > 돔에다 자식 객체로 추가하는 함수 해당 돔 요소에 마지막 자식 요소에 추가하겠다. 

prompt()

confirm()

createElement() - > 요소 생성 함수

querySelector() querySelectorAll() -> 객체 선택 요소 

log() 

toLocalString() 국가코드 이용해서 문자열 변환 

Date()

------------------------------------------------------------

removeChild() 요소의 자식 제거 

remove() 요소 제거 

print()

open()

location.href (), location.href = 
*/

//함수스코프 (funtion-scope)== 지역변수와 전역변수 


// let b = 20; /* 전역변수 */
// let c = 30; /* 전역변수 */
// let a = ""
// scope1() // 함수 생성 후 호출 꼭 하기. 함수 호출 위치는 생성 위치와 관계없다.
// function scope1(){
//      a += 10 /* 지역변수 */ // += 기존 a에 10을 더한 값을 a에 보내라.
//     console.log(a,b,c) // 
// }/* 지역변수는 여기 안에서만  */
// console.log(a+(b+c)) // 함수 호출 전  undifined + 20 +30

/* ------------------------------------------------------------------------------------- */
/* 
    1. 지역변수(block-scope)

    *함수 내부에서 선언된 변수 
    *함수 내에서만 접근 가능 
    
    ex) 서울에서 선언되면 서울 안에서만 활동할 수 있다.

    2. 전역변수 (global-scope)

    *함수 외부에서 선언된 변수 
    *스크립트 전체 어디서든 접근 가능 
*/

/* 
    var 은 지역 전역 인식 x 
    scope가 가능하다 - > 접근 가능영역? 
*/

// 함수 스코프 연습 

let x = 1
let y
function func1(){
    // let y = 5 - > 지역변수라 밑에서 x 
    y = 5
    console.log(x+y)
}
function func2(){    
    let z = 10
    func1()
    console.log(x+y+z)
}

func2()

console.log("---------------------------")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
console.log(btn1, btn2)

/* btn.addEventListener("click",function(){
    console.log("결과 테스트")
})
 */

function testFunc(){
    console.log("결과 테스트")
}
btn1.addEventListener("click",testFunc);
btn2.addEventListener("click",testFunc);

/* 
let number1= 10;
let number2= 20;
let result;

number1--; //9?
console.log(number1) // 결과 : 9
number1++; //10 why? 왜 10인지? - > 위에 9여서 +1 그래서 10
console.log(number1) // 결과 : 10
result=number2++; //20
console.log(result); // 결과 : 증감연산자가 뒤에 붙으면 넘버를 리절트로 보내고 따로 ++ 해라 리절트는 증감되기 전 
result=++number2; // 
console.log(result); // 결과 : 22 

console.log("--------------------------------------------------------------------------------------------")

result = result++
console.log(result) // 20? ++가 뒤에 있으면 나중에 ++ , 단순히 result를 물어보고 있는거니까. 위에 그대로 22 
number2 = number1 + result++
console.log(number2) // 32?  
console.log("--------------------------------------------------------------------------------------------") */
console.log("-----------------------------------------------------------")
// 이벤트와 함수 개별 선언 연습 
// 1 잔에 4천원 

let num = 1;
let price = 4000;
let total = 0;
let num_count = document.querySelector("#num_count") 
const price_view = document.querySelector(".price")
let result;

function product_price_plus(){
    num < 10 ? num++  : alert("최대 구매수량 입니다.")
    /* num++ */  /* 수량증가 */
    num_count.value = num;
    total = num * price;
    price_view.innerHTML = total.toLocaleString("ko-kr")+"원 입니다."
}
//  total = num_count.value.length > 100 ? "최소 구매수량입니다."
function product_price_minus(){
    num > 1 ? num-- : alert("최소 구매수량 입니다.")
    // num-- /* 수량감소 */
    num_count.value = num;
    total = num * price;
    price_view.innerHTML = total.toLocaleString("ko-kr")+"원 입니다."
}
//  num_count.value.length > 100 ?  "최소 구매수량입니다."
plus.addEventListener("click",product_price_plus);
minus.addEventListener("click",product_price_minus);


console.log("-----------------------------------------------------------")

//    result = textarea.value.length > 100 ? "등록 ": "100자 이상 입력하세요"
// const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
// console.log(`이번 달 1등 학생은 ${max_score_name}님 입니다.`)
// //1개인 상태에서 - 버튼 최소 구매수량 10개 이상이면 최대 구매수량입니다.
// const num_count = 1 >


// 1 > alert() 
//1개인 상태에서 - 버튼 최소 구매수량 10개 이상이면 최대 구매수량입니다.
// function product_price(){
//     num += 1; /* 수량증가 */
//     num -= 1; /* 수량감소 */
//     num_count.value = num;
//     total = num * price;
//     price_view.innerHTML = total.toLocaleString("ko-kr")+"원"
// }

// plus.addEventListener("click",product_price);
// minus.addEventListener("click",product_price);

