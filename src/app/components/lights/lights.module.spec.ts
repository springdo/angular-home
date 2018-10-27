import { LightsModule } from './lights.module';

describe('LightsModule', () => {
  let lightsModule: LightsModule;

  beforeEach(() => {
    lightsModule = new LightsModule();
  });

  it('should create an instance', () => {
    expect(lightsModule).toBeTruthy();
  });
});
