let local_data = require("../../store/LANGUAGE_LIST.json");

export default list => {
  //   const proxyURL = `../PROJECT_LIST.json`;
  //   return fetch(proxyURL).then(res => res.json());
  return local_data;
};
