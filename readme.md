# Vefforritun 1, 2022: Verkefni 9, JS #3

[Kynning](https://youtu.be/).

## Markmið

* Forrita á móti API.
* Forrita „SPA“ og nota History API.
* Notkun a `eslint` og `prettier`.

## Grunnur

Gefin er grunnur að verkefni:

* `package.json` með uppsetningu á `browser-sync`, `lint` og `prettier` scriptum.
* `index.html` með leiðbeiningum og tengingu við `main.js` sem einingu (_module_).
* Allir stílar í `styles.css`.
* Grunnur að forriti í `./scripts` með athugasemdir og tillögur að útfærslum eru í skjölunum.

Skjölun á föllum og breytum nota [`jsdoc`](https://jsdoc.app/).

Ekki er krafa að nota þennan grunn.

## Virkni

Tengjast skal [API hjá Open Library](https://openlibrary.org/developers/api), leyfa leit að bókum og birtingu á stökum bókum.

Nota þarf endapunkta fyrir leit, staka bók og myndir af bókum. Athugið að mismunandi gögnum er skilað fyrir endapunkta.

Í `./scripts/mock.js` er gefin mock útfærsla á virkni sem skilar alltaf sömu leitarniðurstöðum eða sömu bók. Það er hægt að nota þessa virkni til að prófa útfærslu án þess að tengjast API.

### Forsíða

Ef síða er opnuð án leitar eða vísunar í bók er birt forsíða með leitarformi og texta um að leitað sé að bókum með gögnum frá Open Library.

### Leit

Þegar leitað er skal birta upplýsingar um að verið sé að sækja gögn og birta síðan niðurstöður leitarinnar. Ef engar niðurstöður eru fundnar skal birta skilaboð um það.

Í leitarniðurstöðum skal birta a.m.k. titil bókar, nafn höfundar og árið sem bókin var fyrst útgefin. Titill skal vera hlekkur á síðu fyrir bókina.

Þegar leit er framkvæmd skal setja í URL query-string `query` með leitarstreng (t.d. `/?query=two towers`). Þegar síða er opnuð með þessum skal framkvæma leit með þeim streng.

### Stök bók

Vísa skal á bók með `id` query-string sem nýtir auðkenni hjá Open Library (t.d. `/?id=/works/OL27479W`).

Sækja skal gögn um bókina með kalli í vefþjónustu og birta upplýsingar um bókina:

* Titill
* Mynd af bók
* Fólk, ef eitthvað, sem bókin fjallar um
* Umfjöllunarefni, ef eitthvað, sem bókin fjallar um
* Staðir, ef einhverjir, sem bókin fjallar um

Ef bók fannst ekki skal birta skilaboð um það.

## History API

Þegar farið er á milli forsíðu og flokka skal ekki sækja nýja síðu, heldur skal yfirskrifa virkni `<a href>` og nota [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) til að útfæra skiptingu á milli síða. Sérstaklega þarf að passa upp á að back takkinn virki með því að hlusta á [`popstate`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate) atburðinn.

Forsíða (`/`) sýnir yfirlit. Fyrir hvern flokk skal nota querystring (hægt að sækja úr `window.location.search` og með `URLSearchParams`), t.d. `/?category=innlent`.

## eslint og prettier

Í verkefni er `eslint` og `prettier` uppsett með stillingum fyrir bæði. `eslint` stilling notar `airbnb` sem grunn en setur nokkrar sértækar reglur í `.eslintrc.js`.

Mælt er með að setja upp extension í ritli fyrir `eslint` og `prettier` til að nýta að fullu.

Hægt er að keyra `npm run prettier` til að láta `prettier` laga þær skrá sem hægt er.

Keyra skal `npm run lint` og skila án nokkurra villa.

Leyfilegt er að slökkva á ákveðnum villum _ef ástæða er til_ og skal tilltaka þá ástæðu.

## Útlit

Gefið er útlit í CSS skrá fyrir útlit í `utlit/`. Leyfilegt er að útfæra sitt eigið svo lengi sem öll virkni er til staðar.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Útbúa þarf `build` script í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

* `index.html`.
* `styles.css`.
* `scripts` möppu.

## Mat

* 20% Snyrtilegur JavaScript kóði, engar eslint villur.
* 10% Verkefni sett upp á Netlify.
* 20% History API virkni útfærð.
* 25% Leitarniðurstöður birtar.
* 25% Stök bók birt.

## Sett fyrir

Verkefni sett fyrir mánudaginn 31. október 2021.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 8. nóvember 2022.

Skilaboð skulu innihalda:

* slóð á verkefni keyrandi á Netlify
* slóð á **private** GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  * `MarzukIngi`
  * `Stimmikex`
  * `brynjar13`
  * `ofurtumi`
  * `BjarniHaskoli`
  * `Stulli888`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
