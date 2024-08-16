import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReviewDto } from './dto/review.dto';
import { ReviewAbstractRepository } from './infrastructure/repositories/review.abstract.repository';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewAbstractRepository) {}

  async create(data: ReviewDto) {
   
    return this.reviewRepository.create(data);
  }

  update(reviewId: string, data: UpdateReviewDto) {
    return this.reviewRepository.update(reviewId, data);
  }

  findAllByProductId(productId: string) {
    return this.reviewRepository.findAllByProductId(productId);
  }
}
