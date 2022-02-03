/* -------------------------------------------------------------------------- */
/*                          let, const 키워드와 블록 레벨 스코프                */
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
// ! let bar = 123; // SyntaxError: Identifier 'bar' has already been decleared
// 같은 스코프내에서 중복 선언을 허용하지 않는다.

// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록(함수, if, for...)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
let foo1 = 1; // 전역 변수
{
  let foo1 = 2; // local
  let bar = 3;
}
console.log(foo1); // 1
// ! console.log(bar); // RE: bar is not defined
// 함수도 코드 블록이므로 스코프를 만든다. 이때 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.

// 3.변수 호이스팅
// var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// ! console.log(foo); // RE: foo is not defined
let foo;