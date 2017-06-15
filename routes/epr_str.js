const express = require('express');
const router = express.Router();

// const epr_str = require('../models/EPR_STR');
const knexSrc = require('knex')(require('../db/knexfile')[process.env.NODE_ENV].etl_src);
const knexDst = require('knex')(require('../db/knexfile')[process.env.NODE_ENV].etl_dst);

const masker = require('../maskEPR');


// INDEX for SRC DB
// GET localhost:3000/stores/src/
router.get('/src', function(req, res, next) {
  knexSrc.select().table('epr_str').then( stores => {
    res.status(200).json(stores);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// INDEX for DST DB
// GET localhost:3000/stores/dst/
router.get('/dst', function(req, res, next) {
  knexDst.select().table('epr_str').then( stores => {
    res.status(200).json(stores);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW: select SRC store by its str_nbr
// SHOW localhost:3000/stores/src/5560
router.get('/src/:str_nbr', function(req, res, next) {
  knexSrc('epr_str').where('str_nbr', req.params.str_nbr ).then( store => {
    res.status(200).json(store);
  }).catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW: select DST store by its str_nbr
// SHOW localhost:3000/stores/dst/5560
router.get('/dst/:str_nbr', function(req, res, next) {
  knexDst('epr_str').where('str_nbr', req.params.str_nbr ).then( store => {
    res.status(200).json(store);
  }).catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// MIGRATE a BU and STORE from SRC DB to DST DB
// POST /stores/dst/:str_nbr?test_store_number=5555
// POST localhost:3000/stores/dst/5687?test_store_number=5555
router.post('/dst/:str_nbr', function(req, res, next) {
  Promise.all([
    knexSrc('epr_bu').where('cmmn_bu_nm', req.params.str_nbr ),
    knexSrc('epr_str').where('str_nbr', req.params.str_nbr )
  ])
  .then( results => {
    var bu = results[0][0];
    var store = results[1][0];

    var testStoreNumber = req.query.test_store_number;
    var testBU = masker.maskBU(bu, testStoreNumber, knexSrc);
    var testStore = masker.maskStore(store, testStoreNumber, knexSrc);

    Promise.all([
        knexDst('epr_bu').insert(testBU),
        knexDst('epr_str').insert(testStore)
    ])
    .then( () => {
      return Promise.all([
        knexDst('epr_bu').where('cmmn_bu_nm', testStoreNumber),
        knexDst('epr_str').where('str_nbr', testStoreNumber)
      ]);
    })
    .then( results => {
      // console.log('returning results:', results);
      res.status(200).json( results );
    }).catch( err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
});


// DELETE a BU and STORE from DST DB by its str_nbr
// DELETE localhost:3000/stores/dst/5555
router.delete('/dst/:str_nbr', function(req, res, next) {
  Promise.all([
    knexSrc('epr_bu').where('cmmn_bu_nm', req.params.str_nbr),
    knexSrc('epr_str').where('str_nbr', req.params.str_nbr )
  ])
  .then( results => {
    var bu = results[0][0];
    var store = results[1][0];

    Promise.all([
        knexDst('epr_bu').where('cmmn_bu_nm', req.params.str_nbr).delete(),
        knexDst('epr_str').where('str_nbr', req.params.str_nbr ).delete()
    ])
    .then( results => {
      res.status(200).json({message: `Deleted test store ${req.params.str_nbr}`});
    }).catch( err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
});


module.exports = router;
