const fs = require('node:fs');

// fs.readFile 는 파일의 내용을 읽는 비동기 메소드 (메소드의 결과가 끝나지 않더라도 다음 것을 진행해)
fs.readFile('file.md', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// fs.unlinkSync는 파일을 삭제하는 동기 메소드드
fs.unlinkSync('file.md');