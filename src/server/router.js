import Router from 'express-promise-router';

const router = Router();

router
    .post('/', () => {
        console.log(999999999)
    })
    // .get('/:productId', getProduct)
    // .put('/:productId', updateProduct)
    // .post('/:productId/submit', submitProduct)
    // .get('/', getAllProducts);

export default router;
