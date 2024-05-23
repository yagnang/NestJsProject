import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Variant } from './variant/entities/variant.entity';
import { VariantModule } from './variant/variant.module';
import { VariantDataModule } from './variant-data/variant-data.module';
import { SkuModule } from './sku/sku.module';
import { VariantData } from './variant-data/entities/variant-data.entity';
import { Sku } from './sku/entities/sku.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ".env.config.local",
        // envFilePath: ".prod.env"
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    VariantModule,
    VariantDataModule,
    SkuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
