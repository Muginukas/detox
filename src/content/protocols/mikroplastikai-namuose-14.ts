import type { Protocol } from '../../types/content'

export const protocol: Protocol = {
  slug: 'mikroplastikai-namuose-14',
  toxin: 'microplastics',
  domains: ['body'],
  evidence: 'emerging',
  duration: 14,
  title: {
    lt: 'Mažiau plastiko namuose — 14 dienų',
    en: 'Less plastic at home — 14 days',
    ru: 'Меньше пластика дома — 14 дней',
  },
  summary: {
    lt: 'Po vieną pakeitimą per dieną. Po dviejų savaičių namai kitokie, o nieko didelio pirkti nereikėjo.',
    en: 'One change a day. After two weeks the home is different, and nothing large had to be bought.',
    ru: 'По одной замене в день. Через две недели дом другой, и ничего крупного покупать не пришлось.',
  },
  intro: {
    lt: 'Šio protokolo logika paprasta: didžiausią ekspoziciją duoda karštis, riebalai, laikas ir namų dulkės. Kiekviena diena keičia vieną konkretų dalyką iš to sąrašo. Nieko nereikia išmesti iš karto — keičiama tada, kai daiktas ir taip baigiasi arba sudyla.',
    en: 'The logic is simple: exposure comes mostly from heat, fat, time and house dust. Each day changes one specific item from that list. Nothing has to be thrown out at once — you replace things as they wear out or run out anyway.',
    ru: 'Логика проста: воздействие дают в основном тепло, жир, время и домашняя пыль. Каждый день меняет один конкретный пункт из этого списка. Ничего не нужно выбрасывать сразу — вещи заменяются, когда и так изнашиваются или заканчиваются.',
  },
  related: ['mikroplastikai-kur-ju-yra', 'mikroplastikai-vanduo', 'mikroplastikai-pakuotes', 'mikroplastikai-namuose'],
  days: [
    {
      day: 1,
      title: { lt: 'Gertuvė', en: 'A bottle', ru: 'Бутылка' },
      focus: {
        lt: 'Vienas pakeitimas, veikiantis kasdien.',
        en: 'One change that works every day.',
        ru: 'Одна замена, работающая каждый день.',
      },
      steps: [
        {
          id: 'mp1a',
          text: {
            lt: 'Pasidėk plieninę arba stiklinę gertuvę ten, kur praleidi daugiausia laiko.',
            en: 'Put a steel or glass bottle where you spend most of your time.',
            ru: 'Поставьте стальную или стеклянную бутылку там, где проводите больше всего времени.',
          },
        },
        {
          id: 'mp1b',
          text: {
            lt: 'Išnešk iš mašinos ir nuo palangės visus plastikinius butelius.',
            en: 'Remove every plastic bottle from the car and the windowsill.',
            ru: 'Уберите все пластиковые бутылки из машины и с подоконника.',
          },
          note: {
            lt: 'Šiluma ir saulė yra pagrindinis dalelių išsiskyrimo veiksnys.',
            en: 'Heat and sunlight are the main driver of particle release.',
            ru: 'Тепло и солнце — главный фактор выделения частиц.',
          },
        },
      ],
    },
    {
      day: 2,
      title: { lt: 'Karštis ir plastikas', en: 'Heat and plastic', ru: 'Тепло и пластик' },
      focus: {
        lt: 'Svarbiausia virtuvės taisyklė.',
        en: 'The single most important kitchen rule.',
        ru: 'Главное правило кухни.',
      },
      steps: [
        {
          id: 'mp2a',
          text: {
            lt: 'Nustok šildyti maistą plastikinėje taroje — perdėk į stiklą ar keramiką.',
            en: 'Stop heating food in plastic — transfer it to glass or ceramic.',
            ru: 'Перестаньте греть еду в пластике — перекладывайте в стекло или керамику.',
          },
        },
        {
          id: 'mp2b',
          text: {
            lt: 'Prieš pildamas karštą maistą į dėžutę, palauk, kol atvės.',
            en: 'Let hot food cool before putting it into a container.',
            ru: 'Дайте горячей еде остыть, прежде чем класть в контейнер.',
          },
        },
      ],
    },
    {
      day: 3,
      title: { lt: 'Vėdinimas', en: 'Ventilation', ru: 'Проветривание' },
      focus: {
        lt: 'Patalpų oras dažnai užterštesnis nei lauko.',
        en: 'Indoor air is often more polluted than outdoor.',
        ru: 'Воздух в помещении часто грязнее уличного.',
      },
      steps: [
        {
          id: 'mp3a',
          text: {
            lt: 'Išvėdink visas patalpas plačiai atidarytais langais 5–10 minučių.',
            en: 'Cross-ventilate every room with windows wide open for 5–10 minutes.',
            ru: 'Проветрите все комнаты настежь 5–10 минут.',
          },
        },
        {
          id: 'mp3b',
          text: {
            lt: 'Nusistatyk priminimą vėdinti du kartus per dieną.',
            en: 'Set a reminder to ventilate twice a day.',
            ru: 'Поставьте напоминание проветривать дважды в день.',
          },
        },
      ],
    },
    {
      day: 4,
      title: { lt: 'Drėgnas valymas', en: 'Damp cleaning', ru: 'Влажная уборка' },
      focus: {
        lt: 'Sausas šluostymas dulkes tik pakelia į orą.',
        en: 'Dry dusting only lifts dust into the air.',
        ru: 'Сухая протирка только поднимает пыль в воздух.',
      },
      steps: [
        {
          id: 'mp4a',
          text: {
            lt: 'Nušluostyk paviršius drėgna šluoste bent viename kambaryje.',
            en: 'Wipe surfaces with a damp cloth in at least one room.',
            ru: 'Протрите поверхности влажной тряпкой хотя бы в одной комнате.',
          },
        },
        {
          id: 'mp4b',
          text: {
            lt: 'Padėk kilimėlį prie durų ir nusiauk batus įėjęs.',
            en: 'Put a mat by the door and take your shoes off when you come in.',
            ru: 'Положите коврик у двери и снимайте обувь при входе.',
          },
          note: {
            lt: 'Batai įneša padangų dulkes, sunkiuosius metalus ir gatvės daleles.',
            en: 'Shoes carry in tyre dust, heavy metals and street particles.',
            ru: 'Обувь заносит шинную пыль, тяжёлые металлы и уличные частицы.',
          },
        },
      ],
    },
    {
      day: 5,
      title: { lt: 'Arbata ir kava', en: 'Tea and coffee', ru: 'Чай и кофе' },
      focus: {
        lt: 'Verdantis vanduo per plastiką — kasdien kartojamas šaltinis.',
        en: 'Boiling water through plastic, repeated daily.',
        ru: 'Кипяток через пластик, повторяющийся ежедневно.',
      },
      steps: [
        {
          id: 'mp5a',
          text: {
            lt: 'Patikrink, ar tavo arbatos maišeliai popieriniai, o ne „šilkiniai" (nailoniniai).',
            en: 'Check whether your tea bags are paper rather than "silken" (nylon).',
            ru: 'Проверьте, бумажные ли ваши чайные пакетики, а не «шёлковые» (нейлоновые).',
          },
        },
        {
          id: 'mp5b',
          text: {
            lt: 'Nepilk karštų gėrimų į plastikinius puodelius — imk savo termosą.',
            en: 'Do not pour hot drinks into plastic cups — bring your own flask.',
            ru: 'Не наливайте горячие напитки в пластиковые стаканы — берите свой термос.',
          },
        },
      ],
    },
    {
      day: 6,
      title: { lt: 'Pjaustymo lentelė', en: 'Chopping board', ru: 'Разделочная доска' },
      focus: {
        lt: 'Kiekvienas peilio judesys išskiria daleles tiesiai į maistą.',
        en: 'Every knife stroke releases particles straight into food.',
        ru: 'Каждое движение ножа выделяет частицы прямо в еду.',
      },
      steps: [
        {
          id: 'mp6a',
          text: {
            lt: 'Pakeisk plastikinę pjaustymo lentelę medine arba stikline.',
            en: 'Replace the plastic chopping board with wood or glass.',
            ru: 'Замените пластиковую доску деревянной или стеклянной.',
          },
        },
        {
          id: 'mp6b',
          text: {
            lt: 'Išmesk subraižytas plastikines dėžutes — įbrėžimai išskiria daugiau.',
            en: 'Discard scratched plastic containers — scratches release more.',
            ru: 'Выбросьте поцарапанные пластиковые контейнеры — царапины выделяют больше.',
          },
        },
      ],
    },
    {
      day: 7,
      title: { lt: 'Pirmos savaitės peržiūra', en: 'First week review', ru: 'Обзор первой недели' },
      focus: {
        lt: 'Ką iš to, kas pakeista, tikrai išsilaikė?',
        en: 'Which of the changes actually stuck?',
        ru: 'Какие из замен действительно прижились?',
      },
      steps: [
        {
          id: 'mp7a',
          text: {
            lt: 'Peržiūrėk šešias dienas ir pažymėk, kas jau tapo automatiška.',
            en: 'Look back at the six days and mark what has already become automatic.',
            ru: 'Просмотрите шесть дней и отметьте, что уже стало автоматическим.',
          },
        },
        {
          id: 'mp7b',
          text: {
            lt: 'Pakartok tą vieną, kuris nepavyko.',
            en: 'Repeat the one that did not work.',
            ru: 'Повторите ту, что не получилась.',
          },
        },
      ],
    },
    {
      day: 8,
      title: { lt: 'Skalbimas', en: 'Laundry', ru: 'Стирка' },
      focus: {
        lt: 'Viena skalbimo mašina išleidžia šimtus tūkstančių pluošto dalelių.',
        en: 'One wash releases hundreds of thousands of fibre particles.',
        ru: 'Одна стирка выпускает сотни тысяч волокон.',
      },
      steps: [
        {
          id: 'mp8a',
          text: {
            lt: 'Skalbk tik pilnas mašinas ir žemesnėje temperatūroje.',
            en: 'Wash full loads only, and at a lower temperature.',
            ru: 'Стирайте только полные загрузки и при более низкой температуре.',
          },
        },
        {
          id: 'mp8b',
          text: {
            lt: 'Vietoj skalbimo išvėdink drabužį, kurio dar nereikia skalbti.',
            en: 'Air a garment that does not really need washing yet.',
            ru: 'Проветрите вещь, которую ещё не обязательно стирать.',
          },
        },
      ],
    },
    {
      day: 9,
      title: { lt: 'Keptuvės ir indai', en: 'Pans and cookware', ru: 'Сковороды и посуда' },
      focus: {
        lt: 'Pažeista danga nusilupa tiesiai į maistą.',
        en: 'Damaged coating flakes straight into food.',
        ru: 'Повреждённое покрытие отслаивается прямо в еду.',
      },
      steps: [
        {
          id: 'mp9a',
          text: {
            lt: 'Patikrink neprisvylančias keptuves ir atsisakyk tų, kurių danga subraižyta.',
            en: 'Check non-stick pans and retire any with scratched coating.',
            ru: 'Проверьте антипригарные сковороды и уберите те, где покрытие поцарапано.',
          },
        },
        {
          id: 'mp9b',
          text: {
            lt: 'Nenaudok metalinių įrankių ant dengtų paviršių.',
            en: 'Do not use metal utensils on coated surfaces.',
            ru: 'Не используйте металлические лопатки на покрытых поверхностях.',
          },
        },
      ],
    },
    {
      day: 10,
      title: { lt: 'Sandėliavimas', en: 'Storage', ru: 'Хранение' },
      focus: {
        lt: 'Riebalai ir rūgštys traukia iš plastiko daugiausia.',
        en: 'Fat and acid draw the most out of plastic.',
        ru: 'Жир и кислота вытягивают из пластика больше всего.',
      },
      steps: [
        {
          id: 'mp10a',
          text: {
            lt: 'Perkelk riebų ir rūgštų maistą (sūrį, padažus, pomidorus) į stiklinius indus.',
            en: 'Move fatty and acidic food (cheese, sauces, tomatoes) into glass containers.',
            ru: 'Переложите жирную и кислую еду (сыр, соусы, помидоры) в стеклянную посуду.',
          },
        },
        {
          id: 'mp10b',
          text: {
            lt: 'Vietoj maistinės plėvelės ant karšto maisto naudok dangtį arba lėkštę.',
            en: 'Use a lid or a plate instead of cling film on hot food.',
            ru: 'Используйте крышку или тарелку вместо плёнки на горячей еде.',
          },
        },
      ],
    },
    {
      day: 11,
      title: { lt: 'Kosmetika', en: 'Cosmetics', ru: 'Косметика' },
      focus: {
        lt: 'Sąmoningai pridėti mikroplastikai vis dar būna sudėtyje.',
        en: 'Intentionally added microplastics still appear in ingredient lists.',
        ru: 'Намеренно добавленный микропластик всё ещё встречается в составах.',
      },
      steps: [
        {
          id: 'mp11a',
          text: {
            lt: 'Patikrink šveitiklių ir dušo gelių sudėtį: polyethylene, polypropylene, nylon-12, acrylates copolymer.',
            en: 'Check scrubs and shower gels for polyethylene, polypropylene, nylon-12, acrylates copolymer.',
            ru: 'Проверьте скрабы и гели на полиэтилен, полипропилен, нейлон-12, сополимеры акрилатов.',
          },
        },
        {
          id: 'mp11b',
          text: {
            lt: 'Pakeisk vieną tokį produktą cukraus, druskos ar kavos pagrindo alternatyva.',
            en: 'Replace one such product with a sugar-, salt- or coffee-based alternative.',
            ru: 'Замените один такой продукт альтернативой на основе сахара, соли или кофе.',
          },
        },
      ],
    },
    {
      day: 12,
      title: { lt: 'Konservai ir kvitai', en: 'Cans and receipts', ru: 'Консервы и чеки' },
      focus: {
        lt: 'Du dažnai pamirštami bisfenolių šaltiniai.',
        en: 'Two frequently forgotten bisphenol sources.',
        ru: 'Два часто забываемых источника бисфенолов.',
      },
      steps: [
        {
          id: 'mp12a',
          text: {
            lt: 'Vieną konservuotą produktą (ypač pomidorus) pakeisk stiklainiu arba šviežiu.',
            en: 'Swap one canned product (tomatoes especially) for a jar or fresh.',
            ru: 'Замените один консервированный продукт (особенно помидоры) банкой или свежим.',
          },
        },
        {
          id: 'mp12b',
          text: {
            lt: 'Rinkis elektroninį kvitą arba neimk popierinio.',
            en: 'Choose an electronic receipt or decline the paper one.',
            ru: 'Выбирайте электронный чек или откажитесь от бумажного.',
          },
        },
      ],
    },
    {
      day: 13,
      title: { lt: 'Ten, kur žaidžia vaikai', en: 'Where children play', ru: 'Там, где играют дети' },
      focus: {
        lt: 'Vaikai kvėpuoja arčiau grindų ir neša daiktus į burną.',
        en: 'Children breathe closer to the floor and put things in their mouths.',
        ru: 'Дети дышат ближе к полу и тянут предметы в рот.',
      },
      steps: [
        {
          id: 'mp13a',
          text: {
            lt: 'Drėgnai išvalyk grindis vaiko žaidimų zonoje.',
            en: 'Damp-clean the floor in the child’s play area.',
            ru: 'Влажно вымойте пол в игровой зоне ребёнка.',
          },
        },
        {
          id: 'mp13b',
          text: {
            lt: 'Atsisakyk minkštų plastikinių žaislų, turinčių stiprų kvapą.',
            en: 'Retire soft plastic toys with a strong smell.',
            ru: 'Уберите мягкие пластиковые игрушки с резким запахом.',
          },
          note: {
            lt: 'Kvapas dažnai reiškia besiskiriančius minkštiklius.',
            en: 'The smell often means plasticisers are being released.',
            ru: 'Запах часто означает выделяющиеся пластификаторы.',
          },
        },
      ],
    },
    {
      day: 14,
      title: { lt: 'Kas lieka', en: 'What stays', ru: 'Что остаётся' },
      focus: {
        lt: 'Ilgalaikis rezultatas — trys ar keturi įpročiai, ne visas sąrašas.',
        en: 'The lasting result is three or four habits, not the whole list.',
        ru: 'Долгосрочный результат — три-четыре привычки, а не весь список.',
      },
      steps: [
        {
          id: 'mp14a',
          text: {
            lt: 'Išsirink tris pakeitimus, kuriuos pasilieki visam laikui.',
            en: 'Choose the three changes you are keeping for good.',
            ru: 'Выберите три замены, которые оставите навсегда.',
          },
        },
        {
          id: 'mp14b',
          text: {
            lt: 'Užsirašyk, ką pakeisi, kai kitą kartą reikės pirkti indus ar tekstilę.',
            en: 'Note what you will choose differently next time you buy cookware or textiles.',
            ru: 'Запишите, что выберете иначе при следующей покупке посуды или текстиля.',
          },
        },
      ],
    },
  ],
}
