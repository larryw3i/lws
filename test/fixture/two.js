class Two {
  middleware (options) {
    return function two (ctx, next) {
      ctx.body = (ctx.body || '') + 'two'
      next()
    }
  }
  optionDefinitions () {
    return [ { name: 'something' } ]
  }
}

module.exports = Two
