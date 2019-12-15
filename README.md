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
* User credentials(username and password) are stored in back-end layer using "Base64 encryption" for password protection.

* Developed Mailbox enables following features to users:

1. Enable send and recieve actual (emails are not sent over SMTP) emails to mock recipient and all email view in sent box.

2. Open an email with a click over on email subject or "To" field

3. Delete email from inbox view

4. Send emails to recipient in mock-data (database) with the email availability when user logs in to that account

5. Show emails in sent view for recipients which are not in mock-data. Although, HTTP request will return 404 since actual mail will not be sent

6. Total email count and unread count with real time rendering.

7. Different views for Read and Unread emails as per mockups.

## To run test
```
npm run test
```

The project should run on port 8080
