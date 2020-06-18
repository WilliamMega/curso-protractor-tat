const HeaderComponent = require('./components/header')
const DestinationsComponenent = require('./components/destination')
const { browser } = require('protractor')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Destination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationsComponenent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`)
  }
}

module.exports = Destination
