const http = require("http");

let count = 0;

// req : request / 요청sfasfsdafsdaf
// res : response / 응답
const server = http.createServer((req, res) => {
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Conetent-type", "text/plain");
    res.write("hahahaa\n");

    setTimeout(() => {
        res.end("hohoho");
    }, 2000);
});

server.listen(8000);
