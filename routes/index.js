
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Scavenger Hunt 2.0' });
};