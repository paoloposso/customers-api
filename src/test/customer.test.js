var should = require("should");
var request = require('supertest');
var chai = require("chai");
var expect = chai.expect;
const { express } = require('../../dist/index');
const _ = require('lodash');
const mongoose = require('mongoose');

const objId = mongoose.Types.ObjectId();

describe('Customer Api', () => {
    
    it('Should insert a customer', (done) => {
       
        request(express)
            .post('/api/customers')
            .send({
                "_id": objId, name: 'Jane', email: 'jane@smith.com', document: '01234567890'
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(_.pick(res.body, ['name']).name).to.equal('Jane');
                done();
            }).catch(err => done());
    });

    it('Should list all customers', (done) => {
       
        request(express)
            .get('/api/customers')
            .end((err, res) => {
            
                expect(res.statusCode).to.equal(200);

                done(); 
            });
    });

    it('Should update customer', (done) => {
       
        request(express)
            .put('/api/customers')
            .send({
                "id": objId, name: 'Jane Smith', email: 'jane.sm@smith.com', document: '01234567890'
            })
            .end((err, res) => {
            
                expect(res.statusCode).to.equal(200);

                done(); 
            });
    });

    it('Should get customer with the new inserted id', (done) => {
        request(express).get(`/api/customers/${objId}`)
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.name).to.equal('Jane Smith');
            done();
        });
    });

    it('Should delete customer with new inserted id', (done) => {
        request(express).delete(`/api/customers/${objId}`)
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.name).to.equal('Jane Smith');
            done();
        });
    });
});