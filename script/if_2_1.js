/*  조건문 if(조건식)
{조건식 참 실행결과}
else{조건식 거짓 실행결과}
 */
/* const qa = prompt("이동 방향을 입력하세요","왼쪽, 오른쪽, 가운데 하나로 입력")

if(qa == "왼쪽"){
    alert("왼쪽 한 칸 이동")
} else if(qa == "오른쪽"){
    alert("오른쪽 한 칸 이동 ")
} else if (qa == "가운데"){
    alert("가운데로 한 칸 이동")
} else {
    alert("선택안하셨습니다.")
} */
console.log("------------------------------------------------------------")

// 케찹, 머스타드, 설탕 소스 중 하나 선택
// 키오스크에서 응용가능 주문기 입력 

/* const qa2 = prompt("케찹, 머스타드, 설탕 중 하나를 선택하세요:D") */

/* if(qa2 == "케찹"){
    window.alert("케찹을 선택합니다.!")
} else if(qa2 == "머스타드"){
    window.alert("머스타드를 선택합니다.!")
} else if(qa2 == "설탕"){
    window.alert("설탕을 선택합니다.!")
} else {
    window.alert("소스를 선택 안하셨습니다.")
}
 */

/* else는 마지막에 한번 
if 는 한번 2번쓰면 서로 다른 if로 인식함.

*/
console.log("-------------------------문제1 끝----------------------------------")

// if ~ else if ~ else 다양한 조건식으로 구분하기

/* 
논리연산자는? 
&& and 
|| or 
! not

비교 연산자가 2개 이상일 때 참 거짓을 구분 
비교 && 비교  = 둘다 참이어야 참 결과 
비교 || 비교 = 둘 중 하나만 참이어도 참 결과
*/

/* const qa = prompt("왼쪽 오른쪽 가운데를 선택하세요")
if((qa=="왼쪽") || (qa=="가운데") || (qa=="오른쪽")){
    alert(`${qa} 1칸 이동`)
} else {
    alert("선택하지 않으셨습니다.")
} */
console.log("-------------------------문제 끝----------------------------------")

/* const qa4 = prompt("케찹, 머스타드, 설탕 중 하나를 선택하세요:D")

if(qa4== "케찹" || qa4 == "머스타드" || qa4 == "설탕"){
    alert(`${qa4}을 선택하셨습니다.!`)
}else{
    alert("선택하지 않으셨습니다.!")
} */

console.log("--------------------------문제 끝----------------------------------")
// 100 ~ 90 a 
// 89 ~ 80 b 
// 79 ~ 70 c 
// 69 ~ 60 d
// 59 이하면 f 
/* let A = 90
let B = 80 */

/* if(a > num ){ 
    alert("a")
} else if(b > num){
    alert("b")
}

*/

/* 둘 다 참이여야해서 && ||은 하나만 참이라도 */
/* if(score>=90 && score<101){ 
    result = "A"
} else if (score>=80){
    result ="B"
} else if (score>=70){
    result = "C"
} else if (score>=60){
    result = "D"
} else {
    result = "F"
} */
console.log("--------------------------학점 계산기----------------------------------")

/* 학점 계산기 */
/* 0~100사이 참 */ 
/*  if안에 if를 넣는 것을 중첩if문(조건에서 조건이 더 필요한 경우 
    0 ~100 참 조건으로 만든 후 그 사이 50점수를 알고 싶을 때 
    거짓인데 조건 else if 그냥 거짓 else 
    */
    
/* const score = prompt("시험점수를 입력하세요","0~100점 사이값")
let result = ""
if (score >= 0 && score < 101) { 
if (score >= 90) {
    result = "A"
} else if (score >= 80) {
    result = "B"
} else if (score >= 70) {
    result = "C"
} else if (score >= 60) {
    result = "D"
} else {
    result = "F"
}
    alert(`당신의 학점은 ${result}학점 입니다.`) 
} else {
    alert("잘못 입력하셨습니다.")
} */
/* 참일떄만 보여주고 아니면 else - > 잘못 입력하셨습니다. */
console.log("--------------------------문제 탄생화 알려주는 프로그램----------------------------------")
// 12
const birthday = Number(prompt("당신의 생일은 몇월인가요?"))
let birthday_result = "" /* 최종값 */
let user_birthday_month = "" // 중첩 if문에서 사용자가 입력한 달과 탄생화 배열 객체를 연결해주는 전역변수

const birthday_flower = [
    {
        month:1,
        flower:"수선화",
        content:"자기애, 자존심, 외로움",
    },{
        month:2,
        flower:"제비꽃",
        content:"겸손, 양보",
    },{
        month:3,
        flower:"수선화",
        content:"자기애, 자존심, 외로움",
    },{
        month:4,
        flower:"스위티피",
        content:"추억, 즐거움",
    },{
        month:5,
        flower:"은방울꽃",
        content:"희망, 섬세함",
    },{
        month:6,
        flower:"백합",
        content:"순결",
    },{
        month:7,
        flower:"미나리아제비",
        content:"아름다움, 인격",
    },{
        month:8,
        flower:"글라디올러스",
        content:"비밀, 상상, 견고함",
    },{
        month:9,
        flower:"물망초",
        content:"진실한 사랑",
    },{
        month:10,
        flower:"금잔화",
        content:"실망, 비애",
    },{
        month:11,
        flower:"국화",
        content:"성실, 진실",
    },{
        month:12,
        flower:"포인세티아",
        content:"축하, 감사",
    }
] // 끝

if(birthday > 0 && birthday < 13){ // 1 ~12조건 birth가 0보다 크고 그리고 birth가 13보다 작을떄 
    // 위 조건이 참일때 추가 세부조건을 만들어주는 중첩 IF문 위치 
    
    if(birthday == 1||2||3||4||5||6||7||8||9||10||11||12){
        user_birthday_month = birthday_flower[birthday-1]
    } // 최대로 논리연산자 사용해서 줄임 
    
    // ※ 밑 일반적인 방법 
    /*    
    if(birthday == 1){
        user_birthday_month = birthday_flower[birthday-1]
    }else if(birthday == 2){
        user_birthday_month = birthday_flower[birthday-1]
    }else if(birthday == 3){
        user_birthday_month = birthday_flower[birthday-1]
    } */
    
    birthday_result = `${birthday_flower[birthday-1].month}월의
    탄생화는 ${birthday_flower[birthday-1].flower}이고
    꽃말은 ${birthday_flower[birthday-1].content}입니다.`    
    alert(birthday_result)
    
} else {
    alert("잘못입력하셨습니다. 1~12월 중에 입력해주세요")
}

/* if(birthday.value == birthday_flower[0]){
    window.alert(`탄생화는 ${birthday_flower[0]}입니다.`)
}  */

console.log("--------------------------문제 탄생화 알려주는 프로그램----------------------------------")
console.log("--------------------------문제 끝----------------------------------")

/* const flower_text = document.querySelector("#flower_text")
const flower_btn = document.querySelector("#flower_btn")

flower_btn.addEventListener("click", function(){
    flower_text.value = birthday_flower;
    flower_text = ""
    alert("")
    if(birthday > 0 && birthday < 13){ // 1 ~12조건 
        // 위 조건이 참일때 추가 세부조건을 만들어주는 중첩 IF문 위치 
        if(birthday == 1){
            birthday_result = `${birthday_flower[birthday-1].month}월의 탄생화는 ${birthday_flower[birthday-1].flower}이고 꽃말은 ${birthday_flower[birthday-1].content}입니다.`    
        }
        alert(birthday_result)
    } else {
        alert("잘못입력하셨습니다. 1~12월 중에 입력해주세요")
    }
}) */