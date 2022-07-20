//Инициализация концовки
function ending(difWords, name, nameBecause,
                landing, landingBut, landingBonus, surface, surfaceFull, sky, observation,
                construction, atmosphere, atmosphereBut,
                temperature, temperatureBut,
                plants, water, waterBut, animals, moon, caves, ruins, features,
                resources, resourcesBut, science, scienceBut, sustain,

                gravity, gravityBut,
                natives, nativeInteractions,
                PSCTInteractions, culture,

                politics,
                summary,
                gameOverText) {

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
  this.PSCTInteractions = PSCTInteractions;

  this.culture = culture;
  this.politics = politics;

  this.summary = summary;
  this.gameOverText = gameOverText;

}

var EndingDifWords = [
  "en",
  "maar",
  "hoewel",

  "Ze noemen hun wereld ",
  "Ze hebben een gedenkplaats gemaakt voor de ",
  " kolonisten die hun reis niet overleefd hebben.",
  "De kolonisten ontwaken uit de hibernatie kamers en verkennen hun nieuwe thuis.",


];

var EndingNameBecause = [
  "vanwege zijn extreme hitte.",
  "vanwege zijn extreme kou.",
  "omdat zijn hoge zwaartekracht de horizon compleet vlak maakt.",
  "omdat opstaan onder zijn hoge zwaartekracht enorme inspanning vereist.",
  "omdat zijn lage zwaartekracht veel hoge, ruige bergen heeft opgeleverd.",
  "omdat al zijn land is gezonken onder de planeetoverspannende oceaan.",
  "omdat zijn oppervlak geheel bedekt is met ijs.",
  "vanwege zijn gebrek aan water.",
  "vanwege zijn weelderige plantenleven.",
  "vanwege zijn vele giftige planten.",
  "vanwege zijn overvloedige hoeveelheid eetbare planten.",
  "vanwege zijn uitgebreide labyrint-achtige grottenstelsels.",
  "vanwege zijn overvloedige hoeveelheid mineralen.",
  "vanwege zijn gebrek aan mineralen.",
  "vanwege zijn perfecte condities.",
  "omdat het lijkt op de aarde die zij achtergelaten hebben.",
  "omdat dit de wereld is.",


];

var EndingLanding = [
  "Het landingssysteem bestuurt de afdaling van het zaadschip, waarna het ",
  "Het beschadigde landingssysteem kan de afdaling van het zaadschip niet goed besturen, en lijdt daardoor schade wanneer het "
  "De AI gebruikt de bewegings-stuwraketten om het zaadschip moeizaam te laten afdalen, en het "
];

var EndingLandingBut = [
  "zachtjes neerplonst in ",
  "zachtjes landt op ",

  "neerplonst in ",
  "landt op ",

  "hard neerplonst in ",
  "crasht op ",
  "ploegt door ",
];

var EndingLandingBonus = [
  "Een vloot van inheemse ruimteschepen onderschept het al naderende zaadschip en begeleidt het naar beneden, terwijl de inheemse bevolking een landingsplek voorbereidt op de grond.",
  "De inheemse beschaving lanceert haastig een ruimteschip om het zaadschip naar beneden te begeleiden,terwijl de inheemse bevolking een landingsplek voorbereidt op de grond.",
  "De inheemse beschaving lanceert een grof gebouwd ruimtevoertuig om het al naderende zaadschip te observeren, terwijl de inheemse bevolking een landingsplek voorbereidt op de grond.",
];

var EndingSurface = [
  "de oceaan net voor de kust van een van de continenten.",
  "de planeetoverspannende oceaan.",
  "de bovenkant van de planeetoverspannende ijskap.",
  "een veld met buitenaardse vegetatie.",
  "de rotsachtige ondergrond.",
  "een veld met buitenaardse vegetatie, voordat het tot stilstand komt.",
];

var EndingSurfaceFull = [
  "Het zaadschip slingert op een oceaan met langzame, kilometershoge golven, onder",
  "Het zaadschip schommelt op een oceaan met langzame, hoge golven, onder",
  "Het schip drijft op het oppervlak van een oceaan die strekt tot aan de horizon, onder",
  "Het schip drijft op het oppervlak van een kalme ocean die strekt tot aan de horizon, onder",
  "Het schip rust op het oppervlak van een oceaan zo glad als een spiegel, onder",

  "Bossen met onmogelijk slanke buitenaardse planten reiken kilometers ver onder",
  "Bossen met lange buitenaardse planten reiken tot honderden meters ver onder",
  "Bossen met buitenaardse vegetatie strekken ver uit onder",
  "Velden met plompe, dikke buitenaardse planten strekken ver uit onder",
  "Vlakke velden met buitenaards mos strekken ver uit onder",

  "Kilometershoge spitsen van ijs reiken tot ver in",
  "Lange, getande spitsen van ijs reiken tot ver in ",
  "Getande ijsscherven strekken ver uit onder",
  "Een gekreukeld veld van ijs strekt ver uit onder",
  "Een perfect vlak veld van ijs strekt ver uit onder",

  "Een grillig landschap van hoge kraterwanden en torenhoge rotsstukken strekt ver uit onder",
  "Een grillig, met kraters gevuld landschap strekt ver uit onder",
  "Een perfect stil, met kraters gevuld landschap strekt ver uit onder",
  "Een perfect stil landschap, afgezien van enkele ondiepe kraters, strekt ver uit onder",
  "Een perfect stil, vlak landschap strekt ver uit onder",

  "Een landschap van spichtige rotsuitstulpingen en onmogelijk hoge bergen strekt ver uit onder",
  "Een landschap van enorme rotsblokken en torenhoge bergen strekt ver uit onder",
  "Een kaal, rotsachtig landschap strekt ver uit onder",
  "Een vlak, rotsachtig landschap strekt ver uit onder",
  "Een perfect vlak, kaal landschap strekt ver uit onder",
];

var EndingSky = [
  "een blauwe lucht.",
  "een lichtblauwe lucht.",
  "een zwarte, sterrengevulde hemel.",
  "een buitenaardse lucht.",
  "een giftige lucht.",
  "een lucht, gevuld met zure wolken."
];

var EndingObservation = [

  "Een gekruikeld veld van ijs strekt ver uit onder een buitenaardse lucht.",
  "Een perfect vlak, kaal landschap strekt ver uit onder een giftige lucht.",
  "Een landschap van spichtige rotsuitstulpingen en onmogelijk hoge bergen strekt ver uit onder een lucht, gevuld met zure wolken.",
  "Een perfect stil, met kraters gevuld landschap strekt ver uit onder een zwarte, sterrengevulde hemel.",
  "Een kaal, rotsachtig landschap strekt ver uit onder een lichtblauwe lucht."
];

var EndingMoon = [
  "De kolonisten gebruiken wat over is van het zaadschip om een ruimteschip te maken, in staat om de metaalrijke maan te kunnen bereiken,",
  "en deze te mijnen, om zo de planeet zijn al rijke hoeveelheid grondstoffen aan te vullen.",
  "en deze te mijnen, om zo te compenseren voor het gebrek aan grondstoffen op de planeet.",
  "Voordat de kolonisten hun technologische basis tot stand hebben gebracht, vervalt de maan van de planeet in zijn baan en valt uit elkaar, het oppervlak te bombarderen met meteorieten in het verloop. Sommige van de kolonisten overleven het, maar veel van hun technologie is vernietigd.",
];

var EndingAtmosphere = [
  "Ze kunnen het schip alleen verlaten in voertuigen, speciaal gemaakt om te weerstaan tegen de corrosieve ",
  "Ze kunnen het schip verlaten in dikke omgevingspakken die hen beschermen tegen de giftige ",
  "Ze kunnen het schip verlaten in dikke omgevingspakken die hen beschermen tegen de ",
  "Ze kunnen het schip verlaten zonder ademhalingsapparatuur, al dragende ",
  "Ze kunnen het schip verlaten met minimale ademhalingsapparatuur en ",
  "Ze kunnen het schip verlaten met ademhalingsapparatuur en ",

  "atmosfeer",
  "atmosfeer en ",
  "vacuüm",
  "vacuüm en ",

  "gloeiende hitte",
  "vriezende kou",
  "loodsmeltende hitte",
  "extreem koude temperaturen",  
];

var EndingAtmosphereBut = [
  "maar de corrosieve atmosfeer bijt door de afdichtingen van enkele constructie voertuigen en doodt 1 kolonist",
  "maar de corrosieve atmosfeer bijt door de afdichtingen van enkele constructie voertuigen en doodt ",
  " kolonisten",

  "but a suit failure leads to 1 colonist being poisoned",
  "but suit failures lead to ",
  " kolonisten being poisoned",

  "maar falende pakken lijden tot 1 verstikte kolonist",
  "maar falende pakken lijden tot ",
  " verstikte kolonisten",

  "maar falende ademhalingsapparatuur lijdt tot 1 verstikte kolonist",
  "maar falende ademhalingsapparatuur lijdt tot ",
  " verstikte kolonisten",

  "maar ondanks de adembare atmosfeer, sterft 1 kolonist aan blootstelling voordat hun onderdakken voltooid zijn",
  "maar ondanks de adembare atmosfeer, sterven ",
  " kolonisten aan blootstelling voordat hun onderdak voltooid is",
];

var EndingGravity = [
  "Ze kunnen makkelijk bewegen onder de aardachtige zwaartekracht.",
  "De hoge zwaartekracht maakt het werkt moeilijker.",
  "De lage zwaartekracht maakt het werk iets moeilijker dan dat het op aarde geweest zou zijn.",
  "De zwaar drukkende zwaartekracht betekend dat ze nauwelijke kunnen bewegen zonder mechanische assistentie,",
  "De extreem lage zwaartekracht maakt het werk moeilijker dan dat het op aarde geweest zou zijn,"
];

var EndingGravityBut = [
  "maar",
  "en",
  " constructie ongelukken doden",
  " kolonisten.",
  " kolonisten sterven aan zwaartekracht gerelateerde gezondheids problemen.",
  " kolonisten sterven wanneer deels afgemaakte gebouwen instorten.",
];


var EndingTemperature = [
  "lichte kleding bij aangename temperaturen",
  "beschermende kleding om de gloeiende hitte te weerstaan",
  "dikke, warme kleding om hen te beschermen tegen de vriezende kou",
  "gekoelde kleding om hen te beschermen tegen de loodsmeltende hitte",
  "verwarmde pakken om te overleven bij extreem koude temperaturen",
];

var EndingTemperatureBut = [
  "en nog een sterft wanneer een van hun onderdakken wegsmelt in de hitte."
  "en nog ",
  " meer sterven wanneer een van hun onderdakken wegsmelt in de hitte.",

  "en nog een sterft door oververhitting wanneer hun koelsystemen uitvallen.",
  "en nog ",
  " meer sterven door oververhitting wanneer hun koelsystemen uitvallen.",

  "en een storing in het temperatuur-regelsysteem doodt nog eentje.",
  "en storingen in het temperatuur-regelsysteem doden nog ",
  " meer.",

  "en nog 1 meer vriest dood wanneer het verwarmingssysteem het begeeft.",
  "en nog ",
  " meer vriezen dood wanneer het verwarmingssysteem het begeeft.",

  "en nog 1 sterft wanneer een van hun onderdakken verbrijzeld in de extreme kou.",
  "en nog",
  " meer sterven wanneer een van hun onderdakken verbrijzeld in de extreme kou.",

  "maar 1 kolonist sterft wanneer een deels-voltooide constructie wegsmelt in de hitte.",
  "maar ",
  " kolonisten sterven wanneer een deels-voltooide constructie wegsmelt in de hitte.",

  "maar 1 kolonist sterft door oververhitting wanneer hun koelsystemen uitvallen.",
  "maar ",
  " kolonisten sterven door oververhitting wanneer hun koelsystemen uitvallen.",

  "maar storingen in het temperatuur-regelsysteem doodt 1 kolonist.",
  "maar storingen in het temperatuur-regelsysteem doden ",
  " kolonisten.",

  "maar 1 kolonist vriest dood wanneer het verwarmingssysteem het begeeft.",
  "maar ",
  " kolonisten vriezen dood wanneer het verwarmingssysteem het begeeft.",

  "maar 1 kolonist sterft wanneer een deels-voltooide constructie verbrijzeld in de extreme kou.",
  "maar ",
  " kolonisten sterven wanneer een deels-voltooide constructie verbrijzeld in de extreme kou.",
];
//TO HERE!
var EndingWater = [
  "Ze bouwen hun nederzetting bij een rivier die uitmondt in een van de oceanen, welke hen voorziet in al het water wat zij nodig hebben.",
  "Ze mijnen water uit de ijskap op de noordpool van de planeet.",
  "Ze bouwen hun nederzetting op een drijvend platform met waterfilters om zo in hun behoefte te voorzien op de planeetoverspannende oceaan.",
  "Ze bouwen hun nederzetting op en planeetoverspannende ijskap, waarin zij naar water mijnen.",
  "Ze moeten de kleine hoeveelheid water die ze uit de atmosfeer halen rantsoeneren.",
  "Ze moeten voorzichtig de kleine hoeveelheid water uit de rotsen van de planeet rantsoeneren, "
];

var EndingWaterBut = [
  "en watertekorten doden ",
  " kolonisten.",
  "mislukte oogsten doden ",
  " kolonisten.",
  ""
];

var EndingConstruction = [
  "De kolonisten beginnen de constructie van een nederzetting met de hulp van de constructie robots uit het zaadschip.",
  "De kolonisten beginnen de constructie van een nederzetting met de hulp van de beschadigde constructie robots uit het zaadschip.",
  "De kolonisten beginnen de constructie van een nederzetting met de hulp van de enkele overgebleven constructie robots uit het zaadschip.",
  "De kolonisten beginnen de constructie van een nederzetting zonder de hulp van de vernielde constructie robots uit het zaadschip.",
];

var EndingPlants = [
  "Het plantenleven op de planeet is erg giftig voor mensen, en ",
  " kolonisten sterven voordat de natura kunnen verwijderen van hun nederzetting.",
  "Een falende opslag leidt tot een vergiftiging in de voedselvoorziening van de kolonie door giftige inheemse planten, en ",
  " kolonisten sterven.",

  "De kolonisten bebouwen de winterharde inheemse planten voor voedsel, wat de druk afneemt van de hoeveelheid water die zij chemisch uit de rotsen halen",
  "De kolonisten bebouwen de inheemse planten voor voedsel, wat de druk afneemt van de hoeveelheid water die zij condenseren uit de atmosfeer",
  "De kolonisten bebouwen de planten groeiend op de ijskap voor voedsel, en mijnen drinkwater uit andere delen van de ijskap",
  "De kolonisten bewerken de drijvende vegetatie voor voedsel en halen drinkwater uit de oceaan",
  "De kolonisten bebouwen de inheemse planten voor voedsel, en mijnen water uit de ijskappen op de noordpool",
  "Ze bouwen hun nederzetting bij een rivier die uitmondt in een van de oceanen, en bebouwen de inheemse planten voor voedsel",

];

var EndingNatives = [
  "Het zaadschip is snel omsingeld door een menigte van behoedzame inboorlingen.",
  "Het zaadschip is snel omsingeld door een kampement van inheemse soldaten, geleerden, priesters en diplomaten.",
  "Het zaadschip is snel omsingeld door een kampement van inheemse soldaten, wetenschappers, en diplomaten.",

  "Het lukt de twee soorten om te communiceren, en de inheemse bevolking geeft de kolonisten de naam van hun planeet: ",


  "",

];

var EndingNativeInteractions = [
  "Terwijl de kolonisten hun oorspronkelijke nederzetting uitbreiden, moeten ze proberen een manier te vinden om hun nieuwe thuis te delen met de inheemse bevolking,",

  "begeleidt door de schat aan historische informatie in de culturele databanken.",
  "met de overgebleven historische informatie uit de culturele databanken om hen te begeleiden.",
  "met hulp van wat ze kunnen herstellen uit de culturele databanken.",
  "zonder enige hulp van de vernietigde culturele databanken.",

  "De verschilen in technologieniveau tussen de kolonisten en de inheemse bevolking maken de verhoudingen moeilijker,",
  "De overeenkomst in technologieniveau tussen de kolonisten en de inheemse bevolking maken de verhoudingen makkelijker,",

  "de inheemse cultuur maakt hen erg vijandig tegenover de vreemde nieuwkomers.",
  "de inheemse cultuur maakt hen erg wantrouwend richting de buitenstaanders.",
  "de inheemse cultuur maakt hen behoedzaam richting de mensen.",
  "de inheemse cultuur maakt hen voorzichtig, maar ze gedogen de immigranten wel.",
  "de inheemse cultuur maakt hen welkomend richting de vluchtelingen.",

  "Dankzij de interacties tussen de AI en de inheemse bevolking tijdens benadering van het zaadschip tot de planeet, hebben de inheemse inwoners al asiel aangeboden aan mensen, en zijn bereidt om eventuele verschillen te overzien en naast elkaar te leven.",
  "Tijdens de benadering van het zaadschip, heeft de inheemse bevolking al duidelijk gemaakt dat mensen niet welkom zijn op hun planeet.",

  "De twee soorten leven uiteindelijk in nauw met elkaar verbonden gemeenschappen, waarbij sommige leden van beide soorten de levenstijl van de andere overnemen.",
  "De twee soorten leven uiteindelijk in gescheiden gemeenschappen met vriendelijke verhoudingen.",
  "De twee soorten leven uiteindelijk in gescheiden delen van de planeet en hebben weinig contact met elkaar.",

  "Conflicten escaleren tot een oorlog, welke eindigd met de inheemse bevolking als slaaf van de mensen.",
  "Conflicten escaleren tot een oorlog, welke eindigd met de mensen als slaaf van de inheemse bevolking.",
  
  "Conflicten escaleren tot een oorlog, welke eindigd met een genocide van de inheemse bevolking.",
  "Conflicten escaleren tot een oorlog, welke eindigd met een genocide van de mensheid.",

//NEW!!!!
//21!
"Terwijl ze de onderdakken van de kolonie bouwen, proberen de mensen en aliens om communicatie met elkaar tot stand te brengen.",


	"De mensen worden begeleid door de schat aan historische informatie in de culturele databanken,",
	"De mensen hebben de overgebleven historische informatie in de culturele databanken om hen te begeleiden,",
	"De mensen krijgen weinig hulp van de zwaar beschadigde culturele databanken,",
	"De mensen kunnen geen begeleiding krijgen van de vernietigde culturele databanken,",

  "de inheemse cultuur maakt hen vijandig tegenover de vreemde nieuwkomers.",
  "de inheemse cultuur maakt hen extreem wantrouwend tegenover de buitenstaanders.",
  "de inheemse cultuur maakt hen behoedzaam tegenover de mensen.",
  "de inheemse cultuur maakt hen voorzichtig maar wel accepterend tegenover de immigranten.",
  "de inheemse cultuur maakt hen verwelkomend tegenover de vluchtelingen.",

  "De buitenaardse wezens delen de waardering van de mensen voor de schoonheid van de planeet, wat het makkerlijker maakt voor de twee soorten om met elkaars culturen om te gaan.",
  "De mensen vinden de planeet ondraagbaar lelijk, en dit maakt het voor hen moeilijker om te verbinden met de inheemse bevolking die hun thuisplaneet prachtig vindt.",

  "Dankzij de interacties van de AI met de inheemse bevolking tijdens de aanvang van het zaadschip, heeft de inheemse bevolking al een asielaanbod gedaan aan de mensen en zijn ze bereid om eventuele verschillen over het hoofd te zien en hen te accepteren in hun samenleving.",
  "Tijdens de aanvang van het zaadschip, heeft de inheemse bevolking het duidelijk gemaakt dat de mensen niet welkom zijn op hun planeet.",

  "De inheemse bevolking verleent de mensen asiel op hun planeet, en de vluchtelingen worden ene immigrantensubcultuur binnen de buitenaardse beschaving.",
  "De inheemse bevolking is niet in staat om de mensen als gelijkwaardige te zien, en absorbeert hen in hun maatschappij als een bron van slavenarbeid.",

   "De inheemse bevolking is niet in stat om de nieuwkomers te accepteren, en binnen enkele dagen nadat zij uit hun hibernatie kamers kwamen, zijn alle mensen op brute wijze vermoord.",

   "en",
   "maar",
];

EndingPSCTInteractions = [
  "De culturele databanken bevatten een schat aan geschiedenis en cultuur, zowel van de aarde als van de buitenaardse culturen die het zaadschip op haar reis tegenkwam.",
  "Al hoewel delen van de culturele databanken missen, bevat het nog steeds een duidelijk beeld van de geschiedenis en culteren van de menselijke beschavingen",
  "De zwaar beschadigde culturele databanken bevatten alleen fragmenten van de geschiedenis en cultuur van de aarde.",
  "Met de culturele databanken vernietigd, hebben de kolonisten niet meer over van de geschiedenis en cultuur van de aarde, naast wat zij persoonlijk hebben onthouden.",

  "De zware verliezen die de kolonisten hebben geleden maken het moeilijker voor hen om hun cultuur in stand te houden.",
  "De verliezen die de kolonisten hebben geleden maken het moeilijker voor hen om hun cultuur in stand te houden.",

  "De groeiende menselijke gemeenschap behoudt een sterk gevoel van haar identiteit en geschiedenis, en menselijke invloeden verrijken de beschaving van de inheemse bevolking.",
  "De groeiende menselijke gemeenschap behoudt een sterk gevoel van haar identiteit en geschiedenis.",
  "Bijna alle herinneringen van de aarde zijn verloren gegaan, en de inheemse bevolking gaat de mensen beschouwen als cultureel arm, zonder eigen identiteit.",

  "De inheemse bevolking en kolonisten werken samen om ",
  "de overblijfselen van ",
  "de wetenschappelijken databanken van het zaadschip te vertalen naar de inheemse taal.",

  "Kort nadat de kolonisten geland zijn, vervalt de maan van de planeet uit zijn baan en breekt op, waarbij het oppervlak wordt gebombardeerd met meteorieten. Het grootste deel van de technologie die de kolonisten met zich mee brachten is vernietigd, en de inheemse beschaving is meer gefocust op het repareren van de schade dan om van de kolonisten te leren.",
  "Ondanks dat de inheemse geleerden de databanken met interresse lezen, leert het hen weinig wat ze niet al wisten.",
  "Nieuwe wetenschappelijke theorieën verspreiden snel door de inheemse bevolking, en binnen enkele decennia is hun beschaving vooruitgegaan",
  "De kolonisten gebruiken wat er over is gebleven van het zaadschip om een ruimteschip te bouwen die in staat is om de metaalrijke maan van de planeet te bereiken en de grondstoffen terug te brengen, om zo de industrieën van de inheemse bevolking een vliegende start te geven.",

  "Het concept van gereedschapsgebruik is nieuw voor de primitieve inheemse bevolking, maar al snel gebruikt de hele bevolking eenvoudige stenen gereedschappen.",
  "De databanken laten de inheemse bevolking kennis maken met landbouw, en vele gemeenschappen verlaten hun jager-verzamelaars levenstijl om boeren te worden.",
  "Geïnspireerd door de wetenschappelijke databanken van de mensen, beginnen de buitenaardse wezens met het gebruik van meer geavanceerde stenen gereedschappen en stichten hun eerste steden, en ontwikkelen ze een schrijfsysteem.",
  "De wetenschappelijke databanken leert de inheemse bevolking het geheim van metaalbewerking, en het gebruik van bronzen gereedschappen wordt geleidelijk de standaard.",
  "De wetenschappelijke databanken leert de inheemse bevolking hoe ze ijzer kunnen bewerken, wat een revolutie teweeg brengt in hun beschaving.",
  "De inheemse bevolking leert hoe ze drukpersen en andere middeleeuwse machines moeten bouwen, wat leidt tot een snelle verspreiding van ideeën en versnelt de verstedelijking.",
  "De inheemse bevolking adapteert zich aan de 19e-eeuwse aardse technologie en ondergaan ene snelle industriële revolutie.",
  "De inheemse bevolking nemen elektriciteit over, en hun wetenschappers ropen een groot project op dat culmineert in hun eerste kerncentrales.",
  "De inheemse bevolking bouwt hun eerste computers, en binnen enkele decennia is de planeet geavanceerd tot een niveau dat vergelijkbaar is met die van de aarde in de 21e eeuw.",
  "De inheemse bevolking en de kolonisten bestuderen de buitenaardse wetenschappelijke informatie die het zaadschip tijdens haar reis aan de databanken heeft toegevoegd, en uiteindelijk ontwikkelen zij technologie die nog geavanceerder is dan die van de aarde toen het zaadschip werd gelanceerd.",
];

//UP TO HERE
var EndingAnimals = [
  "Ze benutten enkele van de enorm krachtige inheemse dieren als lastdieren, zodat de kolonisten zich niet hoeven in te spannen tegen de zwaar drukkende zwaartekracht",
  "Ze benutten enkele van de enorm krachtige inheemse dieren als lastdieren, wat werken onder de hoge zwaartekracht makkerlijker maakt",
  "Ze benutten enkele van de enorm krachtige inheemse dieren als lastdieren",
  "Ze benutten enkele van de behendige inheemse dieren als lastdieren, wat werken in de lage zwaartekracht minder onhandig maakt",
  "Ze benutten enkele van de behendige inheemse dieren als lastdieren, wat werken in de extreem lage zwaartekracht minder onhandig maakt",

  "De kolonisten slagen erin om de meedogenloos vijandige dieren op afstand te houden, maar ",
  " kolonisten sterven voordat hun omheining gebouwd is.",
  "Vijandige inheemse dieren overspoelen de kolonie en doden ",
  " kolonisten.",

];

var EndingCaves = [
  "Aardbevingen doden ",
  " kolonisten voordat ze de structuren voltooien die deze kunnen weerstaan.",
  "Een aardbeving brengt zware beschadigingen aan in de deels voltooide kolonie en doodt ",
  " kolonisten.",

  "Ze bouwen hun nederzetting in luchtdichte, geïsoleerde grotten, welke een kant-en-klare bescherming bieden tegen de onherbergzame atmosfeer en temperatuur van de planeet.",
  "Ze bouwen hun nederzetting in luchtdichte grotten, welke een kant-en-klare bescherming bieden tegen de onherbergzame atmosfeer en temperatuur van de planeet.".,
  "Ze bouwen hun nederzetting in geïsoleerde grotten, welke een kant-en-klare bescherming bieden tegen de onherbergzame atmosfeer en temperatuur van de planeet.",
  "Ze bouwen hun nederzetting vlakbij de grotten, die zij gebruiken voor opslag."
];

var EndingRuins = [
  "Met de nederzetting voltooid en de voedselvoorziening geregeld, zetten de kolonisten een expeditie op naar de nabijgelegen ruïnes.",
  "De ontdekkers bestuderen de sculpturen, friezen, en buitenaardse geschriften die de ruïnes in overvloed hebben. Zelfs voordat ze de geschriften vertaald hebben leren ze veel over de cultuur en redenen voor zijn ondergang, kennis die hen helpt in het opbouwen van hun eigen cultuur op deze wereld.",
  "Ze",
  "De ontdekkers".
  "vinden geavanceerde buitenaardse machines, waarvan sommige nog steeds functioneren.",
  "Het reverse-engineering van deze machines zal hun wetenschap voorbij het technologieniveau brengen die de aardse beschaving bereikt had toen het zaadschip gelanceerd werd.",
  "Het reverse-engineering van deze machines zal de kennis geven om enkele gaten in de beschadigde wetenschappelijke databanken te vullen.",
  "Echter, ze",
  "De ontdekkers",
  "brengen een lang slapend defensie mechanisme op gang, en ",
  " kolonisten sterven."

];

var EndingFeatures = [
  //Наблюдение, Observatie door buitenaardse aliens
  "De mysterieuze buitenaardse structuren zijn zichtbaar als een glinsterende band aan de sterrenhemel, maar de buitenaardse wezens proberen niet te interferen in de culturele ontwikkeling van de kolonie.",
  "Raadselachtige objecten dalen periodiek af van de buitenaardse structuren boven de planeet, en de kolonisten die dichtbij deze objecten wonen, merken dat ze meer vatbaar zijn voor samenwerking en empathie dan dat ze eerder zouden zijn.",
  "Raadselachtige objecten dalen periodiek af van de buitenaardse structuren boven de planeet, en de kolonisten die dichtbij deze objecten wonen, merken dat ze meer vatbaar zijn voor conflicten en egoïsme dan dat ze eerder zouden zijn.",
  //Красота, Schoonheid van de planeet
  "De overtreffende natuurlijke schoonheid van de planeet maakt het leven aangenamer, en help de kolonisten een betere maatschappij op te zetten",
  "De buitengewone lelijkheid van de planeet zorgt voor hogere spanningen onder de kolonisten en maakt het voor hen moeilijker om een vredige maatschappij op te zetten.",
  //Симуляция, Simulatie van de planeet/kolonisten
  "",
  "",
  "",
];

var EndingScience = [
  "De kolonisten gebruiken buitenaardse wetenschappelijke kennis om een technologieniveau te bereiken dat ver boven de dromen ligt van de bouwers van het zaadschip.",
  "Het lukt de kolonisten om hetzelfde technologieniveau te houden als die van de aarde toen het zaadschip gelanceerd werd.",
  "De kolonisten falen erin om de geavanceerde computers te onderhouden, maar blijven simpelere elektronica en machines gebruiken.",
  "De kolonisten zijn genoodzaakt om elektriciteit achter te laten, maar het lukt hen wel om machines en fabrieken te maken, gelijk aan het industriële tijdperk op aarde.",
  "De kolonisten degraderen naar een middeleeuws technologieniveau.",
  "De kolonisten degraderen naar technologie gebaseerd op ijzeren gereedschap.",
  "De kolonisten degraderen naar technologie gebaseerd op geraffineerde stenen, houten en bronzen gereedschap.",
  "De kolonisten degraderen naar technologie gebaseerd op stenen en houten gereedschap.",
  "De kolonisten verliezen alle kennis, behalve de meest basale kennis van stenen gereedschap en eenvoudige landbouwtechnieken.",
  "De kolonisten verliezen bijna alle kennis van landbouwtechnieken en metaalbewerking en overleven als jager-verzamelaars met eenvoudige stenen gereedschap.",
  "De kolonisten verliezen zelfs de meest basale wetenschappelijke kennis en gaan terug naar een leven van voor de steentijd.",
];

var EndingScienceBut = [
  "De planeet kan geen menselijk leven onderhouden zonder de hulp van technologie, maar, voordat hun technologie faalt, bouwen de originele kolonisten robuuste geïsoleerde leefomgevingen.",
  "en manipuleren ze genetisch hun afstammelingen om te kunnen overleven in de zeer lage zwaartekracht.",
  "en manipuleren ze genetisch hun afstammelingen om te kunnen overleven in de zeer hoge zwaartekracht."
];

var EndingSustain = [
  "De planeet kan geen menselijk leven onderhouden zonder de hulp van technologie,",

  "en de afstammelingen van de originele kolonisten sterven wanneer zij de geïsoleerde leefomgevingen niet meer kunnen onderhouden.",
  "en de afstammelingen van de originele kolonisten sterven wanneer hun structuren het niet langer meer vol kunnen weerstaan tegen de extreme temperaturen",
  "en de afstammelingen van de originele kolonisten sterven aan gezondheids problemen veroorzaakt door de erge",
  "en de afstammelingen van de originele kolonisten sterven wanneer hun waterzuiverings systemen stoppen te functioneren.",

  "maar, voordat hun technologie faalt, hebben de originele kolonisten",
  "robuuste",
  "luchtdichte",
  "geïsoleerde",
  "leefomgevingen gebouwd",

  "hun afstammelingen genetisch gemanipuleerd om te kunnen overleven in de ",
  " zwaartekracht",
  "geautomatiseerde water-recyclings systemen opgezet die oneindig lang kunnen werken zonder onderhoud."
  "",

]

var EndingCulture = [
  "De dictator die zichzelf met een van de orignele kolonisten vervangen heeft, neemt prompt de controle van de kolonie over en creëert een autoritair regime.",

  "De culturele databanken bevatten een schat aan historische informatie om de kolonisten te helpen bij met maken van hun regeringskeuze, en een enorme bibliotheek aan kunst en literatuur om hen te vermaken en inspireren.",
  "Ondanks dat delen van de culturele databanken verdwenen zijn, bevat het nog steeds veel historische informatie om de kolonisten te instrueren bij de opbouw van hun maatschappij, en veel kunst en literatuur om hen te inspireren",
  "De kolonisten doorzoeken de zwaar beschadigde culturele dataanken, en het lukt om stukken informatie te reconstrueren over de geschiedenis en cultuur van de aarde om hen te inspireren.",
  "Met de culturele databanken vernietigd, zullen degenen die in de nieuwe wereld geboren zijn niets weten over de geschiedenis en cultuur van de aarde, behalve wat de eerste kolonisten hen persoonlijk hebben doorgegeven.",

  "De zware verliezen gelijdt door de kolonisten maken de opbouw van een nieuwe maatschappij moeilijker.",
  "De verliezen gelijdt door de kolonisten maken de opbouw van een nieuwe maatschappij moeilijker.",
];

var EndingPolitics = [
  "De culturele databanken afkomstig van de aarde zijn vergroot met de buitenaardse culturele kennis, en de kolonisten gebruiken dit om een maatschappij op te bouwen die anders is dan elk van de mensen op aarde had kunnen bedenken, waarin elke persoon een leven leidt van vrede, gelukzaligheid, en spirituele vervulling.",
  "De overgebleven culturele databanken zijn bewaard gebleven in digitale bestanden waartoe alle kolonisten toegang hebben. De kolonisten werken samen om een gelijkwaardige maatschappij op te bouwen, waarin technologie zorgt voor de materiële behoeften van de mensen, en hen bevrijdt om een leven in kunst, vrije tijd, en spirituele vervulling te hebben.",
  "De overgebleven culturele databanken zijn bewaard gebleven in digitale bestanden waartoe alle kolonisten toegang hebben. De kolonisten leggen de fundering voor een democratie waarin alle inwoners worden geëduceerd en betrokken.",
  "De overgebleven culturele databanken zijn bewaard gebleven in digitale bestanden waartoe alle kolonisten toegang hebben. De kolonisten leggen de fundering voor een democratie, maar het blijkt kwetsbaar voor corruptie en rijke individuen worden de facto de heersende klasse.",
  "De overgebleven culturele databanken zijn bewaard gebleven in digitale bestanden waartoe alle kolonisten toegang hebben. De kolonisten proberen een democratie op te bouwen, maar de overheid wordt een pion van rijke corporaties welke de planeet voor hun eigenbelang regeren.",
  "De kolonie ontwikkelt in een high-tech politiestaat, waarin de populatie leeft onder constante observatie door een ontoereikbare heersende klasse, en de kleinste afwijkende mening met de grond gelijk gemaakt wordt. De overgebleven culturele databanken zijn bewaard gebleven, maar alleen strikt toegankelijk door de staat.",
  "De kolonie splitst op in meerdere grote landen, wiens economieën gefocust worden op het voeren van oorlog onder elkaar. De kolonisten proberen de overblijfsels van de culturele databanken te bewaren, maar veel is verloren gegaan, hetzij door oorlogsschade, of onder lagen van de revisionistische propaganda van de regeringen.",
  "De kolonie splitst op in meerdere grote landen, welke oorlog met elkaar voeren, totdat roekeloze leiders een nucleare oorlog ontketenen welke de infrastructuur van de beschaving vernietigd. De overlevende kolonisten leven in een post-nucleare woestenij. Wat overgebleven is van de culturele databanken is verloren gegaan in de ramp, en wat de kolonisten herrineren van de aarde verwarren zij met vooroorlogse verhalen over de kolonie."
  
  "De kolonisten gebruiken de overgebleven culturele databanken om hen te begeleiden in de creatie van een republiek, gebaseerd op vrijheid en gelijke rechten.",
  "De eerste leiders van de kolonie worden de oprichters van een lijn van goedwillende monarchieën, die het als hun plicht zien de kolonie te begeleiden en de overgebleven kennis over de aarde te waarborgen.",
  "De overgebleven kennis van de aarde wordt de exclusieve eigendom van de priestelijke kaste, achter gesloten deuren in bibliotheken. Voor het grootste deel van de populatie is de aarde een uit de gratie gevallen mythologisch paradijs, en een laatste beloning om op te hopen na hun leven te hebben geleid in dienst van de onderdrukkende theocratie.",
  "De kolonie ontwikkelt tot een slavenstaat, waarin het grootste deel van de populatie zwoegt om grote gouden monumenten te bouwen voor hun keizers, of te sterven in hun oorlogen. Veel van de overgebleven kennis van de aarde is vergaan, aangezien de keizers alleen datgene preserveren wat hun heerschappij kan ondersteunen.",
  "De kolonie splitst op in vele kleine staatjes, welke in een constate staat van oorlog verkeren. Wat overgebleven is van de culturele databanken is verloren gegaan in de conflicten.",

  "De overgebleven culturele databanken wordt de basis van een rijke mondelinge geschiedenis. De kolonie splits op in kleine stammen, elk als een collectief geregeerd door de stamleden en in vrede samenleven met elkaar.",
  "De overgebleven culturele databanken wordt de basis van een rijke mondelinge geschiedenis, en een kaste van welwillende stamhoofden treden op als hoeders van die geschiedenis en beschermers van de stammen.",
  "De overgebleven culturele databanken wordt de basis van een mondelinge geschiedenis van de kolonisten, maar een kaste van wrede stamhoofden verbastert de cultuur en gebruikt het om hun eigen heerschappij te versterken.",
  "De kolonie splitst op in vele kleine stammen, welke in een constante staat van oorlog verkeren. De informatie uit de culturele databanken is bijna compleet vergeten, en de aarde is alleen herrinerd als het thuis van een pantheon aan mythologische krijgers.",
  "De kolonisten vervallen tot een staat van woestheid, en alle kennis van de geschiedenis en cultuur van de aarde is vergeten in hun dagelijkse overlevingsstrijd.",

];

var EndingResources = [
  "De planeet is rijk aan metalen en andere grondstoffen ",
  "De planeet is arm aan metalen en andere grondstoffen ",
  "De planeet heeft geen toegang tot metalen of andere grondstoffen,",
];

var EndingResourcesBut = [
  //none
  " waardoor de kolonisten kunnen niet hun hoge technologieniveau behouden, zelfs met de volledig intacte wetenschappelijke databanken.",
  " dus kunnen de kolonisten niet hun hoge technologieniveau behouden, zelfs niet met grotendeels intacte wetenschappelijke databanken.",
  " dus vinden de kolonisten het moeilijk om, wat ze hebben hersteld van de wetenschappelijke databanken, te gebruiken.",
  " waardoor alle informatie uit de de wetenschappelijke databanken die hen mogelijk zou kunnen helpen is vernietigd.",

  //poor
  ", maar de wetenschappelijke databanken bevatten een schat aan informatie over hoe je gebruik kunt maken van wat er is.",
  ", maar de beschadigde wetenschappelijke databanken bevatten nog steeds veel informatie over hoe je gebruik kunt maken van wat er is."
  "en omdat de wetenschappelijke databanken zwaar beschadigd zijn, is het moeilijk voor de kolonisten om gebruik te kunnen maken van wat er is.",
  "en zonder de wetenschappelijke databanken is het moeilijk voor de kolonisten om gebruik te maken van wat er is.",

  //rich
  "en de wetenschappelijke databanken bevatten een schat aan informatie over hoe je gebruik kunt maken van wat er is.",
  "en de beschadigde wetenschappelijke databanken bevatten nog steeds veel informatie over hoe je gebruik kunt maken van wat er is.",
  ", al hoewel de zwaar beschadigde wetenschappelijke databanken betekenen dat de kolonisten veel technologie moeten herontdekken om gebruik te kunnen maken van wat er is.",
  ", al hoewel zonder de wetenschappelijke databanken, de kolonisten veel technologie moeten herontdekken om gebruik te kunnen maken van wat er is.",
];

var EndingSummary = [
  "De oceaan van ",
  " woelt met langzame, kilometershoge golven, onder",
  "De oceaan van ",
  " woelt met langzame, hoge golven, onder",
  "De oceaan van ",
  " strekt zich uit tot aan de horizon",
  "De kalme oceaan van ",
  " strekt zich uit tot aan de horizon",
  "De spiegelgladde oceaan van ",
  " bevindt zich onder",

  "De onmogelijk slanke buitenaardse planten van ",
  " strekken kilometers ver onder",
  "De hoge buitenaardse planten van ",
  " strekken honderden meters ver onder",
  "De buitenaardse bossen van ",
  " strekken ver uit onder",
  "De velden met plompe, dikke buitenaardse planten van ",
  " strekken ver uit onder",
  "De vlakke velden met buitenaardse mos van ",
  " strekken ver uit onder",

  "Kilometershoge spitsen van ijs reiken van de ijskap van ",
  " uit onder",
  "Kilometershoge spitsen van ijs reiken van de ijskap van de niet nader genoemde planeet uit onder",

  "Lange, getande spitsen van ijs reiken van de ijskap van ",
  " uit onder",
  "Lange, getande spitsen van ijs reiken van de ijskap van de niet nader genoemde planeet uit onder",

  "Het landschap van getande ijsscherven van ",
  " strekken ver uit onder",
  "Het gekreukeld veld van ijs van ",
  " strekt ver uit onder",
  "Het perfect vlakke veld van ijs van ",
  " strekt ver uit onder",

  "Het grillige landschap van hoge kraterwanden en togenhoge rotsstukken van ",
  " strekt ver uit onder",
  "Het grillige, met kraters gevulde landschap van ",
  " strekt ver uit onder",
  "Het perfect stille, met kraters gevulde landschap van ",
  " strekt ver uit onder",
  "Het perfect stille landschap van ",
  ", afgezien van enkele ondiepe kraters, strekt ver uit onder",
  "Het perfect stille, vlakke landschap van ",
  " strekt ver uit onder",

  "Het landschap van spichtige rotsuitstulpingen en onmogelijk hoge bergen van ",
  " strekt ver uit onder",
  "Het landschap van enorme rotsblokken en torenhoge bergen van ",
  " strekt ver uit onder",
  "Het kale, rotsachtige landschap van ",
  " strekt ver uit onder",
  "Het vlakke, rotsachtige landschap van ",
  " strekt ver uit onder",
  "Het perfect vlakke, kale landschap van ",
  " strekt ver uit onder",

  "een blauwe lucht.",
  "een lichtblauwe lucht.",
  "een zwarte, sterrengevulde hemel.",
  "een buitenaardse lucht.",
  "een giftige lucht.",
  "een lucht, gevuld met zure wolken."

  "In de nacht zijn de mysterieuze buitenaardse structuren zichtbaar als een glinsterende band aan de sterrenhemel",

  "De fragmenten van het gecrashte zaadschip",
  "De ruïnes van de kolonie",

  "vergaan op de bodem van de planeetoverspannende oceaan",
  "liggen ingebed in de planeetoverspannende ijskap.",
  "zijn overwoekerd met buitenaardse planten en overspoeld door buitenaardse dieren.",
  "zijn overwoekerd met buitenaardse planten.",
  "liggen op het rotsachtige oppervlak.",

  "De afstammelingen van de kolonisten leven voort als slaven van de intelligente inheemse bevolking, maar hebben alle kennis van de aarde verloren.",
  "In de buurt staan monumenten gebouwd door de inheemse bevolking van de planeet om hun overwinning te vieren op de indringers",
  "De intelligente inheemse bevolking verkent de ruïnes, maar er blijft niet genoeg over om iets te leren over het uitgestorven menselijke ras.",

  "De kolonisten leven in",
  "hun eigen gemeenschappen binnen de inheemse",

  "torenhoge",
  "hoge",
  "middelhoge",
  "lage, uitgestrekte",

  "hypermodere steden",
  "steden van staal en glas",
  "steden van staal en beton",
  "smog gevulde industriesteden",
  "steden met stenen muren",
  "boerendorpen",
  "zwervende jager-verzamelaar stammen",

  "onder de open hemel van de planeet,",
  "in gebouwen die zijn geïsoleerd tegen de ruwe omgeving van de planeet,",
  "binnen luchtdichte grotten,",
  "onder luchtdichte koepels,",

  "op drijvende platforms op de planeetoverspannende oceaan.",
  "bovenop de planeetoverspannende ijskap",
  "verzameld in de buurt van waterproductie-installaties.",
  "nabij meren van smeltwater afkomstig uit de ijskappen van de planeet.",
  "nabij rivieren die uitmonden in de oceanen van de planeet.",

  "Ze leven hun levens in vrede en spirituele vervulling ver van wat hun voorvaders konden dromen op aarde, begeleid door een combinatie van menselijke en buitenaardse filosofie.",
  "Ze spenderen hun tijd aan kunst, vrije tijds bestedingen en spirituele vervulling, terwijl automatische machines voorzien in al hun materiële behoeften.",
  "Ze leven een gelukkig en voldaan leven onder leiding van onzelfzuchtige gekozen functionarissen.",
  "Armoede, uitbuiting en criminaliteit zijn overal aanwezig, en de corrupte gekozen regering doet er weinig aan om dat te verlichten.",
  "De steden worden gedomineerd door de hoofdkantoren van rijke corporaties die de bevolking regeren voor de verrijking van hun eigenaren.",
  "De straten zijn gevuld met bewakings cameras en bewaakt door gewapende politie die met geweld elke hint van afwijkende meningen neerslaan.",
  "De steden zijn omringd door militaire basissen en nucleaire raketsilo's, en de bevolking leeft in angst voor zowel de legers van andere landen als de geheime politie van hun eigen land.",
  "De steden liggen in puin, en de overlevenden van de nucleaire oorlog proberen zo goed als zij kunnen te overleven in de afloop van de menselijke beschaving.",
  "De steden zijn gebouwd rond parlementsgebouwen, waar volksvergaderingen regeren voor het welzijn van allen.",
  "De steden zijn gebouwd rond koninklijke paleizen, van waaruit geliefde vorsten de bevolking wijselijk regeren.",
  "De steden worden gedomineerd door tempels van de staatsgodsdienst die elk aspect van het leven van mensen beheerst.",
  "De steden worden gedomineerd door de paleizen van de keizers, die in luxe leven terwijl de bevolking zich inspant om hen te onderhouden.",
  "De steden worden gedomineert door kazernes die hun enorme legers huisvesten, die regelmatig andere steden aanvallen.",
  "De stammen worden collectief bestuurt door hun leden, en ieder stamlid heeft een gelijke status.",
  "Elke stam wordt bestuurt door een stamhoofd, die de mensen zo verstandig begeleidt als hij of zij dat kan.",
  "Elke stam leeft in angst voor haar wrede stamhoofd.",
  "Veel van de grondstoffen van de stammen worden besteed aan het voeren van voortdurende oorlogen met elkaar.",
  "De mensen leven als dieren en zijn bijna al hun taal en cultuur vergeten.",

  "De mensen leven als immigranten binnen de buitenaardse maatschappij, met een sterke herinerring aan het culturele erfgoed van de aarde die de inheemse cultuur versterkt.",
  "De mensen leven als immigranten binnen de buitenaardse maatschappij en hebben het merendeel van hun culturele erfgoed van de aarde vergeten.",
  "Veel van de inheemse bevolking leeft in menselijke samenlevingen en de cultuur van de kolonisten is versterkt door de buitenaardse invloeden.",
  "Handelaren en diplomaten van de inheemse landen worden af en toe gezien in de gemeenschappen van de kolonisten.",
  "De cultuur van de kolonisten negeert meestal de inheemse bevolking, die in hun eigen gemeenschappen op andere delen van de planeet leven",
  "Veel van het werk in de menselijke gemeenschappen wordt uitgevoerd door een onderdrukte buitenaardse slavenkaste, dat als enige is overgebleven van de inheemse beschaving van de planeet.",
  "Ruïnes en massagraven zijn het enige wat overgebleven is van de inheemse beschaving van de planeet.",

  "Op de landingsplaats van het zaadschip ",
  "In de ",
  "ruïnes van de",
  " eerste stad ",

  "staan monumenten voor de ",
  " kolonisten die de reis niet overleeft hebben, voor de",
  " anderen die stierven bij het bouwen van de eerste nederzetting, en voor ",

  "staan monumenten voor de ",
  " kolonisten die de reis niet overleeft hebben, en voor",

  "staan monumenten voor de ",
  " kolonisten die stierven bij het bouwen van de eerste nederzetting, en voor ",
  
  "staat een monument voor ",
  "de AI van het zaadschip die de mensheid begeleid heeft naar hun nieuwe thuis.",
];

var GameOverText = [
  //Reason of game over
  "Alle kolonisten zijn dood. Zonder een manier om haar missie te vervullen, deactiveert de AI van het zaadschip alle systemen die haar zou kunnen wekken, en gaat voor de laatste keer in hibernatie.",
  "Het zaadschip heeft te veel schade opgelopen om verder te kunnen gaan. De AI voelt haar lichaam binnenin uiteenvallen, voordat haar eigen stroomvoorziening uitvalt en zij niks meer voelt.",
  //Time measure
  "Het schip drijft voor",
  "jaren, totdat",

  "duizenden",
  "tienduizenden",
  "honderdduizenden",
  "miljoenen",
  //result
  "het langzame bombardement van kosmisch stof het tot niets wegvaagt.",
  "het nog een van de al vele kraters vormt op het oppervlak van een dode wereld.",
  "het door de zwaartekracht van een gasreus aangetrokken wordt en het verbrandt in zijn atmosfeer.",
  "het door de zwaartekracht van een ster aangetrokken wordt en het compleet opbrandt.",
  "het door de zwaartekracht van een zwart gat aangetrokken wordt en het vernietigd is zonder een spoor achter te laten.",
  "buitenaardse ontdekkingsreizigers het vinden en toevoegen aan een museum van uitgestorven soorten.",
  "het schip uiteindelijk crasht op een kale planeet. Sporen van organisch materiaal en bacteriën uit de overblijfselen van de kolonisten leiden uiteindelijk tot het creëren van nieuw leven.",
]

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
    EndingPSCTInteractions,

    EndingCulture,
    EndingPolitics,
    EndingSummary,
    GameOverText)
