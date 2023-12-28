// dom 2

/*   *(1개만 동적인 기능이 적용)* -> getElementsByTagName("h1")[0] 
    
*    *(여러 개에 동적인)* -> onsole.log(h1Tag[0]);
*/
console.log("--------------------------------------------------------------------")

// const titleCls = document.getElementsByClassName("title");
// console.log(titleCls);
// console.log(titleCls[0]); 
// console.log(titleCls[1]);

console.log("---------------------------------------------------------------------")
// 변수 자체에 인덱스 넣는건 딱 하나에 애니메이션 넣는경우 

// const listCls = document.getElementsByClassName("list");
// console.log(listCls);

console.log("--------------------------문제1---------------------------------------")

// list 클래스를 가지고 있는 li만 인식하는 변수
// const ulTag = document.getElementsByTagName("ul")[0];
// ul이 li를 전체를 감싸고 있기에 ul 0으로 인식시킴. 
// const listClass = ulTag.getElementsByClassName("list");
// ul중에 list 중에 class를 가진애들만 getElementsByClassName 인식.
// console.log(listClass);

console.log("-----------------------------------------------------------------------")

console.log("-1번----------------------------------------------------------------------")

// const gnbTag = document.getElementsByTagName('ul')[0];
// const navTag = document.getElementsByTagName("nav")[0];
// const ulTag1 = navTag.getElementsByClassName("ul");
// console.log(navTag);

console.log("-------------------------------------------------------------------")
/* 
1. gnb 1개 잡기 
2. gnb-li 2개 잡기 
3. gnb-li-lnb 2개 잡기 
4. gnb-li-lnb 첫번째 lnb만 잡기 
5. gnb-li-lnb 두번째 lnb만 잡기 
*/

console.log("// 1번 gnb 1개 잡기")
// 1번 gnb 1개 잡기 
const gnbCls = document.getElementsByClassName("gnb")[0];
// const ulTag2 = ulTag.getElementsByClassName("ul");

// 2번 gnb-li 2개 잡기 
const li_menu1 = gnbCls.getElementsByTagName("li")[0];
const li_menu2 = gnbCls.getElementsByTagName("li")[3];
console.log(gnbCls);

// 3번  gnb-li-lnb 2개 잡기 
const lnbCls = gnbCls.getElementsByClassName('lnb');
console.log(lnbCls);

//4번 첫번째 lnb만 잡기 
const lnbCls1 = gnbCls.getElementsByClassName("lnb")[0];
console.log(lnbCls1);
// 5번 두번째 lnb만 잡기 
const lnbCls2 = gnbCls.getElementsByClassName("lnb")[1];
console.log(lnbCls2);

console.log("-------------------------------------------------------------------")
