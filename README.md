# 테스트 깃 저장
# javascript
* 기계의 동작원리 프로그래밍 코드 
* 행동원리가 있다.
* ------------------------------
* 컴파일 언어 자바와 다르다.
* 인터프리터 언어 - > 자바스크립트  
# 프로그래밍 언어 유형 
* 절차를 순서대로 작성해 나가는 절차적 언어 
* ----------------------------------------------------------
* 데이터와 절차를 묶어 객체 단위로 관리하는 객체 지향 언어 **
- > 데이터(메뉴) + 절차(마우스에 메뉴를 클릭한다.) = > 메뉴가 나온다. (흐름도) 
    객체지향언어   
* 프로그램 함수를 조합하여 구현해 나가는 함수형 언어  **
* ----------------------------------------------------------- 
* 데이터 사이의 관계와 논리를 설명해가는 논리형 언어 

# 객체, 속성, 메소드, 이벤트 
* 1. object - > 객체 사용자가 컨트롤 할 수 있는 객체 대상 (내가 잡을 수 있는 대상 
    id # class . 등등 잡을 수 있다.
) 
* 2. propery - >  type, id 등등 태그명 클래스 등 

* 3. event  - > 인터넷 브라우저에서 발생할 수 있는 사건 
* 클릭 드래그 더블클릭 키보드 입력 등등 

* 4. method - > 객체의 실행  
* 확인 삭제 이동 애니메이션 등등 

* 객체 속성 등 개념 확실히 잡기 

* ---------------------------------------------------------------------
* 12/22 
* javascript(js & ECMAScript)
* 객체지향 or 동기 or 절차적 언어 
## 자바스크립트 작성위치 
* `head` or `body안에` `script`안에 작성가능
* 내부스크립트 `해드안에 스크립트안에 `
* 외부스크립트는 src로 경로 작성해서 
* 자바스크립트의 성능 향상 `defer`, `async`
## 자바스크립트 변수 
* `변수생성 키워드 생성변수명 대입연산자 대입값`
* `var` - > 중복선언 거르지 못함. ECMA Script 구버전의 오래된 변수 
* `let` - > 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
* `const` - > 상수(변하지 않는 값), 선언과 동시에 대입이 이뤄져야한다.
### 기초 연산자 
1. `+` 연결연산자 `x + 1`
2. `=` 대입연산자 `let a = 1`
3. `+=` 복합대입연산자 `x += y` - > `x = x+y`
* ------------------------------------------------------------------------
# 23/12/26 배열
* 외부스크립트를 사용했다. - > 이점 1. 간편하고 관리하기 쉽다. 2. 여러 곳에 적용이 가능하다.
* `"ABC" - > 문자로 인식하는거 `, 
* `typeof a`는 string 타입 알려줌.
* console.log(`b = > ${b}, b+a의 type은 ${typeof (b + a)}`); - > 피연산자를 2개 이상 두었을 때 괄호를 둔다.
* `const yoil = new Array("월","화");`
* `const weather = new Array("맑음","흐림");`
* - > console.log(`${yoil[0](${weather[0]})}`)
*
* 추가
* push - > 뒷 쪽에 추가한다. 추가 후 - console.log
* unshift - > 시작에 새로운 값을 추가한다. 
* 삭제 
* pop - > 맨 끝에 값 삭제 
* shift - > 시작 값 제거 
*
*
# 배열값 추가, 삭제 메서드
## 방법1. 
// 미리 자리를 만들어놓고 체울거냐 
* const movie = new Array(8);
 console.log(movie);
*
* `movie[0] = "A1";`
  console.log(movie);
// 8개의 자리 중 A1이 들어간다.
*
*
*
*
-----------------------------------------------------------------------------------------------------------------------
## 방법2 
* // 추가하면서 자리를 체워서 8개가 되면서 자리를 막을건지 (j로)
* 
* const megabox = new Array(); /* 값을 비워두고 추가로 */
  console.log(megabox); // []
*
* megabox.push("a1");
  console.log(megabox); // [a1] 추가된다.
*
*
* console.log("-------------------------------------------------------------")

## 봄 돔 12/27 
* 윈도우 객체 (브라우저 봄 최상위 객체)
* 브라우저 , 문서 객체가 나뉜다. 
* window.alert()
* 
* window.location (객체 + 속성)
* window.document.write 
* window.document.body
*  
* window.open(url,target, features) 새로운 창을 열거나 새 탭을 생성하는 메서드
-----------------------------------------------------------------------------------------------------------------------
### 12/28 
* dom트리를 구성하는 객체 - > 노드 
* html요소를 가리키는 객체 - > html요소 노드 
* 텍스트를 가리키는 객체 - >텍스트 노드 
* 탭, 공백, 줄바꿈 - > 공백 노드 
*  공백도 노드로 인식함 
* --------------------------------------------------------------------------------
* <h1>row</h1> - > html노드
* getElementsByTagName 
* 지정된 태그 이름을 가진 모든 Html 요소를 찾아 html 노드로 반환
* p , h1 , div , input - > 여러 개 등장하기에 s 붙음  getElements
* 
* 
### dom 돔
*  const h1Tag = document.getElementsByTagName("h1")[0]; // 방법1 선언 [0]; h1이 딱 하나면 여기
*  // const h1Tag = document.getElementsByTagName("h1")[1]; // 방법1 선언 [0];
*  console.log(h1Tag);
*  // 방법2 호출 console.log(h1Tag[0]); h1 즉 적용대상이 변수자체는 여러 개 호출할때 여러개면 이렇게 호출하는게 좋다.
*  // getElements 여러 개니까 css랑 닮았다.

------------------------------------------------------------------------------------------------------------------
### index 붙일 때 

*    *(1개만 동적인 기능이 적용)* -> getElementsByTagName("h1")[0] 
*    
*    *(여러 개에 동적인)* -> onsole.log(h1Tag[0]); 
* 
-------------------------------------------------------------------------------------------------------------------
### dom id

*  getElementById 
*  지정된 아이디 이름을 가진 모든 html 요소를 찾아 html 노드로 반환합니다.

# querySelector, querySelectorAll이랑 value랑 number 

### value 
*  form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
*  form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능 
*  javascript의 DOM. 속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값 까지 모두 인식할 스 있다.

1. 쇼핑몰의 상품 수량 
2. 쇼핑몰의 총 주문 가격   
3. 예약페이지의 여행 인원 수 등등...

* 주의사항 - > VALUE속성은 form전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()`에서드를 활용해 (Number)
  데이터 타입으로 변환해야한다. ex `Number(객체.value())`

*  querySelector, querySelectorAll이랑 value랑 number 
* `console.log(textInput.value) `
* `console.log(Number(numInput.value)+1)`
*  `-` 
-----------------------------------------------------------------------------------------------------------------------------------
# 1월 3일  dom 마무리. 
## DOM 
### 1. 돔 관계속성 

1. parentNode 부모노드, parentElement 부모 요소 
    parentNode.parentElement 연속 사용 (부모의 부모 잡기)
    자식 또는 자손노드.parentElement (특정 자식의 부모잡기)


2. javascript에서 css 제어하기 - > style 속성

    - dom.관계.style = "속성:값;속성:값;속성:값;" - >  <값을 추가로 적용하면 값이 초기화된다.>
    * 위 style 2번 이상 생성 시 이전 속성:값 제거 됨  
    - dom.관계.관계.style.속성 = "값"; - > < 값이 쌓이게 된다.>
    * 위 style 2번 이상 생성 시 기존 속성값에 이어서 추가됨 
    - dom.style.속성= "값";
    - 위 관계는 필요에 따라 선택 속성
--------------------------------------------------------------------------------------------
# relationship2
* <1월 3일 자식 노드 제어하기>
* childNodes, children, childElementCount
*  brave 표시 넣음 ctrl + f
--------------------------------------------------------------------------------------------
 innerHTML - > 속성이고 앞에 객체가 필요함. 뒤에는 대입연산자 = 필요 
`객체.innerHTML;` - > 특정 객체에 자식 자손에 해당하는 HTML을 읽는 것 
`객체.innerHTML = 값;` - >  HTML 삽입 및 변경
 html 태그 사용가능 

 innerText - > 화면에 보여줌?
`객체.innerText;` 객체의 자식, 자손 텍스트 노드 읽기 (HTML X)
`객체.innerText= 값;` - ? 텍스트 노드 삽입 및 변경 (HTML x)

# appendChild 
메서드니까 앞에 객체 와 속성이 들어갈 수 있다.

객체.속성.appendChild() 메서드는 항상 맨 뒤에 
객체.객체.appendChild()
객체.속성.appendChild()
갹체.속성.속성.appendChild()

appendChild()? - > 객체의 마지막 자식 노드 위치에 `()` 괄호 안 값 추가.

# createElement 
메서드니까 앞에 객체 와 속성이 들어갈 수 있다.

앞에 document를 가진다. 무조건. 
`document.createElement()`
요소 노드 js 내에서 동적인 용도로 생성할 경우 

------------------------------------------------------------------------------------------------------

표현식 - > 변수, 함수 등의 값을 바탕으로 계산하는 행위

연산자 - > 표현식을 조합하여 더욱 복잡한 표현식을 만들어 계산하는 행위 

-x 단항연산자 

x-y 이항연산자 

condition ? x:y 삼항연산자

산술 이항 연산자 

a + b 문자+문자(연결) 문자+숫자(연결) 숫자+숫자(더하기)

a - b 빼기 4-2 = -2 

a * b 곱하기 4*2 = 8

a/ b 나누기 4/2 = 2 

a % b skajwl 4%2 = 0

계산할 수 없는 경우는 NaN 처리 ex) 'two' * 2 = NaN 

숫자라고 생각했는데 문자?

----------------------------------------------------------------------------------------------------
산술 단항 연산자 - 증감연산자 

++a a에 1을 더한 후 a값을 처리한다 

a++ a를 처리 후 a에 1을 더한다.

--a a에 1을 뺀 후 a 값을 처리한다.

a-- a를 처리 후 a에 1을 뺀다. 

전위 연산과 후위연산의 값 대입방향 

b = ++ a 

b = a ++
---------------------------------------------------------------------------------------------------
산술대입연산자 
연산자 | 예시 | 예시 뜻 | 예시 풀이 
+=     a += b  a = a + b   기존 a 값에 b를 더해서 a에 대입한다.
-=     a -= b  a = a - b      

----------------------------------------------------------------------------------------------------------
# 논리데이터 or 비교연산자 

### 논리데이터 
true or false 하나의 데이터 형식 
조건문, 논리연산자 등 사용 

## 비교연산자
2값 이상을 비교하여 그 결과를 논리데이터로 반환하는 연산자 

### 일치연산자
x == y , x === y xy는 같다. - > 참 다르면 거짓 

=== 는 데이터 타입까지 일치하는지? 

### 부등연산자 
x != y , x!==y  x와y가 다른가? 다른게 참 왜냐하면 다른걸 물어봤기에  같으면 거짓 

------------------------------------------------------------------------------------------------
# JS : CSS 클래스 활용 속성/메서드 오늘 배운 것 

원래 방식 - > 

dom.style.속성 = 값 
(속성 ex color, display, background)

배우는 방식 - > 

.design_set1 { 
  color
  display
  background
}

그럼 배우는 이유는?
css 속성이 여러개라면 하나 하나 번거롭게 개별명령을 해야하는데 작성이 불편하고 힘들다.
그래서 한번에 묶어서 적용한다.

※ 주의할점! 
우선순위에 따라 적용이 된다.
// 우선순위 순서 : 인라인 > id > class > tag 

ex) /* 우선순위가 밀린이유 :  .list li {border-bottom: 1px dashed darkgreen;} 클래스 + 태그를 가졌고  
.design_set1 클래스만 가졌기에 밀림.  */ 참고하기 


### DOM.classList.add('추가클래스명')

`li[1].classList.add("design_set1", "design_set2)` 적용방식 
`li[1].classList.remove("design_set1", "design_set2)` 삭제하기

# 토글 기능 (보였다or안보였다.)

// 버튼을 클릭 시 만들어둔 design_set1 이 적용되게 하려면?

`btn.addEventListener("click", ()=>{
    li[2].classList.toggle("design_set1")
})`

주의할점 만약 this를 li[2]대신 사용할 시 화살표 함수 사용하면 this가 안먹는다.

### classList.add css 예시 
li[5].classList.add("design_set1")
ex) 6번째 li에 design_set1에 저장된 css를 적용한다.


###  DOM.classList.replace('기존', '변경')

`li[2].addEventListener("click",function(){
    this.classList.replace("design_set1","design_set2")
    // 버튼을 클릭 한 상태에서 design_set1 눌러줘야 design_set2 적용된다.
})
`
### replace
// 버튼을 클릭 시 design_set1 상태에서 design_set2 상태로 변경된다.


### DOM.classList.contains(클래스 유무 확인)
contains 조건문과 함께하는 함수이다. DOM.classList.contains(클래스 유무 확인)

-------------------------------------------2교시 정리 끝--------------------------------------------------
dasdasdasdas dsamd;sa 저장