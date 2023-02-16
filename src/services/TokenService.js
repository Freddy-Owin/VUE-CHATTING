const token = "id_token";
export const getToken = () => {
  return window.localStorage.getItem(token);
};
export const setToken = () => {
  return window.localStorage.setToken(token);
};
export const destroyToekn = () => {
  return window.localStorage.removeItem(token);
};
export default { getToken, setToken, destroyToekn };
