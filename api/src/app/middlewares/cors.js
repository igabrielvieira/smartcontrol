module.exports = (request, response, next) => {
  // response.setHeader('Access-Control-Allow-Origin', 'http://192.168.3.6:3000');
  response.setHeader('Access-Control-Allow-Origin', '*'); // Permitindo requisições de todos as origens
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.setHeader('Access-Control-Max-Age', '10');
  next();
};
