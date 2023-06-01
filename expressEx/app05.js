// express-session 미들웨어 설정하고 서버를 생성하는 예
// 모듈을 추출합니다
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
app.use(function (request, response) { });

// 서버를 실행합니다
app.listen(3000, function () {
    console.log('Server running at the http://127.0.0.1:3000');
});

//   세션의 동작
//   1. 서버는 웹 브라우저에게 세션 값을 보내줍니다(sid 라고 하며, 아무런 의미도 없는 단순 식별자입니다)
//   2. 클라이언트는 접속할 때 자신이 가지고 있는 sid를 서버에게 전달
//   3. 서버는 클라이언트가 보내준 sid를 가지고, 해당 유저를 식별