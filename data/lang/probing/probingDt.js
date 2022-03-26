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
  "De sensoren van de sonde",
  "bevestigen de metingen van de orbitale scanners van het schip.",
  "vullen de gaten in de data die het schip heeft kunnen vergaren vanuit haar baan.",
  "De missie van de sonde is vervuld en hij schakelt zichzelf uit.",
];

var ProbingMoon = [
  "Terwijl de sonde de planeet nadert scant hij de maan van de planeet, maar merkt dat het geen nuttige mineralen bevat.",
  "Terwijl de sonde de planeet nadert scant hij de maan van de planeet, en merkt dat het rijk is aan metalen en andere bruikbare grondstoffen.",
  "Terwijl de sonde de planeet nadert scant hij de maan van de planeet, en merkt dat het een onlangs gevangen astroïde in een onstabiele baan is. Binnen enkele tientallen jaren zal de maan zo dicht bij de planeet komen dat het zal opbreken, en het oppervlak gebombardeerd zal worden met brokstukken.",
];

var ProbingBeauty = [
  "De AI vergelijkt de oppervlakte foto's van de sonde met haar esthetische analyse programma, en bepaalt dat mensen deze planeet buitengewoon mooi zullen vinden.",
  "De AI vergelijkt de oppervlakte foto's van de sonde met haar esthetische analyse programma, en bepaalt dat mensen deze planeet extreem lelijk zullen vinden.",
];

var ProbingCaves = [
  "De korst van de planeet is doorzeefd met uitgebreide grottenstelsels, welke makkelijk vergezeld kunnen worden om luchtdichte schuilplaatsen te kunnen maken.",
  "De korst van de planeet is doorzeefd met uitgebreide grottenstelsels, welke geïsoleerd zijn van de oppervlakte temperatuur.",
  "De planeet is geologisch instabiel, en gevaarlijke aardbevingen zijn alledaagse ervaringen op het oppervlak.",
];

var ProbingPlants = [
  "De sonde vindt buitenaardse planten. Het test een monster, en vindt dat deze noch eetbaar, noch giftig zijn voor mensen.",
  "De sonde vindt buitenaardse planten. Het test een monster, en vindt dat sommige van deze eetbaar zijn voor mensen.",
  "De sonde vindt buitenaardse planten. Het test een monster, en vindt dat deze allemaal zeer giftig zijn voor mensen.",
];

var ProbingAnimals = [
  "De sonde treft vele dieren aan. Na het analyseren van het gedrag, besluit het dat zij noch bruikbaar, noch schadelijk zijn voor mensen.",
  "De sonde treft vele dieren aan. Na het analyseren van het gedrag, besluit het dat sommige soorten potentie hebben om bruikbaar te zijn voor mensen als vlees voorziening of lastdieren.",
  "De sonde treft vele dieren aan. Na het analyseren van het gedrag, besluit het dat zij een aanzienlijk gevaar zijn voor menselijke kolonisten.",
];

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "De sonde merkt op dat een soort complex sociaal gedrag vertoont en een rudimentaire taal heeft.",
  "De sonde merkt op dat een soort complex sociaal gedrag vertoont en simpele stenen gereedschap gebruikt.",
  "De sonde merkt op dat een soort complex sociaal gedrag vertoont, geavanceerde stenen gereedschap gebruikt, en begonnen is om andere dieren te temmen en planten soorten te oogsten.",
  "De sonde onderzoekt een gebied met normale planten groei, en merkt dat het opzettelijk gecultiveerd wordt door een soort met geavanceerde stenen gereedschap.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het nederzettingen zijn bewoond door een intelligente soort, gebruikmakend van stenen en bronzen gereedschap.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het nederzettingen zijn bewoond door een intelligente soort, gebruikmakend van ijzeren gereedschap",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het nederzettingen zijn bewoond door een intelligente soort, met een middeleeuws technologieniveau",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het steden zijn bewoond door een intelligente soort, met een industrieel technologieniveau.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het steden zijn bewoond door een intelligente soort, met een atoomtijdperk technologieniveau.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het steden zijn bewoond door een intelligente soort, met een informatietijdperk technologieniveau.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte waarnam, en merkt dat het steden zijn bewoond door een intelligente soort, met een post-singulariteit technologieniveau.",

];

var ProbingCulture = [
  "De inboorlingen leven in een staat van constant geweld, met geen sociale organizatie.",
  "De inboorlingen zijn verdeelt in talloze kleine stammen die in een constante staat van oorlog met elkaar zijn.",
  "De inboorlingen zijn verdeelt in talloze kleine stammen, waarvan de meeste in angst leven voor hun meedogenloze stamhoofden.",
  "De inboorlingen zijn verdeelt in talloze kleine stammen, waarvan de meeste wijs geregeerd worden door welwillende stamhoofden.",
  "De inboorlingen zijn verdeelt in talloze kleine stammen, waarvan de meeste gezamenlijk bestuurd worden door de stamleden en in vrede met elkaar leven.",
  "De meeste inboorlingen leven in kleine landen, welke veel van hun grondstoffen verdelen om oorlog met elkaar te voeren.",
  "Het grootste deel van de bevolking leeft als slaven onder de heerschappij van tirannen",
  "De meeste machtige landen worden geregeerd door priester-koningen, die strik controle houden op de stroom van informatie, en de bevolking onwetend en analfabeet houden.",
  "De meeste geavanceerde landen worden geregeerd door welwillende vorsten die het als hun plicht zien in benodigdheden van het volk te voorzien.",
  "De meest geavanceerde landen zijn republieken, waar de beslissingen gemaakt worden door vergaderingen van burgers.",
  "De beschaving heeft recent een nucleare oorlog ondergaan, en de inwoners proberen te overleven in de ruïnes van hun eens zo grote steden.",
  "Merendeel van de planeet is verdeelt tussen verschillende supermachten, welke in een constante staat van paraatheid staan.",
  "Merendeel van de geavanceerde landen zijn dictaturen, welke uitbundig gebruik maken van politietoezicht en inlichtingendiensten, om de populatie op één lijn te houden.",
  "De planeet wordt beheerst door een groot aantal multinationale corporaties welke de rol van de overheid overgenomen hebben.",
  "De meest machtige landen op de planeet zijn in naam democratisch, maar de leiders zijn corrupt en doen weinig om het lot te verbeteren van de bevolking.",
  "De meest machtige landen op de planeet zijn goed functionerende democratieën, en de bevolking heeft over het algemeen een hoge levensstandaard.",
  "De bevolking leeft van cultuur en vrije tijd, met geautomatiseerde machines die in hun materiële behoeften voorzien.",
  "De sonde heeft moeite om de cultuur van de bewoners te begrijpen, welke in zowel politieke als filosofische principes compleet anders functioneert in vergelijking met de aarde.",
];

var ProbingCiv = [
  "De sonde voert metingen op grote hoogte uit, en vindt nederzettingen en tekenen van intelligent activiteit overal waar het kijkt. Blijkbaar is geen enkel deel van deze planeet onaangetast door de inheemse beschaving.",
];

var ProbingRuins = [
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte opgemerkt heeft, en vindt dat het ruïnes zijn van een verdwenen intelligente soort. De ruïnes bevatten grootste monumenten en geschriften welke mogelijk veel over de verdwenen beschaving kunnen zeggen.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte opgemerkt heeft, en vindt dat het ruïnes zijn van een verdwenen intelligente soort. De ruïnes bevatten geavanceerde technologische artefacten, sommige nog steeds functioneren, en wetenschappelijke databanken die gedecodeerd kunnen worden.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte opgemerkt heeft, en vindt dat het ruïnes zijn van een verdwenen intelligente soort. De ruïnes bevatten functionerende beveiligings systemen, en de sonde ontsnapt nauwelijks.",
  "De sonde onderzoekt enkele van de structuren die het zaadschip vanuit de ruimte opgemerkt heeft, maar vindt dat deze normale natuurlijke formaties zijn, niet het werk van intelligentie.",
];

var ProbingFeatures = [
  "De inheemse bevolking van deze planeet hebben al een asielaanbod aangeboden aan de menselijke vluchtelingen, en zullen ze met open handen ontvangen als het zaadschip landt.",
  "De inheemse bevolking van deze planeet beseffen de missie al van het zaadschip, en hebben duidelijk gemaakt dat menselijke vluchtelingen niet welkom zijn op hun planeet.",
  "Deze planeet is een perfecte simulatie gemaakt door fantastisch geavanceerde buitenaardse wezens, gebaseerd op de data van de wetenschappelijke en culturele databanken van het zaadschip.",
  "Deze planeet is recent geterraformeerd door geavanceerde buitenaardse wezen om geschikt te zijn voor menselijke bewoning, en vele buitenaardse structuren vliegen in een baan rond de planeet.",
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
