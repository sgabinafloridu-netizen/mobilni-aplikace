# Podcasty do appky: kam co uložit

Appka přehrává nahrávky **z týhle složky**, ne z internetu. Proto fungují i v letadle a v autě bez signálu, což je u téhle appky celý smysl.

## Co appka hledá

| Soubor | Kde se objeví | Stav |
|---|---|---|
| `prestup-krok-za-krokem.mp3` | Letenky, krok 4 „Proč je americký přestup jiný než evropský" | ⬜ čeká na nahrání |

## Jak to nahrát

Ulož soubor **přesně pod tím názvem** do týhle složky. Přehrávač se objeví sám, v kódu se nic nepřepisuje.

## Na co si dát pozor

- **Formát `.mp3`.** Umí ho každý prohlížeč i telefon.
- **Bitrate 128 kbps stačí.** Je to mluvené slovo, ne hudba. Vyjde to zhruba na **1 MB za minutu**, takže osmiminutový díl má kolem 8 MB. Video stejné délky by mělo klidně 80 MB.
- **Délku drž pod 15 minut.** Poslouchá se to při něčem jiném, ne u stolu.
- **Řekni na začátku, kdy si to má člověk pustit.** „Tohle si pusť hodinu před přistáním" je součást obsahu, ne úvodní fráze.

## Proč podcast, a ne video

Nahrávka funguje tam, kde video nefunguje: **za volantem, v letadle, ve frontě**. Přesně v těch chvílích, kdy člověk průvodce potřebuje nejvíc a nemůže koukat do displeje.

K tomu se snáz vyrábí, snáz opravuje a nezatíží stahování appky.

## Přidat podcast k dalšímu kroku

V `index.html` se ke kroku dopíše:

```js
media: {
  kicker: "K poslechu",
  src: "audio/nazev.mp3",
  titulek: "Název dílu",
  delka: "asi 8 minut",
  obrazek: "images/sceny/neco.svg",
  popis: "Kdy a proč si to má člověk pustit."
}
```

Stejné pole `media` umí i video, pozná se to podle přípony souboru. Podrobnosti k videu jsou ve `video/CTI-ME.md`.
