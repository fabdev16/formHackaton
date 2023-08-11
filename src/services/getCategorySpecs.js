import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getCategorySpecs = async (category) => {
  const rawData = fs.readFileSync(path.resolve(__dirname, 'specification/specification.json'));//TODO: traerlo de MasterData
  const allCredentials = JSON.parse(rawData);

  // Retorna las especificaciones basadas en el identificador o null si no se encuentra.
  return allCredentials[category] || null;
};

export default getCategorySpecs;