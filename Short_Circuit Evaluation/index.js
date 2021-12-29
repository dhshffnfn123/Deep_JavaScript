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
