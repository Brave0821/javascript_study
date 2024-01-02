// event2
// 문자열 메서드 pm 1시 02분
// let price = 10000;
// console.log (price.toLocaleString("ko-kr")); /* 금액 나라 별로 콘솔에 찍히는게 다름. */
// console.log (price.toLocaleString("fi-fi")); /* 금액 */
// console.log (typeof(price.toLocaleString("ko-kr"))); /* 금액 */
// HTMLNode.value = price.toLocaleString("ko-kr")
/* 국가코드로 변경하니까 문자열이 되버림.
숫자 + 문자 = 문자.

계산을 모두 마친 후 마지막 출력 경우에만 toLocaleString 사용한다.
중간에 사용 x 계산이 안됨.
HTMLNode.value = price.toLocaleString("ko-kr")
*/

const bank_input = document.querySelector("#bank_input");
const bank_total = document.querySelector("#bank_total");
const bank_btn = document.querySelector("#bank_btn")
let total = 10000; /* 현재 잔액 */
console.log(bank_input, bank_total, bank_btn);

bank_total.value = total.toLocaleString("kp-kr"); /* 현재 잔액에 , 표시 */
/* bank_total.value은 단순히 보여주는용 - > 토탈 */

bank_btn.addEventListener("click", function(){
    console.log("성공!")
    console.log(Number(bank_input.value + 100));
    let total_result = Number(bank_input.value)+100; /* 입금액 + 이자 */
    total += total_result; 
    bank_total.value = total.toLocaleString("ko-kr");
    bank_input.value = "";
    // console.log(total_result.toLocaleString("ko-kr"));
})

// console.log (bank_input.toLocaleString("ko-kr"));
/* console.log (price.toLocaleString("ko-kr")); 
*/
