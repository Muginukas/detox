import type { Habit } from '../types/content'

export const HABITS: Habit[] = [
  {
    id: 'water',
    icon: '💧',
    domains: ['body'],
    title: { lt: 'Vanduo', en: 'Water', ru: 'Вода' },
    hint: {
      lt: '~30 ml kilogramui svorio. Inkstai be vandens nieko neišplauna.',
      en: '~30 ml per kilogram of body weight. Kidneys flush nothing without water.',
      ru: '~30 мл на килограмм веса. Без воды почки ничего не выводят.',
    },
  },
  {
    id: 'sleep',
    icon: '🌙',
    domains: ['body', 'mind'],
    title: { lt: 'Miegas 7–8 val.', en: 'Sleep 7–8 h', ru: 'Сон 7–8 ч' },
    hint: {
      lt: 'Miegant smegenys išplauna dienos metu susikaupusias atliekas.',
      en: 'During sleep the brain flushes out the waste built up during the day.',
      ru: 'Во сне мозг вымывает отходы, накопленные за день.',
    },
  },
  {
    id: 'move',
    icon: '🚶',
    domains: ['body'],
    title: { lt: 'Judėjimas', en: 'Movement', ru: 'Движение' },
    hint: {
      lt: 'Bent 30 min. Limfa juda tik tada, kai juda raumenys.',
      en: 'At least 30 min. Lymph moves only when muscles move.',
      ru: 'Хотя бы 30 мин. Лимфа движется только когда движутся мышцы.',
    },
  },
  {
    id: 'fiber',
    icon: '🥬',
    domains: ['body'],
    title: { lt: 'Skaidulos', en: 'Fibre', ru: 'Клетчатка' },
    hint: {
      lt: 'Daržovės, ankštiniai, sėklos. Skaidulos suriša ir išveda tulžies atliekas.',
      en: 'Vegetables, legumes, seeds. Fibre binds bile waste and carries it out.',
      ru: 'Овощи, бобовые, семена. Клетчатка связывает и выводит отходы жёлчи.',
    },
  },
  {
    id: 'breath',
    icon: '🫁',
    domains: ['body', 'mind'],
    title: { lt: 'Kvėpavimo praktika', en: 'Breathing practice', ru: 'Дыхательная практика' },
    hint: {
      lt: '5 minutės lėto kvėpavimo nuramina nervų sistemą greičiau nei bet kas kitas.',
      en: 'Five minutes of slow breathing calms the nervous system faster than anything else.',
      ru: 'Пять минут медленного дыхания успокаивают нервную систему быстрее всего.',
    },
  },
  {
    id: 'nosugar',
    icon: '🚫',
    domains: ['body'],
    title: { lt: 'Be pridėtinio cukraus', en: 'No added sugar', ru: 'Без добавленного сахара' },
    hint: {
      lt: 'Viena diena be saldiklių — poilsis kepenims ir insulinui.',
      en: 'One day without sweeteners is a rest for the liver and for insulin.',
      ru: 'Один день без подсластителей — отдых для печени и инсулина.',
    },
  },
  {
    id: 'screen',
    icon: '📵',
    domains: ['mind'],
    title: { lt: 'Be ekrano prieš miegą', en: 'No screen before bed', ru: 'Без экрана перед сном' },
    hint: {
      lt: 'Bent valanda be telefono. Tai informacinis detoksas ir geresnis miegas.',
      en: 'At least an hour without the phone. Information detox and better sleep in one.',
      ru: 'Хотя бы час без телефона. Информационный детокс и лучший сон сразу.',
    },
  },
  {
    id: 'nature',
    icon: '🌲',
    domains: ['mind', 'soul'],
    title: { lt: 'Laikas gamtoje', en: 'Time in nature', ru: 'Время на природе' },
    hint: {
      lt: '20 minučių lauke matomai mažina kortizolį.',
      en: 'Twenty minutes outdoors measurably lowers cortisol.',
      ru: 'Двадцать минут на улице заметно снижают кортизол.',
    },
  },
  {
    id: 'stillness',
    icon: '🧘',
    domains: ['mind', 'soul'],
    title: { lt: 'Tyla arba meditacija', en: 'Stillness or meditation', ru: 'Тишина или медитация' },
    hint: {
      lt: '10 minučių be jokio įvesties srauto — protui tai tas pats, kas vanduo inkstams.',
      en: 'Ten minutes with no incoming input — for the mind that is what water is for the kidneys.',
      ru: 'Десять минут без входящего потока — для разума это как вода для почек.',
    },
  },
  {
    id: 'journal',
    icon: '📓',
    domains: ['mind', 'soul'],
    title: { lt: 'Dienoraštis', en: 'Journalling', ru: 'Дневник' },
    hint: {
      lt: 'Trys sakiniai vakare. Neišrašytos mintys sukasi ratu.',
      en: 'Three sentences in the evening. Unwritten thoughts keep circling.',
      ru: 'Три предложения вечером. Незаписанные мысли ходят по кругу.',
    },
  },
]
