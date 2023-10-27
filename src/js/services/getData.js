const getData = async ({ URL, endpoint = null }) => {
  if (endpoint !== null) {
    return fetch(`${URL}/${endpoint}.json`)
      .then((response) => response.json())
      .then((data) => data);
  } else {
    return fetch(`${URL}.json`)
      .then((response) => response.json())
      .then((data) => data);
  }
};

export default getData;
