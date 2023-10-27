const getPage = () => {
  const path = window.location.href.split('/');
  return path[path.length - 1];
};

export default getPage;
