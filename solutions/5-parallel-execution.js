import fs from 'fs';
import path from 'path';
import async from 'async';

export const getDirectorySize = (directoryPath, callback) => {
  fs.readdir(directoryPath, (readdirError, files) => {
    if (readdirError) {
      callback(readdirError, null);
      return;
    }

    async.map(
      files,
      (file, mapCallback) => {
        const filePath = path.join(directoryPath, file);
        fs.stat(filePath, (statError, stats) => {
          if (statError) {
            mapCallback(statError, null);
            return;
          }

          if (stats.isFile()) {
            mapCallback(null, stats.size);
          } else {
            mapCallback(null, 0);
          }
        });
      },
      (mapError, sizes) => {
        if (mapError) {
          callback(mapError, null);
          return;
        }

        const directorySize = sizes.reduce((totalSize, fileSize) => totalSize + fileSize, 0);
        callback(null, directorySize);
      }
    );
  });
};
