// 'use strict';

// //Promise is a javaScript object
// //State: pending -> fullfilled or rejected
// //Producer vs Consumer

// //Promise 만들기 : Producer
// //when new Promise is created, the executor runs automatically
// const promise = new Promise((resolve, reject) => {
//   //doing some heavy work( network, read files ) 동기적으로 짜면 시간이 걸려서 다음 동작 수행 못함
//   console.log('doing something...');
//   setTimeout(() => {
//     resolve('da young');
//     // reject(new Error('no network'));
//   }, 2000);
// });

// //Promise 사용하기 : Consumer (then,catch,finally)

// promise
//   .then((value) => {
//     //then은 성공(resolve)할때 case
//     //'ellie'라는 값이 value에 들어감
//     console.log(value); //성공 실행문
//   })
//   .catch((error) => {
//     //catch에서는 에러 발생(reject)할때 어떻게 처리할 건지
//     console.log(error); //실패 실행문
//   })
//   .finally(() => {
//     console.log('finally'); //성공,실패 상관없이 무조건 실행
//   });
// console.clear();

//3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4.Error Handling
