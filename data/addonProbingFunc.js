function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var alienFerocity = 0;
var alienAppearence = [];
var animalAtmosphere;
var animalGravity;
var animalWater;

//ЗАПУСК ЗОНДА
//START THE PROBE
function launchProbe(probing, ScanFailArr, planet) {
  damageApply(cShip.probes, 1, "damage");
  var scannames = document.getElementById("ScanNames");
  scannames.removeChild(scannames.lastChild);

  currentProbing = [];

  currentProbing.push(cProbing.start[0]); // "The surface probe's sensors"

  if (ScanFailArr.includes("&#8623;" + languageData.scannerFailure[options.language] + "&#8623;")) {
    console.log(ScanFailArr);
    currentProbing.push(cProbing.start[2]); //  "fill the gaps in the data the ship could gather from orbit.",
    document.getElementById('cPlanet.atmosphere').innerHTML = languageData.planet[options.language].Atmosphere[planetStatsTranslate(PlanetAtmosphere, cPlanet.atmosphere)];
    document.getElementById('cPlanet.gravity').innerHTML = languageData.planet[options.language].Gravity[planetStatsTranslate(PlanetGravity, cPlanet.gravity)]; //cPlanet.gravity;
    document.getElementById('cPlanet.temperature').innerHTML = languageData.planet[options.language].Temperature[planetStatsTranslate(PlanetTemperature, cPlanet.temperature)]; //cPlanet.temperature;
    document.getElementById('cPlanet.water').innerHTML = languageData.planet[options.language].Water[planetStatsTranslate(PlanetWater, cPlanet.water)]; //cPlanet.water;
    document.getElementById('cPlanet.resources').innerHTML = languageData.planet[options.language].Resources[planetStatsTranslate(PlanetResources, cPlanet.resources)];//cPlanet.resources;
    attributeColor(ResRes);
  } else {
    currentProbing.push(cProbing.start[1]); //  "confirm the readings of the ship's orbital scanners.",
  };

  for (var i = 0; i < cPlanet.anomaliesFull.length; i++) {
    switch (cPlanet.anomaliesFull[i]) {

      //ЛУНА
      //Moon
      case "Barren moon":
        currentProbing.push(cProbing.moon[0]);//As the surface probe approaches the planet it scans the planet's moon, but finds that it is devoid of useful minerals.
        break;
      case 'Metal-rich moon':
        currentProbing.push(cProbing.moon[1]);//As the surface probe approaches the planet it scans the planet's moon, and finds that it is rich in metals and other useful resources.
        break;
      case 'Unstable moon':
        currentProbing.push(cProbing.moon[2]);//As the surface probe approaches the planet it scans the planet's moon, and finds that it is a recently-captured asteroid in an unstable orbit. In a few decades the moon will come close enough to the planet to break up, and the surface will be bombarded with fragments.
        break;
      //КРАСОТА
      //The Beauty
      case "Outstanding beauty":
        currentProbing.push(cProbing.beauty[0]); //The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet outstandingly beautiful.
        break;
      case 'Outstanding ugliness':
        currentProbing.push(cProbing.beauty[1]); //The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet extremely ugly.
        break;
      //ПЕЩЕРЫ
      //CAVES
      case "Airtight caves":
        currentProbing.push(cProbing.caves[0]);//The planet's crust is riddled with extensive cave systems which could easily be sealed to provide airtight shelters.
        break;
      case 'Insulated caves':
        currentProbing.push(cProbing.caves[1]);//The planet's crust is riddled with extensive cave systems that are insulated from the temperature on the surface.
        break;
      case 'Unstable geology':
        currentProbing.push(cProbing.caves[2]);//The planet is geologically unstable, and dangerous earthquakes are common everywhere on the surface.
        break;
      //РАСТЕНИЯ
      //Plants
      case "Plant life":
        currentProbing.push(cProbing.plants[0]);
        switch (cPlanet.gravity) {
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(6, 7)]);
            break;
          case 'High':
            currentProbing.push(cProbing.plants[getRandomInt(8, 9)]);
            break;
          case 'Low':
            currentProbing.push(cProbing.plants[getRandomInt(4, 5)]);
            break;
          case 'Very High':
            currentProbing.push(cProbing.plants[getRandomInt(10, 11)]);
            break;
          case 'Very Low':
            currentProbing.push(cProbing.plants[getRandomInt(2, 3)]);
            break;
          default:
            break;
        }
        currentProbing.push(cProbing.plants[1]);
        switch (cPlanet.temperature) {
          case 'Very Cold':
            currentProbing.push(cProbing.plants[getRandomInt(22, 23)]);
            break;
          case 'Cold':
            currentProbing.push(cProbing.plants[getRandomInt(24, 25)]);
            break;
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(26, 27)]);
            break;
          case 'Hot':
            currentProbing.push(cProbing.plants[getRandomInt(28, 29)]);
            break;
          case 'Very Hot':
            currentProbing.push(cProbing.plants[getRandomInt(30, 31)]);
            break;
          default:
            break;
        }
        break;
      case 'Edible plants':
        currentProbing.push(cProbing.plants[0]);
        switch (cPlanet.gravity) {
          case 'Very Low':
            currentProbing.push(cProbing.plants[getRandomInt(2, 3)]);
            break;
          case 'Low':
            currentProbing.push(cProbing.plants[getRandomInt(4, 5)]);
            break;
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(6, 7)]);
            break;
          case 'High':
            currentProbing.push(cProbing.plants[getRandomInt(8, 9)]);
            break;
          case 'Very High':
            currentProbing.push(cProbing.plants[getRandomInt(10, 11)]);
            break;
          default:
            break;
        }
        currentProbing.push(cProbing.plants[1]);
        switch (cPlanet.temperature) {
          case 'Very Cold':
            currentProbing.push(cProbing.plants[getRandomInt(12, 13)]);
            break;
          case 'Cold':
            currentProbing.push(cProbing.plants[getRandomInt(14, 15)]);
            break;
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(16, 17)]);
            break;
          case 'Hot':
            currentProbing.push(cProbing.plants[getRandomInt(18, 19)]);
            break;
          case 'Very Hot':
            currentProbing.push(cProbing.plants[getRandomInt(20, 21)]);
            break;
          default:
            break;
        }
        break;
      case 'Poisonous plants':
        currentProbing.push(cProbing.plants[0]);
        switch (cPlanet.gravity) {
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(6, 7)]);
            break;
          case 'High':
            currentProbing.push(cProbing.plants[getRandomInt(8, 9)]);
            break;
          case 'Low':
            currentProbing.push(cProbing.plants[getRandomInt(4, 5)]);
            break;
          case 'Very High':
            currentProbing.push(cProbing.plants[getRandomInt(10, 11)]);
            break;
          case 'Very Low':
            currentProbing.push(cProbing.plants[getRandomInt(2, 3)]);
            break;
          default:
            break;
        }
        currentProbing.push(cProbing.plants[1]);
        switch (cPlanet.temperature) {
          case 'Very Cold':
            currentProbing.push(cProbing.plants[getRandomInt(32, 33)]);
            break;
          case 'Cold':
            currentProbing.push(cProbing.plants[getRandomInt(34, 35)]);
            break;
          case 'Moderate':
            currentProbing.push(cProbing.plants[getRandomInt(36, 37)]);
            break;
          case 'Hot':
            currentProbing.push(cProbing.plants[getRandomInt(38, 39)]);
            break;
          case 'Very Hot':
            currentProbing.push(cProbing.plants[getRandomInt(40, 41)]);
            break;
          default:
            break;
        }
        break;


      //ЖИВОТНЫЕ
      //Animals
      case "Animal life":
      case "Dangerous animals":
      case "Useful animals":
        currentProbing.push(cProbing.animalsEncounter[getRandomInt(0, 8)]);
        switch (cPlanet.gravity) {
          case 'Moderate':
            animalGravity = getRandomInt(4, 5);
            currentProbing.push(cProbing.animals[animalGravity]);
            break;
          case 'High':
            animalGravity = getRandomInt(6, 7);
            currentProbing.push(cProbing.animals[animalGravity]);
            break;
          case 'Low':
            animalGravity = getRandomInt(2, 3);
            currentProbing.push(cProbing.animals[animalGravity]);
            break;
          case 'Very High':
            animalGravity = getRandomInt(8, 9);
            currentProbing.push(cProbing.animals[animalGravity]);
            break;
          case 'Very Low':
            animalGravity = getRandomInt(0, 1);
            currentProbing.push(cProbing.animals[animalGravity]);
            break;
          default:
            break;
        };
        switch (cPlanet.atmosphere) {
          case 'Breathable':
            animalAtmosphere = getRandomInt(10, 11);
            currentProbing.push(cProbing.animals[animalAtmosphere]);
            break;
          case 'Marginal':
            animalAtmosphere = getRandomInt(12, 13);
            currentProbing.push(cProbing.animals[animalAtmosphere]);
            break;
          case 'Non-breathable':
            animalAtmosphere = getRandomInt(14, 15);
            currentProbing.push(cProbing.animals[animalAtmosphere]);
            break;
          case 'Toxic':
            animalAtmosphere = getRandomInt(16, 17);
            currentProbing.push(cProbing.animals[animalAtmosphere]);
            break;
          case 'Corrosive':
            animalAtmosphere = getRandomInt(18, 19);
            currentProbing.push(cProbing.animals[animalAtmosphere]);
            break;
          default:
            break;
        }
        switch (cPlanet.water) {
          case 'Oceans':
            animalWater = getRandomInt(20, 21);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          case 'Ice caps':
            animalWater = getRandomInt(22, 23);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          case 'Planet-wide ocean':
            animalWater = getRandomInt(24, 25);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          case 'Ice-covered surface':
            animalWater = getRandomInt(26, 27);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          case 'Trace':
            animalWater = getRandomInt(28, 29);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          case 'None':
            animalWater = getRandomInt(30, 31);
            currentProbing.push(cProbing.animals[animalWater]);
            break;
          default:
            break;
        }

        if (cPlanet.anomaliesFull.includes('Useful animals')) {
          currentProbing.push(cProbing.animalsValue[getRandomInt(8, 11)]);
        } else if (cPlanet.anomaliesFull.includes('Dangerous animals')) {
          currentProbing.push(cProbing.animalsValue[getRandomInt(0, 3)]);
        } else if (cPlanet.anomaliesFull.includes('Animal life')) {
          currentProbing.push(cProbing.animalsValue[getRandomInt(4, 7)]);
        };

        break;

      //МЕСТНЫЕ
      //LOCALS
      case 'Planet-spanning civilisation':
        currentProbing.push(cProbing.civ[0]);
        break;

      case 'Intelligent life':
        alienAppearence = [];
        alienFerocity = 0;
        switch (animalGravity) {
          case 0:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(0,1)]);
            alienFerocity += 0;
            break;
          case 1:
          alienAppearence.push(cProbing.sentientAppearence[getRandomInt(2,3)]);
          alienFerocity += 1;
            break;
          case 2:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(4,5)]);
            alienFerocity += 1;
            break;
          case 3:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(6,7)]);
            alienFerocity += 2;
            break;
          case 4:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(8,9)]);
            alienFerocity += 3;
            break;
          case 5:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(10,11)]);
            alienFerocity += 4;
            break;
          case 6:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(12,13)]);
            alienFerocity += 4;
            break;
          case 7:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(14,15)]);
            alienFerocity += 5;
            break;
          case 8:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(16,17)]);
            alienFerocity += 5;
            break;
          case 9:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(18,19)]);
            alienFerocity += 6;
            break;
        };
        switch (animalAtmosphere) {
          case 10:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(20,21)]);
            alienFerocity += 1;
            break;
          case 11:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(22,23)]);
            alienFerocity += 2;
            break;
          case 12:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(24,25)]);
            alienFerocity += 2;
            break;
          case 13:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(26,27)]);
            alienFerocity += 3;
            break;
          case 14:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(28,29)]);
            alienFerocity += 3;
            break;
          case 15:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(30,31)]);
            alienFerocity += 4;
            break;
          case 16:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(32,33)]);
            alienFerocity += 4;
            break;
          case 17:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(34,35)]);
            alienFerocity += 5;
            break;
          case 18:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(36,37)]);
            alienFerocity += 5;
            break;
          case 19:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(38,39)]);
            alienFerocity += 6;
            break;
        };
        switch (animalWater) {
          case 20:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(40,41)]);
            alienFerocity += 1;
            break;
          case 21:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(42,43)]);
            alienFerocity += 1;
            break;
          case 22:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(44,45)]);
            alienFerocity += 1;
            break;
          case 23:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(46,47)]);
            alienFerocity += 0;
            break;
          case 24:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(48,49)]);
            alienFerocity += 2;
            break;
          case 25:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(50,51)]);
            alienFerocity += 1;
            break;
          case 26:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(52,53)]);
            alienFerocity += 1;
            break;
          case 27:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(54,55)]);
            alienFerocity += 1;
            break;
          case 28:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(56,57)]);
            alienFerocity += 2;
            break;
          case 29:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(58,59)]);
            alienFerocity += 2;
            break;
          case 30:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(60,61)]);
            alienFerocity += 2;
            break;
          case 31:
            alienAppearence.push(cProbing.sentientAppearence[getRandomInt(62,63)]);
            alienFerocity += 0;
            break;
        };
        console.log(alienFerocity);
        alienFerocity = alienFerocity + getRandomInt(-5,5);
        console.log(alienFerocity);

        if(alienFerocity<6){
          alienAppearence.push(cProbing.culturalDoctrine[getRandomInt(9,12)]);
        }else if (alienFerocity>10){
          alienAppearence.push(cProbing.culturalDoctrine[getRandomInt(0,4)]);
        } else {
          alienAppearence.push(cProbing.culturalDoctrine[getRandomInt(5,8)]);
        };

        if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        } else {
          currentProbing.push(cProbing.sentients[planet.techLvl]);

          for (let index = 0; index < alienAppearence.length; index++) {
            currentProbing.push(alienAppearence[index]);
          };

          currentProbing.push(cProbing.culture[(planet.culture)]);
        };
        break;
      case 'Machine civilization':
        if (cMachineDoctrine == "Guardian" || cMachineDoctrine == "Exterminator") {
          currentProbing.push(cProbing.machines[0]);
        };
        currentProbing.push(cProbing.machines[1]);
        currentProbing.push(cProbing.machines[2]);
        break;

      //РУИНЫ
      //Ruins
      case "Monumental ruins":
        currentProbing.push(cProbing.ruins[0]);
        break;
      case 'High-tech ruins':
        currentProbing.push(cProbing.ruins[1]);
        break;
      case 'Dangerous ruins':
        currentProbing.push(cProbing.ruins[2]);
        break;
      case 'Regular geological formations':
        currentProbing.push(cProbing.ruins[3]);
        break;
      //ОСОБЫЕ СОБЫТИЯ
      //SPECIAL EVENTS
      case "Welcoming":
        currentProbing.push(cProbing.features[0]);
        break;
      case 'Unwelcoming':
        currentProbing.push(cProbing.features[1]);
        break;
      case 'Simulation':
        currentProbing.push(cProbing.features[2]);
        break;
      case 'Alien observers':
        currentProbing.push(cProbing.features[3]);
        break;
      default:
        break;
    };

  };
  currentProbing.push(cProbing.start[3]);


  buttonWipe();

  //Отрисовка блока с результатами
  //Drawing a block with results
  cxa = endList(currentProbing);
  console.log(cxa)
  re = cxa.split(".");
  console.log(re);

document.getElementById('description').innerHTML = currentProbing[0]+" "+currentProbing[1];
//  document.getElementById('description').innerHTML = endList(currentProbing);
  var i = 2;

  function probingOneByOne() {
    console.log(i);
    var btn = document.getElementById("menubutton");
    if (currentProbing[i] == currentProbing[currentProbing.length -1]){
      document.getElementById('description').innerHTML = currentProbing[i];
      btn.onclick = function () {
        landingReject();
        document.getElementById('description').innerHTML = planetDescription(cPlanet);
      };
    } else {
    btn.onclick = function () {
      probingOneByOne();
    };
    //if the item in the probing array is longer than 40 characters, and has a period
    //at some point, add it like normal.
    if (currentProbing[i].length > 40 && currentProbing[i].indexOf('.') > -1){
        document.getElementById('description').innerHTML = currentProbing[i];
    } 
    //otherwise add it with the following item in the array.
    else {
      document.getElementById('description').innerHTML = currentProbing[i]+" "+currentProbing[i+1];
      i++
    }
    i++;
  }
}
  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function () {
    probingOneByOne();
  };
  btn.innerHTML = languageData.continue[options.language];
  more.appendChild(btn);


  var AnomaliesFullLanguageOutput = anomaliesLangFull(cPlanet.anomalies, cPlanet.anomaliesFull, languageData);

  document.getElementById('cPlanet.anomalies').innerHTML = arrList(AnomaliesFullLanguageOutput);
  planetGraphics();
}
//

console.log("addonProbingFunc loaded!");
