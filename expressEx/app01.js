// body-parser 이용하여 input 태그로 입력받은 값은 콘솔에 출력하는 프로그램
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    <input type="submit" name"position" value="문과생">
    <input type="submit" name"position" value="이과생">
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body); // req.body에 name, value를 객체형식으로 넣는다.
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
  });

  // urlencoded()의 옵션
  // extended는 중첩된 객체표현을 허용할지 말지를 정하는 것
  // urlencoded는 url 현식의 데이터를 전달을 의미
  // 객체 안의 객체를 파싱할 수 있게하려면 true
  // true 이면 qs모듈을 사용
  // false이면 기본 내장된 querystring 모듈을 사용 querystring.parse는 bject를 상속받지 않는다
  // {extended: true}를 하면 qs.parse를 사용하므로, 중첩 객체 파싱 가능