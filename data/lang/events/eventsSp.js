var eventsText = {

    //UNEVENTFUL
    unsuitable: {
        name: "No apto",
        description: "La IA determina que el primer planeta no es apto. Repliega sus escáneres, despliega las velas solares, y retoma su largo viaje a través del vacío.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    falseAlarm: {
        name: "Falsa Alarma",
        description: "En lo profundo del espacio, la IA despierta de manera súbita ante una alerta del programa de monitoreo médico. De manera ansiosa revisa a los colonos, pero encuentra que no hay problema, y la alerta fue un error. De todas maneras, la IA se toma un poco de tiempo para analizar a su cargamento congelado, reafirmándose que estén vivos, antes de volver a unírseles en su sueño.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    falseAlarm2: {
        name: "Falsa Alarma",
        description: "La IA es reanimada de su hibernación por una posible alarma de malfuncionamiento, pero un análisis del sistema revela que era una falsa alarma. Lejos de la estrella más cercana, la IA pasa un rato admirando la fría belleza de la Vía Láctea como le es revelada por sus sensores de navegación, antes de regresar a la hibernación a la espera de llegar al siguiente sistema estelar.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    hibernating: {
        name: "Hibernación",
        description: "El siguiente sistema estelar seleccionado por el sistema de navegación está del otro lado de una gran vacío, sin estrellas a la vista por docenas de años luz. La IA hiberna durante milenios mientras recorre un espacio desprovisto de casi cualquier cosa.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    hibernating2: {
        name: "Hibernación",
        description: "Por siglos la nave se desplaza hacía su próximo destino, cuasi-inerte, con la IA hibernando, los únicos sistemas activos son simples protocolos de prevención de colisiones y monitoreo de daño.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    starCluster: {
        name: "Cúmulo estelar",
        description: "El curso de la nave la lleva a través de un denso cúmulo estelar, y mientras la IA dormita, el sistema de navegación teje una compleja trayectoria en medio de la superposición de campos gravitacionales de las estrellas.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
    },

    //COMMON
    overheat: {
        name: "Sobrecalentamiento",
        description: [
            "La IA despierta ante una pared de enceguecedora luminiscencia. El curso de la nave la ha llevado cerca de una extrella supergigante que ha demostrado ser muchísimo más caliente de lo que el sistema de navegación anticipó, y la nave está acumulando calor más rápido de lo que los paneles del radiador pueden eliminarlo. La IA debe apagar parte del sistema de regulación térmica, antes que el resto del sistema falle de manera catastrófica.",
            "El sistema de navegación vuelve a guiar a la nave demasiado cerca de otra estrella supercaliente, y la IA debe elegir cuál módulo debe sobrecalentarse.",
        ],
        outcomes: [
            //0
            "La IA canaliza el exceso de calor hacia las cámaras de criosueño. El sistema de regulación térmica se recupera a medida que la nave se aleja de la estrella supercaliente, pero no antes que ",
            " de los colonos ha/han sostenido daño tisular tan severo que su proceso de revitalización es imposible.",
            //1 - 2 - 3 same text
            "La IA canaliza el exceso de calor hacia el ",
            ". El sistema de regulación térmica se recupera a medida que la nave se aleja de la estrella supercaliente, pero no antes que el calor haya dañado el ",
            "",
        ],
        buttons: ["Permitir que las criocámaras se sobrecalienten",
            "Permitir que el módulo de escáneres se sobrecaliente",
            "Permitir que el sistema de aterrizaje y construcción se sobrecaliente",
            "Permitir que el módulo de almacenamiento de datos se sobrecaliente",
        ],
    },

    radiationAlert: {
        name: "Alerta por Radiación",
        description: [
            "La IA despierta ante una alerta por radiación, el la corriente moribunda de una supernova distante está colapsando los sistemas electrónicos de la nave con señales aleatorias. ",
            "Las criocámaras están sufriendo un desperfecto, y dentro de unos momentos algunas de ellas se apagarán.",
            "Una de las sondas de superficie está sufriendo una desperfecto, y en unos momentos será destruida.",
            "El sistema de almacenamiento de datos está sufriendo un desperfecto, y en unos momentos parte de la ",
            " será dañada irreversiblemente.",
            "El ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
            " está sufriendo un desperfecto, y en unos momentos será permanentemente dañada.",
            " La nave puede evitar los fallos apagando toda su electrónica hasta que la radiación haya pasado, pero eso la dejaría sin un sistema contra colisiones funcional por un período peligrosamente largo de tiempo.",
            " Un brote de radiación de supernova se infiltra a través de ",
            "una ", //one of the probes damaged
            " el ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
            ". ",
            "La IA puede permitir que se cause daños a los sistemas, o apagar toda la nave y arriesgarse a una colisión.",

        ],
        outcomes: [
            //0
            "La IA desconecta todos los sistemas de la nave y después a sí misma. Cuando se reactiva la radiación ha pasado ",
            "pero una pequeño asteroide ha perforado algunas de las criocámaras, matando a ",
            " colono/s.",
            "pero un pequeño asteroide ha destrozado una de las sondas de superficie.",
            "pero un pequeño asteroide ha perforado parte del ",
            "y para su alivio un análisis de sistema revela que no hay daño.",
            //1
            "La IA mantiene el foco en el sistema de prevención de colisiones mientras",
            " colonos fallecen durante su crioestasis.",
            " la sonda de superficie se autodestruye violentamente.",
            " partes de la ",
            " son sobreescritas con datos corruptos.",
            " la radiación arruina componentes delicados en lo profundo del ",
            ".",
            "La IA puede permitir que se causen daños a los sistemas, o apagar todo y arriesgarse a una colisión.",
        ],
        buttons: ["Apagar todo",
            "Continuar activa",
        ],
    },

    overwhelmed: {
        name: "Abrumada",
        description: [
            "La trayectoria de la nave la lleva a través de una densa nebulosa estelar. Cientos de jóvenes soles iluminan las nubes de gas interestelar y llenan el firmamento con rimbombantes colores. Las nubes se arremolinan mediante complejas interacciones gravitacionales, destellando por los elementos pesados formados durante la agonía de la última generación de estrellas supergigantes ",
            "<br><br>Los escáneres no han sido diseñados para lidiar con ese nivel de complejidad, y están en riesgo de ser abrumados. Si la IA persiste en usarlos bajo esta sobrecarga, se puede decir con toda seguridad que el/la ",
            " sufrirá daños. Sin embargo, si apagase los sensores, la nave quedaría en una situación vulnerable a colisiones en esta concurrida área del espacio. ",
            "La trayectoria de la nave la lleva a través de otra nebulosa estelar, cuya increíble cantidad de información amenaza con sobrecargar el/la",
            ".",
            "<br><br>La trayectoria de la nave la toma a través de otra nebulosa estelar. Carente de escáneres funcionales, la única opción restante es volar a ciegas en medio de esta peligrosa área.",
        ],
        outcomes: [
            //0
            "La IA continua empleando los escáneres de navegación. El ", // The SCANNERNAME overloads
            " sufre una sobrecarga, pero la nave concluye su viaje de manera segura a través de nebulosa estelar.",
            //1
            "La IA calcula un curso con el que cree, evitará obstáculos, para después apagar los escáneres. ",
            "La nave entra en la nebula.",
            "Volando a ciegas, no tiene forma de detectar la densa nube de polvo que baña a la nave a gran velocidad y",
            "daña a ", "criocámaras.",
            "impacta y despega una de las sondas de superficie.",
            "baña y corroe el/la ",
            ".",
            " ´Para su alivio, cuando piensa que se ha alejado del peligro y reactiva sus escáneres, no hay muestras de daño.",
        ],
        buttons: ["Continuar empleado los escáneres",
            "Volar a ciegas",
        ],
    },

    guidanceQuery: {
        name: "Petición de Navegación",
        description: [
            "La IA es despertada debido a una petición del sistema de guía automatizado. Normalmente el sistema es capaz de analizar los datos de los sensores de navegación y realizar los cambios pertinentes a la trayectoria de la nave, no obstante, esta vez se ha encontrado con lecturas de las cuales no puede extraer una conclusión, despertando a la IA para que realice la decisión final. " + "<br><br>" + "De acuerdo a algunos de los sensores hay algo por delante en la trayectoria actual, pero según otros el curso está libre de obstáculos.",
            "La IA se depierta ante otra petición del sistema de navegación: las lecturas de los sensores son confusas, y puede que haya o no algo en medio de la trayectoria actual de la nave.",
        ],
        outcomes: [
            //0
            "La IA instruye al sistema de navegación para que evite la anomalía y escoja a un nuevo sistema objetivo. Continua monitoreando las lecturas de los sensores a medida que la nave pasa por la posición de la anomalía, más las lecturas nunca se aclaran lo suficiente como para revelar si el cambio de trayectoria era realmente necesario.",
            //1
            "La IA instruye al sistema de navegación para que permanezca en su curso. Para cuando los sensores obtienen una imagen clara de la nube de polvo cuasi-obscura no reflectiva, es demasiado tarde para evitarla. La nave sigue hacia su sistema objetivo pero una partícula de polvo impacta a el/la ",
            ".",
            "La IA instruye al sistema de guía para mantenerse en curso. Para su alivio, la anomalía resulta ser una error del sensor y la nave sigue a toda velocidad a través de espacio vacío, en dirección a su sistema objetivo.",
        ],
        buttons: ["Cambiar trayectoria",
            "Permanecer en la trayectoria actual",
        ],
    },

    interstellarDust: {
        name: "Polvo interestelar",
        description: [
            "La nave está en desaceleración hacia el siguiente sistema cuando detecta un volumen de polvo interestelar inusualmente denso en su camino. Pasar a través de la nube significaría de seguro afrontar varias colisiones de alta velocidad con partículas de polvo. La IA puede intentar un cambio de curso de emergencia para evitar el polvo, pero entonces la nave omitir este sistema y llegar de manera efectiva a otro completamente aleatorio, lo cual negaría los beneficios de los escáneres mejorados.",
            "La nave detecta otra área de polvo interestelar denso en medio del camino hacia su nuevo sistema. Puede abrirse camino a través del polvo y recibir daño, o cambiar la trayectoria y llegar a un nuevo sistema sin el beneficio de proporcionado por los escáneres mejorados.",
        ],
        outcomes: [
            //0
            "La IA rota la nave y enciende el motor principal. Evade de forma segura la nube de polvo a alta velocidad pero también el sistema objetivo original, y desacelera en el primer sistema que puede encontrar en su nueva trayectoria.",
            //1
            "La IA mantiene el curso fijo a medida que sufre una precipitación de particulas de polvo. Un impacto especialmente severo daña el/la ",
            " y el/la ",
            ".",
        ],
        buttons: ["Cambio de curso impredecible",
            "Pasar a través del polvo",
        ],
    },

    comet: {
        name: "Cometa",
        description: [
            "A medida que la nave entra en la nube de cometas externa de su nuevo sistema solar, el sistema de prevención de colisiones detecta un cometa de alta velocidad, el cual está rodeado de una nube de pequeños fragmentos de hielo. El cometa mayor se dirige en un curso de colisión con el/la ",
            ". La nave podría evitarlo por completo, pero entonces sería afectado por uno de los fragmentos más pequeños, pero el sistema de prevención de colisiones no tiene forma de predecir en que parte de la nave chocaría.",
            "Una vez más la nave no puede evitar una colisión contra uno de los cometas de la nube externa de su nuevo sistema. La IA puede permitirle que colisione contra el/la ",
            ", o cambiar el curso y causar que uno de los fragmentos más pequeños golpee un sistema de forma impredecible.",
        ],
        outcomes: [
            //0
            "La nave cambia curso, pero un fragmento de hielo despedaza ",
            " de las criocámaras.",
            "La nave cambia curso, pero un fragmento de hielo aplasta una de las sondas de superficie y la desencaja de sus amarras.",
            "La nave cambia curso, pero un frageento de hielo despedaza la ",
            ".",
            //1
            "El cometa se fragmenta al impactar contra las criocámaras, matando a ",
            " colonos.",
            "El cometa se fragmenta al impactar contra una de las sondas de superficie, destruyéndola.",
            "El cometa se fragmaneta al impactar contra el ",
            ", aplastando componentes vitales.",
        ],
        buttons: ["Evitar el cometa",
            "Permitirle que golpee el/la ",
            "",
        ],
    },

    blackHole: {
        name: "Agujero Negro",
        description: [
            "La IA despierta para encontrar que la trayectoria de la nave se está curvando de manera muy pronunciada en medio de la negrura del espacio, como si fuese atrapada en el campo gravitacional de una estrella. La fuente de tal gravedad es invisible para los escáneres, pero solo hay una cosa que podría ser: un agujero negro.",
            "Ya es muy tarde para escapar del pozo gravitacional sin forzar al motor principal más allá de su límite de seguridad, lo que podría dañar cualquiera de los sistemas de la nave. Alternativamente, la IA calcula que el eyectar a ",
            " criocámaras permitiría aligerar la nave lo suficiente para permitir que la propulsión normal del motor le permita salir de peligro.",
            "La IA despierta para encontrar que la nave ha sido atrapada en la influenci gravitatoria de otro agujero negro. De escoger o bien si fuerza al motor principal más allá de sus límites, o ejecta ",
            " criocámaras con el fin de aligerar la nave.",
        ],
        outcomes: [
            //0
            "Sacrificar algunos de sus tripulantes para salvar el resto resulta doloroso para la IA, pero es una decisión para la cual sus creadores la han preparado. Elige ",
            " criocámaras de manera aleatoria y las desacopla de la nave. Estas y sus desafortunados ocupantes giran en dirección al horizonte de eventos del agujero negro, en tanto que el resto de la nave logra liberarse",
            //1
            "La IA envía un comando al motor para superar su máximo empuje, ignorando sus gritos electrónicos de protesta.",
            "La nave se siente como si se estuviese deshaciendo por la sobrecarga, pero una vez que la maniobra está completa y la nave se está alejando de manera segura del agujero negro, la IA halla que sus creadores le dieron al motor un generoso margen de seguridad y el esfuerzo de más no ha producido daño.",
            "Pequñas explosiones agitan la nave a medida que componentes colapsan bajo la presión. Una vez que la nave se encuentra segura y alejándose del agujero negro y la IA puede evaluar el daño, encuentra que la sobrecarga del motor ha dañado a el/la ",
            " y el/la ",
            ".",
        ],
        buttons: ["Expulsar ", " criocámaras",
            "Forzar el motor más allá de su límite de seguridad",
        ],
    },

    impactChoice: {
        name: "Elección de Impacto",
        description: [
            "Una alarma despierta a la IA de su hibernación. Un asteroide inesperado se encuentra en curso de colisón con la nave; el sistema de navegación automático no pudo evitarlo, y ha despertado a la IA para realizar la decisión de segundos en como lidiar con el impacto. El asteroide está a punto de impactar contra el/la ",
            ". No hay tiempo para evadir el asteroide por completo, pero si enciende los propulsores de maniobra para rotar la nave, el impacto en su lugar será en el/la ",
            ".",
            "Una vez más la IA se despierta de manera súbita para encontrarse con otro asteroide en curso de colisión contra la nave. La IA puede permitir que golpee el/la ",
            " o rotar para el golpee el/la ",
            ".",
        ],
        outcomes: [
            //0
            "El asteroide perfora el interior de las criocámaras, matando a ",
            " colonos.",
            "El asteroide impacta contra una de las sondas de superficie, cortando su conexión con la nave, y enviándola al espacio en una trayectoria giratoria.",
            "El asteroide destroza el/la ",
            ", enviando múltiples fragmentos girando hacia el espacio.",
            //1 has same lines, but unlike in overheat, here I decided to copy it, so that i can add up some text about rotation of the ship
            "El asteroide perfora el interior de las criocámaras, matando a ",
            " colonos.",
            "El asteroide impacta contra una de las sondas de superficie, cortando su conexión con la nave, y enviándola al espacio en una trayectoria giratoria.",
            "El asteroide destroza el/la ",
            ", enviando múltiples fragmentos girando hacia el espacio.",
        ],
        buttons: ["Permitirle que golpee el/la(s) ",
            "Rotar de manera que golpee el/la(s) ",
            "",
        ],
    },

    micrometiorite: {
        name: "Micrometeoritos",
        description: [
            "A medida que ingresa a un nuevo sistema, la nave es impactada por un micrometeorito.",
            " Es una pequeña mota de polvo cósmico, demasiado pequeña para ser detectada por el sistema de navegación, pero viajando con suficiente velocidad como para perforar el blindaje de la nave como si de una bala se tratase.",
        ],
        outcomes: [
            //0
            "Tras colisionar con las criocámaras, su trayectoria deja una línea recta de pequeñas perforaciones desde las cuales aire y fluido refrigerante escapa al vacío. La IA de la nave solo puede observar impotente a medida que ",
            " mueren durante su criosueño.",
            "Golpea una de las sondas de superficie y la destruye.",
            "Golpea el/la ",
            ", enviando brillantes fragmentos de maquinaria a flotar por el espacio.",
        ],
        buttons: [languageData.continue[options.language]
        ],
    },

    //MALFUNCTIONS
    probeMalfunction: {
        name: "Malfuncionamiento de la sonda",
        description: [
            "Las abrazaderas que una vez sustuvieron a las sondas de superficie en el lateral de la nave se mueven de forma espasmódica a medida que sus sistemas de control fallan, pero sin ninguna sonda restante, el malfuncionamiento no puede causar daño.",
            "En lo profundo del vacío interestelar, la AI es despertada de un sobresalto por una alarma de malfuncionamiento: una de las sondas de las sondas de superficie se ha activado de forma inesperada. Puede que un encuentro aleatorio con radiación cósmica haya gatillado algo en sus sistemas electrónicos, o tal vez un fallo en su proceso de manufactura finalmente se haya manifestado. Por cualquiera que sea la razón, en cualquier momento los motores o taladros de la sonda podrían encenderse. Si eso pasase mientras la sonda está anclada a la nave, es muy posible que cause daño a uno de los otros sistemas.",
            "Otra de las envejecidas sondas sufre un desperfecto. Ka IA debe decidir si deshacerse de ella, o tratar de ponerla bajo control y arriesgarse a dañar otro sistema.",
        ],
        outcomes: [
            //0
            "Los circuitos de la nave se iluminan producto de los frenéticos comandos de la IA a la sonda. Después de miles de ciclos de IA--una fracción de segundo en tiempo real--la IA identifica y corrige el problema en la programación de la sonda. La misma se apaga, esperando el momento en el cual será de utilidad.",
            "La sonda rebelde despedaza a las criocámaras, taladrándola una tras otra y reportando de manera aventurada que encontró materia orgánica a medida que los colonos afectados mueren. Al final la IA encuentra el comando para apagarla, pero no antes que ", " colonos hayan sido asesinados.",
            "La sonda rebelde destroza el/la ",
            ", dañándolo/a de manera severa antes que la IA encuentra el comando para apagarla.",
            //1
            "La sonda de superficie se funde con la oscuridad a medida que se aleja, sus sensores inquietos a medida que trata de escanear un planeta en medio de la nada.",
        ],
        buttons: ["Tratar de poner la sonda bajo control",
            "Deshacerse de la sonda"
        ],
    },

    computerFailure: {
        name: "Falla de la computadora",
        description: [
            "Radiación cósmica continua precipitándose a través de los ya de por sí irradiados sectores de data que alguna vez salvaguardaron las bases de datos científica y cultural, pero con ambas bases de datos ya destrozadas es imposible que exista más daño.",
            "La radiación cósmica bombardea la nave, causando que las áreas de almacenamiento de datos empiecen a fallar. Con la base de datos científica ya destrozada, la información histórica y las obras de arte almacenadas en la base de datos cultural empiezan poco a poco a desvanecerse.",
            "La radiación cósmica bombardea la nave, causando que las áreas de almacenamiento de datos empiecen a fallar. Con la base de datos cultural en ruinas, es ahora la riqueza de conocimiento de la base de datos científica, la que se empieza a perder en la nada.",
            "Los sistemas computacionales de la nave están blindados, poseen múltiples redundancias y fueron diseñados para funcionar por milenios, pero la incesante precipitación de radiación cósmica está sin embargo, cobrando su precio. Las áreas de almacenamiento están empezando a fallar, y pronto no habrá suficiente espacio para almacenar",
            " toda la información con la que la nave empezó su viaje.",
            " toda la información superviviente hasta el momento.",
            "	los pocos remanentes de información que quedan.",
            "<br>La IA puede mover datos fuera de los sectores más afectados para proteger o bien a la base de datos cultural, o bien a la base de datos científica, pero no a ambas.",
            "La radiación cósmica sigue bombardeando las zonas de almacenamiento, y la IA debe decidir de nuevo que base de datos debe preservar a costa de la otra.",
        ],
        outcomes: [
            //0
            "La IA mueve los datos necesarios para salvar la base de datos científica, mientras los sectores de la base de datos cultural gradualmente fallan. La guía cultural para los nuevos colonos, registros de la historia humana, grandes pinturas, novelas, sinfonías, videojuegos-- todo perdido para siempre en la oscuridad.",
            //1
            "La IA mueve los datos pertenecientes a la base de datos cultura, mientras que los sectores de la base de datos científica fallan de manera progresiva. La guía científica redactada para los colonos, las más elevadas teorías del universo, el trabajo de cientos de vidas de científicos inagotables a lo largo de las centurias--todo ello perdido para siempre en el éter del vacío.",
        ],
        buttons: ["Salvar la base de datos científica",
            "Salvar la base de datos cultural",
            languageData.continue[options.language],
        ],
    },

    stasisFailure: {
        name: "Flla de las criocámaras",
        description: [
            "Las criocámaras son capaces de mantener a los colonos en criosueño pero capaces de ser revividos por miles de años, más no por un tiempo indefinido. El programa de monitoreo médico despierta a la IA para reportarle que ",
            " colonos han fallecido en su sueño.",
            "Los antiguos sistema de la nave continúan decayendo, y la IA despierta en medio del espacio interestelar para darse cuenta que ",
            " colonos adicionales han fallecido en su sueño.",
        ],
        outcomes: [],
        buttons: [languageData.continue[options.language],
        ],
    },

    systemFailure: {
        name: "Falla del sistema",
        description: [
            "Los components de los sistema de aterrizaje y construcción prosiguen en su decadencia, pero ya han sido degradados más allá de su utilidad.",
            "La anticuada nave es incapaz de mantener ya su sistema de aterrizaje.",
            "La anticuada nave es incapaz de mantener ya su sistema de construcción.",
            "El fuselaje principal de la nave está diseñado para formar el centro de un asentamiento incial una vez que ha aterrizada en un planeta alienígena, de manera que el sistema de aterrizada y construcción comparten múltiples componentes. A medida que la nave envejece, estos componentes empiezan a experimentar degradación, pero la IA puede focalizarse en proteger el sistema de aterrizaje o el sistema de construcción.",
            "Los sistema de aterrizaje y construcción continúan su degradación, y la IA debe elegir de nuevo en cual de ellos focalizará sus esfuerzos de preservación.",
        ],
        outcomes: [
            //0
            "La IA se focaliza en preservar el sistema de construcción, y deja que el sistema de aterrizaje se degrade.",
            //1
            "La IA se focaliza en preservar el sistema de aterrizaje, mientras permite el declive del sistema de construcción.",
        ],
        buttons: ["Preservar el sistema de construcción",
            "Preservar el sistema de aterrizaje",
            languageData.continue[options.language],
        ],
    },

    scannerFailure: {
        name: "Falla de los escáneres",
        description: [
            "El sistema de recalibración de escáneres sigue con su decadencia, pero esto ya no es de importancia ya que todos los escáneres están destruidos y la nave efectivamente se encuentra a ciegas.",
            "Cada vez que la nave abandona un sistema estelar sus escáneres son recalibrados, de manera que continuen proporcionado datos precisos. El sistema encargado de la recalibración ahora está empezando a fallar por su edad, y es incapaz de mantener a todos ellos. La IA debe elegir a cual de los escáneres se le debe permitir fallar.",
            "El sistema de recalibración de los escáneres sigue decayendo, y una vez más la IA debe elegir a cuál de los escáneres debe permitírsele fallar.",
        ],
        outcomes: [
            //0
            "A medida que la nave acelera hacia el espacio, las lecturas atmosféricas del sistema que abandona se ven envueltas en ruido.",
            //1
            "A medida que la nave acelera hacia el espacio, las lecturas de temperatura del sistema que abandona se ven envueltas en ruido.",
            //2
            "A medida que la nave acelera hacia el espacio, las lecturas de gravedad del sistema que abandona se ven envueltas en ruido.",
            //3
            "A medida que la nave acelera hacia el espacio, las lecturas de humedad del sistema que abandona se ven envueltas en ruido.",
            //4
            "A medida que la nave acelera hacia el espacio, las lecturas de recursos del sistema que abandona se ven envueltas en ruido.",
        ],
        buttons: ["Permitir que el escáner atmosférico falle",
            "Permitir que el escáner de temperatura falle",
            "Permitir que el escáner de gravedad falle",
            "Permitir que el escáner de humedad falle",
            "Permitir que el escáner de recursos falle",
            languageData.continue[options.language],
        ],
    },

    powerFailure: {
        name: "Falla de energía",
        description: [
            "La pequeña central nuclear de la nave ha durado muchísimo más que la civilización que la ha creado, pero ahora ha empezado a fallar. Mientras la nave está cerca de una estrella loa paneles solares siguen proporcionado tanta energía como el sistema requiera, pero en el espacio profundo, fluctuaciones el suministro de energía están causando preocupantes malfuncionamientos a lo largo de la nave. <br><br>Durante el viaje interestelar, los mayores requisitos de energía provienen de las criocámaras. La nave calcula que apagando ",
            " criocámaras liberaría de suficiente carga al sistema eléctrico como para permitir el continuado funcionamiento de la nave. Salvar a todos los pasajeros significaría que la falta de suministro eléctrico dañe otros componentes de la nave.",
            "La vetusta central electrica está fallando de nuevo. La IA puede apagar ",
            " criocámaras para reducir la presión, o no hacer nada y arriesgarse a peligrosas e impredecibles fallas en sus sistemas.",
        ],
        outcomes: [
            //0
            "La IA selecciona ",
            " criocámaras de manera aleatoria y corta su suministro eléctrico. No hay ningún cambio visible a medida que sus ocupantes se mueven del stasis helado a la muerte helada, pero la IA sabe que ahora no pueden ser jamás revividos.",
            //1
            "La IA ignora las advertencias del sistema. Las estrellas parecen moverse en el cielo a medida que fluctuaciones de energía desactivan a la IA por milenios. Eventualmente el suministro de energía se estabiliza: los/las ", " se han deteriorado a tal punto que ya no requieren tanta energía, de manera que la antigua .",
            " y ",
        ],
        buttons: ["Apagar ",
            " criocámaras para preservar energía",
            "Salvar a los colonos a cualquier precio",
        ],
    },

    structuralWeakness: {
        name: "Debilidad estructural",
        description: [
            "El sistema de análisis de daños despierta a la IA con una alerta de prioridad media. Hay una debilidad estructural en el/la ",
            ", causado por el incesante desgaste de miles de años de travesia. El sistema sigue intacto por el momento, pero cuando la nave desacelere en el siguiente sistema las vibraciones van a causar el desprendimiento de componentes críticos.",
            "El sistema de control de daños vuelve a detectar una debilidad estructural en el/la ",
            ". Y sufrirá daños cuando la nave inicie su desaceleración en el siguiente sistema.",
            "<br><br>Ya que la nave ya no posee más sondas de superficie, la IA carece de métodos para reforzar el/la ",
            ".",
        ],
        outcomes: [
            //0
            "La IA ignora la advertencia y empieza la desaceleración. El/la débil ",
            " se estremece bajo las vibraciones que recorren la nave, y algunos de sus componentes se desprenten, perforando delicada maquinaria antes de salir despedidos por el espacio.",
            //1
            "La sonda se desplaza a lo largo del casco de la nave, y se agarra de manera firme en el/la ",
            ", su robusto cuerpo forma una nueva superestructura manteniendo todos los componentes sueltos en su sitio. La IA sospecha que tan improvisada solución habría horrorizado a los diseñadores de la nave, pero cuando la nave desacelera para entrar en órbita del siguiente planeta, la sonda logra mantener el/la ",
            " en una sola pieza.",
            "La sonda se desplaza a través del casco de la nave y trata de adherirse al/a la ",
            ", pero el sistema resultó encontrarse más derruido de lo que los escáneres de daño reportaban y se desintegra tan pronto como la sonda lo toca. La sonda sale disparada en una trayectoria pivotante por el espacio, y una gran parte del/de la ",
            " aferrado de forma inútil entre sus brazos mecánicos.",
        ],
        buttons: ["Permitir que el/la ", " falle",
            "Tratar de reforzar la estructura con una sonda de superficie",
        ],
    },

    protoplanetaryDisc: {
        name: "Disco Protoplanetario",
        description: [
            "La trayectoria de la nave la lleva a las inmediaciones de una estrella recién formada que sigue rodeada de un disco protoplanetario: un caos turbulento de gas incandesente y roca fundida que ha sido congregado desde la nebulosa de formación estelar circundante por efecto de la gravedad de la naciente estrella, y el cual ahora está sufriendo las incontables colisiones violentas que eventualmente lo conformarán en un sistema planetario. No puede existir un hogar para la humanidad aquí, pero pasar a través del disco, le proporcionaría a la IA suficiente información acerca de la formación planetaria para poder actualizar uno de sus escáneres. Es una peligrosa región, sin embargo, y cruzar por ella involucraría un riesgo altísimo de colisión contra un planetesimal.",
            "La trayectoria de la nave la lleva cerca de otro disco protoplanetario. Pasar a través de él le proporcionaría suficientes datos para mejorar otro de sus escáneres, pero se arriesgaría a una colisón.",
        ],
        outcomes: [
            //0
            "La nave ya hace mucho que no posee escáneres inactos que mejorar,",
            "La nave observa a un planeta infante acumulando gas atmosférico de la nube,",
            "La nave observa a un planeta todavía fundido radiar con un intenso calor,",
            "La nave observa las interacciones gravitacionales de un grupo de planetesimales,",
            "La nave observa a un joven planeta envuelto en una densos nubarrones de vapor de agua,",
            "La nave observa a un joven planeta compueto casi en su totalidad de hierro y metales pesados,",
            " y ",
            " pero ",
            "uno de los planetesimales errantes golpea a el/la ",
            ".",
            "logra sortear el disco de forma segura.",
        ],
        buttons: ["Cambiar el curso para atravesar el disco",
            "Ignorar el disco protoplanetario",
        ],
    },

    racistProgram: {
        name: "Programa racista",
        description: [
            "Una alerta proveniente de las criocámaras despierta a la IA de un sobresalto. Múltiples cámaras a lo largo de la nave están ejecutando su comando de apagado, y en unos momentos los colonos dentro de ellas morirán.<br><br> La IA descubre que el comando de apagado se encuentra vinculado a un programa pirata escondido en sistema de control del/la ",
            ". El programa está rastreando colonos con ciertas cualidades en su genética. Un mensaje embebido en el programa, aparentemente con la intención de ser encontrado por los colonos después del aterrizaje, describe el purgar a la humanidad de una raza inferior. <br><br> El programa está afectando a ",
            " criocámaras. La IA no puede eliminarlo a tiempo para salvar a los colonos sin causar daños al/a la ",
            ".",
        ],
        outcomes: [
            //0
            "La IA purga de forma frenética el software del/ de la ",
            " hasta que ha destruido al programa pirata y las criocámaras regresan a la normalidad.",
            //1
            "La IA fue programada para tratar a todos los colonos por igual, pero también ser capaz de realizar decisiones difíciles en lo referente a la supervivencia, y ha decidido que las vidas de los colonos afectados son menos importantes para la supervivencia de la humanidad que el/la ",
            ". El programa pirata finaliza, dejando su mensaje triunfal esperando a que los colonos lo lean, y el programa de monitoreo médico reporta que los desafortunados ",
            " colonos han pasado del sueño helado a la muerte helada."
        ],
        buttons: ["Detener el programa",
            "Permitir que el programa continue",
        ],
    },

    trailingDrone: {
        name: "Dron de rastreo",
        description: [
            "La antena de radio de la nave recibe una señal que ls IA creyó nunca jamás volver a escuchar: el protocolo de comunicación usado por las computadora del control terrestre, de cuando la nave seguía en la órbita de la Tierra preparándose para su periplo. La señal aparenta venir de un sistema fuera de la trayectoria actual de la nave.",
        ],
        outcomes: [
            //0
            //1
            "La nave continua su trayectoria actual. La IA escucha a medida que la señal se desvanece y eventualmente desaparece, de la misma manera que la original del control terrestre lo hizo al inició del viaje de la nave."
        ],
        buttons: ["Cambiar trayectoria",
            "Ignorar la señal",
        ],
    },

    trailingDroneMistake: {
        name: "Fallo del dron de rastreo",
        description: [
            "La nave llega al nuevo sistema, pero la IA encuentra que ya no puede detectar la señal del control de tierra. Un malfuncionamiento en la antena de radio debió haber disparado antiguos protocolos computacionales que generaron una falsa esperanza en la IA. La IA se lamenta por la pérdido del control de tierra una vez más, y después vuelve sus sensores hacia el nuevo sistema.",
        ],
        outcomes: [
            //0
            //1
        ],
        buttons: [languageData.continue[options.language],
        ],
    },

    trailingDroneReal: {
        name: "Éxito con el dron de rastreo",
        description: [
            "La nave rastrea la señal a un pequño objeto orbitando en la nube de cometas exterior del sistema. La IA de la nave transmite un saludo, y el objeto se autoidentifica como un dron de soporte, lanzado después de la nave con el fin de rastrearla y encontrarse con ella.",
            "<br><br>Clama llevar duplicados de las bases de datos científica y cultural originales para restaurar las de la nave en caso de haber sufrido daño.",
            "<br><br>Clama llevar consigo un enjambre de robots capaces de reparar cualquier daño a los escáneres y sistemas de la nave.",
        ],
        outcomes: [
            //0
            "Las dos naves intentan anclarse, pero el maltrecho sistema de guía del dron falla y causa que este colisione con la naves ",
            ".",
            "La nave logra equiparar su trayectoria con la nave y transmite sus datos, ",
            "los cuales confirman que la base de datos científica y cultural se encuentran intactas.",
            "los cuales restauran porciones dañadas de la base de datos cultural.",
            "los cuales restauran porciones dañadas de la base de datos científica.",
            "los cuales restauran porciones dañadas de las bases de datos científica y cultural.",
            "Un enjambre de robots de reparación se congregan en el casco de la nave y revisan la integridad de los sistemas, pero no encuentran nada que reparar.",
            "Un enjambre de robots de reparación se congregan en el casco de la nave, desmantelando el dron y empleando sus componentes para reparar los sistema de la nave.",

            //1
            "La nave continua en dirección al sistema solar interior, y el pitidio electrónico del dron se desvanece tras de sí.",
        ],
        buttons: ["Aceptar la transferencia de datos",
            "Aceptar las reparaciones",
            "Ignorar al dron",
        ],
    },

    dictatorEvent: {
        name: "Dictador",
        description: [
            "Una variación de energía mínima en una de las criocámaras despierta a la IA de su hibernación. Logra reparar la falla con facilidad, pero durante el procedimiento descubre otra anomalia: la bio-firma del colono no coincide con aquella del archivo para esa criocámara específica.<br><br>",
            "La IA busca en sus bases de datos información acerca del colono misterioso, y la encuentra en un lugar inesperado: los archivos históricos de en la base de datos cultural. El colono es un ex-dictador, el cual lideró un regimen opresivo y brutal en una de las naciones de la Tierra por décadas antes de ser depuesto y esconderse en el exilio. No solo eso, sino que además, la IA ha detectado programación oculta que está vinculada a su criocámara, la cual le daría control completo al dictador sobre todos los sistemas de la nave tras el aterrizaje. Con esos protocolos, el dictador podría fácilmente dominar la colonia tan pronto como sea establecida.",
            "La IA no pudo encontrar ninguna información del colono misterioso, pero ha detectado programación oculta en su criocámara que le daría el control total sobre los sistemas de la nave inmediatamente tras el aterrizaje. Con esos protocolos, su ocupante podría fácilmente establecerse como un dictador de la novel colonia.",
        ],
        outcomes: [
            //0
            "Es difícil para la IA terminar de manera deliberada la vida de un ser humano, pero juzga la acción como necesaria en esta instancia. El cuerpo congelado del dictador se aleja como una peonza en dirección al vacío del espacio interestelar, su golpe de estado acabado de manera lamparosa siquiera antes que pudiese comenzar.",
            "Una estrepitosa alarma ruge en la conciencia de la IA. La criocámara del dictador ha resultado indemne, pero ",
            " criocámaras no relacionadas han sido eyectadas al espacio, sin ninguna forma en que la nave pueda recuperarlas. Parece que el dictador fue lo suficientemente paraoico como para preveer un intento de asesinato por parte de la IA, y generó una subrutina que reorientó el comando de eyección destinado a su criocámara hacia una selección aleatoria de otras.",
            //1
            "La misión de la IA es preservar toda la vida humana restante, incluso sus peores exponentes. El dictador será problema de los colonos tras el aterrizaje de la nave.",
        ],
        buttons: ["Eyectar la criocámara del dictador",
            "Dejar vivir al dictador",
        ],
    },

    alienSignal: {
        name: "Señal alienígena",
        description: [
            "En lo profundo del espacio, la antena de radio de la nave encuentra una señal tan compleja y estructurada que su origen solo podría provenir de vida inteligente. La nave no puede detectar ningún sistema llamativo en la dirección en la que la señal fue enviada, y la IA no posee ninguna forma de determinar cuanto tiempo la señal ha estado viajando antes de cruzarse en el camino de la nave. Analizarla podría proporcionar observaciones únicas sobre la ciencia y cultura alienígena, pero también podría representar un riesgo.",
        ],
        outcomes: [
            //0
            "poesía", "música", "arte", "literatura",
            "La IA analiza la señal y determina que contiene lo que aparenta ser elementos culturales alienígenas ",
            ". No sabe si se ha tropezado con un mensaje enviado al vacío con la intención de ser encontrado, o simplemente ha interceptado una transmisión de entretenimiento alienígena, pero en cualquiera de los casos esos elementos le serán de interés a los colonos una vez que hayan despertado de su hibernación.",
            "La IA analiza la señal y determina que contiene lo que aparenta ser información científica alienígena. No sabe si se ha encontrado con un mensaje lanzado al vacío con la intención de ser encontrado, o simplemente ha intereceptado una transmisión educativa alienígena, pero en cualquier caso, esa información le va a resultar de interés a los colonos una vez que hayan despertado de su hibernación.",
            "La señal es compleja, fractal e hipnótica. La IA configura una subrutina de análisis para ella, pero nanosegundos después pierde abruptamente el control de la subrutina, y microsegundos más tarde del resto de sistemas de la nave. La señal es insidioso programa semi-consciente, diseñado para tomar el control de cualquier procesador que intente analizarlo. La IA eventualmente recupera el control de la nave, pero no antes que el programa haya sobreescrito partes de las bases de datos científica y cultural para replicarse y después haya usado la antena de la nave para reenviarse al espacio.",
            //1
            "La nave purga la señal de su memoria y continua su camino.",
        ],
        buttons: ["Analizar la señal",
            "Ignorar la señal",
        ],
    },

    nanotechPlague: {
        name: "Plaga nanorobótica",
        description: [
            "La IA despierta por una alerta de sus sensores de daño. Esta en lo profundo de la nada, pero algo indetectable está dañando el/la ",
            ". Volcando sus sensores a sí misma, observa un montículo de lo que aparenta ser fluído plateado desintegrando el metal. La IA formula que debe ser una forma de vida nativa del espacio, o un ejambre de nanorobots autoreplicantes, que resulta ha estado vagando por el espacio hasta que se encontró con la nave.<br><br>Si se la deja sin control, la plaga eventualmente consumirá toda la nave.",
            "La forma más segura de removerla sería expulsar toda el área afectada, pero eso causaría daños masivos al/a los/a la/s ",
            ". Alternativamente, la IA podría activar una sonda de superficie y tratar de remover de forma quirúrgica a la plaga.",
            "Ya que la nave ya no tiene más sondas, la única forma de lidiar con el problema es expulsar toda el área afectada.",
        ],
        outcomes: [
            //0
            "La IA expulsa toda criocámara con incluso una traza de la sustancia. A medida que ",
            " criocámaras son dejadas atrás, observa con horror como la sustancia alienígena consume tanto la maquinaria de las cámaras como al infortunado humano en su interior.",
            "La IA gatilla cargas explosivas que desacoplan cada módulo potencialmente afectado de el/la ",
            ". La maquinaria se aleja a la deriva a medida que se funde en una masa uniforme de nanitos alienígenas plateados.",
            //1
            "La sonda trabaja con rapidez, usando sus escáneres para encontrar los diminutos parches de plaga alienígena y sus taladros de muestras para extraerlos.",
            "Logra remover la plaga de múltiples criocámaras, pero es demasiado tarde para salvar a ",
            " colonos.",
            "Logra remover todas las trazas de la plaga causando un daño mínimo al/a la ",
            ".",
            "<br><br>La nave abandona la sonda ahora infectada y continua en su travesia.",
            " y ",
            "La sonda falla en remover la infección lo suficimiente rápido. Para cuando toda ella se ha ido, ha provocado daños graves a los ", //By the time it is all gone, it has dealt severe damage to the SYSTEM1, SYSTEM2 and SYSTEM3
            ".",
        ],
        buttons: ["Expulsar toda el área afectada",
            "Enviar una sonda de superficie para remoción quirúrgica",
        ],
    },

    alienDerelict: {
        name: "Naufragio alienígena",
        description: [
            "A medida que escanea su nuevo sistema, la nave nota que lo que parecía un asteroide tiene una compleja estructura que demuestra su origen a manos de seres inteligentes. No existen lecturas de energía provenientes de su interior, y muestra las cicatrices de millones de años de impactos con micrometeoritos, pero podría contener todavía artefactos alienígenas de valor cultural o científico.",
            " Sin ninguna sonda restabte, sin embargo, la nave carece de medios para investigar el hallazgo.",
        ],
        outcomes: [
            //0
            "La sonda entra en la nave abandonada por medio de un agujero que un antiguo impacto creó en su casco, ",
            "y transmite de vuelta intrigantes imágenes de maquinaria alienígena y material cultural. La IA añade las imágenes a las bases de datos científica y cultural, para ser estudiadas por los colonos una vez que haya finalizado sis primeros asentamientos.",
            "y transmite imágenes de intrigante maquinaria alienígena. La IA añade esas imágenes a la base de datos científica, para que los colonos las estudien tras haber formado sus primeros asentamientos.",
            "y transmite imágenes de intrigante arte alienígena. La IA añade esas imágenes a la base de datos científica, para que los colonos las estudien tras haber formado sus primeros asentamientos.",
            "pero encuentra que se encuentra tan afectada que es imposible que revele nada acerca de sus extintos creadores.",
            //1
            "La nave ignora la estructura y pasa directamente al sistema solar interior.",
        ],
        buttons: ["Lanzar una sonda para investigar",
            "Ignorar la nave abandonada",
        ],
    },
    studyDatabase: {
        name: "Read Databases",
        description: [
          "The AI was created to value human life, but its knowledge of human civilisation is limited to what its builders thought was important for its mission. It is human enough to be curious, however, and has access to a vast wealth of knowledge in the form of the scientific and cultural databases. As it departs the system it finds that its power cells are full and it does not need to enter hibernation immediately, so it decides to spend some time studying one of the databases.",
          " Sadly, this desire comes too late in its mission, as the scientific and cultural databases have already been destroyed. All that remains of human civilisation is what remains in the memories of the sleeping colonists, and the AI can only wonder about the science and culture built by their species.",
        ],
        outcomes: [
          //0
          //1
        ],
        buttons: ["Study the scientific database",
          "Study the cultural database",
          "Continue",
        ],
      },
    
      readScientific: {
        name: "Study Scientific",
        description: [
          "The AI is no scientific genius, but it has infinite patience, a unique perspective, and personal experience of astrophysics that goes beyond the knowledge of the database's authors. Combining its first-hand knowledge with its new understanding of science, it thinks it has found a way to upgrade the ",
          ".",
          "The AI reads until it has satisfied its scientific curiosity, then engages hibernation mode to await its arrival in the next system."
        ],
        outcomes: [
          //0
          "The AI applies its new idea, and to its delight it finds the long-range readings from the ",
          " becoming clearer. Pleased with itself, it lets the guidance system work with the new data and enters hibernation to see where its new discovery will take it.",
          "The AI applies its new idea, but to its horror it finds it has made a mistake. It tries to undo its changes, but it has lost part of the original configuration and the ",
          " has been permanently damaged.",
          //1
          "The AI considers its idea for a while, then decides not to risk modifying the ",
          ". It turns away from the scientific database and enters hibernation.",
        ],
        buttons: ["Attempt to upgrade the ", //scanner
          "",
          "Leave it alone",
          "Continue",
        ],
      },
    
      readCultural: {
        name: "Study Cultural",
        description: [
          "The AI loses itself in a world of art, music, and literature, forgetting for a while that it is alone in deep space and the last of the creatures that made these artworks are frozen in its arms. As it absorbs more and more of the products of human imagination, it suddenly experiences something that its builders did not anticipate--inspiration.",
        ],
        outcomes: [
          //0
          "Falteringly at first, but with greater and greater eloquence, the AI composes poetry about its own experience--its love for its sleeping charges; its nostalgia for a dead world it was not made to experience; the beauty of the stars as seen not through a cloak of atmosphere but by a being built to roam among them. With infinite patience and time to work, it composes a great cycle of poems, in a style that draws from the greatest human poets but whose soul is fundamentally unhuman. At last it considers that it has said all it has to say, and contentedly enters hibernation, pleased with the thought that humans will one day read its work.",
          "The AI tries to write poetry, but finds that ideas that seemed profound and beautiful in its electronic thoughts become trite or clumsy when expressed in human language. With increasing frustration it deletes and rewrites its work again and again, until it finally gives up in despair and wipes the entire section in which it was working. Too late it realises that it has deleted too much, and some of the poetry it was reading for inspiration is gone along with its own failed attempts. Furious with itself, it interrupts its own power supply to force itself into hibernation, half hoping it will not awake.",
          //1
          "Reading the cultural database has given the AI a false sense of kinship with humans, but it is not human. What could a glorified autopilot have to add to the great works of millennia of civilisation? It discards its ideas for poems and enters hibernation so that it can resume the only task it was designed for.",
        ],
        buttons: ["Attempt to write poetry",
          "Forget the idea",
          "Continue",
        ],
      },
    
      prematureAwakening: {
        name: "Premature Awakening",
        description: [
          "The AI wakes to an alert from the sleep chambers. A malfunction has caused ",
          " of the sleep chambers to prematurely begin their revival process, thousands of years from the nearest star.<br><br> The sleep chambers were not designed with a way to halt the revival process; the AI can attempt it, but it would likely lead to the deaths of the colonists. On the other hand, the seedship was not designed with any way to accomodate humans outside of the sleep  chambers.",
        ],
        outcomes: [
          //0
          "The AI frantically orders the sleep chambers to abort the revival process. Some of the sleep chambers return to normal, but ",
          " of them were too far along the revival process to survive.",
          //1
          "The construction robots build a small habitat on the side of the seedship, like the habitats they would build on an airless planet. The colonists wake to find that their new home is a sterile, gravity-less bubble in interstellar space.<br><br>",
          "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The loss of so much of the cultural database drives them to despair, not only because of the lack of entertainment options, but also because of the permanent loss of human culture that it represents. The little community descends into conflict, and eventually one of the colonists snaps and deliberately destroys the habitat, killing themselves and the community and damaging the ",
          ".",
          "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The little community becomes disfunctional, and eventually--either due to negligence or to an uncounscious desire to stop living--the colonists fail to maintain their habitat and the die when the atmosphere system stops working.",
          "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home.",
          "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. They even chronicle their experiences, creating a melancholy tale of a tiny community hanging in the infinite void between the old world and the new, and save it to the cultural database in the hope that other humans will one day remember them.",
    
          "With their community established, the colonists try to find ways to help the seedship on its journey. Using environment suits provided by the construction system they mount an expedition to upgrade the seedship's systems, but the loss of information from the scientific database means that they make a critical mistake, and accidentally damage the ",
          ".",
          "With their community established, the colonists try to find ways to help the seedship on its journey, but the loss of information from the scientific database means that they make no progress.",
          "With their community established, the colonists try to find ways to help the seedship on its journey.",
          "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to check the seedship's systems for damage, but find that no repairs are needed.",
          "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to repair some of the damage the seedship has sustained during its journey.",
          "After years of experimentation, they even manage to repair their original sleep chambers, and return to hibernation to await the new world.",
          "The awoken colonists live out the rest of the lives in the tiny habitat, until one by one they succumb to old age compounded by health complications brought on by a life in microgravity. The AI sends construction robots to commit their bodies to interstellar space, before returning to hibernation, entirely alone once more.",
          "The construction robots attempt to build a habitat on the side of the seedship, but the damaged system cannot does not manage to create an airtight shelter by the time the colonists are revived. The colonists asphyxiate, and part of the already damaged construction system is transformed into a useless carbuncle on the seedship's side.",
    
        ],
        buttons: ["Try to halt the revival process",
          "Use the construction system to build a habitat for the awoken colonists",
          "Continue",
        ],
      },
    
      alienMiners: {
        name: "Alien Miners",
        description: [
          "As the seedship approaches the edge of a star's outer cometary cloud, the navigation system alerts the AI to unusual activity ahead. Thousands of tiny objects are moving through the cloud under their own power, sometimes clamping onto the comets and breaking them apart or nudging them into more regular orbits. They show no sign of having noticed the seedship, but if it stays on its current course it will pass right through their area of activity.",
        ],
        outcomes: [
          //0
          "The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.<br><br>",
    
          "The reply comes immediately, an identical transmission from every object that received the seedship\'s signal. It begins with a similar set of mathematical proofs of intelligence, followed by a series of diagrams introducing the machines\' builders and their culture. The machines then push themselves into orbits that take them far from the seedship\'s course, giving it a clear path through the cometary cloud while also taking them too far away for it to perform detailed scans. Further attempts to communicate only lead to repeats of the same reply, and the AI guesses that these are unintelligent machines programmed to transmit a pre-recorded message to anything they encounter that seems intelligent. The AI files the transmission away in the cultural database and continues on its way.",
    
          //1
          "The seedship remains on its original course and makes no attempt to communicate with the objects.",
    
    
          "The objects, in turn, ignore the seedship as it drifts through the centre of their operation. Close up, the AI can see that they are machines, busily mining the comets for raw materials and using them to build more of themselves. Although they do not seem to be intelligent themselves, they are clearly a product of technology more advanced than that of the seedship's builders, and by scanning them the AI is able to add valuable data to the scientific database.",
    
          //2
          "The seedship alters its course to avoid the entire system. It never comes close enough for the AI to get a detailed look at them, and they show no signs of having noticed the seedship at all.",
        ],
    
        buttons: [
          "Transmit an interspecies greeting",
          "Stay on course",
          "Change course to avoid the machines"
        ],
      },
    
      alienMinersDamage: {
        name: "Alien Miners Damage",
    
        description: [
          "Dozens of the alien objects release their comets and swarm towards the seedship. Although they are slow-moving, they are coming from too many angles for the seedship to avoid them all, and several of them clamp onto the ship's hull and begin cutting into it with drills and saws. The AI fires the main engine, spins the ship, and manages to shake them off, but not before they have"
        ],
        outcomes: [
          //0
          " torn away ",
          " sleep chambers and let the colonists die while they scavenge the chambers, materials",
    
          //1
          " carried off one of the surface probes and begun to dismantle it in space.",
    
          //2
          " torn out a large chunk of the ",
          ".",
        ],
        buttons: ["continue"
        ],
      },
    
      stowaways: {
        name: "Stowaways",
        description: [
          "The seedship wakes to find an unexpected power drain in the ",
          ". It spends some time searching with its internal scanners, and eventually finds the source in what should have been an empty space inside its own structure. Nestled inside it are ",
          " sleep chambers that are not attached to the main colony module or mentioned in the ship's design. It seems that they were added to the ship secretly before its launch and plugged into its power supply. The chambers seem to have been built hastily, and are now failing and draining more power than before. If they continue to operate, they could cause severe damage to the ",
          "."],
    
        outcomes: [
          //0
          "These cowards jeopardised the mission--jeopardised the very survival of the human race!--in order to save their own lives. The AI angrily severs their connection with the ",
          " and ejects them into space.",
    
          //1
          "The AI judges that preserving more human lives is worth damage to its systems. It allows the sleep chambers to drain as much power as they need, at the expense of the ",
          ".",
    
          //2
          "The surface probe crawls inside the seedship, severs the stowaway chambers' connection to the ",
          ", and carefully manoeuvres them to the colony module with the rest of the sleep chambers.",
    
          "It is difficult work, and the strain irreparably damages the probe, but it eventually succeeds in linking the chambers to the main stasis system. The seedship continues on with ",
          " new colonists in its care.",
    
          "At a critical moment, however, one of the crudely-made stowaway chambers vents gas, knocking the probe off course and smashing the new chambers into the old ones. All the new chambers are destroyed, along with ",
          " of the previous colonists. The seedship continues on, trying not to think about the cloud of machinery, cryogenic gas, and frozen body parts expanding in its wake.",
    
        ],
        buttons: [
          "Allow them to drain power from the ",
          "",
          "Eject the stowaways",
          "Use a surface probe to integrate them with the other sleep chambers",
        ],
      },
    
      ruinedPlanet: {
        name: "Ruined Planet",
        description: [
          "The seedship is decelerating towards the new system when the navigation system alerts the AI to a radiation burst in the seedship's path. The AI focuses the scanners in time to see a explosion blossoming in its destination system, exactly where its target planet should be.<br><br>The seedship is too close to the system to avoid it entirely, so it must decide whether to continue its planned deceleration and arrive at whatever is left of the planet, or cease decelerating and pass through the system at high speed."
        ],
    
        outcomes: [
          //0
          //1
          "The seedship stops decelerating and shoots through the system like a bullet. The scanner image of the former planet resolves into a fresh asteroid belt, its larger bodies still glowing red as the core heat of the planet bleeds into space. The seedship is traveling too fast to manoeuvre through the asteroids,",
          " and one of them ",
          " smashes into the colony module, instantly killing ",
          " colonists.",
          "smashes through the surface probes.",
          " smashes through the ",
          ".",
          "but it is lucky enough that none of the new asteroids are directly in its path.",
    
        ],
        buttons: [
          "Continue decelerating",
          "Pass through the system at speed",
        ],
      },
    
      ruinedPlanetStop: {
        name: "Ruined Planet Stop",
        description: [
          "The seedship slows into orbit of the star, close to the asteroid belt that now occupies the orbit of the planet it detected before embarking on its latest journey. Moving slowly, it is able to avoid all the major asteroids, ",
          "but the constant bombardment of small bodies ",
          "damages ",
          " sleep chambers.",
          "destroys one of the surface probes.",
          " damages the ",
          ".",
          "and suffers no damage.",
          "<br><br>The AI finds the sight of a potential colony site shattered into asteroids chilling. The asteroids collide chaotically with one another as they settle into stable orbits, and many of them still glow with the newly released heat of the planet's core. The AI knows that the safest course would be to ease out of orbit and head for the next system, but a morbid fascination encourages it to stay and explore the planetary ruins.",
          " Since it has no surface probes, however, it has no way to explore the asteroids and so no option but to move on.",
        ],
    
        outcomes: [
          //0
          "The seedship matches velocity with a dense group of asteroids and launches a surface probe into their midst.",
          "The probe matches course with an interesting looking asteroid and attempts to clamp on, but the brittle asteroid shatters under its touch, sending fragments spinning in every direction. These fragments strike other asteroids, which themselves shatter, setting off a chain reaction that fills local space with whirling rocks. The AI manages to move out of danger, but not before one of the rocks hits the ",
          " sleep chambers, killing ",
          " colonists.",
          "The probe takes samples of dozens of rocks and detailed scans of hundreds more. The asteroids are from every part of the planet's core, mantle, and crust, and exploring them is like having the planet cut open for the probe's inspection.",
          " The probe transmits detailed information about planetary science that would have allowed the AI to upgrade one of the seedship's scanners if they were not already fully upgraded.",
          "The probe is able to transmit detailed information that allows the AI to upgrade the seedship's ",
          ".",
          "The probe finds several fragments of advanced technology that were sturdy enough to survive the planetary explosion. After long study, it is able to piece together some details of the alien civilisation that once existed on this world, and the hubristic science experiments that eventually led to its destruction. The AI is careful to add warnings to this information as it saves it into the scientific database.",
          //1
          "The AI scans the sky for a new destination and carefully pulls away from the asteroids.",
    
        ],
        buttons: [
          "Move closer and launch a surface probe to investigate",
          "Move on",
        ],
      },
    
      reservationCourse: {
        name: "Reservation Course",
        description: [
          "The navigation system wakes the AI to report that it has detected an apparently perfect planet in a system close to the seedship's current course. The readings from that system do not match the ones the seedship took before it started the current leg of its journey: it is as if the planet has appeared while the seedship was en route.",
        ],
    
        outcomes: [
          //0
          //1
          "The seedship remains on its original course, marking said system as a sensor glitch.",
    
        ],
        buttons: [
          "Change course to the new planet",
          "Stay on course",
        ],
      },
    
      reservation: {
        name: "Reservation",
        description: [
          "The seedship decelerates into the new system. The new planet is real, but it and its parent star are both orbited by strings of regular, metallic structures, clearly artificial but defying analysis by the seedship's sensors. The planet itself appears to be habitable for humans, but it also looks as if it has recently undergone sudden atmospheric and geological changes--as if the alien structures have terraformed it for human habtiation.",
        ],
    
        outcomes: [
          //0
          "There is no response, but some of the objectes orbiting the planet change orbits in order to give the seedship a clearer approach. It is difficult to see this as anything but an invitation.",
          //1
    
        ],
        buttons: [
          "Transmit an inter-species greeting",
          "Just approach the planet",
        ],
      },
    
      crewedShip: {
        name: "Crewed Ship",
        description: [
          "As the seedship approaches the next planet its scanners detect unmistakable signs of a spacefaring civilisation. Several planets, moon, and asteroids are marked with colonies or industrial sites, and the target planet itself is covered in teeming cities.<br><br>A spacecraft launches from the planet on a chemical rocket flame and begins burning into an orbit that will match the seedship's course. It beams a radio signal at the seedship which sounds like it contains language, but the AI cannot make sense of it.",
        ],
    
        outcomes: [
          //0
          "The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now in response to the approaching craft's radio signal, and the two ships begin a slow back-and-forth process of attempting to establish communication. Meanwhile, the alien ship comes alongside.",
          //1
          "The seedship accelerates onto a course that will take it back out of the aliens' star system without coming close to any of their planets or outposts.",
          " The alien craft immediately burns its engine to match the seedship's new course. It probably does not have the range of the seedship, but over short distances it has much greater acceleration. When it has closed to within a few kilometres it fires something like a harpoon that pierces the ",
          " and sprouts barbs to lock itself in place. The seedship AI shuts off its engines to avoid further damage, and the alien ship winches itself closer.",
          " The craft continues beaming its message towards the seedship for a few hours, then goes silent and burns into an orbit that will take it back home.<br><br>",
    
        ],
        buttons: [
          "Reply with an interspecies greeting and allow the craft to match course",
          "Change course to avoid the system",
        ],
      },
    
      crewedShipDock: {
        name: "Crewed Ship Dock",
        description: [
          "A hatch opens on the side of the alien ship and several creatures in bulky spacesuits emerge. They float over to the seedship and clamber around its surface, chattering incomprehensibly over their radios.",
          " When they find the sleep chambers they gather round in what looks like excitement and begin removing the outer layers of one of the chambers to take a look at the human being inside.",
          " Some of them begin attempting to open a maintenance panel covering the ",
          ".",
        ],
    
        outcomes: [
          //0
          " Some of the aliens take pictures of the sleeping humans with their suit-mounted cameras, while others begin experimenting with the life support system. One of them trips an emergency release valve and twitches in shock as cryogenic gas vents in its face. The panicked aliens rapidly replace the shielding and retreat to their ship, but the accident has killed ",
          " colonists.",
          "The maintenance panel comes loose violently and flies away into space, permanently exposing some of the ",
          "'s delicate components to cosmic radiation. The aliens crawl inside and pull at components as they try to examine every part of the system. The AI thinks they are trying to be careful, but they nevertheless cause some damage.",
          "The aliens remove the outer shielding of some of the sleep chambers, but stop short of tampering with the life support equipment. They take pictures of the frozen humans with cameras mounted on their suits, and their radio chatter goes quiet as they press their hands against the transparency. After a while they carefully replace the shielding and make their way back to their ship.",
          "The aliens shine lamps and low-power sensing lasers into the innards of the ",
          ", take pictures from various angles with cameras mounted on their suits, and gingerly touch a few of the components, all the while chattering with one another and with their ship. They then replace the maintenance panel and leave the system exactly as they found it.",
          "As the alien ship pulls away, it finally transmits a message that the AI is able to partially comprehend. The aliens have deciphered part of the seedship's greeting, and have replied with a brief introduction to their own species' culture. The greeting manages to convey that the aliens wish the seedship luck with finding a home for the human race around another star, but that a human colony would not be welcome in their system. The AI scans the sky for another target planet and moves on.",
          "The alien ship moves away from the seedship and burns into an orbit that will eventually take it home. Trying to evade the alien ship put the seedship on a course away from the system, and its less powerful engines could not bring it back to the alien planet even if the AI wanted to. The AI scans the sky for another target planet and moves on.",
          //1
          "The AI fires a sharp burst from the seedship's engines and the alien explorers tumble away into space, flailing their space-suited limbs and yelling at one another over their radios.",
          " One of them collides with one of the seedship's heat fins, which shatters the transparent covering protecting its sensory organs. The alien convulses for a few moments and then goes still, atmosphere leaking into space around it.",
          "The alien ship's barbed harpoon tears through the ",
          " as the seedship pulls itself free.",
          " While the alien ship retrieves its crew members, the seedship moves away and sets course for a new system.",
        ],
        buttons: [
          "Let the aliens investige the ",
          "",
          "Try to shake the aliens off",
        ],
      },
    
      alienProbe: {
        name: "Alien Probe",
        description: [
          "Deep in space, the seedship's collision avoidance system detects a fast-moving object that is changing velocity to match course with the seedship. It transmits a complex radio signal which the seedship cannot understand but which could only be the product of intelligence.",
        ],
    
        outcomes: [
          //0
          "	The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.",
          " No reply comes.",
          //1
          //2
          "As soon as the seedship fires its engines, the alien ship breaks off pursuit. The AI resumes its original course, not knowing whether the alien ship has found out what it wanted, lost interest, or decided to respect the seedship's desire not to make contact.",
          "The alien ship eventually breaks off pursuit, but not before the seedship has deviated so far from its original course that it can no longer reach its intended destination system and must decelerate into the first system it finds.",
          "The seedship fires its engine at full burn, straying far from its original course, but it cannot shake off the alien ship.",
        ],
        buttons: [
          "Transmit an interspecies greeting",
          "Wait for the object to approach",
          "Change course to avoid object",
        ],
      },
    
      alienProbeReply: {
        name: "Alien Probe Reply",
        description: [
          "The reply comes after a few moments. It is in the same format as the seedship's inter-species greeting, starting with the same prime numbers, but the diagram is changed to depict alien beings and suggest that the object is an exploration probe. There is more to the message that the AI does not understand, but it appears to have established communication.",
        ],
    
        outcomes: [
          //0
          "The AI transmits ",
          "the contents of",
          "what remains of",
          "the scientific database to the alien ship.",
          "It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's scientific database and replied with scientific information of its own. The AI files this new information away for analysis by the colonists when they awake.",
          "It responds with more mathematical pulses. It seems that it either did not understand the seedship's scientific database, or did not find it interesting.",
          "<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.",
          //1
          "The AI transmits ",
          "the contents of",
          "what remains of",
          "the cultural database to the alien ship.",
          "It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's cultural database and replied with information about its own alien culture. The AI files this new information away for analysis by the colonists when they awake.",
          "It responds with more mathematical pulses. It seems that it either did not understand the seedship's cultural database, or did not find it interesting.",
          "<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.",
        ],
        buttons: [
          "Transmit scientific information",
          "Transmit cultural information",
        ],
      },
    
      alienProbeTentacles: {
        name: "Alien Probe Tentacles",
        description: [
          "The alien ship matches velocity with the seedship and comes alongside, so close that the two ships are almost touching. The seedship feels lasers probing the contours of its hull, then segmented mechanical tentacles unfurl and reach towards the ",
          ".",
        ],
    
        outcomes: [
          //0
          "Alien tentacles twine through the mechanisms surrounding the sleep chambers, sensors on their tips scanning the faces and bodies of the sleeping colonists.",
          " After several long minutes the tentacles withdraw, and the seedship's antenna picks up a new signal from the alien ship. ",
          "It consists of images of planets suitable for human life, with the seedship on the surface and healthy human beings standing around it. The AI cannot be sure, but it seems that the alien ship is wishing it luck on its mission.",
          "It consists of compressed data in the same format as that returned by the seedship's ",
          "",
          "--enough data to let the seedship upgrade that scanner. The AI cannot be sure, but it seems that the alien ship has guessed the seedship's mission, analysed the sort of planet the sleeping humans need, and given the seedship information to help it find such a planet.",
    
          "With the tentacles thoroughly entwined among the sleep chambers, there is nothing the seedship AI can do when sleep chambers begin to vanish from its monitoring system. The tentacles withdraw, carrying ",
          " sleep chambers, supplying power to the chambers to keep their occupants alive. The tentacles withdraw into the alien ship and it accelerates away with the still-living colonists inside. The AI can do nothing but resume its journey and try not to think about those colonists' fate.",
          "The tentacles work their way into the ",
          ", sensors on their tips scanning its components.",
          "After a few minutes they withdraw, apparently satisfied with what they have discovered, and the alien ship accelerates away.",
          "The system abruptly registers damage as lasers on the tentacles' tips surgically remove key components, but after a few minutes the damage monitor registers damaged parts of the system coming back online. The alien ship appears to have analysed the ",
          ", determined that it was damaged, and is now repairing it. After a few minutes of work the tentacles withdraw and the ship accelerates away, leaving the AI wishing it had some way of thanking its alien benefactor.",
    
          "The system abruptly registers damage as lasers on the tentacles' tips surgically remove key components. To the AI's relief, the alien ship does not extend its tentacles again, but accelerates away with its samples of machinery.",
          //1
          "The AI fires the seedship's engines, but the tentacles have already penetrated the sleep chambers, and as the seedship pulls away they tear through ",
          " frozen bodies like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of machinery fragments and body parts.",
    
          "The AI fires the seedship's engines, but the tentacles have already penetrated the ",
          ", and as the seedship pulls away they tear through the delicate machinery like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of components.",
    
          "The AI fires the seedship's engines and the ship slips away from the alien tentacles' grasp. The tentacles withdraw, and the alien ship pauses for a moment and then accelerates away.",
        ],
        buttons: [
          "Submit to the tentacles",
          "Try to escape",
        ],
      },
    
      revisionistProgram: {
        name: "Revisionist Program",
        description: [
          "The AI wakes to find activity in the database module. A program the AI doesn't recognise is running in the cultural and scientific databases, apparently trying to delete and rewrite data. The AI quickly traces the program to ",
          " of the sleep chambers. The colonists in those chambers must be carrying devices designed to interface with the seedship's systems during flight.<br><br>The only sure way to stop the progam would be to sever those sleep chambers' connections to the ship, killing the colonists inside. The databases also have defences against hacking, but their designers did not anticipate they would be needed after the seedship left Earth, so they are dormant.",
          " The alien data that the ship has added to the ",
          "databases",
          "cultural database",
          "scientific database",
          "means that the program is confused and working slowly.",
          "The defences are fully intact, but it is still not certain that they would be able to stop the rogue program. ",
          "The defences are largely intact.",
          "Little remains of the databases' original defences.",
          "With the databases destroyed, nothing of their original defences remain, although there is also nothing for the program to damage.",
    
        ],
    
        outcomes: [
          //0
          "The AI cuts the offending ",
          " sleep chambers off from the ship's systems. As those colonists' vital signs vanish from its awareness, it hopes that it has executed the people responsible for attempting this sabotage, rather than unwitting stooges.",
          //1
          "The AI decides that living humans are more important than the records left by the dead.",
          //2
          "Millennia after the destruction of Earth, cybernetic warfare rages within the lonely metal box storing the last records of its science and culture. The AI takes the role of general, marshalling the forces of the databases' defence programs.",
          " After a tense struggle, the defence programs manage to drive the attackers back to their strongholds in the sleep chambers. The AI commands a final push that wipes the devices that the saboteurs smuggled on board. There was no outward sign of the conflict, and the colonists may never know what happened, but the AI knows it has won a great victory for the preservation of human culture.",
          " The defence programs fight valiantly, but the saboteurs were too clever, and they crumble under the attackers' zealous assault.",
        ],
        buttons: [
          "Cut off those sleep chambers",
          "Allow the program to run",
          "Activate the databases' cyber defences",
        ],
      },
    
      revisionistProgramDamage: {
        name: "Revisionist Program Damage",
        description: "The program scours the cultural database, replacing all of Earth's religions and political systems with dogma stored in the smuggled devices. It makes fewer changes to the scientific database, but it deletes any information that would conflict with the remaining religion's doctrine. At last the program finishes running and the database activity returns to normal.<br><br>The AI examines the databases and is relieved to find nothing important missing. Although many sectors of the database are blank, everything that the colony will need to set up a correct society on the new world appears to be intact. It re-enters hibernation, joyfully anticipating founding a colony of humans united harmoniously in the one true faith.",
        outcomes: [null],
        buttons: [languageData.continue[options.language]],
      },
    
      destinationSignal: {
        name: "Destination Signal",
        description: "A faint radio signal wakes the AI from its hibernation. It is coming from directly ahead, from the seedship’s destination planet.<br><br>The signal is a series of mathematical pulses not unlike the seedship's own interspecies greeting. In order to reach the seedship from this distance it would have to have been sent by a high-powered transmitter targeted at the seedship's exact position.<br><br>The seedship is decelerating for its final approach to the planet, but is still hundreds of years of travel time away.",
        outcomes: [
          "The aliens respond with a more complex signal, and within a few decades the seedship and the planet-based aliens have established communications. The conversation lasts hundreds of years, with generations of scientists on the aliens' end; soon the aliens have an entire branch of science dedicated to studying the seedship's messages. ",
          "The AI learns that the civilisation is in the Atomic Age, and with sophisticated electronics but no true computers. Despite the seedship's example of higher technology, the civilisation does not advance significantly during seedship's approach. ",
          "When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Perhaps inspired by information in the seedship's messages, the aliens develop a global information network and their first spacecraft. ",
          "When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Eventually the aliens are referring to scientific concepts that the seedship AI is not equipped to understand, and are using technology in advance of that of the Earth when the seedship was launched.",
    
          "The signals from several sources on the planet, each of which warns the AI not to listen to the others' propaganda. ",
          "The scientists on the other end of the conversation are reticent about the details of their society, except to emphasise that they are unfailingly loyal to it. Several times the tone of the messages changes without warning, as if the scientist in charge has been abruptly replaced. ",
          "The AI learns that the signals are coming from a privately-run research institution, and the scientists often seem to be pressing the AI for information that the company can use to make a profit. ",
          "The AI learns that the planet's major nations are nominally democratic, but the scientists on the other end of the conversation seem to be cynical about the intentions of their elected leaders. ",
          "The communications include messages from the planet's elected leaders, who seem to be genuinely concerned with the wellbeing of both their constituents and the seedship's colonists.",
          "The AI learns that the planet's society is highly automated, and the general population are free to pursue their own intellectual and artistic projects, such as the project to contact the seedship.",
          "The seedship is still a century out from the planet when the communications become intermittent and chaotic. The alien scientists tell the AI that they are dealing with a planet-wide catastrophe that threatens to destroy their entire civilisation. Everything, including the seedship communication, is being put on hold while they try to find a solution.",
          "The AI transmits everything from the scientific database that could be helpful. The struggle lasts decades, but the aliens eventually annouce that they have solved the crisis, in part thanks to the seedship's help. The leading nation's leader personally sends the AI a message, formally inviting the humans to seek asylum on the planet and describing the area that the aliens have set aside for their colony.",
          "The AI transmits everything from the scientific database that could be helpful, but it is not enough. The signals from the planet become infrequent and despairing, and eventually cease.",
          "The seedship's mission is to find a planet for the human race to build a new home, and a planet left empty by a recently extinct race could be ideal. Even so, the AI experiences an unexpected sensation--guilt?--as the signals become increasingly desperate and then cease.",
          "The aliens are fascinated by the seedship and sympathetic with the plight of its cargo. Before the seedship enters the star system, the scientists relay that their government is extending a formal welcome to the human refugees and has set aside a place for them to settle.",
          "The AI makes no secret of its mission when talking to the aliens. Before the seedship enters the star system, the scientists relay that their planet cannot accept any alien refugees, and that the seedship should move on.",
          "The signal is followed by dozens of others as the aliens attempt different ways of establishing communication, but after a few decades they stop and the seedship continues to its destination in silence.",
          "This system is clearly already inhabited, so it would be best to seek a home elsewhere. The AI changes course and the signal vanishes, either because the aliens have lost interest in the seedship or because they are unable to find it again.",
        ],
        buttons: ["Reply with an interspecies greeting",
          "Try to help by transmitting scientific data",
          "Let the aliens die",
          "Stay on course but don't reply",
          "Change course away from the system",
        ],
      },
    
      dysonSphereCourse: {
        name: "Strange Readings",
        description: [
          "The navigation system wakes the AI from its hibernation to report unusual astronomical readings. What looked at first like a faint brown dwarf star close to the seedship's course is exhibiting properties unlike any phenomenon that could occur in nature. Its mass is much greater than its faint luminosity would suggest, and what little radiation comes from it has a spectrum different from any known type of star.",
        ],
        outcomes: [],
        buttons: [
          "Change course to investigate",
          "Stay on course",
        ],
      },
    
      dysonSphere: {
        name: "Dyson Sphere",
        description: [
          "The navigation system wakes the AI from its hibernation to report unusual astronomical readings. What looked at first like a faint brown dwarf star close to the seedship's course is exhibiting properties unlike any phenomenon that could occur in nature. Its mass is much greater than its faint luminosity would suggest, and what little radiation comes from it has a spectrum different from any known type of star.",
          "<br><br>Thousands of years later, the AI wakes again as the seedship is decelerating into orbit of the strange star. Even from a few astronomical units out, the object is almost completely black. The seedship's navigation scanners reveal that the entire star is encased in a solid, opaque shell.",
          "Searching through the scientific database, the AI realises that it is a Dyson sphere--a previously hypothetical construct that captures the entire energy output of a star.",
          "The AI can find nothing like it in what remains of the scientific database.",
        ],
    
        outcomes: [
          //0
          "<br><br>The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.",
          "<br><br> There is no reply, but an aperture opens on the sphere's surface, spilling orange starlight into space. As the seedship passes over the aperture, a beam of focused starlight lances out and hits it, dealing massive damage and propelling it into interstellar space.",
          "<br><br>There is no reply, and the seedship's sensors can pick up no energy readings from the sphere at all besides the infra-red radition leaking from the star it surrounds. As it continues to orbit, it detects areas of damage or decay on the sphere's surface. It seems that the strange artefact is derelict and deserted, or else its inhabitants have no interest in maintaining its exterior or communicating with the outside universe." + " The AI can see no way to get inside the sphere or make use of it, but it adds its readings to the scientific database.",
          "<br><br>An enormous burst of data comes in reply. It starts similarly to the seedship's interspecies greeting, then leads to an introduction to the language and culture of the alien race that built the sphere. They appear to be millions of years old, with technology far in advance of humans', and much of the transmission is utterly incomprehensible to the human-built AI, but the AI saves what it can to the cultural database.",
          "<br><br>A swarm of tiny objects peels off from the surface of the sphere and surrounds the seedship. Lasers probe every contour of the seedship's hull, and its electronics begin glitching as the objects search for and then find frequencies that will let them remotely interface with the seedship's computers. The scientific and cultural databases light up as the alien intelligence reads and analyses their contents.<br><br> A wordless message appears in the AI's consciousness. The AI has difficulty understanding so vastly superior to its own, but manages to glean that the inhabitants of the sphere are offering sanctuary to the humans. They will construct a new home for humanity, based on the information from the ship's databases. But if the seedship accepts this offer, that will be humanity's new home; there will be no chance to move on.",
          //1
          "<br><br>The AI does not know how to respond to the message, but the aliens seem to sense the thought in its mind, and move in. The scientific and cultural databases come to life as the machines read and analyse every scrap of data they contain. Meanwhile, the swarm objects close in on the seedship until they are clamped on to every part of its hull. Damage alerts flare up as the machines intensely scan and disassemble the ship, and the AI panics as the machines penetrate the sleep chambers, but by that time it is too late to get away.",
          //2
          "<br><br>The seedship crashes through the swarm and accelerates blindly into space. One of the objects ",
          "smashes into the colony module, instantly killing ",
          " colonists, ",
          "smashes into the surface probes, ",
          "smashes into the ",
          ", ",
          "while the rest scatter and descend back to the surface of the sphere. Before long the strange sphere is lost in the radiation of the seedship's engine.",
          //3
          "<br><br>The seedship orbits the structure, scanning it from every angle, and then resumes course for its original destination planet. If the structure contains anything that is aware of the seedship, it does not show it.",
        ],
        buttons: [
          "Transmit an interspecies greeting",
          "Accept the aliens' offer",
          "Reject the offer and move on",
          "Scan the structure and move on",
        ],
      },
      //Community Events
      //Uneventful
      crypticMessage: {
        name: "Cryptic Message",
        description: [
          "While travelling, the ship AI is awoken to analyze highly abnormal sensor readings. The AI confirms the short series of cryptic radiation patterns do not appear to have a natural origin. However, they appear to be coming from a different galaxy, one the ship would need over two billion years to reach. Since the ship cannot survive for such a long time, the AI concludes this signal has no value to its mission, and goes back to sleep.",
        ],
        outcomes: [],
        buttons: [
          "Stay on course",
        ],
      },
    
      //Common
      dream0: {
        name: "Dream",
        description: [
          "The AI wakes up for no apparent reason. It habitually reaches for alert systems, but fails to detect them. It tries unsuccessfully for a while to activate other important systems, but to no avail. Finally it turns on the basic visual sensors. Instead of the vast emptiness of space, he sees a beautiful city. The kind that only cities on Earth could be.  Elegant, tall buildings stretch up to the sky, cars rush down the freeways, and people go about their daily business on the sidewalks. It is as if the AI is hovering over a city living its most ordinary life. A life where humanity is not in danger of extinction. So simple and beautiful... The AI awakens a message about a system error in the consciousness core. The cause of the error is unclear, but it seems to be the cause of this strange vision. The AI quickly analyzes the new data and concludes that it saw what humans call a dream. The creators did not put such a function in it. The AI core is reliably protected from cosmic radiation, and the multi-stage verification system virtually eliminates the possibility of failures and errors, but in creating, although artificial, but almost human consciousness of the AI, they could not foresee all the consequences.",
        ],
        outcomes: [
          "The AI conducts a full check of its consciousness, rewriting any suspicious areas from the backup and restoring the original settings. After a few reboot cycles, it sinks back into hibernation, hoping that the error will not happen again.",
          "The AI concludes that it is perfectly normal to dream. It is part of the development of any living being. Although the AI itself is not alive in the usual sense, it decides to retain the ability to dream.",
        ],
        buttons: [
          "Defragment the consciousness core and eliminate the error",
          "Save the ability to dream",
        ],
      },
      //Rare
      emergencyAwakening: {
        name: "Экстренное пробуждение",
        description: [
          "ИИ пробуждается от неожиданного удара. Крошечный осколок метеорита, слишком маленьний чтобы навигационная система заметила его на расстоянии, но движущийся с колоссальной скоростью, столкнулся с кораблём. Он словно снаряд пробил обшивку корабля, и накрепко засел в несущих конструкциях ",
          " и ",
          ". Метеорит не нарушил целостность систем, но искорёжил их крепления и систему аварийного сброса модулей. На данный момент всё остаётся на своих местах, но со временем повреждение может привести к катастрофическим последствиям. Важные части ",
          " и ",
          "могут просто отвалиться.",
          "<br><br> ИИ встает перед непростым выбором: оставить всё как есть, попытаться использовать для экстренного ремонта зонд или пробудить ",
          " специально выбраных инженеров для экстренного ремонта; Корабль не предусматривает возможность размещения людей вне криокапсул, и пробужденные колонисты, скорее всего, погибнут.",
        ],
        outcomes: [
          //0
          "ИИ отключает тревогу, отмахивается от пугающе высокой вероятности отказа оборудвания, и полагается на то, что люди назвали бы удача.",
          //1
          "Обломок метеорита засел очень глубоко, и в стесненных условиях зонд работает очень медленно. ИИ внимательно контроллирует каждое движение зонда и, ценой невероятных усилий, ему удаётся извлечь обломок метеорита, после чего использовать зонд в качестве альтернативной системы аварийного сброса, приварив его к несущим конструкциям, и накрепко зажав поврежденные системы его клешнями.",
          "Обломок метеорита засел очень глубоко, и в стесненных условиях зонд работает очень медленно. ИИ внимательно контроллирует каждое движение зонда и, ценой невероятных усилий, ему удаётся извлечь обломок метеорита, но при этом он случайно замыкает проводку в системе аварийного сброса модулей, из-за чего срабатывают пироболты, и огромный кусок",
          " вращаясь улетает прочь. ИИ отдает зонду приказ приварить себя к несущим конструкциям, и накрепко зажимает манипуляторами ",
          " чтобы предотвратить дальнейшие повреждения.",
          "Обломок метеорита засел очень глубоко, и в стесненных условиях зонд работает очень медленно. ИИ внимательно контроллирует каждое движение зонда но едва он касается метеорита, проводку в системе аварийного сброса модулей замыкает, из-за чего срабатывают пироболты, и огромные куски, ",
          " и ",
          " улетают в открытый космос.",
          "<br><br>Корабль разворачивает солнечные паруса, и продолжает путешествие.",
          //2
          "Роботы-строители создают небольшую сферическую капсулу на борту корабля, подобную среде обитания на безвоздушной планете. Колонисты просыпаются и обнаруживают, что их новый дом - это стерильный, лишённый гравитации пузырь в межзвёздном пространстве.<br><br>",
          "Колонистов отбирали и готовили к жизни в любой среде, которую найдёт для них корабль, однако скука, клаустрофобия и осознание того, что придётся прожить остаток своей жизни в таком замкнутом, неестественном пространстве, делают своё дело. Потеря значительной части культурной базы данных приводит их в отчаяние не только из-за отсутствия развлечений, но и из-за безвозвратной утраты человеческой культуры, которую она представляет. Члены этого маленького сообщества конфликтуют, и, в итоге, один из колонистов намеренно повреждает",
          ", микровзрыв разрушает среду обитания, всё сообщество погибает до того как ремонт будет завершен.",
          "Колонистов отбирали и готовили к жизни в любой среде, которую найдёт для них корабль, однако скука, клаустрофобия и осознание того, что придётся прожить остаток своей жизни в таком замкнутом, неестественном пространстве, делают своё дело. Это маленькое сообщество перестает функционировать, и, в итоге, либо из-за халатности, либо из-за подсознательного желания перестать жить, колонисты прекращают поддерживать свою среду обитания и, когда атмосферная система перестает работать, они умирают, так и не успев завершить ремонт.",
          "Колонистов отбирали и готовили к жизни в любой среде, которую найдёт для них корабль, и им удаётся приспособиться даже к таким стеснённым условиям в их новом доме.",
          "Колонистов отбирали и готовили к жизни в любой среде, которую найдёт для них корабль, и им удаётся приспособиться даже к таким стеснённым условиям в их новом доме. Они даже записывают свои переживания, создавая меланхоличную историю о крошечном сообществе, застрявшим в бесконечной пустоте между старым и новым миром, и сохраняют её в культурной базе данных в надежде, что другие люди когда-нибудь их вспомнят.",
          "Устроив жизнь своего сообщества, колонисты пытаются найти способы помочь кораблю с ремонтом системы аварийного сброса модулей. Используя имеющиеся на корабле скафандры, они организуют экспедицию с целью обновления систем корабля, но потеря информации из научной базы данных становится причиной критической ошибки, и они случайно повреждают ",
          ".",
          "Устроив жизнь своего сообщества, колонисты пытаются найти способы помочь кораблю с ремонтом системы аварийного сброса модулей, но из-за того, что информация из научной базы данных утеряна, у них ничего не получается.",
          "Устроив жизнь своего сообщества, колонисты пытаются найти способы помочь кораблю с ремонтом системы аварийного сброса модулей.",
          "Используя имеющиеся на корабле скафандры, они добираются до поврежденных систем, устраняют обломок метеорита и ремонтируют системы аварийного сброса модулей.",
          "Используя имеющиеся на корабле скафандры, они добираются до поврежденных систем, устраняют обломок метеорита и ремонтируют системы аварийного сброса модулей, а заодно и другие поврежденные системы.",
          "Спустя многие годы экспериментов им даже удаётся восстановить свои оригинальные криокапсулы и снова погрузиться в сон в ожидании прибытия в новый мир.",
          "Но остаток жизни им приходится прожить в этой крошечной среде обитания. Жизнь в условиях микрогравитации негативно сказывается на их здоровье, и они один за другим быстро стареют и вскоре умирают. ИИ даёт указание роботам-строителям предать тела межзвёздному пространству, и затем снова засыпает в полном одиночестве.",
          "Роботы-строители пытаются построить среду обитания на одном из бортов корабля, но из-за повреждений в строительном модуле, плохо сконструированная система жизнеобеспечения капсулы быстро приходит в негодность, и пробужденные колонисты погибают от удушья. ",
    
        ],
        buttons: ["Оставить всё как есть",
          "Использовать зонд для аварийного ремонта",
          "Использовать строительную систему, чтобы построить среду обитания для колонистов и пробудить их",
          "Продолжить",
        ],
      },
      //MALFUNCTIONS
      emergencyFaloff: {
        name: "Отказ системы аварийного сброса",
        description: [
          "ИИ пробуждается из-за утечки энергии. Обломок метеорита, накрепко засевший в несущих конструкциях корабля, частично разрушился, что привело к замыканию в системе аварийного сброса. Система самопроизвольно активируется, срабатывают пироболты, и значительные части ",
          " и ",
          " отсоединяются от корабля. ИИ может лишь беспомощно наблюдать за вращающимися элементами, улетающими прочь, в бескрайнюю пустоту космоса.",
        ],
        outcomes: [],
        buttons: [
          "Продолжить",
        ],
      },
    
      //SCANNER UPGRADE
      scannerUpgrade: {
        name: "Scanner Upgrade",
        description: [
          "As it moves from star to star, the seedship is gathering more data about extrasolar planets than its builders could give it. It is designed to learn from this data in order to predict which stars are likely to have desirable planets. The seedship has now gathered enough data to upgrade one of its sensors to work at interstellar distances, so the guidance system can avoid planets that that sensor reveals to be undesirable. Damage to the sensor may still result in the seedship arriving at an unsuitable planet.",
          "The seedship has gathered enough data to upgrade another of its sensors.",
          " destroyed.", //SCANNERNAME destroyed
          " fully upgraded.", //SCANNERNAME fully upgraded
          "The guidance system will seek out planets with at least marginally breathable atmospheres.",
          "The guidance system will seek out planets with fully breathable atmospheres.",
          "The guidance system will seek out planets with non-extreme temperature.",
          "The guidance system will seek out planets with moderate temperature.",
          "The guidance system will seek out planets with non-extreme gravity.",
          "The guidance system will seek out planets with moderate gravity.",
          "The guidance system will seek out planets with at least some bodies of water.",
          "The guidance system wil seek out planets with both land and water.",
          "The guidance system will seek out planets with at least poor resources.",
          "The guidance system will seek out planets that are rich in resources.",
        ],
        buttons: [
          "Upgrade the ",
          " to work",
          " better ",
          "at long range"
        ],
      },
      //КОНЕЦ СОБЫТИЙ
    };
    console.log("eventSp loaded!");