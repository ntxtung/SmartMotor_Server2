import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DeviceModule } from './device/device.module';
import { DeviceTrackModule } from './device-track/device-track.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: process.env.DEBUG === "true",
      playground: process.env.PLAYGROUND === "true"
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?authSource=admin&readPreference=primary`),
    UserModule,
    DeviceModule,
    DeviceTrackModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
