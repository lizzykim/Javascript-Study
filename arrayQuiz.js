'use strict';

//Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' '); //구분자를 안넣으면 자동으로 , 가 사이에 들어감 /array api
  console.log(result);
  console.clear();
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2); //string api
  console.log(result);
  console.clear();
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse()); //배열 자체도 변화시킨다.
  const result = array.reverse();
  console.log(result);
  console.clear();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 6); //slice는 배열에서 원하는 부분만 받아오고 싶을때
  console.log(result);
  console.log(array);
  //   const result = array.splice(2);//splice는 '삭제된 데이터'를 리턴
  //   console.log(result); //3,4,5가 삭제되서 리턴됨
  //   console.log(array);//남은 데이터 리턴
  console.clear();
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90인 학생을 찾아라
{
  const result = students.find((student) => {
    return student.score === 90; //점수가 90이면 return이 true, true가 나오면 find 메소드가 멈추고 true가 된 student를 리턴
  });
  console.log(result);
  console.clear();

  //내가 한거
  //   students.map((student) => {
  //     if (student.score == 90) { //return student.score === 90 => 둘다 true인게 비슷하군
  //       console.log(student);
  //     }
  //   });
}

// Q6. make an array of enrolled students
{
  const result = students.filter((students) => students.enrolled === true); //filter: 콜백함수가 true인 아이들만 모아서 새로운 배열을 전달하는 api
  console.log(result);
  console.clear();
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  console.clear();
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  console.clear();
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, cur) => {
    console.log('----------');
    console.log(prev);
    console.log(cur);
    return prev + cur.score;
  }, 0); //reduce는 값을 누적
  console.log(result / students.length);
  console.clear();
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  console.clear();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
