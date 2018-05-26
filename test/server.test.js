const expect = require("expect");
const request = require('supertest');

const {app} = require("./../server");

describe('Get /home', () => {
  it('should get home page', (done) => {
    request(app)
    .get('/home')
    .expect(200)
    .end(done);
  });
});