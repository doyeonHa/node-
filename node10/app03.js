// 라우팅 매개변수 추출
// express모듈의 라우팅 기능 : 라우팅할 때 토큰을 사용
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
// expressjs.com - guide - routing 참고
// get() 메서드의 첫 매개변수에 문자열 /:id 입력 (URL 파라미터 이용)
// /users/:userId/:bookId - > /users/ 뒤에 오는 값을 파라미터로처리하겠다는 의미
// - 지정한 파라미터는 reqest.params 객체 안에 들어감
// - userId로 표시된 부분에 넣어 전달된 값은 request.params.name  속성으로 접근 가능 -> 토큰(token)
app.get('/users/:userId/:bookId', function (request, response) {
  // 1) 변수 선언
  // let user = request.params.userId;
  // let book = request.params.bookId;
  // response.send('<h1>' + user + book + ' Page</h1>');

  // 2) req.params;
  response.send(request.params); // json형식으로 추출됨
});


// 서버를 실행합니다.
app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1.:3000');
});