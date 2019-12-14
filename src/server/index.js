const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('dist'));
//app.post('/api/verifyCredentials', (req, res) => res.send({ username: os.userInfo().username }));
app.post('/api/verifyCredentials/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    return res.send(200, "OK");
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
