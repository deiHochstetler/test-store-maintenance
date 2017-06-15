const request = require('request');
const rp = require('request-promise-native');
const url = 'http://localhost:3000/'

function getOptions(uri) {
  return {
    uri,
    resolveWithFullResponse: true
  };
}

describe("Index", () => {
  describe("GET /", () => {
    it("returns status code 200", (done) => {
      rp(getOptions(url), (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
  });
});
