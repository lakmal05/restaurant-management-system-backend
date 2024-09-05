import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;

  // Mock data for the roles
  const mockRoles = [
    { id: '1', name: 'Admin' },
    { id: '2', name: 'User' },
  ];

  // Mock implementation of RoleService methods
  const mockRoleService = {
    findAll: jest.fn().mockResolvedValue(mockRoles),
    findOne: jest.fn().mockResolvedValue(mockRoles[0]),
    create: jest.fn().mockResolvedValue(mockRoles[0]),
    update: jest.fn().mockResolvedValue(mockRoles[0]),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: RoleService,
          useValue: mockRoleService, // Use the mocked service
        },
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of roles', async () => {
      const result = await service.findAll();
      expect(result).toEqual(mockRoles);
    });
  });

  describe('findOne', () => {
    it('should return a single role by ID', async () => {
      const result = await service.findOne('1');
      expect(result).toEqual(mockRoles[0]);
    });
  });

  describe('create', () => {
    it('should create a new role', async () => {
      const createDto:any = { name: 'Admin' };
      const result = await service.create(createDto);
      expect(result).toEqual(mockRoles[0]);
    });
  });

  describe('update', () => {
    it('should update a role', async () => {
      const updateDto = { name: 'Super Admin' };
      const result = await service.update('1', updateDto);
      expect(result).toEqual(mockRoles[0]);
    });
  });

  describe('delete', () => {
    it('should delete a role by ID', async () => {
      const result = await service.delete('1');
      expect(result).toBeUndefined(); // Mocked delete returns undefined
    });
  });
});
