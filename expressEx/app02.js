// 전달받은 값이 많을 때 보기좋게 정리
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    <input type="submit" name"position" value="문과생">
    <input type="submit" name"position" value="이과생">
    </form>
    `);
});

app.post('/', (req, res) => {
    const {
        body: { postion }, // 전달받은 값이 position하나
    } = req;
    // 여러값을 전달받은 경우:
    // const { body: {position, title, description...}, } = req; 로
    res.send(
        `<script>alert("${postion}");
        window.location.href = "/";
        </script>`
        // 알림창이 뜨면서 확인 클릭 시 "localhost:3000/"으로 이동
    );
});

app.listen(3000, () => {
    console.log('3000 포트에서 서버 시작');
  });