const _ = require('lodash');

module.exports = {
    verifyCredentials: (username, password, mockData) => {
        const loginData = mockData.loginData;
        if (_.get(loginData, username)) {
            const mockPassword = _.get(loginData[username], `password`);
            return convertToBase64(password) === mockPassword;
        }
        return false;
    },

    checkIfRecipientExists: (recipient, mockData) => {
        return !!mockData.userMailData[recipient];
    }
};

function convertToBase64(password) {
    const buff = new Buffer(password);
    return buff.toString('base64');
}