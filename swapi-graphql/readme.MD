# SWAPI GraphQL test
This directory includes a bare-bones react app. Implement a new feature in this app which does the following:

- Makes a GraphQL request to the public [SWAPI GraphQL interface](https://graphql.org/swapi-graphql) to retrieve 10 characters from the Star Wars movies as well as their skin color, and homeworld name.
- List these characters, each in a separate `div` element with the following structure:
```html
<div>
  <h1>{name}</h1>
  <p>Skin color: {skinColor}</p>
  <p>Homeworld: {homeworldName}</p>
</div>
```

**Note:** you may install any packages from `npm` that you think will be helpful.

## Development

Start the react app with:
```
npm start
```

## Testing
Your code must must first pass lint:
```
npm run lint
```

And the integration test suite must pass:
```
npm test
```

You can see the expected output of this test in the `cypress/e2e/App.cy.ts` file. **Note:** you should not edit this file, only the react app.

## Bonus points

Use some form of code generation for your GraphQL queries.
