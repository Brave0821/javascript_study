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
console.log("--------------------------------------------------------------------------------------------")

// 삼항연산자.
// 조건 ? 조건값이 참일 때 실행되는 결과와 : 조건값이 거짓일 떄 실행되는 결과 
// 조건에 따라 참과 거짓을 구분하는데 사용하는 연산자 
// = 대입 , == 비교연산자( 좌우 피연산자 즉 데이터가 같다.), 
let x = 5;
let y = x+10;
y = x
let result_xy = x==y ? "x와 y는 같다" : "x와 y는 다르다";
/* == 좌우 값 비교 같으면 왼쪽 다르면 오른쪽 결과 출력 */
console.log(result_xy)
console.log("-------------------------------------------------------------------------------------")

let age = window.prompt("몇살이세요?")
// age 입력받은 데이터가 18살 이상이면 성인 아니면 미성년자 콘솔값 출력
let result_age = age >= 18 ? "성인" : "미성년자";
console.log(result_age);

// 객체 + 삼항연산자 
let user = [
    {
        name : "lee", /* 참, 거짓 */
        score:80,
        /* 조건 */

    },{
        name : "kim",
        score:70,
    }
]
/* user[0].name (0index에 name 속성을 가져와라) */
// 객체 속성 값 나뉨
// 최고 점수 받은 학생의 이름 저장 변수 
const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
console.log(`이번 달 1등 학생은 ${max_score_name}님 입니다.`)
