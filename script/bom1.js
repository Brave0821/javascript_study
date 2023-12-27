// Bom Dom
// 객체와 함수 복습

let num = 0;

function clickNum() {
    num += 1
    console.log(num);
}; 

// [] 배열 
//  {} 솏성 여러개 
console.log("----------------------------------------------------------------------")

const obj = {
    name : "김모모모모모모",
    gender : "남성",
    birthday:function(){
        console.log(`${obj.name}야 생일 ㅊㅊ`);
    } /* 함수대신 익명함수 */
};


console.log("----------------------------------------------------------------------")
const member = [ /* 회원 배열 */
{/* 회원 1 2 3 객체 정보  */
        name : "김모모",
        age : 21,
    },{
        name : "박모모",
        age : 23,
    },{
        name : "이모모",
        age : 25,
    },
];
console.log(member);

console.log("----------------------------------------------------------------------")

const item = [
    {
        brandName : "청정원",
        productName : "파스타",
        sale:"38%",
        price:13900,
        reviewPoint: "4.7",
        reviewNum: "7,620",
        delivery: "무료배송",
        option:"특가",
        cardOption:"최대 10% 결제할인",
    },{
        brandName : "청정원",
        productName : "파스타",
        sale:"38%",
        price:13900,
        reviewPoint: "4.7",
        reviewNum: "7,620",
        delivery: "무료배송",
        option:"특가",
        cardOption:"최대 10% 결제할인",
    },
];
console.log(item);

//