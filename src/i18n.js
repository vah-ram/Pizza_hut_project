import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          delivery: "Delivery",
          allproducts: "All Products",
          search: "Search",

          // UI
          categories: "CATEGORIES",
          see_all: "See All",

          // Slider categories
          categorie_special_offer: "Special Offers",
          categorie_melt: "Melts",
          categorie_pizzas: "Pizzas",
          categorie_pizza_hot_dog: "Pizza Hot-Dog",
          categorie_salads: "Salads",
          categorie_burgers_sandwiches: "Burgers & Sandwiches",
          categorie_snacks: "Snacks",
          categorie_desserts: "Desserts",
          categorie_beverages: "Beverages",
          categorie_sauce: "Sauces",

          //Slider offers
          offer_special_offer: "Special Offers",
          offer_meatlover: "Combo for Meat Lovers",
          offer_pizza_set: "Pizza Set",
          offer_combo_3_pizzas: "Combo with 3×27 cm pizzas",
          offer_combo_nuggets: "Combo Pizza x Nuggets Box",
          offer_cheese_bites_combo: "Cheese bites combo",
          offer_my_box_veggie: "My Box Veggie",
          offer_my_box_pepperoni: "My Box Pepperoni",
          offer_my_box_chicken_bbq: "My Box Chicken BBQ",
          offer_popular_combo: "Popular Combo",
          offer_combo_pepperoni: "Combo Pepperoni",

          //Menu Links
          menu_home: "Home",
          menu_about_us: "About Us",
          menu_terms_conditions: "Terms and Conditions",
          menu_privacy_policy: "Privacy policy"
        }
      },

      ru: {
        translation: {
          delivery: "Доставка",
          allproducts: "Все продукты",
          search: "Поиск",

          // UI
          categories: "Категории",
          see_all: "Смотреть все",

          // Slider categories
          categorie_special_offer: "Специальные предложения",
          categorie_melt: "Мелтсы",
          categorie_pizzas: "Пиццы",
          categorie_pizza_hot_dog: "Пицца хот-дог",
          categorie_salads: "Салаты",
          categorie_burgers_sandwiches: "Бургеры и сэндвичи",
          categorie_snacks: "Закуски",
          categorie_desserts: "Десерты",
          categorie_beverages: "Напитки",
          categorie_sauces: "Соусы",

          //Slider offers
          offer_special_offer: "Специальные предложения",
          offer_meatlover: "Комбо Для Любителей Мяса",
          offer_pizza_set: "Пицца Сет",
          offer_combo_3_pizzas: "Комбо из 3 пицц 27 см",
          offer_combo_nuggets: "Комбо Пицца + Наггетсы",
          offer_cheese_bites_combo: "Комбо с сырными шариками",
          offer_my_box_veggie: "Мой Бокс Овощной",
          offer_my_box_pepperoni: "Мой Бокс Пепперони",
          offer_my_box_chicken_bbq: "Мой Бокс Чикен BBQ",
          offer_popular_combo: "Популярное комбо",
          offer_combo_pepperoni: "Комбо Пепперони",
          
          //Menu Links
          menu_home: "Главная",
          menu_about_us: "О нас",
          menu_terms_conditions: "Условия и положения",
          menu_privacy_policy: "Политика конфиденциальности"
        }
      },

      am: {
        translation: {
          delivery: "Առաքում",
          allproducts: "Բոլոր ապրանքները",
          search: "Փնտրել",

          // UI
          categories: "Կատեգորիաներ",
          see_all: "Տեսնել բոլորը",

          // Slider categories
          categorie_special_offer: "Հատուկ առաջարկներ",
          categorie_melt: "Մելթս",
          categorie_pizzas: "Պիցցաներ",
          categorie_pizza_hot_dog: "Պիցցա հոթ-դոգ",
          categorie_salads: "Աղցաններ",
          categorie_burgers_sandwiches: "Բուրգերներ և սենդվիչներ",
          categorie_snacks: "Խորտիկներ",
          categorie_desserts: "Աղանդեր",
          categorie_beverages: "Խմիչքներ",
          categorie_sauces: "Սոուսներ",

          //Slider offers
          offer_special_offer: "Հատուկ առաջարկներ",
          offer_meatlover: "Կոմբո Մսի Սիրահարների համար",
          offer_pizza_set: "Պիցցա Սեթ",
          offer_combo_3_pizzas: "Կոմբո 3 միջին պիցցաներով",
          offer_combo_nuggets: "Պիցցա + Նագեթս տուփ",
          offer_cheese_bites_combo: "Չիզ բայթս փաթեթ",
          offer_my_box_veggie: "Իմ Բոքս Վեգգի",
          offer_my_box_pepperoni: "Իմ Բոքս Պեպերոնի",
          offer_my_box_chicken_bbq: "Իմ Բոքս Չիքեն BBQ",
          offer_popular_combo: "Հանրաճանաչ փաթեթ",
          offer_combo_pepperoni: "Պեպերոնի փաթեթ",

          //Menu Links
          menu_home: "Գլխավոր",
          menu_about_us: "Մեր մասին",
          menu_terms_conditions: "Ընդհանուր դրույթներր եւ պայմանները",
          menu_privacy_policy: "Գաղտնիության քաղաքականություն"
        }
      }
    },

    lng: savedLang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
