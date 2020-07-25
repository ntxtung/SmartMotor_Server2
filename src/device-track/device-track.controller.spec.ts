import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTrackController } from './device-track.controller';

describe('DeviceTrack Controller', () => {
  let controller: DeviceTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceTrackController],
    }).compile();

    controller = module.get<DeviceTrackController>(DeviceTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
