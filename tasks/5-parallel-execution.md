# Параллельное выполнение операций

Реализуйте и экспортируйте асинхронную функцию `getDirectorySize()`, которая считает размер переданной директории, не включая поддиректории. Анализ размера файла должен происходить параллельно. Для этого воспользуйтесь библиотекой `async`.

Примеры:

```js
import { getDirectorySize } from '../solutions/5-parallel-execution.js';
 
getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
```

## Подсказки

- [fs.readdir()](https://nodejs.org/api/fs.html#fsreaddirpath-options-callback) - чтение содержимого директории, возвращает файлы и папки в директории.
- [path.join()](https://nodejs.org/api/path.html#pathjoinpaths) - конструирует пути.
- [async.map()](http://caolan.github.io/async/v3/docs.html#map)
- f[s.stat()](https://nodejs.org/api/fs.html#fsstatpath-options-callback) - информация о файле. В получаемом объекте содержится метод isFile() для проверки является ли элемент файлом.
- [_.sumBy()](https://lodash.com/docs#sumBy) - нахождение суммы в массиве.
- колбэк должен вызываться и в случае ошибки.