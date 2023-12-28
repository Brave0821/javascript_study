// 돔
const h1Tag = document.getElementsByTagName("h1")[0]; // 방법1 선언 [0]; h1이 딱 하나면 여기
// const h1Tag = document.getElementsByTagName("h1")[1]; // 방법1 선언 [0];
console.log(h1Tag);
// 방법2 호출 console.log(h1Tag[0]); h1 즉 적용대상이 변수자체는 여러 개 호출할때 여러개면 이렇게 호출하는게 좋다.
// getElements 여러 개니까 css랑 닮았다.
/* getElementsByTagName

    *HTML 에 TagName가 여러 개 즉 2개 이상일때 그 중에 *(1개만 동적인 기능이 적용)*되어 dom으로 등록이 필요한 거라면 
    변수 지정 시 [index] 설정하고 대입하기
    *(1개만 동적인 기능이 적용)*
    - > getElementsByTagName("h1")[0] 


    *html에tagname가 2개 이상일 때 그 중 *(여러 개에 동적인)* 기능이 적용되어 dom이 된다면 
    변수 지정시는 index 없이 대입하고 해당 dom 변수 호출 시 필요한 경우 index 사용하기  
    *(여러 개에 동적인)*
    - > onsole.log(h1Tag[0]); 
*/
console.log("------------------------상황1----------------------------------")

// 상황1 ul에만 필요하면 1개만 호출할때 - > 호출할때
const ulTag = document.getElementsByTagName("ul")[0];
console.log(ulTag);

console.log("-------------------------상황2---------------------------------")

//상황2 ul, li 3개 모두 - > 콘솔에 여러개 - > 선언에 
const liTag = ulTag.getElementsByTagName("li");
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);

console.log("----------------------상황3------------------------------------")
// 상황3 ul>li>a 중에 2번쨰 a에 동적 기능이 필요한 경우
const aTag1 = liTag[1].getElementsByTagName("a");
console.log(aTag1);

console.log("--------------------------상황4 --------------------------------")
//상황4 ul>li>a a에 3개의 a에 동적기능이 필요한 경우
const aTag2 = document.getElementsByTagName("a");
console.log(aTag2[0]);
console.log(aTag2[1]);
console.log(aTag2[2]);
console.log("----------------------------------------------------------")

// dom node 변수 지정 시

/* html colllection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 
실제로 dom node 변수를 이용한 동적인 결과를 만들어야 할때는 
직접적인 접근으로 대상을 하나 씩 개별인식하게 만들어야한다.  [index] */





