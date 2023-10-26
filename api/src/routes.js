const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get(
  '/products',
  (request, response, next) => {
    request.appId = 'MeuAppID';
    next();
  },
  ProductController.index,
);

router.get('/biggestproduct', ProductController.biggest);
router.get('/smallestproduct', ProductController.smallest);
router.post('/newproduct', ProductController.store);
router.get('/products/:id', ProductController.show);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

router.get('/categories', CategoryController.index);
router.get('/biggestcategory', CategoryController.biggest);
router.post('/newcategory', CategoryController.store);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
