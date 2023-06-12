import fs from 'fs';

// BEGIN
export const move = (source, destination, callback) => {
  fs.readFile(source, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(destination, data, (err) => {
      if (err) {
        callback(err);
        return;
      }
      fs.unlink(source, (err) => {
        if (err) {
          callback(err);
          return;
        }
        callback(null);
      });
    });
  });
};

export default move;

// END
