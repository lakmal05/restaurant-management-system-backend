import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './infrastructure/entites/customer.entity';

describe('CustomerController', () => {
  let controller: CustomerController;
  let service: CustomerService;

  // Dummy data
  const dummyCustomer: Object = {
    id: 'dummy-id',
    name: 'John Doe',
    email: 'john@example.com',
    contactNo: '1234567890',
    createdAt: new Date(),
    updatedAt: new Date(),
  } ;

  // Mock CustomerService
  const mockCustomerService = {
    create: jest.fn().mockResolvedValue(dummyCustomer),
    findAll: jest.fn().mockResolvedValue([dummyCustomer]),
    findOne: jest.fn().mockResolvedValue(dummyCustomer),
    update: jest.fn().mockResolvedValue(dummyCustomer),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: CustomerService,
          useValue: mockCustomerService, // Use mock service
        },
      ],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
    service = module.get<CustomerService>(CustomerService); // Inject the mock service
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });



  describe('findAll', () => {
    it('should return an array of customers', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([dummyCustomer]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  // describe('findOne', () => {
  //   it('should return a single customer by ID', async () => {
  //     const result = await controller.findOne('dummy-id');
  //     expect(result).toEqual(dummyCustomer);
  //     expect(service.findOne).toHaveBeenCalledWith('dummy-id');
  //   });
  // });

  // describe('update', () => {
  //   it('should update and return the customer', async () => {
  //     const updateDto = { name: 'Jane Doe' };
  //     const updatedCustomer = { ...dummyCustomer, ...updateDto };
  //     jest.spyOn(service, 'update').mockResolvedValue(updatedCustomer);
  //     const result = await controller.update('dummy-id', updateDto);
  //     expect(result).toEqual(updatedCustomer);
  //     expect(service.update).toHaveBeenCalledWith('dummy-id', updateDto);
  //   });
  // });

  // describe('delete', () => {
  //   it('should delete a customer by ID', async () => {
  //     await controller.delete('dummy-id');
  //     expect(service.delete).toHaveBeenCalledWith('dummy-id');
  //   });
  // });
});
