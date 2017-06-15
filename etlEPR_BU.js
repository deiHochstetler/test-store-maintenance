const knexSrc = require('knex')(require('./db/knexfile').etl_src);
const knexDst = require('knex')(require('./db/knexfile').etl_dst);

const masker = require('./maskEPR');

// GET AND SHOW SRC DATA
knexSrc.select().table('epr_bu')
.then( (srcBU) => {
  console.log('=== Production Stores - EPR_BU (src) ===');
  console.log(srcBU);
  // GET AND SHOW DST DATA BEFORE ETL
  return knexDst.select().table('epr_bu').then( (dstBU) => {
    console.log('=== Items from Dst (before ETL) ===');
    console.log(dstBU);
    // INSERT MASKED DATA INTO DST
    return knexDst('epr_bu').insert(masker.maskBU(srcBU, testStoreNumber, knexDst));
  })
  // GET AND SHOW DST DATA AFTER ETL
  .then( () => {
    return knexDst.select().table('epr_bu').then( (dstBU) => {
      console.log('=== Test BUs - EPR_BU (dst) ===');
      console.log(dstBU);
      return knexSrc.destroy().then( () => knexDst.destroy() );
    });
  });
})
.then( () => {
  console.log('Goodbye.');
});
