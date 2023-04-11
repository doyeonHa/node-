// 모듈 추출
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// 서버 생성 및 실행
http.createServer(function(request, response) {
    // ejsPage.ejs 파일 읽기
    fs.readFile('ejsPage.ejs', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data));
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});