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
