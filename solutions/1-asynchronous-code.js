import fs from 'fs';

// BEGIN
export const readAndPrintFile = async (path) => {
    try {
        const data = await fs.promises.readFile(path, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(`Ошибка при чтении файла: ${error}`);
    }
};
// END

export default readAndPrintFile;
