import { Test, TestingModule } from '@nestjs/testing';
import { InquiriesController } from './inquiries.controller';
import { InquiriesService } from './inquiries.service';

describe('InquiriesController', () => {
  let controller: InquiriesController;
  let service: InquiriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InquiriesController],
      providers: [
        {
          provide: InquiriesService,
          useValue: {
            createInquiry: jest.fn(), // Mocking createInquiry method
          },
        },
      ],
    }).compile();

    controller = module.get<InquiriesController>(InquiriesController);
    service = module.get<InquiriesService>(InquiriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createInquiry', () => {
    it('should call InquiriesService.createInquiry with the correct parameters', async () => {
      // Arrange
      const userId = 'user123';
      const message = 'This is a test message';
      const createInquiryDto = { userId, message };
      const result = { id: 1, ...createInquiryDto };

      // Act
      const response = await controller.createInquiry(userId, message);

      // Assert
      expect(service.createInquiry).toHaveBeenCalledWith(createInquiryDto);
      expect(response).toEqual(result);
    });
  });
});
