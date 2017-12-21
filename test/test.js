var expect = require('chai').expect;
const mongoose = require('mongoose')
const User = require('../models/user')
const Room = require('../models/room')
const Message = require('../models/message')

var index = require('../routes/index');
var users = require('../routes/users');
const rooms = require('../routes/rooms')


describe('mongoose models', ()=> {
    describe('User model', () => {
        it('should exist', () =>{
            expect(mongoose.model('User')).to.exist
        })
    })
    describe('Room model', () => {
        it('should exist', () =>{
            expect(mongoose.model('Room')).to.exist
        })
    })
    describe('Message model', () => {
        it('should exist', () =>{
            expect(mongoose.model('Message')).to.exist
        })
    })
})

describe('route handlers', () => {
    describe('index route',  () => {
        it('should be a function', () => {
            expect(typeof index).to.equals('function')
        })
    })
    describe('rooms route',  () => {
        it('should be a function', () => {
            expect(typeof rooms).to.equals('function')
        })
    })
    describe('users route',  () => {
        it('should be a function', () => {
            expect(typeof users).to.equals('function')
        })
    })
})
