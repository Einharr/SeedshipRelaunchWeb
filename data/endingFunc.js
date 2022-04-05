//Array creation Function
function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr;
};
//Запуск финальной секвенции
//Start the final sequence
function newColony(ship, planet, ending) {
  console.log(planet)

  if (options.platform == "Android") {
    var data = {
      achievementId: "CgkIya77kP0DEAIQCw"
      //Leif Airickson
    };
    cordova.plugins.playGamesServices.unlockAchievement(data, function () {
      // On success
    }, function () {
      // On error
    });
  };

  planetGraphics();
  var planetName = "This Planet";
  planet.name = "Unnamed planet"
  planet.nameID = 0;
  var colMax = 1000;
  var journeyDeaths = 0;
  var endingCounter = 0;
  var allDeaths = 0;
  // Финальное описание
  // Final description

  //Description Arrays
  var EndingLandingList = [];
  var EndingConstructionList = [];
  var EndingTechnologyList = [];
  var EndingRuinsList = [];
  var EndingCultureList = [];
  var EndingNativesList = [];
  var ScoreDescription = [];
  var EndingPSCrelationsList = [];
  var EndingPSCTechnologyList = [];

  //Damage Arrays
  var EndingLandingDamage = createArray(11, 0);
  var EndingConstructionDamage = createArray(1, 0);
  var EndingPSCrelationsDamage = createArray(1, 0);
  var EndingPSCTechnologyDamage = createArray(1, 0);
  var EndingRuinsDamage = createArray(3, 0);
  var EndingTechnologyDamage = createArray(1, 0);
  var EndingCultureDamage = createArray(1, 0);
  var EndingNativesDamage = createArray(1, 0);
  var ScoreDescriptionDmg = createArray(1, 0);

  var PossibleEnding = [EndingLandingList, EndingConstructionList, EndingPSCrelationsList, EndingPSCTechnologyList, EndingRuinsList, EndingTechnologyList, EndingCultureList, EndingNativesList, ScoreDescription];
  var PossibleDamage = [EndingLandingDamage, EndingConstructionDamage, EndingPSCrelationsDamage, EndingPSCTechnologyDamage, EndingRuinsDamage, EndingTechnologyDamage, EndingCultureDamage, EndingNativesDamage, ScoreDescriptionDmg];
  var FullEnding = [];
  var BulkDamage = [];

  //hiscore
  var ScoreIDs = ["Planet atmosphere",
    "Planet gravity",
    "Planet temperature",
    "Planet water",
    "Planet resources",
    "Survivors after landing",
    "Survivors after settlement construction",
    "Final technology level",
    "Final culture",
    "Surviving scientific database × 10",
    "Surviving cultural database × 10",
    "Native Relations",
    "Total",]


  var ScoreNames = [languageData.score[options.language].Atmosphere[0],
  languageData.score[options.language].Gravity[0],
  languageData.score[options.language].Temperature[0],
  languageData.score[options.language].Water[0],
  languageData.score[options.language].Resources[0],
  languageData.score[options.language].SurvivorsAL[0],
  languageData.score[options.language].SurvivorsAC[0],
  languageData.score[options.language].FinalTL[0],
  languageData.score[options.language].FinalC[0],
  languageData.score[options.language].SurvivingSc[0],
  languageData.score[options.language].SurvivingCl[0],
  languageData.score[options.language].NativeRl[0],
  languageData.score[options.language].Total[0],];


  var hiscore = {
    summary: null,
    final_tech_level: -1,
    final_culture: -1,
    native_relations: -1,

  };

  //Вычисление урона
  var geologyDeaths = 0;
  var animalDeaths = 0;
  var plantsDeaths = 0;

  var finalTech = ship.science[0];

  var _good_feature_subtract = 50;
  var _green_multiply = 0;
  var _green_add = 0;
  var _yellow_multiply = 1.25;
  var _yellow_add = 0;
  var _red_multiply = 3.75;
  var _red_add = 125;
  var _adjust_min = 0.75;
  var _adjust_max = 1.25;

 // Technological level
 //Технологический уровень

  if (planet.anomaliesFull.includes("Metal-rich moon")) {
    if (planet.resources == "Rich") {
      finalTech *= 1.05;
    }
    else if (planet.resources == "Poor") {
      finalTech *= 0.95;
    }
    else if (planet.resources == "None") {
      finalTech *= 0.85;
    }
  } else {
    if (planet.resources == "Poor") {
      finalTech *= 0.7;
    }
    else if (planet.resources == "None") {
      finalTech *= 0.4;
    }
  }

  / * Bonus from local * /
  /* Бонус от местных */
  var _native_bonus = 0;
  if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
    _native_bonus = planet.techLvl * 5;
    console.log("Местные:" + _native_bonus);
  };

  / * Death from the atmosphere * /
  /* Смерти от атмосферы */

  var atmosphereDeaths = 100 - ship.construction[0] + _native_bonus;
  if (planet.anomaliesFull.includes("Airtight caves")) {
    atmosphereDeaths -= _good_feature_subtract;
  };

  switch (planet.atmosphere) {
    case "Corrosive":
    case "Toxic":
    case "None":
    case "Non-breathable":
      atmosphereDeaths = atmosphereDeaths * _red_multiply + _red_add;
      break;
    case "Marginal":
      atmosphereDeaths = atmosphereDeaths * _yellow_multiply + _yellow_add;
      break;
    case "Breathable":
      atmosphereDeaths = atmosphereDeaths * _green_multiply + _green_add;
      break;
  };

  if (atmosphereDeaths <= 0) {
    atmosphereDeaths = 0;
  } else {
    atmosphereDeaths = Math.round(getRandomInt(atmosphereDeaths * _adjust_min, atmosphereDeaths * _adjust_max));
  };

  / * Death from temperature * /
  /* Смерти от температуры */

  var temperatureDeaths = 100 - ship.construction[0] + _native_bonus;
  if (planet.anomaliesFull.includes("Insulated caves")) {
    temperatureDeaths -= _good_feature_subtract;
  };

  switch (planet.temperature) {
    case "Very Hot":
    case "Very Cold":
      temperatureDeaths = temperatureDeaths * _red_multiply + _red_add;
      break;
    case "Hot":
    case "Cold":
      temperatureDeaths = temperatureDeaths * _yellow_multiply + _yellow_add;
      break;
    case "Moderate":
      temperatureDeaths = temperatureDeaths * _green_multiply + _green_add;
      break;
  };

  if (temperatureDeaths <= 0) {
    temperatureDeaths = 0;
  } else {
    temperatureDeaths = Math.round(getRandomInt(temperatureDeaths * _adjust_min, temperatureDeaths * _adjust_max));
  };

  / * Death from gravity * /
  /* Смерти от гравитации */

  var gravityDeaths = 100 - ship.construction[0] + _native_bonus;
  if (planet.anomaliesFull.includes("Useful animals")) {
    gravityDeaths -= _good_feature_subtract
  };

  switch (planet.gravity) {
    case "Very High":
    case "Very Low":
      gravityDeaths = gravityDeaths * _red_multiply + _red_add;
      break;
    case "High":
    case "Low":
      gravityDeaths = gravityDeaths * _yellow_multiply + _yellow_add;
      break;
    case "Moderate":
      gravityDeaths = gravityDeaths * _green_multiply + _green_add;
      break;
  };

  if (gravityDeaths <= 0) {
    gravityDeaths = 0;
  } else {
    gravityDeaths = Math.round(getRandomInt(gravityDeaths * _adjust_min, gravityDeaths * _adjust_max));
  };

  / * Death from water * /
  /* Смерти от воды */
  var waterDeaths = 100 - ship.construction[0] + _native_bonus;
  if (planet.anomaliesFull.includes("Useful animals")) {
    waterDeaths -= _good_feature_subtract
  };

  switch (planet.water) {
    case "None":
    case "Trace":
      waterDeaths = waterDeaths * _red_multiply + _red_add;
      break;
    case "Ice-covered surface":
    case "Planet-wide ocean":
      waterDeaths = waterDeaths * _yellow_multiply + _yellow_add;
      break;
    case "Ice caps":
    case "Oceans":
      waterDeaths = waterDeaths * _green_multiply + _green_add;
      break;
  };

  // Alignment of values
  // Выравнивание значений

  if (waterDeaths <= 0) {
    waterDeaths = 0;
  } else {
    waterDeaths = Math.round(getRandomInt(waterDeaths * _adjust_min, waterDeaths * _adjust_max));
  };

  if (atmosphereDeaths + temperatureDeaths + gravityDeaths + waterDeaths > ship.colonists[0]) {
    deathMod = ship.colonists[0] / (atmosphereDeaths + temperatureDeaths + gravityDeaths + waterDeaths);
    atmosphereDeaths = Math.round(atmosphereDeaths * deathMod);
    temperatureDeaths = Math.round(temperatureDeaths * deathMod);
    gravityDeaths = Math.round(gravityDeaths * deathMod);
    waterDeaths = Math.round(waterDeaths * deathMod);

    if (atmosphereDeaths > 0) {
      atmosphereDeaths = ship.colonists[0] - (temperatureDeaths + gravityDeaths + waterDeaths);
    } else if (temperatureDeaths > 0) {
      temperatureDeaths = ship.colonists[0] - (atmosphereDeaths + gravityDeaths + waterDeaths);
    } else if (gravityDeaths > 0) {
      gravityDeaths = ship.colonists[0] - (atmosphereDeaths + temperatureDeaths + waterDeaths);
    } else if (waterDeaths > 0) {
      waterDeaths = ship.colonists[0] - (atmosphereDeaths + temperatureDeaths + gravityDeaths);
    }
  }

  console.log("DEATHS:", atmosphereDeaths, temperatureDeaths, gravityDeaths, waterDeaths)
  console.log("DEATH SUM:", atmosphereDeaths + temperatureDeaths + gravityDeaths + waterDeaths, "Colonists Should be:", (1000 - (atmosphereDeaths + temperatureDeaths + gravityDeaths + waterDeaths)))
  //

  function fc_landing() {
    // First page description

    // landing assistance from local
    //ПЕРВАЯ СТРАНИЦА ОПИСАНИЯ

    //Помощь в посадке от местных

    _native_landing_bonus = 0;
    if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        EndingLandingList.push(cAddonEnding.machines[0]);
        _native_landing_bonus = 60;
      } else {
        if (planet.techLvl >= 10) {
          EndingLandingList.push(ending.landingBonus[0]); //	A squadron of the natives' spacecraft intercepts the seedship as it approaches and guides it down, while natives on the ground prepare a landing area.
          _native_landing_bonus = 50;
        } else if (planet.techLvl == 9) {
          EndingLandingList.push(ending.landingBonus[1]); //The native civilisation hastily launches a spacecraft to guide the seedship down, while natives on the ground prepare a landing area.
          _native_landing_bonus = 20;
        } else if (planet.techLvl == 8) {
          EndingLandingList.push(ending.landingBonus[2]); //The native civilisation launches a crude spacecraft to monitor the seedship as it approaches, while natives on the ground prepare a landing area.
          _native_landing_bonus = 10;
        };
      }
    };



    // Description of landing
    //Описание приземления
    if (ship.landing[0] >= 90) {
      EndingLandingList.push(ending.landing[0]);
      if (planet.anomalies.includes("Vegetation")) {
        EndingLandingList.push(ending.landingBut[1]); //   "touches gently down",
        EndingLandingList.push(ending.surface[3]); //   "a field of alien vegetation.",
      } else if (planet.water == "Planet-wide ocean") {
        EndingLandingList.push(ending.landingBut[0]); //  "splashes gently down into",
        EndingLandingList.push(ending.surface[1]); //  "the planet-wide ocean.",
      } else if (planet.water == "Ice-covered surface") {
        EndingLandingList.push(ending.landingBut[1]); //   "touches gently down",
        EndingLandingList.push(ending.surface[2]); //  "the top of the planet-wide ice sheet.",
      } else if (planet.water == "Oceans") {
        EndingLandingList.push(ending.landingBut[0]); //  "splashes gently down into",
        EndingLandingList.push(ending.surface[0]); //  "the ocean off the shore of one of the planet's continents.",
      } else {
        EndingLandingList.push(ending.landingBut[1]); //   "touches gently down",
        EndingLandingList.push(ending.surface[4]); //  "the rocky surface.",
      };
    } else if (ship.landing[0] <= 30) {
      EndingLandingList.push(ending.landing[2]);
      if (planet.anomalies.includes("Vegetation")) {
        EndingLandingList.push(ending.landingBut[5]); //  "ploughs through"
        EndingLandingList.push(ending.surface[5]); //  "a field of alien vegetation before coming to a stop."
      } else if (planet.water == "Planet-wide ocean") {
        EndingLandingList.push(ending.landingBut[4]); //  "splashes down hard into",
        EndingLandingList.push(ending.surface[1]); //  "the planet-wide ocean.",
      } else if (planet.water == "Ice-covered surface") {
        EndingLandingList.push(ending.landingBut[5]); //  "crashes into",
        EndingLandingList.push(ending.surface[2]); //  "the top of the planet-wide ice sheet.",
      } else if (planet.water == "Oceans") {
        EndingLandingList.push(ending.landingBut[4]); //  "splashes down hard into",
        EndingLandingList.push(ending.surface[0]); //  "the ocean off the shore of one of the planet's continents.",
      } else {
        EndingLandingList.push(ending.landingBut[5]); //  "crashes into",
        EndingLandingList.push(ending.surface[4]);  //  "the rocky surface.",
      };
    } else {
      EndingLandingList.push(ending.landing[1]);
      if (planet.anomalies.includes("Vegetation")) {
        EndingLandingList.push(ending.landingBut[3]);  //  "touches down on",
        EndingLandingList.push(ending.surface[3]);  //  "a field of alien vegetation.",
      } else if (planet.water == "Planet-wide ocean") {
        EndingLandingList.push(ending.landingBut[2]); //  "splashes down into",
        EndingLandingList.push(ending.surface[1]); //  "the planet-wide ocean.",
      } else if (planet.water == "Ice-covered surface") {
        EndingLandingList.push(ending.landingBut[3]);  //  "touches down on",
        EndingLandingList.push(ending.surface[2]); //  "the top of the planet-wide ice sheet.",
      } else if (planet.water == "Oceans") {
        EndingLandingList.push(ending.landingBut[2]); //  "splashes down into",
        EndingLandingList.push(ending.surface[0]); //  "the ocean off the shore of one of the planet's continents.",
      } else {
        EndingLandingList.push(ending.landingBut[3]);  //  "touches down on",
        EndingLandingList.push(ending.surface[4]);  //  "the rocky surface.",
      };
    };

    /* Roll to see if it is a landing or a crash */
    /* Roll crash damage and then reduce it by landing system integrity. */
    _damage = 100 - (ship.landing[0] + _native_landing_bonus);
    if (_damage > 0) {
      /* All systems are damaged by up to the damage amount.
      damageApply(ship.atmosphere,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.gravity,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.temperature,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.water,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.resources,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.probes,Math.ceil(getRandomInt(0, _damage/10)), "damage");
      damageApply(ship.landing,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.construction,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.science,Math.ceil(getRandomInt(0, _damage)), "damage");
      damageApply(ship.culture,Math.ceil(getRandomInt(0, _damage)), "damage");
      */
      /* Colonist deaths are lower (in proportion to the total colonists) - crash can't kill more than 500.
    damageApply(ship.colonists,Math.ceil(getRandomInt(0, _damage*5)), "damage");
    };
    */


      EndingLandingDamage[0].push(ship.atmosphere, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[1].push(ship.gravity, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[2].push(ship.temperature, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[3].push(ship.water, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[4].push(ship.resources, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[5].push(ship.probes, Math.ceil(getRandomInt(0, _damage / 10)), "damage");
      EndingLandingDamage[6].push(ship.landing, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[7].push(ship.construction, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[8].push(ship.science, Math.ceil(getRandomInt(0, _damage)), "damage");
      EndingLandingDamage[9].push(ship.culture, Math.ceil(getRandomInt(0, _damage)), "damage");

      EndingLandingDamage[10].push(ship.colonists, Math.ceil(getRandomInt(0, _damage * 5)), "damage");

    };
    console.log ("Colonists at the time of landing:" + ship.colonists);
    console.log ("Colonists will die:", EndingLandingDamage[10][1], cShip.colonists[0])
    console.log("Колонисты на момент посадки:" + ship.colonists);
    console.log("Колонистов погибнет: ", EndingLandingDamage[10][1], cShip.colonists[0])

    if ((cShip.colonists[0] - EndingLandingDamage[10][1]) <= 0) {
      hiscore.summary = "Crash";
    } else {
      journeyDeaths = colMax - ship.colonists[0];
      EndingLandingList.push(ending.difWords[6]); //   "The colonists wake from their sleep chambers and survey their new home.",

      // Description of the landscape
      //Описание пейзажа
      if (planet.anomalies.includes("Vegetation")) {
        switch (planet.gravity) {
          case 'Moderate':
            EndingLandingList.push(ending.surfaceFull[7]);
            break;
          case 'High':
            EndingLandingList.push(ending.surfaceFull[8]);
            break;
          case 'Low':
            EndingLandingList.push(ending.surfaceFull[6]);
            break;
          case 'Very High':
            EndingLandingList.push(ending.surfaceFull[9]);
            break;
          case 'Very Low':
            EndingLandingList.push(ending.surfaceFull[5]);
            break;
          default:
            break;
        };
      } else if (planet.water == "Planet-wide ocean") {
        switch (planet.gravity) {
          case 'Moderate':
            EndingLandingList.push(ending.surfaceFull[2]);
            break;
          case 'High':
            EndingLandingList.push(ending.surfaceFull[3]);
            break;
          case 'Low':
            EndingLandingList.push(ending.surfaceFull[1]);
            break;
          case 'Very High':
            EndingLandingList.push(ending.surfaceFull[4]);
            break;
          case 'Very Low':
            EndingLandingList.push(ending.surfaceFull[0]);
            break;
          default:
            break;
        };

      } else if (planet.water == "Ice-covered surface") {
        switch (planet.gravity) {
          case 'Moderate':
            EndingLandingList.push(ending.surfaceFull[12]);
            break;
          case 'High':
            EndingLandingList.push(ending.surfaceFull[13]);
            break;
          case 'Low':
            EndingLandingList.push(ending.surfaceFull[11]);
            break;
          case 'Very High':
            EndingLandingList.push(ending.surfaceFull[14]);
            break;
          case 'Very Low':
            EndingLandingList.push(ending.surfaceFull[10]);
            break;
          default:
            break;
        };
      } else if (planet.atmosphere == "None") {
        switch (planet.gravity) {
          case 'Moderate':
            EndingLandingList.push(ending.surfaceFull[17]);
            break;
          case 'High':
            EndingLandingList.push(ending.surfaceFull[18]);
            break;
          case 'Low':
            EndingLandingList.push(ending.surfaceFull[16]);
            break;
          case 'Very High':
            EndingLandingList.push(ending.surfaceFull[19]);
            break;
          case 'Very Low':
            EndingLandingList.push(ending.surfaceFull[15]);
            break;
          default:
            break;
        };
      } else {
        switch (planet.gravity) {
          case 'Moderate':
            EndingLandingList.push(ending.surfaceFull[22]);
            break;
          case 'High':
            EndingLandingList.push(ending.surfaceFull[23]);
            break;
          case 'Low':
            EndingLandingList.push(ending.surfaceFull[21]);
            break;
          case 'Very High':
            EndingLandingList.push(ending.surfaceFull[24]);
            break;
          case 'Very Low':
            EndingLandingList.push(ending.surfaceFull[20]);
            break;
          default:
            break;
        };
      };

      //sky
      //НЕБО

      switch (planet.atmosphere) {
        case 'Breathable':
          EndingLandingList.push(ending.sky[0]);
          break;
        case 'Marginal':
          EndingLandingList.push(ending.sky[1]);
          break;
        case 'None':
          EndingLandingList.push(ending.sky[2]);
          break;
        case 'Toxic':
          EndingLandingList.push(ending.sky[4]);
          break;
        case 'Corrosive':
          EndingLandingList.push(ending.sky[5]);
          break;
        case 'Non-breathable':
          EndingLandingList.push(ending.sky[3]);
          break;
      };


      //Planet name
      //НАЗВАНИЕ ПЛАНЕТЫ

      NamesCurLang[0] = NamesLang[options.language];

      if (options.language == 1) {
        NamesCurLang[1] = NamesRuRod;
      } else {
        NamesCurLang[1] = NamesLang[options.language];
      };

      if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
        if (options.language == 1) {
          planet.nameID = getRandomInt(0, (AlienNamesRu.length));
          NamesCurLang[0] = AlienNamesRu;
          NamesCurLang[1] = AlienNamesRu;
        } else {
          planet.nameID = getRandomInt(0, (AlienNames.length));
          NamesCurLang[0] = AlienNames;
          NamesCurLang[1] = AlienNames;
        };


        if (cPlanet.anomaliesFull.includes('Machine civilization')) {
          EndingLandingList.push(cAddonEnding.machines[1]); //   "Synthetic scientists and diplomats await the Seedship's landing, ready to make first contact. The landing pad is surrounded by autonomous turrets and sentry bots."

        } else {
          if (planet.techLvl < 6) {
            EndingLandingList.push(ending.natives[0]); //  "The seedship is quickly surrounded by a crowd of wary natives.",
          } else if (planet.techLvl < 8) {
            EndingLandingList.push(ending.natives[1]); //  "The seedship is quickly surrounded by an encampment of native soldiers, scholars, priests and diplomats.",
          } else {
            EndingLandingList.push(ending.natives[2]); //  "The seedship is quickly surrounded by an encampment of native soldiers, scientists, and diplomats.",
          };
        };


        if (cPlanet.anomaliesFull.includes('Machine civilization')) {
          EndingLandingList.push(cAddonEnding.machines[2] + NamesCurLang[1][planet.nameID] + "."); //   "With the help of the Seedship AI, two species manage to achieve communications, and the colonists learn that the natives call their planet ",

        } else {
          EndingLandingList.push(ending.natives[3] + NamesCurLang[1][planet.nameID] + "."); //   "The two species manage to achieve communications, and the colonists learn that the natives call their planet ",
        }

      } else {

        EndingLandingList.push(ending.difWords[3]);

	//Names.unshift("TestToFixBugMaybe"); //trying to see if this fixes a bug.
        if (planet.atmosphere == "Breathable"
          && planet.temperature == "Moderate"
          && planet.gravity == "Moderate"
          && planet.water == "Oceans"
          && planet.resources == "Rich") {
          planet.nameID = getRandomInt(0, 4)
          planet.name = Names[planet.nameID];
        } else if (planet.temperature == "Very Hot"
          || planet.temperature == "Hot") {
          planet.nameID = getRandomInt(5, 7)
          planet.name = Names[planet.nameID];
        } else if (planet.temperature == "Very Cold"
          || planet.temperature == "Cold") {
          planet.nameID = getRandomInt(8, 10)
          planet.name = Names[planet.nameID];
        };


        if (planet.gravity == "Very High" || planet.gravity == "High" && planet.water != "Planet-wide ocean") {
          planet.nameID = getRandomInt(11, 12)
          planet.name = Names[planet.nameID];
        } else if (planet.gravity == "Very Low" || planet.gravity == "Low" && planet.water != "Planet-wide ocean") {
          planet.nameID = getRandomInt(13, 14)
          planet.name = Names[planet.nameID];
        };


        if (planet.water == "Planet-wide ocean") {
          planet.nameID = getRandomInt(15, 18)
          planet.name = Names[planet.nameID];
        } else if (planet.water == "Ice-covered surface") {
          planet.nameID = getRandomInt(19, 22)
          planet.name = Names[planet.nameID];
        } else if (planet.water == "Trace") {
          planet.nameID = getRandomInt(23, 26)
          planet.name = Names[planet.nameID];
        };

        if (planet.resources == "Rich") {
          planet.nameID = getRandomInt(27, 30)
          planet.name = Names[planet.nameID];
        } else if (planet.resources == "Poor") {
          planet.nameID = getRandomInt(31, 32)
          planet.name = Names[planet.nameID];
        };

        if (planet.anomaliesFull.includes("Plant life") || planet.anomaliesFull.includes("Edible plants")) {
          planet.nameID = getRandomInt(33, 34)
          planet.name = Names[planet.nameID];
        } else if (planet.anomaliesFull.includes("Poisonous plants")) {
          planet.nameID = getRandomInt(35, 36)
          planet.name = Names[planet.nameID];
        };

        if (planet.anomaliesFull.includes("Airtight caves") || planet.anomaliesFull.includes("Insulated caves")) {
          planet.nameID = getRandomInt(37, 41)
          planet.name = Names[planet.nameID];
        };
        console.log(NamesCurLang)
        EndingLandingList.push(NamesCurLang[0][planet.nameID]);
        //    EndingLandingList.push(planet.name);
      };

// Description, why called the planet     
 //Описание, почему назвали планету


      switch (planet.name) {
        case "Inferno":
        case "Caliente":
        case "Scorcha":
          EndingLandingList.push(ending.nameBecause[0]);
          break;
        case "Arctica":
        case "Frigidia":
        case "Frigus":
          EndingLandingList.push(ending.nameBecause[1]);
          break;
        case "Cueball":
          EndingLandingList.push(ending.nameBecause[2]);
          break;
        case "Atlas":
          EndingLandingList.push(ending.nameBecause[3]);
          break;
        case "Crag":
        case "Rise":
          EndingLandingList.push(ending.nameBecause[4]);
          break;
        case "Atlantis":
        case "Oceanus":
        case "Thalassa":
        case "Pacifica":
          EndingLandingList.push(ending.nameBecause[5]);
          break;
        case "Snowball":
        case "Iceball":
        case "Popsicle":
        case "Glacia":
          EndingLandingList.push(ending.nameBecause[6]);
          break;
        case "Arid":
        case "Desert":
        case "Sandstone":
        case "Thirsty":
          EndingLandingList.push(ending.nameBecause[7]);
          break;
        case "Arcadia":
        case "Garden":
          EndingLandingList.push(ending.nameBecause[8]);
          break;
        case "Belladonna":
          EndingLandingList.push(ending.nameBecause[9]);
          break;
        case "Cornucopia":
          EndingLandingList.push(ending.nameBecause[10]);
          break;
        case "Warren":
        case "Honeycomb":
        case "Morlock":
        case "Subterra":
        case "Spelunk":
          EndingLandingList.push(ending.nameBecause[11]);
          break;
        case "Bounty":
        case "El Dorado":
        case "Hephaestus":
        case "Midas":
          EndingLandingList.push(ending.nameBecause[12]);
          break;
        case "Dearth":
        case "Paucity":
          EndingLandingList.push(ending.nameBecause[13]);
          break;
        case "Eden":
        case "Paradise":
        case "Gaia":
          EndingLandingList.push(ending.nameBecause[14]);
          break;
        case "New Earth":
        case "Terra Nova":
          EndingLandingList.push(ending.nameBecause[15]);
          break;
        case "This World":
          EndingLandingList.push("because it is this world.");
          break;

      };

      if (ship.colonists[0] < colMax) {
        journeyDeaths = colMax - ship.colonists[0];
        EndingLandingList.push(ending.difWords[4] + journeyDeaths + ending.difWords[5]); //  "They build a memorial to the ", + The dead colonists +  " colonists who did not survive the journey.",
      };
    };
  };

  function fc_construction() {
// Second Description Page
    //ВТОРАЯ СТРАНИЦА ОПИСАНИЯ

    if (ship.construction[0] >= 90) {
      EndingConstructionList.push(ending.construction[0]);
    } else if (ship.construction[0] >= 50) {
      EndingConstructionList.push(ending.construction[1]);
    } else if (ship.construction[0] == 0) {
      EndingConstructionList.push(ending.construction[3]);
    } else {
      EndingConstructionList.push(ending.construction[2]);
    };


    if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          EndingLandingList.push(cAddonEnding.machines[3]);
        };
      } else {
        EndingConstructionList.push(ending.natives[4]);
      }
    }

// Description of the caves  if they exist     
 // Описание пещер, если они есть


    if (planet.anomaliesFull.includes("Airtight caves") && planet.atmosphere != "Breathable"
      && planet.anomaliesFull.includes("Insulated caves") && planet.temperature != "Moderate") {
      EndingConstructionList.push(ending.caves[4]);
    } else if (planet.anomaliesFull.includes("Airtight caves") && planet.atmosphere != "Breathable") {
      EndingConstructionList.push(ending.caves[5]);
    } else if (planet.anomaliesFull.includes("Insulated caves") && planet.temperature != "Moderate") {
      EndingConstructionList.push(ending.caves[6]);
    } else if (planet.anomaliesFull.includes("Airtight caves") || planet.anomaliesFull.includes("Insulated caves")) {
      EndingConstructionList.push(ending.caves[7]);
    };


    //Atmosphere
    //Атмосфера
    if (atmosphereDeaths > 0 || temperatureDeaths > 0) {
      _p = ","
    } else {
      _p = "."
    };
    environment_suits = false;

    switch (planet.atmosphere) {
      case 'Corrosive':
        environment_suits = true
        EndingConstructionList.push(ending.atmosphere[0]);
        if (planet.temperature == "Moderate") {
          EndingConstructionList.push(ending.atmosphere[6] + _p);
        } else {
          EndingConstructionList.push(ending.atmosphere[7]);
        }
        break;
      case 'Toxic':
        environment_suits = true
        EndingConstructionList.push(ending.atmosphere[1]);
        if (planet.temperature == "Moderate") {
          EndingConstructionList.push(ending.atmosphere[6] + _p);
        } else {
          EndingConstructionList.push(ending.atmosphere[7]);
        }
        break;
      case 'None':
        environment_suits = true
        EndingConstructionList.push(ending.atmosphere[2]);
        if (planet.temperature == "Moderate") {
          EndingConstructionList.push(ending.atmosphere[8] + _p);
        } else {
          EndingConstructionList.push(ending.atmosphere[9]);
        }
        break;
      case 'Breathable':
        EndingConstructionList.push(ending.atmosphere[3]);
        break;
      case 'Marginal':
        EndingConstructionList.push(ending.atmosphere[4]);
        break;

      case 'Non-breathable':
        EndingConstructionList.push(ending.atmosphere[5]);
        break;
    };


    if (environment_suits) {
      switch (planet.temperature) {
        case 'Moderate':
          break;
        case 'Hot':
          EndingConstructionList.push(ending.atmosphere[10] + _p);
          break;
        case 'Cold':
          EndingConstructionList.push(ending.atmosphere[11] + _p);
          break;
        case 'Very Hot':
          EndingConstructionList.push(ending.atmosphere[12] + _p);
          break;
        case 'Very Cold':
          EndingConstructionList.push(ending.atmosphere[13] + _p);
          break;
        default:
          break;

      };
    } else {
      switch (planet.temperature) {

        case 'Moderate':
          EndingConstructionList.push(ending.temperature[0] + _p);
          break;
        case 'Hot':
          EndingConstructionList.push(ending.temperature[1] + _p);
          break;
        case 'Cold':
          EndingConstructionList.push(ending.temperature[2] + _p);
          break;
        case 'Very Hot':
          EndingConstructionList.push(ending.temperature[3] + _p);
          break;
        case 'Very Cold':
          EndingConstructionList.push(ending.temperature[4] + _p);
          break;
        default:
          break;
      };
    }

    /* Output atmosphere and temperature deaths */
    if (atmosphereDeaths > 0) {
      if (temperatureDeaths > 0) {
        _p = ","
      } else {
        _p = "."
      };
      switch (cPlanet.atmosphere) {
        case "Corrosive":
          if (atmosphereDeaths == 1) {
            EndingConstructionList.push(ending.atmosphereBut[0] + _p);
          } else {
            EndingConstructionList.push(ending.atmosphereBut[1] + atmosphereDeaths + ending.atmosphereBut[2] + _p);
          };
          break;
        case "Toxic":
          if (atmosphereDeaths == 1) {
            EndingConstructionList.push(ending.atmosphereBut[3] + _p);
          } else {
            EndingConstructionList.push(ending.atmosphereBut[4] + atmosphereDeaths + ending.atmosphereBut[5] + _p);
          };
          break;
        case "None":
          if (atmosphereDeaths == 1) {
            EndingConstructionList.push(ending.atmosphereBut[6] + _p);
          } else {
            EndingConstructionList.push(ending.atmosphereBut[7] + atmosphereDeaths + ending.atmosphereBut[8] + _p);
          };
          break;
        case "Non-breathable":
        case "Marginal":
          if (atmosphereDeaths == 1) {
            EndingConstructionList.push(ending.atmosphereBut[9] + _p);
          } else {
            EndingConstructionList.push(ending.atmosphereBut[10] + atmosphereDeaths + ending.atmosphereBut[11] + _p);
          };
          break;
        case "Breathable":
          if (atmosphereDeaths == 1) {
            EndingConstructionList.push(ending.atmosphereBut[12] + _p);
          } else {
            EndingConstructionList.push(ending.atmosphereBut[13] + atmosphereDeaths + ending.atmosphereBut[14] + _p);
          };
          break;
        default:
          console.log("Unexpected atmosphere value " + cPlanet.atmosphere);
          break;
      }
      if (temperatureDeaths > 0)
        switch (cPlanet.temperature) {
          case "Very Hot":
            if (temperatureDeaths == 1) {
              EndingConstructionList.push(ending.temperatureBut[0]);
            } else {
              EndingConstructionList.push(ending.temperatureBut[1] + temperatureDeaths + ending.temperatureBut[2]);
            };
            break;
          case "Hot":
            if (temperatureDeaths == 1) {
              EndingConstructionList.push(ending.temperatureBut[3]);
            } else {
              EndingConstructionList.push(ending.temperatureBut[4] + temperatureDeaths + ending.temperatureBut[5]);
            };
            break;
          case "Moderate":
            if (temperatureDeaths == 1) {
              EndingConstructionList.push(ending.temperatureBut[6]);
            } else {
              EndingConstructionList.push(ending.temperatureBut[7] + temperatureDeaths + ending.temperatureBut[8]);
            };
            break;
          case "Cold":
            if (temperatureDeaths == 1) {
              EndingConstructionList.push(ending.temperatureBut[9]);
            } else {
              EndingConstructionList.push(ending.temperatureBut[10] + temperatureDeaths + ending.temperatureBut[11]);
            };
            break;
          case "Very Cold":
            if (temperatureDeaths == 1) {
              EndingConstructionList.push(ending.temperatureBut[12]);
            } else {
              EndingConstructionList.push(ending.temperatureBut[13] + temperatureDeaths + ending.temperatureBut[14]);
            };
            break;
          default:
            console.log("Unexpected temperature value" + cPlanet.temperature);
            break;
        };


    } else if (temperatureDeaths > 0) {
      switch (cPlanet.temperature) {
        case "Very Hot":
          if (temperatureDeaths == 1) {
            EndingConstructionList.push(ending.temperatureBut[15]);
          } else {
            EndingConstructionList.push(ending.temperatureBut[16] + temperatureDeaths + ending.temperatureBut[17]);
          };
          break;
        case "Hot":
          if (temperatureDeaths == 1) {
            EndingConstructionList.push(ending.temperatureBut[18]);
          } else {
            EndingConstructionList.push(ending.temperatureBut[19] + temperatureDeaths + ending.temperatureBut[20]);
          };
          break;
        case "Moderate":
          if (temperatureDeaths == 1) {
            EndingConstructionList.push(ending.temperatureBut[21]);
          } else {
            EndingConstructionList.push(ending.temperatureBut[22] + temperatureDeaths + ending.temperatureBut[23]);
          };
          break;
        case "Cold":
          if (temperatureDeaths == 1) {
            EndingConstructionList.push(ending.temperatureBut[24]);
          } else {
            EndingConstructionList.push(ending.temperatureBut[25] + temperatureDeaths + ending.temperatureBut[26]);
          };
          break;
        case "Very Cold":
          if (temperatureDeaths == 1) {
            EndingConstructionList.push(ending.temperatureBut[27]);
          } else {
            EndingConstructionList.push(ending.temperatureBut[28] + temperatureDeaths + ending.temperatureBut[29]);
          };
          break;
        default:
          console.log("Unexpected temperature value " + cPlanet.temperature);
          break;
      };
    };

    // Animals and plants
    //Животные и растения
    if (planet.anomaliesFull.includes("Useful animals")) {
      switch (planet.gravity) {
        case 'Moderate':
          EndingConstructionList.push(ending.animals[2]);
          break;
        case 'High':
          EndingConstructionList.push(ending.animals[1]);
          break;
        case 'Low':
          EndingConstructionList.push(ending.animals[3]);
          break;
        case 'Very High':
          EndingConstructionList.push(ending.animals[0]);
          break;
        case 'Very Low':
          EndingConstructionList.push(ending.animals[4]);
          break;
        default:
          break;
      };
    } else {
      switch (planet.gravity) {
        case 'Moderate':
          EndingConstructionList.push(ending.gravity[0]);
          break;
        case 'High':
          EndingConstructionList.push(ending.gravity[1]);
          break;
        case 'Low':
          EndingConstructionList.push(ending.gravity[2]);
          break;
        case 'Very High':
          EndingConstructionList.push(ending.gravity[3]);
          break;
        case 'Very Low':
          EndingConstructionList.push(ending.gravity[4]);
          break;
        default:
          break;
      };
    };

/ * Description of deaths from gravity * /    
/* Описание смертей от гравитации */

    if (gravityDeaths > 0) {
      if (planet.anomaliesFull.includes("Useful animals") || planet.gravity == "Moderate") {

      } else if (planet.gravity == "Low" || planet.gravity == "Very Low") {
        EndingConstructionList.push(gravityDeaths + ending.gravityBut[4]);
      } else {
        EndingConstructionList.push(gravityDeaths + ending.gravityBut[5]);
      };
    };

    //

    if (waterDeaths > 0) {
      _p = ","
    } else {
      _p = "."
    };

    if (planet.anomaliesFull.includes("Edible plants")) {
      switch (planet.water) {
        case 'Oceans':
          EndingConstructionList.push(ending.plants[9] + _p);
          break;
        case 'Ice caps':
          EndingConstructionList.push(ending.plants[8] + _p);
          break;
        case 'Planet-wide ocean':
          EndingConstructionList.push(ending.plants[7] + _p);
          break;
        case 'Ice-covered surface':
          EndingConstructionList.push(ending.plants[6] + _p);
          break;
        case 'Trace':
          EndingConstructionList.push(ending.plants[5] + _p);
          break;
        default:
          EndingConstructionList.push(ending.plants[4] + _p);
          break;
      };
    } else {
      switch (planet.water) {
        case 'Oceans':
          EndingConstructionList.push(ending.water[0] + _p);
          break;
        case 'Ice caps':
          EndingConstructionList.push(ending.water[1] + _p);
          break;
        case 'Planet-wide ocean':
          EndingConstructionList.push(ending.water[2] + _p);
          break;
        case 'Ice-covered surface':
          EndingConstructionList.push(ending.water[3] + _p);
          break;
        case 'Trace':
          EndingConstructionList.push(ending.water[4] + _p);
          break;
        default:
          EndingConstructionList.push(ending.water[5] + _p);
          break;
      };
    };
    /* Description of deaths from water */
    /* Описание смертей от воды*/
    if (waterDeaths > 0) {
      if (planet.anomaliesFull.includes("Edible plants")) {
        EndingConstructionList.push(ending.waterBut[2] + waterDeaths + ending.waterBut[3]);
      } else {
        EndingConstructionList.push(ending.waterBut[0] + waterDeaths + ending.waterBut[1]);
      };
    };



    / * Influence of unstable geology * /
     /* Влияние нестабильной геологии*/
    if (planet.anomaliesFull.includes("Unstable geology") && ship.colonists[0] > 0) {
      if (getRandomInt(0, 99) < ship.construction[0]) {
        featureDeaths = killColonists("Medium");
        geologyDeaths = featureDeaths;
        //    damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.caves[0] + featureDeaths + ending.caves[1]);

      } else {
        featureDeaths = killColonists("High")
        geologyDeaths = featureDeaths;
        //    damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.caves[2] + featureDeaths + ending.caves[3]);
      };
    };
    //

    // The effect of poisonous plants
    // Влияние ядовитых растений
    if (planet.anomaliesFull.includes("Poisonous plants") && ship.colonists[0] > 0) {
      if (getRandomInt(0, 99) < ship.construction[0]) {
        featureDeaths = killColonists("Medium");
        plantsDeaths = featureDeaths;
        //    damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.plants[0] + featureDeaths + ending.plants[1]);

      } else {
        featureDeaths = killColonists("High")
        plantsDeaths = featureDeaths;
        //  damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.plants[2] + featureDeaths + ending.plants[3]);
      };
    };
    //

    //Effect of dangerous animals
    //Влияние опасных животных
    if (planet.anomaliesFull.includes("Dangerous animals") && ship.colonists[0] > 0) {
      if (getRandomInt(0, 99) < ship.construction[0]) {
        featureDeaths = killColonists("Medium");
        animalDeaths = featureDeaths;
        //  damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.animals[5] + featureDeaths + ending.animals[6]);
      } else {
        featureDeaths = killColonists("High")
        animalDeaths = featureDeaths;
        //  damageApply(ship.colonists, featureDeaths, "damage");
        EndingConstructionList.push(ending.animals[7] + featureDeaths + ending.animals[8]);
      };
    };

    //Damage
    //УРОН ОТ СТАТОВ ПЛАНЕТЫ
    allDeaths = atmosphereDeaths + temperatureDeaths + gravityDeaths + waterDeaths + geologyDeaths + animalDeaths + plantsDeaths;
    EndingConstructionDamage[0].push(ship.colonists, allDeaths, "damage");

    //

    if (ship.colonists[0] <= 0) {
      hiscore.summary = "Construction Failure"
    };

  };


  //Interaction with local, if unpaved civilization
  //Взаимодействие с местными, в случае если всепланетная цивилизация
  function fci_relations() {
    planet.cultureScore = 0;
    switch (planet.culture) {
      case 0:
        planet.cultureScore = 0;
        break;
      case 1:
        planet.cultureScore = 25;
        break;
      case 2:
        planet.cultureScore = 50;
        break;
      case 3:
        planet.cultureScore = 75;
        break;
      case 4:
        planet.cultureScore = 100;
        break;
      case 5:
        planet.cultureScore = 0;
        break;
      case 6:
        planet.cultureScore = 25;
        break;
      case 7:
        planet.cultureScore = 50;
        break;
      case 8:
        planet.cultureScore = 75;
        break;
      case 9:
        planet.cultureScore = 100;
        break;
      case 10:
        planet.cultureScore = 0;
        break;
      case 11:
        planet.cultureScore = 10;
        break;
      case 12:
        planet.cultureScore = 25;
        break;
      case 13:
        planet.cultureScore = 50;
        break;
      case 14:
        planet.cultureScore = 75;
        break;
      case 15:
        planet.cultureScore = 90;
        break;
      case 16:
        planet.cultureScore = 100;
        break;
      default:
        console.log("Unexpected native culture = " + planet.culture);
        break;
    };

    var _culture_score = (ship.cultureScore + planet.cultureScore) / 2


    /* Output text */
    if (cPlanet.anomaliesFull.includes('Machine civilization')) {
      if (cMachineDoctrine == "Guardian") {
        EndingPSCrelationsList.push(ending.nativeInteractions[21]);
      } else {
        EndingPSCrelationsList.push(cAddonEnding.machines[6]);
      };
    } else {
      EndingPSCrelationsList.push(ending.nativeInteractions[21]);

      if (cShip.culture[0] >= 100) {
        EndingPSCrelationsList.push(ending.nativeInteractions[22])
        if (planet.cultureScore > 75) { EndingPSCrelationsList.push(ending.nativeInteractions[38]) } else { EndingPSCrelationsList.push(ending.nativeInteractions[39]) };
      } else if (cShip.culture[0] >= 50) {
        EndingPSCrelationsList.push(ending.nativeInteractions[23])
        if (planet.cultureScore > 75) { EndingPSCrelationsList.push(ending.nativeInteractions[38]) } else { EndingPSCrelationsList.push(ending.nativeInteractions[39]) };
      } else if (cShip.culture[0] > 0) {
        EndingPSCrelationsList.push(ending.nativeInteractions[24])
        if (planet.cultureScore > 75) { EndingPSCrelationsList.push(ending.nativeInteractions[39]) } else { EndingPSCrelationsList.push(ending.nativeInteractions[38]) };
      } else {
        EndingPSCrelationsList.push(ending.nativeInteractions[25])
        if (planet.cultureScore > 75) { EndingPSCrelationsList.push(ending.nativeInteractions[39]) } else { EndingPSCrelationsList.push(ending.nativeInteractions[38]) };
      };

      if (planet.cultureScore < 25) {
        EndingPSCrelationsList.push(ending.nativeInteractions[26])
      } else if (planet.cultureScore < 50) {
        EndingPSCrelationsList.push(ending.nativeInteractions[27])
      } else if (planet.cultureScore < 75) {
        EndingPSCrelationsList.push(ending.nativeInteractions[28])
      } else if (planet.cultureScore < 90) {
        EndingPSCrelationsList.push(ending.nativeInteractions[29])
      } else {
        EndingPSCrelationsList.push(ending.nativeInteractions[30])
      };

      if (cPlanet.anomaliesFull.includes("Outstanding beauty")) {
        EndingPSCrelationsList.push(ending.nativeInteractions[31])
        /* Increase by 20 but don't go above 100 unless it already is */
        if (_culture_score <= 100 && _culture_score > 80) {
          _culture_score = 100;
        } else {
          _culture_score += 20;
        };
        console.log("Modified culture score: " + _culture_score);
      } else if (cPlanet.anomaliesFull.includes("Outstanding ugliness")) {
        EndingPSCrelationsList.push(ending.nativeInteractions[32])
        _culture_score -= 20
        console.log("Modified culture score: " + _culture_score);
      };

      if (cPlanet.anomaliesFull.includes("Welcoming")) {
        _culture_score = Math.max(_culture_score, 50);
        EndingPSCrelationsList.push(ending.nativeInteractions[33])
      } else if (cPlanet.anomaliesFull.includes("Unwelcoming")) {
        _culture_score = Math.min(_culture_score, 24);
        EndingPSCrelationsList.push(ending.nativeInteractions[34])
      };
    };

    if (cPlanet.anomaliesFull.includes('Machine civilization')) {
      switch (cMachineDoctrine) {
        case "Assimilator":
          EndingPSCrelationsList.push(cAddonEnding.machines[4]); //"The colonists learn that a native synthetic species has enslaved and assimilated the species that created them. Unfortunately, it is too late to escape. The natives assimilate humans by modifying their bodies, and absorb them into their Gestalt Consciousness."
          hiscore.native_relations = 10
          hiscore.summary = "Assimilated by synthetics"
              if (options.platform == "Android") {
                var data = {
                  achievementId: "CgkIya77kP0DEAIQFg"
                  //WeAreBorg
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                  // On success
                }, function () {
                  // On error
                });
              };
          break;
        case 'Exterminator':
          EndingPSCrelationsList.push(cAddonEnding.machines[5]); //As the surface probe approaches the planet it scans the planet's moon, and finds that it is rich in metals and other useful resources.
          hiscore.native_relations = 11
          hiscore.summary = "Exterminated by synthetics"
              if (options.platform == "Android") {
                var data = {
                  achievementId: "CgkIya77kP0DEAIQGA"
                  //OrganicLifeIsNothingButAGeneticMutationAnAccident
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                  // On success
                }, function () {
                  // On error
                });
              };
          EndingPSCrelationsDamage[0].push(ship.colonists, ship.colonists[0], "damage");
          break;
        case 'Guardian':
          hiscore.native_relations = 15
          EndingPSCrelationsList.push(cAddonEnding.machines[7]); //"The colonists learn that the native synthetic species was developed to assist and protect their creators. Unfortunately, a planetary cataclysm destroyed them long ago. The machines, left without their masters, plunged into stasis. Gashtalt Consciousness of the machines, deprived of the purpose of existence, now decided to protect a new sentient species - humans."
          break;
      };
    } else {
      if (_culture_score > 48) {
        hiscore.native_relations = 7
        EndingPSCrelationsList.push(ending.nativeInteractions[35])

      } else if (_culture_score > 24) {
        EndingPSCrelationsList.push(ending.nativeInteractions[36])
        hiscore.native_relations = 2
        hiscore.summary = "Enslaved by Natives"
        cShip.colonists[0] = 0

      } else {
        EndingPSCrelationsList.push(ending.nativeInteractions[37])
        hiscore.native_relations = 0
        hiscore.summary = "Killed by Natives"
        EndingPSCrelationsDamage[0].push(ship.colonists, ship.colonists[0], "damage");

        if (options.platform == "Android") {
          var data = {
            achievementId: "CgkIya77kP0DEAIQAw"
            //"Welcoming" Natives
          };
          cordova.plugins.playGamesServices.unlockAchievement(data, function () {
            // On success
          }, function () {
            // On error
          });
        };
        //damageApply(cShip.colonists, 0, "set");
      };
    };
    if (hiscore.native_relations == 7) {
      /* Final culture result is just the natives' culture */
      /* Your culture score gives you a unique native relations result */

      _culture_score = cShip.culture[0] * Math.min(cShip.colonists[0] / colMax, 1)
      console.log("Culture score: " + _culture_score)

      if (cShip.culture[0] > 100) {
        EndingPSCrelationsList.push(ending.PSCTInteractions[0])
      } else if (cShip.culture[0] >= 50) {
        EndingPSCrelationsList.push(ending.PSCTInteractions[1])
      } else if (cShip.culture[0] > 0) {
        EndingPSCrelationsList.push(ending.PSCTInteractions[2])
      } else {
        EndingPSCrelationsList.push(ending.PSCTInteractions[3])
      }

      if (cShip.colonists[0] < colMax / 2) {
        EndingPSCrelationsList.push(ending.PSCTInteractions[4])
      } else if (cShip.colonists[0] < colMax) {
        EndingPSCrelationsList.push(ending.PSCTInteractions[5])
      }

      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          if (_culture_score >= 66) {
            hiscore.native_relations = 13
            EndingPSCrelationsList.push(cAddonEnding.machinesInteractions[0])
          } else if (_culture_score >= 33) {
            hiscore.native_relations = 14
            EndingPSCrelationsList.push(cAddonEnding.machinesInteractions[1])
          } else {
            hiscore.native_relations = 15
            EndingPSCrelationsList.push(cAddonEnding.machinesInteractions[2])
          };
        };
      } else {
        if (_culture_score >= 66) {
          hiscore.native_relations = 9
          EndingPSCrelationsList.push(ending.PSCTInteractions[6])
        } else if (_culture_score >= 33) {
          hiscore.native_relations = 8
          EndingPSCrelationsList.push(ending.PSCTInteractions[7])
        } else {
          hiscore.native_relations = 7
          EndingPSCrelationsList.push(ending.PSCTInteractions[8])
        };
      };
    };
  };
  //Конец блока первого контакта
  //End of first contact block
	
  function fci_technology() {
    //Технологии вместе с местными, в случае если всепланетная цивилизация
	  //Technologies together with local ones, if the planetary civilization
    if (cPlanet.anomaliesFull.includes('Machine civilization')) {
      if (cMachineDoctrine == "Guardian") {
        EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[3])
        if (cShip.science[0] < 50) { EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[4]) };
        EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[5])
      };
    } else {
      EndingPSCTechnologyList.push(ending.PSCTInteractions[9])
      if (cShip.science[0] < 50) { EndingPSCTechnologyList.push(ending.PSCTInteractions[10]) };
      EndingPSCTechnologyList.push(ending.PSCTInteractions[11])
    };
    /* A fully intact database will boost by +5 */
    _boost = Math.floor(cShip.science[0] / 20);
    _max = Math.floor(cShip.science[0] / 10) - 1;
    if (cPlanet.anomaliesFull.includes("Metal-rich moon")) {
      if (cPlanet.resources == "Poor") {
        _max = Math.min(_max, 9);
      } else if (cPlanet.resources == "None") {
        _max = Math.min(_max, 8);
      };
    } 
    else {
      if (cPlanet.resources == "Poor") {
        _max = Math.min(_max, 7)
      } else if (cPlanet.resources == "None") {
        _max = Math.min(_max, 4)
      };
    };

    _new_tech_level = Math.min(cPlanet.techLvl + _boost, _max);

    if (_new_tech_level < cPlanet.techLvl) {
      /* This shouldn't happen, but just in case: tech level can't go down */
      _new_tech_level = cPlanet.techLvl
    };

    if (_new_tech_level > 10) {
      /* Can't go higher than post-singularity */
      _new_tech_level = 10
    };

    if (cPlanet.anomaliesFull.includes("Unstable moon")) {
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[6])
          _boost -= 2
        };
      } else {
        EndingPSCTechnologyList.push(ending.PSCTInteractions[12])
        _boost -= 3
      };
    }



    if (_new_tech_level <= cPlanet.techLvl) {
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[7])
        };
      } else {
        EndingPSCTechnologyList.push(ending.PSCTInteractions[13])
      }
    } else {
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[8])
        };
      } else {
        EndingPSCTechnologyList.push(ending.PSCTInteractions[14])
      }
      if (cPlanet.anomaliesFull.includes("Metal-rich moon") && cPlanet.resources != "Rich") {
        EndingPSCTechnologyList.push(ending.PSCTInteractions[15])
      };
      switch (_new_tech_level) {
        case 0:
          console.log("Native civilisation 'advanced' to lowest possible tech level.")
          break;
        case 1:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[16]);
          break;
        case 2:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[17]);
          break;
        case 3:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[18]);
          break;
        case 4:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[19]);
          break;
        case 5:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[20]);
          break;
        case 6:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[21]);
          break;
        case 7:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[22]);
          break;
        case 8:
          EndingPSCTechnologyList.push(ending.PSCTInteractions[23]);
          break;
        case 9:
          if (cPlanet.anomaliesFull.includes('Machine civilization')) {
            if (cMachineDoctrine == "Guardian") {
              EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[12])
            };
          } else {
            EndingPSCTechnologyList.push(ending.PSCTInteractions[24]);
          }
          break;
        case 10:
          if (cPlanet.anomaliesFull.includes('Machine civilization')) {
            if (cMachineDoctrine == "Guardian") {
              EndingPSCTechnologyList.push(cAddonEnding.machinesInteractions[12])
            };
          } else {
            EndingPSCTechnologyList.push(ending.PSCTInteractions[25]);
          }
          break;
        default:
          console.log("Unexpected tech level " + _new_tech_level);
          break;
      };

      cPlanet.techLvl = _new_tech_level;
      /* Update culture level to the appropriate category for the new tech level */
      if (planet.culture < 5 && _new_tech_level >= 2) {
        planet.culture += 5
      };
      if (planet.culture < 10 && _new_tech_level >= 8) {
        planet.culture += 6
      };
    };

    hiscore.final_tech_level = cPlanet.techLvl
    hiscore.final_culture = planet.culture
  };
  // End of interaction with non-plane local

  // Third Description Page
  //Конец взаимодействия со всепланетными местными

  // Третья страница описания
  function fc_technology() {
    switch (planet.resources) {
      case 'Rich':
        EndingTechnologyList.push(ending.resources[0]);
        if (ship.science[0] >= 100) {
          EndingTechnologyList.push(ending.resourcesBut[8]);
        } else if (ship.science[0] >= 50) {
          EndingTechnologyList.push(ending.resourcesBut[9]);
        } else if (ship.science[0] < 50) {
          EndingTechnologyList.push(ending.resourcesBut[10]);
        } else if (ship.science[0] == 0) {
          EndingTechnologyList.push(ending.resourcesBut[11]);
        } else {
        };
        break;
      case 'Poor':
        EndingTechnologyList.push(ending.resources[1]);
        if (ship.science[0] >= 100) {
          EndingTechnologyList.push(ending.resourcesBut[4]);
        } else if (ship.science[0] >= 50) {
          EndingTechnologyList.push(ending.resourcesBut[5]);
        } else if (ship.science[0] < 50) {
          EndingTechnologyList.push(ending.resourcesBut[6]);
        } else if (ship.science[0] == 0) {
          EndingTechnologyList.push(ending.resourcesBut[7]);
        } else {
        };
        break;
      case 'None':
        EndingTechnologyList.push(ending.resources[2]);
        if (ship.science[0] >= 100) {
          EndingTechnologyList.push(ending.resourcesBut[0]);
        } else if (ship.science[0] >= 50) {
          EndingTechnologyList.push(ending.resourcesBut[1]);
        } else if (ship.science[0] < 50) {
          EndingTechnologyList.push(ending.resourcesBut[2]);
        } else if (ship.science[0] == 0) {
          EndingTechnologyList.push(ending.resourcesBut[3]);
        } else {
        };
        break;
      default:
        break;
    };

    //The influence of the Moon
    ////Влияние луны
    if (planet.anomaliesFull.includes("Metal-rich moon")) {
      EndingTechnologyList.push(ending.moon[0]);
      if (planet.resources == "Rich") {
        EndingTechnologyList.push(ending.moon[1]);
      } else {
        EndingTechnologyList.push(ending.moon[2]);
      }
    };

    if (planet.anomaliesFull.includes("Unstable moon")) {
      EndingTechnologyList.push(ending.moon[3]);
      finalTech -= 30;
    };




    //Technological level
    //ТЕХНОЛОГИЧЕСКИЙ УРОВЕНЬ

    if (finalTech > 100 && ship.science[0] > 100) {
      EndingTechnologyList.push(ending.science[0]);
      ship.techLvl = 10;
    } else if ((finalTech <=100 && ship.science == 100) || (finalTech <= 100 && finalTech >=90)) {
      EndingTechnologyList.push(ending.science[1]);
      ship.techLvl = 9

    } else if (finalTech >= 80) {
      EndingTechnologyList.push(ending.science[2]);
      ship.techLvl = 8;

    } else if (finalTech >= 70) {
      EndingTechnologyList.push(ending.science[3]);
      ship.techLvl = 7;

    } else if (finalTech >= 60) {
      EndingTechnologyList.push(ending.science[4]);
      ship.techLvl = 6;

    } else if (finalTech >= 50) {
      EndingTechnologyList.push(ending.science[5]);
      ship.techLvl = 5;

    } else if (finalTech >= 40) {
      EndingTechnologyList.push(ending.science[6]);
      ship.techLvl = 4;

    } else if (finalTech >= 30) {
      EndingTechnologyList.push(ending.science[7]);
      ship.techLvl = 3;

    } else if (finalTech >= 20) {
      EndingTechnologyList.push(ending.science[8]);
      ship.techLvl = 2;

    } else if (finalTech >= 10) {
      EndingTechnologyList.push(ending.science[9]);
      ship.techLvl = 1;

    } else if (finalTech <= 0) { //really can't go below 0, but want to cover potential less than 0 bugs.
      EndingTechnologyList.push(ending.science[10]);
      ship.techLvl = 0;

    } else {
    };

    hiscore.final_tech_level = ship.techLvl;

    //Maintaining life on the planet
    //Поддержание жизни на планете

    if (finalTech <= 70 &&
      (planet.atmosphere == "Corrosive" || planet.atmosphere == "Toxic" || planet.atmosphere == "Non-breathable" || planet.atmosphere == "None"
        || planet.temperature == "Very Cold" || planet.temperature == "Very Hot"
        || planet.gravity == "Very Low" || planet.gravity == "Very High"
        || planet.water == "None" || planet.water == "Trace")) {

      EndingTechnologyList.push(ending.sustain[0]);

      if (planet.atmosphere == "Corrosive" || planet.atmosphere == "Toxic" || planet.atmosphere == "Non-breathable" || planet.atmosphere == "None") {
        var _atmosphere_problem = true;
        if (getRandomInt(0, 99) < ship.science[0]) {
          _atmosphere_problem = false;
        };
      };


      if (planet.temperature == "Very Cold" || planet.temperature == "Very Hot") {
        var _temperature_problem = true;
        if (getRandomInt(0, 99) < ship.science[0]) {
          _temperature_problem = false;
        };
      };
      if (planet.gravity == "Very Low" || planet.gravity == "Very High") {
        var _gravity_problem = true;
        if (getRandomInt(0, 99) < ship.science[0]) {
          _gravity_problem = false;
        };
      };
      if (planet.water == "None" || planet.water == "Trace") {
        var _water_problem = true;
        if (getRandomInt(0, 99) < ship.science[0]) {
          _water_problem = false;
        };
      };



      if (_atmosphere_problem == true) {
        EndingTechnologyList.push(ending.sustain[1]);
        EndingTechnologyDamage[0].push(ship.colonists, 10000, "damage");
        //  damageApply(cShip.colonists, 0, "set");
        hiscore.final_tech_level = -1;
        hiscore.summary = "Long-Term Technological Failure (Atmosphere)";

      } else if (_temperature_problem == true) {
        EndingTechnologyList.push(ending.sustain[2]);
        EndingTechnologyDamage[0].push(ship.colonists, 10000, "damage");
        //  damageApply(cShip.colonists, 0, "set");
        hiscore.final_tech_level = -1;
        hiscore.summary = "Long-Term Technological Failure (Temperature)";

      } else if (_gravity_problem == true) {
        EndingTechnologyList.push(ending.sustain[3] + planet.gravity.toLowerCase() + ending.sustain[11]);
        EndingTechnologyDamage[0].push(ship.colonists, 10000, "damage");
        //  damageApply(cShip.colonists, 0, "set");
        hiscore.final_tech_level = -1;
        hiscore.summary = "Long-Term Technological Failure (Gravity)";

      } else if (_water_problem == true) {
        EndingTechnologyList.push(ending.sustain[4]);
        EndingTechnologyDamage[0].push(ship.colonists, 10000, "damage");
        //  damageApply(cShip.colonists, 0, "set");
        hiscore.final_tech_level = -1;
        hiscore.summary = "Long-Term Technological Failure (Water)";

      } else {
        EndingTechnologyList.push(ending.sustain[5]);
      };

      if (_atmosphere_problem == false || _temperature_problem == false) {
        if (_gravity_problem == false || _water_problem == false) {
          _p = ","
        } else {
          _p = "."
        }
        EndingTechnologyList.push(ending.sustain[6]);
        if (_atmosphere_problem == false && _temperature_problem == false) {
          EndingTechnologyList.push(ending.sustain[7] + ", " + ending.sustain[8]);
        } else if (_atmosphere_problem == false) {
          EndingTechnologyList.push(ending.sustain[7]);
        } else {
          EndingTechnologyList.push(ending.sustain[8]);
        };

        EndingTechnologyList.push(ending.sustain[9] + _p);
      };


      if (_gravity_problem == false) {
        if (_water_problem == false) {
          _p = ","
        } else {
          _p = "."
        } if ((_atmosphere_problem == false || _temperature_problem == false) && _water_problem != false) {
          EndingTechnologyList.push(ending.sustain[10] + planet.gravity.toLowerCase() + ending.sustain[11]);
        }
        if (_water_problem == false) {
          if (_atmosphere_problem == false || _temperature_problem == false || _gravity_problem == false) {
            EndingTechnologyList.push(ending.sustain[12]);
          };
        };
      };
    };
  };

  //Ruins, if you are closed
  //Руины, если пристутствуют
  function fc_ruins() {
    if (planet.anomaliesFull.includes("Monumental ruins")
      || planet.anomaliesFull.includes("High-tech ruins")
      || planet.anomaliesFull.includes("Dangerous ruins")) {
      EndingRuinsList.push(ending.ruins[0]);
      if (planet.anomaliesFull.includes("Monumental ruins")) {
        EndingRuinsList.push(ending.ruins[1]);
        EndingRuinsDamage[0].push(ship.culture, getRandomInt(10, 30), "heal");
        //  damageApply(ship.science, getRandomInt(10,30), "heal");
      };


      if (planet.anomaliesFull.includes("High-tech ruins")) {
        if (planet.anomaliesFull.includes("Monumental ruins")) {
          EndingRuinsList.push(ending.ruins[2]);
        } else {
          EndingRuinsList.push(ending.ruins[3]);
        };
        EndingRuinsList.push(ending.ruins[4]);
        EndingRuinsDamage[1].push(ship.science, getRandomInt(10, 30), "heal");
        //  damageApply(ship.science, getRandomInt(10,30), "heal");
        if (ship.science[0] > 100) {
          EndingRuinsList.push(ending.ruins[5]);
        } else {
          EndingRuinsList.push(ending.ruins[6]);
        }
      };

      if (planet.anomaliesFull.includes("Dangerous ruins")) {
        if (planet.anomaliesFull.includes("Monumental ruins") || planet.anomaliesFull.includes("High-tech ruins")) {
          EndingRuinsList.push(ending.ruins[7]);
        } else {
          EndingRuinsList.push(ending.ruins[8]);
        }
        featureDeaths = killColonists("Medium");
        EndingRuinsDamage[2].push(ship.colonists, featureDeaths, "damage");
        //  damageApply(ship.colonists, featureDeaths, "damage");
        EndingRuinsList.push(ending.ruins[9] + featureDeaths + ending.ruins[10]);
      };


      if (ship.colonists[0] == 0) {
        hiscore.summary = "Destroyed by Alien Ruins"
      };
    };
  };
  //CULTURE
  //КУЛЬТУРА
  function fc_culture() {
    _culture_score = ship.culture[0] * Math.min(ship.colonists[0] / colMax, 1);

    if (dictator == true) {
      _culture_score = 20;
      EndingCultureList.push(ending.culture[0]); //The dictator who replaced one of the original colonists swiftly takes control of the colony and creates an authoritarian regime.
    } else {
      if (ship.culture[0] >= 100) {
        EndingCultureList.push(ending.culture[1]); //The cultural database contains a wealth of historical information to help the colonists make their choice of government, and a vast library of art and literature to entertain and inspire them.
      } else if (ship.culture[0] >= 50) {
        EndingCultureList.push(ending.culture[2]); //Although parts of the cultural database are missing, it still contains much historical information to instruct the colonists in the building of their society, and much art and literature to inspire them.
      } else if (ship.culture[0] > 0) {
        EndingCultureList.push(ending.culture[3]); //The colonists search through the badly damaged cultural database, and manage to reconstruct some information about Earth's history and culture to guide and inspire them.
      } else {
        EndingCultureList.push(ending.culture[4]); //With the cultural database destroyed, those born on the new world know nothing about Earth's history and culture besides what the first colonists can pass on in person.
      };
    };
    if (ship.colonists[0] < colMax / 2) {
      EndingCultureList.push(ending.culture[5]); //The heavy losses sustained by the colonists make building a new society more difficult.
    } else if (ship.colonists[0] < colMax) {
      EndingCultureList.push(ending.culture[6]); //The losses sustained by the colonists make building a new society more difficult.
    };

    if (planet.anomaliesFull.includes("Alien observers")) {
      switch (getRandomInt(0, 2)) {
        case 0:
          EndingCultureList.push(ending.features[0]); //The mysterious alien structures are visible as a glittering band across the night sky, but the aliens do not attempt to interfere with the colony's cultural development.
          break;
        case 1:
          EndingCultureList.push(ending.features[1]); //Enigmatic objects periodically descend from the alien structures in orbit, and colonists living close to these objects find themselves more prone to cooperation and empathy than they otherwise would be.
          _culture_score += 30
          break;
        case 2:
          EndingCultureList.push(ending.features[2]); //Enigmatic objects periodically descend from the alien structures in orbit, and colonists living close to these objects find themselves more prone to conflict and selfishness than they otherwise would be.
          _culture_score -= 30
          break;
      }
    };

    if (planet.anomaliesFull.includes("Outstanding beauty")) {
      EndingCultureList.push(ending.features[3]); //The planet's outstanding natural beauty makes life there more pleasant, helping the colonists to build a better society.
      /* Increase by 20 but don't go above 100 unless it already is */
      if (_culture_score <= 100 && _culture_score > 80) {
        _culture_score = 100
      } else {
        _culture_score += 20
      };
    } else if (planet.anomaliesFull.includes("Outstanding ugliness")) {
      EndingCultureList.push(ending.features[4]); //The planet's outstanding ugliness increases tensions among the colonists and makes it harder for them to build a peaceful society.
      _culture_score -= 20
    }
    console.log("_culture_score:"+_culture_score+" ")
    /* Calculate and output final result */
    hiscore.sciLevelName = tech_level_names[ship.techLvl];
    if (_culture_score > 100 && ship.culture[0] > 100) {
      hiscore.final_culture = 17;
      hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[17];
      hiscore.cultureName=cultureNames[17];
      EndingCultureList.push(ending.politics[0]); //The cultural database from Earth has been augmented by alien cultural knowledge, and the colonists use this to build a society unlike any that the seedship's founders could have imagined, in which every member lives a life of peace, happiness, and spiritual fulfilment.
    } else {
      switch (ship.techLvl) {
        case 8:
        case 9:
        case 10:
          if (_culture_score > 90) {
            hiscore.final_culture = 16;
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[16];
            hiscore.cultureName=cultureNames[16];
            EndingCultureList.push(ending.politics[1]); //The surviving cultural database is preserved in digital files to which all colonists have access. The colonists work together to build an egalitarian society in which technology takes care of people's material needs, freeing them to pursue lives of art, leisure, and spiritual fulfilment.
          } else if (_culture_score > 80) {
            hiscore.final_culture = 15
            hiscore.summary = "Engaged " + tech_level_names[ship.techLvl] + " "+ cultureNames[15];
            hiscore.cultureName= cultureNames[15];
            EndingCultureList.push(ending.politics[2]); //The surviving cultural database is preserved in digital files to which all colonists have access. The colonists lay the foundation of a democracy in which all citizens are educated and engaged.
          } else if (_culture_score > 60) {
            hiscore.final_culture = 14
            hiscore.summary = "Corrupt " + tech_level_names[ship.techLvl] + " "+ cultureNames[14];
            hiscore.cultureName= cultureNames[14];
            EndingCultureList.push(ending.politics[3]); //The surviving cultural database is preserved in digital files to which all colonists have access. The colonists lay the foundation of a democracy, but it proves vulnerable to corruption and wealthy individuals become a de facto ruling class.
          } else if (_culture_score > 40) {
            hiscore.final_culture = 13;
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[13];
            hiscore.cultureName=cultureNames[13];
            EndingCultureList.push(ending.politics[4]); //The surviving cultural database is preserved in digital files to which all colonists have access. The colonists attempt to build a democratic, capitalist society, but the government becomes a pawn of wealthy corporations which rule the planet for their owners' benefit.
          } else if (_culture_score > 20) {
            hiscore.final_culture = 12
            hiscore.summary = "Dystopian " + tech_level_names[ship.techLvl] + " "+ cultureNames[12];
            hiscore.cultureName= cultureNames[12];
            EndingCultureList.push(ending.politics[5]); //The colony develops into a high-tech police state, in which the population lives under constant surveillance by the untouchable ruling class, and the slightest dissent is violently put down. The surviving cultural database is preserved, but access to it is strictly limited by the state.
          } else if (_culture_score > 10) {
            hiscore.final_culture = 11;
            ship.culture[0] = Math.round(ship.culture[0] / 2);
            hiscore.summary = "Warring " + tech_level_names[ship.techLvl] + " "+ cultureNames[11];
            hiscore.cultureName= cultureNames[11];
            EndingCultureList.push(ending.politics[6]); //The colony splits into several large nations whose economies become focused on waging war with one another. The colonists attempt to preserve what remains of the cultural database, but much of it is lost, either by damage due to the war, or under layers of the governments' revisionist propaganda.
          } else {
            hiscore.final_culture = 10;
            ship.culture[0] = 0;
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[10];
            hiscore.cultureName=cultureNames[10];
            EndingCultureList.push(ending.politics[7]); //The colony splits into several large nations which wage war with one another, until reckless leaders set off a nuclear war that destroys the infrastructure of civilisation. The surviving colonists live on in a post-nuclear wasteland. What remains of the cultural database is lost in the disaster, and what the colonists remember of Earth they confuse with stories of the pre-war colony.
          };
          break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          if (_culture_score > 80) {
            hiscore.final_culture = 9;
            hiscore.summary = "Egalitarian " + tech_level_names[ship.techLvl] + " "+ cultureNames[9];
            hiscore.cultureName= cultureNames[9];
            EndingCultureList.push(ending.politics[8]); //The colonists use the surviving cultural database to guide them in the creation of a republic based on freedom and equal rights.
          } else if (_culture_score > 60) {
            hiscore.final_culture = 8
            hiscore.summary = "Benevolent " + tech_level_names[ship.techLvl] + " "+ cultureNames[8];
            hiscore.cultureName= cultureNames[8];
            EndingCultureList.push(ending.politics[9]); //The first leaders of the colony become the founders of a line of benevolent monarchs, who regard it as their solemn duty to guide the colony and safeguard the remaining knowledge of Earth.
          } else if (_culture_score > 40) {
            hiscore.final_culture = 7
            hiscore.summary = "Oppressive " + tech_level_names[ship.techLvl] + " "+ cultureNames[7];
            hiscore.cultureName= cultureNames[7];
            EndingCultureList.push(ending.politics[10]); //The surviving knowledge of Earth becomes the exclusive property of a priestly caste, locked away in libraries. For most of the population, Earth becomes the paradise in a mythological fall from grace, and a final reward to hope for after living lives in service of the oppressive theocracy.
          } else if (_culture_score > 20) {
            hiscore.final_culture = 6
            ship.culture[0] = Math.round(ship.culture[0] / 2)
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[6];
            hiscore.cultureName= cultureNames[6];
            EndingCultureList.push(ending.politics[11]); //The colony develops into a slave state, in which the bulk of the population toil to build great gold monuments to their emperors, or die fighting in their wars. Much of the surviving knowledge of Earth is lost, as the emperors preserve only what they can use to prop up their rule.
          } else {
            hiscore.final_culture = 5
            ship.culture[0] = 0
            hiscore.summary = "Warring " + tech_level_names[ship.techLvl] + " "+ cultureNames[5];
            hiscore.cultureName= cultureNames[5];
            EndingCultureList.push(ending.politics[12]); //The colony develops into many small states, which exist in a state of constant warfare. What remains of the cultural database is lost in the conflicts.
          }
          break;
        case 0:
        case 1:
        case 2:
          if (_culture_score > 80) {
            hiscore.final_culture = 4
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[4];
            EndingCultureList.push(ending.politics[13]); //The surviving cultural database becomes the foundation of a rich oral history. The colony splits into small tribes, each ruled collectively by its members and coexisting peacefully with one another.
          } else if (_culture_score > 60) {
            hiscore.final_culture = 3
            hiscore.score_culture = 1500
            hiscore.summary = "Benevolent " + tech_level_names[ship.techLvl] + " "+ cultureNames[3];
            hiscore.cultureName= cultureNames[3];
            EndingCultureList.push(ending.politics[14]); //The surviving cultural database becomes the foundation of a rich oral history, and a caste of benevolent chieftains arises as guardians of that history and protectors of the tribes.
          } else if (_culture_score > 40) {
            hiscore.final_culture = 2
            hiscore.summary = "Brutal " + tech_level_names[ship.techLvl] + " "+ cultureNames[2];
            hiscore.cultureName= cultureNames[2];
            EndingCultureList.push(ending.politics[15]); //The surviving cultural database becomes the foundation of the colonists' oral history, but a caste of brutal chieftains corrupts the culture and uses it to cement their own rule.
          } else if (_culture_score > 20) {
            hiscore.final_culture = 1
            ship.culture[0] = Math.round(ship.culture[0] / 2)
            hiscore.summary = "Warring " + tech_level_names[ship.techLvl] + " "+ cultureNames[1];
            hiscore.cultureName= cultureNames[1];
            EndingCultureList.push(ending.politics[16]); //The colony develops into many small tribes, which exist in a state of constant warfare. The information from the cultural database is almost entirely forgotten, and Earth is remembered only as the home of a pantheon of mythological warriors.
          } else {
            hiscore.final_culture = 0
            ship.culture[0] = 0
            hiscore.summary = tech_level_names[ship.techLvl] + " "+ cultureNames[0];
            hiscore.cultureName= cultureNames[0];
            EndingCultureList.push(ending.politics[17]); //The colonists descend into savagery, and all knowledge of Earth's history and culture is forgotten in their day-to-day struggle for survival.
          };
          break;

        default:
          break;

      };
    };


    // МЕСТНЫЕ
    /* Native relations are based on the average of your culture score and the aliens' culture, modified by the difference between your tech level. */
    /* Unlike final culture, not affected by population */

    ship.cultureScore = ship.culture[0];


    planet.cultureScore = 0;
    switch (planet.culture) {
      case 0:
        planet.cultureScore = 0;
        break;
      case 1:
        planet.cultureScore = 25;
        break;
      case 2:
        planet.cultureScore = 50;
        break;
      case 3:
        planet.cultureScore = 75;
        break;
      case 4:
        planet.cultureScore = 100;
        break;
      case 5:
        planet.cultureScore = 0;
        break;
      case 6:
        planet.cultureScore = 25;
        break;
      case 7:
        planet.cultureScore = 50;
        break;
      case 8:
        planet.cultureScore = 75;
        break;
      case 9:
        planet.cultureScore = 100;
        break;
      case 10:
        planet.cultureScore = 0;
        break;
      case 11:
        planet.cultureScore = 10;
        break;
      case 12:
        planet.cultureScore = 25;
        break;
      case 13:
        planet.cultureScore = 50;
        break;
      case 14:
        planet.cultureScore = 75;
        break;
      case 15:
        planet.cultureScore = 90;
        break;
      case 16:
        planet.cultureScore = 100;
        break;
      default:
        break;
    }
    console.log("Local culture:", planet.culture, planet.cultureScore);
    console.log("КУЛЬТУРА МЕСТНЫХ:", planet.culture, planet.cultureScore);

    var _difference = Math.abs(ship.techLvl - planet.techLvl);

    console.log("Colonist tech level:", ship.techLvl, "Native tech level:", planet.techLvl, "Difference:", _difference)

    /* Difference can be 0 to 10 */

    var _culture_score = (ship.cultureScore + planet.cultureScore) / 2 - (_difference * 5);

    /* Perfect culture score but max difference gives a result of 50 (isolationism) */
    console.log("Modified culture score:", _culture_score);

    /* Output text */

    if (planet.anomaliesFull.includes("Intelligent life")) {

      EndingNativesList.push(ending.nativeInteractions[0]); //As the colonists expand from their initial settlement they must find a way to share their new home with its native inhabitants,

      if (ship.culture[0] >= 100) {
        EndingNativesList.push(ending.nativeInteractions[1]); //guided by the wealth of historical information in the cultural database.
      } else if (ship.culture[0] >= 50) {
        EndingNativesList.push(ending.nativeInteractions[2]); //with the surviving historical information in the cultural database to guide them.
      } else if (ship.culture[0] > 0) {
        EndingNativesList.push(ending.nativeInteractions[3]); //with guidance from what they can recover from the cultural database.
      } else {
        EndingNativesList.push(ending.nativeInteractions[4]); //without any help from the destroyed cultural database.
      };

      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        switch (cMachineDoctrine) {
          case "Assimilator":

            EndingNativesList.push(cAddonEnding.machinesWar[0]);
            EndingNativesList.push(cAddonEnding.machinesWar[1]);
            if (finalTech > planet.techLvl) {
              EndingNativesList.push(ending.nativeInteractions[19]); //Conflicts escalate into a war that ends with the natives being completely wiped out.
              EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
              hiscore.native_relations = 12;
            } else {
              EndingNativesList.push(ending.nativeInteractions[18]); //Conflicts escalate into a war that ends with the humans being enslaved by the natives.
              hiscore.native_relations = 10;
              hiscore.summary = "Assimilated by synthetics";
              if (options.platform == "Android") {
                var data = {
                  achievementId: "CgkIya77kP0DEAIQFg"
                  //WeAreBorg
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                  // On success
                }, function () {
                  // On error
                });
              };
              EndingNativesDamage[0].push(ship.colonists, ship.colonists[0], "damage");
              //    damageApply(cShip.colonists, 0, "set");
            }
            break;
          case 'Exterminator':
            EndingNativesList.push(cAddonEnding.machinesWar[0]);
            EndingNativesList.push(cAddonEnding.machinesWar[2]);
            if (finalTech > planet.techLvl) {
              EndingNativesList.push(ending.nativeInteractions[19]); //Conflicts escalate into a war that ends with the natives being completely wiped out.
              hiscore.native_relations = 12;
              EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
            } else {
              EndingNativesList.push(ending.nativeInteractions[20]); //Conflicts escalate into a war that ends with the humans being completely wiped out.
              hiscore.native_relations = 11;
              hiscore.summary = "Exterminated by synthetics"
              if (options.platform == "Android") {
                var data = {
                  achievementId: "CgkIya77kP0DEAIQGA"
                  //OrganicLifeIsNothingButAGeneticMutationAnAccident
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                  // On success
                }, function () {
                  // On error
                });
              };
              EndingNativesDamage[0].push(ship.colonists, ship.colonists[0], "damage");
              //    damageApply(cShip.colonists, 0, "set");
            };
            break;
          case 'Guardian':
            EndingNativesList.push(cAddonEnding.machinesWar[0]);
            EndingNativesList.push(cAddonEnding.machinesWar[3]);
            hiscore.native_relations = 15
            EndingNativesList.push(cAddonEnding.machinesWar[4]); //The two species end up living in closely linked communities, with some members of each species adopting the lifestyle of the other.
            EndingNativesDamage[0].push(ship.culture, getRandomInt(10, 30), "heal");
            EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
            break;
        };

      } else {
        if (_difference > 1) {
          EndingNativesList.push(ending.nativeInteractions[5]); //The difference in technological level between the colonists and the natives makes relations more difficult,
          if (planet.cultureScore >= 75) {
            EndingNativesList.push(ending.difWords[2]); //although
          } else {
            EndingNativesList.push(ending.difWords[0]); //and
          };
        } else {
          EndingNativesList.push(ending.nativeInteractions[6]); //	The similarity in technological level between the colonists and the natives makes relations easier,
          if (planet.cultureScore >= 75) {
            EndingNativesList.push(ending.difWords[2]); //although
          } else {
            EndingNativesList.push(ending.difWords[0]); //and
          };
        };


        if (planet.cultureScore < 25) {
          EndingNativesList.push(ending.nativeInteractions[7]); //the natives' culture makes them hostile towards the alien newcomers.
        } else if (planet.cultureScore < 50) {
          EndingNativesList.push(ending.nativeInteractions[8]); //the natives' culture makes them extremely suspicious towards the outsiders.
        } else if (planet.cultureScore < 75) {
          EndingNativesList.push(ending.nativeInteractions[9]); //the natives' culture makes them wary towards the humans.
        } else if (planet.cultureScore < 90) {
          EndingNativesList.push(ending.nativeInteractions[10]); //the natives' culture makes them cautious but accepting of the immigrants.
        } else {
          EndingNativesList.push(ending.nativeInteractions[11]); //the natives' culture makes them welcoming towards the refugees.
        }

        if (planet.anomaliesFull.includes("Welcoming")) {
          _culture_score = Math.max(_culture_score, 73);
          EndingNativesList.push(ending.nativeInteractions[12]); //Thanks to the AI's interactions with the planet's natives during the seedship's approach, the natives have already extended an offer of asylum to the humans, and are willing to overlook any differences and coexist.
        } else if (planet.anomaliesFull.includes("Unwelcoming")) {
          _culture_score = Math.min(_culture_score, 24);
          EndingNativesList.push(ending.nativeInteractions[13]); //During the seedship's approach, the natives made it clear that the humans would not be welcome on their planet.
        }

        if (_culture_score > 96) {
          hiscore.native_relations = 6;
          EndingNativesList.push(ending.nativeInteractions[14]); //The two species end up living in closely linked communities, with some members of each species adopting the lifestyle of the other.
          EndingNativesDamage[0].push(ship.culture, getRandomInt(10, 30), "heal");
          //damageApply(ship.culture, getRandomInt(10,30), "heal");


        } else if (_culture_score > 72) {
          hiscore.native_relations = 5;
          EndingNativesList.push(ending.nativeInteractions[15]); //The two species end up living in separate communities with friendly relations between them.
          EndingNativesDamage[0].push(ship.culture, getRandomInt(5, 15), "heal");
          //  damageApply(ship.culture, getRandomInt(5,15), "heal");

        } else if (_culture_score > 48) {
          hiscore.native_relations = 4;
          EndingNativesList.push(ending.nativeInteractions[16]); //The two species end up living in separate parts of the planet and having little contact with one another.
        } else if (_culture_score > 24) {
          if (finalTech > planet.techLvl) {
            EndingNativesList.push(ending.nativeInteractions[17]); //Conflicts escalate into a war that ends with the humans enslaving the natives.
            hiscore.native_relations = 3;
          } else {
            EndingNativesList.push(ending.nativeInteractions[18]); //Conflicts escalate into a war that ends with the humans being enslaved by the natives.
            hiscore.native_relations = 2;
            hiscore.summary = "Enslaved by Natives";
            EndingNativesDamage[0].push(ship.colonists, 10000, "damage");
            //    damageApply(cShip.colonists, 0, "set");
          }
        } else {
          if (finalTech > planet.techLvl) {
            EndingNativesList.push(ending.nativeInteractions[19]); //Conflicts escalate into a war that ends with the natives being completely wiped out.
            hiscore.native_relations = 1;
          } else {
            EndingNativesList.push(ending.nativeInteractions[20]); //Conflicts escalate into a war that ends with the humans being completely wiped out.
            hiscore.native_relations = 0;
            hiscore.summary = "Killed by Natives"
            EndingNativesDamage[0].push(ship.colonists, 10000, "damage");
            //    damageApply(cShip.colonists, 0, "set");
          };
        };
      };

    } else if (cPlanet.anomaliesFull.includes('Machine civilization')) {
                   switch (cMachineDoctrine) {
                     case "Assimilator":

                       EndingNativesList.push(cAddonEnding.machinesWar[0]);
                       EndingNativesList.push(cAddonEnding.machinesWar[1]);
                       if (finalTech > planet.techLvl) {
                         EndingNativesList.push(ending.nativeInteractions[19]); //Conflicts escalate into a war that ends with the natives being completely wiped out.
                         EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
                         hiscore.native_relations = 12;
                       } else {
                         EndingNativesList.push(ending.nativeInteractions[18]); //Conflicts escalate into a war that ends with the humans being enslaved by the natives.
                         hiscore.native_relations = 10;
                         hiscore.summary = "Assimilated by synthetics";
                         if (options.platform == "Android") {
                           var data = {
                             achievementId: "CgkIya77kP0DEAIQFg"
                             //WeAreBorg
                           };
                           cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                             // On success
                           }, function () {
                             // On error
                           });
                         };
                         EndingNativesDamage[0].push(ship.colonists, ship.colonists[0], "damage");
                         //    damageApply(cShip.colonists, 0, "set");
                       }
                       break;
                     case 'Exterminator':
                       EndingNativesList.push(cAddonEnding.machinesWar[0]);
                       EndingNativesList.push(cAddonEnding.machinesWar[2]);
                       if (finalTech > planet.techLvl) {
                         EndingNativesList.push(ending.nativeInteractions[19]); //Conflicts escalate into a war that ends with the natives being completely wiped out.
                         hiscore.native_relations = 12;
                         EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
                       } else {
                         EndingNativesList.push(ending.nativeInteractions[20]); //Conflicts escalate into a war that ends with the humans being completely wiped out.
                         hiscore.native_relations = 11;
                         hiscore.summary = "Exterminated by synthetics"
                         if (options.platform == "Android") {
                           var data = {
                             achievementId: "CgkIya77kP0DEAIQGA"
                             //OrganicLifeIsNothingButAGeneticMutationAnAccident
                           };
                           cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                             // On success
                           }, function () {
                             // On error
                           });
                         };
                         EndingNativesDamage[0].push(ship.colonists, ship.colonists[0], "damage");
                         //    damageApply(cShip.colonists, 0, "set");
                       };
                       break;
                     case 'Guardian':
                       EndingNativesList.push(cAddonEnding.machinesWar[0]);
                       EndingNativesList.push(cAddonEnding.machinesWar[3]);
                       hiscore.native_relations = 15
                       EndingNativesList.push(cAddonEnding.machinesWar[4]);
                       EndingNativesDamage[0].push(ship.culture, getRandomInt(10, 30), "heal");
                       EndingNativesDamage[0].push(ship.science, getRandomInt(6, 15), "heal");
                       break;
                   };

                 };


  };
  //Final description
  //ФИНАЛЬНОЕ ОПИСАНИЕ
  constructionDeaths = (colMax - ship.colonists[0]) - journeyDeaths;
  function fc_done() {
    console.log(planet.name, planet.nameID, Names)
    console.log(NamesCurLang)
    /* Landscape */
    if (planet.water == "Planet-wide ocean") {
      switch (planet.gravity) {
        case "Very Low":
          ScoreDescription.push(ending.summary[0] + NamesCurLang[1][planet.nameID] + ending.summary[1]);
          break;
        case "Low":
          ScoreDescription.push(ending.summary[2] + NamesCurLang[1][planet.nameID] + ending.summary[3]);
          break;
        case "Moderate":
          ScoreDescription.push(ending.summary[4] + NamesCurLang[1][planet.nameID] + ending.summary[5]);
          break;
        case "High":
          ScoreDescription.push(ending.summary[6] + NamesCurLang[1][planet.nameID] + ending.summary[7]);
          break;
        case "Very High":
          ScoreDescription.push(ending.summary[8] + NamesCurLang[1][planet.nameID] + ending.summary[9]);
          break;
        default:
          break;
      }
    } else if (planet.anomaliesFull.includes("Plant life")
      || planet.anomaliesFull.includes("Edible plants")
      || planet.anomaliesFull.includes("Poisonous plants")) {
      switch (planet.gravity) {
        case "Very Low":
          ScoreDescription.push(ending.summary[10] + NamesCurLang[1][planet.nameID] + ending.summary[11]);
          break;
        case "Low":
          ScoreDescription.push(ending.summary[12] + NamesCurLang[1][planet.nameID] + ending.summary[13]);
          break;
        case "Moderate":
          ScoreDescription.push(ending.summary[14] + NamesCurLang[1][planet.nameID] + ending.summary[15]);
          break;
        case "High":
          ScoreDescription.push(ending.summary[16] + NamesCurLang[1][planet.nameID] + ending.summary[17]);
          break;
        case "Very High":
          ScoreDescription.push(ending.summary[18] + NamesCurLang[1][planet.nameID] + ending.summary[19]);
          break;
        default:
          break;
      }
    } else if (planet.water == "Ice-covered surface") {
      switch (planet.gravity) {
        case "Very Low":
          if (planet.name) {
            ScoreDescription.push(ending.summary[20] + NamesCurLang[1][planet.nameID] + ending.summary[21]);
          } else {
            ScoreDescription.push(ending.summary[22])
          }
          break;
        case "Low":
          if (planet.name) {
            ScoreDescription.push(ending.summary[23] + NamesCurLang[1][planet.nameID] + ending.summary[24])
          } else {
            ScoreDescription.push(ending.summary[25])
          }
        case "Moderate":
          ScoreDescription.push(ending.summary[26] + NamesCurLang[1][planet.nameID] + ending.summary[27])
          break;
        case "High":
          ScoreDescription.push(ending.summary[28] + NamesCurLang[1][planet.nameID] + ending.summary[29])
          break;
        case "Very High":
          ScoreDescription.push(ending.summary[30] + NamesCurLang[1][planet.nameID] + ending.summary[31])
          break;

      }
    } else if (planet.atmosphere == "None") {
      switch (planet.gravity) {
        case "Very Low":
          ScoreDescription.push(ending.summary[32] + NamesCurLang[1][planet.nameID] + ending.summary[33])
          break;
        case "Low":
          ScoreDescription.push(ending.summary[34] + NamesCurLang[1][planet.nameID] + ending.summary[35])
          break;
        case "Moderate":
          ScoreDescription.push(ending.summary[36] + NamesCurLang[1][planet.nameID] + ending.summary[37])
          break;
        case "High":
          ScoreDescription.push(ending.summary[38] + NamesCurLang[1][planet.nameID] + ending.summary[39])
          break;
        case "Very High":
          ScoreDescription.push(ending.summary[40] + NamesCurLang[1][planet.nameID] + ending.summary[41])
          break;
      }
    } else {
      switch (planet.gravity) {
        case "Very Low":
          ScoreDescription.push(ending.summary[42] + NamesCurLang[1][planet.nameID] + ending.summary[43])
          break;
        case "Low":
          ScoreDescription.push(ending.summary[44] + NamesCurLang[1][planet.nameID] + ending.summary[45])
          break;
        case "Moderate":
          ScoreDescription.push(ending.summary[46] + NamesCurLang[1][planet.nameID] + ending.summary[47])
          break;
        case "High":
          ScoreDescription.push(ending.summary[48] + NamesCurLang[1][planet.nameID] + ending.summary[49])
          break;
        case "Very High":
          ScoreDescription.push(ending.summary[50] + NamesCurLang[1][planet.nameID] + ending.summary[51])
          break;
      }
    }

    /* Sky */
    switch (planet.atmosphere) {
      case "Breathable":
        ScoreDescription.push(ending.summary[52])
        break;
      case "Marginal":
        ScoreDescription.push(ending.summary[53])
        break;
      case "None":
        ScoreDescription.push(ending.summary[54])
        break;
      case "Non-breathable":
        ScoreDescription.push(ending.summary[55])
        break;
      case "Toxic":
        ScoreDescription.push(ending.summary[56])
        break;
      case "Corrosive":
        ScoreDescription.push(ending.summary[57])
        break;
    }

    /* Alien observation posts for the Reservation feature */
    if (planet.anomaliesFull.includes("Alien observers")) {
      ScoreDescription.push(ending.summary[58])
    }

    if (hiscore.final_culture == -1) {
      if (hiscore.summary == "Crash") {
        ScoreDescription.push(ending.summary[59]);
        if (options.platform == "Android") {
          var data = {
            achievementId: "CgkIya77kP0DEAIQBA"
            //Launchpad McQuack
          };
          cordova.plugins.playGamesServices.unlockAchievement(data, function () {
            // On success
          }, function () {
            // On error
          });
        };
      } else {
        ScoreDescription.push(ending.summary[60])
      }

      if (planet.water == "Planet-wide ocean") {
        ScoreDescription.push(ending.summary[61])
      } else if (planet.water == "Ice-covered surface") {
        ScoreDescription.push(ending.summary[62])
      } else if (planet.anomaliesFull.includes("Animal life")
        || planet.anomaliesFull.includes("Useful animals")
        || planet.anomaliesFull.includes("Dangerous animals")) {
        ScoreDescription.push(ending.summary[63])
      } else if (planet.anomaliesFull.includes("Plant life")
        || planet.anomaliesFull.includes("Edible plants")
        || planet.anomaliesFull.includes("Poisonous plants")) {
        ScoreDescription.push(ending.summary[64])
      } else {
        ScoreDescription.push(ending.summary[65])
      }

      if (hiscore.native_relations == 2) {
        ScoreDescription.push(ending.summary[66])
      } else if (hiscore.native_relations == 0) {
        ScoreDescription.push(ending.summary[67])
      } else if (hiscore.native_relations == 10) {
        ScoreDescription.push(cAddonEnding.machinesSummary[5])
      } else if (hiscore.native_relations == 11) {
        ScoreDescription.push(cAddonEnding.machinesSummary[6])
      } else if (planet.anomaliesFull.includes("Intelligent life")) {
        ScoreDescription.push(ending.summary[68])
      }



    } else {
      ScoreDescription.push(ending.summary[69]);
      if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
        ScoreDescription.push(ending.summary[70]);
      }


      if (hiscore.final_tech_level > 2) {
        switch (planet.gravity) {
          case "Very Low":
            ScoreDescription.push(ending.summary[71]);
            break;
          case "Low":
            ScoreDescription.push(ending.summary[72]);
            break;
          case "High":
            ScoreDescription.push(ending.summary[73]);
            break;
          case "Very High":
            ScoreDescription.push(ending.summary[74]);
            break;
        }
      }

      switch (hiscore.final_tech_level) {
        case 10:
          ScoreDescription.push(ending.summary[75]);
          break;
        case 9:
          ScoreDescription.push(ending.summary[76]);
          break;
        case 8:
          ScoreDescription.push(ending.summary[77]);
          break;
        case 7:
          ScoreDescription.push(ending.summary[78]);
        case 6:
        case 5:
        case 4:
        case 3:
          ScoreDescription.push(ending.summary[79]);
          break;
        case 2:
          ScoreDescription.push(ending.summary[80]);
          break;
        case 1: case 0:
          ScoreDescription.push(ending.summary[81]);
          break;
      }

      if (planet.atmosphere == "Breathable" && planet.temperature == "Moderate") {
        ScoreDescription.push(ending.summary[82]);
      } else if ((planet.atmosphere == "Breathable" || planet.atmosphere == "Marginal") && (planet.temperature == "Cold" || planet.temperature == "Moderate" || planet.temperature == "Hot")) {
        ScoreDescription.push(ending.summary[83]);
      } else if (planet.anomaliesFull.includes("Airtight caves") || planet.anomaliesFull.includes("Insulated caves")) {
        ScoreDescription.push(ending.summary[84]);
      } else {
        ScoreDescription.push(ending.summary[85]);
      }

      switch (planet.water) {
        case "Planet-wide ocean":
          ScoreDescription.push(ending.summary[86])
          break;
        case "Ice-covered surface":
          ScoreDescription.push(ending.summary[87])
          break;
        case "None":
        case "Trace":
          ScoreDescription.push(ending.summary[88])
          break;
        case "Ice caps":
          ScoreDescription.push(ending.summary[89])
          break;
        case "Oceans":
          ScoreDescription.push(ending.summary[90])
          break;
      }

      switch (cultureNames[hiscore.final_culture]) {
        case "Cosmic Enlightenment":
          ScoreDescription.push(ending.summary[91])
          break;
        case "Post-Scarcity Utopia":
          ScoreDescription.push(ending.summary[92])
          break;
        case "Engaged Democracy":
          ScoreDescription.push(ending.summary[93])
          break;
        case "Corrupt Democracy":
          ScoreDescription.push(ending.summary[94])
          break;
        case "Rule by Corporations":
          ScoreDescription.push(ending.summary[95])
          break;
        case "Dystopian Police State":
          ScoreDescription.push(ending.summary[96])
          if (options.platform == "Android") {
            var data = {
              achievementId: "CgkIya77kP0DEAIQCA"
              //1984
            };
            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
              // On success
            }, function () {
              // On error
            });
          };
          break;
        case "Warring Superpowers":
          ScoreDescription.push(ending.summary[97])
          break;
        case "Post-Nuclear Wasteland":
          ScoreDescription.push(ending.summary[98])
          break;
        case "Egalitarian Republic":
          ScoreDescription.push(ending.summary[99])
          break;
        case "Benevolent Monarchy":
          ScoreDescription.push(ending.summary[100])
          break;
        case "Oppressive Theocracy":
          ScoreDescription.push(ending.summary[101])
          break;
        case "Slave-Based Empire":
          ScoreDescription.push(ending.summary[102])
          break;
        case "Warring States":
          ScoreDescription.push(ending.summary[103])
          break;
        case "Collective Rule":
          ScoreDescription.push(ending.summary[104])
          break;
        case "Benevolent Chieftains":
          ScoreDescription.push(ending.summary[105])
          break;
        case "Brutal Chieftains":
          ScoreDescription.push(ending.summary[106])
          break;
        case "Warring Tribes":
          ScoreDescription.push(ending.summary[107])
          break;
        case "Savagery":
          ScoreDescription.push(ending.summary[108])
          break;
      }

      switch (native_relations_names[hiscore.native_relations]) {
        case "Immigrants, Earth remembered":
          ScoreDescription.push(ending.summary[109]);
          
          break;
        case "Immigrants, Earth forgotten":
          ScoreDescription.push(ending.summary[110])
          break;
        case "Integrated Societies":
          ScoreDescription.push(ending.summary[111])
          break;
        case "Masters, Earth remembered":
          ScoreDescription.push(cAddonEnding.machinesSummary[0])
          break;
        case "Masters, Earth forgotten":
          ScoreDescription.push(cAddonEnding.machinesSummary[1])
          break;
        case "Immigrants, rich hybrid culture":
          ScoreDescription.push(cAddonEnding.machinesSummary[2])
          break;
        case "Friendly":
          ScoreDescription.push(ending.summary[112])
          break;
        case "Isolationism":
          ScoreDescription.push(ending.summary[113])
          break;
        case "Natives Enslaved":
          ScoreDescription.push(ending.summary[114])
          break;
        case "Genocide of Natives":
          ScoreDescription.push(ending.summary[115])
          break;
        case "Synthetics wiped-out":
          ScoreDescription.push(cAddonEnding.machinesSummary[3])
          break;
      }
      if (hiscore.native_relations==0){
        hiscore.nativeRelationsName = "Genocide of Colonists";
      }
      else if (hiscore.native_relations > 0) { 
        hiscore.nativeRelationsName= native_relations_names[hiscore.native_relations];
      }
      

      if (planet.anomaliesFull.includes("Planet-spanning civilisation")) {
        ScoreDescription.push(ending.summary[116])
      } else {
        ScoreDescription.push(ending.summary[117])
        if (cultureNames[hiscore.final_culture] == "Post-Nuclear Wasteland" || hiscore.final_tech_level < 2) {
          ScoreDescription.push(ending.summary[118])
        }
        ScoreDescription.push(ending.summary[119])
      }

      //  constructionDeaths = (colMax - ship.colonists[0])- journeyDeaths;
      console.log("DEATHS IN THE END:", journeyDeaths, allDeaths)
      if (journeyDeaths > 0 && allDeaths > 0) {
        ScoreDescription.push(ending.summary[120] + journeyDeaths + ending.summary[121] + allDeaths + ending.summary[122])
      } else if (journeyDeaths > 0) {
        ScoreDescription.push(ending.summary[123] + journeyDeaths + ending.summary[124])
      } else if (allDeaths > 0) {
        ScoreDescription.push(ending.summary[125] + allDeaths + ending.summary[126])
      } else {
        ScoreDescription.push(ending.summary[127])
      }
      ScoreDescription.push(ending.summary[128])
      if (ship.techLvl == 10) {
        ScoreDescription.push(cAddonEnding.AIfearutes[0])
                      if (options.platform == "Android") {
                        var data = {
                          achievementId: "CgkIya77kP0DEAIQGg"
                          //AnEndingItDeserved
                        };
                        cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                          // On success
                        }, function () {
                          // On error
                        });
                      };
      };
      if (cPlanet.anomaliesFull.includes('Machine civilization')) {
        if (cMachineDoctrine == "Guardian") {
          ScoreDescription.push(cAddonEnding.machinesSummary[4])
        };

      }
    }
  };
  //console.log("HISCORE FINAL:", hiscore);
  /* ТУТ ЛОГИКА ВЫБОРА СТРАНИЦ ДЛЯ ФИНАЛА
  */

  fc_landing();
  if (hiscore.summary != "Crash") {
    if (!planet.anomaliesFull.includes("Planet-spanning civilisation")) {
      fc_construction();
      if (hiscore.summary != "Construction Failure") {
        fc_ruins();
        if (hiscore.summary != "Destroyed by Alien Ruins") {
          fc_technology();
          if (hiscore.summary != "Long-Term Technological Failure") {
            fc_culture();
          };
        };
      };
    } else {
      fci_relations();
      if (hiscore.summary != "Killed by Natives") {
        if (hiscore.summary != "Enslaved by Natives") {
          if (hiscore.summary != "Assimilated by synthetics") {
            if (hiscore.summary != "Exterminated by synthetics") {
              fci_technology();
            };
          };
        };
      };
    };
  };

  fc_done();
  localStorage.removeItem('Savedata');

  //Function of page damage
  //Функция постраничного урона

  function pageDamage(dmgArr) {
    for (z = 0; z < dmgArr.length; z++) {
      if (dmgArr[z][1]) {
        console.log("Tick #" + z, "System:", dmgArr[z])
        damageApply(dmgArr[z][0], dmgArr[z][1], dmgArr[z][2]);
      };
    };
  };

  //Calling Point Count Functions
  //ВЫЗОВ ФУНКЦИИ ПОДСЧЁТА ОЧКОВ
  final_score = countScore(cShip, cPlanet, hiscore);

  final_score.landing = (1000 + colStow) - journeyDeaths;
  final_score.construction = (1000 + colStow) - (journeyDeaths + constructionDeaths);
  final_score.overall += (final_score.landing + final_score.construction);

  var ScoreRes = [
    final_score.atmosphere,
    final_score.gravity,
    final_score.temperature,
    final_score.water,
    final_score.resources,
    final_score.landing,
    final_score.construction,
    final_score.score_technology,
    final_score.score_culture,
    final_score.scienceDB,
    final_score.cultureDB,
    final_score.score_native_relations,
    final_score.overall,
  ]

  console.log(ScoreRes, hiscore)

  for (i = 0; i < PossibleEnding.length; i++) {
    if (PossibleEnding[i].length > 0) {
      FullEnding.push(PossibleEnding[i]);
      BulkDamage.push(PossibleDamage[i]);
    };
  };

  function nextText() {

	//print out final screen and score.
    if (endingCounter == FullEnding.length) {

      var textwindow = document.getElementById("textwindow");

      var crrow = document.createElement("div");
      crrow.className = "row";
      crrow.id = "ScanList";
      textwindow.appendChild(crrow);

      var scanlist = document.getElementById("ScanList");
      var crcol = document.createElement("div");
      crcol.className = "col-10";
      crcol.id = "ScanNames";
      scanlist.appendChild(crcol);

      var crcol = document.createElement("div");
      crcol.className = "col-2";
      crcol.id = "ScanRes";
      scanlist.appendChild(crcol);

      var scannames = document.getElementById("ScanNames");
      for (var i = 0; i < ScoreNames.length; i++) {
        var parag = document.createElement("p");
        parag.className = "stats";
        if (i == 7){ //get science level Name
          ScoreNames[i]= ScoreNames[i] + " ("+ hiscore.sciLevelName +")";
        }
        if (i ==8){
          ScoreNames[i]= ScoreNames[i]  + " ("+ hiscore.cultureName+ ")";
        }
        if (i ==11){
          if (hiscore.native_relations == -1){ //don't show native relations if we don't have natives
            continue;
          }
          else {
            ScoreNames[i]= ScoreNames[i] + " ("+ hiscore.nativeRelationsName +")";
          }
        }
        parag.innerHTML = ScoreNames[i] + ":";
        scannames.appendChild(parag);
      };

      var scanres = document.getElementById("ScanRes");
      for (var i = 0; i < ScoreRes.length; i++) {
        if (i==11){
          if (hiscore.native_relations == -1){ //don't show native relations if we don't have natives
            continue;
          }
        }
        var parag = document.createElement("p");
        parag.className = "stats";
        parag.id = ScoreIDs[i];
        parag.innerHTML = ScoreRes[i];
        scanres.appendChild(parag);
      };

      //HISCORE SAVEDATA
	//save the score in high score list.
      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
      var PastMissions = [""];
      PastMissions.push(datetime);
      PastMissions.push(cPlanet.name);
      PastMissions.push(hiscore.summary);
      PastMissions.push(final_score.overall);
      PastMissions.push(cPlanet);
      PastMissions.push(ScoreDescription);
      PastMissions.push(final_score);
      colonist_final_deaths = [colStow, journeyDeaths, constructionDeaths];
      PastMissions.push(colonist_final_deaths);
      PastMissions.push(hiscore);

      //console.log("SAVEDATA:",PastMissions)

      pastMissionsRefresh(PastMissions);
      //


      btn = document.getElementById("menubutton")
      btn.innerHTML = "Main Menu";
      btn.onclick = function () {
        window.location.reload(true);
      }

    } else {

      var para = document.getElementById("description");
      para.innerHTML = endList(FullEnding[endingCounter]);
      console.log("AoE Damage: ", endingCounter, BulkDamage[endingCounter]);
      console.log("Массовый урон: ", endingCounter, BulkDamage[endingCounter]);
      statsRefresh();
      pageDamage(BulkDamage[endingCounter]);
      endingCounter += 1;
    }
  };

  function endingOutput() {
    buttonWipe();
    textWipe();
    var textwindow = document.getElementById("textwindow");
    var para = document.createElement("p");
    para.id = "description";
    para.innerHTML = endList(FullEnding[endingCounter]);
    textwindow.appendChild(para);
    console.log("Массовый урон весь: ", endingCounter, BulkDamage)
    console.log("Массовый урон: ", endingCounter, BulkDamage[endingCounter])
    console.log("All Bulk Damage: ", endingCounter, BulkDamage)
    console.log("Bulk Damage: ", endingCounter, BulkDamage[endingCounter])
    pageDamage(BulkDamage[endingCounter]);
    endingCounter += 1;

    var more = document.getElementById("more");
    var btn = document.createElement("button");
    btn.className = "futurebutton";
    btn.id = "menubutton";
    btn.onclick = nextText;
    btn.innerHTML = languageData.continue[options.language];
    more.appendChild(btn);

  };




  endingOutput()


};

console.log("endingFunc ЗАГРУЖЕН");
