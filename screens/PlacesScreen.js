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

import PlaceGridItem from "../components/PlaceGridItem";
import Color from "../constants/Color";

const PlacesScreen = (props) => {
  const municipalityId = props.navigation.getParam("municipalityId");

  const digosPlaces = [
    {
      id: "p1",
      municipalityId: "DIGOS",
      title: "RC160 Toner",
      address: "Sitio Mainit, Barangay Kapatagan",
      description: "Sample Description",
      hostedBy: "Farmer 1",
      thisPlaceOffers: [],
      affordability: "affordable",
      featuredImage:
        "https://cf.shopee.ph/file/4f35d768bf0f2fbe1d9866b366b7d32a",
      imagesUrl: [
        {
          uri: "https://cf.shopee.ph/file/4f35d768bf0f2fbe1d9866b366b7d32a",
        },
        {
          uri: "https://cf.shopee.ph/file/4f35d768bf0f2fbe1d9866b366b7d32a",
        },
        {
          uri: "https://cf.shopee.ph/file/4f35d768bf0f2fbe1d9866b366b7d32a",
        },
        {
          uri: "https://cf.shopee.ph/file/4f35d768bf0f2fbe1d9866b366b7d32a",
        },
      ],
      isFeatured: true,
      ratings: 4.5,
    },
    {
      id: "p2",
      municipalityId: "DIGOS",
      title: "DOUBLE DIAMOND",
      address: "Sitio Barras, Upper Digos",
      description: "Sample Description",
      hostedBy: "Farmer 2",
      thisPlaceOffers: [
      
      ],
      affordability: "expensive",
      featuredImage:
        "https://www.superprepper.com/wp-content/uploads/bag-of-rice-862x573.jpg",
      imagesUrl: [
        {
          uri: "https://www.superprepper.com/wp-content/uploads/bag-of-rice-862x573.jpg",
        },
        {
          uri: "https://www.superprepper.com/wp-content/uploads/bag-of-rice-862x573.jpg",
        },
        {
          uri: "https://www.superprepper.com/wp-content/uploads/bag-of-rice-862x573.jpg",
        },
        {
          uri: "https://www.superprepper.com/wp-content/uploads/bag-of-rice-862x573.jpg",
        },
      ],
      isFeatured: true,
      ratings: 4.8,
    },
    {
      id: "p200",
      municipalityId: "DIGOS",
      title: "NFA",
      address: "Digos City",
      description: `Sample Description.`,
      hostedBy: "Farmer 1",
      thisPlaceOffers: [],
      affordability: "expensive",
      featuredImage:
        "https://www.sukhiagro.com/wp-content/uploads/2019/02/Broken-Raw-1.png",
      imagesUrl: [
        {
          uri: "https://www.sukhiagro.com/wp-content/uploads/2019/02/Broken-Raw-1.png",
        },
        {
          uri: "https://www.sukhiagro.com/wp-content/uploads/2019/02/Broken-Raw-1.png",
        },
        {
          uri: "https://www.sukhiagro.com/wp-content/uploads/2019/02/Broken-Raw-1.png",
        },
        {
          uri: "https://www.sukhiagro.com/wp-content/uploads/2019/02/Broken-Raw-1.png",
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
        "Passig Islet in Barangay Bato and the Tagabuli Sea Rock Garden offers white sand beaches ideal for island hopping, scuba diving, and fishing while giving the tourists a view of the symbiotic relationship of the ecosystem in the highlands down to the coastal system.",
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
        "Colagsing Haven Beach Resort is hidden white sand paradise and a perfect getaway from the city that is located in Santa Maria, Davao del Sur. You’ll love the scenery and the water is clear!",
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
        "NIA Dam, Bansalan, Davao del Sur is one of the popular place listed under Reservoir in Bansalan.",
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
        "SULOP PEAK , considered the highest at 652 meters above sea level at sitio San Pedro, kiblagon, Sulop, Davao del Sur. It can be reached by 3 hrs trek from the center of the brgy. could will be made into a promenading area with the awe inspiring panoramic view of the whole municipality and the majestic Mt. Apo and Mt. Matutum and Davao Gulf as backdrop.",
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
      description: `The municipality of Matanao, Davao del Sur has numerous waterfalls in its entirety but only Anbang Falls boasts an impressive and unique rock formation forged as walls bordering the falls.

It takes around 5 minutes to descend the steps to see its beauty. A must-see spot for adventure seekers and nature lovers.`,
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
      description: `Mount Crocodile is located in Brgy. Piape, Padada Davao del Sur. It is formerly known as Piape Hill. GovernmenThis place is good for a short trek to the top and overnight stay for camping. It offers a breath taking view of the gulf of Padada, rice field and mountain range. Since it is a protected area, the Municipality of Padada had placed railings for camping area and developed the trail.`,
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
      description: `Lantawan Hagonoy is one of the tourist spot located in Mahayahay, Hagonoy.`,
      hostedBy: "Hagonoy Citizen",
      thisPlaceOffers: ["Mountain Top", "Fresh Air", "Nature Ambience"],
      affordability: "cheap",
      featuredImage:
        "https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/118770271_974637892963839_2148642067321557036_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFmYIdEc5X5WroJ5krIxbY9DotxvbHcDKEOi3G9sdwMoQ_zB6TKJx8IC0D6Ni7AIaFckA8UcJCJh87xaCuRlkCB&_nc_ohc=HLr2QIawOB4AX-ErIEI&_nc_ht=scontent.fcgy2-2.fna&oh=00_AT_aTBhdQz4mL_qu5poTlkLzLGnwB04Wu5WAFPVhXjLd4w&oe=62BA362F",
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
            routeName: "Detail",
            params: {
              placeData: itemData.item,
            },
          });
        }}
      />
    );
  };

  const renderHorizontalFlatList = (itemData) => {
    return (
      <View style={styles.horizontalItem}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate({
              routeName: "Detail",
              params: {
                placeData: itemData.item,
              },
            });
          }}
        >
          <ImageBackground
            source={{ uri: itemData.item.featuredImage }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {itemData.item.title}
              </Text>
            </View>
          </ImageBackground>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <View style={styles.horizontalList}>
        <Text style={styles.featured}>Featured Products</Text>
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={digosPlaces}
          renderItem={renderHorizontalFlatList}
          style={styles.horizontalFlatList}
        />
      </View>
      <FlatList numColumns={1} data={places} renderItem={renderGridItem} />
    </View>
  );
};

PlacesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("title"),
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
  horizontalFlatList: {},
  horizontalList: {
    height: 200,
    backgroundColor: "#fff6b8",
    marginBottom: 20,
  },
  horizontalItem: {
    flex: 1,
    flexDirection: "row",
    width: 250,
    margin: 10,
    borderRadius: 12,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
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

export default PlacesScreen;
