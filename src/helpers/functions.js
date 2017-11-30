/**
 * @description Converts an object's properties to elements in an array. 
 * @param {*} props An object with no relevant properties in this case.
 * @return {array} An array with the properties of the object as elements.
 */
export const objectToArray = (obj) => {
  if (obj === undefined) return [];
  return Object.keys(obj).reduce((arr, key) => {
    if (obj[key] !== null) 
      arr.push(obj[key]);
    return arr;  
  },[])
};

/**
 * @description Generates a random uuid.
 * @return {string} a {number} digits uuid
 */
export const uuid4 = () => (
  ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
);

/**
 * @description Provides the headers object to be used in fetch calls to the API server.
 * @return {object} An object with the Contet-Type and Authorization headers required.
 */
export const fetchHeaders = () => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "none");
  return headers;
}