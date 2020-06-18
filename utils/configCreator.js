module.exports = provideConfig => {
  const defautConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },
    jasmineNodeOpts: { random: true }
  }

  return Object.assign(
    {},
    defautConfig,
    provideConfig
  )
}
