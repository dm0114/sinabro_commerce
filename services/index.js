import data from "../data.json?raw";

export const ProductService = {
  getProducts: async () => {
    if (process.env.NODE_ENV === "development") {
      return JSON.parse(data);
    }

    const res = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    return await res.json();
  },
};
