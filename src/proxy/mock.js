import credentials from './credentials/auth.js'; // TODO: obtener desde un api de autorizacion

export const getCredentials = (identifier) => {
  return credentials[identifier] || null;
};
