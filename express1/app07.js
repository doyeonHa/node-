// query속성을 사용하여 요청 매개변수를 추출
// 사용자의 요청에서 name, region을 추출
// 모듈을 추출합니다
// 실행창 주소에 http://localhost:3000/?name=kim&region=seoul 입력
var express = require('express');

// 서버를 생성합니다
var app = express();

// 미들웨어를 설정합니다
app.use(function (request, response) {
    // 변수를 선언합니다
    var name = request.query.name;
    var region = request.query.region;

    // 응답합니다
    response.send('<h1>' + name + '-' + region + '</h1>');
});

// 서버를 실행합니다
app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000');
});