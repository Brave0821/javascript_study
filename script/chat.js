// 안녕 chat_txt에 입력 후 send_btn을 클릭하면 
// chat_list에 <li> 태그로 chat_txt에 입력한 안녕 값을 출력하기
const word = document.querySelector("#chat #chat_txt");
/* 텍스트창 */
const send_btn = document.querySelector("#chat #send_btn");
/* 버튼 */
console.log(word, send_btn); // 확인
const chat_list = document.querySelector(".chat_list");
/* chat_list는 전체창  */
console.log(chat_list)
const word_create = document.createElement("ul")
/* ul을 생성 */
console.log(word_create); // 확인
// count.innerText = product;
console.log("-------------------------------------------------------------------")
send_btn.addEventListener("click", function () {
    word_create.innerHTML += `<li>${word.value}</li>`;
    /* <li>${word.value}</li> - > chat_txt(word)에 입력한 
     타입창에 저장되는거 전체창에 글이 올라간다. */
    /* type창에 입력 시 콘솔에 나옴*/
    chat_list.appendChild(word_create);
    word.value = ""; /* 초기화 */
    // console.log(word);
})
console.log("-------------------------------------------------------------------")
// word 에 벨류하면 입력하면 나올 수 있게 