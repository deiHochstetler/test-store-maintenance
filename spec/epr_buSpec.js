const request = require('request');
const rp = require('request-promise-native');
const url = 'http://localhost:3000/business_units/'

function getOptions(uri) {
  return {
    uri,
    resolveWithFullResponse: true
  };
}

describe("EPR_BU Routes", function() {
  describe("INDEX", () => {
    it("returns status code 200", (done) => {
      rp(getOptions(url), (err, res, body) => {
        if (err) console.log('ERROR:', err);
        else {
          expect(res.statusCode).toBe(200);
        }
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
    it("returns all rows from EPR_BU", (done) => {
      rp(getOptions(url), (err, res, body) => {
        const epr_bu = JSON.parse(body);
        expect(epr_bu.length).toBe(4);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
    it("returns EPR_BU row for store 5637", (done) => {
      rp(getOptions(url + '5637'), (err, res, body) => {
        const epr_bu = JSON.parse(body);
        expect(epr_bu).not.toBeNull();
        expect(epr_bu.cmmn_bu_nm).toBe('5637');
        expect(epr_bu.bu_typ_cd).toBe(9);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });
  });
});
