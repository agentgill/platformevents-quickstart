# Subscribing to PLATFORM EVENTS QUICKSTART

Dependencies - NodeJS

## Getting started

Clone this repo

```bash
git clone git@github.com:agentgill/platformevents-quickstart.git
```

Run install

```bash
npm install
```

Create .env file

```bash
touch .env
```

Update .env file values

```env
SFDC_USER = 'username@domain.com'
SFDC_PWD = 'Mypassword&SecurityToken'
EVENT_TYPE = '/event/aws__e'
```

Subscribe to events

```bash
node index.js
```
