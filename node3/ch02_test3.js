// 속성 / 메소드 이름               설명
// argv                프로세스를 실행할 때 전달되는 파라미터(매개변수)정보
// env                  환경 변수 정보
// exit()               프로세스를 끝내는 메소드

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) { // index, item은 변수
    console.log(index + ' : ', item);
});