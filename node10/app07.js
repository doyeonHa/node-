// /public/mulan.jpg 준비
// 모듈을 추출합니다.
var express = require("express");
var morgan = require('morgan');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(morgan(':method + :date'));
app.use(function(request, response) {
    response.send('<h1>express Basic</h1>');
});

// 서버를 실행합니다.
app.listen(3000, function() {
    console.log('Server running at the http://127.0.0.1:3000');
  });

  // body-parser
  // post로 요청시 요청 파라미터를 확인할 수 있도록 만들어 주는 미들웨어
  // post로 요청 시 본문에 들어있는 요청 파라미터들을 파싱하여 요청 객체의 body속성에 넣어줌
  // 폼 데이터나 AJAX요청의 데이터 처리
  // json미들웨어는 요청 본문이 json인 경우 해석, urlencoded 미들웨어는 폼 요청 해석
  // put이나 patch, post요청 시에 req.body에 프런트에서 온 데이터를 넣어줌
  // app.use(express.json());
  // app.use(express.urlencoded({ extended false }));

  // http모듈로만 post body를 파싱하려면, req.on('data', function(chunk) {body += chunk; });와 같이 이벤트를 등록 후 인코딩 처리를 해줘야 함

  // body-parser 사용시
  // bodyParser.urlencoded()를 등록하면, 자동으로 req에 body속성이 추가되고 저장된다
  // 만약 urls에 접근하고 싶다면, req.body.urls이다
  // 인코딩도 derault로 URF-8로 해주고, 이벤트 등록할 필요도 없음

  // urlencoded()의 옵션
  // extended는 중첩된 객체표현을 허용할지 말지를 정하는 것
  // urlencoded는 url 형식의 데이터 전달을 의미
  // 객체 안의 객체를 파싱할 수 있게 하려면 ture
  // ture 이면 qs모듈을 사용
  // false이면 기본 내장된 querystring모듈을 사용 querystring.parse는 object를 상속받지 않는다
  // {extended: true} 를 하면 qs.parse를 사용하므로, 중첩 객체 파싱 가능