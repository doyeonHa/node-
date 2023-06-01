//1) 쿠키 예제
const express = require("express");
const app = express();
const port = process.env.PORT || 3000

var cookieParser = require('cookie-parser')
app.use(cookieParser('secret'))

//쿠키 옵션 설정
//웹서버를 통해서만 쿠키에 접근
//쿠키의 수명을 밀리초로 설정
//쿠키의 암호화
const cookieConfig = {
  httpOnly: true,
  maxAge: 1000000,
  signed: true
};

app.get('/', function (req, res) {
  res.send('<h1>Express Simple Server</h1>');
});

//쿠키 설정
app.get('/setcookie', function (req, res) {
  res.cookie('cookieName', 'cookieValue', cookieConfig)
  res.cookie('user', {
    name: 'aespa',
    data: 100
  });
  res.redirect('/getcookie'); //경로 이동
})

//쿠키 확인
app.get('/getcookie', (req, res) => {
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});