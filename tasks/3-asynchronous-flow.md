# Упорядочивание асинхронных операций

Реализуйте и экспортируйте асинхронную функцию `compareFileSizes()`, которая сравнивает размеры двух файлов и передает результат сравнения в переданную колбэк-функцию. Если первый файл больше второго, то она передает единицу, если размеры равны, то ноль, иначе — -1.

```js
import { compareFileSizes } from '../solutions/3-asynchronous-flow.js';
 
compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
```

## Подсказка

- Для реализации этого задания нужно воспользоваться функцией [fs.stat](https://nodejs.org/api/fs.html#fsstatpath-options-callback), которая использовалась в примерах теории.
- [Math.sign](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)