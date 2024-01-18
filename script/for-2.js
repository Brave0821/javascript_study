/* 
반복문 for
for(1초기값; 2조건식; 3증감식){ 4조건이 참일 떄 실행 반복결과 }
조건 거짓일때 종료되는 for문 위치

1번 ~ 2 4 3 순서대로 

*/

let data = [10,20,30,40,50]
let result = 0
// 0에서 시작 인덱사
for(let i=0; i<data.length; i++){
    console.log(data[i]) // 배열 값 반복 출력
    result += data[i]
}
console.log("총 배열의 합은"+ result)

/* 
i 0시작 
// continue, break(여기서 끝내라) for문 강제로 종료 
*/
// var 는 전역 x 지역 구분 x
for(var j=1; j<=10; j++){
    console.log(`j는 ${j}`)
    continue; 
}
// 1번 ~ 2 4 3 순서대로 
console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`) 
// console.log(`j:${j}`) 11이 나온다. 조건이 거짓일때 10보다 작지도 않기에 11이 나온다.

/* 
continue; /* // for는 계속 도는데 다음 문장을 숨겨버림  
    - > 웹 사이트에서 for(반복){일반 사용자에게 사용되는 프로그램 continue 밑개발자 히든 코드 있으면 숨겨져있다. 
        <input type = "hidden"> 보안코드 체크리스트 숨겨놓는거    } 
        ex) 회원가입 - > 약관 시작 - > 사용자에게 보이지 않는 작업 수행이 가능 
        
        기능을 만들때 함수 단어 같은거에 히든필드로 숨겨놓고 
        */
    /* break; */ // 1 이 나온다. 1은 10보다 작으니 참 - > break 만남 - > {} 밖으로 그래서 1이 나온다.
// 다중 반복문 for-for for안에 for 넣기 2단 for문이 가능 흔하다.
let total = 0
for(let i=1; i<6; i++){
    console.log(`i=${i}`) // 1~5까지 반복되는 1단 반복문
    // for 조건이 거짓일때 끝? 
    // 2단 for 시작 종료 
    console.log("======================")
    for(let m=1; m<4; m++){
        console.log(`m:${m}`)
        total += m
    }
    console.log(`total=${total}`)
    console.log("======================")
}
// i가 6보다 작을 때 까지 증가
/* 
js.style로 사용 가능한 것 처럼 

*/
