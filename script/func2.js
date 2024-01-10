/* 
지역 변수 
funtion1 - > 안에서만 쓸 수 있고 2 3에선 x 
funtion2 
funtion3 

전역변수
let const
*/

const user = [{
    name:"lee",
    age:20,

},{
    name:"kim",
    age:30,
}]
/* 전역변수 */
console.log(user)

function a(){
    let num_a = 1
    console.log("a 함수 위치"+num_a) /* +연결 연산자로 붙임. */
    user[0].age++
    console.log(user[0].age)
    b() /* 2.  a호출하면서 b도 호출된다. */
}
function b(){
    let num_b = 2
    console.log("b 함수 위치"+num_b)
    user[1].age++
    console.log(user[1].age)
}

a() /* 1. 전역 위치에 a 호출 */


/*

매개 변수 & return 

함수 호출 시 전달되는 값을 받는 함수 내 생성 변수 
재사용되는 함수에서 변경되는 데이터 처리가능

funtion 함수명(매개변수명){return 실행}
함수명(매개변수)

*/