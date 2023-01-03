import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.local.env' }), 
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async ( configService: ConfigService ) => {
        Logger.log(configService.get<string>('DB') + "://" + configService.get<string>('DB_HOST') + ":" + configService.get<string>('DB_PORT') + "/local");
        return ({
          uri: configService.get<string>('DB') + "://" + configService.get<string>('DB_HOST') + ":" + configService.get<string>('DB_PORT') + "/local"
        })},
      inject: [ConfigService]
    })
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
