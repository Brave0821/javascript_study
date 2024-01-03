//DOM 
//1. 돔 관계속성 
/* 
1. parentNode 부모노드, parentElement 부모 요소 
    parentNode.parentElement 연속 사용 (부모의 부모 잡기)
    자식 또는 자손노드.parentElement (특정 자식의 부모잡기)


2. javascript에서 css 제어하기 - > style 속성

    - dom.관계.style = "속성:값;속성:값;속성:값;" - >  <값을 추가로 적용하면 값이 초기화된다.>
    * 위 style 2번 이상 생성 시 이전 속성:값 제거 됨  
    - dom.관계.관계.style.속성 = "값"; - > < 값이 쌓이게 된다.>
    * 위 style 2번 이상 생성 시 기존 속성값에 이어서 추가됨 
    - dom.style.속성= "값";
    - 위 관계는 필요에 따라 선택 속성
*/
// <1월 3일 자식 노드 제어하기>
//childNodes, children, childElementCount
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

console.log(header,main,footer);
// 변수 정상 작동 확인 
// 빨강 error, undifined, null 출력 없이 올바른 Node 출력이 되는지! undifined

const headerText = header.childNodes.childNodes;  

console.log(header.childNodes); // 텍스트 노드 인덱스 출력  정보 확인 용 
console.log(header.childNodes[0]); // "header" 실제 쓰고 싶으면 집적 접근
console.log(header.childNodes[0].data); // header
console.log(header.childNodes[0].length); // 6글자 수 
console.log(header.childNodes[0].baseURI); // 경로  baseURI 속성명

// main, footer

const mainText = main.childNodes.childNodes;

console.log(main.childNodes);
console.log(main.childNodes[0]);
console.log(main.childNodes[0].data);
console.log(main.childNodes[0].length);
console.log(main.childNodes[0].baseURI);


console.log(footer.childNodes);
console.log(footer.childNodes[0]);
console.log(footer.childNodes[0].data);
console.log(footer.childNodes[0].length);