export class StoreLocatorMapper {
  static toDomain(StoreLocator) {
    if (Array.isArray(StoreLocator)) {
      return StoreLocator.map((item) => {
        return this.mapItem(item);
      });
    } else if (StoreLocator !== null) {
      return this.mapItem(StoreLocator);
    } else {
      return null;
    }
  }

  static mapItem(source) {
    return {
      id: source.id,
      name: source.name,
      address: source.address,
      facilities: source.facilities,
      url: source.url,
    };
  }
}
