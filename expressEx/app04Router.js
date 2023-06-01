const express = require("express");
const app = express();
const port = process.env.PORT || 3000

//Express의 미들웨어 불러오기
var cookieParser = require('cookie-parser'), errorHandler = require('errorhandler');

//에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

app.use(cookieParser('secret'))

//라우터 사용하여 라우팅 함수 등록
var router = express.Router();

const cookieConfig = {
  httpOnly: true,
  maxAge: 1000000,
  signed: true
};

app.get('/', function (req, res) {
  res.send('<h1>Express Simple Server</h1>');
});
//라우팅 함수 등록 + 쿠키 설정(웹 브라우저에 json 정보 저장함)
router.route('/setcookie').get(function (req, res) {
  console.log('/setcookie 라우팅 함수 호출됨');
  res.cookie('cookieName', 'cookieValue', cookieConfig)
  res.cookie('user', {
    name: '윤성 현',
    data: 100
  });
  res.redirect('/getcookie'); //경로 이동
})

//쿠키 확인
router.route('/getcookie').get(function (req, res) {
  console.log('/getcookie 라우팅 함수 호출됨');
  res.send(req.cookies);
});

//라우터 객체를 app 객체에 등록
app.use('/', router);

//등록되지 않은 패스에 대해 페이지 오류 응답
app.all('*', function (req, res) {
  res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

//404 에러 페이지 처리
var errorHandler = expressErrorHandler({
  static: {
    '404': './public/404.html'
  }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//Express 서버 시작
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
