// dom3 

/* getElementById 

지정된 아이디 이름을 가진 모든 html 요소를 찾아 html 노드로 반환합니다.
ex) <ex id = "name"></em>
*/

const main_title = document.getElementById("main_title")
const sub_title = document.getElementById("sub_title")
const list_wrap = document.getElementById("list_wrap")
console.log(main_title, sub_title, list_wrap);

console.log("-----------------문제---------------------")

/* 
1. container 
2. container-title
3. container-content
4. container-title-a
5. container-content -a 
*/

console.log("-1. container")
const container = document.getElementById("container");
console.log(container);

console.log("-2. container-title")
const con_title = document.getElementById("title");
console.log(con_title);

console.log("-3. container-content")
const con_content = document.getElementById("contents");
console.log(con_content);

console.log("-4. container-title-a")
const con_title_a = con_title.getElementsByTagName("a");
console.log(con_title_a);

console.log("-5. container-content -a")
const con_content_a = con_content.getElementsByTagName("a");
console.log(con_content_a);

// console.log(container,con_title,con_content,con_title_a,con_content_a);
// 해답은 콘솔 한번에 다.

console.log("--------------------------------------")