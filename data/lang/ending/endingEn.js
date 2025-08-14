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
  "and",
  "but",
  "although",

  "They name their new world ",
  "They build a memorial to the ",
  " colonists who did not survive the journey.",
  "The colonists wake from their sleep chambers and survey their new home.",


];

var EndingNameBecause = [
  "because of its extreme heat.",
  "because of its extreme cold.",
  "because its high gravity makes its horizon completely flat.",
  "because standing under its high gravity takes a heroic effort.",
  "because its low gravity means it has many high, craggy mountains.",
  "because all its land is sunk beneath its planet-wide ocean.",
  "because its surface is entirely covered in ice.",
  "because of its lack of water.",
  "because of its lush plant life.",
  "because of its poisonous plants.",
  "because of its plentiful edible plants.",
  "because of the extensive cave system riddling its crust.",
  "because of its plentiful mineral resources.",
  "because of its lack of mineral resources.",
  "because of its perfect conditions.",
  "because it resembles the Earth they left behind.",
  "because it is this world.",


];

var EndingLanding = [
  "The landing system controls the seedship's descent, and it ",
  "The damaged landing system cannot completely control the seedship's descent, and it suffers some damage when it",
  "The AI uses the manoeuvring thrusters to barely control the seedship's descent, and it"
];

var EndingLandingBut = [
  "splashes gently down into",
  "touches gently down",

  "splashes down into",
  "touches down on",

  "splashes down hard into",
  "crashes into",
  "ploughs through"
];

var EndingLandingBonus = [
  "A squadron of the natives' spacecraft intercepts the seedship as it approaches and guides it down, while natives on the ground prepare a landing area.",
  "The native civilisation hastily launches a spacecraft to guide the seedship down, while natives on the ground prepare a landing area.",
  "The native civilisation launches a crude spacecraft to monitor the seedship as it approaches, while natives on the ground prepare a landing area.",
];

var EndingSurface = [
  "the ocean off the shore of one of the planet's continents.",
  "the planet-wide ocean.",
  "the top of the planet-wide ice sheet.",
  "a field of alien vegetation.",
  "the rocky surface.",
  "a field of alien vegetation before coming to a stop."
];

var EndingSurfaceFull = [
  "The seedship tosses on an ocean of slow, kilometres-high waves, beneath",
  "The seedship rocks on the surface of an ocean of slow, tall waves, beneath",
  "The ship floats on the surface of an ocean that stretches to the horizon, beneath",
  "The ship floats on the surface of a calm ocean that stretches to the horizon, beneath",
  "The ship rests on the surface of a mirror-flat ocean beneath",

  "Forests of impossibly slender alien plants reach kilometres into",
  "Forests of tall alien plants reach hundreds of metres into",
  "Forests of alien vegetation stretch away beneath",
  "Fields of squat, thick-limbed alien plants stretch away beneath",
  "Level fields of alien moss stretch away beneath",

  "Kilometres-high spires of ice reach into",
  "Tall, jagged spires of ice reach into",
  "Jagged shards of ice stretch away beneath",
  "A crumpled plain of ice stretches away beneath",
  "A perfectly flat plain of ice stretches away beneath",

  "A jagged landscape of high crater walls and towering shards of rock stretches away beneath",
  "A jagged, cratered landscape stretches away beneath",
  "A perfectly still, cratered landscape stretches away beneath",
  "A perfectly still landscape, flat except for a few shallow craters, stretches away beneath",
  "A perfectly still, flat landscape stretches away beneath",

  "A landscape of spindly rock outcroppings and impossibly tall mountains stretches away beneath",
  "A landscape of huge boulders and towering mountains stretches away beneath",
  "A barren, rocky landscape stretches away beneath",
  "A flat, rocky landscape stretches away beneath",
  "A perfectly flat, barren landscape stretches away beneath",
];

var EndingSky = [
  "a blue sky.",
  "a pale blue sky.",
  "a black, star-studded sky.",
  "an alien sky.",
  "a poisonous sky.",
  "a sky filled with corrosive clouds."
];

var EndingObservation = [

  "A crumpled plain of ice stretches away beneath an alien sky.",
  "A perfectly flat, barren landscape stretches away beneath a poisonous sky.",
  "A landscape of spindly rock outcroppings and impossibly tall mountains stretches away beneath a sky filled with corrosive clouds.",
  "A perfectly still, cratered landscape stretches away beneath a black, star-studded sky.",
  "A barren, rocky landscape stretches away beneath a pale blue sky. "
];

var EndingMoon = [
  "The colonists use what is left of the seedship to build spacecraft capable of reaching the planet's metal-rich moon,",
  "and mine it to supplement the planet's already rich resources.",
  "and mine it to partially compensate for the planet's lack of resources.",
  "Before the colonists have established their technological base, the planet's moon decays in its orbit and breaks up, bombarding the surface with meteorites. Some of the colonists survive, but much of their technology is destroyed.",
];
//NEW FROM HERE!
var EndingAtmosphere = [
  "They cannot leave the ship except in vehicles that have been specially built to withstand the corrosive ",
  "They can leave the ship in bulky environment suits that protect them from the toxic ",
  "They can leave the ship in bulky environment suits that protect them from the ",
  "They can leave the ship without breathing gear, wearing ",
  "They can leave the ship wearing minimal breathing gear and ",
  "They can leave the ship wearing breathing gear and ",

  "atmosphere",
  "atmosphere and",
  "vacuum",
  "vacuum and ",

  "scorching heat",
  "freezing cold",
  "lead-melting heat",
  "near-absolute-zero temperatures",
];

var EndingAtmosphereBut = [
  "but the corrosive atmosphere eats through the seals of a construction vehicle and kills 1 colonist",
  "but the corrosive atmosphere eats through the seals of several construction vehicles and kills ",
  " colonists",

  "but a suit failure leads to 1 colonist being poisoned",
  "but suit failures lead to ",
  " colonists being poisoned",

  "but a suit failure leads to 1 colonist asphyxiating",
  "but suit failures lead to ",
  " colonists asphyxiating",

  "but a breathing gear failure leads to 1 colonist asphyxiating",
  "but breathing gear failures lead to ",
  " colonists asphyxiating" ,

  "but despite the breathable atmosphere, 1 colonist dies of exposure before their shelters are complete",
  "but despite the breathable atmosphere, ",
  " colonists die of exposure before their shelters are complete",
];

var EndingGravity = [
  "They can move easily under the Earth-like gravity.",
  "The high gravity makes the work more difficult.",
  "The low gravity makes the work somewhat more difficult than it would have been on Earth.",
  "The crushing gravity means they can barely move without mechanical assistance,",
  "The very low gravity makes the work more difficult than it would have been on Earth,"
];

var EndingGravityBut = [
  "but",
  "and",
  " construction accidents kill",
  " colonists.",
  " colonists die of gravity-related health problems.",
  " colonists are killed when partially-completed buildings collapse.",
];


var EndingTemperature = [
  "light clothing in the comfortable temperatures",
  "protective clothing to withstand the scorching heat",
  "heavy clothing to protect them from the freezing cold",
  "refrigerated suits to protect them from the lead-melting heat",
  "heated suits to survive the near-absolute-zero temperatures",
];

var EndingTemperatureBut = [
  "and one more dies when one of their shelters melts in the heat.",
  "and ",
  " more die when one of their shelters melts in the heat.",

  "and one more dies of overheating when their cooling systems fail.",
  "and ",
  " more die of overheating when their cooling systems fail.",

  "and a malfunction of the temperature regulation system kills 1 more.",
  "and malfunctions of the temperature regulation system kill ",
  " more.",

  "and 1 more freezes to death when a heating system fails.",
  "and ",
  " more freeze to death when heating systems fail.",

  "and 1 more dies when one of their shelters shatters in the extreme cold.",
  "and ",
  " more die when one of their shelters shatters in the extreme cold.",

  "but 1 colonist dies when a partially-completed structure melts in the heat.",
  "but ",
  " colonists die when a partially-completed structure melts in the heat.",

  "but 1 colonists dies of overheating when their cooling systems fail.",
  "but ",
  " colonists die of overheating when their cooling systems fail.",

  "but malfunctions of the temperature regulation system kill 1 colonist.",
  "but malfunctions of the temperature regulation system kill ",
  " colonists.",

  "but 1 colonist freezes to death when a heating system fails.",
  "but ",
  " colonists freeze to death when heating systems fail.",

  "but 1 colonist dies when a partially-completed structure shatters in the extreme cold.",
  "but ",
  " colonists die when a partially-completed structure shatters in the extreme cold.",
];
//UP TO HERE!

var EndingWater = [
  "They build their settlement near a river that flows into one of the planet's oceans, which provides all the water they need",
  "They mine water from the planet's north polar ice cap",
  "They build their settlement on a floating platform with filters to extract water from the planet-wide ocean",
  "They build their settlement on top of the ice covering the planet's surface, which they mine for water",
  "They must ration the small amount of water they can extract from the atmosphere",
  "They must carefully ration the tiny amount of water they can extract from the planet's rocks"
];

var EndingWaterBut = [
  "and water shortages kill ",
  " colonists.",
  "crop failures kill ",
  " colonist.",
  ""
];

var EndingConstruction = [
  "The colonists begin constructing a settlement with the aid of the seedship's construction robots.",
  "The colonists begin constructing a settlement with the aid of the seedship's damaged construction robots.",
  "The colonists begin constructing a settlement with the aid of the seedship's few surviving construction robots.",
  "The colonists begin constructing a settlement without the help of the seedship's wrecked construction robots.",
];

var EndingPlants = [
  "The planet's plant life is extremely poisonous to humans, and ",
  " colonists die before they can clear it away from their settlement.",
  "A storage failure leads to the colony's food supply being contaminated with the poisonous native plants, and ",
  " colonists die.",

  "The colonists farm the hardy native plants for food, taking pressure off the amount of water they can chemically extract from the rocks",
  "The colonists farm the native plants for food, taking pressure off the amount of water they can condense from the atmosphere",
  "The colonists farm the plants growing on top of the ice sheet for food, and mine drinking water from other parts of the sheet",
  "The colonists farm the floating vegetation for food and extract drinking water from the ocean",
  "The colonists farm the native plants for food and mine water from the north polar ice cap",
  "They build their settlement near a river that flows into one of the planet's oceans, and farm the native plants for food",

];

var EndingNatives = [
  "The seedship is quickly surrounded by a crowd of wary natives.",
  "The seedship is quickly surrounded by an encampment of native soldiers, scholars, priests and diplomats.",
  "The seedship is quickly surrounded by an encampment of native soldiers, scientists, and diplomats.",

  "The two species manage to achieve communications, and the colonists learn that the natives call their planet ",


  " The planet's native inhabitants keep the newcomers under careful guard, but also help them by setting up temporary shelters and clearning the land.",

];

var EndingNativeInteractions = [
  "As the colonists expand from their initial settlement they must find a way to share their new home with its native inhabitants,",

  "guided by the wealth of historical information in the cultural database.",
  "with the surviving historical information in the cultural database to guide them.",
  "with guidance from what they can recover from the cultural database.",
  "without any help from the destroyed cultural database.",

  "The difference in technological level between the colonists and the natives makes relations more difficult,",
  "The similarity in technological level between the colonists and the natives makes relations easier,",

  "the natives' culture makes them hostile towards the alien newcomers.",
  "the natives' culture makes them extremely suspicious towards the outsiders.",
  "the natives' culture makes them wary towards the humans.",
  "the natives' culture makes them cautious but accepting of the immigrants.",
  "the natives' culture makes them welcoming towards the refugees.",

  "Thanks to the AI's interactions with the planet's natives during the seedship's approach, the natives have already extended an offer of asylum to the humans, and are willing to overlook any differences and coexist.",
  "During the seedship's approach, the natives made it clear that the humans would not be welcome on their planet.",

  "The two species end up living in closely linked communities, with some members of each species adopting the lifestyle of the other.",
  "The two species end up living in separate communities with friendly relations between them.",
  "The two species end up living in separate parts of the planet and having little contact with one another.",

  "Conflicts escalate into a war that ends with the humans enslaving the natives.",
  "Conflicts escalate into a war that ends with the humans being enslaved by the natives.",

  "Conflicts escalate into a war that ends with the natives being completely wiped out.",
  "Conflicts escalate into a war that ends with the humans being completely wiped out.",

//NEW!!!!
//21!
"As they construct the colony's shelters, the humans and aliens try to establish communications with one another.",


	"The humans are guided by the wealth of historical information in the cultural database,",
	"The humans have the surviving historical information in the cultural database to guide them,",
	"The humans gain little help from the badly damaged cultural database,",
	"The humans can gain no guidance from the destroyed cultural database,",

  "the natives' culture makes them hostile towards the alien newcomers.",
  "the natives' culture makes them extremely suspicious towards the outsiders.",
  "the natives' culture makes them wary towards the humans.",
  "the natives' culture makes them cautious but accepting of the immigrants.",
  "the natives' culture makes them welcoming towards the refugees.",

  "The aliens share the humans' appreciation of the planet's beauty, which makes it easier for the two species to relate to one another's cultures.",
  "The humans find the planet unbearably ugly, and this makes it harder for them to connect with the natives who find their home planet beautiful.",

  "Thanks to the AI's interactions with the planet's natives during the seedship's approach, the natives have already extended an offer of asylum to the humans, and are willing to overlook any differences and accept them into their society.",
  "During the seedship's approach, the natives made it clear that the humans would not be welcome on their planet.",

  "The natives grant the humans asylum on their planet, and the refugees become an immigrant subculture within the alien civilisation.",
  "The natives are unable to accept the humans as equals, and absorb them into their society as a source of slave labour." ,

   "The natives are unable to accept the newcomers, and within a few days of emerging from their sleep chambers the humans have all been brutally murdered.",

   "and",
   "but",
];

EndingPSCTInteractions = [
  "The cultural database contains a treasure trove of history and culture, from both Earth and alien cultures the seedship encountered on its journey.",
  "Although parts of the cultural database are missing, it still contains a clear picture of human civilisation's history and cultures.",
  "The badly damaged cultural database contains only fragments of Earth's history and culture.",
  "With the cultural database destroyed, the colonists have nothing left of Earth's history and culture besides what they can personally remember.",

  "The heavy losses sustained by the colonists make it more difficult for them to preserve their culture.",
  "The losses sustained by the colonists make it more difficult for them to preserve their culture.",

  "The growing human community retains a strong sense of its identity and history, and human influences enrich the natives' civilisation.",
  "The growing human community retains a strong sense of its identity and history.",
  "Almost all memory of Earth is lost, and the natives come to see the humans as culturally impoverished, with no identity of their own.",

  "The natives and colonists work together to translate ",
  "what is left of",
  "the seedship's scientific database into the natives' language.",

  "Soon after the colonists land, the planet's moon decays in its orbit and breaks up, bombarding the surface with meteorites. Most of the technology the colonists brought with them is destroyed, and the native civilisation is too focused on repairing the damage to learn from the colonists.",
  "Although native scholars read the database with interest, it teaches them little that they do not already know.",
  "New scientific theories spread rapidly through the native population, and within a matter of decades their civilisation has advanced.",
  "The colonists use what is left of the seedship to build spacecraft capable of reaching the planet's metal-rich moon, and bring back resources that jump-start the natives' industries.",

  "The concept of tool use is new to the primitive natives, but soon the entire population is using simple stone tools.",
  "The database introduces the natives to agriculture, and many communities abandon their hunter-gatherer lifestyle to become farmers.",
  "Inspired by the human scientific database, the aliens begin making more sophisticated stone tools, found their first cities, and develop a writing system.",
  "The scientific database teaches the natives the secret of metalworking, and the use of bronze tools gradually becomes widespread.",
  "The scientific database teaches the natives how to work iron, which revolutionises their civilisation.",
  "The natives learn how to build printing presses and other medieval machines, leading to a rapid spread of ideas and increasing urbanisation.",
  "The natives adapt 19th-Century Earth technology and undergo a rapid industrial revolution.",
  "The natives adopt electricity, and their scientists convene a great project which culminates in their first atomic power plants.",
  "The natives build their first computers, and within decades the planet has advanced to a level comparable to 21st-Century Earth.",
  "The natives and settlers study the alien scientific information that the seedship added to its database during its journey, and eventually develop technology even more advanced than that of the Earth when the seedship was launched.",
];

//UP TO HERE
var EndingAnimals = [
  "They harness some of the immensely powerful native animals as beasts of burden, so the colonists do not have to exert themselves in the crushing gravity",
  "They harness some of the planet's powerful native animals as beasts of burden, making work in the high gravity easier",
  "They harness some of the planet's native animals as beasts of burden",
  "They harness some of the planet's agile native animals as beasts of burden, making work in the low gravity less awkward",
  "They harness some of the planet's agile native animals as beasts of burden, making work in the extremely low gravity less awkward",

  "The colonists manage to keep the planet's relentlessly hostile animals at bay, but ",
  " colonists are killed before their perimeter fence is secured.",
  "Hostile native animals overrun the colony, killing ",
  " colonists.",

];

var EndingCaves = [
  "Earthquakes kill ",
  " colonists before they complete structures that can withstand them.",
  "An earthquake levels the colony's partly-completed settlement, killing ",
  " colonists.",

  "They build their settlement inside airtight, insulated caves, which provide a ready-made shelter from the planet's inhospitable atmosphere and temperature.",
  "They build their settlement inside airtight caves, which provide a ready-made shelter from the planet's inhospitable atmosphere.",
  "They build their settlement inside insulated caves, which provide a ready-made shelter from the planet's inhospitable surface temperature.",
  "They build their settlement near caves, which they use for storage.",
];

var EndingRuins = [
  "With their settlement complete and food supply secured, the colonists mount an expedition to the nearby ruins.",
  "The explorers study the sculptures, friezes, and alien writings that fill the ruins. Even before they can translate the writings they learn much about the culture and the reasons for its demise, knowledge that will help guide them in creating their own culture on this new world.",
  "They also",
  "The explorers",
  "find advanced alien machines, some of them still functioning.",
  "Reverse-engineering these machines will advance their science beyond the level that Earth's civilisation had reached when the seedship was launched.",
  "Reverse-engineering these machines will let them fill some of the gaps in the damaged scientific database.",
  "However, they also",
  "The explorers",
  "trigger a long-dormant defense mechanism, which kills ",
  " colonists."

];

var EndingFeatures = [
  //Наблюдение
  "The mysterious alien structures are visible as a glittering band across the night sky, but the aliens do not attempt to interfere with the colony's cultural development.",
  "Enigmatic objects periodically descend from the alien structures in orbit, and colonists living close to these objects find themselves more prone to cooperation and empathy than they otherwise would be.",
  "Enigmatic objects periodically descend from the alien structures in orbit, and colonists living close to these objects find themselves more prone to conflict and selfishness than they otherwise would be.",
  //Красота
  "The planet's outstanding natural beauty makes life there more pleasant, helping the colonists to build a better society.",
  "The planet's outstanding ugliness increases tensions among the colonists and makes it harder for them to build a peaceful society.",
  //Симуляция
  "",
  "",
  "",
];

var EndingScience = [
  "The colonists use alien scientific knowledge to create a level of technology beyond the dreams of the people who built the seedship.",
  "The colonists manage to maintain a level of technology equivalent to that of Earth when the seedship was launched.",
  "The colonists fail to maintain their advanced computers but continue to use simpler electronics and machines.",
  "The colonists are forced to abandon electricity but manage to build machines and factories similar to those of Earth's Industrial era.",
  "The colonists transition to a medieval level of technology.",
  "The colonists transition to a technology based on iron tools.",
  "The colonists transition to a technology based on sophisticated stone, wood and bronze tools.",
  "The colonists transition to a technology based on sophisticated stone and wood tools.",
  "The colonists lose all but the most basic knowledge of stone tools and simple agriculture.",
  "The colonists lose almost all knowledge of agriculture and metalworking and survive as hunter-gatherers using simple stone tools.",
  "The colonists lose even the most basic scientific knowledge and slip back to a pre-Stone Age existence."
];

var EndingScienceBut = [
  "The planet cannot sustain human life without technological assistance, but, before their technology fails, the original colonists build robust insulated habitats.",
  "and genetically engineer their descendants to survive in the very low gravity.",
  "and genetically engineer their descendants to survive in the very high gravity."
];

var EndingSustain = [
  "The planet cannot sustain human life without technological assistance,",

  "and the original colonists' descendants are killed when they can no longer maintain their airtight habitats.",
  "and the original colonists' descendants are killed when their structures can no longer withstand the extreme temperature",
  "and the original colonists' descendants die of health problems caused by the very",
  "and the original colonists' descendants die when their water-purifying systems stop functioning.",

  "but, before their technology fails, the original colonists",
  "build robust",
  "airtight",
  "insulated",
  "habitats",

  "genetically engineer their descendants to survive in the ",
  " gravity",
  "set up automated water recycling systems that can work indefinitely without maintenance.",
  "",

]

var EndingCulture = [
  "The dictator who replaced one of the original colonists swiftly takes control of the colony and creates an authoritarian regime.",

  "The cultural database contains a wealth of historical information to help the colonists make their choice of government, and a vast library of art and literature to entertain and inspire them.",
  "Although parts of the cultural database are missing, it still contains much historical information to instruct the colonists in the building of their society, and much art and literature to inspire them.",
  "The colonists search through the badly damaged cultural database, and manage to reconstruct some information about Earth's history and culture to guide and inspire them.",
  "With the cultural database destroyed, those born on the new world know nothing about Earth's history and culture besides what the first colonists can pass on in person.",

  "The heavy losses sustained by the colonists make building a new society more difficult.",
  "The losses sustained by the colonists make it more difficult for them to preserve their culture.",
  "The billionaire rescued from the derelict luxury ship attempts to seize control of the colony's resource systems during landing, using hidden override protocols they uploaded to the seedship. Their corporate takeover succeeds, and they establish themselves as the colony's economic overlord, creating a stratified society where advancement depends on serving their interests.",
];

var EndingPolitics = [
  "The cultural database from Earth has been augmented by alien cultural knowledge, and the colonists use this to build a society unlike any that the seedship's founders could have imagined, in which every member lives a life of peace, happiness, and spiritual fulfilment.",
  "The surviving cultural database is preserved in digital files to which all colonists have access. The colonists work together to build an egalitarian society in which technology takes care of people's material needs, freeing them to pursue lives of art, leisure, and spiritual fulfilment.",
  "The surviving cultural database is preserved in digital files to which all colonists have access. The colonists lay the foundation of a democracy in which all citizens are educated and engaged.",
  "The surviving cultural database is preserved in digital files to which all colonists have access. The colonists lay the foundation of a democracy, but it proves vulnerable to corruption and wealthy individuals become a de facto ruling class.",
  "The surviving cultural database is preserved in digital files to which all colonists have access. The colonists attempt to build a democratic, capitalist society, but the government becomes a pawn of wealthy corporations which rule the planet for their owners' benefit.",
  "The colony develops into a high-tech police state, in which the population lives under constant surveillance by the untouchable ruling class, and the slightest dissent is violently put down. The surviving cultural database is preserved, but access to it is strictly limited by the state.",
  "The colony splits into several large nations whose economies become focused on waging war with one another. The colonists attempt to preserve what remains of the cultural database, but much of it is lost, either by damage due to the war, or under layers of the governments' revisionist propaganda.",
  "The colony splits into several large nations which wage war with one another, until reckless leaders set off a nuclear war that destroys the infrastructure of civilisation. The surviving colonists live on in a post-nuclear wasteland. What remains of the cultural database is lost in the disaster, and what the colonists remember of Earth they confuse with stories of the pre-war colony.",

  "The colonists use the surviving cultural database to guide them in the creation of a republic based on freedom and equal rights.",
  "The first leaders of the colony become the founders of a line of benevolent monarchs, who regard it as their solemn duty to guide the colony and safeguard the remaining knowledge of Earth.",
  "The surviving knowledge of Earth becomes the exclusive property of a priestly caste, locked away in libraries. For most of the population, Earth becomes the paradise in a mythological fall from grace, and a final reward to hope for after living lives in service of the oppressive theocracy.",
  "The colony develops into a slave state, in which the bulk of the population toil to build great gold monuments to their emperors, or die fighting in their wars. Much of the surviving knowledge of Earth is lost, as the emperors preserve only what they can use to prop up their rule.",
  "The colony develops into many small states, which exist in a state of constant warfare. What remains of the cultural database is lost in the conflicts.",

  "The surviving cultural database becomes the foundation of a rich oral history. The colony splits into small tribes, each ruled collectively by its members and coexisting peacefully with one another.",
  "The surviving cultural database becomes the foundation of a rich oral history, and a caste of benevolent chieftains arises as guardians of that history and protectors of the tribes.",
  "The surviving cultural database becomes the foundation of the colonists' oral history, but a caste of brutal chieftains corrupts the culture and uses it to cement their own rule.",
  "The colony develops into many small tribes, which exist in a state of constant warfare. The information from the cultural database is almost entirely forgotten, and Earth is remembered only as the home of a pantheon of mythological warriors.",
  "The colonists descend into savagery, and all knowledge of Earth's history and culture is forgotten in their day-to-day struggle for survival.",

];

var EndingResources = [
  "The planet is rich in metals and other resources,",
  "The planet is poor in metals and other resources,",
  "The planet has no accessible metals or other resources,",
];

var EndingResourcesBut = [
  //none
  " and the colonists cannot maintain a high level of technology even with the fully intact scientific database.",
  " so the colonists cannot maintain a high level of technology even with the mostly intact scientific database.",
  " so the colonists find it hard to make use of what they can recover from the scientific database. ",
  " and any information the scientific database might have held that could help them has been destroyed.",

  //poor
  " but the scientific database contains a wealth of information on how to make use of what there is.",
  " but the damaged scientific database still contains much information on how to make use of what there is. ",
  " and the badly damaged scientific database means that the colonists find it difficult to make use of what there is.",
  " and without the scientific database the colonists find it difficult to make use of what there is.",

  //rich
  " and the scientific database contains a wealth of information on how to make use of them.",
  " and the damaged scientific database still contains much information on how to make use of them.",
  " although the badly damaged scientific database means that the colonists must re-invent much of the technology needed to make use of them.",
  " although without the scientific database the colonists must re-invent most of the technology needed to make use of them.",
];

var EndingSummary = [
  "",
  "'s ocean tosses with slow, kilometres-high waves, beneath",
  "",
  "'s ocean tosses with slow, tall waves, beneath",
  "",
  "'s ocean stretches to the horizon, under",
  "",
  "'s calm ocean stretches to the horizon, under",
  "",
  "'s mirror-flat ocean stretches away beneath",

  "",
  "'s impossibly slender alien plants reach kilometres into",
  "",
  "'s tall alien plants reach hundreds of metres into",
  "",
  "'s alien forests stretch away beneath",
  "",
  "'s squat, thick-limbed alien plants stretch away beneath",
  "",
  "'s level fields of alien moss stretch away beneath",

  "Kilometres-high spires of ice reach from ",
  "'s ice sheet into",
  "Kilometres-high spires of ice reach from the unnamed planet's ice sheet into",

  "Tall, jagged spires of ice reach from ",
  "'s ice sheet into",
  "Tall, jagged spires of ice reach from the unnamed planet's ice sheet into",

  "",
  "'s landscape of jagged shards of ice stretches away beneath",
  "",
  "'s crumpled plain of ice stretches away beneath",
  "",
  "'s perfectly flat ice sheet stretches away beneath",

  "",
  "'s jagged landscape of high crater walls and towering shards of rock stretches away beneath",
  "",
  "'s jagged, cratered landscape stretches away beneath",
  "",
  "'s perfectly still, cratered landscape stretches away beneath",
  "",
  "'s perfectly still landscape, flat except for a few shallow craters, stretches away beneath",
  "",
  "'s perfectly still, flat landscape stretches away beneath",

  "",
  "'s landscape of spindly rock outcroppings and impossibly tall mountains stretches away beneath",
  "",
  "'s landscape of huge boulders and towering mountains stretches away beneath",
  "",
  "'s barren, rocky landscape stretches away beneath",
  "",
  "'s flat, rocky landscape stretches away beneath",
  "",
  "'s perfectly flat, barren landscape stretches away beneath",

  "a blue sky.",
  "a pale blue sky.",
  "a black, star-studded sky.",
  "an alien sky.",
  "a poisonous sky.",
  "a sky filled with corrosive clouds.",

  "At night, the orbiting alien structures are visible as a glittering band across the stars.",

  "The fragments of the crashed seedship",
  "The ruins of the colony",

  "decay at the bottom of the planet-wide ocean.",
  "lie embedded in the planet-wide ice sheet.",
  "are overgrown with alien plants and overrun by alien animals.",
  "are overgrown with alien plants.",
  "lie on the rocky surface.",

  "The colonists' descendants live on as slaves to the intelligent natives, but they have lost all knowledge of Earth.",
  "Nearby stand monuments built by the planet's native inhabitants to celebrate their victory over the invaders.",
  "The planet's intelligent natives explore the ruins, but not enough remains for them to learn anything about the extinct human race.",

  "The colonists live in ",
  "their own communities within the natives'",

  "towering",
  "tall",
  "squat",
  "low, sprawling",

  "high-tech cities",
  "cities of steel and glass",
  "cities of steel and concrete",
  "smog-filled Industrial cities",
  "stone-walled cities",
  "farming villages",
  "wandering hunter-gatherer tribes",

  "beneath the planet's open sky,",
  "with buildings sealed against the planet's harsh environment,",
  "inside airtight caves,",
  "under airtight domes,",

  "on platforms floating on the planet-wide ocean.",
  "on top of the planet-wide ice sheet.",
  "gathered around water production plants.",
  "by lakes of water melted from the planet's ice caps.",
  "beside rivers that flow into the planet's oceans.",

  "They live lives of peace and spiritual fulfilment beyond the dreams of their ancestors on Earth, guided by a combination of human and alien philosophy.",
  "They spend their time pursuing art, leisure, and spiritual fulfilment, while automatic machines take care of their material needs.",
  "They live happy and fulfilled lives under the guidance of selfless elected officials.",
  "Poverty, exploitation and crime are rife, and the corrupt elected government does little to alleviate them.",
  "The cities are dominated by the headquarters of wealthy corporations that rule the population for their owners' enrichment.",
  "The streets are filled with security cameras and patrolled by armed police who violently put down any hint of dissent.",
  "The cities are surrounded by military bases and nuclear missile silos, and the population lives in fear of both the other nations' armies and their own nation's secret police.",
  "The cities are in ruins, and the survivors of the nuclear war survive as best they can in the wreckage of human civilisation.",
  "The cities are built around parliament buildings, where assemblies of citizens rule for the good of all.",
  "The cities are built around royal palaces, from which beloved monarchs rule the population wisely.",
  "The cities are dominated by temples to the state religion which controls every aspect of people's lives.",
  "The cities are dominated by the palaces of the emperors, who live in luxury while the population toils to support them.",
  "The cities are dominated by barracks housing their vast armies, which regularly attack other cities.",
  "The tribes are ruled collectively by their members, and each member is afforded equal status.",
  "Each tribe is ruled by a chieftain, who guides the people as wisely as he or she is able.",
  "Each tribe lives in fear of its brutal chieftain.",
  "Much of the tribes' resources are devoted to fighting continual wars with one another.",
  "The people live like animals, having forgotten almost all of their language and culture.",

  "The humans live as immigrants inside the alien society, with a strong memory of Earth's cultural heritage that enhances the native culture.",
  "The humans live as immigrants inside the alien society, and have forgotten most of the cultural heritage of Earth.",
  "Many of the planet's native inhabitants live in the human communities, and the colonists' culture has been enriched by alien influences.",
  "Traders and diplomats from the planet's native nations are occasionally seen in the colonists' communities.",
  "The colonists' culture mostly ignores the native inhabitants, who live in their own communities in other parts of the planet.",
  "Much of the labour in human communities is performed by a downtrodden alien slave caste that is all that remains of the planet's native civilisation.",
  "Ruins and mass graves are all that remains of the planet's native civilisation.",

  "At the seedship's landing site ",
  "In the",
  "ruins of the",
  " first city ",

  "stand monuments to the ",
  " colonists who did not survive the journey, the ",
  " more who died building the first settlement, and ",

  "stand monuments to the ",
  " colonists who did not survive the journey and",

  "stand monuments to the ",
  " colonists who died building the first settlement and",

  "stands a monument to",
  "the seedship AI that guided humanity to its new home.",
];

var GameOverText = [
  //Reason of game over
  "All the colonists are dead. With no way to fulfil its mission, the seedship AI deactivates all systems that could wake it, and enters hibernation for the last time.",
  "The seedship has sustained too much damage to continue. The AI feels its body disintegrating around it, before its own power supply fails and it ceases to feel anything.",
  //Time measure
  "The ship drifts for",
  "of years, until",

  "thousands",
  "tens of thousands",
  "hundreds of thousands",
  "millions",
  //result
  "the slow bombardment of cosmic dust wears it away to nothing.",
  "it becomes one more crater on the surface of a dead world.",
  "it is pulled in by the gravity of a gas giant and burns up in its atmosphere.",
  "it is pulled in by the gravity of a star and incinerated.",
  "it is pulled into a black hole and destroyed leaving no trace.",
  "alien explorers find it and add it to a museum of extinct species.",
  "eventually the ship crashes on a barren planet. Traces of organic matter and bacteria from colonist's remains eventually lead to the creation of new life.",
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
