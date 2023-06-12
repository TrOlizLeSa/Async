import fsp from 'fs/promises';

// BEGIN

export const exchange = async (file1, file2) => {
  try {
    const contentOne = await fsp.readFile(file1, 'utf-8');
    const contentTwo = await fsp.readFile(file2, 'utf-8');

    await fsp.writeFile(file1, contentTwo);
    await fsp.writeFile(file2, contentOne);
  } catch (error) {
    throw new Error(`Error exchanging files: ${error.message}`);
  }
};

// END