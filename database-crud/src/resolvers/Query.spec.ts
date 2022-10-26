import { gql } from "apollo-server";
import { expect } from "chai";
import { describe, it } from "mocha";
import type { EntityManager } from "typeorm";
import { Item } from "../entities/Item";
import { getClient } from "../test/getClient";
import { getEntityManager } from "../test/getEntityManager";

gql`
  query allItems {
    items {
      id
      description
      done
    }
  }
`;

gql`
  query item($id: Int!) {
    item(id: $id) {
      id
      description
      done
    }
  }
`;

describe("Query", () => {
  let em: EntityManager;
  let client: ReturnType<typeof getClient>;
  let items: Item[];

  beforeEach(async () => {
    em = await getEntityManager();
    client = getClient(em);

    items = await Promise.all([
      em.save(em.create(Item, { description: "Item 1", done: false })),
      em.save(em.create(Item, { description: "Item 2", done: true })),
    ]);
  });

  it("Returns all items", async () => {
    const result = await client.allItems();

    expect(result.items).to.have.deep.members([
      { id: items[0].id, description: "Item 1", done: false },
      { id: items[1].id, description: "Item 2", done: true },
    ]);
  });

  it("Returns a single item", async () => {
    const result = await client.item({ id: items[1].id });

    expect(result.item).to.deep.eq({ id: items[1].id, description: "Item 2", done: true });
  });
});
