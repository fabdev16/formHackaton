import vtexFetch from "./connectors/vtexConnector.js";

export const updatePrice = async (seller,itemId,payload=null) => {
  return await vtexFetch(`/api/pricing/prices/${itemId}`, "GET",seller, payload);
};

