# React/Redux experiment
## Exchange widget

The actual code of the widget is in
`/src/ExchangeWidget`
Everything else is just a proto app / container with some HOC and UI components, the store, the reducers and the actions.

http://exchangetransfer.herokuapp.com

## Installation

`npm install`

## Commands

`npm run start`

Run development instance of application via a webpack development server with hot reloading.

Default url: http://localhost:3000

`npm run test`

Run the tests.

`npm run build`

Build the application.

## Configuration
I used a tool made by my fellow colleague Marcello Montemagno. It's in its early stage but I like it and I like to contribute to it.
For any extra info https://github.com/marcellomontemagno/react-scv

# Features
- Fetch rates every 10 seconds
- Update balance (make transfer) when funds are enough
- Change currency/amount bilaterally
- [JavaScript style guide, with linter & automatic code fixer](https://standardjs.com) semicolon yes, semicolo no? :)

# TODO
- Add more unit tests for logic
- Add more tests in presentational components
- Refactor
- Add Error handling
- Add test coverage tools

