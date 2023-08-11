import specification from './specification/specification.js';

const getCredentials = (identifier) => {
  return specification[identifier] || null;
};
export default getCredentials