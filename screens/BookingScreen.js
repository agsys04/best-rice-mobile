import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import PlaceGridItem from "../components/PlaceGridItem";
import Color from "../constants/Color";
import CustomHeaderButton from "../components/HeaderButton";


const BookingScreen = (props) => {
  const municipalityId = "BANSALAN";

  const digosPlaces = [
    {
      id: "p1",
      municipalityId: "DIGOS",
      title: "MONTEFRIO GARDEN RESORT",
      address: "Sitio Mainit, Barangay Kapatagan",
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
        {
          uri: "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2326-1-1536x1025.jpg",
        },
        {
          uri: "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2329-3-1536x946.jpg",
        },
        {
          uri: "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2433-1536x1025.jpg",
        },
        {
          uri: "https://montefriogardenresort.com/wp-content/uploads/2021/12/DSC_2436-1536x1025.jpg",
        },
      ],
      isFeatured: true,
      ratings: 4.5,
    },
    {
      id: "p2",
      municipalityId: "DIGOS",
      title: "CAMP SABROS",
      address: "Sitio Barras, Upper Digos",
      description:
        "Ex proident in aute exercitation velit voluptate est aliquip consectetur veniam deserunt velit eu. Quis voluptate sit occaecat sit irure proident adipisicing excepteur nulla do velit commodo amet. Occaecat officia dolor culpa cupidatat eu sunt ipsum deserunt qui incididunt ex adipisicing ad. Minim in eu dolore tempor esse exercitation reprehenderit do elit quis ipsum cupidatat amet est. Quis eiusmod qui nulla et fugiat esse labore nostrud sit mollit sunt nulla mollit tempor. Ad laborum proident eu do sint occaecat cillum ad id mollit id officia veniam amet. Est exercitation irure nisi dolor irure.",
      hostedBy: "Camp Sabros",
      thisPlaceOffers: [
        "ROUND TRIP CABLE LIFT",
        "TANDEM ZIPLINE 380 METERS",
        "TANDEM ZIPLINE 520 METERS",
        "SOLO ZIPLINE RIDE 800 METERS",
        "TANDEM/SOLO ZIPLINE RIDE 800 METERS",
        "HORSE BACK RIDING",
      ],
      affordability: "expensive",
      featuredImage:
        "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-1.jpg",
      imagesUrl: [
        {
          uri: "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-1.jpg",
        },
        {
          uri: "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-2.jpg",
        },
        {
          uri: "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-3.jpg",
        },
        {
          uri: "https://res.cloudinary.com/campsabros/image/upload/v1622287820/slideshow/slide-4.jpg",
        },
      ],
      isFeatured: true,
      ratings: 4.8,
    },
  ];

  const staCruzPlaces = [
    {
      id: "p3",
      municipalityId: "STA_CRUZ",
      title: "PASSIG ISLET AQUA ECO PARK",
      address: "Bato, Sta. Cruz Davao del Sur",
      description:
        "Sint excepteur sint aute sint. Consectetur amet ut ipsum esse ex eu minim occaecat incididunt in non et. Ut ex cillum anim dolore esse anim qui. Deserunt excepteur laborum ad ipsum occaecat anim eiusmod velit adipisicing ut duis ex duis irure. Minim minim esse pariatur quis.",
      hostedBy: "Passig Islet",
      thisPlaceOffers: ["Cottage", "Unli Sea", "Boat"],
      affordability: "affordable",
      featuredImage:
        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/278002379_4870183449702718_310583717163613890_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFy9LbATfNkCsWkaA6OxAgx-OalnYIaGxL45qWdghobEg01xTLQ4Q0HRpwGNv8jBANJI_2uLamTz6N5WsNNcxmK&_nc_ohc=OM5946LKVM4AX_wt2aC&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8YTzTnp9o3TeEIaD0ghNHASe5wCxYAyAhitTQ4zuRrGg&oe=62990990",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/276997004_4870183389702724_7268415910799397378_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE4BTAouPDYwyetCjJViGUTLklojtSEmpYuSWiO1ISalpukpKuTgf_hGdRpAN9gITCL4NS9GmAf3yflC6YRV9_O&_nc_ohc=iwyyKHU7t5QAX_6IWr6&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9KiBBmYlKOYieo7f87m3zXWECliPBd2xZz2FUO5w2Stg&oe=62983313",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/278008018_4870183549702708_8600492038879201105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7H9uyUscQ0Nh8JhQYvxVvvtvShJaPfHe-29KElo98d1tk3nSjWyQIctlmEg-MaBSrUbjVVYU2g3AXrtpPwynL&_nc_ohc=k0TS2deMRgUAX-6xs2n&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_pRIg_ERZeK5L0X3nFzUhF7V59NgT14t31AQdbDePcnw&oe=629849EC",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/278018483_4870183589702704_6939740990928560074_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH8IRKPCKqPSi4EncJoIbdv6Xh2YxmELfPpeHZjGYQt8x_aSrsUli89mi7wJcyh5DKv1csVIyK0ANQBAItznz4d&_nc_ohc=K1a8YdQjcZ8AX9qWLLi&tn=0K9lhD6tDvarTI7z&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8f19OuEoBjWVJyJCts5byLNz9y55fPadGAuLXhMzVlaw&oe=6297E6BE",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/275173353_360647466066665_4087749483211134317_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFL3Xb3hOkjW4-G6k_zkKFVSybQpqLbDDhLJtCmotsMOJDKNqdfxNFX7MK7Vp7zf8b5mx6iJr950C1_QqmbFu7D&_nc_ohc=qVg8SJzgiz0AX_Tzmrf&tn=0K9lhD6tDvarTI7z&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_tOClH-UxUvmRwc5qGHf5KAXdqgIyAG95I659GkdYotw&oe=6297B29D",
        },
      ],
      isFeatured: true,
      ratings: 4.7,
    },
  ];

  const malalagPlace = [
    {
      id: "p4",
      municipalityId: "MALALAG",
      title: "COLAGSING HAVEN BEACH RESORT",
      address: "Colagsing, Barangay Tanglad 8011, Malalag",
      description:
        "Amet sint esse ullamco veniam deserunt voluptate aliqua cupidatat deserunt. Ut aliquip consequat irure sit reprehenderit incididunt adipisicing consectetur. Qui eiusmod ullamco ullamco aute officia commodo culpa magna sint exercitation do mollit fugiat ipsum.",
      hostedBy: "Colagsing",
      thisPlaceOffers: ["Cottage", "Unli Sea", "Boat", "Tent", "Karaoke"],
      affordability: "affordable",
      featuredImage:
        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/116376443_2687404688166763_5783115896688514012_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFfr-mT3XI5OScOUd4hptTaWXJxFxAO1FhZcnEXEA7UWKAZqXxbzKkqyvtfXiMDepLdI9wOevxdQhmyU_LU6-lj&_nc_ohc=_PqySAeP2QsAX8BLOlk&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_8hAbqj5tsgP3IivbAeZKW4cOujrKfBz6TsO6DjG4PaQ&oe=62B8F145",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/56536099_2303664776540758_7964659784030879744_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF36coHpN3Q02fMeV4RaZ7_R11eZjzLRHBHXV5mPMtEcPWKXdKrmY2y6PYxIVodQYwE1Cwa0QVw8igi3i8J8qDq&_nc_ohc=9OmqtMS_PysAX-CEdmf&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT-Tl9y7lpPKfbWEz_thqsVITqlsW24MWPv5AFfP9x8eOw&oe=62B71BE2",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/46860434_2223967927843777_2599368796573532160_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEQB9GmntM2IT9SUVb-RLCgPodYr_VSSbs-h1iv9VJJu4LfKKRE-ye4mQjztYmnkWOBR2qvxjgieSHHsYKlhTvm&_nc_ohc=1zZRl-AT4_0AX-WGovE&tn=0K9lhD6tDvarTI7z&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9Oy8Iy6qO4-fnAX1hh6eiN8DS1Y0QjidsQ-Fzmbmk4pQ&oe=62B7A15B",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/46892951_2223955734511663_4004694181862703104_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmfnkrWOo1GDQQq9ZDcimcTE6WBxbJXKVMTpYHFslcpeJTszunYFIFxrrw6HyJvTuAPoVu__JM57s5e-DxWFKR&_nc_ohc=Kow3nMJc19MAX-vPf3P&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_S3frDI4vt-Yxey-JA-cv8vyfBp8Y8CRmRwMge1KD2Aw&oe=62B772E6",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/46730511_2223955564511680_5364551574477602816_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFFFHrt7ohF8Tr4lUPbdZhGtPytF72Rv8C0_K0XvZG_wNhg0ljQIfxtk6Pg_upNP_ehoLseJAcMjaU-uefSOHQf&_nc_ohc=oLi6H9wC8roAX9E3ZnS&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9NSYxMgND-Nro1IZcPQGJC_vM-4Vbljd8Vx3q0D1prnw&oe=62B967FB",
        },
      ],
      isFeatured: false,
      ratings: 4.6,
    },
  ];

  const bansalanPlace = [
    {
      id: "p5",
      municipalityId: "BANSALAN",
      title: "NIA DAM",
      address: "NIA DAM, BANSALAN",
      description:
        "Excepteur ea qui minim minim consectetur. Sint in dolor ex ipsum laboris ipsum non fugiat labore pariatur nulla pariatur voluptate cupidatat. Laborum minim adipisicing sunt sint aliqua reprehenderit sint aute.",
      hostedBy: "NIA",
      thisPlaceOffers: ["Water Slide"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/70771593_134942877798825_1509525629807099904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG6Ux74SeWfnd3Q9Fmfw0H6JbLU3C1HVCIlstTcLUdUIiWpRYHpsxtOY7asWbgXuBHiSDWpbRdQSAd6otPeDj2y&_nc_ohc=fSSF7nXnyswAX84hMwT&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8r4xT-6TfFgcYHkrd6VFEafc9gI_ECotmKL3eP_kgeAA&oe=62B74523",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/70771593_134942877798825_1509525629807099904_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG6Ux74SeWfnd3Q9Fmfw0H6JbLU3C1HVCIlstTcLUdUIiWpRYHpsxtOY7asWbgXuBHiSDWpbRdQSAd6otPeDj2y&_nc_ohc=fSSF7nXnyswAX84hMwT&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8r4xT-6TfFgcYHkrd6VFEafc9gI_ECotmKL3eP_kgeAA&oe=62B74523",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/186543135_161926905899934_2773844588926523424_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGgeKTrdLOCHeS-S4-lVCc01KnmOnhcXenUqeY6eFxd6c5YD_FsBu_u_oCYgEHQ4CLYOjjctfycF-e5HD31Es2L&_nc_ohc=1XYPJxuL0hkAX9HCioj&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8ht8Xq_3gY74gxEZyWcAoix_yypuEec-KzWIEa2dievQ&oe=62BAA9B4",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/188348536_161926855899939_5628584604983286121_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGV3rz_k4viTxpwVI8hn3s2CRerKW74KYoJF6spbvgpiq_rVtVdtDejWTtsbliMwSyZ-4TMbWSNFuM76mSiPHtd&_nc_ohc=YLfoQYzd1MkAX9UURXA&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9gcQtSsd6eSjTcm5dzfT6M39TqmXS9Zf0xt6QgG-otwQ&oe=62B9D660",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/187360525_161926832566608_2930174620118478327_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXwe-cGn-NIVp8WAJGIK61Dka6nqluAKIORrqeqW4Aoh30mHJciPhqdNPCKFoiVylRszgN1ZFFJ_t9q_V5JeW2&_nc_ohc=M5gfXNTGSa0AX-czxB7&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8kauXfEWeVOjGhuPcflmtNHpDjQC2BcUQ5LenBvRW_VQ&oe=62B99362",
        },
      ],
      isFeatured: false,
      ratings: 4.6,
    },
  ];

  const sulopPlace = [
    {
      id: "p6",
      municipalityId: "SULOP",
      title: "SULOP PEAK",
      address: "Sitio, San Pedro, Sulop",
      description:
        "Commodo ad dolore nulla velit magna adipisicing consectetur quis nulla cupidatat et. Excepteur qui id elit exercitation quis Lorem ex excepteur officia incididunt pariatur consectetur deserunt. Minim ut consequat ipsum laborum. Ad fugiat cupidatat ex exercitation nisi cupidatat labore. Ad dolore minim eiusmod laborum quis ut labore irure aliquip consequat dolore. Nostrud reprehenderit ea veniam est adipisicing esse.",
      hostedBy: "Sulop Citizen",
      thisPlaceOffers: ["Site Seing", "Horse Riding"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/111691023_3438312359546454_3075119955295193421_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEce5lggChPs8S27APufTljj8LMXTp-TVmPwsxdOn5NWXj7NCVKSeconMGkCJj0pnP7p3apwSGuMCQSKOXDDJey&_nc_ohc=mXjJQ9KO7esAX9vC_Zv&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT9PuimU5egTQfgjM9omwxqKDtSqPTGaaiSzJrALMGIjog&oe=62B7689D",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/117931586_3521182537926102_2507587441450260589_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGK1i6k4hrOXP0Id1jFoWjTt6SJ1TQgQ_S3pInVNCBD9A2PrM3i3GmKhEsixnaOPwCQwGu6b5i3juXS6tFuBwXS&_nc_ohc=W2G3NP-_-HAAX9qAXjK&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-a1FIhAPTC5LHXhlIkdli0kxNa7GeRGuZIyV9pXzv-NQ&oe=62B7D1A3",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/117749294_3521183201259369_4641728784647549425_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFPLR2UxqJH5GWKhy-xMvCOAEikZhcW2CMASKRmFxbYI1bflN0Sce-_0x0qgUQcDaGYKU0L5jr3gvP5NmiTomNO&_nc_ohc=pZbj4LUrUg8AX8R_0fC&tn=0K9lhD6tDvarTI7z&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_WZvdvjoGq17bLu-gX9aHBE45H1KY2ROiMdlTzcxnyEQ&oe=62B9F2E0",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/117943431_3521183564592666_5041571300619106357_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEX4Qp2QM9NHDb4lGLqslbJ5-VZNFgs7OTn5Vk0WCzs5NHk_3IhVLGXbzaYJwoImI-k3AqZ5H4MYQYb2cLUpwK0&_nc_ohc=me79yrWZKMIAX9w8DV8&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT-Qq5ZW5Rz8Xl1qtchc7P8IOU7BpvWrkkamMQwODdAhKA&oe=62B8C0D6",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/117756972_3521184107925945_2308754827040058055_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGDIvU8s10h2IuXbRTYtl6P2mlHT-xo-draaUdP7Gj52kFLxWlMR_s_ODaFOmrAuoZdUeqDS_8xNjov-eUmLyKf&_nc_ohc=fRX2kyEyVFAAX-8vJCQ&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT87O88Ur9Ve9kr6R6p0jA8jsViKNyWGTzxejR9_QFIKyQ&oe=62B748EF",
        },
      ],
      isFeatured: false,
      ratings: 4.2,
    },
  ];

  const matanaoPlace = [
    {
      id: "p7",
      municipalityId: "MATANAO",
      title: "ANBANG FALLS",
      address: "Matanao",
      description:
        "Aliquip sint velit consectetur sit Lorem labore est ipsum proident anim ad. Qui nostrud et veniam ad sit. Adipisicing ipsum nulla ullamco Lorem dolor nulla non amet laborum mollit. Consectetur aliquip duis nulla Lorem aliqua amet est tempor id pariatur ullamco quis.",
      hostedBy: "Sulop Citizen",
      thisPlaceOffers: ["Site Seing", "Falls", "Nature Ambience"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/247348664_6646233055417359_6998173242293894835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7_h1tImYWgnwq1XyGPE_pJO02YTElJY4k7TZhMSUljlABlvcV-f4wfzQs4QR3vH9YGLvE6c5k2DenRS3MdzLf&_nc_ohc=732hBpl7_zcAX_VqT1S&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-FRooMmja7Mj5aBb-FNr9pAqsDGuwpcA8WLJHQBKrtqg&oe=6297FF8D",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/247348664_6646233055417359_6998173242293894835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7_h1tImYWgnwq1XyGPE_pJO02YTElJY4k7TZhMSUljlABlvcV-f4wfzQs4QR3vH9YGLvE6c5k2DenRS3MdzLf&_nc_ohc=732hBpl7_zcAX_VqT1S&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-FRooMmja7Mj5aBb-FNr9pAqsDGuwpcA8WLJHQBKrtqg&oe=6297FF8D",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/177834018_2571744263119537_9101943539151824437_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEK0v3dEVG8K9nhEIETRPS_-qLacgLfQD_6otpyAt9AP8fOAukoBwHNUaizBQNMu81uWMamAjyIRfxGbqHLjH36&_nc_ohc=Obgd0dYrPt8AX-M2MB3&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT8UAIRTdeOygLm304gRHN3cCjQckpn47xCZgD2UQ5OEkA&oe=62B71AF6",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/262782486_4683434938436868_5139912729492370288_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEDd7fWZHfyvXNF1fX8lUwZ5GU9FzqnJKnkZT0XOqckqaT0DUV-CW5sMbb805iLUCYWxwnyEZJIKCsPH7BM-JHo&_nc_ohc=bXREQ8SBWgAAX87AC8G&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT-3bhstXP90atxOeVCMU9sPM71Xr7Aq7AFXRDSQUYtd8w&oe=6298F302",
        },
        {
          uri: "https://i.ytimg.com/vi/qDjPaPay7Ao/maxresdefault.jpg",
        },
      ],
      isFeatured: false,
      ratings: 4.2,
    },
  ];

  const padadaPlace = [
    {
      id: "p8",
      municipalityId: "PADADA",
      title: "CROCODILE HILL",
      address: "Crocodile Hill, Piape, Padada",
      description:
        "Lorem dolore culpa consequat Lorem eiusmod consequat dolore deserunt et reprehenderit commodo magna sunt. Eiusmod esse cillum quis eiusmod consequat elit aliquip. Excepteur minim nostrud minim veniam nulla incididunt quis consequat commodo culpa. Do deserunt labore est est et eiusmod laboris officia ut ipsum duis occaecat. Eiusmod commodo ad occaecat et dolor laborum in consectetur ad. Tempor excepteur incididunt non aliqua laboris nostrud. Anim enim commodo excepteur laborum exercitation qui adipisicing est minim nulla commodo.",
      hostedBy: "Padada Citizen",
      thisPlaceOffers: ["Mountain Top", "Fresh Air", "Nature Ambience"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/131983380_10208636773193271_7531482218734816404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeECLbs5pw0JfrmuPZtRsUf_cNSabYYqO81w1Jpthio7zaO7cBQluyQDUi8bw9Lg9ntCNHSDlwN1cHD2H4RxYKLF&_nc_ohc=4IFxztrT2H8AX_P-AHX&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8f3VlZCAlIDCP1PJLdu61mTIqoemr3hR3HYqzfCdPzZQ&oe=62B8D33C",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/131983380_10208636773193271_7531482218734816404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeECLbs5pw0JfrmuPZtRsUf_cNSabYYqO81w1Jpthio7zaO7cBQluyQDUi8bw9Lg9ntCNHSDlwN1cHD2H4RxYKLF&_nc_ohc=4IFxztrT2H8AX_P-AHX&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT8f3VlZCAlIDCP1PJLdu61mTIqoemr3hR3HYqzfCdPzZQ&oe=62B8D33C",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/132012753_10208636774033292_7340496890243407415_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7KWPBLNLa_ImCgvrzuXnvupKpPOK36ZK6kqk84rfpkhgGbE9ljVvo3Iw_GZp2NfgM1jwkDIW3ptGaUSVoiImo&_nc_ohc=MUxvKggkkYMAX-ba60l&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT9QTED1udT3CKy6n4ptu6jBSF99YWLM0fuq8zl8cs3jgg&oe=62B8871C",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/131985419_10208636776113344_6187513655379131244_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHNUW9NZrPpg6PkkZmFTqtOfTGdCNpnYqR9MZ0I2mdipFj-tWhipbQor3hwbPaOYIk82ocgplbz_45KU7IkDh_i&_nc_ohc=rYaRvjAW8d4AX9EGoxK&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT_bCCY-mu9D2bxxlYyPV41x-9vlyDWlDo9AOCRJaRKmLg&oe=62B829ED",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/131984370_10208636770433202_4633400544678432329_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHrGEA3CxzSX3PC5YQjvevUIBBT_T5AX4QgEFP9PkBfhOpYxBMS9BgLTd7jsEzlBhn3AAK7C2Z9g_IzYK6coBmB&_nc_ohc=KUUzx_iH08AAX_GPUcJ&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_TS9SSgQZFw8XBH8GXuE0lp6DhkZekzwcNPXkHpZFLVQ&oe=62B86BFD",
        },
      ],
      isFeatured: false,
      ratings: 4.2,
    },
  ];

  const hagonoyPlace = [
    {
      id: "p9",
      municipalityId: "HAGONOY",
      title: "LANTAWAN HILL",
      address: "Lantawan, Mahayahay, Hagonoy",
      description:
        "Irure aute velit id ullamco do irure do culpa qui. Exercitation ex id id mollit Lorem tempor commodo id irure nulla dolore incididunt. Enim sint nulla excepteur eu et voluptate fugiat eiusmod labore.",
      hostedBy: "Hagonoy Citizen",
      thisPlaceOffers: ["Mountain Top", "Fresh Air", "Nature Ambience"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t1.6435-9/118844523_974637906297171_5176416118934483948_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE9yn--X4OAvmF6WQdeCgFUsfVlzDjmrzmx9WXMOOavOfJQB4mYw7x3u2NsoNXFhebHqolTo0CRtH8eVyRSrIzp&_nc_ohc=azO-68IxjJIAX8_nJKL&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-46QUrVQoSWbXIy8yMl5qqhwnLZeHF44t_Lcip2btyEg&oe=62B89978",
      imagesUrl: [
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/118770271_974637892963839_2148642067321557036_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFmYIdEc5X5WroJ5krIxbY9DotxvbHcDKEOi3G9sdwMoQ_zB6TKJx8IC0D6Ni7AIaFckA8UcJCJh87xaCuRlkCB&_nc_ohc=HLr2QIawOB4AX-ErIEI&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_aTBhdQz4mL_qu5poTlkLzLGnwB04Wu5WAFPVhXjLd4w&oe=62BA362F",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/118614532_974637882963840_7853273912950286107_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFSKd0F0ypy1JImNFxYqAww2JQUY9w_iInYlBRj3D-IiYk4Yf_YyIICzXSteHw_usVExvoBczx31ewZDKi7mk47&_nc_ohc=HON6V1tVTHoAX9ZqURT&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT-OwuVtZ_E4pzibwAgpW9W3oFpdaSeFkWy1SyGEp1HDKQ&oe=62B8853E",
        },
        {
          uri: "https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/238992207_644995346474838_4220638493175724407_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH3CHu9_APH2u6gcTRf5gC_-FNQiNkidy74U1CI2SJ3LtVUXLYViUxslGqt5qjzPaDvTeNejRT3_MDBbY72v1fA&_nc_ohc=6mEdwaxsWRIAX8xuulQ&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT9Ap2QMjRzu6JdJhDROFok1UMnQcwWkgZUgEKF9IbudQw&oe=62983B10",
        },
        {
          uri: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/240586308_3083472075311794_4983906812333465930_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGJjV3FdEwtCTNJXHThBga_ZVY3hTv26RVlVjeFO_bpFQiIZ919JRpn5WmLGibisomnLOTcNaSWUBkcDfGaI5i1&_nc_ohc=QC5klhzII9IAX8gSK0F&_nc_ht=scontent.fcgy2-1.fna&oh=00_AT-IGVwR51ljwh_mPPd3TNJF1cMjUL25saDC0_Pbn41Bqg&oe=6297D2D2",
        },
      ],
      isFeatured: false,
      ratings: 4.2,
    },
  ];

  let places = [];

  if (municipalityId === "DIGOS") {
    places = digosPlaces;
  }

  if (municipalityId === "STA_CRUZ") {
    places = staCruzPlaces;
  }

  if (municipalityId === "MALALAG") {
    places = malalagPlace;
  }

  if (municipalityId === "BANSALAN") {
    places = bansalanPlace;
  }

  if (municipalityId === "SULOP") {
    places = sulopPlace;
  }

  if (municipalityId === "MATANAO") {
    places = matanaoPlace;
  }

  if (municipalityId === "PADADA") {
    places = padadaPlace;
  }

  if (municipalityId === "HAGONOY") {
    places = hagonoyPlace;
  }

  const renderGridItem = (itemData) => {
    return (
      <PlaceGridItem
        title={itemData.item.title}
        affordability={itemData.item.affordability.toUpperCase()}
        featuredImage={itemData.item.featuredImage}
        ratings={itemData.item.ratings}
        onSelectPlace={() => {
          props.navigation.navigate({
            routeName: "BookingDetail",
            params: {
              placeData: itemData.item,
            },
          });
        }}
      />
    );
  };


  return (
    <View style={styles.list}>
      <FlatList numColumns={1} data={places} renderItem={renderGridItem} />
    </View>
  );
};

BookingScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Booking Requests",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 18,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  featured: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
});

export default BookingScreen;
