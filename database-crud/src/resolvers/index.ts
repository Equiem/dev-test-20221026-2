import type { Context } from "../Context";
import type { Resolvers } from "../schema/types";
import { Query } from "./Query";
import { Mutation } from "./Mutation";

export const resolvers: Resolvers<Context> = {
  Query,
  Mutation,
};
