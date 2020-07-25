import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTrackService } from './device-track.service';

describe('DeviceTrackService', () => {
  let service: DeviceTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceTrackService],
    }).compile();

    service = module.get<DeviceTrackService>(DeviceTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
