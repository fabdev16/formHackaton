import vtexFetch from "./connectors/vtexConnector.js";

const createProduct = async (seller,payload) => {
  await vtexFetch("/api/catalog-seller-portal/products", "POST",seller, payload);
};

export default createProduct;
