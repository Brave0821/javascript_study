/* # 적정 체중 구하는 계산기 만들기

계산식) **적정체중 = (본인신장-100)*0.9**

변수명 예) **userHeight, userWeight, goals, result, normal_w**

- +CSS 디자인은 심미적으로 자유롭게 표현하세요.
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기

최종목표 **결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.** */

let height = document.querySelector("#height") /* 현재 키  */
let weight = document.querySelector("#weight") /* 현재 몸무게 */
let goals = document.querySelector("#goals") /* 최종목표 */

// let user_height = 173;
// let user_weight = 75;

/*  계산식) **적정체중 = (본인신장-100)*0.9**
let proper_weight = (height - 100) * 0.9;
proper_weight - 적정체중 */

// console.log(height,weight);

let final_weight = 60; /* 최종체중 */
goals.value = final_weight /* 단순히 최종 목표에 보임. */

/* 결과보기 버튼 */
const result_btn = document.querySelector("#result_btn")

/* 콘솔확인 */
console.log(height, weight, goals, result_btn);

result_btn.addEventListener("click", function () {
    console.log("성공?"); /* 이상없음 성공? 콘솔 확인 */
    console.log(height.value + weight.value); /* 문자열로 합쳐짐. */
    console.log(typeof (height.value, weight.value, goals.value)); // string 확인.
    console.log ((Number(height.value)) + (Number(weight.value))); /*숫자로 + 되는거 확인.*/

    console.log(`현재 적정 체중은 ${(Number(height.value-100)*0.9)} 입니다. 
    현재 몸무게는 ${(Number(weight.value))} 이며 
    적중체중에서 ${(Number(height.value-100)*0.9)-(Number(weight.value))} kg 차이가 발생중입니다.`);
    /* 인풋에 키 값을 입력하면 콘솔에 적정체중이 뜨고 - > 적정체중에서 - 나의 체중 입력한 것을 빼면 값이 나온다.
    결과값에 길게 나와서 floor 사용해보려 했는데 실패.
    */
    window.alert(`현재 적정 체중은 ${(Number(height.value-100)*0.9)} 입니다. 
     현재 몸무게는 ${(Number(weight.value))} 이며 
     적중체중에서 ${(Number(height.value-100)*0.9)-(Number(weight.value))} kg 차이가 발생하고 있습니다.`);
    /* 버튼을 누르면  alert으로 알려준다. */

    // document.write(`현재 적정 체중은 ${(Number(height.value-100)*0.9)} 입니다. 
    // 현재 몸무게는 ${(Number(weight.value))} 이며 
    // 적중체중에서 ${(Number(height.value-100)*0.9)-(Number(weight.value))} kg 차이가 발생중입니다.`) 다른 페이지로 이동
})