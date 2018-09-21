'use strict'

const User = require('../models/schema')
const expect = require('chai')

describe('User module', () => {
  describe('"User"', () => {
    it('should export a function', () => {
      expect(User).to.be.a('function')
    })
  })
})
