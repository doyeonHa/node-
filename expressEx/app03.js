// body parser 미들웨어
// static 미들웨어를 통해 로그인 처리를 하는 login.html 파일을 읽어오고
// body-parser 미들웨어를 사용해 POST 방식으로 요청된 결과값은 출력
// GET(query), POST(body) 방식 모두 처리간으 - 각 방식을 구분하여 변수에 값을 대입

// 모듈 불러오기
const express = require('express');
const bodyParser = require('body-parser');

// express 객체 생성
const app = express();
// application/x=www-form-urlencoded 파싱
// urlencoded는 url 형식의 데이터 전달을 의미
// extended: false -> NodeJs에 기본으로 내장된 querystring모듈을 사용
// extended: true -> qs모듈사용 (querystring보다 확장된 기능, 중첩객체 파싱가능)
// url-encoded 형태인 'age=20&name=홍길동&hobby=캠핑' 로 값을 전달하면,
// {'age': 20, 'name" : '홍길동', 'hobby' : '캠핑'} 형태로 값이 request의 body에 추가
app.use(bodyParser.urlencoded({ extended: false }));
// --> (qs 모듈 별도 설치 필요)

// json 형식의 텍스트를 JavaScript 객체로 파싱
// json은 JSON 형태릐 데이터 전달을 의미
// {'age': 20, 'name" : '홍길동', 'hobby' : '캠핑'}
// ---> json 형태로 값을 전달하면 그대로 request의 body에 값이 추가
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/login`));
app.use(express.static(__dirname + '/login'));

app.use((request, response) => {
  const userId = request.body.userid || request.query.userid;
  const userPassword = request.body.password || request.query.password;

  response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  response.write('<h1>Login ID와 PW 결과 값 입니다.</h1>');
  response.write(`<div><p>${userId}</p></div>`);
  response.write(`<div><p>${userPassword}</p></div>`);
  response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
// 열세 번째 수업