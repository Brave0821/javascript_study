/* 객체 object */
// 데이터 저장소 : 변수(1가지 값만 담을 수 있다. ), 배열(2개 이상 담아줄 수 있다.) 
// 특정 값에 해당되는 "속성"을 추가해서 데이터 관리를 용이하게 한다. - > 속성이 추가된다.
// 배열은 단순한 값 오브젝트는 속성이 추가된다. 
const cat = { 
    color: "black", /* color이 속성 */
    age:1, /* 의식적으로 , 꼭 붙이기. */
}
// cat.color 
// cat.age  
console.log(cat);
// console.log(cat.length); // undifined
/*  */
console.log(cat.color); /* 객체를 따로 뺄때는 객체명 + 속성에 (괄호x)  */
console.log(cat.age); /* 나이 확인하기. */
/*  */
console.log(`${cat.age}살 ${cat.color} 고양이 분양`);

const cat2 = {
    color:["흰색","노랑색","검은색"], /*  */
    age:2,
}
console.log(cat2);
console.log(`고양이의 털 색깔은 ${cat2.color[1],cat2.color[0],cat2.color[2]},으로 이루어져 있습니다.`);
// 백틱 버젼 위에 + + 버젼은 따로
// console.log("고양이의 털 색깔은"+ age + );
console.log("-------------------------------------------------------------------")
const cat3 = { /* 속성명에 공백이 들어가면 */
    variety : "코리안숏헤어",
    color:["흰색","검은색"],
    age:1,
    femail:"암컷",
    adoption : "입양전",
    neutering : "중성화 전",
    health : "양호",
    // adoption : "입양완료",
};
console.log(`고양이의 품종은 ${cat3.variety}이고 컬러는 ${cat3.color[0]} 입니다. 
나이는 ${cat.age}살이고 성별은 ${cat3.femail}입니다. 
현재 ${cat3.adoption}상태이며 ${cat3.neutering}입니다. 
마지막으로 건강상태는 ${cat3.health}입니다.`);

console.log(cat3);
console.log(cat3["color"]); /* 속성에 공백이 들어가면 배열 방식을 사용하기.  
cat_age 같은걸로 위에 속성명 지었다면 "cat_age":1 console.log(cat3["color_age"]); */
// adoption = "입양완료";
// console.log(cat3);
cat3.adoption =  "입양완료";
console.log(cat3);
console.log(`현재 고양이는 ${cat3.adoption} 되었습니다.`);
console.log("-------------------------------------------------------------------");
cat3.age += 1; /* 기존 나이에 +1 */
console.log(cat3);
console.log(`현재 고양이는 ${cat3.age}살입니다.`);
console.log("-------------------------------------------------------------------");
cat3.neutering = "중성화";
console.log(cat3);
console.log(`현재 ${cat3.neutering} 되었습니다.`);
console.log("-------------------------------------------------------------------");

/* array * 추가
* push - > 뒷 쪽에 추가한다. 추가 후 - console.log
* unshift - > 시작에 새로운 값을 추가한다. 
* 삭제 
* pop - > 맨 끝에 값 삭제 
* shift - > 시작 값 제거  */
