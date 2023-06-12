# Обработка ошибок в промисах

Реализуйте и экспортируйте асинхронную функцию `touch()`, которая создаёт файл, если его не существует. Если файл существует, то функция должна успешно завершиться.

```js
import { touch } from '../solutions/8-promises-catch.js';
 
touch('/myfile').then(() => console.log('created!'));
 
// Повторный вызов успешно завершается
touch('/myfile').then(() => console.log('created!'));
```

## Подсказка
[fsPromises.access](https://nodejs.org/api/fs.html#fspromisesaccesspath-mode) — проверка существования файла