/* 
<원래방식>
DOM.style.속성 = 값 
DOM.style.backgroundColor = 값
원래 방식 이러면 속성쪽을 계속 변경 - > 
--------------------------------------------------
<배우는 방식>
.design_set1 {
    color
    background
    display
}

이게 전부 적용되기에 관리가 쉽다.
https://webty.tistory.com/59
*/

const li = document.querySelectorAll(".list li")
const btn = document.querySelector("#design_add")
const btn2 = document.querySelector("#onoff")
console.log(li, btn, onoff)
// inline style 스타일로 적용되는 css 명령어 활용 태그 내부에 적용  
// ★★ <태그안에 스타일로 직접 적용된게 인라인 스타일> 
li[0].style.backgroundColor = "green"
// 불편한점 우선순위가 가장 높아 다른 css 충돌없이 우선적용할 수 있으showhide나 
// ★★(배우는 이유) css 속성이 여러개라면 하나 하나 개별 명령을 해야해서 작성이 불편하고 효율이 안좋다.
li[0].style.borderTop = "2px solid red"
li[0].style.color = "white"
// 제한없이 다양한 css 속성을 가지고 있는 class를 생성해서 DOM에 적용하기

/* 
li[1].className = "design_set1"
li[1].className += " design_set2"
*/

// 우선순위 순서 : 인라인 > id > class > tag
// 대입 연산자 떄문에 이전 값이 지워져서 복합 대입으로 만들어야한다. += " design_set2" 앞에 공백주기
// 우선순위가 같으면 작성 순서에 따라 우선순위가 결정된다.

console.log("-------------------------------DOM.classList.add('추가클래스명')------------------------------------------")

/* li[1].className = "design_set1"
li[1].className += " design_set2"
아까 적용한 방식
*/

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


console.log("-------------------------------DOM.classList.replace('기존', '변경')------------------------------------------")
/* target.classList.replace('a', 'b') 앞에걸 뒤에걸로 적용 a를 b로 변경한다. */

li[2].addEventListener("click",function(){
    this.classList.replace("design_set1","design_set2")
    // 버튼을 클릭 한 상태에서 design_set1 눌러줘야 design_set2 적용된다.
})
// this - > 내가 이벤트한 대상. this == li[2] 같다.

// 화살표 함수에는 this 안먹음

li[5].classList.add("design_set1")

let = boolean = ""

li[5].addEventListener("click",()=>{
    boolean = li[5].classList.contains("design_set1") // contains 조건문과 함께하는 함수이다. DOM.classList.contains(클래스 유무 확인)
    console.log(boolean)

    if(boolean){
        alert("존재한다.")
    } else {
        alert("존재하지 않는다.")
    }
})