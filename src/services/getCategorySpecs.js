import specification from './specification/specification.js'; //TODO: Cambiar a una funcion que devuelva las especificaciones de una categoria

const getSpecification = (category) => {
  return specification[category] || null;
};
export default getSpecification