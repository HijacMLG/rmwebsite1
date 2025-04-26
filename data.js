// data.js
// Central place to keep mock data for the front page. Feel free to replace
// any URLs, prices, regions, etc. with real API data later.

// ──────────────────────────────────────────────────────
// 1) Hero banner images (static + swipeable)
// ──────────────────────────────────────────────────────
export const bannerImages = [
  "https://slider.eneba.games/resized/3iKzOqYVQVWrW_xjsJtYoI7oJSyu24pj-B8PEEDFZ7Q_1500x400_1x-1500x400_150_0.jpg",
  "https://slider.eneba.games/resized/2TgAlhzZUv4cvGCKNiJtqcO74nOVMM8xL2i8bjtKzKE_1500x400_1x-1500x400_150_0.jpg",
  "https://slider.eneba.games/resized/1RaNPz0M8HpxjSTRxClzlYgJbtyD25g9MyjII7nnGJc_1500x400_1x-1500x400_150_0.jpg",
  "https://slider.eneba.games/resized/krVNNc7b5DBgcw5LiSJ6_25NL3BLl8hokBw0nJV_uq8_1500x400_1x-1500x400_150_0.jpg",
];

// ──────────────────────────────────────────────────────
// 2) Category slider items for <BannerSwiper />
// ──────────────────────────────────────────────────────
export const categories = [
  {
    id: 1,
    name: "Gift Cards",
    url: "/trending/gift-cards",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_c091976a-6fb1-4d4c-96c9-64407869a589.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_c091976a-6fb1-4d4c-96c9-64407869a589.webp",
  },
  {
    id: 2,
    name: "Games",
    url: "/trending/video-games",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_d3cf5b03-b80b-4f7e-bf97-ed359903de0b.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_d3cf5b03-b80b-4f7e-bf97-ed359903de0b.webp",
  },
  {
    id: 3,
    name: "Software & Apps",
    url: "/trending/software",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_f6bb038d-9fe8-459c-a4df-a63e06f67e32.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_f6bb038d-9fe8-459c-a4df-a63e06f67e32.webp",
  },
  {
    id: 4,
    name: "Payment Cards",
    url: "/trending/payment-cards",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_d7f890c0-3cad-488c-9606-905f84aa9fe7.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_d7f890c0-3cad-488c-9606-905f84aa9fe7.webp",
  },
  {
    id: 5,
    name: "Game coins",
    url: "/trending/game-coins",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_3c2a9034-2569-4484-92ad-c00e384e7085.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_3c2a9034-2569-4484-92ad-c00e384e7085.webp",
  },
  {
    id: 6,
    name: "Items",
    url: "/trending/items",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_c508fb9f-a58e-4819-b815-c4684d8a2e70.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_c508fb9f-a58e-4819-b815-c4684d8a2e70.webp",
  },
  {
    id: 7,
    name: "Accounts",
    url: "/trending/accounts",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_5830014a-b974-45c6-9672-b51e83112fb7.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_5830014a-b974-45c6-9672-b51e83112fb7.webp",
  },
  {
    id: 8,
    name: "Boosting",
    url: "/trending/boosting",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_73f1f30c-e4a5-48de-929e-1c6232fbd66b.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_73f1f30c-e4a5-48de-929e-1c6232fbd66b.webp",
  },
  {
    id: 9,
    name: "Telco",
    url: "/trending/mobile-recharge",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_f492d6a3-d6cb-4f9a-be64-8fd0aa5aaea6.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_f492d6a3-d6cb-4f9a-be64-8fd0aa5aaea6.webp",
  },
  {
    id: 10,
    name: "Coaching",
    url: "/trending/coaching",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_aabd600d-b7fd-464a-a124-c7fba4ce2fb9.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_aabd600d-b7fd-464a-a124-c7fba4ce2fb9.webp",
  },
  {
    id: 11,
    name: "Skins",
    url: "/trending/skins",
    iconLight:
      "https://assets.g2g.com/img/offer/cat_light_6fd06182-b5a4-4d13-866a-46d39631a26d.webp",
    iconColor:
      "https://assets.g2g.com/img/offer/cat_color_6fd06182-b5a4-4d13-866a-46d39631a26d.webp",
  },
];

// ──────────────────────────────────────────────────────
// 3) Sample product cards for <ProductsCarousel />
// ──────────────────────────────────────────────────────
export const sampleProducts = [
  {
    title: "Xbox Game Pass for PC – 14 days TRIAL",
    region: "Global",
    price: "€0.31",
    image:
      "https://products.eneba.games/resized-products/IfUjISXQGwpguNmOAWzC_bg_SDLzK1EptA0xoiwxFQ0_350x200_1x-0.jpeg",
    url: "/windows-store-xbox-game-pass-for-pc-14-days-trial-subscription-global",
  },
  {
    title: "MotoGP™25 (Xbox Series X|S) XBOX LIVE Key",
    region: "Europe",
    price: "€60.99",
    image:
      "https://products.eneba.games/resized-products/Ckpjmk_D-lGxwrKRngmMnyh37xM7TjoF5zsCEjIeh3s_350x200_1x-0.jpg",
    url: "/xbox-motogptm25-xbox-series-x-s-xbox-live-key-europe",
  },
  {
    title: "NBA 2K24 Kobe Bryant Edition (PC) Steam Key",
    region: "Global",
    price: "€10.42",
    image:
      "https://products.eneba.games/resized-products/HMduqb1M7XSrtT1hcMORZMnpooaJuZXVr-ePm0o2nfE_350x200_1x-0.jpg",
    url: "/steam-nba-2k24-kobe-bryant-edition-pc-steam-key-global",
  },
  {
    title: "Surviving Mars – Season Pass (DLC)",
    region: "Europe",
    price: "€17.21",
    image:
      "https://products.eneba.games/resized-products/_23b936nN_UGTbzoZj-ylC5pntcx8RXqSc4nCldyLnM_350x200_1x-0.jpeg",
    url: "/steam-surviving-mars-season-pass-dlc-pc-steam-key-europe",
  },
  {
    title: "Minecraft: Java & Bedrock Edition",
    region: "Global",
    price: "€14.41",
    image:
      "https://products.eneba.games/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_1x-0.png",
    url: "/other-minecraft-java-bedrock-edition-pc-official-website-key-global",
  },
];
