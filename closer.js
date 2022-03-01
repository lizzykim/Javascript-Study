//클로저는 어떻게 사용되는가?

//1. 콜백 함수 내부에서 외부데이터를 사용하고자 할 때 ex)이벤트 리스너

//(a) 콜백함수를 내부 함수로 선언해서 외부 변수를 직접 참조하는 방법
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', function () {
//     alert('your choice is ' + fruit);
//   });
//   $ul.appendChild($li);
// });
// document.body.appendChild($ul);

//콜백함수를 외부로 분리(사용성 증가)
var alertFruit = function (fruit) {
  alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruit);
  $ul.append($li);
});
// document.body.appendChild($ul);
alertFruit(fruits[1]);

//(b)bind메서드로 값은 직접 넘겨줌?

//(c) 콜백함수를 고차함수로 바꿔서 클로저 사용
//고차함수:함수를 인자로 받거나 함수를 리턴하는 함수(함수형 프로그래밍에서 자주 사용)
var alertFruitBuilder = function (fruit) {
  //익명 함수를 리턴하는 alertFruitBuilder
  return function () {
    alert('your choice is ' + fruit);
  };
};
fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder);
  $ul.append($li);
});
console.clear();

//2.정보은닉: 핵심) 객체말고 함수로 만들고 필요한 멤버만 return 해줌

//3.부분 적용 함수:

// 4.커링함수: 여러개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출할 수 있게 체인 형태로 구성한 것
var curry3 = function (func) {
  return function (a) {
    return function (b) {
      return func(a, b);
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10);
console.log(getMaxWith10(25));
console.clear();

var curry5 = function (func) {
  return function A(a) {
    return function B(b) {
      return function C(c) {
        return function D(d) {
          return function E(e) {
            return func(a, b, c, d, e);
          };
        };
      };
    };
  };
};

var getMax = curry5(Math.max);
console.log(getMax);
console.log(getMax(1));
console.log(getMax(1)(2)(3)(4));
console.log(getMax(1)(2)(3)(4)(5));
console.clear();

//지연 실행: 원하는 시점까지 지연시켰다가 실행하는 것: ex) fetch로 url요청함, 이때 baseurl은 기억시키고 특정한 값 id만 바꿔서 서버 요청
const getInformation = function (baseUrl) {
  return function (path) {
    return function (id) {
      return fetch(baseUrl + path + '/' + id);
    };
  };
};

// let getInformation = (baseUrl) => (path) => (id) =>
//   fetch(baseUrl + path + '/' + id);
// console.clear();

//3.부분 적용 함수: n개의 인자를 받는 함수에 미리 m개의 인자를 넘겨 기억시키고 나중에 n-m 개의 인자를 넘기면 그때 함수의 실행결과를 얻음
//(a) bind 메서드를 활용
var add = function () {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10, 11));
console.clear();

//디바운스
var debounce = function (eventName, func, wait) {
  var timeoutId = null;
  return function (event) {
    var self = this;
    console.log(eventName, 'event 발생');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(self, event), wait);
  };
};

var moveHandler = function (e) {
  console.log('move event 처리');
};

var wheelHandler = function (e) {
  console.log('wheel event 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener(
  'mousewheel',
  debounce('wheel', wheelHandler, 700)
);
