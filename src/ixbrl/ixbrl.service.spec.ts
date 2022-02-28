import { Test, TestingModule } from '@nestjs/testing';
import { IxbrlService } from './ixbrl.service';

describe('IxbrlService', () => {
  let service: IxbrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IxbrlService],
    }).compile();

    service = module.get<IxbrlService>(IxbrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
