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
