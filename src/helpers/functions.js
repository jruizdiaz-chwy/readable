export const objectToArray = (obj) => {
  if (obj === undefined) return [];
  return Object.keys(obj).reduce((arr, key) => {
    if (obj[key] !== null) 
      arr.push(obj[key]);
    return arr;  
  },[])
};