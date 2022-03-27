const validUrl = require('valid-url');

const getShortURLFromCode = (code) => {
  const baseUrl = process.env.BASEURL;
  if (!validUrl.isUri(baseUrl)) {
    throw new Error('Malformed base url. Please update configurations');
  }

  return `${baseUrl}/${code}`;
};

module.exports = { getShortURLFromCode };
