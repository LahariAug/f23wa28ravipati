var express = require('express');
var router = express.Router();
var x=Math.random();
var y=Math.random();
var z=Math.random();
/* GET home page. */
router.get('/', function(req, res, next) {
 
  var result=Math.log2(x);
  var result1=Math.cosh(y);
  var result2=Math.floor(z);

  res.send(`[log2] applied to [${x}] is: ${result} <br> [cosh] applied to [${y}] is: ${result1} <br>  [floor] applied to [${z}] is: ${result2}`);
});

module.exports = router;
