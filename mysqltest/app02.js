const { name } = require('ejs');
const mysql = require('mysql');
// createConnection() 에 자신의 DB정보를 입력한다
const connection = mysql.createConnection({
    host: 'localhost', // db ip address
    port: 3310, // db port number
    user: 'ha', // db id
    password: 'ha',
    database: 'mydb' // db schema name
});

// testtable 출력
connection.connect(function (err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    } else {
        console.log('TESTTABLE 테이블 연결 성공!');
        var sql1 = "select no, str_name from testtable";
        connection.query(sql1, function (err, rows) {
            for (var obj of rows) {
                console.log("no : ", obj.no);
                console.log("str_name : ", obj.str_name);
            }
        });
        connection.end();
    }
});

// testtable 삽입
// var sql1 = "INSERT INTO testtable VALUES (?, ?)";

// var input_data = [3, "choi"];
// connection.query(sql1, input_data, (err) => {
//     console.log("삽입완료1");
// });

// var input_data1 = [4, "park"];
// connection.query(sql1, input_data1, (err) => {
//     console.log("삽입완료2");
// });

// var input_data2 = [5, "yoon"];
// connection.query(sql1, input_data2, (err) => {
//     console.log("삽입완료3");
// });

// testtable 수정
// var sql = "update TestTable set str_name=? where no=?";
// var update_data = ["강길동", 1];
// connection.query(sql, update_data, function(error) {
//     console.log("수정완료");
// });

// testtable 삭제
var sql3 = "delete from TestTable where no = ?";
var delete_data = [5];
connection.query(sql3, delete_data, function(error) {
    console.log("삭제완료");
});