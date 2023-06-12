import fs from 'fs';

export const compareFileSizes = (filePath1, filePath2, callback) => {
  fs.stat(filePath1, (error1, stats1) => {
    if (error1) {
      callback(error1);
      return;
    }

    fs.stat(filePath2, (error2, stats2) => {
      if (error2) {
        callback(error2);
        return;
      }

      const fileSize1 = stats1.size;
      const fileSize2 = stats2.size;

      const result = Math.sign(fileSize1 - fileSize2);
      callback(null, result);
    });
  });
};
