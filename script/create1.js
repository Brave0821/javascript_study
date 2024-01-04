/*  innerHTML - > 속성이고 앞에 객체가 필요함. 뒤에는 대입연산자 = 필요 
`객체.innerHTML;` - > 특정 객체에 자식 자손에 해당하는 HTML을 읽는 것 
`객체.innerHTML = 값;` - >  HTML 삽입 및 변경
 html 태그 사용가능 

 innerText - > 화면에 보여줌?
`객체.innerText;` 객체의 자식, 자손 텍스트 노드 읽기 (HTML X)
`객체.innerText= 값;` - ? 텍스트 노드 삽입 및 변경 (HTML x)

# appendChild 
메서드니까 앞에 객체 와 속성이 들어갈 수 있다.

객체.속성.appendChild() 메서드는 항상 맨 뒤에 
객체.객체.appendChild()
객체.속성.appendChild()
갹체.속성.속성.appendChild()

appendChild()? - > 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가.

# createElement 
메서드니까 앞에 객체 와 속성이 들어갈 수 있다.

앞에 document를 가진다. 무조건. 
`document.createElement()`
요소 노드 js 내에서 동적인 용도로 생성할 경우  */

// 아이디찾기 -인증번호 받기 
/* 
1. 인증번호 받기를 클릭 시에 버튼 다음 형제 위치에 인증번호가 발송되었습니다. 출력하기  
form은 블록이니까 블록으로 p ? 
*/

//1. 인증번호 받기를 클릭 시에 버튼 다음 형제 위치에 인증번호가 발송되었습니다. 출력하기

const id_search =document.querySelector("#id_search");
// const id_search =document.querySelector("#id_search form");
const country_code = document.querySelector("#country_code");
const tel_num = document.querySelector("#tel_num");
const authentication_btn = document.querySelector("#authentication_btn"); /* 버튼 */
console.log(id_search,country_code,tel_num,authentication_btn) // 확인

const word_create = document.createElement("span") /* di_search_massge */
console.log(word_create) // 확인

authentication_btn.addEventListener("click", function(){
    word_create.innerText = "인증번호가 발송되었습니다:D";
    id_search.appendChild(word_create); /*  */
    // id_search.insertBefore(word_create, id_search.firstElementChild) 위에서 나오는 것 
    //  id_search.querySelector("form").appendChild( word_create) 풀이 방식.
    // authentication_btn.value= "";
})

/* 2. 인증번호 입력칸 #authentication_btn 값을 입력하면 
   form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기 */


const authentication_input = document.querySelector("#authentication_input")
const message_error = document.createElement("p")
const frm = document.querySelector("#id_search") // 변수 생성.

message_error.innerText="인증번호가 틀렸습니다."
console.log(authentication_input, message_error);

authentication_btn.addEventListener("blur", function(){
    console.log("성공!") 
    frm.insertBefore(message_error, frm.firstChild)
    // frm.appendChild(message_error);
})

/* input or blur */















//  id_search.querySelector("form").appendChild( word_create)

// 마지막 자식 위치 appendChild 마지막 기준.
// 객체. appendChild(node) 마지막 자식 노드 추가.
// 객체.insertBefore(삽입node,기존 시작자식 노드) 첫번쨰 자식 노드 추가 
// <form action="#" method="post"> 밑이면 ? 
// form(부모).insertBefore(삽입, firstChild)