import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Variant } from './variant/entities/variant.entity';
import { VariantModule } from './variant/variant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'password',
      username: 'postgres',
      entities: [User, Variant],
      database: 'pgWithNest',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    VariantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
