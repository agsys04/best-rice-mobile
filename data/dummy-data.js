import Municipality from "../models/municipality";
import Place from "../models/place";

export const MUNICIPALITIES = [
  new Municipality(
    "DIGOS",
    "DIGOS",
    "https://www.sunstar.com.ph/uploads/images/2020/05/06/227092.jpg"
  ),
  new Municipality(
    "STA_CRUZ",
    "STA. CRUZ",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Sta._Cruz_Municipal_Hall.JPG"
  ),
  new Municipality(
    "MALALAG",
    "MALALAG",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Municpal_Hall_of_Malalag.JPG"
  ),
  new Municipality(
    "BANSALAN",
    "BANSALAN",
    "https://www.sunstar.com.ph/uploads/images/2021/06/18/293060.jpg"
  ),
  new Municipality(
    "SULOP",
    "SULOP",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Sulop_Municipal_Hall.jpg"
  ),
  new Municipality(
    "MATANAO",
    "MATANAO",
    "https://mapio.net/images-p/122288983.jpg"
  ),
  new Municipality(
    "PADADA",
    "PADADA",
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Padada%2C_Davao_Del_Sur.jpg"
  ),
  new Municipality(
    "HAGONOY",
    "HAGONOY",
    "https://i.ytimg.com/vi/mQQy4LjwGOc/maxresdefault.jpg"
  ),
];

export const DIGOS = [
  {
    id: "p1",
    municipalityId: "DIGOS",
    title: "MONTEFRIO GARDEN RESORT",
    address: "Sitio Mainit, Barangay Kapatagan 8002, Digos City",
    description:
      "Nulla fugiat veniam laboris esse ex. Exercitation aliquip enim in non irure cupidatat dolor velit laborum ut in commodo excepteur aute. Officia deserunt reprehenderit consectetur tempor laboris anim culpa tempor ad.",
    hostedBy: "Montefrio",
    thisPlaceOffers: [
      "Infinity Pool",
      "Pasalubong Center",
      "Pool Bar",
      "Jacuzzi",
      "Restonate",
      "Spa Massage",
    ],
    affordability: "affordable",
    featuredImage:
      "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2326-1-1536x1025.jpg",
    imagesUrl: [
      "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2326-1-1536x1025.jpg",
      "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2329-3-1536x946.jpg",
      "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2433-1536x1025.jpg",
      "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2436-1536x1025.jpg",
    ],
    isFeatured: true,
    ratings: 4.5,
  },

  {
    id: "p2",
    municipalityId: "DIGOS",
    title: "CAMP SABROS",
    address: "Sitio Barras, Upper Digos City",
    description:
      "Ex proident in aute exercitation velit voluptate est aliquip consectetur veniam deserunt velit eu. Quis voluptate sit occaecat sit irure proident adipisicing excepteur nulla do velit commodo amet. Occaecat officia dolor culpa cupidatat eu sunt ipsum deserunt qui incididunt ex adipisicing ad. Minim in eu dolore tempor esse exercitation reprehenderit do elit quis ipsum cupidatat amet est. Quis eiusmod qui nulla et fugiat esse labore nostrud sit mollit sunt nulla mollit tempor. Ad laborum proident eu do sint occaecat cillum ad id mollit id officia veniam amet. Est exercitation irure nisi dolor irure.",
    hostedBy: "Camp Sabros",
    thisPlaceOffers: [
      "ROUND TRIP CABLE LIFT",
      "TANDEM ZIPLINE 380 METERS",
      "TANDEM ZIPLINE 520 METERS",
      "ANDEM ZIPLINE 380 METERS, TANDEM ZIPLINE 520 METERS AND TANDEM/SOLO ZIPLINE RIDE 800 METERS PLUS HORSE BACK RIDING",
      "TANDEM/SOLO ZIPLINE RIDE 800 METERS",
      "HORSE BACK RIDING",
    ],
    affordability: "expensive",
    featuredImage:
      "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-1.jpg",
    imagesUrl: [
      "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-2.jpg",
      "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-3.jpg",
      "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-4.jpg",
      "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-5.jpg",
    ],
    isFeatured: true,
    ratings: 4.8,
  },
];
