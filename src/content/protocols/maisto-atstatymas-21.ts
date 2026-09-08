import type { Protocol } from '../../types/content'

export const protocol: Protocol = {
  slug: 'maisto-atstatymas-21',
  toxin: 'food',
  domains: ['body'],
  evidence: 'researched',
  duration: 21,
  title: {
    lt: 'Maisto atstatymas — 21 diena',
    en: 'Food reset — 21 days',
    ru: 'Перезагрузка питания — 21 день',
  },
  summary: {
    lt: 'Ne dieta ir ne draudimų sąrašas. Trys savaitės, per kurias pašalinama viena didelė problema ir pridedama tai, ko trūksta.',
    en: 'Not a diet and not a list of bans. Three weeks that remove one large problem and add what is missing.',
    ru: 'Не диета и не список запретов. Три недели, которые убирают одну большую проблему и добавляют то, чего не хватает.',
  },
  intro: {
    lt: 'Pirma savaitė šalina skystą cukrų ir sutvarko valgymo struktūrą. Antra prideda augalų įvairovę ir judėjimą po valgio. Trečia paverčia tai tuo, kas išsilaiko be pastangų. Kalorijų skaičiuoti nereikia — čia keičiama, kas ir kada valgoma, o ne kiek.',
    en: 'Week one removes liquid sugar and fixes the structure of eating. Week two adds plant diversity and movement after meals. Week three turns it into something that holds without effort. No calorie counting — this changes what and when you eat, not how much.',
    ru: 'Первая неделя убирает жидкий сахар и налаживает структуру питания. Вторая добавляет разнообразие растений и движение после еды. Третья превращает это в то, что держится без усилий. Считать калории не нужно — здесь меняется, что и когда вы едите, а не сколько.',
  },
  related: ['ultra-apdorotas-maistas', 'cukrus-ir-insulinas', 'zarnynas-ir-mikrobiomas', 'alkoholis'],
  days: [
    {
      day: 1,
      title: { lt: 'Skystas cukrus', en: 'Liquid sugar', ru: 'Жидкий сахар' },
      focus: { lt: 'Vienintelis didžiausias svertas.', en: 'The single biggest lever.', ru: 'Самый большой рычаг.' },
      steps: [
        { id: 'mr1a', text: { lt: 'Šiandien jokių saldžių gėrimų, sulčių ir saldintų kavų.', en: 'No sweet drinks, juices or sweetened coffees today.', ru: 'Сегодня никаких сладких напитков, соков и подслащённого кофе.' } },
        { id: 'mr1b', text: { lt: 'Pastatyk vandens butelį ten, kur dirbi.', en: 'Put a bottle of water where you work.', ru: 'Поставьте бутылку воды там, где работаете.' } },
      ],
    },
    {
      day: 2,
      title: { lt: 'Baltymas rytą', en: 'Protein in the morning', ru: 'Белок утром' },
      focus: { lt: 'Rytinis baltymas nustato visos dienos apetitą.', en: 'Morning protein sets appetite for the whole day.', ru: 'Утренний белок задаёт аппетит на весь день.' },
      steps: [
        { id: 'mr2a', text: { lt: 'Į pusryčius įdėk baltymo: kiaušinių, varškės, graikiško jogurto, ankštinių.', en: 'Add protein to breakfast: eggs, cottage cheese, Greek yoghurt, legumes.', ru: 'Добавьте белок в завтрак: яйца, творог, греческий йогурт, бобовые.' } },
        { id: 'mr2b', text: { lt: 'Pastebėk, kada pirmą kartą užsinorės saldaus.', en: 'Notice when the first craving for sweets arrives.', ru: 'Заметьте, когда впервые придёт тяга к сладкому.' } },
      ],
    },
    {
      day: 3,
      title: { lt: 'Skaidulos', en: 'Fibre', ru: 'Клетчатка' },
      focus: { lt: 'Be jų tulžis su atliekomis įsisiurbia atgal.', en: 'Without it, bile with waste is reabsorbed.', ru: 'Без неё жёлчь с отходами всасывается обратно.' },
      steps: [
        { id: 'mr3a', text: { lt: 'Į kiekvieną valgymą įdėk daržovių arba ankštinių.', en: 'Add vegetables or legumes to every meal.', ru: 'Добавьте овощи или бобовые в каждый приём пищи.' } },
        { id: 'mr3b', text: { lt: 'Didindamas skaidulas gerk daugiau vandens.', en: 'Drink more water as you add fibre.', ru: 'Увеличивая клетчатку, пейте больше воды.' } },
      ],
    },
    {
      day: 4,
      title: { lt: 'Valgymo tvarka', en: 'Meal order', ru: 'Порядок еды' },
      focus: { lt: 'Ta pati porcija kita tvarka duoda mažesnį gliukozės pikį.', en: 'The same meal in a different order gives a lower glucose peak.', ru: 'Та же порция в другом порядке даёт меньший пик глюкозы.' },
      steps: [
        { id: 'mr4a', text: { lt: 'Pradėk valgymą nuo daržovių ir baltymo, angliavandenius palik pabaigai.', en: 'Start meals with vegetables and protein, leave carbohydrates for last.', ru: 'Начинайте еду с овощей и белка, углеводы оставьте напоследок.' } },
        { id: 'mr4b', text: { lt: 'Valgyk be ekrano bent vieną kartą per dieną.', en: 'Eat without a screen at least once today.', ru: 'Поешьте без экрана хотя бы один раз за день.' } },
      ],
    },
    {
      day: 5,
      title: { lt: 'Etiketės', en: 'Labels', ru: 'Этикетки' },
      focus: { lt: 'Trys klausimai atpažįsta ultra-apdorotą maistą be chemijos žinių.', en: 'Three questions identify ultra-processed food with no chemistry needed.', ru: 'Три вопроса определяют ультраобработанную еду без знания химии.' },
      steps: [
        { id: 'mr5a', text: { lt: 'Patikrink penkis produktus savo spintelėje: ar jų sudėtyje yra tai, ko neturėtum namų virtuvėje?', en: 'Check five products in your cupboard: do they contain anything you would not have in a home kitchen?', ru: 'Проверьте пять продуктов в шкафу: есть ли в составе то, чего не было бы на домашней кухне?' } },
        { id: 'mr5b', text: { lt: 'Vieną iš jų pakeisk paprastesniu atitikmeniu.', en: 'Replace one of them with a simpler equivalent.', ru: 'Замените один из них более простым аналогом.' } },
      ],
    },
    {
      day: 6,
      title: { lt: 'Gaminimas', en: 'Cooking', ru: 'Готовка' },
      focus: { lt: 'Maistas, kuriam reikia paruošimo, savaime nėra ultra-apdorotas.', en: 'Food that requires preparation is not ultra-processed by definition.', ru: 'Еда, которую нужно готовить, по определению не ультраобработанная.' },
      steps: [
        { id: 'mr6a', text: { lt: 'Pagamink dvigubą porciją ir pusę įdėk į šaldiklį.', en: 'Cook a double portion and freeze half.', ru: 'Приготовьте двойную порцию и половину заморозьте.' } },
        { id: 'mr6b', text: { lt: 'Pasidaryk sąrašą trijų patiekalų, kuriuos moki pagaminti be recepto.', en: 'List three dishes you can cook without a recipe.', ru: 'Составьте список трёх блюд, которые готовите без рецепта.' } },
      ],
    },
    {
      day: 7,
      title: { lt: 'Pirmos savaitės peržiūra', en: 'First week review', ru: 'Обзор первой недели' },
      focus: { lt: 'Kas pasikeitė energijoje per dieną?', en: 'What changed in your energy across the day?', ru: 'Что изменилось в энергии в течение дня?' },
      steps: [
        { id: 'mr7a', text: { lt: 'Užsirašyk, kaip jautėsi energija po pietų šią savaitę.', en: 'Write down how your energy felt after lunch this week.', ru: 'Запишите, как ощущалась энергия после обеда на этой неделе.' } },
        { id: 'mr7b', text: { lt: 'Pasilik vieną pakeitimą, kuris pavyko lengviausiai.', en: 'Keep the one change that came easiest.', ru: 'Оставьте одну замену, которая далась легче всего.' } },
      ],
    },
    {
      day: 8,
      title: { lt: 'Augalų skaičius', en: 'Counting plants', ru: 'Счёт растений' },
      focus: { lt: 'Mikrobiomui svarbiausia įvairovė, ne kiekis.', en: 'Diversity matters more to the microbiome than quantity.', ru: 'Микробиому важнее разнообразие, а не количество.' },
      steps: [
        { id: 'mr8a', text: { lt: 'Pradėk sąrašą: kiek skirtingų augalų rūšių suvalgai per savaitę.', en: 'Start a list: how many different plant species you eat in a week.', ru: 'Начните список: сколько разных видов растений вы едите за неделю.' } },
        { id: 'mr8b', text: { lt: 'Įtrauk vieną augalą, kurio šiais metais dar nevalgei.', en: 'Include one plant you have not eaten yet this year.', ru: 'Включите одно растение, которое вы ещё не ели в этом году.' } },
      ],
    },
    {
      day: 9,
      title: { lt: 'Ėjimas po valgio', en: 'Walking after meals', ru: 'Ходьба после еды' },
      focus: { lt: 'Raumenys pasiima gliukozę be insulino.', en: 'Muscle takes up glucose without insulin.', ru: 'Мышцы забирают глюкозу без инсулина.' },
      steps: [
        { id: 'mr9a', text: { lt: '10 minučių ėjimo po didžiausio dienos valgymo.', en: 'Ten minutes of walking after your largest meal.', ru: 'Десять минут ходьбы после самого большого приёма пищи.' } },
        { id: 'mr9b', text: { lt: 'Kas valandą sėdimo darbo — dvi minutės atsistojus.', en: 'Two minutes on your feet for every hour of sitting.', ru: 'Две минуты на ногах на каждый час сидения.' } },
      ],
    },
    {
      day: 10,
      title: { lt: 'Fermentuotas maistas', en: 'Fermented food', ru: 'Ферментированная еда' },
      focus: { lt: 'Tyrime tai padidino mikrobiomo įvairovę stipriau nei vien skaidulos.', en: 'In a trial this raised microbiome diversity more strongly than fibre alone.', ru: 'В исследовании это повысило разнообразие микробиома сильнее, чем одна клетчатка.' },
      steps: [
        { id: 'mr10a', text: { lt: 'Įtrauk raugintų daržovių, kefyro arba natūralaus jogurto.', en: 'Add fermented vegetables, kefir or plain yoghurt.', ru: 'Добавьте квашеные овощи, кефир или натуральный йогурт.' } },
        { id: 'mr10b', text: { lt: 'Pradėk nuo mažo kiekio, jei anksčiau nevalgei.', en: 'Start with a small amount if this is new for you.', ru: 'Начните с малого количества, если раньше не ели.' } },
      ],
    },
    {
      day: 11,
      title: { lt: 'Alkoholis', en: 'Alcohol', ru: 'Алкоголь' },
      focus: { lt: 'Kol kepenys tvarko alkoholį, viskas kita laukia eilėje.', en: 'While the liver handles alcohol, everything else waits.', ru: 'Пока печень занята алкоголем, всё остальное ждёт.' },
      steps: [
        { id: 'mr11a', text: { lt: 'Suplanuok bent tris visiškai be alkoholio dienas šią savaitę.', en: 'Plan at least three completely alcohol-free days this week.', ru: 'Запланируйте минимум три полностью безалкогольных дня на этой неделе.' } },
        { id: 'mr11b', text: { lt: 'Pasiruošk vieną gėrimą, kurį imsi vietoj alkoholio.', en: 'Prepare one drink you will take instead of alcohol.', ru: 'Подготовьте один напиток, который возьмёте вместо алкоголя.' } },
      ],
    },
    {
      day: 12,
      title: { lt: 'Vakarienės laikas', en: 'Dinner time', ru: 'Время ужина' },
      focus: { lt: 'Vėlyvas valgymas blogina gliukozės toleranciją ir miegą.', en: 'Late eating worsens glucose tolerance and sleep.', ru: 'Поздняя еда ухудшает толерантность к глюкозе и сон.' },
      steps: [
        { id: 'mr12a', text: { lt: 'Pastumk vakarienę valanda anksčiau.', en: 'Move dinner an hour earlier.', ru: 'Сдвиньте ужин на час раньше.' } },
        { id: 'mr12b', text: { lt: 'Po vakarienės virtuvė uždaryta — jokių užkandžių.', en: 'Kitchen closed after dinner — no snacks.', ru: 'После ужина кухня закрыта — никаких перекусов.' } },
      ],
    },
    {
      day: 13,
      title: { lt: 'Užkandžiai', en: 'Snacks', ru: 'Перекусы' },
      focus: { lt: 'Dauguma užkandžių yra ne alkis, o nuobodulys ar stresas.', en: 'Most snacking is not hunger but boredom or stress.', ru: 'Большинство перекусов — не голод, а скука или стресс.' },
      steps: [
        { id: 'mr13a', text: { lt: 'Prieš kiekvieną užkandį paklausk savęs: alkis ar kažkas kita?', en: 'Before each snack ask: is this hunger or something else?', ru: 'Перед каждым перекусом спросите: это голод или что-то другое?' } },
        { id: 'mr13b', text: { lt: 'Turėk paruoštą sveiką variantą: riešutus, sūrį, kietai virtą kiaušinį.', en: 'Keep a ready option: nuts, cheese, a hard-boiled egg.', ru: 'Держите готовый вариант: орехи, сыр, варёное яйцо.' } },
      ],
    },
    {
      day: 14,
      title: { lt: 'Antros savaitės peržiūra', en: 'Second week review', ru: 'Обзор второй недели' },
      focus: { lt: 'Kiek augalų rūšių susirinko?', en: 'How many plant species did you gather?', ru: 'Сколько видов растений набралось?' },
      steps: [
        { id: 'mr14a', text: { lt: 'Suskaičiuok savaitės augalų sąrašą.', en: 'Count your weekly plant list.', ru: 'Посчитайте недельный список растений.' } },
        { id: 'mr14b', text: { lt: 'Numatyk, kaip kitą savaitę pridėsi dar penkis.', en: 'Plan how to add five more next week.', ru: 'Спланируйте, как добавить ещё пять на следующей неделе.' } },
      ],
    },
    {
      day: 15,
      title: { lt: 'Pusryčiai be cukraus', en: 'Breakfast without sugar', ru: 'Завтрак без сахара' },
      focus: { lt: 'Saldūs pusryčiai nustato dienos svyravimus.', en: 'A sweet breakfast sets the day’s swings.', ru: 'Сладкий завтрак задаёт качели на весь день.' },
      steps: [
        { id: 'mr15a', text: { lt: 'Pakeisk dribsnius avižomis su riešutais ir vaisiumi.', en: 'Swap cereal for oats with nuts and fruit.', ru: 'Замените хлопья овсянкой с орехами и фруктом.' } },
        { id: 'mr15b', text: { lt: 'Pastebėk, kaip laikosi energija iki pietų.', en: 'Notice how your energy holds until lunch.', ru: 'Заметьте, как держится энергия до обеда.' } },
      ],
    },
    {
      day: 16,
      title: { lt: 'Riebalai', en: 'Fats', ru: 'Жиры' },
      focus: { lt: 'Riebalai nėra priešas — svarbu, kokie.', en: 'Fat is not the enemy — the kind matters.', ru: 'Жир не враг — важно какой.' },
      steps: [
        { id: 'mr16a', text: { lt: 'Naudok alyvuogių aliejų, riešutus, sėklas, riebią žuvį.', en: 'Use olive oil, nuts, seeds, oily fish.', ru: 'Используйте оливковое масло, орехи, семена, жирную рыбу.' } },
        { id: 'mr16b', text: { lt: 'Nekaitink aliejaus iki dūmų ir nenaudok pakartotinai.', en: 'Do not heat oil to smoking point or reuse it.', ru: 'Не нагревайте масло до дыма и не используйте повторно.' } },
      ],
    },
    {
      day: 17,
      title: { lt: 'Pirkinių sąrašas', en: 'Shopping list', ru: 'Список покупок' },
      focus: { lt: 'Sprendimas priimamas parduotuvėje, ne prie stalo.', en: 'The decision is made in the shop, not at the table.', ru: 'Решение принимается в магазине, а не за столом.' },
      steps: [
        { id: 'mr17a', text: { lt: 'Eik apsipirkti su sąrašu ir ne alkanas.', en: 'Shop with a list and not hungry.', ru: 'Идите за покупками со списком и не голодным.' } },
        { id: 'mr17b', text: { lt: 'Didžiąją dalį krepšelio surink iš produktų, kuriems reikia paruošimo.', en: 'Fill most of the basket with food that needs preparing.', ru: 'Наполните большую часть корзины едой, которую нужно готовить.' } },
      ],
    },
    {
      day: 18,
      title: { lt: 'Valgymas su kitais', en: 'Eating with others', ru: 'Еда с другими' },
      focus: { lt: 'Bendras valgymas keičia ir kiekį, ir greitį.', en: 'Eating together changes both amount and speed.', ru: 'Совместная еда меняет и количество, и скорость.' },
      steps: [
        { id: 'mr18a', text: { lt: 'Suvalgyk bent vieną valgymą kartu su kitu žmogumi, be telefonų.', en: 'Have at least one meal with another person, no phones.', ru: 'Поешьте хотя бы один раз с другим человеком, без телефонов.' } },
        { id: 'mr18b', text: { lt: 'Padėk šakutę tarp kąsnių.', en: 'Put the fork down between bites.', ru: 'Кладите вилку между кусками.' } },
      ],
    },
    {
      day: 19,
      title: { lt: 'Kai nepavyko', en: 'When it slipped', ru: 'Когда сорвались' },
      focus: { lt: 'Svyravimas tarp perteklio ir badavimo kenkia labiau nei viena diena.', en: 'Swinging between excess and starvation harms more than one bad day.', ru: 'Качели между избытком и голоданием вредят больше одного плохого дня.' },
      steps: [
        { id: 'mr19a', text: { lt: 'Jei buvo diena ne pagal planą — grįžk prie įprasto valgymo, nekompensuok badavimu.', en: 'If a day went off plan, return to normal eating — do not compensate by fasting.', ru: 'Если день пошёл не по плану, вернитесь к обычной еде — не компенсируйте голоданием.' } },
        { id: 'mr19b', text: { lt: 'Užsirašyk, kas buvo trigeris.', en: 'Write down what the trigger was.', ru: 'Запишите, что было триггером.' } },
      ],
    },
    {
      day: 20,
      title: { lt: 'Ką pasilieki', en: 'What you keep', ru: 'Что оставляете' },
      focus: { lt: 'Išsilaiko tik tai, kas nereikalauja valios.', en: 'Only what needs no willpower survives.', ru: 'Выживает только то, что не требует воли.' },
      steps: [
        { id: 'mr20a', text: { lt: 'Išsirink tris įpročius, kuriuos tęsi po protokolo.', en: 'Choose three habits you will continue after the protocol.', ru: 'Выберите три привычки, которые продолжите после протокола.' } },
        { id: 'mr20b', text: { lt: 'Nuspręsk, kas lieka „kartais", o ne „niekada".', en: 'Decide what stays "sometimes" rather than "never".', ru: 'Решите, что остаётся «иногда», а не «никогда».' } },
      ],
    },
    {
      day: 21,
      title: { lt: 'Uždarymas', en: 'Closing', ru: 'Закрытие' },
      focus: { lt: 'Trys savaitės yra pradžia, ne pabaiga.', en: 'Three weeks is a beginning, not an end.', ru: 'Три недели — начало, а не конец.' },
      steps: [
        { id: 'mr21a', text: { lt: 'Palygink, kaip jautiesi dabar ir kaip jauteisi pirmą dieną.', en: 'Compare how you feel now with day one.', ru: 'Сравните, как вы чувствуете себя сейчас и в первый день.' } },
        { id: 'mr21b', text: { lt: 'Užsirašyk vieną taisyklę, kuri lieka su tavimi.', en: 'Write down the one rule that stays with you.', ru: 'Запишите одно правило, которое остаётся с вами.' } },
      ],
    },
  ],
}
