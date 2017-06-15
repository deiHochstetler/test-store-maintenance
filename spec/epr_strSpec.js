const request = require('request');
const rp = require('request-promise-native');
const url = 'http://localhost:3000/stores/'

function getOptions(uri) {
  return {
    uri,
    resolveWithFullResponse: true
  };
}

describe("EPR_STR Routes", function() {
  describe("INDEX", () => {
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
    it("returns all rows from EPR_STR", (done) => {
      rp(getOptions(url), (err, res, body) => {
        const epr_str = JSON.parse(body);
        expect(epr_str.length).toBe(4);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
    it("returns EPR_STR row for store 5687", (done) => {
      rp(getOptions(url + '5687'), (err, res, body) => {
        const epr_str = JSON.parse(body);
        expect(epr_str).not.toBeNull();
        expect(epr_str.str_nbr).toBe('5687');
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
  });
});
