import vtexFetch from "./connectors/vtexConnector.js";

export const createProduct = async (seller,payload) => {
  await vtexFetch("/api/catalog-seller-portal/products", "POST",seller, payload);
};