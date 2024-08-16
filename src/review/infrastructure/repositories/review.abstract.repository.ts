
export abstract class ReviewAbstractRepository {
  abstract findAllByProductId(productId: string);


  abstract update(reviewId: string, data);

  abstract create(data);

}
