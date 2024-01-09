// 문자열 연산자 (피연산자 중 하나라도 문자일 경우)
console.log("holle"+"world")
console.log("1"+2)
console.log(10+"Number()") // 문자
console.log("num"+(2+2)+"ber") // num 4 ber
console.log("안녕하세요".length)
// 문자열 + 삼항연산자 

/* const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
console.log(`이번 달 1등 학생은 ${max_score_name}님 입니다.`)
 */

// textarea 영역에 100자 이상을 쓰고 리뷰 등록 버튼 클릭 하면 "등록" 팝업 출력 
// textarea 영역에 100자 이하을 쓰고 리뷰 등록 버튼 클릭 하면 "100자 이상 쓰세요 팝업 출력"
// 
const textarea = document.querySelector("#re");
console.log(textarea)

const resultBtn = document.querySelector("#resultBtn")
console.log(resultBtn)

let result; /* 추가 */

resultBtn.addEventListener("click",function(){
    // textarea > 100 = "등록"
    console.log(textarea.value)
    console.log(textarea.value.length) // 길이가?
    result = textarea.value.length > 100 ? "등록 ": "100자 이상 입력하세요"
    window.alert(result)
})
// 비밀번호 등 사용가능 
