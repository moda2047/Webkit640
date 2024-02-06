console.log("jsday02ex01.js에 작성된 스크립트");
// External 방식의 자바스크립트 사용

console.log(n);
// 배열 생성
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 스텍 구조와 유사하게 사용 가능.
// 맨 마지막에 추가 하기
numbers.push(6);
console.log(numbers);

// 맨 마지막 요소 뽑아 내기
numbers.pop();
console.log(numbers);

// 맨 처음 요소 제거
numbers.shift();
console.log(numbers);

// 맨 앞에 요소 추가
numbers.unshift(0);
console.log(numbers);

numbers.unshift(100, 200);
console.log(numbers);
