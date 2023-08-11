import vtexFetch from "./connectors/vtexConnector.js";

export const updateStock = async (seller,skuId,warehouseId,payload=null) => {
  return await vtexFetch(`/api/logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`,"GET",seller, payload);
};
