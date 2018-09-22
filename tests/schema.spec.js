'use strict'

const { Car, User } = require('../models/schema')
const expect = require('chai').expect

describe('Schema', () => {
  describe('"User"', () => {
    it('should export a function', () => {
      expect(User).to.be.a('function')
    })
  })

  describe('"Car"', () => {
    it('should export a function', () => {
      expect(Car).to.be.a('function')
    })
  })
})
