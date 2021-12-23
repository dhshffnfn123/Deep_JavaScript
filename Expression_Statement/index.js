/* ---------------------------- ASI (세미콜론 자동 삽입) ---------------------------- */
function foo() {
  return;
  {
  }
  // ASI의 동작결과 return; {};
  // 개발자의 예측 return {};
}

console.log(foo); // undefined

// var bar = (function () {})(function () {})();
// ASI : var bar = function () {}(function() {}) ();
// 개발자 : var bar = function () {}; (function() {}) ();
// TypeError : (intermediate value)(...) is not a function

/* -------------------------------- Statement ------------------------------- */
// 변수 선언문은 값으로 표현될 수 없으므로 표현식이 아니다.
var x;
// 1 + 1, 2 + 1, x = 2 + 1 모두 표현식이다.
// x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
x = 1 + 2;

// 표현식이 아닌 문은 변수에 할당되지 않는다.
var x; // 변수 선언문은 표현식이 아니다.
x = 100; // 할당문은 그 자체가 표현식이지만 완전한 문이다.

// 표현식이 아닌 문은 값처럼 사용할 수 없다.
// var foo = var x; // SyntaxError: Unexpected token var

// 표현식인 문은 값처럼 사용할 수 있다.
var foo = (x = 100);
console.log(foo); // 100
