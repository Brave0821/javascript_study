// 첫번째 자식, 마지막 자식 노드 잡기 
/* 
    firstChild, firstElementChild
    lastChild lastElementChild

*/
const items = document.querySelectorAll(".item")
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild); /* 띄어쓰기 text */
console.log(items[0].firstElementChild); /* 첫번쨰 요소 photo */
console.log(items[0].lastChild); /* 띄어쓰기 text */
console.log(items[0].lastElementChild); /* 마지막 자식 요소 p.price */
console.log("------------------------------형제 노드 잡기-------------------------------------")
// 이전 형제 previousSibling, previousElementSibling
// 다음 형제 nextSibling, nextElementSibling
const item_h2 = items[0].querySelector("h2");
console.log(item_h2); 
console.log(item_h2.nextSibling.nextSibling); /* nextSibling 첫번째는 공백 다음은 가격 공백포함 */
console.log(item_h2.nextElementSibling); /* 한번에 가격  공백 미 포함*/
/*  */
console.log(item_h2.previousSibling); // text
console.log(item_h2.previousElementSibling); // 상품사진
/*  */
