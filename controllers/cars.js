const express = require('express')

const {
    Car,
    User
} = require('../models/schema')

const router = express.Router()

router.get('/', async (req, res) => {
    const cars = await Car.query()
    res.json(cars)
})

router.get('/:id', async (req, res) => {
    const car = await Car.query().findById(req.params.id).eager('comments')
    res.json(Car)
})

router.post('/', async (req, res) => {
    const newCar = req.body

    const idea = await Car.query()
        .allowInsert('[car, creator]')
        .insertGraph(newCar)

    res.send(car)
})

// TODO
router.post('/:id/users', async (req, res) => {
    const car = await Car.query().findById(req.params.id)

    await car.$relatedQuery('users')
        .allowInsert('[user, creator]')
        .insert(req.body)

    res.send(idea)
})

router.delete('/:id', async (req, res) => {
    await Car.query().deleteById(req.params.id)

    res.redirect('/cars')
})

router.delete('/:id/users/:userId', async (req, res) => {
    await User.query().deleteById(req.params.userId)

    res.redirect(`/cars/${req.params.id}`)
})

module.exports = router
