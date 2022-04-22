const mult = require('../src/mult')

it('should return correct product', () => {
    const result = mult(2, 4)
    expect(result).toBe(8)
})