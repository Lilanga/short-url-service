const validUrl = require('valid-url');
const { nanoid } = require('nanoid');
const path = require('path');
const Urls = require('../models/UrlsModel');
const { getShortURLFromCode } = require('../utils/urlUtils');
const logger = require('../utils/logUtils');

const generate = async (req, res) => {
  const { url } = req.body;
  if (!validUrl.isWebUri(url)) {
    return res
      .status(400)
      .json('Url is malformatted, please provide a complete URL');
  }

  try {
    const savedURL = await Urls.findOne({
      url,
    });

    // url already saved, return the saved short url
    if (savedURL) {
      const shortUrl = getShortURLFromCode(savedURL.code);
      return res.json({ shortUrl, longUrl: url });
    }

    // generate short code
    const code = nanoid(10);
    const shortUrl = getShortURLFromCode(code);

    const shortCodeUrl = new Urls({
      url,
      code,
    });
    await shortCodeUrl.save();

    return res.json({ shortUrl, longUrl: url });
  } catch (err) {
    logger.error(err);
    return res.status(500).json(err);
  }
};

const redirect = async (req, res) => {
  const { code } = req.params;

  if (code === 'create') {
    return res.sendFile(path.join(path.resolve('./build'), 'index.html'));
  }

  try {
    const urlData = await Urls.findOne({
      code,
    });

    if (urlData) {
      return res.redirect(301, urlData.url);
    }

    return res.status(404).json('Invalid shorten URL');
  } catch (err) {
    logger.error(err);
    return res.status(500).send(err);
  }
};

module.exports = { generate, redirect };
