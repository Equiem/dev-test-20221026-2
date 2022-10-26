import type { Context } from "../Context";
import type { Resolvers } from "../schema/types";
import { notYetImplemented } from "../util/notYetImplemented";

export const Mutation: Resolvers<Context>["Mutation"] = {
  addItem: notYetImplemented,
  updateItem: notYetImplemented,
  deleteItem: notYetImplemented,
};
