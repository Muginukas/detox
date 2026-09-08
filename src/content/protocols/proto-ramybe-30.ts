import type { Protocol } from '../../types/content'

export const protocol: Protocol = {
  slug: 'proto-ramybe-30',
  toxin: 'basics',
  domains: ['mind', 'soul'],
  evidence: 'emerging',
  duration: 30,
  title: {
    lt: 'Proto ir sielos ramybė — 30 dienų',
    en: 'Quiet for mind and soul — 30 days',
    ru: 'Покой разума и души — 30 дней',
  },
  summary: {
    lt: 'Informacinis detoksas, dėmesio atkūrimas ir keturios sielos praktikos, kurias tradicijos naudojo daug anksčiau nei atsirado ekranai.',
    en: 'An information detox, attention restoration, and four practices of the soul that traditions used long before screens existed.',
    ru: 'Информационный детокс, восстановление внимания и четыре практики души, которыми традиции пользовались задолго до экранов.',
  },
  intro: {
    lt: 'Pirmoji savaitė mažina įeinantį srautą. Antroji atstato dėmesį. Trečioji dirba su tuo, kas iškyla, kai srautas nutyla. Ketvirtoji uždaro. Nė viena diena netrunka ilgiau nei dvidešimt minučių, ir nė viena nereikalauja tikėti nieko konkretaus.',
    en: 'The first week reduces incoming flow. The second restores attention. The third works with what surfaces once the flow goes quiet. The fourth closes. No day takes more than twenty minutes, and none requires believing anything in particular.',
    ru: 'Первая неделя уменьшает входящий поток. Вторая восстанавливает внимание. Третья работает с тем, что всплывает, когда поток стихает. Четвёртая закрывает. Ни один день не занимает больше двадцати минут и не требует верить во что-то конкретное.',
  },
  related: ['informacinis-detoksas', 'miegas-ir-glimfine-sistema', 'stresas-ir-kvepavimas', 'meditacija', 'rysys-prasme-gamta'],
  days: [
    {
      day: 1,
      title: { lt: 'Pranešimai', en: 'Notifications', ru: 'Уведомления' },
      focus: { lt: 'Vienintelis didžiausias pakeitimas visame protokole.', en: 'The single biggest change in the whole protocol.', ru: 'Самое большое изменение во всём протоколе.' },
      steps: [
        { id: 'pr1a', text: { lt: 'Išjunk visų programų pranešimus, palik tik žmonių žinutes ir skambučius.', en: 'Turn off every app notification; keep only messages and calls from people.', ru: 'Отключите уведомления всех приложений; оставьте только сообщения и звонки от людей.' } },
        { id: 'pr1b', text: { lt: 'Užsirašyk, kiek kartų per dieną paimi telefoną be priežasties.', en: 'Note how many times a day you pick up the phone for no reason.', ru: 'Отметьте, сколько раз в день берёте телефон без причины.' } },
      ],
    },
    {
      day: 2,
      title: { lt: 'Pirma valanda', en: 'The first hour', ru: 'Первый час' },
      focus: { lt: 'Kaip prasideda diena, taip ji ir tęsiasi.', en: 'How the day starts is how it continues.', ru: 'Как начинается день, так он и продолжается.' },
      steps: [
        { id: 'pr2a', text: { lt: 'Pirmą valandą po pabudimo — be telefono.', en: 'No phone for the first hour after waking.', ru: 'Первый час после пробуждения — без телефона.' } },
        { id: 'pr2b', text: { lt: 'Išeik į lauko šviesą 10 minučių.', en: 'Get ten minutes of outdoor light.', ru: 'Побудьте десять минут на уличном свете.' } },
      ],
    },
    {
      day: 3,
      title: { lt: 'Miegamasis', en: 'The bedroom', ru: 'Спальня' },
      focus: { lt: 'Telefonas prie lovos suardo abu dienos galus.', en: 'A phone by the bed wrecks both ends of the day.', ru: 'Телефон у кровати разрушает оба конца дня.' },
      steps: [
        { id: 'pr3a', text: { lt: 'Telefoną krauk kitame kambaryje, naudok įprastą žadintuvą.', en: 'Charge the phone in another room; use an ordinary alarm clock.', ru: 'Заряжайте телефон в другой комнате; используйте обычный будильник.' } },
        { id: 'pr3b', text: { lt: 'Paskutinę valandą prieš miegą — be ekrano.', en: 'No screens in the last hour before sleep.', ru: 'Последний час перед сном — без экрана.' } },
      ],
    },
    {
      day: 4,
      title: { lt: 'Pilkas ekranas', en: 'Greyscale', ru: 'Чёрно-белый экран' },
      focus: { lt: 'Spalvos yra dalis atlygio sistemos.', en: 'Colour is part of the reward system.', ru: 'Цвет — часть системы вознаграждения.' },
      steps: [
        { id: 'pr4a', text: { lt: 'Įjunk nespalvotą ekrano režimą bent šiai dienai.', en: 'Switch the screen to greyscale for at least today.', ru: 'Включите чёрно-белый режим экрана хотя бы на сегодня.' } },
        { id: 'pr4b', text: { lt: 'Nuimk srautines programas nuo pagrindinio ekrano.', en: 'Remove feed apps from your home screen.', ru: 'Уберите ленточные приложения с главного экрана.' } },
      ],
    },
    {
      day: 5,
      title: { lt: 'Nuobodulio langas', en: 'A boredom window', ru: 'Окно скуки' },
      focus: { lt: 'Pirmomis dienomis bus nemalonu — tai ir yra požymis.', en: 'It will be uncomfortable at first — that is the sign.', ru: 'Первые дни будет неприятно — это и есть признак.' },
      steps: [
        { id: 'pr5a', text: { lt: '10 minučių be jokio įvesties srauto: be telefono, muzikos, podkasto.', en: 'Ten minutes with no input: no phone, no music, no podcast.', ru: 'Десять минут без входящего потока: без телефона, музыки, подкастов.' } },
        { id: 'pr5b', text: { lt: 'Pastebėk, kokios mintys ateina pirmos.', en: 'Notice which thoughts arrive first.', ru: 'Заметьте, какие мысли приходят первыми.' } },
      ],
    },
    {
      day: 6,
      title: { lt: 'Naujienos', en: 'News', ru: 'Новости' },
      focus: { lt: 'Nuolatinis naujienų srautas duoda nerimą be veiksmo.', en: 'A constant news stream delivers anxiety without action.', ru: 'Постоянный поток новостей даёт тревогу без действия.' },
      steps: [
        { id: 'pr6a', text: { lt: 'Naujienas skaityk vieną kartą per dieną, nustatytu laiku.', en: 'Read news once a day, at a set time.', ru: 'Читайте новости один раз в день, в назначенное время.' } },
        { id: 'pr6b', text: { lt: 'Nesikreipk į naujienas pirmą ir paskutinę dienos valandą.', en: 'No news in the first and last hour of the day.', ru: 'Никаких новостей в первый и последний час дня.' } },
      ],
    },
    {
      day: 7,
      title: { lt: 'Savaitė be srauto', en: 'A week off the stream', ru: 'Неделя без потока' },
      focus: { lt: 'Ką pastebėjai, kai sumažėjo įvestis?', en: 'What did you notice as input fell?', ru: 'Что вы заметили, когда входящего стало меньше?' },
      steps: [
        { id: 'pr7a', text: { lt: 'Užsirašyk, kaip pasikeitė miegas ir dėmesys per savaitę.', en: 'Write down how sleep and attention changed this week.', ru: 'Запишите, как изменились сон и внимание за неделю.' } },
        { id: 'pr7b', text: { lt: 'Pasilik vieną taisyklę visam laikui.', en: 'Keep one rule permanently.', ru: 'Оставьте одно правило навсегда.' } },
      ],
    },
    {
      day: 8,
      title: { lt: 'Penkios minutės kvėpavimo', en: 'Five minutes of breath', ru: 'Пять минут дыхания' },
      focus: { lt: 'Nuklydai — pastebėjai — grįžai. Tai visa praktika.', en: 'Drifted — noticed — returned. That is the whole practice.', ru: 'Отвлёкся — заметил — вернулся. Это вся практика.' },
      steps: [
        { id: 'pr8a', text: { lt: 'Sėdėk 5 minutes, dėmesys — kvėpavimo pojūtis.', en: 'Sit for five minutes with attention on the breath.', ru: 'Сидите пять минут, внимание на ощущении дыхания.' } },
        { id: 'pr8b', text: { lt: 'Pririšk praktiką prie esamo įpročio, pvz., po dantų valymo.', en: 'Attach the practice to an existing habit, e.g. after brushing your teeth.', ru: 'Привяжите практику к существующей привычке, например после чистки зубов.' } },
      ],
    },
    {
      day: 9,
      title: { lt: 'Gamta', en: 'Nature', ru: 'Природа' },
      focus: { lt: '20 minučių lauke matomai mažina kortizolį.', en: 'Twenty minutes outdoors measurably lowers cortisol.', ru: 'Двадцать минут на улице заметно снижают кортизол.' },
      steps: [
        { id: 'pr9a', text: { lt: '20 minučių parke ar prie vandens, be telefono.', en: 'Twenty minutes in a park or by water, no phone.', ru: 'Двадцать минут в парке или у воды, без телефона.' } },
        { id: 'pr9b', text: { lt: 'Nesiklausyk nieko — leisk aplinkai traukti dėmesį pačiai.', en: 'Listen to nothing — let the surroundings hold attention by themselves.', ru: 'Ничего не слушайте — позвольте среде удерживать внимание самой.' } },
      ],
    },
    {
      day: 10,
      title: { lt: 'Vienas darbas vienu metu', en: 'One task at a time', ru: 'Одно дело за раз' },
      focus: { lt: 'Perjungimai kainuoja daugiau nei atrodo.', en: 'Switching costs more than it seems.', ru: 'Переключения стоят дороже, чем кажется.' },
      steps: [
        { id: 'pr10a', text: { lt: 'Vieną darbą daryk 25 minutes be jokių pertraukimų.', en: 'Do one task for 25 minutes with no interruptions.', ru: 'Делайте одно дело 25 минут без прерываний.' } },
        { id: 'pr10b', text: { lt: 'Uždaryk visas skiltis, kurių tam nereikia.', en: 'Close every tab you do not need for it.', ru: 'Закройте все вкладки, которые для этого не нужны.' } },
      ],
    },
    {
      day: 11,
      title: { lt: 'Kūno skenavimas', en: 'Body scan', ru: 'Сканирование тела' },
      focus: { lt: 'Įtampa dažnai pastebima tik tada, kai jos ieškai.', en: 'Tension is usually noticed only when you look for it.', ru: 'Напряжение обычно замечается, только когда его ищут.' },
      steps: [
        { id: 'pr11a', text: { lt: '10 minučių lėtai kelk dėmesį per kūną nuo pėdų iki galvos.', en: 'Ten minutes moving attention slowly through the body, feet to head.', ru: 'Десять минут медленно ведите внимание по телу от стоп к голове.' } },
        { id: 'pr11b', text: { lt: 'Pastebėk, kur laikai įtampą nesąmoningai.', en: 'Notice where you hold tension without realising.', ru: 'Заметьте, где вы держите напряжение неосознанно.' } },
      ],
    },
    {
      day: 12,
      title: { lt: 'Dėmesingumas dienoje', en: 'Mindfulness in the day', ru: 'Осознанность в течение дня' },
      focus: { lt: 'Neformali praktika daugeliui svarbesnė už formalią.', en: 'Informal practice matters more than formal for many people.', ru: 'Неформальная практика для многих важнее формальной.' },
      steps: [
        { id: 'pr12a', text: { lt: 'Vieną kasdienį veiksmą atlik visiškai dėmesingai (kava, ėjimas, rankų plovimas).', en: 'Do one everyday action with full attention (coffee, walking, washing hands).', ru: 'Сделайте одно повседневное действие с полным вниманием (кофе, ходьба, мытьё рук).' } },
        { id: 'pr12b', text: { lt: 'Valgyk vieną valgymą be ekrano ir be pokalbio.', en: 'Eat one meal with no screen and no conversation.', ru: 'Съешьте один приём пищи без экрана и без разговора.' } },
      ],
    },
    {
      day: 13,
      title: { lt: 'Kalba sau', en: 'How you speak to yourself', ru: 'Как вы говорите с собой' },
      focus: { lt: 'Gėda paralyžiuoja, kaltė judina.', en: 'Shame paralyses; guilt moves.', ru: 'Стыд парализует, вина движет.' },
      steps: [
        { id: 'pr13a', text: { lt: 'Pastebėk vieną mintį apie save, kurios nesakytum draugui.', en: 'Notice one thought about yourself you would not say to a friend.', ru: 'Заметьте одну мысль о себе, которую не сказали бы другу.' } },
        { id: 'pr13b', text: { lt: 'Perrašyk ją taip, kaip pasakytum draugui.', en: 'Rewrite it the way you would say it to a friend.', ru: 'Перепишите её так, как сказали бы другу.' } },
      ],
    },
    {
      day: 14,
      title: { lt: 'Dvi savaitės', en: 'Two weeks', ru: 'Две недели' },
      focus: { lt: 'Dėmesys atsistato lėčiau nei miegas, bet atsistato.', en: 'Attention recovers more slowly than sleep, but it recovers.', ru: 'Внимание восстанавливается медленнее сна, но восстанавливается.' },
      steps: [
        { id: 'pr14a', text: { lt: 'Perskaityk knygos skyrių iki galo be telefono.', en: 'Read a chapter of a book to the end without your phone.', ru: 'Прочитайте главу книги до конца без телефона.' } },
        { id: 'pr14b', text: { lt: 'Pastebėk, po kiek laiko atsiranda noras patikrinti telefoną.', en: 'Notice how long it takes before the urge to check appears.', ru: 'Заметьте, через сколько появляется желание проверить телефон.' } },
      ],
    },
    {
      day: 15,
      title: { lt: 'Neišsakyti žodžiai', en: 'Unsaid words', ru: 'Несказанные слова' },
      focus: { lt: 'Neišrašytos mintys sukasi ratu.', en: 'Unwritten thoughts keep circling.', ru: 'Незаписанные мысли ходят по кругу.' },
      steps: [
        { id: 'pr15a', text: { lt: 'Rašyk 10 minučių be sustojimo, netaisydamas ir nevertindamas.', en: 'Write for ten minutes without stopping, editing or judging.', ru: 'Пишите десять минут без остановки, правки и оценки.' } },
        { id: 'pr15b', text: { lt: 'Nieko neskaityk iš karto — grįžk prie to rytoj.', en: 'Do not reread it now — come back tomorrow.', ru: 'Не перечитывайте сразу — вернитесь завтра.' } },
      ],
    },
    {
      day: 16,
      title: { lt: 'Nuoskauda', en: 'Grievance', ru: 'Обида' },
      focus: { lt: 'Nuoskauda reikalauja nuolatinio energijos tiekimo.', en: 'A grievance requires a continuous supply of energy.', ru: 'Обида требует постоянной подпитки энергией.' },
      steps: [
        { id: 'pr16a', text: { lt: 'Parašyk laišką, kurio nesiųsi: ne apie tai, ką jis padarė, o ko tai tau kainavo.', en: 'Write a letter you will not send: not about what they did, but what it cost you.', ru: 'Напишите письмо, которое не отправите: не о том, что он сделал, а чего это вам стоило.' } },
        { id: 'pr16b', text: { lt: 'Įvardyk vieną dalyką, kurį nusprendi nustoti nešti.', en: 'Name one thing you decide to stop carrying.', ru: 'Назовите одну вещь, которую решаете перестать нести.' } },
      ],
    },
    {
      day: 17,
      title: { lt: 'Kaltė', en: 'Guilt', ru: 'Вина' },
      focus: { lt: 'Įvardyti, ištarti, atlikti veiksmą, uždaryti.', en: 'Name it, say it, act, close it.', ru: 'Назвать, произнести, действовать, закрыть.' },
      steps: [
        { id: 'pr17a', text: { lt: 'Įvardyk vieną dalyką, dėl kurio jautiesi kaltas — konkrečiai, be gėdos.', en: 'Name one thing you feel guilty about — concretely, without shame.', ru: 'Назовите одну вещь, за которую чувствуете вину — конкретно, без стыда.' } },
        { id: 'pr17b', text: { lt: 'Nuspręsk vieną realų veiksmą: atsiprašymą, atlyginimą arba pokalbį.', en: 'Decide one real action: an apology, a repair or a conversation.', ru: 'Решите одно реальное действие: извинение, возмещение или разговор.' } },
      ],
    },
    {
      day: 18,
      title: { lt: 'Ryšys', en: 'Connection', ru: 'Связь' },
      focus: { lt: 'Pokalbis su patikimu žmogumi veikia greičiau nei bet kuri technika.', en: 'A conversation with someone you trust works faster than any technique.', ru: 'Разговор с человеком, которому доверяете, действует быстрее любой техники.' },
      steps: [
        { id: 'pr18a', text: { lt: 'Paskambink žmogui, su kuriuo seniai nekalbėjai. Ne žinutė — skambutis.', en: 'Call someone you have not spoken to in a while. Not a message — a call.', ru: 'Позвоните человеку, с которым давно не говорили. Не сообщение — звонок.' } },
        { id: 'pr18b', text: { lt: 'Klausyk daugiau nei kalbi.', en: 'Listen more than you speak.', ru: 'Слушайте больше, чем говорите.' } },
      ],
    },
    {
      day: 19,
      title: { lt: 'Padėka', en: 'Gratitude', ru: 'Благодарность' },
      focus: { lt: 'Labiausiai ištirta iš visų sielos praktikų.', en: 'The best-studied of all the soul practices.', ru: 'Самая изученная из всех практик души.' },
      steps: [
        { id: 'pr19a', text: { lt: 'Užsirašyk tris konkrečius dalykus, kurie šiandien buvo geri.', en: 'Write down three specific things that were good today.', ru: 'Запишите три конкретные вещи, которые сегодня были хорошими.' } },
        { id: 'pr19b', text: { lt: 'Vienam žmogui pasakyk, už ką jam dėkingas.', en: 'Tell one person what you are grateful to them for.', ru: 'Скажите одному человеку, за что вы ему благодарны.' } },
      ],
    },
    {
      day: 20,
      title: { lt: 'Prasmė', en: 'Meaning', ru: 'Смысл' },
      focus: { lt: 'Mažas klausimas veikia geriau nei didelis.', en: 'The small question works better than the large one.', ru: 'Малый вопрос работает лучше большого.' },
      steps: [
        { id: 'pr20a', text: { lt: 'Atsakyk: kam šią savaitę mano buvimas ką nors reiškė?', en: 'Answer: who did my presence matter to this week?', ru: 'Ответьте: для кого моё присутствие на этой неделе что-то значило?' } },
        { id: 'pr20b', text: { lt: 'Padaryk vieną dalyką kitam žmogui, nieko negaudamas mainais.', en: 'Do one thing for another person with nothing in return.', ru: 'Сделайте одно дело для другого человека, ничего не получая взамен.' } },
      ],
    },
    {
      day: 21,
      title: { lt: 'Trys savaitės', en: 'Three weeks', ru: 'Три недели' },
      focus: { lt: 'Kas iškilo, kai srautas nutilo?', en: 'What surfaced once the stream went quiet?', ru: 'Что всплыло, когда поток стих?' },
      steps: [
        { id: 'pr21a', text: { lt: 'Perskaityk tai, ką rašei 15 dieną.', en: 'Reread what you wrote on day 15.', ru: 'Перечитайте то, что написали на 15-й день.' } },
        { id: 'pr21b', text: { lt: 'Užsirašyk, kas pasikeitė per tris savaites.', en: 'Write down what has changed in three weeks.', ru: 'Запишите, что изменилось за три недели.' } },
      ],
    },
    {
      day: 22,
      title: { lt: 'Tyla ilgiau', en: 'Longer silence', ru: 'Тишина дольше' },
      focus: { lt: 'Nuo penkių minučių iki dvidešimties.', en: 'From five minutes to twenty.', ru: 'От пяти минут до двадцати.' },
      steps: [
        { id: 'pr22a', text: { lt: 'Sėdėk tyloje 15–20 minučių.', en: 'Sit in silence for 15–20 minutes.', ru: 'Посидите в тишине 15–20 минут.' } },
        { id: 'pr22b', text: { lt: 'Nesitikėk ramybės — rezultatas yra pastebėjimas, ne būsena.', en: 'Do not expect calm — the outcome is noticing, not a state.', ru: 'Не ждите спокойствия — результат это замечание, а не состояние.' } },
      ],
    },
    {
      day: 23,
      title: { lt: 'Ėjimas be tikslo', en: 'Walking with no destination', ru: 'Ходьба без цели' },
      focus: { lt: 'Dėmesys atsistato ten, kur nereikia pastangų.', en: 'Attention restores where no effort is required.', ru: 'Внимание восстанавливается там, где не нужно усилий.' },
      steps: [
        { id: 'pr23a', text: { lt: 'Eik 30 minučių be maršruto, be podkasto, be tikslo.', en: 'Walk for thirty minutes with no route, no podcast, no purpose.', ru: 'Погуляйте тридцать минут без маршрута, подкаста и цели.' } },
        { id: 'pr23b', text: { lt: 'Pastebėk penkis dalykus, kurių anksčiau nematei.', en: 'Notice five things you had not seen before.', ru: 'Заметьте пять вещей, которых раньше не видели.' } },
      ],
    },
    {
      day: 24,
      title: { lt: 'Ribos', en: 'Boundaries', ru: 'Границы' },
      focus: { lt: 'Stresą lemia ne krūvis, o krūvio ir kontrolės santykis.', en: 'Stress comes not from load but from the ratio of load to control.', ru: 'Стресс определяется не нагрузкой, а соотношением нагрузки и контроля.' },
      steps: [
        { id: 'pr24a', text: { lt: 'Pasakyk „ne" vienam dalykui, kurio nenori ir neprivalai daryti.', en: 'Say no to one thing you do not want and do not have to do.', ru: 'Скажите «нет» одному делу, которого не хотите и не обязаны делать.' } },
        { id: 'pr24b', text: { lt: 'Nustatyk vieną laiką dienoje, kai esi nepasiekiamas.', en: 'Set one time of day when you are unreachable.', ru: 'Определите одно время дня, когда вы недоступны.' } },
      ],
    },
    {
      day: 25,
      title: { lt: 'Vakaro uždarymas', en: 'Closing the evening', ru: 'Закрытие вечера' },
      focus: { lt: 'Neuždaryta diena tęsiasi lovoje mintimis.', en: 'A day left unclosed continues in bed, in thought.', ru: 'Незакрытый день продолжается в кровати мыслями.' },
      steps: [
        { id: 'pr25a', text: { lt: 'Trys klausimai prieš miegą: kas buvo gera, ką padariau ne taip, kam rytoj būsiu naudingas.', en: 'Three questions before sleep: what was good, what I did badly, who I can be useful to tomorrow.', ru: 'Три вопроса перед сном: что было хорошего, что сделал не так, кому завтра буду полезен.' } },
        { id: 'pr25b', text: { lt: 'Užrašyk, netik pagalvok.', en: 'Write them down, do not just think them.', ru: 'Запишите, а не просто подумайте.' } },
      ],
    },
    {
      day: 26,
      title: { lt: 'Vienatvė ir buvimas vienam', en: 'Loneliness and solitude', ru: 'Одиночество и уединение' },
      focus: { lt: 'Tai du skirtingi dalykai, dažnai painiojami.', en: 'Two different things, often confused.', ru: 'Две разные вещи, которые часто путают.' },
      steps: [
        { id: 'pr26a', text: { lt: 'Praleisk valandą vienas sąmoningai, o ne dėl to, kad nėra su kuo.', en: 'Spend an hour alone deliberately, not for lack of company.', ru: 'Проведите час в одиночестве осознанно, а не из-за отсутствия компании.' } },
        { id: 'pr26b', text: { lt: 'Pastebėk skirtumą tarp to ir vienišumo.', en: 'Notice the difference between that and loneliness.', ru: 'Заметьте разницу между этим и одиночеством.' } },
      ],
    },
    {
      day: 27,
      title: { lt: 'Kūryba arba tarnystė', en: 'Creation or service', ru: 'Творчество или служение' },
      focus: { lt: 'Tuštuma po pasiekimų dažniausiai užpildoma ne dar vienu pasiekimu.', en: 'The emptiness after achievement is rarely filled by another achievement.', ru: 'Пустота после достижения редко заполняется ещё одним достижением.' },
      steps: [
        { id: 'pr27a', text: { lt: 'Padaryk kažką savo rankomis arba padėk kam nors realiai.', en: 'Make something with your hands, or help someone concretely.', ru: 'Сделайте что-то руками или помогите кому-то конкретно.' } },
        { id: 'pr27b', text: { lt: 'Nefotografuok ir niekur nedėk.', en: 'Do not photograph it or post it anywhere.', ru: 'Не фотографируйте и никуда не публикуйте.' } },
      ],
    },
    {
      day: 28,
      title: { lt: 'Mastelis', en: 'Scale', ru: 'Масштаб' },
      focus: { lt: 'Problema neišnyksta, bet atgauna savo tikrą dydį.', en: 'The problem does not disappear, but it regains its actual size.', ru: 'Проблема не исчезает, но обретает настоящий размер.' },
      steps: [
        { id: 'pr28a', text: { lt: 'Nueik ten, kur matai toli: prie vandens, į mišką, ant kalvos.', en: 'Go where you can see far: water, forest, a hill.', ru: 'Пойдите туда, где видно далеко: к воде, в лес, на холм.' } },
        { id: 'pr28b', text: { lt: 'Pabūk ten bent 20 minučių nieko neveikdamas.', en: 'Stay there at least twenty minutes doing nothing.', ru: 'Побудьте там минимум двадцать минут, ничего не делая.' } },
      ],
    },
    {
      day: 29,
      title: { lt: 'Kas lieka', en: 'What stays', ru: 'Что остаётся' },
      focus: { lt: 'Trisdešimt dienų neužtenka pokyčiui, bet užtenka krypčiai.', en: 'Thirty days is not enough for change, but enough for a direction.', ru: 'Тридцати дней мало для изменения, но достаточно для направления.' },
      steps: [
        { id: 'pr29a', text: { lt: 'Išsirink tris praktikas, kurias tęsi.', en: 'Choose three practices you will continue.', ru: 'Выберите три практики, которые продолжите.' } },
        { id: 'pr29b', text: { lt: 'Nuspręsk, kada jas darysi — konkrečiu laiku, ne „kada nors".', en: 'Decide when you will do them — at a specific time, not "sometime".', ru: 'Решите, когда будете их делать — в конкретное время, а не «когда-нибудь».' } },
      ],
    },
    {
      day: 30,
      title: { lt: 'Uždarymas', en: 'Closing', ru: 'Закрытие' },
      focus: { lt: 'Klausimas, kurio jokia programėlė neatsako, lieka tavo.', en: 'The question no app answers stays yours.', ru: 'Вопрос, на который не отвечает ни одно приложение, остаётся вашим.' },
      steps: [
        { id: 'pr30a', text: { lt: 'Perskaityk visus savo dienoraščio įrašus nuo pradžios.', en: 'Reread all your journal entries from the beginning.', ru: 'Перечитайте все свои записи с самого начала.' } },
        { id: 'pr30b', text: { lt: 'Parašyk vieną sakinį apie tai, dėl ko visa tai.', en: 'Write one sentence about what all of it is for.', ru: 'Напишите одно предложение о том, ради чего всё это.' } },
      ],
    },
  ],
}
