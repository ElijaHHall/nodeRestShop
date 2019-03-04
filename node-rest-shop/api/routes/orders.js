const express = require('express');
const router = express.Router();

// handle incoming GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fetched'
    })
})

//status 201 for posts
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'orders were created'
    })
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'orders details',
        orderId: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    })
})

module.exports = router;