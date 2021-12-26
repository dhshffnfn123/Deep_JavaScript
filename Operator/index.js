// 산술 연산자
5 * 4; // 20

// 문자열 연결 연산자
"My name is" + "Lee"; // My name is Lee

// 할당 연산자
color = "red"; // red

// 비교 연산자
3 < 5; // false

// 논리 연산자
true && false; // false

// 타입 연산자
typeof "Hi"; // string

// 피연산자가 값이라면 연산자는 피연산자를 연산하여 새로운 값을 만든다.고 볼 수 있다.

/* --------------------------------- 산술 연산자 --------------------------------- */
// 산술 연산자는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다.
// 불가능한 경우 NaN을 반환한다.
// 산술 연산자는 피연산자의 개수에 따라 '이항 산술 연산자'와 '단항 산술 연산자'로 구분할 수 있다.

/* ---------------------------- 이항(Binary) 산술 연산자 --------------------------- */
// 두 개의 피연산자를 산술 연산하여 숫자 값을 만든다.
// 모든 이항 연산자는 피연산자의 값을 변경하는 부수 효과가 없다. (어떤 연산을 해도 피연산자의 값은 바뀌지 않고 새로운 값을 만든다.)
// 이항 산술 연산자 : +, -, *, /, % 가 있다.

/* ---------------------------- 단항(unary) 산술 연산자 ---------------------------- */
// 단항 산술 연산자는 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
// 단항 산술 연산자 : ++, --, +, - (++, -- 는 부수효과가 있다.), (-는 양수를 음수로, 음수를 양수로 변환한 값을 반환한다.)

var x = 1;
// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

// 피연산자 앞에 위치한 전위 증/감 연산자는 먼저 피연산자의 값을 증/감 시킨 후 다른 연산을 수행한다.
// 피연산자 뒤에 위치한 후위 증/감 연산자는 먼저 다른 연산을 수행한 후 피연산자의 값을 증/감 시킨다.
var x = 5,
  result;

// 선할당 후증가
result = x++;
console.log("result : " + result, "x : " + x); // result : 5  x : 6

// 선증가 후할당
result = ++x;
console.log("result : " + result, "x : " + x); // result : 7  x : 7

// 선할당 후감소
result = x--;
console.log("result : " + result, "x : " + x); // result : 7  x : 6

// 선감소 후할당
result = --x;
console.log("result : " + result, "x : " + x); // result : 5  x : 5

// 아무런 효과가 없다
+10; // 10
+-10; // -10

// 숫자타입이 아닌 피연산자에 + 단항 연산자를 사용하면 숫자 타입으로 변환하여 반환한다.
// 이 때 피연산자를 변경하는 것이 아닌 숫자타입으로 변환한 값을 생성해서 반환한다. 즉, 부수효과가 없다.
var x = "1";

//문자열을 숫자로 타입을 변환한다.
console.log(+x); // 1
// 부수효과는 없다.
console.log(x);

// boolean 타입을 숫자 타입 변환한다. (true는 1, false는 0)
x = true;
console.log(+x); // 1
// 부수효과는 없다.
console.log(x); // true

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
console.log(+x); // NaN
// 부수효과는 없다
console.log(x);

// - 단항 연산자는 피연산자의 부호를 반전한 값을 반환한다. + 연산자와 비슷하지만 부호를 반전한 값을 생성하여 반환한다. 따라서 부수효과는 없다.
-(-10) - // 10 (부호 반전)
  "10"; // -10 (숫자로 변환)
-true; // -1 (불리언 값을 숫자로 타입 변환)
-"Hello"; // NaN

/* ------------------------------ 문자열 연결 연산자 ----------------------------- */
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
"1" + 2; // 12
1 + "2"; // 12

// 산술 연산자
1 + 2; // 3

// true는 1로, false는 0으로 타입 변환된다.
1 + true; // 2
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

// 위와 같이 암묵적으로 타입이 변환되는 것을 '암묵적 타입 변환' 또는 '타입 강제 변환'이라 한다.

/* --------------------------------- 할당 연산자 --------------------------------- */
// 할당 연산자는 우항에 있는 피연산자의 평가를 좌항에 할당한다. 변수 값이 변하는 부수효과가 있다.
// 할당 연산자 : =, +=, -=, *=, /=, %=
var x;

x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x /= 5;
console.log(x); // 10

x %= 5;
console.log(x); // 0

var str = "My name is ";
// 문자열 연결 연산자
str += "Lee";
console.log(str);

// 할당문은 표현식인 문이다.
var x;
console.log((x = 5));

// 할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다.(이러한 특징을 활용해 여러 변수에 동일한 값을 연쇄 할당할 수 있다.)
var a, b, c;
a = b = c = 0;
console.log("a = " + a + " b = " + b + " c = " + c);

/* -------------------------------- 비교 연산자 ------------------------------- */
// 비교 연산자는 좌항과 우항의 값을 비교한 후 불리언 값을 반환한다.

/* ------------------------------ 동등/일치 연산자 ------------------------------ */
// 동등 과 일치 연산자는 좌항과 우항을 비교하여 불리언 값을 반환한다는 것은 같지만 엄격성이 다르다. (부수효과는 없다.)
// 비교 연산자 : ==, ===, !=, !==

// 동등 비교 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시키고 같은 값인지 비교한다.
// 타입은 다르더라도 타입이 변환된 후 값이 같다면 true를 반환한다.
5 == 5; // true
5 == "5"; // true

// 안티패턴 (사용을 지양)
"0" == ""; // false
0 == ""; // true
0 == "0"; // true
false == "false"; // false
false == "0"; // true
false == null; // false
false == undefined; // false

// 일치 비교 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다.
5 === 5; // true
5 === "5"; // false

// 일치 비교 연산자에서 주의할 것은 NaN이다.
NaN === NaN; // false (NaN은 자신과 일치하지 않는 유일한 값이다.)
// 숫자가 NaN인지 검사하려면 빌트인 함수Number.isNaN을 사용한다.
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN(1 + undefined); // true

// 자바스크립트에는 양의 0과 음의 0이 있는데 이 들을 비교하면 true를 반환한다.
0 === -0; // true
0 == -0; // true

// Object.is
// 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치연산자와 같다.
-0 === +0; // true
Object.is(-0, +0); // false
NaN === NaN; // false
Object.is(NaN, NaN); // true

// 부동등 비교 연산자와 불일치 비교 연산자는 각각 동등과 일치의 반대 개념이다.
5 != 8; // true
5 != 5; // false
5 != "5"; // false

5 !== 8; // true
5 !== 5; // false
5 !== "5"; // true

// 대소 관계 비교 연산자는 크기를 비교하여 불리언 값을 반환한다.
// 대소 관계 비교 연산자 : <, >, <=, >=
5 > 0; // true
5 > 5; // false
5 >= 5; // true
5 <= 5; // true

/* -------------------------------- 삼항 조건 연산자 ------------------------------- */
// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다.
// 평가 결과에 따라 반환할 값을 결정한다. 부수효과는 없다.
// 조건식 ? 조건식이 true일 때 반환할 값 : false일 때 반환할 값
var x = 2;
// 2 % 2 는 0이고 0은 false로 변환된다.
var result = x % 2 ? "odd" : "even";
console.log(result); // even

var x = 2,
  result;
if (x % 2) result = "odd";
else result = "even";

console.log(result); // even

// 삼항 연산자는 값처럼 사용할 수 있지만 if...else는 값처럼 사용할 수 없다.
var x = 10;
// var result = if (x % 2) { result = 'odd' } else { result = 'even' } // SyntaxError: Unexpected token if

/* --------------------------------- 논리 연산자 --------------------------------- */
// 논리 연산자는 좌항과 우항의 피연산자를 논리 연산한다.
// 논리 연산자 : ||(논리합 OR), && (논리곱 AND), !(부정 NOT)
true || true; // T
true || false; // T
false || false; // F
false || true; // T

true && true; // T
true && false; // F
false && false; // F
false && true; // F

!true; // F
!false; // T

// 암묵적 타입 변환
!0; // T
!"Hello"; // F

// 논리합 또는 논리곱의 평가 결과는 불리언 값이 아닐 수도 있다. 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
console.log("Cat" || "Dog"); // Cat
console.log("Cat" && "Dog"); // Dog

// 논리연산자로 구성된 복잡한 표현식은 가독성이 좋지 않으므로 드 모르간의 법칙을 사용하자.
!(x || y) === (!x && !y);
!(x && y) === (!x && !y);

/* --------------------------------- 쉼표 연산자 --------------------------------- */
// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.
var x, y, z;
(x = 1), (y = 2), (z = 3); // 3

/* --------------------------------- 그룹 연산자 --------------------------------- */
// 그룹 연산자는 소괄호('()')로 피연산자를 감싸는 그룹 연산자는 자신의 피연산자인 표현식을 가장 먼저 평가한다. 우선순위 조절이 가능하다.
// 우선순위가 가장 높다.
10 * 2 + 3; // 23
10 * (2 + 3); // 50

/* ------------------------------ typeof 연산자 ----------------------------- */
// typeof 연산자는 피연산자의 데이터 타입을 문자열로 반환한다.
// 반환에는 7가지 종류가 있다. number, boolean, undefined, symbol, object, function 중 하나를 반환한다. null을 반환하는 경우는 없다.
typeof ""; // string
typeof 1; // number
typeof NaN; // number
typeof true; // boolean
typeof undefined; // undefined
typeof Symbol(); // symbol
typeof null; // object
typeof []; // object
typeof {}; // object
typeof new Date(); // object
typeof /test/gi; // object
typeof function () {}; // function

// null타입을 확인할 때는 typeof 연산자가 아닌 === 연산자를 사용하자
var foo = null;
typeof foo === null; // false
foo === null; // true

// 선언하지 않은 식별자를 typeof 연산자로 연산하면 undefined를 반환한다.
typeof undeclared; // undefined

/* --------------------------------- 지수 연산자 --------------------------------- */
// ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다.
2 ** 2; // 4
2 ** 2.5; // 5.6568...
2 ** 0; // 1
2 ** -2; // 0.25

// 지수 연산자가 도입되기 전에는 Math.pow메서드를 사용했다.
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.6568...
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25

// 지수 연산자의 결합 순서는 우항에서 좌항이다. 즉, 우결합성을 갖는다.
2 ** (3 ** 2); // 512
Math.pow(2, Math.pow(3, 2)); // 512

// 음수를 거듭제곱 하려면 괄호로 묶어야 한다.
// -5 ** 2; // Error
(-5) ** 2; // 25

// 지수 연산자는 다른 연산자와 마찬가지로 할당 연산자와 함께 사용할 수 있다.
var num = 5;
num **= 2; // 25

// 지수연산자는 이항 연산자 중 우선순위가 가장 높다
2 * 5 ** 2; // 50

// 부수 효과가 있는 연산자는 할당 연산자(=), 증/감 연산자(++/--), delete 연산자 이다.
var x;
x = 1;
console.log(x); // 1

x++;
console.log(x); // 2

var o = { a: 1, b: 2 };
// delete 연산자는 객체의 프로퍼티를 삭제하는 부수효과가 있다. 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
delete o.a;
console.log(o); // { "b" : 2 }

/* ------------------------------- 연산자 우선순위 ------------------------------ */
// 여러개의 연산자로 이루어진 연산자가 실행되는 순서를 말한다. 우선순위가 높을수록 먼저 실행된다.
// 연산자의 종류가 많아서 기억하기 어렵고 실수하기도 쉽기 때문에 주로 우선순위가 가장 높은 ()그룹연산자를 사용하여 명시적으로 조절한다.
