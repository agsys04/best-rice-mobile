class Place {
  constructor(
    id,
    municipalityId,
    title,
    address,
    description,
    hostedBy,
    thisPlaceOffers,
    affordability,
    featuredImage,
    imagesUrl,
    isFeatured,
    ratings
  ) {
    this.id = id;
    this.municipalityId = municipalityId;
    this.title = title;
    this.address = address;
    this.description = description;
    this.hostedBy = hostedBy;
    this.thisPlaceOffers = thisPlaceOffers;
    this.affordability = affordability;
    this.featuredImage = featuredImage;
    this.imagesUrl = imagesUrl;
    this.isFeatured = isFeatured;
    this.ratings = ratings
  }
}

export default Place;
