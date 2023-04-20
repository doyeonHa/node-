// 모듈을 추출합니다
var express = require('express');

// 서버를 생성합니다
var app = express();

// requext 이벤트 리스너를 설정합니다
app.use(function (request, response) {
    // 데이터를 생성합니다
    var output = [];
    for (var i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }

    // 자바스크립트 객체를 입력했으므로 JSON형식으로 출력합니다
    response.send(output);
});

// 서버를 실행합니다
app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});