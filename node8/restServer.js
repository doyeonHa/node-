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

// DB대용으로  users라는 객체를 선언해 사용자 정보를 저장
// POST / users 요청 : 사용자를 새로 저장
// PUT / users / 아이디 요청 : 해당 아이디의 사용자 데이터를 수정
// DELETE / users / 아이디 요청 : 해당 아이디의 사용자 제거

// REST방식으로 주소를 만들어서 주소와 메소드만 보면 요청내용 유추 가능
// Name: 요청주소, Method: 요청 메소드, Status: HTTP 응답코드, Type: 요청의 종류

// POST / user : 사용자 등록하는 요청
// DELETE / users / 1505550586127 : 해당키를 가진 사용자를 제거하는 요청
// 수정, 삭제, 등록 발생할 때마다 GET / users 로 갱신된 사용자 정보를 가져옴
// General: 공통된 헤더, Request Headers: 요청의 헤더, Response Headers: 응답의 헤더, Payload: 요청의 본문 표시됨
// Preview, Response: 응답의 본문