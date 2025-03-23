const fs = require('node:fs');

fs.readFile('file.md', (readFileErr, data) => {
    if (readFileErr) throw readFileErr;
    console.log(data.toString());

    fs.unlink('file2.md', unlinkErr => {
        if(unlinkErr) throw unlinkErr;
    });
});