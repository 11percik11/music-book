export interface Answer {
  id: number
  title: string
  isCorrect: boolean
  img?: string
}

export interface Question {
  id: number
  soundPath: string
  answers: Answer[]
  type: 'string' | 'img'
}

export const questionsData: Question[] = [
  {
    id: 1,
    soundPath: '/sounds/1.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Хруст снега под ногами',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Звон хрустальных бокалов',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Треск жарящейся на сковороде яичницы',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звон монет',
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    soundPath: '/sounds/2.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Перелистывание страниц банковского договора',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Шелест купюр',
        isCorrect: true,
      },
      {
        id: 3,
        title: 'Полоскание белья',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Нарезка продуктов кухонным ножом',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    soundPath: '/sounds/3.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Шум двигателя спортивного автомобиля',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Дрель соседа',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Работа мясорубки',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук пересчета наличных банкоматом',
        isCorrect: true,
      },
    ],
  },
  {
    id: 4,
    soundPath: '/sounds/4.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук перевода денег в приложении',
        isCorrect: true,
      },
      {
        id: 2,
        title: 'Дверной звонок',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Пение птиц в лесу',
        isCorrect: false,
      },
      {
        id: 4,
        title:
          'Подтверждение об уплате налога в личном кабинете налогоплательщика',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    soundPath: '/sounds/5.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Удар в гонг',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Звук зачисления денежных средств в банкомате',
        isCorrect: true,
      },
      {
        id: 3,
        title: 'Входящее смс-сообщение',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Подтверждение покупки на кассе самообслуживания',
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    soundPath: '/sounds/6.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Автоответчик на телефоне коллеги',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Объявление диктора на вокзале',
        isCorrect: false,
      },
      {
        id: 3,
        title:
          'Телефонный автоинформатор о задолженности по коммунальным услугам',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук бота-оператора, когда звонишь в банк',
        isCorrect: true,
      },
    ],
  },
  {
    id: 7,
    soundPath: '/sounds/7.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Cтук дверцы холодильника',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Звук открытия сейфа',
        isCorrect: true,
      },
      {
        id: 3,
        title: 'Удар по бильярдным шарам',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук игрового автомата',
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    soundPath: '/sounds/8.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Оповещение о неверно введенном пароле в приложении банка',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Звук детской игрушки',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Звук бесконтактной оплаты (терминалы для эквайринга)',
        isCorrect: true,
      },
      {
        id: 4,
        title: 'Сигнал электронного градусника',
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    soundPath: '/sounds/9.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук набора пин-кода в банкомате',
        isCorrect: true,
      },
      {
        id: 2,
        title: 'Выполнение подсчетов на калькуляторе',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Настройка клавиш саксофона',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук печатной машинки',
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    soundPath: '/sounds/10.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук телефонных помех',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Сигнал, передаваемый азбукой Морзе',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Звук чеканки монет на станке',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук печати чека в магазине',
        isCorrect: true,
      },
    ],
  },
  {
    id: 11,
    soundPath: '/sounds/11.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Работающий датчик пожарной сигнализации',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Писк птенца в гнезде',
        isCorrect: false,
      },
      {
        id: 3,
        title:
          'Оповещение о нехватке средств на карте для оплаты товара на терминале',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук сканирования штрих-кода/QR-кода',
        isCorrect: true,
      },
    ],
  },
  {
    id: 12,
    soundPath: '/sounds/12.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук открытия замка или механизма',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Звук выезжающей кассы',
        isCorrect: true,
      },
      {
        id: 3,
        title: 'Звук оплаты товара',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук проезда продуктовой тележки в супермаркете',
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    soundPath: '/sounds/13.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Шум магазина/торгового центра',
        isCorrect: true,
      },
      {
        id: 2,
        title: 'Шум банковского офиса',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Шум МФЦ',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Шум поликлиники',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    soundPath: '/sounds/14.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук пересчета денег вручную',
        isCorrect: true,
      },
      {
        id: 2,
        title: 'Звук перелистывания страниц',
        isCorrect: false,
      },
      {
        id: 3,
        title: 'Шелест листьев',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук подсчитывания купюр на счетной машинке',
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    soundPath: '/sounds/15.mp3',
    type: 'string',
    answers: [
      {
        id: 1,
        title: 'Звук печати на принтере',
        isCorrect: false,
      },
      {
        id: 2,
        title: 'Выдача карты после операций с терминалом',
        isCorrect: true,
      },
      {
        id: 3,
        title: 'Звук открытия багажника автомобиля',
        isCorrect: false,
      },
      {
        id: 4,
        title: 'Звук застегивания молнии на кофте',
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    soundPath: '/sounds/16.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук ремонта',
        isCorrect: false,
        img: '/images/question/1.webp',
      },
      {
        id: 2,
        title: 'Звук забивания гвоздей',
        isCorrect: false,
        img: '/images/question/2.webp',
      },
      {
        id: 3,
        title: 'Стук молотка на аукционе',
        isCorrect: true,
        img: '/images/question/3.webp',
      },
      {
        id: 4,
        title: 'Звук чеканки монет на станке',
        isCorrect: false,
        img: '/images/question/4.webp',
      },
    ],
  },
  {
    id: 17,
    soundPath: '/sounds/17.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звуки подтекающего крана',
        isCorrect: false,
        img: '/images/question/5.webp',
      },
      {
        id: 2,
        title: 'Всплеск воды от кидания монетки в фонтан',
        isCorrect: true,
        img: '/images/question/6.webp',
      },
      {
        id: 3,
        title: 'Игра в «камешки»/«лягушки» с монетами',
        isCorrect: false,
        img: '/images/question/7.webp',
      },
      {
        id: 4,
        title: 'Звук аквариума',
        isCorrect: false,
        img: '/images/question/8.webp',
      },
    ],
  },
  {
    id: 18,
    soundPath: '/sounds/18.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук брошенного на стол кубика для настольных игр',
        isCorrect: false,
        img: '/images/question/9.webp',
      },
      {
        id: 2,
        title: 'Звук металлического шарика, катящегося по гладкой поверхности',
        isCorrect: false,
        img: '/images/question/10.webp',
      },
      {
        id: 3,
        title: 'Звук детской юлы, крутящейся на столе',
        isCorrect: false,
        img: '/images/question/11.webp',
      },
      {
        id: 4,
        title: 'Звук монеты, крутящейся на столе',
        isCorrect: true,
        img: '/images/question/12.webp',
      },
    ],
  },
  {
    id: 19,
    soundPath: '/sounds/19.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук противокражных рамок в магазине',
        isCorrect: false,
        img: '/images/question/13.webp',
      },
      {
        id: 2,
        title: 'Звук удара молотка по наковальне',
        isCorrect: false,
        img: '/images/question/14.webp',
      },
      {
        id: 3,
        title: 'Звук, когда пробивают товар на кассе',
        isCorrect: true,
        img: '/images/question/15.webp',
      },
      {
        id: 4,
        title: 'Звук подписывания договора',
        isCorrect: false,
        img: '/images/question/16.webp',
      },
    ],
  },
  {
    id: 20,
    soundPath: '/sounds/20.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Щелчок закрывающегося или открывающегося кошелька',
        isCorrect: true,
        img: '/images/question/17.webp',
      },
      {
        id: 2,
        title: 'Звук щелчка выключателя',
        isCorrect: false,
        img: '/images/question/18.webp',
      },
      {
        id: 3,
        title: 'Звук набора текста на клавиатуре',
        isCorrect: false,
        img: '/images/question/19.webp',
      },
      {
        id: 4,
        title: 'Звук щелчка компьютерной мыши',
        isCorrect: false,
        img: '/images/question/20.webp',
      },
    ],
  },
  {
    id: 21,
    soundPath: '/sounds/21.m4a',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук упавшего мешка с зерном',
        isCorrect: false,
        img: '/images/question/21.webp',
      },
      {
        id: 2,
        title: 'Хруст морских раковин',
        isCorrect: false,
        img: '/images/question/22.webp',
      },
      {
        id: 3,
        title: 'Cтук золотых слитков ',
        isCorrect: true,
        img: '/images/question/23.webp',
      },
      {
        id: 4,
        title: 'Шелест шкурки пушного зверя',
        isCorrect: false,
        img: '/images/question/24.webp',
      },
    ],
  },
  {
    id: 22,
    soundPath: '/sounds/22.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звон детской погремушки',
        isCorrect: false,
        img: '/images/question/25.webp',
      },
      {
        id: 2,
        title: 'Стук вязальных спиц',
        isCorrect: false,
        img: '/images/question/26.webp',
      },
      {
        id: 3,
        title: 'Игра на бубне',
        isCorrect: false,
        img: '/images/question/27.webp',
      },
      {
        id: 4,
        title: 'Работа аппарата по маркировке товаров',
        isCorrect: true,
        img: '/images/question/28.webp',
      },
    ],
  },
  {
    id: 23,
    soundPath: '/sounds/23.m4a',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Взвешивание товара на весах',
        isCorrect: true,
        img: '/images/question/29.webp',
      },
      {
        id: 2,
        title: 'Скрежет металлической цепи',
        isCorrect: false,
        img: '/images/question/30.webp',
      },
      {
        id: 3,
        title: 'Движение велосипеда по гравию',
        isCorrect: false,
        img: '/images/question/31.webp',
      },
      {
        id: 4,
        title: 'Звук тренажера в спортивном зале',
        isCorrect: false,
        img: '/images/question/32.webp',
      },
    ],
  },
  {
    id: 24,
    soundPath: '/sounds/24.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Шум аэропорта',
        isCorrect: false,
        img: '/images/question/33.webp',
      },
      {
        id: 2,
        title: 'Торги на фондовой бирже',
        isCorrect: true,
        img: '/images/question/34.webp',
      },
      {
        id: 3,
        title: 'Рабочий процесс в офисе банка',
        isCorrect: false,
        img: '/images/question/35.webp',
      },
      {
        id: 4,
        title: 'Толпа людей на продуктовом рынке',
        isCorrect: false,
        img: '/images/question/36.webp',
      },
    ],
  },
  {
    id: 25,
    soundPath: '/sounds/25.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Треск счетчика электроэнергии',
        isCorrect: false,
        img: '/images/question/37.webp',
      },
      {
        id: 2,
        title: 'Переключение кнопок на телевизионном пульте',
        isCorrect: false,
        img: '/images/question/38.webp',
      },
      {
        id: 3,
        title: 'Звук нарезки овощей',
        isCorrect: false,
        img: '/images/question/39.webp',
      },
      {
        id: 4,
        title: 'Подсчет чисел на калькуляторе',
        isCorrect: true,
        img: '/images/question/40.webp',
      },
    ],
  },
  {
    id: 26,
    soundPath: '/sounds/26.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Потрескивание поленьев в камине',
        isCorrect: false,
        img: '/images/question/41.webp',
      },
      {
        id: 2,
        title: 'Звук разбитой молотком копилки ',
        isCorrect: true,
        img: '/images/question/42.webp',
      },
      {
        id: 3,
        title: 'Звук шкатулки с ювелирными украшениями',
        isCorrect: false,
        img: '/images/question/43.webp',
      },
      {
        id: 4,
        title: 'Падение сосульки с крыши',
        isCorrect: false,
        img: '/images/question/44.webp',
      },
    ],
  },
  {
    id: 27,
    soundPath: '/sounds/27.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Телефон поставили на зарядку',
        isCorrect: false,
        img: '/images/question/45.webp',
      },
      {
        id: 2,
        title: 'Терминал отклонил оплату (недостаточно средств)',
        isCorrect: true,
        img: '/images/question/46.webp',
      },
      {
        id: 3,
        title: 'Писк холодильника',
        isCorrect: false,
        img: '/images/question/47.webp',
      },
      {
        id: 4,
        title: 'Сообщение о списании денежных средств',
        isCorrect: false,
        img: '/images/question/48.webp',
      },
    ],
  },
  {
    id: 28,
    soundPath: '/sounds/28.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Раскрывание веера',
        isCorrect: false,
        img: '/images/question/49.webp',
      },
      {
        id: 2,
        title: 'Подписание договора на обслуживание в банке',
        isCorrect: true,
        img: '/images/question/50.webp',
      },
      {
        id: 3,
        title: 'Вскрытие упаковки',
        isCorrect: false,
        img: '/images/question/51.webp',
      },
      {
        id: 4,
        title: 'Процесс печати на принтере',
        isCorrect: false,
        img: '/images/question/52.webp',
      },
    ],
  },
  {
    id: 29,
    soundPath: '/sounds/29.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Захлопнулся кейс с беспроводными наушниками',
        isCorrect: false,
        img: '/images/question/53.webp',
      },
      {
        id: 2,
        title: 'Таблетку достали из блистера ',
        isCorrect: false,
        img: '/images/question/54.webp',
      },
      {
        id: 3,
        title: 'Закрыли дверь',
        isCorrect: false,
        img: '/images/question/55.webp',
      },
      {
        id: 4,
        title: 'Изъяли карту из банкомата',
        isCorrect: true,
        img: '/images/question/56.webp',
      },
    ],
  },
  {
    id: 30,
    soundPath: '/sounds/30.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Открытие кассового ящика',
        isCorrect: false,
        img: '/images/question/57.webp',
      },
      {
        id: 2,
        title: 'Помещение флешки в компьютер',
        isCorrect: false,
        img: '/images/question/58.webp',
      },
      {
        id: 3,
        title: 'Помещение карты в банкомат',
        isCorrect: true,
        img: '/images/question/59.webp',
      },
      {
        id: 4,
        title: 'Закрывание пластикового контейнера для еды',
        isCorrect: false,
        img: '/images/question/60.webp',
      },
    ],
  },
  {
    id: 31,
    soundPath: '/sounds/31.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Хруст снега под ногами',
        isCorrect: false,
        img: '/images/question/61.webp',
      },
      {
        id: 2,
        title: 'Звон хрустальных бокалов',
        isCorrect: false,
        img: '/images/question/62.webp',
      },
      {
        id: 3,
        title: 'Треск жарящейся на сковороде яичницы ',
        isCorrect: false,
        img: '/images/question/63.webp',
      },
      {
        id: 4,
        title: 'Звон монет ',
        isCorrect: true,
        img: '/images/question/64.webp',
      },
    ],
  },
  {
    id: 32,
    soundPath: '/sounds/32.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Перелистывание страниц банковского договора ',
        isCorrect: false,
        img: '/images/question/65.webp',
      },
      {
        id: 2,
        title: 'Шелест купюр',
        isCorrect: true,
        img: '/images/question/66.webp',
      },
      {
        id: 3,
        title: 'Полоскание белья ',
        isCorrect: false,
        img: '/images/question/67.webp',
      },
      {
        id: 4,
        title: 'Нарезка продуктов кухонным ножом',
        isCorrect: false,
        img: '/images/question/68.webp',
      },
    ],
  },
  {
    id: 33,
    soundPath: '/sounds/33.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Шум двигателя спортивного автомобиля',
        isCorrect: false,
        img: '/images/question/69.webp',
      },
      {
        id: 2,
        title: 'Дрель соседа',
        isCorrect: false,
        img: '/images/question/70.webp',
      },
      {
        id: 3,
        title: 'Работа мясорубки',
        isCorrect: false,
        img: '/images/question/71.webp',
      },
      {
        id: 4,
        title: 'Звук пересчета наличных банкоматом',
        isCorrect: true,
        img: '/images/question/72.webp',
      },
    ],
  },
  {
    id: 34,
    soundPath: '/sounds/34.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук перевода денег в приложении',
        isCorrect: true,
        img: '/images/question/73.webp',
      },
      {
        id: 2,
        title: 'Дверной звонок',
        isCorrect: false,
        img: '/images/question/74.webp',
      },
      {
        id: 3,
        title: 'Пение птиц в лесу',
        isCorrect: false,
        img: '/images/question/75.webp',
      },
      {
        id: 4,
        title: 'Подтверждение об уплате налога в личном кабинете налогоплательщика',
        isCorrect: false,
        img: '/images/question/76.webp',
      },
    ],
  },
  {
    id: 35,
    soundPath: '/sounds/35.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Удар в гонг',
        isCorrect: false,
        img: '/images/question/77.webp',
      },
      {
        id: 2,
        title: 'Звук зачисления денежных средств в банкомате ',
        isCorrect: true,
        img: '/images/question/78.webp',
      },
      {
        id: 3,
        title: 'Входящее смс-сообщение',
        isCorrect: false,
        img: '/images/question/79.webp',
      },
      {
        id: 4,
        title: 'Входящее смс-сообщение',
        isCorrect: false,
        img: '/images/question/80.webp',
      },
    ],
  },
  {
    id: 36,
    soundPath: '/sounds/36.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Автоответчик на телефоне коллеги',
        isCorrect: false,
        img: '/images/question/81.webp',
      },
      {
        id: 2,
        title: 'Объявление диктора на вокзале',
        isCorrect: false,
        img: '/images/question/82.webp',
      },
      {
        id: 3,
        title: 'Телефонный автоинформатор о задолженности по коммунальным услугам',
        isCorrect: false,
        img: '/images/question/83.webp',
      },
      {
        id: 4,
        title: 'Звук бота-оператора, когда звонишь в банк',
        isCorrect: true,
        img: '/images/question/84.webp',
      },
    ],
  },
  {
    id: 37,
    soundPath: '/sounds/37.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Стук дверцы холодильника',
        isCorrect: false,
        img: '/images/question/85.webp',
      },
      {
        id: 2,
        title: 'Звук открытия сейфа',
        isCorrect: true,
        img: '/images/question/86.webp',
      },
      {
        id: 3,
        title: 'Удар по бильярдным шарам',
        isCorrect: false,
        img: '/images/question/87.webp',
      },
      {
        id: 4,
        title: 'Звук игрового автомата',
        isCorrect: false,
        img: '/images/question/88.webp',
      },
    ],
  },
  {
    id: 38,
    soundPath: '/sounds/38.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Оповещение о неверно введенном пароле в приложении банка',
        isCorrect: false,
        img: '/images/question/89.webp',
      },
      {
        id: 2,
        title: 'Звук детской игрушки ',
        isCorrect: false,
        img: '/images/question/90.webp',
      },
      {
        id: 3,
        title: 'Звук бесконтактной оплаты (терминалы для эквайринга)',
        isCorrect: true,
        img: '/images/question/91.webp',
      },
      {
        id: 4,
        title: 'Сигнал электронного градусника',
        isCorrect: false,
        img: '/images/question/92.webp',
      },
    ],
  },
  {
    id: 39,
    soundPath: '/sounds/39.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук набора пин-кода в банкомате',
        isCorrect: true,
        img: '/images/question/93.webp',
      },
      {
        id: 2,
        title: 'Выполнение подсчетов на калькуляторе',
        isCorrect: false,
        img: '/images/question/94.webp',
      },
      {
        id: 3,
        title: 'Настройка клавиш саксофона',
        isCorrect: false,
        img: '/images/question/95.webp',
      },
      {
        id: 4,
        title: 'Звук печатной машинки',
        isCorrect: false,
        img: '/images/question/96.webp',
      },
    ],
  },
  {
    id: 40,
    soundPath: '/sounds/40.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук телефонных помех',
        isCorrect: false,
        img: '/images/question/97.webp',
      },
      {
        id: 2,
        title: 'Сигнал, передаваемый азбукой Морзе ',
        isCorrect: false,
        img: '/images/question/98.webp',
      },
      {
        id: 3,
        title: 'Звук чеканки монет на станке',
        isCorrect: false,
        img: '/images/question/99.webp',
      },
      {
        id: 4,
        title: 'Звук печати чека в магазине ',
        isCorrect: true,
        img: '/images/question/100.webp',
      },
    ],
  },
  {
    id: 41,
    soundPath: '/sounds/41.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Работающий датчик пожарной сигнализации',
        isCorrect: false,
        img: '/images/question/101.webp',
      },
      {
        id: 2,
        title: 'Писк птенца в гнезде',
        isCorrect: false,
        img: '/images/question/102.webp',
      },
      {
        id: 3,
        title: 'Оповещение о нехватке средств на карте для оплаты товара на терминале',
        isCorrect: false,
        img: '/images/question/103.webp',
      },
      {
        id: 4,
        title: 'Звук сканирования штрих-кода/QR-кода',
        isCorrect: true,
        img: '/images/question/104.webp',
      },
    ],
  },
  {
    id: 42,
    soundPath: '/sounds/42.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук открытия замка или механизма',
        isCorrect: false,
        img: '/images/question/105.webp',
      },
      {
        id: 2,
        title: 'Звук выезжающей кассы',
        isCorrect: true,
        img: '/images/question/106.webp',
      },
      {
        id: 3,
        title: 'Звук оплаты товара',
        isCorrect: false,
        img: '/images/question/107.webp',
      },
      {
        id: 4,
        title: 'Звук проезда продуктовой тележки в супермаркете',
        isCorrect: false,
        img: '/images/question/108.webp',
      },
    ],
  },
  {
    id: 43,
    soundPath: '/sounds/43.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Шум магазина/торгового центра ',
        isCorrect: true,
        img: '/images/question/109.webp',
      },
      {
        id: 2,
        title: 'Шум банковского офиса',
        isCorrect: false,
        img: '/images/question/110.webp',
      },
      {
        id: 3,
        title: 'Шум МФЦ',
        isCorrect: false,
        img: '/images/question/111.webp',
      },
      {
        id: 4,
        title: 'Шум поликлиники',
        isCorrect: false,
        img: '/images/question/112.webp',
      },
    ],
  },
  {
    id: 44,
    soundPath: '/sounds/44.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук пересчета денег вручную',
        isCorrect: true,
        img: '/images/question/113.webp',
      },
      {
        id: 2,
        title: 'Звук перелистывания страниц',
        isCorrect: false,
        img: '/images/question/114.webp',
      },
      {
        id: 3,
        title: 'Шелест листьев',
        isCorrect: false,
        img: '/images/question/115.webp',
      },
      {
        id: 4,
        title: 'Звук подсчитывания купюр на счетной машинке',
        isCorrect: false,
        img: '/images/question/116.webp',
      },
    ],
  },
  {
    id: 45,
    soundPath: '/sounds/45.mp3',
    type: 'img',
    answers: [
      {
        id: 1,
        title: 'Звук печати на принтере',
        isCorrect: false,
        img: '/images/question/117.webp',
      },
      {
        id: 2,
        title: 'Выдача карты после операций с терминалом ',
        isCorrect: true,
        img: '/images/question/118.webp',
      },
      {
        id: 3,
        title: 'Звук открытия багажника автомобиля',
        isCorrect: false,
        img: '/images/question/119.webp',
      },
      {
        id: 4,
        title: 'Звук застегивания молнии на кофте',
        isCorrect: false,
        img: '/images/question/120.webp',
      },
    ],
  },
]
