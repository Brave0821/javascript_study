/* 
https://webty.tistory.com/178

1.window.scrollTo(x,y) 지정된 x, y 좌표로 스크롤 이동 함수 

*/
// x는 축이 없으니 0 y 200
// //window.scrollTo(0, 200) 

// window.onload = () => { // 로드 되었을 떄 
//     console.log("성공")
//     window.scrollTo(0, 200) 
// }

/* 
화면을 읽었을 때 이것 보여줘 지만 둘 다 
window.onload: dody 리소스(동영상 이미지 css)를 전부 읽고 onload 함수를 실행 

DOMContentLoaded: 리소스를 기다리지 않고 바로 함수 실행
*/

// DOMContentLoaded - >  DOM 구성이 완료되었을 때 document 객체에서 실행됩니다.
document.addEventListener("DOMContentLoaded",()=>{
    console.log("성공?")
    /* window.scrollTo(0, 200) */
    
    setTimeout(()=>{
        window.scrollTo(0, 200) /* 뒤에 숫자 바꾸면 내려감 */
    },0) /* 뒤에 숫자 후에 실행해라  */ 
})

const btn = document.querySelector("#btn")
console.log(btn)

btn.addEventListener("click",  ()=>{
    // window.scrollTo(0, 1000) // 버튼 클릭 시 밑으로 1000 내려감
    // window.scrollTo({left:0, top:1000})
    /* window.scrollBy(0, 200) */
    /* 다른 함수나 이벤트 + 조합할때 중괄호 사용해서 처리 */
    window.scrollTo({left:0, top:bg[2].offsetTop})
})

const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
// const bg1 = document.querySelector(".bg1") // 밑으로 변경
const bg = document.querySelectorAll(".bg") 


/* bg1.style = "scroll-behavior:smooth";  // .bg { scroll-behavior: smooth;} */

/* 부드럽게 움직임 */

next.addEventListener("click",()=>{
    // bg1.scrollBy(1400, 0) // [0]붙인건 첫번째 자식이니까
        bg[0].scrollBy(1400, 0)
})
prev.addEventListener("click", ()=>{
    // bg1.scrollBy(-1400, 0)
        bg[0].scrollBy(-1400, 0)
})

console.log("===================================================================")

// window.pageYOffsert  웹문서가 수직으로 얼마나 스크롤 됐는지 px 단위로 반환하는 속성
