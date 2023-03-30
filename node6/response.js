var http = require('http');
// 클라이언트 요청을 받았을 때 응답 보내기
var server = http.createServer();
// 웹서버 객체를 만듭니다

var port = 3000;
// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다

server.listen(port, function() {
    console.log('웹서버가 시작되었습니다 : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) { 
    console.log('클라이언트가 접속했습니다 : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다');

    res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8"}); // 응답으로 보낼 헤더를 만듭니다
    res.write("<!DOCTYPE html>"); // 응답 본문(body) 데이터를 만듭니다 여러번 호출 될 수 있습니다
    res.write("<html>");
    res.write(" <head>");
    res.write("   <title>응답 페이지</title>");
    res.write("  </head>");
    res.write("  <body>");
    res.write("   <h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end(); // 클라이언트로 응답을 전송합니다
});

// 클라이언트가 요청을 하면 발생하는 request 이벤트를 처리할 수 있게 등록해 둔 콜백함수에서 res 객체를 사용해서 클라이언트로 응답을 보냄