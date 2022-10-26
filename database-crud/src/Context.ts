import type { EntityManager } from "typeorm";

export interface Context {
  entityManager: EntityManager;
}
