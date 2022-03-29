const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Urls = require('../models/UrlsModel');

describe('Short-Codes controller tests', () => {
  beforeAll((done) => {
    testDB = mongoose.connect(
      process.env.TEST_DBHOST,
      {
        authSource: 'admin',
        user: process.env.TEST_DBUSER,
        pass: process.env.TEST_DBPASS,
        useNewUrlParser: true,
      },
      done
    );
  });

  afterEach((done) => {
    mongoose.connection.db.dropDatabase(done);
  });

  afterAll((done) => {
    mongoose.connection.close(done);
  });

  test('POST /generate', async () => {
    const data = { url: 'https://www.google.com' };

    const response = await supertest(app).post('/generate').send(data);
    expect(response.status).toEqual(200);
    expect(response.body.shortUrl).toBeTruthy();
    expect(response.body.longUrl).toBe(data.url);

    const url = await Urls.findOne({ url: response.body.longUrl });
    expect(url).toBeTruthy();
    expect(response.body.shortUrl).toContain(url.code);
  });

  test('GET /:code', async () => {
    const shortCodeUrl = new Urls({
      code: 'YEIwZCyqlH',
      url: 'https://www.test.com',
    });

    await shortCodeUrl.save();

    const response = await supertest(app).get('/YEIwZCyqlH');

    expect(response.status).toEqual(301);
    expect(response.text).toBeTruthy();
    expect(response.text).toContain(
      `Moved Permanently. Redirecting to ${shortCodeUrl.url}`
    );
  });
});
