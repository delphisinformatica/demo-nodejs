var express = require('express');
var router = express.Router();

var system = process.arch

var os = require('os');

if(system === "x64") {
   system = "Intel"
} else if (system === "s390x") {
  system = "LinuxONE" }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Demo Openshift', menuId:'home', arch:system, so:os.platform(), hostname:os.hostname(), kernel:os.release()});
});

module.exports = router;
