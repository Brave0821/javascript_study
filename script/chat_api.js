// 채팅창 숨기기 
// 챗봇 상담 클릭하면 채팅창 나타가기 (아래 -> 위로 자연스럽게 나타나기)
// 챗봇 상담 클릭 시 보이면 숨기기 / 안보이면 보이기 

const chat_container = document.querySelector("#chat_container") 
const chat_message = document.querySelector("#chat_message") /* 나는 학생이야  */
const user_input = document.querySelector("#user_input input") /* 입력되는 곳 */
const chat_btn = document.querySelector("#user_input #chat_btn") /*  입력 전송 버튼 */
const robot_btn = document.querySelector("#robot")
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = "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";
// api ai 연결 

async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}
/* api ai 연결  */

// 질문 입력 후 전송버튼 클릭하면 나오는 자바스크립트 쓰는 곳
chat_btn.addEventListener("click", async()=>{
    let message  = user_input.value
    addMessage("you", message)
    user_input.value = ""
    // ai
    let aiMessage = await fetchAIResponse(message); /* ai서버로 보내라. */
    addMessage("AI",aiMessage);
})

//enter event
user_input.addEventListener("keydown",(e)=>{
    if(e.keyCode === 13){
        chat_btn.click(); // 강제 클릭 활성화
    }
})


//메시지가 value값으로 받은 메세지가 처리되는 함수 
function addMessage(target, contents){
    const messageElement = document.createElement("div")
    messageElement.classList.add("message")
    messageElement.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(messageElement)
}

/* const chat_showhide =  */
/* const chat_robot = document.querySelector(".chat_bot #robot") // 챗봇 상담 */

chat_container.classList.add("hide")

/* console.log(chat_word,chat_btn,chat_robot) */

robot_btn.addEventListener("click",()=>{
    console.log("성공")
    chat_container.classList.toggle("hide")
    chat_container.classList.toggle("show")
    }) 
    

/* 
li[1].classList.add("design_set1","design_set2") 
li[1].classList.remove("design_set1","design_set2"); // 삭제
*/
/* chat_message[0].classList.add("design_block")
chat_message[0].classList.remove("design_none") */




/* 

li[1].classList.add("design_set1","design_set2") 
li[1].classList.remove("design_set1","design_set2"); // 삭제
// classList.add() - > 함수 
// 버튼 제어 class

btn.addEventListener("click", ()=>{
    li[2].classList.toggle("design_set1")
})

// 보였다 안보였다 토글기능.

onoff.addEventListener("click", ()=> {
    li[0].classList.toggle("showhide")
})
*/