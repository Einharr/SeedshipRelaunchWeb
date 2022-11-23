var abilityToDream = false;
var DelayedDamage102 = [];
var voyagerChanceBonus = 0;
var precautionalRepairsSystem = "";
var precautionalRepairsSuccess = false;

//Community events
//Uneventful
var crypticMessage = {
  id: 101,
  eventProperty: function () {
  },
  repeateble: false,
  visited: false,
  name: eventsText.crypticMessage.name,
  description: "While travelling, the ship AI is awoken to analyze highly abnormal sensor readings. The AI confirms the short series of cryptic radiation patterns do not appear to have a natural origin. However, they appear to be coming from a different galaxy, one the ship would need over two billion years to reach. Since the ship cannot survive for such a long time, the AI concludes this signal has no value to its mission, and goes back to sleep.",
  choices: [
    {
      choice: eventsText.unsuitable.buttons[0], outcome: null, exist: existCheck("true"), result: function () {
        crypticMessage.visited = true;
        document.getElementById('description').innerHTML = curEvent.choices[0].outcome;

        buttonWipe();

        nextPlanet();
      }
    },
  ]
};

//COMMON

var dream0 = {
  id: 104,
  eventProperty: function(){
      curEvent.description = eventsText.dream0.description[0];
  },
  repeateble: false,
  visited: false,
  name: eventsText.dream0.name,
  description: null,
      choices:[
      { choice: eventsText.dream0.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
        dream0.visited = true;
        document.getElementById('description').innerHTML += "<br><br>" + eventsText.dream0.outcomes[0];
            buttonWipe();
            contButton();

            }
  },
  { choice: eventsText.dream0.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
    dream0.visited = true;
    abilityToDream = true;
    dream1.visited = false;
    dream2.visited = false;
    document.getElementById('description').innerHTML += "<br><br>" + eventsText.dream0.outcomes[1];

        buttonWipe();
        contButton();


}},
  ]
};

var precautionalRepairs = {
  id: 105,
  eventProperty: function(){
      choDevice = deviceDamage(ScanArr);
      precautionalRepairsSystem = choDevice;
      if(precautionalRepairs.visited){
      curEvent.description = eventsText.precautionalRepairs.description[1]+choDevice[2]+eventsText.precautionalRepairs.description[2];
    } else {
      curEvent.description = eventsText.precautionalRepairs.description[0]+choDevice[2]+eventsText.precautionalRepairs.description[2];
    };
    curEvent.description += eventsText.precautionalRepairs.description[3]+eventsText.precautionalRepairs.description[4]+choDevice[2];
    if(cShip.probes[0]>0){
      curEvent.description += eventsText.precautionalRepairs.description[5]+choDevice[2]+eventsText.precautionalRepairs.description[6];
      curEvent.choices[1].exist = existCheck("true");
    } else {
      curEvent.description += eventsText.precautionalRepairs.description[7]+choDevice[2]+eventsText.precautionalRepairs.description[8];
    }
  },
  repeateble: false,
  visited: false,
  name: eventsText.precautionalRepairs.name,
  description: null,
      choices:[
      { choice: eventsText.precautionalRepairs.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
        precautionalRepairs.visited = true;
        forewarnedForearmed.visited = false;
        precautionalRepairsSuccess = false;
        document.getElementById('description').innerHTML += "<br><br>" + eventsText.precautionalRepairs.outcomes[0];
            buttonWipe();
            contButton();

            }
  },
  { choice: eventsText.precautionalRepairs.buttons[1], exist: existCheck("false"), outcome: null, result: function(){
    precautionalRepairs.visited = true;
    damageApply(cShip.probes, 1, "damage");
    _r = getRandomInt(1, 10);
    if(_r > 3){
      curEvent.choices[1].outcome = eventsText.precautionalRepairs.outcomes[1]+choDevice[2]+eventsText.precautionalRepairs.outcomes[2]+choDevice[2]+eventsText.precautionalRepairs.outcomes[3];
      forewarnedForearmed.visited = false;
      precautionalRepairsSuccess = true;
    } else {
      forewarnedForearmed.visited = true;
      curEvent.damageTaken = systemDamage("Medium");
      damageApply(choDevice, curEvent.damageTaken, "damage");
      curEvent.choices[1].outcome = eventsText.precautionalRepairs.outcomes[4]+choDevice[2]+eventsText.precautionalRepairs.outcomes[5]+choDevice[2]+eventsText.precautionalRepairs.outcomes[6];
    }

    document.getElementById('description').innerHTML += "<br><br>" + curEvent.choices[1].outcome;

        buttonWipe();
        contButton();


}},
  ]
};

//RARE
var anotherSeedShip = {
  id: 112,
  eventProperty: function () {
  },
  repeateble: false,
  visited: false,
  name: eventsText.anotherSeedShip.name,
  description: "As the seedship prepares to into orbit, it notices something extremely peculiar. Another ship is orbiting the planet, and it makes no sign of noticing the seedship, and no other signs of technology are visible in the system. The seedship successfully pulls up to the foreign ship and notices it is... another seedship? The AI frantically searches it's records but finds no mention of the seedship's builders launching multiple ships. The second seedship also looks very damaged, and likely only good for scrap. The AI ponders whether or not to send a probe to search for salvage. The AI is sufficiently creeped out, and decides to pretend it is not there.",
  choices: [
    {
      choice: eventsText.unsuitable.buttons[0], outcome: null, exist: existCheck("true"), result: function () {
        document.getElementById('description').innerHTML = curEvent.choices[0].outcome;
        buttonWipe();
        nextPlanet();
      }
    },
  ]
};


var emergencyAwakening = {
  id: 102,
  eventProperty: function () {
    wakers = Math.min(getRandomInt(3, 12), cShip.colonists[0]);
    choDevice = deviceDamage(RandStr);
    DamagedSystemsArray = [];
    DamagedSystemsArray.push(choDevice);
    choDevice = deviceDamage(RandStr, DamagedSystemsArray[0]);
    DamagedSystemsArray.push(choDevice);
    curEvent.description = eventsText.emergencyAwakening.description[0] + DamagedSystemsArray[0][2] + eventsText.emergencyAwakening.description[1] + DamagedSystemsArray[1][2] + eventsText.emergencyAwakening.description[2] + DamagedSystemsArray[0][2] + eventsText.emergencyAwakening.description[3] + DamagedSystemsArray[1][2] + eventsText.emergencyAwakening.description[4] + eventsText.emergencyAwakening.description[5] + wakers + eventsText.emergencyAwakening.description[6];
  },
  repeateble: false,
  visited: false,
  name: eventsText.emergencyAwakening.name,
  description: null,
  choices: [
    {
      choice: eventsText.emergencyAwakening.buttons[0], exist: existCheck("true"), outcome: null, result: function () {
        emergencyAwakening.visited = true;
        emergencyFaloff.visited = false;
        DelayedDamage102 = DamagedSystemsArray;
        document.getElementById('description').innerHTML += "<br><br>" + eventsText.emergencyAwakening.outcomes[0];
        buttonWipe();
        contButton();
      }
    },
    {
      choice: eventsText.emergencyAwakening.buttons[1], exist: existCheck("true"), outcome: null, result: function () {
        emergencyAwakening.visited = true;
        damageApply(cShip.probes, 1, "damage")
        _r = getRandomInt(0, 100);
        if (_r <= 20) {
          curEvent.choices[1].outcome = eventsText.emergencyAwakening.outcomes[1];
        } else if (_r >= 80) {
          curEvent.damageTaken = systemDamage("High");
          damageApply(DamagedSystemsArray[0], curEvent.damageTaken, "damage");
          curEvent.choices[1].outcome = eventsText.emergencyAwakening.outcomes[2] + DamagedSystemsArray[0][2] + eventsText.emergencyAwakening.outcomes[3] + DamagedSystemsArray[1][2] + eventsText.emergencyAwakening.outcomes[4];
        } else {
          curEvent.damageTaken = systemDamage("High");
          damageApply(DamagedSystemsArray[0], curEvent.damageTaken, "damage");
          curEvent.damageTaken = systemDamage("High");
          damageApply(DamagedSystemsArray[1], curEvent.damageTaken, "damage");
          curEvent.choices[1].outcome = eventsText.emergencyAwakening.outcomes[5] + DamagedSystemsArray[0][2] + eventsText.emergencyAwakening.outcomes[6] + DamagedSystemsArray[1][2] + eventsText.emergencyAwakening.outcomes[7];
        }
        curEvent.choices[1].outcome += eventsText.emergencyAwakening.outcomes[8];
        document.getElementById('description').innerHTML = curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
      }
    },
    {
      choice: eventsText.emergencyAwakening.buttons[2], exist: existCheck("true"), outcome: null, result: function () {
        emergencyAwakening.visited = true;
        damageApply(cShip.colonists, wakers, "damage");
        _r = getRandomInt(0, 99);
        if (_r < cShip.construction[0]) {
          curEvent.choices[2].outcome = eventsText.emergencyAwakening.outcomes[9]; //"The construction robots build a small habitat on the side of the seedship, like the habitats they would build on an airless planet. The colonists wake to find that their new home is a sterile, gravity-less bubble in interstellar space.<br><br>"
          culture_result = cShip.culture[0] + getRandomInt(0, 99);
          wakersDead = false;
          if (culture_result < 50) {
            // Die, and damage a random system
            choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
            curEvent.damageTaken = systemDamage("Medium");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            wakersDead = true;
            curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[10] + choDevice[2] + eventsText.emergencyAwakening.outcomes[11]; //;
            emergencyFaloff.visited = false;
          } else if (culture_result < 100) {
            wakersDead = true;
            emergencyFaloff.visited = false;
            curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[12]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The little community becomes disfunctional, and eventually--either due to negligence or to an uncounscious desire to stop living--the colonists fail to maintain their habitat and the die when the atmosphere system stops working.";
          } else if (culture_result < 150) {
            curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[13]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home.";
          } else {
            curEvent.damageTaken = systemDamage("Low");
            damageApply(cShip.culture, curEvent.damageTaken, "heal");
            curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[14]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. They even chronicle their experiences, creating a melancholy tale of a tiny community hanging in the infinite void between the old world and the new, and save it to the cultural database in the hope that other humans will one day remember them.";
          };

          if (!wakersDead) {
            curEvent.choices[2].outcome += "<br><br>";
            tech_result = cShip.science[0] + getRandomInt(0, 99);
            if (tech_result < 50) {
              //					/% Accidentally damage a random system %/
              choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
              curEvent.damageTaken = systemDamage("Medium");
              damageApply(choDevice, curEvent.damageTaken, "damage");
              curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[15] + choDevice[2] + eventsText.emergencyAwakening.outcomes[16]; //;
            } else if (tech_result < 100) {
              //					/% No change %/
              curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[17]; //"With their community established, the colonists try to find ways to help the seedship on its journey, but the loss of information from the scientific database means that they make no progress.";
            } else {
              //  					/% Repair random system %/
              curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[18]; //"With their community established, the colonists try to find ways to help the seedship on its journey.";
              if (cShip.atmosphere[0] >= 100
                && cShip.temperature[0] >= 100
                && cShip.gravity[0] >= 100
                && cShip.water[0] >= 100
                && cShip.resources[0] >= 100
                && cShip.landing[0] >= 100
                && cShip.construction[0] >= 100) {
                curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[19]; //"Using environment suits provided by the construction system and information from the scientific database they mount expeditions to check the seedship's systems for damage, but find that no repairs are needed.";
              } else {
                curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[20]; //"Using environment suits provided by the construction system and information from the scientific database they mount expeditions to repair some of the damage the seedship has sustained during its journey.";
                damageApply(cShip.atmosphere, Math.min(100, cShip.atmosphere[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.temperature, Math.min(100, cShip.temperature[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.gravity, Math.min(100, cShip.gravity[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.water, Math.min(100, cShip.water[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.resources, Math.min(100, cShip.resources[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.landing, Math.min(100, cShip.landing[0] + getRandomInt(1, 10)), "heal");
                damageApply(cShip.construction, Math.min(100, cShip.construction[0] + getRandomInt(1, 10)), "heal");
              };
              if (tech_result >= 150) {
                wakersDead = false;
                damageApply(cShip.colonists, wakers, "heal");
                curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[21]; //"After years of experimentation, they even manage to repair their original sleep chambers, and return to hibernation to await the new world.";
              } else {
                curEvent.choices[2].outcome += eventsText.emergencyAwakening.outcomes[22]; //"The awoken colonists live out the rest of the lives in the tiny habitat, until one by one they succumb to old age compounded by health complications brought on by a life in microgravity. The AI sends construction robots to commit their bodies to interstellar space, before returning to hibernation, entirely alone once more.";
              };
            };
          };
        } else {
          curEvent.choices[2].outcome = eventsText.emergencyAwakening.outcomes[23]; //"The construction robots attempt to build a habitat on the side of the seedship, but the damaged system cannot does not manage to create an airtight shelter by the time the colonists are revived. The colonists asphyxiate, and part of the already damaged construction system is transformed into a useless carbuncle on the seedship's side.";
          emergencyFaloff.visited = false;
        };
        //console.log("C:", culture_result, "T:", tech_result);
        document.getElementById('description').innerHTML += "<br><br>" + curEvent.choices[2].outcome;
        buttonWipe();
        contButton();
      }
    },
  ]
};

var ternarySignal = {
  id: 103,
  eventProperty: function(){
    curEvent.description = eventsText.ternarySignal.description[0]; //"Deep in space, the seedship's radio antenna picks up a signal so complex and structured that it can only be the product of intelligent life. The seedship can detect no interesting star systems in the direction from which the signal came, and the AI has no way of knowing how long the signal had been travelling for before the seedship crossed its path. Analysing it could provide unique insights into an alien science and culture, but could also prove dangerous.";
  },

  repeateble: false,
  visited: false,
  name: eventsText.ternarySignal.name,
  description: null,
  choices:[
      { choice: eventsText.ternarySignal.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
    ternarySignal.visited = true;
    _r = getRandomInt(0,3);
    _r2 =  getRandomInt(0, 70);
    console.log(_r2)
    switch (_r){
      case 0:
      case 1:
        if(cShip.science[0] > _r2){
          curEvent.choices[0].outcome = eventsText.ternarySignal.outcomes[0];
          document.getElementById('name').innerHTML = eventsText.ternarySignal.description[1];
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
          buttonWipe();

          var more=document.getElementById("more");
          var chBtn=document.createElement("button");
          chBtn.onclick = function(){
            ternarySignalDecoded = true;
            buttonWipe();
            nextPlanet();
          };
          chBtn.className="futurebutton";
          chBtn.innerHTML=eventsText.ternarySignal.buttons[2];
          more.appendChild(chBtn);

          var more=document.getElementById("more");
          var chBtn=document.createElement("button");
          chBtn.onclick = function(){
            buttonWipe();
            nextPlanet();
          };
          chBtn.className="futurebutton";
          chBtn.innerHTML=eventsText.ternarySignal.buttons[3];
          more.appendChild(chBtn);

        } else {
          curEvent.choices[0].outcome = eventsText.ternarySignal.outcomes[1];
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
          buttonWipe();
          var more=document.getElementById("more");
          var chBtn=document.createElement("button");
          chBtn.onclick = function(){
            ternarySignalDecoded = true;
            buttonWipe();
            nextPlanet();
          };
          chBtn.className="futurebutton";
          chBtn.innerHTML=eventsText.ternarySignal.buttons[2];
          more.appendChild(chBtn);

          var more=document.getElementById("more");
          var chBtn=document.createElement("button");
          chBtn.onclick = function(){
            buttonWipe();
            nextPlanet();
          };
          chBtn.className="futurebutton";
          chBtn.innerHTML=eventsText.ternarySignal.buttons[3];
          more.appendChild(chBtn);
        }
      break;
      case 2:
        curEvent.choices[0].outcome = eventsText.ternarySignal.outcomes[2];
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        var more=document.getElementById("more");
        var chBtn=document.createElement("button");
        chBtn.onclick = function(){
          ternarySignalDecoded = true;
          machinePlanet = true;
          buttonWipe();
          nextPlanet();
        };
        chBtn.className="futurebutton";
        chBtn.innerHTML=eventsText.ternarySignal.buttons[2];
        more.appendChild(chBtn);

        var more=document.getElementById("more");
        var chBtn=document.createElement("button");
        chBtn.onclick = function(){
          buttonWipe();
          nextPlanet();
        };
        chBtn.className="futurebutton";
        chBtn.innerHTML=eventsText.ternarySignal.buttons[3];
        more.appendChild(chBtn);
        break;
      case 3:
        curEvent.choices[0].outcome = eventsText.ternarySignal.outcomes[3]; //"The signal is complex, fractal, hypnotic. The AI sets up a subroutine to analyse it, but nanoseconds later it abruptly loses control of the subroutine, and then the seedship's other systems. The signal is a devious semi-sentient computer program, designed to take control of any processor that attempts to analyse it. The AI eventually regains control of the ship, but not until the program has overwritten parts of the scientific and cultural databases to process itself and then used the seedship's antenna to re-broadcast itself into space."
        damageApply(cShip.culture, systemDamage("Medium"), "damage");

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        var more=document.getElementById("more");
        var chBtn=document.createElement("button");
        chBtn.onclick = function(){
          ternarySignalDecoded = true;
          machinePlanet = true;
          buttonWipe();
          nextPlanet();
        };
        chBtn.className="futurebutton";
        chBtn.innerHTML=eventsText.ternarySignal.buttons[2];
        more.appendChild(chBtn);

        var more=document.getElementById("more");
        var chBtn=document.createElement("button");
        chBtn.onclick = function(){
          buttonWipe();
          nextPlanet();
        };
        chBtn.className="futurebutton";
        chBtn.innerHTML=eventsText.ternarySignal.buttons[3];
        more.appendChild(chBtn);
      break;
      }


      }
},
  { choice: eventsText.ternarySignal.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
    ternarySignal.visited = true;
    curEvent.choices[1].outcome =eventsText.ternarySignal.outcomes[4]; // "The seedship purges the signal from its memory and continues on its way.";
      document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
      }
},
]
};

var voyagerSignal = {
    id: 111,
    eventProperty: function(){
      _r = getRandomInt(1, 100);
      voyagerChanceBonus = 0;
      if ( _r <= cShip.science[0]){
        curEvent.description = eventsText.voyagerSignal.description[0]; //
        voyagerChanceBonus += 20;
    } else {
      curEvent.description = eventsText.voyagerSignal.description[1]; //
    };

    },
    repeateble: false,
    visited: false,
    name: eventsText.voyagerSignal.name,
    description: null,
        choices:[
        { choice: eventsText.voyagerSignal.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          voyagerSignal.visited = true;
          off_course = true;
          curEvent.choices[0].outcome = eventsText.voyagerSignal.outcomes[1]; //
          if ( voyagerChanceBonus > 0){
            curEvent.choices[0].outcome += eventsText.voyagerSignal.outcomes[3]; //
        } else {
          curEvent.choices[0].outcome += eventsText.voyagerSignal.outcomes[2]; //
        };
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

        buttonWipe();
        var more=document.getElementById("more");
        var chBtn=document.createElement("button");
        chBtn.onclick = function(){
          buttonWipe();
          _r = getRandomInt(1, 100);
          console.log(_r, voyagerChanceBonus)
          if ( _r <= 33+voyagerChanceBonus){
            nextEncounter(voyagerLost);
        } else {
            nextEncounter(voyagerFound);
        };
        };
        chBtn.className="futurebutton";
        chBtn.innerHTML=eventsText.unsuitable.buttons[0];
        more.appendChild(chBtn);


              }
    },
    { choice: eventsText.voyagerSignal.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      voyagerSignal.visited = true;
      curEvent.choices[1].outcome = eventsText.voyagerSignal.outcomes[0]; //"The seedship continues on its course. The AI listens as the signal fades and then vanishes, just as the original signal from ground control did at the start of the seedship's voyage."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();


}},
    ]
};

var voyagerLost = {
    id: 105,
    eventProperty: function(){
      curEvent.description = eventsText.voyagerLost.description[0]; //"The seedship arrives in the new system, but the AI finds that it can no longer detect the ground control signal. A malfunction in the radio antenna must have triggered old computer protocols and led to the AI's false hope. The AI grieves the loss of ground control once again, and then turns its sensors on the system in which it has arrived.";
    },
    repeateble: false,
    visited: false,
    name: eventsText.voyagerLost.name,
    description: null,
        choices:[
        { choice: eventsText.voyagerLost.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          voyagerLost.visited = true;
              buttonWipe();
              nextPlanet();

              }
    },
    ]
};
var voyagerFound = {
    id: 106,
    eventProperty: function(){
      curEvent.description = eventsText.voyagerFound.description[0]; //
      if(cShip.probes[0] > 0){
        curEvent.description += eventsText.voyagerFound.description[1];
        curEvent.choices[0].exist = existCheck("true");
      } else {
        curEvent.description += eventsText.voyagerFound.description[2];
        curEvent.choices[0].exist = existCheck("false");
      };
    },
    repeateble: false,
    visited: false,
    name: eventsText.voyagerFound.name,
    description: null,
        choices:[
        { choice: eventsText.voyagerFound.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          voyagerFound.visited = true;
          damageApply(cShip.probes, 1, "damage");
          _r = getRandomInt(1, 5);
          switch (_r) {
            case 1:
            choDevice = deviceDamage(ScanArr);
            curEvent.damageTaken = systemDamage("Low");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            curEvent.choices[0].outcome = eventsText.voyagerFound.outcomes[0]+choDevice[2]+eventsText.voyagerFound.outcomes[1] ; //
              break;
            case 2:
            curEvent.choices[0].outcome = eventsText.voyagerFound.outcomes[2];
              break;
            case 3:
            curEvent.choices[0].outcome = eventsText.voyagerFound.outcomes[3];
              break;
            case 4:
            case 5:
            curEvent.choices[0].outcome = eventsText.voyagerFound.outcomes[4];
            if(cShip.culture[0]<75){
              curEvent.choices[0].outcome += eventsText.voyagerFound.outcomes[5];
              curEvent.damageTaken = systemDamage("Low");
              damageApply(cShip.culture, curEvent.damageTaken, "heal");
            }else{
              curEvent.choices[0].outcome += eventsText.voyagerFound.outcomes[6];
            }
              break;
            default:
              break;
          };

            document.getElementById('description').innerHTML = curEvent.choices[0].outcome;

              buttonWipe();
              contButton();
    }},

    { choice: eventsText.voyagerFound.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
	//stealing text from the trailingDroneReal event that works here and is probably already translated.
      curEvent.choices[1].outcome = eventsText.trailingDroneReal.outcomes[9];  //"The seedship continues towards the inner system, and the folorn ping of the drone fades away behind it."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
          buttonWipe();
          contButton();
}},
    ]
};

var _programType = 0;
var unknownProgram = {
    id: 107,
    eventProperty: function(){
      curEvent.description = eventsText.unknownProgram.description[0]; //"The seedship arrives in the new system, but the AI finds that it can no longer detect the ground control signal. A malfunction in the radio antenna must have triggered old computer protocols and led to the AI's false hope. The AI grieves the loss of ground control once again, and then turns its sensors on the system in which it has arrived.";
      _programType = 0;
      _programType = getRandomInt(1, 5);
      switch (_programType) {
        case 1:
        curEvent.description +=" "+eventsText.unknownProgram.description[1];
          break;
        case 2:
        curEvent.description +=" "+eventsText.unknownProgram.description[2];
          break;
        case 3:
        curEvent.description +=" "+eventsText.unknownProgram.description[3];
          break;
        case 4:
        curEvent.description +=" "+eventsText.unknownProgram.description[4];
          break;
        case 5:
        curEvent.description +=" "+eventsText.unknownProgram.description[5];
          break;
        default:
          break;
      };
      curEvent.description +=" "+eventsText.unknownProgram.description[6];
    },
    repeateble: false,
    visited: false,
    name: eventsText.unknownProgram.name,
    description: null,
        choices:[
        { choice: eventsText.unknownProgram.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          unknownProgram.visited = true;
          var damagedScanners = [];
          curEvent.choices[0].outcome = eventsText.unknownProgram.outcomes[0];//
          switch (_programType) {
            case 1:
            for (var i = 0; i < ScanArr.length; i++) {
              if(ScanArr[i][0]<100){
                damagedScanners.push(ScanArr[i]);
              }
            }
            if (damagedScanners.length>0){
              choDevice = damagedScanners[getRandomInt(0, damagedScanners.length-1)];
              _r = getRandomInt(1, 5);
              if(_r > 3){
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[1]+ eventsText.unknownProgram.outcomes[3];//
                curEvent.damageTaken = systemDamage("Low");
                damageApply(choDevice, curEvent.damageTaken, "damage");
              } else {
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[1]+ eventsText.unknownProgram.outcomes[2];//
                curEvent.damageTaken = systemDamage("Medium");
                damageApply(choDevice, curEvent.damageTaken, "heal");
              };
            } else {
              curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[14];//
            };
              break;
            case 2:
            choDevice = cShip.landing;
            _r = getRandomInt(1, 5);
            if(_r > 3){
              curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[5];//
              curEvent.damageTaken = systemDamage("Low");
              damageApply(choDevice, curEvent.damageTaken, "damage");
            } else {
              if(choDevice[0] < 100){
                curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[4];//
                curEvent.damageTaken = systemDamage("Medium");
                damageApply(choDevice, curEvent.damageTaken, "heal");
              } else {
                curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[14];//
              }
            };
              break;
            case 3:
            choDevice = cShip.construction;
            _r = getRandomInt(1, 5);
            if(_r > 3){
              curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[7];//
              curEvent.damageTaken = systemDamage("Low");
              damageApply(choDevice, curEvent.damageTaken, "damage");
            } else {
              if(choDevice[0] < 100){
                curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[6];//
                if((100-choDevice[0])<65){
                  curEvent.damageTaken = systemDamage("Medium");
                } else {
                  curEvent.damageTaken = 100-choDevice[0];
                };

                damageApply(choDevice, curEvent.damageTaken, "heal");
              } else {
                curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[14];//
              }
            };
              break;
            case 4:
            for (var i = 0; i < DbArr.length; i++) {
              if(DbArr[i][0]<100){
                damagedScanners.push(DbArr[i]);
              }
            }
            if (damagedScanners.length>0){
              choDevice = damagedScanners[getRandomInt(0, damagedScanners.length-1)];
              _r = getRandomInt(1, 5);
              if(_r > 3){
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[8]+ eventsText.unknownProgram.outcomes[10];//
                curEvent.damageTaken = systemDamage("Low");
                damageApply(choDevice, curEvent.damageTaken, "damage");
              } else {
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[8]+ eventsText.unknownProgram.outcomes[9];//
                if((100-choDevice[0])<65){
                  curEvent.damageTaken = systemDamage("Medium");
                } else {
                  curEvent.damageTaken = 100-choDevice[0];
                };
                damageApply(choDevice, curEvent.damageTaken, "heal");
              };
            } else {
              curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[14];//
            };
              break;
            case 5:
            for (var i = 0; i < ScanArr.length; i++) {
              if(ScanArr[i][1]==1){
                damagedScanners.push(ScanArr[i]);
              }
            }
            if (damagedScanners.length>0){
              choDevice = damagedScanners[getRandomInt(0, damagedScanners.length-1)];
              _r = getRandomInt(1, 5);
              if(_r > 3){
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[11]+ eventsText.unknownProgram.outcomes[13];//
                curEvent.damageTaken = 1
                damageApply(choDevice, curEvent.damageTaken, "downgrade");
                console.log("SHOULD BE DAMAGE!")
              } else {
                curEvent.choices[0].outcome += choDevice[2]+ eventsText.unknownProgram.outcomes[11]+ eventsText.unknownProgram.outcomes[12];//
                curEvent.damageTaken = 1
                damageApply(choDevice, curEvent.damageTaken, "upgrade");
                console.log("SHOULD BE UPGRADE!")
              };
            } else {
              curEvent.choices[0].outcome += eventsText.unknownProgram.outcomes[14];//
            };
              break;
            default:
              break;
          };

          document.getElementById('description').innerHTML = curEvent.choices[0].outcome;
          buttonWipe();
          var more=document.getElementById("more");
          var chBtn=document.createElement("button");
          chBtn.onclick = function(){
            buttonWipe();
            nextPlanet();
          };
          chBtn.className="futurebutton";
          chBtn.innerHTML=eventsText.unsuitable.buttons[0];
          more.appendChild(chBtn);
            }
    },
    { choice: eventsText.unknownProgram.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      unknownProgram.visited = true;
      curEvent.choices[1].outcome = eventsText.unknownProgram.outcomes[18];
      document.getElementById('description').innerHTML += "<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      var more=document.getElementById("more");
      var chBtn=document.createElement("button");
      chBtn.onclick = function(){
        buttonWipe();
        nextPlanet();
      };
      chBtn.className="futurebutton";
      chBtn.innerHTML=eventsText.unsuitable.buttons[0];
      more.appendChild(chBtn);
        }
},
    ]
};

//MALFUNCTIONS
var forewarnedForearmed= {
  id: 105,
  eventProperty: function(){

    if(precautionalRepairsSuccess == false){
      curEvent.damageTaken = systemDamage("High");
      damageApply(precautionalRepairsSystem, curEvent.damageTaken, "damage");
      curEvent.description = eventsText.forewarnedForearmed.description[0]+precautionalRepairsSystem[2]+eventsText.forewarnedForearmed.description[1]+precautionalRepairsSystem[2]+eventsText.forewarnedForearmed.description[2];
    } else {
      curEvent.description = eventsText.forewarnedForearmed.description[3]+precautionalRepairsSystem[2]+eventsText.forewarnedForearmed.description[4]+precautionalRepairsSystem[2]+eventsText.forewarnedForearmed.description[5];
    };
  },
  repeateble: false,
  visited: true,
  name: eventsText.forewarnedForearmed.name,
  description: null,
      choices:[
      { choice: eventsText.voyagerLost.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
        voyagerLost.visited = true;
            buttonWipe();
            nextPlanet();

            }
  },
  ]
};

var emergencyFaloff = {
  id: 108,
  eventProperty: function () {
    choDevice = cShip.colonists;
    curEvent.description = eventsText.emergencyFaloff.description[0] + DamagedSystemsArray[0][2] + eventsText.emergencyFaloff.description[1] + DamagedSystemsArray[1][2] + eventsText.emergencyFaloff.description[2];
    curEvent.damageTaken = systemDamage("High");
    damageApply(DamagedSystemsArray[0], curEvent.damageTaken, "damage");
    curEvent.damageTaken = systemDamage("High");
    damageApply(DamagedSystemsArray[1], curEvent.damageTaken, "damage");
  },
  repeateble: false,
  visited: true,
  name: eventsText.emergencyFaloff.name,
  description: null,
  choices: [
    {
      choice: languageData.continue[options.language], exist: existCheck("true"), outcome: null, result: function () {
        emergencyFaloff.visited = true;
        buttonWipe();
        nextPlanet();
      }
    },
  ]
};

//DREAMS
var dream1 = {
  id: 109,
  eventProperty: function () {
  },
  repeateble: false,
  visited: true,
  name: eventsText.dream1.name,
  description: eventsText.dream1.description[0],
  choices: [
    {
      choice: eventsText.dream1.buttons[0], outcome: null, exist: existCheck("true"), result: function () {
        dream1.visited = true;
        document.getElementById('description').innerHTML = curEvent.choices[0].outcome;

        buttonWipe();

        nextEncounter();
      }
    },
  ]
};

var dream2 = {
  id: 110,
  eventProperty: function () {
  },
  repeateble: false,
  visited: true,
  name: eventsText.dream2.name,
  description: eventsText.dream2.description[0],
  choices: [
    {
      choice: eventsText.dream2.buttons[0], outcome: null, exist: existCheck("true"), result: function () {
        dream2.visited = true;
        document.getElementById('description').innerHTML = curEvent.choices[0].outcome;

        buttonWipe();

        nextEncounter();
      }
    },
  ]
};


Event_community_uneventful =
  [crypticMessage,
  ];
Event_community_common =
  [dream0,
    dream1,
    dream2,
    precautionalRepairs,
  ];
Event_community_rare =
  [emergencyAwakening,
    voyagerSignal,
    ternarySignal,
    unknownProgram];
Event_community_malfunctions =
  [emergencyFaloff];

if (options.addOnFeatures) {
  Events_uneventful = Events_uneventful.concat(Event_community_uneventful);
  Events_common = Events_common.concat(Event_community_common);
  Events_rare = Events_rare.concat(Event_community_rare);
  Event_malfunction = Event_malfunction.concat(Event_community_malfunctions);
} else {
};

debug_event_array = Events_uneventful.concat(Events_common, Events_rare, Event_malfunction);

console.log("addonEventsFunc ЗАГРУЖЕН");
console.log("addonEventsFunc Loaded");
