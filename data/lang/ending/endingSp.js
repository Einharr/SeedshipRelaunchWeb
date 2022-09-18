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
  "Un escuadrón de vehículos espaciales lanzados por los nativos, intercepta a la nave durante su aproximación y comieza a guiarla, en tanto los habitantes del planeta preparan un área de aterrizaje.",
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
  "Bosques de elongados árboles extraterrestres se imponen cientos de metros hacia",
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
  "un cielo tóxico, repleto de veneno.",
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
  "Ellos no pueden salir de la nave excepto en pesados vehículos diseñados para resistir la muy corrosiva ",
  "Ellos pueden abandonar la nave vistiendo voluminosos trajes diseñados para protegerlos de la muy tóxica ",
  "pueden dejar la nave vistiendo pesados trajes que los protegen de ",
  "pueden dejar la nave sin equipo de respiración, vistiendo ",
  "Pueden salir de la nave vistiendo pequeñas mascarillas respiratorias y ",
  "Pueden salir de la nave usando equipos de respiración y ",

  "atmósfera",
  "atmósfera y",
  "el vacío",
  "el vacio y",

  "el calor ardiente",
  "el frío congelante",
  "el calor capaz de fundir el plomo ",
  "las temperaturas cercanas al 0 absoluto",
];

var EndingAtmosphereBut = [
  "Pero la atmósfera corrosiva carcome los sellos de un vehículo de construcción, matando a 1 colono",
  " Pero la atmósfera corrosiva carcome los sellos de varios vehículos de construcción, matando a ",
  " colonizadores",

  "pero una falla de traje mata a 1 colono",
  "pero fallas de trajes resultan en ",
  " colonos muriendo envenenados",

  "Pero una falla en el traje asfixia a 1 colono",
  "Pero algunas fallas en diversos trajes resultan en ",
  " colonos asfixiandose",

  "pero fallas en un equipo de respiración asfixia a 1 colono.",
  "pero fallas en varios equipos de respiración resultan en ",
  " colonos asfixiandose",

  "pero a pesar de la atmósfera respirable, 1 colono muere por exposición al ambiente antes de que los refugios terminaran de construirse",
  "pero a pesar de la atmósfera respirable, ",
  " colonos mueren por exposición al ambiente.",
];

var EndingGravity = [
  "Pueden moverse fácilmente bajo la gravedad similar a la terrestre",
  "Pero la elevada gravedad dificulta el trabajo.",
  "la baja gravedad hace el trabajo un poco mas complejo que bajo la gravedad terrestre.",
  "La aplastante gravedad hace que el movimiento sea casi imposible sin asistencia mecánica,",
  "La gravedad extremadamente baja dificulta mucho el trabajo,"
];

var EndingGravityBut = [
  "pero",
  "y",
  " accidentes en la construcción matan a ",
  " colonos.",
  " colonos mueren por problemas médicos causados por la extrema gravedad.",
  " colonos mueren cuando una estructura en construcción colapsa.",
];


var EndingTemperature = [
  "ropa ligera en la templada temperatura planetaria",
  "vestimentas refrigeradas para resistir las ardientes temperaturas",
  "vestimentas pesadas para resistir las gélidas temperaturas",
  "trajes de amianto refrigerados para resistir las extremas temperaturas",
  "trajes climatizados para resistir las extremas temperaturas",
];

var EndingTemperatureBut = [
  "y un colono mas muere cuando un edificio se derrite parcialmente por las extremas temperaturas.",
  "y ",
  " mas mueren cuando uno de los refugios se derrite en el calor.",

  "y uno mas muere por sobrecalentamiento cuando un sistema de refrigeración falla.",
  "y ",
  " mueren por sobrecalentamiento cuando los sistemas de refrigeración falla.",

  "y un error en el sistema de regulación térmica mata a un colono mas.",
  "y un error en el sistema de regulación térmica mata a ",
  " mas.",

  "y uno mas muere congelado cuando un sistema de calefacción falla.",
  "y ",
  " mas mueren congelados cuando el sistema de calefacción falla.",

  "y 1 mas muere cuando un refugio se quiebra bajo el frío extremo.",
  "y ",
  " mas muere cuando un refugio se quiebra bajo el frío extremo.",

  "pero 1 colono muere cuando una estructura en construcción se derrite bajo el ardiente calor.",
  "pero ",
  " colonos  mueren cuando una estructura en construcción se derrite bajo el ardiente calor.",

  "pero 1 colono muere por sobrecalentamiento cuando un sistema de refrigeración falla.",
  "pero ",
  " colonos mueren por sobrecalentamiento cuando un sistema de refrigeración falla.",

  "Pero 1 colono muere debido a fallas en el sistema de control de temperatura.",
  "Pero fallas en el sistema de control de temperatura matan a  ",
  " colonos.",

  "pero un colono muere por hipotermia cuando un sistema de calefacción falla.",
  "pero  ",
  " colonos mueren por hipotermia cuando un sistema de calefacción falla.",

  "pero un colono muere cuando una estructura en costruccion se resquebraja bajo el frío devastador.",
  "pero  ",
  " colonos mueren cuando una estructura en costruccion se resquebraja bajo el frío devastador.",
];
//TO HERE!

var EndingWater = [
  "Construyen su asentamiento cerca de un río que desemboca en uno de los oceános del planeta, esto les provee de toda el agua necesaria.",
  "Obtienen agua del casquete polar norte del planeta.",
  "Construyen su asentamiento en una plataforma flotante con filtros para extraer agua del océano planetario.",
  "Construyen su asentamiento por encima de la capa de hielo que recubre la superficie, la cual minan para obtener agua.",
  "Deben racionar cuidadosamente la pequeña cantidad de agua que pueden condensar de la atmósfera, ",
  "Deben racionar cuidadosamente la diminuta cantidad de agua que pueden extraer químicamente de las rocas, "
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

  "Las dos especies logran entablar comunicaciones, y los colonos aprenden como llaman los nativos a su planeta ",


  "los habitantes nativos mantienen a los recien llegados bajo una cuidadosa vigilancia, pero tambien los ayudan a establecer refugios temporales y a limpiar el terreno.",

];

var EndingNativeInteractions = [
  "Mientras se expanden de su asentamiento original, los colonos deben encontrar una forma de convivir en su nuevo hogar con los nativos,",

  "guiados por la gran cantidad de información histórica en la base de datos cultural.",
  "basándose en el remanente de información histórica en la base de datos cultural.",
  "con apenas guía de lo poco que pudieron recuperar de la base de datos cultural.",
  "sin ninguna ayuda de la inexistente base de datos cultural.",

  "La diferencia en el nivel tecnológico de los colonos y los nativos dificula las relaciones,",
  "La similitud del nivel tecnológico de los colonos y nativos fácilita las relaciones,",

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
"A medida que inician la construcción de refugios para la colonia, los humano y extraterrestres tratan de establecer comuniciones el uno con el otro.",


	"Los humanos se guian por la riqueza en información histórica que posee la base de datos cultural,",
	"Los humanos tienen que trabajar con los registros históricos sobrevivientes de la base de datos cultural,",
	"Los humanos ganan poca información de la muy dañanada base de datos cultural,",
	"Los humanos no pueden ser guiados por la destruida base de datos cultural,",

  "la cultura de los nativos les hace hostiles hacia los colonos alienígenas.",
  "la cultural de los nativos les hace sospechar de forma extrema hacia los extranjeros.",
  "la cultura de los nativos les hace muy cautos respecto a los humanos.",
  "la cultura de los nativos les hace cautos pero tolerantes hacia los nuevos inmigrantes.",
  "la cultura de los nativos les hace muy hospitalarios hacia los refugiados.",

  "Los alienígenas comparten la apreciación humana de la belleza respecto al planeta, lo que hace más sencillo encontrar puntos comunes entre las culturas de ambos.",
  "Los humanos encuentran al planeta como horriblemente desagradable, lo que hace que sea más difícil conectar con los nativos que encuentran a su planeta natal como bello.",

  "Gracias a las interacciones de la IA con los nativos del planeta durante la aproximación de la nave, los nativos han ofrecido una oferta de asilo para los humanos, y están dispuestos a sobrellevar sus diferencias e integrarlos a su sociedad.",
  "Durante la aproximación de la nave, los nativos dejaron muy en claro que los humanos no serán tolerados en su planeta.",

  "Los nativos les garantizan asilo a los humanos en su planeta, y los refugiados se transforman en una subcultura dentro de la civilización alienígena.",
  "Los nativos son incapaces de aceptar a los humanos como sus iguales, y acaban esclavizándolos como una fuente de trabajo barato." ,

   "Los nativos son incapaces de aceptar a los humanos, y dentro de unos pocos días de haber salido de sus criocámaras, todos los humanos acaban siendo brutalmente eliminados.",

   "y",
   "pero",
];

EndingPSCTInteractions = [
  "La base de datos cultural contiene un inmenso acervo de historia y cultura de tanto culturas de la Tierra como de extraterrestres que la nave encontró por su viaje.",
  "Aunque partes de la base de datos cultural se encuentran desaparecidas, todavía existe una imagen coherente de la historia y cultura de la civilización humana.",
  "La muy dañada base de datos cultural apenas contiene fragmentos aislados de la historia y cultura de la Tierra.",
  "Con la base de datos cultural destruida, los colonos no tienen nada restante de la historia y cultura de la Tierra más allá de lo que se encuentra en sus memorias personales.",

  "Las inmensas pérdidas humanas de colonos hacen casi imposible el preservar su cultura.",
  "Las pérdidas humanas de colonos hace muy difícil el presevar su cultura.",

  "La creciente comunidad humana retiene un fuerte sentido de identidad e historia, e influencias sincréticas humanas enriquecen la civilización nativa.",
  "La creciente comundiad humana retiene un fuerte sentido de su identidad e historia.",
  "Casi toda memoria de la Tierra está perdida, y los nativos llegan a ver a los humanos como culturalmente alienados, sin identidad propia.",

  "Los nativos y colonos trabajan juntos para traducir ",
  "lo que queda",
  "de la base de datos científica al lenguaje nativo.",

  "Poco después de que los colonos arrivasen, la luna del planeta se sale de su orbita y se fragmenta, bombardeando la superficie con meteoritos. La mayoría de tecnología que trajeron con ellos es destruida, y la civilización nativa está demasiado preocupada en reconstruir que de aprender de los colonos.",
  "Aunque los eruditos nativos leen con gran interés la base de datos científica, hay pocas cosas que ya no hubiesen descubierto.",
  "Novedosas teorías científicas se dispersan rápidamente por la población nativa, y en meras décadas la civilización ha tenido un gran avance.",
  "Los colonos usan lo que queda de la nave para crear naves espaciales capaces de alcanzar la luna rica en metales cerca al planeta, y traer con ellos recursos para iniciar una revolución industrial en los nativos.",

  "El concepto del uso de herramientas es nuevo para los nativos primitivos, pero pronto la población entera se encuentra usando herramientas de piedra simples.",
  "La base de datos científica introduce a los nativos en la agricultura, y múltiples comunidades abandonan su estilo de vida cazador-recolector para volverse granjeros.",
  "Inspirados por la base de datos científica, los alienígenas empiezan a emplear herramientas de piedra cada vez más avanzadas, crean las primeras cuidades-estado, y desarrollan un sistema de escritura.",
  "La base de datos científica le enseña a los nativos el empleo de la forja de metales y el uso de herramientas de bronce gradualmente se vuelve ampliamente disperso.",
  "Los nativos aprenden como emplear imprentas y otras máquinas medievales, lo que lleva a una rápida dispersión de ideas y una mayor urbanización.",
  "Los nativos adaptan tecnología equivalente a la de la Tierra durante el siglo 19 y empiezan una rápida revolución industrial.",
  "Los nativos adaptan la electricidad, y tras una gran colaboración entre sus científicos logran construir su primera planta nuclear.",
  "Los nativos construyen sus primeras computadoras, y en pocas décadas el planeta hay avanzado a un nivel comparable al del Siglo 21 en la Tierra.",
  "Los nativos y colonos estudian la información cietífica extraterrestre que la nave añadió en sus viajes, y eventualmente desarrollan una tecnología superior incluso al de la Tierra al momento de la construcción de la nave.",
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
  "Los exploradores estudian las esculturas, frescos y escrituras alienígenas que colman las ruinas. Incluso antes que puedan traducir las escrituras, ellos aprenden mucho acerca de la civilización que las creó, y la causa de su caída, este conocimiento les ayudará a crear su propia cultura en este nuevo mundo.",
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
  "Los colonos son obligados a dejar la electricidad pero logran construir máquinas y fábricas similares a aquellas de la Era Industrial en la Tierra.",
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
  "La base de datos cultural con datos de la Tierra, ha sido mejorada con conocimientos alienígenas, y los colonos usan esto para crear una sociedad más allá de lo que los creadores de la nave hubiesen imaginado, donde cada persona vive una vida de paz, felicidad, y satisfacción espiritual.",
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
  "Los océano de",
  " se ondula con lentas olas kilométricas, bajo",
  "Los océano de",
  " se ondula con lentas y enormes olas de decenas de metros, bajo",
  "El océano de",
  " se extiende hasta el horizonte, bajo",
  "El sereno océano de",
  " se extiende hasta el horizonte, bajo",
  "El océano tan plano como espejo de",
  " se extiende hasta el horizonte, bajo",

  "Las imposiblemente largas y esqueléticas planetas alienígenas de ",
  " se elevan kilómetros hacia",
  "Las increiblemente altas plantas alienígenas de ",
  " se elevan cientos de metros hacia",
  "Los bosques alienígenas de",
  " se extienden en todas direcciones bajo",
  "Las plantas alienígenas achatadas y reforzadas de",
  " se extienden por todas direcciones bajo",
  "Los campos de musgo alienígena nivelados de",
  " se extienden en todas direcciones bajo",

  "Torres y agujas de hielo kilométricas surgen desde la capa de hielo de",
  " en dirección hacia",
  "Torres y agujas de hielo kilométricas surgen desde la capa de hielo del planeta sin nombre en dirección",

  "Elevadas e irregulares torres y agujas de hielo surgen de la capa de hielo de",
  " en dirección hacia",
  "Elevadas e irregulares torres y agujas de hielo surgen de la capa de hielo del planeta sin nombre en dirección hacia",

  "El paisaje repleto de aserrados fragmentos de hielo de",
  " se extiende en todas direcciones debajo de",
  "La planicie de hielo estrujada de",
  " se extiende en todas direcciones debajo de",
  "La capa de hielo perfectamente plana de",
  " se extiende en todas direcciones debajo de",

  "El escarpado paisaje de",
  " se encuentra repleto inmensas paredes de cráter e imponentes mazacotes de roca, los cuales se extienden bajo",
  "El paisaje aserrado y lleno de cráteres de",
  " se extiende bajo",
  "El paisaje quieto y lleno de cráteres de ",
  " se extiende bajo",
  "El paisaje perfectamente quieto de",
  " tiene una configuración monótona excepto por unos cuántos cráteres poco profundos, es envuelto por",
  "El paisaje perfectamente quieto de",
  " se extiende como una planicie perfecta bajo",

  "El paisaje de",
  " está marcado por esbeltas afloraciones rocosas y montañas de inverosímil altura que se extienden debajo de",
  "El paisaje de",
  " está dominado por imponentes montañas e inmensos masacotes que se extienden debajo de",
  "El paisaje estéril y rocoso de",
  " se extiende debajo de",
  "El paisaje liso y rocoso de",
  " se extiende debajo de",
  "El paisaje estéril y perfectamente plano de",
  " se extiende debajo de",

  "un cielo azul.",
  "un tenue cielo azul.",
  "un cielo negro repleto de estrellas.",
  "un cielo extraño.",
  "un cielo tóxico.",
  "un cielo saturado de nubes corrosivas.",

  "Durante la noche, las estructuras extraterrestres son visibles como una banda brillante circundando las estrellas.",

  "Los remanentes de la nave accidentada",
  "Los restos del asentamiento",

  "decaen en el fondo marino del planeta oceánico.",
  "yacen incrustados dentro de las capas de hielo del planeta.",
  "son colonizados por flora alienígena e invadidos por fauna alienígena.",
  "son colonizados por flora alienígena.",
  "yacen en la superficie muerta y rocosa.",

  "Los descendientes de los colonos vivien como una casta de esclavos al servicio de los nativos, pero han perdido todo conocimiento de la Tierra.",
  "Monumentos cercanos a la colonia muerta son erigidos por los nativos para celebrar su victoria sobre los invasores.",
  "Los nativos sapientes del planeta exploran las ruinas, pero no hay suficientes materiales restantes como para aprender algo útil de la extinta raza humana.",

  "Los colonos viven en ",
  "sus propias comunidades como una subcultura de los nativos, y habitan en ",

  "imponentes",
  "altas",
  "poco elevadas",
  "muy poco elevadas pero muy dispersas",

  "ciudades de alta tecnología",
  "ciudades de acero y cristal",
  "ciudades de acero y concreto",
  "ciudades industriales repletas de smog",
  "ciudades de con muros de piedra y barro",
  "aldeas granjeras",
  "tribus merodeandes de cazadores-recolectores",

  "bajo el cielo abierto del planeta,",
  "con edificios herméticamente sellados contra el inhóspito ambiente planetario,",
  "en el interior de cuevas selladas,",
  "debajo de domos herméticamente sellados,",

  "sobre plataformas flotantes en el océano planetario.",
  "sobre el nivel superior de la capa de hielo planetaria.",
  "concentradas alrededor de plantas de producción de agua.",
  "cerca de lagos de agua derretida procedente de los casquetes polares del planeta.",
  "en las riveras de los ríos que discurren hacía los océanos planetarios.",

  "La población vive vidas de paz y satisfacción espiritual más allá de los sueños de sus ancentros en la Tierra, guiados por una combinación de filosofía humana y alienígena.",
  "La población disfruta de su tiempo por medio del arte, entretenimiento y búsqueda espiritual mientras sistemas automatizados satisfacen sus necesidades materiales.",
  "La población vive vidas felices y completas bajo la guía de altruistas e incorruptibles oficiales electos democráticamente.",
  "La pobreza, explotación y crimen campan a sus anchas, y los oficiales corruptos de gobierno no hacen mucho para combatirlos.",
  "Las cuidades están dominadas por los cuarteles generales de ricas megacorporaciones que gobiernan a la población para el beneficio de sus accionistas.",
  "Las calles están llenas de cámaras de seguridad y patrulladas por policía militarizada que acalla de forma violenta cualquie mínimo intento de discrepancia al estado.",
  "Las ciudades están rodeadas de bases militares y silos nucleares, la población vive en miedo de la brutalidad tanto de los ejércitos extranjeros como de la policia secreta de su propio país.",
  "Las cuidades han sido destruidas y yacen en ruinas, los sobrevivientes del intercambio nuclear posapocalíptico deben resistir lo mejor que pueden entre los despojos de la civilización previa.",
  "Las ciudades están centradas alrededor de asambleas populares, donde una democracia directa de ciudadanos iguales gobierna para el bien de todos.",
  "Las ciudades están centradas alrededor de palacios imperiales, donde amados monarcas rigen con benevolencia y justicia a sus súbditos.",
  "Las ciudades son dominadas por los templos de la religión estatal, la cual controla todos los aspectos en la vida de los habitantes.",
  "Las ciudades son dominadas por los palacios de emperadores, quienes viven en máximo lujo en tanto que la población se desgasta para sostenerlos.",
  "Las ciudades-estado son dominadas por barracones para sus masivos ejércitos, los cuales entran en guerras constantes con otras ciudades-estado.",
  "Las tribus son gobernadas de manera colectiva por sus miembros, y cada uno de ellos tiene igualdad de derechos y estatus.",
  "Cada tribu es gobernada por un benovolente caquice, quien guía a su gente de la mejor forma dentro de sus posibilidades.",
  "Cada tribu vive en un regímen de terror bajo sus brutales caciques.",
  "La mayoría de los recursos de las tribus se emplean en guerras sinsentido contra las demás tribus.",
  "La gente vive como bestias primitivas, habiendo olvidado casi todo su lenguaje y cultura.",

  "Los humanos viven como inmigrantes en la sociedad alienígena, y su fuerte memoria cultural de la Tierra ayuda a complementar la cultura nativa.",
  "Los humanos viven como inmigrantes en la sociedad alienígena, y han olvidado gran parte de su herencia cultural terrícola.",
  "Varios de los habitantes nativos del planeta viven en las comunidades humanas, y la cultura humana se ha visto enriquecida por ideas alienígenas.",
  "Comerciantes y enviados diplomátivos de la población nativa se ven ocasionalmente en los asentamientos de los colonos.",
  "La cultura de los colonos ignora en gran medida a los habitantes nativos, los cuales viven en sus propias comunidades en diferentes partes del planeta.",
  "Mucha de la labor de las comunidades humanas es realizada por una desposeída casta esclava de alienígenas que es todo lo que queda de la civilización nativa del planeta.",
  "Ruinas y tumbas masivas son todo lo que resta de la civilización nativa del planeta.",

  "En el sitio de aterrizaje de la nave ",
  "En la",
  "arruinada",
  " primera ciudad ",

  "se alzan monumentos a ",
  " colonos que no sobrevivieron al viaje, y a los ",
  " otros colonos que murieron durante la construcción del primer asentamiento, y ",

  "se alzan monumentos a los ",
  " colonos que no sobrevivieron al viaje y",

  "alzan monumentos a los ",
  " colonos que murieron durante la construcción del primer asentamiento y",

  "se alza un monumento a",
  "la AI de la nave que guió a la Humanidad a su nuevo hogar.",
];

var GameOverText = [
  //Reason of game over
  "Todos los colonos ha percido. Sin manera de cumplir su missión, la AI de la nave desactiva todas las salvaguardias que podrían despertarla, y entra en hibernación por una última vez.",
  "La nave ha sufrido demasiado daño para continuar. La IA siente como su cuerpo se desintegra a su alrededor, antes de que su propia fuente de poder falle y deje de sentir nada.",
  //Time measure
  "La nave se mueve a la deriva por",
  " años, hasta que",

  "miles de",
  "decenas de miles de",
  "cientos de miles de",
  "milliones de",
  //result
  "el lento bombardeo del polvo interestelar la deshace en nada.",
  "se vuelve un cráter más en la superficie de un mundo muerto.",
  "es arrastrado por la gravedad de un gigante de gas y se incinera en su atmósfera.",
  "es arrastrado por la gravedad de una estrella y desintegrado por el calor.",
  "es arrastrado por la gravedad de un agujero negro y destruido sin dejar rastro.",
  "exploradores alienígenas la encuentran y la añaden a su museo de especies extintas.",
  "eventualmente la nave impacta contra un planeta muerto. Varias trazas de materia orgánica y bacterial procedente de los cadáveres de los colonos eventualmente llevan a la aparición de nueva vida.",
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
