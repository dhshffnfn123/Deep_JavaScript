/* -------------------------------------------------------------------------- */
/*                             타입변환 (Type Casting)                         */
/* -------------------------------------------------------------------------- */

// 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
// 개발자가 의도적으로 값의 타입을 변환하는 것을 '명시적 타입 변환(Explicit Coercion)' 또는 타입 캐스팅(Type Casting)이라 한다.

// 명시적 타입 변환
var x = 10;
var str = x.toString();
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10 (x의 값이 바뀌진 않는다.)

// 암묵적 타입 변환
var x = 10;
var str = x + "";
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10

//?/* -------------------------------- 암묵적 타입 변환 ------------------------------- */
// JS엔진은 개발자의 의도와는 상관없이 코드의 문맥을 고려해 암묵적으로 데이터 타입을 변환할 때가 있다.
"10" + 2; // '102'
5 * "10"; // 50
!0; // true

//?/* ------------------------------- 문자열 타입으로 변환 ------------------------------ */
// ES6에서 도입된 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환한다.
`1 + 1 = ${1 + 1}`; // "1 + 1 = 2"

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적 타입 변환을 수행할 때는 다음과 같이 동작한다.
// Number
0 + ""; // "0"
-0 + ""; // "0"
1 + ""; // "1"
-1 + ""; // "-1"
NaN + ""; // "NaN"
Infinity + ""; // "Infinity"
-Infinity + ""; // "-Infinity"

// Boolean
true + ""; // "true"
false + ""; // "false"

// null
null + ""; // "null"

// undefined
undefined + ""; // "undefined"

// Symbol
// (Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// Object
({} + ""); // "[object Object]"
Math + ""; // "[object Math]"
[] + ""; // ""
[10, 20] + ""; // "10, 20"
(function () {} + ""); // "function(){}"
Array + ""; // "function Array() { [native code] }"

//?/* ------------------------------- 숫자 타입으로 변환 ------------------------------- */
1 - "1"; // 0
1 * "10"; // 10
1 / "one"; // NaN
// 산술 연산자의 피연산자는 문맥상 모두 숫자 타입이어야 한다.
"1" > 0; // true
// 비교 연산자도 마찬가지로 모두 숫자 타입이어야 한다.

// '+' 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 변환한다.
+""; // 0
+"0"; // 0
+"1"; // 1
+"string"; // NaN
+true; // 1
+false; // 0
+null; // 0
+undefined; // NaN
// +Symbol() // TypeError
+{}; // NaN
+[]; // 0
+[10, 20]; // NaN
+function () {}; // NaN

//?/* ------------------------------- 불리언 타입으로 변환 ------------------------------ */
// JS엔진은 조건식의 평가결과를 불리언 타입이 아닌 Truthy 값 또는 Falsy 값으로 구분한다.
if ("") console.log("0");
if (true) console.log("1");
if (0) console.log("2");
if ("str") console.log("3");
if (null) console.log("4");
// 1 3
// Falsy로 평가되는 값 : false, undefined, null, 0, -0, NaN, ''(빈 문자열) 이 외에 값은 모두 Truthy이다.

//?/* -------------------------------- 명시적 타입 변환 ------------------------------- */
// 표준 빌트인 생성자 함수를 new 연산자 없이 호출하는 방법

//?/* ------------------------------- 문자열 타입으로 변환 ------------------------------ */
// 1. String 생성자 함수를 new 연산자 없이 호출
// 2. Object.prototype.toString 메서드를 사용
// 3. 문자열 연결 연산자를 이용하는 방법

// 1번 방법
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
String(true); // "true"

// 2번 방법
(1).toString(); // "1"
true.toString(); // "true"

// 3번 방법
1 + ""; // "1"
true + ""; // "true"

//?/* ------------------------------- 숫자 타입으로 변환 ------------------------------- */
// 1. Number 생성자 함수를 new 연산자 없이 호출
// 2. parseInt, parseFloat 함수를 사용 (문자열만 가능)
// 3. "+"단항 산술 연산자를 이용
// 4. "*"산술 연산자를 이용

// 1번
Number("0"); // 0
Number(true); // 1
Number("true"); // NaN

// 2번
parseInt("0"); // 0
parseInt("-1"); // -1
parseFloat("10.52"); // 10.52

// 3번
+"0"; // 0
+false; // 0

// 4번
"0" * 1; // 0
true * 1; // 1

//?/* ------------------------------- 불리언 타입으로 변환 ------------------------------ */
// 1. Boolean 생성자 함수를 new 연산자 없이 호출
// 2. '!'부정 논리 연산자를 두 번 사용

// 1번
Boolean("x"); // true
Boolean(""); // false
Boolean("false"); // true
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean({}); // true
Boolean([]); // true

// 2번
!!"x"; // true
!!""; // false
!!"false"; // true
!!0; // false
!!1; // true
!!null; // false... 결과는 1번과 동일
