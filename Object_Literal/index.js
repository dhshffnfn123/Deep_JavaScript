/* -------------------------------------------------------------------------- */
/*                               Object_Literal                               */
/* -------------------------------------------------------------------------- */
// 객체란?
// 자바스크립트는 객체기반의 언어이며, 자바스크립트를 구성하는 거의 "모든 것"이 객체이다."
// 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체이다.

// 원시 타입은 cou단 하나의 값만 나타내지만 객체 타입은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조이다.
// 원시 타입의 값, 즉 원시 값은 변경 불가능(immutable)한 값이지만 객체 타입의 값, 즉 객체는 변경 가능(mutable)한 값이다.

// 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
  name: "Lee",
  age: 20,
};
// 자바스크립트에서 사용되는 모든 값은 프로퍼티가 될 수 있으며, 함수도 프로퍼티 값으로 사용할 수 있다.
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 이를 메서드(method)라고 부른다.
var count = {
  num: 0, // 프로퍼티 : 객체의 상태를 나타내는 값
  increase: function () {
    // 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작
    this.num++;
  },
};

/* ---------------------------- 객체 리터럴에 의한 객체 생성 ---------------------------- */
// 객체 리터럴은 중괄호({...})내에 0개 이상의 프로퍼티를 정의한다.
// 변수에 할당되는 시점에 JS엔진은 객체 리터럴을 해석해 객체를 생성한다.
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! my name is ${this.name}.`);
  },
};
console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: [Function: sayHello] }

// 만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.
var empty = {}; // 빈 객체
console.log(typeof empty); // object

// 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다. 즉 객체 리터럴의 중괄호 뒤에는 세미콜론을 붙여야 한다.

/* ---------------------------------- 프로퍼티 ---------------------------------- */
// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
var person = {
  name: "Lee", // name은 키, 'Lee'는 값이다.
  age: 20,
};
// 프로퍼티를 나열할 때는 쉼표로 구분한다. 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나, 붙여도 상관없다.

// 프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값은 다음과 같다.
// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
// 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

// 프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 한다. 하지만 반드시 식별자 네이밍 규칙을 따라야 하는 것은 아니다.
// 심벌 값도 키로 사용할 수 있지만 일반적으로 문자열을 사용한다. 이때 프로퍼티 키는 문자열이므로 '',""로 묶어야 한다.
// 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.
var person = {
  firstName: "Byung-Hoon",
  "last-name": "An",
};
console.log(person); // { firstName: 'Byunghoon', last-name: 'An'}
// 식별자 네이밍 규칙을 준수하지 않은 last-name은 따옴표를 생략하면 last-name을 -연산자가 있는 표현식으로 해석한다.

// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 위 경우 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.
var obj = {};
var key = "hello";

obj[key] = "world";
// ES6: 계산된 프로퍼티 이름
// var obj = {[key]: 'world'}
console.log(obj); // {hello: 'world'}

// 빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지는 않지만 키로서의 의미를 갖지 못하므로 권장하지 않는다.
var foo = {
  "": "",
};
console.log(foo); // '':''

// 프로퍼티 키에 문자열이나 심벌값이 아닌 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.
// 예를 들어 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 반환된다.
var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); // {0:1,1:2,2:3}

// var, function과 같은 예약어를 사용해도 에러가 나지는 않지만 권장하지 않는다.
var foo = {
  var: "",
  function: "",
};

console.log(foo); // {var: '', function: ''}

// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 이때 에러가 발생하지는 않는다.
var foo = {
  name: "Lee",
  name: "An",
};

console.log(foo); // {name:'An'}

/* ----------------------------------- 메서드 ---------------------------------- */
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라고 부른다. 즉 메서드는 객체에 묶여있는 함수를 의미한다.
var circle = {
  radius: 5,
  // 원의 지름
  getDiameter: function () {
    // 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};

console.log(circle.getDiameter()); // 10
// 메서드 내부에서 사용한 this는 객체 자신을 가리키는 참조변수이다.

/* --------------------------------- 프로퍼티 접근 -------------------------------- */
// 프로퍼티에 접근하는 방법은 두 가지이다.
// 1. 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법(dot notation)
// 2. 대괄호 프로퍼티 접근 연산자([...])를 사용하는 대괄호 표기법(bracket notation)

// 마침표 프로퍼티 접근 연산자 또는 대괄호 프로퍼티 접근 연산자의 좌측에는 객체로 평가되는 표현식을 기술한다.
// 마침표 접근 연산자의 우측 또는 대괄호 접근 연산자의 내부에는 '프로퍼티 키'를 지정한다.
var person = {
  name: "Lee",
};
// dot notation
console.log(person.name); // Lee
// bracket notation
console.log(person["name"]); // Lee

// 대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표를 감싼 문자열이어야 한다.
// 그렇지 않으면 식별자로 해석한다.
// console.log(person[name]); // ReferenceError: name is not defined

// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다. 이때 ReferenceError가 발생하지 않는다.
console.log("age : " + person.age); // age : undefined

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않으면 반드시 대괄호 표기법을 사용해야 한다.
// 단, 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.

var person = {
  "last-name": "Lee",
  1: 10,
};

// person.'last-name'; // error
// person.last-namel // 브라우저 환경 : NaN , Node.js 환경 : ReferenceError (브라우저에서는 name이라는 전역변수가 암묵적으로 존재한다.)

// person[last-name]; // error
person["last-name"]; // Lee

// person.1; // error
// person.'1' // error
person[1]; // 10: person[1]을 암묵적 변환하여 person['1']로 만든다.
person["1"]; // 10

/* -------------------------------- 프로퍼티 값 갱신 ------------------------------- */
// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
var person = {
  name: "Lee",
};
person.name = "Kim";
console.log(person); // {name: Kim}

/* ------------------------------- 프로퍼티 동적 생성 ------------------------------- */
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 값이 할당된다.
var person = {
  name: "an",
};
person.age = 20;
console.log(person); // { name: 'an', age: 20 }

/* --------------------------------- 프로퍼티 삭제 -------------------------------- */
// delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다.
// 만약 존재하지 않는 프로퍼티를 삭제하면 에러 없이 무시된다.
var person = {
  name: "Lee",
};
person.age = 20; // age 생성
delete person.age; // age 삭제
delete person.address; // address가 존재하지 않으므로 삭제할 수 없다. 에러는 발생하지 않는다.
console.log(person); // { name: 'Lee' }

// ES6에서 추가된 객체 리터럴의 확장 기능

/* ----------- 1. 프로퍼티 축약 표현 ----------- */
// 프로퍼티 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.
// ES5
var x = 1,
  y = 2;
var obj = {
  x: x,
  y: y,
};
console.log(obj); // { x: 1, y: 2 }

// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략(Property shorthand)할 수 있다.
// 이때 프로퍼티 키는 변수이름으로 자동 생성된다.
// ES6
let es6x = 1,
  es6y = 2;
const es6obj = { es6x, es6y };
console.log("ES6 : " + es6obj); // {es6x: 1, es6y: 2}

/* ----------- 2. 계산된 프로퍼티 이름 ----------- */
// 문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.
// 단 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다. 이를 계산된 프로퍼티 이름(computed property name)이라 한다.

// ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호([...]) 표기법을 사용해야 한다.
var prefix = "prop";
var i = 0;
var obj = {};
// 계산된 프로퍼티 이름으로 키 동적 생성
obj[prefix + "-" + i++] = i;
obj[prefix + "-" + i++] = i;
obj[prefix + "-" + i++] = i;
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
const prefix2 = "prop";
let i2 = 0;
const obj2 = {
  [`${prefix2}-${++i2}`]: i2,
  [`${prefix2}-${++i2}`]: i2,
  [`${prefix2}-${++i2}`]: i2,
};
console.log(obj2); // {prop-1: 1, prop-2: 2, prop-3: 3}

/* ----------- 3. 메서드 축약 표현 ----------- */
// ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당한다.
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};
obj.sayHi(); // Hi! Lee

// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
const obj3 = {
  name: "Lee",
  sayHi() {
    console.log("Hi! " + this.name);
  },
};
obj3.sayHi();