/* 
매개변수 : 
함수 내 변경 데이터가 있을 경우 함수 호출 시 변경 인수 값을 매개변수에 전달하기 위해서 

변경 인수 값 - > a (변경인수값)
return - > 호출할 때 실행결과가 매번 다른 경우 데이터 값만 함수 외부로 반환할 때 사용 
주의할 점 - ? 리턴을 만나면 함수가 종료된다. 함수 내부 기준. 리턴 아래 스크립트를 읽지 못한다.

function calc1(num1, num2){
    console.log(num1+num2+`입니다.`)
}

calc1(10,10);
calc1(30,10);
calc1(60,10);

console.log("-------
*/

// 시도 1

function dan999(num1, num2){
    console.log(`${num1} X ${num2} = ${num1 * num2}`)
    return /* dan * num */
}
dan999(2 , 1);
dan999(2 , 2);
dan999(2 , 3);

console.log("------------------------------------")
// 시도2
const dan99DOM = document.querySelector(".dan99")
let dan99Total = ""

function dan99(dan) {
    dan99Total += `${dan}*1= ${dan*1}<br>`
    dan99Total += `${dan}*2= ${dan*2}<br>`
    dan99Total += `${dan}*3= ${dan*3}<br>`
    dan99Total += `${dan}*4= ${dan*4}<br>`
    dan99Total += `${dan}*5= ${dan*5}<br>`
    dan99Total += `${dan}*6= ${dan*6}<br>`
    dan99Total += `${dan}*7= ${dan*7}<br>`
    dan99Total += `${dan}*8= ${dan*8}<br>`
    dan99Total += `${dan}*9= ${dan*9}<br>`
    dan99Total += "<hr>"
    return dan99Total
}

/* 2단 ~ 9단 */
dan99DOM.innerHTML = dan99(2)
dan99DOM.innerHTML = dan99(3)
dan99DOM.innerHTML = dan99(4)
dan99DOM.innerHTML = dan99(5)
dan99DOM.innerHTML = dan99(6)
dan99DOM.innerHTML = dan99(7)
dan99DOM.innerHTML = dan99(8)
dan99DOM.innerHTML = dan99(9)

console.log("-------------------문제2-------------------")

let deposit_pay /* ★ 입금액 3을 위해서 애를 만든다.  다른데서도 써야하기에 전역변수 만듬 */
const depositBtn = document.querySelector("#depositBtn") /*★ 2 첫번쨰 동작  클릭을 해야해서 이 변수를 만든다.*/
let total = 10000;  
let total_message = ""

function deposit_fun(){ 
    // 1. 총잔액 + 입금액 
    total + deposit_pay; /* 입금을 총 잔액에 넣기 위해서  */
    // 2. 입금액과 총 잔액을 대입받는 변수
    let total_result = (total += Number(deposit_pay)).toLocaleString("ko-kr"); 
    /* 입금액 + 총잔액 = total_result */
    total_message = `${deposit_pay}원 입금하셨습니다. 총 잔액은 ${total_result}원 입니다.` 
    total_result
    return total_message // 1, 2 변수값 return
}

depositBtn.addEventListener("click", function(){              /* ★1 첫번쨰 동작  클릭을 해야해서.*/
    console.log("성공")
    deposit_pay = Number(prompt("입금 금액을 입력하세요"))      /* ★ 3 프롬프트가 필요하다. 3을 위해서  5 프롬프트는 문자라서 넘버 붙여줌  */
    window.alert(deposit_fun())  /*★ total_message 여기 들어가서 실행됨 */
})

/* prompt 입금액을 입력하고 버튼을 클릭하면 deposit_fun 함수가 호출되서 
0000원 입금하셨습니다. 총 잔액은 0000원 입니다. 출력하기.  */

/*

1. depositBtn.addEventListener("click", function(){}) - >  생성  입금을 위해 클릭을 해야하니까.
2. const depositBtn = document.querySelector("#depositBtn") - > 1번을 위한 변수를 생성한다.
3.  deposit_pay = Number(prompt("입금 금액을 입력하세요")) - > 프롬프트가 필요하다.
4. let deposit_pay 입금액 3을 위해서 애를 만든다.

*/
