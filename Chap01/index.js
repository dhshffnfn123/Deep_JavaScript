const arr = [1, 2, 3];

arr.forEach(console.log);
arr.forEach(alert);

/* ---------------------------- variable hoisting --------------------------- */
console.log(score); // undefined
var score; // 변수 선언
score = 80; // 값의 할당
console.log(score); // 80

console.log(hoisting); // undefined
var hoisting = 80; // 변수 선언과 값의 할당  => JS엔진이 선언과 할당을 각각 나누어 실행한다.
console.log(hoisting); // 80

console.log(ask); // undefined
ask = 123;
var ask;
console.log("Ask the Computer : " + ask); // 123

/* ---------------------------- Naming Convention --------------------------- */
// camelCase
var firstName;
// snake_case
var first_name;
// PascalCase
var FirstName;
// typeHungarianCase
var strFirstName; // type + identifier
var $elem = document.getElementById('myId'); // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블