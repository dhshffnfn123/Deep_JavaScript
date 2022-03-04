/* -------------------------------------------------------------------------- */
/*                                  함수와 일급 객체                            */
/* -------------------------------------------------------------------------- */

// 다음과 같은 조건을 만족하는 객체를 일급 객체라고 한다.
// 1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
// 3. 함수의 반환 값으로 사용할 수 있다.

// 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체이다.

// 1. 함수는 변수에 저장할 수 있다.
// 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };
// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

// 함수는 매개변수에게 함수를 전달할 수 있다
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.
// 일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며 함수의 반환값으로 사용할 수도 있다는 것이다.
// 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나이다.

//? 함수 객체의 프로퍼티
// 함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다.
function square(number) {
  return number * number;
}

console.dir(square); // index.html 참고

// square함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors 메서드로 확인해 보면 다음과 같다.
function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square)); // index.html 참고

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __prototype__ 접근자 프로퍼티를 상속받는다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")); // index.html 참고
// Object.prototype 객체의 __proto__ 접근자 프로퍼티는 모든 객체가 사용할 수 있다.

//? arguments프로퍼티
// arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
// 즉, 함수 외부에서는 참조할 수 없다.
// 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.

function multiply(x, y) {
  console.log(arguments);
  return x + y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// 함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다.

// 인수를 적게 전달하면 undefined가 선언되고, 많이 전달되면 무시된다.
// 초과된 인수는 그냥 버려지지 않는다. 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.

// arguments 객체는 인수를 프로퍼티 값으로 소유하며 프로퍼티 키는 인수의 순서를 나타낸다.
// arguments 객체의 callee 프로퍼티는 호출되어 arguments 객체를 생성한 함수, 즉 자신을 가리키고 arguments 객체의 length 프로퍼티는 인수의 개수를 가리킨다.

// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}
console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// arguments 객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌ㄴ 유사 배열 객체이다.
// 유사 배열 객체란 length 프로퍼티를 가진 객체로 for문으로 순회할 수 있는 객체를 말한다.
// 유사 배열 객체는 배열이 아니므로 배열 메서드를 사용할 경우 에러가 발생한다.
// 따라서 배열 메서드를 사용하려면 Function.prototype.call, Function.prototype.apply를 사용해 간접 호출해야 하는 번거로움이 있다.
function sum() {
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

//* caller 프로퍼티
// caller 프로퍼티는 ECMAScript 사양에 포함되지 않은 비표준 프로퍼티이다.
// 함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.
function foo(func) {
  return func();
}

function bar() {
  return "caller : " + bar.caller;
}

// 브라우저
console.log(foo(bar));
console.log(bar()); // caller: null

//* length 프로퍼티
// 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
function foo() {
  console.log(foo.length); // 0

  function bar(x) {
    return x;
  }
  console.log(bar.length); // 1

  function baz(x, y) {
    return x * y;
  }
  console.log(baz.length); // 2
}

// arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의해야한다.
// arguments 객체의 length 프로퍼티는 인자의 개수를 가리키고 함수 객체의 length는 매개변수의 개수를 가리킨다.

//* name 함수
// 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다. name ㅍ로퍼티는 ES6에서 정식 표준이 되었다.
// ES5와 ES6에서 동작을 달리한다.

// 기명함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명함수 표현식
var anonymousFunc = function () {};
// ES5 : name 프로퍼티는 빈 문자열을 갖는다.
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문
function bar() {
  console.log(bar, name); // bar
}

//* __proto__ 접근자 프로퍼티
// __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티이다.
// 내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다.
// [[Prototype]]내부 슬롯에도 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.

const obj = { a: 1 };
// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true
// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false

//* hasOwnProperty?
// 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티키인 경우에만 true를 반환하고 상속받은 프로토타입의 키인 경우 false를 반환한다.

//* prototype 프로퍼티
// prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티이다.
// 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.
(function () {}.hasOwnProperty("prototype")); // true
({}.hasOwnProperty("prototype")); // false

// prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.
