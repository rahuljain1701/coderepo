    module.exports = function(app, express) {
                           var router = express.Router();
                            /* GET home page. */
                            router.get('/', function(req, res, next) {
                                res.render('index', { title: 'Code Repository Application' });
                            });

                            app.use('/', router);
                    }
