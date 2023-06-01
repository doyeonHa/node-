// 세션을 저장하고, 출력하는 예
// request 객체의 session 속성을 출력
// 접속할 때마다 현재 시간을 now 세션에 저장

var express = require('express');
var session = require('express-session');

// 서버를 생성합니다
var app = express();

// 미들웨어를 설정합니다
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));

app.use(function (request, response) {
    // 세션을 저장합니다
    request.session.now = (new Date()).toUTCString();
    // 응답합니다
    response.send(request.session);
});

// 서버를 실행합니다
app.listen(3000, function () {
    console.log('Server running at the http://127.0.0.1:3000');
});