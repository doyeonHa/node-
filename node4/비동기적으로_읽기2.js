// 모듈을 추출합니다
const fs = require('fs');
const async = require('async');

// 파일을 읽어 들입니다
async.parallel([
    (callback) => { fs.readFile('a.txt', callback); },
    (callback) => { fs.readFile('b.txt', callback); },
    (callback) => { fs.readFile('c.txt', callback); }
], (error, results) => {
    console.log(results);
});