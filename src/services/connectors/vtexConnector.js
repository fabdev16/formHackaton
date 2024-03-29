import { getVtexCredentials } from "../getVtexCredentials.js";

const vtexFetch = async (endpoint, method, seller, body = null) => {
  const { accountName, environment, appKey, appToken } = await getVtexCredentials(seller);

  const url = `https://${accountName}.${environment}.com.br${endpoint}`; //TODO: Revisar el CORS

  const options = {
    headers: {
      "X-VTEX-API-AppKey": appKey,
      "X-VTEX-API-AppToken": appToken,
      "Content-Type": "application/json",
			"Accept": "application/json",
      
    },
    method: method,
  };

  if (body) {
    options.body = body;
  }
  const text = await fetch(url, options);
  return await text.text()
};

export default vtexFetch;
