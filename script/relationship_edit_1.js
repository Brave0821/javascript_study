/* 
아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
입력하신 내용을 다시 확인해주세요.

아이디 미 입력시 아이디를 쓰세요에 응용가능.
*/

// 로그인 버튼을 클릭 시 위 메시지가 form 안에서 span.error 출력 

const error = document.querySelector("#frm .error");
const loginBtn = document.querySelector("#frm #loginBtn");
/* js에서 직접 생성 아까는 생성된 곳 만든거임. */
const error_create = document.createElement("ul")
console.log(error_create)
console.log(error,loginBtn);

// fprm에 마지막 자식 위치에 createElement 생성한 노드 추가.
// 삽입노드 += 값  삽입노드에 따로 값을 대입
// ** 중요 객체.appendChild(삽입노드) 매우 중요함.!!!! brave
// 객체.innerHTML += "삽입노드" 대입 복합 

loginBtn.addEventListener("click", function(){
    // error.innerHTML = `<em>아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 
    // 입력했습니다.<br> 입력하신 내용을 다시 확인해주세요.</em>` 
    // console.log(error)
error_create.innerHTML += "<li>아이디 입력하세요!<li>";
error.appendChild(error_create); 
console.log(error); 
}) /* html은 태그 들어갈때 사용  += 복합 대입은 더한다. */
