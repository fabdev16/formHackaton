import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getCredentials = async (identifier) => {
  // Lee el archivo JSON
  const rawData = fs.readFileSync(path.resolve(__dirname, 'credentials/auth.json'));
  const allCredentials = JSON.parse(rawData);

  // Retorna las credenciales basadas en el identificador o null si no se encuentra.
  return allCredentials[identifier] || null;
};
