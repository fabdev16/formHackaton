import vtexFetch from "./connectors/vtexConnector.js";

export const getBrands = async (seller,payload=null) => {
  return await vtexFetch("/api/catalog-seller-portal/brands", "GET",seller, payload);
};