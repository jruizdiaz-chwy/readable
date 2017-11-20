export const fetchHeaders = () => {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "none");
  return headers;
}

