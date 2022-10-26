import { DataSource } from "typeorm";
import { Item } from "./entities/Item";

const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgres://postgres@localhost:5432/postgres",
  ssl: false,
  synchronize: false,
  logging: false,
  entities: [Item],
  migrations: [`${__dirname}/migration/**/!(*.spec.*)`],
});

export default AppDataSource;
