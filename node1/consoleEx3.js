//console.time : 연산 수행되는 시간 측정
console.time('duration_time');
var result = 0;
for (var i = 0; i< 100000; i++) {
    result += i;
}
console.timeEnd('duration_time');

//__dirname, __filename : 실행된 파일의 폴더와 파일 이름 정보
console.log('파일이름 : %s', __filename);
console.log('파일이름 : %s', __dirname);