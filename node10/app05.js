// /public/mulan.jpg 준비
// 모듈을 추출합니다.
var express = require("express");
var static = require("serve-static");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.static(__dirname + '/public')); // 루트로 public안의 파일 접근 가능
app.use(function(request, response) {
  // 응답합니다.
  response.writeHead(200, { 'Content-Type': 'text/html'});
  response.end('<img src="/mymelody.jpg" width="100%"/>');
});

// 서버를 실행합니다.
app.listen(3000, function() {
  console.log('Server running at the http://127.0.0.1:3000');
});

// morgan
// 서버로 들어온 요청과 응답에 대한 정보를 콘솔에 기록해주는 미들웨어