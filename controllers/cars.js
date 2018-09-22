const express = require('express')
const asyncHandler = require('express-async-handler');

const {
    Car,
    User
} = require('../models/schema')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const cars = await Car.query()
    res.json(cars)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const car = await Car.query().findById(req.params.id).eager('comments')
    res.json(Car)
}))

router.post('/', asyncHandler(async (req, res) => {
    const newCar = req.body

    const car = await Car.query()
        .allowInsert('[car, creator]')
        .insertGraph(newCar)

    res.send(car)
}))

// TODO
router.post('/:id/users', asyncHandler(async (req, res) => {
    const car = await Car.query().findById(req.params.id)

    await car.$relatedQuery('users')
        .allowInsert('[user, creator]')
        .insert(req.body)

    res.send(car)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    await Car.query().deleteById(req.params.id)

    res.redirect('/cars')
}))

router.delete('/:id/users/:userId', asyncHandler(async (req, res) => {
    await User.query().deleteById(req.params.userId)

    res.redirect(`/cars/${req.params.id}`)
}))

module.exports = router
