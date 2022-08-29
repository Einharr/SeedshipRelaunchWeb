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
  "Die Sensoren der Sonde",
  "bestätigen die Ergebnisse der Orbitalscanner.",
  "ergänzen die fehlenden Daten, die die Orbitalscanner nicht sammeln konnten.",
  "Die Mission der Sonde ist abgeschlossen und sie schaltet sich ab."
];

var ProbingMoon = [
  "Während die Sonde sich dem Planten nähert, scannt sie den Mond des Planeten, aber kann keine nützlichen Mineralien entdecken.",
  "Während die Sonde sich dem Planten nähert, scannt sie den Mond des Planeten, und kann viele nützliche Mineralien entdecken.",
  "Während die Sonde sich dem Planten nähert, scannt sie den Mond des Planeten, und bemerkt, dass es ein Asteorid ist, welcher in der Umlaufbahn des Planeten gefangen wurde. In ein paar Jahrzenten wird er nah genug an den Planeten kommen, um zu zerbrechen und die Oberfläche mit seinen Bruchstücken zu bombadierenden.",
];

var ProbingBeauty = [
  "Die KI vergleicht Bilder des Planeten mit ihrer ästhetischen Datenbank und entscheidet, dass die Menschen diese Welt als außerordentlich schön betrachten werden.",
  "Die KI vergleicht Bilder des Planeten mit ihrer ästhetischen Datenbank und entscheidet, dass die Menschen diese Welt als außerordentlich hässlich betrachten werden."
];

var ProbingCaves = [
  "Die Oberfläche des Planeten ist mit einem riesigen Hölennetzwerk durchzogen, welche sich leicht versiegeln lassen, um luftdichte Unterkünfte zu bieten.",
  "Die Oberfläche des Planeten ist mit einem riesigen Hölennetzwerk durchzogen, die von den Temperaturen auf der Oberfläche isoliert sind.",
  "Der Planet ist geologisch instabil und hat gefährliche Erdbeben überall auf der Oberfläche.",
];

var ProbingPlants = [
  "Die Sonde findet einige außerirdische Pflanzen. Sie nimmt eine Probe und findet heraus, dass sie für Menschen ungenießbar ist.",
  "Die Sonde findet einige außerirdische Pflanzen. Sie nimmt eine Probe und findet heraus, dass Menschen sie essen können.",
  "Die Sonde findet einige außerirdische Pflanzen. Sie nimmt eine Probe und findet heraus, dass sie für Menschen hochgiftig ist.",
];

var ProbingAnimals = [
  "Die Sonde begegnet vielen Tieren. Nachdem sie ihre Verhaltensmuster analysiert hat, schließt sie, dass sie für Menschen weder nützlich noch gefährlich sind.",
  "Die Sonde begegnet vielen Tieren. Nachdem sie ihre Verhaltensmuster analysiert hat, schließt sie, dass sie für Menschen als Nutz- oder Lasttiere gehalten werden können.",
  "Die Sonde begegnet vielen Tieren. Nachdem sie ihre Verhaltensmuster analysiert hat, schließt sie, dass sie den Menschen gefährlich werden können.",
];

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "Die Sonde bemerkt eine Spezies, welche ein komplexes Sozialverhalten und eine rudimentäre Sprache besitzt.",
  "Die Sonde bemerkt eine Spezies, welche ein komplexes Sozialverhalten und simple Steinwerkzeuge benutzt.",
  "Die Sonde bemerkt eine Spezies, welche sowohl ein komplexes Sozialverhalten gebildet hat, als auch fortgeschrittene Steinwerkzeuge benutzt und eine Agrikultur besitzt.",
  "Die Drohne untersucht eine Gegend mit regelmäßigem Pflanzenwachstum und bemerkt, dass diese Pflanzen von einer Spezies mit fortgeschrittenen Steinwerkzeugen angebaut werden.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies mit Stein und Bronzewerkzuegen ist.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies mit Eisenwerkzuegen ist.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies ist, welche mittelalterlichen Technologien benutzt.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies ist, welche industrielle Technologien benutzt.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies ist, welche Technologien benutzt, die unserem Atomzeitalter entsprechen.",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies ist, welche Technologien benutzt, die unserem Informationszeitalter entsprechen",
  "Die Drohne untersucht ein paar der Strukturen, welche die KI aus dem Orbit gesehen hat, und findet heraus, dass es Siedlungen einer intelligenten Spezies ist die den Menschen weit vorraus ist.",

];

var ProbingCulture = [
  "Die Einwohner leben ohne soziale Organisation in einem Zustand konstanter Gewalt.",
  "Die Einwohner leben in Stämmen, die konstant im Krieg miteinander sind.",
  "Die Einwohner leben in Stämmen, die meist von von gnadenlosen Stammesfürsten regiert werden.",
  "Die Einwohner leben in Stämmen, die meist von von wohlwollenden Stammesfürsten regiert werden.",
  "Die Einwohner leben in Stämmen, die meist von allen Mitgliedern geleitet werden und in Frieden mitenander Leben.",
  "Die meisten Einwohner leben in kleinen Nation und benutzen den großteil ihrer Resourcen um gegeneinander zu bekämpfen.",
  "Der Großteil der Population lebt als Sklaven unter uneingschränkten Herrschern.",
  "Die größten Nationen werden von Priesterkönigen regiert, welche Wissen genau kontrollieren und den Großteil der Population ungebildet lassen.",
  "Die größten Nationen werden von wohlwollenden Monarchen regiert, welche es als ihre Pflicht sehen, sich um ihre Untertanen zu kümmern.",
  "Die fortgschritesten Nationen sind Republiken, in welchen die meisten Entescheidungen von allen Bürgern getroffen werden.",
  "Die Ziviliastion hat einen Atomkrieg hinter sich, die Überlebenden versuchen in den Ruinen der einst so großen Städte zu Überleben.",
  "Der Planet ist unter mehreren Supermächten aufgeteilt, welche in einem Zustand konstanter Spannung leben",
  "Die fortgeschrittensten Nationen sind Diktaturen, welche ihre Macht ausschlißlich dazu benutzten, ihre Bevölkerung zu Überwachen und in Schach zu halten.",
  "Der Planet wird von meheren nationenübergreifenden Firmen kontrolliert, welche die Rolle der Regierungen Übernommen haben.",
  "Die mächtigesten Nationen des Planeten sind auf dem Papier Demokratien, allerdings unternehmen die Anführer wenig um die Lebensqualität zu verbessern.",
  "Die mächtigesten Nationen sind gut funktionierende Demokratien, in denen Jeder eine guten Lebensstandard genießen kann.",
  "Die Gesellschaft führt ein Leben der Kultur und Leidenschaft, während Roboter sich um ihre körperlichen Bedürfnisse kümmern.",
  "Die Sonde kann nichts aus der Kulture der Einwohner schließen, da sie nicht wie irgendetwas ist, das die Erde je gesehen hat.",
];

var ProbingCiv = [
  "Die Sonde überfliegt den ganzen Planeten und sieht Sieldungen und Zeichen intelligenter Aktivität auf dem ganzen Planeten. Es scheint keinen Ort zu geben, and den die Einwohner des Planeten noch nicht waren.",
];

var ProbingRuins = [
  "Die Sonde untersucht ein paar der möglichen Strukturen, welche das Schiff aus dem Orbit entdeckte und findet heraus, dass sie Überreste einer verschwundenen Zivilisation sind. Die Ruinen beinhalten große Monumente und Schriften, welche viel über die verschwundene Zivilisation aufdecken könnten.",
  "Die Sonde untersucht ein paar der möglichen Strukturen, welche das Schiff aus dem Orbit entdeckte und findet heraus, dass sie Überreste einer verschwundenen Zivilisation sind. Die Ruinen enthalten noch funktionerende Artefakte und Datenbanken, die entschlüsselt werden könnten.",
  "Die Sonde untersucht ein paar der möglichen Strukturen, welche das Schiff aus dem Orbit entdeckte und findet heraus, dass sie Überreste einer verschwundenen Zivilisation sind. Die Ruinen werden von einem noch aktiven Verteidigungssystem geschützt, dem die Sonde nur knapp entkommt.",
  "Die Sonde untersucht ein paar der möglichen Strukturen, welche das Schiff aus dem Orbit entdeckte, es stellt sich allerdings heraus, dass es nur natürliche Formationen sind, keine Zeichen von Intelligenz.",
];

var ProbingFeatures = [
  "Die Einwohner bieten an, die Menschen aufzunehmen und werden sie Willkommenheißen, sobald das Schiff landet.",
  "Die Einwohner sind sich bereits der Mission des Schiffs bewusst und haben klargemacht, dass die Menschen hier nicht Willkommen sind.",
  "Dieser Planet ist eine perfekte Simulation der Erde, basierend auf den verbleibenden Datenbanken des Schiffes, erschaffen durch unglaublich fortgschrittene Außerirdische.",
  "Dieser Planet wurde von Außerirdischen umgebaut um für Menschen bewohnbar zu sein. Viele Strukturen der Außerirdischen fliegen im Orbit.",
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
