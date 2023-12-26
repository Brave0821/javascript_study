// 12/26 1교시 외부스크립트.
// 간편하고 관리하기 쉽다. 여러 곳에 적용이 가능하다.
// typeof a - > 문자열 
// let const
let a = "ABC"; /* "" -> 문자 */

let b = "DEF";

console.log(`a = > ${a}`, `a의 type은 ${typeof a}`);
// 피연산자를 2개이상 두었을때 괄호를 둔다.
console.log(`b = > ${b}, b+a의 type은 ${typeof (b + a)}`);

const alpa = ["ABC", "DEF"];
console.log(`alpa배열의 값은 ${alpa}`);
console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}, DEF를 출력하고 싶으면 ${alpa[1]}`);
/* 위에 index  */
console.log(`배열의 개수 확인 => ${alpa.length}`);
/* 총 개수 length는 0부터가 아니라 1부터 */

const yoil = new Array("월", "화", "수", "목", "금", "토", "일",);
const weather = new Array("맑음", "흐림", "눈", "비");

console.log(yoil[0], weather[0], /* 월 */
    yoil[1], weather[2], /* 화 */
    yoil[2], weather[3], /* 수 */
    yoil[3], weather[1], /* 목 */
    yoil[4], weather[0], /* 금 */
    yoil[4], weather[0], /* 토 */
    yoil[5], weather[2]);/* 일 */
// `${yoil[0](${weather[0])`} - > 이런식으로 해야한다.
console.log("------------------------------------------------------------")
const nameArray = ["김","이","박","최"]
console.log(nameArray);

// 배열 값 추가, 삭제 메서드 (자주 사용하는 종류)
nameArray.push("수"); // 뒤쪽에 추가한다. 배열에 끝에 새로운 값을 추가하는 메서드
console.log(nameArray); // 수가 추가된다. 
// 배열의 시작에 새로운 값을 추가한다.
nameArray.unshift("방"); 
console.log(nameArray); 
// 제거해주는 메서드 
nameArray.pop(); // 맨 끝에 값 삭제
console.log(nameArray);
nameArray.shift(); // 시작 값 제거
console.log(nameArray);
console.log("----------------------------------------------------------------")
// 연습하기 
let nameArrays = ["shift로 삭제!","2추가","3추가","psuh연습!","pop로 삭제!"]

nameArrays.push("push추가!");
console.log(nameArrays);

nameArray.pop();
console.log(nameArrays); 

/* shift 삭제 */
nameArray.shift();
console.log(nameArrays);
console.log("-------------------------------------------------------------")
// 메가박스 좌석예매
const movie = new Array(8);
console.log(movie);
// 미리 자리를 만들어놓고 체울거냐 
// console.log()
// 0번째 자리에 a1 들어가게

movie[0] = "A1";
console.log(movie);
// 8개의 자리 중 A1이 들어간다.
movie[1] = "B3";
console.log(movie);
// 
movie[2] = "C3";
console.log(movie);
console.log("-------------------------------------------------------------")
// 추가하면서 자리를 체워서 8개가 되면서 자리를 막을건지 (j로)

const megabox = new Array(); /* 값을 비워두고 추가로 */
console.log(megabox); // []

megabox.push("a1");
console.log(megabox); // [a1] 추가된다.
megabox.push("b3");
console.log(megabox); // [a1], [b3] 추가된다.
megabox.pop();
console.log(megabox); // [b3] 제거된다.

// movie.push("a1");
// console.log(movie);
// a1추가. push는 앞에 무조건 추가한다.
// movie.unshift("al_");
// console.log(movie); 
// 최대 좌석 8좌석에서 늘어나버림.
console.log("-------------------------------------------------------------")