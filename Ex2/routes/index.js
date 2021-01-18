var express = require('express');
var router = express.Router();
var axios = require('axios')


var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4NzM2MiwiZXhwIjoxNjExMDE2MTYyfQ.Q7hJVkYD7uUAj8m5vcfUaYrsfST1A5GyT-HSMtb1kY9aLD4qVB23zd0cUS9nT2dfqucTk7bczlwCIJAnI4Acajq0yDCtMQB8SXMb4kD9DEvu1l3vEkMxw0GQ53DEED9AA8exGEHqSCRCNUV2lro-_6Lgq_Nwb0RaUxzTCsyGn2Vs4FHgM55fl_9GrbBtwX4vvbm3QEZQULJBkl4rlIutav6Efh0JlbIjK2xxCCtMgobXo_d-Emjpn_0AY2KN73qPk9o_ARxBP3eoQMi52kBKfR5GslU7nJ0j1Y0B4HcPtlbkPnnTKNIPoyn9HhvB-1nDdJ_TzUxF115g0Qci0z-93Q'


/* GET home page. */
router.get(['/classes','/'], function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?token=' + token)
    .then(dados => {
      res.render('index', {tips: dados.data})
    })
    .catch(err => {
      res.status(500).jsonp({erro:err})
    })
});


router.get('/classes/c:cod', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c'+req.params.cod+'?token=' + token)
    .then(dados => {
      res.render('classe', {cla: dados.data})

    })
    .catch(err => {
      res.status(500).jsonp({erro:err})
    })
});

router.get('/classes/c:cod/descendencia', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c'+req.params.cod+'/descendencia'+'?token=' + token)
    .then(dados => {
      res.status(200).jsonp({Dados: dados.data})
    })
    .catch(err => {
      res.status(500).jsonp({erro:err})
    })
});
module.exports = router;
