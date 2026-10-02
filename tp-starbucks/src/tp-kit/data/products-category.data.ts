export type ProductsCategoryData = {
  id: number;
  name: string;
  slug: string;
  products: ProductData[]
};

export type ProductData = {
  id: number;
  name: string;
  desc: string | null;
  slug: string;
  path: string;
  img: string;
  price: number;
};

export const PRODUCTS_CATEGORY_DATA: ProductsCategoryData[] = [
  {
    "id": 1,
    "name": "Latte",
    "products": [
      {
        "name": "Iced Brown Sugar Oat Shaken Espresso",
        "desc": "Boisson glacée à base d'espresso, boisson végétale Avoine et sirop saveur sucre roux",
        "img": "/img/SBX_DEL_1200x1200_Iced_Brown_Sugar_Shaken_Espresso.jpg.webp",
        "id": 1,
        "slug": "iced-brown-sugar-oat-shaken-espresso",
        "price": 8.65,
        "path": "latte/iced-brown-sugar-oat-shaken-espresso"
      },
      {
        "name": "Café Latte",
        "desc": "L'intensité de notre espresso rencontre la douceur du lait chauffé à la vapeur, le tout recouvert d'une fine couche de mousse de lait.",
        "img": "/img/SBX_DEL_1200x1200_Latte_OPT2.jpg.webp",
        "id": 2,
        "slug": "cafe-latte",
        "price": 5.43,
        "path": "latte/cafe-latte"
      },
      {
        "name": "Iced Latte",
        "desc": "L'intensité de notre espresso rencontre la douceur du lait, servi recouvert de glaçons.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Cafe_Latte.jpg.webp",
        "id": 3,
        "slug": "iced-latte",
        "price": 4.93,
        "path": "latte/iced-latte"
      },
      {
        "name": "Latte Macchiato",
        "desc": "Du lait chaud taché d'un espresso.",
        "img": "/img/SBX_DEL_1200x1200_Latte_Macchiato.jpg.webp",
        "id": 4,
        "slug": "latte-macchiato",
        "price": 4.08,
        "path": "latte/latte-macchiato"
      },
      {
        "name": "Caramel Macchiato",
        "desc": "Du lait chaud saveur vanille taché d'un espresso surmonté d'un nappage saveur caramel.",
        "img": "/img/SBX_DEL_1200x1200_Caramel_Macchiato.jpg.webp",
        "id": 5,
        "slug": "caramel-macchiato",
        "price": 4.06,
        "path": "latte/caramel-macchiato"
      },
      {
        "name": "Iced Caramel Macchiato",
        "desc": "Du lait saveur vanille taché d'un espresso surmonté d'un nappage saveur caramel, servi glacé.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Caramel_Macchiato.jpg.webp",
        "id": 6,
        "slug": "iced-caramel-macchiato",
        "price": 7.02,
        "path": "latte/iced-caramel-macchiato"
      },
      {
        "name": "Cappuccino",
        "desc": "Un espresso surmonté d'une onctueuse couche de mousse de lait.",
        "img": "/img/SBX_DEL_1200x1200_Cappuccino.jpg.webp",
        "id": 7,
        "slug": "cappuccino",
        "price": 7.77,
        "path": "latte/cappuccino"
      },
      {
        "name": "Iced Cappuccino",
        "desc": "Espresso sucré et mousse onctueuse de lait froid - Disponible avec un espresso non sucré.",
        "img": "/img/SBX_DEL_1200x1200_Classic_Iced_Cappuccino.jpg.webp",
        "id": 8,
        "slug": "iced-cappuccino",
        "price": 7.56,
        "path": "latte/iced-cappuccino"
      },
      {
        "name": "Ristretto Bianco",
        "desc": "Du lait chauffé à la vapeur savamment versé sur deux shots d'espresso.",
        "img": "/img/Starbucks_FR_Website_600x600_Ristretto_Bianco_Flat_White.jpg.webp",
        "id": 9,
        "slug": "ristretto-bianco",
        "price": 5.26,
        "path": "latte/ristretto-bianco"
      },
      {
        "name": "Cold Brew Latte",
        "desc": "Notre café Cold Brew mélangé avec du lait.",
        "img": "/img/SBX_DEL_1200x1200_Cold_Brew_Latte.jpg.webp",
        "id": 10,
        "slug": "cold-brew-latte",
        "price": 3.17,
        "path": "latte/cold-brew-latte"
      },
      {
        "name": "Salted Caramel Cream Cold Brew",
        "desc": "Notre café cold brew super onctueux, mélangé avec une touche de vanille et couronné d'une riche mousse au caramel salé. La combinaison parfaite du salé et du sucré.",
        "img": "/img/SBX_DEL_1200x1200_Salted_Caramel_Cream_Cold_Brew.jpg.webp",
        "id": 11,
        "slug": "salted-caramel-cream-cold-brew",
        "price": 8.74,
        "path": "latte/salted-caramel-cream-cold-brew"
      }
    ],
    "slug": "latte"
  },
  {
    "id": 2,
    "name": "Frappuccino Café",
    "products": [
      {
        "name": "Chocolatey Waffle Cone Coffee Frappuccino",
        "desc": "Mélange de café torréfié Frappuccino et de délicieux sirop saveur crème mélangé à du lait, sauce saveur chocolat le tout combiné avec un sirop saveur gaufrette et de la glace pilée, recouverts de crème fouettée et éclats de gaufrette",
        "img": "/img/SBX_DEL_1200x1200_ChocolateyWaffleConeCoffeeFrappuccino.jpg.webp",
        "id": 12,
        "slug": "chocolatey-waffle-cone-coffee-frappuccino",
        "price": 3.72,
        "path": "frappuccino-cafe/chocolatey-waffle-cone-coffee-frappuccino"
      },
      {
        "name": "Choco Chip",
        "desc": "Sauce saveur chocolat et pépites de chocolat Frappuccino combinées à du sirop saveur café et du lait, mélangés à de la glace pilée, garnis de crème fouettée et d'un filet de sirop saveur chocolat.",
        "img": "/img/SBX_DEL_1200x1200_Java_Chip_Frappuccino.jpg.webp",
        "id": 13,
        "slug": "choco-chip",
        "price": 6.51,
        "path": "frappuccino-cafe/choco-chip"
      },
      {
        "name": "Coffee",
        "desc": "Café torréfié Frappuccino et lait, mélangés à de la glace pilée, recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Coffee_Frappuccino.jpg.webp",
        "id": 14,
        "slug": "coffee",
        "price": 8.78,
        "path": "frappuccino-cafe/coffee"
      },
      {
        "name": "Espresso",
        "desc": "Sirop saveur café ajouté à un shot d'espresso et du lait, mélangés à de la glace pilée, recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Espresso_Frappuccino.jpg.webp",
        "id": 15,
        "slug": "espresso",
        "price": 7.96,
        "path": "frappuccino-cafe/espresso"
      },
      {
        "name": "Café Caramel",
        "desc": "Sirop saveur caramel, café et lait, mélangés à de la glace pilée, recouvert d'une crème fouettée et d'une sauce saveur caramel.",
        "img": "/img/SBX_DEL_1200x1200_Caramel_Frappuccino.jpg.webp",
        "id": 16,
        "slug": "cafe-caramel",
        "price": 4.39,
        "path": "frappuccino-cafe/cafe-caramel"
      },
      {
        "name": "Mocha",
        "desc": "Sirop saveur chocolat, café torréfié Frappuccino et lait, mélangés à de la glace pilée, recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Mocha_Frappuccino.jpg.webp",
        "id": 17,
        "slug": "frappuccino-cafe-mocha",
        "price": 7.2,
        "path": "frappuccino-cafe/frappuccino-cafe-mocha"
      },
      {
        "name": "Mocha Blanc",
        "desc": "Sirop saveur chocolat blanc, café torréfié Frappuccino et lait, mélangés à de la glace pilée, recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_White_Mocha_Frappuccino.jpg.webp",
        "id": 18,
        "slug": "frappuccino-cafe-mocha-blanc",
        "price": 4.46,
        "path": "frappuccino-cafe/frappuccino-cafe-mocha-blanc"
      }
    ],
    "slug": "frappuccino-cafe"
  },
  {
    "id": 3,
    "name": "Spécialités Espresso",
    "products": [
      {
        "name": "Mocha",
        "desc": "Un espresso riche et corsé, mélangé avec du sirop saveur chocolat et du lait chauffé à la vapeur.",
        "img": "/img/Starbucks_FR_Website_600x600_Mocha.jpg.webp",
        "id": 19,
        "slug": "mocha",
        "price": 5.75,
        "path": "specialites-espresso/mocha"
      },
      {
        "name": "Iced Mocha",
        "desc": "Un espresso riche et corsé, mélangé avec du sirop saveur chocolat, du lait et des glaçons, surmonté de crème fouettée sucrée.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Mocha.jpg.webp",
        "id": 20,
        "slug": "iced-mocha",
        "price": 3.82,
        "path": "specialites-espresso/iced-mocha"
      },
      {
        "name": "Mocha Blanc",
        "desc": "Un espresso riche et corsé, mélangé avec du sirop saveur chocolat blanc, du lait et des glaçons.",
        "img": "/img/Starbucks_FR_Website_600x600_White_Mocha.jpg.webp",
        "id": 21,
        "slug": "mocha-blanc",
        "price": 8.5,
        "path": "specialites-espresso/mocha-blanc"
      },
      {
        "name": "Iced Mocha Blanc",
        "desc": "Un espresso riche et corsé, mélangé avec du sirop saveur chocolat blanc et du lait, versé sur des glaçons et surmonté de crème fouettée sucrée.",
        "img": "/img/SBX_DEL_1200x1200_Iced_White_Mocha.jpg.webp",
        "id": 22,
        "slug": "iced-mocha-blanc",
        "price": 7.28,
        "path": "specialites-espresso/iced-mocha-blanc"
      }
    ],
    "slug": "specialites-espresso"
  },
  {
    "id": 4,
    "name": "Café Noir",
    "products": [
      {
        "name": "Americano",
        "desc": "Shots d'espresso couverts d'eau chaude, générant une fine couche crémeuse.",
        "img": "/img/SBX_DEL_1200x1200_Americano.jpg.webp",
        "id": 23,
        "slug": "americano",
        "price": 5.43,
        "path": "cafe-noir/americano"
      },
      {
        "name": "Iced Americano",
        "desc": "Shots d'espresso couverts d'eau, générant une fine couche crémeuse, versé sur des glaçons.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Americano.jpg.webp",
        "id": 24,
        "slug": "iced-americano",
        "price": 4.75,
        "path": "cafe-noir/iced-americano"
      },
      {
        "name": "Café Filtre",
        "desc": "Café de torréfaction moyenne, doux, équilibré et riche en saveur.",
        "img": "/img/SBX_DEL_1200x1200_Fresh_Brewed_Coffee.jpg.webp",
        "id": 25,
        "slug": "cafe-filtre",
        "price": 5.8,
        "path": "cafe-noir/cafe-filtre"
      },
      {
        "name": "Café Filtre Glacé",
        "desc": "Café de torréfaction moyenne, doux, équilibré et riche en saveur, servi glacé.",
        "img": "/img/Starbucks_FR_Deliveroo_1200x1200_Iced_Brewed_Coffee___Cafe_Filtre_Glace.jpg.webp",
        "id": 26,
        "slug": "cafe-filtre-glace",
        "price": 5.14,
        "path": "cafe-noir/cafe-filtre-glace"
      },
      {
        "name": "Cold Brew",
        "desc": "Notre café Cold Brew est préparé à la main et trempé lentement dans de l'eau froide pendant 20 heures, lui procurant une saveur très douce.",
        "img": "/img/SBX_DEL_1200x1200_Cold_Brew.jpg.webp",
        "id": 27,
        "slug": "cold-brew",
        "price": 8.96,
        "path": "cafe-noir/cold-brew"
      },
      {
        "name": "Espresso",
        "desc": "Une dose d’espresso. Rien de plus.",
        "img": "/img/SBX_DEL_1200x1200_Espresso.jpg.webp",
        "id": 28,
        "slug": "cafe-noir-espresso",
        "price": 8.05,
        "path": "cafe-noir/cafe-noir-espresso"
      },
      {
        "name": "Espresso Macchiato",
        "desc": "Un espresso agrémenté d'un nuage de mousse de lait.",
        "img": "/img/SBX_DEL_1200x1200_Espresso_Macchiato.jpg.webp",
        "id": 29,
        "slug": "espresso-macchiato",
        "price": 3.67,
        "path": "cafe-noir/espresso-macchiato"
      },
      {
        "name": "Espresso Con Pana",
        "desc": "Un espresso surmonté de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Espresso_Con_Pana.jpg.webp",
        "id": 30,
        "slug": "espresso-con-pana",
        "price": 3.7,
        "path": "cafe-noir/espresso-con-pana"
      }
    ],
    "slug": "cafe-noir"
  },
  {
    "id": 5,
    "name": "Frappuccino Crème",
    "products": [
      {
        "name": "Chocolatey Waffle Cone Cream Frappuccino",
        "desc": "Délicieux sirop saveur crème mélangé à du lait, sauce saveur chocolat le tout combiné avec un sirop saveur gaufrette et de la glace pilée, recouverts de crème fouettée et éclats de gaufrette",
        "img": "/img/SBX_DEL_1200x1200_ChocolateyWaffleConeCreamFrappuccino.jpg.webp",
        "id": 31,
        "slug": "chocolatey-waffle-cone-cream-frappuccino",
        "price": 7.76,
        "path": "frappuccino-creme/chocolatey-waffle-cone-cream-frappuccino"
      },
      {
        "name": "Strawberry Waffle Cone Frappuccino",
        "desc": "Délicieux sirop saveur crème mélangé à du lait, sirop à la fraise saveur fraise, sirop saveur gaufrette et de la glace pilée, recouverts de crème fouettée et éclats de gaufrette",
        "img": "/img/SBX_DEL_1200x1200_StrawberryWaffleConeFrappuccino.jpg.webp",
        "id": 32,
        "slug": "strawberry-waffle-cone-frappuccino",
        "price": 3.73,
        "path": "frappuccino-creme/strawberry-waffle-cone-frappuccino"
      },
      {
        "name": "Cookie & Cream",
        "desc": "Mélange parfait de Frappuccino, crémeux et glacé, avec des éclats de biscuits chocolatés, garni de crème fouettée et recouvert de biscuits chocolatés.",
        "img": "/img/SBX_DEL_1200x1200_Cookies_and_Cream_Frappuccino.jpg.webp",
        "id": 33,
        "slug": "cookie-and-cream",
        "price": 5.64,
        "path": "frappuccino-creme/cookie-and-cream"
      },
      {
        "name": "Crème Choco Chip",
        "desc": "Sirop saveur chocolat, pépites de chocolat et du lait, mélangés avec de la glace pilée et recouverts de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Chocolate_Chip_Cream_Frappuccino_0.jpg.webp",
        "id": 34,
        "slug": "creme-choco-chip",
        "price": 5.5,
        "path": "frappuccino-creme/creme-choco-chip"
      },
      {
        "name": "Frappuccino Coco Choco",
        "desc": "Boisson végétale Coco, sauce chocolat, crème fouettée nappage chocolat.",
        "img": "/img/SBX_DEL_1200x1200_Choco_Coconut_Delight.jpg.webp",
        "id": 35,
        "slug": "frappuccino-coco-choco",
        "price": 3.75,
        "path": "frappuccino-creme/frappuccino-coco-choco"
      },
      {
        "name": "Fraise à la Crème",
        "desc": "Sirop de crème Frappuccino mélangé à du lait, du sirop saveur fraise et de la glace pilée, recouverts de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Strawberries_and_Cream_Frappuccino.jpg.webp",
        "id": 36,
        "slug": "fraise-a-la-creme",
        "price": 6.66,
        "path": "frappuccino-creme/fraise-a-la-creme"
      },
      {
        "name": "Vanille",
        "desc": "Sirop saveur vanille et lait, mélangés à de la glace pilée et recouverts de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Vanilla_Cream_Frappuccino.jpg.webp",
        "id": 37,
        "slug": "vanille",
        "price": 4.91,
        "path": "frappuccino-creme/vanille"
      },
      {
        "name": "Crème Caramel",
        "desc": "Sirop de crème Frappuccino mélangé avec du lait, du sirop saveur caramel et de la glace pilée, garnis de crème fouettée et d'un nappage saveur caramel.",
        "img": "/img/SBX_DEL_1200x1200_Caramel_Cream_Frappuccino.jpg.webp",
        "id": 38,
        "slug": "creme-caramel",
        "price": 3.68,
        "path": "frappuccino-creme/creme-caramel"
      },
      {
        "name": "Crème Chocolat",
        "desc": "Le goût riche et crémeux du sirop saveur chocolat, mélangé à du lait, recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Chocolate_Cream_Frappuccino.jpg.webp",
        "id": 39,
        "slug": "creme-chocolat",
        "price": 3.61,
        "path": "frappuccino-creme/creme-chocolat"
      },
      {
        "name": "Crème Chocolat Blanc",
        "desc": "Un doux mélange de sirop saveur chocolat blanc, de lait et de glace pilée, recouverts de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_White_Chocolate_Cream_Frappuccino.jpg.webp",
        "id": 40,
        "slug": "creme-chocolat-blanc",
        "price": 3.2,
        "path": "frappuccino-creme/creme-chocolat-blanc"
      },
      {
        "name": "Frappuccino Chai Tea",
        "desc": "Un mélange crémeux de thé chai épicé, de lait et de glace complété par de la crème fouettée et une pincée de cannelle.",
        "img": "/img/SBX_DEL_1200x1200_Chai_Tea_Cream_Frappuccino.jpg.webp",
        "id": 41,
        "slug": "frappuccino-chai-tea",
        "price": 6.99,
        "path": "frappuccino-creme/frappuccino-chai-tea"
      },
      {
        "name": "Frappuccino Matcha",
        "desc": "Essayez votre Matcha préféré dans un Frappuccino - Le Matcha est combiné avec du lait et de la vanille et garni de crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_Matcha_Cream_Frappuccino.jpg.webp",
        "id": 42,
        "slug": "frappuccino-matcha",
        "price": 3.2,
        "path": "frappuccino-creme/frappuccino-matcha"
      }
    ],
    "slug": "frappuccino-creme"
  },
  {
    "id": 6,
    "name": "Chocolats Chauds & Glacés",
    "products": [
      {
        "name": "Chocolat Viennois Signature",
        "desc": "Chocolat chaud parsemé de poudre de cacao.",
        "img": "/img/Starbucks_FR_Website_600x600_Signature_Hot_Chocolate.jpg.webp",
        "id": 43,
        "slug": "chocolat-viennois-signature",
        "price": 8.24,
        "path": "chocolats-chauds-and-glaces/chocolat-viennois-signature"
      },
      {
        "name": "Chocolat Viennois Signature Glacé",
        "desc": "Chocolat chaud parsemé de poudre de cacao et servi glacé.",
        "img": "/img/Starbucks_FR_Deliveroo_1200x1200_Iced_Signature_Chocolate.jpg.webp",
        "id": 44,
        "slug": "chocolat-viennois-signature-glace",
        "price": 8.46,
        "path": "chocolats-chauds-and-glaces/chocolat-viennois-signature-glace"
      },
      {
        "name": "Chocolat Viennois Classique",
        "desc": "Lait chauffé à la vapeur mélangé à un sirop saveur chocolat.",
        "img": "/img/Starbucks_FR_Website_600x600_Classic_Hot_Chocolate.jpg.webp",
        "id": 45,
        "slug": "chocolat-viennois-classique",
        "price": 4.71,
        "path": "chocolats-chauds-and-glaces/chocolat-viennois-classique"
      },
      {
        "name": "Chocolat Viennois Classique Glacé",
        "desc": "Lait froid mélangé à un sirop saveur chocolat.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Classic_Chocolate_0.jpg.webp",
        "id": 46,
        "slug": "chocolat-viennois-classique-glace",
        "price": 4.89,
        "path": "chocolats-chauds-and-glaces/chocolat-viennois-classique-glace"
      },
      {
        "name": "White Hot Chocolate",
        "desc": "Lait chauffé à la vapeur mélangé à un sirop saveur chocolat blanc recouvert d'une crème fouettée.",
        "img": "/img/SBX_DEL_1200x1200_White_Hot_Chocolate.jpg.webp",
        "id": 47,
        "slug": "white-hot-chocolate",
        "price": 8.26,
        "path": "chocolats-chauds-and-glaces/white-hot-chocolate"
      },
      {
        "name": "Salted Pretzel Hot Chocolate",
        "desc": "Lait chaud cacaoté saveur bretzel, crème fouettée saveur chocolat et éclats de bretzel",
        "img": "/img/SBX_DEL_1200x1200_Salted_Pretzel_Hot_Chocolate.jpg.webp",
        "id": 48,
        "slug": "salted-pretzel-hot-chocolate",
        "price": 6.24,
        "path": "chocolats-chauds-and-glaces/salted-pretzel-hot-chocolate"
      }
    ],
    "slug": "chocolats-chauds-and-glaces"
  },
  {
    "id": 7,
    "name": "Thés Chauds",
    "products": [
      {
        "name": "English Breakfast Tea",
        "desc": "Thé noir corsé aux nuances riches et maltées.",
        "img": "/img/SBX_DEL_1200x1200_English_Breakfast.jpg.webp",
        "id": 49,
        "slug": "english-breakfast-tea",
        "price": 4.09,
        "path": "thes-chauds/english-breakfast-tea"
      },
      {
        "name": "Earl Grey Tea",
        "desc": "Mélange léger de thé noir, de bergamote parfumée et de lavande douce.",
        "img": "/img/SBX_DEL_1200x1200_Earl_Grey.jpg.webp",
        "id": 50,
        "slug": "earl-grey-tea",
        "price": 7.09,
        "path": "thes-chauds/earl-grey-tea"
      },
      {
        "name": "Hibiscus Tea",
        "desc": "Légères notes tropicales de papaye et de mangue avec de l'hibiscus, de la citronnelle et un soupçon de cannelle.",
        "img": "/img/SBX_DEL_1200x1200_Hibiscus.jpg.webp",
        "id": 51,
        "slug": "hibiscus-tea",
        "price": 4.45,
        "path": "thes-chauds/hibiscus-tea"
      },
      {
        "name": "Emperor's Cloud Mist Tea",
        "desc": "Un thé vert pur origine aux notes légères et sucrées.",
        "img": "/img/SBX_DEL_1200x1200_Emperor_Clouds_Mist.jpg.webp",
        "id": 52,
        "slug": "emperor's-cloud-mist-tea",
        "price": 7.59,
        "path": "thes-chauds/emperor's-cloud-mist-tea"
      },
      {
        "name": "Mint Citrus Green Tea",
        "desc": "Un mélange équilibré de thé vert avec des notes de verveine citronnée, de citronnelle et un soupçon de menthe verte.",
        "img": "/img/SBX_DEL_1200x1200_Mint_Citrus.jpg.webp",
        "id": 53,
        "slug": "mint-citrus-green-tea",
        "price": 8.92,
        "path": "thes-chauds/mint-citrus-green-tea"
      },
      {
        "name": "Mint Blend Tea",
        "desc": "Menthe verte, menthe poivrée et une touche de verveine citronnée.",
        "img": "/img/SBX_DEL_1200x1200_Mint_Blend.jpg.webp",
        "id": 54,
        "slug": "mint-blend-tea",
        "price": 4.44,
        "path": "thes-chauds/mint-blend-tea"
      },
      {
        "name": "Youthberry Tea",
        "desc": "Infusion sucrée d'ananas et d'açai avec une note florale subtile, mélangée à du thé blanc.",
        "img": "/img/SBX_DEL_1200x1200_Youthberry.jpg.webp",
        "id": 55,
        "slug": "youthberry-tea",
        "price": 7.37,
        "path": "thes-chauds/youthberry-tea"
      },
      {
        "name": "Jasmine Pearl Tea",
        "desc": "Thé vert au bouquet parfumé de jasmin.",
        "img": "/img/SBX_DEL_1200x1200_Jasmine_Pearls.jpg.webp",
        "id": 56,
        "slug": "jasmine-pearl-tea",
        "price": 4.23,
        "path": "thes-chauds/jasmine-pearl-tea"
      },
      {
        "name": "Chai Tea",
        "desc": "Une puissante infusion avec de riches notes d'épices mélangées à du thé noir.",
        "img": "/img/SBX_DEL_1200x1200_Chai_Mug.jpg.webp",
        "id": 57,
        "slug": "chai-tea",
        "price": 8.97,
        "path": "thes-chauds/chai-tea"
      },
      {
        "name": "Chamomille",
        "desc": "Infusion de camomille à la citronnelle, mélisse et pétales de rose.",
        "img": "/img/Starbucks_FR_Deliveroo_1200x1200_Tea_Chamomille.jpg.webp",
        "id": 58,
        "slug": "chamomille",
        "price": 7.21,
        "path": "thes-chauds/chamomille"
      }
    ],
    "slug": "thes-chauds"
  },
  {
    "id": 8,
    "name": "Thés au lait",
    "products": [
      {
        "name": "Matcha Green Tea Latte",
        "desc": "Thé vert matcha mélangé à du lait.",
        "img": "/img/SBX_DEL_1200x1200_Matcha_Green_Tea_Latte.jpg.webp",
        "id": 59,
        "slug": "matcha-green-tea-latte",
        "price": 8.36,
        "path": "thes-au-lait/matcha-green-tea-latte"
      },
      {
        "name": "Iced Matcha Green Tea Latte",
        "desc": "Thé vert matcha mélangé à du lait, versé sur des glaçons.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Matcha_Tea_Latte.jpg.webp",
        "id": 60,
        "slug": "iced-matcha-green-tea-latte",
        "price": 3.5,
        "path": "thes-au-lait/iced-matcha-green-tea-latte"
      },
      {
        "name": "Chai Tea Latte",
        "desc": "Un latte chaud et aromatique au thé Chai, merveilleusement doux et épicé.",
        "img": "/img/SBX_DEL_1200x1200_Chai_Tea_Latte.jpg.webp",
        "id": 61,
        "slug": "chai-tea-latte",
        "price": 3.37,
        "path": "thes-au-lait/chai-tea-latte"
      },
      {
        "name": "Iced Chai Tea Latte",
        "desc": "Thé noir infusé à la cardamone, à la canelle, au poivre noir et à l'anis étoilé, mélangé à du lait et à des glaçons.",
        "img": "/img/SBX_DEL_1200x1200_Iced_Chai_Tea_Latte.jpg.webp",
        "id": 62,
        "slug": "iced-chai-tea-latte",
        "price": 8.5,
        "path": "thes-au-lait/iced-chai-tea-latte"
      }
    ],
    "slug": "thes-au-lait"
  },
  {
    "id": 9,
    "name": "Thés glacés",
    "products": [
      {
        "name": "Lemon Iced Tea",
        "desc": "Thé vert saveur citron, avec une pointe de limonade, mélangé à des glaçons.",
        "img": "/img/Starbucks_FR_Deliveroo_1200x1200_Iced_Green_Tea.jpg.webp",
        "id": 63,
        "slug": "lemon-iced-tea",
        "price": 8.75,
        "path": "thes-glaces/lemon-iced-tea"
      },
      {
        "name": "Peach Iced Tea",
        "desc": "Thé vert saveur pêche, avec une pointe de limonade, mélangé à des glaçons.",
        "img": "/img/Starbucks_FR_Deliveroo_1200x1200_Iced_Black_Tea.jpg.webp",
        "id": 64,
        "slug": "peach-iced-tea",
        "price": 8.74,
        "path": "thes-glaces/peach-iced-tea"
      }
    ],
    "slug": "thes-glaces"
  },
  {
    "id": 10,
    "name": "Refresha",
    "products": [
      {
        "name": "Strawberry Açai",
        "desc": "Boisson glacée et frappée à base de fraise, à l'extrait de café vert.",
        "img": "/img/SBX_DEL_1200x1200_Strawberry_Acai_Refresha.jpg.webp",
        "id": 65,
        "slug": "strawberry-acai",
        "price": 4.94,
        "path": "refresha/strawberry-acai"
      },
      {
        "name": "Pink Coconut",
        "desc": "Boisson végétale coco glacée et frappée à base de fraise, à l'extrait de café vert",
        "img": "/img/SBX_DEL_1200x1200_Pink_Coconut_Refresha.jpg.webp",
        "id": 66,
        "slug": "pink-coconut",
        "price": 4.68,
        "path": "refresha/pink-coconut"
      },
      {
        "name": "Cool Lime",
        "desc": "Boisson glacée et frappée à base de citron vert, à l'extrait de café vert.",
        "img": "/img/SBX_DEL_1200x1200_Cool_Lime_Refresha.jpg.webp",
        "id": 67,
        "slug": "cool-lime",
        "price": 4.15,
        "path": "refresha/cool-lime"
      },
      {
        "name": "Very Berry",
        "desc": "Boisson glacée et frappée à base de mûres et d'hibiscus, à l'extrait de café vert.",
        "img": "/img/SBX_DEL_1200x1200_Very_Berry_Refresha.jpg.webp",
        "id": 68,
        "slug": "very-berry",
        "price": 8.82,
        "path": "refresha/very-berry"
      },
      {
        "name": "Dragon Mango",
        "desc": "Boisson glacée et frappée à base de mangue et de fruit du dragon, à l’extrait de café vert.",
        "img": "/img/SBX_DEL_1200x1200_Mango_Dragonfruit_Refresha.jpg.webp",
        "id": 69,
        "slug": "dragon-mango",
        "price": 5.48,
        "path": "refresha/dragon-mango"
      },
      {
        "name": "Dragon Coconut",
        "desc": "Boisson végétale coco glacée et frappée à base de mangue et de fruit du dragon, à l’extrait de café vert.",
        "img": "/img/SBX_DEL_1200x1200_Refresha_Dragon_Coconut.jpg.jpeg",
        "id": 70,
        "slug": "dragon-coconut",
        "price": 6.52,
        "path": "refresha/dragon-coconut"
      }
    ],
    "slug": "refresha"
  },
  {
    "id": 11,
    "name": "Eaux & Jus",
    "products": [
      {
        "name": "Evian",
        "img": "/img/Starbucks_FR_Website_600x600_Evian_Prestige.jpg.webp",
        "id": 71,
        "slug": "evian",
        "price": 3.02,
        "path": "eaux-and-jus/evian",
        "desc" : null,
      },
      {
        "name": "Badoit",
        "img": "/img/Starbucks_FR_Website_600x600_Badoit.jpg.webp",
        "id": 72,
        "slug": "badoit",
        "price": 3.97,
        "path": "eaux-and-jus/badoit",
        "desc" : null,
      },
      {
        "name": "Peach Iced Tea",
        "img": "/img/SBX_DEL_1200x1200_Iced_Tea_Peach_330ml.jpg.webp",
        "id": 73,
        "slug": "eaux-and-jus-peach-iced-tea",
        "price": 5.36,
        "path": "eaux-and-jus/eaux-and-jus-peach-iced-tea",
        "desc" : null,
      },
      {
        "name": "Lemon Iced Tea",
        "img": "/img/SBX_DEL_1200x1200_Iced_Tea_Lemon_330ml.jpg.webp",
        "id": 74,
        "slug": "eaux-and-jus-lemon-iced-tea",
        "price": 3.51,
        "path": "eaux-and-jus/eaux-and-jus-lemon-iced-tea",
        "desc" : null,
      },
      {
        "name": "Red Smoothie",
        "img": "/img/SBX_DEL_1200x1200_Red_Smoothie_330ml.jpg.webp",
        "id": 75,
        "slug": "red-smoothie",
        "price": 8.16,
        "path": "eaux-and-jus/red-smoothie",
        "desc" : null,
      },
      {
        "name": "Green Smoothie",
        "img": "/img/SBX_DEL_1200x1200_Green_Smoothie_330ml.jpg.webp",
        "id": 76,
        "slug": "green-smoothie",
        "price": 8.47,
        "path": "eaux-and-jus/green-smoothie",
        "desc" : null,
      },
      {
        "name": "Tropical Smoothie",
        "img": "/img/SBX_DEL_1200x1200_Tropical_Smoothie_330ml.jpg.webp",
        "id": 77,
        "slug": "tropical-smoothie",
        "price": 4.29,
        "path": "eaux-and-jus/tropical-smoothie",
        "desc" : null,
      },
      {
        "name": "Apple Juice",
        "img": "/img/SBX_DEL_1200x1200_Apple_Juice_330ml.jpg.webp",
        "id": 78,
        "slug": "apple-juice",
        "price": 7.16,
        "path": "eaux-and-jus/apple-juice",
        "desc" : null,
      },
      {
        "name": "Orange Juice",
        "img": "/img/SBX_DEL_1200x1200_Orange_Juice_330ml.jpg.webp",
        "id": 79,
        "slug": "orange-juice",
        "price": 7.01,
        "path": "eaux-and-jus/orange-juice",
        "desc" : null,
      },
      {
        "name": "Exotic Juice",
        "img": "/img/SBX_DEL_1200x1200_Exotic_Juice_330ml.jpg.webp",
        "id": 80,
        "slug": "exotic-juice",
        "price": 3.13,
        "path": "eaux-and-jus/exotic-juice",
        "desc" : null,
      },
      {
        "name": "Limonade",
        "img": "/img/SBX_DEL_1200x1200_Lemonade_330ml.jpg.webp",
        "id": 81,
        "slug": "limonade",
        "price": 8.6,
        "path": "eaux-and-jus/limonade",
        "desc" : null,
      }
    ],
    "slug": "eaux-and-jus"
  }
];