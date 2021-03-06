/* -------------------------------------------------------------------------- */
/*                                 전역 변수의 문제점                           */
/* -------------------------------------------------------------------------- */
// 전역 변수의 무분별한 사용은 위험하다. 전역변수를 반드시 사용해야 할 이유를 찾지 못한다면, 지역 변수를 사용해야 한다.

//?/* -------------------------------- 변수의 생명 주기 ------------------------------- */
// 변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다. 그리고 언젠가 소멸한다.
// 즉, 변수는 생물과 유사하게 생성되고 소멸되는 생명주기(life cycle)가 있다.
// 변수에 생명 주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리 공간을 점유하게 된다.

//?/* ------------------------------ 지역 변수의 생명 주기 ------------------------------ */
// 전역 변수의 생명 주기는 애플리케이션의 생명 주기와 같다.
// 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.
function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}
foo();
// console.log(x); //! RE: x is not defined
// 지역 변수 x는 함수가 호출되기 전까지는 생성되지 않는다.

// 호이스팅은 전역 변수에 한정된 것이다.
// 함수 내부에서 선언된 지역 변수 x는 foo 함수가 호출되어 실행되는 동안에만 유효하다. 즉, 지역 변수의 생명주기는 함수의 생명주기와 일치한다.
// 변수의 생명 주기는 메모리 공간이 확보(allocate)된 시점부터 메모리 공간이 해제(release)되어 가용 메모리 풀(memory pool)에 반환되는 시점까지다.
// 변수는 자신이 등록된 스코프가 소멸될 때까지 유효하므로 할당된 메모리 공간은 더 이상 그 누구도 참조하지 않을 때
// 가비지 콜렉터에 의해 해제되어 가용 메모리 풀에 반환된다. 즉, 누군가 참조하고 있으면 해제되지 않고 확보된 상태로 남아있게 된다.

var x1 = "global";
function foo1() {
  console.log(x1); // undefined
  var x1 = "local";
}
foo1();
console.log(x1); // 글로벌
// 호이스팅에 의해 x1은 이미 선언되고 undefined가 할당 된다.
// 이처럼 호이스팅은 스코프를 단위로 동작한다.
// 즉, 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징이다.

//?/* ------------------------------ 전역 변수의 생명 주기 ------------------------------ */
// 함수와 달리 전역 코드는 명시적인 호출 없이 실행된다.
// var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다. 이는 전역 변수의 생명 주기가 전역 객체의 생명 주기와 일치한다는 것을 말한다.

// ********************* 전역 객체 **********************
// 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다.
// 브라우저 환경에서 전역 객체는 window이므로 브라우저 환경에서 var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티이다.
// 전역 객체 window는 웹페이지를 닫기 전까지 유효하다. 즉, var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다.

//?/* ------------------------------- 전역 변수의 문제점 ------------------------------- */

// 1. 암묵적 결합
// 전역 변수를 선언한 의도는 전역, 즉 코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것이다.
// 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합(implicit coupling)을 허용하는 것이다.
// 변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

// 2. 긴 생명 주기
// 전역 변수는 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비한다. 또한 전역 변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다.

// 3. 스코프 체인 상에서 종점에 존재
// 전역 변수는 스코프 체인 상에서 종점에 존재한다.
// 전역 변수의 검색 속도가 가장 느리다.

// 4. 네임스페이스 오염
// 자바 스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다.
// 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

//?/* --------------------------- 전역 변수의 사용을 억제하는 방법 --------------------------- */

// 1. 즉시 실행 함수
// 함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한 번만 호출된다.
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
})();
// console.log(foo); //! RE : foo is not defined
// 이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

// 2. 네임스페이스 객체
// 전역에 네임스페이스(namespace) 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.
var MYAPP = {}; // 전역 네임스페이스 객체;
MYAPP.name = "Lee";
console.log(MYAPP.name); // Lee
// 네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 네임스페이스를 계층적으로 구성할 수도 있다.
var MYAPP = {};
MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};
console.log(MYAPP.person.name); // Lee
// 네임스페이스 객체 자체가 전역 변수이므로 그다지 유용하지는 않다.

// 3. 모듈 패턴
// 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
// 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다.
// 모듈 패턴의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.

// 캡슐화(encapsulation)는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다.
// 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉(information hiding)이라고 한다.

// 자바스크립트는 public, private, protected 등의 접근 제한자를 제공하지 않는다.
// 모듈 패턴은 전역 네임스페이스와 오염을 막는 기능은 물론 한정적이기는 하지만 정보 은닉을 구현하기 위해 사용한다.
var Counter = (function () {
  // private 변수
  var num = 0;

  return {
    increase() {
      return num++;
    },
    decrease() {
      return --num;
    },
  };
})();
// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
// 위의 즉시 실행 함수는 객체를 반환한다. 이 객체에는 외부에 노출하고 싶은 변수나 함수를 담아 반환한다.
// 이때 반환되는 객체의 프로퍼티는 외부에 노출되는 퍼블릭 멤버다.
// 외부로 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없는 프라이빗 멤버가 된다.

// 4.ES6 모듈
// ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다. ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
// 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// 모던 브라우저에서는 모듈을 사용할 수 있다. script태그에 type="module"어트리뷰트를 추가하면 모듈로서 동작한다. 확장자는 mjs를 권장한다.
// <script type="module" src="lib.mjs" />
