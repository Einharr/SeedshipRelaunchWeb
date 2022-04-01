

var planetsVisited = 0;
var curEvent = 0;
var prevEvent = 0;
var last_encounter_category = "";
var off_course_counter = 0;

//Инициализация статов корабля
//Ship stat initialization
function ship(colonists, atmosphere, gravity, temperature, water, resources, culture, science, probes, landing, construction, techLvl, cultureScore) {
  this.colonists = colonists;
  this.atmosphere = atmosphere;
  this.gravity = gravity;
  this.temperature = temperature;
  this.water = water;
  this.resources = resources;
  this.science = science;
  this.culture = culture;
  this.probes = probes;
  this.landing = landing;
  this.construction = construction;

  this.techLvl = techLvl;
  this.cultureScore = cultureScore;
}

//Значения сканеров
//Scanner values
var defAtm = [100, 0, languageData.scanAtmosphere[options.language], "cShip.atmosphere"];
var defGra = [100, 0, languageData.scanGravity[options.language], "cShip.gravity"];
var defTemp = [100, 0, languageData.scanTemperature[options.language], "cShip.temperature"];
var defWat = [100, 0, languageData.scanWater[options.language], "cShip.water"];
var defRes = [100, 0, languageData.scanResources[options.language], "cShip.resources"];

//Значения баз данных
//Database values
var defCul = [100, 0, languageData.scanCulture[options.language], "cShip.culture"];
var defSci = [100, 0, languageData.scanScience[options.language], "cShip.science"];

//Колонисты
//colonists
// Дополнительные колонисты из события "Безбилетники"
//Additional colonists from the Free Riders event
var colStow = 0;


var colCount = [1000, 0, languageData.scanColonists[options.language], "cShip.colonists"];
var colMax = 1000 + colStow;



//Зонды
//Probes
var probesCount = [10, 0, languageData.scanProbes[options.language], "cShip.probes"];

//Структуры
//structures
var defLanding = [100, 0, languageData.scanLanding[options.language], "cShip.landing"];
var defConstr = [100, 0, languageData.scanConstruction[options.language], "cShip.construction"];



//Инициализация статов планеты
//Planet stat initialization
function planet(atmosphere, gravity, temperature, water, resources, anomalies, anomaliesFull, description, techLvl, natives, culture, cultureScore) {
  this.atmosphere = atmosphere;
  this.gravity = gravity;
  this.temperature = temperature;
  this.water = water;
  this.resources = resources;
  this.anomalies = anomalies;
  this.anomaliesFull = anomaliesFull;
  this.description = description;

  this.techLvl = techLvl;
  this.natives = natives;
  this.culture = culture;
  this.cultureScore = cultureScore;
}



// Создание массива корабля в текущей катке
// Creating an array of a ship in the current game
var cShip = new ship(colCount, defAtm, defGra, defTemp, defWat, defRes, defCul, defSci, probesCount, defLanding, defConstr, 0, 0);


//Массивы для рандомизации повреждений в событиях. Знаю, коряво.
//Arrays for randomizing damage in events. I know it's gross.
var ScanArr = [cShip.atmosphere, cShip.gravity, cShip.temperature, cShip.water, cShip.resources];
var DbArr = [cShip.culture, cShip.science];
var StrArr = [cShip.landing, cShip.construction];
var ColArr = [cShip.colonists];
var ProArr = [cShip.probes];
var RandStr = ScanArr.concat(DbArr, StrArr);
var FullArr = ScanArr.concat(DbArr, StrArr, ColArr, ProArr);

//Массив сканнеров для апгрейда
//Upgradable Scanner Array
refreshArr = ["atmosphere", "gravity", "temperature", "water", "resources", "colonists", "probes", "science", "culture", "construction", "landing"];

DestroyedArray = [];
//Цветовая диффиренциация статов
//Color differentiation of stats
var percentColors = [
  { pct: 0, color: { r: 0, g: 0, b: 0 } },
  { pct: 1, color: { r: 0xff, g: 0x00, b: 0 } },
  { pct: 50, color: { r: 0xff, g: 0xff, b: 0 } },
  { pct: 100, color: { r: 0x00, g: 0xff, b: 0 } }];

var getColorForPercentage = function (pct) {
  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }
  var lower = percentColors[i - 1];
  var upper = percentColors[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  // or output as hex if preferred
};

//Большая первая буква
// Capitalize first letter
var capt = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

//Склонения для русского языка
// Declension for Russian https://en.wikipedia.org/wiki/Russian_grammar
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
//declOfNum(count, ['найдена', 'найдено', 'найдены']);
//console.log(declOfNum(101, ['криокапсула', 'криокапсулы', 'криокапсул']));


//Инициализация рандомайзера
//Randomizer initialization
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция рандомизации урона
//Damage randomization function
function deviceDamage(DmgArr, excl1, excl2) {

  if (excl1 == undefined) {
    excl1 = 0;
  }
  if (excl2 == undefined) {
    excl2 = 0;
  }
  //Исключение уничтоженных девайсов
  //Exclude destroyed devices
  var RandDmgArr = [];
  var i;
  for (i = 0; i < DmgArr.length; i++) {
    if (DmgArr[i][0] !== 0) {

      if (DmgArr[i] == excl1 || DmgArr[i] == excl2) {
      } else {
        RandDmgArr.push(DmgArr[i]);

      };
    } else {
    };
  };
  //
  let device = RandDmgArr[getRandomInt(0, RandDmgArr.length - 1)];


  return device;
};

//Функция случайного апгрейда
//Random upgrade function
function randomUpgrade(Arr) {

  var RandUpArr = [];
  var i;
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i][1] < 2 && Arr[i][0] > 0) {
      RandUpArr.push(Arr[i]);
    };
  };
  device = deviceDamage(RandUpArr);
  if (RandUpArr.length == 0) {
    return 0;
  } else {
    return device;
  };
};

//Функции урона
//Damage functions
function killColonists(dmg) {
  if (dmg == "Low") {
    deaths = Math.round(getRandomInt(2, 1000 * 0.15));
  } else if (dmg == "Medium") {
    deaths = Math.round(getRandomInt(1000 * 0.15, 1000 * 0.35));
  } else if (dmg == "High") {
    deaths = Math.round(getRandomInt(1000 * 0.35, 1000 * 0.65));
  };
  if (deaths >= cShip.colonists[0] - 1) {
    deaths = cShip.colonists[0]
  };
  return deaths;
};

function systemDamage(dmg) {
  if (dmg == "Low") {
    damage = Math.round(getRandomInt(1, 15));
  } else if (dmg == "Medium") {
    damage = Math.round(getRandomInt(15, 35));
  } else if (dmg == "High") {
    damage = Math.round(getRandomInt(35, 65));
  };
  return damage;
};

function damageApply(system, damage, status) {
  if (status == "heal") {
    if (DbArr.concat(ColArr).includes(system)) {
      system[0] += damage;
      dif = "+" + damage;
    } else {
      if (damage > (100 - system[0]))
        damage = 100 - system[0];
      system[0] += damage;
      dif = "+" + damage;
    };

  } else if (status == "damage") {
    if (damage > system[0]) {
      damage = system[0];
    };
    system[0] -= damage;
    if (system[0] == 0) {
      //Добавление в список уничтоженных систем
      //Adding to the list of destroyed systems
      DestroyedArray.push(system);
      //Заморозка значения уничтоженной системы на 0
      //Freeze the value of the destroyed system to 0
      Object.freeze(system[0]);
    }
    dif = "-" + damage;
  } else if (status == "set") {
    dif = system[0] - damage;
    system[0] = damage;
  } else if (status == "upgrade") {
    dif = damage;
    system[1] += damage;
  } else if (status == "upgradeSet") {
    dif = damage;
    system[1] = damage;
  };

  // ЗАПРЕТ НА ЗНАЧЕНИЯ НИЖЕ НУЛЕВЫХ
  // PREVENT VALUES BELOW ZERO
  for (key in cShip) {
    var value = cShip[key];
    if (value[0] <= 0) {
      value[0] = 0;
    };
  };

  for (key in cShip) {
    var value = cShip[key];
    if (value[1] > 2) {
      value[1] = 2;
    }
  }
  //


  refreshNames = ResNames;
  for (i = 0; i < refreshArr.length; i++) {
    if (cShip[refreshArr[i]][1] > 0) {
      document.getElementById("statName_" + refreshArr.indexOf(refreshArr[i])).innerHTML = refreshNames[i] + "(" + (cShip[refreshArr[i]][1]) + "):";
    };
  };

  document.getElementById(system[3]).innerHTML = system[0];
  if (system[3] != (cShip.colonists[3])) {
    if (system[3] != (cShip.probes[3])) {
      document.getElementById(system[3]).style.color = getColorForPercentage(system[0]);

    };
  };

  if (damage != 0) {
    var damage_stat = document.getElementById(system[3]);
    var popup = document.createElement("span");
    popup.className = "popuptext";
    popup.id = system[3] + "_popup";
    popup.innerHTML = "<b>-" + dif + "</b>";
    damage_stat.appendChild(popup);

    if (status == "heal") {
      document.getElementById(system[3] + "_popup").style.backgroundColor = "green";
      if (document.getElementById(system[3]).innerHTML =="Colonists"){
      }
	    else{
        document.getElementById(system[3]).innerHTML += "%"
      }
    } else if (status == "upgrade") {
      document.getElementById(system[3] + "_popup").style.backgroundColor = "yellow";
      document.getElementById(system[3]).innerHTML += "%"
    } else {
      if (system[3] != cShip.probes[3]) {
        if (system[3] != cShip.colonists[3]) {
          document.getElementById(system[3]).innerHTML += "%"
        };
      };
      document.getElementById(system[3] + "_popup").style.backgroundColor = "rgb(115, 52, 52)";
    };

    var popup = document.getElementById(system[3] + "_popup");
    popup.innerHTML = "<b>" + dif + "</b>";
    popup.classList.toggle("show");

  } else {
    if (system[3] != cShip.probes[3]) {
      if (system[3] != cShip.colonists[3]) {
        document.getElementById(system[3]).innerHTML += "%"
      };
    };
  };
};

function statsRefresh() {
  refreshNames = ResNames;
  for (i = 0; i < refreshArr.length; i++) {
    if (cShip.hasOwnProperty(refreshArr[i])) {
      document.getElementById(cShip[refreshArr[i]][3]).innerHTML = cShip[refreshArr[i]][0];
      if (cShip[refreshArr[i]][3] != cShip.probes[3]) {
        if (cShip[refreshArr[i]][3] != cShip.colonists[3]) {
          document.getElementById(cShip[refreshArr[i]][3]).style.color = getColorForPercentage(cShip[refreshArr[i]][0]);
          document.getElementById(cShip[refreshArr[i]][3]).innerHTML += "%"
        };
      };
    }
    if (cShip[refreshArr[i]][1] > 0) {
      document.getElementById("statName_" + refreshArr.indexOf(refreshArr[i])).innerHTML = refreshNames[i] + "(" + (cShip[refreshArr[i]][1]) + "):";
    };
  };
};

function popupClean() {

  document.querySelectorAll('.popuptext').forEach(function (a) {
    a.remove();
  })

};

function either() {
  return arguments[getRandomInt(0, arguments.length - 1)];
};

//Покраска статов планеты
//Painting planet stats
function attributeColor(planetAttributes) {
  var planetStats = [cPlanet.atmosphere, cPlanet.gravity, cPlanet.temperature, cPlanet.water, cPlanet.resources, cPlanet.anomalies];
  for (i = 0; i < planetAttributes.length - 1; i++) {
    switch (planetStats[i]) {
      case 'Breathable':
      case 'Oceans':
      case 'Ice caps':
      case 'Moderate':
      case 'Rich':
        document.getElementById(planetAttributes[i]).style.color = "#18f108";
        break;
      case 'Marginal':
      case 'Ice-covered surface':
      case 'Planet-wide ocean':
      case 'Hot':
      case 'Cold':
      case 'High':
      case 'Low':
      case 'Poor':
        document.getElementById(planetAttributes[i]).style.color = "#F1C81D";
        break;
      case 'None':
      case 'Toxic':
      case 'Corrosive':
      case 'Non-breathable':
      case 'Trace':
      case 'Very Hot':
      case 'Very Cold':
      case 'Very High':
      case 'Very Low':
        document.getElementById(planetAttributes[i]).style.color = "#ff757b";
      default:
    }
  };
};
//


function gameOver(reason) {
  buttonWipe();
  textWipe();

  if (reason == "colonists") {
    text = cEnding.gameOverText[0];
                      if(options.platform=="Android"){
                          var data = {
                            achievementId: "CgkIya77kP0DEAIQBQ"
                            //Flying Dutchman
                        };
                        cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                            // On success
                        }, function() {
                            // On error
                        });
                    };
  } else if (reason == "systems") {
    text = cEnding.gameOverText[1];
  };
  text += "<br><br>" + cEnding.gameOverText[2] + " " + either(cEnding.gameOverText[4], cEnding.gameOverText[5], cEnding.gameOverText[6], cEnding.gameOverText[7]) + " " + cEnding.gameOverText[3];
  text += " " + either(cEnding.gameOverText[8], cEnding.gameOverText[9], cEnding.gameOverText[10], cEnding.gameOverText[11], cEnding.gameOverText[12], cEnding.gameOverText[13]);
  text += "<br><br>" + "Planets Visited: " + planetsVisited;
  text += "<br><br>" + "Total: 0";


  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "description";
  para.innerHTML = text;
  textwindow.appendChild(para);

  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function () {
    window.location.reload(true);
  }
  btn.innerHTML = "Title Screen";
  more.appendChild(btn);
};

//Проверка на гейм овер из—за уничтоженных систем
//Check for game over due to destroyed systems
function gameOverCheck() {
  if (DestroyedArray.length > 4) {
    gameOver("systems");
  };
//Проверить, что игра окончена из-за того, что все колонисты мертвы
//Check for game over due to all colonists dead
  if (cShip.colonists[0] <= 0) {
    gameOver("colonists");
  };
};
//

//Массивы статов планеты
//Arrays of planet stats
var PlanetAtmosphere = ["Breathable", "Marginal", "Non-breathable", "Toxic", "Corrosive", "None"];
var PlanetGravity = ["Moderate", "High", "Low", "Very High", "Very Low"];
var PlanetTemperature = ["Moderate", "Hot", "Cold", "Very Hot", "Very Cold"];
var PlanetWater = ["Oceans", "Ice caps", "Planet-wide ocean", "Ice-covered surface", "Trace", "None"];
var PlanetResources = ["Rich", "Poor", "None"];
var PlanetAnomalies = [];
var PlanetAnomaliesReal = [];
var CurPlanetDescription;
//
function planetStatsTranslate(arr, el) {
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == el) {
      return i;
    };
  };
}
//Аномалии
//anomalies
var PlanetAnomaliesList = ["Moon",
  "Vegetation",
  "Animal life",
  "Possible structures",
  "Geological anomalies",
  "Intelligent life",
  "Electromagnetic activity",
  "Planet-spanning civilisation",
  "Alien Observers",
  "Simulation"];

var PlanetVegetation = ["Plant life", "Poisonous plants", "Edible plants",];
var PlanetMoon = ["Barren moon", "Unstable moon", "Metal-rich moon"];
var PlanetAnimals = ["Animal life", "Dangerous animals", "Useful animals"];
var PlanetRuins = ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"];
var PlanetCaves = ["Unstable geology", "Airtight caves", "Insulated caves"];
var PlanetAesthetics = ["Outstanding ugliness", "Outstanding beauty"];
var PlanetNatives = ["Pre-Stone Age civilization",
  "Paleolithic civilization",
  "Mesolithic civilization",
  "Neolithic civilization",
  "Bronze Age civilization",
  "Iron Age civilization",
  "Medieval civilization",
  "Industrial civilization",
  "Atomic Age civilization",
  "Information Age civilization",
  "Post-singularity civilization"];
var addonNatives = [
  "Machine civilization"
];

var cMachineDoctrine = 0;

var machineDoctrine = [
  "Guardian",
  "Assimilator",
  "Exterminator",
];

var PlanetAlien = ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming"];
var nativeTechLevel = 0;
var nativeCulture = 0;
var cultureNames = ["Savagery",
  "Warring Tribes",
  "Brutal Chieftains",
  "Benevolent Chieftains",
  "Collective Rule",
  "Warring States",
  "Slave-Based Empire",
  "Oppressive Theocracy",
  "Benevolent Monarchy",
  "Egalitarian Republic",
  "Post-Nuclear Wasteland",
  "Warring Superpowers",
  "Dystopian Police State",
  "Rule by Corporations",
  "Corrupt Democracy",
  "Engaged Democracy",
  "Post-Scarcity Utopia",
  "Cosmic Enlightenment"];

var native_relations_names = [
  "Genocide of Colonists",
  "Genocide of Natives",
  "Colonists Enslaved",
  "Natives Enslaved",
  "Isolationism",
  "Friendly",
  "Integrated Societies",
  "Immigrants, Earth forgotten",
  "Immigrants, Earth remembered",
  "Immigrants, rich hybrid culture",

  "Assimilation by synthetics",
  "Extermination by synthetics",
  "Synthetics wiped-out",
  "Masters, Earth forgotten",
  "Masters, Earth remembered",
  "Masters, rich hybrid culture",
];

var tech_level_names = ["Pre-Stone Age",
  "Paleolithic",
  "Mesolithic",
  "Neolithic",
  "Bronze Age",
  "Iron Age",
  "Medieval",
  "Industrial",
  "Atomic Age",
  "Information Age",
  "Post-Singularity"];



var ResRes = ["cPlanet.atmosphere", "cPlanet.gravity", "cPlanet.temperature", "cPlanet.water", "cPlanet.resources", "cPlanet.anomalies"];


function buttonWipe() {
  //Очищаем кнопки выбора событий
  ////Clear the event select buttons
  const myNode = document.getElementById("more");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
};

function textWipe() {
  //Очищаем поле вывода текста
  ////Clear the text output field
  const myText = document.getElementById("textwindow");
  while (myText.firstChild) {
    myText.removeChild(myText.lastChild);
  }
};

function contButton() {

  var more = document.getElementById("more");
  var chBtn = document.createElement("button");
  chBtn.onclick = nextPlanet;
  chBtn.className = "futurebutton";
  chBtn.innerHTML = languageData.continue[options.language];
  more.appendChild(chBtn);
};

function landingConfirm(ship, planet, ending) {
  buttonWipe();

  var more = document.getElementById("more");
  var para = document.createElement("p");
  para.innerHTML = languageData.landingConfirmationText[options.language];
  more.appendChild(para);

  //Добавляем новые кнопки подтверждения
  //Add new confirmation buttons
  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.onclick = landingReject;
  btn.innerHTML = languageData.reconsider[options.language];
  more.appendChild(btn);

  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.onclick = function () {
    newColony(ship, planet, ending);
  }
  btn.innerHTML = languageData.confirm[options.language];
  more.appendChild(btn);
};

function landingReject() {
  buttonWipe();

  //Добавляем новые кнопки выбора событий
  //Add new event selection buttons
  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.onclick = function () {
    landingConfirm(cShip, cPlanet, cEnding);
    //             newColony(cShip, cPlanet, cEnding);
  }
  btn.innerHTML = languageData.foundColony[options.language];
  more.appendChild(btn);

  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.onclick = function () {
    nextEncounter();
  };
  btn.innerHTML = languageData.moveOn[options.language];
  more.appendChild(btn);
};

//Функция для отрисовки листа аномалий на правильном языке
//Function to draw the anomaly sheet in the correct language
function anomaliesLang(anomalies, anomaliesFull, languageData) {
  var anolang = [];
  for (var i = 0; i < anomalies.length; i++) {
    switch (anomalies[i]) {
      case "Moon":
        anolang.push(languageData.anomalies[options.language].list[0]);
        break;
      case 'Vegetation':
        anolang.push(languageData.anomalies[options.language].list[1]);
        break;
      case 'Animal life':
        anolang.push(languageData.anomalies[options.language].list[2]);
        break;
      case "Possible structures":
        anolang.push(languageData.anomalies[options.language].list[3]);
        break;
      case 'Geological anomalies':
        anolang.push(languageData.anomalies[options.language].list[4]);
        break;
      case 'Intelligent life':
        anolang.push(languageData.anomalies[options.language].list[5]);
        break;
      case "Electromagnetic activity":
        anolang.push(languageData.anomalies[options.language].list[6]);
        break;
      case 'Planet-spanning civilisation':
        anolang.push(languageData.anomalies[options.language].list[7]);
        break;
      case 'Alien Observers':
        anolang.push(languageData.anomalies[options.language].list[8]);
        break;
      case 'Simulation':
        anolang.push(languageData.anomalies[options.language].list[9]);
        break;
    };
  };
  return anolang;
};

function anomaliesLangFull(anomalies, anomaliesFull, languageData) {
  var anolang = [];
  console.log(anomaliesFull)
  for (var i = 0; i < anomaliesFull.length; i++) {
    switch (anomaliesFull[i]) {
      //Vegetation
      case "Plant life":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].vegetation[0] + '</font>'); //YELLOW! #f1c81d
        break;
      case "Poisonous plants":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].vegetation[1] + '</font>'); //RED! #ff757b
        break;
      case "Edible plants":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].vegetation[2] + '</font>'); //GREEN! #18f108
        break;
      //Moon
      case "Barren moon":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].moon[0] + '</font>');
        break;
      case "Unstable moon":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].moon[1] + '</font>');
        break;
      case "Metal-rich moon":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].moon[2] + '</font>');
        break;
      //Animal Life
      case "Animal life":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].animals[0] + '</font>');
        break;
      case "Dangerous animals":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].animals[1] + '</font>');
        break;
      case "Useful animals":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].animals[2] + '</font>');
        break;
      //Ruins
      case "Regular geological formations":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].ruins[0] + '</font>');
        break;
      case "Dangerous ruins":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].ruins[1] + '</font>');
        break;
      case "Monumental ruins":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].ruins[2] + '</font>');
        break;
      case "High-tech ruins":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].ruins[3] + '</font>');
        break;
      //Caves
      case "Unstable geology":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].caves[0] + '</font>');
        break;
      case "Airtight caves":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].caves[1] + '</font>');
        break;
      case "Insulated caves":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].caves[2] + '</font>');
        break;
      //Aestethics
      case "Outstanding ugliness":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].aesthetics[0] + '</font>');
        break;
      case "Outstanding beauty":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].aesthetics[1] + '</font>');
        break;
      //Intelligent life
      case "Pre-Stone Age civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[0] + '</font>');
        break;
      case "Paleolithic civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[1] + '</font>');
        break;
      case "Mesolithic civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[2] + '</font>');
        break;
      case "Neolithic civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[3] + '</font>');
        break;
      case "Bronze Age civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[4] + '</font>');
        break;
      case "Iron Age civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[5] + '</font>');
        break;
      case "Medieval civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[6] + '</font>');
        break;
      case "Industrial civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[7] + '</font>');
        break;
      case "Atomic Age civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[8] + '</font>');
        break;
      case "Information Age civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[9] + '</font>');
        break;
      case "Post-singularity civilization":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].natives[10] + '</font>');
        break;
      //Special
      case "Alien Observers":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].special[0] + '</font>');
        break;
      case "Simulation":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].special[1] + '</font>');
        break;
      case "Unwelcoming":
        anolang.push('<font color="#ff757b">' + languageData.anomaliesFull[options.language].special[2] + '</font>');
        break;
      case "Welcoming":
        anolang.push('<font color="#18f108">' + languageData.anomaliesFull[options.language].special[3] + '</font>');
        break;
      case "Planet-spanning civilisation":
        anolang.push('<font color="#f1c81d">' + languageData.anomaliesFull[options.language].special[4] + '</font>');
        break;
        case "Machine civilization":
          anolang.push('<font color="#f1c81d">' + "Machine civilization" + '</font>');
          break;
    };
  };
  return anolang;
};

function desiredPlanet(){
  do {
    nextPlanet()
  } while (cMachineDoctrine == 0);
}

//Генерация и отрисовка новой планеты
//Generate and draw a new planet
function nextPlanet(load) {
  planetsVisited += 1;
  console.log("Planets visited: " + planetsVisited);
  popupClean();

  //ГЕНЕРАТОР ПЛАНЕТЫ
  //PLANET GENERATOR
  var PlanetAnomalies = [];
  var PlanetAnomaliesReal = [];

if (planetsVisited == 42){
                          if(options.platform=="Android"){
                              var data = {
                                achievementId: "CgkIya77kP0DEAIQDA"
                                //AnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything
                            };
                            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                                // On success
                            }, function() {
                                // On error
                            });
                        };
};

  if (planetsVisited == 1) {
    cPlanet = new planet(
      either("Non-breathable", "Toxic", "Corrosive", "None"),
      either("Very High", "Very Low", "Very High", "Very Low", "Low", "High"),
      either("Very Hot", "Very Cold", "Very Hot", "Very Cold", "Cold", "Hot"),
      either("Ice-covered surface", "Trace", "None", "None"),
      either("Poor", "None", "None"),
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );
  } else if (off_course == true) {
    cPlanet = new planet(
      PlanetAtmosphere[getRandomInt(0, (PlanetAtmosphere.length - 1))],
      PlanetGravity[getRandomInt(0, (PlanetGravity.length - 1))],
      PlanetTemperature[getRandomInt(0, (PlanetTemperature.length - 1))],
      PlanetWater[getRandomInt(0, (PlanetWater.length - 1))],
      PlanetResources[getRandomInt(0, (PlanetResources.length - 1))],
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );
  } else if (alienObservers == true) {
    cPlanet = new planet(
      either("Breathable", "Breathable", "Marginal"),
      either("Moderate", "Moderate", "Moderate", "Moderate", "Low", "High"),
      either("Moderate", "Moderate", "Moderate", "Moderate", "Cold", "Hot"),
      either("Oceans", "Oceans", "Planet-wide ocean"),
      either("Rich", "Rich", "Poor"),
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );
    cPlanet.anomalies.push(PlanetAnomaliesList[8]);
    cPlanet.anomaliesFull.push(PlanetAnomaliesList[8]);
    //destinationSignal aliens
  } else if (aliensAlive == true) {
    cPlanet = new planet(
      PlanetAtmosphere[getRandomInt(0, ((PlanetAtmosphere.length - 1) - cShip.atmosphere[1] * 2))],
      PlanetGravity[getRandomInt(0, ((PlanetGravity.length - 1) - cShip.gravity[1] * 2))],
      PlanetTemperature[getRandomInt(0, ((PlanetTemperature.length - 1) - cShip.temperature[1] * 2))],
      PlanetWater[getRandomInt(0, ((PlanetWater.length - 1) - cShip.water[1] * 2))],
      PlanetResources[0],
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );


    cPlanet.anomaliesFull = []
    cPlanet.anomalies = []
    cPlanet.anomaliesFull.push(either(PlanetVegetation[0], PlanetVegetation[1], PlanetVegetation[2]))
    cPlanet.anomalies.push(PlanetAnomaliesList[1])
    cPlanet.anomaliesFull.push(either(PlanetAnimals[0], PlanetAnimals[1], PlanetAnimals[2]))
    cPlanet.anomalies.push(PlanetAnomaliesList[2])

    cPlanet.anomaliesFull.push(PlanetAnomaliesList[5])
    cPlanet.anomalies.push(PlanetAnomaliesList[3])
    cPlanet.anomalies.push(PlanetAnomaliesList[6])
    cPlanet.techLvl = getRandomInt(8, 10)
    cPlanet.culture = getRandomInt(11, 16)

    cPlanet.anomaliesFull.push(PlanetNatives[cPlanet.techLvl]);

    if (getRandomInt(0, 10) < cPlanet.techLvl - 2) {
      cPlanet.anomaliesFull.push(PlanetAnomaliesList[7])
    };

    if (welcoming) {
      cPlanet.anomaliesFull.push(PlanetAlien[3])
    } else if (unwelcoming) {
      cPlanet.anomaliesFull.push(PlanetAlien[2])
    }

  } else if (aliensDead == true) {

    cPlanet = new planet(
      PlanetAtmosphere[getRandomInt(0, ((PlanetAtmosphere.length - 1) - cShip.atmosphere[1] * 2))],
      PlanetGravity[getRandomInt(0, ((PlanetGravity.length - 1) - cShip.gravity[1] * 2))],
      PlanetTemperature[getRandomInt(0, ((PlanetTemperature.length - 1) - cShip.temperature[1] * 2))],
      PlanetWater[getRandomInt(0, ((PlanetWater.length - 1) - cShip.water[1] * 2))],
      PlanetResources[0],
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );

    cPlanet.anomaliesFull = []
    cPlanet.anomalies = []
    cPlanet.anomaliesFull.push(either(PlanetVegetation[0], PlanetVegetation[1], PlanetVegetation[2]))
    cPlanet.anomalies.push(PlanetAnomaliesList[1])
    cPlanet.anomaliesFull.push(either(PlanetAnimals[0], PlanetAnimals[1], PlanetAnimals[2]))
    cPlanet.anomalies.push(PlanetAnomaliesList[2])
    cPlanet.anomalies.push(PlanetAnomaliesList[3]);
    cPlanet.anomaliesFull.push(PlanetRuins[2]);
    cPlanet.anomaliesFull.push(PlanetRuins[3]);

  } else if (simulation == true) {

    /* Generate a new planet based on your surviving databases */
    /* For each attribute, roll a % number */
    /* If it's < the scientific database, attribute is perfect */
    /* If it's < the scientific database * 2, attribute is mediocre (so 50% database guarantees at least an all-yellow planet) */
    /* Otherwise, it's bad */
    /* Atmosphere */
    _r = getRandomInt(0, 99)
    if (_r < cShip.science[0]) {
      cPlanet.atmosphere = "Breathable"
    } else if (_r < cShip.science[0] * 2) {
      cPlanet.atmosphere = "Marginal"
    } else {
      cPlanet.atmosphere = either("Corrosive", "Toxic", "Non-breathable", "None")
    }
    /* Gravity */
    _r = getRandomInt(0, 99)
    if (_r < cShip.science[0]) {
      cPlanet.gravity = "Moderate"
    } else if (_r < cShip.science[0] * 2) {
      cPlanet.gravity = either("Low", "High")
    } else {
      cPlanet.gravity = either("Very Low", "Very High")
    }
    /* Temperature */
    _r = getRandomInt(0, 99)
    if (_r < cShip.science[0]) {
      cPlanet.temperature = "Moderate"
    } else if (_r < cShip.science[0] * 2) {
      cPlanet.temperature = either("Cold", "Hot")
    } else {
      cPlanet.temperature = either("Very Cold", "Very Hot")
    }
    /* Water */
    _r = getRandomInt(0, 99)
    if (_r < cShip.science[0]) {
      cPlanet.water = "Oceans"
    } else if (_r < cShip.science[0] * 2) {
      cPlanet.water = "Planet-wide ocean"
    } else {
      cPlanet.water = either("Trace", "None")
    }
    /* Resources */
    _r = getRandomInt(0, 99)
    if (_r < cShip.science[0]) {
      cPlanet.resources = "Rich"
    } else if (_r < cShip.science[0] * 2) {
      cPlanet.resources = "Poor"
    } else {
      cPlanet.resources = "None"
    }
    /* Freeze the oceans at low temperatures */
    if ((cPlanet.temperature == "Very cold") || (cPlanet.temperature == "Cold" && getRandomInt(0, 1) == 0)) {
      if (cPlanet.water == "Oceans") {
        cPlanet.water = "Ice caps";
      } else if (cPlanet.water == "Planet-wide ocean") {
        cPlanet.water = "Ice-covered surface";
      };
    };
    /* SURFACE FEATURES */
    cPlanet.anomaliesFull = []
    cPlanet.anomalies = []

    cPlanet.anomalies.push(PlanetAnomaliesList[9]);
    cPlanet.anomaliesFull.push(PlanetAnomaliesList[9]);

    /* PLANTS */
    if (getRandomInt(0, 99) < cShip.science[0]) {
      cPlanet.anomalies.push(PlanetAnomaliesList[1])
      if (getRandomInt(50, 99) < cShip.science[0]) {
        cPlanet.anomaliesFull.push(PlanetVegetation[2])
      } else if (getRandomInt(0, 49) > cShip.science[0]) {
        cPlanet.anomaliesFull.push(PlanetVegetation[1])
      } else {
        cPlanet.anomaliesFull.push(PlanetVegetation[0])
      };
    };

    /* ANIMALS -- CAN EXIST SEPARATELY FROM PLANTS IN THIS CASE BECAUSE IT'S A SIMUALTION */
    if (getRandomInt(0, 99) < cShip.science[0]) {
      cPlanet.anomalies.push(PlanetAnomaliesList[2])
      if (getRandomInt(50, 99) < cShip.science[0]) {
        cPlanet.anomaliesFull.push(PlanetAnimals[2])
      } else if (getRandomInt(0, 49) > cShip.science[0]) {
        cPlanet.anomaliesFull.push(PlanetAnimals[1])
      } else {
        cPlanet.anomaliesFull.push(PlanetAnimals[0])
      }
    }

    /* A good cultural database makes the planet beautiful, a bad one makes it ugly */
    if (getRandomInt(50, 99) < cShip.culture[0]) {
      cPlanet.anomaliesFull.push(PlanetAesthetics[1]);
    } else if (getRandomInt(0, 49) > cShip.culture[0]) {
      cPlanet.anomaliesFull.push(PlanetAesthetics[0]);
    }

    // Set Ship stats to maximum
    cShip.atmosphere[0] = 100;
    cShip.gravity[0] = 100;
    cShip.temperature[0] = 100;
    cShip.resources[0] = 100;
    cShip.water[0] = 100;
    cShip.landing[0] = 100;
    cShip.construction[0] = 100;
    cShip.probes[0] = 10;

    buttonWipe();

    } else if (machinePlanet == true) {
        cPlanet = new planet(
          either("Breathable", "Breathable", "Marginal"),
          either("Moderate", "Moderate", "Moderate", "Moderate", "Low", "High"),
          either("Moderate", "Moderate", "Moderate", "Moderate", "Cold", "Hot"),
          either("Oceans", "Oceans", "Planet-wide ocean"),
          either("Rich", "Rich", "Poor"),
          PlanetAnomalies,
          PlanetAnomaliesReal,
          CurPlanetDescription = null,
          nativeTechLevel,
          PlanetNatives,
          nativeCulture,
          0,
        );
              cPlanet.culture = getRandomInt(11, 16);
              cMachineDoctrine = either("Guardian", "Assimilator", "Exterminator");

                  if(cMachineDoctrine != "Exterminator" ){
                    cPlanet.anomaliesFull.push(either(PlanetVegetation[0], PlanetVegetation[1], PlanetVegetation[2]))
                    cPlanet.anomalies.push(PlanetAnomaliesList[1])
                    cPlanet.anomaliesFull.push(either(PlanetAnimals[0], PlanetAnimals[1], PlanetAnimals[2]))
                    cPlanet.anomalies.push(PlanetAnomaliesList[2])
                  };

                  if(cMachineDoctrine == "Guardian" || cMachineDoctrine == "Exterminator" ){
                    cPlanet.anomalies.push(PlanetAnomaliesList[3]);
                    cPlanet.anomaliesFull.push(either(PlanetRuins[2], PlanetRuins[3]));
                    cPlanet.anomalies.push(PlanetAnomaliesList[4]);
                  };

                    cPlanet.techLvl = getRandomInt(8, 10);
                if (getRandomInt(0, 10) < cPlanet.techLvl - 2) {
                 // cPlanet.anomaliesFull.push(PlanetAnomaliesList[7])
                };

              cPlanet.anomalies.push(PlanetAnomaliesList[6]);
              cPlanet.anomaliesFull.push(addonNatives[0]);
              console.log("Synthetic "+cMachineDoctrine);
        //destinationSignal aliens
  } else {
    cPlanet = new planet(
      PlanetAtmosphere[getRandomInt(0, ((PlanetAtmosphere.length - 1) - cShip.atmosphere[1] * 2))],
      PlanetGravity[getRandomInt(0, ((PlanetGravity.length - 1) - cShip.gravity[1] * 2))],
      PlanetTemperature[getRandomInt(0, ((PlanetTemperature.length - 1) - cShip.temperature[1] * 2))],
      PlanetWater[getRandomInt(0, ((PlanetWater.length - 1) - cShip.water[1] * 2))],
      PlanetResources[getRandomInt(0, ((PlanetResources.length - 1) - cShip.resources[1]))],
      PlanetAnomalies,
      PlanetAnomaliesReal,
      CurPlanetDescription = null,
      nativeTechLevel,
      PlanetNatives,
      nativeCulture,
      0,
    );


    // Логика исключение невозможных сочетаний
    //Замораживаем океан
    // Logic excludes impossible combinations. the below prevents impossible combos from happening.
     // Freeze the ocean
    if (cPlanet.temperature == "Very Cold" && cPlanet.water == "Planet-wide ocean") {
      cPlanet.water = "Ice-covered surface";
    };

    if (cPlanet.temperature == "Cold" && cPlanet.water == "Planet-wide ocean") {
      a = getRandomInt(1, 3);
      if (a = 1) {
        cPlanet.water = "Ice-covered surface";
      } else {
        cPlanet.water = "Planet-wide ocean";
      };
    };

    //Растапливаем лёд
    //// Melt the ice
    if ((cPlanet.temperature == "Very Hot" || cPlanet.temperature == "Hot" || cPlanet.temperature == "Moderate") && cPlanet.water == "Ice-covered surface") {
      cPlanet.water = "Planet-wide ocean";
    };

    if (cPlanet.temperature == "Very Hot" && cPlanet.water == "Ice caps") {
      cPlanet.water = "Oceans";
    };

    //Если есть жидкая вода — есть атмосфера
    //If there is liquid water, there is an atmosphere
    if (cPlanet.atmosphere == "None" && (cPlanet.water == "Oceans" || cPlanet.water == "Planet-wide ocean")) {
      cPlanet.atmosphere = "Non-breathable";
    };

    //Логика аномалий
    //Луна
    // Anomaly logic
     //Moon
    var moon_chance = 0;

    function moon_random(moon) {
      if (getRandomInt(1, 99) <= moon) {
        cPlanet.anomalies.push(PlanetAnomaliesList[0]);
        cPlanet.anomaliesFull.push(PlanetMoon[getRandomInt(0, PlanetMoon.length - 1)]);
      };
    };

    switch (cPlanet.gravity) {
      case 'Moderate':
        moon_chance = 30;
        moon_random(moon_chance);
        break;
      case 'High':
        moon_chance = 40;
        moon_random(moon_chance);
        break;
      case 'Low':
        moon_chance = 20;
        moon_random(moon_chance);
        break;
      case 'Very High':
        moon_chance = 50;
        moon_random(moon_chance);
        break;
      case 'Very Low':
        moon_chance = 10;
        moon_random(moon_chance);
        break;

      default:

        break;
    };


    //Красота
    //planet beauty

    if (getRandomInt(1, 99) <= 20) {
      cPlanet.anomaliesFull.push(PlanetAesthetics[0]);
    } else if (getRandomInt(1, 99) >= 80) {
      cPlanet.anomaliesFull.push(PlanetAesthetics[1]);
    };

    //Пещеры
    //Caves
    var cave_chance = 0;

    function cave_random(cave) {
      if (getRandomInt(1, 99) <= cave) {
        cPlanet.anomalies.push(PlanetAnomaliesList[4]);
        cPlanet.anomaliesFull.push(PlanetCaves[getRandomInt(0, PlanetCaves.length - 1)]);
      };
    };

    if (cPlanet.water == "Planet-wide ocean" || cPlanet.water == "Ice-covered surface") {

    } else {
      switch (cPlanet.gravity) {
        case 'Moderate':
          var cave_chance = 30;
          cave_random(cave_chance);
          break;
        case 'Very Low':
          var cave_chance = 50;
          cave_random(cave_chance);
          break;
        case 'Low':
          var cave_chance = 40;
          cave_random(cave_chance);
          break;
        case 'High':
          var cave_chance = 20;
          cave_random(cave_chance);
          break;
        case 'Very High':
          var cave_chance = 10;
          cave_random(cave_chance);
          break;
        default:
          break;
      };
    };

    //ЖИЗНЬ
    //Растения
    //Life
     //Plants
     //Plants can only exist where there is an atmosphere and the temp isn't super extreme
    if (cPlanet.atmosphere != "None" && (cPlanet.temperature == "Hot" || cPlanet.temperature == "Cold" || cPlanet.temperature == "Moderate")) {
      cPlanet.anomalies.push(PlanetAnomaliesList[1]);
      switch (cPlanet.atmosphere) {
        case 'Breathable':
          if (getRandomInt(1, 99) >= 10) {
            cPlanet.anomaliesFull.push(PlanetVegetation[2]);
          } else {
            cPlanet.anomaliesFull.push(PlanetVegetation[0]);
          };
          break;
        case 'Marginal':
          if (getRandomInt(1, 99) >= 50) {
            cPlanet.anomaliesFull.push(PlanetVegetation[2]);
          } else if (getRandomInt(1, 99) >= 10) {
            cPlanet.anomaliesFull.push(PlanetVegetation[0]);
          } else {
            cPlanet.anomaliesFull.push(PlanetVegetation[1]);
          };
          break;
        case 'Non-breathable':
          if (getRandomInt(1, 99) >= 90) {
            cPlanet.anomaliesFull.push(PlanetVegetation[2]);
          } else if (getRandomInt(1, 99) >= 30) {
            cPlanet.anomaliesFull.push(PlanetVegetation[0]);
          } else {
            cPlanet.anomaliesFull.push(PlanetVegetation[1]);
          };
          break;
        case 'Toxic':
          if (getRandomInt(1, 99) >= 90) {
            cPlanet.anomaliesFull.push(PlanetVegetation[2]);
          } else if (getRandomInt(1, 99) >= 70) {
            cPlanet.anomaliesFull.push(PlanetVegetation[0]);
          } else {
            cPlanet.anomaliesFull.push(PlanetVegetation[1]);
          };
          break;
        case 'Corrosive':
          if (getRandomInt(1, 99) >= 95) {
            cPlanet.anomaliesFull.push(PlanetVegetation[2]);
          } else if (getRandomInt(1, 99) >= 90) {
            cPlanet.anomaliesFull.push(PlanetVegetation[0]);
          } else {
            cPlanet.anomaliesFull.push(PlanetVegetation[1]);
          };
          break;
        case 'None':

          break;
        default:
          break;
      };
    };

    //Животные
    //Animals may show up if there is vegetation.

    if (cPlanet.anomalies.includes("Vegetation")) {
      var animals_chance = 50;
      if (getRandomInt(1, 99) >= animals_chance) {
        cPlanet.anomalies.push(PlanetAnomaliesList[2]);
        cPlanet.anomaliesFull.push(PlanetAnimals[getRandomInt(0, PlanetAnimals.length - 1)]);
      };
    };

    //Местное население
    //Local population

    if (cPlanet.anomalies.includes("Animal life")) {
      var natives_chance = 50;
      if (getRandomInt(1, 99) >= natives_chance) {
        cPlanet.anomaliesFull.push(PlanetAnomaliesList[5]);
        switch (cPlanet.resources) {
          case 'Rich':
            cPlanet.techLvl = getRandomInt(0, 10);
            break;
          case 'Poor':
            cPlanet.techLvl = getRandomInt(0, 6);
            break;
          case 'None':
            cPlanet.techLvl = getRandomInt(0, 3);
            break;
          default:
            break;
        }
        //        console.log("ТЕХНОУРОВЕНЬ ПЛАНЕТЫ:", cPlanet.techLvl);
        if (cPlanet.techLvl >= 7) {
          cPlanet.anomalies.push(PlanetAnomaliesList[6]);
          if (options.addOnFeatures) {
            if (getRandomInt(1, 99) >= 85) {
              cPlanet.anomaliesFull.push(addonNatives[0]);
              cMachineDoctrine = either("Guardian", "Assimilator", "Exterminator");
              console.log("Synthetic "+cMachineDoctrine);
            } else {
              cPlanet.anomaliesFull.push(PlanetNatives[cPlanet.techLvl]);
            };
          }

        } else if (cPlanet.techLvl >= 3) {
          cPlanet.anomalies.push(PlanetAnomaliesList[3]);
          cPlanet.anomaliesFull.push(PlanetNatives[cPlanet.techLvl]);
        } else {
          cPlanet.anomaliesFull.push(PlanetNatives[cPlanet.techLvl]);
        };

        //Культура местных
        //Local Culture
        if (cPlanet.techLvl < 8) {
          cPlanet.culture = getRandomInt(5, 9);
        } else if (cPlanet.techLvl < 3) {
          cPlanet.culture = getRandomInt(0, 4);
        } else {
          cPlanet.culture = getRandomInt(10, 16);
        };
        if (getRandomInt(0, 10) < cPlanet.techLvl - 2) {
          cPlanet.anomaliesFull.push(PlanetAnomaliesList[7]);
        };
      };
    };

    //Руины
    //Ruin
    var ruin_chance = 10;
    if (cPlanet.anomaliesFull.includes("Planet-spanning civilisation")) {
      ruin_chance = 0;
    };

    if(cMachineDoctrine == "Guardian" || cMachineDoctrine == "Exterminator" ){
      ruin_chance = 100;
    };

    if (getRandomInt(0, 99) < ruin_chance) {
      cPlanet.anomaliesFull.push(PlanetRuins[(getRandomInt(0, PlanetRuins.length - 1))]);
      if (cPlanet.anomalies.includes("Possible structures")) {
      } else {
        cPlanet.anomalies.push(PlanetAnomaliesList[3]);
      };
    };


    //
    //console.log(cPlanet.anomaliesFull);
    //console.log("КУЛЬТУРА:" + cPlanet.culture);
    //Очищаем текст и кнопки
    //Clear text and buttons
  };
  textWipe();

  //Отрисовываем новые элементы
  //// Draw new elements
  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "name";
  para.innerHTML = languageData.missionScanResult[options.language];
  textwindow.appendChild(para);

  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "description";
  para.innerHTML = "Описание планеты";
  textwindow.appendChild(para);

  var crrow = document.createElement("div");
  crrow.className = "row";
  crrow.id = "ScanList";
  textwindow.appendChild(crrow);

  var scanlist = document.getElementById("ScanList");
  var crcol = document.createElement("div");
  crcol.className = "col-5";
  crcol.id = "ScanNames";
  scanlist.appendChild(crcol);

  var crcol = document.createElement("div");
  crcol.className = "col-7";
  crcol.id = "ScanRes";
  scanlist.appendChild(crcol);

  var scannames = document.getElementById("ScanNames");
  for (var i = 0; i < ResNames.length; i++) {
    var parag = document.createElement("p");
    parag.className = "stats";
    parag.innerHTML = ResNames[i] + ":";
    scannames.appendChild(parag);
  };

  if (cShip.probes[0] > 0) {
    var scannames = document.getElementById("ScanNames");
    var btn = document.createElement("button");
    btn.className = "probebutton";
    btn.onclick = function () {
      launchProbe(cProbing, ScanFailArr, cPlanet);
    };
    btn.innerHTML = languageData.launchProbe[options.language];
    scannames.appendChild(btn);
  }

  var scanres = document.getElementById("ScanRes");
  for (var i = 0; i < ResRes.length; i++) {
    var parag = document.createElement("p");
    parag.className = "stats";
    parag.id = ResRes[i];
    parag.innerHTML = "0";
    scanres.appendChild(parag);
  };

  buttonWipe();

  //Добавляем новые кнопки выбора событий
  //Add new event selection buttons
  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.onclick = function () {
    landingConfirm(cShip, cPlanet, cEnding);
    //             newColony(cShip, cPlanet, cEnding);
  }
  btn.innerHTML = languageData.foundColony[options.language];
  more.appendChild(btn);

  if (!simulation) {
    var more = document.getElementById("more");
    var btn = document.createElement("button");
    btn.className = "futurebutton";
    btn.onclick = function () {
      nextEncounter();
    };
    btn.innerHTML = languageData.moveOn[options.language];
    more.appendChild(btn);
  };

  planetScale = 1;

  switch (cPlanet.gravity) {
    case 'Moderate':
      planetScale = getRandomInt(5, 6) / 10;
      break;
    case 'High':
      planetScale = getRandomInt(6, 7) / 10;
      break;
    case 'Low':
      planetScale = getRandomInt(4, 5) / 10;
      break;
    case 'Very High':
      planetScale = getRandomInt(7, 8) / 10;
      break;
    case 'Very Low':
      planetScale = getRandomInt(3, 4) / 10;
      break;
    default:
      break;
  };

  //Planet Graphics
  planetGraphics();

  cPlanet.description = planetDescription(cPlanet);
  //Отрисовка результатов сканирования
  //Rendering scan results
  function drawStats() {
    var AnomaliesLanguageOutput = anomaliesLang(cPlanet.anomalies, cPlanet.anomaliesFull, languageData);
    document.getElementById('description').innerHTML = cPlanet.description;
    document.getElementById('cPlanet.atmosphere').innerHTML = languageData.planet[options.language].Atmosphere[planetStatsTranslate(PlanetAtmosphere, cPlanet.atmosphere)];
    document.getElementById('cPlanet.gravity').innerHTML = languageData.planet[options.language].Gravity[planetStatsTranslate(PlanetGravity, cPlanet.gravity)]; //cPlanet.gravity;
    document.getElementById('cPlanet.temperature').innerHTML = languageData.planet[options.language].Temperature[planetStatsTranslate(PlanetTemperature, cPlanet.temperature)]; //cPlanet.temperature;
    document.getElementById('cPlanet.water').innerHTML = languageData.planet[options.language].Water[planetStatsTranslate(PlanetWater, cPlanet.water)]; //cPlanet.water;
    document.getElementById('cPlanet.resources').innerHTML = languageData.planet[options.language].Resources[planetStatsTranslate(PlanetResources, cPlanet.resources)];//cPlanet.resources;
    document.getElementById('cPlanet.anomalies').innerHTML = arrList(AnomaliesLanguageOutput);
  }
  drawStats();
  //Были ли сбои сканирования. Массив для ProbingFunc
  //Were there any scan failures. Array for ProbingFunc
  var ScanFailArr = [];
  function scanFailCheck(scanners, planetAttributes) {
    for (i = 0; i < scanners.length; i++) {
      if (scanners[i][0] < 100) {
        var scanFail = (Math.random() * 100);
        if (scanFail > scanners[i][0]) {
          document.getElementById(planetAttributes[i]).innerHTML = "&#8623;" + languageData.scannerFailure[options.language] + "&#8623;";
          document.getElementById(planetAttributes[i]).style.color = "#ad0000";
          ScanFailArr.push("&#8623;" + languageData.scannerFailure[options.language] + "&#8623;");
          console.log(scanners[i][0], scanFail, ScanFailArr);
          document.getElementById("darkness").style.background = "url(assets/textures/Special/static.gif) repeat-x";
        };
      };
    };
  };

  // console.log("Сбой сканеров " + ScanFailArr)
  if(off_course){
   off_course_counter++;
  };
  if(off_course_counter > 3){
                    if (options.platform == "Android") {
                      var data = {
                        achievementId: "CgkIya77kP0DEAIQDg"
                        //ThisLittleManeuversGonnaCostUs51Years
                      };
                      cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                        // On success
                      }, function () {
                        // On error
                      });
                    };
  };

  simulation = false;
  aliensAlive = false;
  aliensDead = false;
  welcoming = false;
  unwelcoming = false;
  alienObservers = false;
  off_course = false;
  machinePlanet = false;
  gameOverCheck();

  //Загрузка игры
  //Load the game

  if (loading) {
    Loaddata = gameload("Savedata");
    cShip = Loaddata[0];
    cPlanet = Loaddata[1];
    planetsVisited = Loaddata[2];
    last_encounter_category = Loaddata[3]
    ScanArr = [cShip.atmosphere, cShip.gravity, cShip.temperature, cShip.water, cShip.resources];
    drawStats();
    loading = false;
    statsRefresh();
  }
  //Автосохранение
  //Autosave
  Savedata = [cShip, cPlanet, planetsVisited, last_encounter_category, ScanArr];
  gamesave(Savedata, "Savedata");
  attributeColor(ResRes);
  scanFailCheck(ScanArr, ResRes);
  return cPlanet;
};

//КОНЕЦ ФУНКЦИИ

//РАНДОМИЗАЦИЯ СЛЕДУЮЩЕГО СОБЫТИЯ

//Исключение предыдущего события

//END OF FUNCTION

//RANDOMIZE THE NEXT EVENT

//Exception of the previous event
function eventExclusion(list, exclusion) {

  //Исключение уничтоженных девайсов
  //Exclude destroyed devices
  var RandEventArr = [];
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] !== exclusion) {
      if (list[i].visited == false || list[i].repeateble == true) {
        RandEventArr.push(list[i]);
      };
    };
  };
  //
 // console.log(RandEventArr)
  let output = RandEventArr[getRandomInt(0, RandEventArr.length - 1)];

  return output;
};

counter_uneventful = 0;
counter_rare = 0;

function randEvent() {

  malfunction_chance = Math.min(planetsVisited - 5, 5);
  //DEBUG!
  var visitedEvents = [];
  visitedEvents.push(curEvent);
  //
  prevEvent = curEvent;


  if (planetsVisited == 1) {
    curEvent = unsuitable;
    console.log("SPECIAL:" + curEvent.name);
  } else if (prevEvent != scannerUpgrade && (planetsVisited % 3 == 0) && randomUpgrade(ScanArr) != 0) {
    curEvent = scannerUpgrade;
    console.log("SPECIAL:" + curEvent.name);
  } else {
    _r = getRandomInt(0, 9)
    if (_r < malfunction_chance) {
      /* MALFUNCTIONS */
      curEvent = eventExclusion(Event_malfunction, prevEvent);
      console.log(_r + " to " + malfunction_chance + "MALFUNCTION:" + curEvent.name);
      last_encounter_category = "Malfunction";

    } else if (_r < 2 && Events_uneventful.lenght - 1 > counter_uneventful && last_encounter_category != "Uneventful") {
      /* NOTHING INTERESTING HAPPENS - once each per playthrough */
      curEvent = eventExclusion(Events_uneventful, prevEvent);
      console.log(_r + "Uneventful:" + curEvent.name);
      counter_uneventful += 1;
      last_encounter_category = "Uneventful";

    } else if (planetsVisited < 3) {
      /* FIRST TWO EVENTS */
      curEvent = eventExclusion(Events_first_two, prevEvent);
      console.log(_r + "FIRST TWO:" + curEvent.name);
      last_encounter_category = "Common";

    } else if (_r == 9 && Events_rare.length - 1 > counter_rare && last_encounter_category != "Rare") {
      /* RARE EVENTS - once each per playthrough */
      curEvent = eventExclusion(Events_rare, prevEvent);
      console.log(_r + "RARE:" + curEvent.name);
      counter_rare += 1;
      last_encounter_category = "Rare";
    } else {
      /* COMMON EVENTS */
      curEvent = eventExclusion(Events_common, prevEvent);
      console.log(_r + "COMMON:" + curEvent.name);
      last_encounter_category = "Common";
    };
  };

};

//ПРОВЕРИТЬ, НЕ УНИЧТОЖЕНЫ ЛИ СТРУКТУРЫ ДЛЯ ОТРИСОВКИ КНОПОК
//CHECK IF THE STRUCTURES FOR DRAWING BUTTONS HAVE BEEN DESTROYED

function existCheck(DmgArr) {
  if (DmgArr == "true") {
    return true;
  } else if (DmgArr == "false") {
    return false;
  } else {
    //Исключение уничтоженных девайсов
    //Exclude destroyed devices
    var RandDmgArr = [];
    var i;
    for (i = 0; i < DmgArr.length; i++) {
      if (DmgArr[i][0] !== 0) {
        RandDmgArr.push(DmgArr[i]);
      };
    };
    //Если массив пустой, значит кнопка выбора не рисуется
    //If the array is empty, then the select button is not drawn
    if (RandDmgArr && RandDmgArr.length) {
      return true;
    } else {
      return false;
    };
  };
  //

};

//ОТРИСОВКА СЛЕДУЮЩЕГО СОБЫТИЯ
//// DRAWING THE NEXT EVENT
function nextEncounter(newEnc = "none") {
  popupClean();


  document.getElementById('planetAnimation').style.transform = "scale(0)";
  document.getElementById('moon').style.opacity = 0;
  document.getElementById("iceCaps").style.opacity = 0;

  buttonWipe();
  textWipe();

  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "name";
  textwindow.appendChild(para);

  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "description";
  textwindow.appendChild(para);

  if (newEnc == "none") {
    randEvent();
  } else {
    prevEvent = curEvent;
    curEvent = newEnc;
  };

  curEvent.eventProperty();

  document.getElementById('name').innerHTML = curEvent.name;
  document.getElementById('description').innerHTML = curEvent.description;
  choicesBtns();
  gameOverCheck();
};
//



//ОТРИСОВКА КНОПОК ВЫБОРА В СОБЫТИЯХ
//DRAWING SELECTION BUTTONS IN EVENTS
function choicesBtns() {
  //Очищаем кнопки выбора событий
  //Clear the event select buttons
  buttonWipe();
  //Добавляем новые кнопки выбора событий
  //Add new event selection buttons
  var more = document.getElementById("more");
  for (var i = 0; i < curEvent.choices.length; i++) {
    if (curEvent.choices[i].exist == true) {
      var btn = document.createElement("button");
      btn.className = "choicebutton";
      btn.onclick = curEvent.choices[i].result;
      btn.innerHTML = curEvent.choices[i].choice;
      more.appendChild(btn);
    };
  };
};
//


//ДЕБАЖНЫЕ КНОПКИ
//DEBUG BUTTONS
function debugSwitch() {
  if (options.debug) {
    document.getElementById("DebugWindow").style.visibility = "hidden";
    options.debug = false;
  } else {
    document.getElementById("DebugWindow").style.visibility = "visible";
    options.debug = true;
    output = "";
    for (var i = 0; i < debug_event_array.length; i++) {
      LS = document.getElementById("debugEventLS");

      output += i + ")" + debug_event_array[i].name + "<br>";
      LS.innerHTML = output;
    };
  }
}

function debugEvent() {
  var x = document.getElementById("DebugInp").value;
  nextEncounter(debug_event_array[x]);
}

function statReset() {
  damageApply(cShip.atmosphere, 100, "set");
  damageApply(cShip.gravity, 100, "set");
  damageApply(cShip.temperature, 100, "set");
  damageApply(cShip.resources, 100, "set");
  damageApply(cShip.water, 100, "set");
  damageApply(cShip.landing, 100, "set");
  damageApply(cShip.construction, 100, "set");
  damageApply(cShip.culture, 100, "set");
  damageApply(cShip.science, 100, "set");

  damageApply(cShip.probes, 10, "set");
  damageApply(cShip.colonists, 1000, "set");
}

console.log("base ЗАГРУЖЕН");
