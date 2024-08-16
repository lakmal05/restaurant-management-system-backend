export abstract class CustomerAbstractRepository {

  abstract findAll();

  abstract update(data);

  abstract findByContactDetails(contactDetails);
}
