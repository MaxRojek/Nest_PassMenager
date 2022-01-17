import { Test, TestingModule } from '@nestjs/testing';
import { SavedPassService } from './saved-pass.service';

describe('SavedPassService', () => {
  let service: SavedPassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavedPassService],
    }).compile();

    service = module.get<SavedPassService>(SavedPassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
