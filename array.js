'use strict';

//Array

//1. declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

//2. Index position
const fruits = ['๐', '๐', '๐'];
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
  //foreach์์ callbackํจ์๋ฅผ ์ง์  ์ ์ธํด์ฃผ๊ณ  ์ธ์๋ฅผ ์ ๋ฌํด์ค๋ค.์ด๋ฆ ์๋ ํจ์, ๋ฐ์์ฒ๋ผ ์จ๋ ๋จ
  console.log(index); //๊ณผ์ผ ์ธ๋ฑ์ค ์์ฐจ์ ์ผ๋ก 0,1,2
  console.log(array); //fruits array์์ฒด
}); //forEach๋  ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐ์์จ๋ค
console.clear();

//์์ ๋์ผ ๋จ arrow function ์ฌ์ฉ, ์คํ๋ฌธ ํ์ค์ด๋ฉด {}์ฌ์ฉ ์ํด๋ ๋จ
fruits.forEach((fruit, index) => console.log(fruit, index)); //forEach๋  ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐ์์จ๋ค
console.clear();

//4.Addition,deletion,copy
//push: add an item to the end
fruits.push('๐ฅ', '๐ฉ');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('๐');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
console.clear();

//note!: shift, unshift๋ pop,push ๋ณด๋ค ํจ์ฌ ๋๋ฆฌ๋ค

//splice: remove an item by index position
const fruits2 = ['๐', '๐', '๐', '๐ฅ', '๐ฉ'];
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
console.log(fruits2.indexOf('๐')); //0
console.log(fruits2.indexOf('๐ฅ')); //2
console.log(fruits2.indexOf('๐')); //์กด์ฌํ์ง ์๋ ์ธ๋ฑ์ค๋ -1

//includes: find if is there
console.log(fruits2.includes('๐ฅ')); //true
console.log(fruits2.includes('๐')); //์์ผ๋๊น false
console.clear();

//lastIndexOf: fint the last index
console.log(fruits2);
fruits2.push('๐');
console.log(fruits2);
console.log(fruits2.lastIndexOf('๐'));
console.clear();
