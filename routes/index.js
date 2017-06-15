const express = require('express');
const router = express.Router();

// INDEX
router.get('/', (req, res, next) => {
  res.status(200).json({ title: 'Express' })
});

module.exports = router;
