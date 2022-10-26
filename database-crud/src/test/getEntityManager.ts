import type { EntityManager } from "typeorm";
import AppDataSource from "../datasource";

let manager: EntityManager | undefined;

before(async () => {
  await AppDataSource.initialize();
  await AppDataSource.dropDatabase();
  await AppDataSource.runMigrations();
});

afterEach(async () => {
  await manager?.queryRunner?.rollbackTransaction();
  await manager?.queryRunner?.release();
});

export const getEntityManager = async () => {
  const queryRunner = AppDataSource.createQueryRunner();
  manager = queryRunner.manager;
  await manager.queryRunner?.startTransaction();

  return manager;
};
