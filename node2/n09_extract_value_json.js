// JSON(JavaScript Object Notation)
// 자바스크립트에서 오브젝트를 표현하는 방법
// {키 : 값}으로 표현

// const user = {};
// user.name = 'hadoyeon';
// user.age = 19;
// console.log(user);

const user2 = { name: 'kyeongrok', age: 31 } // key에 해당하는 값에 원래는 ""ㅇ를 붙여주어야 하지만 코딩 편의상 붙혀주지 않아도 됩니다.
console.log(user2);

// json객체에서 값을 추출하려면 []또는 .연산자를 이용
const user = { name: 'kim', age: 31 };
console.log('user : ', user);
console.log('user.name : ', user.name);
console.log('user.age : ', user.age);

user.job = 'developer';
user.nation = 'korea';
console.log(user);

const fieldName = 'age';
console.log(user[fieldName]);