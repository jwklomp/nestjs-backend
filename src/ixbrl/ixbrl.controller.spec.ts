import { Test, TestingModule } from '@nestjs/testing';
import { IxbrlController } from './ixbrl.controller';
import { IxbrlService } from './ixbrl.service';

describe('IxbrlController', () => {
  let controller: IxbrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IxbrlController],
      providers: [IxbrlService],
    }).compile();

    controller = module.get<IxbrlController>(IxbrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
