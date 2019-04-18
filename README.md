## About

This is a Employee Directory app built with modern tooling including:

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [AWS Lambada](https://aws.amazon.com/lambda/)

You can add new employees via the `[+]` button on the homepage. You can update the names on the homepage cards via the `( Edit )` button. You can delete items on the homepage via the `( Delete )` button. Clicking on the item's avatar image or name will to you to their info page.

## Setup

- Make sure you have [Node.js](https://nodejs.org/) installed
- Formatting uses [Prettier](https://prettier.io/), find editor integrations [here](https://prettier.io/docs/en/editors.html)
- Run `yarn install` to get dependencies

## Development

- Run `yarn start` for react app development mode
- A tab to [`localhost:8080`](localhost:8080) should open in your browser

## Production

- Run `yarn build` to generate react app production ready files in `/dist`
- Run `yarn run deploy` to deploy production to a [surge](https://surge.sh/) instance
- Visit production site at [http://postlight.surge.sh/](http://postlight.surge.sh/)

## Serverless API

- Run `serverless deploy` for deploying api
