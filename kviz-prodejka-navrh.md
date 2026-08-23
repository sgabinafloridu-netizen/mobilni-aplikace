# Návrh: vstupní kvíz + prodejní stránka pro "Než odletíš"

Stav: NÁVRH OBSAHU, neschváleno, nekódováno. Až se schválí, staví se jako `kviz.html` +
`prodejka.html` vedle appky ve stejné složce (viz PLAN-spusteni.md, týden 3).

Texty prošly checklistem z `kurz-dna-hlas.md` / `styl-psani-goliasova.pdf` (sekce 15):
krátké odstavce, jedna závorka se sebeironií na text, otázka jako uzávěrka, čísla přesná,
nadpisy mluvené. Zadání: vtipné a oslovuje muže i ženy. Řešeno tak, že věty jdou v
přítomném čase nebo bezrodě, kde to jde, a lomítkem (`zapomněl/a`), kde to jinak zní
kostrbatě, podle [[feedback_texty_bezrode_bez_pomlcek]].

---

## 1. Kvíz "Zvládneš dojet do USA bez cestovky?"

**Mechanika:** Kvíz vypadá jako běžný osobnostní test, ale bez ohledu na odpovědi je
verdikt vždycky stejný: ano, zvládneš. Vtip je v tom, že otázky jsou přehnané a čtenář
v nich pozná přesně to zaváhání, které appka pak doopravdy řeší.

Navazuje na obraz z uvítání appky ("přes 30 záložek v prohlížeči"). Kvíz ten moment
otevírá, appka ho zavírá.

**Ověřeno na perzoně Lenka** ([[reference_persona_rozpocet_lenka]]): otázka 1 původně
zněla „USA sám/sama poprvé", což u někoho, kdo jede s rodinou, zní jako „bez rodiny", ne
jako „bez cestovky" (jak to appka myslí). Opraveno na „poprvé bez cestovky". U otázky 4
padla i narážka „(víš, o kom je řeč)" u paní Cokdyž, protože počítala se čtenářem, co
appku už zná. U studeného publika (první dotek z Instagramu) by to spíš zmátlo než
pobavilo, takže možnost teď funguje sama o sobě i bez předchozí znalosti postavy.

**Zdroj vtipů:** každá otázka teď vychází z reálné historky, co už appka vypráví ve
`hook` textu daného modulu, ne z ničeho vymyšleného. U otázky je poznámka, ze kterého
modulu jde. Appka tím dostane v kvízu ochutnávku vlastního hlasu, ne cizí humor navrch.

**Pořadí otázek (upraveno podle perzony Lenka):** od nejlehčí historky po nejtěžší, ne
podle pořadí modulů v appce. Máchalova kýta a přestup na letišti jdou první, protože
jsou čistě vtipné a nikoho se osobně nedotknou. Doklady (ESTA, dva lidé co nenastoupili
do letadla) jdou jako poslední otázka před bridge, protože je to nejtěžší historka v
kvízu a u někoho úzkostného (jako Lenka, viz [[reference_persona_rozpocet_lenka]]) by
na prvním místě mohla zabrzdit hned na startu, místo aby pobavila. Takhle po ní hned
přijde uklidnění.

### Otázka 1 (modul Checklisty)
*Kamarád Máchal si jednou vezl do USA šunkovou kýtu. Stálo ho to majlant a o kýtu
stejně přišel, celnice ji dál nepustila.*

**Co myslíš, že se do USA nesmí vozit?**
- Uzeniny a čerstvé maso, to vím jistě.
- Nějaké jídlo asi ne, ale netuším přesně které.
- Radši nevozím nic, co by mohlo být sporné.
- Netuším, ale kamarád Máchal by mi teď asi poradil. Pozdě.

### Otázka 2 (modul Letenky)
*Klienti mi posílají screenshoty s jedinou otázkou: je tohle dobrá cena? Já se na cenu
nedívám první. Dívám se na přestup. V Americe se totiž nepřestupuje jako v Evropě. Kdo
to neví, stojí odpoledne u pásu s kufrem v ruce a kouká, jak mu druhé letadlo odlétá
bez něj.*

**Kolik času bys nechal/a na přestup v USA?**
- Aspoň 3 hodiny. Radši počkám, než abych běžel/a.
- 2 hodiny, to snad stačí.
- Hodinu a půl, letadla přece nemeškají.
- Nevím, vybíral/a jsem podle ceny.

### Otázka 3 (modul Finance)
*Lidi se na cestu připraví do posledního papíru: pas, ESTA, pojištění, adresa první
noci. A pak zaplatí první večeři a nechají v ní o čtyři stovky víc, než museli. (Přesně
tohle se stalo i mně, a servírce jsem ještě poděkovala.)*

**Kolik spropitného necháš v americké restauraci?**
- Přesně tolik, kolik se sluší, mám to spočítané.
- Nějakou rozumnou částku, tak od oka.
- Cokoliv mi vyjde v hlavě, ve stresu z čtení účtenky.
- Spropitné? Netušil/a jsem, že je potřeba.

### Otázka 4 (modul Ubytování)
*Rezervuješ pokoj za 120 dolarů. Na účtu pak vidíš 165. Nikdo tě nepodvedl, jen se v
Americe k ceně připočítávají poplatky, co u nás neznáme. (Mně se to stalo taky, a to
mám prý nacestováno.)*

**Co uděláš, když ti hotel zablokuje na kartě navíc pár set dolarů?**
- Vím, že je to dočasné, mám to spočítané dopředu.
- Zavolám recepci a zeptám se, o co jde.
- Zpanikařím a přepočítávám zůstatek na účtu.
- Nevěděl/a jsem, že se tohle vůbec děje.

### Otázka 5 (modul Doklady)
*Znám dva lidi, co se nedostali na palubu. Jednomu vypršela ESTA dva dny předtím.
Druhý nevěděl u kontroly adresu první noci a strávil 4 hodiny v místnosti, kde sedí
lidi, u kterých „něco nesedí". Zbytek toho dne byl ztracený.*

**Kdy sis naposledy zkontroloval/a platnost ESTA?**
- Před chvílí, mám to jako připomínku v kalendáři.
- Minulý týden, jednou to snad stačí.
- Nevěděl/a jsem, že se to dá zkontrolovat.
- Nevím, ale věřím tomu.

### Otázka 6 (most k appce)
**Kdyby ti teď někdo řekl přesně, co dělat první, druhé a třetí, co bys udělal/a?**
- Poslechl/a bych. Konečně by mi to řekl někdo jiný než internet.
- Zkontroloval/a bych si to aspoň proti tomu, co už vím.
- Konečně bych zavřel/a těch 30 záložek. Jednu po druhé, jako pomstu.
- Nejspíš bych stejně dohledával/a. Paní Cokdyž by mi to jen tak nedala.

*(Tahle otázka se nevyhodnocuje jinak než ostatní, jen zní jako přechod k řešení, a
taky jím je. Paní Cokdyž se objevuje jen tady, jako jediná narážka na appku samotnou,
ať čtenář dostane chuť, ne celou postavu předem.)*

---

### Výsledková obrazovka

**Nadpis (vždy stejný, tučně):**
> Ano. Zvládneš dojet do USA bez cestovky.

**Text pod nadpisem** (mění se podle převažující odpovědi, verdikt ne):

- *Převažují klidné odpovědi (a):* „Vypadá to, že už teď víš dost. Jen to zatím nikdo
  nedal na jednu hromadu. Tak to teď někdo udělá."
- *Převažují prostřední (b, c):* „Máš to v hlavě. Jen rozsypané po záložkách. Appka to
  jen srovná do pořadí, ty už u toho jenom škrtáš."
- *Převažují úzkostné (d):* „Třicet záložek znám líp, než by se slušelo. (Bývala jsem
  na čtyřicítce, tak klid.) Přesně proto existuje průvodce, co řekne: tohle teď, tohle
  potom."

**CTA tlačítko:**
> Chci vědět přesně co a kdy → *(vede na prodejní stránku)*

**Drobný dovětek pod tlačítkem:**
> Žádná registrace. Appka běží v prohlížeči a funguje i v letadle bez signálu.

---

## 2. Prodejní stránka "Než odletíš"

Kostra podle metody Goliášové: scéna, ne slib → rozvinutí → aha moment → most k tématu
→ CTA → osobní dovětek. Vzhled přebírá z "Přes imigrační v klidu" (ověřený vzor), texty
psány specificky pro tenhle produkt. V celé stránce jsou schválně jen 2 závorky se
sebeironií (jedna dole, jedna u paní Cokdyž), víc by byl tik, ne mrknutí.

**Ověřeno na perzoně Lenka:** perzona se sama ptá „vyplňuje se ESTA každý zvlášť?" a
peníze jsou její strach číslo jedna. Původní text mluvil o dokladech i o ceně v
jednotném čísle, jako by appka byla pro jednoho člověka, přitom appka umí hlídat víc
cestujících najednou (`nezOdletisCestujici`). Doplněno u modulu Doklady a u cenového
bloku, ať je hned vidět, že appka je pro rodinu, ne jen pro sólo cestovatele, a že cena
je za appku, ne za osobu.

### H1 (scéna)
> Otevřeš prohlížeč. Chceš zjistit jednu jedinou věc.
>
> O hodinu později máš třicet otevřených karet.
>
> A furt nevíš, čím začít.

**Druhé patro H1:**
> A tohle je pořád jenom ta část cesty, co se jmenuje „než odletíš".

### Podnadpis (most)
> Průvodce, co ti řekne přesně: tohle teď, tohle za týden, tohle v den letu. Jedna
> appka místo třiceti karet.

### Co ti nedá spát (paní Cokdyž)
> Paní Cokdyž má službu vždycky v 00:47. Zrovna když bys měl/a spát.
>
> Zeptá se na pas. Zeptá se na ESTU. Zeptá se, co jsi určitě zapomněl/a.
>
> Odpovědi na to nemá. Jenom otázky.
>
> (Rozmluvit se jí to nedá. Zkoušelo to přede mnou víc lidí.)
>
> Zavřít se to dá.

*(Tři citátové bubliny, styl jako u "Přes imigrační v klidu", zůstávají prázdné pro
reálné citace, až budou k appce recenze. Nevymýšlet.)*

### Co je uvnitř, když konečně zavřeš ten prohlížeč
Sekce se 7 moduly (čísla a názvy přímo z appky, ne vlastní parafráze):

1. **Kdy a kam**: Florida, New York nebo parky, a kdy tam radši nejezdit
2. **Doklady a formálnosti**: appka porovná platnost pasu s datem návratu, a to za tebe
   i za každého, kdo jede s tebou
3. **Letenky**: kdy koupit, kde hledat, proč rozhoduje přestup
4. **Ubytování**: kde spát a co se k ceně ještě připočte
5. **Finance a placení**: kolik si vzít a kolik sebere banka
6. **Checklisty**: co sbalit, co vytisknout, co mít po ruce
7. **Krizové situace**: zrušený let, ztracený pas, zamítnutá ESTA, klidný postup

Plus **Trezor**: offline schránka na ESTU, letenky a rezervace, funguje i bez signálu na
letišti.

**Číselný stat blok** (vytažené číslo, gradientové písmo, jako `bloky.stat` v appce):
> **7 modulů. 39 kroků. Asi 7 650 slov.**
> A ani jedno z nich nemusíš sám/sama hledat po fórech.

**Klíčová věta (odlišuje appku od článku):**
> Appka to za tebe zkontroluje. Zadáš datum odletu a appka sama pozná, jestli zrovna
> teď máš kupovat letenku, jestli ti stihne dojít pas, kolik dní ti zbývá.
>
> Nečteš o tom. Appka to prostě ví.

### Kolik to stojí
| Balíček | Co obsahuje | Cena |
|---|---|---|
| Základ | Moduly 1 až 4 (příprava před odletem) | 690 Kč |
| Celý | Moduly 1 až 7 (i den letu a krizové situace) | 1 490 Kč |

> Cena je za appku, ne za osobu. Zadáš do ní klidně celou rodinu, appka hlídá doklady
> a termíny pro každého zvlášť.

**Poznámka k ceně:** formulaci „ušetříš" a kotvící cenu doplním, až budou zámky zapnuté
a padne rozhodnutí, jestli se celý balíček kotví proti součtu, nebo prodává samostatně
(PLAN-spusteni.md, týden 3, zatím otevřené).

### Co když se ti to nebude líbit
> Vzor z "Přes imigrační v klidu" má řádek 30 dní záruka pod hlavními CTA. Navrhuju
> stejné, ale potvrď: dává garance smysl i u appky stejně jako u videokurzu, nebo to
> chce jinou formulaci?

### CTA
> Chci mít appku po ruce → *(vede na checkout, odkaz doplnit až bude produkt v
> SimpleShopu)*

### Poslední věc (1. osoba, Gábi)
> Než jsem poprvé letěla sama, měla jsem otevřených přes 30 záložek. Ano, počítala jsem
> je. Cíťa jedna.
>
> Tuhle appku jsem postavila, ať tobě stačí zavřít jednu.

*(Poslední věta je schválně stejná jako v uvítání appky, ať na sebe kvíz, prodejka a
appka navazují jako jeden hlas, ne tři různé texty.)*

---

## Otevřené otázky, potřebují tvoje rozhodnutí
1. Cenový blok na prodejce: má se ukazovat i „Celý" balíček s „ušetříš", nebo se ceny
   ještě budou měnit?
2. Garance 30 dní: dává smysl i u appky, nebo jinak?
3. Citáty/recenze zatím nejsou, nechávám prázdné, ne vymyšlené.
4. Souhlasíš s umístěním (`kviz.html` + `prodejka.html` vedle appky, jeden Netlify
   deploy), nebo chceš samostatný projekt jako u "Přes imigrační v klidu"?
