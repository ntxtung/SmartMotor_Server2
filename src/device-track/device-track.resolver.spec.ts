import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTrackResolver } from './device-track.resolver';

describe('DeviceTrackResolver', () => {
  let resolver: DeviceTrackResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceTrackResolver],
    }).compile();

    resolver = module.get<DeviceTrackResolver>(DeviceTrackResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
