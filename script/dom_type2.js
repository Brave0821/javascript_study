// dom_type2
const text_numInput = document.querySelector("#num")
const resultBtn = document.querySelector("#numBtn")
// resultBtn = 1;

console.log(text_numInput,resultBtn);

function fun_plus(){
    // console.log("text")
    // console.log(typeof text_numInput.value);
    console.log(Number(text_numInput.value)+1); // 더하기 확인. - > 바꾸기.
    // num.value = Number(num.value)+1 // 출력대상 바꾸기
    let result = Number(num.value)
    num.value = result + 1  /* - > 또다른 더 깔끔한 결과 */
};




