const config = require('../.commitlintrc')

describe('commitlint-config', () => {
  it('correct export', () => {
    const main = require('..')
    expect(main).toEqual(config)
  })
})
