/* -------------------------------------------------------------------------- */
/*                           Property Attribute                           */
/* -------------------------------------------------------------------------- */

//?/* ------------------------------ 내부 슬롯과 내부 메서드 ----------------------------- */
// 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는
// 의사 프로퍼티(pseudo property)와 의사 메서드(pseudo method)다.
// 개발자가 직접 접근할 수 있도록 외부로 공개된 객체의 프로퍼티는 아니다.
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기도 한다.

// 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가진다. 이의 경우 __proto__를 통해 간접적으로 접근할 수 있다.
const o = {};
//o.[[Prototype]] //! Uncaught SE: Unexpected token '['
o.__proto__; // Object.prototype

//?/* ------------------------ 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 ----------------------- */
// TODO 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본 값으로 자동 정의한다.
// 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.
// 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태값(meta-property)인
// 내부 슬롯[[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다.
// 따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수는 있다.
const person = {
  name: "Lee",
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: "Lee", writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptor 메서드를 호출할 때 첫 번째 매개변수에는 객체의 참조를 전달하고,
// 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
// 이때 메서드는 프로퍼티 어트리뷰트를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
const person = {
  name: "Lee",
};
person.age = 20;
console.log(Object.getOwnPropertyDescriptor(person));
/*
    name: { value: "Lee", writable: true, enumerable: true, configurable: true }
    age: { value: 20, writable: true, enumerable: true, configurable: true }
*/

//?/* --------------------------- 데이터 프로퍼티와 접근자 프로퍼티 --------------------------- */
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 없다.

//* 데이터 프로퍼티
// 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
//* 접근자 프로퍼티
// 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.

//* 데이터 프로퍼티
// 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다.
// 데이터 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

//* 1. [[Value]], value
// 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
// 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당 한다.
// 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.

//* 2. [[Writable]], writable
// 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.

//* 3. [[Enumerable]], enumerable
// 프로퍼티의 열거 기능 여부를 나타내며 불리언 값을 갖는다.
// [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in 문이나 Object.keys 메서드 등으로 열거할 수 없다.

//* 4. [[Configurable]], configurable
// 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
// [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
// 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.

const person = {
  name: "Lee",
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value:"Lee", writable: true, enumerable: true, configurable: true}

// 프로퍼티가 생성될 때 [[Value]]의 값은 프로퍼티 값("Lee")으로 초기화되며,
// [[Writable]],[[Enumerable]],[[Configurable]]은 true로 초기화된다.

//* 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는
// 접근자 함수로 구성된 프로퍼티이다.
// 접근자 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다.

//* 1. [[Get]], get
// 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수이다.
// 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값,
//즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.

//* 2. [[Set]], set
// 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다.
// 즉 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값,
// 즉 Setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.

//* 3. [[Enumerable]], enumerable
// 데이터 프로퍼티의 [[Enumerable]]과 같다.

//* 4. [[Configurable]], configurable
// 데이터 프로퍼티의 [[Configurable]]과 같다.

// 접근자 함수는 setter/getter 함수라고도 부른다.
// 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수도 있고 하나만 정의할 수도 있다.
const person = {
  firstName: "Gildong",
  lastName: "Lee",

  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};
// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.firstName + " " + person.lastName); // Gildong Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다.
person.fullName = "Gildong Hong";
console.log(person); // {firstName: 'Gildong', lastName: 'Hong'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter함수가 호출된다.
console.log(person.fullName); // Gildong Hong

// firstName은 데이터 프로퍼티이다.
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// {value: Gildong, writable: true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티이다.
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
// {get: f, set: f, enumerable: true, configurable: true}

// 접근자 프로퍼티 fullName으로 프로퍼티 값에 접근하면 내부적으로 [[Get]] 내부 메서드가 호출되어 다음과 같이 동작한다.
// 1. 프로퍼티 키가 유효한지 확인한다. 프로퍼티 키는 문자열 또는 심벌이어야 한다. fullName은 문자열이므로 유효하다.
// 2. 프로토타입 체인에서 프로퍼티를 검색한다. person 객체에 fullName 프로퍼티가 존재한다.
// 3. 검색된 fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인한다.
// 4. 접근자 프로퍼티 fullName의 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수를 호출하여 그 결과를 반환한다.
// [[Get]]의 값은 Object.getOwnPropertyDescriptor 메서드가 반환하는 프로퍼티 디스크립터 객체의 get 프로퍼티 값과 같다.

//* 프로토타입
// 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체이다.
// 프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속한다.
// 프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메서드인 것처럼 자유롭게 사용할 수 있다.

// 접근자 프로퍼티와 데이터 프로퍼티를 구별하는 방법은 다음과 같다.
// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
// {get: f, set: f, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptor(function () {}, "prototype");
// {value: {...} writable: true, enumerable: false, configurable: false}

//?/* --------------------------------- 프로퍼티 정의 -------------------------------- */
// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로펕치 어트리뷰트를 명시적으로 정의하거나,
// 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의 하는 것을 말한다.
// 이를 통해 객체의 프로퍼티가 어떻게 동작해야 하는지를 명확히 정의할 수 있다.

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.
// 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달한다.
const person = {};
// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "Gildong",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log("firstName", descriptor);
// {value: Gildong, writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);
// {value: Lee, writable: true, enumerable: true, configurable: true}

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person));

// [Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다,
// lastName 프로퍼티는 [[Writeable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다,
person.lastName = 'Kim';

descriptor = Object,getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: "Lee", writable:false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의 
Object.defineProperty(person, 'fullName', {
  //getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this,firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: f, set: f, enumerable: true, configurable: true}

person.fullName = "ByungHoon An";
console.log(person);

// Object.fefinedProperty 메서드로 프로퍼티를 정의할 때 프로퍼티를 정의할 때 프로퍼티 디스크립터 객체의 프로퍼티를 일부 생략할 수 있다.
// 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값이 적용된다.
// value, [[Value]], undefined
// get, [[Get]], undefined
// set, [[Set]], undefined
// writable, [[Writable]], false
// enumarable, [[Enumerable]], false
// configurable, [[Configurable]], false

// Object.defineProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있다.
// Object.defineProperties 메서드를 사용하면 여러개의 프로퍼티를 한번에 정의할 수 있다.
const person = {};
Object.defineProperties(person, {
  firstName: {
    value: 'ByungHoon',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'An',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable true
  }
});
person.fullName = "ByungHoon An";
console.log(person);


//? 객체 변경 방지
// 객체는 변경 가능 값이므로 재할당 없이 직접 변경할 수 있다. 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며, 
// Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수 있다.
// 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다. 객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다.

//* 객체 확장 금지
// Object.preventExtensions 메서든느 객체의 확장을 금지한다. 객체 확장 금지란 프로퍼티 추가 금지를 의미한다.
// 즉, 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
// 확장이 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.
const person = { name: 'Lee' };
// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);
// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person)); // false
// 프로퍼티 추가가 금지된다.
person.age = 20; // 무시,Strict mode에서는 에러
console.log(person); // {name: "Lee"}
// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}
// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', { value: 20 });
//TypeError: Cannot define property age, object is not extensible

