// 논리데이터(Boolean)
/*
참 또는 거짓 2가지 값 중 하나의 데이터 형식 조건문, 논리연산자, 논리적 판단 등에 사용합니다.

ex) 날씨가 맑으면(참) 흐리면(거짓) 산책을 갑니다.! 거짓이면 산책 안감
ex) 날씨가 흐리면 방콕을 합니다.!


비교연산자 

2값 이상을 비교하여 그 결과를 논리데이터로 반환하는 연산자 

일치연산자 1(x==y) 2(x===y) - > 1. xy는 같다. 그렇므로 참 다르면 거짓 //    
2번은 xy가 완벽하게 일치하는가? === 데이터 타입까지 부분해서 완벽하게 일치하는지? 

부등연산자 (x!=y) (x!==y) // 1. x와y가 다른가? 다르면 참 // 1 같으면 거짓 
// 2번은 1!="1"  =1개라서 타입 구분 x 1 = 1 로 받아들여서 거짓

대소 비교 연산자 (x<y) (x>y) (x<=y) (x>=y)

(논리연산자)를 이용한 복합비교연산자 
(x>5 && y<30) (x === 10 || y === 15)

&& - and 그리고 || or 또는 이라고 부름.

*/

// 논리데이터
console.log(true) // true == "참" == 1
console.log(false)// false == "거짓" == 0
console.log("false") // 문자열
console.log(true+1) //true 2 //2
console.log(true+true) // 2 문자가 아니기에 트루 자체가 1임.
console.log(true+false) // 1
console.log(true+true+"true") // 2true 숫자+문자 
console.log(typeof true); // boolean = 논리데이터 string = 문자랑 같음.
console.log(typeof(true+true)) // 2를 넘버로 
console.log(typeof false+10) // 괄호를 안적어서 논리10
console.log("----------------------------------------------------------")

console.log("42" == 42) // ==개라서 true == 2개는 데이터타입 구분x  //  === 데이터 타입 구분
console.log("42"=== 42) // ※엄격방식 false === 데이터 타입이 같기 때문에.
console.log(10 != "10") // != 다른가?  false 자료가 같기 때문에 데이터 타입 무시 
console.log(10 !== "10") // ※엄격방식  true(데이터 타입이 다르기 때문)
console.log(5 < 7) // 5는 7보다 작은가?
console.log(5 > 7) // 5는 7보다 큰가?
console.log("5" < 7) 
console.log("a" < 7)
console.log(10 <= 20) // true
console.log(10 >= 20) // false
// 글자 수 제한 기능에 응용이 가능하다.
console.log("============================비교연산자 예제================================")

let a = 10 
let b = 20 
let c = "15"
let d = 15 
let result 

result= a == b 
// == a와 b는 같은가? 비교해서 논리데이터를 출력한다. 
result= c === d
result= c < a
result= b > d // true
console.log(result)

console.log("=====================논리연산자 시작===========================")

/* 
논리연산자 

논리적인 조건을 결합하거나 변경하는 데 사용하는 연산자 

AND(&&) OR(||)NOT(!)

AND(&&): 양쪽 피연산자가 모두 참일 때 결과는 참
OR(||): 양쪽 피연산자 중 하나라도 참이면 결과는 참
NOT(!): 피연산자의 논리 값을 반전함. 참이면 거짓 반환 
*/

a = true;
b = false;

// 논리연산자란?
// 비교연산 또는 논리데이터를 좌우 두 값으로 두고 논리적으로 비교하는 연산자

result = a && b   // true && false == false // 둘 다 같아야 참 다르면 거짓
console.log(result) // id pw가 맞고 틀리다 구분할떄  1(and)

result = a || b // true || false = true  2(or)
console.log(result)

console.log(!a) // not a로 반전해서 false로 
console.log(!b) // not b로 반전해서 true  3(not)
// 대입을 안하면 데이터는 바뀌지 않음  
console.log(a, b) // 바뀌지 않음 / 원본데이터는 영향없음!

/* 
논리연산자 우선순위 
NOT >> AND >> OR 
*/

/* 
논리연산자 우선순위 
NOT >> AND >> OR 
-------------------------------------------------
AND(&&): 양쪽 피연산자가 모두 참일 때 결과는 참
OR(||): 양쪽 피연산자 중 하나라도 참이면 결과는 참
NOT(!): 피연산자의 논리 값을 반전함. 참이면 거짓 반환  */

result = !(true || false) && !false; 
// 하나라도 참이면 참 && &&는 좌우 모두 참이면 참
console.log(result)


console.log("============================끝================================")
console.log("============================조건문if================================")

/* 
조건문 if 

주어진 조건에 따라 결과가 참/거짓으로 나뉠 떄 참에 대한 결과를 실행

조건문 시작 - > 날씨가 맑으면 산책간다. - > if(날씨==맑음) - > 같으면 참이기에 window.alert("산책")

*/

// 조건문 
/* 

1. 목표 세우기 (날씨가 맑으면 산책 간다.!)

1-1. 세부목표나누기 

1-2조건 날씨가 맑으면
1-3조건 참일 때 실행 : 산책간다.

2조건문 문법 정리 
2-1-1조건 : if(날씨가 맑으면)
2-2조건 결과가 논리데이터로 나오도록 비교연산자 사용 if(날씨==맑다) 
조건 참일 때 실행 : 실행 메서드 결정 
window.alert(산책)
*/
console.log("==========================================================================")
/* 1. 목표 세우기 (날씨가 흐리지 않으면 운동 한다.)

1-1 세부목표 나누기 

1-2 날씨가 흐리지 않으면 
1-3 true(참)일 때 운동을간다.

2 조건문 문법정리 

2-1 if(날씨가 흐리지 않으면)
2-1-1 결과가 논리데이터로 나오도록 비교연산자 사용 if(날씨 != 흐림) - > 흐리지않다 - > 맑다 부정.
2-2 조건 참일 때 실행 : 실행 메서드 결정 
2-2-1 window.alert(운동)
*/
console.log("==========================================================================")
// 목표세우기 (하루 걸음 수가 5천걸음 이상이면 간식을 먹는다.)

/* 
1-1 세부목표 나누기 

1-2 하루 걸음 수가 5천걸음 이상이면.
1-3 간식을 먹는다.

2 조건문 문법정리 

2-1 if(걸음 >= 5000걸음이면)
2-1-1 결과가 논리데이터로 나오도록 비교연산자 사용 if(걸음>=5000)
2-2 조건이 참일 때 실행 : 실행 메서드 결정 
2-2-1 window.alert(간식먹기)
>= 이상

*/
console.log("==========================================================================")

const x = 10;
const y = 20;

// 1. x가 y보다 작을 때 참

if(x<y){
    console.log("x는 y보다 작다.")
    // 참이여야 위에 나옴.
}

// 2. x가 y와 다를 때 참
if(x!==y){
    console.log("x는 y와 다르다.(참)")
}

//3. x와y가 같으면 참
if(x===y){
    console.log("x는 y와 같다.")
}