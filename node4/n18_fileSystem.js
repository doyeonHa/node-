// package.json 파일이 없으면
// >npm init --> package.json 생성됨

let fs = require('fs');

let data = fs.readFileSync('./package.json', 'utf8');
console.log(data);