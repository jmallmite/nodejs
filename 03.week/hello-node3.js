const http = require("http");          // http 객체 생성성

let count = 0;

// 노드 서버 객체 생성성
const server = http.createServer((req, res) => {    // 서버 객체 생성
    console.log((count += 1));     // count = count+1                 // 카운트 1증가
    res.statusCode = 200;                           // 결과값 200
    res.setHeader("Conetent-Type", "text/plain");   // 헤더 설정
    res.write("Hello\n");                         // 응답값 설정

    setTimeout(() => {                              // 2초후 메세지 출력
        res.end("node js");
    }, 2000);
});

server.listen(3000, () => console.log("Hello Node.js"));      // 8000번 포트로 서버 실행