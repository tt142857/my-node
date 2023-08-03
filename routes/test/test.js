const express = require('express');

const router = express.Router();

router.get('/', async function(req, res) {
  try {
    res.render('test/test.ejs');
  } catch(err) {
    console.log(`Error: ${err}`);
  }
});

module.exports = router;