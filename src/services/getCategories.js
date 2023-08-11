import vtexFetch from "./connectors/vtexConnector.js";

const getCategories = async (seller,payload=null) => {
  return await vtexFetch("/api/catalog-seller-portal/category-tree", "GET",seller, payload);
};

export default getCategories;
