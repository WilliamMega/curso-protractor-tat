const HeaderComponent = require('./components/header')
const DestinationsComponenent = require('./components/destinations')
const { browser } = require('protractor')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Tag {
  constructor () {
    this.header = new HeaderComponent()
    this.destinations = new DestinationsComponenent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag
