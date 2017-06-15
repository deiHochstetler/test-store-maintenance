const express = require('express');
const router = express.Router();

// const epr_bu = require('../models/EPR_BU');
const knexSrc = require('knex')(require('../db/knexfile')[process.env.NODE_ENV].etl_src);
const knexDst = require('knex')(require('../db/knexfile')[process.env.NODE_ENV].etl_dst);

// INDEX for SRC DB
router.get('/src', function(req, res, next) {
  knexSrc.select().table('epr_bu').then( businessUnits => {
    res.status(200).json(businessUnits);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// INDEX for DST DB
router.get('/dst', function(req, res, next) {
  knexDst.select().table('epr_bu').then( businessUnits => {
    res.status(200).json(businessUnits);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW: select SRC BU by its common bu name
router.get('/src/:bu_name', function(req, res, next) {
  knexSrc('epr_bu').where('cmmn_bu_nm', req.params.bu_name ).then( businessUnit => {
    res.status(200).json(businessUnit);
  }).catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW: select DST BU by its common bu name
router.get('/dst/:bu_name', function(req, res, next) {
  knexDst('epr_bu').where('cmmn_bu_nm', req.params.bu_name ).then( businessUnit => {
    res.status(200).json(businessUnit);
  }).catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router;
