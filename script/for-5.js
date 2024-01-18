//ES6 for

// for Each 인덱스, 객체 모두 출력
// for~in (index) 객체의 인덱스 출력
// for~of 객체 자체 출력


// const array = ["html","css","javascript"]
// const array = new Array("html","css","javascript")

const array = "abcdefg"
const cat = {
    color : "white",
    age:2,
    name :"nabi",
}

for(let i=0; i<array.length; i++){
    console.log(i, array[i])
}

console.log("=======================================")
for(let i in cat){
    console.log(i) 
} /* 객체는 in */

// for(let i of cat){ 
//     console.log(i)
// }

/* for(let i in array){
    console.log(i) 
}  */
/* 누구의 인덱스?  array */

/* for(let i of array){ 
    console.log(i)
} */
//객체 자체 출력

console.log("<돔 메뉴 제어하기>===========================================")
const menu = document.querySelectorAll("nav > ul > li")
console.log(menu)
/* 
for~in js 객체 
forEach, for~of js dom에  */

for(let i of menu){
    console.log(i)
    i.addEventListener("mouseover", () => {
        i.style.backgroundColor = "darkgreen"
  /*       i.style.Color = "white" */
        i.childNodes[0].style.color = "blue" /* 0 첫번째라서 a가  */

        i.parentElement.style.border = "5px solid #000"
        console.log(i.childNodes)
        console.log(i.children)

    })
    i.addEventListener("mouseout",()=>{
        i.style.backgroundColor = "grey"

    })
}
