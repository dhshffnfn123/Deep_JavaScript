/* --------------------------------- Number --------------------------------- */
// C나 자바와 달리 하나의 숫자타입만 존재한다.
// 숫자 타입의 값은 배정밀도 64비트 부동소수점 형식을 따른다. 즉, 모든 수를 실수로 처리하며, 정수만 표현하기 위한 데이터타입이 없다.
var integer = 10;
var double = 10.5;
var negative = -10;

var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary === octal); // true
console.log(octal == hex); // true

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 숫자 타입은 추가적으로 세가지의 특별한 값도 표현할 수 있다.
// Infinity : 양의 무한대
// -Infinity : 음의 무한대
// NaN : 산술 연산 불가(not-a-number)
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "string"); // NaN
// 자바스크립트는 대소문자를 구분하기 때문에 NAN Nan nan과 같이 표현하면 에러가 발생한다. (식별자로 해석)
// var x = nan; // ReferenceError : nan is not defined

/* --------------------------------- String --------------------------------- */
// 문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
// 문자열을 '',"",`` 로 감싸서 사용한다. 가장 일반적으로 ''를 사용한다.
// 자바스크립트의 문자열을 원시타입이며, 변경 불가능한 값이다.

// 따옴표로 감싸지 않으면 식별자로 인식한다.
// var string = hello; // ReferenceError : hello is not defined

/* --------------- template literal ---------------- */
// ES6부터 템플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었음
// '',""가 아닌 ``(백틱)을 사용한다.
// 템플릿 리터럴은 런타임에 런타임에 일반 문자열로 변환되어 처리된다.
var template = `Template literal`;
console.log(template);

// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
// 따라서 백슬래시 '\' 로 시작하는 이스케이프 시퀀스를 사용해야 한다.
/* 
\0 => Null
\b => BackSpace
\f => Form Feed: 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다.
\n => Line Feed: 다음 행으로 이동
\r => Carriage Return: 커서를 처음으로 이동
\t => 탭(수평)
\v => 탭(수직)
\uXXXX => 유니코드 ex) '\u0041' = 'A', '\uD55C' = '한'
\' => 작은 따옴표
\" => 큰따옴표
\\ => 백슬래시
*/

// 줄바꿈과 들여쓰기가 적용된 HTML문자열
var template = '\n<ul>\n\t<li><a href="#">Home</a><li>\n</ul>';
console.log("Escape Sequence" + template);

// 일반 문자열과 달리 템플릿 리터럴은 시퀀스를 사용하지 않아도 된다.
var template = `
<ul>
    <li><a href="#">Home</a><li>
</ul>`;
console.log("Template Literal" + template);

// 문자열은 '+'를 사용하여 연결할 수 있다.
var first = "ByungHoon";
var last = "An";
console.log("My name is " + last + first);

// 템플릿 리터럴에서는 표현식 삽입을 통해 간단히 문자를 삽입할 수 있다.
console.log(`My name is ${last}${first}`);

// 표현식을 사용하려면 ${}를 사용한다. 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환된다.
console.log(`1 + 2 = ${1 + 2}`);

// 일반 문자열에서 표현식을 사용하면 문자열로 취급된다.
console.log("1 + 2 = ${1 + 2}");

/* --------------------------------- Boolean -------------------------------- */
// 논리적 참 또는 거짓을 나타내는 true와 false뿐이다.
var foo = true;
console.log(foo);

foo = false;
console.log(foo);
// 조건문에서 자주 사용한다.

/* -------------------------------- undefined ------------------------------- */
// undefined의 값은 undefined가 유일하다.
// var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 된다.
var foo_undefined;
console.log(foo_undefined);
// 변수에 값이 없다는 것을 명시할 때는 undefined가 아닌 null을 할당한다.

/* ---------------------------------- null ---------------------------------- */
// null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구분하므로 Null, NULL 등과 다르다.
// null 은 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다. (이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.)
var foo = "Lee";
foo = null;
// 변수의 스코프를 좁게 만들어 변수 자체를 소멸 시키는 것이 더 좋은 방법이다.

// 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다.
var element = document.querySelector("myClass"); // myClass가 없다면 null을 반환한다.
console.log(element); // null

/* --------------------------------- Symbol --------------------------------- */
// 심벌은 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입이다.
// 다른 값과 중복되지 않는 유일무이한 값이다.
// 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용
// 심벌은 Symbol함수를 호출해 생성한다. (외부에 값이 노출되지 않으며, 다른 값과 절대 중복되지 않는다.)
var key = Symbol("key"); // 심벌 값 생성
console.log(typeof key); // symbol

var obj = {}; // 객체 생성

obj[key] = "value";
console.log(obj[key]); // value

/* --------------------------------- 동적 타이핑 --------------------------------- */
// typeof : 연산자 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다.
var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = "Hello";
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = [];
console.log(typeof foo);

foo = function () {};
console.log(typeof foo);
