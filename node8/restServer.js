const http = require('http');
const fs = require('fs');

const users = {}; // 데이터 저장용 객체

http.createServer((req, res) => {
  if(req.method === 'GET') { // 사용자 읽기
    if(req.url === '/') {
      return fs.readFile('./restFront.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/about') {
      return fs.readFile('./about.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/users') {
      return res.end(JSON.stringify(users)); // 자바스크립트의 값을 JSON 문자열로 변환
    }
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
  } else if ( req.method === 'POST') {
    if (req.url === '/users') { // 사용자 등록
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      // 요청의 body를 다 받은 후 실행됨.
      return req.on('end', () => { // 클라이언트로부터 데이터를 받은게
        // 문자열이므로 jsonm 형식으로 parsing이 필요
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = Date.now();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') { // 해당 id의 사용자 수정
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2]; // 해당 id 분리
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        return res.end(JSON.stringify(users));
      });
    }
  } else if (req.method === 'DELETE') { // 해당 id의 사용자 제거
    if (req.url.startsWith('/users')) {
      const key = req.url.split('/')[2]; // 해당 id 분리
      delete users[key];
      return res.end(JSON.stringify(users));
    }
  }
  res.writeHead(404, 'NOT FOUND');
  return res.end('NOT FOUND');
})
.listen(8085, () => {
  console.log('8085번 포트에서 서버 대기중입니다.');
});