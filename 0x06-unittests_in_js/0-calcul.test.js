// Test cases for calculateNumber
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.strictEqual(calculateNumber(5, 8), 13);
        assert.strictEqual(calculateNumber(3, 7.9), 11);
        assert.strictEqual(calculateNumber(4.2, 9.1), 14);
        assert.strictEqual(calculateNumber(6.5, 7.3), 14);
    })
    it('should handle zero values correctly', function() {
        assert.strictEqual(calculateNumber(0, 6.2), 6);
        assert.strictEqual(calculateNumber(9.8, 0), 10);
    })
    it('should handle negative rounded integers', function() {
        assert.strictEqual(calculateNumber(-5.6, -8.9), -14);
        assert.strictEqual(calculateNumber(-7.3, -4.1), -11);
    })
    it('should handle large rounded numbers', function() {
        assert.strictEqual(calculateNumber(23.6, 38.7), 62);
        assert.strictEqual(calculateNumber(347.9, 126.4), 474);
    })
})
