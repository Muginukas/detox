import type { Protocol } from '../../types/content'

export const protocol: Protocol = {
  slug: 'metimas-rukyti-30',
  toxin: 'smoking',
  domains: ['body', 'mind'],
  evidence: 'researched',
  duration: 30,
  title: {
    lt: 'Metu rūkyti — 30 dienų',
    en: 'Quitting smoking — 30 days',
    ru: 'Бросаю курить — 30 дней',
  },
  summary: {
    lt: 'Trys paros fiziologijos ir dvidešimt septynios dienos įpročio. Šis protokolas skirtas antrai daliai — tai ji lemia rezultatą.',
    en: 'Three days of physiology and twenty-seven days of habit. This protocol is built for the second part — that is what decides the outcome.',
    ru: 'Трое суток физиологии и двадцать семь дней привычки. Этот протокол — про вторую часть, именно она решает исход.',
  },
  intro: {
    lt: 'Nikotino organizme nebelieka per tris paras. Viskas, kas lieka po to, yra išmokta kilpa: trigeris, rutina, atlygis. Todėl pirmosios trys dienos čia skirtos ištverti, o likusios — išardyti kilpą po vieną trigerį. Jei naudoji nikotino pakaitalus ar gydytojo skirtus vaistus, šis protokolas su jais dera — jie tvarko fiziologiją, o čia dirbama su elgesiu.',
    en: 'Nicotine is gone from the body within three days. Everything that remains after that is a learned loop: cue, routine, reward. So the first three days here are about getting through, and the rest about dismantling the loop one cue at a time. If you use nicotine replacement or medicines prescribed by your doctor, this protocol works alongside them — they handle physiology, this handles behaviour.',
    ru: 'Никотин уходит из организма за трое суток. Всё, что остаётся после, — выученная петля: триггер, рутина, награда. Поэтому первые три дня здесь про то, чтобы выдержать, а остальные — про разбор петли по одному триггеру. Если вы используете никотинзаместительную терапию или назначенные врачом препараты, этот протокол сочетается с ними: они работают с физиологией, здесь работа с поведением.',
  },
  related: ['metimo-laiko-juosta', 'nikotino-iprocio-kilpa', 'metimo-pagalbos-priemones', 'plauciu-atsistatymas'],
  days: [
    {
      day: 1,
      title: { lt: 'Diena nulis', en: 'Day zero', ru: 'День ноль' },
      focus: { lt: 'Šiandien svarbiausia ne valia, o aplinka.', en: 'Today environment matters more than willpower.', ru: 'Сегодня среда важнее воли.' },
      steps: [
        { id: 'rk1a', text: { lt: 'Išmesk cigaretes, žiebtuvėlius ir pelenines. Visas.', en: 'Throw out cigarettes, lighters and ashtrays. All of them.', ru: 'Выбросьте сигареты, зажигалки и пепельницы. Все.' } },
        { id: 'rk1b', text: { lt: 'Užsirašyk metimo datą ir vieną sakinį, kodėl meti.', en: 'Write down your quit date and one sentence on why.', ru: 'Запишите дату отказа и одно предложение почему.' } },
        { id: 'rk1c', text: { lt: 'Pasakyk bent trims žmonėms.', en: 'Tell at least three people.', ru: 'Скажите минимум трём людям.' } },
      ],
    },
    {
      day: 2,
      title: { lt: 'Anglies monoksidas išeina', en: 'Carbon monoxide clears', ru: 'Угарный газ уходит' },
      focus: { lt: 'Deguonies pernaša normalizuojasi — todėl gali svaigti galva.', en: 'Oxygen transport normalises — which is why you may feel lightheaded.', ru: 'Перенос кислорода нормализуется — отсюда лёгкое головокружение.' },
      steps: [
        { id: 'rk2a', text: { lt: 'Gerk daugiau vandens nei įprastai.', en: 'Drink more water than usual.', ru: 'Пейте больше воды, чем обычно.' } },
        { id: 'rk2b', text: { lt: 'Kai ateina noras — 6 lėti iškvėpimai, ilgesni už įkvėpimus.', en: 'When a craving comes — six slow exhales, longer than the inhales.', ru: 'Когда приходит тяга — шесть медленных выдохов длиннее вдохов.' } },
      ],
    },
    {
      day: 3,
      title: { lt: 'Pikas', en: 'The peak', ru: 'Пик' },
      focus: { lt: 'Šiandien sunkiausia. Nuo rytojaus fizinė dalis silpnės.', en: 'Today is the hardest. From tomorrow the physical part fades.', ru: 'Сегодня труднее всего. С завтрашнего дня физическая часть слабеет.' },
      steps: [
        { id: 'rk3a', text: { lt: 'Suplanuok dieną taip, kad būtum užimtas ir ne vienas.', en: 'Plan the day so you are busy and not alone.', ru: 'Спланируйте день так, чтобы быть занятым и не одному.' } },
        { id: 'rk3b', text: { lt: 'Šiandien jokio alkoholio.', en: 'No alcohol today.', ru: 'Сегодня никакого алкоголя.' } },
        { id: 'rk3c', text: { lt: 'Priminimas: nuo šiandien nikotino organizme nebelieka.', en: 'A reminder: from today there is no nicotine left in your body.', ru: 'Напоминание: с сегодняшнего дня никотина в организме больше нет.' } },
      ],
    },
    {
      day: 4,
      title: { lt: 'Trigerių sąrašas', en: 'The cue list', ru: 'Список триггеров' },
      focus: { lt: 'Noras ateina ne iš niekur — jis ateina iš situacijos.', en: 'The urge does not come from nowhere — it comes from a situation.', ru: 'Тяга приходит не ниоткуда — она приходит из ситуации.' },
      steps: [
        { id: 'rk4a', text: { lt: 'Kiekvieną kartą, kai užsinori, užsirašyk vieną žodį: kas ką tik vyko.', en: 'Each time you crave, write one word: what just happened.', ru: 'Каждый раз при тяге запишите одно слово: что только что было.' } },
        { id: 'rk4b', text: { lt: 'Vakare pažiūrėk, kurie trigeriai kartojasi.', en: 'In the evening see which cues repeat.', ru: 'Вечером посмотрите, какие триггеры повторяются.' } },
      ],
    },
    {
      day: 5,
      title: { lt: 'Rytinis trigeris', en: 'The morning cue', ru: 'Утренний триггер' },
      focus: { lt: 'Pirma cigaretė paprastai stipriausiai susieta su ritualu.', en: 'The first cigarette is usually the one most bound to ritual.', ru: 'Первая сигарета обычно сильнее всего связана с ритуалом.' },
      steps: [
        { id: 'rk5a', text: { lt: 'Pakeisk rytinį maršrutą arba vietą, kur geri kavą.', en: 'Change your morning route or where you drink coffee.', ru: 'Измените утренний маршрут или место, где пьёте кофе.' } },
        { id: 'rk5b', text: { lt: 'Išeik į lauką be telefono trims minutėms — pertrauka lieka, cigaretė ne.', en: 'Step outside without your phone for three minutes — keep the break, drop the cigarette.', ru: 'Выйдите на улицу без телефона на три минуты — перерыв остаётся, сигарета нет.' } },
      ],
    },
    {
      day: 6,
      title: { lt: 'Rankos ir burna', en: 'Hands and mouth', ru: 'Руки и рот' },
      focus: { lt: 'Dalis įpročio yra grynai fizinė.', en: 'Part of the habit is purely physical.', ru: 'Часть привычки чисто физическая.' },
      steps: [
        { id: 'rk6a', text: { lt: 'Turėk po ranka vandens, kramtomosios gumos arba sėklų.', en: 'Keep water, gum or seeds within reach.', ru: 'Держите под рукой воду, жвачку или семечки.' } },
        { id: 'rk6b', text: { lt: 'Pamėgink laikyti rankose ką nors kita: pieštuką, akmenuką, rožinį.', en: 'Try holding something else: a pencil, a stone, beads.', ru: 'Попробуйте держать что-то другое: карандаш, камешек, чётки.' } },
      ],
    },
    {
      day: 7,
      title: { lt: 'Savaitė', en: 'One week', ru: 'Неделя' },
      focus: { lt: 'Skonis ir kvapas jau grįžo.', en: 'Taste and smell have already returned.', ru: 'Вкус и запах уже вернулись.' },
      steps: [
        { id: 'rk7a', text: { lt: 'Suskaičiuok, kiek pinigų neišleidai, ir nuspręsk, kam juos panaudosi.', en: 'Count the money not spent and decide what it is for.', ru: 'Посчитайте несотраченные деньги и решите, на что они пойдут.' } },
        { id: 'rk7b', text: { lt: 'Pastebėk vieną dalyką, kurio skonį ar kvapą pajutai iš naujo.', en: 'Notice one thing you can taste or smell again.', ru: 'Заметьте одну вещь, вкус или запах которой вернулся.' } },
      ],
    },
    {
      day: 8,
      title: { lt: 'Streso trigeris', en: 'The stress cue', ru: 'Триггер стресса' },
      focus: { lt: 'Cigaretė streso nemažino — ji mažino nikotino abstinenciją.', en: 'The cigarette did not reduce stress — it reduced nicotine withdrawal.', ru: 'Сигарета не снижала стресс — она снижала никотиновую абстиненцию.' },
      steps: [
        { id: 'rk8a', text: { lt: 'Kai kyla įtampa, padaryk fiziologinį atodūsį: du įkvėpimai per nosį, ilgas iškvėpimas per burną, tris kartus.', en: 'When tension rises, do a physiological sigh: two inhales through the nose, one long exhale through the mouth, three times.', ru: 'При напряжении сделайте физиологический вздох: два вдоха носом, длинный выдох ртом, три раза.' } },
        { id: 'rk8b', text: { lt: 'Po streso pasivaikščiok penkias minutes.', en: 'Walk for five minutes after a stressful moment.', ru: 'После стрессового момента пройдитесь пять минут.' } },
      ],
    },
    {
      day: 9,
      title: { lt: 'Miegas', en: 'Sleep', ru: 'Сон' },
      focus: { lt: 'Bloga naktis smarkiai didina atkryčio riziką.', en: 'A bad night sharply raises relapse risk.', ru: 'Плохая ночь резко повышает риск срыва.' },
      steps: [
        { id: 'rk9a', text: { lt: 'Fiksuotas kėlimosi laikas, kofeinas tik iki 14 val.', en: 'A fixed wake-up time; caffeine only before 2 p.m.', ru: 'Фиксированное время подъёма; кофеин только до 14:00.' } },
        { id: 'rk9b', text: { lt: 'Telefoną palik ne miegamajame.', en: 'Leave the phone outside the bedroom.', ru: 'Оставьте телефон вне спальни.' } },
      ],
    },
    {
      day: 10,
      title: { lt: 'Judėjimas', en: 'Movement', ru: 'Движение' },
      focus: { lt: 'Krūvis mažina norą rūkyti ir stabilizuoja nuotaiką.', en: 'Exercise reduces cravings and steadies mood.', ru: 'Нагрузка снижает тягу и стабилизирует настроение.' },
      steps: [
        { id: 'rk10a', text: { lt: '20–30 minučių ėjimo arba kito krūvio lauke.', en: 'Twenty to thirty minutes of walking or other exercise outdoors.', ru: '20–30 минут ходьбы или другой нагрузки на улице.' } },
        { id: 'rk10b', text: { lt: 'Pastebėk, ar po krūvio noras rūkyti buvo silpnesnis.', en: 'Notice whether the craving was weaker afterwards.', ru: 'Заметьте, была ли тяга слабее после.' } },
      ],
    },
    {
      day: 11,
      title: { lt: 'Socialinis trigeris', en: 'The social cue', ru: 'Социальный триггер' },
      focus: { lt: 'Sunkiausia ne vienam, o kompanijoje.', en: 'The hard part is not being alone — it is company.', ru: 'Труднее всего не одному, а в компании.' },
      steps: [
        { id: 'rk11a', text: { lt: 'Pasiruošk vieną frazę: „Ne, aš nerūkau."', en: 'Prepare one sentence: "No, I don’t smoke."', ru: 'Заготовьте одну фразу: «Нет, я не курю».' } },
        { id: 'rk11b', text: { lt: 'Jei išeini su rūkančiais — eik, bet stovėk prieš vėją ir be cigaretės.', en: 'If you go out with smokers — go, but stand upwind and without a cigarette.', ru: 'Если выходите с курящими — идите, но стойте против ветра и без сигареты.' } },
      ],
    },
    {
      day: 12,
      title: { lt: 'Alkoholis', en: 'Alcohol', ru: 'Алкоголь' },
      focus: { lt: 'Stipriausias vienintelis atkryčio trigeris.', en: 'The single strongest relapse trigger.', ru: 'Самый сильный одиночный триггер срыва.' },
      steps: [
        { id: 'rk12a', text: { lt: 'Dar bent savaitę be alkoholio.', en: 'At least one more week without alcohol.', ru: 'Ещё как минимум неделю без алкоголя.' } },
        { id: 'rk12b', text: { lt: 'Jei eini į renginį — nuspręsk iš anksto, ką gersi.', en: 'If you go to an event, decide in advance what you will drink.', ru: 'Если идёте на мероприятие, заранее решите, что будете пить.' } },
      ],
    },
    {
      day: 13,
      title: { lt: 'Nuobodulys', en: 'Boredom', ru: 'Скука' },
      focus: { lt: 'Cigaretė dažnai užpildė tuščią laiką, ne poreikį.', en: 'The cigarette often filled empty time, not a need.', ru: 'Сигарета часто заполняла пустое время, а не потребность.' },
      steps: [
        { id: 'rk13a', text: { lt: 'Turėk sąrašą trijų dalykų, kuriuos padarysi per penkias laisvas minutes.', en: 'Keep a list of three things to do with five free minutes.', ru: 'Держите список трёх дел на пять свободных минут.' } },
        { id: 'rk13b', text: { lt: 'Pastebėk, kiek kartų per dieną griebiesi telefono vietoj cigaretės.', en: 'Notice how often you reach for the phone instead of a cigarette.', ru: 'Заметьте, сколько раз за день тянетесь к телефону вместо сигареты.' } },
      ],
    },
    {
      day: 14,
      title: { lt: 'Dvi savaitės', en: 'Two weeks', ru: 'Две недели' },
      focus: { lt: 'Kraujotaka jau geresnė — laiptai lengvesni.', en: 'Circulation has improved — stairs are easier.', ru: 'Кровообращение уже лучше — лестница даётся легче.' },
      steps: [
        { id: 'rk14a', text: { lt: 'Peržiūrėk savo trigerių sąrašą: kurie jau nebeveikia?', en: 'Review your cue list: which no longer work on you?', ru: 'Пересмотрите список триггеров: какие уже не действуют?' } },
        { id: 'rk14b', text: { lt: 'Vieną likusį trigerį pašalink iš aplinkos visiškai.', en: 'Remove one remaining cue from your environment entirely.', ru: 'Уберите один оставшийся триггер из среды полностью.' } },
      ],
    },
    {
      day: 15,
      title: { lt: 'Kosulys', en: 'The cough', ru: 'Кашель' },
      focus: { lt: 'Sustiprėjęs kosulys yra atsistatymo, ne pablogėjimo ženklas.', en: 'A stronger cough is a sign of recovery, not deterioration.', ru: 'Усилившийся кашель — признак восстановления, а не ухудшения.' },
      steps: [
        { id: 'rk15a', text: { lt: '5 minutės diafragminio kvėpavimo: ranka ant pilvo, įkvėpk per nosį.', en: 'Five minutes of diaphragmatic breathing: hand on belly, inhale through the nose.', ru: 'Пять минут диафрагмального дыхания: рука на животе, вдох носом.' } },
        { id: 'rk15b', text: { lt: 'Gerk pakankamai vandens — sausos gleivės sunkiau pasišalina.', en: 'Drink enough water — dry mucus is harder to clear.', ru: 'Пейте достаточно воды — сухая слизь выводится хуже.' } },
      ],
    },
    {
      day: 16,
      title: { lt: 'Svoris', en: 'Weight', ru: 'Вес' },
      focus: { lt: 'Apetitas grįžta, skonis sustiprėja — tai normalu.', en: 'Appetite returns and taste sharpens — that is normal.', ru: 'Аппетит возвращается, вкус обостряется — это нормально.' },
      steps: [
        { id: 'rk16a', text: { lt: 'Nepradėk dietos dabar — pirmiausia įtvirtink metimą.', en: 'Do not start a diet now — secure the quit first.', ru: 'Не начинайте диету сейчас — сначала закрепите отказ.' } },
        { id: 'rk16b', text: { lt: 'Turėk paruoštų sveikų užkandžių vietoj saldumynų.', en: 'Keep healthy snacks ready instead of sweets.', ru: 'Держите готовые полезные перекусы вместо сладкого.' } },
      ],
    },
    {
      day: 17,
      title: { lt: 'Po valgio', en: 'After meals', ru: 'После еды' },
      focus: { lt: 'Vienas atkakliausių trigerių.', en: 'One of the most persistent cues.', ru: 'Один из самых стойких триггеров.' },
      steps: [
        { id: 'rk17a', text: { lt: 'Iškart po valgio atsistok ir nueik — nesėdėk prie stalo.', en: 'Get up and walk right after eating — do not linger at the table.', ru: 'Сразу после еды встаньте и пройдитесь — не сидите за столом.' } },
        { id: 'rk17b', text: { lt: 'Išsivalyk dantis po valgio.', en: 'Brush your teeth after the meal.', ru: 'Почистите зубы после еды.' } },
      ],
    },
    {
      day: 18,
      title: { lt: 'Vairavimas', en: 'Driving', ru: 'Вождение' },
      focus: { lt: 'Mašina daugeliui yra atskiras rūkymo kambarys.', en: 'For many, the car is a separate smoking room.', ru: 'Для многих машина — отдельная курилка.' },
      steps: [
        { id: 'rk18a', text: { lt: 'Išvalyk mašiną ir išimk viską, kas primena rūkymą.', en: 'Clean the car and remove everything that reminds you of smoking.', ru: 'Вымойте машину и уберите всё, что напоминает о курении.' } },
        { id: 'rk18b', text: { lt: 'Turėk vandens ir gumos automobilyje.', en: 'Keep water and gum in the car.', ru: 'Держите воду и жвачку в машине.' } },
      ],
    },
    {
      day: 19,
      title: { lt: 'Noro banga', en: 'The craving wave', ru: 'Волна тяги' },
      focus: { lt: 'Vidutinis noras trunka kelias minutes ir praeina pats.', en: 'An average craving lasts a few minutes and passes by itself.', ru: 'Средняя тяга длится несколько минут и проходит сама.' },
      steps: [
        { id: 'rk19a', text: { lt: 'Kai kyla noras, apibūdink jį: kur jaučiasi, koks jis, ar stiprėja.', en: 'When a craving comes, describe it: where it sits, what it is like, whether it grows.', ru: 'Когда приходит тяга, опишите её: где ощущается, какая она, растёт ли.' } },
        { id: 'rk19b', text: { lt: 'Pažiūrėk į laikrodį ir stebėk, kiek ji realiai truko.', en: 'Look at the clock and see how long it actually lasted.', ru: 'Посмотрите на часы и увидьте, сколько она реально длилась.' } },
      ],
    },
    {
      day: 20,
      title: { lt: 'Tapatybė', en: 'Identity', ru: 'Идентичность' },
      focus: { lt: '„Aš nerūkau" veikia geriau nei „aš metu".', en: '"I don’t smoke" works better than "I’m quitting".', ru: '«Я не курю» работает лучше, чем «я бросаю».' },
      steps: [
        { id: 'rk20a', text: { lt: 'Nuo šiandien kalbėk apie save kaip apie nerūkantį.', en: 'From today, speak about yourself as a non-smoker.', ru: 'С сегодняшнего дня говорите о себе как о некурящем.' } },
        { id: 'rk20b', text: { lt: 'Užsirašyk, kas tavo gyvenime pasikeitė per tris savaites.', en: 'Write down what has changed in your life in three weeks.', ru: 'Запишите, что изменилось в вашей жизни за три недели.' } },
      ],
    },
    {
      day: 21,
      title: { lt: 'Trys savaitės', en: 'Three weeks', ru: 'Три недели' },
      focus: { lt: 'Sunkiausia dalis jau praeityje.', en: 'The hardest part is behind you.', ru: 'Самая трудная часть уже позади.' },
      steps: [
        { id: 'rk21a', text: { lt: 'Pasilepink tuo, ką nusipirkai už sutaupytus pinigus.', en: 'Enjoy something bought with the money you saved.', ru: 'Порадуйте себя тем, что купили на сэкономленные деньги.' } },
        { id: 'rk21b', text: { lt: 'Papasakok kam nors, kaip sekėsi.', en: 'Tell someone how it has gone.', ru: 'Расскажите кому-нибудь, как всё прошло.' } },
      ],
    },
    {
      day: 22,
      title: { lt: 'Rizikingos situacijos', en: 'High-risk situations', ru: 'Рискованные ситуации' },
      focus: { lt: 'Verta jas numatyti prieš, o ne per.', en: 'Better to plan for them before, not during.', ru: 'Лучше предусмотреть их заранее, а не во время.' },
      steps: [
        { id: 'rk22a', text: { lt: 'Surašyk tris situacijas artimiausiam mėnesiui, kuriose bus sunku.', en: 'List three situations in the coming month that will be hard.', ru: 'Выпишите три ситуации ближайшего месяца, где будет трудно.' } },
        { id: 'rk22b', text: { lt: 'Kiekvienai parašyk konkretų planą.', en: 'Write a concrete plan for each.', ru: 'Напишите конкретный план для каждой.' } },
      ],
    },
    {
      day: 23,
      title: { lt: 'Plaučiai', en: 'Lungs', ru: 'Лёгкие' },
      focus: { lt: 'Blakstienėlės vėl dirba — valymas grįžo.', en: 'The cilia are working again — clearance is back.', ru: 'Реснички снова работают — очищение вернулось.' },
      steps: [
        { id: 'rk23a', text: { lt: 'Aerobinis krūvis 30 minučių — jis padeda plaučiams labiau nei bet kuri technika.', en: 'Thirty minutes of aerobic exercise — it helps the lungs more than any technique.', ru: 'Тридцать минут аэробной нагрузки — лёгким это помогает больше любой техники.' } },
        { id: 'rk23b', text: { lt: 'Išvėdink namus ir nedegink žvakių uždaroje patalpoje.', en: 'Ventilate your home and do not burn candles in closed rooms.', ru: 'Проветрите дом и не жгите свечи в закрытых комнатах.' } },
      ],
    },
    {
      day: 24,
      title: { lt: 'Kadmis', en: 'Cadmium', ru: 'Кадмий' },
      focus: { lt: 'Rūkantieji gauna kelis kartus daugiau kadmio nei nerūkantys.', en: 'Smokers take in several times more cadmium than non-smokers.', ru: 'Курящие получают в несколько раз больше кадмия, чем некурящие.' },
      steps: [
        { id: 'rk24a', text: { lt: 'Pasitikrink, ar netrūksta geležies — jos trūkumas didina metalų įsisavinimą.', en: 'Check whether you are iron deficient — deficiency raises metal absorption.', ru: 'Проверьте, нет ли дефицита железа — он повышает всасывание металлов.' } },
        { id: 'rk24b', text: { lt: 'Valgyk įvairiai: cinkas ir kalcis konkuruoja su kadmiu.', en: 'Eat variably: zinc and calcium compete with cadmium.', ru: 'Питайтесь разнообразно: цинк и кальций конкурируют с кадмием.' } },
      ],
    },
    {
      day: 25,
      title: { lt: 'Jei buvo viena cigaretė', en: 'If there was one cigarette', ru: 'Если была одна сигарета' },
      focus: { lt: 'Viena cigaretė yra viena cigaretė, o ne žlugimas.', en: 'One cigarette is one cigarette, not a collapse.', ru: 'Одна сигарета — это одна сигарета, а не крах.' },
      steps: [
        { id: 'rk25a', text: { lt: 'Jei buvo — užsirašyk trigerį ir tęsk nuo šiandien, negrįžk prie pakelio.', en: 'If it happened — note the cue and continue from today; do not go back to the pack.', ru: 'Если случилось — запишите триггер и продолжайте с сегодня, не возвращайтесь к пачке.' } },
        { id: 'rk25b', text: { lt: 'Jei nebuvo — vis tiek numatyk, ką darysi, jei nutiktų.', en: 'If it did not — still decide what you will do if it does.', ru: 'Если не случилось — всё равно решите, что сделаете, если случится.' } },
      ],
    },
    {
      day: 26,
      title: { lt: 'Ryšys', en: 'Connection', ru: 'Связь' },
      focus: { lt: 'Rūkymas daugeliui buvo socialinis ritualas.', en: 'For many, smoking was a social ritual.', ru: 'Для многих курение было социальным ритуалом.' },
      steps: [
        { id: 'rk26a', text: { lt: 'Susitark su kuo nors dėl pasivaikščiojimo vietoj rūkymo pertraukos.', en: 'Arrange a walk with someone in place of a smoking break.', ru: 'Договоритесь с кем-нибудь о прогулке вместо перекура.' } },
        { id: 'rk26b', text: { lt: 'Padėkok žmogui, kuris tave palaikė.', en: 'Thank someone who supported you.', ru: 'Поблагодарите человека, который вас поддержал.' } },
      ],
    },
    {
      day: 27,
      title: { lt: 'Pertrauka lieka', en: 'The break stays', ru: 'Перерыв остаётся' },
      focus: { lt: 'Svarbiausias atlygis buvo teisėtas sustojimas.', en: 'The real reward was a legitimate pause.', ru: 'Настоящей наградой была законная остановка.' },
      steps: [
        { id: 'rk27a', text: { lt: 'Įsivesk dvi sąmoningas pertraukas per dieną — be telefono, be tikslo.', en: 'Build in two deliberate breaks a day — no phone, no purpose.', ru: 'Введите два осознанных перерыва в день — без телефона, без цели.' } },
        { id: 'rk27b', text: { lt: 'Pastebėk, kad pertrauka veikia ir be cigaretės.', en: 'Notice that the break works without a cigarette too.', ru: 'Заметьте, что перерыв работает и без сигареты.' } },
      ],
    },
    {
      day: 28,
      title: { lt: 'Ateities planas', en: 'A plan forward', ru: 'План вперёд' },
      focus: { lt: 'Metimas baigiasi ne trisdešimtą dieną.', en: 'Quitting does not end on day thirty.', ru: 'Отказ не заканчивается на тридцатый день.' },
      steps: [
        { id: 'rk28a', text: { lt: 'Nuspręsk, kaip mažinsi nikotino pakaitalus, jei juos vartoji.', en: 'Decide how you will taper nicotine replacement if you use it.', ru: 'Решите, как будете снижать НЗТ, если её используете.' } },
        { id: 'rk28b', text: { lt: 'Numatyk, ką darysi, kai po pusmečio ateis „tik viena".', en: 'Plan what you will do when "just one" arrives six months from now.', ru: 'Спланируйте, что сделаете, когда через полгода придёт «только одну».' } },
      ],
    },
    {
      day: 29,
      title: { lt: 'Kūnas', en: 'The body', ru: 'Тело' },
      focus: { lt: 'Pokyčiai jau išmatuojami, net jei nematomi.', en: 'The changes are already measurable, even if invisible.', ru: 'Изменения уже измеримы, даже если незаметны.' },
      steps: [
        { id: 'rk29a', text: { lt: 'Palygink, kaip lipi laiptais dabar ir prieš mėnesį.', en: 'Compare climbing stairs now with a month ago.', ru: 'Сравните подъём по лестнице сейчас и месяц назад.' } },
        { id: 'rk29b', text: { lt: 'Užsirašyk tris fizinius pokyčius, kuriuos pastebėjai.', en: 'Write down three physical changes you have noticed.', ru: 'Запишите три физических изменения, которые заметили.' } },
      ],
    },
    {
      day: 30,
      title: { lt: 'Trisdešimt', en: 'Thirty', ru: 'Тридцать' },
      focus: { lt: 'Iš čia kelias tęsiasi be protokolo.', en: 'From here the road continues without a protocol.', ru: 'Отсюда путь продолжается без протокола.' },
      steps: [
        { id: 'rk30a', text: { lt: 'Perskaityk savo pirmos dienos sakinį.', en: 'Reread the sentence you wrote on day one.', ru: 'Перечитайте предложение, написанное в первый день.' } },
        { id: 'rk30b', text: { lt: 'Pasižymėk datą kalendoriuje po trijų mėnesių — pasitikrinsi save.', en: 'Mark a date three months out in your calendar — a check-in with yourself.', ru: 'Отметьте дату через три месяца в календаре — проверка себя.' } },
        { id: 'rk30c', text: { lt: 'Pasirink, kuris protokolas bus kitas.', en: 'Choose which protocol comes next.', ru: 'Выберите, какой протокол будет следующим.' } },
      ],
    },
  ],
}
