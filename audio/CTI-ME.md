# Podcasty do appky: kam co uložit

Appka přehrává nahrávky **z týhle složky**, ne z internetu. Proto fungují i v letadle a v autě bez signálu, což je u téhle appky celý smysl.

## Co appka hledá

Číslo kroku je ve tvaru **modul.krok** (stejné, jaké appka ukazuje v pravém sloupci „V téhle lekci" a ve štítku nahoře v kroku), takže 1.3 = modul 1, krok 3.

| Krok | Soubor | Kde se objeví | Stav |
|---|---|---|---|
| 1.3 | `pani-cokdyz-v-noci.mp3` | Kdy a kam, krok 3 „Hurikánová sezóna: kde, kdy a jak moc to řešit" | ⬜ čeká na nahrání |
| 3.4 | `prestup-krok-za-krokem.mp3` | Letenky, krok 4 „Proč je americký přestup jiný než evropský" | ⬜ čeká na nahrání |
| 6.1 | `co-musi-byt-v-prirucnim.mp3` | Checklisty, krok 1 „Co musí být v příručním, ať se stane cokoliv" | ⬜ čeká na nahrání |
| 7.5 | `kdyz-se-neco-pokazi.mp3` | Krizové situace, krok 5 „Co mít po ruce, aby se to řešilo snadno" | ⬜ čeká na nahrání |

**Proč zrovna tyhle 4 místa.** Podcast má smysl tam, kde jsou při poslechu **ruce nebo oči zaneprázdněné něčím jiným**, ne kdekoliv. Vybírala jsem podle toho:
- **1.3** se poslouchá večer, když člověk leží v posteli a řeší si to v hlavě, ne na displeji.
- **3.4** se poslouchá v letadle nebo cestou na letiště, kde stejně nejde nic jiného dělat.
- **6.1** se poslouchá při balení, kdy jsou ruce plné oblečení.
- **7.5** se poslouchá v autě nebo v MHD týden před odletem, jako klidná příprava předem.

Ostatní moduly (Doklady, Ubytování, Finance) žádný takový moment nemají, tam by podcast byl navíc jen proto, aby tam byl. Když najdeš lepší místo nebo chceš přidat další, řekni, kam a na co, doplní se to sem i do dat.

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
