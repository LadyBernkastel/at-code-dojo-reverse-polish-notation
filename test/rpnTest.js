import * as should from '../node_modules/should/should.js';
import {rpn} from '../src/rpn';

describe('Reverse Polish Notation', () => {
    // comment this test out after you start and then add
    // functionality using baby steps until this passes.
    it('1 2 + should equal 3', () => {
        rpn('1 2 +').should.equal(3);
    });
    it('2 2 * should equal 4', () => {
        rpn('2 2 *').should.equal(4);
    });
    it('2 2 * 3 + should equal 7', () => {
        rpn('2 2 * 3 +').should.equal(7);
    });
    it('"1 2 + 4 * 5 + 3 -" should equal 14', () => {
        rpn('1 2 + 4 * 5 + 3 -').should.equal(14);
    });
});
