# Videa do appky: kam co uložit

Appka videa **nehostuje nikde na internetu**, přehrává je z týhle složky. Dokud soubor neexistuje, ukáže se na jeho místě dlaždice s vysvětlením a nic se nerozbije.

## Co appka hledá

Číslo kroku je ve tvaru **modul.krok**, stejné jako appka ukazuje v pravém sloupci „V téhle lekci".

| Krok | Soubor | Kde se objeví | Stav |
|---|---|---|---|
| × | `uvitani.mp4` + `uvitani-poster.jpg` | úvodní obrazovka | ⬜ čeká na natočení |
| 3.3 | `letenky-jak-kupuju.mp4` + `letenky-jak-kupuju-poster.jpg` | Letenky, krok 3 „Tři funkce, které dělají celý rozdíl" | ⬜ čeká na natočení |
| 3.4 | `letenky-prestup.mp4` + `letenky-prestup-poster.jpg` | Letenky, krok 4 „Proč je americký přestup jiný než evropský" | ⬜ čeká na natočení |

## Jak to nahrát

1. Video ulož **přesně pod tím názvem** z tabulky, do týhle složky.
2. K němu ulož náhledový obrázek (`-poster.jpg`). To je ten obrázek, co je vidět, než člověk klikne na přehrání.
3. Hotovo. Přehrávač se objeví sám, v kódu se nic nepřepisuje.

## Na co si dát pozor

- **Formát `.mp4`**, kodek H.264. Prohlížeče ho umí všechny.
- **Velikost.** Appka má fungovat offline, takže se stahuje celá. Video na 5 minut by se mělo vejít do zhruba 50 MB. Když bude větší, půjde stáhnout pomaleji, hlavně na mobilních datech.
- **Náhled** ve stejném poměru stran jako video, jinak bude okolo bílý pruh.

## Víc médií v jednom kroku

Krok unese víc než jedno médium. Stačí z `media` udělat pole a vykreslí se pod sebou v tom pořadí, v jakém jsou zapsaná:

```js
media: [
  { kicker: "…", src: "video/neco.mp4", poster: "video/neco-poster.jpg", titulek: "…", popis: "…" },
  { kicker: "K poslechu", src: "audio/neco.mp3", titulek: "…", delka: "asi 8 minut", popis: "…" }
]
```

Takhle to má krok 3.4, kde je video i podcast. Zvuk se pozná podle přípony `.mp3`, všechno ostatní se vykreslí jako video.

---

## Statické snímky obrazovky

Když se něco nedá vysvětlit do kamery, ale ukazovat monitor se nechce, patří to do galerie snímků. Ke kroku se dopíše:

```js
gallery: [
  { src: "images/flights/nazev.jpg", alt: "popis pro čtečku", caption: "popisek pod obrázkem" }
]
```

Krok 3.3 má takhle připravené tři snímky Google Flights ve složce `images/flights/`. **Soubory tam zatím nejsou**, čekají na screenshoty:

| Soubor | Co má být na snímku |
|---|---|
| `flights-kalendar.jpg` | zobrazení celého měsíce s barevnou mřížkou cen |
| `flights-hlidani-ceny.jpg` | přepínač sledování ceny u vybraného spojení |
| `flights-vic-letist.jpg` | pole s Tampou, Orlandem a Fort Lauderdale najednou |

Stačí obyčejný screenshot s kroužkem u toho tlačítka, o kterém je řeč. Poměr stran 4:3, jinak se obrázek ořízne.

---

## Přidat video do dalšího kroku

V `index.html` se ke kroku dopíše:

```js
video: {
  kicker: "Jak to dělám já",
  src: "video/nazev.mp4",
  poster: "video/nazev-poster.jpg",
  titulek: "Jak to dělám já",
  popis: "Věta o tom, co se ve videu dozví."
}
```

A pak se sem uloží soubor. Nic dalšího.
