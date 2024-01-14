/* 화살표 함수 응용해서 블로그 올리기. */

let num = 1;
let price = 1500;
let total = 0;

let num_count = document.querySelector("#num_count")
const price_view = document.querySelector(".price") /* 가격 1,500원 */
let result;


function price_plus(){
    num < 10 ? num++ : alert("최대 구매수량 입니다.:D")
    num_count.value = num;
    total = num * price
    price_view.innerHTML = total.toLocaleString("ko-kr")+"원 입니다."
}

function price_minus(){
    num > 1 ? num-- : alert("최소 구매수량 입니다.")
    num_count.value = num;
    total = num * price;
    price_view.innerHTML = total.toLocaleString("ko-kr")+"원 입니다."
}
plus.addEventListener("click",price_plus);
minus.addEventListener("click",price_minus);