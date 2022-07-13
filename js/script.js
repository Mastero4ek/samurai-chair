window.addEventListener('DOMContentLoaded', () => {

  //select header

  const selectHeader = document.querySelector('.select__header');
  const selectBody = document.querySelector('.select__body');
  const selectItem = document.querySelectorAll('.select__item');
  const selectSpan = document.querySelector('.select__title');
  const selectImg = document.querySelector('.select__header img');


  selectHeader.addEventListener('click', () => {
  if (selectBody.classList.contains('select__body--active')) {
    selectBody.classList.remove('select__body--active');
    selectImg.style.transform = 'rotate(0deg)';
    selectBody.style.maxHeight = null;
  }else {
    selectBody.classList.add('select__body--active');
    selectImg.style.transform = 'rotate(180deg)';
    selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
  }
  });

  selectItem.forEach((item, i) => {
  item.addEventListener('click', () => {
     selectSpan.textContent = item.textContent;
     selectBody.classList.remove('select__body--active');
     selectImg.style.transform = 'rotate(0deg)';
     selectBody.style.maxHeight = null;
  });
  });

//maps

  let flag = 0;

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('.map').offsetTop;

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {
        let center = [55.67555451365476,37.50218546744996];
        let mark1 = [55.59109158876315,37.73500327069093];
        let mark2 = [55.615778371264305,36.978963651245124];
        let mark3 = [55.6777791866833,37.93416090836259];

        function init() {
        let map = new ymaps.Map('map-element', {
        center: center,
        zoom: 11
        });

        let playsmark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/placemark.svg',
        iconImageSize: [99, 99],
        iconImageOffset: [-50, 70]

        });

      let playsmarkBalloon1 = new ymaps.Placemark(mark1,
        {
          balloonContent: `
          <div class="balloon">
            <h2 class="balloon__title">ООО "1000 кресел"</h2>
            <div class="balloon__contacts">
                <p><span>Адрес:</span> Россия, Московская область, посёлок Развилка вл17</p>
                <p><span>Режим работы:</span> 07:00 - 16:00</p>
                <p><span>Телефон:</span>
                <a href="tel:+78001234567">+7 800 123 45 67</a>
                </p>
            </div>
          </div>
          `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/placemark.svg',
        iconImageSize: [99, 99],
        iconImageOffset: [-40, -90]
          });

      let playsmarkBalloon2 = new ymaps.Placemark(mark2,
        {
          balloonContent: `
          <div class="balloon">
            <h2 class="balloon__title">ИП "Много кресел"</h2>
            <div class="balloon__contacts">
                <p><span>Адрес:</span> Россия, Московская область, Краснознаменск, улица Победы, 6в</p>
                <p><span>Режим работы:</span> 10:00 - 20:00</p>
                <p><span>Телефон:</span>
                <a href="tel:+78001234567">+7 800 123 45 67</a>
                </p>
            </div>
          </div>
          `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/placemark.svg',
        iconImageSize: [99, 99],
        iconImageOffset: [20, -60]
          });

      let playsmarkBalloon3 = new ymaps.Placemark(mark3,
        {
          balloonContent: `
          <div class="balloon">
            <h2 class="balloon__title">ООО "Супер-кресло"</h2>
            <div class="balloon__contacts">
                <p><span>Адрес:</span> Россия, Московская область, городской округ Люберцы, Касимовское шоссе, 3Б, лит.М</p>
                <p><span>Режим работы:</span> 07:00 - 17:00</p>
                <p><span>Телефон:</span>
                <a href="tel:+78001234567">+7 800 123 45 67</a>
                </p>
            </div>
          </div>
          `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/placemark.svg',
        iconImageSize: [99, 99],
        iconImageOffset: [60, -65]
          });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

        map.geoObjects.add(playsmark);
        map.geoObjects.add(playsmarkBalloon1);
        map.geoObjects.add(playsmarkBalloon2);
        map.geoObjects.add(playsmarkBalloon3);
      }

        
          const yaScript = document.createElement('script');
    
        yaScript.type = 'text/javascript';
        yaScript.src = "https://api-maps.yandex.ru/2.1/?apikey=76e41e6b-f3a9-4a9c-80d3-17839d5764b8&lang=ru_RU";
        document.body.appendChild(yaScript);

        yaScript.addEventListener("load", () => {
          ymaps.ready(init);
        });


        flag = 1;
    }
  });

//mobile menu

  const headerMobile = document.querySelector('.header__mobile'),
      burger = document.querySelector('.header__burger'),
      cross = document.querySelector('.header__cross'),
      body = document.querySelector('body');

  burger.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'none';
  cross.style.display = 'block';
  body.classList.add('noscroll');
  });

  cross.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  burger.style.display = 'block';
  cross.style.display = 'none';
  body.classList.remove('noscroll');
  });

//modal

  const modal = document.querySelector('.modal'),
      modalButtons = document.querySelectorAll('.button-modal'),
      clientWidth = document.documentElement.clientWidth,//видимая ширина экрана
      innerWidth = window.innerWidth;//полная ширина экрана

    modalButtons.forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('active__button');
      body.classList.add('noscroll');
      headerMobile.classList.remove('active');
      cross.style.display = 'none';
      burger.style.display = 'block';

      if (innerWidth > 768) {
        body.style.paddingRight = innerWidth - clientWidth + 'px';//добавляем padding = ширине вертикального скролла
      }else {
        body.style.paddingRight = null;
      }

      if (innerWidth <= 768) {
        body.style.paddingRight = null;
      };
    });
    });


    modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
      modal.classList.remove('active__button');
      body.classList.remove('noscroll');
      body.style.paddingRight = null;//обнуляем padding
    }
    });

//slider

  const swiper = new Swiper('.slider', {
  loop: true,
  pagination: {
    el: '.slider__pagination',
  },
  navigation: {
    nextEl: '.slider__arrow-right',
    prevEl: '.slider__arrow-left',
  }
  });

//iform send

  const form = document.querySelector('.form__elements'),
        telSelector = form.querySelector('input[type="tel"]'),
        inputMask = new Inputmask('+7 (999) 999-99-99');

  inputMask.mask(telSelector);

  const validation = new JustValidate('.form__elements');

  validation
    .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Колличество символов меньше 2!',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Колличество символов больше 30!'
    },
    {
      rule: 'required',
      value: 'true',
      errorMessage: 'Введите имя!'
    }
    ])

    .addField('#check', [{
      rule: 'required',
      value: 'true',
      errorMessage: 'Подтвердите согласие на обработку личных данных!'
    }
    ])

    .addField('#telephone', [{
      rule: 'required',
      value: 'true',
      errorMessage: 'Введите номер телефона!'
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный номер телефона!'
    }
    ]).onSuccess((e) => {
      if (document.querySelector('#check').checked) {
        const sendForm = (data) => {
          return fetch('mail.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          }).then(res => res.json());
        };

        const dataForm = new FormData(e.target);
        const user = {};

        dataForm.forEach((val, key) => {
          user[key] = val;
        });

        sendForm(user).then(data => {
            document.querySelector('.modal-thank').style.display = 'block';
            body.classList.add('noscroll');

            if (innerWidth > 768) {
              body.style.paddingRight = innerWidth - clientWidth + 'px';//добавляем padding = ширине вертикального скролла
            }else {
              body.style.paddingRight = null;
            }

            if (innerWidth <= 768) {
              body.style.paddingRight = null;
            };
        });

        e.target.reset();
     }

  });

  //accordeon

  const accordeon = document.querySelector('.facts__items'),
        tab = document.querySelectorAll('.facts__item'),
        answer = document.querySelectorAll('.facts__answer'),
        plus = document.querySelectorAll('.facts__plus'),
        minus = document.querySelectorAll('.facts__minus'),
        open = document.querySelectorAll('.facts__open--style');

  accordeon.addEventListener('click', (e) => {
    const target = e.target.closest('.facts__item');

    if (target) {

      tab.forEach((item, i) => {
        if (item === target && !target.classList.contains('facts__item--active')) {
          answer[i].classList.add('active');
          tab[i].classList.add('facts__item--active');
          plus[i].style.display = 'none';
          minus[i].style.display = 'flex';
          open[i].style.background = '#0074D4';
        } else {
          answer[i].classList.remove('active');
          tab[i].classList.remove('facts__item--active');
          plus[i].style.display = 'flex';
          minus[i].style.display = 'none';
          open[i].style.background = '#37A5FF';
        }

      });
    }
  });

  //features-dots

  const dot = document.querySelectorAll('.features__dot'),
        text = document.querySelectorAll('.features__text'),
        chair = document.querySelector('.features__chair'),
        cartMobile = document.querySelectorAll('.features__mobile-cart'),
        textMobile = document.querySelectorAll('.features__mobile-description'),
        settings = document.querySelector('.features__settings');

        chair.addEventListener('click', (e) => {
          const dots = e.target.closest('.features__dot');

          if (dots) {

            dot.forEach((item, i) => {

              if (item === dots) {
                text[i].classList.add('features__text--style');
                dot[i].classList.add('features__dot--active');
                cartMobile[i].classList.add('features__mobile-cart--active');
              } else {
                text[i].classList.remove('features__text--style');
                dot[i].classList.remove('features__dot--active');
                cartMobile[i].classList.remove('features__mobile-cart--active');
              }
            });
          }
        });

  //modal-thank

  const modalThank = document.querySelector('.modal-thank'),
        modalButton = document.querySelector('.button-modal-thank');

    modalButton.addEventListener('click', () => {
      modalThank.style.display = 'none';
      body.classList.remove('noscroll');
      body.style.paddingRight = null;//обнуляем padding
    });
});