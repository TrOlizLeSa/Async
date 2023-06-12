import fs from 'fs';

const write = (path, data, callback) => {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.log(`Ошибка при записи файла: ${error}`);
    } else {
      callback();
    }
  });
};

export default write;
