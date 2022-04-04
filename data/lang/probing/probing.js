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
  "The surface probe's sensors",
  "confirm the readings of the ship's orbital scanners.",
  "fill the gaps in the data the ship could gather from orbit.",
  "The surface probe's mission is complete and it shuts down."
];

var ProbingMoon = [
  "As the surface probe approaches the planet it scans the planet's moon, but finds that it is devoid of useful minerals.",
  "As the surface probe approaches the planet it scans the planet's moon, and finds that it is rich in metals and other useful resources.",
  "As the surface probe approaches the planet it scans the planet's moon, and finds that it is a recently-captured asteroid in an unstable orbit. The probe can't exactly determine when, but at some point in the future, the moon will come close enough to breakup and bombard the surface with fragments."
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
  "The probe finds alien plants. It tests a sample, and finds that they would be neither edible nor poisonous to humans.",
  "The probe finds alien plants. It tests a sample, and finds that some of them would be edible for humans.",
  "The probe finds alien plants. It tests a sample, and finds that they would all be highly poisonous to humans.",
];

var ProbingAnimals = [
  "The probe encounters numerous animals. After analysing their behaviour, it concludes that they would be neither useful nor harmful to humans.",
  "The probe encounters numerous animals. After analysing their behaviour, it concludes that some species have the potential to be useful to humans as meat sources or beasts of burden.",
  "The probe encounters numerous animals. After analysing their behaviour, it concludes that they pose a significant threat to human colonists.",
];

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
