// Импортируем модуль fs-extra
const fs = require('fs-extra');

// Проверяем, есть ли папка folder1. Если нет, то она будет создана.
fs.ensureDirSync('folder1');

// Создать файл file.txt в папке folder1
fs.ensureFileSync('folder1/file.txt');

// Проверяем, есть ли папка folder2. Если нет, то она будет создана.
fs.ensureDirSync('folder2');

// Перемещаем file.txt из folder1 в folder2
fs.moveSync('folder1/file.txt', 'folder2/file.txt', { overwrite: true });

// Проверяем, есть ли папка folder3. Если нет, то она будет создана.
fs.ensureDirSync('folder3');

// Скопировать file.txt из folder2 в folder3
fs.copySync('folder2/file.txt', 'folder3/file.txt', { overwrite: true });

// Удаляем все файлы
fs.removeSync('folder2/file.txt');
fs.removeSync('folder3/file.txt');

// Удаляем все папки
fs.removeSync('folder1');
fs.removeSync('folder2');
fs.removeSync('folder3');
