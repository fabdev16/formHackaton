import vtexFetch from "./connectors/vtexConnector.js";

export const getCategories = async (seller,payload=null) => {
  return vtexFetch("/api/catalog-seller-portal/category-tree", "GET",seller, payload);
};
