var should = require("should");
var request = require('supertest');
var chai = require("chai");
var expect = chai.expect;
const {express} = require('../../dist/index');
const _ = require('lodash');

describe('Customer Api', () => {
    
    it('Should insert a customer', (done) => {
       
        request(express)
            .post('/api/customers')
            .send({
                name: 'Thayná', email: 'thayna2@thauany.com', document: '01234567890'
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(_.pick(res.body, ['name']).name).to.equal('Thayná');
                done();
            });
    });

    it('Should list all customers', (done) => {
       
        request(express)
            .get('/api/customers')
            .end((err, res) => {
            
                expect(res.statusCode).to.equal(200);

                done(); 
            });
    });
});