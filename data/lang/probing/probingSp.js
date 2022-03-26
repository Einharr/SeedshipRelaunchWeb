//ЗАПУСК ЗОНДА
function launchProbe() {
  cShip.probes[0] = cShip.probes[0] - 1;
  var scannames = document.getElementById("ScanNames");
  scannames.removeChild(scannames.lastChild);

  document.getElementById('anomalyRes').innerHTML = arrList(cPlanet.anomaliesFull);
}
//


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
  "Los sensores de la sonda de superficie ",
  "confirman las lecturas de los sensores de la nave en órbita.",
  "completan los datos que la nave fue capaz de recabar en órbita.",
  "Con su misión completa, la sonda de superficie se desactiva."
];

var ProbingMoon = [
  "A medida que la sonda de superficie se acerca del planeta, procede a escanear la luna del planeta, encuentra que está desprovista de metales u otros recursos útiles.",
  "A medida que la sonda de superficie se acerca del planeta, procede a escanear la luna del planeta, encuentra que su composición es rica en metales y valiosos recursos.",
  "A medida que la sonda de superficie se acerca del planeta, procede a escanear la luna del planeta, encuentra que es en realidad un asteroides recientemente capturado en una órbita inestable, en unas pocas décadas decaerá de ella, y bañará la superficie con miles de fragmentos explosivos.",
];

var ProbingBeauty = [
  "La IA emplea su programa de análisis estético sobre las imágenes captadas por la sonda, y deterimina que los humanos encontrarían el planeta asombrosamente bello.",
  "La IA emplea su programa de análisis estético sobre las imágenes captadas por la sonda, y deterimina que los humanos encontrarían el planeta extremadamente desagradable."
];

var ProbingCaves = [
  "La corteza del planeta está repleta de un extenso sistema de cuevas, las cuales pueden ser selladas con facilidad para proveer ambientes herméticos.",
  "La corteza del planeta está repleta de un extenso sistema de cuevas, las cuales están aisladas de las temperaturas en la superficie.",
  "El planeta es geológicamente inestable, y peligrosos terremotos son comunes en todos los puntos de la superficie.",
];

var ProbingPlants = [
  "La sonda encuentra plantas alienígenas. Examina una muestra, y encuentra que no son ni comestibles ni tóxicas para los humanos.",
  "La sonda encuentra plantas alienígenas. Examina una muestra, y encuentra que algunas de ellas son comestibles para los humanos.",
  "La sonda encuentra plantas alienígenas. Examina una muestra, y encuentra que todas ellas son altamente tóxicas para los humanos.",
];

var ProbingAnimals = [
  "La sonda encuentra numerosos animales. Después de analizar su patrón de comportamiento, concluye que no son ni hostiles ni útiles para los seres humanos.",
  "La sonda encuentra numerosos animales. Después de analizar su patrón de comportamiento, concluye que algunos animales presentan la oportunidad de ser ganado o animales de carga.",
  "La sonda encuentra numerosos animales. Después de analizar su patrón de comportamiento, concluye que su hostilidad es una amenaza significativa para los seres humanos.",
];

var ProbingSentients = [
  "La sonda observa que una de las especies nativas exhibe un comportamiento social complejo y un lenguaje rudimentario.",
  "La sonda observa que una de las especies nativas exhibe un comportamiento social complejo y emplea herramientas de piedra simples.",
  "La sonda observa que una de las especies nativas exhibe comportamiento social complejo, emplea herramientas de piedra complejas, y ha empezado a domesticar una variedad de plantas y animales.",
  "La sonda investiga un área vegetal con rasgos regulares, y encuentra que está siendo cultivada de manera deliverada por una especie nativa, empleando sofisticadas herramientas de piedra.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente que emplea herramientas de piedra y bronce.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente que emplea herramientas de hierro.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente con un nivel de tecnología medieval.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente con un nivel industrial equivalente al siglo 19.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente con un nivel de tecnología de la Era Atómica del siglo 20.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente con un nivel de tecnología Informática del Siglo 21.",
  "La sonda investiga una de las posibles estructuras observadas por la nave en órbita, y encuentra que son asentamientos habitados por una especie inteligente con un nivel de tecnología trascendente Post-Singularidad.",
  "",

];

var ProbingCulture = [
  "Los nativos viven en un estado de violencia constante, sin ninguna clase de organización social.",
  "Los nativos están organizados en incontables tribus pequeñas, que se encuentran en guerra permanente las unas con las otras.",
  "Los nativos están organizados en incontables tribus pequeñas, muchas de las cuales viven bajo la represión de sus brutales caciques.",
  "Los nativos están organizados en incontables tribus pequeñas, muchas de las cuales están gobernadas sabiamente por sus benevolentes caquices.",
  "Los nativos están organizados en incontables tribus pequeñas, muchas de las cuales están gobernadas de manera colectiva por sus miembros viviendo en paz y armonía entre sí.",
  "Gran parte de la población vive en pequeñas naciones, que destinan gran parte de sus recursos a batallar entre sí.",
  "Gran parte de la población vive como esclavos bajo la opresión de emperadores despotas.",
  "Las naciones más poderosas son gobernadas por jerarcas sacerdotales que controlan con recelo el flujo de la información, dejando a la población en general como ignorantes y analfabetas.",
  "Las naciones más avanzadas son regidas por benevolentes monarcas que ven como su misión salvaguardar el bienestar de sus súbditos.",
  "Las naciones más avanzadas son repúblicas igualitarias, donde las decisiones se realizan en asambleas ciudadanas.",
  "La civilización entera ha sufrido una guerra nuclear recientemente, y los nativos tratan de sobrevivir en las ruinas de sus una vez magnificentes ciudades.",
  "La mayoría del planeta se encuentra dividido entre varias superpotencias que existen en un estado de permanente tensión.",
  "Las naciones más avanzadas son dictaduras, que emplean extensas operaciones de vigilancia policiaca y tecnológica para mantener a raya a sus ciudadanos.",
  "El planeta está dominado por una cohorte de corporaciones multinacionales que han suplantado a casí toda forma de gobierno.",
  "Las naciones más poderosas del planeta son teóricamente democracias, pero los líderes son corruptos y hacen poco para mejorar la calidad de vida de la población en general.",
  "Las naciones del planeta son democracias plenamente funcionales, y la población en general disfruta de un alto nivel de vida.",
  "La población disfruta de existencias de cultura y entretenimiento, en tanto que máquinas automatizadas se encargan de sus necesidades materiales.",
  "La sonda presenta dificultades para poder interpretar la cultura de los nativos, que aparenta usar avanzados sistemas sociopolíticos jamás vistos en la Tierra.",
];

var ProbingCiv = [
  "La sonda realiza exploraciones de gran altitud, y encuentra que hay signos de asentamientos y actividad inteligente por todos lados. Parece que no hay rincón del planeta sin modificar por la civilización nativa.",
];

var ProbingRuins = [
  "La sonda investiga algunas de las estructuras posibles que la nave observó desde órbita, y encuentra que son ruinas dejadas por una especie inteligente extinta. Las ruinas poseen grandes monumentos y escrituras que pueden proporcionar mucha información acerca de la desaparecida civilización.",
  "La sonda investiga algunas de las estructuras posibles que la nave observó desde órbita, y encuentra que son ruinas dejadas por una especie inteligente extinta. Las ruinas contienen artefactos tecnológicos avanzados, algunos todavía funcionales, y bases científicas a la espera de ser decodificadas.",
  "La sonda investiga algunas de las estructuras posibles que la nave observó desde órbita, y encuentra que son ruinas dejadas por una especie inteligente extinta. Las ruinas contienen sistemas de defensa todavía funcionales, y la sonda escapa a duras penas.",
  "La sonda investiga algunas de las estructuras posibles que la nave observó desde órbita, pero encuentra que no son más que formaciones geológicas regulares, no el producto de seres inteligentes.",
];

var ProbingFeatures = [
  "Los nativos de este planeta han extendido una oferta de asilo para los refugiados humanos, y son bienvenidos en caso que la nave decida aterrizar su mundo.",
  "Los nativos de este planeta son conscientes de la misión de la nave, y dejaron en claro que los refugiados humanos no son bienvenidos en su mundo.",
  "Este planeta es una simulación perfecta creada por extraterrestres increíblemente avanzados, basados en la información de las bases de datos científica y cultural.",
  "Este planeta ha sido terraformado de manera reciente por extraterrestres avanzados para que pueda acomodar vida humana, varias estructuras alienígenas orbitan sobre la superficie.",
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
