# CRO audit: Než odletíš (prodejka.html)
*Datum: 18. 8. 2026*
*Typ stránky: Prodejní stránka (digitální appka, 690/1 490 Kč)*
*Cíl konverze: Klik na "koupit" (zatím placeholder na index.html, reálně půjde na SimpleShop checkout)*
*Zdroj trafficu: primárně kviz.html (vlastní vtipný kvíz), sekundárně Instagram/ManyChat podle STRATEGIE-prodejni-system.md*

---

## SHRNUTÍ NA JEDEN ODSTAVEC

Stránka má silný vizuální systém (reálné fotky, appčiny vlastní ilustrace, střídání pozadí) a autentický hlas, což je vidět málokdy hned na první verzi. Nejvíc ji brzdí tři věci: první CTA tlačítko v hero je vágní ("Chci se na to podívat"), video placeholder sedí přímo před ním a signalizuje nedodělanost v nejkritičtější chvíli rozhodování, a chybí celá sekce práce s námitkami (FAQ), přestože v projektu už existuje hotový seznam reálných obav cílové čtenářky. Jedna změna s největším dopadem: přepsat první CTA na konkrétní příslib a posunout video placeholder buď níž, nebo ho nahradit něčím, co v hero sekci nepůsobí jako nehotová věc.

---

## RYCHLÉ VÝHRY (udělat hned, dnes)

1. **Přepsat text prvního CTA tlačítka**
   - Proč: "Chci se na to podívat →" je přesně ten typ vágního CTA, co skill výslovně varuje jako anti-vzor ("Více info" typ). Nekomunikuje hodnotu, jen akci.
   - Jak: nahradit za "Chci appku vyzkoušet →" nebo "Ukaž mi, co appka umí →", ať tlačítko říká, co čtenář dostane, ne jen že klikne.
   - Očekávaný dopad: střední.

2. **Message match mezi kvízem a prodejkou**
   - Proč: kvíz končí větou "Ano. Zvládneš dojet do USA bez cestovky." Prodejka na to navazuje jinou formulací ("Zvládneš přípravu na Ameriku i bez cestovky"). Návštěvník přicházející z kvízu čeká stejnou větu, ne parafrázi, jinak má na půl vteřiny pocit, že klikl špatně.
   - Jak: v H1 nebo aspoň v eyebrow použít doslova "Zvládneš dojet do USA bez cestovky", stejnou větu jako verdikt kvízu.
   - Očekávaný dopad: malý až střední, ale zadarmo.

3. **Video placeholder pryč z hero, nebo nahradit**
   - Proč: prázdné video s textem "Chystám ho, přidám sem během pár dní" sedí v hero sekci těsně před prvním CTA, tedy v momentě, kdy návštěvník rozhoduje, jestli tomu věří. Nehotová věc na nejexponovanějším místě stránky je zbytečné tření.
   - Jak: buď placeholder přesunout níž (např. do sekce Příběh, kde už má návštěvník důvěru), nebo ho v hero nahradit statickým vizuálem (screenshot appky, ne prázdný rámeček).
   - Očekávaný dopad: střední až velký, je to doslova poslední věc před prvním rozhodovacím bodem.

4. **Appka jako produktový formát zmínit dřív**
   - Proč: čtenář se dozví, že jde o appku (ne PDF, ne video kurz) až v drobném písmu pod prvním CTA. To je jedna z nejsilnějších odlišujících vlastností produktu (appka počítá termíny za tebe), a je schovaná.
   - Jak: slovo "appka" nebo "appka, co za tebe počítá" dostat do H1 nebo podnadpisu.
   - Očekávaný dopad: malý až střední.

---

## VELKÉ ZMĚNY (priorita do 30 dní)

1. **Chybí celá sekce práce s námitkami (FAQ)**
   - Současný stav: stránka jde rovnou z ceny na garanci (a garance zatím chybí taky, viz níže) na "Kdo je Gábi" na finální CTA. Žádné místo, kde se řeší konkrétní pochybnosti.
   - Doporučení: přidat 3 až 4 otázky FAQ mezi cenu a "Kdo je Gábi". V projektu už existují konkrétní ověřené obavy cílové čtenářky (perzona Lenka): "vyplňuje se ESTA každý zvlášť pro každého v rodině?", "co když appku koupím a pak změním termín?", "funguje to i bez signálu na letišti?", "co když nejsem technický typ, zvládnu appku ovládat?".
   - Proč: skill i samotná struktura prodejní stránky počítá s FAQ jako standardní součástí, a projekt má na obavy hotový podklad, jen ho nikdo nepřenesl do prodejky.

2. **Garance/záruka je otevřená otázka, ne rozhodnutí**
   - Současný stav: v kódu je jen komentář "OTEVŘENO", žádný text pro čtenáře.
   - Doporučení: buď garance (byť jiná než u videokurzu, třeba "vyzkoušej appku, kód na odemčení dostaneš zpátky, když do 7 dní napíšeš, že to není pro tebe"), nebo vědomé rozhodnutí ji nemít a nahradit něčím jiným, co řeší riziko (např. "vyzkoušej zdarma prvních X kroků, pak se rozhodni").
   - Proč: garance patří mezi standardní nástroje na "co když to nebude fungovat", a appka bez serveru/backendu má navíc specifickou výhodu, že demo/ukázka jde udělat úplně zadarmo (appka je teď celá odemčená, dokud nejsou zámky zapnuté).

3. **Sociální důkaz je teď 3× prázdný placeholder**
   - Současný stav: tři karty s textem "Připravuje se" na místě, kde má být nejsilnější důvěra.
   - Doporučení: dokud nejsou reálné recenze, sekci buď úplně vynechat (prázdné karty působí hůř než žádná sekce), nebo ji dočasně nahradit tím, co Gábi reálně má: "40+ imigračních kontrol", "4 roky na Floridě", "manžel 27 let v USA" už jsou použité v sekci Gábi, mohly by se ale zopakovat i blíž ceně, kde sociální důkaz chybí nejvíc.
   - Proč: skill výslovně říká, že sociální důkaz patří blízko CTA, po tvrzeních o benefitech. Tři prázdné hvězdičkové karty tam teď dělají spíš díru než důvěru.

---

## NÁPADY K A/B TESTU

| Test | Hypotéza | Jak měřit |
|---|---|---|
| H1 s appkou vs. bez appky | Pokud H1 řekne "appka" explicitně, pak návštěvník rychleji pochopí formát produktu a klikne na první CTA víc | Klikovost prvního CTA za 14 dní |
| Video placeholder v hero vs. mimo hero | Pokud video placeholder zmizí z hero, pak scroll-through do sekce Příběh vzroste | Scroll depth do sekce Příběh |
| Cena s "od 690 Kč" vs. dvě rovnocenné karty | Pokud se karta Základ zobrazí jako levnější vstupní bod, pak víc lidí prokliká aspoň jednu cenovou kartu | Kliky na cenové CTA |

---

## ALTERNATIVY KE KLÍČOVÝM PRVKŮM

### Headline — 3 varianty
1. **Současný:** "Zvládneš přípravu na Ameriku i bez cestovky. I když anglicky umíš tak akorát na dovču a bojíš se úplně všeho."
2. **Message match s kvízem:** "Zvládneš dojet do USA bez cestovky. Appka Než odletíš ti řekne přesně, co dělat teď, co za týden a co v den letu." — Odůvodnění: doslovná návaznost na verdikt kvízu, plus appka je pojmenovaná hned na začátku.
3. **Číslo napřed:** "39 kroků, jedno místo, žádných třicet záložek v prohlížeči navíc." — Odůvodnění: konkrétní číslo funguje podle skillu líp než vágní slib, a recykluje motiv "30 záložek", který se táhne celým funnelem (appka, kvíz, prodejka), takže ho čtenář může znát už odjinud.

### CTA — 3 varianty
1. **Současný (první CTA):** "Chci se na to podívat →"
2. **Hodnotové:** "Chci appku vyzkoušet →" — Odůvodnění: pojmenovává produkt a akci zároveň, ne jen vágní zájem.
3. **Zvědavostní:** "Ukaž mi, co appka umí →" — Odůvodnění: slibuje konkrétní obsah za klikem, ne jen "víc informací".

---

## CHYBĚJÍCÍ PODKLADY

- **Reálný traffic a konverzní data** nemám, appka ani prodejka ještě nejsou naostro spuštěné (ceny a zámky čekají na týden 3 podle PLAN-spusteni.md), takže doporučení jsou postavená na principech skillu a na tom, co o cílové čtenářce (perzona Lenka) víme z předchozí práce, ne na měření.
- **Product DNA dokument pro appku "Než odletíš"** neexistuje, jen pro "Přes imigrační v klidu" (jiný produkt, jiná persona Jana). Audit vychází z appčina vlastního CLAUDE.md místo z product-dna.
- **Rozhodnutí o garanci a cenové kotvě** jsou stále otevřená v kódu, audit je proto nemůže hodnotit jako hotové prvky, jen upozorňuje na jejich absenci.
