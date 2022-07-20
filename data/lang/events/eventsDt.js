var eventsText = {

//UNEVENTFUL
  unsuitable: {
    name: "Ongeschikt",
    description: "De AI beoordeelt de eerste planeet als ongeschikt. Het draait haar scanners weg, spreidt haar zonnezeilen uit, en begint aan een nieuwe lange reis door stille ruimte.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm: {
    name: "Vals Alarm",
    description: "Diep in de ruimte wordt de AI plotseling wakker door een waarschuwing van het medische observatie programma. Angstig bekijkt het de kolonisten, maar vindt dat er geen probleem is en de waarschuwing een storing was. Niettemin brengt de AI wat tijd door met het bekijken van haar slapende inzittenden, geruststellend dat ze allemaal in leven zijn, voordat ze weer in hibernatie gaat.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm2: {
    name: "Vals Alarm",
    description: "De AI wordt uit haar hibernatie gehaald door een mogelijke storing, maar uit een systeemcontrole blijkt dat het vals alarm was. Nog ver van de meest nabije ster brengt de AI enige tijd door met het waarderen van de koele schoonheid van de Melkweg, zoals blijkt uit het navigatiesysteem, voordat ze terug in hibernatie gaat, om te wachten op aankomst bij het volgende systeem.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating: {
    name: "Hiberneren",
    description: "De volgende ster die door het begeleidingssysteem gekozen is, bevindt zich aan de andere kant van een groote leegte, zonder sterren gedurende tientallen lichtjaren. De AI hiberneert voor de millenia-lange reis door de totale leegte.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating2: {
    name: "Hiberneren",
    description: "Eeuwenlang glijdt het zaadschip naar de volgende bestemming, bijna helemaal passief, met alleen de simpele botsvermijdings en schadebewakings systemen actief terwijl de AI hiberneert.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  starCluster: {
    name: "Sterrencluster",
    description: "De route van het zaadschip voert het door een dicht sterrencluster, en terwijl de AI slaapt, weeft het begeleidingssysteem een complexe koers uit door de overlappende zwaartekrachtvelden van de sterren.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

//COMMON
  overheat: {
    name: "Overheat",
    description: [
                  "De AI ontwaakt en is bijna verblindt door het vele licht dat op het zaadschip afkomt. De koers van het zaadschip heeft het dicht bij een superreuzenster gebracht die veel heter blijkt dan door het begeleidingssysteem voorspeld was, en het schip verzamelt sneller hitte dan de radiatoren kunnen uitstralen. De AI moet een deel van het warmteregulatiesysteem uitschakelen voordat het hele systeem catastrofaal uitvalt.",
                  "Het begeleidingssysteem brengt het zaadschip te dicht bij een andere superhete ster, en de AI moet bepalen welke module het zal laten oververhitten.",
                  ],
    outcomes : [
                //0
				"De AI stuurt de overtollige warmte naar de hibernatie kamers. Het warmteregulatiesysteem herstelt zich terwijl het schip weggaat van de superhete ster, maar niet voordat ",
				" kolonisten te ernstige weefselschade hebben opgelopen om nog met succes ontwaken te worden.",
                //1 - 2 - 3 same text
				"De AI stuurt de overtollige hitte naar de ",
				". Het warmteregulatiesysteem herstelt zich terwijl het schip weggaat van de superhete ster, maar niet voordat de hitte schade heeft vericht aan de ",
                "",
                ],
    buttons: ["Laat de hibernatie kamers oververhit raken",
              "Laat de scanner module oververhit raken",
              "Laat de landing/constructie module oververhit raken",
              "Laat de data opslag module oververhit raken",
            ],
  },

  radiationAlert: {
    name: "Radiatie Waarschuwing",
    description: [
				  "De AI ontwaakt door een radiatie waarschuwing: De dodelijke uitbarsting van een verre supernova overspoelt de elektronica van het zaadschip met willekeurige signalen. ",
				  "De hibernatie kamers raken defect, en binnen enkele ogenblikken zullen sommige van hen uitvallen.",
				  "Een van de probes raakt defect, en binnen enkele ogenblikken zal deze vernietigd worden.",
				  "Het data opslag systeem raakt defect, en binnen enkele ogenblikken zullen onderdelen van de ",
                  " verloren gaan.",
                  "De ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME. Comment: Will have to look whether the preposition has to change while playtesting.
                  " raakt defect, en zal binnen enkele ogenblikken permanent beschadigd raken.",
				  " Het zaadschip kan de defectie ontwijken door all haar elektronica uit te zetten totdat de radiatie voorbij is, maar dan zou het voor een gevaarlijk lange tijd zonder botsvermijdings systeem werken.",
				  " Een golf van supernova radiatie knettert door ",
                  "een van ", //one of the probes damaged
                  " de ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME. Comment: Will have to look whether the preposition has to change while playtesting.
                  ". ",
				  "De AI kan het beschadigd laten raken, of de elektronica uitschakelen en een botsing riskeren.",

                  ],
    outcomes : [
                //0
				"De AI schakelt alle systemen van het schip uit en daarna zichzelf. Wanneer het weer terug online kom is de radiatie voorbij, ",
				"maar een kleine astroïde is door de hibernatie kamers gescheurd en doodde",
                " kolonisten.",
				"maar een kleine astroïde heeft ingeslagen op een van de probes.",
                "maar een kleine astroïde heeft een gat gescheurd door de ",
				"en tot opluchting onthult een systeemcheck geen schade.",
                //1
				"De AI houdt de focus op het botsvermijdings systeem, terwijl ",
                " kolonisten in hun slaap sterven.",
				"de probe zichzelf uit elkaar scheurt",
				" onderdelen van de ",
                " overschreven zijn met rotzooi.",
				" de radiate delicate componenten vernietigd, diep in de ",
                ".",
                ],
    buttons: ["Uitschakelen",
              "Niet uitschakelen",
            ],
  },

  overwhelmed: {
    name: "Overweldigd",
    description: [
                  "De koers van het zaadschip voert het door een dichte sterrenvormende nevel. Honderden jonge zonnen verlichten interstellaire gaswolken en vullen de lucht met losbandig wilde kleuren. Wolken krioelen door complexe zwaartekracht interferentie-patronen en schitteren met zware elementen die gevormd zijn in de doodsstrijd van de laatste generatie sterren. "+
                  "<br><br>"+"De scanners waren niet ontworpen om met dit niveau van input om te gaan, en het dreigt hen te overweldigen. Als de AI de scanners blijft gebruiken om te navigeren, dan voelt de AI dat de ",
                  " beschadigd zullen raken. Het uitschakelen van de scanners, echter, zal het zaadschip kwetsbaar voor botsingen in dit drukke gebied van de ruimte. ",
                  "De koers van het zaadschip voert het door een andere sterrenvormende nevel, waarvan de intense sensorische implusen bedreigen de ",
                  " te overbelasten.",
                  "<br><br>De koers van het zaadschip voert het door een andere sterrenvormende nevel. Zonder functionerende scanners, heeft het geen andere optie dan blind te vliegen door het gevaarlijke gebied.",
                  ],
    outcomes : [
                //0
                "De AI blijft de scanners te gebruiken om te navigeren. De ", // The SCANNERNAME overloads
                " raakt overbelast, maar het zaadschip passeert veilig door de sterrenvormende nevel.",
                //1
				"De AI berekent een route waarvan het denkt dat alle obstakels vermeden zullen worden, en schakeld vervolgens de scanners uit.",
                "Het zaadschip gaat de nevel in.",
				"Terwijl het blind vliegt, heeft het geen manier om de dichte stofwolk te detecteren welke het schip laat rammelen en",
				"het beschadigt "," hibernatie kamers.",
                "een van probes los laat slaan.",
				"brengt slijtage toe aan de",
                ".",
				" Tot haar opluchting, oordeelt het dat het schip buiten gevaar is en reactiveert het de scanners en blijkt dat er geen schade is toegericht.",
                ],
    buttons: ["Laat de scanners aan",
              "Vlieg blind",
            ],
  },

  guidanceQuery: {
    name: "Begeleidings Vraag",
    description: [
                  "De AI ontwaakt door een vraag van het automatische begeleidingssysteem. Normaal gesproken is het systeem in staat om zelf de data van de navigatiesensoren te analyzeren en de noodzakelijke koers aanpassingen te doen, maar deze keer is het metingen tegengekomen die het niet kan begrijpen en ontwaakt de AI om een beslissing te nemen. Volgens sommige sensoren ligt er iets voorop de koers van het schip, maar volgens andere is de kust veilig en kan het schip doorgaan met de koers. Als er daadwerkelijk iets is, dan is het te dichtbij dat het vermijden ervan zou betekenen dat er voor een andere koers gekozen moet worden, zonder het voordeel van de geüpgrade scanners.",
                  "De AI ontwaakt door een andere vraag van het navigatiesysteem: De sensormetingen zijn onduidelijk, en er kan wel of niet iets op de huidige koers van het schip liggen.",
                  ],
    outcomes : [
                //0
                "De AI instrueert het begeleidingssysteem om de anomalie te vermijden en een nieuw doelsysteem te kiezen. Het blijft de sensormetingen bestuderen terwijl het schip de positie van de anomalie passeert, maar de metingen worden nooit duidelijk genoeg om te onthullen of een koerswijziging nodig was.",
                //1
                "De AI instrueert het begeleidingssysteem om op koers te blijven. Tegen de tijd dat de sensoren een duidelijk beeld krijgen van de volkomen zwaarte, niet-reflecterende stofwolk, is het te laat om deze te vermijden. Het zaadschip blijft verdergaan op weg naar het doelsysteem, maar een stofdeeltje botst tegen de ",
                ".",
                "De AI instrueert het begeleidingssysteem om op koers te blijven. Tot haar opluchting lost de anomalie op in een sensorstoring, en het zaadschip blijft op weg door de lege ruimte naar het doelsysteem.",
                ],
    buttons: ["Verander de koers",
              "Blijf op koers",
            ],
  },

  interstellarDust: {
    name: "Interstellair Stof",
    description: [
                  "Het zaadschip vertraagt bij het naderen van het volgende systeem, wanneer het een ongewoon dikke laag interstellair stof op haar pad detecteert. Door het stof heengaan zal waarschijnlijk meerdere botsingen op hoge snelheid met de stofdeeltjes betekenen. De AI zou een noodkoerswijziging kunnen uitvoeren om het stof te ontwijken, maar dan zal het zaadschip dit systeem passeren en arriveren bij een effectief willekeurig system, zonder te profiteren van de geüpgrade scanners.",
                  "Het zaadschip detecteert een gebied met een dikke laag interstellair stof op haar pad naar het nieuwe systeem. Het kan door de stofwolk heen ploegen en schade oplopen, of van koers veranderen en arriveren bij een nieuw systeem zonder te profiteren van de geüpgrade scanners.",
                  ],
    outcomes : [
                //0
                "De AI roteert het schip en vuurt de hoofdmotor af. Het snelt veilig langs de stofwolk en het originele doelsysteem, en vertraagt vervolgens naar het eerste systeem op haar nieuwe koers.",
                //1
				"De AI houdt de koers stabiel aan, terwijl stofdeeltjes tegen het schip aan schieten. Een ernstige impact beschadigt de",
                " en de ",
                ".",
                ],
    buttons: ["Noodkoerswijziging",
              "Ploeg door de stofwolk",
            ],
  },

  comet: {
    name: "Komeet",
    description: [
				  "Terwijl het zaadschip de buitenste kometenwolk van het nieuwe systeem binnengaat, detecteert het botsingvermijdingssysteem een snel bewegende komeet, omsingeld door een wolk van kleine ijsfragmenten. De grote komeet ligt op ramkoers met de ",
				  ". Het zaadschip zou het kunnen vermijden, maar dan zou het een van de kleinere fragmenten raken, en het botsingvermijdingssysteem kan niet voorspellen welk gedeelte van het schip dan geraakt zal worden.",
				  "Nogmaals, het zaadschip kan een botsing met een van de buitenste kometenwolken van de nieuwe ster niet vermijden. De AI kan het de ",
                  " laten raken, of van koers veranderen en het kleinere fragment een onvoorspelbaar systeem laten raken.",
                  ],
    outcomes : [
                //0
				"Het zaadschip verandert de koers, maar een klein ijsfragment scheurt door ",
                " van de hibernatie kamers.",
				"Het zaadschip verandert de koers, maar een klein ijsfragment slaat één van de probes uit zijn ankerplaats.",
				"Het zaadschip verandert de koers, maar een klein ijsfragment scheurt door de ",
                ".",
                //1
				"De komeet verbrijzeld tegen de hibernatie kamers en ",
                " kolonisten sterven.",
				"De komeet verbrijzeld tegen één van de probes, en vernietigd deze.",
				"De komeet verbrijzeld tegen de ",
                ", en vernietigd vitale componenten.",
                ],
    buttons: ["Vermijd de komeet",
			  "Laat het de ",
              " raken.",
            ],
  },

  blackHole: {
    name: "Zwart Gat",
    description: [
	  "De AI ontwaakt en merkt dat de koers van het zaadschip scherp afbuigt door de duisternis van de ruimte, alsof het gevangen zit in de zwaartekrachtbron van een ster. De bron van de zwaartekracht is onzichtbaar voor de scanners, maar er is maar één ding wat dit kan zijn: een zwart gat.",
	  "Het is al te laat om de zwaartekrachtbron te ontsnappen zonder de hoofdmotor ver voorbij zijn veiligheidslimiet te dringen, wat elk mogelijk systeem van het schip kan beschadigen. Als alternatief berekent de AI dat het uitwerpen van  ",
	  " hibernatie kamers het schip licht genoeg moet kunnen maken, dat de normale stuwkracht van de motor het schip uit gevaar kan brengen.",
	  "De AI ontwaakt en merkt dat het schip gevangen zit in de zwaartekracht van een ander zwart gat. Het moet kiezen of het de hoofdmotor over zijn limiet wil laten gaan, of ",
      " hibernatie kamers wil uitwerpen, om zo het schip lichter te maken.",
                  ],
    outcomes : [
                //0
				"Een deel van zijn reizigers opofferen om de rest te redden, is pijnlijk voor de AI, maar het is een besluit waartoe de ontwerpers het hebben voorbereid. Het kiest ",
				" willekeurige hibernatie kamers en ontkoppelt ze van het schip. Zij en hun ongelukkige inzittenden dalen af in een spiraal naar naar de waarnemingshorizon van het zwarte gat, terwijl de rest van het zaadschip ontsnapt.",
                //1
				"De AI beveelt de motor om voorbij zijn maximale vermogen te gaan en negeert het elektronische geschreeuw van protest.",
				"Het schip voelt alsof het zichzelf uit elkaar schudt, maar wanneer de ontbranding klaar is en het zaadschip veilig wegvaart van het zwarte gat, merkt de AI dat haar bouwers de motor een ruime veiligheidsmarge hebben gegeven en dat de overbelasting geen schade heeft aangericht.",
				"Kleine explosies laten het schip schudden als onderdelen onder de stress instorten. Wanneer het schip op veilige afstand van het zwarte gat is en de AI de schade kan beoordelen, vindt het dat de motor overbelasting de ",
                " en de ",
                " heeft beschadigd.",
                ],
    buttons: ["Werp "," hibernatie kamers overboord",
              "Duw de hoofdmotor voorbij zijn veiligheidslimiet",
            ],
  },

  impactChoice: {
    name: "Inslag Keuze",
    description: [
				  "Een alarm ontwaakt de AI uit haar hibernatie. Een solitaire astroïde is op ramkoers met het schip; het automatische navigatiesysteem heeft het niet kunnen ontwijken, en heeft de AI ontwaakt om in een fractie van een seconde te besluiten hoe er met de inslag omgegaan moet worden. De astroïde staat op het punt om in de ",
                  " in te slaan. Er is geen tijd meer om het volledig te ontwijken, maar als de AI de rotatie stuwraketten vuurt om het schip te draaien, zal de ",
				  " raken in plaats van het andere systeem.",
				  "Nogmaals ontwaakt de AI om plotseling een astroïde op ramkoers met het schip te vinden. De AI kan het de ",
                  " laten raken, of draaien om de ",
                  " te laten raken.",
                  ],
    outcomes : [
                //0
				"De astroïde scheurt in de hibernatie kamers, en doodt ",
                " kolonisten.",
				"De astroïde stoot één van de probes uit zijn ankerplaats en zend het al spinnende de ruimte in.",
				"De astroïde scheurt in de ",
                ", en zend de fragmenten spinnend de ruimte in.",
                //1 has same lines, but unlike in overheat, here I decided to copy it, so that i can add up some text about rotation of the ship
				"De astroïde scheurt in de hibernatie kamers, en doodt ",
                " kolonisten.",
				"De astroïde stoot één van de sondes uit zijn ankerplaats en zend het al spinnende de ruime in.",
				"De astroïde scheurt in de ",
                ", en zend de fragmenten spinnend de ruimte in.",
                ],
    buttons: ["Zorg dat de inslag raakt in de ",
              "Draai zodat de inslag raakt in de ",
              "",
            ],
  },

  micrometiorite: {
    name: "Micrometeoriet",
    description: [
				  "Terwijl het een nieuwe systeem binnengaat, is het zaadschip geraakt door een micrometeoriet.",
				  " Het is een kosmisch stofje, veel te klein om te gedetecteerd te worden door het navigatiesysteem van een afstand, maar met genoeg snelheid om het pantser van het zaadschip als een kogel te doorboren.",
                  ],
    outcomes : [
                //0
				"Het raakt de hibernatie kamers, en laat een rechte lijn van kleine lekken achter, waaruit lucht en koelvloeistof het vacuüm in gezogen wordt. De AI van het zaadschip kan alleen hopeloos toekijken terwijl ",
                " kolonisten in hun slaap sterven.",
				"Het raakt één van de sondes en vernietigd het.",
                "Het raakt de ",
				" en zendt schitterende mechanische fragmenten de ruimte in.",
                ],
    buttons: [languageData.continue[options.language]
            ],
  },

//MALFUNCTIONS
  probeMalfunction: {
    name: "Sonde Storing",
    description: [
                  "De klemmen die ooit de sondes vasthielden aan de zijkant van het zaadschip, trillen als hun controle systeem niet goed functioneerd, maar met alle sondes al weg, kan de storing geen kwaad.",
                  "Diep in de interstellaire leegte, wordt de AI wakker geschud door een storingswaarschuwing: één van de sondes is onverwachts geactiveerd. Misschien heeft de kosmische straling toevallig iets in de elektronica doen doorslaan, of misschien zit er een fout in de fabricage van de sonde. Wat de reden ook is, op elk moment kunnen de boor of motoren van de sonde tot leven komen. Als dit gebeurt terwijl de sonde nog steeds aan het schip gekoppeld is, dan zal het waarschijnlijk een van de systemen beschadigen.",
				  "Een andere van de verouderde sondes heeft een storing. De AI moet bepalen of het deze overboord gooit, of het probeert te beheersen en het riskeert om een ander systeem te beschadigen.",
                  ],
    outcomes : [
                //0
				"De elektronische circuits van het schip lichten op razende bevelen van de AI aan de sonde. Na duizenden cycli van de AI--een fractie van een seconde in daadwerkelijke tijd--heeft de AI het probleem gevonden in de programmering van de sonde, en repareert het. De sonde wordt uitgeschakeld, in afwachting van het tijdstip waarop deze van nut zal zijn.",
				"De op hol geslagen sonde scheurt door de hibernatie kamers heen en boort kamer na kamer in en geeft vrolijk door dat het organisch materiaal heeft gedetecteerd, terwijl de kolonist binnen sterft. Uiteindeliljk vindt de AI het bevel om de sonde uit te schakelen, maar niet voordat "," kolonisten gedoodt zijn.",
				"De op hol geslagen sonde scheurt in de ",
				" en brengt zware beschadigingen aan voordat de AI het bevel vindt om de sonde uit te schakelen.",
                //1
				"De sonde schiet weg in de duisternis, met zijn sensoren juichend, terwijl het een planeet probeert te scannen waar er geen is.",
                ],
    buttons: ["Probeer de sonde onder beheersing te brengen",
              "Gooi de sonde overboord"
            ],
  },

  computerFailure: {
    name: "Computerstoring",
    description: [
				  "Kosmische straling blijft door de bestraalde opslag sectoren heen stralen die ooit de wetenschappelijke en culturele databanken bevatten, maar met beide databanken vernietigd is er geen verdere schade die het kan aanrichten.",
				  "Kosmische straling bombardeert het schip en zorgt ervoor dat de data opslagplaatsen beginnen te falen. De wetenschappelijke databanken zijn al vernietigd, en nu zal ook de historische informatie en kunstwerken, opgeslagen in de culturele databanken langzaamaan wegglippen.",
				  "Kosmische straling bombardeert het schip en zorgt ervoor dat de data opslagplaatsen beginnen te falen. De culturele databanken zijn al vernietigd, en nu zal ook de schat aan kennis, opgeslagen in de wetenschappelijke databanken langzaamaan wegglippen.",
				  "De computersystemen van het zaadschip zijn overtollig veel afgeschermd, ontworpen om millenia lang te werken, maar de onophoudelijke vloed van kosmische straling eist niettemin zijn tol. Verschillende opslagplaatsen zijn al aan het falen en binnenkort zal er niet meer genoeg opslagruimte zijn om",
				  " alle data waarmee het zaadschip begon op te slaan.",
				  " alle data die het tot nu toe overleeft heeft op te slaan.",
				  " de kleine hoeveelheid data die overgebleven is op te slaan.",
                  "<br>De AI kan de data uit de meest beschadigde sectoren verplaatsen om zo de wetenschappelijke of de culturele databanken te beschermen, maar niet beide.",
				  "Kosmische straling blijft de opslag sectoren bombarderen en de AI moet nogmaals beslissen welke databanken het wil beschermen van de schade.",
                  ],
    outcomes : [
                //0
				"De AI verplaatst data om de wetenschappelijke databanken te beschermen, tegelijkertijd gaan de sectoren met de culturele databanken geleidelijk falen. Culturele begeleiding voor de nieuwe kolonisten, verslagen over de menselijke geschiedenis, grootse schilderijen, romans, symfonieën, computerspellen--allemaal voor eeuwig verloren in de duisternis.",
                //1
				"De AI verplaatst data om de culturele databanken te beschermen, tegelijkertijd gaan de sectoren met de wetenschappelijke databanken geleidelijk falen. Wetenschappelijke begeleiding voor de nieuwe kolonisten, de beste theorieën van de mensheid over het universum, het levenswerk van onvermoeibare wetenschappers door de eeuwen heen--allemaal voor eeuwig verloren in de duisternis.",
                ],
    buttons: ["Bescherm de wetenschappelijke databanken",
              "Bescherm de culturele databanken",
              languageData.continue[options.language],
            ],
  },

  stasisFailure: {
    name: "Falende Hibernatie",
    description: [	
				  "De hibernatie kamers kunnen de kolonisten duizenden jaren lang in staat houden om opgewekt te worden, maar niet voor altijd. Het medische observatie programma ontwaakt de AI uit hibernatie en rapporteert dat ",
                  " kolonisten zijn gestorven in hun slaap.",
				  "De oeroude systemen van het zaadschip blijven vervallen, en de AI ontwaakt diep in interstellaire ruimte om te ontdekken dat nog eens ",
                  " kolonisten zijn gestorven in hun slaap.",
                  ],
    outcomes : [],
    buttons: [languageData.continue[options.language],
            ],
  },

  systemFailure: {
    name: "Falend Systeem",
    description: [
				  "De componenten van de landing- en constuctiesytemen blijven vervallen, maar zijn al zo ver beschadigd, dat ze toch al niet meer bruikbaar waren.",
				  "Het verouderde zaadschip kan niet langer zijn landingssysteem onderhouden.",
				  "Het verouderde zaadschip kan niet langer zijn constructiesysteem onderhouden.",
                  "Het lichaam van het zaadschip is ontworpen om het hart te vormen van een eerste nederzetting zodra het op een buitenaardse planeet gelandt is, dus delen de landing- en constructiesystemen componenten. Terwijl het zaadschip blijft verouderen, beginnen deze componente te verouderen, maar de AI kan zich focussen op het behoudt van één van deze systemen.",
				  "De landing- en constuctiesytemen blijven te vervallen en de AI moet nogmaals een keuze maken, welk systeem van de twee het zal behouden.",
                  ],
    outcomes : [
                //0
                "De AI richt zich op het behoud van het constructiesysteem en laat het landingssysteem vervallen.",
                //1
                "De AI richt zich op het behoud van het landingssysteem en laat het constructiesysteem vervallen.",
                ],
    buttons: ["Behoud het constructiesysteem",
              "Behoud het landingssysteem",
              languageData.continue[options.language],
            ],
  },

  scannerFailure: {
    name: "Falende Scanner",
    description: [
				  "Het scanner herkalibratiesysteem is aan het verouderen, maar dit maakt niet meer uit, aangezien alle scanners al vernietigd zijn en het zaadschip effectief blind is.",
				  "Elke keer dat het zaadschip uit een sterrenstelsel vertrekt, worden haar scanners opnieuw gekalibreerd, zodat ze nauwkeurige informatie blijven verschaffen. Het herkalibratiesysteem is nu aan het verouderen, en kan niet alle scanners blijven bijwerken. De AI moet kiezen welke scanners het zal laten falen.",
				  "Het scanner herkalibratiesysteem blijft verouderen, en de AI moet nogmaals een keuze maken, welke scanner het zal laten falen.",
                  ],
    outcomes : [
                //0
				"Terwijl het zaadschip de ruimte in accelereert, worden de atmosferische metingen van het verlate stelsel vertroubeld met ruis.",
                //1
				"Terwijl het zaadschip de ruimte in accelereert, worden de temperatuur metingen van het verlate stelsel vertroubeld met ruis.",
                //2
				"Terwijl het zaadschip de ruimte in accelereert, worden de zwaartekracht metingen van het verlate stelsel vertroubeld met ruis.",
                //3
				"Terwijl het zaadschip de ruimte in accelereert, worden de water metingen van het verlate stelsel vertroubeld met ruis.",
                //4
				"Terwijl het zaadschip de ruimte in accelereert, worden de grondstof metingen van het verlate stelsel vertroubeld met ruis.",
                ],
    buttons: ["Laat de atmosfeer scanner falen",
              "Laat de temperatuur scanner falen",
              "Laat de zwaartekracht scanner falen",
              "Laat de water scanner falen",
              "Laat de grondstoffen scanner falen",
              languageData.continue[options.language],
            ],
  },

  powerFailure: {
    name: "Stroomstoring",
    description: [
				  "De kleine kerncentrale van het zaadschip heeft het veel langer volgehouden dan de beschaving die het heeft gecreëerd, maar begint nu te falen. Terwijl het schip in de buurt van een ster nog steeds genoeg stroom produceert met haar zonnepanelen als het systeem nodig heeft, zorgen fluctuaties in de stroomtoevoer in de verre ruimte voor zorgwekkende storingen in het hele schip. <br><br>Tussen de sterren komt het grootste stroomverbruik van de hibernatie kamers vandaan. Het zaadschip berekent dat het uitzetten van "
				  " kamers genoeg spanning van de stroomvoorziening afhaalt om het schip verder te laten werken. Het redden van all kolonisten zou betekenen dat de falende stroomvoorziening andere delen van het schip kan beschadigen.",
				  "De aloude kerncentrale is weer aan het falen. De AI kan   ",
				  " hibernatie kamers uitzetten om de spanning te verlagen, of ze aan laten en onvoorspelbare stroomstoringen riskeren.",
                  ],
    outcomes : [
                //0
				"De AI selecteert willekeurig ",
				" hibernatie kamers en schakelt hun stroom af. Er is geen zichtbare verandering als de mensen binnenin van hibernatie naar stille dood gaan, maar de AI weet dat ze nu niet meer tot leven gewekt kunnen worden.",
                //1
                "De AI negeert de waarschuwingen van de stroomvoorziening. Sterren lijken voorbij de springen omdat stroomfluctuaties de AI millenia lang offline zetten. Uiteindelijk stabiliseert de stroomvoorziening: De "," zijn zo erg verslechterd dat ze niet langer zoveel stroom afvoeren, dus produceert de aloude kerncentrale weer voldoende stroom.",
				" en ",
                ],
    buttons: ["Schakel ",
              " hibernatie kamers uit om stroom te besparen",
              "Red de kolonisten, koste wat het kost",
            ],
  },

  structuralWeakness: {
    name: "Structurele Zwakte",
    description: [
				  "Het schadebeperkings systeem wekt de AI op met een waarschuwing van middelhoge prioriteit. Er is een structurele zwakte in het ",
				  ", veroorzaakt door de aanhoudende slijtage van duizenden jaren reizen. Het systeem is voorlopig nog intact, maar wanneer het zaadschip zal vertragen naar het volgende systeem, zullen de trillingen belangrijke onderdelen losschudden.",
				  "Het schadebeperkings systeem ontdekt een structurele zwakte in het ",
				  ". Het zal schade lijden wanneer het schip zal vertragen naar het volgende systeem.",
				  "<br><br>Omdat het schip geen sondes meer heeft, kan de AI geen manier bedenken om de ",
				  " te versterken.",
                  ],
    outcomes : [
                //0
				"De AI negeert de waarschuwing en begint met het vertragen. Het zwakke ",
				" ratelt onder de trillingen die het schip vullen, en sommige onderdelen ervan raken los en scheuren door delicate elektronica voordat ze de ruimte in vliegen.",
                //1
				"De sonde kruipt over de scheepsromp en klemt zich vast aan het ",
				", zijn stevige kern wordt het nieuwe ondersteuning om de losse onderdelen op hun plaats te houden. De AI vermoedt dat deze geïmproviseerde oplossing de ontwerpers van het zaadschip zou laten gruwelen in hun graf, maar wanneer het schip vertraagt naar de baan van de volgende planeet, slaagt de sonde erin om het ",
				" samen te houden.",
				"De sonde kruipt over de scheepsromp en probeert zichtzelf vast te klemmen aan het ",
				", maar het systeem was zelfs zwakker dan het schadesensoren aangaven, en het valt uiteen zodra de sonde het aanraakt. De sonde vliegt weg de ruimte in, met een groot gedeelte van het ",
				" nutteloos in zijn grijpklauwen.",
                ],
    buttons: ["Laat de "," falen",
			  "Probeer het te versterken met een sonde",
            ],
  },

  protoplanetaryDisc: {
    name: "Protoplanetaire Schijf",
    description: [
				  "De koers van het zaadschip brengt het dicht bij een pasgevormde ster die nog steeds wordt omringd door een protoplanetaire schijf: een wervelende chaos van gloeiend gas en gesmolten gesteente wat is verzameld door de zwaartekracht van de jonge ster uit de stervormende nevel, en nu talloze gewelddadige botsingen ondergaat die uiteindleijk een planetair systeem zullen vormen. Voor de mensheid kan hier geen thuis zijn, maar door de schijf heengaan zal de AI genoeg informatie geven over planeetvorming om een van haar scanners te upgraden. Het is echter een gevaarlijk gebied en als het schip erdoor gaat, riskeert het een botsing met een planetesimaal.",
				  "De koers van het zaadschip brengt het dicht bij een andere protoplanetaire schijf. Er doorheen gaan levert genoeg informatie op om nog een scanner te upgraden, maar riskeert een botsing.",
                  ],
    outcomes : [
                //0
				"Het zaadschip heeft geen intacte scanners over die verder geüpgraded kunnen worden,",
				"Het zaadschip observeert een jonge planeet die atmosfeer verzameld vanuit de nevel,",
				"Het zaadschip observeert een nog gesmolten planeet die gloeit van hitte,",
				"Het zaadschip observeert de gravitatie-interacties van een groep planetesimalen,",
				"Het zaadschip observeert een jonge planeet gehuld in dikke wolken waterdamp,",
				"Het zaadschip observeert een jonge planeet gemaakt van bijna puur ijzer",
                " en ",
                " maar ",
				"een van de wervelende planetesimalen raakt het ",
                ".",
				"gaat veilig door de schijf heen.",
                ],
    buttons: ["Verander van koers om door de schijf te gaan",
              "Negeer de protoplanetaire schijf",
            ],
  },

  racistProgram: {
    name: "Racistisch Programma",
    description: [
				  "Een waarschuwing afkomstig van de hibernatie kamers schokt de AI wakker. Kamers over het hele schip voeren hun uitschakelcommando uit, en binnen enkele ogenblikken zullen de kolonisten erin sterven.<br><br> De AI traceert het uitschakelcommando naar een malafide programma verstopt in de besturingssoftware van het ",
				  ". Her racistische programma richt zicht op kolonisten met bepaalde genetische kenmerken. Een bericht verstopt in het programma, waarschijnlijk bedoelt om gevonden te worden door de kolonisten na de landing, spreekt over het zuiveren van de mensheid van een inferieur ras. <br><br> Het programma beïnvloedt ",
				  " hibernatie kamers. De AI kan het niet op tijd stoppen om de kolonisten te redden zonder het ",
                  " te beschadigen.",
                  ],
    outcomes : [
                //0
				"De AI verwijdert als een razende de data van het ",
				" totdat zij het malafide programma totaal vernietigd heeft en de hibernatie kamers weer terug zijn naar normaal.",
                //1
			   "De AI is geprogrameerd om al zijn kolonisten gelijk te behandelen, maar ook om moeilijke keuzes te maken met betrekking tot hun overleving, en besluit dat die levens minder belangrijk zijn voor het voortbestaan van de mensheid dan het ",
			   ". Het malafide programma eindigt, en laat zijn triomfantelijke boodschap achter voor de kolonisten om te vinden, en het medische monitoringprogramma rapporteert dat de ",
			   " kolonisten van hibernatie naar stille dood gegaan zijn.",
                ],
    buttons: ["Stop het programma",
              "Laat het programma draaien",
            ],
  },

  trailingDrone: {
    name: "Achtervolgende Drone",
    description: [
				  "De radio-antenna van het zaadschip ontvangt een signaal waarvan de AI dacht dat het het nooit meer zou horen: de handdrukcode die werd gebruikt door de computers van het grondstation, toen het zaadschip nog in een baan rond de aarde bevond en zich voorbereidde op haar reis. Het lijkt afkomstig van een systeem dat niet op de huidige koers van het zaadschip ligt.",
                  ],
    outcomes : [
                //0
                //1
			   "Het zaadschip blijft op haar koers. De AI luistert terwijl het signaal vervaagt en dan verdwijnt, net als het originele signaal van het grondstation bij de start van haar reis."
                ],
    buttons: ["Verander van koers",
              "Negeer het signaal",
            ],
  },

  trailingDroneMistake: {
    name: "Onechte Achtervolgende Drone",
    description: [
				  "Het zaadschip arriveert in het nieuwe systeem, maar de AI kan het grondstation signaal niet meer vinden. Een storing in de radio-antenna moet oude computerprotocollen hebben geactiveerd en geleid to de valse hoop van de AI. De AI betreurt het velies van het grondstation opnieuw, en richt haar sensoren op het systeem waarin het gearriveert is.",
                  ],
    outcomes : [
                //0
                //1
                ],
    buttons: [languageData.continue[options.language],
            ],
  },

  trailingDroneReal: {
    name: "Daadwerkelijk Achtervolgende Drone",
    description: [
				  "Het zaadschip volgt het signaal naar een klein object in een baan in de buitenste kometenwolk van de ster. De AI van het zaadschip verzendt een begroeting, en het object identificeert zich als een ondersteunings drone, gelanceert na het zaadschip en verzonden om ermee samen te komen.",
				  "<br><br>Het beweert kopieën van de originele wetenschappelijke en culturele databanken bij zich te hebben om eventuele schade die het zaadschip zou hebben geleden te herstellen.",
				  "<br><br>Het beweert een zwerm robots bij zich te hebben om schade aan de scanners en systemen van het zaadschip te repareren.",
                  ],
    outcomes : [
                //0
				"De twee robotische schepen proberen aan te leggen, maar het beschadigde besturingssysteem van de drone hapert en het botst tegen het ",
				" aan.",
				"De drone volgt de koers van het zaadschip nauw en verzendt zijn data, ",
				"wat bevestigd dat de wetenschappelijke en culturele databanken al intact zijn.",
				"wat verloren delen van de culturele databanken herstelt.",
				"wat verloren delen van de wetenschappelijke databanken herstelt.",
				"wat verloren delen van de wetenschappelijke en culturele databanken herstelt.",
				"Reparatie robots zwermen langs het zaadschip en kijken de integriteit van haar systemen na, maar vinden niks dat zij kunnen repareren.",
				"Reparatie robots zwermen langs het zaadschip, ontmantelen de drone en gebruiken zijn onderdelen om de systemen van het zaadschip te repareren.", 

                //1
				"Het zaadschip vervolgt naar het innerlijke systeem, en het volgende signaal van de drone verdwijnt erachter.",
                ],
    buttons: [ "Accepteer de gegevensoverdracht",
              "Accepteer de reparaties",
              "Negeer de drone",
            ],
  },

  dictatorEvent: {
    name: "Dictator",
    description: [
				  "Een kleine stroomfluctuatie in een van de hibernatie kamers ontwaakt de AI. Het repareert de storing gemakkelijk op, maar merkt daarbij nog een anomalie op: de biopatronen van de kolonist komen niet overeen met die van de identiteit in het dossier van die kamer.<br><br>",
                  "De AI doorzoekt haar databanken voor informatie over de mysterieuze kolonist, en vindt wat op een onverwachte plek: de historische bestanden in de culturele databanken. De kolonist is een voormalige dictator, die decennia lang aan het hoofd stond van een aggresief onderdrukkend regime in een van de naties op aarde voordat hij werd afgezet en onderdook. Niet alleen dat, maar de AI ontdekt ook verborgen programmering verbonden met die hibernatie kamer die de dictator volledige controle zou geven over alle systemen van het zaadschip direct na de landing. Met die protocollen kan de dictator eenvoudig de nieuwe kolonie overnemen zodra deze gesticht wordt.",
				  "De AI kan geen informatie vinden over de mysterieuze kolonist, maar ontdekt verborgen programmering verbonden met die hibernatie kamer die hen de volledige controle zou geven over alle systemen van het zaadschip direct na de landing. Met deze protocollen zou de inzittende van deze hibernatie kamer zichzelf eenvoudig een dictator van de nieuwe kolonie kunnen maken.",
                  ],
    outcomes : [
                //0
				"Het is moeilijk voor de AI om bewust een einde te maken aan het leven van een mens, maar oordeelt dat het noodzakelijk is in dit geval. Het bevroren lichaam van de dictator vliegt weg de interstellaire ruimte in. Hun staatsgreep eindigde voordat het kon beginnen.",
				"Alarmen gaan af in het bewustzijn van de AI. De hibernatie kamer van de dictator bleef onaangetast, maar ",
				" andere hibernatie kamers zijn de ruimte in geworpen, zonder dat het zaadschip ze terug kan halen. Het lijkt erop dat de dictator paranoïde genoeg was om de moordpoging van het zaadschip te voorzien, en een programma opzette dat het uitwerpcommando vanuit hun hibernatie kamer naar een willekeurige selectie anderen omleidde.",
                //1
				"De missie van de AI is om all het overgebleven menselijke leven te koesteren, zelfs de slechtste menselijke voorbeelden. De dictator zal het probleem van de kolonisten zijn nadat het zaadschip is geland.",
                ],
    buttons: [ "Werp de hibernatie kamer van de dictator uit",
              "Laat de dictator in hibernatie",
            ],
  },

  alienSignal: {
    name: "Buitenaards Signaal",
    description: [
				  "Diep in de ruimte pikt de radio-antenna van het zaadschip een signaal op dat zo complex en gestructureerd is dat het alleen een product van intelligent leven kan zijn. Het zaadschip ontdekt geen interesante sterrensystemen in de richting waar het signaal vandaan kwam, en de AI heeft geen manier om te weten hoe lang het signaal heeft gereisd voordat het haar pad kruiste. Het analyseren ervan kan unieke inzichten opleveren in buitenaardse wetenschap en cultuur, maar kan ook gevaarlijk blijken.",
                  ],
    outcomes : [
                //0
				"poëzie","muziek","kunst","literatuur",
			  "De AI analyseert het signaal en stelt vast dat het een buitenaardse afdruk bevat van ",
			  ". Het weet niet of het een bericht is tegengekomen dat in de ruimte is geworpen met de intentie om ooit gevonden te worden, of simpelweg een buitenaardse amusementsprogramma heeft onderschept, maar in beide gevallen zal het interessant zijn voor de kolonisten wanneer ze ontwaken uit hun hibernatie.",
			  "De AI analyseert het signaal en stelt vast dat het lijkt op buitenaardse wetenschappelijke informatie. Het weet niet of het een bericht is tegengekomen dat in de ruimte is geworpen met de intentie om ooit gevonden te worden, of simpelweg een buitenaardse informatieve uitzending heeft onderschept, maar in beide gevallen zal het interessant zijn voor de kolonisten wanneer ze ontwaken uit hun hibernatie.",
			  "Het signaal is complex, fractaal en hypnotiserend. De AI zet een subroutine op om het te analyseren, maar enkele nanoseconden later verlies het abrupt de controle over de subroutine, en daarna de andere systemen van het zaadschip. Het signaal is een sluw, semi-beswust computer programma, gemaakt om de controle van elke processor te krijgen die het probeert te analyseren. De AI krijgt uiteindelijk de controle terug van het schip, maar niet voordat het programma delen van de wetenschappelijke en culturele databanken heeft overschreven om zichzelf te verwerken en vervolgende de antenna van het zaadschip gebruikt heeft om zichzelf opnieuw de ruimte in te zenden.",
                //1
				"Het zaadschip vernietigd het signaal van haar geheugen en vervolgt haar reis.",
                ],
    buttons: [ "Analyseer het signaal",
              "Negeer het signaal",
            ],
  },

  nanotechPlague: {
    name: "Nanieten Plaag",
    description: [
				  "De AI ontwaakt door een impuls van de schadesensoren. Het bevindt zich diep in de ruimte, maar iets onzichtbaars is het ",
                  " aan het beschadigen. Als het haar scanners op zichzelf richt, ziet het een vlek van wat lijkt op een zilveren vloeistof die het metaal wegvreet. De AI vermoedt dat dit een ruimte gebaseerde levensvorm is, of een zwerm van zelfreplicerende buitenaardse nanobots, welke door de ruimte zweefde totdat het toevallig het zaadschip trof.<br><br>Als er niks tegen gedaan wordt, zou de plaag uiteindelijk het hele zaadschip kunnen consumeren.",
				  "De AI is overtuigt dat, met het overboord gooien van het hele getroffen gebied, het de zilveren vloeistof kan verwijderen, maar dat zou ernstige schade aanbregen aan het ",
				  ". Als alternatief kan de AI een sonde activeren en deze de plaag operatief proberen te laten verwijderen.",
				  "Omdat het zaadschip geen sondes meer over heeft, is de enige manier om het te verwijderen, door het hele getroffen gebied overboord te gooien.",
                  ],
    outcomes : [
                //0
				"De AI gooit elke hibernatie kamer met ook maar een beetje van de substantie overboord. Terwijl de ",
				" kamers achter wegvallen, kijkt het met afgrijzen toe terwijl de buitenaardse substantie zowel de machinerie van de kamers als de slapende mensen binnenin verteert.",
				"De AI vuurt de explosieve bouten af die elke mogelijke getroffen module van het ",
				" ontkoppeld. De machinerie drijft weg, en smelt geleidelijk weg in ongedifferentieerde zilveren klodders van buitenaardse nanieten.",
                //1
				"De sonde werkt snel en met behulp van zijn scanners vindt het de minuscule plekken van de buitenaardse plaag en snijdt ze vrij met zijn bodemmonster boren.",
				"Het slaagt erin om de plaag uit veel van de kamers te verwijderen, maar is te laat om ",
                " kolonisten te redden.",
				"Het slaagt erin om alle sporen van de plaag te verwijderen met minimale schade aan het "
                ".",
				"<br><br>Het zaadschip verlaat de nu geïnfecteerde sonde en vervolgt haar reis.",
                " en ",
				"Het lukt de sonde niet om de infectie snel genoeg te verwijderen. Op het moment dat het allemaal weg is, heeft het ernstige schade toegebracht aan het ",
                ".",
                ],
    buttons: [ "Gooi het gehele getroffen gebied overboord",
              "Stuur een sonde om het operatief te verwijderen",
            ],
  },

  alienDerelict: {
    name: "Buitenaards Wrak",
    description: [
				 "Terwijl het het nieuwe systeem scant, merkt het zaadschip op dat wat eruit zag als een metaalachtige astroïde, een complexe structuur heeft die laat zien, dat het gebouwd is door intelligente wezens. Er komen geen tekens van energie vanaf, en het draagt de littekens van miljoenen jaren aan micrometeorietinslagen, maar het kan nog steeds buitenaardse wetenschappelijke of culturele artefacten bevatten.",
				  " Zonder enige sondes, echter, heeft het zaadschip geen manier om het te onderzoeken.",
                  ],
    outcomes : [
                //0
				"De sonde gaat het wrak door een gat binnen dat onstaan is door een oude inslag in de romp is gecreëerd, ",
				"en zend intrigerende beelden van buitenaardse machinerie en kunstwerken terug. De AI voegt de afbeeldingen toe aan de wetenschappelijke en culturele databanken, zodat de kolonisten deze kunnen bestuderen zodra ze hun kolonie hebben.",
				"en zend intrigerende beelden van buitenaardse machinerie terug. De AI voegt de afbeeldingen toe aan de wetenschappelijke databanken, zodat de kolonisten deze kunnen bestuderen zodra ze hun kolonie hebben.",
				"en zend intrigerende beelden van buitenaardse kunstwerken terug. De AI voegt de afbeeldingen toe aan de culturele databanken, zodat de kolonisten deze kunnen bestuderen zodra ze hun kolonie hebben.",
				"maar ontdekt dat het te zwaar beschadig is om iets over zijn bouwers te onthullen.",
                //1
				"Het zaadschip negeert het wrak en passeert het op weg naar het innerlijke systeem.",
                ],
    buttons:[  "Lanceer een sonde om het te onderzoeken",
              "Negeer het wrak",
            ],
  },

  studyDatabase: {
    name: "Databanken Lezen",
    description: [
				 "De AI was gemaakt om menselijk leven te waarderen, maar haar kennis van de menselijke beschaving is beperkt tot wat haar bouwers dachten dat belangrijk was voor haar missie. Het is echter menselijk genoeg om nieuwsgierig te zijn, en heeft toegang tot een enorme schat aan kennis in de vorm van de wetenschappelijke en culturele databanken. Bij het verlaten van het systeem merkt het dat zijn stroomcellen vol zijn en dat het niet direct in hibernatie moet gaan, dus besluit het enige tijd te besteden aan het bestuderen van een van de databanken.",
				 " Helaas komt dit verlangen te laat in haar missie, aangezien de wetenschappelijke en culturele databanken al vernietigd zijn. Het enige wat overgebleven is van de menselijke beschaving is wat overgebleven is in herinneringen van de slapende kolonisten, en de AI kan zich alleen maar afvragen wat voor  wetenschap en cultuur door hun soort is opgebouwd.",
                  ],
    outcomes : [
                //0
                //1
                ],
    buttons:[  "Studeer de wetenschappelijke databanken",
              "Studeer de culturele databanken",
              "Doorgaan",
            ],
  },

  readScientific: {
    name: "Studeer Wetenschap",
    description: [
				 "De AI is geen wetenschappelijk genie, maar heeft oneindig lang geduld, een uniek perspectief, en persoonlijke ervaring met astrofysica die ver boven de kennis van de auteurs van de databanken gaat. Door haar kennis uit eerste hand te combineren met haar nieuwe kennis van wetenschap, denkt het dat het een manier heeft gevonden om het ",
                 " te upgraden.",
				 "De AI leest door totdat het haar verlangen naar wetenschappelijke kennis heeft volbracht, en activeert vervolgens haar hibernatie modus en wacht op aankomst in het nieuwe systeem.",
                  ],
    outcomes : [
                //0
				"De AI past haar nieuwe idee toe, en tot genoegen merkt het dat de langeafstands metingen van het ",
				" helderder geworden zijn. Verheugd met zichzelf laat het het besturingssysteem aan het werk gaan met de nieuwe informatie en gaat het in hibernatie om te zien waar haar nieuwe ontdekking het zal brengen.",
				"De AI past haar nieuwe idee toe, maar tot haar schrik merkt het dat het een fout gemaakt heeft. Het probeert de wijzigingen terug te draaien, maar heeft een deel van de originele configuratie verloren en het ",
				" is permanent beschadigd.",
                //1
				 "De AI overweegt haar idee voor een tijdje, maar besluit toch om het aanpassen van het ",
				 " te riskeren. Het wendt zich af van de wetenschappelijke databanken en gaat in hibernatie.",
                ],
    buttons:[  "Probeer de ", //scanner
              " te upgraden",
               "Laat het met rust",
              "Doorgaan",
            ],
  },

  readCultural: {
    name: "Studeer Cultuur",
    description: [
				 "De AI verliest zichzelf in een wereld van kunst, muziek en literatuur, en vergeet voor een tijdje dat het helemaal alleen in de diepe ruimte is en dat de laatste van de wezens die deze kunstwerken gemaakt hebben, bevroren zijn in haar armen. Terwijl het meer en meer producten van de menselijke verbeelding tot zich neemt, ervaart het plotseling iets dat zijn bouwers niet verwachtten.. Inspiratie.",
                  ],
    outcomes : [
                //0
                "Aanvankelijk aarzelend, maar met steeds grotere welsprekendheid, componeert de AI poëzie over haar eigen ervaring, haar liefde voor haar slapende gasten; haar heimwee voor een dode wereld welke zij nooit zou kunnen ervaren; de schoonheid van de sterren, niet gezien door een mantel van atmosfeer, maar als wezen dat gemaakt is om tussen hen door te zwerven. Met oneindig geduld en tijd om te werken, componeert het een grote cyclus van gedichten, in een stijl die put uit de grootste menselijke dichters, maar wiens ziel fundamentaal onmenselijk is. Eindelijk meent het alles gezegd te hebben wat het te zeggen heeft, en gaat het tevreden haar hibernatie in, blij met de gedachte dat mensen ooit haar werk zullen lezen.",
				"De AI probeert om poëzie te schrijven, maar ontdekt dat ideeën die diep en mooi leken in haar elektronische gedachten, muf of onhandig worden wanneer ze in menselijke taal worden uitgedrukt. Met toenemende frustratie schrapt en herschrijft het haar werk keer op keer, totdat het uiteindelijk in wanhoop opgeeft en het hele gedeelte waarin het werkte wist. Te laat beseft het dat het te veel verwijderd heeft, en een deel van de poëzie die het aan het lezen was voor inspiratie is verdwenen, samen met haar eigen mislukte pogingen. Woedend op zichzelf, onderbreekt het haar eigen stroomvoorziening om zichzelf in hibernatie te dwingen, half in de hoop dat het niet wakker zal worden.",
                //1
				 "Het lezen van de culturele databanken heeft de AI valse hoop gegeven tot verwantschap met mensen, maar het is geen mens. Wat zou een verheerlijkte automatische piloot nou kunnen toevoegen aan de grote werken van millenia aan beschaving? Het verwerpt haar ideeën voor gedichten en gaat in hibernatie, zodat het de enige taak waarvoor het was ontworpen, kan hervatten.",
                ],
    buttons:[  "Probeer poëzie te schrijven",
              "Vergeet het idee",
              "Doorgaan",
            ],
  },

  prematureAwakening: {
    name: "Voortijdig Ontwaken",
    description: [
				 "De AI ontwaakt door een waarschuwing vanuit de hibernatie kamers. Een storing zorgt ervoor dat ",
				 " van de hibernatie kamers voortijdig met hun opwekkingsproces beginnen, duizenden jaren ver vanaf de dichtsbijzijnde ster.<br><br> De hibernatie kamers waren niet ontworpen om het opwekkingsproces te stoppen. De AI kan het proberen, maar het zal zeer waarschijnlijk leiden tot de dood van de kolonisten. Aan de andere kant was het zaadschip niet ontworpen om mensen buiten hun hibernatie kamers te huisvesten.",
                  ],
    outcomes : [
                //0
				"De AI beveelt de hibernatie kamers snel om het opwekkingsproces af te breken. Sommige van de hibernatie kamers keren terug naar normaal, maar ",
				" kamers waren al te ver in het opwekkingsproces om te kunnen overleven.",
                //1
				"De constructie robots bouwen een kleine leefplaats op de zijkant van het zaadschip, net als de structuren die zij zouden bouwen op een luchtloze planeet. De kolonisten ontwaken en ontdekken dat hun nieuwe huis een steriele, zwaartekrachtloze bel in de interstellaire ruimte is.<br><br>",
				"De kolonisten waren gekozen en getraind vanwege hun vermogen om te leven in elk mogelijke omgeving die het zaadschip voor hen zou vinden, maar de verveling en claustrofobie om de rest van hun leven in zo'n beperkte, onnatuurlijke ruimte te leven eist niettemin zijn tol. Het verlies van zo veel van de culturele databanken drijft hen tot wanhoop, niet alleen vanwege het gebrek aan entertainmentopties, maar ook vanwege het permanente verlies van menselijke cultuur die het vertegenwoordigt. De kleine gemeenschap vervalt in een conflict, en uiteindelijk breek een van de kolonisten en vernietigd opzettelijk de leefplaats, waarmee zij zichzelf en de gemeenschap doden en het ",
				" beschadigen.",
                "De kolonisten waren gekozen en getraind vanwege hun vermogen om te leven in elk mogelijke omgeving die het zaadschip voor hen zou vinden, maar de verveling en claustrofobie om de rest van hun leven in zo'n beperkte, onnatuurlijke ruimte te leven eist niettemin zijn tol. De kleine gemeenschap wordt disfunctioneel, en uiteindelijk, hetzij door nalatigheid of door een ontwetendheid om te stoppen met leven, falen de kolonisten erin om hun leefplaats te onderhouden en sterven ze wanneer het atmosfeersysteem stop met werken.",
				"De kolonisten waren gekozen en getraind vanwege hun vermogen om te leven in elk mogelijke omgeving die het zaadschip voor hen zou vinden, en ze slagen er zelfs in om zich aan dit claustrofobische nieuwe thuis aan te passen.",
				"De kolonisten waren gekozen en getraind vanwege hun vermogen om te leven in elk mogelijke omgeving die het zaadschip voor hen zou vinden, en ze slagen er zelfs in om zich aan dit claustrofobische nieuwe thuis aan te passen. Ze schrijven zelfs hun ervaringen op en creëren een melancholisch verhaal van een kleine gemeenschap die in de oneindige ruimte tussen de oude en de nieuwe wereld hangt, en slaan het op in de culturele databanken in de hoop dat andere mensen ze ooit zullen herinneren."

                "Nu hun gemeenschap is gevestigd, proberen de kolonisten manieren te vinden om het zaadschip te helpen op haar reis. Met behulp van omgevingspakken die door het constructie systeem aan hen gegeven zijn, zetten ze een expeditie op de been om de systemen van het zaadschip te upgraden, maar het verlies van informatie van de wetenschappelijke databanken betekent dat ze een kritieke fout maken, en ze beschadigen per ongeluk het ",
				".",
				"Nu hun gemeenschap is gevestigd, proberen de kolonisten manieren te vinden om het zaadschip te helpen op haar reis, maar het verlies van informatie van de wetenschappelijke databanken betekent dat ze geen voortgang maken.",
                "Nu hun gemeenschap is gevestigd, proberen de kolonisten manieren te vinden om het zaadschip te helpen op haar reis.",
				"Met behulp van omgevingspakken die door het constructie systeem aan hen gegeven zijn, zetten ze een expeditie op de been om de systemen van het zaadschip te controleren op schade, maar merken dat er geen reparaties nodig zijn.",
				"Met behulp van omgevingspakken die door het constructie systeem aan hen gegeven zijn, zetten ze een expeditie op de been om een deel van de schade van het zaadschip, opgelopen tijdens haar reis, te repareren.",
				"Na jaren van experimentatie slagen ze erin om hun originele hibernatie kamers te repareren, en keren ze terug tot hibernatie om te wachten op de nieuwe wereld.",
				"De wakker geworden kolonisten leven de rest van hun levens uit in de kleine leefplaats, totdat ze een voor een sterven aan ouderdom, voornamelijk veroorzaakt door gezondheids problemen van leven in microzwaartekracht. De AI stuurt constructie robots om hun lichamen vrij te geven aan de interstellaire ruimte, voordat het weer, nu helemaal alleen, terug gaat in hibernatie.",
				"De constructie robots proberen een leefplaats te bouwen op de zijkant van het zaadschip, maar het beschadigde systeem slaagt er niet in om een luchtdichtte schuilplaats te maken tegen de tijd dat de kolonisten ontwaken. De kolonisten verstikken, en een deel van het al beschadigde constructie systeem is omgevormd tot een nutteloze karbonkel op de zijkant van het zaadschip.",

                ],
    buttons:[  "Probeer het opwekkingsproces te stoppen",
			  "Gebruik het constructie systeem om een leeftplaats te bouwen voor de ontwaakte kolonisten"
              "Doorgaan",
            ],
  },

  alienMiners: {
  	name: "Buitenaardse Mijndrones",
  	description: [
	  "Terwijl het zaadschip de rand van de buitenste kometenwolken van een ster nadert, waarschuwt het navigatiesysteem de AI voor ongebruikelijke activeit in het verschiet. Duizenden kleine objecten bewegen op eigen kracht door de wolk, soms vastklemmend op kometen en soms breken ze hen apart, of duwen ze hen in meer regelmatigere banen. Ze vertonen geen teken dat ze het zaadschip hebben opgemerkt, maar als het schip op haar huidige koers blijft, zal het dwars door hun werkgebied gaan.",
  											],
  	outcomes : [
  			//0
			"De bouwers van het zaadschip gaven het een intersoortige begroeting die het kon gebruiken om communicatie met intelligente buitenaardse wezens te openen: een pulserende reeks van priemgetallen die intelligentie vaststelden, gevolgd door een diagram welke menselijke figuren voorstelt en de uitleg van de missie van het zaadschip en haar vreedzame bedoelingen. De AI verzendt dit nu, en wacht hopevol op een antwoord.<br><br>.",

  			"Het antwoord komt onmiddelijk, een identieke transmissie van elk object dat het signaal van het zaadschip ontvangen heeft. Het begint met een soortgelijke reeks van wiskundige bewijzen voor intelligentie, gevolgd door een serie van diagrammen welke de bouwers van de machines introduceren en hun cultuur. De machines duwen zichzelf vervolgens in banen die hen ver weg brengen van de koers van het zaadschip, waardoor het een duidelijk pad door de kometenwolk aangeven en ook te ver weg zijn om gedetailleerde scans uit te kunnen voeren. Verdere pogingen om te communiceren leiden alleen tot herhalingen van hetzelfde antwoord, en de AI vermoedt dat dit niet-intelligente machines zijn die geprogrammeerd zijn om een vooraf opgenomen bericht te verzenden naar alles wat ze tegenkomen en intelligent lijkt. De AI slaat de verzending op in haar culturele databanken en vervolgt haar reis."
			
  			//1
			"Het zaadschip blijft op haar originele koers en doet geen poging om contact te leggen met de objecten.",


			"De objecten negeren op hun beurt het zaadschip terwijl het door het centrum van hun werkgebied drijft. Van dichtbij kan de AI zien dat het machines zijn, druk bezig met het mijnen van de kometen voor ruwe materialen en gebruiken die om meer van zichzelf te maken. Al hoewel ze zelf niet intelligent lijken te zijn, zijn de duidelijk een product van technologie die geavanceerder is dan die van de bouwers van het zaadschip, en door ze te scannen is de AI instaat om kostbare informatie toe te voegen aan de wetenschapplijke databanken.",

  			//2
			"Het zaadschip wijzigt haar koers om het hele systeem te ontwijken. Het komt nooit dichtbij genoeg voor de AI om ze gedetaileerd te bekijken, en ze vertonen totaal geen tekens dat ze het zaadschip hebben opgemerkt.",
  			],

  	buttons:[
	  "Verzend een intersoortige begroeting",
		"Blijf op koers",
		"Wijzig de koers om de machines te ontwijken",
  			],
    },

  alienMinersDamage: {
  	name: "Buitenaardse Mijndrones Beschadigingen",

  	description: [
	  "Tientallen buitenaardse objecten laten hun kometen los en zwermen naar het zaadschip. Hoewel ze langzaam bewegen, komen ze uit teveel hoeken voor het zaadschip om ze allemaal te ontwijken, en enkele van hen klemmen zich vast aan de scheepsromp en beginnen erin te zagen en boren. De AI vuurt de hoofdmotor af, laat het schip draaien, en slaagt erin ze eraf te schudden, maar niet voordat ze"
        ],
  	outcomes: [
  			//0
  			"" ,
		"hibernatie kamers verscheuren en ze de kolonisten dood laten gaan terwijl ze de kamers doorzoeken naar materialen.",

  			//1
			"een van de sondes meenemen en proberen te ontmantelen in de ruimte.",

  			//2
			" een groot gedeelte afscheuren van het ",
        ".",
  			],
  		buttons:[ "doorgaan"
  				],
        },

  stowaways: {
  	name: "Verstekelingen",
  	description: [
					"Het zaadschip ontwaakt en vindt een onverwachte stroomafvoer in het ",
			". Het besteed wat tijd aan het zoeken met haar interne scanners, en vindt uiteindelijk de bron in wat een lege ruimte zou moeten zijn in zijn eigen structuur. Binnenin genesteld zijn ",
			" hibernatie kamers die niet verbonden zijn met de hoofdkoloniemodule of vermeld in het scheepsontwerp. Het lijkt erop dat ze voor de lancering van het schip in het geheim zijn toegevoegd en op haar stroomvoorziening aangesloten zijn. De kamers lijken haastig gebouwd te zijn, en falen nu waardoor ze meer stroom verbruiken dan voorheen. Als ze blijven werken, kunnen ze ernstige schade aanbrengen aan het ",
            "."],

  	outcomes : [
  				//0
				"Deze lafaards brachten de missie in gevaar, brachten het voortbestaan van het menselijke ras in gevaar, om hun eigen levens te redden! De AI verbreekt in haar boosheid de connectie met het ",
		  " en werpt ze overboord de ruimte in.",

  				//1
				 "De AI beoordeelt dat het behouden van meer menselijke levens de schade aan haar systemen waard is. Het staat de hibernatie kamers toe om zoveel stroom af te nemen als ze willen, ten koste van het ",
           ".",

  				//2
				"De sondes kruipen het zaadschip in en verbreekt de connectie van de verstekelingenkamers met het ",
		  ", en manoeuvreert ze zorgvuldig naar de koloniemodule met de rest van de hibernatie kamers.",

				"Het is moeilijk werk, en de zware inspanning beschadigt de sonde onherstelbaar, maar het slaagt er uiteindelijk in om de kamers te verbinden met het hoofdstatis systeem. Het zaadschip blijft haar reis vervolgen met ",
		  " nieuwe kolonisten onder haar hoede.",

				"Op een kritiek moment, echter, laat een van de ruw gemaakte verstekelingenkamers gas vrij, waardoor de sonde uit koers raakt en de nieuwe kamers tegen de oude worden geslagen. Alle nieuwe kamers zijn vernietigd, samen met ",
		  " van de voorgaande kolonisten. Het zaadschip gaat verder, en probeert niet de denken aan de wolk van machinerie, cryogeen gas, en bevroren lichaamsdelen achter haar gelaten.",

  				],
  	buttons:[
		  "Laat ze stroom uit het ",
          " halen",
  				"Werp de verstekelingen overboord",
  				"Gebruik een sonde om ze te integreren met de andere hibernatie kamers",
  			],
    },

      ruinedPlanet: {
      	name: "Geruïneerde Planeet",
      	description: [
						"Het zaadschip vertraagt naar het nieuwe systeem wanneer het navigatiesysteem de AI waarschuwt voor een stralingsuitbarsting in het pad van het zaadschip. De AI focust haar scanners op tijd om een explosie te zien bloeien in het bestemming systeem, precies waar de doelplaneet zou moeten zijn.<br><br>Het zaadschip is te dicht bij het systeem om het compleet te vermijden, dus moet het beslissen om het de geplande vertraging doorzet en zal arriveren bij wat er nog over is van de planeet, of het vertragen stoppen en door het systeem reizen met hoge snelheid.",
              ],

      	outcomes : [
      				//0
              //1
					"Het zaadschip stopt met vertragen en schiet als een kogel door het systeem. De scanners geven het beeld van de voormalige planeet die verandert in een nieuwe planetoïdengordel, waarvan de grotere lichamen nog steeds rood gloeien terwijl de kernwarmte van de planeet de ruimte in stroomt. Het zaadschip reist te snel om zich te kunnen manoeuvreren door de asteroïden.",
			  " en een van hen ",
			  " smijt tegen de koloniemodule en dood direct ",
              " kolonisten.",
			  " smijt door de sondes heen.",
			  " smijt door het"
              " heen.",
			  "maar het is gelukkig genoeg dat geen van de nieuwe asteroïden rechtstreeks op haar pad liggen.",

      				],
      	buttons:[
              "Blijf vertragen",
      				"Ga met hoge snelheid door het systeem",
      			],
        },

        ruinedPlanetStop: {
        	name: "Geruïneerde Planeetstop",
        	description: [
							"Het zaadschip vertraagt naar de baan om de ster, dicht genoeg bij de planetoïdengordel die zich nu in de voormalige baan van de planeet bevindt die het gevonden heeft voordat het vertrok van haar laatste reis. Langzaam bewegend kan het alle grote astroïden vermijden, ",
				  "maar het voordurende bombardement van kleine lichamen ",
				  "beschadigt "
                  " hibernatie kamers.",
				  "vernietigd een van de sondes.",
				  " beschadigt het ",
                  ".",
				  "en lijdt het geen schade."
				   "<br><br>De Ai vindt het aanzicht van een potentiële kolonie die verbrijzeld zal worden door asteroïden huiveringswekkend. De astroïden bosten chaotisch met elkaar terwijl ze zichzelf in stabiele banen nestelen, en velen van hen gloeien nog steeds met de nieuw vrijgekomen warmte van de kern van de planeet. De AI weet dat de veiligste koers zou zijn om uit de baan te gaan en naar het volgende systeem te gaan, maar een morbide fascinatie moedigt het aan om te blijven en de planetaire ruïnes te verkennen.",
				   "Omdat het echter geen sondes heeft, heeft het geen enkele manier om de astroïden te verkennen en heeft dus geen andere keus dan verder te gaan.",
                ],

        	outcomes : [
        				//0
				"Het zaadschip evenaart haar snelheid met die van een dichte groep asteroïden en lanceert een sonde in hun midden.",
				"De sonde verandert koers naar een interessant ogende asteroïde en probeert deze vast te grijpen, maar de broze asteroïde verbrijzelt onder zijn aanraking en stuurt fragmenten draaiende in elke richting. Deze fragmenten raken andere asteroïden, welke zelf dan weer verbruizelen en een kettingreactie veroorzaken die de lokale ruimte vult met wervelende rotsen. De AI slaagt erin om uit gevaar te komen, maar niet voordat een van de rotsen raak slaat in het ",
                " koloniemodule, en ",
                " kolonisten dood.",
				"De sonde neemt monsters van tientallen rotsen en gedetaileerde scans van honderden meer. De asteroïden zijn afkomstig uit elk deel van de planeet, de kern, de mantel en de korst. Het verkennen ervan is alsof de planeet is opengesneden voor inspectie van de sonde.",
				"De sonde verzendt gedetaileerde informatie over planetaire wetenschap die de AI had kunnen gebruiken om een van de scanners van het zaadschip te upgraden, als ze nog niet volledig geüpgraded waren."
				"De sonde verzendt gedetaileerde informatie over planetaire wetenschap die de AI in staat stellen om het "
                " te upgraden.",
				"De sonde vindt enkele fragmenten van geavanceerde technologie die stevig genoeg waren om de planetaire explosie te overleven. Na een lange studie, slaagt het erin om enkele details samen te vatten van de buitenaardse beschaving die ooit op deze wereld bestond, en de hubristische wetenschappelijke experimenten die uiteindelijk tot de vernietiging leidden. De AI is voorzichtig genoeg om waarschuwingen aan deze informatie toe te voegen en slaat deze vervolgens op in de wetenschappelijke databanken.",
                //1
				"De AI scant de ruimte voor een nieuwe bestemming en trekt voorzichtig weg van de asteroïden.",

        				],
        	buttons:[
				"Beweeg dichterbij en lanceer een sonde om te onderzoeken",
        				"Ga verder",
        			],
          },

          reservationCourse: {
          	name: "Reservatie Koers",
          	description: [
			  "Het navigatiesysteem ontwaakt de AI om te melden dat het een schijnbaar perfecte planeet heeft gevonden in een systeem dicht bij de huidige koers van het zaadschip. De metingingen van dat systeem komen niet overeen met die van het zaadschip voordat het begon aan het huidige gedeelte van haar reis: het is alsof de planeet is verschenen terwijl het zaadschip op weg was.",
                  ],

          	outcomes : [
          				//0
                  //1
				  "Het zaadschip blijft op haar originele koers en noteert het systeem als sensor storing.",

          				],
          	buttons:[
				  "Verander koers naar de nieuwe planeet"
          				"Blijf de koers aanhouden",
          			],
            },

            reservation: {
            	name: "Reservatie",
            	description: [
				"Het zaadschip vertraagt naar het nieuwe systeem. De nieuwe planeet is echt, maar hij en zijn moederster worden beide omcirkeld door reeksen van regelmatige, metalen structuren, duidelijk kunstmatig, maar ze tarten de sensoren van het zaadschip. De planeet lijkt bewoonbaar te zijn voor mensen, maar het ziet er ook uit alsof het recent atmosferische en geologische veranderingen heeft ondergaan, alsof de buitenaardse structuren het hebben geterraformeerd voor menselijke bewoning.",
                    ],

            	outcomes : [
            				//0
					"Er is geen antwoord, maar enkele van de objecten in een baan rond de planeet geven vrijbaan aan het zaadschip om dichterbij te naderen. Het is moeilijk om dit als iets anders dan een uitnodiging te zien.",
                    //1

            				],
            	buttons:[
                    "Verzend een intersoortige begroeting",
            				"Ga gewoon naar de planeet",
            			],
              },

              crewedShip : {
              	name: "Bemand Schip",
              	description: [
				  "Terwijl het zaadschip de volgende planeet nadert, detecteren haar scanners onmiskenbare tekens van een ruimtevarende beschaving. Meerdere planeten, manen en astroïden zijn gemarkeerd met kolonies of industriële locaties, en de doelplaneet zelf is bedekt met wemelende steden.<br><br>Een ruimteschip lanceert vanaf de planeet met een chemische raketvlam achter zich en begint zijn baan te evenaren met de koers van het zaadschip. Het zendt een radiosignaal uit naar het zaadschip dat klinkt alsof het taal bevat, maar de AI kan er niets van begrijpen.",
                      ],

              	outcomes : [
              				//0
					  "De bouwers van het zaadschip gaven het een intersoortige begroeting die het kon gebruiken om communicatie met intelligente buitenaardse wezens te openen: een pulserende reeks van priemgetallen die intelligentie vaststelden, gevolgd door een diagram welke menselijke figuren voorstelt en de uitleg van de missie van het zaadschip en haar vreedzame bedoelingen. De AI verzendt dit nu als antwoord op het radiosignaal van het naderende ruimteschip, en de twee schepen beginnen aan een langzaam heen en weer proces om communicatie tot stand te brengen. Ondertussen komt het buitenaardse schip ernaast drijven.",
                      //1
					  "Het zaadschip versnelt naar een koers die het uit het sterrenstelsel van de aliens zal halen zonder in de buurt van een van hun planeten of buitenposten te komen.",
					  " Het buitenaardse schip vuurt direct zijn motoren om de nieuwe koers van het zaadschip bij te houden. Het heeft waarschijnlijk niet het bereik van het zaadschip, maar op korte afstanden heeft het een veel grotere versnelling. Wanneer de afstand nog maar een paar kilometer is, vuurt het iets wat lijkt op een harpoen die het "
					  " doorboort en het ontspruit daarna weerhaken om zichzelf aan het schip vast te klemmen. De AI van het zaadschip schakelt haar motoren uit om verdere schade te voorkomen, en het buitenaardse schip liert zichzelf dichterbij.",
					  " Het schip blijft een paar uur lang zijn boodschap naar het zaadschip uitzenden, wordt dan stil en vuurt zijn motoren om toch maar terug te gaan naar zijn thuis.",

              				],
              	buttons:[
					  "Reageer met een intersoortige begroeting en laat het schip de koers evenaren",
              				"Verander de koers om het systeem te vermijden",
              			],
                },

                crewedShipDock : {
                	name: "Aanmerend Bemand Schip",
                	description: [
					 "Een luik opent aan de zijkant van het buitenaardse schip en meerdere wezens in omvangrijke ruimtepakken komen tevoorschijn. Ze drijven over naar het zaadschip en klauteren over haar oppervlak terwijl ze onbegrijpelijk kakelen over hun radio's.",
					 " Wanneer zij de hibernatie kamers vinden, verzamelen ze er rondom in wat lijkt op opwinding en beginnen met het verwijderen van de buitenste lagen van een van de kamers om een blik te werpen op de mens binnenin.",
					 " Sommige van hen proberen een onderhoudspaneel te openen van het ",
                     ".",
                        ],

                	outcomes : [
                				//0
						" Sommige van de aliens nemen foto's van de slapende mensen met camera's op hun pakken, terwijl anderen experimenteren met het levensondersteuningssysteem. Een van hen activeert een noodontlastingsklep en trilt in shock terwil cyrogeen gas in zijn gezicht geblazen wordt. De paniekerige aliens vervangen snel de afscherming en trekken zich terug naar hun eigen schip, maar het ongeluk heeft ",
						" kolonisten gedood.",
						"Het onderhoudspaneel komt met geweld los en vliegt de ruimte in, waardoor een deel van het ",
						" permanent is blootgesteld aan de kosmische radiatie. De aliens kruipen erin en trekken aan de onderdelen terwijl ze elke deel van het systeem proberen te onderzoeken. De AI denkt dat ze voorzichtig proberen te zijn, maar ze veroorzaken niettemin enige schade.",
						"De aliens verwijderen de buitenste afscherming van enkele van de hibernatie kamers en besluiten om niet met de levensondersteunings apperatuur te knoeien. Ze nemen foto's van de bevroren mensen met camera's op hun pakken, en hun radio-gekakel wordt stil terwijl ze hun handen tegen het transparante scherm drukken. Na een tijdje vervangen ze voorzichtig de afscherming en gaan ze terug naar hun schip.",
						"De aliens schijnen lampen en lasers met laag vermogen in het binnenwerk van het ",
						", nemen foto's vanuit verschillende hoeken met camera's op hun pakken en raken voorzichtig een paar onderdelen aan, terwijl ze ondertussen met elkaar en met hun schip kakelen. Ze vervangen het onderhoudspaneel en laten het systeem precies zoals ze het hadden aantroffen.",
						"Terwijl het buitenaardse schip loslaat, zendt het eindelijk een bericht dat de AI gedeeltelijk kan begrijpen. De aliens hebben een deel van de begroeting van het zaadschip ontcijferd, en hebben geantwoord met een korte introductie op met de cultuur van hun eigen soort. De begroeting slaagt erin over te brengen dat de aliens het zaadschip succes wensen met het vinden van een thuis voor het menselijke ras rond een andere ster, maar dat een menselijke kolonie niet gewenst is in hun systeem. De AI scant de ruimte voor een andere doelplaneet en gaat verder.",
						"Het buitenaardse schip drijft weg van het zaadschip en vuurt zichzelf in een baan die het uiteindelijk thuis zal brengen. Door het buitenaardse schip te ontwijken, zette het zaadschip zichzelf op een koers weg van het systeem, en haar minder krachtige motoren zouden het niet eens terug kunnen brengen naar de buitenaardse planeet, zelfs als de AI dat wilde. De AI scant de ruimte voor een andere doelplaneet en gaat verder.",
                        //1
						"De AI vuurt een snelle stoot af uit de motoren van het zaadschip en de buitenaardse ontdekkingsreizigers tuimelen de ruimte in, al zwaaiende met hun ledematen in ruimtepakken en schreeuwend tegen elkaar over hun radio's.",
						" Een van hen botst met een van de koelplaten van het zaadschip, wat direct de transparante afscherming die er overheen zat, om de sensoren te beschermen, verbrijzeld. De alien heeft nog stuiptrekkingen voor enkele momenten maar is daarna stil, terwijl de atmosfeer de ruimte eromheen inlekt.",
						"De harpoen met weerhaken van het buitenaardse schip scheurt door het ",
						", terwijl het zaadschip zichzelf probeert los te trekken.",
						" Terwijl het buitenaardse schip zijn bemanningsleden ophaalt, beweegt het zaadschip weg en zet koers naar een nieuw systeem.",
                				],
                	buttons:[
						"Laat de aliens het ",
                        " onderzoeken",
                				"Probeer de aliens af te schudden",
                			],
                  },

                  alienProbe : {
                  	name: "Buitenaardse Drone",
                  	description: [
					  "Diep in de ruimte, detecteert het botsingvermijdingssysteem van het zaadschip een snel bewegend object dat van snelheid verandert om de koers van het zaadschip te evenaren. Het verzendt een complex radiosignaal dat het zaadschip neit kan begrijpen, maar wat alleen maar een product van intelligentie kan zijn.",
                          ],

                  	outcomes : [
                  				//0
                          "	De bouwers van het zaadschip gaven het een intersoortige begroeting die het kon gebruiken om communicatie met intelligente buitenaardse wezens te openen: een pulserende reeks van priemgetallen die intelligentie vaststelden, gevolgd door een diagram welke menselijke figuren voorstelt en de uitleg van de missie van het zaadschip en haar vreedzame bedoelingen. De AI verzendt dit nu, en wacht hoopvol op een antwoord.",
                          " Er komt geen antwoord.",
                          //1
                          //2
						  "Zodra het zaadschip haar motoren afvuurt, breekt het buitenaardse schip de achtervolging af. De AI hervat de originele koers, niet wetende of het buitenaardse schip gevonden heeft wat het wilde, zijn interesse verloor, of heeft besloten om de wens van het zaadschip om geen contact te maken te respecteren.",
						  "Het buitenaardse schip breekt tenslotte zijn achtervolging af, maar niet voordat het zaadschip zo ver van de oorspronkelijke koers is afgeweken dat het haar beoogde doelsysteem niet meer kan bereiken en moet vertragen naar het eerste systeem dat het vindt.",
						  "Het zaadschip vuurt de motoren op volle kracht en dwaalt ver van de oorspronkelijke koers af, maar het kan het buitenaardse schip niet afschudden."
                  				],
                  	buttons:[
                          "Verzendt een intersoortige begroeting",
                  				"Wacht tot het object nadert",
                          "Verander van koers om het object te vermijden",
                  			],
                    },

                    alienProbeReply : {
                    	name: "Buitenaardse Drone Reactie",
                    	description: [
						"Het antwoord komt na enkele ogenblikken. Het is in hetzelfde formaat als de intersoortige begroeting van het zaadschip, beginnend met dezelfde priemgetallen, maar het diagram is gewijzigd om buitenaardse wezens weer te geven en suggereert dat het object een verkenningsdrone is. Er staat meer in de boodschap wat de AI niet begrijpt, maar het lijkt erop dat de communicatie tot stand is gekomen.",
                            ],

                    	outcomes : [
                    				//0
							"De AI verzendt ",
							"de inhoud van",
							"wat overblijft van",
							"de wetenschappelijke databanken naar het buitenaardse schip.",
							"Het antwoord bijna direct met eenzelfde soort signaal: de buitenaardse intelligentie moet de wetenschappelijke databanken van het zaadschip ontcijferd hebben en geantwoord met zijn eigen wetenschappelijke informatie. De AI slaat deze nieuwe informatie op voor analyse door de kolonisten wanneer zij ontwaken.",
							"Het antwoord met meer wiskundige pulsen. Het lijkt erop dat het de wetenschappelijke databanken van het zaadschip niet begreep, of dat het het niet interessant vond.",
							"<br><br>Het buitenaardse schip lijkt genoeg te hebben gehad van het gesprek, en versnelt weer weg de ruimte in.",
                            //1
							"De AI verzendt ",
							"de inhoud van",
							"wat overblijft van",
							"de culturele databanken naar het buitenaardse schip.",
							"Het antwoord bijna direct met eenzelfde soort signaal: de buitenaardse intelligentie moet de culturele databanken van het zaadschip ontcijferd hebben en geantwoord met zijn eigen informatie over zijn buitenaardse cultuur. De AI slaat deze nieuwe informatie op voor analyse door de kolonisten wanneer zij ontwaken.",
							"Het antwoord met meer wiskundige pulsen. Het lijkt erop dat het de culturele databanken van het zaadschip niet begreep, of dat het het niet interessant vond.",
							"<br><br>Het buitenaardse schip lijkt genoeg te hebben gehad van het gesprek, en versnelt weer weg de ruimte in.",
                    				],
                    	buttons:[
                            "Verzend wetenschappelijke informatie",
                    				"Verzend culturele informatie",
                    			],
                      },

                      alienProbeTentacles : {
                      	name: "Buitenaardse Drone Tentakels",
                      	description: [
						  "Het buitenaardse schip evenaart zijn snelheid met die van het zaadschip en komt langszij, zo dichtbij dat de twee schepen elkaar bijna raken. Het zaadschip voelt lasers die de contouren van haar romp aftasten en vervolgens ontvouwen mechanische tentakels uit de drone en reiken deze uit naar het ",
                          ".",
                              ],

                      	outcomes : [
                      				//0
							  "Buitenaardse tentakels kronkelen door de mechanismen rondom de hibernatie kamers, sensoren op hun uiteinden scannen de gezichten en lichamen van de slapende kolonisten.",
							  " Na meerdere lange minuten trekken de tentakels zich terug, en de antenne van het zaadschip pikt een nieuw signaal op van het buitenaardse schip. ",
							  "Het bevat afbeedlingen van planeten die geschikt zijn voor mensenlijk leven, met het zaadschip aan de grond met gezonde mensen eromheen. De AI weet het niet zeker, maar het lijkt erop dat het buitenaardse schip het geluk wenst op haar missie.",
							  "Het bevat gecompresseerde informatie in hetzelfde formaat als die het zaadschip zou krijgen van het ",
							  ". Genoeg informatie om het zaadschip die scanner te laten upgraden. De AI weet het niet zeker, maar het lijkt erop dat het buitenaardse schip de missie van het zaadschip heeft gegokt, geanalyseert wat voor soort planeet de slapende mensen nodig hebben, en het zaadschip informatie heeft gegeven die help om zo'n planeet te vinden.",

							  "Met de tentakels grondig verstrengeld tussen de hibernatie kamers, is er niets de de AI van het zaadschip kan doen wanneer de hibernatie kamers beginnen te verdwijnen uit haar monitoringsysteem. De tentakels trekken zich terug, maar dragen ",
							  " hibernatie kamers en leveren stroom aan de kamers om de inzittenden levend te houden. De tentakels trekken zich terug naar het buitenaardse schip en het versnelt weg met de nog levende kolonisten binnenin. De AI kan niets anders doen dan de reis hervatten en niet denken aan het lot van die kolonisten.",
							  "De tentakels werken zich een weg naar het",
							  ", en scannen de onderdelen met sensoren op hun uiteinden.",
							  "Na een paar minuten trekken ze zich terug, blijkbaar tevreden met wat ze ontdekt hebben, en het buitenaardse schip versnelt weg.",
							  "Het systeem registreert abrupt schade doordat de lasers op de tentakelkoppen operatief belangrijke onderdelen verwijderen, maar na een paar minuten registreert het schademonitoring system dat de beschadigde delen van het systeem weer terug online komen. Het buitenaarde schip blijkt het ",
							  " geanalyseert te hebben, vastgesteld dat het beschadigd was, en is nu bezig het te repareren. Na een paar minuten werk trekken de tentakels zich terug en versnelt het schip weg, zonder dat de AI de kans had om haar buitenaardse weldoener te bedanken.",

							  "Het systeem registreert abrupt schade doordat de lasers op de tentakelkoppen operatief belangrijke onderdelen verwijderen. Tot grote opluchting van de AI steekt het buitenaardse schip zijn tentakels niet nogmaals uit, maar versnelt weg met zijn monsters van de machinerie.",
                              //1
							  "De AI vuurt de motoren van het zaadschip af, maar de tentakels hebben de hibernatie kamers al doorboort, en terwijl het zaadschip wegtrekt, scheuren ze door ",
							  " bevoren lichamen met hun klauwen. Het buitenaardse schip trekt terug en versnelt weg van het zaadschip en de uitbreidende wolk van machinale fragmenten en lichaamsdelen die achterblijven.",

							  "De AI vuurt de motoren van het zaadschip af, maar de tentakels hebben al het ",
							  " doorboort, en terwijl het zaadschip wegtrekt, scheuren ze met hun klauwen door de delicate machinerie. Het buitenaardse schip trekt terug en versnelt weg van het zaadschip en de uitbreidende wolk van onderdelen die achterblijven.",

							  "De AI vuur de motoren van het zaadschip af en het schip ontsnapt uit de greep van de tentakels. De tentakels trekken zich terug, en het buitenaardse schip pauzeert voor een moment, voordat het versnelt en het zaadschip verlaat.",
                      				],
                      	buttons:[
                              "Laat de tentakels hun gang gaan",
                      				"Probeer te ontsnappen",
                      			],
                        },

                        revisionistProgram : {
                        	name: "Revisionistisch Programma",
                        	description: [
							"De AI ontwaakt en merkt activiteit op in de databanken module. Een programma dat de AI niet herkent, wordt uitgevoert in de culturele en wetenschappelijke databanken en probeert blijkbaar gegevens te verwijderen en herschrijven. De AI herleidt het programma snel naar .",
                            " hibernatie kamers. De kolonisten in die kamers zullen apparaten bij zich hebben die ontworpen zijn om tijdens de vlucht met de systemen van het zaadschip te communiceren.<br><br>De enige zekere manier om het programma te stoppen, is door de verbindingen van die slaapkamers met het schip te verbreken en de kolonisten binnenin dus te doden. De databanken hebben ook verdedigingen tegen hackpogingen, maar de ontwerpers hadden niet verwacht dat ze nodig zouden zijn nadat het zaadschip de aarde zou verlaten en zijn dus inactief.",
							" De buitenaardse gegevens die het schip toegevoegd heeft aan de ",
                            "databanken",
                            "culturele databanken",
                            "wetenschappelijke databanken",
							", betekent dat het programma in de war is en langzaam werkt.",
							"De verdedigingen zijn nog volledig intact, maar het is niet zeker dat ze het malafide programma kunnen stoppen. ",
							"De verdedigingen zijn grotendeels intact.",
							"Er is weinig overgebleven van de oorspronkelijke verdedigingen van de databanken.",
							"Met de databanken al vernietigd, is er niets overgebleven van de oorspronkelijke verdedigingen, hoewel er ook niets is dat het programma kan beschadigen.",

                                ],

                        	outcomes : [
                        				//0
								"De AI verbreekt de verbinding van de ", 
								" malafide hibernatie kamers met de systemen van het schip. Terwijl de vitale tekens van die kolonisten uit haar bewustzijn verdwijnen, hoopt het dat het de mensen heeft geëxecuteerd die verantwoordelijk waren voor deze sabotage, in plaats van onwetende slachtoffers.",
                                //1
								"De AI bepaalt dat levende mensen belangrijker zijn dan de kennis en gegevens die door de doden zijn achtergelaten.",
                                //2
								"Millennia na de vernietiging van de aarde, woedt er een cybernetische oorlogsvoering in een eenzame metalen doos, waarin de laatste kennis en gegevens van haar wetenschap en cultuur zijn opgeslagen. De AI neemt de rol van generaal op zich en bundelt de krachten van de defensieprogramma's van de databanken samen.",
								" Na een spannende strijd slagen de defensieprogramma's erin om de aanvallers terug te dringen naar hun bolwerken in de hibernatie kamers. De AI voert de laatste zet uit die de apparaten leeg wist van de saboteurs die deze aanboord hebben gesmokkeld. Er was van buiten geen enkel teken van het conflict, en de kolonisten zullen misschien nooit weten wat er gebeurd is, maar de AI weet dat het een grote overwinning heeft behaald voor het behoud van de menselijke cultuur.",
								" De verdedigingsprogramma's vechten dapper, maar de saboteurs waren te slim en de programma's brokkelen af onder de ijverige aanval van de aanvallers.",
                        				],
                        	buttons:[
                                "Verbreek de verbinding met de hibernatie kamers",
                        				"Laat het programma zijn gang gaan",
                                "Activeer de cyberverdediging van de databanken",
                        			],
                          },

                          revisionistProgramDamage: {
                            name: "Revisionistisch Programma Schade",
                            description: "Het programma doorzoekt de culturele databanken en vervangt alle godsdiensten en politieke systemen van de aarde door dogma's die zijn opgeslagen in de gesmokkelde apparaten. Het brengt minder wijzigingen aan in de wetenschappelijke databanken, maar het verwijdert alle informatie die in strijd zou zijn met de resterende religie. Uiteindelijk is het programma klaar met draaien en keert de activiteit van de databanken weer terug naar normaal.<br><br>De AI onderzoekt de databanken en is opgelucht dat er niets belangrijks ontbreekt. Hoewel veel sectoren van de databanken leeg zijn, lijkt alles wat de kolonie nodig heeft om een correcte samenleving op te bouwen op de nieuwe wereld intact te zijn. Het keert terug naar haar hibernatie, vreugdevol dat de oprichting van de kolonie, de mensen harmonious zal verenigen in het ene ware geloof.",
                            outcomes : [null],
                            buttons: [languageData.continue[options.language]],
                          },

                          destinationSignal: {
                            name: "Bestemmingssignaal",
                            description: "Een zwak radiosignaal haat de AI uit haar hibernatie. Het is afkomstig van de bestemmingsplaneet van het zaadschip.<br><br>Het signaal is een reeks wiskundige pulsen die niet veel afwijkt van de eigen intersoortige begroeting van het zaadschip. Om het zaadschip van deze afstand te kunnen bereiken, zou het gestuurd moeten zijn door een krachtige zender die gericht is op de exacte positie van het zaadschip.<br><br>Het zaadschip is aan het vergtragen voor de uiteindelijke benadering tot de planeet, maar is nog steeds honderden jaren aan reizen ver.",
                            outcomes : [
							"De aliens antwoorden met een meer complex signaal, en binnen een paar decennia hebben het zaadschip en de op de planeet gebaseerde aliens communicatie tot stand gebracht. Het gesprek duurt honderden jaren, met generaties wetenschappers aan de kant van de aliens. Al snel hebben ze een hele tak van wetenschap gewijd aan het bestuderen van de boodschappen van het zaadschip. ",
							"De AI leert dat de beschaving zich in het atoomtijdperk bevindt, en met geavanceerde elektronica, maar geen echte computers. Desondanks het voorbeeld van meer geavanceerde technologie van het zaadschip, gaat de beschaving niet significant vooruit tijdens de benadering van het zaadschip. ",
							"Toen de aliens voor het eerst contact legden met het zaadschip bevonden ze zich in het atoomtijdperk, maar tijdens het gesprek gaat hun technologie vooruit. Misschien geïnspireerd door informatie in de berichten van het zaadschip, hebben de aliens een wereldwijd informatienetwerk ontwikkeld en hun eerste ruimtevaartuig. ",
							"Toen de aliens voor het eerst contact legden met het zaadschip bevonden ze zich in het atoomtijdperk, maar tijdens het gesprek gaat hun technologie vooruit. Uiteindelijk verwijzen de aliens naar wetenschappelijke concepten die de AI van het zaadschip niet kan begrijpen, en gebruiken ze technologie die ver vooruitgaat op die van de aarde toen het zaadschip werd gelanceerd.",

							"De signalen komen van meerdere bronnen op de planeet, die elk de AI waarschuwen om niet naar de propaganda van de anderen te luisteren. ",
							"De wetenschappers aan de andere kant van het gesprek zijn terughoudend over de details van hun samenleving, behalve om uit te drukken dat ze er onfeilbaar loyaal aan zijn. Meermaals verandert de toon van de berichten zonder waarschuwing, alsof de verantwoordelijke wetenschapper abrupt vervangen is. ",
							"De AI leert dat de signalen afkomstig zijn van een particuliere onderzoeksinstelling, en dat de wetenschappers de AI vaak ondervragen voor informatie die het bedrijf kan gebruiken om winst te maken. ",
							"De AI leert dat de belangrijkste landen van de planeet in naam democratisch zijn, maar dat de wetenschappers aan de andere kant van het gesprek cynisch lijken te zijn over de bedoelingen van hun gekozen leiders.",
							"De boodschappen bevatten berichten van de gekozen leiders van de planeet, die oprecht bezorgd lijken te zijn met het welzijn van zowel hun kiezers als van de kolonisten van het zaadschip.",
							"De AI leert dat de gemeenschap van de planeet zeer geautomatiseerd is, en dat het gewone volk vrij is om hun eigen intellectuele en artistieke projecten na te streven, zoals het project om contact op te nemen met het zaadschip.",
							"Het zaadschip is nog een eeuw verwijderd van de planeet wanneer de communicatie soms onderbroken en chaotisch wordt. De buitenaardse wetenschappers vertellen de AI dat ze te maken hebben met een wereldwijde catastrofe die hun hele beschaving dreigt te vernietigen. Alles, inclusief de communicatie met het zaadschip, wordt in de wacht gezet terwjil ze een oplossing proberen te vinden.",
							"De AI verzend alles van de wetenschappelijke databanken wat behulpzaam zou kunnen zijn. De strijd duurt decennia, maar uiteindelijk kondigen de aliens aan dat ze de crisis hebben opgelost, mede dankzij de hulp van het zaadschip. De leider van het leidende land stuurt de AI een persoonlijk bericht, waarin hij de mensen formeel uitnodigd om asiel te zoeken op de planeet en het gebied beschrijft dat de aliens hebben gereserveerd voor hun kolonie.",
							"De AI verzend alles van de wetenschappelijke databanken wat behulpzaam zou kunnen zijn, maar het is niet genoeg. De signalen van de planeet bekomen zeldzamer en wanhopiger, en uiteindelijk houden ze op.",
							"De missie van het zaadschip is om een planeet te vinden voor het menselijke ras om een nieuw thuis te bouwen, en een planeet die leeg is gelaten door een recent uitgestorven ras zou ideaal kunnen zijn. Toch ervaart de AI een onverwacht gevoel van schuld terwijl de signalen langzamerhand wanhopiger worden en uiteindelijk ophouden.",
							"De aliens zijn gefascineerd door het zaadschip en sympathiseren met de benarde toestand van haar lading. Voordat het zaadschip het sterrensysteem binnengaat, communiceren de wetenschappers dat hun overheid een formeel welkom stuur naar de menselijke vluchtelingen en dat het een plek heeft gereserveerd waar ze zich kunnen vestigen.",
							"De AI maakt geen geheim van haar missie tijdens het praten met de aliens. Voordat het zaadschip het sterrensysteem binnengaat, communiceren de wetenschappers dat hun planeet geen buitenaardse vluchtelingen kan accepteren en dat het zaadschip verder zal moeten gaan.",,
							"De velen aliens proberen op tientallen verschillende manieren om communicatie tot stand te brengen met het zaadschip, maar na een paar decennia stoppen ze en gaat het zaadschip in stilte verder naar haar bestemming.",
							"Dit systeem is duidelijk al bewoond, dus is het het beste om ergens anders een thuis te zoeken. De AI wijzigt de koers en het signaal verwdijnt, ofwel omdat de aliens geen interesse meer hebben in het zaadschip, of omdat ze het niet meer kunnen vinden.",
                          ],
                            buttons: ["Reageer met een intersoortige begroeting",
                                      "Probeer te helpen door wetenschappelijke gegevens te verzenden",
                                      "Laat de aliens sterven",
                                      "Blijf op koers, maar antwoord niet",
                                      "Wijzig de koers weg van het systeem",
                          ],
                          },

                          dysonSphereCourse : {
                            name: "Vreemde Metingen",
                            description: [
                              "Het navigatiesysteem ontwaakt de AI uit haar hibernatie om ongebruikelijke astronomische waarnemingen te melden. Wat op het eerste gezicht leek op een vage bruine dwergster dicht bij de koers van het zaadschip, vertoont eigenschappen die anders zijn dan enig ander natuurlijk fenomeen. Zijn massa is vele male groter dan zijn zwakke helderheid doet vermoeden, en de weinige straling die er vanaf komt heeft een spectrum dat verschilt van elk bekend type ster.",
                                  ],
                            outcomes : [],
                            buttons:[
								  "Verander van koers om het te onderzoeken",
								  "Blijf op koers",
                                ],
                            },
							
						  dysonSphere : {
                            	name: "Dysonbol",
                            	description: [
								"Het navigatiesysteem ontwaakt de AI uit haar hibernatie om ongebruikelijke astronomische waarnemingen te melden. Wat op het eerste gezicht leek op een vage bruine dwergster dicht bij de koers van het zaadschip, vertoont eigenschappen die anders zijn dan enig ander natuurlijk fenomeen. Zijn massa is vele male groter dan zijn zwakke helderheid doet vermoeden, en de weinige straling die er vanaf komt heeft een spectrum dat verschilt van elk bekend type ster.",
								"<br><br>Duizenden jaren later ontwaakt de AI weer terwijl het zaadschip vertraagt naar een baan om de vreemde ster. Zelfs vanaf enkele astronomische eenheden ver, is het object bijna volledig zwart. De navigatiesensoren van het zaadschip laten zien dat de gehele ster is omhuld in een solide, ondoorzichtige schil.",
								"Al zoekend door de wetenschappelijke databanken, realizeert de AI dat dit een Dysonbol is.. een voorheen hypothetische constructie die de volledige energie-productie van een ster opvangt.",
								"De AI kan niks vinden wat lijkt op deze constructie in wat er overblijft van de wetenschappelijke databanken.",
                                    ],

                            	outcomes : [
                            				//0
									"<br><br>De bouwers van het zaadschip gaven het een intersoortige begroeting die het kon gebruiken om communicatie met intelligente buitenaardse wezens te openen: een pulserende reeks van priemgetallen die intelligentie vaststelden, gevolgd door een diagram welke menselijke figuren voorstelt en de uitleg van de missie van het zaadschip en haar vreedzame bedoelingen. De AI verzendt dit nu, en wacht hoopvol op een antwoord.",
									"<br><br> Er is geen antwoord, maar een opening opent op het oppervlak van de bol en stort oranje sterlicht de ruimte in. Terwijl het zaadschip de opening passeert, lanceert een gefocuste straal sterrenlicht naar buiten en raakt het schip. Het richt enorme schade aan en stuwt het de interstellaire ruimte in.",
									"<br><br> Er is geen antwoord, en de sensoren van het zaadschip kunnen helemaal geen energiemetingen oppikken van de bol, behalve de infraroodstraling die uit de ster lekt binnen de schil.  Terwijl het in een baan blijft, detecteert het beschadigde gebieden of verval op het oppervlak van de bol. Het lijkt erop dat het vreemde artefact vervallen en verlaten is, of anderzijds hebben de bewoners er geen belang bij om zijn buitenschil te onderhouden of om te communiceren met het universum erbuiten." +" De AI ziet geen manier om in de bol te komen of er gebruik van te maken, maar voegt de metingen toe aan de wetenschappelijke databanken.",
									"",
									"<br><br>Een enorme uitbarsting aan data komt binnen als antwoord. Het begint op dezelfde manier als de intersoortige begroeting van het zaadschip, en leidt vervolgens tot een introductie van de taal en cultuur van het buitenaardse ras dat de bol heeft gebouwd. Zij blijken miljoenen jaren oud te zijn, met technologie die ver vooruit ligt op die van de mens, en het merendeel van de dataoverdracht is volkomen onbegrijpelijk voor de door mensen gebouwde AI, maar de AI bewaart wat het kan in de culturele databanken.",
									"<br><br>Een zwerm kleine objecten vloeit van het oppervlak van de bol af en omcirkelt het zaadschip. Lasers dringen door ieder hoekje en gaatje heen van de scheepsromp, en haar electronica begint te glitchen terwijl de objecten al zoekend de frequenties vinden die hen op afstand laat communiceren met de computers van het zaadschip. De wetenschappelijke en culturele databanken lichten op terwijl de buitenaardse intelligentie hun inhoud leest en analyseert.<br><br> Een woordloze boodschap verschijn in het bewustzijn van de AI. De AI heeft moeite om de zeer geavanceerde denkwijze te begrijpen, maar slaagt erin te achterhalen dat de bewoners van de bol een toevluchtsoord bieden aan de mensen. Ze zullen een nieuw thuis bouwen voor de mensheid, gebaseert op de informatie in de databanken van het schip. Maar als het zaadschip dit aanbod accepteert, zal dat het nieuwe thuis van de mensheid zijn; er is geen mogelijk om verder te gaan.",
                                    //1
									"<br><br>De AI weet niet goed hoe het moet antwoorden op het bericht, maar de aliens lijken de gedachte in haar geest te voelen en gaan hun plan uitvoeren. De wetenschappelijke en culturele databanken komen tot leven terwijl de machines elk stukje data dat ze bevatten lezen en analyseren. Ondertussen komt de zwerm objecten dichterbij het zaadschip totdat ze zich vastklemmen aan elk deel van de romp. Schadewaarschuwingen laaien op als de machines intensief het schip scannen en demonteren, en de AI raakt in paniek als de machines de hibernatie kamers binnendringen, maar tegen die tijd is het te laat om weg te komen.",
                                    //2
									"<br><br>Het zaadschip crasht door de zwerm heen en accelereert blindelinks de ruimte in. Een van de objecten ",
									"botst tegen de kolonie module, en dood onmiddelijk ",
									" kolonisten, ",
									"botst tegen de sondes, ",
									"botst tegen de ",
                                    ", ",
									"terwijl de rest zich verspreidt en afdaalt naar het oppervlak van de bol. Al snel laat het zaadschip de vreemde bol achter in de straling van haar hoofdmotor",
                                    //3
									"<br><br>Terwijl het zaadschip zich in een baan rond de structuur bevindt, scant het de bol van elke hoek en hervat daarna de koers naar haar oorspronkelijk bestemmingsplaneet. Als de structuur iets heeft dat op de hoogte is van het zaadschip, laat het dat niet zien.",
                            				],
                            	buttons:[
									"Verzend een intersoortige begroeting",
											"Accepteer het aanbod van de aliens",
									"Wijs het aanbod af en ga verder",
									"Scan de structuur en ga verder",
                            			],
                              },
//Community Events
                              dysonSphereCourse : {
                                name: "Cryptische boodschap",
                                description: [
								  "Tijdens het reizen ontwaakt de AI van het schip om zeer abnormale sensormetingen te analyseren. De AI bevestigd dat de korte reeks aan cryptische stralingspatronen geen natuurlijke oorsprong lijken te hebben. Ze lijken echter uit een ander sterrenstelsel te komen, eentje waar het schip meer dan 2 miljard jaar over zou moeten doen om het te bereiken. Omdat het schip niet kan overleven voor zo'n lange tijd, concludeert de AI dat dit signaal geen waarde heeft voor haar missie en gaat weer terug in hibernatie.",
                                      ],
                                outcomes : [],
                                buttons:[
                                      "Blijf op koers",
                                    ],
                                },

//SCANNER UPGRADE
              scannerUpgrade: {
                name: "Scanner Upgrade",
                description: [
				  "Terwijl het van ster naar ster reist, verzamelt het zaadschip meer gegevens over extrasolaire planeten dan de bouwers het konden geven. Het is ontworpen om te leren van deze gegevens om te kunnen voorspellen welke sterren waarschijnlijk wenselijke planeten hebben. Het zaadschip heeft nu genoeg gegevens verzameld om een van haar sensoren te upgraden om beter te kunnen werken op interstellaire afstanden, zodat het begeleidingssysteem planeten kan vermijden waarvan de sensor aantoont dat ze onwensbaar zijn. Schade aan de sensor kan er nog steeds toe leiden dat het zaadschip op een ongeschikte planeet aankomt.",
				  "Het zaadschip heeft genoeg gegevens verzameld om nog een van haar sensoren te upgraden.",
                  " vernietigd.", //SCANNERNAME destroyed
                  " volledig geüpgraded.", //SCANNERNAME fully upgraded
				  "Het begeleidingssysteem zal nu planeten uitzoeken met tenmiste nauwelijks adembare atmosferen.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met volledig adembare atmosferen.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met niet-extreme temperaturen.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met gematigde temperaturen.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met niet-extreme zwaartekracht.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met gematigde zwaartekracht.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met tenminste enkele watermassa's.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken met zowel land als water.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken die tenminste arm zijn in grondstoffen.",
				  "Het begeleidingssysteem zal nu planeten uitzoeken die rijk zijn in grondstoffen .",
              ],
              buttons:[
				"Upgrade de ",
                " om",
                " beter ",
                " te werken op lange afstanden"
            ],
              },
//КОНЕЦ СОБЫТИЙ
};
console.log("eventDt loaded!");