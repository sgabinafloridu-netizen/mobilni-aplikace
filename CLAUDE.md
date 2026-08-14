# Do USA bez cestovky — Část 1: Než odletíš

Kurzová PWA appka pro Čechy, kteří letí poprvé sami do USA. Provede je přípravou krok za krokem, od výběru termínu po doklady.

**Autorka:** Gábi (s.gábi.na.Floridu), žije na Floridě, provází klienty na místě.
**Repozitář:** `github.com/sgabinafloridu-netizen/mobilni-aplikace` (soukromý)

---

## 1. Tvrdá omezení, která se nesmí porušit

Tohle není doporučení, tohle je architektura. Každý návrh, který některé z těchto pravidel poruší, je automaticky špatný návrh.

- **Jeden soubor.** Celá appka je `index.html`: HTML, CSS i JS pohromadě. Žádný build, žádný bundler, žádné npm.
- **Žádný backend.** Nikdy neexistuje server, API, databáze ani přihlašování. Vše běží v prohlížeči.
- **100 % offline.** Appka musí fungovat v letadle bez signálu. Proto: žádné externí fonty, CDN, analytiku, mapy ani volání do internetu za běhu.
- **Data jen v `localStorage`.** Nic se nikam neposílá. Uživatel se neregistruje a nezadává heslo.
- **Vanilla JS v IIFE.** Žádný React, žádný framework, žádné knihovny.

**Z toho plyne, co appka nikdy neumí** (a co je zbytečné navrhovat): OCR skenování pasu, AI simulaci pohovoru, živé kurzy měn, push notifikace, sdílení mezi zařízeními, cloudovou zálohu.

---

## 2. UX princip: appka je nástroj, ne článek

Tohle je nejdůležitější věta celého dokumentu.

> **Appka to za uživatele zkontroluje. Uživatel to nečte, uživatel to vyplňuje.**

Gábin vlastní popis role appky: *„kámoška, co pomáhá vyplnit"*.

Když se objeví nová informace, ptej se v tomhle pořadí:
1. **Může to appka spočítat nebo zkontrolovat sama?** → udělej z toho interaktivní prvek (checklist, kontrolu dat, otázku ano/ne)
2. **Musí to uživatel odškrtnout?** → checklist
3. **Teprve pokud ani jedno, je to text.** A i pak co nejkratší.

Špatně: tři odstavce o tom, jak dlouho platí pas.
Správně: pole na datum konce platnosti pasu + datum návratu, a appka řekne „Martin: pas vyprší 20. října, ale návrat je až 25. října, potřebuje nový pas."

---

## 3. Tři vrstvy modulu

Každý krok v modulu má tři vrstvy a v tomhle pořadí se i vykresluje:

| Vrstva | Co to je | Prvky |
|---|---|---|
| **1. Příběh** | Gábiným hlasem, proč to řešíme. Krátké. | `lead`, `hook` (u modulu), `companion` (ilustrace + věta) |
| **2. Nástroj** | Uživatel něco dělá, appka reaguje. Jádro appky. | `checklist`, `checklistGroups`, `passportCheck`, `estaCheck`, `toggleQuestions`, `addressField`, `monthPicker`, `chipExample` |
| **3. Hloubka** | Schované, rozklikne si jen ten, kdo chce víc. | `why`, `trap`, `note` (rozbalovací `<details>`) |

**Vrstva 3 má tři úrovně naléhavosti a je zakázané je zaměňovat:**

- `why` — „Proč je to důležité" (mint, 💡): kontext a vysvětlení
- `trap` — „Pozor na tohle" (červená, ⚠️): **jen pro věci, kde přehlédnutí znamená reálný problém** (zmeškaný let, zamítnutý vstup, účet v tisících dolarů). Červená se nesmí opotřebovat.
- `note` — „Ještě jedna věc" (zlatá, 📝): užitečné, ale nekritické

---

## 4. Struktura kódu

### Data
Vše je v poli `MODULES` v `index.html`. Modul má:
```
{ id, name, shortName, emoji, time, lessons, accent, accentSoft, desc,
  prep, hook[], praise{}, dashboard: bool, steps[] }
```

Krok (`step`) má volitelně: `icon`, `kicker`, `title`, `lead[]`, `companion{}`, `checklist[]`, `checklistGroups[]`, `passportCheck`, `chipExample`, `estaCheck`, `toggleQuestions[]`, `addressField`, `monthPicker`, `gallery`, `quote`, `link{}`, `tip{}`, `why{}`, `trap{}`, `note{}`.

### ⚠️ Pořadí vykreslení je pevné
`renderStepsHtml()` vykresluje prvky ve **fixním pořadí**, ne v pořadí, v jakém jsou zapsané v datech:

```
lead → companion → checklist → checklistGroups → passportCheck → chipExample
→ estaCheck → toggleQuestions → addressField → monthPicker → gallery
→ quote → link → tip → why → trap → note
```

Když má něco vyjít jinde, musí se změnit `renderStepsHtml()`, ne pořadí klíčů v datech.

### Klíče v localStorage
```
nezOdletisSetup      termín, datum návratu, destinace
nezOdletisProgress   hotové moduly
nezOdletisTrezor     Trezor (adresa, esta, letenky, rezervace)
nezOdletisChecklist  odškrtnuté položky, klíč: modulId-kKrok-index
nezOdletisCestujici  cestující [{name, expiry, esta}]
nezOdletisOdpovedi   odpovědi na ano/ne otázky, klíč = id otázky
```

Po **každé** změně stavu volej `refreshDashboard()`, jinak se Připravenost nahoře rozejde se skutečností.

---

## 5. Moduly

Část 1 „Než odletíš" má **7 modulů**:

| # | id | Název | Stav |
|---|---|---|---|
| 1 | `destinace` | Kdy a kam | ✅ hotový, 5 kroků |
| 2 | `doklady` | Doklady a formálnosti | ✅ hotový, 6 kroků, má dashboard |
| 3 | `letenky` | Letenky a ubytování | ⬜ jen kostra |
| 4 | `doprava` | Doprava na místě | ⬜ jen kostra |
| 5 | `finance` | Finance a placení | ⬜ jen kostra |
| 6 | `checklisty` | Checklisty | ⬜ jen kostra |
| 7 | `krize` | Krizové situace před odletem | ⬜ jen kostra |

**Část 2** naváže dalšími moduly (5 až 7, zatím neurčeno). Dohromady tedy cílově kolem 14 modulů. Seznam modulů Části 2 zatím neexistuje, doplnit až bude.

---

## 6. Trezor

Offline schránka na věci, které uživatel potřebuje na letišti bez signálu. Ukládá se přímo při psaní (debounce 400 ms) do `nezOdletisTrezor`.

Pole (`TREZOR_FIELDS`): `adresa`, `esta`, `letenky`, `rezervace`

Adresa první noci se plní i z modulu 2 (prvek `addressField`), obojí míří na stejné místo. Trezor je ten důvod, proč musí appka fungovat offline.

---

## 7. Offline režim

- `manifest.json` — PWA manifest, standalone, portrait, theme `#1AC0CE`
- `sw.js` — service worker, cache `nez-odletis-v1`, strategie cache-first s fallbackem na `index.html`

⚠️ **Když přibude nový soubor** (obrázek, ikona), musí se přidat do `CACHE_FILES` v `sw.js` a povýšit `CACHE_NAME`, jinak se offline nenačte.

---

## 8. Jak psát texty

Gábi je autorka a texty musí znít jejím hlasem. **Role při psaní: špičkový copywriter a UX writer se specializací na cestování po USA** — platí i pro krátké popisky tlačítek a checklistů, nejen pro dlouhé texty.

### Pravidla, která se porušují nejčastěji
- **Bezrodě.** Appku čtou i muži. Žádné „spočítala jsi", „nemusel/a". Řešení: přítomný čas nebo přeformulovat. Výjimka: Gábi mluví sama o sobě v 1. osobě, tam ženský rod zůstává („viděla jsem").
- **Nikdy pomlčky.** Místo nich čárka, dvojtečka nebo tečka.
- **Čísla číslicemi** („7 dní", ne „sedm dní"). Výjimka: idiomatické „jeden/jedna" a zlomky („půl").
- **České uvozovky „ "**, ne rovné. Rovné uvozovky uvnitř JS řetězce rozbijí skript.
- **Spisovná čeština** s plnými koncovkami. Goliášová píše hovorově, tahle značka ne.
- **Nikdy slovo „přepážka"** → „imigrační kontrola".
- **Zvýrazňuj `<strong>`**: jedna klíčová fráze na odstavec nebo položku (číslo, lhůta, výjimka, důsledek). Ne celá věta.

### Tón
- Vypravěčství podle Goliášové: scéna místo poučování, konkrétní mikro-detail místo obecného slova, sebeironie („sama jsem tomu věřila"), nikdy mentorský tón shora.
- **Paní Cokdyž** = strach jako postava, noční směna v 00:47. Nikdy nevyhraje, ale ani nezemře.
- ⚠️ **Checklisty a krizové materiály jedou střídmě.** Člověk ve stresu nepotřebuje vtipy, potřebuje jistotu. Vtip maximálně v části položek, ať jde seznam pořád rychle projet očima.

### Podklady (číst před psaním)
- `MUJ BRAND/pani-cokdyz-BIBLE.md` — hlas a postava, nejdůležitější
- `MUJ BRAND/brand-dna-sgabinafloridu (2).md` — mise, tón
- `Copywriting GOLIASova.md` — metoda, teorie
- Ilustrace: `Marketingové podklady/obrazky/` (paní Cokdyž varianty, kreslená Gábi)

### Fakta
Immigrační a cestovní údaje **vždy ověřit webem**, ne psát z hlavy. Během vývoje se takhle chytlo několik chyb (cena ESTA, kde se vyřizuje mezinárodní řidičák, lhůty na vydání pasu). Fotky ve funnelu i appce: **jen reálné Gábiny floridské fotky**, nikdy stock.

---

## 9. Pracovní postup

- **Nejdřív plán, pak kód.** Než začneš psát cokoli většího, řekni, co uděláš, a nech to schválit.
- **Jedna funkce = jedna relace.** Nemíchat víc velkých věcí dohromady.
- **Commituj po každé hotové funkci**, ať se dá vrátit o krok zpátky. Commit message česky, popisuje, co funkce dělá.
- **Ověřuj v prohlížeči.** Po změně otevřít náhled a zkontrolovat, že to opravdu funguje, ne jen že se to uložilo.

---

## 10. Kam to směřuje (stavět s tímhle na paměti)

Appka není jednorázový kurz, ale **prodejní produkt s balíčky**. I když se to zatím nestaví, každé nové rozhodnutí v kódu musí s tímhle počítat.

### Co se plánuje
- **Moduly se odemykají podle toho, co si kdo koupí.** Např. moduly 1 až 4 za jednu cenu, další 3 za druhou.
- **Videa k dokoupení** jako samostatný upsell.
- **Část 2** appky, která na Část 1 naváže dalšími moduly.
- **Checklisty ke stažení** (tisk nebo soubor).
- **Prokliky na Gábiny další produkty**, prodejní videa a moduly.

### Stav: odemykání je postavené

Balíčky Části 1:

| Balíček | Moduly | Odemčeno |
|---|---|---|
| `zaklad` | 1 až 4 (Kdy a kam, Doklady, Letenky, Doprava) | rovnou po koupi appky |
| `rozsireni` | 5 až 7 (Finance, Checklisty, Krize) | až po zadání kódu |

**Kde se co mění** (vše pohromadě nad polem `MODULES`):
- `BALICKY` — název, rozsah a `odkaz` na prodejní stránku. Dokud je `odkaz` prázdný, tlačítko na koupi se nezobrazí.
- `VYCHOZI_BALICKY` — co má kupující odemčené hned
- `KODY` — dvojice odemykací kód → balíček, kód se porovnává bez ohledu na velikost písmen a mezery

Stav odemčení: `localStorage`, klíč `nezOdletisOdemceno` (pole id balíčků).

**Nový modul** = přidat mu pole `balicek`, nic víc. **Nový balíček** = řádek v `BALICKY` a řádek v `KODY`.

### Co z toho plyne pro architekturu

**1. Zámek odděl od obsahu.** ✅ Hotovo. O přístupu rozhoduje **jediná funkce** `isUnlocked(mod)`. Nikde jinde se stav nákupu neřeší, ani ve vykreslování menu, dlaždic či časové osy.

**2. Odkazy na videa a produkty patří do dat, ne do textu.** Nikdy nepsat URL natvrdo doprostřed odstavce. Vždy `link{}` nebo samostatné pole, ať jde odkaz vyměnit nebo zamknout na jednom místě.

**3. Zamčený modul se chová jako pozvánka, ne jako zeď.** ✅ Hotovo, funkce `renderUnlockHtml()`. Zamčený modul zůstává všude klikatelný, klik vede na pozvánku: co je uvnitř, pole na kód, případně odkaz na koupi. Zeď neprodává. Prodej přes to, co uživatel právě zjistil, že mu chybí (pravidlo z bible Goliášové).

**4. Část 2 = samostatný soubor ve stejné složce.** Sdílí `localStorage` (stejný origin), takže Trezor a odškrtané položky přetečou z Části 1 automaticky. Klíče proto **nikdy nepřejmenovávat**.

**5. Stahování checklistů řeš přes tisk.** `window.print()` plus tiskové CSS. Funguje offline, nevyžaduje knihovnu ani server a uživatel si zvolí „Uložit jako PDF". Generování PDF v JS by znamenalo knihovnu, což porušuje pravidlo o jednom souboru.

### ⚠️ Odemykání nejde v této architektuře udělat neprolomitelně

Bez serveru je veškerý obsah i logika zámku v souboru, který má uživatel u sebe. Kdo umí otevřít vývojářskou konzoli, odemkne si vše. **Tohle není chyba k opravení, to je důsledek pravidla „žádný backend".**

Reálné řešení podle toho, co se chrání:
- **Texty a checklisty v appce** → měkký zámek (odemykací kód). Pro běžného kupujícího naprosto stačí, kopírování je okrajové riziko.
- **Videa (skutečná hodnota upsellu)** → hostovat mimo appku (Vimeo s omezením, členská sekce) a zamknout **tam**. Appka drží jen odkaz. Tohle je jediné místo, kde zámek opravdu drží.
- **Kdyby bylo potřeba tvrdé oddělení textů** → generovat samostatný soubor pro každý balíček, kde nekoupený obsah fyzicky není. Znamená to ale zavést build krok a řešit upgrade balíčku.

### Známé úskalí při náhledu
Soubory mimo sledovanou složku se v náhledu zobrazují jako statický snímek a `location.reload()` často servíruje **starou verzi**. Když se změna neprojeví: udělat kopii pod novým názvem (`debug-nazev1.html`), otevřít v nové záložce, ověřit přes `javascript_exec` (spolehlivější než screenshot), a **debug soubory po sobě smazat**.
