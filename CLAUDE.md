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
| **2. Nástroj** | Uživatel něco dělá, appka reaguje. Jádro appky. | `checklist`, `checklistGroups`, `passportCheck`, `estaCheck`, `toggleQuestions`, `addressField`, `monthPicker`, `chipExample`, `kviz`, `mapa` |
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

Krok (`step`) má volitelně: `icon`, `kicker`, `title`, `media{}`, `mapa`, `kviz`, `hintProTyp{}`, `ilustrace{}`, `lead[]`, `companion{}`, `checklist[]`, `checklistGroups[]`, `passportCheck`, `bookingCheck`, `chipExample`, `estaCheck`, `toggleQuestions[]`, `addressField`, `monthPicker`, `stayPicker`, `gallery`, `quote`, `link{}`, `tip{}`, `pochvala`, `why{}`, `trap{}`, `note{}`.

**Prvky, které počítají z toho, co uživatel zadal v úvodu** (tohle je jádro UX principu, ne ozdoba):
- `passportCheck` porovná platnost pasů s datem návratu
- `bookingCheck` z data odletu určí, jestli je zrovna nákupní okno na letenku (bere v úvahu hlavní sezónu)
- `monthPicker` dá verdikt k termínu a destinaci, které uživatel zadal, a pod ním nechá rozkliknout přehled všech 12 měsíců pro všechny 3 destinace
- `kviz` zjistí typ cestovatele, výsledek se uloží do `nezOdletisTypCestovatele`
- `hintProTyp` ukáže osobní poznámku psanou pro ten typ, který vyšel z kvízu
- `stayPicker` předvybere destinaci, kterou uživatel zadal, ostatní jdou přepnout
- `mapa` předvybere zadanou destinaci a rovnou k ní ukáže bublinu

### Schéma vzdáleností (`mapa`)
Není to obrys pevniny a nikdy jím být nemá. Je to **schéma**: tři body rozmístěné podle skutečných vzdáleností vzdušnou čarou, spojnice s kilometry a pod nimi linka Praha až Lisabon ve **stejném měřítku**. Úkolem není zeměpis, ale aby čtenář vzdálenost viděl místo aby o ní četl.

- `MERITKO` (jednotek viewBoxu na kilometr) drží celou geometrii. **Když se změní, musí se přepočítat souřadnice v `MAPA_OBLASTI` i délka evropské linky.**
- Souřadnice jsou napočítané tak, aby poměry stran odpovídaly `MAPA_SPOJNICE` s odchylkou do 1 procenta.
- viewBox je držený úzký (460 jednotek) schválně: appka se čte na mobilu, kde graf dostane jen asi 260 pixelů. V širokém viewBoxu vyjdou popisky na osm pixelů a nedají se přečíst. Ze stejného důvodu má `.mapa svg` strop `max-width: 400px`, aby na desktopu popisky naopak nepřerostly běžný text.

Modul s `dashboard: true` si nese vlastní nadpis v `dashboardTitle`.

### ⚠️ Pořadí vykreslení je pevné
`renderStepsHtml()` vykresluje prvky ve **fixním pořadí**, ne v pořadí, v jakém jsou zapsané v datech:

```
(lead nebo bloky) → media → mapa → kviz → hintProTyp → ilustrace → companion → checklist
→ checklistGroups → passportCheck → bookingCheck → chipExample → estaCheck
→ toggleQuestions → addressField → monthPicker → stayPicker → gallery
→ quote → link → tip → why → trap → note
```

Když má něco vyjít jinde, musí se změnit `renderStepsHtml()`, ne pořadí klíčů v datech.

**Výjimka: `ilustrace`.** Když krok má `lead`, obrázek se nevykreslí za odstavci, ale **dovnitř** nich, a text ho obtéká. Strany se střídají podle pořadí kroku, dá se přebít polem `strana: "vlevo"` nebo `"vpravo"`. Bez `lead` (krok nemá co obtékat) spadne zpět na variantu na střed. Pod 700 px šířky se obtékání ruší, jinak by na řádek zbylo pár slov.

### Kvíz se vzhledem drží kalkulačky
Kvíz „jaký jsi cestovatel" má **záměrně stejný vzhled jako kalkulačka** na `kalkulacka-florida.vercel.app`, aby na sebe produkty navazovaly. Hodnoty jsou z ní odečtené, ne odhadnuté:

| Prvek | Hodnota |
|---|---|
| karta | bílá, rámeček 2 px `--tyrkys-light`, rádius 22 px, stín `0 14px 34px rgba(20,35,58,.08)` |
| postup | popisek 11 px/700 uppercase + segmenty 6 px, hotové v přechodu `tyrkys → ruzova` |
| ilustrace otázky | 84 px, na střed |
| nadpis | 21 px/700 na střed, pod ním čárka 54×4 px ve stejném přechodu |
| volba | rámeček 2 px `--tyrkys-light`, rádius 16 px, `padding: 14px 16px`, 15 px/600, pozadí `--page` |
| primární tlačítko | přechod `#FF6FA5 → #FF9E6B`, rádius 50 px, stín `0 4px 20px rgba(255,111,165,.4)` |

Pod 520 px se ilustrace i nadpis zmenšují a karta si bere míň odsazení. **Když se kalkulačka předělá, musí se předělat i tohle**, jinak se produkty rozejdou.

### `bloky`: text prokládaný rytmem, ne jedna esej
Krok může mít `bloky` místo `lead`. Je to pole prvků, které se vykreslí v pořadí, v jakém jsou zapsané (jediná výjimka z pravidla pevného pořadí, protože je to čistě vnitřní rytmus jednoho textového bloku, ne governance nad tím, které komponenty se v kroku objeví):

- `{ text: [...] }` odstavce, stejně jako dřív `lead`
- `{ stat: "45 °C", popis: "..." }` vytažené číslo jako vizuální oddělovač, gradientové písmo
- `{ oddelovac: true, ikona: "💧" }` čistě grafická pauza mezi tématy, bez textu
- `{ voda: true }` kalkulačka vody (`initVoda()`), zatím jen v kroku o Grand Canyonu

Použít vždy, když by `lead` jinak byl jeden dlouhý odstavec nebo víc než 3 odstavce v řadě bez přerušení. Krátký krok s 1 až 2 odstavci `bloky` nepotřebuje, tam zůstává `lead`.

### Kdy ilustraci nedávat
Obrázek nesmí opakovat to, co hned pod ním appka ukáže doopravdy. Kreslený kalendář nad `bookingCheck`, který počítá dny do odletu, čtenáře jen zdrží. **Ilustrace patří k textu, ne k nástroji.**

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

Průvodce „Než odletíš" má **7 modulů** a jsou rozdělené do dvou placených balíčků:

| # | id | Název | Balíček | Stav |
|---|---|---|---|---|
| 1 | `destinace` | Kdy a kam | `zaklad` | ✅ hotový, 5 kroků |
| 2 | `doklady` | Doklady a formálnosti | `zaklad` | ✅ hotový, 6 kroků, dashboard |
| 3 | `letenky` | Letenky | `zaklad` | ✅ hotový, 5 kroků, dashboard |
| 4 | `ubytovani` | Ubytování | `zaklad` | ✅ hotový, 5 kroků, dashboard |
| 5 | `finance` | Finance a placení | `rozsireni` | ✅ hotový, 6 kroků, dashboard |
| 6 | `checklisty` | Checklisty | `rozsireni` | ✅ hotový, 5 kroků, dashboard |
| 7 | `krize` | Krizové situace před odletem | `rozsireni` | ✅ hotový, 5 kroků, dashboard |

**Průvodce „Než odletíš" je obsahově hotový.** 7 modulů, 39 kroků, zhruba 7 650 slov.
Obě cenové úrovně se dají prodat, protože ani jedna se neotevře prázdná.

⚠️ **Modul 7 se píše jinak než ostatní.** Bez vtipů a bez paní Cokdyž, protože ho člověk
čte ve stresu. Pravidlo je z bible, sekce o krizových materiálech. Modul to říká rovnou
v úvodu, ať čtenáře nepřekvapí změna tónu.

Moduly 1 až 4 = příprava před odletem. Moduly 5 až 7 = to, co se hodí těsně před odletem a v den letu.

⚠️ **Moduly se klíčují podle `id`, ne podle pořadí.** Proto jde modul přidat, rozdělit nebo přesunout bez ztráty dat. Nikdy nepřejmenovávat existující `id`.

⚠️ **„Doprava na místě" se odsud přesunula do průvodce „Až přistaneš"** (14. 8. 2026), kam patří obsahem. Byla jen kostra, nic se neztratilo. Zakomentovaný záznam i ikona zůstávají v `index.html`, kdyby se měla vrátit.

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

### Metoda: storytelling místo reklamního jazyka (Goliášová)

Jádro v jedné větě: **přestat mluvit reklamní řečí a začít vyprávět příběh v 1. osobě o konkrétním člověku a konkrétním momentu, aby se v tom čtenář poznal.**

**Zakázaný reklamní jazyk** (na tohle lidé reagují automatickým odmítnutím jako na telefonního prodejce): „nabízím", „pokud máte zájem", „ozvěte se mi", „jsme firma, která", výčty služeb, tón shora dolů, oslovení cílové skupiny místo jednoho člověka.

**Techniky, které se v appce reálně používají:**

| Technika | Jak vypadá v praxi |
|---|---|
| **Personifikace** | Nudné nebo těžké téma dostane postavu. Strach = paní Cokdyž. |
| **Curiosity gap** | Začni scénou, kde čtenář neví, kam míříš, pointu odhal až po pár odstavcích. |
| **Konkrétní mikro-detail** | Ne „krásná pláž", ale „mušle, co ráno vyplavou na Sanibelu". Detail musí být reálný. |
| **Sebeironie a zranitelnost** | „Sama jsem tomu věřila tak dlouho, až jsem si to dohledala." Gábi nestojí nad čtenářem. |
| **Přímé oslovení a otázka** | Mluv na jednoho člověka, ptej se tak, aby si odpověděl v hlavě. |
| **Pojmenuj nepřítele** | Dej blbému zvyku jméno, ať se od něj dá odrazit („mýtus, co si pěstuju jako pokojovou rostlinu"). |
| **Tučně jen klíčové fráze** | Vzniká tím linka, kterou čtenář přečte i při rychlém projetí. |
| **Po příběhu praktický postup** | Emoce, a hned za tím konkrétní kroky. V appce to dělá dvojice lead a checklist. |

**Kostra delšího textu:** háček (scéna, ne pozdrav) → rozvinutí → aha moment → most k tématu → jedno CTA → osobní dovětek.

⚠️ **Co si od Goliášové nebrat:** píše hovorově („Hranatej Béda"), tahle značka ne. Ber vypravěčství a odvahu, ne pražské zkratky.

### Tón
- **Paní Cokdyž** = strach jako postava, noční směna v 00:47. Nikdy nevyhraje, ale ani nezemře.
- Komu se píše: **Lenka**, konkrétní člověk se svými strachy (peníze, angličtina, imigrační kontrola, děti), ne „cílovka".
- ⚠️ **Checklisty a krizové materiály jedou střídmě.** Člověk ve stresu nepotřebuje vtipy, potřebuje jistotu. Vtip maximálně v části položek, ať jde seznam pořád rychle projet očima.

### Podklady (číst před psaním)
- `MUJ BRAND/pani-cokdyz-BIBLE.md` — hlas a postava, nejdůležitější
- `MUJ BRAND/brand-dna-sgabinafloridu (2).md` — mise, tón
- `Copywriting GOLIASova.md` — metoda celá, leží v kořeni `MUJ CLAUDE`, ne v `MUJ BRAND`
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

### Celá prodejní kostra (potvrzeno 14. 8. 2026)

Appka je jeden článek delšího řetězce. Tohle je celý žebřík, ať se ví, co na co navazuje:

| Cena | Produkt | Co to je |
|---|---|---|
| zdarma | **4 taháky** | ESTA, před odletem, příruční zavazadlo, Florida kalkulačka. Každý sbírá e-mail přes ManyChat. |
| 297 Kč | **Přes imigrační v klidu** | vstupní produkt, funguje i samostatně bez průvodce |
| 690 Kč | **Než odletíš, moduly 1 až 4** | pro ty, kdo teď potřebují jen přípravu před odletem |
| 1 490 Kč | **Než odletíš, celý (1 až 7)** | plný průvodce včetně modulů 5 až 7 na dobu těsně před odletem a v den letu. Bonus za celek se teprve vymýšlí. |
| 1 490 Kč | **Až přistaneš** | druhý samostatný průvodce: život v USA po příletu, doprava, nakupování, restaurace |
| 2 790 Kč | **oba průvodce** | Než odletíš + Až přistaneš, s bonusem za celek |
| 19 900 až 30 000 Kč | **VIP itinerář na míru** | osobní plánování Florida tripu, konzultace, podpora během cesty |

**Co z toho plyne pro tuhle appku:** je to průvodce „Než odletíš" a prodává se ve dvou úrovních, 690 a 1 490 Kč. Modul „Doprava na místě" sem nepatří, patří do „Až přistaneš".

📄 **Kostra druhého průvodce „Až přistaneš" je hotová** a leží v `usa-bez-cestovky-cast2/KOSTRA.md`: 7 modulů od imigrační kontroly po krizové situace, plus vlastní obsah Trezoru. Než se do něj pustíš, přečti si ji, hlavně poznámku o překryvu s Letenkami.

### Co se ještě plánuje
- **Videa k dokoupení** jako samostatný upsell
- **Checklisty ke stažení** (tisk nebo soubor)
- **Prokliky na další produkty** ze žebříku výš

### Stav: odemykání je postavené

| Balíček | Moduly | Cena | Odemčeno |
|---|---|---|---|
| `zaklad` | 1 až 4 (Kdy a kam, Doklady, Letenky, Ubytování) | 690 Kč | rovnou po koupi |
| `rozsireni` | 5 až 7 (Finance, Checklisty, Krize) | 1 490 Kč za celek | až po zadání kódu |

**Kde se co mění** (vše pohromadě nad polem `MODULES`):
- `BALICKY` — název, rozsah, `cena` (ukazuje se v pozvánce) a `odkaz` na prodejní stránku. Dokud je `odkaz` prázdný, tlačítko na koupi se nezobrazí.
- `VYCHOZI_BALICKY` — co má kupující odemčené hned
- `KODY` — dvojice odemykací kód → balíček, porovnává se bez ohledu na velikost písmen a mezery. Teď je tam zástupný `CELY`, před prodejem vyměnit.

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
