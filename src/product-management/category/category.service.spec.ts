import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { CategoryAbstractRepository } from './infrastructure/repositories/category.abstract.repository';

describe('CategoryService', () => {
  let service: CategoryService;

  const mockCategoryRepository = {
    findAll: jest.fn().mockResolvedValue([{ id: '1', name: 'Electronics' }]),  // Mocked method for findAll
    findOne: jest.fn().mockResolvedValue({ id: '1', name: 'Electronics' }),    // Mocked method for findOne
    create: jest.fn().mockResolvedValue({ id: '1', name: 'Electronics' }),     // Mocked method for create
    update: jest.fn().mockResolvedValue({ id: '1', name: 'Updated Electronics' }), // Mocked method for update
    delete: jest.fn().mockResolvedValue(undefined), // Mocked method for delete
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: CategoryAbstractRepository,
          useValue: mockCategoryRepository,  
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const result = await service.findAll();
      expect(result).toEqual([{ id: '1', name: 'Electronics' }]); 
    });
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const categoryDto:any = { name: 'Electronics' };
      const result = await service.create(categoryDto);
      expect(result).toEqual({ id: '1', name: 'Electronics' });  
    });
  });
});
