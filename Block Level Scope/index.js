/* -------------------------------------------------------------------------- */
/*                      let, const 키워드와 블록 레벨 스코프                    */
/* -------------------------------------------------------------------------- */

// ?/* -------------------------- var 키워드로 선언한 변수의 문제점 -------------------------- */

// 1. 변수 중복 선언 허용
// var 키워드로 선언한 변수는 중복 선언이 가능하다.
var x = 1;
var y = 1;
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
// 초기화 문이 없는 변수 선언문은 무시한다.
console.log(x); // 100
console.log(y); // 1
// 변수가 이미 선언되어있는 것을 모르고 변수를 중복 선언하면 의도치 않은 부작용이 발생할 수 있다.

// 2. 함수 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
// 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
var x = 1;
if (true) {
  var x = 10;
}
console.log(x); // 10
// for문에서 선언한 변수도 전역 변수가 된다.
var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5
// 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다.

// 3. 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.
// 즉, 변수 호이스팅에 의해 var 키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다. 단 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.
console.log(foo); // undefined
foo = 123;
console.log(foo);
var foo; // 호이스팅
// 에러는 발생하지 않지만 가독성이 나빠지고 오류를 발생할 여지를 남긴다.

// ?/* --------------------------------- let 키워드 -------------------------------- */
// var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let과 const를 도입했다.

// 1. 변수 중복 선언 금지
// let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러(SyntaxError)가 발생한다.
var fooVar = 123;
var fooVar = 456;
//let bar = 123;
let bar = 123; //! SyntaxError: Identifier 'bar' has already been decleared
// 같은 스코프내에서 중복 선언을 허용하지 않는다.

// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록(함수, if, for...)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
let foo1 = 1; // 전역 변수
{
  let foo1 = 2; // local
  let bar = 3;
}
console.log(foo1); // 1
console.log(bar); //! RE: bar is not defined
// 함수도 코드 블록이므로 스코프를 만든다. 이때 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.

// 3.변수 호이스팅
// var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
console.log(foo); //! RE: foo is not defined
let foo;

// 즉, 선언 단계에서 스코프에 변수 식별자를 등록해 자바스크립트 엔진에 변수의 존재를 알린다.
// 그리고 즉시 초기화 단계에서 undefined로 변수를 초기화한다.

// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo); // undefined
var foo;
console.log(foo); // undefined
foo = 1;
console.log(foo); // 1

// TODO let 키워드로 선언한 변수는 "선언단계"와 "초기화 단계"가 분리되어 진행된다.
// 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언단계가 먼저 실행되지만
// 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
// let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없다.
// 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 '일시적 사각지대'(Temporal Dead Zone TDZ)라고 한다.
console.log(foo); //! RE
let foo;
console.log(foo); // undefined
foo = 1;
console.log(foo);

// TODO 자바스크립트는 ES6에서 도입된 let, const를 포함해서 모든 선언을 호이스팅한다.
// 단, ES6에서 도입된 let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것 처럼 동작한다.

//* 전역 객체와 let
// var 키워드로 선언한 전역변수와 전역 함수,
// 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역 객체 window의 프로퍼티가 된다.
//* 브라우저 환경
var x = 1;
y = 2;
function foo() {}

console.log(window.x); // 1
console.log(x); // 1  전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(window.y); // 2
console.log(y); // 2  암묵적 전역은 전역 객체 window의 프로퍼티이다.
console.log(window.foo); // f foo() {}  함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티이다.

// TODO let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
// 즉, window.foo와 같이 접근할 수 없다.
// let 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.
let z = 1;
console.log(window.z); // undefined
console.log(z); // 1

//?/* -------------------------------- const 키워드 ------------------------------- */
// const 키워드는 상수를 선언하기 위해 사용한다. 하지만 반드시 상수만을 위해 사용하지는 않는다.
//* 선언과 초기화
// TODO const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
const foo = 1;
const foo; //! SyntaxError: Missing initializer in const declaration
// const 키워드로 선언한 변수는 let 키워드로 선언한 변수와 마찬가지로 블록 레벨 스코프를 가지며, 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
{
  console.log(foo); //! RE: Cannot access 'foo' before initialization
  const foo = 1;
  console.log(foo); // 1
}
// 블록레벨 스코프를 갖는다.
console.log(foo); //! RE: foo is not defined

//* 재할당 금지
// var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.
const foo = 1;
foo = 2; //! TypeError: Assignment to constant variable

//* 상수
// 변수의 상대 개념인 상수는 재할당이 금지된 변수를 말한다.
// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.
let preTaxPrice = 100; // 세전 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1); // 세후
console.log(afterTaxPrice);
// 0.1은 어떤 의미로 사용했는지 명확하지 않기 때문에 가독성이 좋지 않다. 
// 이때 상수로 정의하면 값의 의미를 쉽게 파악할 수 있고 고정값으로 사용이 가능하다.
// TODO const 키워드로 선언된 변수는 const 키워드에 의해 재할당이 금지되므로 변경하는 법은 없다.

// 일반적으로 상수의 이름은 대문자로 선언해 상수임을 알린다.
// 여러 단어로 이뤄진 경우에는 언더스코어(_)로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.
const TAX_RATE = 0.1;
let preTaxPrice = 100; 
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE); 
console.log(afterTaxPrice);

//* const 키워드와 객체
// TODO const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
const person = {
  name: 'Lee'
};
person.name = 'Kim';
console.log(person); // { name:"Kim" }
// TODO const 키워드는 재할당을 금지할 뿐 "불변" 의미하지 않는다.


// TODO
// ES6를 사용한다면 var 키워드는 사용하지 않는다.
// 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 작게 만든다.
