import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {

          //mobile menu
          home: "Home",
          about_us: "About Us",
          login: "Log In",
          profile: "Profile",

          delivery: "Delivery",
          main_page: "Main page",
          menu: "Menu",
          basket: "Basket",
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
          categorie_sauces: "Sauces",

          //Slider offers
          offer_special_offer: "Special Offers",

          //Menu Links
          menu_home: "Home",
          menu_about_us: "About Us",
          menu_terms_conditions: "Terms and Conditions",
          menu_privacy_policy: "Privacy policy",

            //Authorization Links
            register_context: "Log in and get access on all services with one account",
            register_btn_text: "Log in",
            registration_title: "Registration",
            registration_name: "Name",
            registration_surname: "Surname",
            registration_phone: "Phone number",
            registration_email: "Email",
            registration_password: "Password",
            registration_re_password: "Re-enter Password",
            registration_agree_text: "I read and agree with",
            registration_terms: "Conditions",
            registration_and_text: "and",
            registration_privacy: "Privacy Policy",
            registration_button: "Register",

            //Login Links
            login_register_description: "Register and get access on all services with one account",
            login_register_button: "Register",

            login_authorization_title: "AUTHORIZATION",
            login_authorization_subtitle: "You can log in with Bonee account",

            login_email_placeholder: "Email",
            login_password_placeholder: "Password",
            login_forgot_password: "Forgot your Password?",
            login_button_text: "LOG IN",

            login_or: "OR",
            login_continue_google: "CONTINUE WITH GOOGLE",
            login_continue_guest: "CONTINUE AS A GUEST",

            //Feedback Links
            feedback_request_title: "Submit a request",
            feedback_select_topic_label: "Please select a topic",
            feedback_select_topic_placeholder: "Set Feedback messages",
            feedback_email_label: "Email",
            feedback_description_label: "Description",
            feedback_attach_files_button: "Attach File(s) (jpg, jpeg, png)",
            feedback_button_text: "Submit",

        }
      },

      ru: {
        translation: {

          //mobile menu
          home: "Главная",
          about_us: "О нас",
          login: "Войти",
          profile: "Профиль",

          delivery: "Доставка",
          main_page: "Главная страница",
          menu: "Меню",
          basket: "Корзина",
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
          
          //Menu Links
          menu_home: "Главная",
          menu_about_us: "О нас",
          menu_terms_conditions: "Условия и положения",
          menu_privacy_policy: "Политика конфиденциальности",

            //Authorization Links
            register_context: "Авторизуйтесь и получите доступ ко всем сервисам с одной учетной записью",
            register_btn_text: "Войти",
            registration_title: "Регистрация",
            registration_name: "Имя",
            registration_surname: "Фамилия",
            registration_phone: "Номер телефона",
            registration_email: "Электронная почта",
            registration_password: "Пароль",
            registration_re_password: "Повторите пароль",
            registration_agree_text: "Я прочитал(а) и согласен(на) с",
            registration_terms: "Условиями",
            registration_and_text: "и",
            registration_privacy: "Политикой конфиденциальности",
            registration_button: "Зарегистрироваться",

            //Login Links
            login_register_description: "Зарегистрируйтесь и получите доступ ко всем сервисам с одной учетной записью",
            login_register_button: "Регистрация",

            login_authorization_title: "АВТОРИЗАЦИЯ",
            login_authorization_subtitle: "Вы можете войти через Bonee аккаунт",

            login_email_placeholder: "Электронная почта",
            login_password_placeholder: "Пароль",
            login_forgot_password: "Забыли пароль?",
            login_button_text: "ВОЙТИ",

            login_or: "ИЛИ",
            login_continue_google: "ПРОДОЛЖИТЬ ЧЕРЕЗ GOOGLE",
            login_continue_guest: "ПРОДОЛЖИТЬ КАК ГОСТЬ",

            //Feedback Links
            feedback_request_title: "Отправить запрос",
            feedback_select_topic_label: "Пожалуйста, выберите тему",
            feedback_select_topic_placeholder: "Настроить сообщения обратной связи",
            feedback_email_label: "Электронная почта",
            feedback_description_label: "Описание",
            feedback_attach_files_button: "Прикрепить файл(ы) (jpg, jpeg, png)",
            feedback_button_text: "Отправить",

        }
      },

      am: {
        translation: {

          //mobile menu
          home: "Գլխավոր",
          about_us: "Մեր մասին",
          login: "Մուտք",
          profile: "Պրոֆիլ",

          delivery: "Առաքում",
          main_page: "Հիմնական էջ",
          menu: "Մենյու",
          basket: "Զամբյուղ",
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

          //Menu Links
          menu_home: "Գլխավոր",
          menu_about_us: "Մեր մասին",
          menu_terms_conditions: "Ընդհանուր դրույթներր եւ պայմանները",
          menu_privacy_policy: "Գաղտնիության քաղաքականություն",

            //Authorization Links
            register_context: "Մուտք գործեք և մուտք գործեք բոլոր ծառայություններից մեկ հաշվի միջոցով",
            register_btn_text: "Մուտք գործել",
            registration_title: "Գրանցում",
            registration_name: "Անուն",
            registration_surname: "Ազգանուն",
            registration_phone: "Հեռախոսահամար",
            registration_email: "Էլ. հասցե",
            registration_password: "Գաղտնաբառ",
            registration_re_password: "Կրկնեք գաղտնաբառը",
            registration_agree_text: "Կարդացել եմ և համաձայն եմ",
            registration_terms: "Պայմաններին",
            registration_and_text: "և",
            registration_privacy: "Գաղտնիության քաղաքականությանը",
            registration_button: "Գրանցվել",

            //Login Links
            login_register_description: "Գրանցվեք և ստացեք մուտք բոլոր ծառայություններին մեկ հաշիվով",
            login_register_button: "Գրանցվել",

            login_authorization_title: "ԱՎԹՈՐԻԶԱՑԻԱ",
            login_authorization_subtitle: "Դուք կարող եք մուտք գործել Bonee account-ով",

            login_email_placeholder: "Էլ․ հասցե",
            login_password_placeholder: "Գաղտնաբառ",
            login_forgot_password: "Մոռացե՞լ եք գաղտնաբառը",
            login_button_text: "ՄՈՒՏՔ ԳՈՐԾԵԼ",

            login_or: "ԿԱՄ",
            login_continue_google: "ՇԱՐՈՒՆԱԿԵԼ GOOGLE-ՈՎ",
            login_continue_guest: "ՇԱՐՈՒՆԱԿԵԼ ՈՐՊԵՍ ՀՅՈՒՐ",

            //Feedback Links
            feedback_request_title: "Գրանցել հարցումը",
            feedback_select_topic_label: "Խնդրում ենք ընտրել թեմա",
            feedback_select_topic_placeholder: "Սահմանել հետադարձ կապի հաղորդագրությունները",
            feedback_email_label: "Էլեկտրոնային հասցե",
            feedback_description_label: "Նկարագրություն",
            feedback_attach_files_button: "Կցել ֆայլ(եր) (jpg, jpeg, png)",
            feedback_button_text: "Հաստատել",

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
