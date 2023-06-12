# Возврат в асинхронном коде

Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбэк. Экспортируйте функцию по умолчанию.

Пример:
```js
import write from './writer.js';
 
write('./myfile', 'data', () => {
  console.log('success');
});
```

## Подсказки

Для записи в файл используйте функцию [fs.writeFile()](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback).