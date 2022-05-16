/* -------------------------------------------------------------------------- */
/*                                프로토타입                                  */
/* -------------------------------------------------------------------------- */
// 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적으로 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어이다.

// 자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 모든 것이 객체이다. 원시타입의 값을 제외한 나머지 값들은 모두 객체이다.

//? 객체지향 프로그래밍
// 객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 벗어나
// 여러개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.

// 객체지향 프로그래밍은 실세께의 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
// 실체는 특징이나 성질을 나타내는 속성을 가지고 있고 이를 통해 실체를 인식하거나 구별할 수 있다.

// 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 '추상화' 라고 한다.
const person1 = {
  name: "An",
  address: "Paju",
};
console.log(person1); // {name: "Lee", address: "Paju" }

// TODO 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다.
// 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

// 원이라니 개념을 객체로 만들어보자. 원에는 반지름이라는 속성이 있다.
// 이때 반지름은 원의 상태를 나타내는 데이터이며 원의 지름, 둘레, 넓이를 구하는 것은 동작이다.
const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },

  getPermeter() {
    return 2 * Math.PI * this.radius;
  },
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);

console.log(circle.getDiameter()); // 10
console.log(circle.getPermeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483

// 이처럼 객체지향 프로그램밍은 객체의 상태를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.
// TODO 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.

//? 상속과 프로토타입
// 상속은 객체지향 프로그래밍의 핵심 개념으로 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle11 = new Circle(1);
const circle22 = new Circle(2);
// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.1415...
console.log(circle2.getArea()); // 12.56637...

// 상속을 통해 불필요한 중복을 제거한다. 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
function Circle(radius) {
  this.radius = radius;
}
// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);
// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.getArea()); // 3.1415...
console.log(circle2.getArea()); // 12. 56637...

// 자신의 상태를 나타내는 radius 프로퍼티만 개별적으로 소유하고 내용이 동일한 메서드는 상속을 통해 공유하여 사용하는 것이다.
// 상속은 코드의 재사용이란 관점에서 매우 유용하다.

//?/* -------------------------------- 프로토타입 객체 -------------------------------- */
// 프로토타입 객체란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다.
// 프로토 타입은 어떤 객체의 상위 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티를 제공한다.
// 프로토타입을 상속받은 하위 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

// 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

// 자신의 [[Prototype]] 내부 슬롯이 가리키는 프로토타입에 간접적으로 접근할 수 있다.
// 그리고 프로토타입은 자신의 constructor 프로퍼티를 통해 생성자 함수에 접근할 수 있고,
// 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근할 수 있다.

//* __proto__접근자 프로퍼티
// TODO 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입 즉, [[ Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

//* 1. __proto__는 접근자 프로퍼티이다.
// [[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 __proto__ 접근자 프로퍼티를 통해 간접적으로
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근할 수 있다.
const obj = {};
const parent1 = { x: 1 };
// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
//setter함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent1;
console.log(obj.x); // 1

//* 2. __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티이다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.
const person = { name: "Lee" };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty("__proto__")); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체만 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true

//* 3. __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는
// 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.
const parent = {};
const child = {};

child.__proto__ = parent;
parent.__proto__ = child; //! TE: Cyclic __proto__ value

// 프로토타입 체인은 단방향 링크드 리스트로 구현되어야한다. 즉, 프로퍼티 검색 방향이 한쪽 방향으로만 흘러가야한다.
// 아무런 체크 없이 무조건적으로 프로토타입을 교체할 수 없도록 __proto__ 접근자 프로퍼티를 통해 접근하고 교체하도록 구현되어 있다.

//* 4. __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.
// 모든 객체가 __proto__ 접근자 프로퍼티를 사용할 수 있지 않다.
const obj = Object.create(null);
// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); // undefined
// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj)); // null

// __proto__ 접근자 프로퍼티 대신 프로토타입의 참조를 취득하고 시은 경우에는 Object.getPropertyOf메서드를 사용하고
// 프로토타입을 교체하고 싶은 경우에는 Object.setProrpertyOf 메서드를 사용할 것을 권장한다.
const obj = {};
const parent = { x: 1 };
Object.getPrototypeOf(obj); // obj.__proto__;
Object.getPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x);

//* 함수 객체의 prototype 프로퍼티
// TODO 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
(function () {}.hasOwnProperty("prototype")); // true
({}.hasOwnProperty("prototype")); // false

// prototype 프로퍼티는 생성자 함수가 생성할 객체의 프로토타입을 가리킨다.
// 따라서 생성자 함수로서 호출할 수 없는 함수 즉, non-constructor인 화살표 함수와 ES6메서드 축약표현으로 정의한 메서드는
// prototype 프로퍼티를 소유하지 않으며 생성하지도 않는다.
const Person = (name) => {
  this.name = name;
};

console.log(Person.prototype); // undefined

const obj = {
  foo() {},
};
console.log(obj.foo.hasOwnProperty("prototype")); // false
console.log(obj.foo.prototype); // undefined

// TODO 모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.

/*
__proto__ 접근자 프로퍼티
  소유 : 모든 객체
  값 : 프로토타입 참조
  사용주체 : 모든 객체
  사용목적: 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
*/

/*
prototype 프로퍼티
  소유 : constructor
  값 : 프로토타입 참조
  사용주체 : 생성자 함수
  사용목적: 생성자 함수가 자신이 생성할 객체의 프로토타입을 할당하기 위해 사용
*/
function Person(name) {
  this.name = name;
}

const me1 = new Person("Lee");
console.log(Person.prototype === me1.__proto__); // true

//* 프로토타입의 constructor 프로퍼티와 생성자 함수
// 모든 프로토타입은 constructor 프로퍼티를 갖는다.
// constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
// 즉, 함수 객체가 생성될 때 이뤄진다.
function Person(name) {
  this.name = name;
}
const me2 = new Person("Lee");
// me 객체의 생성자 함수는 Person이다.
console.log(me2.constructor === person); // true

//?/* -------------------- 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입 ------------------- */
// 생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 생성자 함수와 연결된다.
// constructor 프로퍼티가 가리키는 생성자 함수는 인스턴스를 생성한 생성자 함수다.
const obj = new Object();
console.log(obj.constructor === Object); // true

const add1 = new Function("a", "b", "return a + b");
console.log(add1.constructor === Function); // true

function Person(name) {
  this.name = name;
}
const me = new Person("Lee");
console.log(me.constructor === Person); // true

// 리터럴 표기법에 의한 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 있다.
const obj = {};
const add = function (a, b) {
  return a + b;
};
const arr = [1, 2, 3];
const regexp = /is/gi;
// 리터럴 표기법에 의해 생성된 객체의 경우 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수는 없다.
// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {};
// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수이다.
console.log(obj.constructor === Object); // true

// Object 생성자 함수에 인수를 전달하지 않거나 undefined 또는 null을 인수로 전달하면서 호출하면
// 내부적으로는 추상 연산 OridinaryObjectCreate를 호출하여 Object.prototype을 프로토타입으로 갖는 빈 객체를 생성한다,

// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
let obj = new Object();
console.log(obj); // {}
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
class Foo extends Object {}
new Foo(); // Foo {}

// 인수가 전달된 경우에는 인수를 객체로 변환한다.
// String 객체 생성
obj = new Object("123");
console.log(obj); // String {'123'}

// foo 함수는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수다.
console.log(foo.constructor === Function); // true

// 리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하다.
// 따라서 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다.
// 프로토타입은 생성자 함수와 더불어 생성되며 prototype, constructor 프로퍼티에 의해 연결되어 있기 때문이다.
// 다시말해 TODO 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제난 쌍으로 존재한다.

//?/* ------------------------------ 프로토타입의 생성 시점 ------------------------------ */
// 객체는 리터럴 표기법 또는 생성자 함수에 의해 생성되므로 결국 모든 객체는 생성자 함수와 연결되어있다.
// TODO 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.
// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재하기 때문이다.

//* 사용자 정의 생성자 함수와 프로토타입 생성 시점
// TODO 생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // {constructor: f}
function Person(name) {
  this.name = name;
}

// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor는 프로토타입이 생성되지 않는다.
// 화살표함수는 non-constructor이다.
const Person = (name) => {
  this.name = name;
};
console.log(Person.prototype); // undefined

// 호이스팅으로 인해 함수선언문으로 정의된 Person 생성자 함수는 어떤 코드보다 먼저 평가되어 함수객체가 된다.
// 이때 프로토타입도 더불어 생성된다. 생성된 프로토타입은 Person 생성자 함수의 prototype 프로퍼티에 바인딩된다.

//?/* ------------------------- 빌트인 생성자 함수와 프로토타입 생성 시점 ------------------------ */
// Object, String, Number, Function, Array 등과 같은 빌트인 생성자 함수도 생성되는 시점에 프로토타입이 생성된다.
// 모든 빌트인 생성자함수는 전역 객체가 생성되는 시점에 생성된다.
// 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩 된다.

// 객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재한다.
// TODO 이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다.

//?/* --------------------------- 객체 생성 방식과 프로토타입의 결정 -------------------------- */
// 모든 객체는 생성 방식마다 세부적인 객체 생성 방식의 차이는 있으나
// 추상 연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다.

// 추상 연산 OrdinaryObjectCreate는 필수적으로 자신이 생성할 객체의 프로토타입을 인수로 전달받는다.
// 그리고 자신이 생성할 객체에 추가할 프로퍼티 목록을 옵션으로 전달할 수 있다.

// 추상 연산 OrdinaryObjectCreate는 빈 객체를 생성한 후, 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가한다.
// 그리고 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Prototype]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환한다.

// TODO 즉, 프로토타입은 추상 연산 OrdinaryObjectCreate에 전달되는 인수에 의해 결정된다.
// 이 인수는 객체가 생성되는 시점에 객체 생성방식에 의해 결정된다.

//* 객체 리터럴에 의해 생성된 객체의 프로토타입
// 자바스크립트 엔진은 객체 리터럴을 평가하여 추상 연산 OrdinaryObjectCreate를 호출한다.
// 이 때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
// 즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.

const obj = { x: 1 };
// 위 객체 리터럴이 평가되면 추상 연산 OrdinaryObjectCreate에 의해 Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결이 만들어진다.
// obj 객체는 Object.prototype을 상속받는다. obj 객체는 constructor 프로퍼티와 hasOwnProperty 메서드 등을 소유하지 않지만
// 자신의 프로토타입인 Object.prototype의 constructor 프로퍼티와 hasOwnProperty 메서드를 자신의 자산인 것처럼 자유롭게 사용할 수 있다.
// 이는 obj 객체가 자신의 프로토타입인 Object.prototype객체를 상속받았기 때문이다.

const obj = { x: 1 };
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

//* Object 생성자 함수에 의해 생성된 객체의 프로토타입
// Object생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.
// 이때 추상 연산 OrdinaryObjectCreate에 전달되는 프로토타입은 Object.prototype이다.
// TODO 즉, Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 Object.prototype이다.
const obj = new Object();
obj.x = 1;

// Object 생성자 함수에 의해 생성된 obj 객체는 Object.prototype을 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true
// 객체 리터럴 방식은 객체 리터럴 내부에 프로퍼티를 추가 하지만 Object 생성자 함수 방식은 일단 빈 객체를 생성한 이후 프로퍼티를 추가해야 한다.

//* 생성자 함수에 의해 생성된 객체의 프로토타입
// 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있는 객체이다.
function Person(name) {
  this.name = name;
}
const mee = new Person("Lee");
// 표준 빌트인 객체인 Object 생성자 함수와 더불어 생성된 프로토타입 Object.prototype은 다양한 빌트인 메서드를 갖고 있다.

//?/* -------------------------------- 프로토타입 체인 -------------------------------- */
function Person(name) {
  this.name = name;
}
// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! my name is ${this.name}`);
};

const meee = new Person("Lee");

// hasOwnProperty는 Object.prototype의 메서드이다.
console.log(me.hasOwnProperty("name")); // true
// Person 생성자 함수에 의해 생성된 meee 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다.
// me 객체의 프로토타입은 Person.prototype이다.
Object.getPrototypeOf(me) === Person.prototype; // true
// 프로토타입의 프로토타입은 언제나 Object.prototype이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype; // true

// TODO
// 자바스크립트는 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면[[Prototype]] 내부 슬롯의
// 참조를 따라서 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.
// 이를 프로토타입 체인이라 한다.
// 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.

meee.hasOwnProperty("name");
// meee.hasOwnProperty("name");와 같이 메서드를 호출하면 자바스크립트 엔진은 다음과 같은 과정을 거쳐 메서드를 검색한다.

// 1. 먼저 hasOwnProperty 메서드를 호출한 me 객체에서 hasOwnProperty 메서드를 검색한다.

// 2. Person.prototype에도 hasOwnProperty 메서드가 없으므로 프로토타입 체인을 따라,
// 다시말해 [[Prototype]] 내부 슬롯에 바인딩되어 있는 프로토타입으로 이동하여 hasOwnProperty 메서드를 검색한다.

// 3. Object.prototype에는 hasOwnProperty 메서드가 존재한다.
// 자바스크립트 엔진은 Object.prototype.hasOwnProperty 메서드를 호출한다. 이 때 hasOwnProperty의 this에는 meee 객체가 바인딩된다.

// TODO call메서드
// call 메서드는 this로 사용할 객체를 전달하면서 함수를 호출한다.

// 프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다.
// 따라서 모든 객체는 Object.prototype을 상속받는다.
//* Object.prototype을 프로토타입 체인의 종점(end of prototype chain)이라 한다.
// Object.prototype의 프로토타입 즉, [[Prototype]]의 내부 슬롯은 null이다.

// 프로토타입 체인의 종점인 Object.prototype에서드 프로퍼티를 검색할 수 없는 경우 undefined를 반환한다. 이 때 에러가 발생하지 않는다.
console.log(meee.foo);

//* 프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘 이라고 할 수 있다.
// 이에반해 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다.
// 다시 말해, 자바스크립트 엔진은 함수의 중첩 관계로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다.
// * 따라서 스코프 체인은 식별자 검색을 위한 메커니즘이라고 할 수 있다.

//* 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는 데 사용한다.

//?/* ----------------------------- 오버라이딩과 프로퍼티 섀도잉 ---------------------------- */
const PersonO = (function () {
  function PersonO(name) {
    this.name = name;
  }

  PersonO.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
  };

  return PersonO;
})();
const me3 = new PersonO("Lee");

me3.sayHello = function () {
  console.log(`Hey! my name is ${this.name}`);
};

me3.sayHello();
// 프로토타입이 소유한 프로퍼티를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라고 부른다.

// TODO Overriding
// 상위 클래스가 가지고 있는 메서드를  하위 클래스가 재정의하여 사용하는 방식
// TODO Overloading
// 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식이다.
// 자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수 있다.

// 프로퍼티를 삭제하는 경우도 마찬가지이다.
delete me3.sayHello;
me3.sayHello();
// 당연히 프로토타입 메서드가 아닌 인스턴스 메서드가 삭제된다.

PersonO.prototype.sayHello = function () {
  console.log(`Hey my name is ${this.name}`);
};
me3.sayHello();

delete PersonO.prototype.sayHello;
me.sayHello(); //! TypeError: me3.sayHello is not a function

//?/* ---------------------------- 프로토타입의 교체 ------------------------------- */
// 프로토타입은 임의의 다른 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다.
// 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.

//* 생성자 함수에 의한 프로토타입의 교체
const PersonAn = (function () {
  function Person(name) {
    this.name = name;
  }
  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi my name is ${this.name}`);
    },
  };
  return Person;
})();
const meAn = new PersonAn("Lee");

// 프로토타입으로 교체한 객체 리터럴에는 constructor 프로퍼티가 없다.
// constructor 프로퍼티는 자바스크립트 엔진이 프로토타입을 생성할 떄 암묵적으로 추가한 프로퍼티이다.
