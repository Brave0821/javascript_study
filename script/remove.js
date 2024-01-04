// X를 클릭 시 x가 포함된 li태그 지우기.

const cart = document.querySelector(".cart") /* ul */
const cart_item = document.querySelectorAll(".cart li") /* ul>li */
const delete_item_btn = document.querySelectorAll(".delet_btn") /* 버튼 */
console.log(cart, cart_item, delete_item_btn);

// 요소 노드 제거하기 remove, removeChild()
// 요소.remove() -- 요소를 제거한다. - > li
// 요소.removeChild() -- 요소 안 () 괄호에 있는 자식노드를 제거한다. - > 

delete_item_btn[0].addEventListener("click",function(){
    // cart_item[0].remove() 
    cart.removeChild(cart_item[0]) 
    console.log("성공1");
    /* 특정 부모에 자식 노드를 구할 수 있기에  카트에 자식 */
}) /* 상품1 */

delete_item_btn[1].addEventListener("click",function(){
    // cart_item[1].remove() 
    cart.removeChild(cart_item[1])
    console.log("성공2");
}) /* 상품2 */

delete_item_btn[2].addEventListener("click",function(){
    // cart_item[2].remove() 
    cart.removeChild(cart_item[2])
    console.log("성공3");
}) /* 상품3 */


