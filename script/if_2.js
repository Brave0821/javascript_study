// 1. 'admin' 아이디만 접근할 수 있는 페이지 
let userId = "admin";
let userPw="1234"

if(userId == "admin") {
    console.log("관리자님 어서오세요 :D")
}

if(userId == "admin" && userPw=="1234"){
    console.log("관리자님 어서오세요:)")
}

/* 
논리연산자 우선순위 
NOT >> AND >> OR 
if(걸음 >= 5000걸음이면)

-------------------------------------------------
AND(&&): 양쪽 피연산자가 모두 참일 때 결과는 참
OR(||): 양쪽 피연산자 중 하나라도 참이면 결과는 참
NOT(!): 피연산자의 논리 값을 반전함. 참이면 거짓 반환  */


// 2. "admin" 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지 

console.log("========================3번==========================")
// 3. 사용자의 아이디를 입력받고 admin이 아니면 일반회원입니다 출력.

/* const userIdInput = prompt("아이디를 입력하세요")
 */
// if(userIdInput != "admin"){
//     console.log("일반회원입니다.")
// }

console.log("=========================4번============================")

/* userNum = prompt("짝수인지 홀 수 인지 맞춰볼게요")
if(userNum%2 == 0) { 
    console.log("짝수!")
} */
/* 2로 나웠을 때 0과 같을 떄 짝수 1쓰면 홀수 */

/* if(userNum%2) { 
    console.log("홀수!") 
} */
/* 2로 나웠을 때 0과 같을 떄 짝수 1쓰면 홀수 */
// if 따로 쓰면 따로 동작한다.
/* if(userNum%2 == 1) 비교연산자 없어도 그 결과가 참이면 결과가 나온다. 1 생략 */
/* 
if(true){
    
} */
// 무조건 실행되는 것 
// false 넣으면 무조건 실행 x 

// 조건이 참일 떄 이걸 실행해라 if(1), if(true) {}
// 10살 이상만 탈 수 있는 놀이기구 , 나이를 물어보고 10살 이하면 탑승불가 

/* const userAge =  window.prompt("현재 나이를 입력해주세요")

if(userAge < 10){
    console.log("탑승불가입니다.")
}
*/
// 10살 이상이면서 키가 120이상인 애만 탈 수 있는 놀이기구 
// 나이와 키를 물어보고 조건이 맞으면 탑승가능 

/* const userAge = window.prompt("나이를입력해주세요")
const userT = window.prompt("키를 입력해주세요")

if(userAge >= 10 && userT >= 120) {
    
    console.log("탑승가능입니다.")
}
 */
console.log("=========================4번============================")

const printBtn =document.querySelector("#printBtn")

// printBtn.addEventListener("click",function(){})
printBtn.addEventListener("click",()=>{
  let printQ = confirm("인쇄할까요?") // 확인 / 취소
    if(printQ == true){ 
        console.log("인쇄")
        print()
    }
})

console.log("=========================================================")

const numInput = document.querySelector("#num")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
const price = document.querySelector(".price")
let num = 1 // 진짜 사용하려는 값
let total = 1000;

//초기수량 증가
numInput.value = num

plusBtn.addEventListener("click",()=>{
    if(num < 10){ // 11이 아닌 이유 10까진 참이라서 11까지 오른다.
        num++ /* 해당 조건에 맞을 때 만 증가되라 그래서 여기 있는 것 */
        console.log(num)
        // 버튼 클릭 시 수량 최대 10개 증가.
        numInput.value = num
        // 수량이 증가 될떄 가격 증가 
        total = num * price
        priceOutput.innerHTML = total.toLocaleString("ko-kr")+"원"
    }
    // 수량이 10개 됐을 때 버튼을 또 누르를 때 실행메세지
    if(num === 10){
        alert("최대구매수량입니다.")
    }
    console.log("if밖", num)
})

plusBtn.addEventListener("click",()=>{
    price_money++
    price.value = price_money
})



minusBtn.addEventListener("click",function(){
    if(num > 1){
        num--
        numInput.value = num
    }
    
    if(num == 1) {
        alert("최소구매수량입니다.")
    }
})



/* bank_total.value = total.toLocaleString("kp-kr"); /* 현재 잔액에 , 표시 */
/* bank_total.value은 단순히 보여주는용 - > 토탈 */
