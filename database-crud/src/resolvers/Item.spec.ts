import { gql } from "apollo-server";
import { expect } from "chai";
import { describe, it } from "mocha";
import type { EntityManager } from "typeorm";
import { Item } from "../entities/Item";
import { getClient } from "../test/getClient";
import { getEntityManager } from "../test/getEntityManager";

gql`
  query itemWithDates($id: Int!) {
    item(id: $id) {
      id
      created
      updated
    }
  }
`;

describe("Item", () => {
  let em: EntityManager;
  let client: ReturnType<typeof getClient>;

  beforeEach(async () => {
    em = await getEntityManager();
    client = getClient(em);
  });

  it("Returns created / updated as unix timestamp", async () => {
    const item = await em.save(em.create(Item, { description: "Test", done: false }));

    const result = await client.itemWithDates({ id: item.id });

    expect(result.item).to.deep.contain({
      // @ts-expect-error created not yet implemented
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      created: Math.round(item.created.getTime() / 1000),
      // @ts-expect-error updated not yet implemented
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      updated: Math.round(item.updated.getTime() / 1000),
    });
  });
});
