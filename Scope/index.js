/* -------------------------------------------------------------------------- */
/*                                    스코프                                   */
/* -------------------------------------------------------------------------- */
// 스코프(유효범위)는 매개변수를 참조할 수 있는 유효범위이다.
// 자바스크립트의 스코프는 다른 언어의 스코프와 구별되는 특징이 있다.
// var 키워드로 선언한 변수와 let 또는 const 키워드로 선언한 변수의 스코프도 다르게 동작한다.

function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다. 즉, 매개변수의 스코프는 함수 몸체 내부이다.
  console.log(x, y);
  return x + y;
}
add(2, 5);
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // RE: x is not defined

// 변수는 코드의 가장 바깥 영역뿐 아니라 코드 블록이나 함수 몸체 내에서도 선언할 수 있다.
// 이 때 코드 블록이나 함수는 중첩될 수 있다.
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수
if (true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; // 중첩된 코드블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내부에서 선언한 변수
  function bar() {
    var var5 = 5; // 중첩된 함수 내부에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // RE
// console.log(var5); // RE

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
// 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다.

var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}
foo();
console.log(x); // global
// 자바스크립트 엔진은 이름이 같은 두 개의 변수 중에서 어떤 변수를 참조해야 할 것인지를 결정해야한다.
// 이를 식별자 결정 identifier resolution이라 한다.
// 자바스크립트 엔진은 스코프를 통해 어떤 변수를 참조해야 할 것인지 결정한다.
// 따라서 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙이라고 할 수 있다.

// 자바스크립트 엔진은 코드를 실행할 때 코드의 문맥context을 고려한다. 코드가 어디서 실행되며 주변에 어떤 코드가 있냐에 따라 다른 결과를 만들어 낸다.

// ************** 코드의 문맥과 환경 **************
// '코드가 어디서 실행되며 주변에 어떤 코드가 있는지'를 렉시컬 환경(lexical environment)이라고 부른다.
// 즉 코드의 문맥은 렉시컬 환경으로 이뤄진다. 이를 구현한 것이 실행 컨텍스트(execution context)이며, 모든 코드는 실행 컨텍스트에서 평가되고 실행된다.

// 식별자는 어떤 값을 구별할 수 있어야 하므로 유일(unique)해야 한다. 즉, 하나의 값은 유일한 식별자에 연결(name binding)되어야 한다.

// ************** var 키워드로 선언한 변수의 중복 선언 **************
// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다. 이는 의도치 않게 변수값이 재할당되어 변경되는 부작용을 발생시킨다.
function foo() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x); // 2
}
foo();
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.

/* --------------------------------- 스코프의 종류 -------------------------------- */
// 코드는 전역(global)과 지역(local)으로 구분할 수 있다.
// 전역에서 선언된 변수는 전역 스코프를 갖는 전역 변수이고, 지역에서 선언된 변수는 지역 스코프를 갖는 지역 변수다.

// ************** 전역과 전역 스코프 **************
// 전역이란 코드의 가장 바깥 영역을 말한다.
// 전역은 전역 스코프를 만든다. 전역에 변수를 선언하면 전역변수가 된다. 전역변수는 어디서든지 참조할 수 있다.

// ************** 지역과 지역 스코프 **************
// 지역이란 함수 몸체 내부를 말한다.
// 지역은 지역 스코프를 만든다. 지역에 변수를 선언하면 지역변수가 된다.
// 지역 변수는 자신이 선언된 지역과 하위 지역(중첩 함수)에서만 참조를 할 수 있다.
// 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

/* --------------------------------- 스코프 체인 --------------------------------- */
// 함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다. 이는 스코프가 함수의 중첩에 의해 계층적 구조를 갖는다는 것을 의미한다.
// 모든 스코프는 하나의 계층적 구조로 연결되며, 모든 지역 스코프의 최상위 스코프는 전역 스코프다.
// 스코프가 계층적으로 연결된 것을 스코프 체인(scope chain)이라 한다.

// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
// 상위 스코프 방향으로 이동하며 선언된 변수를 검색(identifier resolution)한다. 이를 통해 상위 스코프에서 선언한 변수를 하위에서도 참조할 수 있다.

// ************** 스코프 체인에 의한 변수 검색 **************
// 자바스크립트 엔진은 스코프 체인을 따라 변수를 참조한느 코드의 스코프에서 시작해서 상위 스코프로 이동하며 선언된 변수를 검색한다.
// 절대 하위 스코프로 내려가면서 식별자를 검색하는 일은 없다.
// 이는 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만, 하위 스코프에서 유효한 변수를 상위에서는 참조할 수 없다.

// 스코프 체인에 의한 함수 검색
function foo() {
  // 전역 함수
  console.log("global function foo");
}

function bar() {
  function foo() {
    // 중첩 함수
    console.log("local function foo");
  }
  foo(); // 글로벌
}
bar(); // 로컬

/* -------------------------------- 함수 레벨 스코프 ------------------------------- */
// 지역은 함수 몸체 내부를 말하고 지역은 지역 스코프를 만든다고 했다. 이는 코드블록이 아닌 함수에 의해서만 지역 스코프가 생성된다는 뜻이다.
// C나 자바 등을 비롯한 대부분의 프로그래밍 언어는 함수 몸체만이 아니라 모든 코드 블록(if, for, while, try/catch 등)이 지역 스코프를 만든다.
// 위와 같은 특성을 블록 레벨 스코프(block level scope)라 한다.
// 하지만 var 키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
// 위와 같은 특성을 함수 레벨 스코프(function level scope)라 한다.
var x = 1;
if (true) {
  // var 키워드로 선언된 변수는 함수의 코드 블록만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  var x = 20;
}
console.log(x); // 20

var i = 10;
// for문에서 선언한 i는 전역변수이다. 이미 선언된 전역 변수 i가 있으므로 중복 선언이다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5 의도치 않게 값이 변경된다.
// var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
// ES6에서 도입된 let과 const 키워드는 블록 레벨 스코프를 지원한다.

/* --------------------------------- 렉시컬 스코프 -------------------------------- */
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo(); // 1
bar(); // 1
// 위의 경우 두가지 패턴을 예측할 수 있다.
// 1. 함수를 '어디서 호출'했는지에 따라 함수의 상위 스코프를 결정한다.
// 2. 함수를 '어디서 정의'했는지에 따라 함수의 상위 스코프를 결정한다.

// 첫 번째 방식을 동적 스코프(dynamic scope)라 한다.
// 함수를 정의하는 시점에는 함수가 어디서 호출될지 알 수 없다.
// 따라서 함수가 호출되는 시점에 동적으로 상위 스코프를 결정해야 하기 때문에 동적 스코프라 부른다.

// 두번째 방식을 렉시컬 스코프(lexical scope) 또는 정적 스코프(static scope)라 한다.
// 동적 스코프 방식처럼 상위 스코프가 동적으로 변하지 않고 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정되기 때문에 정적 스코프라고 부른다.
// 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.

// 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉, 함수의 상위 스코프는 언제나 자신의 정의된 스코프다.
// 이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다.
// 함수 정의가 실행되어 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다. 함수가 호출될 때마다 함수의 상위 스코프를 참조할 필요가 없기 때문이다.