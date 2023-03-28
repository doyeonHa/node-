let http = require('http');

// 웹서버 객체를 만듭니다
let server = http.createServer();

// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다
let port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다 : %d', port);
});

