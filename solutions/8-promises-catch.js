import fsp from 'fs/promises';

// BEGIN
export const touch = (filepath) => {

    return fsp.access(filepath).catch(() => fsp.writeFile(filepath, ''));
  };

  export default touch;
// END