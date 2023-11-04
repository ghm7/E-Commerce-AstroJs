// const getData = async ({ URL, endpoint }) => {
//   if (endpoint !== undefined) {
//     return fetch(`${URL}/${endpoint}.json`)
//       .then((response) => response.json())
//       .then((data) => data);
//   } else {
//     return fetch(`${URL}.json`)
//       .then((response) => response.json())
//       .then((data) => data);
//   }
// };

import { PRODUCTS_URL, CATEGORIES_URL } from '../constants/API.js';

const getData = async ({ URL, endpoint }) => {
  if (endpoint === 'ALL') {
    const categories = await fetch(`${CATEGORIES_URL}.json`)
      .then((response) => response.json())
      .then((data) => data);

    const allProducts = await Promise.all(
      categories.map(async ({ id }) => {
        const { products } = await fetch(
          `${PRODUCTS_URL}/${id.toString()}.json`
        )
          .then((response) => response.json())
          .then((data) => data);

        return products;
      })
    );

    return allProducts.filter((product) => product.length !== 0).flat(Infinity);
  }

  if (endpoint !== undefined) {
    return fetch(`${URL}/${endpoint}.json`)
      .then((response) => response.json())
      .then((data) => data);
  }

  if (endpoint === undefined) {
    return fetch(`${URL}.json`)
      .then((response) => response.json())
      .then((data) => data);
  }
};

export default getData;
