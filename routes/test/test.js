const express = require('express');

const router = express.Router();

router.get('/1', async function(req, res) {
  try {
    res.render('test/test1.ejs');
  } catch(err) {
    console.log(`Error: ${err}`);
  }
});

router.get('/2', async function(req, res) {
  try {
    res.render('test/test2.ejs');
  } catch(err) {
    console.log(`Error: ${err}`);
  }
});

router.get('/3', async function(req, res) {
  try {
    res.render('test/test3.ejs');
  } catch(err) {
    console.log(`Error: ${err}`);
  }
});

module.exports = router;