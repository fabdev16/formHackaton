import vtexFetch from "./connectors/vtexConnector.js";

const updateStock = async (seller,skuId,warehouseId,payload=null) => {
  return await vtexFetch(`/api/logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`,"GET",seller, payload);
};

export default updateStock;
