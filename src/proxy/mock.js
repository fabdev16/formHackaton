import credentials from './credentials/auth.js';

export const getCredentials = (identifier) => {
  return credentials[identifier] || null;
};
