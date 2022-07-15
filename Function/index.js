/* -------------------------------------------------------------------------- */
/*                                  Function                                  */
/* -------------------------------------------------------------------------- */

//* 함수란?
// 프로그래밍 언어의 함수는 일련의 과정을 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.
function add(x, y) {
  return x + y;
}
add(2, 5); // 7
// 프로그래밍 언어의 함수도 입력을 받아서 출력을 보낸다.
// 이 때 함수 내부로 입력을 전달받는 변수를 매개변수(parameter), 입력을 인수(argument), 출력을 반환 값(return value)라고 한다.
// 함수는 값이며 특정 함수를 구별하기 위해 식별자인 함수 이름을 사용할 수 있다.

// 함수는 함수 정의(function definition)를 통해 생성한다.
// 함수 정의만으로 함수가 실행되는 것은 아니다. 정의된 일련의 과정을 실행하기 위해 인수(Argument)가 필요하다.
// 인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로 실행한다. 이를 함수 호출(function call/invoke)
// 함수를 호출하면 코드블록에 담긴 문들이 일괄적으로 실행되면서 실행결과, 즉 반환값을 반환한다.
function add(x, y) {
  return x + y;
}
var result = add(2, 5);
console.log(result); // 7

//?/* ------------------------------- 함수를 사용하는 이유 ------------------------------ */
// 함수는 필요할 때 여러번 호출할 수 있다. 즉 실행 시점을 개발자가 결정할 수 있고, 몇번이든 재사용 가능하다.
// 코드의 재사용 이라는 측면에서 유용하다.
// 코드의 유지보수의 편의성을 높이고 코드의 신뢰성을 높이는 효과가 있다.

// 함수는 객체이므로 이름을 붙일 수 있다. 이 때 함수의 용도를 명확히 알 수 있도록 설명해야 한다.
// 적절한 함수의 이름은 코드의 가독성을 높인다.

//?/* --------------------------------- 함수 리터럴 --------------------------------- */
// 함수 리터럴은 function키워드, 함수 이름, 매개변수 목록, 함수 몸체로 구성된다.
var f = function add(x, y) {
  return x + y;
};

// # 함수 이름
// - 함수 이름은 식별자다. 따라서 식별자 네이밍 규칙을 준수해야 한다.
// - 함수 이름은 함수 몸체 내에서만 참조할 수 있는 식별자다.
// - 함수 이름은 생략이 가능하다. 이름이 있는 함수를 기명함수(named function), 이름이 없는 함수를 무명/익명함수(anonymous function)라고 한다.

// # 매개변수 목록
// - 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분한다.
// - 각 매개변수에는 함수를 호출할 때 지정한 인수가 순서대로 할당된다. 즉, 매개변수 목록은 순서에 의미가 있다.
// - 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 식별자 네이밍 규칙을 따른다.

// # 함수 몸체
// - 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드블록이다.
// - 함수 몸체는 함수 호출에 의해 실행된다.

// 함수는 객체이다.
// 함수는 객체이지만 일반객체와 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.

//?/* ---------------------------------- 함수 정의 --------------------------------- */
// 함수를 정의하는 방법에는 4가지가 있다.

// 1. 함수 선언문
function add(x, y) {
  return x + y;
}
// 2. 함수 표현식
var add = function (x, y) {
  return x + y;
};
// 3. Function 생성자 함수
var add = new Function("x", "y", "return x + y");
// 4. 화살표 함수
/*var add (x, y) => x + y; */

// 변수는 '선언(declaration)'한다고 하지만 함수는 '정의(definition)'한다고 표현한다.
// 함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수객체가 할당된다.

//?/* --------------------------------- 함수 선언문 --------------------------------- */
// 함수 리터럴과 형태가 동일하지만, 함수 리터럴과 달리 함수 선언문은 함수 이름을 생략할 수 없다.
// 함수 선언문은 표현식이 아닌 문이다. 따라서 변수에 할당할 수 없다.
function add(x, y) {
  return x + y;
}
// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js의 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // f add(x, y)
// 함수 호출
console.log(add(2, 5)); // 7

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 있다.
function foo() {
  console.log("foo");
}
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {
  console.log("bar");
});
//! bar(); // ReferenceError: bar is not defined

// 함수 몸체 외부에서는 함수 이름으로 함수를 참조할 수 없다. 즉, 함수를 가리키는 식별자가 없다. 따라서 bar는 호출할 수 없다.
// 함수 선언문으로 선언한 foo라는 함수는 함수이름으로 선언할 수 있었다.
// 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다.
var add = function add(x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7
// 함수는 함수이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.

//?/* --------------------------------- 함수 표현식 --------------------------------- */
// 자바스크립트의 함수는 값처럼 변수에 할당할 수도 있고 프로퍼티 값이 될 수도 있으며 배열의 요소가 될 수도 있다.
// 이처럼 값의 성질을 갖는 객체를 일급 객체라 한다. 따라서 자바스크립트의 함수는 일급객체이다.
// 함수 표현식의 함수이름은 생략하는 것이 일반적이다.

// 기명 함수 표현식
//var add = foo(x, y) {
//return x + y;
//};

// 식별자로 호출
console.log(add(2, 5));

// 함수 이름으로 호출하면 참조 오류가 발생한다.
// 함수 이름은 몸체 내부에서만 유효한 식별자다.
//! console.log(foo(2,5)); // RE: foo is not defined

// 함수 선언문은 '표현식이 아닌 문'이고 함수 표현식은 '표현식인 문'이다.

// 함수 생성 시점과 함수 호이스팅
// 함수 참조
console.dir(add); // f add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
//! console.log(sub(2, 5)); Type Error: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

// 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다. 그러나 함수 표현식으로 정의한 함수는 호출할 수 없다.
// 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.
// 함수 선언문으로 정의한 함수는 런타임 이전에 함수 객체가 먼저 생성된다.
// 위처럼 함수 선언문이 코드의 선두로 끌어올려지는 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅(function hoisting)이라고 한다.

// 함수 호이스팅과 변수 호이스팅은 미묘한 차이가 있다.
// var 키워드를 사용한 변수 선언은 런타임 이전에 먼저 실행된다는 점은 같지만 var 키워드로 선언된 변수는 먼저 undefined로 초기화되고,
// 함수 선언문을 통해 암묵적으로 생성된 식별자는 함수 객체로 초기화된다.

// 변수 선언문은 런타임 이전에 실행되어 undefined로 초기화되지만 변수 할당문의 값은 할당문이 실행되는 시점,
// 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.
// 따라서 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.

// Function 생성자 함수
// 매개변수 목록과 함수 몸체를문자열로 전달하면서 new 연산자와 함께 호출하면 함수 객체를 생성해서 반환한다.
// new 연산자 없이 호출해도 결과는 동일하다.
var add = new Function("x", "y", "return x + y");
console.log(add(2, 5)); // 7
// Function함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.
// Function함수로 생성한 함수는 클로저(closure)를 생성하지 않는 등 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();
console.log(add1(1, 2)); // 13

var add2 = (function () {
  var a = 10;
  return new Function("x", "y", "return x + y + a");
})();
//! console.log(add2(1, 2)); // RE: a is not defined

// 화살표 함수(arrow function)
// ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표 함수 => 를 사용해 좀 더 간략하게 함수를 선언할 수 있다.
const add3 = (x, y) => x + y;
console.log(add(2, 5)); // 7
// 화살표 함수는 항상 익명으로 정의한다.
// 표현만 간략화 한 것이 아니라 내부 동작도 간략화 되어 있다.
// 화살표 함수의 특징
// - 생성자 함수로 사용할 수 없다.

// - 기존 함수와 this 바인딩 방식이 다르다.
// - prototype 프로퍼티가 없다.
// - arguments 객체를 생성하지 않는다.

// 함수 호출
// 함수 호출 연산자 내에는 0개 이상의 인수를 쉼표로 구분해서 나열한다.
// 함수를 호출하면 현재의 실행 흐름을 중단하고 호출된 함수로 실행 흐름을 옮긴다. 이 때 매개변수에 인수가 순서대로 할당된다.

// 매개변수와 인수
// 함수를 실행하기 위해 필요한 값을 함수 외부에서 전달할 필요가 있는 경우 매개변수(paranmeter)를 통해 인수(argument)로 전달한다.
// 인수는 값으로 평가될 수 있는 표현식이어야 한다.
// 인수는 함수를 호출할 때 지정하며, 개수와 타입에 제한이 없다.

// 함수 선언문
function add(x, y) {
  return x + y;
}
// 함수 호출
// 인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);

// 함수가 호출되면 함수 몸체 내에서 매개변수가 암묵적으로 생성되고 일반 변수와 마찬가지로 undefined로 초기화 된 후 인수를 순서대로 할당한다.
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다. 즉, 매개변수의 스코프(유효범위)는 함수 내부다.
function add11(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

add11(2, 5);
// add 함수의 매개변수 x,y는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // RE: x is not defined

// 함수는 매개변수의 개수가 인수와 같은지 체크하지 않는다 (오류가 나지 않음)
// 인수가 부족한 경우 매개변수의 값은 undefined이다.
function add(x, y) {
  return x + y;
}
console.log(add(2)); // NaN

// 매개변수보다 인수가 많은 경우 초과된 인수는 무시된다.
function add(x, y) {
  return x + y;
}

console.log(add(2, 5, 10)); // 7
// 초과된 인수는 그냥 버려지지 않는다. 모든 인수는 arguments 객체의 프로퍼티로 보관된다.
function addArguments(x, y) {
  console.log(arguments); // Arguments(3) [2, 5, 10, callee: f, Symbol(Symbol.iterator): f]
  return x + y;
}

addArguments(2, 5, 10);

// 인수 확인
function add(x, y) {
  return x + y;
}
console.log(add(2)); // NaN
console.log(add("a", "b")); // ab
// 자바스크립트는 동적 타입 언어이므로 사전에 매개변수의 타입을 지정할 수 없다.
function addOnlyNumber(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // 매개변수를 통해 전달된 인수가 타입이 부적절 할 경우 에러를 발생시킨다.
    throw new TypeError("인수는 숫자값이어야 합니다~");
  }
  return x + y;
}
// console.log(addOnlyNumber(2)); // [error] Line 241: Uncaught TypeError: 인수는 숫자값이어야 합니다~
// console.log(addOnlyNumber('a','b')); // [error] Line 241: Uncaught TypeError: 인수는 숫자값이어야 합니다~

// 인수의 개수를 확인하고 싶다면 argument를 사용한다. 또는 인수가 전달되지 않는 경우 단축평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다.
function addCheckArguments(a, b, c) {
  a = a || 0; // a에 값이 없으면 false이므로 0을 넣는다.
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(addCheckArguments(1, 2, 3)); // 6
console.log(addCheckArguments(1, 2)); // 3
console.log(addCheckArguments(1)); // 1
console.log(addCheckArguments()); // 0

// ES6에서 도입된 매개변수 기본값을 사용하면 함수 내부를 간소화할 수 있다.
// 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우와 undefined를 전달한 경우에만 유효하다.
function addDefault(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(addDefault(1, 2, 3)); // 6
console.log(addDefault(1, 2)); // 3

/* ------------------------------- 매개변수의 최대 개수 ------------------------------ */
// 매개변수가 많아지면 함수의 사용법을 어렵게 만들고 실수를 발생시킬 가능성을 증가시킨다.즉, 유지보수성이 나빠진다.
// 매개변수가 많다는 것은 함수가 여러 가지 일을 한다는 증거이므로 바람직하지 않다.
// 이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.

// 매개변수는 3개를 넘지 않는 것을 권장하지만 필요하다면 객체를 인수로 전달하는 것이 유리하다.
// 객체를 인수로 사용하는 경우 프로퍼티 키만 정확히 지정하면 매개변수의 순서를 신경쓰지 않아도 된다. 코드의 가독성이 좋아지고 실수도 줄어든다.

// 반환문
// 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환(return)할 수 있다.
function multiply(x, y) {
  return x * y; // 반환문
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15
// 함수 호출은 표현식이다. 함수 호출 표현식은 return 키워드가 반환한 표현식의 평가 결과, 즉 반환값으로 평가된다.

// 반환문은 두가지 역할을 한다.
// 1. 반환문은 함수의 시행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
function multiply(x, y) {
  return x * y;
  console.log("실행되지 않는다.");
}
console.log(multiply(3, 5)); // 15

// 2. 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다.
//    return키워드 뒤에 반환값으로 사용할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
function foo() {
  return;
}
console.log(foo()); // undefined
// 반환문은 생략할 수 있다 이때 함수 마지막 문까지 실행한 후 undefined를 반환한다.
function foo() {
  // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}
console.log(foo()); // undefined

// return 키워드와 반환값으로 사용할 표현식 사이에 줄바꿈이 있으면 ASI(세미콜론 자동 삽입 기능)에 의해 의도치 않게 실행될 수 있다.
function multiply(x, y) {
  return; // ASI에 의해 세미콜론이 추가됨
  x * y; // 무시된다.
}

console.log(multiply(2, 5)); // undefined

// 반환문은 함수 몸체 내부에서만 사용 가능하다. 전역에서 사용하면 문법에러가 발생한다.
// Node.js는 모듈 시스템에 의해 파일별로 독립적인 파일 스코프를 갖는다.
// 따라서 Node.js 환경에서는 파일의 가장 바깥영역에 사용해도 에러가 발생하지 않는다.

// 참조에 의한 전달과 외부 상태의 변경
// 매개변수도 함수 몸체 내부에서 변수와 동일하게 취급되므로 매개변수 또한 타입에 따라 값에 의한 전달, 참조의 의한 전달 방식을 따른다.

// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 반환한다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

// 외부 상태
var num = 100;
var person = { name: "Lee" };

console.log(num); // 100
console.log(person); // { name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100
// 객체는 원본이 훼손된다.
console.log(person); // {name: Kim}

// 이러한 문제의 해결 방법 중 하나는 객체를 불변 객체(immutable object)로 만들어 사용하는 것이다.
// 객체의 복사본을 새롭게 생성하는 비용은 들지만 객체를 마치 원시값처럼 변경 불가능한 값으로 동작하게 만드는 것이다.
// 이를 통해 객체의 상태 변경을 원천 봉쇄하고 객체의 상태 변경이 필요한 경우에는 객체의 방어적 복사(defensive copy)를 통해 원복객체를 완전히 복제한다.
// 즉 깊은 복사를 통해 새로운 객체를 생성하고 재할당한다. 이를 통해 외부 상태가 변경되는 부수효과를 없앨 수 있다.

// -----------다양한 함수의 형태
// 1. 즉시 실행 함수
// 함수 정의와 동시에 호출되는 함수를 즉시 실행 함수(IIFE, Immediately Invoked Function Express)라고 한다.
// 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.
(function () {
  var a = 3;
  var b = 6;
  return a * b;
})();

// 즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
// 그룹 연산자(...) 내의 기명 함수는 함수 선언문이 아니라 함수 리터럴로 평가되며 함수이름은 함수 몸체에서만 참조할 수 있으므로 다시 호출할 수 없다.

// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 6;
  return a * b;
})();
//! foo(); // RE: foo is not defined

// 즉시 실행 함수는 반드시 그룹 연산자(...)로 감싸야 한다.
// 그룹 연산자의 피연산자는 값으로 평가되므로 기명 또는 무명 함수를 그룹 연산자로 감싸면 함수 리터럴로 평가되어 함수 객체가 된다.
console.log(typeof function f() {}); // function
console.log(typeof function () {}); // function

// 그룹 연산자 이외의 연산자를 사용할 수 있다.
(function () {})(); // 가장 일반적인 방법

(function () {})();

!(function () {})();

+(function () {})();

// 즉시 실행 함수도 일반 함수 처럼 값을 반환할 수 있고 인수를 전달할 수 있다.
res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); // 15

// 2. 재귀 함수(recursive function)
// 함수가 자기자신을 호출하는 것을 재귀 호출(recursive call)라 한다. 재귀 함수는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수이다.
// 재귀 함수는 반복되는 처리를 위해 사용한다.
function countDown(n) {
  if (n < 0) return;
  console.log(n);
  countDown(n - 1);
}
countDown(10);
// 이처럼 반복되는 처리를 반복문 없이 처리할 수 있다.
// 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
// 함수 내부에서 자기 자신을 호출할 때 사용한 식별자 factorial은 함수 이름이다. 함수 이름은 함수 몸체에서만 유효하다.
// 따라서 함수 내부에서는 함수 이름을 사용해 자기자신을 호출할 수 있다.
// 단, 함수 외부에서는 반드시 함수를 가리키는 식별자로 해야한다.

// 함수 표현식
var factorial = function foo(n) {
  if (n <= 1) return 1; // 탈출 조건
  return n * foo(n - 1);
};
console.log(factorial(10));

// 재귀 함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.
// 탈출 조건을 만들지 않으면 함수가 무한히 호출되어 스택 오버플로(stack overflow)가 발생한다.
// 대부분의 재귀 함수는 for이나 while문으로 구현 가능하다. 따라서 재귀함수는 재귀 함수를 사용하는 편이 직관적으로 더 이해하기 쉬울때만 사용하는 것이 바람직하다.

// 3. 중첩 함수(nested function)
// 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수(inner function)라고 한다.
// 중첩 함수를 포함하는 함수를 외부 함수(outer function)라고 한다.
// 중첩 함수는 외부 함수 내부에서만 호출할 수 있다.
// 일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼 함수(helper function)의 역할을 한다.
function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
  inner();
}
outer();

// ES6부터 함수는 문이 위치할 수 있는 문맥이라면 어디든지 가능하다.(if문이나 for문 등의 코드 블록에서도 정의할 수 있다.)
// 단, 호이스팅으로 인해 혼란이 발생할 수 있으므로 if문이나 for문에서 정의하는 것은 바람직 하지 않다.

// 4. 콜백 함수
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}
repeat(5); // 0 1 2 3 4

// repeat함수는 console.log(i)에 강하게 의존하고 있으므로 다른 일을 할 수 없다.
// 만약 repeat 함수 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

function repeat1(n) {
  for (var i = 0; i < n; i++) console.log(i);
}
repeat1(5); // 0 1 2 3 4

function repeat2(n) {
  for (var i = 0; i < n; i++) if (i % 2) console.log(i);
}
repeat2(5); // 1 3

// 위의 함수들은 반복하는 일은 변하지 않고 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다르다.
// 즉, 함수의 일부분만 다르기 때문에 매번 함수를 새롭게 정의해야 한다.
// 이 문제는 함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경 되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다.

function repeatCallback(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log("logAll : " + i);
};
repeatCallback(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log("logOdds : " + i);
};
repeatCallback(5, logOdds);
// 경우에 따라 변경되는 일을 함수 f로 추상화하여 외부에서 전달한다.

// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback function)이라고 한다.
// 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함술르 고차 함수(Higher-Order Function)라고 한다.
// 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
// 고차 함수는 매개변수를 통해 전달받은 콜백함수의 호출 시점을 결정해서 호출한다.
// 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3
// repeat 함수가 호출될 때마다 함수 객체가 생성된다.
// 콜백 함수를 다른 곳에서도 호출하거나, 콜백 함수를 전달받는 함수가 자주 호출된다면
// 함수 외부에서 콜백 함수를 정의한 후 함수 참조를 고차 함수에 전달하는 편이 효율적이다.

// 콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에 활용되는 중요한 패턴이다.
// 콜백 함수를 사용한 이벤트 처리
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button Clicked!");
});

// 콜백 함수를 사용한 비동기 처리
setTimeout(function () {
  console.log("1초 경과");
}, 1000);

// 5. 순수 함수(pure function)와 비순수 함수(impure function)
// 순수 함수
// 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수라고 한다.
// 비순수 함수
// 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수효과가 없는 함수를 비순수 함수라고 한다.

// 순수 함수는 동일한 인수가 주어지면 항상 동일한 값을 반환한다.
// 순수 함수는 최소 하나 이상의 인수를 전달받는다.
// 순수 함수는 인수를 변경하지 않는 것이 기본이다. 다시 말해, 순수 함수는 인수의 불변성을 유지한다.
var count = 0;
function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count); // 1
count = increase(count);
console.log(count); // 2

// 비순수 함수는 외부 상태를 변경하는 부수 효과(side effect)가 있다.
// 비순수 함순느 외부 상태에 의존하거나 외부 상태를 변경하는 함수다.

var count = 0;
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}
increase();
console.log(count); // 1
increase();
console.log(2); // 2
// 위와 같이 인수로 전달받지 않고 외부 상태를 직접 참조하면 외부 상태에 의존하게 되어 반환 값이 변할 수 있고,
// 외부 상태도 변경할 수 있으므로 비순수 함수가 된다.
const Test = () => {
  return true;
};
