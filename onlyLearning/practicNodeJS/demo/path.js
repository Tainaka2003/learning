const path = require('path');

console.log('Название файла: ', path.basename(__filename));

console.log('Название директории: ', path.basename(__dirname));

console.log('Расширение файла: ', path.extname(__filename));

console.log('Путь директории: ', path.dirname(__filename));

console.log('Parse ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));