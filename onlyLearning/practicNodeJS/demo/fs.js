// File System
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test2'), (err) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test2', 'text2.txt');
//
// fs.writeFile(filePath, 'Hello NodeJS', err => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Файл создан');
//
//     fs.appendFile(filePath, '\nHello again', err => {
//         if (err) {
//             throw err
//         }
//
//         console.log('Значение записано');
//     })
// })

fs.readFile(filePath, 'utf-8', (err, content ) => {
    if (err) {
        throw err;
    }

    console.log(content);

    // const data = Buffer.from(content);
    // console.log('Page: ', data.toString());
})