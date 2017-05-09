'use strict';

const expect = require('chai').expect;
let testObj = require('../../app');

describe('forTest', () => {
    it('should return type of param', () => {
        expect(testObj.forTest('123')).to.equal('string');
        expect(testObj.forTest(123)).to.equal('number');
    });
});

