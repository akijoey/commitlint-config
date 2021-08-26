const config = require('../.commitlintrc')

describe('commitlint-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
