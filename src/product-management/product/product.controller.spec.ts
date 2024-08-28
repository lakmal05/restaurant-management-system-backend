import { Test, TestingModule } from '@nestjs/testing';
import { ProducteController } from './producte.controller';
import { ProducteService } from './producte.service';

describe('ProducteController', () => {
  let controller: ProducteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducteController],
      providers: [ProducteService],
    }).compile();

    controller = module.get<ProducteController>(ProducteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
