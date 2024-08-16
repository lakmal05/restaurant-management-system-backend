import { StatusEnum } from 'src/common/enum/status.enum';
import { FileEntity } from 'src/files/infrastructure/entities/file.entity';
import { CategoryEntity } from 'src/product-management/category/infrastructure/entites/category.entity';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'product',
})
export class ProductEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int', default: StatusEnum.ACTIVE })
  status: number;

  @ManyToOne(() => CategoryEntity, (category) => category.product)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;

  @OneToMany(() => FileEntity, (file) => file.product)
  file: FileEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
