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
  "y",
  "pero",
  "aunque",

  "Ellos nombran a su mundo como ",
  "Y construyen un monumento a los ",
  " colonos que no lograron sobrevivir al viaje.",
  "Los colonos despiertan de sus cámaras de criosueño y exploran su nuevo hogar.",


];

var EndingNameBecause = [
  "debido a su calor extremo.",
  "debido a su frío extremo.",
  "debido a que su altísima gravedad hace al horizonte completamente plano.",
  "debido a que erguirse bajo su alta gravedad supone un esfuerzo heroico.",
  "debido a que su baja gravedad causa que posea muchas montañas altas y escarpadas.",
  "debido a que toda la tierra se encuentra sumergida bajo un océano de escala planetaria.",
  "debido a que toda la superficie se encuentra cubierta de hielo.",
  "debido a la ausencia de agua.",
  "debido a su exhuberante vida vegetal.",
  "debido a su venenosa vegetación.",
  "debido a la abundancia de plantas comestibles.",
  "debido al extenso sistema de cuevas que se extiende por la corteza.",
  "debido a su generosa cantidad de recursos minerales.",
  "debido a su carencia de recursos minerales.",
  "debido a sus perfectas condiciones.",
  "debido a que recuerda a la Tierra que tuvieron que dejar atrás.",
  "debido a que es este mundo.",


];

var EndingLanding = [
  "El sistema de aterrizaje logra controlar el descenso de la nave, y ",
  "El sistema de aterrizaje dañado no logra controlar el descenso de la nave completamente, y sufre algo de daño cuando",
  "La IA usa los propulsores de maniobra para controlar a duras penas el descenso de la nave, y"
];

var EndingLandingBut = [
  "chapotea de manera gracil en",
  "aterriza cuidadosamente en",

  "ameriza con algo de fuerza en",
  "aterriza con algo de fuerza en",

  "ameriza de manera brusca en",
  "se estrella contra",
  "embiste contra"
];

var EndingLandingBonus = [
  "Un escuadron de vehículos espaciales lanzados por los nativos, intercepta a la nave durante su aproximación y comieza a guiarla, en tanto los habitantes del planeta preparan un área de aterrizaje.",
  "La civilización nativa lanza a duras penas una nave espacial para guiar a la nave en su descenso, mientras los habitantes del planeta preparan un área de aterrizaje.",
  "La civilización nativa lanza una tosca nave espacial para monitorear la aproximación de la nave, mientras los habitantes del planeta preparan un área de aterrizaje.",
];

var EndingSurface = [
  "el océano adyacente al área costera de uno de los continentes del planeta.",
  "el océano que cubre todo el planeta.",
  "la capa superficial del manto de hielo que cubre al planeta.",
  "un campo de vegetación extraterrestre.",
  "la superficie rocosa.",
  "un campo de vegetación extraterrestre antes de detenerse."
];

var EndingSurfaceFull = [
  "La nave se bambolea sobre un océano de lentas olas kilométricas, bajo",
  "La nave se mece sobre la superficie de olas altas y lentas, bajo",
  "La nave flota sobre la superficie de un océano que se extiende por el horizonte, bajo",
  "La nave flota sobre la superficie de un manso océano que se extiende por el horizonte, bajo",
  "La nave flota sobre la superficie de un océano plano como espejo, bajo",

  "Bosques de árboles extraterrestres inimaginablemente delgados se alzan kilómetros hacia",
  "Bosques de elongados árboles extraterrestres se imponen ciento de metros hacia",
  "Bosques de vegetación alienígena se extienden bajo",
  "Arboledas de rechonchas y gruesas plantas extraterrestres se extienden bajo",
  "Una capa de musgo alienígena se dispersa bajo",

  "Picos de hielo de varios kilómetros se proyectan hacia",
  "Altas e irregulares agujas de hielo se elevan hacia",
  "Escarpadas estalagmitas de hielo se extienden bajo",
  "Una arrugada planicie de hielo se extiende bajo",
  "Una planicie de hielo completamente lisa se extiende bajo",

  "Un escarpado paisaje de prominentes paredes de crater y largos fragmentos de roca se extiende bajo",
  "Un escarpado paisaje repleto de cráteres se extiende bajo",
  "Un paisaje perfectamente estático, lleno de cráteres se extiende bajo",
  "Un paisaje perfectamente estático, a excepción de unos pocos cráteres poco profundos, se extiende bajo",
  "Un paisaje perfectamente estático y plano, se extiende bajo",

  "Un paisaje de delgaduchos afloramientos rocosos y montañas irracionalmente altas se extiende bajo",
  "Un paisaje de gigantescos peñascos e imponentes montañas se extiende bajo",
  "Un paisaje desolado y rocoso se extiende bajo",
  "Un paisaje llano y rocoso se extiende bajo",
  "Un paisaje totalmente plano y estéril se extiende bajo",
];

var EndingSky = [
  "un cielo azul.",
  "un tenue cielo azul.",
  "un cielo negro repleto de estrellas.",
  "un cielo extraño.",
  "un cielo toxico, repleto de veneno.",
  "un cielo saturado de nubes corrosivas."
];

var EndingObservation = [

  "Una planicie irregular de hielo se extiende bajo un cielo alienígena.",
  "Un paisaje perfectamente plano, y estéril se extiende bajo un cielo venenoso.",
  "Un paisaje de delgaduchos afloramientos rocosos y montañas irracionalmente altas se extiende bajo un cielo saturado de nubes corrosivas.",
  "Un paisaje totalmente plano y estéril se extiende bajo un cielo negro repleto de estrellas.",
  "Un paisaje desolado y rocoso se extiende bajo un tenue cielo azul. "
];

var EndingMoon = [
  "Los colonos emplean los restos de la nave para construir vehículos capaces de llegar a la luna rica en metales del planeta,",
  "y minarla para complementar los ya de por sí abundantes recursos del planeta.",
  "y minarla para compensar parcialmente los pobres recursos del planeta.",
  "Antes que los colonos puediesen asegurar su base tecnológica, la luna del planeta decae de su órbita, separándose en fragmentos que bombardean la superficie. Algunos de los colonos sobreviven, pero gran parte de su tecnología resulta destruida.",
];

//NEW FROM HERE!
var EndingAtmosphere = [
  "Ellos no pueden salir de la nave excepto en pesados vehiculos diseñados para resistir la muy corrosiva ",
  "Ellos pueden abandonar la nave vistiendo bulminosos trajes diseñados para protegerlos de la muy toxica ",
  "pueden dejar la nave vistiendo pesados trajes que los protegen de ",
  "pueden dejar la nave sin equipo de respiración, vistiendo ",
  "Pueden salir de la nave vistiendo pequeñas mascarillas respiratorias y ",
  "Pueden salir de la nave usando equipos de respiracion y ",

  "atmósfera",
  "atmósfera y",
  "el vacio",
  "el vacio y",

  "el calor ardiente",
  "el frio congelante",
  "el calor capaz de fundir el plomo ",
  "las temperaturas cercanas al 0 absoluto",
];

var EndingAtmosphereBut = [
  "Pero la atmósfera corrosiva carcome los sellos de un vehiculo de construcción, matando a 1 colono",
  " Pero la atmósfera corrosiva carcome los sellos de varios vehiculos de construcción, matando a ",
  " colonizadores",

  "pero una falla de traje mata a 1 colono",
  "pero fallas de trajes resultan en ",
  " colonos muriendo envenenados",

  "Pero una falla en el traje asfixia a 1 colono",
  "Pero algunas fallas en diversos trajes resultan en ",
  " colonos asfixiandose",

  "pero fallas en un equipo de respiracion asfixia a 1 colono.",
  "pero fallas en varios equipos de respiracion resultan en ",
  " colonos asfixiandose",

  "pero a pesar de la atmósfera respirable, 1 colono muere por exposicion al ambiente antes de que los refugios terminaran de construirse",
  "pero a pesar de la atmósfera respirable, ",
  " colonos mueren por exposicion al ambiente.",
];

var EndingGravity = [
  "Pueden moverse facilmente bajo la gravedad similar a la terrestre",
  "Pero la elevada gravedad dificulta el trabajo.",
  "la baja gravedad hace el trabajo un poco mas complejo que bajo la gravedad terrestre.",
  "La aplastante gravedad hace que el movimiento sea casi imposible sin asistencia mecanica,",
  "La gravedad extremadamente baja dificulta mucho el trabajo,"
];

var EndingGravityBut = [
  "pero",
  "y",
  " accidentes en la construccion matan a ",
  " colonos.",
  " colonos mueren por problemas medicos causados por la extrema gravedad.",
  " colonos mueren cuando una estructura en construccion colapsa.",
];


var EndingTemperature = [
  "ropa ligera en la templada temperatura planetaria",
  "vestimentas refrigeradas para resistir las ardientes temperaturas",
  "vestimentas pesadas para resistir las gelidas temperaturas",
  "trajes de amianto refrigerados para resistir las extremas temperaturas",
  "trajes calefacciones para resistir las extremas temperaturas",
];

var EndingTemperatureBut = [
  "y un colono mas muere cuando un edificio se derrite parcialmente por las extremas temperaturas.",
  "y ",
  " mas mueren cuando uno de los refugios se derrite en el calor.",

  "y uno mas muere por sobrecalentamiento cuando un sistema de refrigeración falla.",
  "y ",
  " mueren por sobrecalentamiento cuando los sistemas de refrigeración falla.",

  "y un error en el sistema de regulacion termica mata a un colono mas.",
  "y un error en el sistema de regulacion termica mata a ",
  " mas.",

  "y uno mas muere congelado cuando un sistema de calefaccion falla.",
  "y ",
  " mas mueren congelados cuando el sistema de calefaccion falla.",

  "y 1 mas muere cuando un refugio se quiebra bajo el extremo frio.",
  "y ",
  " mas muere cuando un refugio se quiebra bajo el extremo frio..",

  "pero 1 colono muere cuando una estructura en construccion se derrite bajo el ardiente calor.",
  "pero ",
  " colonos  mueren cuando una estructura en construccion se derrite bajo el ardiente calor.",

  "pero 1 colono muere por sobrecalentamiento cuando un sistema de refrigeración falla.",
  "pero ",
  " colonos mueren por sobrecalentamiento cuando un sistema de refrigeración falla.",

  "Pero 1 colono muere debido a fallas en el sistema de control de temperatura.",
  "Pero fallas en el sistema de control de temperatura matan a  ",
  " colonos.",

  "pero un colono muere por hipotermia cuando un sistema de calefacción falla.",
  "pero  ",
  " colonos mueren por hipotermia cuando un sistema de calefacción falla.",

  "pero un colono muere cuando una estructura en costruccion se resquebraja bajo el frio devastador.",
  "pero  ",
  " colonos mueren cuando una estructura en costruccion se resquebraja bajo el frio devastador.",
];
//TO HERE!

var EndingWater = [
  "Construyen su asentamiento cerca de un río que desemboca en uno de los oceános del planeta, esto les provee de toda el agua necesaria.",
  "Obtienen agua del casquete polar norte del planeta.",
  "Construyen su asentamiento en una plataforma flotante con filtros para extraer agua del oceano planetario.",
  "Construyen su asentamiento por encima de la capa de hielo que recubre la superficie, la cual minan para obtener agua.",
  "Deben racionar cuidadosamente la pequeña cantidad de agua que pueden condensar de la atmósfera, ",
  "Deben racionar cuidadosamente la diminuta cantidad de agua que pueden extraer de las rocas, "
];

var EndingWaterBut = [
  "y la escasez de agua mata a ",
  " colonos.",
  "y las cosechas fallidas matan a ",
  " colonos.",
  ""
];

var EndingConstruction = [
  "Los colonos empiezan la construcción de un asentamiento con la ayuda de los robots de construcción de la nave.",
  "Los colonos empiezan la construcción de un asentamiento con la ayuda de los robots parcialmente dañados de la nave.",
  "Los colonos empiezan la construcción de un asentamiento con la ayuda de los pocos robots restantes en la nave.",
  "Los colonos empiezan la construcción de un asentamiento sin la ayuda de los arruinados robots de construcción de la nave.",
];

var EndingPlants = [
  "La vida vegetal del planeta es extremadamente tóxica para los humanos, y ",
  " colonos mueren antes que puedan erradicarla de su asentamiento.",
  "Una falla en el almacenamiento causa una contaminación del suministro de alimentos de la colonia con las ponzoñosas plantas nativas, y ",
  " colonos mueren.",

  "Los colonos cultivan las resistentes plantas nativas como comida, reduciendo la necesidad sobre la poca agua que pueden extraer químicamente de las rocas",
  "Los colonos cultivan las plantas nativas como comida, reduciendo la necesidad sobre la poca agua que pueden condensar de la atmósfera",
  "Los colonos cultivan las plantas nativas que crecen sobre la capa de hielo, y minan agua potable de otras secciones de la capa",
  "Los colonos cultivan la vegetación flotante como comida, y extraen agua potable del océano",
  "Los colonos cultivan las plantas nativas como comida, y extraen agua del casquete polar norte",
  "Construyen su asentamiento cerca de un río que desemboca en uno de los océanos del planeta, y cultivan las plantas nativas como comida",

];

var EndingNatives = [
  "La nave se ve rodeada rápidamente por una multidud de cautelosos nativos",
  "La nave se ve rápidamente rodeada por un campamento de soldados, eruditos, sacerdotes y diplomáticos nativos.",
  "La nave se ve rápidamente rodeada por un campamento de soldados, científicos y diplomáticos nativos.",

  "Las dos especies logran entablar comuniciones, y los colonos aprenden como llaman los nativos a su planeta ",


  "los habitantes nativos mantienen a los recien llegados bajo una cuidadosa vigilancia, pero tambien los ayudan a establecer refugios temporales y a limpiar el terreno.",

];

var EndingNativeInteractions = [
  "Mientras se expanden de su asentamiento original, los colonos deben encontrar una forma de convivir en su nuevo hogar con los nativos,",

  "guiados por la gran cantidad de información histórica en la base de datos cultural.",
  "basándose en el remanente de información histórica en la base de datos cultural.",
  "con apenas guía de lo poco que pudieron recuperar de la base de datos cultural.",
  "sin ninguna ayuda de la inexistente base de datos cultural.",

  "La diferencia en el nivel tecnológico de los colonos y los nativos dificula las relaciones,",
  "La similitud del nivel tecnológico de los colonos y nativos facilita las relaciones,",

  "la cultura de los nativos los hace abiertamente hostiles a los humanos recién llegados.",
  "la cultura de los nativos los hace extremadamente sospechosos hacia los extraños.",
  "la cultura de los nativos los hace cautelosos hacia los humanos.",
  "la cultura de los nativos los hace cautelosos, pero tolerantes hacia los inmigrantes.",
  "la cultura de los nativos los hace receptivos hacia los refugiados.",

  "Gracias a las interacciones de la IA con los nativos del planeta durante la aproximación de la nave, estos ya habían extendido una oferta de asilo hacia los humanos, y están dispuestos a aceptar las diferencias y coexistir pacíficamente.",
  "Mientras la nave se aproximaba, los nativos dejaron en claro que los humanos no son bienvenidos en su planeta.",

  "Las dos especies acaban viviendo en comunidades muy cercanas, con algunos integrantes de cada especie adoptando el estilo de vida de la otra.",
  "Las dos especies acaban viviendo en comunidades separadas, con relaciones amistosas entre ambas.",
  "Las dos especies acaban viviendo en partes distintas del planeta, tenidendo poco contacto entre sí.",

  "Los conflictos culminan en una guerra que resulta en el esclavización de los nativos por los humanos.",
  "Los conflictos culminan en una guerra en la que los humanos son esclavizados por los nativos.",

  "Los conflictos culminan en una guerra donde se produce el genocido completo de los nativos.",
  "Los conflictos culminan en una guerra que termina con la erradicación total de los humanos.",
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
  "Emplean a algunos de los titánicamente fuertes animales nativos como bestias de carga, evitando que los colonos se tengan que esforzar bajo la aplastante gravedad",
  "Emplean a algunos de los corpulentos animales nativos como bestias de carga, haciendo que el trabajo en alta gravedad sea más sencillo",
  "Emplean a algunos de los animales nativos como bestias de carga",
  "Emplean a algunos de los ágiles animales nativos como bestias de carga, haciendo el trabajo en la baja gravedad menos extraño",
  "Emplean a algunos de los ágiles animales nativos como bestias de carga, haciendo el trabajo en la muy baja gravedad menos extraño",

  "Los colonos se las arreglan para mantener a la implacablemente hostil fauna nativa a raya, pero ",
  " colonos son asesinados antes antes que el perímetro de seguridad sea establecido.",
  "Los animales hostiles invaden la colonia, matando a ",
  " colonos.",

];

var EndingCaves = [
  "Los terremotos matan a ",
  " colonos antes que puedan ergir estructuras capaces de soportarlos.",
  "Un terremoto colapsa el asentamiento inicial parcialmente terminado, matando a ",
  " colonos.",

  "Establecen su asentamiento en el interior de cuevas herméticas y térmicamente aisladas, lo que provee un refugio ya listo ante la inhóspita temperatura y atmósfera planetaria.",
  "Establecen su asentamiento en el interior de cuevas herméticas, lo que provee un refugio ya listo ante la inhóspita atmósfera planetaria.",
  "Establecen su asentamiento en el interior de cuervas térmicamente aisladas, lo que provee un refugio ya listo ante la inhóspita temperatura planetaria.",
  "Establecen su asentamiento cerca de cuevas, que emplean como almacenamiento.",
];

var EndingRuins = [
  "Con el asentamiento completo y su suministro de comida asegurado, los colonos organizan una expedición a las ruinas cercanas.",
  "Los exploradores estudian las esculturas, frescos y escrituras alienígenas que colman las ruinas. Incluso antes que puedan traducir las escrituras, ellos aprenden mucho acerca de la civilización que las creo, y la causa de su caída, este conocimiento les ayudará a crear su propia cultura en este nuevo mundo.",
  "Ellos también",
  "Los exploradores",
  "encuentran avanzadas máquinas alienígenas, algunas de las cuales siguen funcionando.",
  "La ingeniería reversa de esa maquinaria, avanzará su ciencia más allá que aquella de la Tierra al momento de lanzar la nave.",
  "La ingeniería reversa de esa maquinaria, les permitirá compensar algunas carencias de la base de datos científica.",
  "Sin embargo, ellos también",
  "Los exploradores",
  "activan un mecanismo de defensa latente, que mata a ",
  " colonos."

];

var EndingFeatures = [
  //Наблюдение
  "Las misteriosas estructuras alienígenas son visibles como una cinta de objetos brillantes que rodean el cielo nocturno, pero los alienígenas no interfieren con el desarrollo cultural de la colonia.",
  "Objetos enigmáticos descienden de manera períodica de las estructuras alienígensa en órbit, y los colonos que viven cerca de ellos son más propensos a la cooperación y empatía que bajo circustancias normales.",
  "Objetos enigmáticos descienden de manera períodica de las estructuras alienígensa en órbit, y los colonos que viven cerca de ellos son más propensos al egoísmo y el conflicto que bajon circustancias normales.",
  //Красота
  "La asombrosa belleza natural del planeta hace la vida más placentera, ayudando a los colonos a formar una mejor sociedad.",
  "La espantosa fealdad del planeta incrementa la tensión entre los colonos haciendo más difícil crear una sociedad pacífica.",
  //Симуляция
  "",
  "",
  "",
];

var EndingScience = [
  "Los colonos usan el avanzado conocimiento científico alienígena, para crear un nivel tecnológico más allá de los sueños de aquellos que crearon la nave.",
  "Los colonos logran mantener un nivel de tecnología equivalente al de la Tierra durante el lanzamiento de la nave.",
  "Los colonos fallan en el mantenimiento de sus avanzadas computadoras pero continuan usando electrónica sencilla y aparatos mecánicos.",
  "Los son obligados a dejar la electricidad pero logran construir máquinas y fábricas similares a aquellas de la Era Industrial en la Tierra.",
  "Los colonos adoptan un nivel de tecnología medieval.",
  "Los colonos adoptan tecnología basada en herramientas de hierro.",
  "Los colonos adaptan tecnología basada en avanzadas herramientas de piedra, madera y bronce.",
  "Los colonos adaptan tecnología basada en herramientas de piedra y madera.",
  "Los colonos pierden todo el conocimiento avanzado, excepto la creación de herramientas de piedra y agricultura simple.",
  "Los colonos pierden casí todo el conocimiento de agricultura y forja, sobreviven como cazadores-recolectores y usan herramientas de piedra simples.",
  "Los colonos pierden absolutamente todo el conocimiento científico y retroceden a una existencia primitiva anterior a la Edad de Piedra."
];

var EndingScienceBut = [
  "El planeta no puede sostener vida humana sin asistencia tecnológica, pero antes que su tecnología falle, los colonos originales construyen robustos hábitats aislantes.",
  "y modifican genéticamente a sus descendientes para sobrevivir en la extremadamente baja gravedad.",
  "y modifican genéticamente a sus descendientes para sobrevivir en la altísima gravedad."
];

var EndingSustain = [
  "El planeta no puede sostener vida humana sin asistencia tecnológica,",

  "y los descendientes de los colonos originales fallecen cuando pierden la capacidad de reparar sus hábitats herméticamente sellados.",
  "y los descendientes de los colonos originales fallecen cuando sus estructuras ceden ante las temperaturas extremas",
  "y los descendientes de los colonos originales fallecen por problemas de salud relacionados a la muy",
  "y los descendientes de los colonos originales fallecen cuando sus sistemas de purificación de agua dejan de funcionar.",

  "pero antes de que su tecnología falle, los colonos originales",
  "construyen robustos",
  "herméticos",
  "aislantes",
  "y casí indestructibles hábitats",

  "se ven obligados a modificar genéticamente a sus descendientes para sobrevivir en la",
  " gravedad",
  "y diseñan sistemas de reciclaje de agua automatizados capaces de trabajar de forma indefinida sin mantenimiento.",
  "",

]

var EndingCulture = [
  "El dictador que suplantó a uno de los colonos originales rápidamente toma el control de la colonia y crea un régimen autoritario.",

  "La base de datos cultural posee una vasta cantidad de información para ayudar a los colonos en sus decisiones de gobierno, y una inmensa colección de arte para entretenerlos e inspirarlos. ",
  "A pesar que partes de la base cultural se hayan perdido, todavía posee gran cantidad de información histórica para instruir a los colonos en la creación de su sociedad, y abundante arte y literatura para entretenerlos e inspirarlos.",
  "Los colonos buscan en la muy dañada base de datos cultural, y logran reconstruir algo de información acerca de la historia y cultura de la Tierra con que inspirarse y guiarse.",
  "Con la base de datos cultural destruida, aquellos nacidos en el nuevo mundo no conocerán nada de la historia y cultura de la Tierra, excepto por los relatos que los colonos originales les transmitan.",

  "Las intensas pérdidas sufridas por los colonos hacen que construir una nueva sociedad sea más difícil.",
  "Las pérdidas sufridas por los colonos hacen que construir una nueva sociedad sea más difícil.",
];

var EndingPolitics = [
  "La base de datos cultural con datos de la Tierra, ha sido mejorada con conocimientos alienígenas, y los colonos usan esto para sociedad más allá de lo que los creadores de la nave hubiesen imaginado, donde cada persona vive una vida de paz, felicidad, y satisfacción espiritual.",
  "La base de datos cultural remanente es conservada como archivos digitales al cual todos tienen acceso. Los colonos trabajan juntos para crear una sociedad igualitaria en la que la tecnología se encarga de satisfacer las necesidades materiales de la gente, liberándolos para perseguir vidas de arte, entretenimiento, y búsqueda espiritual.",
  "La base de datos cultural remanente es conservada como archivos digitales al cual todos tienen acceso. Los colonos crean las bases para una democracia en la que todos los ciudadanos son educados e integrados",
  "La base de datos cultural remanente es conservada como archivos digitales al cual todos tienen acceso. Los colonos crean las bases para una democracia, pero resulta ser vulnerable a la corrupción y los individuos poderosos se vuelven la clase regente de facto.",
  "La base de datos cultural remanente es conservada como archivos digitales al cual todos tienen acceso. Los colonos crean las bases para una democracia capitalista, pero el gobierno se transforma en un peón de las grandes corporaciones que mandan sobre el planeta para el beneficio de sus dueños.",
  "La colonia se desarrolla como un estado policial de alta tecnología, en el que la población vive bajo la vigilancia constante de una clase gobernante intocable, y la más ligera disidencia es reprimida con violencia. La base de datos restante se conserva, pero su acceso está estrictamente limitado por el estado.",
  "La colonia se separa en varias naciones grandes que se basan en la economía de guerra. Los colonos tratan de conservar lo que queda de la base de datos cultural, pero mucha de ella se pierde en las guerras, o es corrompida las por capas y capas de propaganda revisionista de los gobiernos.",
  "La colonia se separa en varias naciones grandes que terminan en una guerra constante entre sí, hasta que imprudentes líderes inician una guerra nuclear que destruye los cimientos de la civilización. Los colonos supervivientes viven en un páramo nuclear. Lo que restaba de la base de datos cultural se pierde, y lo que se recuerda de la Tierra se confunde con historias de la colonia antes de la guerra.",

  "Los colonos usan la base de datos cultural restante para guiarse en la creación de una república basada en libertad e igualdad de derechos.",
  "Los primeros líderes de la colonia, se vuelven los fundadores de una línea de monarcas benevolentes, que asumen como su misión solemne guiar a la colonia y salvaguardar el conocimiento restante de la Tierra.",
  "El conocimiento remanente de la Tierra se transforma en propiedad exclusiva de una casta sacerdotal, que lo restringe a sus bibliotecas. Para la mayoría de la población, la Tierra se vuelve en un paraíso perdido tras una mitológica caída de la gracia, y la recompensa final a aspirar tras una vida de servicio a la opresiva teocracia.",
  "La colonia se desarrolla como una estado esclavista, en el que la mayoría de la población se esfuerza en construir gigantescos monumentos de oro a sus emperadores, o batallar en sus guerras. Mucho del conocimiento restante de la Tierra se ha perdido, y los emperadores solo preservan el que pueda ayudar a mantener su reinado.",
  "La colonia se separa en muchos pequeños estados, que existen en un estado de guerra constante. Lo que sobra de la base de datos cultural se pierde en los conflictos.",

  "La base de datos cultural restante se transforma en la fundación de una rica historia oral. La colonia se divide en una gran cantidad de pequeñas tribus, cada una de ellas gobernada de manera colectiva por todos sus miembros y coexistiendo pacíficamente entre sí.",
  "La base de datos cultural restante se transforma en la fundación de una rica historia oral, y una casta de benevolentes caciques toma como su deber la protección de esa historia y la de sus tribus.",
  "La base de datos cultural restante se transforma en la fundación de la historia oral de los colonos, pero una casta de caciques brutales la corrompe buscando fortalecer su propio poder.",
  "La colonia se desarrolla en muchas pequeñas tribus, que existen en un estado de guerra constante. La información de la base de datos cultural se pierde casí por totalidad, y la Tierra solo se recuerda como la morada de un panteón de guerreros mitológicos.",
  "Los colonos se revierten al salvajismo, y todo el conocimiento de la historia y cultura de la Tierra se pierde en una pelea diaria por la supervivencia.",

];

var EndingResources = [
  "El planeta es rico en metales y otros recursos,",
  "El planeta es pobre en metales y otros recursos,",
  "El planeta carece de metales y otros recursos accesibles,",
];

var EndingResourcesBut = [
  //none
  " así que los colonos son incapaces de mantener un nivel elevado de tecnología, incluso con la base de datos científica intacta.",
  " así que los colonos son incapaces de mantener un nivel elevado de tecnología, incluso con una muy conservada base de datos científica.",
  " así que los colonos encuentran difícil hacer uso de lo que pudieron recuperar de la base de datos científica. ",
  " y cualquier información útil que la base de datos haya albergado, y pudiese ser de ayuda, ha sido destruida.",

  //poor
  " pero la base de datos científica posee una generosa cantidad de información sobre como emplear los materiales existentes.",
  " pero la base de datos científica, aunque dañada, todavía posee una gran cantidad de información sobre como emplear los materiales existentes. ",
  " y la base de datos científica significa que los colonos encuentran difícil como emplear los materiales existentes.",
  " y sin la base de datos científica los colonos encuentran difícil como emplear los materiales existentes.",

  //rich
  " y la base de datos científica posee una generosa cantidad de información sobre como emplearlos.",
  " y la base de datos científica, aunque dañada, todavía posee una gran cantidad de información sobre como emplearlos.",
  " sin embargo, la base de datos extremadamente dañada significa que los colones deben reinventar mucha de la tecnología necesaria para emplearlos.",
  " sin embargo, sin la base datos científica los colones deben reinventar mucha de la tecnología necesaria para emplearlos.",
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
