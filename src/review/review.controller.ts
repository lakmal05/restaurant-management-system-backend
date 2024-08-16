import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

 

 
  /**
   * Create a new Review by customer. this is allow only to item orderd customer
   * @param data
   * @returns
   */
  @Post('create')
  create(@Body() data: ReviewDto) {
    return this.reviewService.create(data);
  }

  /**
   * Find all reviews by productBaseVariantId.
   * @param productBaseVariantId
   * @returns
   */
  @Get('find-all-by-productId/:productId')
  findAllByProdutId(
    @Param('productId') productId: string,
  ) {
    return this.reviewService.findAllByProductId(
      productId,
    );
  }

  @Put('update/:reviewId')
  update(@Param('reviewId') reviewId: string, @Body() data: UpdateReviewDto) {
    return this.reviewService.update(reviewId, data);
  }

}
