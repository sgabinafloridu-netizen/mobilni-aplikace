# Videa do appky: kam co uložit

Appka videa **nehostuje nikde na internetu**, přehrává je z týhle složky. Dokud soubor neexistuje, ukáže se na jeho místě dlaždice s vysvětlením a nic se nerozbije.

## Co appka hledá

Číslo kroku je ve tvaru **modul.krok**, stejné jako appka ukazuje v pravém sloupci „V téhle lekci".

| Krok | Soubor | Kde se objeví | Stav |
|---|---|---|---|
| × | `uvitani.mp4` + `uvitani-poster.jpg` | úvodní obrazovka | ⬜ čeká na natočení |
| 3.3 | `letenky-jak-kupuju.mp4` + `letenky-jak-kupuju-poster.jpg` | Letenky, krok 3 „Tři funkce, které dělají celý rozdíl" | ⬜ čeká na natočení |

## Jak to nahrát

1. Video ulož **přesně pod tím názvem** z tabulky, do týhle složky.
2. K němu ulož náhledový obrázek (`-poster.jpg`). To je ten obrázek, co je vidět, než člověk klikne na přehrání.
3. Hotovo. Přehrávač se objeví sám, v kódu se nic nepřepisuje.

## Na co si dát pozor

- **Formát `.mp4`**, kodek H.264. Prohlížeče ho umí všechny.
- **Velikost.** Appka má fungovat offline, takže se stahuje celá. Video na 5 minut by se mělo vejít do zhruba 50 MB. Když bude větší, půjde stáhnout pomaleji, hlavně na mobilních datech.
- **Náhled** ve stejném poměru stran jako video, jinak bude okolo bílý pruh.

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
