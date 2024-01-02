// onclick - > js 이벤트 처리. - > 
const btn1 = document.querySelector("#btn1");
console.log(btn1);

btn1.addEventListener("click", function () {
    console.log("hollo btn1"); /* 콘솔에 출력확인. */
});
/* btn1 클릭 
1. 이벤트는 문자열 "click"(클릭 후 때야) "mousedown"(누르자마자 바로발생) , "mouseover", "mouseout" ,  
2. 실행했을때 실행되는 함수 function(){} - > 별도의 이름을 안써도 되는 함수 익명 함수.
3. 콘솔에 출력확인.
*/

console.log("------------------------------문제1-------------------------------------------")

//  문제 1 
const btn2 = document.querySelector("#btn2");

console.log(btn2);

btn2.addEventListener("click", function () {
    const qa = Number(window.prompt("1+1"));
    window.alert("qa");
})
/* 단계 별 절차적 1교시 끝 */

console.log("--------------------------------문제1 끝-----------------------------------------")

// 문제2. btn3 누를 시 구글 주소 바로가기 click, mousedown

const btn3 = document.querySelector("#btn3");

console.log(btn3);

btn3.addEventListener("mousedown", function () {
    window.location.href = "https://google.com";
    console.log("click 성공");
})
/* function(){} - > 익명함수 */
console.log("-----------------------------문제2 끝--------------------------------------------")
// 문제3 (2교시) 
// 인증확인 버튼 클릭 시 input에서 입력한 값이 팝업창으로 출력 
// 출력 메시지 입력 ex) 000 입력 확인 되었습니다.
const btn4 = document.querySelector("#certified_txt")
/* 선생님은 const certified_txt  */
const btn5 = document.querySelector("#certified_btn")
/* 선생님은 const certified_btn  */
console.log(certified_txt, certified_btn);
/*  */
btn5.addEventListener("click", function () {
    console.log("성공!") /* 이벤트 함수 작동 */
    console.log(btn4.value); // 값 동작 체크
    let result = btn4.value /* 좀 더 간단하게 버젼 1 */
    /* window.alert(`${btn4.value} 입력확인 되었습니다.`); */ /* 성공! 원래 버젼 */
    window.alert(`${result} 입력확인 되었습니다.`); /* 성공! */ /* 좀 더 간단하게 버젼 1 */
});
/*  let result = btn4.value 간단하게 만들어서 쉽게.
    결과를 담는 변수 result */
console.log("----------------------------문제3 끝 3교시 시작.---------------------------------------------")

// 총 수입 버튼을 클릭 시 월급+보너스 더한 결과가 팝업으로 출력 
// 결과 예시 ) 총 수입은 0000000원 입니다.

const result1 = document.querySelector("#result1")
const result2 = document.querySelector("#result2")
result_add = document.querySelector("#answer_btn")
console.log(result1, result2,result_add);

// function answer_btn(){
// }

answer_btn.addEventListener("click", function(){
    console.log("성공?") /* 함수작동 */
    console.log(result1.value, result2.value); /* 값 작동 확인 */
    console.log (Number(result1.value + result2.value)); /* 값 작동 확인 */
    console.log (typeof(result1.value, result2.value)); /* 값 작동 확인 */
    let result_plus = Number(result1.value) + Number( result2.value);
    // Number(result1.value + result2.value); 이때는 문자로 인식해서 
    // 넘버로 넘어가므로 스트링이 나오기에  Number(result1.value) + Number( result2.value);
    // 따로 따로 넘버로 인식시켜주고 넘겨주면 숫자 + 숫자가 된다.
    // 1 + 2 - > 12 - > num 숫자로  - >  + Number( result2.value); () 괄호부터 했기에 숫자 문자 + 되면 문자가 되므로 각각 넘버로 숫자로 + Number( result2.value); 변환 후 
    console.log(result_plus);
    window.alert (`총 수입은 ${result_plus}입니다.`);
})

/* const qa = Number(window.prompt("1+1")) */
console.log("-------------------------------------------------------------------------")
// js 은행
// 입급 전 잔액 : 10000원
// 입금액(자유) 입금 시 마다 +100원이 +되서 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행되는 구조

// const money_priv = 10000; 
/* 입금 전 잔액 */

const bank_input = document.querySelector("#bank_input"); /* 입금액 */
const bank_total = document.querySelector("#bank_total"); /* 총잔액 출력창*/
const bank_btn = document.querySelector("#bank_btn"); /* 입금하기 버튼 */
let total = 10000; /* 총잔액 let 값이 변경된다. const x */
console.log(bank_input, bank_total, bank_btn)

// 확인완료!
bank_total.value = total; /* 처음부터 만원이 보인다. */
/* 입급전 잔액 설정 완료 1 단계  */
// 입금액(자유) 입금 시 마다 +100원이 +되서 총 잔액에 포함 시작 


bank_btn.addEventListener("click", function(){
    console.log("성공?") /* 1. 함수 작동확인. */
    console.log (Number(bank_input.value + 100)); /* + 더하기 결과 확인 */
    console.log(total + Number(bank_input.value) + 100) /* 총 잔액 더하기 결과 확인 */
    let total_result = Number(bank_input.value) + 100; /* 입금액 + 이자 */
    total += total_result; /* 기존 토탈에 + total_result 총 잔액에 토탈 담음  
    total = total + total_result */
    bank_total.value = total;
    // 입금액(bank_input) 입력값(.value) 초기화(0) 
    bank_input.value = ""; /* 입금액 초기화 */
    // console.log( Number(total.value) + Number(total_result.value)); 
    /* 총 잔액 더하기 결과 확인  */
    // console.log (typeof(money_priv.value + bank_input.value));
    // let bank_totla = Number(money_priv.value) + Number(bank_input.value);
    //  = Number(money_priv.value) + Number(bank_input.value);
    //   window.alert(`총 잔액은 ${bank_totla} 입니다.`);
})
// function bank_btn(){
//     console.log
// };







console.log("-------------------------------------------------------------------------")
/* 콘솔로 확인 - > 변수 정상 등록 확인 */
/*
이벤트 핸들러 종류
https://webty.tistory.com/57

addEventListener는 함수를 이용한 이벤트 제어 방식.

이벤트대상.addEventListener(이벤트종류, 이벤트(실행)콜백함수, 이벤트단계(생략가능));
이벤트 단계는 true, false(기본값) 중 하나로 설정할 수 있습니다.

하나의 요소에 여러개의 이벤트 리스너를 등록할 수 있습니다.
thml요소를 포함 모든 dom 노드에 이벤트 리스너를 등록할 수 있습니다.
다양한 추가 메서드를 이용하여 이벤트를 정밀하게 제어할 수 있습니다.
*/


// 문제 1 내가 한 것

// const btn2 = document.querySelector("#btn2");

// const a = 1
// const b = 1

// console.log()
// console.log(btn2);

// btn2.addEventListener("click",function(){
//     console.log(`1+1은 ${a+b} 입니다.`)
// })
