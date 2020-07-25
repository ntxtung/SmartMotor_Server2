import { Test, TestingModule } from '@nestjs/testing';
import { DeviceResolver } from './device.resolver';

describe('DeviceResolver', () => {
  let resolver: DeviceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceResolver],
    }).compile();

    resolver = module.get<DeviceResolver>(DeviceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
