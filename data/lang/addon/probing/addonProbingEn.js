//Инициализация пробирования
function probingText(start, moon, beauty, caves, plants, animalsEncounter, animals, animalsValue, sentients, sentientAppearence, culturalDoctrine, culture, civ, ruins, features, machines) {
  this.start = start;
  this.moon = moon;
  this.beauty = beauty;
  this.caves = caves;
  this.plants = plants;
  this.animalsEncounter = animalsEncounter;
  this.animals = animals;
  this.animalsValue = animalsValue;
  this.sentients = sentients;
  this.sentientAppearence = sentientAppearence;
  this.culturalDoctrine = culturalDoctrine;
  this.culture = culture;
  this.civ = civ;
  this.ruins = ruins;
  this.features = features;
  this.machines = machines;
}

var ProbingStart = [
  "The surface probe's sensors",
  "confirm the readings of the ship's orbital scanners.",
  "fill the gaps in the data the ship could gather from orbit.",
  "The surface probe's mission is complete and it shuts down."
];

var ProbingMoon = [
  "As the surface probe approaches the planet it scans the planet's moon, but finds that it is devoid of useful minerals.",
  "As the surface probe approaches the planet it scans the planet's moon, and finds that it is rich in metals and other useful resources.",
  "As the surface probe approaches the planet it scans the planet's moon, and finds that it is a recently-captured asteroid in an unstable orbit. In a few decades the moon will come close enough to the planet to break up, and the surface will be bombarded with fragments.",
];

var ProbingBeauty = [
  "The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet outstandingly beautiful.",
  "The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet extremely ugly."
];

var ProbingCaves = [
  "The planet's crust is riddled with extensive cave systems which could easily be sealed to provide airtight shelters.",
  "The planet's crust is riddled with extensive cave systems that are insulated from the temperature on the surface.",
  "The planet is geologically unstable, and dangerous earthquakes are common everywhere on the surface.",
];

var ProbingPlants = [
  "The probe finds alien plants.",
  "It tests a sample, and finds that ",
//Very Low
  "They are vast webworks of gossamer threads that reach kilometers high.",
  "They are a chaotic mess of rhizomes that frequently tumble around the surface.",
//  Low
  "They look a lot like sponges on Earth, with a perplexingly wide variety of colors and textures.",
  "They are mostly tall, thin shoots of weeds and their foreign biology has them emit many strange odors.",

//  Normal
  "They are shaped like trees on Earth, in a wide variety of sizes, and their alien biochemistry makes them phosphorescent, so they glow for several hours after dusk.",
  "They look like vast fields of large flowers and appear to be use pollen to maintain some form of communication that is too complicated for the ship to decode.",

//  High
  "They look similar to cacti on Earth, with round, leafless shapes.",
  "They look like a prairie of fluorescent grasses and weeds and seem to grow and die very quickly.",

//  Very high
  "The plant life here is compressed into a thick crust of single-cell life forms that covers most of the surface of this planet.",
  "They are similar to mosses and lichens and seem to grow in complex fractal geometric patterns.",

//    Edible
//    Very cold
    "their biology is based on fluid hydrocarbons, some of which can easily be converted into edible carbohydrates.",
    "they appear to be drawing heat and nutrients from very deep roots and some of the organic compounds they can produce in this way are edible by humans.",

//    Cold
    "they use round crystalline structures to concentrate daylight into pockets of heat where they can grow, using chemistry similar enough to Earth's to be usable by humans.",
    "completely frozen most of the time, they nevertheless grow in recognizable, and edible, organic processes during peak daylight hours.",

//    Normal
    "they use a wide variety of proteins in their outer shells, some of which are edible for humans.",
    "some of them happen to store energy in Earth-like fat molecules that make them a usable food source.",

//    Hot
    "they withdraw into the ground during the day but the growth they do during nighttime is similar enough to Earth to produce some edible plant material.",
    "they store energy in sacs of liquid fats which could be cooled and filtered for human consumption.",

//    Very hot
    "they use liquid metals for their metabolism and seem more machine-like than organic, but their waste products contain a wide range of compounds, including edible ones that could be filtered out.",
    "they use enormous crystalline structures to radiate heat away from their roots, where they have biological processes that include molecules humans could eat.",

//    Yellow (not edible, not poisonous)
//    Very cold
    "they appear to conserve energy by growing extremely slowly, over centuries or millenia.",
    "they seem to rely on flows of liquid oxygen and evaporate when exposed to Earth-like temperatures.",

//    Cold
    "they have a strange fluorocarbon-based biology that works in the cold environment. This makes them glow in the dark and inedible to humans.",
    "they use large amounts of a strange form of photosynthesis to gather energy on this frigid world, but the highly complex chemicals they use to store it are not digestible by humans.",

//    Normal
    "they are built out of complex arrangements of salt crystals, not nutritious for humans but not poisonous either.",
    "they are built out of polymers that on Earth would have been considered anorganic, completely inedible for humans.",

//    Hot
    "their biochemistry is based on sulfur, not carbon, and completely incompatible with human bodies.",
    "their metabolism uses a lot of light metals like mercury and magnesium, making them incompatible with human biology.",

//    Very hot
    "they use interactions of complex metallic crystals that the drone has nothing to compare them with, but will certainly not be edible.",
    "their cell-like substructures are like furnaces of molten metals, utterly foreign to Earth-based biology.",

//    Poisonous
//    Very cold
    "they manage to survive in the extreme cold by maintaining a highly acidic, corrosive environment that would be very dangerous to humans.",
    "they use heat from radioactive decay to sustain life in the extreme cold and would cause radiation poisoning in any nearby humans.",

//    Cold
    "they produce large amounts of ethylene glycol in clouds around themselves. This makes them capable of withstanding the cold, but also extremely dangerous to any nearby humans.",
    "they accumulate and emit heat in radioactive isotopes of heavy metals that are very dangerous to nearby humans.",

//    Normal
    "they constantly surround themselves with clouds of pollen-like particles that would overwhelm a human immune system and are therefore very dangerous to humans.",
    "their biochemical processes are extremely fast and too complex for the probe to analyze, let alone for human bodies to handle.",

//    Hot
    "they survive the heat using an arsenic-based biochemistry and frequently burst into flames, creating fumes that are very poisonous to humans.",
    "their shells and the pollen they emit are made of asbestos, making them extremely poisonous for humans.",

//    Very hot
    "they breathe out aerosols of molten lead droplets that are highly poisonous to humans.",
    "they are very volatile and frequently burst into shrapnel of tiny jagged shards of metal that would be lethal if inhaled by a human.",

];

var ProbingAnimalsEncounter = [
"The probe observes, and is observed by, various animal-like creatures.",
"Among these plants, the probe finds various kinds of alien animals.",
"The planet also has a rich variety of animals roaming around.",
"The probe also finds and studies animals native to the planet.",
"All regions of the planet the probe studies are home to a multitude of species of animal-like creatures.",
"The probe closely studies the animals that the ship has seen evidence for from orbit.",
"Some species of alien animals thrive on this planet.",
"The probe finds alien animals that eat these plants and each other.",
"The probe encounters numerous animals.",
]

var ProbingAnimals = [
  //size, agility, resemblance
  "Many of them float like balloons or airships. Some species are larger than whales.",
  "None of the surface-dwelling species appear to have evolved to walk, but many move around using various forms of jumping.",
  "They have a huge variety of sizes and shapes. Many of them are highly mobile, roaming large territories at high speeds.",
  "They include many tall and nimble creatures. Some of the flying species are gigantic and sweep the skies on enormous wings.",
  "Some have obvious similarities to Earth animals such as turtles and frogs, while others are entirely foreign.",
  "The basic anatomy of many of the larger species is triangular. All the species that the probe observes walking are three-legged.",
  "They tend to be stout, tough and powerful. Their size and strength fits with a largely subterranean lifestyle of many species.",
  "Most species have eight or more legs or leg-like appendages, making them quite agile despite the high gravity.",
  "All of them are much smaller than humans and most scurry about very quickly like ants or mice.",
  "They are small and sturdy. Most of them resemble snails or snakes.",

  //skin and aesthetics
  "Some of the larger animals turn out to be mobile colonies of smaller animals that stick together using many small tentacle-like appendages.",
  "Some dominant species have large numbers of eyes that allow them to see many different parts of the electromagnetic spectrum.",
  "The wildlife is extremely colorful. Flying species have very thin wings that are much larger than the rest of their bodies.",
  "Several species create electrostatic charges that they seem to use for perception and to communicate using flashes of lightning.",
  "Their skins are usually of calcium and carbon compounds that give them an iridescent shine like mother-of-pearl.",
  "Many of the larger ones communicate with booming bass sounds that carry far through the thick atmosphere.",
  "They metabolize the toxic fluorine in the atmosphere into fluorescent biology. At night, swarms of them shine with myriads of luminous points like the starlit sky.",
  "Their eyes are very large and appear to see infrared through the thick and foggy atmosphere.",
  "They have extremely tough hides made from metallic scales that help them survive the corrosive atmosphere.",
  "They survive the atmosphere by encasing themselves in crystalline exoskeletons.",

  //interaction with environment
  "Most complex lifeforms are to be found in the oceans and on their surfaces, terrestrial life is comparatively simple.",
  "The planet has very strong winds and many of the smaller species have evolved winglets to glide on them.",
  "Most of them live on the edges of the polar ice caps, which are clearly the most habitable regions of this planet.",
  "Nearly all of them are dormant during the very cold nights and move about only in direct sunlight.",
  "Their lifecycles are strongly seasonal, shaped by the planet's powerful weather patterns that include vast storms.",
  "Many of them live in thick layers of vegetation that float on much of the surface and look almost like islands.",
  "Most species seem to live in swarms and melt small ponds into the planet's icy surface that they inhabit.",
  "They mostly live upon the vegetation and in the air, rather than on the very cold surface.",
  "There are no apparent species of swarm animals; individuals fend for themselves in the inhospitable environment.",
  "Small packs or families of these creatures share precious water and defend it against intruders.",
  "This planet has no seasons, no precipitation and very weak winds. This may be the reason why animals mostly remain within their small territories.",
  "Their strange waterless metabolisms seem to allow only very slow growth.",
];

var ProbingAnimalsValue = [
"They are dominated by highly competitive apex predators that pose a serious threat to humans.",
"Many of them attempt to attack the drone, because they are very territorial and seem to treat every intruder as an enemy.",
"They seem to be in a state of constant warfare and many species are extremely aggressive.",
"One species is humanoid and looks superficially similar to humans. It is unintelligent, breeds quickly and is ruthlessly preyed upon by many predators that will probably mistake humans for them.",

"Their bodies are quite fragile, which makes them impossible to utilize but also quite harmless.",
"They use a relatively inefficient molecular biology that makes them move and think too slowly to be useful or a threat.",
"While there are various different species, the probe sees so few individuals, compared to the amount of vegetation, that animals seem unlikely to be a relevant factor to a potential colony. ",
"These animals all flee the probe as fast as they can and would presumably also want to stay far away from any humans. ",

"Several major herbivorous species are highly social and should be easily domesticated.",
"Their behavior is quite simple and predictable, making them potentially easy to control and harness.",
"Symbiotic cooperation between species is common, so some of these animals might readily cooperate with humans as well.",
"The AI is impressed with one friendly, highly social species in particular, due to its skillful use of the vegetation for movement and shelter. These would be highly useful for humans to domesticate.",
]

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "The probe notices one species that exhibits complex social behaviour and has a rudimentary language.",
  "The probe notices one species that exhibits complex social behaviour and uses simple stone tools.",
  "The probe notices one species that exhibits complex social behaviour, uses sophisticated stone tools, and has begun to domesticate other animal and plant species.",
  "The probe investigates an area of regular plant growth, and finds that it is being deliberately cultivated by one species using sophisticated stone tools.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are settlements inhabited by an intelligent species that uses stone and bronze tools.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are settlements inhabited by an intelligent species that uses iron tools.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are settlements inhabited by an intelligent species with a medieval level of technology.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are cities inhabited by an intelligent species with an industrial level of technology.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are cities inhabited by an intelligent species with an Atomic Age level of technology.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are cities inhabited by an intelligent species with an Information Age level of technology.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are cities inhabited by an intelligent species with a post-Singularity level of technology.",

];

var ProbingSentientAppearence = [
  "This species has light, graceful and delicate bodies. They move with the help of special balloon-like organs and spend most of their lives in the air.",
  "Members of this species have light, graceful, and fragile bodies. They have long, thin, multi-jointed limbs that they use to move slowly.",

  "This species cannot walk, but it can jump high and fly long distances with its kite-like wings, thanks to a special leg structure.",
  "This species cannot walk properly, but their body structure resembles that of the chiropterous animals. They can hop high and glide slowly with the help of long and fragile wings.",

  "Representatives of this species are thin and tall, but very agile. They are much taller than Earthlings, and due to their long legs can reach impressive speeds.",
  "Representatives of this species are very large because of the low density of the body. They are much larger than humans, but also much lighter.",

  "The local intelligent species resembles terrestrial birds. Because of their large, graceful wings, they can fly, but they also have very agile legs that they use for daily activities.",
  "The local sentient species have a humanoid body structure. They have thin, light and fragile bodies, and they move, though slowly, with surprising grace.",

  "Representatives of the native species are remarkably similar to humans, with very thin and delicate facial features, and almost indistinguishable sex characteristics.",
 "Representatives of the native species are remarkably similar to humans. They have a similar set of limbs, and even have hair. But the color of their skin is significantly different.",

  "The native species has three limbs, which equally effectively perform the functions of arms and legs simultaneously.",
  "Representatives of the local species resemble terrestrial cephalopods. They have very flexible bodies, and many tentacles which they use to move and work.",

  "The local sentient species have mighty, stout bodies. They are slow and clumsy, and lead a measured life.",
  "Members of the native sentient species are of modest size, but are adept at handling local animals, which they use in most aspects of daily life.",

  "The native sentient species here have four pairs of limbs that allow them to move surprisingly fast in high gravity. Their bodies are surprisingly strong, even in comparison to the native fauna.",
  "The local sentient species visibly resembles Earth's spiders. They have five pairs of articulated legs, which they use to move easily even on vertical surfaces.",

  "Representatives of this species are of modest size, and resemble terrestrial insects. They have a rather complex social structure, and despite the external similarity of individuals, they tend to vividly express their individuality with items of clothing.",
  "The natives subtly resemble terrestrial rodents. They are able to move very quickly, are very inquisitive and reproduce quickly.",

  "Members of this species are smaller than humans. They have no legs, and they move with the help of long tails, like Earth snakes. They are quite mobile, despite the fact that they have a powerful bone structure.",
  "Members of this species are shorter than humans, but much more massive. Their robust, stocky bodies resemble those of Earth xiphosuras. They perform their day-to-day work with their powerful pincers on their front limbs.",

  //skin and aesthetics
  "Their larynx has a structure similar to that of humans, and they communicate with similar sets of sounds. In theory, this should greatly simplify interspecies communication.",
  "Their species does not use verbal means of communication, preferring instead sign language and very lively facial expressions. Their facial features have a similar structure to humans, which should simplify communication.",

  "They have very large and unusual eyes, which allow them to see in many different spectra.",
  "They have a very pungent, unpleasant smell for humans, which is sure to make interspecies communication difficult.",

  "Their bodies have very bright colors, which is very much reflected in their culture and greatly affects their way of life.",
  "Their skin changes color in an amazing way depending on environmental conditions, making them similar to Earth's chameleons.",

  "Their bodies produce electricity, and they communicate through micro-discharges and flashes. This can make interspecies communication much more difficult.",
  "Their bodies produce electricity so powerful that direct physical contact can be deadly to humans.",

  "Their skin shines and shimmers like mother-of-pearl and has an impressive strength.",
  "Their skin consists of calcium and carbon compounds, making them extremely poisonous to earthlings. Any physical contact can pose a threat.",

  "They communicate through a low, thunderous hum that is very difficult to translate. It will make communication difficult.",
  "They communicate through a low hum, with easily distinguishable intonations and syllables. In theory, this should make interspecies communication easier.",

  "Representatives of the native species are prolifically beautiful. Thanks to their fluorescent biology, they emit a soft glow, the pulsation of which they use as an additional means of communication.",
  "The native species has an impressive variety of colors. Thanks to their fluorescent biology, they are able to emit light of different colors, depending on the situation.",

  "They also have very large faceted eyes, capable of seeing in the infrared spectrum, which allows them to navigate better in the dense atmosphere.",
  "The atmosphere on the planet is so dense that the local sentient species have no visual receptors. They use their tactile senses to orient themselves in space.",

  "The lower ones have extremely strong skin, covered with dense scales that can easily withstand the aggressive atmosphere.",
  "They have very dense, smooth skin, able to withstand significant external influences, which makes fights between individuals particularly brutal.",

  "Their bodies are encased in robust crystalline exoskeletons, making all of their physical interactions quite brutal by human standards.",
  "Their bodies are encased in sturdy exoskeletons of exotic colors. It seems that bright coloration is one of their indicators of social standing.",

  //interaction with environment
  "The native species leads an amphibious lifestyle. They build their cities underwater, in coastal areas, but actively explore the land.",
  "Like humans, they prefer to settle in places with plenty of natural resources, or in places convenient for travel.",

  "Due to the fact that the planet has very strong winds, the locals prefer to build underground cities, in which they spend most of their lives.",
  "Because of the planet's very strong winds, the locals live in fortified settlements under protective domes.",

  "They build their cities near the polar caps, where almost all life on this planet is concentrated.",
  "Like humans, they prefer to settle in places with plenty of natural resources, or in places convenient for travel.",

  "They are cold-blooded, so they lead an active life only in sunlight, falling into hibernation on long, cold nights.",
  "Due to their very active metabolism, they prefer lead nocturnal life, waiting out the daytime hours that are too warm for them in safe havens.",

  "They build their cities in the depths of the local ocean, not often rising to the surface.",
  "They lead an amphibious lifestyle, and live in huge ancient floating cities. It seems that at one time the local ocean did not cover all of the land.",

  "They build their cities on top of thick layers of vegetation that float on most of the surface and look almost like islands.",
  "They build their cities in the depths of the local ocean, but spend much of their time near the surface, which is covered by thick layers of vegetation that look like islands.",

  "They build their cities beneath the icy surface of the planet, and use an extensive system of man-made tunnels to move around.",
  "Their metabolism allows them to survive extreme temperatures, so they build their cities based on the location of natural resources under the ice layer.",

  "Their metabolism allows them to survive in extreme temperatures, but they prefer to build their settlements near large clusters of native vegetation.",
  "They build their cities under the icy surface of the planet, preferring to settle under large clusters of native vegetation.",

  "Despite their complex social structure, they live in small groups over vast territories, and occasional meetings between members of different groups often turn into confrontations.",
  "They live in small kinship clans, preferring not to interact with their neighbors without a good reason.",

  "They are very territorial, clans have lived in the same places for centuries, and react aggressively to any attempts of invasion.",
  "They settle near the deposits of natural resources and fight fiercely for them with the rival clans.",

  "Natives build cities based on the location of natural resources, and rarely leave them during their life cycle.",
  "Locals live in huge mobile cities and lead nomadic lifestyles, but no obvious reasons for migration or uniform time cycles or trends are recorded by the probe.",

  "Because of their strange, waterless metabolism, they are extremely slow, yet inquisitive and interested in everything new and unusual they encounter.",
  "Because of their strange, waterless metabolism, they are extremely slow and passive. They react weakly to external stimuli, and prefer not to waste energy on pointless aggression.",
];

var ProbingCultureDoctrine = [
  "The local sentient species evolved from predators, and aggressive behavior is natural to them. Their culture is built around the reverence for war, and warriors are the most respected caste in society.",
  "The harsh environment has made this intelligent species very aggressive. Virtually every social interaction of the natives is accompanied by significant physical impact.",
  "Native sentient species live in closed communities, which do not accept outsiders with even minimal phenotypic differences. They display open aggression toward outsiders.",
  "The severe competition for resources has made the natives extremely aggressive. Their culture is built on inordinate militancy, with the strongest and most violent individuals in power.",
  "The low amount of natural resources has made the local sentient species very territorial and aggressive. The natives fight desperately for resources and are unlikely to welcome newcomers." ,

  "The culture of the natives is in many ways similar to Earth's. They are inquisitive, actively exploring territories and clashing over resources.",
  "The local sentient species has a short life cycle and evolves quickly. They are not belligerent, but diplomatic relations with a species whose generations change in a few years can be difficult.",
  "The native sentient species has fairly simple and predictable behavior, but uses nonverbal modes of communication, which can make it very difficult to interact with them.",
  "Members of the native sentient species are cautious, cunning and cowardly. They prefer not to engage in open confrontations, preferring subterfuge and intrigue even in common most common situations.",

  "The culture of the local sentient species is built on love and respect for interspecies differences. They respect nature and do not hunt animals." ,
  "Native culture is built on learning new things. They happily absorb new knowledge and are willing to share their own. The division into states is very conditional, there are no military conflicts on the planet.",
  "Natives are slow, non-aggressive and eat plant food. They have no natural enemies, and because of the abundance of natural resources, they have little reason to antagonize each other.",
  "The abundance of territory and natural resources has made the locals passive. They produce almost no weapons, and prefer to find peaceful ways to resolve conflicts.",
];

var ProbingCulture = [
  "The natives live in a state of constant violence, with no social organisation.",
  "The natives are divided into countless small tribes that are in a constant state of war with one another.",
  "The natives are divided into countless small tribes, most of which live in fear of their ruthless chieftains.",
  "The natives are divided into countless small tribes, most of which are ruled wisely by benevolent chieftains.",
  "The natives are divided into countless small tribes, most of which are ruled collectively by its members and live in peace with one another.",
  "Most of the natives live in small nations, which devote much of their resources to fighting wars with one another.",
  "Most of the population live as slaves under the rule of despotic emperors.",
  "The most powerful nations are ruled by priest-kings who strictly control the flow of knowledge, leaving the general population ignorant and illiterate.",
  "The most advanced nations are ruled by benevolent monarchs who regard it as their duty to see to the needs of their subjects.",
  "The most advanced nations are republics, where decisions are made by assemblies of citizens.",
  "The civilisation has recently undergone a nuclear war, and the natives eke out a living in the ruins of their once-great cities.",
  "Most of the planet is diveded between several superpowers which exist in a state of constant tension.",
  "The most advanced nations are dictatorships, which make extensive use of policing and technological surveillance to keep their populations in line.",
  "The planet is dominated by a host of multinational corporations which have supplanted the role of governments.",
  "The planet's most powerful nations are nominally democratic, but the leaders are corrupt and do little to improve the lot of the general population.",
  "The planet's most powerful nations are well-functioning democracies, and the population generally enjoys a high quality of life.",
  "The population enjoys lives of culture and leisure, with automated machines taking care of their material needs.",
  "The probe has difficulty making sense of the natives' culture, which appears to use political and philosophical principles never seen on Earth.",
];

var ProbingCiv = [
  "The probe conducts high-altitude surveys, and finds settlements and signs of intelligent activity everywhere it looks. It seems that there is no part of the planet untouched by the native civilisation.",
];

var ProbingRuins = [
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are ruins left by a vanished intelligent species. The ruins include great monuments and writings that could reveal much about the vanished civilisation.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are ruins left by a vanished intelligent species. The ruins contain advanced technological artefacts, some of which are still functioning, and scientific databases that could be decoded.",
  "The probe investigates some of the possible structures that the seedship observed from orbit, and finds that they are ruins left by a vanished intelligent species. The ruins contain functioning defense systems, and the probe barely escapes.",
  "The probe investigates the possible structures that the seedship observed from orbit, but finds that they are regular natural formations, not the product of intelligence.",
];

var ProbingFeatures = [
  "The natives of this planet have already extended an offer of asylum to the human refugees, and will be welcoming to them if the seedship lands.",
  "The natives of this planet are aware of the seedship's mission, and have made it clear that human refugees would not be welcome on their planet.",
  "This planet is a perfect simulation created by fantastically advanced aliens based on data in the seedship's scientific and cultural databases.",
  "This planet has recently been terraformed by advanced aliens to be suitable for human life, and many alien structures sit in orbit above the surface.",
];

var ProbingMachines = [
  "In addition to the numerous ruins, the surface of the planet is covered with craters. The probe cannot determine the exact cause of their origin, but it seems that the planet experienced a global cataclysm or war some time ago.",
  "The source of the electromagnetic activity is an intelligent civilization living on the planet. The probe analyzes the representatives of the civilization and concludes that they are not the result of a natural evolutionary process. They are an artificially created civilization of intelligent machines.",
  "The locals quickly detect the probe, scan it, and lose all interest in it."
 // "Помимо множества руин, поверхность планеты покрыта кратерами. Зонд не может точно определить причины их происхождения, но похоже некоторое время назад планета пережила глобальную катастрофу или войну.",
 // "Источником электромагнитной активности является разумная цивилизация, проживающая на планете. Зонд анализирует представителей цивилизации и приходит к заключению, что они не являются результатом естественного эволюционного процесса. Это искусственно созданная цивилизация разумных машин.",
 // "Местные жители быстро обнаруживают зонд, сканируют его и теряют к нему всякий интерес.",
];

var cProbing = new probingText(
  ProbingStart,
  ProbingMoon,
  ProbingBeauty,
  ProbingCaves,
  ProbingPlants,
  ProbingAnimalsEncounter,
  ProbingAnimals,
  ProbingAnimalsValue,
  ProbingSentients,
  ProbingSentientAppearence,
  ProbingCultureDoctrine,
  ProbingCulture,
  ProbingCiv,
  ProbingRuins,
  ProbingFeatures,
  ProbingMachines,
)
