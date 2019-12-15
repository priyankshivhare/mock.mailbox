const express = require('express');
const bodyParser = require('body-parser');
//const mockData = require('./mock-data');
const _ = require('lodash');
const app = express();

let mockData = {
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
            inbox: [
                {
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: false
                },
                {
                    from: 'Zomato',
                    to: 'neha@yahoo.com',
                    cc: 'sushil@hotmail.com',
                    subject: 'Example subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: true
                },
                {
                    from: 'Swiggy',
                    to: 'pooja@yahoo.com',
                    cc: 'example2@hotmail.com',
                    subject: 'Important mail',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: false
                }
            ],
            outbox: [
                {
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog'
                }
            ]
        },
        'testuser@example.com': {
            firstName: 'Test',
            lastName: 'User',
            email: 'testuser@example.com',
            displayImage: 'https://via.placeholder.com/150',
            inbox: [
                {
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: false
                }
            ],
            outbox: [
                {
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog'
                }
            ]
        }
    }
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

app.post('/api/verifyCredentials/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (verifyCredentials(username, password)) {
        const userData = mockData.userMailData[username];
        return res.send(200, userData);
    }
    return res.send(401, "Unauthorized");
});

app.post('/api/sendEmail/', (req, res) => {
    if (checkIfRecipientExists(req.body.to)) {
        mockData.userMailData[req.body.to].inbox.push({
            to: req.body.to,
            cc: req.body.cc,
            subject: req.body.subject,
            body: req.body.body,
            from: req.body.from,
            read: false
        });
        return res.send(200, 'OK')
    }
    return res.send(404, 'Recipient not found');
});

function verifyCredentials(username, password) {
    const loginData = mockData.loginData;
    if (_.get(loginData, username)) {
        const mockPassword = _.get(loginData[username], `password`);
        return convertToBase64(password) === mockPassword;
    }
    return false;
}

function convertToBase64(password) {
    const buff = new Buffer(password);
    return buff.toString('base64');
}

function checkIfRecipientExists(recipient) {
    return !!mockData.userMailData[recipient];
}