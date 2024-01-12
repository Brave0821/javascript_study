// 참일떄 결과 거짓 결과를 나눌 수 있다.
// 특정 조건이 거짓일 때 실행할 코드 블록을 정의합니다.

const userId = document.querySelector("#userId")
console.log(userId)

userId.addEventListener("blur", () => {
    /* console.log("성공!") */
    // 조건 : id가 admin이면 관리자 환영, 아니면 일반회원환영
    if (userId.value == "admin") {
        console.log("관리자환영")
    } else {
        console.log("일반회원환영")
    }
})