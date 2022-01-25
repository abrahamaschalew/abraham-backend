# Abraham Backend

- [Abraham Backend](#abraham-backend)
  - [Description](#description)
  - [Requiremnts](#requiremnts)
  - [Setup](#setup)
    - [.env](#env)
      - [.env file](#env-file)
    - [Start the server](#start-the-server)
    - [API End Points](#api-end-points)

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
npm build
npm start
```

### API End Points
