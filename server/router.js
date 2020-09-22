const Router = require('koa-router');
const controller = require('./controller');
const router = new Router();

router
.get('/api/getmd', controller.getmd)

module.exports = router;