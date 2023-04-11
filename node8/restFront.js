function getUser() { // 로딩 시 사용자 가져오는 함수
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById('list');
      list.innerHTML = '';
      Object.keys(users).map(function(key) {
        var userDiv = document.createElement('div');
        var span = document.createElement('span');
        span.textContent = users[key];
        var edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', () => { // 수정 버튼 클릭
          var name = prompt('바꿀 이름을 입력하세요');
          if(!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
            if(xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('PUT', '/users/' + key);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify({ name: name}));
        });
        var remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', () => { // 삭제 버튼 클릭
          var xhr = new XMLHttpRequest();
          xhr.onload = () => {
            if(xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('DELETE', '/users/' + key);
          xhr.send();
        });
        // appendChile() : 자식 요소를 추가
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('GET', '/users');
  xhr.send();
}
// window : 전역 객체 모듈
window.onload = getUser; // 로딩 시 getUser 호출
// js에서 페이지가 로드되면 자동 실행되는 전역콜백함수,
// window : 웹브라우저를 담당하는 객체
// 폼 제출
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  var name = e.target.username.value;
  if(!name) {
    return alert('이름을 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name : name }));
  e.target.username.value = '';
});

// XMLHttpRequest
// 웹 브라우저는 서버에 데이터를 요청하기 위한 XMLHttpRequest 객체를 내장
// XMLHttpRequest : 서버로부터 XML  데이터를 전송받아 처리하는데 사용됨.
// reponseText() : 서버에 요청하여 응답으로 받은 데이터를 무자열로 저장
// open() : 요청을 취소함
//  send() : 서버에 요청 보내기. GET 방식요청일때 사용.
// send(string) : 서버에 요청 보냄. post 방식 요청일 때 사용.

// Ajax에서는 요청을 보내기 전에 setRequestHeader() 메소드를 사용하여 HTTP 요청 헤더를 작성할 수 있습니다
// 문법 --
// XMLHttpRequest인스턴스 setRequestHeader(헤더이름, 헤더값);
// 헤더이름은 HTTP 요청 헤더에 포함하고자 하는 헤더의 이름이며, 그 값도 같이 전달합니다.