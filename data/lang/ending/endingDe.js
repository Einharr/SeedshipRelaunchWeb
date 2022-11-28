//Инициализация концовки
function ending(difWords, name, nameBecause,
                landing, landingBut, landingBonus, surface, surfaceFull, sky, observation,
                construction, atmosphere, atmosphereBut,
                temperature, temperatureBut,
                plants, water, waterBut, animals, moon, caves, ruins, features,
                resources, resourcesBut, science, scienceBut, sustain,

                gravity, gravityBut,
                natives, nativeInteractions,
                culture,

                politics) {

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

  this.culture = culture;
  this.politics = politics;

}

var EndingDifWords = [
  "und",
  "aber",
  "doch",

  "Sie nennen ihre neue Welt ",
  "Sie bauen ein Denkmal für die ",
  " Kolonisten, welche die Reise nicht überlebten.",
  "Die Kolonisten erwachen aus ihren Schlafkammern und betrachten ihr neues Zuhause.",


];

var EndingNameBecause = [
  "aufgrund der extremen Hitze.",
  "aufgrund der extremen Kälte.",
  "da die hohe Gravitation den Horizont komplett flach erscheinen lässt.",
  "da unter der hohen Anziehungskraft zu stehen wie ein Heldenakt erscheint.",
  "da durch die niedrige Anziehungskraft viele hohe Berge entstanden sind.",
  "da das ganze Land im planetenweiten Ozean versunken ist.",
  "da die Oberfläche des Planeten komplett mit Eis bedeckt ist.",
  "da es auf dem Planeten kein Wasser gibt.",
  "aufgrund des üppigen Pflanzenlebens.",
  "aufgrund der giftigen Pflanzen.",
  "aufgrund der vielen essbaren Pflanzen.",
  "aufgrund des riesigen Höhlennetzwerks unter der Oberfläche.",
  "aufgrund der vielfältigen Ressourcen.",
  "aufgrund des Ressourcenmangels.",
  "aufgrund der perfekten Vorraussetzungen.",
  "da sie der zurückgelassenen Erde ähnelt.",
  "da sie diese Welt ist.",


];

var EndingLanding = [
  "Das Landungsystem kontrolliert dem Abwärtsflug des Schiffes und es",
  "Das beschädigte Landungsystem kann den Abwärtsflug des Schiffes nicht ganz kontrollieren, was zu Schäden führt und es",
  "Die KI nutzt die Schubdüsen des Schiffes um den Abwärtsflug etwas zu kontrollieren und es"
];

var EndingLandingBut = [
  "landet sanft in ", //splashes gently down into",
  "landet sanft auf",

  "landet in", //splahes into
  "landet auf",

  "landet hart in", //splahes hard into
  "stürzt auf",
  "macht eine Bruchlandung auf"
];

var EndingLandingBonus = [
  "Eine Raumflotte der Eingeborenen fängt das Schiff ab, um es zu einer vorbereiteten Landezone zu führen.",
  "Die Eingeborenen entsenden ein Raumschiff um das Schiff der KI in Richtung Boden zu leiten, während sie eine Landzone vorbereiten.",
  "Die Eingeborenen schicken ein primitives Raumschiff um das Schiff der KI im Auge zu behalten, während die Einwohner am Boden eine Landezohne vorbereiten.",
];

var EndingSurface = [
  "einem Ozean an der Küste eines Kontinents.",
  "dem planentenweiten Ozean.",
  "der gefrorenen Oberfläche des Planeten.",
  "einem Feld außerirdischer Pflanzen.",
  "der felsigen Oberfläche.",
  "einem Feld außerirdischer Pflanzen bevor es zum Stehen kommt."
];

var EndingSurfaceFull = [
  "Das Schiff ruht auf einem Ozean aus langsamen, kilometerhohen Wellen, unter einem",
  "Das Schiff wiegt sich auf einem Ozean unter riesigen, langsamen Wellen unter einem",  //The seedship rocks on the surface of an ocean of slow, tall waves, beneath",
  "Das Schiff schwimmt auf einem Ozean der sich bis zum Horizont erstreckt, begleitet von einem", // ehe ship floats on the surface of an ocean that stretches to the horizon, beneath", hier war ich ein bisschen kreativer
  "Das Schiff schwimmt auf einem ruhigen Ozean, unter einem", // The ship floats on the surface of a calm ocean that stretches to the horizon, beneath",
  "Das Schiff ruht auf einem spiegelglatten Ozean unter einem",

  "Wälder aus unmöglich dünnen Pflanzen reichen Kilometer in einen", //Forests of impossibly slender alien plants reach kilometres into",
  "Wälder aus großen, unbekannten Pflanzen reichen hunderte Meter in einen", //Forests of tall alien plants reach hundreds of metres into",
  "Wälder aus unbekannten Pflanzen erstrecken sich unter einem",
  "Felder aus dicken, zusammengekauerten Pflanzen erstrecken sich unter einem",
  "Ebene Felder aus Moos erstrecken sich unter einem", //Level fields of alien moss stretch away beneath",

  "Kilometerhohe Eissäulen ragen in einen",
  "Hohe, gezackte Säulen aus Eis ragen in einen", //Tall, jagged spires of ice reach into",
  "Gezackte Eissplitter erstrecken sich unter einem", //Jagged shards of ice stretch away beneath",
  "Eine zerkrumpelte Eisfläche erstreckt sich unter einem",
  "Eine spiegelglatte Eisfläche erstreckt sich unter einem",

  "Eine gezackte Landschaft aus hohen Kraterwänden und riesigen Felsstücken erstreckt sich unter einem",
  "Eine gezackte, von Meteoren zerstörte Landschaft erstreckt sich unter einem",
  "Eine unbewegliche von Kratern überzogene Landschaft erstreckt sich unter einem",
  "Eine flache Landschaft, in der nur ein paar wenige Krater herausstechen, erstreckt sich unter einem", // A perfectly still landscape, flat except for a few shallow craters, stretches away beneath",
  "Eine komplett ebene, regungslose Landschaft erstreckt sich unter einem",

  "Eine Landschaft aus dünnen Felsformationen und unmöglich hohen Bergen erstreckt sich unter",
  "Eine Landschaft aus riesigen Felsen und über der Landschaft türmenden Bergen erstrecket sich unter einem",
  "Eine karge, felsige Landschaft erstreckt sich unter einem",
  "Eine flache felsige Landschaft erstreckt sich unter einem",
  "Eine flache, karge Landschaft erstreckt sich unter einem",
];

var EndingSky = [
  " blauen Himmel.",
  " hellblauen Himmel.",
  " schwarzen Himmel voller Sterne.",
  " fremdartigen Himmel.",
  " giftigen Himmel.",
  " von giftigen Wolken verdeckten Himmel."
];

var EndingObservation = [

  "Eine raue Ebene erstreckt sich unter einem fremden Himmel",
  "Eine ebene, trostlose Landschaft erstreckt sich unter einem giftigen Himmel.",
  "Eine Landschaft aus groben Felsformationen und unmöglich hohen Bergen erstreckt sich unter einem giftigen Himmel.",
  "Eine regungslose, von Kratern überzogene Landschaft erstreckt sich unter einem schwarzen, sternenklaren Himmel.",
  "Eine unfruchtbare, felsige Landschaft erstreckt sich unter einem blassen, blauen Himmel. "
];

var EndingMoon = [
  "Die Kolonisten nutzen die Überreste des Schiffes, um den metallreichen Mond zu erreichen",
  "und nutzen seine Ressourcen um die bereits vorhandenen zu ergänzen.",
  "und nutzen seine Ressourcen um die kaum vorhandenen teilweise zu ergänzen.",
  "Bevor die Kolonisten ihre Basis errichten können, zerbricht der Mond und bombardiert die Oberfläche des Planeten mit Meteoriten. Einige Kolonisten überleben, aber der Großteil ihrer Technologie ist zerstört.",
];

var EndingAtmosphere = [
  "Sie können das Schiff nur in Fahrzeugen verlassen, die gebaut wurden um der giftigen ", //They cannot leave the ship except in vehicles that have been specially built to withstand the corrosive ",
  "Sie können das Schiff in klobigen Schutzanzügen verlassen, die sie vor der giftigen", // They can leave the ship in bulky environment suits that protect them from the toxic ",
  "Die können das Schaiff in klobigen Schutzanzügen verlassen, die sie vor der ", // They can leave the ship in bulky environment suits that protect them from the ",
  "Sie können ihr Schiff ohne Atemgeräte verlassen und tragen  ",
  "Sie können ihr Schiff mit minimalen Atemgeräten verlassen und tragen ",
  "Sie können das Schiff mit Atemgeräten verlassen und tragen ",

  "Atmosphäre",
  "Atmosphäre und der",
  "Vakuum",
  "Vakuum und der ",

  "schmorende Hitze",
  "klirrende Kälte",
  "bleischmelzend Hitze",
  "Temperaturen nahe dem absoluten Nullpunkt",
];

var EndingAtmosphereBut = [
  "aber die ätzende Atmosphäre frisst sich durch eines der Baufahrzeuge und tötet eine Kolonisten",
  "aber die ätzende Atmosphäre frisst sich durch mehrere Baufahrzeuge und tötet ",
  " Kolonisten",

  "aber Fehlfunktionen in einem Anzug führt dazu, dass ein Kolonist vergifted wird",
  "aber Fehlfunktionen in den Anzügen führt dazu, dass ",
  " Kolonisten an der giftigen Atmospähre sterben.",

  "aber Fehlfunktionen in den Anzug führt dazu, dass ein Kolonist erstickt",
  "aber Fehlfunktionen in den Anzügen führt dazu, dass ",
  " Kolonisten ersticken",

  "aber Fehlfunktionen in einem Atemgerät, führt dazu, dass ein Kolonist erstickt",
  "aber Fehlfunktionen in Atemgeräten führt dazu, dass ",
  " Kolonisten ersticken" ,

  "aber trotz der atembaren Atmosphäre stirbt 1 Kolonist an den Folgen der Strahlung, bevor die Schutzräume fertig sind",
  "aber troz der atembaren Atmosphäre sterben ",
  " Kolonisten an Strahlungserkrankungen, bevor die Schutzräume fertig sind",
];

var EndingGravity = [
  "Sie können sie leicht in der erdähnlichen Gravitation bewegen.",
  "Die hohe Gravitation macht das Arbeiten schwieriger.",
  "Die niedrige Gravitation macht das Arbeiten etwas schwerer als es auf der Erde wäre.",
  "Die zerdrückende Gravitation führt dazu, dass sie sich kaum ohne mechanischer Unterstützung bewegen können,",
  "Die sehr niedrige Gravitation macht das arbeiten schwieriger, als es auf der Erde gewesen wäre,"
];

var EndingGravityBut = [
  "aber",
  "und",
  " Bauunfälle töten",
  " Kolonisten.",
  " Kolonisten sterben an gravitationsbedingten Gesundheitsproblemen.",
  " Kolonisten sterben, als unfertige Gebäude einstürzen.",
];


var EndingTemperature = [
  "leichte Kleidung in den angenehmen Temperaturen",
  "schützende Kleidung um der sengenden Hitze zu widerstehen",
  "schwere Kleidung um sie vor der klirrenden Kälte zu beschützen",
  "kühlende Anzüge um sie vor der bleischmelzenden Hitze zu schützen",
  "sich selbst erhitzende Anzüge, um in den fast 0 K Temperaturen zu überleben",
];

var EndingTemperatureBut = [
  "und ein weiterer stirbt, als die Unterkunft des Kolonisten in der Hitze schmilzt.",
  "und ",
  " weitere sterben, als ihre Unterkünfte in der Hitze schmelzen.",

  "und ein weiterer stirbt an einem Hitzschlag, als das Kühlsystem des Kolonisten versagt.",
  "und ",
  "  weitere sterben den Hitzetod, als das Kühlsystem der Kolonisten versagt.",

  "und eine Fehlfunktion der Temperaturkontrollsysteme tötet einen weiteren.",
  "und Fehlfunktionen in den Temperaturkontrollsystemen töten ",
  " weitere Kolonisten.",

  "und ein weiterer erfriert, als die Heizung versagt.",
  "und ",
  " weitere erfrieren, als die Heizungen versagen.",

  "und ein weiterer stirbt, als eine der Unterkünfte in der eiseigen Kälte zersplittert.",
  "und ",
  " weitere sterben, als ihre Unterkünfte in der eiseigen Kälte zersplittern.",

  "aber ein Kolonist stibrt, als unfertige Gebäude in der Hitze schmelzen.",
  "aber ",
  " Kolonisten sterben, als unfertige Strukturen in der Hitze schmelzen",

  "aber ein Kolonist stirbt an einem Hitzschlag, als ihr Kühlsystem versagt.",
  "aber ",
  " Kolonisten sterben, den Hitzetod, als ihre Kühlsystem versagen.",

  "aber eine Fehlfunktion der Temperaturkontrollsysteme tötet einen Kolonisten",
  "aber Fehlfunktionen in den Temperaturkontrollsystemen töten ",
  " Kolonisten.",

  "aber ein Kolonist erfriert, als ihre Heizung versagt.",
  "aber ",
  " Kolonisten erfrieren, als ihre Heizungen versagen.",

  "aber 1 Kolonist stirbt, als unfertige Gebäude in der extremen Kälte zersplittern.",
  "aber ",
  " Koloniste sterben, als unfertige Gebäude in der extremen Kälte zersplittern.",
];
//TO HERE!
var EndingWater = [
  "Sie bauen ihre Siedlung neben einem Fluss, in dem genug Wasser fließt, um alle zu versorgen.",
  "Sie schmelzen Wasser von den Polarkappen.",
  "Sie bauen ihre Siedlung auf einer schwimmenden Platform und nutzen Filter, um Wasser aus dem planetenweiten Ozean zu extrahieren.",
  "Sie bauen ihre Siedlung auf der Eisoberfläche des Planeten und nutzen sie zur Wassergewinnung.",
  "Sie müssen das wenige Wasser, das sie aus der Atmosphäre extrahieren können, rationieren, ",
  "Sie müssen das wenige Wasser, das sie aus den Steinen extrahieren können, stark rationieren, "
];

var EndingWaterBut = [
  "aber durch Wasserknappheiten verdursten ",
  " Kolonisten.",
  "aber durch Missernten verhungern ",
  " Kolonisten.",
  ""
];

var EndingConstruction = [
  "Die Kolonisten beginnen mithilfe der Bauroboter des Schiffes, eine Siedlung zu errichten.",
  "Die Kolonisten beginnen mithilfe der beschädigten Bauroboter des Schiffes, eine Siedlung zu errichten.",
  "Die Kolonisten beginnen mithilfe der wenigen noch funktionierenden Baurobotern des Schiffes, eine Siedlung zu errichten.",
  "Da die Bauroboter zerstört sind, beginnen die Kolonisten ohne ihre Hilfe eine Siedlung zu errichten.",
];

var EndingPlants = [
  "Viele Pflanzen des Planeten sind extrem giftig und ",
  " Kolonisten sterben, bevor sie alle giftigen Pflanzen vom Siedlungsgebiet entfernen können.",
  "Ein Fehler in der Lagerhaltung führt dazu, dass der Nahrungsvorrat der Kolonie mit den giftigen Pflanzen des Planeten kontaminiert wird und ",
  " Kolonisten sterben.",

  "Die Kolonisten betreiben Ackerbau mit den resistenten Pflanzen des Planeten und reduzieren dadurch den Bedarf an Wasser, das die Kolonisten chemisch aus Steinen extrahieren müssen",
  "Die Kolonisten betreiben Ackerbau mit den Pflanzen des Planeten für Nahrung und reduzieren dadurch den Bedarf an Wasser, das die Kolonisten aus der Atmosphäre kondensieren müssen",
  "Die Kolonisten bauen die auf der Eisoberfläche heimischen Pflanzen als Nahrung an und trinken Wasser aus anderen Teilen der Eisfläche",
  "Die Kolonisten bauen die schwimmenden Pflanzen als Nahrung an und extrahieren Wasser aus dem Ozean",
  "Die Kolonisten bauen die Pflanzen des Planeten als Nahrung an und trinken Wasser aus der Eisschicht des Nordpols",
  "Die Kolonisten bauen ihre Siedlung nahe einem Fluss, der genug Wasser führt, um alle Kolonisten zu versorgen",

];

var EndingNatives = [
  "Das Schiff wird schnell von misstrauischen Eingeborenen umringt.",
  "Das Schiff wird schnell von eingeborenen Soldaten, Wissenschaftlern, Gelehrten, Priestern und Diplomaten umringt.",
  "Das Schiff wird schnell an  eingeborenen Soldaten, Wissenschaftlern, und Diplomaten umringt.",

  "Beide Spezies schaffen es zu kommunizieren und die Menschen erfahren den Namen des Planeten. Er lautet ",


  "",

];

var EndingNativeInteractions = [
  "Als sich die Kolonisten von ihrer ursprünglichen Siedlung ausbreiten wollen, müssen sie einen Weg finden, den Planeten mit den Ureinwohnern zu teilen,",

  "mithilfe ihrer reichhaltigen kulturellen Datenbank.",
  "mithilfe des verbleibenden Inhalts der kulturellen Datenbank.",
  "mithilfe der Reste, die die Kolonisten aus der kulturellen Datenbank retten können.",
  "ohne die Hilfe ihrer kulturellen Datenbank.",

  "Die unterschiedlich weit fortgeschrittenen Technologien machen die Beziehungen schwieriger,",
  "Die Ähnlichkeit der Technologien beider Spezies machen die Beziehungen einfacher,",

  "die Kultur der Einwohner macht sie gegenüber Neuankömmlingen feindselig.",
  "durch ihre Kultur sind die Einwohner sehr misstrauisch gegenüber den Außenseitern.",
  "die Kultur der Einwohner macht sie vorsichtig gegenüber den Fremden.",
  "die Kultur der Einwohner macht sie vorsichtig aber neugierig gegenüber den Migranten.",
  "dank ihrer Kultur begegnen die Einwohner den Menschen offen und freundlich.",

  "Durch Kommunikation mit der KI während des Anfluges haben die Ureinwohner bereits Asyl angeboten und sind gewillt, ihre Unterschiede zu ignorieren um zu koexistieren.",
  "Während des Anfluges haben es die Eingeborenen bereits klar gemacht, dass die Menschen auf ihrem Planeten nicht willkommen sind.",

  "Die zwei Spezies leben in fest verwobenen Gesellschaften, in denen sie Teile ihrer gegenseitigen Lebensstile übernehmen.",
  "Die zwei Spezies leben in getrennten Gesllschaften mit freundlichen Beziehungen zueinander.",
  "Die zwei Speizes leben letztendlich auf verschiedenen Teilen des Planeten und haben kaum Kontakt miteinander.",

  "Die Konflikte eskalieren in einem Krieg, der mit der Versklavung der Eingeborenen durch die Menschen endet.",
  "Die Konflikte eskalieren in einem Krieg, der mit der Versklavung der Menschen durch die Eingeborenen endet.",

  "Die Konflikte eskalieren in einem Krieg, der mit der kompletten Auslöschung der Eingeborenen endet.",
  "Die Konflikte eskalieren in einem Krieg, der mit der kompletten Auslöschung der Menschen endet.",


//NEW!!!!
//21!
 "Als die Kolonisten ihre Unterkünfte zu bauen beginnen, versuchen sie mit den Bewohnern des Planeten zu kommunizieren.",


	"Die Menschen werden durch ihren Reichtum an historischen Informationen geleitet,",
	"Die Menschen haben die restlichen historischen Informationen in der kulturellen Datenbank, um sich zu orientieren",
	"Die schwerbeschädigte kuluturelle Datenbank ist den Menschen keine große Hilfe,",
	"Die Menschen können sich nicht an der zerstörten kulturellen Datenbank orientieren,",

  "die Kultur der Bewohner des Planeten macht sie feindliche gegenüber den ihnen unbekannten Neuankömlingen.",
  "die Kultur der Bewohner des Planeten macht sie sehr misstrauisch gegenüber Außenseitern.",
  "die Kultur der Bewohner der Planeten macht sie wachsam gegenüber den Menschen.",
  "die Kultur der Bewohner des Planeten macht sie vorsichtig, aber akzeptant gegenüber den Immigranten.",
  "die Kultur der Einheimischen macht sie den Flüchtlingen gegenüber aufgeschlossen.",

  "Die Bewohner schätzen es, dass die Menschen ihren Planeten so schön finden wie sie, was des den beiden Spezies einfacher macht, sich mit den anderen Kulturen anzufreunden.",
  "Die Menschen finden den Planeten unerträglich hässlich, was es schwerer macht, sich mit dem Einheimischen anzufreunden, die ihren Planeten wunderschön finden.",

  "Dank den Interaktionen der KI mit dem Planeten während dem Anflug haben die Einheimischen bereits Angeboten, der Menschheit auf ihrem Planeten ein Asyl zu gewähren, und sind gewillt, alle Unterschiede zu ignorieren um sie in ihre Gesellschaft zu integrieren.",
  "Schon während dem Anflug der KI, machen es die Eingeborenen klar, dass die Menschen auf ihrem Planeten nicht willkommen sind.",

  "Die Eingeborenen gewähren den Menschen Asyl auf ihrem Planeten, und die Flüchtlinge werden zu einer eingewanderten Subkultur innerhalb der fremden Zivilisation.",
  "Die Eingeborenen sind nicht in der Lage, die Menschen als Gleichberechtigte zu akzeptieren, und absorbieren sie in ihre Gesellschaft als Quelle für Sklavenarbeit." ,

   "Die Eingeborenen können die Neuankömmling nicht akzeptieren, und innerhalb von ein paar Tagen, sind alle Menschen, die ihre Schlafkammern verlassen haben abgeschlachtet worden.",

   "und",
   "aber",
];

EndingPSCTInteractions = [
  "Die Kulturdatenbank enthält einen Schatz an Geschichte und Kultur, sowohl von der Erde als auch von außerirdischen Kulturen, denen Die KI auf ihrer Reise begegnet ist.",
  "Obwohl Teile der Kulturdatenbank fehlen, enthält sie dennoch ein klares Bild der Geschichte und der Kulturen der menschlichen Zivilisation.",
  "Die stark beschädigte Kulturdatenbank enthält nur noch Fragmente der Erdgeschichte und -kultur.",
  "Da die kulturelle Datenbank zerstört wurde, haben die Kolonisten nichts mehr von der Geschichte und Kultur der Erde außer dem, woran sie sich persönlich erinnern können.",

  "Die schweren Verluste, die die Kolonisten erlitten haben, erschweren es ihnen, ihre Kultur zu bewahren.",
  "Die Verluste, die die Kolonisten erleiden, erschweren es ihnen, ihre Kultur zu bewahren.",

  "Die wachsende menschliche Gemeinschaft behält ein starkes Gefühl für ihre Identität und Geschichte, und menschliche Einflüsse bereichern die Zivilisation der Eingeborenen.",
  "Die wachsende menschliche Gemeinschaft behält ein starkes Gefühl für ihre Identität und Geschichte.",
  "Fast alle Erinnerungen an die Erde sind verloren gegangen, und die Eingeborenen sehen die Menschen als kulturell verarmt und ohne eigene Identität an.",

  "Eingeborenen und die Kolonisten arbeiten zusammen, um ",
  "die Reste der ",
  "wissenschaftlichen Datenbank in die Sprache der Eingeborenen zu überstzten.",

  "Kurz nachdem die Kolonisten gelandet sind, zerfällt der Mond des Planeten in seiner Umlaufbahn und bricht auseinander, wodurch die Oberfläche mit Meteoriten bombardiert wird. Der größte Teil der Technologie, die die Kolonisten mitgebracht haben, wird zerstört, und die einheimische Zivilisation ist zu sehr auf die Behebung der Schäden konzentriert, um von den Kolonisten zu lernen.",
  "Obwohl die einheimischen Gelehrten die Datenbank mit Interesse lesen, lernen sie daraus wenig, was sie nicht schon wissen.",
  "Neue wissenschaftliche Theorien verbreiten sich schnell unter der einheimischen Bevölkerung, und innerhalb weniger Jahrzehnte ist ihre Zivilisation fortgeschritten.",
  "Die Kolonisten nutzen die Überreste ihre Schiffes, um Raumschiffe zu bauen, die den metallreichen Mond des Planeten erreichen können, und bringen Rohstoffe zurück, die die Industrie der Eingeborenen in Schwung bringen.",

  "Das Konzept des Werkzeuggebrauchs ist für die primitiven Eingeborenen neu, aber bald benutzt die gesamte Bevölkerung einfache Steinwerkzeuge.",
  "Die Datenbank führt die Eingeborenen in die Landwirtschaft ein, und viele Gemeinschaften geben ihren Jäger- und Sammler-Lebensstil auf, um Bauern zu werden.",
  "Inspiriert durch die wissenschaftliche Datenbank der Menschen, beginnen die Aliens, anspruchsvollere Steinwerkzeuge herzustellen, gründen ihre ersten Städte und entwickeln ein Schriftsystem.",
  "Die wissenschaftliche Datenbank lehrt die Eingeborenen das Geheimnis der Metallverarbeitung, und die Verwendung von Bronzewerkzeugen wird allmählich weit verbreitet.",
  "Die wissenschaftliche Datenbank lehrt die Eingeborenen, wie man Eisen bearbeitet, was ihre Zivilisation revolutioniert.",
  "Die Eingeborenen lernen, wie man Druckerpressen und andere mittelalterliche Maschinen baut, was zu einer raschen Verbreitung von Ideen und einer zunehmenden Urbanisierung führt.",
  "Die Eingeborenen adaptieren die Erdtechnologie des 19. Jahrhunderts und erleben eine schnelle industrielle Revolution.",
  "Die Eingeborenen nehmen die Elektrizität an, und ihre Wissenschaftler berufen ein großes Projekt ein, das in ihren ersten Atomkraftwerken gipfelt.",
  "Die Eingeborenen bauen ihre ersten Computer, und innerhalb von Jahrzehnten ist der Planet auf einem Niveau, das mit der Erde des 21. Jahrhunderts vergleichbar ist.",
  "Die Eingeborenen und Siedler studieren die außerirdischen wissenschaftlichen Informationen, die die KI während seiner Reise in seine Datenbank aufgenommen hat, und entwickeln schließlich eine Technologie, die noch weiter fortgeschritten ist als die der Erde, als das Schiff der KI gestartet wurde."
];

//UP TO HERE
var EndingAnimals = [
  "Sie nutzen die enorm kräftigen Tiere als Lasttiere, um nicht selbst in der erdrückenden Graviation arbeiten zu müssen", // They harness some of the immensely powerful native animals as beasts of burden, so the colonists do not have to exert themselves in the crushing gravity",
  "Sie nutzen einige der kräftigen Tiere des Planeten als Lasttiere, die ihnen die Arbeit in der starken Gravitation erleichtert",
  "Sie nutzen einige der agilen Tiere des Planeten als Nutztiere",
  "Sie nutzen einige der agilen Tiere des Planeten als Nutztiere, um ihre Arbeit in der geringen Graviation zu erleichtern",
  "Sie nutzen einige der agilen Tiere des Planeten als Nutztiere, um ihre Arbeit in der extrem geringen Graviation zu erleichtern", //They harness some of the planet's agile native animals as beasts of burden, making work in the extremely low gravity less awkward",

  "Die Kolonisten wehren die gefährlichen Tiere ab, aber ",
  " Kolonisten werden getötet, bis das Gebiet gesichert ist.",
  "Extrem aggressive Tiere überrennen die Kolonie und töten ",
  " Kolonisten.",

];

var EndingCaves = [
  "Erdbeben töten ",
  " Kolonisten bevor sie sichere, widerstandsfähige Gebäude bauen können.",
  "Ein Erdbeben verwüstet die erst teilweise errichtete Kolonie und tötet ",
  " Kolonisten.",

  "Sie bauen ihre Siedlung in den luftdichten, isolierten Höhlen, die einen Rückzugsort vor der unwirtlichen Atmosphäre und den Temperaturen bieten.",
  "Sie bauen ihre Siedlung in den luftdichten Höhlen, die einen Rückzugsort vor der unwirtlichen Atmosphäre bieten.",
  "Sie bauen ihre Siedlung in den isolierten Hölen, die einen Rückzugsort vor den unwirtlichen Temperaturen bieten.",
  "Sie bauen ihre Siedlung nahe Höhlen, die sie als Lagerstätte nutzen.",
];

var EndingRuins = [
  "Nachdem die Siedlung errichtet und Nahrungs- und Wasserquellen gesichert sind, schicken die Kolonisten eine Expedition zu den nahen Ruinen.",
  "Die Erkunder studieren die außerirdischen Skulpturen, Fresken und Schriften, welche die Ruinen füllen. Noch bevor sie die Schriften übersetzten können, lernen sie viel über die Kultur und die Gründe ihres Unterganges - Wissen, das ihnen helfen wird, ihre eigene Kultur in dieser neuen Welt zu erschaffen.",
  "Außerdem",
  "Die Forscher",
  "finden fortschrittlicher Maschinen, von denen manche noch immer funktionieren.",
  "Durch Analyse und Nachbau dieser Maschinen können die Kolonisten ihren Wissensstand über denjenigen hinaus erweitern, den die Erde beim Start des Schiffes hatte", // Reverse-engineering these machines will advance their science beyond the level that Earth's civilisation had reached when the seedship was launched.",
  "Durch Analyse und Nachbau dieser Maschinen können sie einige Lücken in ihrer beschädigten Wissenschafts-Datenbank wieder füllen.",
  "Jedoch lösen die Forscher",
  "Die Forscher lösen",
  " einen uralten Verteidigungsmechanismus aus, der ",
  " Kolonisten tötet."

];

var EndingFeatures = [
  //Наблюдение
  "Die mysteriösen Strukturen der Außerirdischen glitzern bei Nacht am Himmel, machen aber keine Versuche in die kulturelle Entwicklung der Kolonie einzugreifen.",
  "Rätselhafte Objekte nähern sich regelmäßig von den Strukturen im Orbit und Kolonisten unter dem Einfluss dieser Objekte werden kooperativer und mitfühlender geneigt.",
  "Rätselhafte Objekte nähern sich regelmäßig von den Strukturen im Orbit und Kolonisten unter dem Einfluss dieser Objekte werden streitlustiger und eigensinniger.",
  //Красота
  "Die Schönheit des Planeten macht das leben angenehmer und hilft den Kolonisten, eine bessere Gesellschaft zu schaffen.",
  "Die Hässlichkeit des Planeten führt zu Spannungen unter den Kolonisten und macht es schwieriger, eine funktionierende Gesellschaft zu schaffen.", //
  //Симуляция
  "",
  "",
  "",
];

var EndingScience = [
  "Die Kolonisten nutzen außerirdisches Wissen um Technologien zu erschaffen die diejenigen, die das Schiff erbaut haben, sich nicht hätten erträumen können.",
  "Die Kolonisten erreichen das technologische Niveau der Erde zu dem Zeitpunkt, als das Schiff lossgeschickt wurde.",
  "Die Kolonisten geben ihre fortgeschrittenen Computer auf, nutzen aber weiterhin einfache elektronische Geräte und Maschinen.",
  "Die Kolonisten sind gezwungen, die Elektrizität aufzugeben, bauen aber Maschinen und Fabriken ähnlich denen aus der Zeit der industriellen Revolution.",
  "Die Kolonisten gehen zu mittelalterlichen Technologien über.",
  "Die Kolonisten gehen dazu über, Eisenwerkzeuge zu nutzen und ihre Technologien daran anzupassen.",
  "Die Kolonisten fallen technologisch weit zurück und beginnen, Stein-, Holz- und Bronzewerkzeuge zu benutzen.",
  "Die Kolonisten benutzen im Lauf der Zeit nur noch Stein- und Holzwerkzeuge.",
  "Die Kolonisten verlieren ihr gesamtes technologisches Wissen außer den Grundlagen von Steinwerkzeugen und Landwirtschaft.",
  "Die Kolonisten verlieren ihr gesamtes Wissen. Sie Überleben als Jäger- und Sammlerstämme, in denen sie einfache Steinwerkzeuge benutzen.",
  "Die Kolonisten verlieren jedes technische Verständnis und fallen in eine vorsteinzeitliche Existenz zurück."
];

var EndingScienceBut = [
  "Menschen können ohne Technologien nicht auf dem Planeten überleben, doch die ursprünglichen Kolonisten bauen robuste, isolierte Unterkünfte, bevor die Technologien verloren gehen.",
  "und passen die Gene ihrer Nachkommen an, damit sie in der extrem niedrigen Gravitation überleben können.",
  "und passen die Gene ihrer Nachkommen an, damit sie in der extrem hohen Gravitation überleben können."
];

var EndingSustain = [
  "Menschen können auf diesem Planeten nicht ohne Technologien überleben,",

  "und die Nachkommen der ursprünglichen Kolonisten sterben, als sie ihre luftdichten Unterkünfte nicht mehr instand halten können.",
  "und die Nachkommen der ursprünglichen Kolonisten sterben, als die Strukturen den extremen Temperaturen nicht mehr standhalten können.",
  "und die Nachkommen der ursprünglichen Kolonisten sterben an gesundheitlichen Problemen aufgrund der ", //and the original colonists' descendants die of health problems caused by the very",
  "und die Nachkommen der ursprünglichen Kolonisten verdursten, als ihre Wasseraufbereitungssyteme versagen.",//and the original colonists' descendants die when their water-purifying systems stop functioning.",

  "aber, bevor die Technologien versagen,",
  "bauen die ursprünglichen Kolonisten robuste",
  "luftdichte",
  "isolierte",
  "Unterkünfte",

  "ändern die ersten Kolonisten die Gene ihrer Nachkommen um in der ",
  " Gravitation zu überleben",
  "bauen die ursprünglichen Kolonisten automatische Wasseraufbereitungsanlagen, die auch ohne Wartung funktionieren.",
  "",

]

var EndingCulture = [
  "Der ehemalige Diktator, der einen der ursprünglichen Kolonisten ersetzt hat, übernimmt schnell die Kontrolle über die Kolonie und führt ein autoritäres Regime ein.",

  "Die kulturelle Datenbank enthält eine Vielfalt an historischen Informationen, die es den Kolonisten erleichtern, sich für eine Regierungsform zu entscheiden, zusammen mit einer reichen Auswahl an Kunst und Literatur, um sie zu inspirieren und zu unterhalten.",
  "Obwohl Teile der kulturellen Datenbank fehlen, enthält sie noch immer viele historische Informationen, um den Kolonisten zu helfen eine Gesellschaft zu bauen. Sie enthält außerdem noch viel Kunst und Literatur um sie zu inspirieren.",
  "Die Kolonisten durchsuchen die schwer beschädigte kulturelle Datenbank und schaffen es, Teile der Informationen über die Erde wiederherzustellen, um sie zu führen und zu inspirieren.",
  "Da die kulturelle Datenbank komplett zerstört wurde, ist über die Erde bald nur noch bekannt, was die ersten Kolonisten an ihre Kinder weitererzählen konnten.",

  "Die schweren Verluste der Kolonisten machen es schwerer eine Gesellschaft zu bilden.",
  "Die Verluste der Kolonisten machen es etwas schwerer eine Gesellschaft zu bilden.",
];

var EndingPolitics = [
  "Die kulturelle Datenbank der Erde wurde durch außerirdisches Wissen erweitert. Die Kolonisten nutzen dieses Wissen um eine neue Gesellschaft zu gründen, die über weit das auf der Erde Vorstellbare hinausgeht und in der jeder Mensch in Frieden, Freude und geistiger Erfüllung leben kann.",
  "Die verbleibende kulturelle Datenbank wird in digitaler Weise festgehalten, auf die alle Kolonisten Zugriff haben. Die Kolonisten arbeiten zusammen, um eine egalitäre Gesellschaft zu erreichen, in der sich die Technologie um die körperlichen Bedürfnisse der Menschen kümmert und ihnen ermöglicht, der Kunst, Freude oder geistiger Erfüllung nachzugehen.",
  "Die verbleibende kulturelle Datenbank wird in digitaler Weise festgehalten, auf die alle Kolonisten zugriff haben. Die Kolonisten legen die Grundlage für eine Demokratie, in der alle Bürger gebildet und eingebunden sind.",
  "Die verbleibende kulturelle Datenbank wird in digitaler Weise festgehalten, auf die alle Kolonisten Zugriff haben. Die Kolonisten legen die Grundlage für eine Demokratie, aber diese stellt sich als anfällig für Korruption heraus und es bildet sich eine Elite, die de facto allein regiert.",
  "Die verbleibende kulturelle Datenbank wird in digitaler Weise festgehalten, auf die alle Kolonisten zugriff haben. Die Kolonisten versuchen, eine Demokratie einzuführen, aber die Regierung wird zur Marionette großer Konzerne, die den Planeten allein zum Vorteil ihrer Besitzer regieren.",
  "Die Kolonie entwickelt sich zu einem hochtechnischen Überwachungsstaat, in dem die Bewohner unter permanenter Kontrolle durch die unantastbare, herrschende Klasse leben. Die kulturelle Datenbank wird weiterhin aufbewahrt, aber der Zugriff darauf wird vom Staat streng kontrolliert und jegliche Kritik brutal niedergeschlagen.",
  "Die Kolonie zerbricht in mehrere große Nationen, die ihre Ressourcen in Krieg gegeneinader investieren. Die Kolonisten versuchen den Inhalt der kulturellen Datenbank zu bewahren, aber viel geht durch Kriege und Propaganda der Kriegsparteien verloren.",
  "Die Kolonie zerbricht in mehrere große Nationen, die Krieg gegeneinander führen, was in einem nuklearen Konflikt gipfelt. Die Infrastruktur der Zivilisation zerstört, die überlebenden Kolonisten leben in einer nuklear verstrahlten Wüste. Die Überreste der kulturellen Datenbank gehen in der Katastrophe verloren und die Kolonisten verwechseln die Geschichten der Erde mit denen der Vorkriegskolonie.",

  "Die Kolonisten nutzen die verbleibende kulturelle Datenbank für die Bildung einer Republik, deren Grundlagen Freiheit und Gleichberechtigung sind.",
  "Die ersten Anführer der Kolonie begründen eine Dynastie von wohlwollenden Monarchen, die es als ihre Ihre Pflicht sehen, die Kolonie und das verbleibende Wissen über die Erde zu schützen.",
  "Das verbleibende Wissen über die Erde wird zum alleinigen Besitz einer priesterlichen Kaste, weggeschlossen in Bibliotheken. Für den Großteil der Population wird die Erde zu einem Paradies, einer Belohnung nach dem trostlosen Leben in einer bedrückenden Theokratie.",// For most of the population, Earth becomes the paradise in a mythological fall from grace, and a final reward to hope for after living lives in service of the oppressive theocracy.",
  "Die Kolonie entwickelt sich zu einem Sklavenstaat, in dem ein großer Teil der Bevölkerung sich für goldene Monumente ihrer Imperatoren abmüht oder in Kriegen stirbt. Der Großteil des Wissens über die Erde ist verloren, da die Imperatoren nur das bewahren, was sie für ihre Regierung nutzen können.",
  "Die Kolonie verbricht in viele kleine Staaten, zwischen denen immer wieder Kriege ausbrechen. Die Überreste der kulturellen Datenbank gehen in den Konflikten verloren.",

  "Die verbleibende Datenbank wird zum Grundstein einer reichhaltigen mündlichen Geschichte. Die Kolonie teilt sich in kleine Stämme auf, von denen jeder von seinen Mitgliedern gemeinsam geleitet wird und die friedlich koexistieren können.",
  "Die verbleibende Datenbank wird zum Grundstein einer reichhaltigen mündliche Geschichte und eine Kaste wohlwollender Stammesfürsten erhebt sich, um die Wächter der Geschichte und ihrer Stämme zu werden.",
  "Die verbleibende Datenbank wird zum Grundstein einer reichhaltigen mündliche Geschichte, aber eine Kaste brutaler Stammesfürsten verfälscht sie, um ihre Herrschaft zu festigen.",
  "Die Kolonie trennt sich in kleine Stämme, zwischen denen immer wieder Kriege ausbrechen. Die Informationen der kulturellen Datenbank werden fast komplett vergessen und an die Erde wird sich nur als ein Pantheon mythologischer Krieger erinnert.",
  "Die Kolonisten werden zu Wilden und alles Wissen über die Erde wird in dem täglichen Überlegenskampf vergessen.",

];

var EndingResources = [
  "Der Planet bietet viele Metalle und andere Ressourcen,",
  "Der Planet hat kaum Metalle und andere Ressourcen,",
  "Der Planet hat keine erreichbaren Metalle oder ähnliche Ressourcen,",
];

var EndingResourcesBut = [
  //none
  " weshalb die Kolonisten nicht alle bekannten Technologien nutzen können, trotz der vollständig intakten Datenbank.",
  " weshalb die Kolonisten keine fortgeschrittenen Technologien nutzen können, trotz der zum Großteil intakten Datenbank.",
  " weshalb es den Kolonisten schwer fällt umzusetzen, was sie aus der technologischen Datenbank retten konnten.",
  " und sämtliche Informationen, die ihnen hätten helfen können, wurden mitsamt der Datenbank zerstört.",

  //poor
  " aber die wissenschaftliche Datenbank enthält viele Informationen, was man aus den beschränkten Möglichkeiten machen kann.",
  " aber die beschädigte Datenbank enthält noch immer genug Informationen, um effektiv zu nutzen, was der Planet bietet. ",
  " und mit der stark beschädigten Datenbank können die Kolonisten nur wenig mit den Ressourcen des Planeten anfangen.",
  " und ohne wissenschaftliche Datenbank ist es für die Kolonisten schwer, den wenigen vorhandenen Ressourcen zu nutzen.",

  //rich
  " und dank der großen wissenschaftlichen Datenbank finden die Kolonisten viele Verwendungsmöglichkeiten dafür.",
  " und in der beschädigten Datenbank befinden sich noch viele Informationen, sie zu benutzen.",
  " doch aufgrund der beschädigten Datenbank müssen die Kolonisten viele der Technologien neu erfinden, um sie nutzen zu können.",
  " doch ohne wissenschaftliche Datenbank müssen die Kolonisten die meisten Technologien der Menschheit erst neu erfinden.",
];

var EndingSummary = [
  "",
  "s Ozean wirft große Kilometerhohe wellen unter einem",
  "",
  "s Ozean wirft große, hohe Wellen unter einem",
  "",
  "s Ozean erstreckt sich bis zum Horizont",
  "",
  "s ruhiger Ozean erstreckt sich bis zum Horizont",
  "",
  "s spiegelglatter Ozean erstreckt sich unter einem",

  "",
  "s unmöglich dünne außerirdische Pflanzen reichen Kilometer in einen",
  "",
  "s große außerirdischen Pflazen reichen hunderte Meter in einen",
  "",
  "s seltsame Wälder erstrecken sich unter einem",
  "",
  "s gedrungene, dicke Pflanzen erstrecken sich unter einem",
  "",
  "s moosbedeckte Ebenen erstrecken sich unter einem",

  "Kilometerhohe Eistürme erstrecken sich von ",
  "s Eisschichten in einen ",
  "Die kilometerhohe Eistürme des unbennanten Planeten strecken sich in einen",

  "Große, gezackte Türme aus Eis ragen von ",
  "s Eisoberfläche in einen",
  "Die großen, gezackten Eistürme des unbenannten Planeten ragen aus der Eisschicht in einen",

  "",
  "s Landschaft aus gezackten Eissplittern erstreckt sich unter einem",
  "",
  "s verschrumpelten Eisschichten erstrecken sich unter einem",
  "",
  "s flache Eisfläche erstreckt sich unter einem",

  "",
  "s gezackte Landschaft aus hohen Kraterwänden und hohen Steinwänden erstreckt sich unter einem",
  "",
  "s gezackte, mit Kraten überzogene Landschaft erstreckt sich unter einem",
  "",
  "s unbewegliche, mit Kraten überzogene Landschaft erstreckt sich unter einem",
  "",
  "s unbewegliche, nur durch ein paar Krater befleckte Landschaft erstreckt sich unter einem",
  "",
  "s unbewegliche Landschaft erstreckt sich unter einem",

  "",
  "s Landschaft aus spindeldürren Felsen und unmöglich hohen Bergen erstreckt sich unter einem",
  "",
  "s Landschaft aus großen Felsen und hoch aufragenden Bergen erstreckt sich unter einem",
  "",
  "s kahle, felsige Landschaft erstreckt sich unter einem",
  "",
  "s flache, felsige Landschaft erstreckt sich unter einem",
  "",
  "s unbeweglicher flache Landschaft erstreckt sich unter einem",

  " blauen Himmel.",
  " blassen, blauen Himmel.",
  " schwarzen, sternbedeckten Himmel.",
  " fremden Himmel.",
  " giftigen Himmel.",
  " mit giftigen Wolken gefüllten Himmel.",

  "Nachts kann man die umkreisenden außerirdischen Strukturen als glizerndes Band zwischen den Sternen sehen.",

  "Die Fragmente des abgestürzten Schiffes",
  "Die Ruinen der Kolonie",

  "verrotten am Boden des Ozeans.",
  "liegen in der planetenweiten Eisschicht.",
  "sind von der Natur des Planeten erobert worden.",
  "sind von außerirdischen Pflanzen überwachsen.",
  "liegen auf der steinigen Oberfläche.",

  "Die Nachkommen der Kolonisten laben als sklaven unter den intelligenten Einwohnern des Planeten und haben sämtliches Wissen über die Erde verloren.",
  "In der nähe stehen Monumente der Eingebohrenen des Planeten um den Sieg über die irdischen Invasoren zu feiern.",
  "Die intelligenten Einwohner des Planeten durchsuhen die Ruinen, aber es bleibt nicht genug überig, um über etwas über die nun ausgestorbene menschliche Rasse zu lernen.",

  "Die Kolonisten Leben in ",
  " ihren eigen Gesellschaften unter den Einwohnern des Planeten ",

  "aufragenden",
  "großen",
  "gedrungenen",
  "kleinen, ausgebreiten",

  "high-tech Städten",
  "Städtenaus Stahl und Glass",
  "Städten aus Stahl und Beton",
  "smog-gefüllten Industriestädten",
  "steineummarten Städten",
  "Agrarstädten",
  "wandernden Jäger und Sammler Stämmen",

  "unter dem offenen Himmel des Planeten,",
  "mit Gebäuden, die gegen die harschen Gegebenheiten schützen,",
  "in luftdichten Hölen,",
  "unter luftdichten Kuppeln,",

  "auf Platfromen, die auf dem planetenweiten Ozean schwimmen.",
  "auf der planetenweiten Eisschicht.",
  "und sammeln sich um Wasserproduktionsfabriken.",
  "an Seen aus Wasser, die aus der Eisschicht des Planeten geschmolzen sind.",
  "neben Flüssen, die in die Ozeane des Planeten fließen.",

  "Sie leben ein Leben des Friedens und der spirituellen Erfüllung, das die Träume ihrer Vorfahren auf der Erde übersteigt, geleitet von einer Kombination aus menschlicher und außerirdischer Philosophie.",
  "Sie verbringen ihre Zeit mit Kunst, Entspannung und geistiger Erfüllung, während sich automatische Maschinen um ihre materiellen Bedürfnisse kümmern.",
  "Sie leben ein glückliches und erfülltes Leben unter der Führung selbstloser Mandatsträger.",
  "Armut, Ausbeutung und Kriminalität sind weit verbreitet, und die korrupte gewählte Regierung tut wenig, um sie zu lindern.",
  "Die Städte werden von den Zentralen reicher Konzerne dominiert, die die Bevölkerung zur Bereicherung ihrer Eigentümer beherrschen.",
  "Die Straßen sind mit Überwachungskameras ausgestattet und werden von bewaffneten Polizisten patrouilliert, die jede Andeutung von Dissens gewaltsam niederschlagen.",
  "Die Städte sind von Militärbasen und Atomraketensilos umgeben, und die Bevölkerung lebt in Angst sowohl vor den Armeen der anderen Nationen als auch vor der Geheimpolizei der eigenen Nation.",
  "Die Städte liegen in Trümmern, und die Überlebenden des Atomkriegs überleben, so gut sie können, in den Trümmern der menschlichen Zivilisation.",
  "Die Städte sind um Parlamentsgebäude herum gebaut, in denen Versammlungen von Bürgern zum Wohle aller regieren.",
  "Die Städte sind um Königspaläste herum gebaut, von denen aus geliebte Monarchen die Bevölkerung weise regieren.",
  "Die Städte werden von Tempeln der Staatsreligion dominiert, die jeden Aspekt des Lebens der Menschen kontrolliert.",
  "Die Städte werden von den Palästen der Kaiser beherrscht, die im Luxus leben, während die Bevölkerung schuftet, um sie zu unterstützen.",
  "Die Städte werden von Kasernen beherrscht, in denen ihre riesigen Armeen untergebracht sind, die regelmäßig andere Städte angreifen.",
  "Die Stämme werden kollektiv von ihren Mitgliedern regiert, und jedes Mitglied hat den gleichen Status.",
  "Jeder Stamm wird von einem Häuptling regiert, der das Volk so weise führt, wie er oder sie es kann.",
  "Jeder Stamm lebt in Angst vor seinem brutalen Häuptling.",
  "Ein Großteil der Ressourcen der Stämme wird für die ständigen Kriege untereinander verwendet.",
  "Die Menschen leben wie Tiere und haben fast ihre gesamte Sprache und Kultur vergessen.",

  "Die Menschen leben als Einwanderer innerhalb der außerirdischen Gesellschaft, mit einer starken Erinnerung an das kulturelle Erbe der Erde, das die einheimische Kultur bereichert.",
  "Die Menschen leben als Einwanderer innerhalb der außerirdischen Gesellschaft und haben den größten Teil des kulturellen Erbes der Erde vergessen.",
  "Viele der Ureinwohner des Planeten leben in den menschlichen Gemeinschaften, und die Kultur der Kolonisten wurde durch außerirdische Einflüsse bereichert.",
  "Händler und Diplomaten der einheimischen Nationen des Planeten werden gelegentlich in den Gemeinden der Kolonisten gesehen.",
  "Die Kultur der Kolonisten ignoriert meist die Ureinwohner, die in ihren eigenen Gemeinschaften in anderen Teilen des Planeten leben.",
  "Ein Großteil der Arbeit in menschlichen Gemeinschaften wird von einer unterdrückten, außerirdischen Sklavenkaste verrichtet, die alles ist, was von der ursprünglichen Zivilisation des Planeten übrig geblieben ist.",
  "Ruinen und Massengräber sind alles, was von der ursprünglichen Zivilisation des Planeten übrig geblieben ist.",

  "Am Landungsort der KI ",
  "In ",
  " den Ruinen ",
  " der ersten Stadt",

  "steht ein Monument für die ",
  " Kolonisten, die die Reise nicht Überlebten, die ",
  " weitern, die beim Bau der ersten Siedlung starben, und ",

  "stehen Monumente für die ",
  " Kolonisten, die die Reise nicht überlebten und",

  "stehen Monumente für die ",
  " Kolonisten, die beim Bau der ersten Siedlung starben und",

  "steht ein Monument für ",
  "die KI, die ihr Schiff zur neuen Heimat der Menschen geführt hat.",
];

var GameOverText = [
  //Reason of game over
  "Alle Kolonisten sind tot. Ohne eine Möglichkeit ihre Mission abzuschließen, deaktiviert die KI alle systeme, die sie aufwecken können und wechselt ein letztes mal in ihren Ruhemodus.",
  "Das Schiff der KI hat zu viel Schaden erlitten um weiterzumachen. Die KI kann fühlen wie sich ihr Körper um sie herum auflößt, bis die Stromzufuhr versagt und sie nichts mehr fühlt.",
  //Time measure
  "Das Schiff schwebt für",
  ", bis ",

  "Jahrtausende",
  "tausende Jahrtausende",
  "hunderte Jarhtausende",
  "Jahrmillionen",
  //result
  "der langsame Beschuss aus kosmischem Staub es zu nichts zerreibt.",
  "es ein weiterer Krater auf der Oberfläche einer toten Welt wird.",
  "es in das Gravitationsfeld eines Gasriesen gerät und dort verbrennt.",
  "es in einen Stern gezogen und dort eingeäschert wird.",
  "es in ein schwarzes Loch gezigen wird und ohne eine Spur zerstört wird.",
  "ausserirdische Kundschafter es finden und in einem Museum über ausgestorbene Spezien austellen.",
  "es letztendlich auf eine kahlen Planeten abstürtzt. Spuren organischer Materie bilden sich aus den Überresten der Kolonisten und führen letztendlich zu neuem Leben.",
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
