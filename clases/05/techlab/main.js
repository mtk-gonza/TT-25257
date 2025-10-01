import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { ask, rl } from './src/cli/prompt.js';
import { crudMenu } from './src/cli/crudMenu.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data', 'products.json');
const products_json = fs.readFileSync(filePath, 'utf-8');
const products = JSON.parse(products_json)


const main = async () => {
  try {
    const input = await ask('Ingrese el comando (GET, POST, PUT, DELETE): ');
    const message = crudMenu(input);
    console.log(message);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
};

main();