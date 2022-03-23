//Инициализация концовки
function ending(difWords, name, nameBecause,
                landing, landingBut, surface, surfaceFull, sky, observation,
                construction, atmosphere, atmosphereBut,
                temperature, temperatureBut,
                plants, water, waterBut, animals, moon, caves, ruins, features,
                resources, resourcesBut, science, scienceBut, sustain,

                gravity, gravityBut,
                natives, nativeInteractions,
                culture,

                politics) {

  this.difWords = difWords;
  this.name = name;
  this.nameBecause = nameBecause;

  this.landing = landing;
  this.landingBut = landingBut;
  this.surface = surface;
  this.surfaceFull = surfaceFull;
  this.sky = sky;
  this.observation = observation;

  this.construction = construction;
  this.atmosphere = atmosphere;
  this.atmosphereBut = atmosphereBut;

  this.temperature = temperature;
  this.temperatureBut = temperatureBut;

  this.plants = plants;
  this.water = water;
  this.waterBut = waterBut;
  this.animals = animals;
  this.moon = moon;
  this.caves = caves;
  this.ruins = ruins;
  this.features = features;

  this.resources = resources;
  this.resourcesBut = resourcesBut;
  this.science = science;
  this.scienceBut = scienceBut;
  this.sustain = sustain;

  this.gravity = gravity;
  this.gravityBut = gravityBut;

  this.natives = natives;
  this.nativeInteractions = nativeInteractions;

  this.culture = culture;
  this.politics = politics;

}

var EndingDifWords = [
  "i",
  "ale",
  "aczkolwiek",

  "Nazwali swój nowy świat ",
  "Zbudowali pommink ku czci ",
  " Kolonistów którzy nie przetrwali wyprawy.",
  "Koloniści budzą się z swoich komór hibernacyjnych i badają swój nowy dom.",


];

var EndingNameBecause = [
  "z powodu jej ekstremalnego ciepła.",
  "z powodu jej ekstremalnego zimna.",
  "z powodu jej wysokiej grawitacji horyzont jest kompletnie płaski.",
  "z powodu jej wysokiej grawitacji stanie o własnych siłach wymaga heroicznego wysiłku.",
  "z powodu jej niskiej grawitacji powierzchnia jest posiana o skaliste góry.",
  "z powodu że jej cała powierzchnia jest zatopiona pod oceanem.",
  "z powodu że jej cała powierzchnia jest pokryta lodem.",
  "z powodu jej braku jakielkolwiek wody.",
  "z powodu jej gęstej roślinności.",
  "z powodu jej trującej roślinności.",
  "z powodu jej dużej ilości jadalnych roślin.",
  "z powodu jej gęstego systemu jaskiń.",
  "z powodu jej bogatych złóż zasobów.",
  "z powodu jej braku złóż zasobów.",
  "z powodu jej perfekcyjnych warunków.",
  "z powodu że przypomina Ziemie którą opuścili.",
  "z powodu że to jest ten świat.",


];

var EndingLanding = [
  "System lądowania kontroluję opadanie statku-nasiona i on",
  "Uszkodzony system lądowania kontroluję opadanie statku-nasiona i on",
  "SI wykorzystuje silniki manewrowe aby w minimalnym stopniu kontrolować opadanie statku i on"
];

var EndingLandingBut = [
  "wpada delikatnie w",
  "ląduje delikatnie na",

  "wpada w",
  "ląduje na",

  "wpada z dużą prędkościa w",
  "rozbija się na",
  "przebija się przez "
];

var EndingLandingBonus = [
"Eskadra pojazdów kosmicznych tubylców przechwytuje statek-nasiono kiedy ono podlatuje i nakierowuje je na miejsce lądowania kiedy tubylcy przygotowują miejsce do lądowania",
"Rodzima cywilizacja pochopnie wystrzeliwuje statek kosmiczny aby prowadzić statek-nasiono, kiedy tubylcy przygotowują miejsce do lądowania",
"Rodzima cywilizacja wystrzeliwuje niskiej jakości statek kosmiczny aby monitorować statek nasiono jak ono podlatuje, kiedy tubylcy przygotowują miejsce do lądowania",
];

var EndingSurface = [
  "ocean u wybrzeży jednego z kontynetów planety.",
  "ocean szeroki na cała planete.",
  "pokrywie lodowej spowijającą całą planete.",
  "pole nieznanej roślinności.",
  "skalistej powierzchni.",
  "pole nieznanej roślinności zanim zatrzymał się."
];

var EndingSurfaceFull = [
  "Statek-nasiono unosi się w oceanie powolnych kilku kilometrowych fal, poniżej",
  "Statek-nasiono pływa na powierzchni oceanu powolnych wysokich fal, poniżej",
  "Statek-nasiono spczywa na oceanie rozciągający się po horyzont, poniżej",
  "Statek-nasiono unosi się po spokojonym oceanie rozciągający się po horyzont, poniżej ",
  "Statek-nasiono spoczywa na powierzchni lustrzanie płaskiego oceanu, poniżej",

  "Lasy niemożliwie smukłych i wysokich obcych roślin sięgają kilometry w",
  "Lasy wysokich obcych drzew sięgają setki metrów w",
  "Lasy obcej roślinności rozciągają się poniżej",
  "Pola przysadzistych, grubo ugałęzionych obcych rośliń rozciągają się poniżej",
  "Płaskie pola nieznanego mchu rozciągają się poniżej",

  "Wysokie na kilometry iglice lodu sięgają w",
  "wysokie postrzępione iglice lodu sięgają w",
  "Szczerbate pola lodu rozciągają się poniżej",
  "Płaskie pola lodu rozciągają się poniżej",
  "Perfekcyjnie płaskie pole lodu rozciąga się poniżej",

  "Krajobraz szczerbatych gór wysokich na kilometry rozciąga się, poniżej",
  "Krajobraz szczerbatych gór wysokich na setki metrów rozciąga się, poniżej",
  "Nieruchomy krajobraz z porozrzucanymi kraterami rozciąga się, poniżej",
  "Nieruchomy, idealnie płaski krajobraz oprócz niewielu płytkich kraterów, poniżej",
  "Nieruchomy, idealnie płaski krajobraz rozciąga, poniżej",

  "Krajobraz niemożliwie wielkich gór rozciąga się poniżej",
  "Krajobraz wielkich skał i dużych gór rozciąga się poniżej",
  "Pusty skalisty krajobraz rozciąga się poniżej",
  "Płaski skalisty krajobraz rozciąga się poniżej",
  "Perfekcyjnie płaski skalisty krajobraz rozciąga się poniżej",
];

var EndingSky = [
  "niebieskie niebo.",
  "jasno niebieskie niebo.",
  "ciemne, z porozrzucanymi gwiazdami niebo.",
  "zielone niebo.",
  "trujące niebo.",
  "niebo wypełnione żrącym gazem."
];

var EndingObservation = [

  "Pagórkowate pole rozciąga się poniżej obcego nieba.",
  "Perfekcyjnie płaski, pusty krajobraz rozciąga się poniżej trującego nieba.",
  "Krajobraz wrzecionowatych skał i niemożliwie wysokich gór rozciąga się poniżej nieba wypełnionego żrącym gazem.",
  "Idealnie nieruchowy krajobraz pokryty kraterami, rozciąga się poniżej czarnego nieba z porozssianymi gwiazdami.",
  "Jałowy, skalisty krajobraz rozciąga się poniżej jasno niebieskim niebem. "
];

var EndingMoon = [
  "Koloniści używają to co zostało z resztek statku-nasiona aby zbudować rakiete która pozwoli dotrzeć do bogatego w minerały księżyca,",
  "aby wydobyć z jego powierzchni bogatej w minerały zasoby.",
  "aby wydobyć z jego bogatej w minerały powierzchni zasoby aby zrekompensować kompletny brak zasobów planety.",
  "Zanim koloniści ustanowili swoją baze technologiczną, księżyc planety rozpada się na orbicie bombardując powierchnie meteorytami. Niektórzy koloniści przetrwali ale znaczna część technologii została zniszczona.",
];

var EndingAtmosphere = [
  "Koloniści mogą opuścic statek bez sprzętu wspomagającego oddychanie,",
  "Koloniści mogą opuścic statek z minimalnym sprzętem oddechowym",
  "Koloniści mogą opuścic statek nosząc sprzęt swspomagający oddychanie",
  "Koloniści mogą opuścić statek tylko w ciężkich kompinezonach ochronnych które chroniąich przed toksyczna atmosferą",
  "Koloniści nie mogą opuścić statku, z wyjątkiem specjalnie zbudowanych pojazdów chroniących przez żrącą atmosferą",
  "Koloniści mogą opuścić statek w ciężkich strojach chroniących ich przed próżnią"
];

var EndingAtmosphereBut = [
  " ale awaria sprzętu oddechowego doprowadza ",
  " kolonistów do uduszenia się.",
  " ale awaria stroji ochronych doprowadza do ",
  " kolonistów bycia zatrutych",
  " ale żrąca atmosfera przebija się przez pancerz wielu pojazdów budowlanych i zabija ",
  " kolonistów",
  " ale awaria stroji doprowadza ",
  " kolonistów do uduszenia się,"
];

var EndingGravity = [
  "Oni mogą sie spokojnie poruszać w grawitacji podobnej do ziemskiej.",
  "Wysoka grawitacja powoduje że praca staję się trudniejsza.",
  "Niska grawitacja powoduje że prace są w pewnym stopniu trudniejsze niż były by na Ziemi.",
  "Zgniatająca grawitacja powoduje że stanie jest niemożliwe bez powocy mechanicznej,",
  "Bardzo niska grawitacja powoduje że praca jest o wiele trudniejsza niż była by ona na Ziemi,"
];

var EndingGravityBut = [
  "ale",
  "i",
  " wypadek przy budowie zabija",
  " kolonistów.",
  " kolonistów umiera od problemów zdrowotnych związanych z niską grawitacją.",
  " kolonistów jest zabitych kiedy częsciowo ukończony budonek zawala się.",
];


var EndingTemperature = [
  "noszą lekkie ubrania w komfortowych temperaturach",
  "i stroje chroniące aby wytrzymać okropne ciepło",
  "i ciężkie ubrania aby uchronić je przed zamarzającym mrozem",
  "i topiące ołów ciepło",
  "i chłodzone stoje aby chronić ich przed topiącym ołów ciepło",
  "i temperatury zbliżone do absolutnego zera",
  "noszą ogrzewane stroje aby przeżyć bliskie do absolutnego zera temperatury",
];

var EndingTemperatureBut = [
  " więcej umiera kiedy od ciepła jeden z schronów topi się.",
  " więcej umiera kiedy od zimna jeden z schronów zamarza i rozłamuje się.",
  "i ",

];

var EndingWater = [
  "Koloniści budują swoją osade w pobliżu rzeki, która wpada do jednego z oceanów planety, który zapewnia całą potrzebną wodę kolonii.",
  "Koloniści wydobywają wodę z północnej pokrywy lodowej planety.",
  "Koloniści budują swoją osade na pływającej platformie z filtrami do wydobywania wody z oceanu planetarnego.",
  "Koloniści budują swoją osade na pokrywie lodowej pokrywającą całą planete i wydobywają z niej wode.",
  "Koloniści muszą racjonować niewielką ilość wody, którą mogą wydobyć z atmosfery, ",
  "Koloniści muszą ostrożnie racjonować niewielką ilość wody, którą mogą wydobyć ze skał planety, "
];

var EndingWaterBut = [
  "i braki wody zabiją ",
  " kolonistów.",
  "awaria upraw doprowadza do śmierci ",
  " kolonistów.",
  ""
];

var EndingConstruction = [
  "Koloniści rozpoczynają budowę osady przy pomocy robotów budowlanych statku-nasiona.",
  "Koloniści rozpoczynają budowę osady przy pomocy uszkodzonych robotów budowlanych statku-nasiona.",
  "Koloniści rozpoczynają budowę osady przy pomocy kilku pozostałych robotów budowlanych statku-nasiona.",
  "Koloniści rozpoczynają budowę osady bez pomocy robotów budowlanych statku-nasiona.",
];

var EndingPlants = [
  "Roślinny planety są ekstremalnie trujące dla ludzi i ",
  " kolonistów umiera zanim uda się im usunąć je ze swojej osady.",
  "Awaria magazynów jedzenia kolonii, powoduje zanieczyszczenie zasobów kolonii przeż trujące rośliny planety i ",
  " kolonistów umiera.",

  "Koloniści hodują rodzime rośliny dla żywność, zmniejszając ilość wody którą muszą wydobywać chemicznie ze skał planety",
  "Koloniści hodują rodzime rośliny na żywność, zmniejszając ilość wody którą moszą skroplić z atmosfery",
  "Koloniści hodują rośliny rosnące na pokrywie lodowej dla jedzenia i wydobywają wodę pitną z innych części pokrywy",
  "Koloniści hodują pływającą roślinność dla żywności i wydobywają wodę pitną z oceanu",
  "Koloniści hodują rodzime rośliny dla jedzenia i wydobywają wodę z północnej pokrywy lodowej",
  "koloniści budują swoją osadę w pobliżu rzeki, która wpada do jednego z oceanów planety, i hodują rodzime rośliny dla żywności",

];

var EndingNatives = [
  "Statek-nasiono jest szybko okrążony przez tłumy uważnych tubylców.",
  "Statek-nasiono jest szybko okrążony przez obów tubylczych żółnierzy, uczonych, księży i dyplomatów.",
  "Statek-nasiono jest szybko okrążony przez obów tubylczych żółnierzy, księży i dyplomatów.",

  "Obydwu gatunkom udaje się nawiązać komunikacje, a koloniści dowiadują się że tubylcy nazwali swoją planetę ",


  "",

];

var EndingNativeInteractions = [
  "Gdy koloniści zaczynają się rozwijać zdala od swojej początkowej osady, muszą znaleźć sposób, aby podzielić swój nowy dom z jej rodzimymi mieszkańcami,",

  "kierowani bogactwem informacji historycznych w kulturalnej bazie danych.",
  "z zachowanymi częściami bazy kulturalnych danych aby ich prowadzić.",
  "ze resztkami bazy kulturalnych danych które koloniści wydobyli aby ich prowadzić.",
  "bez żadnej pomocy z zniszczonej bazy kulturalnych danych.",

  "Różnica w poziomie technologicznym między kolonistami a tubylcami utrudnia relacje,",
  "Podobieństwo poziomu technologicznego między kolonistami a tubylcami ułatwia relacje,",

  "kultura tubylców czyni ich wrogimi wobec przybyszów z kosmosu.",
  "kultura tubylców sprawia, że ​​są wyjątkowo podejrzliwi wobec obcych.",
  "kultura tubylców sprawia, że ​​są ostrożni wobec ludzi.",
  "kultura tubylców sprawia, że ​​są ostrożni, ale akceptują imigrantów.",
  "kultura tubylców sprawia, że ​​są przyjaźnie nastawieni do uchodźców.",

  "Dzięki interakcjom AI z tubylcami planety podczas przylotu statku-nasiona, jej mieszkańcy już rozszerzyli ofertę azylu dla ludzi i są gotowi przymknąć oko na wszelkie różnice i współistnieć.",
  "Podczas zbliżania się statku-nasiona tubylcy jasno stwierdzili, że ludzie nie będą mile widziani na ich planecie.",

  "The two species end up living in closely linked communities, with some members of each species adopting the lifestyle of the other.",
  "The two species end up living in separate communities with friendly relations between them.",
  "The two species end up living in separate parts of the planet and having little contact with one another.",

  "Konflikty eskalują do wojny która kończy się zniewoleniem tubylców przez ludzi.",
  "Konflikty eskalują do wojny która kończy się zniewoleniem ludzi przez tubylców.",

  "Konflikty eskalują do wojny która kończy się kompletnym wyniszczeniem tybylców przez ludzi.",
  "Konflikty eskalują do wojny która kończy się kompletnym wyniszczeniem ludzi przez tubylców.",
];

var EndingAnimals = [
  "They harness some of the immensely powerful native animals as beasts of burden, so the colonists do not have to exert themselves in the crushing gravity",
  "They harness some of the planet's powerful native animals as beasts of burden, making work in the high gravity easier",
  "They harness some of the planet's native animals as beasts of burden",
  "They harness some of the planet's agile native animals as beasts of burden, making work in the low gravity less awkward",
  "They harness some of the planet's agile native animals as beasts of burden, making work in the extremely low gravity less awkward",

  "Kolonistą udaje się powstrzymać bezlitośnie wrogie zwierzęta planety, ale ",
  " kolonistów zostaje zaitych zanim ogrodzenie zostanie zabezpieczone.",
  "Wrogie zwierzęta przebiły się przez zabezpieczenia i zabiły ",
  " kolonistów.",

];

var EndingCaves = [
  "Trzęsienie ziemi zabija ",
  " kolonistów, zanim zdązyli zbudować konstrukcje zdolne do wytrzymania ich.",
  "Trzęsienie ziemi niszczy w części zbudowany budynek i zabija przy tym ",
  " kolonistów.",

  "Koloniści budują swoje osady w szczelnych i izolowanych jaskiniach, które zapewniają gotowe schronienie przed niegościnną atmosferą i temperaturą planety.",
  "Koloniści budują swoje osady w szczelnych jaskiniach, które zapewniają gotowe schronienie przed niegościnną atmosferą planety.",
  "Koloniści budują swoje osady w izolowanych jaskiniach, które zapewniają gotowe schronienie przed niegościnną temperaturą powierzchni planety.",
  "Koloniści budują swoją osadę w pobliżu jaskiń które wykorzystują jako magazyny.",
];

var EndingRuins = [
  "Po zakończeniu osadnictwa i zapewnieniu zapasów żywności koloniści organizują wyprawę do pobliskich ruin.",
  "Odkrywcy badają rzeźby, fryzy i pisma obcych, które wypełniają ruiny. Jeszcze zanim potrafią tłumaczyć pisma, dowiadują się wiele o kulturze i przyczynach jej upadku i wiedzy, która pomoże im w tworzeniu własnej kultury na tym nowym świecie.",
  "Oni także",
  "Odkrywcy",
  "znajdują zaawansowane maszyny obcych, niektóre z nich nadal działające.",
  "Odwrócona inżynieria tych maszyn posunie naukę ponad poziom, który cywilizacja Ziemi osiągnęła w chwili wystrzelenia statku-nasiona.",
  "Odwrócona inżynieria tych maszyn pozwoli im wypełnić niektóre luki w uszkodzonej naukowej bazie danych.",
  "Jednak oni także",
  "odkrywcy",
  "uruchomili długo nieaktywny mechanizm obronny, który zabija ",
  " kolonistów."

];

var EndingFeatures = [
  //Наблюдение
  "Tajemnicze struktury obcych są widoczne jako błyszczące pasma na nocnym niebie, ale obcy nie próbują ingerować w rozwój kulturalny kolonii.",
  "Enigmatyczne obiekty okresowo schodzą z obcych struktur na orbicie, a koloniści mieszkający w pobliżu tych obiektów są bardziej podatni na współpracę i empatię niż byliby w innym wypadku.",
  "Zagadkowe obiekty okresowo schodzą z obcych struktur na orbicie, a koloniści mieszkający w pobliżu tych obiektów są bardziej podatni na konflikty i samolubstwo niż byliby w innym wypadku.",
  //Красота
  "Niezwykłe naturalne piękno planety sprawia, że ​​życie tam jest przyjemniejsze, pomagając kolonistom budować lepsze społeczeństwo.",
  "Niezwykła brzydota planety zwiększa napięcia wśród kolonistów i utrudnia im zbudowanie pokojowego społeczeństwa.",
  //Симуляция
  "",
  "",
  "",
];

var EndingScience = [
  "Koloniści wykorzystują obcą wiedzę naukową do stworzenia poziomu technologii wykraczającego poza marzenia ludzi, którzy zbudowali statek-nasiono.",
  "Kolonistom udaje się utrzymać poziom technologii bardzo podobny do poziomu Ziemi, gdy wystrzelono statek-nasiono.",
  "Koloniści nie utrzymują swoich zaawansowanych komputerów, ale nadal używają prostszej elektroniki i maszyn.",
  "Koloniści są zmuszeni porzucić elektryczność, ale udaje im się zbudować maszyny i fabryki podobne do tych z epoki przemysłowej Ziemi.",
  "Koloniści przechodzą na średniowieczny poziom technologii.",
  "Koloniści przechodzą na technologię opartą na żelaznych narzędziach.",
  "Koloniści przechodzą na technologię opartą na wyrafinowanych narzędziach z kamienia, drewna i brązu.",
  "Koloniści przechodzą na technologię opartą na wyrafinowanych narzędziach z kamienia i drewna.",
  "Koloniści tracą niemal całą wiedze oprócz podstaw na temat narzędzi kamiennych i prostego rolnictwa.",
  "Koloniści tracą prawie całą wiedzę na temat rolnictwa i obróbki metali i żyją jako łowcy-zbieracze używający prostych narzędzi kamiennych.",
  "Koloniści tracą nawet najbardziej podstawową wiedzę naukową i wracają do egzystencji sprzed epoki kamienia."
];

var EndingScienceBut = [
  "Planeta nie jest w stanie utrzymać życia ludzkiego bez pomocy technologicznej, ale zanim ich technologia zawodzi, pierwotni koloniści budują solidne izolowane siedliska.",
  "i genetycznie modyfikują swoich potomków, aby przetrwali w bardzo niskiej grawitacji.",
  "i genetycznie modyfikują swoich potomków, aby przetrwali w bardzo wysokiej grawitacji."
];

var EndingSustain = [
  "Planeta nie może utrzymać życia ludzkiego bez pomocy technologicznej,",

  "i potomkowie pierwotnych kolonistów giną, gdy nie mogą dłużej utrzymywać szczelnych jaskiń.",
  "i potomkowie pierwotnych kolonistów giną, gdy ich struktury nie są już w stanie wytrzymać ekstremalnej temperatury",
  "i potomkowie pierwotnych kolonistów umierają z powodu problemów zdrowotnych spowodowanych przez bardzo",
  "i potomkowie pierwotnych kolonistów giną, gdy przestają działać ich systemy oczyszczania wody.",

  "lecz zanim ich technologia zawiedzie pierwotni koloniści",
  "budują rozległe",
  "szczelne",
  "izolowane",
  "habitaty",

  "genetycznie modyfikują swoich potomków aby przetrwać w ",
  " grawitacji",
  "tworzą zautomatyzowane systemy recyklingujące wode, które mogą pracować bez żadnej konserwacji.",
  "",

]

var EndingCulture = [
  "Dyktator, który zastąpił jednego z pierwotnych kolonistów, szybko przejmuje kontrolę nad kolonią i tworzy autorytarny reżim.",

  "Kulturowa baza danych zawiera bogactwo informacji historycznych, które pomagają kolonistom w dokonaniu wyboru rządu, oraz ogromną bibliotekę sztuki i literatury, aby ich bawić i inspirować.",
  "Chociaż brakuje części kulturalnej bazy danych, wciąż zawiera ona wiele informacji historycznych, aby pouczyć kolonistów o budowie ich społeczeństwa, a także wiele sztuki i literatury, aby ich zainspirować.",
  "Koloniści przeszukują mocno uszkodzoną bazę danych kultury i udaje im się zrekonstruować niektóre informacje o historii i kulturze Ziemi, aby poprowadzić i zainspirować.",
  "Po zniszczeniu bazy danych kultury osoby urodzone w nowym świecie nie wiedzą nic o historii i kulturze Ziemi poza tym, co mogą przekazać pierwsi koloniści osobiście.",

  "Ciężkie straty poniesione przez kolonistów utrudniają budowę nowego społeczeństwa.",
  "Straty poniesione przez kolonistów utrudniają budowę nowego społeczeństwa.",
];

var EndingPolitics = [
  "Baza danych kulturowych z Ziemi została wzbogacona o obcą wiedzę kulturalną, a koloniści wykorzystują ją do budowy społeczeństwa niepodobnego do żadnego, jakie mogli sobie wyobrazić twórcy tego statku-nasiona, w którym każdy członek prowadzi życie w pokoju, szczęściu i duchowym spełnieniu.",
  "Zachowana baza danych kultury jest przechowywana w plikach cyfrowych, do których mają dostęp wszyscy koloniści. Koloniści pracują razem, aby zbudować egalitarne społeczeństwo, w którym technologia dba o materialne potrzeby ludzi, uwalniając ich do prowadzenia życia artystycznego, wypoczynku i duchowego spełnienia.",
  "Zachowana baza danych kultury jest przechowywana w plikach cyfrowych, do których mają dostęp wszyscy koloniści. Koloniści stanowiają fundament demokracji, w której wszyscy obywatele są wykształceni i zaangażowani.",
  "Zachowana baza danych kultury jest przechowywana w plikach cyfrowych, do których mają dostęp wszyscy koloniści. Koloniści stanowią fundament demokracji, ale okazuje się ona podatna na korupcję, a zamożni ludzie stają się de facto klasą rządzącą.",
  "Zachowana baza danych kultury jest przechowywana w plikach cyfrowych, do których mają dostęp wszyscy koloniści. Koloniści próbują zbudować demokratyczne, kapitalistyczne społeczeństwo, ale rząd staje się pionkiem bogatych korporacji rządzących planetą tylko dla korzyści ich właścicieli.",
  "Kolonia staje się zaawansowanym technologicznie państwem policyjnym, w którym ludność żyje pod stałym nadzorem nietykalnej klasy rządzącej, a najmniejsze sprzeciwy są gwałtownie tłumione. Zachowana baza kulturowa jest zachowana, ale dostęp do niej jest ściśle ograniczony przez państwo.",
  "Kolonia dzieli się na kilka dużych narodów, których gospodarki koncentrują się na prowadzeniu ze sobą wojny. Koloniści starają się zachować to, co pozostało z kulturalnej bazy danych, ale wiele z nich zostaje utraconych albo przez zniszczenia spowodowane wojną, albo pod warstwami rewizjonistycznej propagandy rządów.",
  "Kolonia dzieli się na kilka dużych narodów, które toczą ze sobą wojnę, dopóki lekkomyślny przywódca nie rozpoczną wojny nuklearnej, która niszczy całą infrastrukturę cywilizacji. Pozostali przy życiu koloniści żyją na pustkowiach po nuklearnych. To, co pozostało z kulturalnej bazy danych, zaginęło w wyniku katastrofy, a to, co koloniści pamiętają o Ziemi, mylą je z historiami przedwojennej kolonii.",

  "Koloniści wykorzystują zachowaną bazę danych kultury, aby poprowadzić ich w tworzeniu republiki opartej na wolności i równych prawach.",
  "Pierwsi przywódcy kolonii zostali założycielami szeregu życzliwych monarchów, którzy uważają to za swój uroczysty obowiązek kierowania kolonią i ochrony pozostałej wiedzy o Ziemi.",
  "Ocalała wiedza o Ziemi staje się wyłączną własnością kasty kapłańskiej, zamkniętej w bibliotekach. Dla większości populacji Ziemia staje się rajem do której można się dostać z łaski i jako ostateczna nagrodą, na którą można liczyć po życiu w służbie dla opresyjnej teokracji.",
  "Kolonia przekształca się w państwo niewolnicze, w którym większość ludności pracuje, aby budować wielkie złote pomniki dla swoich cesarzy lub ginie w wojnach. Znaczna część ocalałej wiedzy o Ziemi została utracona, ponieważ cesarze zachowują tylko to, czego mogą użyć, aby poprzeć swoje rządy.",
  "Kolonia rozwija się w wiele małych narodów, które istnieją w stanie ciągłej wojny. Pozostałości z kulturalnej bazy danych giną w konfliktach.",

  "Zachowana baza danych kultury stanowi podstawę bogatej historii mówionej. Kolonia dzieli się na małe plemiona, z których każde jest rządzone wspólnie przez swoich członków i pokojowo współistnieją ze sobą.",
  "Zachowana baza danych kultury staje się fundamentem bogatej historii mówionej, a kasta życzliwych wodzów powstaje jako strażnicy tej historii i obrońcy plemion.",
  "Zachowana baza danych kultury staje się podstawą ustnej historii kolonistów, ale kasta brutalnych wodzów wyniszcza kulturę i wykorzystuje ją do umocnienia własnych rządów.",
  "Kolonia rozwija się w wiele małych plemion, które istnieją w stanie ciągłej wojny. Informacje z kulturalnej bazy danych są prawie całkowicie zapomniane, a Ziemia jest pamiętana tylko jako dom panteonu mitologicznych wojowników.",
  "Koloniści popadają w dzikość, a cała wiedza o historii i kulturze Ziemi zostaje zapomniana w ich codziennej walce o przetrwanie.",

];

var EndingResources = [
  "Planeta jest bogata w minerały i metale,",
  "Planeta jest uboga w metale i inne zasoby,",
  "Planeta nie ma żadnych dostępnych metali anu inncyh zasobów,",
];

var EndingResourcesBut = [
  //none
  " and the colonists cannot maintain a high level of technology even with the fully intact scientific database.",
  " więc koloniści nie są w stanie utrzymać wysokiego poziomu technologii, nawet przy zasadniczo nienaruszonej naukowej bazie danych.",
  " so the colonists find it hard to make use of what they can recover from the scientific database. ",
  " a wszelkie informacje, które mogła przechowywać baza naukowa, które mogłyby im pomóc, zostały zniszczone.",

  //poor
  " ale baza naukowa zawiera wiele informacji na temat korzystania z tego, co tam jest.",
  " ale uszkodzona baza danych naukowych nadal zawiera wiele informacji na temat korzystania z tego, co jest.",
  " a poważnie uszkodzona baza naukowa oznacza, że ​​koloniści mają trudności z wykorzystaniem tego, co tam jest.",
  " a bez naukowej bazy danych koloniści mają trudności z wykorzystaniem tego, co tam jest.",

  //rich
  " a baza naukowa zawiera wiele informacji na temat korzystania z nich.",
  " a uszkodzona baza danych naukowych nadal zawiera wiele informacji na temat korzystania z nich.",
  " chociaż poważnie uszkodzona baza danych naukowych oznacza, że ​​koloniści muszą ponownie wynaleźć wiele technologii potrzebnych do ich wykorzystania.",
  " chociaż bez naukowej bazy danych koloniści muszą ponownie wynaleźć większość technologii potrzebnej do ich wykorzystania.",
];

  var cEnding = new ending(
    EndingDifWords,
    planetName,
    EndingNameBecause,

    EndingLanding,
    EndingLandingBut,
    EndingSurface,
    EndingSurfaceFull,
    EndingSky,
    EndingObservation,

    EndingConstruction,
    EndingAtmosphere,
    EndingAtmosphereBut,

    EndingTemperature,
    EndingTemperatureBut,

    EndingPlants,
    EndingWater,
    EndingWaterBut,
    EndingAnimals,
    EndingMoon,
    EndingCaves,
    EndingRuins,
    EndingFeatures,

    EndingResources,
    EndingResourcesBut,
    EndingScience,
    EndingScienceBut,
    EndingSustain,

    EndingGravity,
    EndingGravityBut,

    EndingNatives,
    EndingNativeInteractions,

    EndingCulture,
    EndingPolitics)
