import { promises as fsPromises } from 'fs';

export const getTypes = (paths) => {
  const promises = paths.map(async (path) => {
    try {
      const stat = await fsPromises.stat(path);
      if (stat.isDirectory()) {
        return 'directory';
      } else {
        return 'file';
      }
    } catch (error) {
      return null;
    }
  });

  return Promise.all(promises);
};
