/* const qa = prompt("이동 방향을 입력하세요!","왼쪽, 오른쪽, 가운데 하나로 입력!")

if(qa == "왼쪽"){
    alert("왼쪽 한 칸 이동!")
} else if(qa == "오른쪽"){
    alert("오른쪽 한 칸 이동")
} else if(qa == "가운데"){
    alert("가운데로 한 칸 이동")
} else {
    alert("선택안하셨습니다.!")
}
 */
/* 
논리연산자는? 
&& and 
|| or 
! not 

&&는 둘 다 참이어야 참 
||는 둘 중 하나만 참이여도 된다.

*/

/* const qa2 = prompt("왼쪽 오른쪽 가운데를 선택하세요!")

if(qa2 == "왼쪽" || qa2 == "가운데" || qa2 == "오른쪽"){
    alert(`${qa2} 1칸 이동`)
} else {
    alert("선택하지 않으셨습니다.")
} */

console.log("-------------------학점 계산기-----------------------")

const score = prompt("시험점수를 입력하세요", "0점 ~ 100점 사이값")

let result = ""

if(score >= 0 && score < 101){
    if(score >= 90){
    result = "A"
} else if(score >= 80){
    result = "B"
} else if(score >= 70){
    result = "C"
} else if(score >= 60){
    result = "D"
} else {
    result = "F"
}
alert(`당신의 학점은 ${result}학점 입니다.`)
}else{
    alert("잘못 입력하셨습니다.")
}

const birthday = Number(prompt("당신의 생일은 몇월인가요?"))
let birthday_result = "" // 최종값
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

if(birthday > 0 && birthday < 13){

   /*  if(birthday == 1||2||3||4||5||6||7||8||9||10||11||12){
        user_birthday_month = birthday_flower[birthday-1]
    } */

    if(birthday == 1){
        user_birthday_month = birthday_flower[birthday-1]
    } else if(birthday == 2) {
        user_birthday_month = birthday_flower[birthday-1]
    } else if(birthday == 3){
        user_birthday_month = birthday_flower[birthday-1]
    }


    birthday_result = `${birthday_flower[birthday-1].month}월의
    탄생화는 ${birthday_flower[birthday-1].flower}이고
    꽃말은 ${birthday_flower[birthday-1].content}입니다.`    
    alert(birthday_result)

} else {
    alert("잘못입력하셨습니다. 1~12월 중에 입력해주세요")
}