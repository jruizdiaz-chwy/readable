export const objectToArray = (obj) => {
  if (obj === undefined) return [];
  return Object.keys(obj).reduce((arr, key) => {
    if (obj[key] !== null) 
      arr.push(obj[key]);
    return arr;  
  },[])
};

export const uuid4 = () => (
  ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
);