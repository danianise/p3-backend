const express = require('express')
const router = express.Router()
const Portfolio = require('../models/portfolio-schema')



router.get('/', (req,res) => {
    Portfolio.find({})
        .then(data => res.json(data))
})


router.get('/watchlist', (req, res) => {
    Portfolio.find({ Watch: "true" })
        .then(data => res.json(data))
})


router.put('/:id', async (req, res, next) => {
    try {
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedPortfolio);
        return res.redirect(`/portfolios`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

router.delete('/:id/', (req, res) => {
    Portfolio.findByIdAndDelete({ _id: req.params.id })
        .then(() => res.redirect('/portfolios'))
        .catch(console.error)
})

module.exports = router