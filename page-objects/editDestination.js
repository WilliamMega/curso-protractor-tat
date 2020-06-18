const HeaderComponent = require('./components/header')
const DestinationsComponenent = require('./components/destination')
const FormComponent = require('./components/form')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class EditDestination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationsComponenent()
    this.form = new FormComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
  }
}

module.exports = EditDestination
