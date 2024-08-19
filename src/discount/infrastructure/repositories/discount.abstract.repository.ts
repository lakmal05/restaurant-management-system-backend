import { CreateDiscountDto } from "src/discount/dto/create-discount.dto";

export abstract class DiscountAbstractRepository {
  create(data: CreateDiscountDto) {
    throw new Error('Method not implemented.');
  }
}
