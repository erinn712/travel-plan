// src/api/user.js
// 前端輸入將帳號密碼透過API傳給後端，後端會回傳Token給前端
export const loginApi = async ({ username, password }) => {
  const { data } = await axios.post("/login", { username, password });
  return data;
};
