var express = require('express');
var router = express.Router();
const Casa = require('../controllers/casamento')


router.get('/api/casamentos', function(req, res) {
  if(req.query.nome != null) {
    Casa.listaCNome(req.query.nome)
      .then(data => res.status(200).jsonp({pubs: data}))
      .catch(err => res.status(500).jsonp({erro: err}))}
  else if(req.query.ano != null) {
    Casa.listaCAno(req.query.ano)
      .then(data => res.status(200).jsonp({pubs: data}))
      .catch(err => res.status(500).jsonp({erro: err}))
  }
  else if(req.query.byAno != null) {
    Casa.listaCbyAno(req.query.byAno)
      .then(data => res.status(200).jsonp({pubs: data}))
      .catch(err => res.status(500).jsonp({erro: err}))
  }
  else Casa.listaC()
    .then(data => res.status(200).jsonp({pubs: data}))
    .catch(err => res.status(500).jsonp({erro: err}))
});

router.get('/api/casamentos/noivos', function(req, res) {
  Casa.listaC()
    .then(dados =>{
      var noivo = []
      var res = ""
      dados.forEach(i => {
          res = i.title.split(":")[1].split("c.c")[0]
          noivo.push(res)
      })
      res.status(200).jsonp({noivos: noivo.sort()})
    })
    .catch(e => res.status(500).jsonp({error: e}))
});

router.get('/api/casamentos/:id', function(req, res) {
  Casa.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});




module.exports = router;
