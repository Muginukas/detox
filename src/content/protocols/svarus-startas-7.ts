import type { Protocol } from '../../types/content'

export const protocol: Protocol = {
  slug: 'svarus-startas-7',
  toxin: 'basics',
  domains: ['body', 'mind'],
  evidence: 'researched',
  duration: 7,
  title: {
    lt: 'Švarus startas — 7 dienos',
    en: 'Clean start — 7 days',
    ru: 'Чистый старт — 7 дней',
  },
  summary: {
    lt: 'Bazinė savaitė: ne ribojimai, o sąlygos, kuriomis kūno valymo sistema pagaliau spėja dirbti.',
    en: 'A baseline week: not restriction, but the conditions in which the body’s own clearance system finally keeps up.',
    ru: 'Базовая неделя: не ограничения, а условия, в которых система очищения организма наконец успевает работать.',
  },
  intro: {
    lt: 'Šis protokolas nieko „neišvalo" per savaitę. Jis pašalina didžiausius trukdžius ir sudeda į vietą penkis dalykus, be kurių neveikia nė vienas kitas protokolas: vandenį, miegą, skaidulas, judėjimą ir tylą. Jei nežinai, nuo ko pradėti — pradėk nuo čia.',
    en: 'This protocol does not "cleanse" anything in a week. It removes the biggest obstacles and puts five things in place, without which no other protocol works: water, sleep, fibre, movement and quiet. If you do not know where to start, start here.',
    ru: 'Этот протокол ничего не «очищает» за неделю. Он убирает главные помехи и ставит на место пять вещей, без которых не работает ни один другой протокол: воду, сон, клетчатку, движение и тишину. Если не знаете, с чего начать, — начните отсюда.',
  },
  related: ['kas-yra-detoksas'],
  days: [
    {
      day: 1,
      title: { lt: 'Vanduo ir pradinė nuotrauka', en: 'Water and a baseline', ru: 'Вода и точка отсчёта' },
      focus: {
        lt: 'Prieš keisdamas ką nors, pamatyk, kur esi.',
        en: 'Before changing anything, see where you are.',
        ru: 'Прежде чем что-то менять, увидьте, где вы находитесь.',
      },
      steps: [
        {
          id: 'd1s1',
          text: {
            lt: 'Išgerk vandens iškart po pabudimo, dar prieš kavą.',
            en: 'Drink water right after waking, before coffee.',
            ru: 'Выпейте воды сразу после пробуждения, до кофе.',
          },
        },
        {
          id: 'd1s2',
          text: {
            lt: 'Vieną dieną užsirašyk viską, ką suvalgei ir išgėrei — be vertinimo.',
            en: 'For one day write down everything you ate and drank — without judging it.',
            ru: 'За один день запишите всё, что съели и выпили, — без оценок.',
          },
          note: {
            lt: 'Tikslas ne susigėsti, o pamatyti realų pradinį tašką.',
            en: 'The point is not shame, but seeing the real starting point.',
            ru: 'Цель не стыд, а реальная отправная точка.',
          },
        },
        {
          id: 'd1s3',
          text: {
            lt: 'Užsirašyk vieną sakinį: kodėl tau to reikia.',
            en: 'Write one sentence: why you need this.',
            ru: 'Напишите одно предложение: зачем вам это.',
          },
        },
      ],
    },
    {
      day: 2,
      title: { lt: 'Skaidulos', en: 'Fibre', ru: 'Клетчатка' },
      focus: {
        lt: 'Be skaidulų tulžis su atliekomis įsisiurbia atgal.',
        en: 'Without fibre, bile carrying waste is reabsorbed.',
        ru: 'Без клетчатки жёлчь с отходами всасывается обратно.',
      },
      steps: [
        {
          id: 'd2s1',
          text: {
            lt: 'Į kiekvieną valgymą įdėk daržovių — bent po saują.',
            en: 'Add vegetables to every meal — at least a handful.',
            ru: 'Добавьте овощи в каждый приём пищи — хотя бы горсть.',
          },
        },
        {
          id: 'd2s2',
          text: {
            lt: 'Suvalgyk vieną kryžmažiedę daržovę (brokolius, kopūstus, rukolą).',
            en: 'Eat one cruciferous vegetable (broccoli, cabbage, rocket).',
            ru: 'Съешьте один крестоцветный овощ (брокколи, капуста, руккола).',
          },
          note: {
            lt: 'Jos duoda sieros junginių, reikalingų surišimo fazei.',
            en: 'They supply the sulphur compounds the conjugation phase needs.',
            ru: 'Они дают серосодержащие соединения для фазы связывания.',
          },
        },
        {
          id: 'd2s3',
          text: {
            lt: 'Gerk vandenį didinant skaidulas — kitaip bus sunku žarnynui.',
            en: 'Drink water as you add fibre — otherwise the gut struggles.',
            ru: 'Пейте воду, увеличивая клетчатку, — иначе кишечнику будет тяжело.',
          },
        },
      ],
    },
    {
      day: 3,
      title: { lt: 'Miegas', en: 'Sleep', ru: 'Сон' },
      focus: {
        lt: 'Smegenys plaunasi daugiausia miegant.',
        en: 'The brain does most of its flushing during sleep.',
        ru: 'Мозг очищается в основном во сне.',
      },
      steps: [
        {
          id: 'd3s1',
          text: {
            lt: 'Nustatyk fiksuotą kėlimosi laiką — jis svarbesnis už ėjimo miegoti laiką.',
            en: 'Set a fixed wake-up time — it matters more than bedtime.',
            ru: 'Установите фиксированное время подъёма — оно важнее времени отбоя.',
          },
        },
        {
          id: 'd3s2',
          text: {
            lt: 'Jokios kofeino po 14 val.',
            en: 'No caffeine after 2 p.m.',
            ru: 'Никакого кофеина после 14:00.',
          },
          note: {
            lt: 'Kofeino pusinės eliminacijos laikas — apie 5–6 valandos.',
            en: 'Caffeine’s half-life is around five to six hours.',
            ru: 'Период полувыведения кофеина — около 5–6 часов.',
          },
        },
        {
          id: 'd3s3',
          text: {
            lt: 'Paskutinę valandą prieš miegą — be ekrano.',
            en: 'Last hour before bed — no screen.',
            ru: 'Последний час перед сном — без экрана.',
          },
        },
      ],
    },
    {
      day: 4,
      title: { lt: 'Judėjimas ir limfa', en: 'Movement and lymph', ru: 'Движение и лимфа' },
      focus: {
        lt: 'Limfa neturi širdies — ją stumia raumenys.',
        en: 'Lymph has no heart — muscles push it.',
        ru: 'У лимфы нет сердца — её толкают мышцы.',
      },
      steps: [
        {
          id: 'd4s1',
          text: {
            lt: '30 minučių ėjimo lauke, geriausia ryte.',
            en: 'Thirty minutes of walking outdoors, ideally in the morning.',
            ru: 'Тридцать минут ходьбы на улице, лучше утром.',
          },
        },
        {
          id: 'd4s2',
          text: {
            lt: 'Kas valandą sėdimo darbo — 2 minutės atsistojus.',
            en: 'For every hour of sitting, two minutes on your feet.',
            ru: 'На каждый час сидения — две минуты на ногах.',
          },
        },
        {
          id: 'd4s3',
          text: {
            lt: '10 lėtų gilių įkvėpimų — diafragma yra limfos siurblys.',
            en: 'Ten slow deep breaths — the diaphragm is a lymph pump.',
            ru: 'Десять медленных глубоких вдохов — диафрагма это насос лимфы.',
          },
        },
      ],
    },
    {
      day: 5,
      title: { lt: 'Vienas atsisakymas', en: 'One subtraction', ru: 'Один отказ' },
      focus: {
        lt: 'Pašalinti vieną dalyką veiksmingiau nei pridėti dešimt.',
        en: 'Removing one thing works better than adding ten.',
        ru: 'Убрать одно эффективнее, чем добавить десять.',
      },
      steps: [
        {
          id: 'd5s1',
          text: {
            lt: 'Išsirink vieną dalyką, kurio šiandien atsisakai: cukrus, alkoholis, cigaretė ar naujienos.',
            en: 'Pick one thing you drop today: sugar, alcohol, a cigarette or the news.',
            ru: 'Выберите одно, от чего откажетесь сегодня: сахар, алкоголь, сигарета или новости.',
          },
        },
        {
          id: 'd5s2',
          text: {
            lt: 'Pastebėk, kada ateina noras, ir užsirašyk, kas jį sukėlė.',
            en: 'Notice when the urge arrives and write down what triggered it.',
            ru: 'Заметьте, когда приходит желание, и запишите, что его вызвало.',
          },
          note: {
            lt: 'Trigeris beveik visada yra situacija, o ne pati medžiaga.',
            en: 'The trigger is almost always a situation, not the substance itself.',
            ru: 'Триггер почти всегда ситуация, а не само вещество.',
          },
        },
      ],
    },
    {
      day: 6,
      title: { lt: 'Namų aplinka', en: 'Your home environment', ru: 'Домашняя среда' },
      focus: {
        lt: 'Didžiąją dalį ekspozicijos gauni ten, kur gyveni.',
        en: 'Most of your exposure happens where you live.',
        ru: 'Большую часть воздействия вы получаете там, где живёте.',
      },
      steps: [
        {
          id: 'd6s1',
          text: {
            lt: 'Išvėdink visas patalpas 10 minučių.',
            en: 'Air out every room for ten minutes.',
            ru: 'Проветрите все комнаты десять минут.',
          },
        },
        {
          id: 'd6s2',
          text: {
            lt: 'Nustok šildyti maistą plastikinėje taroje.',
            en: 'Stop heating food in plastic containers.',
            ru: 'Перестаньте разогревать еду в пластиковой посуде.',
          },
        },
        {
          id: 'd6s3',
          text: {
            lt: 'Nušluostyk dulkes drėgna šluoste bent viename kambaryje.',
            en: 'Wipe dust with a damp cloth in at least one room.',
            ru: 'Протрите пыль влажной тряпкой хотя бы в одной комнате.',
          },
          note: {
            lt: 'Namų dulkės — viena pagrindinių metalų ir plastiko dalelių patekimo vietų.',
            en: 'House dust is a main route for metal and plastic particles.',
            ru: 'Домашняя пыль — один из главных путей попадания металлов и частиц пластика.',
          },
        },
      ],
    },
    {
      day: 7,
      title: { lt: 'Tyla ir kryptis', en: 'Quiet and direction', ru: 'Тишина и направление' },
      focus: {
        lt: 'Protui reikia to paties, ko ir kepenims: laiko pabaigti.',
        en: 'The mind needs what the liver needs: time to finish.',
        ru: 'Разуму нужно то же, что и печени: время закончить.',
      },
      steps: [
        {
          id: 'd7s1',
          text: {
            lt: '10 minučių tylos be telefono, be muzikos, be podkasto.',
            en: 'Ten minutes of silence: no phone, no music, no podcast.',
            ru: 'Десять минут тишины: без телефона, музыки и подкастов.',
          },
        },
        {
          id: 'd7s2',
          text: {
            lt: 'Perskaityk savo pirmos dienos sakinį. Ar jis vis dar tikras?',
            en: 'Reread your sentence from day one. Is it still true?',
            ru: 'Перечитайте своё предложение первого дня. Оно всё ещё верно?',
          },
        },
        {
          id: 'd7s3',
          text: {
            lt: 'Išsirink vieną protokolą, kurį pradėsi toliau.',
            en: 'Choose the one protocol you will continue with.',
            ru: 'Выберите один протокол, который продолжите дальше.',
          },
        },
      ],
    },
  ],
}
