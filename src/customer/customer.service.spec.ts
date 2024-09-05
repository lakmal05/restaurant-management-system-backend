import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './infrastructure/entites/customer.entity';

describe('CustomerService', () => {
  let service: CustomerService;
  let repository: Repository<CustomerEntity>;

  const mockCustomerRepository = {
    find: jest.fn().mockResolvedValue([]), // Mock find() method for findAll
  };

  const dummyCustomers: CustomerEntity[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      contactNo: '1234567890',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      contactNo: '0987654321',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ] as any[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: getRepositoryToken(CustomerEntity), // Provide the repository token
          useValue: mockCustomerRepository, // Mock the repository
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    repository = module.get<Repository<CustomerEntity>>(getRepositoryToken(CustomerEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of customers', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(dummyCustomers); // Mock the repository find method

      const result = await service.findAll(); // Call the service's findAll method
      expect(result).toEqual(dummyCustomers); // Assert the result is the dummy data
      expect(repository.find).toHaveBeenCalled(); // Assert that the find method was called
    });
  });
});
