# Plán spuštění „Než odletíš" (18. 8. – 15. 10. 2026)

Cíl: doladit a spustit prodej do poloviny října, s natočením videí jako první prioritou.

**Pořadí prací je podle zadání: videa nejdřív, pak textové drobnosti, pak zámky s cenami,
pak prodejní stránka.** Oproti první verzi plánu (peníze první) je tohle vědomá změna
priorit zpět na 18. 8. 2026.

⚠️ **Důsledek pro termín:** appka zvládá chybějící video bez rozbití (zobrazí dlaždici
„čeká na natočení"), takže videa nejsou technicky nutná pro spuštění — ale když jdou
první v pořadí prací, tak zámky, ceny a prodejní stránka logicky přijdou na řadu později.
**1. 9. proto realisticky nevychází jako datum spuštění.** Nové okno pro spuštění je
kolem **15.–22. 9.**, se zbytkem času do poloviny října jako rezervou na propagaci
a doladění, ne na dohánění zpoždění.

---

## Stav ke 18. 8. 2026 (fakticky, z kódu a gitu)

- **Obsah appky hotový.** 7 modulů, 39 kroků, ~7 650 slov. Obě cenové úrovně mají co nabídnout.
- **Rozdělaná práce v gitu (necommitnutá):** kalkulačka rozpočtu + sada ubytovacích ikon,
  885 řádků změn v `index.html`. Dopilovat a zacommitnout jako první krok, ať to nevisí.
- **Zámky VYPNUTÉ.** Appka je teď celá odemčená (`isUnlocked` prochází vším). `BALICKY` má
  u obou balíčků prázdný `odkaz`, `KODY` má jen zástupný kód `"CELY"` → `"rozsireni"`.
- **Videa: 2 scénáře hotové** (`video/scenar-uvitani.md`, `video/scenar-letenky-jak-kupuju.md`),
  0 natočeno.
- **Podcasty: 4 místa naplánovaná** (`audio/CTI-ME.md`), 0 nahráno.
- **Prodejní stránka pro tenhle produkt neexistuje**, ale existuje ověřený, naostro fungující
  vzor: „Přes imigrační v klidu" (SimpleShop + ThePay 2.0, platba otestovaná 18. 7., ThePay
  schválené). Kopírovat kostru, ne stavět znovu.
- **⚠️ `CACHE_NAME` v `sw.js` se musí povýšit při každém nasazení**, jinak vracející se
  návštěvník uvidí starou appku (objeveno 16. 8., už se to jednou stalo).

---

## Týden 0 · nejdřív, bokem od videí — uzavřít rozdělané

- [x] **Prověřeno 18. 8.** Rozdělaná práce v gitu (885 řádků v `index.html`) není jen
      kalkulačka a ikony — je to 4 hotové funkce: Převodník (měna/jednotky/spropitné,
      vlastní obrazovka), tisk checklistu po modulech, dokončovací karta po 7. modulu
      (konfety + upsell), „historka" (nový typ vyprávěcího bloku). Otestováno naostro na
      `appka` serveru (launch.json, localhost:3777): JS bez chyby, nové ikony ubytování
      se načetly (200 OK), appka prošla úvod → nastavení → dashboard → modul 4 bez pádu.
      `CACHE_NAME` už povýšený na `v39`, dokumentace v `CLAUDE.md` sedí.
- [ ] Rychlý vizuální průlet přes Převodník, tisk checklistu a dokončovací kartu (ne jen
      že to nehází chyby, ale že to i vypadá dobře) — jednotky minut, ne dnů
- [ ] Zacommitnout

## Týden 1 · 18.–24. 8. — Natočit a nahrát

- [ ] Nahrát 4 podcastové vsuvky z `audio/CTI-ME.md` (1.3, 3.4, 6.1, 7.5) — mluvené slovo,
      jde to rychleji než video
- [ ] Natočit **letenky-jak-kupuju.mp4** (screencast Google Flights, ~4 min)
- [ ] Natočit **uvítací video** jako úplně poslední (scénář to sám radí — po ostatním
      natáčení to bude znít jistěji, ne nazkoušeně)

## Týden 2 · 25.–31. 8. — Zpracovat videa, opravit text

- [ ] Sestříhat/zkomprimovat videa a podcasty, uložit pod přesnými názvy do `video/` a
      `audio/`, doplnit do `CACHE_FILES` v `sw.js`, povýšit `CACHE_NAME`
- [ ] Rychlý průchod celou appkou od začátku do konce → seznam „drobností v textu" a rovnou
      oprava
- [ ] Nasadit, ověřit videa/podcasty naostro na mobilu i offline

## Týden 3 · 1.–7. 9. — Zapnout peníze

- [ ] Potvrdit ceny (690 Kč základ, 1 490 Kč celý) a systém kódů — zůstat u jednoho sdíleného
      kódu na balíček jako teď, unikátní kódy na appku bez backendu jsou zbytečná složitost
- [ ] Zapnout zámky, do `BALICKY` doplnit skutečné `odkaz`, do `KODY` skutečné kódy
- [ ] Založit prodejní stránku jako kopii kostry „Přes imigrační v klidu" (stejné CTA,
      SimpleShop produkt, ThePay 2.0 — nemusí se znovu schvalovat, je na účtu už schválené)

## Týden 4 · 8.–14. 9. — Prodejní stránka a checkout

- [ ] V SimpleShopu založit 2 produkty (690 a 1 490 Kč), napojit ThePay 2.0
- [ ] Postavit `dekuji.html` appky: po platbě ukáže odemykací kód (stejný vzor jako u
      druhého produktu)
- [ ] Testovací nákup obou balíčků od začátku do konce (platba → kód → odemčení)
- [ ] Povýšit `CACHE_NAME`, nasadit, ověřit naostro na mobilu i offline

## 15.–22. 9. 2026 — Spuštění

- [ ] Poslední kontrola appky na mobilu (offline, nákup, odemčení, videa/podcasty)
- [ ] Oznámení: Instagram, ManyChat, e-mail — navázat na prodejní žebříček (kvíz, kalkulačka
      rozpočtu už sbírají e-maily a vedou sem)

## 22. 9.–15. 10. — Sledovat a doladit

- [ ] Sledovat první nákupy, rychle opravovat co se ukáže
- [ ] Vyhodnotit prodeje, případně upravit cenu/copy podle reálných dat
- [ ] Rezerva na to, co se zpozdí z předchozích týdnů
- [ ] Podle stavu: rozhodnout o startu „Až přistaneš" (kostra hotová v
      `usa-bez-cestovky-cast2/KOSTRA.md`)

---

## Rizika

- **1. 9. jako datum spuštění nevychází** — videa jdou první v pořadí prací, takže zámky
  a prodejka logicky přijdou později. Nové reálné okno je 15.–22. 9.
- **Natáčení je nejméně předvídatelná část plánu.** Editace, přepis titulků, případné
  reshoty — pokud se protáhne přes týden 2, posouvá se celý zbytek řetězu.
- ~~Rozdělaná práce v gitu je jediná neznámá, co může zabrat víc času~~ — **prověřeno
  18. 8., není to riziko.** Vypadá hotová a funguje naostro, zbývá jen vizuální kontrola
  a commit.
