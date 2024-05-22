import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { Variant } from "src/variant/entities/variant.entity";
import { config } from 'dotenv'

config()

const configService = new ConfigService();

export const AppDataSource = new DataSource({

  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'pgWithNest',
  logging: true,
  migrations: ['src/migrations/*.ts'],
  entities: [Variant]
  // synchronize: configService.get<boolean>('DB_SYNC'),
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });