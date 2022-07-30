function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//ЗАПУСК ЗОНДА
    function launchProbe(probing, ScanFailArr, planet) {
      damageApply(cShip.probes, 1, "damage");
      var scannames=document.getElementById("ScanNames");
      scannames.removeChild(scannames.lastChild);

      currentProbing = [];

      currentProbing.push(cProbing.start[0]); // "The surface probe's sensors"

      if (ScanFailArr.includes("&#8623;"+languageData.scannerFailure[options.language]+"&#8623;")){
      currentProbing.push(cProbing.start[2]); //  "fill the gaps in the data the ship could gather from orbit.",
      document.getElementById('cPlanet.atmosphere').innerHTML= languageData.planet[options.language].Atmosphere[planetStatsTranslate(PlanetAtmosphere, cPlanet.atmosphere)];
      document.getElementById('cPlanet.gravity').innerHTML=languageData.planet[options.language].Gravity[planetStatsTranslate(PlanetGravity, cPlanet.gravity)]; //cPlanet.gravity;
      document.getElementById('cPlanet.temperature').innerHTML=languageData.planet[options.language].Temperature[planetStatsTranslate(PlanetTemperature, cPlanet.temperature)]; //cPlanet.temperature;
      document.getElementById('cPlanet.water').innerHTML=languageData.planet[options.language].Water[planetStatsTranslate(PlanetWater, cPlanet.water)]; //cPlanet.water;
      document.getElementById('cPlanet.resources').innerHTML=languageData.planet[options.language].Resources[planetStatsTranslate(PlanetResources, cPlanet.resources)];//cPlanet.resources;
      attributeColor(ResRes);
      } else {
      currentProbing.push(cProbing.start[1]); //  "confirm the readings of the ship's orbital scanners.",
      };

      for (var i = 0; i < cPlanet.anomaliesFull.length; i++) {
        switch(cPlanet.anomaliesFull[i]) {

//ЛУНА
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
          case "Outstanding beauty":
          currentProbing.push(cProbing.beauty[0]); //The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet outstandingly beautiful.
            break;
          case 'Outstanding ugliness':
           currentProbing.push(cProbing.beauty[1]); //The AI runs the probe's images of the surface through its aesthetic analysis routine, and determines that humans would find the planet extremely ugly.
            break;
//ПЕЩЕРЫ
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
          case "Plant life":
          currentProbing.push(cProbing.plants[0]);//The probe finds alien plants. It tests a sample, and finds that they would be neither edible nor poisonous to humans.
            break;
          case 'Edible plants':
           currentProbing.push(cProbing.plants[1]);//The probe finds alien plants. It tests a sample, and finds that some of them would be edible for humans.
            break;
          case 'Poisonous plants':
          currentProbing.push(cProbing.plants[2]);//The probe finds alien plants. It tests a sample, and finds that they would all be highly poisonous to humans.
            break;
//ЖИВОТНЫЕ
          case "Animal life":
          currentProbing.push(cProbing.animals[0]);//	The probe encounters numerous animals. After analysing their behaviour, it concludes that they would be neither useful nor harmful to humans.
            break;
          case 'Useful animals':
           currentProbing.push(cProbing.animals[1]);//The probe encounters numerous animals. After analysing their behaviour, it concludes that some species have the potential to be useful to humans as meat sources or beasts of burden.
            break;
          case 'Dangerous animals':
            currentProbing.push(cProbing.animals[2]);//The probe encounters numerous animals. After analysing their behaviour, it concludes that they pose a significant threat to human colonists.
            break;
//МЕСТНЫЕ
          case 'Planet-spanning civilisation':
            currentProbing.push(cProbing.civ[0]);
            break;

          case 'Intelligent life':
            currentProbing.push(cProbing.sentients[planet.techLvl]);
            currentProbing.push(cProbing.culture[(planet.culture)]);
            break;
//РУИНЫ
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

// Blok drawing with results

document.getElementById('description').innerHTML = currentProbing[0]+" "+currentProbing[1];
//  document.getElementById('description').innerHTML = endList(currentProbing);
  var i = 2;

  function probingOneByOne() {
    console.log(i);
    var btn = document.getElementById("menubutton");
    //if (i >= currentProbing.length) {
      if (currentProbing[i] == currentProbing[currentProbing.length -1]){
      document.getElementById('description').innerHTML = currentProbing[i];
      btn.onclick = function () {
        landingReject();
        //document.getElementById('description').innerHTML = planetDescription(cPlanet);
        document.getElementById('description').innerHTML = cPlanet.description;
      };
    } 
    else {
    btn.onclick = function () {
      probingOneByOne();
    };
    //if the item in the probing array is longer than 40 characters, and has a period
    //at some point, add it like normal.
    if (currentProbing[i].length > 40 && currentProbing[i].indexOf('.') > -1) {
      document.getElementById('description').innerHTML = currentProbing[i];
    } 
    //otherwise add it with the following item in the array.
    else {
      document.getElementById('description').innerHTML = currentProbing[i]+" "+currentProbing[i+1];
      i++;
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

console.log("probingFunc ЗАГРУЖЕН");
