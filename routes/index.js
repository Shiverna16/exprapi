var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
    return res.json({status: "true", message: "", user: {id: 1, name: 'Mohanavelu', city: 'San Antonio', service: "Devops CICD"}});
});

router.get('/process', function(req, res, next) {
  return res.json({status: "true", message: process.env.APPSETTING_SENDGRID_APIKEY, key: process.env.SENDGRID_APIKEY, env_variables: process.env});
});

module.exports = router;
