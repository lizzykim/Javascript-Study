// //1. 전역 공간에서의 this
// console.log(this);
// console.log(window);

// //전역변수 선언 == 전역 객체의 property 할당
// var a = 1;
// console.log(a);
// console.log(window.a);

// const b = 1;
// console.log(b);
// console.log(window.b);
// console.clear();

// //삭제: 전역변수 선언 !== 전역 객체의 property 할당
// var c = 1;
// delete c;
// console.log('변수: ' + delete c);
// console.log(c, window.c, this.c);

// window.d = 1;
// delete window.d;
// console.log('전역객체 property : ' + delete window.d);
// console.log(d, window.d, this.d);
// console.clear();

//2.메서드로 호출할 때, 메서드 내부에서 this
//함수로서 호출, 메서드로서 호출
var func = function (x) {
  console.log(this, x);
};
func(2); //point) 1.함수로서 호출  2.window가 출력됨

var obj = {
  method: func,
};
obj.method(2); //point) 1.메서드로서 호출  2.obj가 출력됨
// obj['method'](2);
// console.clear();

// //3.메서드 내부에서 this (누가 this가 되는가?)
// var obj2 = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj2.methodA(); //this는 obj2
// obj2.inner.methodB(); //this는 obj.inner
// console.clear();

// //4.콜백 함수 내부에서 this
// //5.생성자 함수 내부에서 this

// //==================================================================================================================================

// //명시적으로 this를 바인딩하는 방법
// //1.call 메서드 (1)함수
// var func = function (a, b, c) {
//   console.log(this, a, b, c);
// };

// func(1, 2, 3); //전역참조
// func.call({ x: 1 }, 1, 2, 3); //명시적 바인딩으로 {x:1}참조
// console.clear();

// //call 메서드 (2)객체 메서드
// var obj = {
//   a: 1,
//   methodC: function (x, y) {
//     console.log(this.a, x, y);
//   },
// };

// obj.methodC(2, 3);
// obj.methodC.call({ a: 4 }, 5, 6);
// console.clear();

// //2.apply 메서드: call과 동일,but 매개변수를 2번째 인자로 모두 배열로 받음
// //(1)함수
// var func = function (a, b, c) {
//   console.log(this, a, b, c);
// };

// func.apply({ x: 1 }, [4, 5, 6]);

// //(2)메소드
// var obj = {
//   a: 1,
//   methodD: function (x, y) {
//     console.log(this.a, x, y);
//   },
// };

// obj.methodD.apply({ a: 4 }, [5, 6]);
// console.clear();

// //3. call/apply 메서드의 활용 : 배열 메서드를 적용할 수 있다.
// var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// Array.prototype.push.call(obj, 'd');
// console.log(obj);

// var arr = Array.prototype.slice.call(obj);
// console.log(arr);
// console.clear();

// //조건:문자열도 call/apply를 메서드를 이용해 모든 배열 메서드를 적용할 수 있으나, 원본 문자열에 변경을 가하는 메서드는 에러가 남(push,pop,shift,unshift,splice)
// var str = 'abc def';
// //Cannot assign to read only property 'length' of object '[object String]'
// //   Array.prototype.push.call(str, ', pushed string');
// //   Array.prototype.concat.call(str, 'string'); // [String {'abc def'},"string"]
// Array.prototype.every.call(str, function (char) {
//   //false
//   return char !== ' ';
// });

// Array.prototype.some.call(str, function (char) {
//   //true
//   return char === ' ';
// });

// var newArr = Array.prototype.map.call(str, function (char) {
//   return char + '!';
// });
// console.log(newArr);
// console.clear();

// var newStr = Array.prototype.reduce.apply(str, [
//   function (string, char, i) {
//     return string + char + i;
//   },
// ]);
// console.log(newStr);
// console.clear();

// ///Array.from: 유사배열객체,순회가능한 종류의 데이터 타입을 배열로 전환하는 Array.from 메서드를 새로 도입
// var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// var arr = Array.from(obj);
// console.log(arr);
// console.clear();

// //생성자 내부에서 다른 생성자 호출
// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// function Student(name, gender, school) {
//   Person.call(this, name, gender); //call로 반복 줄임
//   this.school = school;
// }

// function Employee(name, gender, company) {
//   Person.apply(this, [name, gender]); //apply로 반복 줄임
//   this.company = company;
// }

// var by = new Student('다영', 'female', '덕성');
// console.log(by);
// var jn = new Student('재난', 'male', '구글');
// console.log(jn);
// console.clear();

//apply: 여러 인수를 묶어 하나의 배열로 전달하고 싶을때

//Bind 메서드:
