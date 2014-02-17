
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Disco.js' });
};
exports.pi= function(req,res){
    res.render('Pi',{ title: 'Pi generator'});
}
