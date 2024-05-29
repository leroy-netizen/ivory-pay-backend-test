import getConfig from './configuration';
import { DataSource } from 'typeorm';
import { Merchant } from '../merchant/merchant.entity';
import { Settlement } from '../settlement/settlement.entity';

const config = getConfig();

export function initializeDataSource() {
  const appDataSource = new DataSource({
    type: 'postgres',
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.name,
    entities: [Merchant, Settlement],
    synchronize: false,
    logging: true,
    migrations: ['src/migrations/*.ts'],
  });

  return appDataSource.initialize();
}
