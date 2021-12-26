/* -------------------------------------------------------------------------- */
/*                        제어문 (Control flow Statement)                      */
/* -------------------------------------------------------------------------- */

// 조건에 따라 코드 블록을 실행하거나 반복 실행한다. 코드의 흐름을 인위적으로 제어가 가능하다.

/* -------------------------- 블록문(block statement) -------------------------- */
// 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다.
// 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적이다.
// 문의 끝에는 세미콜론을 붙이는 것이 일반적이나 블록문은 자체종결성을 가지기 때문에 세미콜론을 붙이지 않는다.

// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}

/* ----------------------- 조건문(Conditional statement) ----------------------- */
// 조건문은 주어진 조건식의 평가결과에 따라 코드블록의 실행을 결정한다. 불리언 값으로 평가될 수 있는 표현식이다.
// 자바스크립트에는 if... else와 switch 문으로 두 가지 조건문을 제공한다.

/* ------------------------------- if...else 문 ------------------------------ */
// 주어진 조건식의 논리적 참 또는 거짓으로 실행할 코드블록을 결정한다.
// if (조건식) {
// true일 경우 이 코드블록 실행
// } else {
// false일 경우 이 코드블록 실행
// }

// 불리언 값이 아닌 값으로 평가되면 암묵적으로 타입을 변환하여 불리언 값을 반환한다.

// 조건식을 추가하여 조건에 따라 실행될 코드 블록을 늘리고 싶으면 else if 문을 사용한다.
// else if문과 else는 옵션이다. 즉, 사용하지 않아도 된다.
// if와 else는 2번 이상 사용할 수 없지만 else if는 여러번 사용이 가능하다.
var num = 2;
var kind;

if (num > 0) {
  kind = "양수"; // 음수를 구별할 수 없다.
}
console.log(kind); // 양수

if (num > 0) {
  kind = "양수";
} else {
  kind = "음수"; // 0은 음수가 아니다.
}
console.log(kind); // 양수

if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "0";
}
console.log(kind); // 양수

// 코드블록 내의 문이 한줄이라면 중괄호를 생략할 수 있다.
var num = 2;
var kind;

if (num > 0) kind = "+";
else if (num < 0) kind = "-";
else kind = "0";

console.log(kind); // +

// if문은 삼항 연산자로 바꿀 수 있는데 만약 경우의 수가 세 가지라면 다음과 같이 쓸 수 있다.
var kind = num ? (num > 0 ? "+" : "-") : "0";
console.log(kind);

/* --------------------------------- Switch문 -------------------------------- */
// 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행 흐름을 옮긴다.
// case문은 상황을 의미하는 표현식을 저장하고 클론으로 마친다. 그 뒤에 실행할 문들을 위치시킨다.
// 일치하는 case문이 없다면 실행순서는 default문으로 이동한다. 선택사항으로, 사용할 수도 있고 사용하지 않을 수도 있다.
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 3:
    monthName = "March";
  case 7:
    monthName = "July";
  case 11:
    monthName = "November";
  default:
    monthName = "Invalid month";
}

console.log(monthName); // Invalid month

// switch 문이 끝날 때까지 이후의 모든 case문과 default문을 실행하는 것을 폴스루(fall through)라 한다.
// 폴스루를 피하기 위해서는 case문에 break문을 넣어준다. break문은 코드 블록에서 탈출하는 역할을 한다.

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 3:
    monthName = "March";
    break;
  case 7:
    monthName = "July";
    break;
  case 11:
    monthName = "November";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November

// 일반적으로 default에는 break문을 생략한다.
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘 : 연도가 4로 나누어 떨어지면 윤년이다. 연도가 100으로 나누어 떨어지면 평년, 400은 제외
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days);

// if...else 문으로 해결할 수 있다면 if...else를 사용하는 것이 좋다.

/* ----------------------------------- 반복문 ---------------------------------- */
// 반복문은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 다시 평가하여 거짓일 때 까지 반복한다.
// for, while, do while문이 있다.

/* ---------------------------------- for문 ---------------------------------- */
// 조건식이 거짓으로 평가될 때까지 코드블록을 반복 실행한다.
// 주로 반복을 의미하는 iteration의 i를 사용한다.
// 변수 선언문은 한 번만 실행된다.
for (var i = 0; i < 2; i++) {
  console.log(i);
} // 0 1

// for문의 변수 선언문, 조건식, 증감식은 모두 옵션이므로 반드시 사용할 필요는 없지만 무한루프가 될 수 있다.
// for ( ;; ) { ... }
// for문 내에 for문을 중첩해 사용할 수 있다. 이를 중첩 for문 이라 한다.
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}

/* --------------------------------- while문 --------------------------------- */
// while문은 주어진 조건식의 평가 결과가 참이면 코드블록을 계속해서 반복 실행한다.
// for문은 반복함수가 명확할 때 주로 사용하고 while문은 불명확할 때 주로 사용한다.
// 만약 조건식의 평가 결과가 불리언 값이 아니면 강제 변환하여 구별한다.
var count = 0;

while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

// if문을 사용해 탈출 조건을 만들고 break문을 넣으면 된다.
var count = 0;
while (true) {
  console.log(count);
  count++;
  if (count === 3) break;
} // 0 1 2

/* ------------------------------- do...while문 ------------------------------ */
// do...while문은 코드 블록을 먼저 실행하고 조건식을 평가한다.(무조건 한번 이상 실행한다.)
var count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);

/* --------------------------------- break문 --------------------------------- */
// 레이블 문, 반복문, switch문을 탈출한다. 이 외의 break문을 사용하면 SyntaxError(문법에러)가 발생한다.
/* if (true) {
  break; // error
} */
// 레이블 문이란  식별자가 붙은 문을 말한다. ( foo: console.log() )
foo: {
  console.log("foo" + 1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log("foo" + 2);
}
console.log("Done!");

// 중첩된 for문의 내부 for문에서 break문을 사용하면 내부를 탈출하여 외부 for문으로 진입한다.
// 이 때 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}
console.log("Done!");
// 레이블문을 사용하면 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지므로 사용을 권장하지 않는다.

/* -------------------------------- continue문 ------------------------------- */
// continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동 시킨다.
// 반복문을 탈출하지는 않는다.
var string = "Hello world!";
var search = "l";
var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
console.log("l의 갯수 : " + count);
// String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); // 3
