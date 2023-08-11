import vtexFetch from "./connectors/vtexConnector.js";

const getCategories = async (seller,payload=null) => {
  return vtexFetch("/api/catalog-seller-portal/category-tree", "GET",seller, payload);
};

export { getCategories };