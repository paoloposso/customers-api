var should = require("should");
var request = require('supertest');
var chai = require("chai");
var expect = chai.expect;
const {express} = require('../../dist/index');

describe('Customer Api', () => {
    
    it('Should list all customers', (done) => {
       
        request(express)
            .get('/api/customers')
            .end((err, res) => {
            
                expect(res.statusCode).to.equal(200);

                done(); 
            });
    });
});