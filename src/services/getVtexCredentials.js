import { getCredentials } from "../proxy/mock.js";

export const getVtexCredentials = async (identifier) => {
  const credentials = await getCredentials(identifier);
  if (!credentials) {
    throw new Error(`Credentials for identifier "${identifier}" not found`);
  }
  return credentials;
};
