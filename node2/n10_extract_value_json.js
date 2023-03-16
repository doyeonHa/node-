// <전역 객체(Global Object)>

// 전역객체 : Node.js에서 따로 객체를 선언하지 않고 사용할 수 있는 객체(별도의 모듈을 불러오지 않고 사용 가능)
// process : 현재 동작중인 프로세스의 실행에 대한 정보를 다루는 객체
// env : 환경변수 정보
// require() : 모듈 로딩
// console : 콘솔 창에 결과를 보여주는 객체
// export : 모듈을 다루는 객체

// <console 객체의 주요 메소드>
// - console.log : 콘솔에 로그를 출력한다
// - console.dir(object) : 객체의 속성 출력
// - console.time(id) : 실행시간 측정 시작
// - console.timeEnd(id) : 실행 시간 측정 끝


// process
console.log(process.env); // 컴퓨터 환경과 관련 정보를 가진 객체
console.log('--------------');
console.log(process.arch);  // 프로세서의 아키텍쳐
console.log('--------------');
console.log(process.uptime());  // 현재 프로그램이 실행된 시간
console.log('--------------');
console.log(process.memoryUsage());  // 메모리 사용 정보를 가진 객체
console.log('--------------');
console.log(process.version);  // Node.js 버전
console.log('--------------');
console.log(process.versions);  // Node.js 버전

// console
console.log('Number : %d + %d = %d', 1, 2, 3 + 4);
console.log('String : %s', 'Hello World!');
console.log('JSON : %j', {name : 'node.js'});
console.log('String1', 'String2');