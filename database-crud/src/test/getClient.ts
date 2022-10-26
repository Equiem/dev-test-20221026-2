import type { GraphQLResponse } from "graphql-request/dist/types";
import type { VariableValues } from "apollo-server-types";
import { getServer } from "../getServer";
import type { DocumentNode } from "graphql";
import { GraphQLError } from "graphql";
import { getSdk } from "./test-sdk";
import { GraphQLClient } from "graphql-request";
import type { EntityManager } from "typeorm";
import type { ApolloServer } from "apollo-server";

export class TestGraphQLClient extends GraphQLClient {
  private readonly server: ApolloServer;

  constructor(entityManager: EntityManager) {
    super("");
    this.server = getServer(entityManager);
  }

  public request: GraphQLClient["request"] = async <T = unknown, V extends VariableValues | undefined = undefined>(
    document: DocumentNode | unknown,
    variables?: V,
  ) => {
    const result = await (this.server.executeOperation({ query: document as DocumentNode, variables }) as Promise<
      GraphQLResponse<T>
    >);

    if (result.errors != null && result.errors.length > 0) {
      throw new GraphQLError(`${result.errors[0].message} (path: ${JSON.stringify(result.errors[0].path)})`);
    }

    return result.data;
  };
}

export const getClient = (entityManager: EntityManager) => getSdk(new TestGraphQLClient(entityManager));
