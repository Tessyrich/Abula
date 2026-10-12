export const business = {
  name: "Abula Zone Africa",
  shortName: "Abula Zone",
  tagline: "The best abula in Woolwich.",
  description:
    "Nigerian restaurant on Woolwich High Street serving abula the Ibadan way: hot amala with gbegiri and ewedu, assorted meats, pepper soup and suya. Open daily, noon to midnight. Dine in, takeaway and delivery.",
  address: {
    street: "121 Woolwich High Street",
    area: "Woolwich",
    city: "London",
    postcode: "SE18 6DS",
    country: "GB",
  },
  phone: "+44 20 8854 1211",
  phoneHref: "tel:+442088541211",
  instagram: "abulazone",
  instagramUrl: "https://www.instagram.com/abulazone/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Abula+Zone+Africa+121+Woolwich+High+Street+London+SE18+6DS",
  geo: { lat: 51.4917, lng: 0.0637 },
  hours: [
    { day: "Monday", open: "12:00", close: "00:00" },
    { day: "Tuesday", open: "12:00", close: "00:00" },
    { day: "Wednesday", open: "12:00", close: "00:00" },
    { day: "Thursday", open: "12:00", close: "00:00" },
    { day: "Friday", open: "12:00", close: "00:00" },
    { day: "Saturday", open: "12:00", close: "00:00" },
    { day: "Sunday", open: "12:00", close: "00:00" },
  ],
  delivery: {
    justEat: "https://www.just-eat.co.uk/restaurants-abula-zone-afr-woolwich/menu",
    deliveroo:
      "https://deliveroo.co.uk/menu/london/woolwich/abula-zone-africa-121-woolwich-high-street",
    uberEats: "https://www.ubereats.com/gb/store/abula-zone-africa/qr05QP52SeKsxo2v13c-6w",
  },
  hygiene: {
    inspected: "9 March 2026",
    handling: "Very good",
    cleanliness: "Good",
    management: "Good",
  },
} as const;

export type MenuItem = {
  name: string;
  yoruba?: string;
  desc: string;
  price: string;
  tags?: ("signature" | "spicy" | "veg")[];
};

export type MenuSection = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const signatures = [
  {
    name: "Abula",
    yoruba: "Àmàlà, gbẹ̀gìrì & ewédú",
    desc: "The house plate. Soft, hot amala with earthy bean soup and silky jute leaves, finished with ata dindin and your choice of meats.",
    price: "from £13",
    palette: ["#5b3a22", "#c9552a", "#4f8a4c"],
  },
  {
    name: "Assorted Meats",
    yoruba: "Ẹran àsọ̀rọ̀",
    desc: "Shaki, ponmo, abodi, fuku and beef, slow-cooked in pepper stew until they fall apart. Pick your plate.",
    price: "from £4",
    palette: ["#7a2f1c", "#c9552a", "#e3a92d"],
  },
  {
    name: "Goat Pepper Soup",
    yoruba: "Ọbẹ̀ ata ẽwúrẹ́",
    desc: "A deep, peppery broth with tender goat, uziza and scent leaf. The cure for a London evening.",
    price: "£14",
    palette: ["#8a4a1e", "#e3a92d", "#f1c45c"],
  },
  {
    name: "Beef Suya",
    yoruba: "Suya",
    desc: "Thin-cut beef in yaji spice, grilled over high heat and served with onions and fresh tomato.",
    price: "£12",
    palette: ["#3a1a10", "#c9552a", "#e8703f"],
  },
];

export const menu: MenuSection[] = [
  {
    id: "abula",
    title: "Abula & Swallows",
    blurb: "Every swallow comes with your choice of soup. Add meats and extras as you like.",
    items: [
      { name: "Abula Plate", yoruba: "Àmàlà + gbẹ̀gìrì + ewédú", desc: "Amala with gbegiri, ewedu and ata dindin, two meats of your choice.", price: "£13.50", tags: ["signature"] },
      { name: "Amala", yoruba: "Àmàlà", desc: "Yam flour swallow, served hot with any soup.", price: "£3.50" },
      { name: "Pounded Yam", yoruba: "Iyán", desc: "Smooth, stretchy, made fresh.", price: "£4.50" },
      { name: "Eba", yoruba: "Ẹ̀bà", desc: "Garri swallow, yellow or white.", price: "£3.50" },
      { name: "Semo", yoruba: "Semovita", desc: "Light wheat swallow.", price: "£3.50" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    blurb: "Made daily from scratch. Served with a swallow of your choice.",
    items: [
      { name: "Gbegiri & Ewedu", yoruba: "Gbẹ̀gìrì + ewédú", desc: "The abula pair: bean soup and jute leaf soup.", price: "£7.00", tags: ["signature", "veg"] },
      { name: "Efo Riro", yoruba: "Ẹ̀fọ́ rírò", desc: "Spinach stew with locust beans, peppers and assorted meat.", price: "£9.00", tags: ["spicy"] },
      { name: "Egusi", yoruba: "Ẹ̀gúsí", desc: "Ground melon seed soup with bitter leaf or spinach.", price: "£9.00" },
      { name: "Ogbono", yoruba: "Àpọ̀n", desc: "Drawn soup of wild mango seed, rich and warming.", price: "£9.00" },
      { name: "Ayamase", yoruba: "Ọbẹ̀ ata dúdú", desc: "Green pepper designer stew with assorted meats.", price: "£10.00", tags: ["spicy"] },
    ],
  },
  {
    id: "meats",
    title: "Meats & Extras",
    blurb: "Priced per piece. Mix and match.",
    items: [
      { name: "Shaki", desc: "Beef tripe, slow-cooked.", price: "£3.50" },
      { name: "Ponmo", desc: "Cow skin in stew, soft and peppery.", price: "£3.00" },
      { name: "Abodi & Fuku", desc: "Intestine and lung, for the real ones.", price: "£3.50" },
      { name: "Goat Meat", yoruba: "Ẽwúrẹ́", desc: "Stewed goat on the bone.", price: "£4.50" },
      { name: "Fried Fish", desc: "Whole tilapia or croaker, pan-fried.", price: "£8.00" },
      { name: "Boiled Egg", desc: "In stew.", price: "£1.50" },
    ],
  },
  {
    id: "grill",
    title: "Pepper Soup & Grill",
    blurb: "From the pot and the fire. Best with a cold drink.",
    items: [
      { name: "Goat Pepper Soup", desc: "Peppery broth with tender goat and uziza.", price: "£14.00", tags: ["signature", "spicy"] },
      { name: "Catfish Pepper Soup", desc: "Fresh catfish in a hot, aromatic broth.", price: "£15.00", tags: ["spicy"] },
      { name: "Isi Ewu", desc: "Spiced goat head in palm oil sauce with utazi leaves.", price: "£16.00", tags: ["spicy"] },
      { name: "Nkwobi", desc: "Cow foot in a rich palm oil and potash sauce.", price: "£14.00" },
      { name: "Beef Suya", desc: "Yaji-spiced beef, grilled, with onion and tomato.", price: "£12.00", tags: ["signature", "spicy"] },
      { name: "Asun", desc: "Smoky peppered goat, chopped and charred.", price: "£13.00", tags: ["spicy"] },
    ],
  },
  {
    id: "rice",
    title: "Rice & Sides",
    blurb: "For the table, or for the ones who don't do swallow.",
    items: [
      { name: "Jollof Rice", desc: "Smoky party-style jollof with chicken or beef.", price: "£12.00" },
      { name: "Fried Rice", desc: "Nigerian fried rice with mixed veg and protein.", price: "£12.00" },
      { name: "Ofada & Ayamase", desc: "Local brown rice with green designer stew.", price: "£14.00", tags: ["spicy"] },
      { name: "Moi Moi", desc: "Steamed bean pudding.", price: "£3.50", tags: ["veg"] },
      { name: "Dodo", desc: "Fried plantain.", price: "£3.50", tags: ["veg"] },
      { name: "Puff Puff", desc: "Six, warm, lightly sweet.", price: "£4.00", tags: ["veg"] },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    blurb: "Soft drinks, Nigerian classics and a short list of beers and wines.",
    items: [
      { name: "Chapman", desc: "The Lagos cocktail, non-alcoholic.", price: "£5.00" },
      { name: "Zobo", desc: "Hibiscus, ginger, pineapple.", price: "£4.00" },
      { name: "Palm Wine", desc: "Chilled, by the glass.", price: "£5.50" },
      { name: "Malt", desc: "Supermalt or Maltina.", price: "£3.00" },
      { name: "Star / Gulder", desc: "Nigerian lager, 600ml.", price: "£6.00" },
      { name: "House Wine", desc: "Red or white, 175ml.", price: "£6.50" },
    ],
  },
];
