const ROAD_SECTION = document.querySelector('.roads');
const BUTTON_ROAD_LEFT = document.querySelector('#roads__change-type_direction_left');
const BUTTON_ROAD_RIGHT = document.querySelector('#roads__change-type_direction_right');
const BUTTON_BYKES_HIGHWAY = document.querySelector('#bikes-highway');
const BUTTON_BYKES_GREVEL = document.querySelector('#bikes-grevel');
const BUTTON_BYKES_TT = document.querySelector('#bikes-tt');
const INPUT_EMAIL = document.querySelector('.footer__input');
const BUTTON_SUBMITE_EMAIL = document.querySelector('.footer__input-submit');
const SWITCHER = document.querySelector('.switcher');
const SWITCHER_CHECKBOX = document.querySelectorAll('.switcher__input');
const FOOTER = document.querySelector('.footer');
const FOOTER_TITLE = document.querySelector('.footer__title');
const TRAINING_LINK = document.querySelectorAll('.training__link');
const TRAINING_TITLE = document.querySelector('.training__title');
const PAGE = document.querySelector('.page');
const BUTTONS_BIKE = document.querySelectorAll('.bikes__button');
const BUTTON_ROAD_CHANGE_TYPE = document.querySelectorAll('.roads__change-type');
const EDDIE_PHRASE = document.querySelector('.eddie-phrase__name');
const EDDIE_PHRASE_TITLE = document.querySelector('.eddie-phrase__title');
const INTRO_SIGNATURE = document.querySelector('.intro__signature');
const HEADER_LINK = document.querySelectorAll('.header__list-link');
const CARDS_CONTAINER = document.querySelector('.bikes__cards-container');
const STICKY_CONTAINER = document.querySelector('.intro__sticky-container');
const INTRO_TEXT_CONTAINER = document.querySelector('.intro__info');
const INTRO_TITLE = document.querySelector('.intro__title');
const INTRO = document.querySelector('.intro');
const BUTTON_FIRST_BIKE = document.querySelector('#point-first-bike');
const BUTTON_SECOND_BIKE = document.querySelector('#point-second-bike');
const BUTTON_THIRD_BIKE = document.querySelector('#point-third-bike');
const DROPDOWN_BIKE_LIST = document.querySelector('.bikes__dropdown-list');
const BUTTON_LAMP = document.querySelector('.footer__lamp-button');
const HEADER_BURGER_ICON = document.querySelector('.header__burger');
const HEADER_BURGER_MENU_BODY = document.querySelector('.header__burger-body');
const HEADER_LINK_MOBILE =document.querySelectorAll('.header__list-link-mobile');
const HEADER_LIST_MOBILE =document.querySelector('.header__list-mobile');
const BURGER_SPAN = document.querySelector('.header__burger-line');
const HEADER_BURGER = document.querySelector('.header__burger');
const BODY = document.querySelector('.page');
const HEADER = document.querySelector('.header');
const CHECK_BOX_FOOTER = document.querySelector('#checkbox-footer');
const CHECK_BOX_HEADER = document.querySelector('#checkbox-header');
let bike_model;
let sections_title;
let section_texts;
let indRoadTypes = 0;
let activeIndexCardBike;


// Сменить тему страницы (светлая/темная).
const handleChangePageTheme = () => {
  bike_model = document.querySelectorAll('.bikes__model-text');
  sections_title = document.querySelectorAll('.section-title');
  section_texts = document.querySelectorAll('.section-text');
  SWITCHER.classList.toggle('switcher_theme_dark');
  FOOTER.classList.toggle('footer_theme_dark');
  BUTTON_SUBMITE_EMAIL.classList.toggle('footer__input-submit_theme_dark');
  INPUT_EMAIL.classList.toggle('footer__input_theme_dark');
  FOOTER_TITLE.classList.toggle('footer__title_theme_dark');
  TRAINING_TITLE.classList.toggle('training__title_theme_dark');
  PAGE.classList.toggle('page_theme_dark');
  EDDIE_PHRASE.classList.toggle('eddie-phrase__name_theme_dark');
  EDDIE_PHRASE_TITLE.classList.toggle('eddie-phrase__title_theme_dark');
  INTRO_SIGNATURE.classList.toggle('intro__signature_theme_dark');
  BUTTON_LAMP.classList.toggle('footer__lamp-button_theme_dark');
  HEADER_BURGER_MENU_BODY.classList.toggle('header__burger-body_theme_dark');
  HEADER_BURGER.classList.toggle('header__burger_theme_dark');
  BURGER_SPAN.classList.toggle('header__burger-line_theme_dark');
  INTRO_TITLE.classList.toggle('intro__title_theme_dark');
  HEADER.classList.toggle('header_theme_dark');

  section_texts.forEach(elem => {
    elem.classList.toggle('section-text_theme_dark');
  })
  BUTTONS_BIKE.forEach(elem => {
    let listOfClasses = elem.classList;
    listOfClasses.toggle('bikes__button_theme_dark');
    if (listOfClasses.contains('bikes__button_active_theme_dark')) {
      listOfClasses.toggle('bikes__button_active_theme_dark');
    }
  })
  TRAINING_LINK.forEach(elem => {
    elem.classList.toggle('training__link_theme_dark');
  })

  bike_model.forEach(elem => {
    elem.classList.toggle('bikes__model-text_theme_dark');
  })
  sections_title.forEach(elem => {
    elem.classList.toggle('section-title_theme_dark');
  })
  BUTTON_ROAD_CHANGE_TYPE.forEach(elem => {
    elem.classList.toggle('roads__change-type_theme_dark');
  })
  HEADER_LINK.forEach(elem => {
    elem.classList.toggle('header__list-link_theme_dark');
  })
  HEADER_LINK_MOBILE.forEach(elem => {
    elem.classList.toggle('header__list-link_theme_dark');
  })
}

// Довавить активный класс карточке с велосипедами.
const addActiveClassCardBike = () => {
  document.querySelector('.bikes__card').classList.add('bikes__card_active');
  activeIndexCardBike = 0;
}

// Менять карточки с велосипедами.
const handleChangeBikeImage = (ind) => {
  const BIKE_ACTUAL_IMAGES_ARR = document.querySelectorAll('.bikes__card');
  const BUTTONS_POINT_BIKE_ARR = document.querySelectorAll('.bikes__button-point');
  BIKE_ACTUAL_IMAGES_ARR[ind].classList.add('bikes__card_active');
  BIKE_ACTUAL_IMAGES_ARR[activeIndexCardBike].classList.remove('bikes__card_active');
  BUTTONS_POINT_BIKE_ARR[ind].classList.add('bikes__button-point_active');
  BUTTONS_POINT_BIKE_ARR[activeIndexCardBike].classList.remove('bikes__button-point_active');
  activeIndexCardBike = ind;
}

// Инициализировать блок карточек с велосипедами для шоссе из шаблона при первой загрузке страницы.
const initFirstBikesCards = () => {
  const BIKES_TEMPLATE = document.querySelector('#bikes-card-template').content;

  HIGHWAY_BIKES.forEach(element => {
    const CARD = BIKES_TEMPLATE.querySelector('.bikes__card').cloneNode(true);
    CARD.href = element.link;
    CARD.querySelector('#bike-card-img').src = element.img;
    CARD.querySelector('#bike-card-img').alt = element.alt;
    CARD.querySelector('.bikes__model-text').textContent = element.model;
    CARDS_CONTAINER.append(CARD);
    addActiveClassCardBike();
  });
}

// Инициализировать карточки велосипедов в зависимости от типа дорог.
const handleChangeBikesType = (listBikes, button) => {
  let ind = 0;
  const {children} = CARDS_CONTAINER;
  const childrenArray = Array.from(children);
  childrenArray.forEach(cardChildren => {
      cardChildren.href = listBikes[ind].link;
      cardChildren.querySelector('#bike-card-img').src = listBikes[ind].img;
      cardChildren.querySelector('#bike-card-img').alt = listBikes[ind].alt;
      cardChildren.querySelector('.bikes__model-text').textContent = listBikes[ind].model;
      ind++;
  })
  removeButtonActive();
  addBikesButtonActive(button);
}

// Заполнить секцию типами дорог и описанием из массива.
const initialRoadSlides = (roadsArray) => {
  const SWIPER_WRAPPER = document.querySelector('.swiper-wrapper');
  const ROAD_TEMPLATE =document.querySelector('#roads-template').content;
  roadsArray.forEach(road => {
    let SLIDE = ROAD_TEMPLATE.querySelector('.swiper-slide').cloneNode(true);
    SLIDE.querySelector('.roads__title').textContent = road.title;
    SLIDE.querySelector('#roads-img-first').src = road.image1;
    SLIDE.querySelector('#roads-img-first').alt = road.alt1;
    SLIDE.querySelector('#roads-img-second').src = road.image2;
    SLIDE.querySelector('#roads-img-second').alt = road.alt2;
    SLIDE.querySelector('#road-logo-type').src = road.logo;
    SLIDE.querySelector('#road-logo-type').alt = road.altLogo;
    SLIDE.querySelector('.roads__text').textContent = road.text;
    SWIPER_WRAPPER.append(SLIDE);
  })
}

// Добавить активную кнопку при выборе типов велосипедов.
const addBikesButtonActive = (button) => {
  button.classList.add('bikes__button_active');
  if(button.classList.contains('bikes__button_theme_dark')) {
    button.classList.add('bikes__button_active_theme_dark');
  }
}

// Удалить активную кнопку при выборе типов велосипедов.
const removeButtonActive = () => {
  if (BUTTON_BYKES_HIGHWAY.classList.contains('bikes__button_active')) {
    BUTTON_BYKES_HIGHWAY.classList.remove('bikes__button_active');
    if (BUTTON_BYKES_HIGHWAY.classList.contains('bikes__button_theme_dark')) {
      BUTTON_BYKES_HIGHWAY.classList.remove('bikes__button_active_theme_dark');
    }
  } else if (BUTTON_BYKES_GREVEL.classList.contains('bikes__button_active')) {
      BUTTON_BYKES_GREVEL.classList.remove('bikes__button_active');
      if (BUTTON_BYKES_GREVEL.classList.contains('bikes__button_theme_dark')) {
        BUTTON_BYKES_GREVEL.classList.remove('bikes__button_active_theme_dark');
      }
  } else {
      BUTTON_BYKES_TT.classList.remove('bikes__button_active');
      if (BUTTON_BYKES_TT.classList.contains('bikes__button_theme_dark')) {
        BUTTON_BYKES_TT.classList.remove('bikes__button_active_theme_dark');
      }
  }
}

// Вывести кнопку ОК при активном input-email.
const addActiveButtonSubmit = () => {
  BUTTON_SUBMITE_EMAIL.classList.add('footer__input-submit_active');
  INPUT_EMAIL.placeholder = 'Ваш e-mail';
}

// Вывести надпись "круто!" при нажатии кнопки ок.
const changeInputEmailPlaceHolder = (event) => {
  const inputValue = INPUT_EMAIL.value;
  if((inputValue.indexOf('@') != -1) && (inputValue.indexOf('.') != -1)) {
    INPUT_EMAIL.value = "";
    INPUT_EMAIL.placeholder = 'Круто!';
    removeActiveButtonSubmit();
    event.preventDefault();
  }
}

// Сброс активности кнопки ОК в при неактивном input-email.
const removeActiveButtonSubmit = () => {
  if (INPUT_EMAIL.value === "") {
    BUTTON_SUBMITE_EMAIL.classList.remove('footer__input-submit_active');
  }
}

// Переставить элементы в блоке intro в зависимости от разрешения.
const changeIntroElem = () => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    INTRO_TEXT_CONTAINER.prepend(STICKY_CONTAINER);
    INTRO_TEXT_CONTAINER.prepend(INTRO_TITLE);
  }
  if (windowWidth > 768) {
    INTRO.append(STICKY_CONTAINER);
    INTRO_TEXT_CONTAINER.prepend(INTRO_TITLE);
  }
}

// Сменить тип велосипедов с помощью выпадающего списка.
const handleDropdownChangeTypeBike = () => {
  let ind = 0;
  const {children} = CARDS_CONTAINER;
  const childrenArray = Array.from(children);
  const NUM_TYPE = DROPDOWN_BIKE_LIST.selectedIndex;
  let nameTypeBikeArray = NUM_TYPE === 0 ? HIGHWAY_BIKES : NUM_TYPE === 1 ? GREVEL_BIKES : TT_BIKES;
  childrenArray.forEach(cardChildren => {
    cardChildren.href = nameTypeBikeArray[ind].link;
    cardChildren.querySelector('#bike-card-img').src = nameTypeBikeArray[ind].img;
    cardChildren.querySelector('#bike-card-img').alt = nameTypeBikeArray[ind].alt;
    cardChildren.querySelector('.bikes__model-text').textContent = nameTypeBikeArray[ind].model;
    ind++;
  });
}

// Открыть или закрыть бургер меню через кнопку меню.
const openBurgerMenu = () => {
  HEADER_BURGER_MENU_BODY.classList.toggle('header__burger-body_active');
  BURGER_SPAN.classList.toggle('header__burger-line_active');
  HEADER_BURGER.classList.toggle('header__burger_active');
  BODY.classList.toggle('page_active-menu');
}

// Закрыть бургер меню при нажатии ссылки в хедере.
const closeBurgerMenu = () => {
  HEADER_BURGER_MENU_BODY.classList.remove('header__burger-body_active');
  BURGER_SPAN.classList.remove('header__burger-line_active');
  HEADER_BURGER.classList.remove('header__burger_active');
  BODY.classList.remove('page_active-menu');
}

// Изменить значение checked у свитчера тем в хедере и футере, если нажимается кнопка лампы в футере на малых разрешениях.
const changeCheckedSwitcherThemeByLamp = () => {
  SWITCHER_CHECKBOX.forEach(elem => {
    elem.checked ? elem.checked = false : elem.checked = true;
  })
}

initialRoadSlides(ROAD_TYPES);
initFirstBikesCards();
changeIntroElem();
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '#roads__change-type_direction_right',
    prevEl: '#roads__change-type_direction_left'
  },
  spaceBetween: 50,
  loop: true,
});

BUTTON_BYKES_HIGHWAY.addEventListener('click', () => handleChangeBikesType(HIGHWAY_BIKES, BUTTON_BYKES_HIGHWAY));
BUTTON_BYKES_GREVEL.addEventListener('click', () => handleChangeBikesType(GREVEL_BIKES, BUTTON_BYKES_GREVEL));
BUTTON_BYKES_TT.addEventListener('click', () => handleChangeBikesType(TT_BIKES, BUTTON_BYKES_TT));

BUTTON_FIRST_BIKE.addEventListener('click', () => handleChangeBikeImage(0));
BUTTON_SECOND_BIKE.addEventListener('click', () => handleChangeBikeImage(1));
BUTTON_THIRD_BIKE.addEventListener('click', () => handleChangeBikeImage(2));

INPUT_EMAIL.addEventListener('focus',addActiveButtonSubmit);
BUTTON_SUBMITE_EMAIL.addEventListener('click', changeInputEmailPlaceHolder);
INPUT_EMAIL.addEventListener('blur', () => {removeActiveButtonSubmit();});

SWITCHER_CHECKBOX.forEach (box => {
  box.addEventListener('click', (e) => {
    handleChangePageTheme();
    let target = e.target;
    target.id === 'checkbox-footer' ? CHECK_BOX_HEADER.checked ? CHECK_BOX_HEADER.checked = false : CHECK_BOX_HEADER.checked = true : '';
    target.id === 'checkbox-header' ? CHECK_BOX_FOOTER.checked ? CHECK_BOX_FOOTER.checked = false : CHECK_BOX_FOOTER.checked = true : '';
  });
})
window.addEventListener('resize', () => {
  changeIntroElem();
})

DROPDOWN_BIKE_LIST.addEventListener('change', handleDropdownChangeTypeBike);
BUTTON_LAMP.addEventListener('click', () => {
  changeCheckedSwitcherThemeByLamp();
  handleChangePageTheme();
});
HEADER_BURGER_ICON.addEventListener('click', openBurgerMenu);
HEADER_LIST_MOBILE.onclick = (event) => {
  let target = event.target;
  if (target.classList.contains('header__list-link-mobile')) {
    closeBurgerMenu();
  }
};

