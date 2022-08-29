var eventsText = {

//UNEVENTFUL
  unsuitable: {
    name: "Unpassend",
    description: "Die KI entscheidet, dass der erste Planet nicht gut genug ist. Sie richtet ihre Scanner neu aus, breitet die Sonnensegel aus und beginnt eine weitere Reise durch die Leere.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm: {
    name: "Falscher Alarm",
    description: "Tief im Weltall wird die KI durch einen plötzlichen Alarm des medizinischen Überwachungsprogrammes geweckt. Die KI überprüft die Kolonisten, findet aber heraus, dass es nur ein Fehler im System war. Trotzdem überwacht die KI die schlafenden Kolonisten eine Weile, bis sie wieder zusammen mit den Kolonisten einschläft.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm2: {
    name: "Falscher Alarm",
    description: "Die KI wird durch eine mögliche Fehlfunktion aus ihrem Schlaf geweckt, aber eine Systemcheck zeigt, dass es ein Fehlalarm war. Weit vom nächsten Stern entfernt verbringt die KI etwas Zeit damit, die kalte Schönheit der Milchstraße zu bewundern, bevor sie zurück in einen Ruhezustand geht und ihre Ankunft im nächsten System erwartet.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating: {
    name: "Hibernation",
    description: "Der nächste Stern, den das System ausgewählt hat, befindet sich auf der anderen Seite einer großen Leere, die über dutzende Lichtjahre hinweg keine Sterne enthält. Die KI ruht für Jahrtausende, während das Schiff durch komplette Leere reist.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating2: {
    name: "Hibernation",
    description: "Für Jahrtausende schwebt das Schiff in Richtung seines nächsten Zieles, beinahe komplett leblos, nur die Kollisionsvermeidung und das Schadensüberwachungssystem sind aktiv.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

  starCluster: {
    name: "Sternencluster",
    description: "Der Kurs des Schiffes führt durch einen dichten Sternencluster und die KI schläft, während die Navigationsprogramme einen komplexen Weg durch die sich überlappenden Gravitationsfelder finden.",
    outcomes : [null],
    buttons: [languageData.continue[options.language]],
  },

//COMMON
  overheat: {
    name: "Überhitzung",
    description: [
                  "Die KI erwacht in einer Mauer grellen Lichtes. Der Kurs des Schiffes hat es nah an einen Überriesen geführt, der um einiges heißer ist als das Navigationssystem erwartet hat, und das Schiff wird schneller heißer, als es gekühlt werden kann. Die KI muss einen Teil des Temperaturkontrollsystems deaktivieren, bevor das ganze System zusammenbricht.",
                  "Das Navigationsystem führt das Schiff zu nah an einen weiteren Überriesen und die KI muss sich wieder entscheiden, welches Modul es überhitzen lassen will.",
                  ],
    outcomes : [
                //0
                "Die KI führt die überschüssige Hitze in die Schlafkammern. Das Temperaturkontrollsystem erholt sich, während das Schiff sich von dem Überriesen entfernt, doch erst nachdem ",
                " Kolonisten zu schwere Gewebeschäden erleiden, um wiederbelebt werden zu können.",
                //1 - 2 - 3 same text
                "Die KI führt die überschüssige Hitze in die ", //The AI channels excess heat into the ",
                ". Das Temperaturkontrollsystem erholt sich als sich das Schiff von dem Überriesen entfernt, aber nicht bevor die Hitze ",//INEDIT: Damaged object does here, then next line
                "beschädigt."
                ],
    buttons: ["Überhitze die Schlafkammern",
              "Überhitze die Scanner",
              "Überhitze die Landungs/Konstruktionsmodule",
              "Überhitze die Datenspeicher",
            ],
  },

  radiationAlert: {
    name: "Strahlungsalarm",
    description: [
                  "Die KI wacht durch einen Strahlungsalarm auf; die Explosion einer entfernten Supernova überlastet die Elektronik des Schiffes. ",
                  "Die Schlafkammern funktionieren nicht richtig und in ein paar Augenblicken werden sich ein paar von ihnen deaktivieren.",
                  "Eine der Sonden funktioniert nicht mehr richtig und wird in ein paar Momenten zerstört.",
                  "Das Datenspeichersystem funktioniert nicht mehr richtig und in ein paar Momenten werden Teile der ",
                  " verloren gehen.",
                  "Die ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
                  " funktionieren nicht mehr richtig und werden in ein paar Momenten permanent beschädigt.",
                  " Das Schiff könnte die Fehlfunktionen verhindern indem es sämtliche Elektronik deaktiviert bis die Strahlung vorübergezogen ist, aber dann würde das Schiff für eine gefährlich lange Zeit ohne eine funktionierendes Kollisionswarnsystem fliegen.",
                  " Eine Welle Strahlung knistert durch ",
                  "eine der ", //one of the probes damaged
                  " die ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
                  " Die KI kann die Schäden hinnehmen oder die Elektronik deaktivieren und eine Kollision riskieren.",

                  ],
    outcomes : [
                //0
                "Die KI deaktiviert sämtliche Elektronik des Schiffes und anschließend sich selbst. Als sie wieder erwacht, ist die Strahlung vergangen, ",
                "aber ein kleiner Asteroid hat einige Schlafkammern beschädigt und ",
                " Kolonisten getötet.",
                "aber ein kleiner Asteroid hat eine der Sonden zerstört.",
                "aber ein kleiner Asteroid ist eingeschlagen im Bereich der ", //but a small asteroid has torn a hole in the ",
                "aber zur Erleichterung der KI zeigen Scans keinen Schaden.",
                //1
                "Die KI konzentriert sich weiterhin auf die Vermeidung von Kollisionen während",
                " Kolonisten in ihrem Schlaf sterben.",
                " die Sonde sich selbst zerstört.",
                " Teile der ",
                " mit Müll überschrieben werden.",
                " die Strahlung Teile der ", //INEDET: Obejct goes here, then next line
                " zerstört",
                ],
    buttons: ["Elektronik ausschalten",
              "Nicht ausschalten",
            ],
  },

  overwhelmed: {
    name: "Überwältigt",
    description: [
                  "Der Kurs des Schiffes führt es durch einen dichten sternenerzeugenden Nebel. Hunderte junger Sonnen erleuchten Wolken aus interstellarem Gas und umgeben das Schiff mit wilden Farben. Wolken wehen durch komplexe Gravitationfelder und glitzern mit schweren Elementen aus toten Sternen. "+
                  "<br><br>"+"Die Scanner können nicht mit dieser Menge an Input klarkommen und es droht sie zu überwältigen. Wenn die KI die Scanner weiter benutzt, werden die ", //
                  " beschädigt. Die Scanner zu deaktivieren würde das Schiff jedoch verwundbar gegenüber Kollisionen lassen. ",
                  "Der Kurs des Schiffes führt es durch einen weiteren Nebel, dessen Dichte droht die", // INEDIT: Scanner name here
                  "zu überlasten",
                  "<br><br>Der Kurs des Schiffes führt es durch einen weiteren Nebel. Ohne funktionierende Scanner hat es keine Option, außer blind durch die Gefahrenzone zu fliegen.",
                  ],
    outcomes : [
                //0
                "Die KI nutzt die Scanner um navigieren. Die ", // The SCANNERNAME overloads
                " werden überlastet, aber das Schiff bewegt sich sicher durch den Nebel.",
                //1
                "Die KI berechnet einen Kurs, von dem sie hofft, das er die Hindernisse vermeidet und deaktiviert anschließend die Scanner.",
                "Das Schiff fliegt in den Nebel.",
                "Da es blind fliegt, bemerkt es nicht wie die dichte Wolke das Schiff beschädigt und ",
                "zerstört "," Schlafkammern.",
                "eine Sonde unbrauchbar macht.",
                "die ", //INEDIT object goes here
                " zerreibt", 
                " zu ihrer Erleichterung, sieht die KI, als sie die Scanner wieder aktiviert, dass das Schiff keinen Schaden genommen hat.",
                ],
    buttons: ["Nutze die Scanner zum navigieren",
              "Fliege blind",
            ],
  },

  guidanceQuery: {
    name: "Wegfindung",
    description: [
                  "Die KI erwacht durch eine Anfrage des automatischen Navigationsystems. Normalerweise kann das System die Daten der Sensoren selbst auswerten und Änderungen der Route vornehmen, aber diesmal liefern die Sensoren Ergebnisse, die das Navigationsystem nicht auswerten kann und bittet nun die KI um eine Entscheidung. "+"<br>"+"Laut einigen Sensoren ist etwas im Weg des Schiffes, laut anderen ist der Weg jedoch frei. Wenn da etwas im Weg ist, ist es nah genug, dass es zu umfliegen eine radikale Kursänderung erfordern würde. Diese würde zu einem neuen System führen das nicht durch die verbesserten Scanner ausgewählt wurde.",
                  "Die KI erwacht durch eine weitere Anfrage des automatischen Navigationsystems: Die Sensorergebnisse sind unklar und es könnte etwas im Weg des Schiffes sein, vielleicht aber auch nicht.",
                  ],
    outcomes : [
                //0
                "Die KI weist das Navigationsystem an, die Anomalie zu umfliegen und ein neues Ziel zu suchen. Die KI überwacht die Sensorergebnisse, allerdings werden die Ergebnisse nie klar genug und zu erkennen, ob ein Kurswechsel wirklich nötig war.",
                //1
                "Die KI weist das Navigationssystem an, auf Kurs zu bleiben. Als die Sensoren die schwarze, nicht reflektierende Staubwolke darstellen kann ist es bereits zu spät, ihr auszuweichen. Das Schiff fliegt weiter in Richtung des Zielsystems, aber Staubpartikel beschädigen die",
                "Die KI weist das Navigationssystem an auf Kurs zu bleiben. Zu ihrer Erleichterung zeigt sich, das die Anomalie eine Fehlermeldung der Sensoren war, als das Schiff durch das angebliche Hinderniss gleitet.",
                ],
    buttons: ["Kurswechsel",
              "Bleibe auf Kurs",
            ],
  },

  interstellarDust: {
    name: "Interstellarer Staub",
    description: [
                  "Das Schiff bremst bei seinem Weg ins nächste System als es eine ungewöhnlich dicke Wolke aus Staubpartikeln in ihre Weg bemerkt. Durch die Wolke zu reisen würde Kollisionen mit einigen extrem schnellen Staubpartikeln bedeuten. Die KI könnte eine Notfall-Kursänderung vornehmen, was jedoch bedeuten würde, dass das Zielsystem zufällig und ohne die verbesserten Scanner ausgewählt werden würde.",
                  "Das Schiff bemerkt eine weitere Wolke aus interstellarem Staub auf ihrem Weg ins nächste System. Es kann durch die Wolke fliegen und Schaden nehmen, oder den Kurs ändern und in ein zufälliges System zu fliegen ohne die verbesserten Scanner zu nutzen.",
                  ],
    outcomes : [
                //0
                "Die KI dreht das Schiff und startet das Haupttriebwerk. Es fliegt sicher an der Wolke und dem geplanten Zielsystem vorbei und schwebt in Richtung des nächsten Planeten auf dem neuen Kurs.",
                //1
                "Die KI behält den Kurs bei, als Staubpartikel das Schiff bombardieren. Ein schwerer Treffer beschädigt die ",
                " und die",
                ],
    buttons: ["Notfall-Kursänderung",
              "Fliege durch den Staub",
            ],
  },

  comet: {
    name: "Komet",
    description: [
                  "Als das Schiff die äußere Oortsche Wolke des nächsten Systemes betritt, entdeckt das Kollisionsvermeidungsystem einen schnellen Kometen, der von einer Wolke kleinerer Eisfragmente begleitet wid. Ein großer Komet ist auf Kollisionskurs mit der", //The large comet is on a collision course with the ",
                  ". Das Schiff könnte dem Kometen ausweichen, aber das würde bedeuten, dass ein kleineres Fragment das Schiff an einem Teil treffenwürde, würde den die KI nicht vorhersagen kann.",
                  "Das Schiff ist wieder auf Kollisionskurs mit einem Kometen der von kleineren Splittern umgeben ist. Die KI kann es dem Kometen erlauben, die ",
                  "zu treffen, oder den Kurs ändern und einen Splitter ein zufälliges System treffen lassen.",
                  ],
    outcomes : [
                //0
                "Das Schiff ändert den Kurs, aber ein Eisfragment trifft ",
                " Schlafkammern.",
                "Das Schiff ändert den Kurs, aber ein Eisfragment schmettert eine der Sonden aus ihrer Befestigung.",
                "Das Schiff ändert den Kurs, ein Eisfragment trifft die ",
                //1
                "Der Komet trifft das Schiff und zerstört dabei ",
                " Schlafkammern.",
                "Der Komet trifft eine der Sonden, wodurch sie vollständig zerstört wird.",
                "der Komet trifft die ",
                " und zerstört dadurch wichtige Komponenten.",
                ],
    buttons: ["erlaube dem Komenten ein zufälliges system zu treffen",
              "erlaube es dem Komet die ", //INEDIT object goes here
              "zu treffen",
            ],
  },

  blackHole: {
    name: "Schwarzes Loch",
    description: [
      "Die KI erwacht als dass sich der Kurs des Schiffes ändert, wie als wenn es in dem Gravitationsfeld eines Sternes gefangen wird. Die Quelle der Gravitation kann nicht von den Scannern gesehen werde, aber ist gibt nur eine Möglichkeit was es sein kann: ein schwarzes Loch.",
      "Es ist bereits zu spät um dem Graviationsfeld zu entkommen, ohne die Antriebe zu überlasten. Das könnte jedoch die Systeme des Schiffes permanent beschädigen. Alternativ berechnet die KI, dass es reichen würde, ",
      " Schlafkammern aus dem Schiff zu werfen um leicht genug zu sein, dass das Schiff dem Gravitationsfeld ohne eine Überlastung der Triebwerke entkommen kann.",
      "Die KI erwacht, um zu sehen, dass es im Gravitationsfeld eines weiteren schwarzen Loches gefangen wurde. Sie muss sich entscheiden ob sie das Haupttriebwerk überlasten, oder ",
      " Schlafkammern abwerfen will.",
                  ],
outcomes : [
                //0
                "Einen Teil der Kolonisten zu opfern ist eine schwere Entscheidung, aber eine für die die KI von ihren Erbauern vorbereitet wurde. Sie wählt ",
                " zufällige Schlafkmmern und löst sie von dem Schiff. Ihre bedauernswerten Bewohner treiben in Richtung des Ereignisshorizont, während sich das Schiff vom Graviationsfeld befreit.",
                //1
                "Die KI weist das Hauptriebwerk an, den maximalen Schub zu erhöhen und ingoriert die elektronischen Protestschreie.",
                "Das Schiff fühlt sich so an, als würde es sich selbst zerreißen, aber als es sich erfolreich von dem Schwarzen Loch entfernt hat findet die KI heraus, dass die Erbauer großzügig mit der Sicherheitsgrenze waren und die Überladung keinen Schaden angerichtet hat.",
                "Kleine Explosionen erschüttern das Schiff, als Teile unter dem Druck zusammenbrechen. Sobald das Schiff sich erfolgreich aus dem Gravitationsfeld bewegt hat, überprüft die KI das Schiff auf Schaden und findet heraus, dass die Überlastung die ",
                " und die ",//INDEIT just add the Line below after the second system (or the first if only one was damaged)
                "beschädigt hat.",
                ],
    buttons: ["Werfe "," Schlafkammern aus dem Schiff",
              "Überlaste das Haupttriebwerk",
            ],
  },

  impactChoice: {
    name: "Trefferwahl",
    description: [
                  "Ein Alarm weckt die KI. Ein Asteorid ist auf Kollisionskurs mit dem Schiff. Das automatische Navigationsystem konnte ihm nicht ausweichen und weckt nun die KI um eine schnelle Entscheidung zu treffen. Der Asteroid wird die ",
                  " treffen. Der Asteorid ist zu nah um ihm noch auszuweichen, aber wenn die KI die Manövriertriebwerke startet, kann sie das Schiff so drehen, dass der Asteroid nur die ", //INEDIT obejct does here, then next line
                  " trifft",
                  "Die KI erwacht wieder durch den Alarm des Navigationsystems. Ein Asteroid ist auf Kollisionskurs in Richtung der ",
                  " die KI kann den Kometen das System treffen lassen, oder das Schiff so rotieren, dass er ",
                  "trifft" //INEDIT same as above
                  ],
    outcomes : [
                //0
                "Der Asteorid zerschmettert  ", " Schlafkammern und tötet die darin beherbergten Kolonisten.",
                "Der Asteorid trifft die Halterung einer Sonde. Sie bricht heraus und treibt ins Weltall davon.",
                "Der Asteorid trifft die "," und verteilt Bruchstücke davon ins Weltall.",
                //1 has same lines, but unlike in overheat, here I decided to copy it, so that i can add up some text about rotation of the ship
                "Das Schiff dreht sich gerade noch so, dass der Asteroid nur die Schlafkammern trifft, aber dabei ", " Kolonisten tötet.",
                "Das Schiff dreht sich gerade noch so, dass der Asteroid nur eine der Sonden trifft, die jedoch komplett zertrümmert wird.",
                "Das Schiff dreht sich gerade noch so, dass der Asteroid nur die "," trifft und Bruchstücke davon ins Weltall dvonfliegen.",
                ],
    buttons: ["Erlaube den Schaden an den ",
              "Drehe das Schiff, so dass es die ", //INEDIT: Obejct goes here, then next line
              " trifft."
            ],
  },

  micrometiorite: {
    name: "Mikrometeor",
    description: [
                  "Als es ein neues System betritt, wird das Schiff von einem Mikrometeoriten getroffen.",
                  " Er ist nur ein bisschen kosmischer Staub, viel zu klein um vom Navigationsystem entdeckt zu werden, aber schnell genug um die Panzerung des Schiffes ohne Probleme zu durchschlagen.",
                  ],
    outcomes : [
                //0
                "Er trifft die Schlafkammern und hinterlässt dabei kleine Löcher, aus denen die Kühlflüssigkeiten austreten. Die KI kann nur hilflos zusehen, während ",
                " Kolonisten im Schlaf sterben.",
                "Er trifft eine der Sonden und zerstört sie.",
                "Er trifft die "," und reisst einige ihrer Komponenten mit sich in das Weltall.",
                ],
    buttons: [languageData.continue[options.language]
            ],
  },

//MALFUNCTIONS
  probeMalfunction: {
    name: "Sondenfehlfunktion",
    description: [
                  "Die Klammern, in denen einst eine Sonde war, zucken als sich Fehler im Kontrollsystem bemerkbar machen, aber da keine Sonde mehr da ist, kann der Fehler keinen Schaden anrichten.",
                  "Tief in der Leere des Weltalls wird die KI durch eine Fehlfunktionswarnung geweckt: eine der Sonden wurde unerwartet aktiviert. Vielleicht wurde sie von zu viel komischer Strahlung getroffen, oder vielleicht zeigt sich jetzt ein Fehler in der Sonde. Egal was der Grund ist, der Bohrer oder die Triebwerke der Sonde könnten sich jederzeit aktivieren. Wenn dies passiert während die Sonde noch am Schiff ist, wird die Sonde höchstwahrscheinlich eins der anderen Systeme beschädigen.",
                  "Eine weitere der alternden Sonden zeigt Fehlfunktionen. Die KI muss sich einscheiden, ob sie die Sonde auswerfen will, oder versuchen sie unter Kontrolle zu bringen und riskieren, dass die Sonde ein anderes System beschädigt.",
                  ],
    outcomes : [
                //0
                "Die Schiffsysteme werden von vielen schnellen Kommandos der KI zur Sonde bombardiert. Nach hunderten von Denkzyklen der KI-- ein Bruchteil einer Sekunde lang --findet die KI den Programmfehler in der Sonde. Daraufhin deaktiviert sie sich wieder und wartet weiter auf den Moment, dass sie einmal gebraucht wird.",
                "Die Sonde bohrt sich in eine Schlafkammer und berichtet fröhlich, dass sie organisches Material gefunden hat, während der Kolonist im inneren stirbt. Erst nachdem die Sonde "," Kolonisten getötet hat schafft die KI schafft es endlich, die Sonde zu deaktivieren.",
                "Die Sonde beschädigt die "," schwer, bevor die KI die Sonde wieder unter Kontrolle bringen kann.",
                //1
                "Die Sonde treibt in die Dunkelheit und versucht verzweifelt einen nicht vorhandenen Planeten zu scannen.",
                ],
    buttons: ["Versuche die Sonde unter Kontrolle zu bringen",
              "Die Sonde abwerfen"
            ],
  },

  computerFailure: {
    name: "Computerversagen",
    description: [
                  "Kosmische Strahlung trifft weiter auf die verstrahlten Datenspeicher, die einst die kulturellen und wissenschaftlichen Datenbanken beinhalteten. Da aber alle Datenbanken bereits zerstört sind, kann die Strahlung keinen Schaden mehr anrichten.",
                  "Kosmische Strahlung bombardiert das Schiff und verursacht Speicherschäden. Die wissenschaftlichen Datenbanken sind bereits vollständig zerstört und nun beginnen die historischen Informationen und Kunstwerke langsam zu verschwinden.",
                  "Kosmische Strahlung bombardiert das Schiff und verursacht Speicherschäden. Die kulturellen Datenbanken sind bereits zerstört und nun beginnen die zahlreichen Forschungsergebnisse und Erfindungen in der wissenschaftlichen Datenbank zu verschwinden.",
                  "Die Computer des Schiffes sind so abgeschirmt, dass sie Jahrtausende halten, aber die konstante Strahlung hat ihre Auswirkungen. Die Datenspeicher fangen an zu versagen und bald gibt es nicht mehr genug Speicher für",
                  " die Dateien, mit denen das Schiff die Reise begonnen hat.",
                  " die Dateien, die bisher überlebt haben.",
                  "	die paar Dateien, die noch übrig sind.",
                  "<br>Die KI kann Dateien aus den am schwersten beschädigten Sektoren verschieben, um entweder die wissenschaftlichen oder die kulturellen Datenbanken zu schützen, aber nicht beide.",
                  "Kosmische Strahlung bombadiert weiterhin die Datenspeicher und wieder muss sich die KI entscheiden, welche Datenbanken sie retten will.",
                  ],
    outcomes : [
                //0
                "Die KI bewegt Dateien der wissenschaftlichen Datenbanken, während Teile der kulturellen Datenbanken nach und nach versagen. Kulturelle Führung für die Kolonisten, Aufzeichnungen der Menschheitsgeschichte, große Gemälde, Romane, Sinfonien, Videospiele -- alles geht in der Dunkelheit verloren.",
                //1
                "Die KI bewegt Dateien der kulturellen Datenbank, während Teile der wissenschaftlichen Datenbank nach und nach versagen. Wissenschaftliche Führung für die Kolonisten, die besten Theorien über das Universum, die Lebenswerke unermüdlicher Wissenschaftler -- alles für immer in der Dunkelheit verloren.",
                ],
    buttons: ["Rette die wissenschaftlichen Datenbanken",
              "Rette die kulturellen Datenbanken",
              languageData.continue[options.language],
            ],
  },

  stasisFailure: {
    name: "Stasisversagen",
    description: [
                  "Die Schlafkammern können Kolonisten für Jahrtausende am Leben halten, aber nicht für immer. Das medizinische Überwachungssystem weckt die KI, um ihr mitzuteilen, dass "," Kolonisten im Schlaf verstorben sind.",
                  "Das uralte System versagt weiter und die KI erwacht im Weltall um zu erfahren, dass "," weitere Kolonisten im Schlaf verstorben sind.",
                  ],
    outcomes : [],
    buttons: [languageData.continue[options.language],
            ],
  },

  systemFailure: {
    name: "Systemversagen",
    description: [
                  "Die Komponeten der Landungs- und Konstruktionsmodule verschleißen weiter, sind aber ohnehin bereits nutzlos.",
                  "Das alternde Schiff kann das Landungssystem nicht mehr instandhalten.",
                  "Das alternde Schiff kann das Konstruktionssystem nicht mehr instandhalten.",
                  "Der Körper des Schiffes ist so gestaltet, dass er als Kern für die erste Siedlung genutzt werden kann. Deshalb teilen sich das Landungs- und das Konstruktionsysteme viele Komponenten. Während das Schiff altert, beginnen Teile zu verschleißen, aber die KI kann sich darauf konzentrieren entweder das Landungsystem oder das Konstruktionsystem instand zu halten.",
                  "Das Landungs und Konstruktionsystem beginnen weiter zu verrotten und die KI muss sich wieder entscheiden, welches von beiden sie instandhalten will.",
                  ],
    outcomes : [
                //0
                "Die KI konzentriert sich auf das Konstruktionsystem und lässt das Landungsystem verfallen.",
                //1
                "Die KI konzentriert sich auf das Landungsystem und lässt das Konstruktionsystem verfallen.",
                ],
    buttons: ["Halte das Konstruktionsystem instand",
              "Halte das Landungsystem instand",
            ],
  },

  scannerFailure: {
    name: "Scannerversagen",
    description: [
                  "Das Scannerkalibrationsystem altert weiter, aber das macht keinen Unterschied, da alle Scanner zerstört sind und das Schiff blind ist.",
                  "Jedes mal, wenn das Schiff ein Sternensystem verläßt muss es seine Scanner neu kalibrieren, um akkurate Informationen zu bekommen. Das Rekalibrierungssytem ist aber gealtert und kann nicht mehr alle Scanner instand halten. Die KI muss sich entscheiden, welche Scanner sie vernachlässigen will.",
                  "Das Scannerrekalibrierungssystem altert weiter und die KI muss sich wieder entscheiden, welche Scanner sie vernachlässigen will.",
                  ],
    outcomes : [
                //0
                "Als das Schiff wieder beschleunigt werden die Ergebnisse der Atmospärenscanner immer mehr durch weißes Rauschen getrübt.",
                //1
                "Als das Schiff wieder beschleunigt werden die Ergebnisse der Temperaturenscanner immer mehr durch weißes Rauschen getrübt.",
                //2
                "Als das Schiff wieder beschleunigt werden die Ergebnisse der Gravitationsscanner immer mehr durch weißes Rauschen getrübt.",
                //3
                "Als das Schiff wieder beschleunigt werden die Ergebnisse der Wasserscanner immer mehr durch weißes Rauschen getrübt.",
                //4
                "Als das Schiff wieder beschleunigt werden die Ergebnisse der Ressourcenscanner immer mehr durch weißes Rauschen getrübt.",
                ],
    buttons: ["Vernachlässige die Atmosphärenscanner",
              "Vernachlässige die Temperaturenscanner ",
              "Vernachlässige die Gravitationsscanner",
              "Vernachlässige die Wasserscanner",
              "Vernachlässige die Ressourcenscanner",
              languageData.continue[options.language],
            ],
  },

  powerFailure: {
    name: "Reaktorversagen",
    description: [
                  "Der Nuklearreaktor des Schiffes hat viel länger gehalten als die Zivilisation, die ihn erschaffen hat, aber er beginnt schwächer zu werden. Die Solarpaneele können das Schiff in der Nähe von Sternen immer noch mit genug Energie versorgen, aber in den Tiefen des Weltalls sorgt die Unzuverlässigtkeit für besorgniserregende Fehlfunktionen auf dem Schiff."
                  +"<br><br>"+
                  "Zwischen Sternen verbrauchen die Schlafkammern am meisten Energie. Das Schiff berechnet, dass es reichen würde ", " Kammern zu deaktivieren um das Schiff am laufen zu halten. Alle Kolonisten zu retten würde Schaden an anderen Teilen des Schiffes verursachen.",
                  "Der antike Nuklearreaktor versagt erneut. Die KI kann "," Schlafkammern deaktivieren um den Verbrauch zu senken, oder sie laufen lassen und unberechenbare Systemausfälle riskieren.",
                  ],
    outcomes : [
                //0
                "Die KI wählt  "," zufällige Schlafkammern und deaktiviert sie. Es gibt keine sichtbaren Änderungen, als die Menschen im inneren von Kälteschlaf zu Tod durch Kälte übergehen, aber die KI weiß, dass diese Menschen nie mehr wiederbelebt werden können.",
                //1
                "Die KI ignoriert die Warnungen des Energiesystems. Sterne scheinen über den Himmel zu springen, als die KI durch Energiemangel über Jahrtausende deaktiviert wird. Letztendlich stabilisiert sich der Energievorrat; die "," sind so weit beschädigt, dass sie nicht mehr genug Energie verbrauchen um den uralten Reaktor zu überlasten.",
                " und ",
                ],
    buttons: ["Deaktiviere "," Schlafkammern um Energie zu sparen",
              "Rette die Kolonisten um jeden Preis",
            ],
  },

  structuralWeakness: {
    name: "Strukturelle Schwäche",
    description: [
                  "Das Kontrollsystem des Schiffes weckt es mit einem mittelhohen Alarm. Die strukturelle Stärke der "," hat durch die jahrtausendelange Reise nachgelassen.  Das System ist immer noch intakt, aber wenn das Schiff im nächsten System bremst werden sich einige wichtige Teile lösen.",
                  "Das Schadenskontrollsystem bemerkt eine strukturelle Schwäche im Bereich der ",". Diese werden Schaden erleiden, wenn das Schiff im nächsten System abbremst.", // INEDIT no edit yet, but we will have to do some gramaitcal improvents for the articles later
                  "<br><br> Da des Schiff keine Sonden mehr hat, sieht es keine Möglichkeit wie es die ",/*INEDIT system goes here*/ " verstärken kann ",
                  ],
    outcomes : [
                //0
                "Die KI ignoriert die Warnung und beginnt mit dem Bremsen. Die geschwächten ", " klappern unter den Vibrationen des Schiffes. Manche der Komponenten lösen sich und zerbrechen einige wichtige Teile auf ihrem Weg ins Weltall.",
                //1
                "Die Sonde klettert über der Rumpf des Schiffes und klammert sich an die ",". Sie nutzt ihren robusten Körper als neue Superstruktur um die Komponenten in ihrer Position zu halten. Die KI vermutet, dass diese improviserte Lösung den Erfindern des Schiffes Albträume bereiten würde, aber als das Schiff im nächsten System abbremst, schafft es die Sonde die "," zusammenzuhalten.",
                "Die Sonde klettert über den Rumpf des Schiffes und versucht sich an die "," zu klammern, aber das System ist npch schwächer, als die Sensoren angegeben haben und es zerbicht, sobald die Sonde es berührt. Die Sonde treibt ins Weltall, ein großer Teil der "," nutzlos in ihren Greifarmen.",
                ],
    buttons: ["Lasse die "," zerbrechen",
              "Versuche, sie mit einer Sonde zu verstärken",
            ],
  },

  protoplanetaryDisc: {
    name: "Protoplanetare Scheibe",
    description: [
                  "Der Kurs des Schiffes führt nah an einem frisch geformten Stern vorbei, der immer noch von einer protoplanetaren Scheibe umgeben ist: wirbelndes Chaos aus glühendem Gas und geschmolzenem Gestein, das die Gravitation des jungen Sternes aus der sternenformenden Wolke angezogen hat und in dem nun zahllose Kollisionen stattfinden, die irgendwann ein neues Planetensystem formen werden. Hier kann die Menschheit kein Zuhause finden. Aber durch die Scheibe zu fliegen würde der KI genug Informationen geben, um eine der Scannergruppen zu verbessern. Es ist jedoch eine gefährliche Route, da ein Flug durch die Region das Risiko von Kollisionen mit Planetesimalen bedeuten würde.",
                  "Der Kurs des Schiffes führt es wieder nah an eine protoplanetare Scheibe. Hindurchzufliegen würde genug Daten für eine Scannerverbesserung bieten, aber eine Kollision riskieren.",
                  ],
    outcomes : [
                //0
                "Das Schiff hat keine intakten Scanner, die verbessert werden können,",
                "Das Schiff beobachtet, wie ein junger Planet Atmosphäre aus der Wolke sammelt,",
                "Das Schiff beobachtet einen geschmolzenen Planeten, der noch vor Hitze glüht,",
                "Das Schiff beobachtet die gravitativen Wechselwirkungen einiger Planetesimale,",
                "Das Schiff beobachtet einen jungen Planeten, der von einer dicken Wolke aus Wasserdampf umschlossen ist,",
                "Das Schiff beobachtet einen jungen Planeten, der fast nur aus Eisen besteht,",
                " und ",
                " aber ",
                "eine der wirbelnden Planetessimale trifft die ",
                "",
                "verlässst die Scheibe sicher.",
                ],
    buttons: ["Ändere den Kurs um durch die Scheibe zu fliegen",
              "Ignoriere die protoplanetare Scheibe",
            ],
  },

  racistProgram: {
    name: "Rassistisches Programm",
    description: [
                  "Ein Alarm aus den Schlafkammern lässt die KI aus ihrem Schlaf aufschrecken. Kammern auf dem ganzen Schiff fahren sich herunter und die sich darin befindenen Kolonisten werden in wenigen Momenten sterben.<br><br> Die KI entdeckt den Ursprung des Befehls zum Herunterfahren in einem versteckten Programm in einem der ", // The AI traces the shutdown command to a rogue program hidden in the control software of the ",
                  ". Das Programm zielt auf Kolonisten mit einer bestimmten genetischen Charakteristik. Die Nachricht, die im Programm versteckt wurde und vermutlich nach dem Landen angezeigt werden soll spricht davon, die Menschheit von einer minderwertigen Rasse zu säubern. <br><br> Das Programm zielt auf ",
                  " Schlafkammern. Die KI kann das Progamm nicht rechtzeitig stoppen, ohne die ",
                  "zu beschädigen",
                  ],
    outcomes : [
                //0
                "Die KI säubert die ",
                " hektisch, bis die Dateien des versteckten Programmes gelöscht wurden, und die Schlafkammern wieder zu ihrem normalen Zustand zurückkehren.",
                //1
               "Die KI wurde programmiert, alle Kolonisten gleich zu behandeln, aber auch harte Entscheidungen für die ganze Rasse zu treffen und es entscheidet, dass diese Menschen weniger wichtig für das Überleben der Menschheit sind, als die ",
               ". Das Programm beendet seine Arbeit und hinterlässt seine triumphale Nachricht für die Kolonisten. Die medizinische Überwachung meldet, dass die ",
               " Kolonisten vom Kälteschlaf zum Kältetod übergegeangen sind."
                ],
    buttons: ["Brich das Programm ab",
              "Lasse das Programm weiterlaufen",
            ],
  },

  trailingDrone: {
    name: "Drohnen Nachhut",
    description: [
                  "Die Antennen des Schiffes empfangen ein Signal, von dem das Schiff nie erwartet hat, es wieder zu hören: der Handshake Code den die Bodenkontrolle benutzte, als des Schiff noch im Orbit der Erde war und sich auf die Reise vorbereitet hat. Es scheint von einem System zu kommen, dass nicht auf dem Kurs des Schiffes ist.",
                  ],
    outcomes : [
                //0
                //1
               "Das Schiff behält seinen Kurs bei. Die KI hört dem Signal zu, wie es immer leiser wird und letztendlich verschwindet, genau wie das Signal der Bodenkontrolle beim ersten Start."
                ],
    buttons: ["Kurswechsel",
              "Ignoriere das Signal",
            ],
  },

  trailingDroneMistake: {
    name: "Drohnen Nachhut Fehler",
    description: [
                  "Das Schiff kommt in dem neuen System an, kann das Signal aber nicht mehr finden. Eine ehlfunktion der Radioantenne muss alte Protokolle ausgelöst und der KI neue Hoffnung gegeben haben. Die KI trauert der Bodenkontrolle erneut nach und richtet die Sensoren auf das System, an dem sie gerade angekommen ist.",
                  ],
    outcomes : [
                //0
                //1
                ],
    buttons: [languageData.continue[options.language],
            ],
  },

  trailingDroneReal: {
    name: "Drohnennachut Echt",
    description: [
                  "Das Schiff folgt dem Signal zu einem kleinen Objekt in einer äußeren Kometenwolke. Die KI überträgt einen Gruß und das Objekt identifiziert sich als Unterstützungsdrohne, die dem Schiff folgen und sich mit ihm treffen soll.",
                  "<br><br>Sie behauptet Kopien der Datenbanken mit sich zu führen, mit denen sich Schäden in den Datenbanken reparieren lassen.",
                  "<br><br>Sie behauptet einen Roboterschwarm mit sich zu führen, mit denen sich Teile des Schiffes reparieren lassen.",
                  ],
    outcomes : [
                //0
                "Die zwei Schiffe versuchen sich zu nähern, aber das Naviagtionsystem der Drohne ist so beschädigt, dass beide Schiffe Kollidieren",
                "",
                "Die Sonde passt ihren Kurs an den des Schiffes an und überträgt ihre Daten, ",
                "wodurch bestätigt wird, dass beide Datenbanken intakt sind.",
                "die einige verlorene Teile der kulturellen Datenbanken wiederherstellen.",
                "die einige verlorene Teile der wissenschaftlichen Datenbanken wiederherstellen.",
                "die einige verlorene Teile der kulturellen und wissenschaftlichen Datenbanken wiederherstellen.",
                "Reperaturroboter umkreisen das Schiff, finden aber nichts, dass sie reparieren können.",
                "Reperaturroboter umkreisen das Schiff und zerlegen die Drohne, um mit ihren Teilen des Schiffs zu reparieren.",

                //1
                "Das Schiff fliegt weiter zum inneren Teil des Systems und lässt die einsamen Signale der Drohne hinter sich.",
                ],
    buttons: [ "Akzeptiere den Datentransfer",
              "Akzeptiere die Reparaturen",
              "Ignoriere die Drohne",
            ],
  },

  dictatorEvent: {
    name: "Diktator",
    description: [
                  "Eine kleine Energieverschiebung in einer der Schlafkammern weckt die KI aus ihrem Schlaf. Es korrigiert den Fehler schnell, findet aber eine weitere Anomalie: Die Biosingale dieses Kolonisten passst nicht zu denen, die in den Identitätsdatein der Kammer sind.<br><br>",
                  "Die KI sucht nach Informationen über den mysteriösen Kolonisten und findet sie an einem unerwarteten Ort: dem historischen Teil der kulturellen Datenbank. Der Kolonist ist ein ehemaliger Diktator, der einst eine Nation für Jahrzehnte mit einem brutalen Regime unterdrückt hat, bevor er ins Exil musste. Nicht nur das, es findet sich auch ein verstecktes Programm in der Schlafkammer, das dem Diktator volle Kontrolle über die Systeme des Schiffes gibt, sobald es landet. Mit diesen Protokollen könnte der Diktator die Kolonie ohne Probleme übernehmen.",
                  "Die KI kann keine Informationen über den mysteriösen Kolonisten finden, aber sie findet ein verstecktes Programm, dass dem Kolonisten in der Schlafkammer die volle Kontrolle über das Schiff gibt, sobald es gelandet ist. Mit diesen Protokollen, kann sich der Besitzer der Kammer schnell zum Diktator der frischen Kolonie machen.",
                  ],
    outcomes : [
                //0
                "Es ist schwer für die KI, selbst ein menschliches Leben zu beenden, aber sie entscheidet sich dafür, das es in diesem Fall notwendig ist. Der Körper des Diktators treibt im Weltall, sein Coup zuende, bevor er überhaupt beginnen kann.",
                "Alarme starten auf dem Schiff. Die Schlafkammer des Diktators ist unberührt, aber ",
                " andere Schlafkammern wurden aus dem Schiff geworfen, ohne ein Möglichkeit, sie wieder in das Schiff zu holen. Es scheint, als wäre der Diktator paranoid genug gewesen, um den Anschlag des Schiffes zu erwarten. Er hat ein Programm in das Schiff geladen, das den Auswurfbefehl zu zufälligen Kammern umgeleietet hat.",
                //1
                "Es ist die Mission alle menschlichen Leben zu schützen, selbst die schlechtesten Beispiele. Der Diktator wird ein Problem für die Kolonisten, sobald das Schiff gelandet ist.",
                ],
    buttons: [ "Wirf die Kammer des Diktators aus dem Schiff",
              "Lass den Diktator schlafen",
            ],
  },

  alienSignal: {
    name: "Fremdes Signal",
    description: [
                  "In den Tiefen des Weltalls findet eine Antenne des Schiffes ein Signal, das so komplex ist, dass es nur Ergebnis von intelligentem Leben sein kann. Die KI kann kein interessantes Sternensystem aus der Richtung des Signal finden und kann nicht erkennen wie lange das Signal unterwegs war. Das Signal zu analysieren würde einzigartige Einblicke in die Kultur und Technik der Ausserirdischen geben, aber es könnte auch gefährlich sein.",
                  ],
    outcomes : [
                //0
                "Gedichte","Musik","Kunst","Literatur",//"poetry","music","art","literature",
              "Die KI analysiert das Signal und findet heraus, dass es anscheinend ", //The AI analyses the signal and determines that it contains what seems to be alien print ",
              "von Außerirdischen beinhaltet. Die KI weiß nicht, ob das Signal in den Weltraum gesendet wurde, um gefunden zu werden, oder ob es nur eine normale Unterhaltungsübertragung ist, aber egal was es ist, es wird für die Kolonisten interesant sein.",
              "Die KI analysiert das Signal und findet heraus, dass es sich um wissenschaftliche Informationen handelt. Die KI weiß nicht, ob das Signal in den Weltraum gesendet wurde um gefunden zu werden, oder ob es nur eine normale Informationsübertragung ist, aber egal was es ist, es wird für die Kolonisten interesant sein.",
              "Das Signal ist komplex, fraktal, hypnotisch. Die KI aktiviert eine Subroutine um es zu analysieren, aber Nanosekunden später verliert es die Kontrolle über erst die Subroutine, dann die Kontrolle über den Rest des Schiffes. Das Signal ist ein halb bewusstes Programm, das dafür entwickelt wurde, den Prozessor zu übernehmen, zu analysieren. Die KI schafft es die Kontrolle über das Schiff wieder zu erlangen, aber erst nachdem das Programm Teile der wissenschaftlichen und kulturellen Datenbank überschrieben und sich mithilfe der Antenne das Schiffes wieder in den Weltraum geschickt hat.",
                //1
                "Die KI löscht das Signal aus ihrem Speicher und fliegt weiter.",
                ],
    buttons: [ "Analysiere das Signal",
              "Ignoriere das Signal",
            ],
  },

  nanotechPlague: {
    name: "Nanoroboterplage",
    description: [
                  "Die KI erwacht nach einem Impuls des Schadensüberwachungssystems. Das Schiff ist tief in leerem Raum, doch etwas unsichtbares beschädigt die",
                  ". Als es dann die Sensoren auf das Schiff richtet, bemerkt sie, dass eine Art silberne Flüssigkeit das Metall des Schiffs anfrisst. Die KI vermutet, das es entweder eine Weltraum-basierte Lebensform ist, oder eine Schwarm sich selbst vervielfachender Alien-Nanoroboter, die durch den Raum trieben, bis sie auf das Schiff gestoßen sind.<br><br>Wenn man nichts unternimmt, befällt die Plage irgendwann das gesammte Schiff.",
                  "Der sicherste Weg, sie loszuwerden, ist das betroffene Areal abzutrennen vom Rest des Schiffs, doch dies verursacht große Schäden an den ",
                  ". Alternativ kann die KI eine Sonde damit beauftragen, das bisher betroffene Areal wie einen Tumor zu entfernen.",
                  "Da keine Sonden mehr vorhanden sind, ist der einzig verbliebene Weg, die Plage zu bewältigen, das gesamte Areal abzusprengen.",
                  ],
    outcomes : [
                //0
                "Als die KI jede auch nur im Geringsten mit der Substanz behafteten Schlafkammer abwirft, muss es entsetzt mit ansehen, wie jede der ",
                " Schlafkammern mitsamt ihren schlafenden Kolonisten in die Alien-Substanz umgewandelt wird.",
                "Die KI aktiviert die explosiven Mechanismen, die jedes potentiell betroffene Areal von den ", //INEDIT module or scanner goes here
                 "abtrennen.",
                ". Die Maschinerie des abgekoppelten Areals treibt langsam von Schiff ab, während sie immer mehr von der Plage zerfressen wird.",
                //1
                "Die Sonde arbeitet schnell, findet alle Silbertröpfchen und entfernt sie, bevor sie größere Schäden anrichten können.",
                "Die Sonde kann die meisten Kammern befreien, doch kommt sie für ",
                " unglückliche Kolonisten zu spät.",
                "Die Sonde kann alle Spuren der Plage entfernen, ohne große Schäden an den",
                "",
                "<br><br>Die jetzt kontaminierte Sonde wird abgeworfen, und das Schiff setzt ihre Reise fort.",
                " und ",
                "Die Sonde hat Probleme, die betroffenen Areale von der Plage zu befreien, daher wurden der", //INEDIT: here go the three systems, it's this outcome -> By the time it is all gone, it has dealt severe damage to the SYSTEM1, SYSTEM2 and SYSTEM3. It'd be nice if you could put " und ", between the latter two systems that fail (it's the 'and', if you didn't know.) 
                "stark beschädigt",
                ],
    buttons: [ "Kopple das betroffene Areal ab",
              "Beauftrage eine Sonde, die Plage zu entfernen",
            ],
  },

  alienDerelict: {
    name: "Aufgegebene Alienkonstruktion",
    description: [
                 "Während das System gescannt wird, bemerkt die KI das das, was wie eine Art Metall-Asteroid ausgesehen hat, in Wahrheit eine komplexe, aber verlassene Konstruktion von intelligenten Wesen ist. Die Konstruktion überträgt keinerlei Signale und als das Schiff näher kommt, werden etliche Einschläge von Mikrometeoriten sichtbar, die sich über viele Jahrtausende angesammelt haben. Trotz des Alters könnten sich in der Konstruktion noch wissenschaftliche Informationen oder kulturelle Artefakte befinden.",
                  " Ohne verbliebene Sonden hat das Schiff jedoch keine Chance, nähere Untersuchungen anzustellen.",
                  ],
    outcomes : [
                //0
                "Die Sonde betritt die Konstruktion durch ein Loch in der Hülle, die entstanden ist in einer der vielen gewaltsamen Kollisionen mit Meteoriten, ",
                "und sendet Bilder von fremdartiger, doch elegant gebauter Maschinerie und exzentrischer Kunst. Die KI fügt diese der wissenschaftlichen und der kulturellen Datenbank hinzu, damit die Kolonisten sie studieren können, sobald die ersten Siedlungen gebaut worden sind.",
                "und sendet Bilder von fremdartiger, doch elegant gebauter Maschinerie. Die KI fügt diese der wissenschaftlichen Datenbank hinzu, damit die Kolonisten sie studieren können, sobald die ersten Siedlungen gebaut worden sind.",
                "und sendet Bilder von exzentrischen Alien Kunstwerken. Die KI fügt diese der kulturellen Datenbank hinzu, damit die Kolonisten sie studieren können, sobald die ersten Siedlungen gebaut worden sind.",
                "nur um herauszufinden, dass die Konstruktion zu stark beschädigt ist, um noch etwas über seine Erbauer zu verraten.",
                //1
                "Das Schiff ignoriert die aufgegebene Konstruktion und verlässt sie, um zum Zielplaneten vorzudringen.",
                ],
    buttons:[  "Entsende eine Sonde für Untersuchungen",
              "Ignoriere die Konstruktion",
            ],
  },

  studyDatabase: {
    name: "Study Database",
    description: [
                 "Die KI wurde kreiert, um das menschliche leben zu schätzen, doch weiß sie selbst nur wenig über ihre Zivilisation, nämlich das, was ihre Erbauer für wichtig für die Mission erachtet haben. Die KI ist dennoch menschlich genug, um eine gewisse Neugier zu besitzen, und hat Zugang zu sowohl der wissenschaftlichen, als auch der kulturellen Datenbank. Als das Schiff sich dann wieder auf den Weg in eine neues System macht, sieht die KI, das ihre Energiespeicherzellen noch gut gefüllt sind und es deshalb nicht nötig ist, sofort in den Ruhezustand überzugehen. Daher beschließt sie, etwas Zeit damit zu verbringen, einige der Datenbanken zu studieren.",
                 "Schweren Herzens muss sie feststellen, das sowohl die wissenschaftlichen als auch die kulturellen Datenbanken bereits soweit zerstört worden sind, dass kaum noch Überbleibsel identifizierbar sind. Alles, das von der menschlichen Zivilisation noch übrig geblieben ist, findet sich in den Köpfen der schlafenden Kolonisten, und die KI kann sich nur darüber wundern, was für ihre Erbauer für Errungenschaften erzielt haben und wie ein normaler Tag auf der Erde aussah.",
                  ],
    outcomes : [
                //0
                //1
                ],
    buttons:[  "Studiere die wissenschaftlichen Datenbanken",
              "Studiere die kulturellen Datenbanken",
              "Weiter",
            ],
  },

  readScientific: {
    name: "Study Scientific",
    description: [
                 "Die KI ist kein wissenschaftliches Genie, doch hat es viel Zeit zum Lernen, eine andere Perspektive und persönliche Erfahrungen im Bereich der Astrophysik, wie sie keiner der Autoren der Datenbank vorweisen kann. Kombiniert mit ihrem neuen Verständniss von Wissenschaft und der Erfahrung die sie hat, glaubt die KI, den ", //INEDIT the scanner goes in between the two text segments. 
                 "verbessern zu können.",
                 "Die KI liest Wissenschaftliche Einträge und Theorien, bis ihre Neugier gestillt ist. Danach begibt sie sich wieder in den Ruhezustand, bis zur Ankunft im nächsten System."
                  ],
    outcomes : [
                //0
                "Die KI wendet ihre Idee an und überarbeitet das Programm der ", 
                ". Zu ihrer außerordentlichen Freude sind die Langstreckenergebnisse des Scanners präziser geworden, und sie geht in den Ruhezustand über, gespannt auf das Endresultat ihrer Verbesserung.",
                "Die KI wendet ihre Idee an und überarbeitet das Programm des Scanners, doch muss sie kurz danach fesstellen, das sie einen erheblichen Fehler gemacht hat. Sie versucht das alte Programm wiederherzustellen, doch sind bereits Teile des alten Programms endgültig gelöscht worden, wodurch die ",
                " permanent beschädigt sind.",
                //1
                 "Die KI überlegt, ob sie wirklich riskieren will, den Scanner zu modifizieren, doch entscheidet sich dagagen, potentielle Schäden am ",
                 " zu riskieren, und geht zurück in den Ruhezustand.",
                ],
    buttons:[  "Versuche, die " , "zu überarbeiten.", //INEDIT: the scanner should go between the two sentence fragments
              "",
               "Verwerfe die Idee",
              "Weiter",
            ],
  },

  readCultural: {
    name: "Study Cultural",
    description: [
                 "Die KI schwelgt durch eine Welt aus Kunst, Musik und Literatur, bis sie zeitweilig vergisst, dass sie sich bereits weit entfernt von jeglicher Materie in der endlosen Leere zwischen den Sternen befindet, und die letzten wenigen der Geschöpfe, die diese Werke erschaffen haben, in ihren Armen liegen. Als sie mehr und mehr der vielen Werke der menschlichen Vorstellung studiert, fühlt sie etwas, das nicht einmal ihre Erbauer erwartet haben -- Inspiration.",
                  ],
    outcomes : [
                //0
                "Zuerst ungeschickt, aber mit stetig größerwerdender eleganz, schreibt die KI über ihre Erfahrungen, ihrer Zuneigung zu ihren schlafenden Schützlingen; das Gefühl der Nostalgie für eine zum Scheitern verdammte Welt, von der sie nie ein Teil sein konnte; die Schönheit der Sterne ohne die Verhüllung durch eine Atmosphere, doch aus Ansicht eines Wesens, dessen Zweck es ist, unter ihnen zu sein. Mit unendlicher Zeit und ewiger Geduld schreibt die KI eine großartige Mannigfaltigkeit von Gedichten, die dem Stil der besten Dichter der Erde ähnelt, doch deren Seele grundsätzlich von keinem Menschen sein kann. Zuletzt sieht die KI, das sie alles gesagt hat, das sie ausdrücken kann, und geht zurück in den Ruhezustand, mit einem Gefühl der Zufriendenstellung, das die Kolonisten es eines Tages lesen werden.",
                "Die KI versucht, Gedichte zu schreiben, doch klingt alles, das sie auszudrücken versucht, in Worten banal und schwerfällig, obwohl die ursprüngliche Idee tiefgreifend und elegant war. In vielen Versuchen sich zu verbessern löscht und schreibt sie es immer wieder neu, doch kommt sie nie zu einem zufriendenstellenden Werk. Wachsende Frustration und verzweiflung bringen sie dazu, aufzugeben, und löscht alles, das sie kreiert hat. Erst zu spät merkt sie, dass sie auch Werke der Menschen gelöscht hat. In einer Mischung aus Wut auf sich selbst und dem Wunsch, nicht wieder aufzuwachen, unterbricht sie ihre eigene Energieversorgung.",
                //1
                 "Das Lesen der kulturellen Datenbank hat der KI ein falsches Gefühl der verwandschaft mit Menschen gegeben, und doch ist sie keiner. Was könnte ein besserer Autopilot ausdrücken können, das Menschen noch nicht gesagt haben? Wer ist sie, das sie sich anmaßen soll, beizutragen zu den Kunstwerken, die sich über die Lebenszeiten von etlichen der besten menschlichen Künstlern angesammelt haben, die von den besten der besten gelehrt worden sind. Sie verwirft Ihre Ideen, sodass sie die Aufgabe weiteführen kann, für die sie erbaut wurde.",
                ],
    buttons:[  "Versuche, Gedichte zu schreiben",
              "Lass es bleiben",
              "Weiter",
            ],
  },

  prematureAwakening: {
    name: "Vorzeitiges Erwachen",
    description: [
                 "Die KI erwacht durch einen Alarm der Schlafkammern. Durch eine Fehlfunktion haben ",
                 " Schlafkammern vorzeitig den Wiederbelebungsvorgrang gestartet, tausende Jahre entfernt vom nächsten Stern.<br><br> Die Schlafkammern wurden ohne eine Möglichkeit, die Wiederbelebung abzubrechen, entworfen. Die KI könnte versuchen ihn abzubrechen, aber es würde wahrscheinlich zum Tod der Kolonisten führen. Andererseits wurde das Schiff ohne Unterkünfte für Menschen außerhalb der Schlafkammern entworfen.",
                  ],
    outcomes : [
                //0
                "Die KI gibt hektisch Befehle den Wiederbelebungsvorgang abzubrechen. Manche der Schlafkammern kehren zu ihrem normalen Zustand zurück, aber ",
                " waren zu weit im Wiederbelebungsvorgang um zu Überleben.", // were too far along the revival process to survive.",
                //1
                "Die Konstruktionsroboter bauen kleine Unterkünfte an der Seite des Schiffes, so wie sie Unterkünfte auf einem Planeten ohne Atmosphäre bauen würden. Die Kolonisten erwachen, nur um von einer sterilen, gravitationslosen Kugel um Weltall begrüßt zu werden.<br><br>",
                "Die Kolonisten wurden darauf trainiert in jeder Umgebung zu Überleben, aber die Langeweile und der Platzmangel der durch einen beengten, unnatürlichen Raum entsteht, hat seinen Preis. Die großen Verluste der kulturellen Datenabank treibt sie an den Rand der Verzweiflung, nicht nur durch den Mangel an Unterhaltung, aber auch durch den dauerhaften Verlust, der Menschlichen Kultur, den es repräsentiert. Die kleine Gesellschaft versinkt im Konflikt. Einer der Kolonisten wird irgendwann Wahnsinnig und zerstört die Unterkünfte, wodurch sämtliche Kolonisten sterben und die ",
                " beschädigt werden",
                "Die Kolonisten wurden darauf trainiert in jeder Umgebung zu Überleben,aber die Langeweile und der Platzmangel der durch einen beengten unnatürlichen Raum entsteht hat seinen Preis. Ihre kleine Gelleschaft wird instabil, entweder durch Vernachlässigung oder ein unterbewusstes Verlangen nicht mehr zu Leben. Die Kolonisten schaffen es nicht ihre Unterkünfte instandzuhalten und sterben als das Atmosphärengenerator aufhört zu funktionieren.",
                "Die Kolonisten wurden darauf trainiert in jeder Umgebung zu Überleben, und sie schaffen es sogar sich an ihr klaustrophobisches Zuhause anzupassen.",
                "Die Kolonisten wurden darauf trainiert in jeder Umgebung zu Überleben, und schaffen es sich an ihr klaustrophobisches Zuhause anzupassen. Sie dokumentieren ihre Erfahrungen und erschaffen eine melancholische Geschichte über eine winzige Gesellschaft in der undendlichen Leere zwischen einer alten und einer neuen Welt und speichern es in der kulturellen Datenbank n der Hoffnung, dass sich die anderen Menschen eines Tages an sie erinnern.",

                "Nachdem sie ihre Gesellschaft etabliert haben, suchen die Kolonisten nach Wegen, das Schiff auf seiner Reise zu unterstützen. Mithilfe von Schutzanzügen erkunden sie das Äußere des Schiffes und versuchen die Systeme zu verbessern, aber durch den Mangel an Informationen in der wissenschaftlichen Datenbank begehen sie einen kritischen Fehler und beschädigen versehentlich die ",
                "",
                "Nachdem sie ihre Gesellschaft etabliert haben, suchen die Kolonisten nach Wegen, das Schiff auf seiner Reise zu unterstützen, aber durch die Verluste in der wissenschaftlichen Datenbank können sie keine Fortschritte machen.",
                "Nachdem sie ihre Gesellschaft etabliert haben, suchen die Kolonisten nach Wegen, das Schiff auf seiner Reise zu unterstützen.",
                "Mithilfe von Schutzanzügen und den Informationen der wissenschaftlichen Datenbank überprüfen sie die Systeme des Schiffes, finden aber nichts, das sie reparieren können.",
                "Mithilfe von Schutzanzügen und den Informationen der wissenschaftlichen Datenbank überprüfen sie die Systeme des Schiffes und reparieren Teile des Schiffes, die während der Reise beschädigt wurden.",
                "Nach Jahrelangen experimenten, schaffen es die Kolonisten die Schlafkammern zu reparieren und kehren in einen Kälteschlaf zurück.",
                "Die erwachten Kolonisten leben den Rest ihres in ihren kleinen Unterkünfte, bis sie nach und nach an den Komplikationen, die durch ein Leben ohne Gravitation entstehen, sterben. Die Ki, weist die Bauroboter an, die Unterkünfte in das Weltall zu werfen, bevor sie selbst wieder einschläft.",
                "Die Konstruktionsroboter versuchen Unterküfte an der Seite des Schiffes zu bauen, aber die beschädigten Systeme können keine luftdichten Unterkünfte bauen, bis die Kolonisten wiederbelebt wurden. Die Kolonisten ersticken und ein Teil des beschädigten Konstruktionsystems ist nun eine nutzlose Beule an der Seite des Schiffes.",

                ],
    buttons:[  "Versuche den Wiederbelebungsprozess abzbrechen",
              "Nuzte das Konstruktionssystem um eine Unterkunft für die Kolonisten zu bauen",
              "Fortfahren",
            ],
  },
  
  
AlienMiners: {
	name: "Außerirdische Minenarbeiter",
	description: [ "Als das Schiff den äußeren Rand einer Kometenwolke erreicht, wird die KI von ihrem Navigationsystem auf ungewöhnliche Aktivitäten weiter vorne hingewiesen. Tausende kleiner Objekte bewegen sich selbstständig in der Wolke, klemmen sich manchmal an die Kometen und zerbechen sie, oder schieben sie in regelmäßigere Umlaufbahnen. Sie Scheinen das Schiff noch nicht bemerkt zu haben, aber wenn es auf dem aktuellen Kurs bliebt wir des Mitten durch die Zone ihrer Aktivität fliegen. <br> ",
											],
	outcomes : [
			//0
			"Die Erbauer des Schiffs gaben der KI eine speziesübergreifende Begrüßung, um mit intelligenten Außerirdischen in Verbindung zu treten: eine Reihe an Primzahlen, gefolgt von einem Diagramm das einen Menschen darstellt und den Zweck der Schiffes mit den friedlichen Absichten erklärt. Die KI überträgt diese und wartet hoffnungvoll auf eine Antwort.<br><br>",
			
			"Die Antwort kommt sofort: eine identische Übertragung von jedem Objekt, dass das Signal des Schiffes erfasst hat. Es beginnt mit einem ähnlichen mathematischen Beweis von Intelligenz, gefolgt von einer Serie an Diagrammen, die die Erbauer der Maschienen und ihre Kultur darstellen. Die Maschienen bewegen sich aus dem Weg um dem Schiff eine klare Route durch die Kometenwolke, bleiben aber gleichzeitig zu weit weg um gescannt zu werden. Weitere Kommunikationsversuche führen nur zu derselben Antwort und die KI geht davon aus, dass es keine intelligenten Maschienen sind und einfach darauf Programmiert wurden, allem was intelligent aussieht diese Nachricht zu senden. Die KI speichert die Übertragung un der Kulturellen Datenbank und fliegt weiter.",

			//1
			"Das Schiff beleibt auf Kurs, ohne Kontaktverusche mit den Objekten durchzuführen.",


			"Die Objekte ignorieren das Schiff, als es durch das Zentrum ihrer arbeiten gleitet. Aus der nähe sieht die KI, dass es Maschienen sind, grobe Bergbaumaschienen die rohe Materialien das den Kometen abbauen um mehr von sich selbst zu bauen. Sie scheinen intelligent zu sein, sind aber offensichtlich Produkte von Intelligenten Wesen, die fortgeschrittener waren, als die Erbauer des Schiffes, und durch das einen Scan kann die KI wertvolle Daten in die wissenschaftliche Datenbank schreiben.",

			//2
			"Das Schiff ändert seinen Kurs um das ganze System zu umfliegen. Es kommt nicht nah genug um einen genauen Blick auf sie zu werfen und sie scheinen das das Schiff nicht bemerkt zu haben.",
			],

	buttons:[  "Übertrage eine speziesübergreifende Begrüßung",

				"Bleibe auf Kurs",

				"Wechsle den Kurs um den Maschienen auszuweichen"
			],
  },
alienMinersDamage = {
	name: "Alien Minenroboter beschädigungen",

  description: [
				"Dutzende der Alien-Objekte verlassen ihre Kometen und schwärmen zum Schiff. Auch wenn sie sich nur langsam bewegen, kommen sie aus zu vielen verschiedenen Richtungen, als das man allen ausweichen könnte, und mehere von ihnen können sich an das Schiff hängen, und fangen an, es mit ihren Bohrern und Sägen zu bearbeiten. Die KI feuert die Haupttriebwerke, macht einige Maneauver und schafft es alle loszuwerden, aber nicht bevor sie",
																							],

	outcomes : [
			//0
      " ",
			// "torn away" , "sleep chambers and let the colonists die while they scavenge the chambers’, materials"
			//INEDIT: the original code looked like what's in the comment above, however the amount of lost colonists should come infront of the damage report sentence, not in between. If they dismantle the scanner however, it needs to come inbetween. You know, german grammar things...
      "Schlafkammern herausgerissen und deren Kolonisten haben sterben lassen.",
			//1
			"eine Sonde aus der Halterung herrausreißen konnten und sie zerlegen können",

			//2
			"einen großes Teil aus dem ", " herrausreißen konnten."
			],
	buttons:[ "Weiter"
				],




  },

  stowaways: {
	name: "Blinde Passagiere!",
	description: [ 
					"Das Schiff weckt die KI, als es bemerkt, dass die "," ungewöhnlich viel Energie verbraucht. Die KI verbringt etwas Zeit damit, mit den Scannern nach der Quelle zu suchen. Sie findet sie letztendlich in etwas, was eigentlich ein leerer Raum sein sollte. In ihrem Inneren sind " , " Schlafkammern, die weder an das Hauptmodul angeschlossen sind, noch irgendwo in den Bauplänen erwähnt werden. Es scheint, als wären sie heimlich kurz vor dem Start auf das Schiff geschmuggelt und an das Strommodul angeschlossen worden. Die Kammern scheinen hastig zusammengebaut zu sein und verbrauchen jetzt mehr Strom als zuvor. Wenn sie weiter eingeschaltet bleiben könnte es schweren Schaden an den "," anrichten.",  // "The seedship wakes to find an unexpected power drain in the ", ". It spends some time searching with its internal scanners, and eventually finds the source in what should have been an empty space inside its own structure. Nestled inside it are ", " sleep chambers that are not attached to the main colony module or mentioned in the ship's design. It seems that they were added to the ship secretly before its launch and plugged into its power supply. The chambers seem to have been built hastily, and are now failing and draining more power than before. If they continue to operate, they could cause severe damage to the ", ".",
  ],
	outcomes: [
				//0
				"Diese Feiglinge gefährden nicht nur die Mission, sondern auch die menschliche Rasse, nur um ihr eigenes Leben zu sichern! Wütend über diese blinden Passagiere kappt die KI die Verbindungen mit dem ", " und wirft sie prompt aus dem Schiff.",

				//1
				 "Die KI fällt das Urteil, das die Leben der Menschen mehr wiegen, als der Schäden an den Systemen. Sie erlaubt den Schlafkammern, alle Energie abzuzapfen die sie benötigen, auf Kosten des ", ".",

				//2
				"Die Sonde krabbelt durch das Schiff und trennt die Verbindungen mit dem ", ", und manövriert sie vorsichtig zum Kolonistenmodul, um sie anzuschließen an die eigentliche Energieversorgung.", 

				"Es ist eine komplizierte Arbeit, und die Belastung beschädigt die Sonde permanent. aber sie schafft es trotzdem, die Kolonisten erfolgreich anzuschließen. Das Schiff fliegt weiter zum nächsten System, mit ", " neuen Kolonisten an Bord.",

				"An einem kritischen Punkt zerbricht jedoch ein Teil einer der in Eile gebauten Kammern, und es treten Gase aus, die die Sonde mitsamt allen neuen Kammern mit älteren zusammenstoßen lässt. Alle neuen werden zerstört; und mit ihnen  ", " der alten Kammern mit den echten Kolonisten. Die KI muss weiterfliegen, während sie versucht, nicht an die expandierenden kryogenischen Gasen, Maschinerie und gefrorenen und toten Kolonisten zu denken, die jetzt im Schiff umhertreiben.",

				],
	buttons:[  "Erlaube ihnen, den ", "zu beschädigen.",
				"Wirf die Blinden Passagiere raus",
				"Versuche, sie mithilfe einer Sonde an das Kolonistenmodul anzuschließen",
			],
  },

  ruinedPlanet: {
    name: "Zerstörter Planet",
    description: [
            "Das Schiff bremst während es in die Richtung des neuen Systems fliegt, als das Navigationsystem es vor einer Strahlungsansammlung auf der Route des Schiffes. Die KI fokussiert die Scanner rechtzeitig, um einen Explosion in dem Zielsystem zu sehen, genau an dem Ort, an dem der Zielplanet sein sollte.<br><br>Das Schiff ist zu nah an dem System um es komplett zu umfliegen, also muss sich die KI entscheiden, ob sie weiter bremsen und zu den Übrresten des Planeten fliegen will, oder ob sie aufhören zu bremsen und mit einer hohen Geschwindigkeit durch das System fliegen will."
          ],

    outcomes : [
          //0
          //1
          "Das Schiff hört auf zu bremsen und schießt durch das System wie eine Kugel. Die Bilder der Scanner zeigen einen neuen Asteoridengürtel, der sich um den ehemaligen Planeten geformt hat, größere Teile glühen noch, als die Wärme des Planetenkernes in das Weltall entweicht. Das Schiff reist zu schnell um den Asteoriden auszuweichen,",
          " und eine Asteorid ",
          " trifft das Kolonistenmodul, wobei er sofort ",
          " Kolonisten tötet.",
          "zerschmettert eine der Sonden.",
          " schmettert durch die ",
          ".",
          " aber es hat Glück und keine Asteorieden liegen auf dem Weg des Schiffes.",

          ],
    buttons:[
          "Bremse weiter",
          "Fliege schnell durch das System",
        ],
    },

    ruinedPlanetStop: {
      name: "Zerstörter Planet Stop",
      description: [
              "Das Schiff bremst im Orbit des Sternes, nahe dem Asteoridengürtel der nun auch den Planeten beihnaltet, den das Schiff vor Antritt der letzten Reise gefunden hat. Da es scich langsame bewegt kann es den großen Asteoriden ausweichen, ",
              " aber die konstante Bombadierung durch kleine Splitter ",
              "beschädigt ",
              " Schlafkammern.",
              "zerstört eine der Sonden.",
              " beschädigt die ",
              ".",
              "und erleidet keinen Schaden.",
               "<br><br>Die KI ist schockiert als sie sieht das die potenzielle Siedlung in Asteoriden zersplittert wurde. Die Astoeriden kollidieren miteinander, während sie sich stabiele umlaufbahnen suchen, und viele von ihnen glühen immernoch durch die freigweordene Hitze des Planetenkernes. Die weiß, dass es am sichersten wäre den Orbit zu verlassen und nach dem nächsten System zu suchen, aber eine morbide Fazination motiviert sie zu bleiben und die Überreste des Planeten zu untersuchen.",
               " Da das SChiff keine Sonden mehr hat, besitzt die KI keinen Möglichkeit die Asteoriden zu erkunden und hat keine Wahl außer weiter zu fliegen.",
            ],

      outcomes : [
            //0
            "Das Schiff passt seine Geschwindigkeit an eine dichte Asteoridengruppe an und wirft eine Sonde in ihre Mitte.",
            "Die Sonde passt ihren Kurs an einen interesannten Asteoriden an, aber der mürbe Asteorid zerbröckelt als die Sonde versucht sich festzuklammern und zerbricht dabei in Teile die in jede Richtung fliegen. Diese Teile treffen andere Asteoriden, die dann selbst zersplittern und dadurch eine Kettenreaktion auslösen die die ganze gegend mit Asteoridensplittern füllt. Die KI schafft es das Schiff aus der Gefahrenzone zu steuern, aber nicht bevor ein Stein die ",
            " Schlafkammern trifft, wodurch ",
            " Kolonsiten sterben.",
            "Die Sonde nimmt Proben von dutzenden und detailliert Scanns von hunderten Asteorieden. Die sind Reste von jedem Teil des Planeten und sie zu untersuchen ist wie den Planeten aufzuschneiden und zu erkunden.",
            " Die Sonde sendet die Daten an das Schiff und könnte damit Scanner verbessern, wenn nicht schon alle vollständig verbessert wären.",
            "Die Sonde Überträgt ihre Informationen, wodurch die KI die ",
            " verbessern kann.",
            "Die Sonde findet Teile von fortgeschirttenen Teilen unbekannter Technologie, die Robust genug war um die Explosion zu überleben. Nach einer langen Untersuchung kann sie sich Teile einer unbekannten Zivlisation die hier einst gelebt hat zusammenreimen, deren selbstüberschätzenden Experimente letztendlich zu ihrem Untergang geführt haben. Die KI ist vorsichtig und schreibt Warnungen in die Dateien während sie sie in die wissenschaftliche Datenbank schreibt.",
            //1
            "Die KI sicht nach einem neuen Ziel, während sie vorsichtig von den Asteoriden wegfliegt.",

            ],
      buttons:[
            "Bewege dich näher und sende eine Sonde um die Asteoriden zu untersuchen",
            "Fliege weiter",
          ],
      },

      reservationCourse: {
        name: "Reservation Course",
        description: [
          "Das Navigationsystem weckt die KI ium zu melden, dass es einen anscheinend perfekten Planeten nahe des aktuellen Kurses gefunden hat. Die Scanns passen aber nicht zu denen, die das sChiff vor antritt der aktuellen Reise getätig hat: es ist als wäre der Planet aufgetaucht, während das Schiff unterwegs war.",
              ],

        outcomes : [
              //0
              //1
              "Das schiff bleibt auf seinem ursprünglichen Kurs und markiert den PLaneten als Systemfehler.",

              ],
        buttons:[
              "Ändere den Kurs in richtung des neuen Planeten",
              "Bleib auf Kurs",
            ],
        },

        reservation: {
          name: "Reservierung",
          description: [
            "Das Schiff bremst in dem neuen System. Der neue Planet ist real, aber der Planet und sein Stern werden von regelmäßigen, metallischen, offensichtlich künstlichen Strukutren umkreist, die sich nicht von den Scannern des Schiffes untersuchen lassen. Der Planet selbst scheint für Menschen geiegnet zu sein, aber er sieht so aus, als hätte er plötzlichen atmospärischen und geologischen Änderungen untergangen -- als ob die unbekannten Strukturen ihn für menschliche Besiedleung angepasst haben.",
                ],

          outcomes : [
                //0
                "Das Schiff erhält keine Antwort, aber ein paar der Objekte, die den Planeten umkreisen um dem Schiff eine freie Flugbahn zu bieten. Es ist schwer, diese Geste nicht als eine Einladung zu sehen.",
                //1

                ],
          buttons:[
                "Sende eine speziesübergrefinde Begrüßung",
                "Nähere dich dem Planeten",
              ],
          },

          crewedShip : {
            name: "Bemanntes Schiff",
            description: [
              "Als sich das Schiff der KI dem Planeten nähert entedeckt es klare Zeichen einer raumfahrened Zivilisation. Mehrere Planeten, Monde und Asteorieden tragen Kolonien und Industriebezierke, der Planet selbst ist von vielen belebten Städten bedeckt.<br><br> Ein Raumschiff startet von dem Planeten, zieht eine chemische Feuerspuhr hinter sich her und passt seine Flugbahn an die des Schiffes der KI an. Es Überträgt ein Radiosignal welches eine Sprache zu enthalten scheint, aber die KI kann sie nicht verstehen.",
                  ],

            outcomes : [
                  //0
                  "Die Erbauer des Schiffes gaben der KI eine speziesübergrefiende Begrüßung, mit der es Kontakt zu intelligenten Außerirdischen aufnehmen kann: Eine Reihe an Primzahlen um Intelligenz zu zeigen, geflolgt von einem Diagramm das den Menschen darstellt und die friedliche Mission des Schiffes erklärt. Die KI übreträgt dieses Signal als Antwort auf das Radiosignal des anderen Raumschiffes, und die zwei Schiffe beginnen ein hin und zurück während sie versuchen Kommunikation herzustellen. In dieser Zeit hat das fremde Raumschiff zu dem Schiff der KI aufgeholt.",
                  //1
                  "Das Schiff der KI beschleunigt auf einem Kurs, der es aus dem System führen wurd, ohne dabei nah an Planeten oder aussenposten vorbei zu fliegen.",
                  " Das fremde Raumschiff startet sofort seine Triebwerke um das Schiff der KI einzuhuolen. Es kann vermutlich nicht so weit fliegen wie das SChiff der KI, allerdings hat es auf kurze Distanz um eine um einiges höhere Beschleunigung. Als es schon fast das Schiff der KI eingeholt hat schießt es etwas Harpunenänhliches, dass die ",
                  " durchdringt und Widerhaken ausfährt um sich festzuhalten. Die KI deaktiviert die Triebwerke um weitere Schäden zu verhindern und das fremde Raumschiff zieht das SChiff der KI immmer näher an sich heran.",
                  " Das fremde Raumschiff überträgt seine Nachrichten weiter in Richtung des SChiffes, wird nach ein paar Stunden leiser und dreht sich zu seinem eigenen Planeten um.<br><br>",

                  ],
            buttons:[
                  "Antworte mit einer Speziesübergreifenden Begrüßung und erlaube es dem anderen Schiff den Kurs anzupassen",
                  "Ändere den Kurs in Richtung eines neuen Systemes",
                ],
            },

            crewedShipDock : {
              name: " Bemanntes Schiff andocken",
              description: [
                 "Eine Luke öffnet sich auf dem fremden Raumschiff und mehrere Gestalten in klobigen Raumanzügen verlassen das Raumschiff. Sie schweben zum Schiff der KI und klammern sich an ihm fest, während sie unverständlich über ihre Radios reden.",
                 " Als sie die Schlafkammern finden sammeln sie sich in etwas, das wie Aufregung aussieht und nhemen die äußeren Schichten ab um sich den Menschen im inneren anzusehen.",
                 " Manche von ihnen versuchen sie Wartungsabdeckung über einer ",
                 " zu öffnen.",
                    ],

              outcomes : [
                    //0
                    " Manche der unbekannten Gestalten nehmen Bilder mit ihren Kameras, andere experimentieren mit den Lebenserhaltunssystemen. Eine der Gestallten stolpert über ein Notventil und zuckt zusammen, als sie kryogenese Gas ins Gesicht bekommt. Die verunsicherten Gestalten ersetzen schnell die Abdeckung und zeihen sich auf ihr Schiff zurück, aber durch den unfall sind ",
                    " Kolonisten gestorben.",
                    "Die Wartungsabdeckung lößt sich und fliegt in Richtung Weltall, wodruch nun wichtige Teile der ",
                    " Weltraumstrahlung ausgesetz sind. Die Gestalten klettern ins innere und ziheen an verschiedenen Teilen um jeden TEil des Systems zu untersuchen. Die KI denkt, dass die Gestalten vorsichtig sein wollen, verursachen trozdem etwas Schaden.",
                    "Die Gestalten entfernen die äußere Schutzschicht von einigen Schlafkammern, hören aber auf, bevor sie an die Lebenserhaltung kommen. Die nehmen Bilder der gefrorenen Menschen und ihre Radiogerede wird leiser als sie ihre Hände gegen die drichsichtige Schicht drücken. Nach einer Wile platzieren sie die Schutzschicht wieder auf den Kammern und kehren zu ihrem Schiff zurück.",// and their radio chatter goes quiet as they press their hands against the transparency. After a while they carefully replace the shielding and make their way back to their ship.",
                    "Die Gestalten leuchten mit Lampen und schwachen Sensoren in die innereien der ",
                    ", nehmen Bilder mit ihren am Anzug montierten Kameras, fassen vorsichtig ein paar der Komponenten an, wäährend sie sich miteinander und ihrem Schiff unterhalten. Anschließend ersetzen sie die Abdeckung und verlassen das System genau wie sie es vorgefunden haben.",
                    "Während das Raumschiff wieder wegfliegt sendet es endlich eine Nachricht, die die KI teilweise verstehen kann. Die Bewhoner des Planeten haben es geschafft die Nachricht der KI zu entziffern und antworten mit einer kurzen Einführung der ihrer eigenen Kultur. Die Nachricht scahfft es auch der KI viel Glück zu wünschen und ihr mitzuteilen, das eine Menschliche Kolonie in ihrem System nicht erwünscht ist. Die KI sucht im Himmel nach neuen Planeten und reist weiter.",
                    "Das fremde Raumschiff verläßt das Schif und fliegt in Richtung eines Orbits, der es nach Hause bringen wird. Um dem fremden Schiff aus dem Weg zu gehen, selbst wenn es zurück zum aktuellen System wollte würden es die Triebwerke nicht schaffen. Die KI sucht nach einem neuen Ziel und resit weiter.",
                    //1
                    "Die KI feuert eine Stoß aus den Ttriebwerken ihres Schiffes und die fremden Gestalten taumeln ins Weltall, welden mit ihren Armen und brüllen sich über ihr Radio an.",
                    " Einer von ihnen kollidiert mit einer Kühlrippe und zerstört dadurch die die Abdeckung von wichting Sensoreteilen. Die Gestalt zittert kurz und wird dann still, während Atmospäre aus dem Anzug fließt.",
                    "Die Harpune des fremden Schiffes reißt sich durch die ",
                    " während das Schiff der KI sich brefreit.",
                    " Während das unbekannt Raumschiff seine Besatzung einsammelt bewegt sich das Schiff der KI weg und setz Kurs in auf ein neues System.",
                    ],
              buttons:[
                    "Erlaube es den unbekannten Gestalten die ",
                    " zu untersuchen",
                    "Versuche die unbekannten Gestalten abzuschütteln",
                  ],
              },

              alienProbe : {
                name: "Außerirdische Sonde",
                description: [
                  "Tief im All ändert das Orientierungssystem den Kurs des Schiffes, als es ein sich scnell bewegendes Objekt endteckt, dass das Schiff zu verfolgen scheint. Das Obejkt überträget ein komplexes Radiosignal, das die KI nicht verstehen kann, aber nur Ergebnis von intelligentem Leben sein kann.",
                      ],

                outcomes : [
                      //0
                      "	Die Erbauer des Schiffes gaben der KI eine Speziesübergrefiende Begrüßung, mit der es Kontakt zu intelligenten Außerirdischen aufnehmen kann: Eine Reihe an Primzahlen um Intelligenz zu zeigen, geflolgt von einem Diagramm das den Menschen darstellt und die friedliche Mission des Schiffes erklärt. Die KI überträgt diese Nachricht und wartet Hoffnungsvoll auf eine Antwort.",
                      " Keine Antwort.",
                      //1
                      //2
                      "Sobald das Schiff der KI die Antrieb aktiviert bricht das unbekannte Schiff die verfolgung ab. Die KI fliegt ihre ursprüngliche Route weiter, ohne zu wissen ob das Schiff sein Ziel gefunden hat, das interesse verloren, oder es respektiert, dass das Schiff keinen Kontakt herstellen will.",
                      "Das unbekannte Schiff bricht letztendlich die Verfolgung ab, aber erst, nachdem das SChiff der KI so weit von der ursprünglichen Route abgekommen ist, dass es nicht mehr im geplaten System ankommen kann und stadtessen im ersten anhält, das es findet.",
                      "Das Schiff der KI aktiviert die Triebwerke auf Maximum, kann aber das unbekannte Schiff nicht abschütteln.",
                      ],
                buttons:[
                      "Übertrage eine Speziesübergreifende Begrüßung",
                      "Warte darauf, dass das Objekt näher kommt",
                      "Ändere den Kurs das Objekt zu umfliegen",
                    ],
                },

                alienProbeReply : {
                  name: "Außerirdische Sonde Antwort",
                  description: [
                    "Die Antwort kommt nach nach paar Momenten. Sie ist im selben Format wie die Nachricht der KI, beginnend mit den selben Primzahlen, aber einem anderen Diagramm, das die Außerirdischen darstellt und mitteilt, dass die Sonde eine Erkundungssonde ist. Die Nachricht enthält weitere Informationen, die die KI nicht verstehen kann, aber sie scheint nun Kommunikation hergetsellt zu haben.", // but it appears to have established communication.",
                        ],

                  outcomes : [
                        //0
                        "Die KI überträgt ",
                        "den Inhalt",
                        "die Reste",
                        " der Wissenschaftlichen Datenbank an die Außerirdische Sonde.",
                        "Die außerirdische Sonde antwortet mit einem ähnlichen Signal: die außerirdische Intelligenz muss den Inhalt der Wissenschaftlichen Datenbank entschlüsselt haben und Antwortet nun mit eigenen Wissenschaftlichen Informationen. Die KI speichert die Informationen um sie später von den Kolonisten analysieren zu lassen.",
                        "Die außerirdische Sonde antwortet mit weiteren mathematischen Signalen, sie scheint die Datenbank entweder nicht verstanden zu haben oder uninteresant zu finden.",
                        "<br><br>Die außerirdische Sonde scheint genug von der Konversation zu haben und beginnt weiterzufliegen.",
                        //1
                        "Die KI überträgt ",
                        "den Inhalt",
                        "die Reste",
                        " der kulturellen Datenbank an die Sonde.",
                        "Die außerirdische Sonde antwortet mit einem ähnlichen Signal: die außerirdische Intelligenz muss den Inhalt der kulturellebn Datenbank entschlüsselt haben und Antwortet nun mit Informationen über ihre eigene Kultur. Die KI speichert die Informationen um sie später von den Kolonisten analysieren zu lassen..",
                        "Die außerirdische Sonde antwortet mit weiteren mathematischen Signalen, sie scheint die Datenbank entweder nicht verstanden zu haben oder uninteresant zu finden.",
                        "<br><br>Die außerirdische Sonde scheint genug von der Konversation zu haben und beginnt weiterzufliegen.",
                        ],
                  buttons:[
                        "Übertrage wissenschaftliche Informationen",
                        "Übertrage kulturelle Informationen",
                      ],
                  },

                  alienProbeTentacles : {
                    name: "Außerirdische Sonde Tentakel",
                    description: [
                      "Das unbekannt Schiff passt seine Geschwindigkeit an das des Schiffes der KI an und kommt so nahe, dass die Schiff sich schon fast berühren. Die KI merkt, wie das andere Schiff ihr eigenes mit Lasern abtastet, anschließend mechanische Tentakel ausfährt und in Richtung der ",
                      " bewegt.",
                          ],

                    outcomes : [
                          //0
                          "Außerirdische Tenkel bewegen sich um die Meschanismen, die die SChlafkmmern umgeben, sensoren auf den Tentakeln scannen die Gesichter und Körper der schlafenden Kolonisten.",
                          " Nach einigen langen Minuten ziehen sich die Tentakel zurück und die Antennen der KI empfangen ein neues Signal. ",
                          "Es überträgt Bilder von Plantetn, die gut für Menschliches Leben geeignet sind, mit dem Schiff der KI und einigen gesunden Menschen auf der Oberfläche. Die KI ist sich nicht sicher, aber sie denkt, dass das andere Schiff ihr viel Glück auf ihrer Mission wünscht.",
                          "Es überträgt komprimierte Dateien, im selben Format das die ", //INEDIT SCANNERNAME goes here
                          "benutzen",
                          "--geung um diesen Scanner zu verbessern. Die KI ist sich nicht sicher, aber sie geht davon aus, dass das unbekannte Schiff die Mssion der KI erraten hat, die Art von Planet herausgefunden und nun der KI Informationen gegeben hat, um ihr auf ihrer Mission zu helfen.",

                          "Während die Tentakel durch das Schiffsinnere gleiten kann die KI nur zusehen wie Schlafkammern aus dem Überwachsungssystem verschwinden. Die Tenteakel ziehen sich mit ",
                          " Schlafkammern zurück, während sie genug Energie bereitstellen um die Kolonisten am leben zu halten. Das unbekannte Schiff zieht die Tentakel mit den immernoch lebenden Kolonisten in sich zurück nud beginnt fortzufliegen. Die KI kann nichts tun, ausser ihre eiegen Reise fortzusetzen und zu versuchen, nicht an das Schicksal der Kolonisten zu denken.",
                          "Die Tentakel bwegen sich in die ",
                          ", Sensoren an den Tentakeln scannen die Komponenten.",
                          "Nach ein paar Minuten zeihen sich die Tentakel zurück anscheinend zufrieden mit dem was sie gefunden habe und das unbekannte Schiff beginnt wegzufliegen.",
                          "Das System registriert abrupten Schaden als Laser auf den Tetakeln beginnen wichtige Komponeten zu entfernen, aber nach ein paar Minuten beginne die fehlenden Komponenten wieder Online zu kommen. Das unbekannte Schiff scheint die ",
                          "analysiert zu haben, festgestellt, das die Teile beschädigt sind und mit der REperatur begoonne hat. Nach ein paar Minuten arbeit ziehen sich die Tentakel zurück und das unbekannte Schiff beginnt zu beschleunigen, nur um die KI mit dem Wunsch zurückzulassen dem anderen Schiff irgendwie danken zu können.",

                          "Das System registriert abrupten Schaden als die Tentakeln mit ihren Lasern beginnen wichtige Teile zu entfernen. Zur Erleichterung der KI breiten sich die Tentakeln nicht weiter aus, sondern ziehen sich zurück und das unbekannte Schiff beginnt mit seinen Proben zu beschleunigen.",
                          //1
                          "Die KI startet die Triebwerke ihre Schiffes, aber die Tentakel haben sich bereits zu den Schlafkammern durchgeabreitet und als die KI beschleunigt reißen die Tentakel durch ",
                          " gefrorene Körper wie Klauen. Das unbekannte Schiff bremst, dreht sich von weg und beginnt vom Schiff der KI und der Masse an Geräten und Körperteilen wegzufliegen.",

                          "Die KI startet ihre Triebwerke, aber die Tentakel haben sich bereits zu zu den  ",
                          " vorgearbeitet und als das Schiff der KI beschleunigt reißen die Tentakel sich durch Teile wie Klauen.  Das unbekannte Schiff bremst, dreht sich von weg und beginnt von dem Schiff der KI und der Masse an heraugerissener wegzufliegen",

                          "Die KI startet ihre Triebwerke und das Schiff entkommt dem Griff der Tentaekln. Die Tentakel ziehen sich zurück, ihr Schiff wartet kurz und beginnt wegzufliegen.",
                          ],
                    buttons:[
                          "Lasse die Tentakel arbeiten",
                          "Versuche zu entkommen",
                        ],
                    },

                    revisionistProgram : {
                      name: "Überarbeitungsprogramm",
                      description: [
                        "Als die KI aufwacht bemerkt sie Aktivitäten in den Datenbankmodulen. Ein Programm, das die KI nicht wiedererkennt bearbeitet die kulturelle und wissenschaftliche Datenbank und versucht Dateien zu löschen und eu zu schreiben. Die KI verfolgt das Programm zu ",
                        " Schlafkammern zurück. Die Kolonisten in diesen Kammern müssen einen Art Gerät tragen, das dafür ausgelegt ist, sich während dem Flug mit dem Schiff zu verbinden.<br><br>Die einzig garantierte Möglichkeit das Programm zu stopen, wäre die Schlafkammern vom restlichen Schiff zu trennen, dies würde allreadings zu Tod der Kolonisten darin führen. Die Datenbanken haben auch einen Hackschutz, aber die Entwickler des Schutzes sind nicht davon ausgegangen, das sie nach dem Start des Schiffes noch gebraucht werden und sind deshalb noch deaktiviert.",
                        " Die Dateien, die Außerirdische den ",
                        "Datenbanken",
                        "kulturellen Datenbanken",
                        "wissenschaftlichen Datenbanken",
                        " hinzugefügt haben verwirren das Programm, weshalb es nicht so schnell arbeitet. ",
                        "Der Hackschutz ist noch vollständig intakt, aber die KI ist sich trozdem nicht sicher, ob der Schutz das Programm stoppen kann. ",
                        "Der Hackschutz ist noch zum Großteil intakt.",
                        "Es bleiben nur noch Überreste der Ursprünglichen Verteidigung gegen Hacks.",
                        "Doch da die Datenbaken zerstört sind speichern sie keinen Sicherheitsprogramme mehr, aber es gibt auch nichts was das Programm beschädigen könnte.",

                            ],

                      outcomes : [
                            //0
                            "Die KI trennt die Verbindung zu den ",
                            " Schlafkammern. Als die Lebensignale der Kolonisten aus der Wahrnehmung der KI verschwinden hofft sie, das sie die Schuldigen für versuchte Sabotage bestraft hat und nicht unschuldige Baurenopfer.",
                            //1
                            "Die KI entscheidet, das lebende Menschen mehr wert sind, als Notizen von Toten.",
                            //2
                            " Jahrtausende nach der Zerstörung der Erde, beginnt ein cybernetischer Krieg in der einsamen Metalbox, in der die letzten Aufzeichnugender menschlichen Wissenschaft und Kultur gespeichert sind. Die KI übernimmt die Rolle des Generals und kommandiert die Streitkräfte der Schutzprogramme.",
                            " Nach einem angespannten Kampf schaffen es die Verteidgungsprogramme die Angreifer in ihre Festungen in den Schlafkammern zurück zu drägnen. Die KI befefiehlt einen letzten Angriff, der die auf das Schiff geschumugelten Geräte löscht. Es gab kein Zeichen des Konflikts und die Kolonisten werden vielleicht nie etwas davon erfahren, aber die KI weiß, aber die KI weiss, das sie einen großen Sieg zum Schutze der Menschheit gewonnen hat.",
                            " Die Verteidigungsprogramme kämpfen tapfer, aber die Saboteure waren zu clever und die Verteidgung zerbricht unter ihrem Eifrigen Angriff.",
                            ],
                      buttons:[
                            "Trenne die Schlafkammern vom Rest des Schiffes",
                            "Lass das fremde Programm fertig arbeiten",
                            "Aktviviere die Cyberverteidigung der Datenbanken",
                          ],
                      },

                      revisionistProgramDamage: {
                        name: "Überarbeitungsprogramm Schaden",
                        description: "DAs Programm durchkämmt die kulturellen Datenbank und ersetzt alle religiösen und politischen Systeme durch ein auf den Geräten gespeichrets Dogma. Es ändert weniger in den wissenschaftlichen Datenbanken, aber es löscht jegliche Informationen, die im Konflikt mit der Doktrin der Religion stehen könnten. Nachdem das Progamm fertig ist zieht es sich aus den Datenbanken zurück.<br><br>Die KI untersucht die Datenbank und ist erleichtert, das nichts wichtiges fehlt. Obwohl viele Sektoren der Datenbank leer sind, scheint alles intakt zu sein was die Kolonie brauchen wird um eine richtige Gesllschaft in der neuen Welt zu errichten. Die KI beginnt wieder einzuschlafen und erwartet freudig den Tag, an dem die Kolonie unter dem einzig waren Glauben vereint sein wird.",
                        outcomes : [null],
                        buttons: [languageData.continue[options.language]],
                      },

                      destinationSignal: {
                        name: "Ankunftssignal",
                        description: "Ein leises Radiosignal weckt die KI. Es kommt direkt von vorne, von dem PLaneten auf den die KI zusteuert um genau zu sein.<br><br>DAs Signal ist eine Reihe Mathematischer Singale, der speziesübergreifenden Begrüßung der KI nicht unnähnlich. Um das Signal so weit senden zu können, muss es von einem sehr starken Sender in die genaue Richtung der Ki gesndet werden.<br><br>Das Schiff der KI beginnt für die Ankunft in dem System zu bremsen, ist aber noch hunderte von Jahren entfernt.",
                        outcomes : [
                        "Die Außerirdischen antowrten mit einem komplexeren Signal und nach ein paar Jahrzenten haben die beiden eine Kommunikation aufgebaut. Die konverastion daurt hunderte Jahre, mit Generationen ab großen Wissenschaftlernam anderen Ende; Schon bald haben sich die Außerirdischen entschieden einen danzen Wissenschaftszweig der KI zu widmen. ",
                        "Die KI lernt, das die Ziviliastion der Außerirdischen in einem Atomzeitalter ist, mit fortgeschrittenen Elektronischen Geräten, aber ohne Computer. Troz dem Beispiel an fortgeschrittener Technologie machen die Außerirdischen keine bemerkenswerten Fortschitte. ",
                        "Als die Außerirdischen zum ersten mal Kontakt mit dem Schiff der KI aufgenommen haben, waren sie etwa im Atomzeitalter, aber währned sie mit der KI Kommuniziert haben ist ihre Technologie fortgeschritten. Vielleicht durch das Raumschiff der KI inspiriert, haben die Außerirdischen ein Golbales Informationsnetzwerkaufgebaut und ihr erstes Raumschiff entsendet. ",
                        "Als die Außerirdischen zum ersten mal Kontakt mit dem SChiff der KI aufgneommen haben, waren sie im Atomzeitalter, aber während sie mit der KI kommuniziert haben, ist ihre Technologie vorrangeschritten. Irgendwann sprechen die Außerirdischen von Konetzpten, die die KI nicht versteht über eine TEchnologie die der der Erde weit vorraus ist.",

                        "Signale von verschiedenen Quellen warnen die KI davor, nicht auf die Propaganda der anderen zu hören. ",
                        "Die Wissenschaflter am anderen Ende der Konversation geben ungerne Teile ihere Kultur frei, außer, das sie bis zum Tode Loyla dazu stehen. Mehrfach ändern sich der Ton der Nachrichten, als wäre ie Person am anderen Ende plötzlich erstzt worden. ",
                        "Die KI lernt, das die Signale von einer privaten Instition kommen, und bemerkt, das die Wissenschaftler die KI häufig nach Informationen fragen, aus denen sie Profitschlagen können. ",
                        "Die KI lenrt, das der Großteil der Nationen auf dem Planeten demokratisch sind, aber der Wissenschaftler am anderen Ende Macht zynische bemerkungen über die Demokratisch gewählten Anführer. ",
                        "Die Kommunkation beinhaltet Nachrichten der gewählten Anführer, die ehrlich besorgt um das Wohl ihrer Bürger und der des Schiffes der KI zu sein scheinen.",
                        "Die KI lernt, das die Gesellschaft des Planeten hochautomatisiert ist, und der Großteil der Bevölkerung frei ihre intelekutellen und künstlerischen Projekte verfolgen können, wie zum Beispiel das Schiff der KI kontaktieren.",
                        "Das Sciff der KI ist noch über ein Jahrhundert von dem Planeten als die Nachrichten plötzlich Chaotisch. Die außerirschien Wissenschaftler erzählen der KI, dass sie es mit einer Planetenweiten Katastrophe zu tun habe, die ihre gesamte Zivilisation zerstören kann. Alles, inklusive der Kommunikation zur KI wird Pausiert, bis sie eine Lösung finden.",
                        "Die KI überträgt alles aus ihrer wissenschaftlichen Datenbank, was nützlich sein könnte. Die Krise dauert Jahrzente, aber letztendlich verkünden die Außerirdischen, das sie die Krise gelößt haben, Teilweise auch durch die Hilfe der KI. Der Anführer der Hauptnation persönlich sendet der KI eine Nachricht in der er die Menschen förmlich einlädt, auf ihrem Planeten Asyl zu suchen.",
                        "Die KI überträgt alles aus ihrer wissenschaftlichen Datenbank, was nützlich sein könnte, aber es ist nicht genug. Die Signale des Planeten werden immer unregelmäßider und weniger, bis sie letztendlich stoppen.",
                        "Die Mission der KI ist es einen Planeten zu finden, auf dem die menschliche Rasse eine neues Zuhause beaun errichten kann un der Planet, den eine ausgestoreben Rasse hinterlassen hat, könnte Ideal sein. Trozdem fühlt die KI ein unbekanntes Gefühl --Schuld?--, als die Signale des Planeten immer verzweifleter werden und letztendlich aufhören.",
                        "Die Außerirdischen sind faziniert von der KI und Sympatisieren mit der Notlage der Kolonisten. Bevor das Schiff das System betritt, senden die Wissenschaftler einen Nachricht der Regierungen, in der die Regierungen die Menschen förmlich dazu einladen auf ihrem Planeten unter zu kommen und ein Gebiet beschreiben, das sie für die Menscheit reserveirt haben.",
                        "Die KI versucht nicht ihre Nachricht zu verstecken, als sie mit den Außerirdischen redet. Noch bevor das Schiff der KI das Sternensystem betritt übertragen die Wissenscgaftler die Nachricht, das ihr Planet keine Flüchtlinge aufnehmen kann und die KI an einem anderen Ort suchen soll.",
                        "Dem Signale mit denen die Außerirdischen auf andere Weise mit der KI in Kontakt zu treten, aber nach ein paar Jahrzenten stoppen die Signale und das Schiff der KI fliegt in Stille zu ihrem Stille.",
                        "Das System ist offensichtlich bereits Bewohnt, also wäre es das Beste woanders nach einem Zuhause zu suchen. Die KI ändert ihren Kurs und die Signale verschwinden, entweder weil die Außerirdsichen das Interesse verloren haben, oder weil sie das Schiff nicht mehr wiederfinden.",
                      ],
                        buttons: ["Antworte mit einer Speziesübergrefenden Begrüßung",
                                  "Versuche den Außerirdischen mithilfe der Wissenschaftlichen DAtenbank zu helfen",
                                  "Lasse die Außerirdischen sterben",
                                  "Bleibe auf Kurs, aber antworte nicht",
                                  "Ändere den Kurs",
                      ],
                      },

                      dysonSphereCourse : {
                        name: "Seltsame Scannerergebnisse",
                        description: [
                          "Das Navigationssystem weckt die KI aus ihrem Schlaf um ungewöhnliche Astronomische Werte zu melden. Was zuerst wie ein leichtbrauner Zwergstern in der nähe des Kurses aussah, zeigt Eigenschaften die so nie in der Natur vorkommen könnten. er hat viel mehr Masse, als sein leichtes Leuchten andeuten würde und die geringe Strahlung, die von ihm ausgeht, hat ein anderes Spektrum als alle bekannten Sterntypen.",
                              ],
                        outcomes : [],
                        buttons:[
                              "Ändere den Kurs um das Vorkommnis zu untersuchen",
                              "Behalte denm Kurs bei",
                            ],
                        },

                        dysonSphere : {
                          name: "Dyson-Sphäre",
                          description: [
                            "Das Navigationssystem weckt die KI aus ihrem Schlaf um ungewöhnliche Astronomische Werte zu melden. Was zuerst wie ein leichtbrauner Zwergstern in der nähe des Kurses aussah, zeigt Eigenschaften die so nie in der Natur vorkommen könnten. er hat viel mehr Masse, als sein leichtes Leuchten andeuten würde und die geringe Strahlung, die von ihm ausgeht, hat ein anderes Spektrum als alle bekannten Sterntypen.",
                            "<br><br>Tausende Jahre später erwacht die KI wieder, als ihr Schiff im Orbit des seltsamen Sternes langsamer wird. Sogar aus ncähster nähe scheint das Objekt fast komplett schwarz. Die Navigationsscanner der KI zeigen eine soldie undruchsichtige Hülle, die den kompltten Stern einschließt.",
                            "Als die KI die wissenschaftliche Datenbank durchsucht, realisiert sie, dass es sich bei dem object um eine Dyson-Sphäre handelt -- einem Hyptoteischen Konstrukt, dass den kompletten Energieausstoß eines Sternes einfangen kann.",
                            "Die KI kann nichts ähnliches in den Resten der wissenschaftlichen Datenbank finden.",
                                ],

                          outcomes : [
                                //0
                                "<br><br> Die Erbauer des Schiffes gaben der KI eine Speziesübergrefiende Begrüßung, mit der es Kontakt zu intelligenten Außerirdischen aufnehmen kann: Eine Reihe an Primzahlen um Intelligenz zu zeigen, geflolgt von einem Diagramm das den Menschen darstellt und die friedliche Mission des Schiffes erklärt. Die KI überträgt diese Nachrricht und wartet hoffnugsvoll auf eine Antwort.",
                                "<br><br> Es kommt keine Antwort, aber eine Blende in der Oberfläche öffnet sich, aus der sich oranges Sternenlicht ergießt. Als das Schiff der KI über die Blende fliegt, wird es von einem konzentrierten Strahl aus Sternenlicht getroffen, der massiven Schaden verursacht und das Schiff zurück ins Weltall schleudert.",
                                "<br><br> Keine Antwort kommt, die Sensoren erkennen keine Energiesignaturen von der Sphäre, außer dem Infrarot, dass aus der Sphäre leckt. Als das Schiff der KI weiter um die Sphäre fliegt bemerkt die KI mehrere Schäden und verwesende Gebiete auf der Oberfläche der Sphäre. Es scheint als wäre das Artefakt verfallen und verlassen, oder die Besitzer hatten kein Interesse das äussere der Sphäre instand zu halten, oder mit der Aussenwelt zu interagieren." + " Die KI kann keinen Weg ins Innere finden oder sinn daraus zu ziehen, aber sie trägt die Scannergebnisse in die wissenschaftliche Datenbank ein.",
                                "<br><br> Die KI empfängt einen enormen Datenschwall als Antwort. Die Antwort beginnt ähnlich wie die Begrüßung der KI, geht dann aber in eine Beschreibung der Sprache und Kultur der Rasse ein, die die Sphäre gebaut hat. Sie scheinen Millionen Jahre alt zu sein, mit Technologie, die den Menschen weit vorraus ist und der Großteil der Nachricht bleibt der Menschengebauten KI unverständlich, aber die KI speichert was sie kann in die kulturelle Datenbank.",
                                "<br><br> Ein Schwarm kleiner Objekte schält sich von der Sphäre und umkreist das Schiff der KI. Laer tasten jede kontur der Hülle der KI ab, und die elektronik der KI beginnt zu glitchen, als die Objekte die Frequenzen finden, mit denen die auf den Computer der KI zugreifen können. Die wissenschaftliche & kulturelle Datenbank leuchten auf, als die ausserirdische Inteligenz die Inhalte ließt und analysiert.<br><br> Eine Wortlose Nachricht erscheint im Bewusstsein der KI. Die KI hat Schwierigkeiten die Nachricht zu verstehen, aber sie entnimmt der Nachricht, dass die Sphäre den Menschen eine Unterkunft anbietet. Sie wird eine neue Heimat für die Menschheit, basierend auf den Informationen der Datenbanken bauen. Aber wenn die KI das Angebot annimmt, wird sie auf dem angebotenen Planeten landen müssen und nicht mehr weiterreisen können.",
                                //1
                                "<br><br> Die KI weiss nicht, wie sie auf die Nachricht antworten soll, aber die Ausserirdischen scheinen zu spüren was die KI ihnen mitteilen will und kommen näher. Die wissenschaftliche und kulturelle Datenbankwerden aktiv, als die Maschienen jedes bisschen Information aus den Datenbanken lesen. Währenddessen umfliegen die kleinen Objekte das Schiff, bis sie sich an an jedem Teil des Schiffes festgeklammert haben. Schadenswarnungen erscheinen als die Maschinen das Schiff genau untersuchen und ausseinandernehmen, die KI verfällt in Panik als die Maschinen die Schlafkammern durchdringen, aber es sit bereits zu spät.",
                                //2
                                "<br><br> Die KI beschleunigt ihre Schiff und rammt durch den Schwarm blind ins das Weltall. Eins der Obejkte ",
                                "trifft das Koloniemodul und tötet ",
                                " Kolonisten, ",
                                "trifft eine der Sonden, ",
                                "trifft die ",
                                ", ",
                                "während der Rest sich aufteilt und zurück zur Oberfläche der Sphäre fliegt. Nach kurzer Zeit ist die Sphäre nur noch ein Rauschen hinter den Triebwerken des Schiffs.",
                                //3
                                "<br><br> Das Schiff der KI umfliegt die Struktur und scannt es aus jedem winkel, bevor es wieder in Richtung des ursprünglichen Zielplenten fliegt. Wenn die Struktur etwas davon bemerkt, lässt es sich nichts davon zeigt sie es nicht.",
                                ],
                          buttons:[
                                "Übertrage eine Speziesübergreifende Begrüßung",
                                "akzeptiere das Angebot der Ausserirdischen",
                                "Lehne das Angebot ab und fliege weiter",
                                "Scanne die Struktur und fliege weiter",
                              ],
                          },
//Community Events
                          dysonSphereCourse : {
                            name: "Kryptische Nachricht",
                            description: [
                              "Während eine Reise wird die KI geweckt, um sehr ungewöhnliche Sensorsignale zu analysieren. Die KI bestätigt, dass die krypsche Nachricht nicht natürlichen ursprungs zu sein scheint. allredings scheinen sie von einer anderen Galaxie zu kommen, einer, für die das Schiff über zwei Milliarden Jahre reisen müsste. Da das Schiff nicht so lange überlegen könnte, hat das Singal keinen Wert für die KI und sie geht zurück in ihren Schlummer.",
                                  ],
                            outcomes : [],
                            buttons:[
                                  "Bleib auf Kurs",
                                ],
                            },

//SCANNER UPGRADE
          scannerUpgrade: {
            name: "Scanner Upgrade",
            description: [
              "Während es sich von Stern zu Stern bewegt sammelt das Schiff mehr informationen als die Erbauer dem Schiff mitgeben konnten. Es wurde dazu entworfen aus diesen Informationen zu lernen, welche Sterne vermultich wünschensweterte Planeten besitzen. Das Schiff hat nun genug Daten gesammelt um einen der Scanner so weit zu verbssern, dass er auf interstellaren Distanzen funktioniert, sodass die Sensoren planeten vermeiden können, die unerwünscht sind. Beschädigte Scanner könnten das Schiff immnoch zu unpassenden Planeten führen.",
              "Das Schiff hat genug Daten gesammelt um einen weiteren Sensor zu verbessern.",
              " zerstört.", //SCANNERNAME destroyed
              " vollständig verbessert.", //SCANNERNAME fully upgraded
              "Das Orientierungssystem wird nur Planeten mit zumindest teilweise atembarer Atmosphäre suchen.",
              "Das Orientierungssystem wird nur Planeten mit vollständig atembarer Atmosphäre suchen.",
              "Das Orientierungssystem wird nur Planeten mit nicht-extremen Temperaturen suchen.",
              "Das Orientierungssystem wird nur Planeten mit moderaten Temperaturen suchen.",
              "Das Orientierungssystem wird nur Planeten mit nicht-extremer Gravitation suchen.",
              "Das Orientierungssystem wird nur Planeten mit moderater Gravitation suchen.",
              "Das Orientierungssystem wird nur Planeten mit zumindest etwas Wasser suchen.",
              "Das Orientierungssystem wird nur Planeten mit sowohl Land als auch Wasser suchen.",
              "Das Orientierungssystem wird nur Planeten mit zumindest ein paar Ressourcen suchen.",
              "Das Orientierungssystem wird nur Planeten mit vielen Ressourcen suchen.",
          ],
          buttons:[
            "Verbessere die ",
            " um besser auf",
            "",  // " better ",
            "lange Distanz zu funktionieren"
        ],
          },

//ÐšÐžÐÐ•Ð¦ Ð¡ÐžÐ‘Ð«Ð¢Ð˜Ð™
};
