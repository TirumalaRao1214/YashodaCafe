/**
 * CAFE YASHODA — Complete Centralized Menu Data & Logic
 * Karimnagar, Telangana
 * 
 * Single source of truth for all 24 categories and menu items.
 * To update an item price or add a new dish, modify this data structure directly.
 */

'use strict';

// ============================================================================
// 1. CLIENT CONFIGURATION
// ============================================================================
const CAFE_CONFIG = {
  phone: '099668 18131',
  phoneDial: 'tel:+919966818131',
  whatsappUrl: 'https://wa.me/919966818131?text=Hi%20Cafe%20Yashoda%2C%20I%20would%20like%20to%20place%20an%20order%20or%20know%20more%20about%20your%20menu.',
  instagramUrl: 'https://www.instagram.com/cafeyashoda/',
  qrMenuUrl: 'https://qrmenu.com/menus/cafe-yashoda/?menu=1',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=3-1-546,+near+KEA+Hospital,+Vavilalapally,+Karimnagar,+Telangana+505001',
  googleMapsViewUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe+Yashoda+3-1-546+near+KEA+Hospital+Vavilalapally+Karimnagar+Telangana+505001'
};

// ============================================================================
// 2. CENTRALIZED MENU DATA (24 CATEGORIES — EXACT MENU CONTENT)
// ============================================================================
const menuData = [
  {
    id: "tea-specials",
    category: "YASHODA TEA SPECIALS",
    shortName: "TEA",
    icon: "tea",
    items: [
      { name: "SINGLE TEA PAPER", price: 12 },
      { name: "YASHODA TEA", price: 16 },
      { name: "GINGER TEA", price: 20 },
      { name: "ELAICHI TEA", price: 20 },
      { name: "LEMON TEA", price: 20 },
      { name: "GREEN TEA", price: 20 },
      { name: "BLACK TEA", price: 20 }
    ]
  },
  {
    id: "coffee-corner",
    category: "COFFEE CORNER",
    shortName: "COFFEE",
    icon: "coffee",
    items: [
      { name: "COFFEE", price: 20 },
      { name: "BLACK COFFEE", price: 20 },
      { name: "BLACK COFFEE WITH HONEY", price: 25 },
      { name: "DOUBLE STRONG COFFEE", price: 30 },
      { name: "CHOCOLATE COFFEE", price: 30 },
      { name: "GHEE BULLETPROOF COFFEE", price: 45 },
      { name: "COLD COFFEE", price: 89 }
    ]
  },
  {
    id: "milk",
    category: "MILK",
    shortName: "MILK",
    icon: "milk",
    items: [
      { name: "HOT MILK", price: 20 },
      { name: "HORLICKS", price: 25 },
      { name: "BOOST", price: 25 },
      { name: "HOT CHOCOLATE", price: 35 },
      { name: "BADAM MILK", price: 35 },
      { name: "ROSE MILK", price: 50 }
    ]
  },
  {
    id: "snacks",
    category: "SNACKS",
    shortName: "SNACKS",
    icon: "snacks",
    items: [
      { name: "DIL PASAND", price: 20 },
      { name: "ALOO SAMOSA", price: 20 },
      { name: "CORN SAMOSA", price: 23 },
      { name: "PANEER PUFF", price: 25 },
      { name: "EGG PUFF", price: 25 },
      { name: "CHICKEN PUFF", price: 25 },
      { name: "MAGGIE", price: 40 },
      { name: "EGG MAGGIE", price: 55 }
    ]
  },
  {
    id: "sandwich",
    category: "SANDWICH",
    shortName: "SANDWICH",
    icon: "sandwich",
    items: [
      { name: "VEG SANDWICH", price: 89 },
      { name: "CHOCOLATE SANDWICH", price: 89 },
      { name: "CORN CHEESE SANDWICH", price: 119 },
      { name: "CHICKEN SANDWICH", price: 119 },
      { name: "GARLIC SANDWICH", price: 79 },
      { name: "CHEESE GARLIC SANDWICH", price: 109 }
    ]
  },
  {
    id: "burgers",
    category: "BURGERS",
    shortName: "BURGERS",
    icon: "burgers",
    items: [
      { name: "VEG BURGER", price: 79 },
      { name: "EGG BURGER", price: 89 },
      { name: "ALOO TIKKI BURGER", price: 89 },
      { name: "VEG CHEESE BURGER", price: 89 },
      { name: "CHICKEN BURGER", price: 99 },
      { name: "CHICKEN CHEESE BURGER", price: 109 }
    ]
  },
  {
    id: "fries",
    category: "FRIES",
    shortName: "FRIES",
    icon: "fries",
    items: [
      { name: "FRENCH FRIES", price: 89 },
      { name: "PERI PERI FRENCH FRIES", price: 99 }
    ]
  },
  {
    id: "bun-specials",
    category: "BUN SPECIALS",
    shortName: "BUNS",
    icon: "buns",
    items: [
      { name: "MASKA BUN", price: 60 },
      { name: "BUN BASUNDI", price: 65 },
      { name: "CHOCOLATE CREAM BUN", price: 50 },
      { name: "OREO BUN DELIGHT", price: 59 },
      { name: "CHOCO CRUNCH BUN", price: 59 },
      { name: "HIDE & SEEK BUN BLAST", price: 59 }
    ]
  },
  {
    id: "chocolate-heaven",
    category: "CHOCOLATE HEAVEN",
    shortName: "CHOCOLATE",
    icon: "chocolate",
    items: [
      { name: "CHOCOLATE CREAM CUP", price: 50 },
      { name: "CHOCOLATE LAVA CAKE", price: 50 },
      { name: "OREO CHOCOLATE CUP", price: 60 },
      { name: "CHOCOLATE FRUIT BOWL", price: 70 }
    ]
  },
  {
    id: "healthy-juice-corner",
    category: "HEALTHY JUICE CORNER",
    shortName: "JUICES",
    icon: "juice",
    items: [
      { name: "MINT WATER", price: 20 },
      { name: "RAGI JAVA", price: 20 },
      { name: "MILLETS JAVA", price: 35 },
      { name: "ASHGOURD JUICE", price: 40 },
      { name: "BOTTLEGOURD JUICE", price: 40 },
      { name: "BEETROOT JUICE", price: 40 },
      { name: "BITTERGOURD JUICE", price: 40 },
      { name: "CARROT JUICE", price: 40 },
      { name: "CARROT BEETROOT JUICE", price: 50 },
      { name: "CORIANDER MINT TULASI JUICE", price: 50 },
      { name: "WATERMELON", price: 50 },
      { name: "MUSKMELON JUICE", price: 60 },
      { name: "PINEAPPLE JUICE", price: 60 },
      { name: "ABC JUICE", price: 89 },
      { name: "SPINACH GREEN APPLE JUICE", price: 89 }
    ]
  },
  {
    id: "detox-drinks",
    category: "DETOX DRINKS",
    shortName: "DETOX",
    icon: "detox",
    items: [
      { name: "LEMON DETOX DRINK", price: 35 },
      { name: "JEERA DETOX DRINK", price: 35 },
      { name: "GREEN DETOX DRINK", price: 35 },
      { name: "GINGER LEMON DETOX DRINK", price: 35 },
      { name: "CUCUMBER COOLER", price: 35 },
      { name: "MINT DETOX DRINK", price: 35 }
    ]
  },
  {
    id: "refreshing-traditionals",
    category: "REFRESHING TRADITIONALS",
    shortName: "LASSI",
    icon: "lassi",
    items: [
      { name: "BUTTERMILK", price: 20 },
      { name: "MASALA BUTTERMILK", price: 25 },
      { name: "CUCUMBER BUTTERMILK", price: 35 },
      { name: "SWEET LASSI", price: 40 },
      { name: "SALT LASSI", price: 40 },
      { name: "ROSE LASSI", price: 50 },
      { name: "MANGO LASSI", price: 50 },
      { name: "STRAWBERRY LASSI", price: 50 },
      { name: "EXTRA VANILLA ICE CREAM SCOOP", price: 10 }
    ]
  },
  {
    id: "seasonal-juices",
    category: "SEASONAL JUICES",
    shortName: "SEASONAL",
    icon: "seasonal",
    items: [
      { name: "WATERMELON", price: 50 },
      { name: "MANGO", price: 60 },
      { name: "MUSKMELON", price: 60 },
      { name: "PINEAPPLE", price: 60 },
      { name: "MANGO LASSI", price: 55 },
      { name: "STRAWBERRY LASSI", price: 55 },
      { name: "LASSI", price: 40 },
      { name: "LASSI WITH VANILLA SCOOP", price: 50 },
      { name: "BUTTERMILK", price: 20 },
      { name: "BUTTERMILK FULL", price: 30 },
      { name: "LEMON JUICE", price: 30 }
    ]
  },
  {
    id: "cold-press-juices",
    category: "COLD PRESS JUICES",
    shortName: "COLD PRESS",
    icon: "coldpress",
    items: [
      { name: "ABC JUICE", price: 89 },
      { name: "BCC JUICE", price: 80 },
      { name: "BC JUICE", price: 55 },
      { name: "BEETROOT JUICE", price: 50 },
      { name: "BITTERGOURD JUICE", price: 40 },
      { name: "BOTTLEGOURD JUICE", price: 40 },
      { name: "CARROT JUICE", price: 45 },
      { name: "KEERA COOLER", price: 40 },
      { name: "MUSKMELON JUICE", price: 65 },
      { name: "PINEAPPLE JUICE", price: 70 },
      { name: "WATERMELON JUICE", price: 55 }
    ]
  },
  {
    id: "milkshakes",
    category: "MILKSHAKES",
    shortName: "MILKSHAKES",
    icon: "milkshake",
    items: [
      { name: "STRAWBERRY SHAKE", price: 89 },
      { name: "BLACK CURRANT SHAKE", price: 89 },
      { name: "BUTTERSCOTCH SHAKE", price: 89 },
      { name: "MANGO SHAKE", price: 89 },
      { name: "SPL. ROSE SHAKE", price: 89 },
      { name: "VANILLA SHAKE", price: 89 },
      { name: "BLUE CHOCO SHAKE", price: 99 },
      { name: "CHOCOLATE BANANA SHAKE", price: 99 },
      { name: "HIDE & SEEK CRUSH SHAKE", price: 99 },
      { name: "KITKAT SHAKE", price: 99 },
      { name: "OREO SHAKE", price: 99 },
      { name: "DRY FRUIT SHAKE", price: 149 }
    ]
  },
  {
    id: "mocktails",
    category: "MOCKTAILS",
    shortName: "MOCKTAILS",
    icon: "mocktail",
    items: [
      { name: "BLUE LAGOON", price: 79 },
      { name: "BLUE LAGOON FLOAT", price: 89 },
      { name: "MINT MOJITO", price: 79 },
      { name: "MINT ICED TEA", price: 79 },
      { name: "GALAXY LEMONADE", price: 89 },
      { name: "STRAWBERRY MOJITO", price: 89 },
      { name: "STRAWBERRY SODA", price: 79 },
      { name: "STRAWBERRY LEMONADE", price: 89 }
    ]
  },
  {
    id: "special-combo-mocktails",
    category: "SPECIAL COMBO MOCKTAILS",
    shortName: "COMBO MOCKTAILS",
    icon: "combo-mocktail",
    items: [
      { name: "STRAWBERRY MINT MOJITO", price: 99 },
      { name: "MINT BERRY COOLER", price: 99 },
      { name: "RED GREEN FIZZ", price: 99 }
    ]
  },
  {
    id: "millets-food",
    category: "MILLETS FOOD",
    shortName: "MILLETS",
    icon: "millets",
    items: [
      { name: "JONNA GATKA", price: 40 },
      { name: "KORRA PONGAL", price: 49 },
      { name: "MILLET JAVA", price: 40 },
      { name: "RAGI JAVA", price: 20 }
    ]
  },
  {
    id: "fruit-bowls",
    category: "FRUIT BOWLS",
    shortName: "FRUIT BOWLS",
    icon: "fruit-bowls",
    items: [
      { name: "CHOCOLATE BOWL", price: 59 },
      { name: "FRUIT BOWL", price: 59 },
      { name: "FRUIT MUESLI BOWL", price: 79 }
    ]
  },
  {
    id: "salads",
    category: "SALADS",
    shortName: "SALADS",
    icon: "salad",
    items: [
      { name: "VEGETABLE SALAD", price: 59 },
      { name: "VEGETABLE SALAD WITH CURD", price: 69 },
      { name: "VEGETABLE SALAD WITH MASALA", price: 69 },
      { name: "VEGETABLE SALAD WITH MASALA ADDED CURD", price: 79 }
    ]
  },
  {
    id: "soups",
    category: "SOUPS",
    shortName: "SOUPS",
    icon: "soup",
    items: [
      { name: "HOT & SOUR SOUP", price: 59 },
      { name: "TOMATO CHATPATA SOUP", price: 59 },
      { name: "SWEET CORN SOUP", price: 69 }
    ]
  },
  {
    id: "classic-scoops",
    category: "CLASSIC SCOOPS",
    shortName: "SCOOPS",
    icon: "scoops",
    items: [
      { name: "VANILLA", price: 45 },
      { name: "CHOCOLATE", price: 50 },
      { name: "BUTTERSCOTCH", price: 50 },
      { name: "STRAWBERRY", price: 50 },
      { name: "BLACK CURRANT", price: 55 },
      { name: "DRY FRUIT", price: 65 }
    ]
  },
  {
    id: "single-sundae",
    category: "SINGLE SUNDAE",
    shortName: "SINGLE SUNDAE",
    icon: "single-sundae",
    items: [
      {
        name: "CHOCOLATE SUNDAE",
        description: "Ice cream topped with rich chocolate sauce",
        price: 80
      },
      {
        name: "STRAWBERRY SUNDAE",
        description: "Sweet strawberry topping with creamy scoops",
        price: 80
      },
      {
        name: "BUTTERSCOTCH SUNDAE",
        description: "Creamy butterscotch with caramel drizzle",
        price: 90
      },
      {
        name: "NUTTY GRITTY SUNDAE",
        description: "Nut-loaded sundae with crunchy textures",
        price: 90
      },
      {
        name: "CRISPY CHOCO SUNDAE",
        description: "Chocolate ice cream with crunchy toppings & choco drizzle",
        price: 90
      }
    ]
  },
  {
    id: "double-sundae",
    category: "DOUBLE SUNDAE",
    shortName: "DOUBLE SUNDAE",
    icon: "double-sundae",
    items: [
      {
        name: "DOUBLE TROUBLE",
        description: "Two scoops with rich chocolate and caramel drizzle",
        price: 110
      },
      {
        name: "SHOCKING CURRANT",
        description: "Black currant and vanilla fusion with fruity twist",
        price: 110
      },
      {
        name: "TASTE OF HEAVEN",
        description: "Butterscotch and vanilla with nuts and caramel delight",
        price: 120
      },
      {
        name: "AWESOME 2 SOME",
        description: "Strawberry and chocolate combo with crunchy toppings",
        price: 120
      },
      {
        name: "CHOCO BANANA DOUBLE",
        description: "Chocolate and vanilla with banana and choco drizzle",
        price: 120
      }
    ]
  }
];

// ============================================================================
// 3. INLINE SVG ICON LIBRARY (ZERO EXTERNAL CDN / ZERO LIBS)
// ============================================================================
const MENU_ICONS = {
  tea: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 19h18v2H2zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3z"/></svg>`,
  milk: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2h-2C9.9 2 9 2.9 9 4v1H8c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-1V4c0-1.1-.9-2-2-2zm-2 2h2v1h-2V4zm5 5v3H8V9h8zm0 5v6H8v-6h8z"/></svg>`,
  snacks: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
  sandwich: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6h-2c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h2v2h-2V4zm8 14H5V8h14v10z"/></svg>`,
  burgers: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.9 12.83C21.4 7.89 17.15 4 12 4s-9.4 3.89-9.9 8.83C2.04 13.41 2.5 14 3.1 14H20.9c.6 0 1.06-.59 1-1.17zM4 16h16v1H4zm0 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"/></svg>`,
  fries: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h2v7H7zm4 0h2v7h-2zm4 0h2v7h-2zM5 10l1.5 11.5c.08.62.61 1.08 1.24 1.08h8.52c.63 0 1.16-.46 1.24-1.08L19 10H5zm12 10.5H7l-1.1-8.5h12.2l-1.1 8.5z"/></svg>`,
  buns: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4C7.03 4 3 7.58 3 12h18c0-4.42-4.03-8-9-8zm-9 10c0 2.21 4.03 4 9 4s9-1.79 9-4H3z"/></svg>`,
  chocolate: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 4h6v3h-6V7zm-6 0h4v3H5V7zm0 5h4v3H5v-3zm6 0h6v3h-6v-3zm-6 5h4v2H5v-2zm6 2v-2h6v2h-6z"/></svg>`,
  juice: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1.1 0 2 .9 2 2v1.1c2.8.5 5 3 5 6v7.9l1.4 1.4c.4.4.1 1.1-.5 1.1H4.1c-.6 0-.9-.7-.5-1.1L5 19V11c0-3 2.2-5.5 5-6V4c0-1.1.9-2 2-2zm-3 9v7h6v-7c0-1.7-1.3-3-3-3s-3 1.3-3 3z"/></svg>`,
  detox: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`,
  lassi: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 6 0v3H9V7zm9 12H6v-7h12v7z"/></svg>`,
  seasonal: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  coldpress: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>`,
  milkshake: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-.55 0-1 .45-1 1v1.1C7.6 4.6 5 7.5 5 11v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-3.5-2.6-6.4-6-6.9V3c0-.55-.45-1-1-1zm-4 9c0-2.2 1.8-4 4-4s4 1.8 4 4v8H8v-8z"/></svg>`,
  mocktail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/></svg>`,
  'combo-mocktail': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v11h3v7h4v-7h3V2H7zm8 9h-6V4h6v7z"/></svg>`,
  millets: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>`,
  'fruit-bowls': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
  salad: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-9.95 9h19.9A10 10 0 0 0 12 2zm0 13c-3.86 0-7 2.24-7 5h14c0-2.76-3.14-5-7-5z"/></svg>`,
  soup: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16H3c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6zM3 14h18v-2H3v2zm6-4h2V4H9v6zm4 0h2V2h-2v8z"/></svg>`,
  scoops: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm-3 20h6v-2H9v2z"/></svg>`,
  'single-sundae': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.5 3H5.5C4.67 3 4 3.67 4 4.5v1.28c0 3.72 2.69 6.85 6.25 7.43V19H7v2h10v-2h-3.25v-5.79c3.56-.58 6.25-3.71 6.25-7.43V4.5c0-.83-.67-1.5-1.5-1.5z"/></svg>`,
  'double-sundae': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.3 5.9L7 21h10l-1.3-6.1c2-1.2 3.3-3.4 3.3-5.9a7 7 0 0 0-7-7z"/></svg>`,
  default: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
};

// ============================================================================
// 4. INITIALIZATION & LIFECYCLE
// ============================================================================
let activeCategoryFilter = "all";
let currentSearchQuery = "";

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initSmoothScrollSpy();
  initLinkHandlers();
  initDynamicMenuSystem();
});

/**
 * Sticky Header Scroll Effect
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Drawer Menu
 */
function initMobileNavigation() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-links .nav-link, .mobile-drawer-cta a');

  if (!hamburgerBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/**
 * Smooth Scroll & Active Nav Spy
 */
function initSmoothScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (sections.length === 0 || desktopLinks.length === 0) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 130;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Bind Configurable CTAs dynamically
 */
function initLinkHandlers() {
  const qrMenuTriggers = document.querySelectorAll('.trigger-qrmenu');
  qrMenuTriggers.forEach(btn => {
    btn.setAttribute('href', CAFE_CONFIG.qrMenuUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  const instagramTriggers = document.querySelectorAll('.trigger-instagram');
  instagramTriggers.forEach(btn => {
    btn.setAttribute('href', CAFE_CONFIG.instagramUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  const whatsappTriggers = document.querySelectorAll('.trigger-whatsapp');
  whatsappTriggers.forEach(btn => {
    btn.setAttribute('href', CAFE_CONFIG.whatsappUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  const directionsTriggers = document.querySelectorAll('.trigger-directions');
  directionsTriggers.forEach(btn => {
    btn.setAttribute('href', CAFE_CONFIG.googleMapsDirectionsUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

// ============================================================================
// 5. DYNAMIC MENU SYSTEM (PRINT-INSPIRED RESTAURANT MENU ROWS & SEARCH)
// ============================================================================
function initDynamicMenuSystem() {
  const categoryNavContainer = document.getElementById('menu-category-nav');
  const menuDisplayContainer = document.getElementById('menu-content-display');
  const searchInput = document.getElementById('menu-search-input');
  const searchClearBtn = document.getElementById('menu-search-clear');
  const statsCountEl = document.getElementById('menu-stats-counter');

  if (!categoryNavContainer || !menuDisplayContainer) return;

  // 1. Calculate Dynamic Totals
  const totalCategories = menuData.length;
  const totalItems = menuData.reduce((acc, cat) => acc + cat.items.length, 0);

  if (statsCountEl) {
    statsCountEl.innerHTML = `<strong>${totalCategories}</strong> CATEGORIES &bull; <strong>${totalItems}</strong> ITEMS`;
  }

  // 2. Render Category Filter Navigation Pills
  renderCategoryNavPills(categoryNavContainer);

  // 3. Render Initial Menu Content
  renderMenuContent(menuDisplayContainer);

  // 4. Attach Live Search Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery ? 'flex' : 'none';
      }
      renderMenuContent(menuDisplayContainer);
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchQuery = '';
        searchClearBtn.style.display = 'none';
        searchInput.focus();
        renderMenuContent(menuDisplayContainer);
      });
    }
  }
}

/**
 * Render the 24 Category Filter Buttons (plus "ALL")
 */
function renderCategoryNavPills(container) {
  let pillsHtml = `
    <button type="button" class="menu-cat-pill active" data-category-id="all">
      <span class="pill-icon">${MENU_ICONS.default}</span>
      <span class="pill-text">ALL CATEGORIES</span>
    </button>
  `;

  menuData.forEach(cat => {
    const iconSvg = MENU_ICONS[cat.icon] || MENU_ICONS.default;
    pillsHtml += `
      <button type="button" class="menu-cat-pill" data-category-id="${cat.id}">
        <span class="pill-icon">${iconSvg}</span>
        <span class="pill-text">${cat.shortName || cat.category}</span>
      </button>
    `;
  });

  container.innerHTML = pillsHtml;

  // Click Handlers for Category Pills
  const pills = container.querySelectorAll('.menu-cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategoryFilter = pill.getAttribute('data-category-id');

      // Re-render and scroll smoothly to category
      const menuDisplayContainer = document.getElementById('menu-content-display');
      renderMenuContent(menuDisplayContainer);

      if (activeCategoryFilter !== 'all') {
        const targetSection = document.getElementById(`cat-block-${activeCategoryFilter}`);
        if (targetSection) {
          const yOffset = -140;
          const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
}

/**
 * Filter & Render Menu Content based on Active Category and Search Query
 * (Renders as elegant restaurant menu rows with subtle gold dividers)
 */
function renderMenuContent(container) {
  let filteredData = menuData;

  // Filter by Category Pill
  if (activeCategoryFilter !== "all") {
    filteredData = filteredData.filter(cat => cat.id === activeCategoryFilter);
  }

  // Filter by Search Term across category name, item name, and item description
  if (currentSearchQuery) {
    filteredData = filteredData.map(cat => {
      const matchingItems = cat.items.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(currentSearchQuery);
        const descMatch = item.description && item.description.toLowerCase().includes(currentSearchQuery);
        const catMatch = cat.category.toLowerCase().includes(currentSearchQuery);
        return nameMatch || descMatch || catMatch;
      });

      return {
        ...cat,
        items: matchingItems
      };
    }).filter(cat => cat.items.length > 0);
  }

  // Handle No Results
  if (filteredData.length === 0) {
    container.innerHTML = `
      <div class="menu-no-results">
        <div class="no-results-icon">${MENU_ICONS.tea}</div>
        <h3 class="no-results-title">No menu items found</h3>
        <p class="no-results-desc">We couldn't find anything matching "<strong>${escapeHtml(currentSearchQuery)}</strong>". Try searching for coffee, tea, sandwich, sundae, or clear the search.</p>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('menu-search-input').value=''; document.getElementById('menu-search-clear').click();">
          RESET SEARCH
        </button>
      </div>
    `;
    return;
  }

  // Build the Menu Sections HTML
  let menuHtml = '';

  filteredData.forEach(cat => {
    const iconSvg = MENU_ICONS[cat.icon] || MENU_ICONS.default;
    const itemCountText = cat.items.length === 1 ? '1 ITEM' : `${cat.items.length} ITEMS`;

    let itemsRowsHtml = '';
    cat.items.forEach(item => {
      const descHtml = item.description 
        ? `<div class="menu-item-desc">${escapeHtml(item.description)}</div>` 
        : '';

      itemsRowsHtml += `
        <div class="menu-item-row">
          <div class="menu-item-info">
            <div class="menu-item-name">${escapeHtml(item.name)}</div>
            ${descHtml}
          </div>
          <div class="menu-item-price-col">
            <span class="menu-item-price">₹${item.price}</span>
          </div>
        </div>
      `;
    });

    menuHtml += `
      <div class="menu-category-block" id="cat-block-${cat.id}">
        <div class="menu-category-header" onclick="toggleCategory('${cat.id}')" role="button" aria-expanded="true" tabindex="0">
          <div class="menu-cat-left">
            <div class="menu-cat-icon-container">
              ${iconSvg}
            </div>
            <h3 class="menu-cat-title">${escapeHtml(cat.category)}</h3>
          </div>
          <div class="menu-cat-right">
            <span class="menu-cat-count-badge">${itemCountText}</span>
            <svg class="menu-cat-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          </div>
        </div>
        <div class="menu-items-list-wrap">
          ${itemsRowsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = menuHtml;
}

/**
 * Collapsible Accordion Toggle
 */
window.toggleCategory = function(catId) {
  const catBlock = document.getElementById(`cat-block-${catId}`);
  if (!catBlock) return;
  catBlock.classList.toggle('collapsed');
};

/**
 * Simple HTML escape helper
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
