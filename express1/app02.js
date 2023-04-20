const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

// response.send([body]) : 매개변수의 자료형에 따라 적절한 형태로 응답
// response.json([body]) : JSON형식으로 응답
// response.jsonp([body]) : jsonp지원을 통해 JSON형식으로 응답
// response.redirect() : 웹페이지 경로를 강제로 이동
// response.download() : 파일이 다운로드 되도록
// response.end() : 응답 프로세스를 종료
// response.sendStatus() : 응답 상태 코드를 설정한 후 응답 본문으로 전송
// response.render() : 템플릿을 렌더링
// response.sendFile() : 파일을 전송