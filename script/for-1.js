// 반복문 for 

/* 
for(초기값선언; 조건식(비교연산자 등); 증감식) {
    괄호 안 조건식이 참일때 반복실행결과물
}
//1 ~ 10 반복문 
*/
// for 지역함수 안에서 작성되는 변수명 = i,j,m,n
/* for(let i=1; i<=10; i++){console.log(`i=${i}`)}  */
/* 10보다 작을 떄 근데 10까지 포함해야하니까 <= */

// 5 ~10 반복되는 반복문 만들기 

/* for(let i=5; i<=10; i++){console.log(`i=${i}`)} */

/* for(let i=5; i>=0; i--){console.log(`i=${i}`)} */

// 1,3,5,7,9

for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log(`홀수!${i}`)
    } else {
        console.log(`짝수@${i}`)
    }
}

console.log("==========================================")

const study = [
    "illustrator","potoshop","figma","html","css","javascript"]

// 반복문 활용 study 배열 값 한번에 출력하기
/* for(let i=5; i<study.length; i++){
    console.log(`${i+1}.${study[i]} 공부`)
}
 */

/* /* for(let i=5; i>=0; i--){console.log(`i=${i}`)} */

for(let i=study.length-1; i>=0; i--){
    /* console.log(study[i]) */
    /* console.log(`${i+1}.${study[i]} 공부`) */
    console.log(`${i+1}.${study[i]}공부하기`)
}
console.log("--------------------menuAll-----------------------")
/* li[1].classList.add("design_set1","design_set2") */
const menuAll = document.querySelectorAll("nav a")

for(let i=0; i<menuAll.length; i++){
    /* console.log(menuAll[i]) */
    if(i%2==1){
        menuAll[i].classList.add("bg1")
    }else{
        menuAll[i].classList.add("bg2")
    }
}

/* for(let i=1; i<=10; i++){
    if(i%2==1){
        console.log(`홀수!${i}`)
    } else {
        console.log(`짝수@${i}`)
    }
} */
