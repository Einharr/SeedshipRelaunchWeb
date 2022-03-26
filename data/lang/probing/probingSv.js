//Инициализация пробирования
function probingText(start, moon, beauty, caves, plants, animals, sentients, culture, civ, ruins, features) {
  this.start = start;
  this.moon = moon;
  this.beauty = beauty;
  this.caves = caves;
  this.plants = plants;
  this.animals = animals;
  this.sentients = sentients;
  this.culture = culture;
  this.civ = civ;
  this.ruins = ruins;
  this.features = features;
}

var ProbingStart = [
  "Ytsondens sensorer",
  "bekräftar resultatet av skeppets skanning från omloppsbanan.",
  "fyller i hålen i datan som skeppet kunde samla i omloppsbana.",
  "Sondens uppdrag är slutfört och den stängs av."
];

var ProbingMoon = [
  "Medan sonden närmar sig planeten så skannar den månen, men finner att den är tom på användbara mineraler.",
  "Medan sonder närmar sig planeten så skannar den månen, och finner att den är rik på metaller och andra användbara resurser.",
  "Medan sonder närmar sig planeten så skannar den månen, och finner att det är en asteroid som nyligen fångats i en ostabil omloppsbana. Inom några få decennier så kommer månen att närma sig planeten tillräckligt för att slitas isär, och planetens yta kommer bli bombarderad med fragment.",
];

var ProbingBeauty = [
  "AI'n kör sondens bilder av ytan genom sin estetiska analysrutin, och avgör att människor hade funnit planeten extremt vacker.",
  "AI'n kör sondens bilder av ytan genom sin estetiska analysrutin, och avgör att människor hade funnit planeten extremt ful."
];

var ProbingCaves = [
  "Planetens skorpa är fylld med enorma grottsystem som skulle vara enkla att täppa igen för att få lufttäta skydd.",
  "Planetens skorpa är fylld med enorma grottsystem som är skyddade från temperaturen på ytan.",
  "Planeten är geologiskt instabil, och farliga jordbävningar är vanligt förekommande på hela ytan.",
];

var ProbingPlants = [
  "Sonden hittar okända plantor. Den tar ett prov för testning, och finner att dom skulle vara varken ätbara eller giftiga för människor.",
  "Sonden hittar okända plantor. Den tar ett prov för testning, och finner att vissa av dom skulle vara ätbara för människor.",
  "Sonden hittar okända plantor. Den tar ett prov för testning, och finner att allihop hade varit extremt giftiga för människor.",
];

var ProbingAnimals = [
  "Sonden hittar ett flertal olika djur. Efter en analys av deras beteende så avgör den att djuren vore varken användbara eller farliga för människor.",
  "Sonden hittar ett flertal olika djur. Efter en analys av deras beteende så avgör den att vissa arter har potential att användas till kött eller lastdjur.",
  "Sonden hittar ett flertal olika djur. Efter en analys av deras beteende så avgör den att dom skulle vara ett betydande hot mot människorna.",
];

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "Sonden märker av en art som uppvisar ett komplext socialt beteende med primitivt språk.",
  "Sonden märker av en art som uppvisar ett komplext socialt beteende och som använder enkla stenverktyg.",
  "Sonden märker av en art som uppvisar ett komplext socialt beteende, som använder sofistikerade stenverktyg, och som börjat tämja djur- och plantliv.",
  "Sonden undersöker ett område med normal vegetation, och märker att vegetationen är kultiverad av en art med hjälp av sofistikerade stenverktyg.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras som använder sten- och bronsverktyg.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras som använder järnverktyg.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras med en medeltida nivå av teknologi.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras med en industriell nivå av teknologi.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras med en nivå av teknologi i kärnkraftsåldern.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras med en digital nivå av teknologi.",
  "Sonden undersöker några av dom möjliga strukturerna som skeppet observerade från sin omloppsbana, och finner att det är ett samhälle befolkat av en intelligent ras som har passerat den teknologiska singulariteten.",

];

var ProbingCulture = [
  "Dom infödda lever i ett konstant tillstånd av våld, utan någon samhällsinstitution.",
  "Dom infödda är uppdelade i mängder av småstammar som är i konstant krig med varandra.",
  "Dom infödda är uppdelade i mängder av småstammar, dom flesta lever i rädsla för deras hänsynslösa hövdingar.",
  "Dom infödda är uppdelade i mängder av småstammar, dom flesta är förståndigt styrda av välvilliga hövdingar.",
  "Dom infödda är uppdelade i mängder av småstammar, dom flesta lever och styr tillsammans och känner fred sinsemellan.",
  "Dom flesta infödda bor i små nationer, som dedikerar mycket av sina resurser för att kriga mot varandra.",
  "Mestadels av befolkningen lever som slavar kontrollerade av tyranniska kejsare.",
  "Dom starkaste nationerna är styrda av prästkungar som har strikt kontroll på informationsflödet, vilket lämnar den generella massan ignorant och ej läskunniga.",
  "Dom mest avancerade nationerna är styrda av välvilliga monarker som ser sin plikt i att möta allas behov.",
  "Dom mest avancerade nationerna är republiker där beslut tas av medborgarna.",
  "Civilisationen har nyligen gått igenom ett krig med kärnbomber, och dom infödda härdar ut i ruinerna av sina föredetta mäktiga städer.",
  "Den största delen av planeten är uppdelad mellan flera superkrafter som existerar i ett tillstånd av konstant spändhet.",
  "Dom mest avancerade nationerna är diktaturer, som använder poliser och teknologisk övervakning för att hålla invånarna i schack.",
  "Planeten är dominerad av en rad med multinationella företag som har undanträngt regeringens roll.",
  "Planetens mäktigaste nationer är symboliskt demokratiska, men deras ledare är korrupta och gör väldigt lite för att förebygga ett gott liv för invånarna.",
  "Planetens mäktigaste nationer är välfungerande demokratier, och invånarna har för det mesta en hög nivå av livskvalité.",
  "Invånarna njuter av ett liv fyllt med kultur och lyx, med automatiserade maskiner som tar hand om deras materiella behov.",
  "Sonden har svårt att förstå dom inföddas kultur, som verkar använda politiska och filosofiska principer som aldrig använts på Jorden.",
];

var ProbingCiv = [
  "Sonden gör undersökningar från hög höjd, och hittar samhällen och tecken på intelligent liv vart den än tittar. Det verkar som att det inte finns en enda del av planeten som är orörd av den infödda civilisationen.",
];

var ProbingRuins = [
  "Sonden undersöker några av dom möjliga strukturerna som fröskeppet observerade från sin omloppsbana, och finner att det är ruiner lämnade av en försvunnen intelligent ras. Ruinerna innehåller mäktiga monument och skrifter som skulle kunna avslöja mer om den försvunna civilisationen.",
  "Sonden undersöker några av dom möjliga strukturerna som fröskeppet observerade från sin omloppsbana, och finner att det är ruiner lämnade av en försvunnen intelligent ras. Ruinerna innehåller avancerade teknologiska artefakter, vissa som fortfarande fungerar, och vetenskapliga databaser som kan bli avkodade.",
  "Sonden undersöker några av dom möjliga strukturerna som fröskeppet observerade från sin omloppsbana, och finner att det är ruiner lämnade av en försvunnen intelligent ras. Ruinerna innehåller ännu fungerande försvarssystem, och sonden lyckas fly med nöd och näppe.",
  "Sonden undersöker några av dom möjliga strukturerna som fröskeppet observerade från sin omloppsbana, men finner att dom är naturliga formationer och inte en produkt av intelligent liv.",
];

var ProbingFeatures = [
  "Dom infödda har redan givit ett erbjudande för asyl till dom mänskliga flyktingarna, och kommer att välkomna dom ifall fröskeppet väljer att landa.",
  "Dom infödda är medvetna om fröskeppets uppdrag, och har gjort det klart och tydligt att dom mänskliga flyktingarna inte är välkomna på deras planet.",
  "Denna planeten är en perfekt simulation skapad av fantastiskt avancerade utomjordingar baserat på data från fröskeppets vetenskapliga och kulturella databaser.",
  "Denna planeten har nyligen blivit terraformad av avancerade utomjordingar för att anpassas till mänskligt liv, och flertalet utomjordiska strukturer sitter i omloppsbana ovanför planetens yta.",
];

var cProbing = new probingText(
  ProbingStart,
  ProbingMoon,
  ProbingBeauty,
  ProbingCaves,
  ProbingPlants,
  ProbingAnimals,
  ProbingSentients,
  ProbingCulture,
  ProbingCiv,
  ProbingRuins,
  ProbingFeatures,
)
