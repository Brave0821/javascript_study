const header = document.querySelector("header");
const headerChild = header.childNodes;  // 텍스트 
// children 요소 노드만 인식.
// const headerChild = header.children; 
console.log(header, headerChild);
console.log(header.childElementCount); //2 요소의 수. h1 nav length와 동일하게 장바구니에 전체에 section에서 
console.log("-----------------------------1-----------------------------------")

console.log(headerChild[1]); // h1
console.log(headerChild[3]); // nav
console.log(headerChild[1].innerText);
console.log(headerChild[1].innerHTML);
console.log(headerChild[3].innerText);
console.log(headerChild[3].innerHTML); 
console.log("-------------------------------2---------------------------------")
/* 
console.log(headerChild[3].innerHTML); 
<a href="#">menu1</a>
<a href="#">menu2</a>
.innerText는 속성이므로 그냥 쓰면 출력 x - > 
*/
// headerChild[1].innerText = "로고!";
// headerChild[1].innerHTML = "로고!";
//headerChild innerText (d)
console.log("-----------------------------3-----------------------------------")
// a가 안빠지는 버젼
console.log(headerChild[1].childNodes[0]);
headerChild[1].childNodes[0].innerText = "로고";
headerChild[1].children[0].innerHTML = "로고고로고로고로골고고로고로고";
console.log("------------------------------4----------------------------------")
/* menu1 마우스를 올리면 menu1 - > 메뉴1 글자변경 */
// console.log(headerChild[3].childNodes[1]);
// headerChild[3].childNodes[1].innerText = "메뉴1";

/* menu2 마우스를 올리면 menu2 - > 메뉴2 글자변경*/
// console.log(headerChild[4].childNodes[1]);
// headerChild[4].childNodes[1].innerText = "메뉴2";

const click_menu1 = headerChild[3].childNodes[1];
console.log(click_menu1);

const click_menu2 = headerChild[3].children[1];
console.log(click_menu2)


click_menu1.addEventListener("mouseover", function(){

    console.log(headerChild[3].childNodes[1]);
    headerChild[3].childNodes[1].innerText = "메뉴1";
})

click_menu2.addEventListener("mouseover", function(){

    console.log(headerChild[3].children[1]);
    headerChild[3].children[1].innerText = "메뉴2";
})



// 메뉴1를 잡으려면 a를 잡아야한다. nav를 잡기. nav의 부모는 해더 

console.log("-------------------------------------------------------------------")
/* 
    선생님 풀이.

    const nav = header.querySelector("nav")
    const nav_a = nav.children;
    
    console.log(nav,nav_a, nav_a[0], nav_a[1])

    nav_a[0].addEventListener("mouseover", function(){
            console.log(nav_a[0].innerHTML, nav_a[0].innnerText)
            nav_a[0].innerText = "메뉴1";
        })

    nav_a[1].addEventListener("mouseover", function(){
            nav_a[1].innerText = "메뉴2";
        })
*/
console.log("-------------------------------------------------------------------")
// console.log(headerChild[3].innerText[]);
/* 위 변수 생성 이유 이유 마우스를 올리는 대상, 변경 글자 대상 
1-1 (위 변수 생성 이유 ) 마우스 올리는 대상, 변경 글자 대상 
2. 변수 이용 이벤트 핸들러 addEventListener
2-1 마우스 올리면 이벤트 종류 찾기 
2-2 마우스 올렸을 떄 실행 결과 이벤트 내 funtion 안에 작성 준비 
3. 글자를 변경하는 속성이 뭔지 체크 문법에 맞춰서 작성 
3-1 rorcp.thrtjd = "값" 속성 값 변경하는 문법 
*/
console.log("-------------------------------------------------------------------")

// main - 장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기.

/* 
const header = document.querySelector("header");
const headerChild = header.childNodes;  // 텍스트 


const click_menu1 = headerChild[3].childNodes[1];
console.log(click_menu1);

const click_menu2 = headerChild[3].children[1];
console.log(click_menu2)

console.log(headerChild[1])

console.log(header.childElementCount); //2 요소의 수. h1 nav length와 동일하게 장바구니에 전체에 section에서 
bank_total.value = total; /* 처음부터 만원이 보인다. */

const main = document.querySelector("main");
const mainChild = main.childNodes;

// all 인식 
console.log(mainChild[3].children[1]) /* all 위치 */
console.log(main.childElementCount); // 3 인식

const count = mainChild[3].children[1];
const product = main.childElementCount; 
console.log(count, product) 
/* headerChild[1].childNodes[0].innerText = "로고"; */
// count.value = product;
count.innerText = product;

// count = all
// 3 인식한 변수 만들기 

// const product = mainChild[].childNodes[0];
// console.log(product);

const mainNode = document.querySelector("main");
// 1. main-cart 변수 생성하기 
const cart= mainNode.querySelector(".cart");
//2. span.all 변수생성
const all_count_view = mainNode.querySelector("span.all");
// 3. main-cart의 자식 item 개수 체크하기 
const cart_item_count = cart.childElementCount;
console.log(mainNode, cart, all_count_view, cart_item_count)
//4