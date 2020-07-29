import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';

import { DeviceSchema } from './device.schema';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{name: 'Device', schema: DeviceSchema}])
  ],
  providers: [DeviceService, DeviceResolver],
  exports: [DeviceService]
})
export class DeviceModule {}
