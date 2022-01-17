import { Test, TestingModule } from '@nestjs/testing';
import { SavedPassController } from './saved-pass.controller';

describe('SavedPassController', () => {
  let controller: SavedPassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedPassController],
    }).compile();

    controller = module.get<SavedPassController>(SavedPassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
