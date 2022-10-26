import { gql } from "apollo-server";
import { expect } from "chai";
import { describe, it } from "mocha";
import { Item } from "../entities/Item";
import { getClient } from "../test/getClient";
import type { EntityManager } from "typeorm";
import { getEntityManager } from "../test/getEntityManager";

gql`
  mutation addItem($item: ItemInput!) {
    addItem(item: $item) {
      id
      description
      done
    }
  }
`;

gql`
  mutation updateItem($id: Int!, $item: ItemInput!) {
    updateItem(id: $id, item: $item) {
      id
      description
      done
    }
  }
`;

gql`
  mutation deleteItem($id: Int!) {
    deleteItem(id: $id)
  }
`;

describe("Mutation", () => {
  let em: EntityManager;
  let client: ReturnType<typeof getClient>;

  beforeEach(async () => {
    em = await getEntityManager();
    client = getClient(em);
  });

  it("Adds an item", async () => {
    const {
      addItem: { id },
    } = await client.addItem({ item: { description: "New item", done: false } });

    const item = await em.findOneOrFail(Item, { where: { id } });
    expect(item).to.deep.eq({
      id,
      description: "New item",
      done: false,
    });
  });

  it("Updates an item", async () => {
    const origItem = await em.save(em.create(Item, { description: "Original description", done: false }));
    const { updateItem: result } = await client.updateItem({
      id: origItem.id,
      item: { description: "New description", done: true },
    });

    const updatedItem = await em.findOneOrFail(Item, { where: { id: result.id } });

    expect(updatedItem).to.deep.eq({
      id: result.id,
      description: "New description",
      done: true,
    });
  });

  it("Deletes an item", async () => {
    const item = await em.save(em.create(Item, { description: "Original description", done: false }));
    const { deleteItem: result } = await client.deleteItem({ id: item.id });

    expect(result).to.eq(true);
    expect(await em.findOne(Item, { where: { id: item.id } })).to.eq(null);
  });
});
