var express = require('express');
const figlet = require('figlet');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  figlet("Docker is AMAZE !!!" , (err, data) => {
    if(err){
      console.log("Something went wrong");
      console.dir(err);
      return;
    }
    res.render('index', { title: 'Express', text: data });
  });
});


router.get('/user', function(req, res, next) {
    return res.json({status: "true", message: "", user: {id: 1, name: 'Mohanavelu kumarsamy', city: 'San Antonio', service: "Devops CICD", cc_address: process.env.CC_MAIL_ADDRESS}});
});

router.get('/process', function(req, res, next) {
  return res.json({status: "true", message: process.env.APPSETTING_SENDGRID_APIKEY, key: process.env.SENDGRID_APIKEY, env_variables: process.env});
});

module.exports = router;
