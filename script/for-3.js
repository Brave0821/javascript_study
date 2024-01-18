const target = document.querySelector(".target")
const ul = document.createElement("ul") // 태그생성
let li = document.createElement("li")
console.log(target, ul)


// for(let i=0; i<3; i++){
//     li = document.createElement("li")
    
    // li.innerHTML += `<li>`
    // li.innerHTML += `list는${i+1} `
    // ul.innerHTML += `<li>` //= 대입만 쓰면 지워지는데 += 쓰면 쌓이기에 `<li>list는 ${i+1}</li>
    // for(let j=0; j<2; j++){
    //     li.innerHTML += `<span>상품${j+1}</span>`
        // ul.innerHTML += `<span>상품정보</span>`
    // }
    // li.innerHTML += `</li>`
    // ul.appendChild(li)
    // ul.innerHTML += `</li>` 
// }
target.appendChild(ul) // 마지막 자식에 넣는 것 장바구니 마지막으로  target에 ul 마지막에
/* target.innerHTML += "<li></li>" */
// /* ul.appendChild(li)
// console.log() 
// ul 3번 for가 다 끝냈을때  for가 끝나면 ul을 출력해라.
//3보다 작을 때 까지 증가해라.
const target2 = document.querySelector(".target2")
let dt = document.createElement("dt")
let dd = document.createElement("dd")
target2.appendChild(dt)

for(let i=0; i<5; i++){
    dt = document.createElement("dt")
    dt.innerHTML += `<dd>상품목록(dt) ${i+1}개</dd>`
    target2.appendChild(dt)
    // dt = document.createElement("dt")
    // dt.innerHTML += `<dd>상품${i+1}개</dd>`
    for(let d=0; d<2; d++){
        dd = document.createElement("dd")
        dd.innerHTML += `<dd>상품(dd)${d+1}개</dd>`
        target2.appendChild(dd)
    } 
}

console.log("==========================================================")
