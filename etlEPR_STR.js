const knexSrc = require('knex')(require('./knexfile').etl_src);
const knexDst = require('knex')(require('./knexfile').etl_dst);

const masker = require('./maskEPR');

// GET AND SHOW SRC DATA
knexSrc.select().table('epr_str')
.then( (srcSTR) => {
  console.log('=== Production Stores - EPR_STR (src) ===');
  console.log(srcSTR);
  // GET AND SHOW DST DATA BEFORE ETL
  return knexDst.select().table('epr_str').then( (dstSTR) => {
    console.log('=== Items from Dst (before ETL) ===');
    console.log(dstSTR);
    // INSERT MASKED DATA INTO DST
    return knexDst('epr_str').insert(masker.maskStore(srcSTR, testStoreNumber, knexDst));
  })
  // GET AND SHOW DST DATA AFTER ETL
  .then( () => {
    return knexDst.select().table('epr_str').then( (dstSTR) => {
      console.log('=== Test Stores - EPR_STR (dst) ===');
      console.log(dstSTR);
      return knexSrc.destroy().then( () => knexDst.destroy() );
    });
  });
})
.then( () => {
  console.log('Goodbye.');
});
