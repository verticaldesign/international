let local_data = require('../../PROJECT_LIST.json')

export default list => {
//   const proxyURL = `../PROJECT_LIST.json`;
//   return fetch(proxyURL).then(res => res.json());
    return local_data
};
