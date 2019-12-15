# Virtual Mailbox

## To run the project -

```
npm install
```

## To start the application

```
npm start
```

## Requires:
NPM >6 and Node >10 to run properly

## Key features:
* User credentials are stored in back-end layer and password is base64 encrypted.

* User can send email to another recipient and the mail will be reflected in sent box

* To open email: click on either subject or to field

* There is also provision of deleting email in inbox view

* User can send emails to recipient in mock-data, and that email will be visible once you log in to that account

* For recipients that are not in mock-data, mails will be visible in sent view, but HTTP request will return 404 since actual mail will not be sent


## To run test
```
npm run test
```

The project should run on port 8080
