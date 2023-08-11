import vtexFetch from "./connectors/vtexConnector.js";

const getBrands = async (seller,payload=null) => {
  return await vtexFetch("/api/catalog-seller-portal/brands", "GET",seller, payload);
};

export default getBrands;
