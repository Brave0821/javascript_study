// 참일떄 결과 거짓 결과를 나눌 수 있다.
// 특정 조건이 거짓일 때 실행할 코드 블록을 정의합니다.

const userId = document.querySelector("#userId")
const userLogin = document.querySelector("#userLogin")
console.log(userId,userLogin)

userId.addEventListener("blur", () => {
    /* console.log("성공!") */
    // 조건 : id가 admin이면 관리자 환영, 아니면 일반회원환영
    if (userId.value == "admin") {
        console.log("관리자환영")
    } else {
        console.log("일반회원환영")
    }
})


userLogin.addEventListener("click", ()=>{
    // userId.value
   if(userId.value == "admin") {
        window.alert("관리자환영")
   } else {
        window.alert("다시 입력해주세요")
   } 
})
/* plus.addEventListener("click",price_plus); */