//Инициализация концовки
function ending(difWords, name, nameBecause,
                landing, landingBut, landingBonus, surface, surfaceFull, sky, observation,
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
  this.landingBonus = landingBonus;
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
  "och",
  "men",
  "fastän",

  "Dom döper sin nya värld till ",
  "Dom bygger ett gravmonument för de ",
  " nybyggarna som inte överlevde resan.",
  "Nybyggarna vaknar från deras sömnkammare och undersöker sitt nya hem.",


];

var EndingNameBecause = [
  "på grund av den extrema värmen.",
  "på grund av den extrema kylan.",
  "eftersom den höga gravitationen gör horisonten helt platt.",
  "eftersom att försöka stå i så hög gravitation kräver en hjältemodig insats.",
  "eftersom den låga gravitationen betyder att den har höga klippiga berg.",
  "eftersom allt land har sjunkit under det planetomfattande havet.",
  "eftersom ytan är totalt täckt av is.",
  "på grund av bristen på vatten.",
  "tack vare sitt rika plantliv.",
  "på grund av sina giftiga plantor.",
  "tack vare sina mängder av ätbara plantor.",
  "tack vare det enorma grottsystemet som finns i skorpan.",
  "tack vare sin stora mängd mineraler.",
  "på grund av bristen på mineraler.",
  "tack vare sitt perfekta tillstånd.",
  "eftersom den efterliknar Jorden som dom lämnade bakom sig.",
  "eftersom det är denna värld.",


];

var EndingLanding = [
  "Landningssystemen kontroller skeppets nedstigning, och det",
  "Det skadade landningssystemet kan inte kontrollera skeppets nedstigning till fullo, och det tar skada när det",
  "AI'n använder drivraketerna för att knappt kontrollera skeppets nedstigning, och det"
];

var EndingLandingBut = [
  "plaskar varsamt ner i",
  "varsamt nuddar marken",

  "plaskar ner i",
  "nuddar marken",

  "plaskar våldsamt ner i",
  "kraschar in i",
  "plogar igenom"
];

var EndingLandingBonus = [
  "En skvadron av dom inföddas rymdskepp fångar upp fröskeppet när det närmar sig och leder ner det, medans infödda på land förbereder en landningsplatta.",
  "Dom infödda skickar hastigt upp ett rymdskepp för att leda ner fröskeppet, medans infödda på land förbereder en landningsplats.",
  "Dom infödda skickar upp ett primitivt rymdskepp för att övervaka fröskeppet när det närmar sig, medans infödda på land förbereder en landningsplats.",
];

var EndingSurface = [
  "havet utanför stranden utav en av planetens kontinenter.",
  "det planetomfattande havet.",
  "toppen av det planetomfattande istäcket.",
  "ett fält av utomjordisk vegetation.",
  "den steniga ytan.",
  "ett fält av utomjordisk vegetation innan skeppet stannar."
];

var EndingSurfaceFull = [
  "Fröskeppet kastas runt på ett hav med kilometerhöga vågor, under",
  "Fröskeppet guppar på ytan av ett hav med långsamma, höga vågor, under",
  "Fröskeppet flyter på ytan av ett hav som sträcker sig till horisonten, under",
  "Fröskeppet flyter på ytan av ett lugnt hav som sträcker sig till horisonten, under",
  "Fröskeppet vilar på ytan av ett spegelblankt hav under",

  "Skogar med omöjligt slanka utomjordiska plantor sträcker sig flera kilometer mot",
  "Skogar med höga utomjordiska plantor sträcker sig hundratals meter mot",
  "Skogar med utomjordisk vegetation reser sig under",
  "Skogar med korta tjocka utomjordiska plantor reser sig under",
  "Platta fält med utomjordisk mossa sträcker ut sig under",

  "Kilometerhöga torn av is sträcker sig mot",
  "Höga och hackiga torn av is sträcker sig mot",
  "Hackiga klippor av is sträcker sig mot",
  "Ett skrovligt fält av is sträcker ut sig under",
  "Ett helt platt fält av is sträcker ut sig under",

  "Ett hackigt landskap av höga kraterväggar och tornande stenbumlingar sträcker ut sig under",
  "Ett hackigt, kraterfyllt landskap sträcker ut sig under",
  "Ett stilla, kraterfyllt landskap sträcker ut sig under",
  "Ett stilla landskap, helt platt förutom några grunda kratrar, sträcker ut sig under",
  "Ett stilla, platt landskap sträcker ut sig under",

  "Ett landskap med hällmark och omöjligt höga berg sträcker ut sig under",
  "Ett landskap med enorma stenbumlingar och höga berg sträcker ut sig under",
  "Ett kargt stenigt landskap sträcker ut sig under",
  "Ett platt och stenigt landskap sträcker ut sig under",
  "Ett helt platt och kargt landskap sträcker ut sig under",
];

var EndingSky = [
  "en blå himmel.",
  "en ljusblå himmel.",
  "en svart, stjärnfylld himmel.",
  "en främmande himmel.",
  "en giftig himmel.",
  "en himmel fylld utav frätande moln."
];

var EndingObservation = [

  "Ett hackigt fält av is sträcker ut sig under en främmande himmel.",
  "Ett helt platt och kargt landskap sträcker ut sig under en giftig himmel.",
  "Ett landskap med hällmark och omöjligt höga berg sträcker ut sig under en himmel fylld utav frätande moln.",
  "Ett stilla, kraterfyllt landskap sträcker ut sig under en svart, stjärnfylld himmel.",
  "Ett kargt stenigt landskap sträcker ut sig under en ljusblå himmel."
];

var EndingMoon = [
  "Nybyggarna använder det som finns kvar av fröskeppet för att bygga nya rymdskepp kapabla att nå planetens metallrika måne,",
  "och bryter metallen för att öka planetens redan rika resurser.",
  "och bryter metallen för att smått fylla ut planetens brist på resurser.",
  "Innan nybyggarna har kunnat etablera sin teknologiska bas så slits den förfallna månen isär i sin omloppsbana och regnar meteoriter mot ytan. Vissa av nybyggarna över, men mycket av deras teknologi blir förstört.",
];

var EndingAtmosphere = [
  "Dom kan lämna skeppet utan andningsutrustning,",
  "Dom kan lämna skeppet med minimal andningsutrustning,",
  "Dom kan lämna skeppet med full andningsutrustning",
  "Dom kan lämna skeppet i otympliga rymddräkter som skyddar dom från den giftiga atmosfären",
  "Dom kan bara lämna skeppet i fordon som är specialbyggda för att klara av den frätande atmosfären",
  "Dom kan lämna skeppet i otympliga rymddräkter som skyddar dom från vakuumet"
];

var EndingAtmosphereBut = [
  " men problem med andningsutrustningen leder till att ",
  " nybyggare kvävs till döds.",
  " men problem med dräkten leder till att ",
  " nybyggare blir förgiftade",
  " men den frätande atmosfären äter igenom tätningen i flera konstruktionsfordon och dödar ",
  " nybyggare",
  " men problem med dräkten leder till att ",
  " nybyggare kvävs till döds,"
];

var EndingGravity = [
  "Dom kan röra sig med enkelhet under den jordliknande gravitationen.",
  "Den höga gravitationen gör arbetet mycket svårare.",
  "Den låga gravitationen gör arbetet en smula svårare att utföra än på Jorden.",
  "Den krossande gravitationen innebär att dom knappt kan röra sig utan mekanisk hjälp,",
  "Den låga gravitationen gör arbetet en smula svårare att utföra än på Jorden,"
];

var EndingGravityBut = [
  "men",
  "och",
  " arbetsolyckor dödar",
  " nybyggare.",
  " nybyggare dör av gravitationsrelaterade hälsoproblem.",
  " nybyggare dör när halvfärdiga byggen kollapsar.",
];


var EndingTemperature = [
  "med tunna kläder i den behagliga temperaturen",
  "och skyddskläder för att klara av den extrema värmen",
  "och tunga kläder för att skydda sig mot den bitande kylan",
  "och blyheta värmen",
  "och ventilerade dräkter för att skydde dom från den blyheta värmen",
  "och nära absolut nollgradig kyla",
  "med uppvärmda dräkter för att överleva den nästan absolut nollgradiga kylan",
];

var EndingTemperatureBut = [
  " fler dör när ett av deras skydd smälter i värmen.",
  " fler dör när ett av deras skydd spricker i bitar i den extrema kylan.",
  "och ",

];

var EndingWater = [
  "Dom bygger sitt samhälle vid en flod som rinner ihop med ett av haven, vilket ger dom allt vatten dom kan behöva.",
  "Dom extraherar vatten från planetens norra istäcke.",
  "Dom bygger sitt samhälle på en flytande plattform komplett med filter för att dra vatten från det planetomfattande havet.",
  "Dom bygger sitt samhälle uppe på isen som täcker planetens yta, som dom kan extrahera vatten ifrån.",
  "Dom tvingas dela på den lilla mängd vatten som dom kan extrahera från atmosfären, ",
  "Dom tvingas dela på den extremt lilla mängd vatten som dom kan extrahera från planetens stenar, "
];

var EndingWaterBut = [
  "och vattenbristen tar död på ",
  " nybyggare.",
  "misslyckandet att odla grödor tar död på ",
  " nybyggare.",
  ""
];

var EndingConstruction = [
  "Nybyggarna börjar bygga ett samhälle med hjälp av fröskeppets konstruktionsrobotar.",
  "Nybyggarna börjar bygga ett samhälle med hjälp av fröskeppets skadade konstruktionsrobotar.",
  "Nybyggarna börjar bygga ett samhälle med hjälp av fröskeppets lilla mängd intakta konstruktionsrobotar.",
  "Nybyggarna börjar bygga ett samhälle utan hjälp av fröskeppets trasiga konstruktionsrobotar.",
];

var EndingPlants = [
  "Planetens plantliv är extremt giftigt för människor, och ",
  " nybyggare dör innan dom hinner rensa bort det från sitt samhälle.",
  "Problem med förvaringslagret leder till att kolonins matförråd blir förgiftat av dom giftiga plantorna, och ",
  " nybyggare dör.",

  "Nybyggarna skördar dom härdiga plantorna för mat, vilket tar press ifrån mängden vatten som dom kan extrahera från stenarna",
  "Nybyggarna skördar plantorna för mat, vilket tar press ifrån mängden vatten som dom kan extrahera från kondens i atmosfären",
  "Nybyggarna skördar plantor som växer ovanpå istäcket till mat, och drar dricksvatten från andra delar av isen",
  "Nybyggarna skördar den flytande vegetationen till mat och drar dricksvatten från havet",
  "Nybyggarna skördar plantorna till mat och får dricksvatten från den norra polarisen",
  "Dom bygger sitt samhälle vid en flod som rinner ihop med ett av haven, och skördar plantor till mat",

];

var EndingNatives = [
  "Fröskeppet blir snabbt omringat av en grupp med försiktiga infödingar.",
  "Fröskeppet blir snabbt omringat av en grupp med infödda soldater, lärda män, präster och diplomater.",
  "Fröskeppet blir snabbt omringat av en grupp med infödda soldater, vetenskapsmän och diplomater.",

  "Dom två släktena lyckas med att föra en konversation, och nybyggarna får veta att infödingarna kallar sin planet för ",


  "",

];

var EndingNativeInteractions = [
  "Medans nybyggarna expanderar sitt samhälle så måste dom även hitta ett sätt att dela sitt nya hem med dom infödda,",

  "vägledda av den stora mängden historisk information i kulturdatabasen.",
  "vägledda av den för det mesta intakta historiska informationen i kulturdatabasen.",
  "vägledda av den knappa informationen dom kan rädda från kulturdatabasen.",
  "utan någon hjälp av den förstörda kulturdatabasen.",

  "Skillnaden i nivå av teknologisk utveckling mellan nybyggarna och dom infödda försvårar byggandet av relationer,",
  "Likheten i nivån av teknologisk utveckling mellan nybyggarna och dom infödda gör det enkelt att bygga relationer,",

  "dom inföddas kultur gör att dom är fientliga mot dom främmande nykomlingarna.",
  "dom inföddas kultur gör att dom är extremt misstänksamma mot främlingarna.",
  "dom inföddas kultur gör att dom håller sig på sin vakt mot främlingarna.",
  "dom inföddas kultur gör att dom är varsamma men accepterande mot immigranterna.",
  "dom inföddas kultur gör att dom är välkomnande mot flyktingarna.",

  "Tack vare AI'ns interaktioner med planetens infödda under fröskeppets ingång så har dom infödda redan gett ett erbjudande om asyl för människorna, och är villiga att se förbi deras skillnader för att kunna leva tillsammans.",
  "Under fröskeppets ankomst så gjorde infödingarna det tydligt och klart att människorna inte är välkomna på deras planet.",

  "Dom två raserna bor efter en tid i gemensamma samhällen, där somliga från båda raserna tar efter livsstilar från varandra.",
  "Dom två raserna bor efter en tid i helt separata samhällen, men med goda relationer sinsemellan.",
  "Dom två raserna bor tillslut på helt separata delar av planeten och har minimal kontakt med varandra.",

  "Konflikter eskalerar till krig, som slutar med att människorna tar dom infödda som slavar.",
  "Konflikter eskalerar till krig, som slutar med att dom infödda tar människorna som slavar.",

  "Konflikterar eskalerar till krig, som slutar med att dom infödda blir helt utplånade.",
  "Konflikterar eskalerar till krig, som slutar med att människorna blir helt utplånade.",
];

var EndingAnimals = [
  "Dom tar vara på arbetskraften som djurlivet ger dom, så att nybyggarna inte behöver ta ut sig själva under den krossande gravitationen",
  "Dom tar vara på arbetskraften som djurlivet ger dom, vilket underlättar arbete i den höga gravitationen",
  "Dom tar vara på arbetskraften som djurlivet ger dom",
  "Dom tar vara på arbetskraften från det anpassat smidiga djurlivet, vilket underlättar arbetet i den låga gravitationen",
  "Dom tar vara på arbetskraften från det anpassat smidiga djurlivet, vilket underlättar arbetet i den extremt låga gravitationen",

  "Nybyggarna lyckas hålla undan planetens outtröttligt fientliga djurliv, men ",
  " nybyggare dör innan dom hunnit sätta upp ett skyddsstängsel.",
  "Det fientliga djurlivet anstormar kolonin och dödar ",
  " nybyggare.",

];

var EndingCaves = [
  "Jordbävningar har ihjäl ",
  " nybyggare innan dom hinner göra färdigt byggnader som kan motstå dom.",
  "En jordbävning jämnar den halvfärdiga kolonin med marken, och dödar ",
  " nybyggare.",

  "Dom bygger sitt samhälle inuti lufttäta och isolerade grottor, vilket ger dom ett färdigt skydd mot planetens dödliga atmosfär och temperatur.",
  "Dom bygger sitt samhälle inuti lufttäta isolerade grottor, vilket ger dom ett färdigt skydd mot planetens dödliga atmosfär och temperatur.",
  "Dom bygger sitt samhälle inuti isolerade grottor, vilket ger dom ett färdigt skydd mot planetens dödliga temperatur.",
  "Dom bygger sitt samhälle nära grottor som agerar som lagerutrymme.",
];

var EndingRuins = [
  "När dom har byggt färdigt sitt samhälle och ordnat med matförråd så går nybyggarna på expedition till närliggande ruiner.",
  "Utforskarna studerar skulpturer, väggmålningar och främmade texter som fyller ruinerna. Även innan dom har översatt texterna så lär dom sig mycket om kulturen och anledningen till dess eventuella undergång, kunskap som kan hjälpa dom att skapa sin egna kultur på denna nya värld.",
  "Dom",
  "Utforskarna",
  "hittar även avancerade utomjordiska maskiner, varav några fungerar än.",
  "Genom att demontera och studera dessa maskiner så avancerar dom sin vetenskapliga nivå långt förbi vad Jordens civilisation hade nått när fröskeppet lämnade sitt hem.",
  "Genom att demontera och studera dessa maskiner så kan dom fylla några av tomrumen i den skadade vetenskapsdatabasen.",
  "Dock råkar dom också",
  "Utforskarna råkar",
  "utlösa ett vilande försvarssystem, vilket dödar ",
  " nybyggare."

];

var EndingFeatures = [
  //Наблюдение
  "Dom mystiska utomjordiska strukturerna går som en glittrande remsa över natthimlen, men utomjordingarna gör inget för att störa kolonins kulturella utveckling.",
  "Gåtfulla objekt kommer periodvis ner från strukturerna i omloppsbana, och nybyggare som bor nära dessa objekt märks vara mer empatiska och samarbetsvilliga än dom annars hade varit.",
  "Gåtfulla objekt kommer periodvis ner från strukturerna i omloppsbana, och nybyggare som bor nära dessa objekt märks vara mer själviska och konfliktbenägna än dom annars hade varit.",
  //Красота
  "Planetens otroliga skönhet gör livet mycket behagligt, vilket hjälper nybyggarna att bygga ett bättre samhälle.",
  "Planetens enorma fulhet höjer spänningarna mellan nybyggarna, vilket gör det svårare att bygga ett fridfullt samhälle.",
  //Симуляция
  "",
  "",
  "",
];

var EndingScience = [
  "Nybyggarna använder den utomjordiska vetenskapen för att skapa en nivå av teknologi som ligger bortom drömmarna av dom som byggt fröskeppet.",
  "Nybyggarna upprätthåller en nivå av teknologi som motsvarar Jordens när fröskeppet lämnade sitt hem.",
  "Nybyggarna misslyckas med underhåll av sina avancerade datorer men fortsätter använda enklare elprylar och maskiner.",
  "Nybyggarna blir tvungna att ge upp elektricitet men lyckas bygga maskiner och fabriker som liknar Jordens industriella era.",
  "Nybyggarna går över till en medeltida nivå av tenkologi.",
  "Nybyggarna går över till en teknologi baserad på stenverktyg.",
  "Nybyggarna går över till en teknologi baserad på sofistikerade sten-, trä- och bronsverktyg.",
  "Nybyggarna övergår till en teknologi baserad på sofistikerade sten- och träverktyg.",
  "Nybyggarna behåller endast grundläggande kunskap om stenverktyg och enkelt lantbruk.",
  "Nybyggarna tappar nästan all kunskap om lantbruk och järnsmide, och överlever som jägare och samlare med hjälp av enkla stenverktyg.",
  "Nybyggarna tappar all vetenskaplig kunskap och glider tillbaka till ett levnadssätt motsvarande före stenåldern."
];

var EndingScienceBut = [
  "Planeten kan inte bevara mänskligt liv utan teknologisk assistans, men före deras teknologi fallerar så hinner nybyggarna få upp robusta isolerade lokaler.",
  "och utför genetiska modifikationer på sin avkomma för att dom ska överleva i den låga gravitationen.",
  "och utför genetiska modifikationer på sin avkomma för att dom ska överleva i den höga gravitationen."
];

var EndingSustain = [
  "Planeten kan inte bevara mänskligt liv utan teknologisk assistans,",

  "och nybyggarnas efterkommande dör när dom inte klarar av att hålla skicket på dom lufttäta byggnaderna.",
  "och nybyggarnas efterkommande dör när byggnaderna inte längre kan stå emot den extrema temperaturen",
  "och nybyggarnas efterkommande dör av hälsoproblem orsakade av den väldigt",
  "och nybyggarnas efterkommande dör när systemen för vattenfiltrering slutar fungera.",

  "men innan teknologin slutar fungera så hinner nybyggarna",
  "bygga robusta",
  "lufttäta",
  "isolerade",
  "byggnader",

  "utför genetiska modifikationer på sin avkomma för att överleva i ",
  " gravitationen",
  "fixar automatiserad återvinning av vatten som fungerar fortlöpande utan underhåll.",
  "",

]

var EndingCulture = [
  "Diktatorn som ersätta en av dom originella nybyggarna tar snabbt kontroll över kolonin och skapar ett auktoritärt styre.",

  "Kulturdatabasen är fylld med historisk information som hjälper nybyggarna att välja ett statsstyre, och även fylld med mycket konst och literatur som underhåller och inspirerar dom.",
  "Även fast delar av kulturdatabasen saknas så innehåller den mycket historisk information som instruerar nybyggarna i hur dom ska bygga sitt samhälle, och det finns mycket konst och literatur som inspirerar dom.",
  "Nybyggarna söker igenom den svårt skadade kulturdatabasen, och lyckas återfinna lite information om Jordens historia och kultur för att vägleda och inspirera dom.",
  "Med en trasig kulturdatabas så vet efterkommande ingenting om Jordens historia och kultur förutom vad dom ursprungliga nybyggarna kan berätta för dom.",

  "Dom svåra förlusterna som nybyggarna genomlidit gör det väldigt svårt att bygga ett nytt samhälle.",
  "Förlusterna som nybyggarna genomlidit gör det svårare att bygga ett nytt samhälle.",
];

var EndingPolitics = [
  "Jordens kulturdatabas har fått påökning av utomjordisk kulturell kunskap, och nybyggarna använder detta för att bygga ett samhälle helt olikt vad fröskeppets uppfinnare kunnat föreställa sig, där varje individ lever ett liv av frid, lycka och spirituell uppfyllelse.",
  "Den intakta kulturdatabasen bevaras i digitala filer som nybyggarna har tillgång till. Dom arbetar tillsammans för att bygga ett jämlikt samhälle där teknologi tar hand om folkets materiella behov, vilket ger dom frihet att leva liv fyllda med konst, lyx och spirituell uppfyllelse.",
  "Den intakta kulturdatabasen bevaras i digitala filer som nybyggarna har tillgång till. Dom lägger grunden för en demokrati där alla invånare får studera och bli engagerade.",
  "Den intakta kulturdatabasen bevaras i digitala filer som nybyggarna har tillgång till. Dom lägger grunden för en demokrati, men den visar sig vara ett enkelt mål för korruption, och rika individer tar över styret helt.",
  "Den intakta kulturdatabasen bevaras i digitala filer som nybyggarna har tillgång till. Dom försöker att bygga upp ett demokratiskt kapitalistiskt samhälle, men regeringen blir en spelpjäs åt dom rika företagen vilka således regerar planeten till sina ägares fördel.",
  "Kolonin utvecklas till en högteknologisk polisstat, där invånarna lever under konstant övervakning av den oåtkomliga härskarklassen, och minsta åsiktsskillnad blir våldsamt tystat. Kulturdatabasen förblir förvarad, men åtkomst till den är strikt begränsad av staten.",
  "Kolonin delas upp i flera stora nationer vilkas ekonomi blir fokuserad på att kriga med varandra. Nybyggarna försöker att bevara det som återstår av kulturdatabasen, men mycket av den går förlorat antingen på grund av skada från krig, eller under lager av regeringens revisionistpropaganda.",
  "Kolonin delas upp i flera stora nationer som krigar mot varandra, tills besinningslösa ledare startar kärnvapenkrig som förstör samhällenas infrastruktur. Dom överlevande nybyggarna fortsätter leva i den post-nukleära ödemarken. Det som fanns kvar av kulturdatabasen förloras, och vad nybyggarna minns av Jorden blandas ihop med historier om kolonin före kriget.",

  "Nybyggarna använder den kvarvarande kulturdatabasen för att vägleda dom i skapandet av en republik baserad på frihet och lika villkor.",
  "Dom första ledarna av kolonin blir grundare av en rad välvilliga monarker, som ser det som sin plikt att vägleda kolonin och skydda den återskående kunskapen om Jorden.",
  "Den kvarvarande kunskapen om Jorden blir exklusiv för prästklassen, bortgömda i låsta bibliotek. Den största delen av befolkningen ser Jorden som ett nytt paradis som dom får komma till som belöning för att leva sina liv i tjänst för den förtryckande teokratin.",
  "Kolonin utvecklas till en slavstat, där den största delen av invånarna sliter med att bygga stora monument i guld åt sina kejsare, eller kämpar och dör i krig. Mycket av kunskapen om Jorden försvinner, då kejsarna bara bevarar det som kan användas för att backa deras regim.",
  "Kolonin utvecklas till en grupp småstater som är i konstant krig med varandra. Det som fanns kvar av kulturdatabasen förloras i konflikterna.",

  "Kulturdatabasen blir grunden för en rik muntlig historia. Kolonin delas upp i mindre stammar, där varje stam styrs kollektivt av sina medlemmar, och stammarna kan existera tillsammans under frid.",
  "Kulturdatabasen blir grunden för en rik muntlig historia, och en grupp välvilliga hövdingar tar på sig att beskydda både sin historia och sina stammar.",
  "Kulturdatabasen blir grunden för nybyggarnas muntliga historia, men en grupp av grymma hövdingar förvanskar kulturen och använder den för att cementera sitt egna styre.",
  "Kolonin utvecklas till många mindre stammar, som är i konstant krig med varandra. Informationen från kulturdatabasen blir nästan helt bortglömd, och Jorden minns bara som hem åt mäktiga mytologiska krigare.",
  "Nybyggarna sjunker bakåt till primitiv barbari, och all kunskap om Jordens historia och kultur blir bortglömd under den dagliga stressen för överlevnad.",

];

var EndingResources = [
  "Planeten är rik på metaller och andra resurser,",
  "Planeten är fattig på metaller och andra resurser,",
  "Planeten har inga tillgängliga metaller eller andra resurser,",
];

var EndingResourcesBut = [
  //none
  " och nybyggarna kan inte uppehålla en hög nivå av teknologi, även fast vetenskapsdatabasen är helt intakt.",
  " så nybyggarna kan inte uppehålla en hög nivå av teknologi, även fast vetenskapsdatabasen är mestadels intakt.",
  " så nybyggarna har svårt att få användning av vad dom kan få ut av vetenskapsdatabasen. ",
  " och den information från vetenskapsdatabasen som hade kunnat hjälpa dom har blivit förstörd.",

  //poor
  " men vetenskapsdatabasen innehåller mängder av information som hjälper dom att använda det som finns till hands.",
  " men den skadade vetenskapsdatabasen innehåller mycket information som hjälper dom att använda det som finns till hands. ",
  " och den svårt skadade vetenskapsdatabasen gör det svårt att få användning av det som finns till hands.",
  " och utan vetenskapsdatabasen så är det svårt att få användning av det som finns till hands.",

  //rich
  " och vetenskapsdatabasen innehåller mängder av information om hur dom ska få användning av allt.",
  " och den skadade vetenskapsdatabasen innehåller mycket information om hur dom ska få användning av allt.",
  " dock med en skadad vetenskapsdatabas så innebär det att nybyggarna måste återuppfinna mycket av teknologin som behövs för att få användning av resurserna.",
  " dock utan sin vetenskapsdata så innebär det att nybyggarna måste återuppfinna den mesta teknologin som behövs för att få användning av resurserna.",
];

  var cEnding = new ending(
    EndingDifWords,
    planetName,
    EndingNameBecause,

    EndingLanding,
    EndingLandingBut,
    EndingLandingBonus,
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
