// window.
const btn = document.querySelector("#btn")
const top_btn = document.querySelector("#top")
const header = document.querySelector("header")

top_btn.style.display="none";
header.style.transition= "top 0.3s"
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 300){
        header.style.top = "-50px" // h1의 크기 
    } else {
        header.style.top = 0
    }
    // offsetTop 
    // console.log("성공")
    // console.log(window.pageYOffset)
    // btn.innerHTML = window.scrollY
    btn.innerHTML = window.pageYOffset
    //btn.innerHTML = Math.floor(window.pageYOffset) // 소수점 안나옴
    if(window.pageYOffset > 200 ){
        top_btn.style.display = "block"
    } else {
        top_btn.style.display = "none"
    } 
})
// 위로 올라가는 버튼은 여기다 줘야한다. 

/* next.addEventListener("click",()=>{
    // bg1.scrollBy(1400, 0) // [0]붙인건 첫번째 자식이니까
        bg[0].scrollBy(1400, 0)
}) */

// top_btn.addEventListener("click",()=>{
//     bg[0].scrollBy(200, 0)
// })




// window.scrollTo(0, 200) 밑으로 내리면 화면 크기에 맞게 나온다.