/* -------------------------------------------------------------------------- */
/*                          생성자 함수에 의한 객체 생성                        */
/* -------------------------------------------------------------------------- */
// 객체 리터럴에 의한 객체 생성은 가장 간단하고 일반적인 객체 생성 방식이다.

//?/* ---------------------------- Object 생성자 함수 --------------------------- */
// new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

// 빈 객체의 생성
const person = new Object();
person.name = "An";
person.sayHello = function () {
  console.log("my name is " + this.name);
};
console.log(person); // { name: "An", sayHello: f }
person.sayHello(); // my name is An

// 생성자 함수(constructor)란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다.
// 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.

// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("An");
console.log(typeof strObj); // object
console.log(strObj); // String { name: "An" }

//?/* --------------------------------- 생성자 함수 --------------------------------- */
//* 객체 리터럴에 의한 객체 생성 방식의 문제점
// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
// 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야하기 때문에 비효율적이다.
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

// 객체를 프로퍼티를 통해 객체 고유의 상태를 표현한다. 그리고 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.
// 위의 객체는 프로퍼티 구조가 동일하다. radius 프로퍼티 값은 다를 수 있지만 getDiameter 메서드는 완전히 동일하다.
// 객체 리터럴의 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야한다.

//* 생성자 함수에 의한 객체 생성 방식의 장점
// 생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// TODO this
// this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이다. this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// 일반 함수 : 전역 객체
// 메서드 : 메서드를 호출한 객체
// 생성자 함수 : 생성자 함수가 생성할 인스턴스
function foo() {
  console.log(this);
}
// 일반적인 함수
foo(); // window
//
const obj = { foo };
// 메서드
obj.foo(); // obj
// 생성자 함수
const inst = new foo(); // inst

// 생성자 함수는 일반 함수와 동일한 방법으로 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined
// 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15

//* 생성자 함수의 인스턴스 생성 과정
// 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿으로서 동작하여 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(추가 및 할당)하는 것이다.
// 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화하는 것은 옵션이다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
// 인스턴스 생성
const Circle1 = new Circle(5);

// 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
// new 연산자와 함께 생성자 함수를 호출하면 다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 초기화 한 후 반환한다.

//* 1. 인스턴스 생성과 this 바인딩
// 암묵적으로 빈 객체가 생성된다. 이 빈 객체가 생성자 함수가 생성한 인스턴스이다.
// 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩된다.
// 이 처리는 런타임 이전에 실행된다.

// TODO 바인딩
// 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수 선언은 변수 이름과 확보된 메모리 공간의 주소를 바인딩하는 것이다.
// this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다.)와 this가 가리킬 객체를 바인딩하는 것이다.

function Circle(radius) {
  console.log(this); // Circle {}

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

//* 2. 인스턴스 초기화
// 생성자 함수에 기술되어 있는 코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
// 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고
// 생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.
// 이 처리는 개발자가 기술한다.

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

//* 3. 인스턴스 반환
// 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 변환된다.
function Circle(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle { radius: 1, getDiameter: f }

// 만약 this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지 못하고 return문에 명시한 객체가 반환된다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 명시적으로 객체를 반환하면 암묵적으로 this 반환이 무시된다.
  return {};
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circle = new Circle(1);
console.log(circle); // {}

// 하지만 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  return 100; // 무시되고 this가 암묵적으로 반환된다.
}

const circle = new Circle(1);
console.log(circle); // Circle { radius: 1, getDiameter: f }

// TODO 이처럼 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 기본 동작을 훼손한다. 따라서 return 문을 반드시 생략해야 한다.

//* 내부 메서드 [[Call]]과 [[Construct]]
// 함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드를 모두 가지고 있기 때문이다.
function foo() {}
// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;
// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function () {
  console.log(this.prop);
};
foo.method(); // 10

// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론 함수로서 동작하기 위해
// 함수 객체만을 위한 [[Environment]], [[FormalParameters]] 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 메서드를 추가로 가지고 있다.
// 힘수가 일반 함수로서 호출되면 [[Call]]이 호출되고 생성자 함수로서 호출되면 [[Construct]]가 호출된다.
function foo() {}
foo(); // [[Call]]
new foo(); // [[Construct]]

// TODO 모든 함수 객체는 callable이면서 constructor이거나 callable이면서 non-constructor일 수도 있다.

// constructor와 non-constructor의 구분
// 자바스크립트 엔진은 함수 정의를 평가하여 함수 객체를 생성할 때 함수 정의 방식에 따라 함수를 구분한다.

// constructor : 함수 선언문, 함수 표현식, 클래스
// non-constructor : 메서드, 화살표 함수
function foo() {}
const bar = function () {};
const baz = {
  x: function () {},
};
// 일반 함수로 정의된 함수만이 constructor다.
new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // x {}

const arrow = () => {};
new arrow(); // TE: arrow is not a constructor

const obj = {
  x() {},
};
new obj.x(); //TE: obj.x is not a constructor

// 함수를 프로퍼티 값으로 사용하면 일반적으로 메서드라고 통칭한다. 하지만 ECMAScript 사양에서 메서드란 ES6의 메서드 축약 표현만을 의미한다.
// 즉 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고 ES6의 화살표 함수와 메서드 축약 표현으로 정의된 함수는 non-constructor이다.

// non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생한다.
function foo() {}
foo();
new foo();

// 주의할 것은 생성자 함수로서 호출될 것을 기대하고 정의하지 않은 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있다는 것이다.

//* new 연산자
// new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다. 다시 말해, 함수 객체의 내부 메서드 [[Call]]이 아니라 [[Constructor]]가 호출된다.
// 단 new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor이어야 한다.
function add(x, y) {
  return x + y;
}
// 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환되어,
console.log(inst);

// 객체를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}

// 일반함수를 new 연산자와 함께 호출
inst = new createUser("An", "admin");
console.log(inst); // { name: "An", role: "admin" }

// 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. ([[Call]])
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

// 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(redius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TE: Cannot read property 'getDimeter' of undefined
// 일반함수의 this는 window를 가리킨다.

// 생성자 함수는 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별할 수 있도록 노력한다.

// new.target
// 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다.
// new.target은 this와 유사하게 constructor인 모든 함수 내부에서 암묵적인 지역 변수와 같이 사용되어 메타 프로퍼티라고 부른다. IE는 지원하지 않는다.
// TODO 함수 내부에서 new.target을 사용하면 new 연산자와 함께 생성자 함수로서 호출되었는지 확인할 수 있다.
// TODO new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
// TODO new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined이다.

function Circle(radius) {
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());

// Object와 Function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을때와 동일하게 동작한다.
let obj = new Object();
console.log(obj);

obj = Object();
console.log(obj);

let f = new Function("x", "return x ** x");
console.log(f); // f anonymous(x) { return x ** x }

f = Function("x", "return x ** x");
console.log(f); // f anonymous(x) { return x ** x }

// String, Number, Boolean 함수는 new 연산자와 함께 호출했을 때 String, Number, Boolean객체를 생성하여 반환하지만 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다.
// 이를 통해 데이터타입을 변환하기도 한다.
const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number("123");
console.log(num, typeof num); // 123 number

const bool = Boolean("true");
console.log(bool, typeof bool); // true boolean
