/* eslint-disable no-process-exit */
/* eslint-disable no-console */
import "reflect-metadata";
import AppDataSource from "./datasource";
import { getServer } from "./getServer";

AppDataSource.initialize()
  .then(async (dataSource) => getServer(dataSource.manager).listen())
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
