const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //
    //         res.writeHead(200, {
    //             'Page-Type': 'text/html'
    //         })
    //         res.end(data);
    //     });
    // }
    //
    // if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //
    //         res.writeHead(200, {
    //             'Page-Type': 'text/html'
    //         })
    //         res.end(data);
    //     });
    // }
    // console.log(req.url);

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    let contentType = 'text/html';

    switch (ext) {
        case '.css':
            contentType = "text/css"
            break
        case '.html':
            contentType = "text/html"
            break
        case '.js':
            contentType = "text/javascript"
            break
        default:
            contentType = "text/html"
            break
    }

    //console.log(filePath);
    if (!ext) {
        filePath += '.html'
    }
    fs.readFile(filePath, (err, content) => {
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error 500');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(content)
        }
    }) // res.end();
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}.....`)
})