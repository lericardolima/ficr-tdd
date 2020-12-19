const chai = require('chai');
const expect = chai.expect;
const { calculaParcela } = require('../calculadora');
const valorParcela = 100;

describe('calculaParcela(valorParcela, diasEmAtraso)', () => {
    it('Deve retornar 100', () => {
        expect(calculaParcela(valorParcela, 0)).to.equal(100);
    });
    it('Deve retornar 105', () => {
        expect(calculaParcela(valorParcela, 1)).to.equal(105);
        expect(calculaParcela(valorParcela, 30)).to.equal(105);
    });
    it('Deve retornar 110', () => {
        expect(calculaParcela(valorParcela, 31)).to.equal(110);
        expect(calculaParcela(valorParcela, 60)).to.equal(110);
    });
    it('Deve retornar 115', () => {
        expect(calculaParcela(valorParcela, 61)).to.equal(115);
    });
});