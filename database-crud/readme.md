# Database CRUD test
This directory includes a bare-bones GraphQL API service that will create, read, update and delete items from a very basic to-do list stored in a [PostgreSQL](https://www.postgresql.org/) database.

The service is implemented with [ApolloServer V3](https://www.apollographql.com/docs/apollo-server/v3), [TypeORM](https://typeorm.io/), and [GraphQL Code Generator](https://www.the-guild.dev/graphql/codegen) and as such is designed to test your understanding of core concepts from these libraries.

The service is only partially implemented, and there are multiple failing tests. Your assignment is to make all the tests pass.

## Requirements

- MacOS / Linux dev environment (may also work on Windows with WSL, but is not tested).
- Docker (for docker compose).
- Node / NPM ([Node version manager](https://github.com/nvm-sh/nvm) is recommended - see the `.nvmrc` file).

## Development

Install node modules.
```
npm install
```

Run the npm dev script to start docker containers, watch for file changes and compile / generate code.
```
npm run dev 
```

You are ready for testing once `npm run dev` outputs:
```
Found 0 errors. Watching for file changes.
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

You can see the expected output of the tests in the `src/resolvers/*.spec.ts` files. **Note:** you may need to make some small changes to the comments in these files, but otherwise the tests should not be altered.

## Runtime

To start the app:

```
docker compose up -d
npm run build
npm run migration:run
npm start
```
