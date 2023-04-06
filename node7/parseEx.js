//JSON.parse(): JSON String 객체를 자바스크립트 객체로 변환하는 기능, JSON.stringify()와 반대
const fs = require('fs');

fs.readFile('./mlist.json', (err, data) => {
  if(err) {
    console.log('파일을 읽을 수 없음');
  }else {
    const json = JSON.parse(data.toString());
    for(let i = 0; i < json.length; i++) {
      console.log(`이름: ${json[i].name}, 나이: ${json[i].age}`);
    }
  }
});