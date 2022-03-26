const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

// add prefix of `/pizzas` and `comment`  routes created in `pizza-routes.js` and `comment-routers.js`
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);


module.exports = router;