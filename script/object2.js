// object2 
// 예약시스템 고양이는 변경은 가능하되 제거는 안되지만 예약 시스템은 삭제도 된다.
const reservation = { // 예약
    room: 1,
    adult: 2,
    children: 1,
    option: "금연",
}
console.log(reservation);
// 방 1개에서 - > 2개 

reservation.room += 1;
/* 일반 = 대입연산자로 할 경우는 입력창에 곧바로 4or 2 등등 입력할때  목록에 숫자 나열되어 있는경우에는 =  */
console.log(reservation);
console.log(`방이 예약되었습니다.${reservation.room}room`);
console.log("------------------------------------------");
delete reservation.option;
console.log(reservation);
console.log(`옵션변경 제거.${reservation.option} delete reservation.option; <- 사용해서 정말로 안나온다.`);
console.log("------------------------------------------");
reservation.option = "금연";
console.log(reservation);
console.log(`다시 지운 옵션 reservation.option = "금연"; 사용해서
${reservation.option} 다시 나온다.`);
console.log("------------------------------------------");
// 변수로 도형의 x, y , z 값 담기 
// 객체로 x, y, z 값 담기
// x 50, y 100, z 0

// 변수로 도형 
let shapesx = 50
let shapesy = 100
let shapesz = 0
console.log(shapesx);

// 객체로 도형
const shapes = {
    x:50,
    y:100,
    z:0,
}; /* 객체가 더 편하다. 결론 */
console.log(shapes);
console.log(`도형의 값은 ${shapes.x},${shapes.y},${shapes.z} 입니다.`);
console.log("------------------------------------------------------");

const user = {
    name:"박",
    age:20,
    birthday:function(){
        console.log("생일축하합니다.",);
    },
}
console.log(user.birthday());