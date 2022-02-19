'use strict';

//Array

//1. declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

//2. Index position
const fruits = ['🍉', '🍒', '🍓'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.clear();

//3.Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.clear();

//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
console.clear();

//c.for each
fruits.forEach(function (fruit, index, array) {
  //foreach안에 callback함수를 직접 선언해주고 인자를 전달해준다.이름 없는 함수, 밑에처럼 써도 됨
  console.log(index); //과일 인덱스 순차적으로 0,1,2
  console.log(array); //fruits array자체
}); //forEach는  콜백함수를 받아온다
console.clear();

//위와 동일 단 arrow function 사용, 실행문 한줄이면 {}사용 안해도 됨
fruits.forEach((fruit, index) => console.log(fruit, index)); //forEach는  콜백함수를 받아온다
console.clear();

//4.Addition,deletion,copy
//push: add an item to the end
fruits.push('🥑', '🍩');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍄');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
console.clear();

//note!: shift, unshift는 pop,push 보다 훨씬 느리다

//splice: remove an item by index position
const fruits2 = ['🍉', '🍒', '🍓', '🥑', '🍩'];
console.log(fruits2);
fruits2.splice(0, 1);
console.log(fruits2);
console.clear();

//combine two arrays
console.log(fruits);
console.log(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
console.clear();

//5.Searching
//indexOf: find the index
console.log(fruits2);
console.log(fruits2.indexOf('🍒')); //0
console.log(fruits2.indexOf('🥑')); //2
console.log(fruits2.indexOf('😊')); //존재하지 않는 인덱스는 -1

//includes: find if is there
console.log(fruits2.includes('🥑')); //true
console.log(fruits2.includes('😊')); //없으니깐 false
console.clear();

//lastIndexOf: fint the last index
console.log(fruits2);
fruits2.push('🍒');
console.log(fruits2);
console.log(fruits2.lastIndexOf('🍒'));
console.clear();
