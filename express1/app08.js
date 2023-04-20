// request 객체를 이용하여 매개변수를 추출하고,
// 헤더의 속성을 추출하여 브라우저를 구분하여 페이지를 출력하는 예
const express = require('express');

const app = express();

app.use((request, response) => {
    const agent = request.header('User-Agent');
    const paramName = request.query.name;
    // 매개변수를 paramName에 넣음
    const browserChrome = 'Hello Chrome';
    const browserOthers = 'Hello Others';

    console.log(request.headers);
    console.log(request.baseUrl);
    console.log(request.hostname);
    console.log(request.protocol);

    if (agent.toLowerCase().match(/chrome/)) {
        response.write(`<div><p>${browserChrome}</p></div>`);
    } else {    
        response.write(`<div><p>${browserOthers}</p></div>`);
    }
    response.write(`<div><p>${agent}</p></div>`);
    response.write(`<div><p>${paramName}</p></div>`);
    response.end();
});

app.listen(3000, function () {
    console.log('Server is running port 3000!');
});