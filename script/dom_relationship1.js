/* 
DOM의 관계 속성 

parentNode 부모노드  공백 텍스트 구분.
parentElement 부모요소참조 (요소 : 객체만 인식한다. p랑 1이 있으면 p만 인식한다.) 
childNodes 자식요소참조 
firstChild 첫번째 자식 노드 
firstElementChild 첫번쨰 자식 요소 참조
lastChild 마지막 자식 노드 
lastElementChild 마지막 자식 요소 참조

*/

// dom의 부모잡기 :  parentNode, parentElement

// 부모 연습이니 자식들 기준으로 잡기

const aNode = document.querySelectorAll(" nav > a") /* nav > (자식) a  */
console.log(aNode, aNode[0], aNode[1]);
console.log(aNode[0].parentNode); /* aNode - > menu1의 부모는 nav니까. */ 
console.log(aNode[1].parentNode); /* aNode - > menu1의 부모는 nav니까. */ 
console.log(aNode[0].parentElement); /* aNode - > menu1의 부모는 nav니까. */ 
console.log(aNode[1].parentElement.parentElement); /* HEADER NAV의 부모니까. */
console.log(aNode[1].parentNode.parentNode); /* header */

aNode[0].addEventListener("mouseover", function(){
    // nav 배경색 노랑 첫번쨰 a에 올렸을 떄 
    // header 배경색 하늘
    aNode[0].parentNode.style.backgroundColor= "green";
    aNode[0].parentNode.parentNode.style.backgroundColor ="skyblue";
})
// 마우스 나갔을 때 배경색 제거하기
aNode[0].addEventListener("mouseout", function(){
    aNode[0].parentNode.style.background = "none";
    aNode[0].parentNode.parentNode.style.background = "none";
}) 

console.log("------------------------------------------javascript에서 css를 동적으로 설정해야할때-----------------------------------------------------")
/* 객체 속성(css) 이벤트 메서드  
객체.속성
객체.속성.속성

자바스크립트에서 css를 적용할땐 인라인 스타일로 적용된다.
인라인  스타일은 모든 스타일 기준 가장 우선순위가 높으므로 
기존 .css 파일에 디자인 되어있는 속성이 있을 때 그 값보다 우선적용된다.
// */

// aNode[0].parentNode.style = "background-color:green; border: 2px solid #000;"; /* 딱 한번  */
// aNode[0].parentNode.style = "transform:skewX(25deg);"; /* 동적 추가속성 적용하면 덥어쓰기 되버린다. */
// + 형제의 표시 > 자식의 표시 nav a: hover + p{color}

console.log("----------------------------------------------------------------------------------------------------------------------------------------")
// // 객체.객체.속성 = "속성:값; 속성:값; 속성:값;"
// /* js에선 css = style */
// aNode[1].parentNode.style.backgroundColor = "darkgreen";
// aNode[1].parentNode.style.boder = "10px solid blue";
// aNode[1].parentNode.style.transform = "rotate(300deg)";


