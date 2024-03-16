// api/module/home/index.js

import server from "../server";

export const homeApi = {
  getSlides: async () => {
    const { data } = await server.get("/slides");
    return data;
  },
};
