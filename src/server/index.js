const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { verifyCredentials, checkIfRecipientExists } = require('./utils');

let mockData = {
    loginData: {
        'priyankshivhare@hotmail.com': {
            //username:priyankshivhare@hotmail.com password: password1234
            password: 'cGFzc3dvcmQxMjM0',

        },
        'testuser@example.com': {
            //username: testuser@example.com password: yahoo123
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
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
                    'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
                    'ad minim veniam, quis nostrud exercitation ullamco laboris ',
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
                    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ' +
                    'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ' +
                    'beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut'
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
    if (verifyCredentials(username, password, mockData)) {
        const userData = mockData.userMailData[username];
        return res.send(200, userData);
    }
    return res.send(401, "Unauthorized");
});

app.post('/api/sendEmail/', (req, res) => {
    if (checkIfRecipientExists(req.body.to, mockData)) {
        mockData.userMailData[req.body.to].inbox.unshift({
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