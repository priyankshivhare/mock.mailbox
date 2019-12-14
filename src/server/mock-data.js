module.exports = {
    loginData: {
        'pshivhare': {
            password: 'cGFzc3dvcmQxMjM0',

        }
    },
    userMailData: {
        'pshivhare': {
            firstName: 'Priyank',
            lastName: 'Shivhare',
            email: 'priyankshivhare@hotmail.com',
            displayImage: 'https://via.placeholder.com/150',
            inbox: [
                {
                    id: 1,
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: false
                },
                {
                    id: 2,
                    from: 'Zomato',
                    to: 'neha@yahoo.com',
                    cc: 'sushil@hotmail.com',
                    subject: 'Example subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: true
                },
                {
                    id: 3,
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
                    id: 1,
                    from: 'ICICI',
                    to: 'example@yahoo.com',
                    cc: 'example@hotmail.com',
                    subject: 'Sample subject',
                    body: 'The quick brown fox jumps over the lazy dog',
                    read: false
                }
            ]
        }
    }
};