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
      price: source.price,
      description: source.description,
      category: {
        id: source.category.id,
        name: source.category.name,
      },
      productFile: source.productFile
        ? this.mapProductFiles(source.productFile)
        : null,
    };

    return mappedProduct;
  }

  static mapProductFiles(files: any) {
    if (!Array.isArray(files)) {
      return [];
    }
    return files.map((productFile) => {
      const { createdAt, updatedAt, ...rest } = productFile;
      const { createdAt: fileCreatedAt, __entity, ...fileRest } = rest.file;
      return {
        isDeafult: rest?.isDefault,
        ...fileRest,
      };
    });
  }
}
