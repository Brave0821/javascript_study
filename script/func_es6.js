const btn = document.querySelector("#btn")
console.log(btn)

btn.addEventListener("click", function(){
    console.log(this) // btn
    console.log(this.type) // button
    console.log(this.id) // html 상에 id btn
    // this.style = "background-color :green"
    // btn.style = "background-color=:green" 위랑 같은 ㄳ.
    
    this.style.backgroundColor = "green";
    this.style.border = "1px solid black";
    this.innerText = "클릭"

})

// 객체, 변수 선언과 this 
const ob = [{
    w:50,
    h:100,

    func:function(){
        // return `w:${ob[0].w}, h:${ob[0].h}`
        return `w:${this.w}, h:${this.h}`
    },
},{
    w:80,
    h:40,
    func:function(){
        return `${this.w +this.h}` 
        /* `합은${this.w} ${this.h}` */  
    }
}]

console.log(ob)
console.log(ob[0])
console.log(ob[0].w)
console.log(ob[0].func())
console.log(ob[1].func()) // 애가 이름이 같아도 2번째 라서 1 붙임.
/* 클론코딩에 dis - > 함수가 바로 인식하는 객체 
*/
console.log("-----------------------------------------------------")

function japangi() {
    return "음료수 출력"
}
console.log(japangi())

//---------------------------- 화살표 함수 after

const japangi_v2=()=>{
    return "음료수 v2"
}
console.log(japangi_v2())


const japangi_v3=()=>{
    return "음료수 v3"
}
console.log(japangi_v3)


const japangi_v4=()=>{
    return "음료수 v4"
}
console.log(japangi_v4)

/* 
function 생략 
기존함수 : funtion(x) 함수명(){ 함수 실행 값}

const 익명함수 = () => {함수 실행값}

DOM.addEventListener("이벤트",()=>{함수 실행 값})
*/

btn.addEventListener("mouseover",()=>{
    console.log("over")
    /* this.style.color = "red" */
    btn.style.color = "red"
})

// this를 사용하고 싶으면 btn 바로 적어야한다.

btn.addEventListener("mouseout",()=>{
    console.log("out")
    btn.style.color = "green"
})

console.log("=================================================");

const bab = (target) => {
    return target+"밥"
}
console.log(bab("콩"))
console.log(bab("쌀"))
