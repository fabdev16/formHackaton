import vtexFetch from "./connectors/vtexConnector.js";

const updatePrice = async (seller,itemId,payload=null) => {
  return await vtexFetch(`/api/pricing/prices/${itemId}`, "GET",seller, payload);
};

export default updatePrice;
