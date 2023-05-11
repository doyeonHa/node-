const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 미들웨어 연결

const app = express();
app.set('port', process.env.PORT || 3000);

// 로그 기록
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('dev')); //개발환경이면
}
// combined, common, short, tiny등을 넣을 수 있다
// 개발환경에서는 dev를 배포환경에서는 combined를 이용하면 좋다

app.get('/', (req, res) => {
    res.send('Hello, index');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});