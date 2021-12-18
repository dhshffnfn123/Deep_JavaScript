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
console.log(1 * 'string'); // NaN
// 자바스크립트는 대소문자를 구분하기 때문에 NAN Nan nan과 같이 표현하면 에러가 발생한다. (식별자로 해석)
var x = nan; // ReferenceError : nan is not defined


/* --------------------------------- String --------------------------------- */
// 문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
// 문자열을 '',"",`` 로 감싸서 사용한다. 가장 일반적으로 ''를 사용한다.
// 자바스크립트의 문자열을 원시타입이며, 변경 불가능한 값이다.

// 따옴표로 감싸지 않으면 식별자로 인식한다.
var string = hello; // ReferenceError : hello is not defined