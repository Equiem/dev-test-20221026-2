/* eslint-disable node/no-sync */
import { ApolloServer } from "apollo-server";
import fs from "fs";
import path from "path";
import type { Context } from "./Context";
import { resolvers } from "./resolvers";
import type { EntityManager } from "typeorm";

const typeDefs = fs.readFileSync(path.join(__dirname, "schema/schema.graphql")).toString();

export const getServer = (entityManager: EntityManager) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    context: (): Context => ({ entityManager }),
  });
