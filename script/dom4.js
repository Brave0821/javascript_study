// querySelector 첫번째
// 아이디 클래스 태그 이름을 모두 가져 올 수 ㅇ ㅣㅆ다.

const h1Tag = document.querySelector("h1");
console.log(h1Tag); // 바디에 있는 요소들 기준으로 첫번째 대상만 보여준다.

const LiTag = document.querySelector("li");
console.log(LiTag); // 바디에 있는 요소들 기준으로 첫번째 대상만 보여준다.

const titleCls = document.querySelector(".title"); /* 클래스인지 아이디인지 표시해줘야한다. */
console.log(titleCls);

const listCls = document.querySelector("li.list"); /* li안에 클래스 찾을떄  */
console.log(listCls);

const main_title = document.querySelector("#main_title"); /* 클래스인지 아이디인지 표시해줘야한다. */
console.log(main_title);


// querySelector 첫번째인데 
// querySelectorAll 
// 지정된 아이디 클래스 태그 이름을 가진 첫번째 HTML 요소를 찾아 HTML 노드로 반환합니다.

// 여러개의 노드 리스트를 반환할 수 이ㅛ고 
// 첫번째 노드 리스르를 반환할 수 있습니다.

console.log("-------------------------------------------------")

const listAll = document.querySelectorAll(".list");
console.log(listAll);
console.log(listAll[1]);
console.log(listAll[2]);
console.log(listAll.length); // 3 

console.log("----------------데이터타입 변환 메서드---------------------------------")
// 명시적 개발자가 직접 데이터 타입을 결정하는 것 
let a = 10  // 숫자
// console.log(typeof a);
// a = "10"; // 문자
// console.log(typeof a);

console.log("----------------------------------------------------------------------")

// 암시적 형변환 개발자 동의없이 자동으로 형변환

// prompt가 받는 데이터값은 반드시 문자열로 처리된다.
// let age = window.prompt("당신의 나이는?"); // 다 문자로 인식  윈도우 프롬프트의 값을 내보낼때  
// let age = Number(window.prompt("당신의 나이는?")); 
// console.log(typeof age);
// console.log(age);
// console.log(Number(age));
// age += 1
// console.log(age); 


/* 문자에 1을 더해서 201이 되버림. */

/* 
    객체 속성 메서드()
    window(객).prompt(메)
    console(객).log(메) 
    변수는 오른쪽에서 계산하고 좌측에 대입한다.

---------------------------------------------------------------------------------------
    
    객체 메서드()
    메서드(객체.속성)
    메서드(객체.메서드)
    메서드(객체.속성.메서드)

    xx 안 됨
    객체.메서드().메서드()x
    객체.메서드().속성 x 
*/

/* dom4  ------------------------------------------------------------------------------------ */
//querySelector 하나일때 all 여러 개 
const textInput = document.querySelector("#text");
// const numInput = Number(document.querySelector("#number")); ->  객체를 넘버로 바꾸는건 말이 안되기 때문에 그러면 만약에 여기를 넘버로 묶고 싶다면?
const numInput =  document.querySelector("#number");
const resultBtn = document.querySelector("#btn");
console.log(textInput,numInput,resultBtn);
// 함수만들기 
//value - > 속성 메서드 로그, 객체는 text_Input

function func1(){

    console.log("test")
    console.log(textInput.value)
    // console.log(numInput.value)
    // console.log("number")
    /* 미리 입력된 값 */
    // console.log(t,numInput);
    console.log(typeof textInput);
    // 내가 짓는 변수명 - > 객체(태그)
    console.log(typeof textInput.value); /* 텍스트 인풋의 값을 본다 - > string  */
    console.log(Number(numInput.value)+1); // 숫자로 인식. 
    // console.log(typeof numInput.value);

    let result = Number(numInput.value)
    console.log(typeof result)
    console.log(result+1)
    
};
