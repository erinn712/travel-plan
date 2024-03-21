// api/module/home/index.js

import server from "../server";

export const getPlacesApi = {
  getPlacesApi: async () => {
    const { data } = await server.get("placesCards");
    return data;
  },
};
