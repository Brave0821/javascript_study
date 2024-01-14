const bank_input = document.querySelector("#bank_input")
const bank_total = document.querySelector("#bank_total")
const bank_btn = document.querySelector("#bank_btn")

let total = 10000;

bank_total.value = total;

bank_btn.addEventListener("click", function(){

    let result_total = Number(bank_input.value) + 100;
    total += result_total;
    bank_total.value = total;
    bank_input.value = "";
})