const express = require('express');
const bodyParser = require('body-parser');
const mockData = require('./mock-data');
const _ = require('lodash');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

app.post('/api/verifyCredentials/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (verifyCredentials(username, password)) {
        return res.send(200, "OK");
    }
    return res.send(401, "Unauthorized");

});

function verifyCredentials(username, password) {
    if (_.get(mockData, `data.${username}`)) {
        const mockPassword = _.get(mockData, `data.${username}.password`);
        return convertToBase64(password) === mockPassword;
    }
    return false;
}

function convertToBase64(password) {
    const buff = new Buffer(password);
    return buff.toString('base64');
}