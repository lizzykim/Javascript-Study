//클로저는 어떻게 사용되는가?

//1. 콜백 함수 내부에서 외부데이터를 사용하고자 할 때 ex)이벤트 리스너

//(1) 콜백함수를 내부 함수로 선언해서 외부 변수를 직접 참조하는 방법
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

//(2)bind메서드로 값은 직접 넘겨줌?

//(3) 콜백함수를 고차함수로 바꿔서 클로저 사용
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
