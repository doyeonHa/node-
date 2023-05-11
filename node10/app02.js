// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
app.get('/a', function (request, response) {
  response.send('<a href="/b">Go to B</a>');
  // response.sendFile(__dirname + '/public/a.html');
});

app.get('/b', function (request, response) {
  // response.send('<a href="/a">Go to A</a>');
  response.sendFile(__dirname + '/public/b.html');
});

app.all('*', function (request, response) { // 전체 선택지는 가장 마지막에 사용
response.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

// 서버를 실행합니다.
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});

// 폴더 생성 
// public - 외부에서 접근 가능한 파일들 모아둠
// views - 템플릿 파일을 모아둠
// routes - 서버의 라우터와 로직을 모아둠