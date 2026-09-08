# Detox — kūnas, protas ir siela

Žinynas ir praktikos apie detoksą nuo **rūkymo, maisto, sunkiųjų metalų ir mikroplastikų** — kūno, proto ir sielos lygmenimis.

Programėlė veikia naršyklėje, be jokio backend'o. Visi tavo duomenys (įpročiai, protokolų eiga, dienoraštis) saugomi **tik tavo naršyklėje** ir niekur nesiunčiami.

## Ką ji turi

- **Žinynas** — 28 straipsniai su paieška ir filtrais pagal sritį, temą ir įrodymų lygį.
- **Protokolai** — 5 praktinės programos diena po dienos su varnelėmis.
- **Pažanga** — įpročių trackeris, serijos, 30 dienų juosta, dienoraštis.
- **Trys kalbos** — lietuvių, anglų, rusų. Visas turinys išverstas.
- **Šviesi ir tamsi tema**, duomenų eksportas ir importas į JSON.

## Įrodymų lygiai

Turinys neatmetamas pagal tai, ar jį patvirtina šiuolaikiniai tyrimai. Vietoj to kiekvienas straipsnis ir protokolas pažymimas, kokiu žinojimu remiasi:

| Žyma | Ką reiškia |
| --- | --- |
| **Tyrimais pagrįsta** | Metodas tirtas ir patvirtintas kokybiškais tyrimais |
| **Dalinai tirta** | Tyrimų yra, bet jie ankstyvi, prieštaringi arba maži |
| **Tradicinė praktika** | Praktika iš tradicijos ir patirties, be tvirto šiuolaikinio tyrimų pagrindo |

Metodai, kurie gali pakenkti (chelacija, ilgi pasninkai, žarnyno plovimai, intensyvios kvėpavimo technikos), papildomai pažymimi saugumo įspėjimu.

**Programėlė yra švietėjiška ir nėra medicininė konsultacija.**

## Paleidimas

```bash
npm install
npm run dev      # http://localhost:5173
```

Kitos komandos:

```bash
npm run build    # tipų patikra + produkcinis build į dist/
npm run preview  # peržiūrėti sukompiliuotą versiją
npm run test     # vitest testai
```

Reikia Node.js 20 ar naujesnio.

## Struktūra

```
src/
  content/
    articles/<slug>.ts   # po vieną failą straipsniui, visos 3 kalbos viduje
    protocols/<slug>.ts  # protokolai diena po dienos
    habits.ts            # įpročių trackerio sąrašas
    taxonomy.ts          # sritys, temos, įrodymų lygiai
    index.ts             # automatinis surinkimas + validacija
  i18n/locales/          # sąsajos eilutės lt / en / ru
  lib/                   # datos, serijos, paieška, localStorage
  state/                 # progreso būsena (React context)
  components/  pages/    # sąsaja
```

## Kaip pridėti straipsnį

Sukurk naują failą `src/content/articles/mano-tema.ts` ir eksportuok `article`:

```ts
import type { Article } from '../../types/content'

export const article: Article = {
  slug: 'mano-tema',
  toxin: 'food',              // basics | smoking | food | metals | microplastics
  domains: ['body'],          // body | mind | soul
  evidence: 'researched',     // researched | emerging | traditional
  readingMinutes: 5,
  title: { lt: '…', en: '…', ru: '…' },
  summary: { lt: '…', en: '…', ru: '…' },
  body: { lt: '…markdown…', en: '…', ru: '…' },
  safety: { lt: '…', en: '…', ru: '…' },   // nebūtina
  sources: [{ title: '…', url: '…' }],
}
```

Registruoti niekur nereikia — failai surenkami automatiškai. Trūkstamus vertimus kūrimo metu parodys konsolė, o `npm run test` neleis jų įrašyti į šaką.

Protokolai pridedami taip pat, į `src/content/protocols/`, eksportuojant `protocol`.

## Talpinimas

`main` šakos pakeitimai automatiškai publikuojami į GitHub Pages (`.github/workflows/deploy.yml`). Naudojamas hash routing ir santykinis kelias, todėl programėlė veikia bet kuriame pakatalogyje be papildomos konfigūracijos.
