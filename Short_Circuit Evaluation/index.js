/* -------------------------------------------------------------------------- */
/*                       단축 평가 (Short_Circuit Evaluation)                  */
/* -------------------------------------------------------------------------- */

// 논리합 또는 논리곱 연산자는 언제나 피연산자 중 어느 한쪽으로 평가된다.
"Cat" && "Dog"; // Dog
// 첫 번째 'Cat'은 Truthy 값이므로 true로 평가된다.
// 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자, 즉 문자열 'Dog'를 그대로 반환한다.

"Cat" || "Dog"; // Cat
// 첫 번째 피연산자가 Truthy 값이므로 true이기 때문에 두번째 피연산자까지 평가해보지 않고 바로 Cat(true)을 반환한다.

// 논리곱과 논리합 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다. 이를 '단축평가'라고 한다.
// 단축 평가는 표현식을 평가하는 도중에 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.
"Cat" || "Dog"; // Cat
false || "Dog"; // Dog
"Cat" || false; // Cat

"Cat" && "Dog"; // Dog
false && "Dog"; // false
"Cat" && false; // false

// 단축 평가를 사용하면 if문을 대체할 수 있다.
var done = true;
var message = "";

// 값이 '참'일 경우
if (done) message = "완료";

message = done && "완료";
console.log(message);

// 값이 '거짓'일 경우
var done = false;
var message = "";
if (!done) message = "미완료";
message = done || "미완료";
console.log(message);

// 단축 평가는 다음과 같은 상황에 유용하다.
// 1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
// 객체는 키와 값으로 구성된 프로퍼티의 집합이다.
// 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입에러가 발생하고 강제 종료된다.
var elem = null;
// var value = elem.value; // 타입 에러 : can not read property 'value' of null

// 단축 평가로 실행하면 에러가 나지 않는다.
var value = elem && elem.value; // null

// 2. 함수 매개변수에 기본값을 설정할 때
// 함수에 인수를 전달하지 않으면 매개변수에는 undefined가 할당된다. 이 때 단축평가를 사용해 매개변수의 기본값을 설정하면 에러를 방지할 수 있다.
// 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}
getStringLength(); // 0
getStringLength("hi"); // 2

// ES6의 기본값 설정
function getStringLength(str = "") {
  return str.length;
}
getStringLength(); // 0
getStringLength("hello"); // 5

/* ------------------------------- Optional Chaining (옵셔널 체이닝 연산자) ------------------------------ */
// ES11에서 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var elem = null;
var value = elem?.value;
console.log(value); // undefined

// 옵셔널 체이닝 연산자는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 유용하다.
var str = "";
// 문자열의 길이를 참조한다. 이때 좌항 피연산자가 false로 평가되는 Falsy 값이라도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str?.length;
console.log(length); // 0

/* ------------------------------- null 병합 연산자 ------------------------------ */
// ES11에서 도입된 null 병합 연산자 ??는 좌항의 피연산자가  null 또는 undefined인 경우 우항의 피연산자를 반환하고,
// 그렇지 않으면 좌항의 피연산자를 반환한다.
// null 병합 연산자 ??는 변수에 기본값 설정에 유용하다.
var foo = null ?? "default string";
console.log(foo); // default string

// 이전에는 논리연산자 || 를 사용하였지만 ''이나 0도 기본값으로서 유효하다면 예기치 않게 동작할 수 있다.
var foo = "" || "default string";
console.log(foo);

// null 병합 연산자는 좌항의 값이 Falsy값이라도 null이나 undefined가 아니라면 좌항의 피연산자를 그대로 반환한다.
var foo = "" ?? "default String";
console.log(foo); // ''
