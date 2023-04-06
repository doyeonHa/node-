//REST: Representational State Transfer
//월드와이드웹(www)와 같은 하이퍼미디어 시스템을 위한 소프트웨어 아키텍쳐
//REST 서버는 클라이언트로 하여금 HTTP 프로토콜을 사용해 서버의 정보에 접근 및 변경을 가능하게 함
//정보는 text, xml, json 등 형식으로 제공
//GET: 서버 자원을 가져오려고 할 떄 사용
//POST: 서버에 자원을 새로 등록하고자 할 때 사용(또는 뭘 써야할지 애매할 때, 로그인 동작 등)
//PUT: 섭의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 사용
//PATCH: 서버 자원의 일부만 수정하고자 할 때 사용
//DELETE: 서버의 자원을 삭제하고자 할 때 사용
/* RESTful
  REST API를 사용한 주소 체계를 이용하는 서버를 RESTful하다 표현
  get메서드의 /user는 사용자를 조회하는 요청, post메서드의 /user는 사용자를 등록하는 요청
  
  HTTP메서드          주소                역할
      get       /                 restFront.html 파일 제공
      get       /about            about.html 파일 제공
      get       /users            사용자 목록 제공
      get       기타              기타 정적 파일 제공
      post      /users            사용자 등록
      put       /users/사용자id   해당 id의 사용자 수정
      delete    /users/사용자id   해당 id의 사용자 제거 
*/
