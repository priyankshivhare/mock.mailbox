const expect  = require('chai').expect;
const Utils = require('./../server/utils');


//Given
const mockData = {
    loginData: {
        //password1234
        'priyankshivhare@hotmail.com': {
            password: 'cGFzc3dvcmQxMjM0',

        },
        //yahoo123
        'testuser@example.com': {
            password: 'eWFob28xMjM='
        }
    },
    userMailData: {
        'priyankshivhare@hotmail.com': {
            firstName: 'Priyank',
            lastName: 'Shivhare',
            email: 'priyankshivhare@hotmail.com',
            displayImage: 'https://via.placeholder.com/150',
            inbox: [],
            outbox: []
        },
        'testuser@example.com': {
            firstName: 'Test',
            lastName: 'User',
            email: 'testuser@example.com',
            displayImage: 'https://via.placeholder.com/150',
            inbox: [],
            outbox: []
        }
    }
};

it('Check verify credential functionality', function(done) {
    //given
    const username = 'priyankshivhare@hotmail.com';
    const password = 'password1234';
    //when
    const result = Utils.verifyCredentials(username,password,mockData);
    //then
    expect(result).to.equal(true);
    done();
});

it('Check verify incorrect credential functionality', function(done) {
    //given
    const username = 'priyankshivhare@hotmail.com';
    const password = 'password';
    //when
    const result = Utils.verifyCredentials(username,password,mockData);
    //then
    expect(result).to.equal(false);
    done();
});

it('Check if recipient exists', function(done) {
    //given
    const recipient = 'priyankshivhare@hotmail.com';
    //when
    const result = Utils.checkIfRecipientExists(recipient, mockData);
    //then
    expect(result).to.equal(true);
    done();
});

it('Check if recipient does not exists', function(done) {
    //given
    const recipient = 'example@hotmail.com';
    //when
    const result = Utils.checkIfRecipientExists(recipient, mockData);
    //then
    expect(result).to.equal(false);
    done();
});