let host = '';

let server = http.createServer()

let port = 3000;
server.listem(port, host, '30000', function() {
    console.log('웹 서버가 시작되었습니다 : %s, %d', host, port);
});

// connection 클라이언트가 접속할 때 발생하는 이벤트입니다
// request 