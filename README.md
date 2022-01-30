# Abraham Backend

- [Abraham Backend](#abraham-backend)
  - [Description](#description)
  - [Requiremnts](#requiremnts)
  - [Setup](#setup)
    - [.env](#env)
      - [.env file](#env-file)
    - [Start the server](#start-the-server)
    - [API End Points](#api-end-points)
      - [POST](#post)
      - [GET](#get)

## Description

Node.Js fast, powerfull and clean code project using typescript. This project is run behind [Abraham Aschalew Site](http://localhost:4000)

## Requiremnts

- Node.JS
- MongoDB server

## Setup

```bash
    git clone https://github.com/abrahamaschalew/abraham-backend.git abraham-backend
    cd abraham-backend
    npm i
```

### .env

We can use different environement variables for different environment.

For this project there are 3 types of env variables.

- For development ( .env.development.local)
- For production ( .env )
- For testing ( .env.test.local)

```bash
    touch .env
```

#### .env file

```text
mongodb=mongodb://sdfsdfdsf ...
jwt=3kj34jk43 ...
```

> The same goes for all different env files. The server use by defualt .env file. But if we want to use another env file. All we need to do is export NODE_ENV=development

```bash
export NODE_ENV=development
```

If you want the application to support more env files. You can specify at src/app.ts by adding another case statement.

```ts
switch (process.env.NODE_ENV) {
  case 'development':
    dotenv.config({ path: './.env.development.local' })
    break

  case 'test':
    dotenv.config({ path: './.env.test.local' })
    break

  default:
    dotenv.config({ path: './.env' })
    break
}
```

### Start the server

> After you specify your MONGODB address and jwt random string you can start the server successfully.

```bash
npm run build
npm run start
```

### API End Points

These endpoints allow you to handle user api and admin api.

#### POST

`POST Contact Message`

Request

`POST /api/v1/contact`

Types

> message type string
>
> email type email
>
> name type string

```json
{
  "message": "Hello, World",
  "email": "hello@world.com",
  "name": "Abraham Aschalew"
}
```

Response

> `HTTP Status Code (200)`

```json
{
  "message": "Thanks, I will touch with you soon"
}
```

`POST Login`

Request

`POST /api/v1/admin/login`

> Note the admin user must be inserted first in to mongo db admins collection with the username and password field. password must be encrypted in to SHA256 digest hash text.

Types

> username type string
>
> password type string

```json
{
  "username": "myusername",
  "password": "mypassword"
}
```

Response

> `HTTP Status Code (200)`

```json
{
  "message": "User logged In",
  "token": "sdfsldkfjadf ...."
}
```

#### GET

`GET Contacts /api/v1/contact`

> Note, When login as an admin the api gives you back token. This token is JSON Web token and expires after 30 minutes. Any task that need authnication we need to attach the token to http header.

Request

HTTP Header Attach

```json
  "Authorization": "Bearer sdfsldkfjadf ..."
```

Response

```json
{
  "contacts": [
    {
      "_id": "61f62ea3df4cabaf75ed99f2",
      "name": "Abraham Aschalew",
      "email": "hello@world.com",
      "message": "Hello, World",
      "createdAt": "2022-01-30T06:22:27.479Z",
      "updatedAt": "2022-01-30T06:22:27.479Z",
      "__v": 0
    }
  ]
}
```

> The main goal of this project is to create a Node.JS project that is simple to manage and scale.
