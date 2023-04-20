// app.use('/test', handler)
// :/test 으로 시작하는 모든 요청에 응담, 모든 method에 응답

// app.get('/test')
// :'/test' 정확한 URL과 GET method에만 응답

// 모듈을 추출합니다
var express = require('express');

// 서버를 생성합니다
var app = express();

// requext 이벤트 리스너를 설정합니다
app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello express</h1>');
});

// 서버를 실행합니다
app.listen(3000, function () {
    console.log("Server Running at http://127.0.0.1:3000");
});
