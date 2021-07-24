var recipes = require('../recipes.json');
var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let { page, limit } = req.query;

  page = page ? page : 1;
  limit = limit ? limit : 3

  const newRecipes = recipes.slice(page*limit-limit, page*limit);
  res.send(newRecipes);
});


module.exports = router;

