export class FindAllProductsMapper {
  static toDomain(products) {
    if (Array.isArray(products)) {
      return products.map((item) => {
        return this.mapItem(item);
      });
    } else {
      return null;
    }
  }

  static mapItem(source) {
    const mappedProduct = {
      id: source.id,
      name: source.name,
      status: source.status,
      category: {
        name: source.category.name,
      },
      file: source.file
        ? {
            originalPath: source.file?.originalPath,
            smallPath: source.file?.smallPath,
            mediumPath: source.file?.mediumPath,
            largePath: source.file?.largePath,
          }
        : null,
    };

    return mappedProduct;
  }
}

