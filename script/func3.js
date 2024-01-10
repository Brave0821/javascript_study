// 콜라만 나오는 자판기

// function japangi(){
//     console.log("콜라")
// }

// japangi() /* 호출 콜라를 뽑음 */

// function japangi2(){
//     console.log("사이다")
// }

// japangi2()/* 호출 사이다를 뽑음 */
// // 함수 하나로 나오게

// 콜라와 사이다 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){ /* 매개변수 drink 생성  = let drink */
    console.log(drink)
}

japangi("콜라") /* drink로 대입 */
japangi("사이다")
japangi("커피")
japangi("탄산수")

/* 함수 내 데이터가 변경될 때 매개변수 사용 호출 할 때 마다 달라질때 데이터를 받기 위해서 매개변수가 있다.
 */

function japangi_v2(drink, num){
    console.log(drink+num+"잔 나왔습니다.")
}

japangi_v2("탄산수",2)
japangi_v2("콜라",10)
japangi_v2("커피", 2)

console.log("---------------------------------------------")
// 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기

function calc1(num1, num2){
    console.log(num1+num2+`입니다.`)
}

calc1(10,10);
calc1(30,10);
calc1(60,10);

console.log("-----------------------------------------------------")
// 피연산자 2개와 산술연산자를 설정해서 자유로운 계산이 가능한 함수 만들기

// let result 

// function calc2(num1, num2, oper){
//     result = oper=="*" ? num1 * num2 : null; /* *, / 변경해서 */ 
//     console.log(`${num1} ${oper} ${num2} = ${result}`)
// }

// calc2(10, 10, "*");
console.log("-----------------------------------------------------")
// 함수의 데이터 값 반환 return
// let total = 0
// function func1(num){
//     total = num+1
//     return total  
//     /* return은 무조건 함수 밖으로 나간다. 그러니 리턴 위에서 사용하기 - > 근본적인 입 */
// }
// console.log(func1(5));
// window.alert(func1(10))
/* func1(5); */

console.log("-----------------------------------------------------")

// 4개 버튼 클릭 시 "접근 불가" 공통 메시지 띄우기 
// 로그인(콘솔) 구매하기(팝업) 장바구니(body) 관리자페이지(팝업)

const loginBtn = document.querySelector("#loginBtn")
const buyBtn = document.querySelector("#buyBtn")
const cartBtn = document.querySelector("#cartBtn")
const adminBtn = document.querySelector("#adminBtn") 
console.log(loginBtn,buyBtn,cartBtn,adminBtn)

console.log("---------------------------------------------")

function ban(string){ /* error_message  */
    return string +"접근불가"
}

loginBtn.addEventListener("click", function(){
    console.log(ban("로그인"))
})

buyBtn.addEventListener("click", function(){
    window.alert(ban("구매하기"))
})

cartBtn.addEventListener("click", function(){
    document.write(ban("장바구니"))
})

adminBtn.addEventListener("click",function(){
    window.alert(ban("관리자페이지"))
})

console.log("---------------------------------------------")