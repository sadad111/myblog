/**
 * 注册路由
 */
module.exports = function (app) {
  app.get('/', function (req, res) {
      res.render('index');
  });
};