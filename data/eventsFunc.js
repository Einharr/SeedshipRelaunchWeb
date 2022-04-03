var damageTaken;
var choDevice = 0;
var randDevice;
var preDevice = 0;


var dictator = false;
var transmittedGreeting = false;
var harpoonSystem = 0;

simulation = false;

destinationSignalEvent = true;
welcoming = false;
unwelcoming = false;
aliensAlive = false;
aliensDead = false;
reservation_ntl = 0;
reservation_ncl = 0;
ternarySignalDecoded = false;

alienObservers = false;

off_course = false;

colStow = 0;
//События без эффектов
//Events without effects. These won't impact the player.
var unsuitable = {
    id: 1,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.unsuitable.name,
    description: eventsText.unsuitable.description,
    choices:[
        { choice: eventsText.unsuitable.buttons[0], outcome: null, exist: existCheck("true"), result: function(){
            unsuitable.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};

var falseAlarm = {
    id: 2,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.falseAlarm.name,
    description: eventsText.falseAlarm.description,
    choices:[
        { choice: eventsText.falseAlarm.buttons[0], outcome: null, exist: existCheck("true"), result: function(){
            falseAlarm.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};

var falseAlarm2 = {
    id: 3,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.falseAlarm2.name,
    description: eventsText.falseAlarm2.description,
    choices:[
        { choice: eventsText.falseAlarm2.buttons[0], outcome: null, exist: existCheck("true"), result: function(){
            falseAlarm2.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};


var hibernating = {
    id: 4,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.hibernating.name,
    description: eventsText.hibernating.description,
    choices:[
        { choice: languageData.continue[options.language], outcome: null, exist: existCheck("true"), result: function(){
            hibernating.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};


var hibernating2 = {
    id: 5,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.hibernating2.name,
    description: eventsText.hibernating2.description,
    choices:[
        { choice: languageData.continue[options.language], outcome: null, exist: existCheck("true"), result: function(){
            hibernating2.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};

var starCluster = {
    id: 6,
    eventProperty: function(){
    },
    repeateble: false,
    visited: false,
    name: eventsText.starCluster.name,
    description: eventsText.starCluster.description,
    choices:[
        { choice: languageData.continue[options.language], outcome: null, exist: existCheck("true"), result: function(){
            starCluster.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

            buttonWipe();

            nextPlanet();
    }},
    ]
};



//ОБЫЧНЫЕ
//Regular

var overheat = {
    id: 7,
    eventProperty: function(){
      curEvent.damageTaken = killColonists("Low");
      if (overheat.visited == false){
      	curEvent.description = eventsText.overheat.description[0];
      } else {
        curEvent.description = eventsText.overheat.description[1];
      };

      curEvent.choices[1].exist = existCheck(ScanArr);
      curEvent.choices[2].exist = existCheck(StrArr);
      curEvent.choices[3].exist = existCheck(DbArr);
    },
    repeateble: true,
    visited: false,
    name: eventsText.overheat.name,
    choices:[
        { choice: eventsText.overheat.buttons[0],
        outcome: null,
        exist: existCheck("true"),
        result: function(){
          curEvent.choices[0].outcome = eventsText.overheat.outcomes[0]+curEvent.damageTaken+eventsText.overheat.outcomes[1];
          damageApply(cShip.colonists, curEvent.damageTaken, "damage");
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();

    }},
    { choice: eventsText.overheat.buttons[1],
    exist: null,
    outcome: null,
    result: function(){
      curEvent.damageTaken = systemDamage("Low");
      choDevice = deviceDamage(ScanArr);
      damageApply(choDevice, curEvent.damageTaken, "damage");
      curEvent.choices[1].outcome = eventsText.overheat.outcomes[2]+choDevice[2]+eventsText.overheat.outcomes[3]+choDevice[2]+". ";

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();

}},
    { choice: eventsText.overheat.buttons[2],
    outcome: null,
    exist: null,
    result: function(){
      curEvent.damageTaken = systemDamage("Low");
      choDevice = deviceDamage(StrArr);
      damageApply(choDevice, curEvent.damageTaken, "damage");
      curEvent.choices[2].outcome = eventsText.overheat.outcomes[2]+choDevice[2]+eventsText.overheat.outcomes[3]+choDevice[2]+". ";
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[2].outcome;

          buttonWipe();
          contButton();
}},
{ choice: eventsText.overheat.buttons[3],
outcome: null,
exist: null,
result: function(){
  curEvent.damageTaken = systemDamage("Low");
  choDevice = deviceDamage(DbArr);
  damageApply(choDevice, curEvent.damageTaken, "damage");
  curEvent.choices[2].outcome = eventsText.overheat.outcomes[2]+choDevice[2]+eventsText.overheat.outcomes[3]+choDevice[2]+". ";
    document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[2].outcome;

      buttonWipe();
      contButton();
}},
    ]
};

var radiationAlert = {
    id: 8,
    eventProperty: function(){
      curEvent.description =  eventsText.radiationAlert.description[0]; //"The AI wakes to a radiation alert: the death burst of a distant supernova is flooding the seedship's electronics with random signals. "
      choDevice = deviceDamage(RandStr);
      if (choDevice[2] == languageData.scanColonists[options.language]){
    		curEvent.description += eventsText.radiationAlert.description[1]; //"The sleep chambers are malfunctioning, and in a few moments some of them will shut down.";
    	} else if (choDevice[2] == languageData.scanProbes[options.language]){
    		curEvent.description += eventsText.radiationAlert.description[2]; //"One of the surface probes is malfunctioning, and in a few moments it will be destroyed.";
    	} else if (choDevice[2] == languageData.scanCulture[options.language] || choDevice[2] == languageData.scanScience[options.language]){
    		curEvent.description += eventsText.radiationAlert.description[3]+choDevice[2]+eventsText.radiationAlert.description[4]; //"The data storage system is malfunctioning, and in a few moments part of the "+choDevice[2]+" will be lost."
    	} else {
    		curEvent.description += eventsText.radiationAlert.description[5]+choDevice[2]+eventsText.radiationAlert.description[6]; //"The "+choDevice[2]+" is malfunctioning, and in a few moments it will be permanently damaged."
      };

      if (radiationAlert.visited == true){
      curEvent.description += eventsText.radiationAlert.description[7]; //" The seedship could avoid the malfunction by shutting down all its electronics until the radiation has passed, but that would leave it without a working collision avoidance system for a dangerous length of time."
    } else {
      curEvent.description += eventsText.radiationAlert.description[8]; //" A surge of supernova radiation crackles through ";
      if (choDevice[2] == languageData.scanProbes[options.language]){
    		curEvent.description += eventsText.radiationAlert.description[9]; //"one of ";
    	} ;
      curEvent.description += eventsText.radiationAlert.description[10]+ choDevice[2]+eventsText.radiationAlert.description[11]; //" the "+ choDevice[2]+". ";

      curEvent.description += eventsText.radiationAlert.description[12]; //"The AI can allow it to be damaged, or shut down and risk a collision.";
    };
    },
    repeateble: true,
    visited: false,
    name: eventsText.radiationAlert.name,
    choices:[
        { choice: eventsText.radiationAlert.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      radiationAlert.visited = true;
      curEvent.choices[0].outcome = [eventsText.radiationAlert.outcomes[0]]
      if (getRandomInt(0,2) == 0){
        if (choDevice[2] == languageData.scanColonists[options.language]){
          curEvent.damageTaken = killColonists("Medium");
          damageApply(cShip.colonists, curEvent.damageTaken, "damage");
          curEvent.choices[0].outcome[0] += eventsText.radiationAlert.outcomes[1]+curEvent.damageTaken+eventsText.radiationAlert.outcomes[2];
        } else if (choDevice[2] == languageData.scanProbes[options.language]){
          damageApply(choDevice, 1, false);
          curEvent.choices[0].outcome[0] += eventsText.radiationAlert.outcomes[3] //"but a small asteroid has smashed one of the surface probes.";
        } else {
          curEvent.damageTaken = systemDamage("Medium");
          damageApply(choDevice, curEvent.damageTaken, "damage");
          curEvent.choices[0].outcome[0] += eventsText.radiationAlert.outcomes[4]+choDevice[2]+"."; //"but a small asteroid has torn a hole in the "+choDevice[2]+".";
        };
      } else {
        curEvent.choices[0].outcome[0] += eventsText.radiationAlert.outcomes[5]; //"and to its relief a systems check reveals no damage.";
      };

            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome[0];

              buttonWipe();
              contButton();

    }},
    { choice: eventsText.radiationAlert.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      radiationAlert.visited = true;
      curEvent.choices[1].outcome = eventsText.radiationAlert.outcomes[6]; //"The AI keeps its focus on the collision avoidance system while"
      if (choDevice[2] == languageData.scanColonists[options.language]){
        curEvent.damageTaken = killColonists("Low");
        damageApply(cShip.colonists, curEvent.damageTaken, "damage");
    		curEvent.choices[1].outcome += " "+curEvent.damageTaken+eventsText.radiationAlert.outcomes[7]; //" colonists die in their sleep.";
    	} else if (choDevice[2] == languageData.scanProbes[options.language]){
        damageApply(choDevice, 1, "damage");
    		curEvent.choices[1].outcome += eventsText.radiationAlert.outcomes[8]; // "the surface probe tears itself apart.";
    	} else if (choDevice[2] == languageData.scanCulture[options.language] || choDevice[2] == languageData.scanScience[options.language]){
        curEvent.damageTaken = systemDamage("Low");
        damageApply(choDevice, curEvent.damageTaken, "damage");
    		curEvent.choices[1].outcome += eventsText.radiationAlert.outcomes[9]+choDevice[2]+eventsText.radiationAlert.outcomes[10]; //" parts of the "+choDevice[2]+" are overwritten with garbage."
    	} else {
        curEvent.damageTaken = systemDamage("Low");
        damageApply(choDevice, curEvent.damageTaken, "damage");
    		curEvent.choices[1].outcome += eventsText.radiationAlert.outcomes[11]+choDevice[2]+eventsText.radiationAlert.outcomes[12];
      };

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();
}},
    ]
};

var overwhelmed = {
    id: 9,
    eventProperty: function(){
      choDevice = deviceDamage(ScanArr);
      if (overwhelmed.visited == false){
      	curEvent.description = eventsText.overwhelmed.description[0]+eventsText.overwhelmed.description[1]+choDevice[2]+eventsText.overwhelmed.description[2];
      } else {
        curEvent.description = eventsText.overwhelmed.description[3]+choDevice[2]+eventsText.overwhelmed.description[4];
      };

      curEvent.choices[0].exist = existCheck(ScanArr);
      curEvent.choices[1].exist = existCheck("true");

      if (curEvent.choices[1].exist == true) {

      } else {
      curEvent.description +=  eventsText.overwhelmed.description[5]; // "<br><br>The seedship's course takes it through another star-forming nebula. With no functioning scanners, it has no option but to fly blind through the dangerous area."
      };


    },
    repeateble: true,
    visited: false,
    name: eventsText.overwhelmed.name,
    choices:[
        { choice:  eventsText.overwhelmed.buttons[0], exist: null, outcome: null, result: function(){
      curEvent.damageTaken = systemDamage("Medium");
      overwhelmed.visited = true;

      curEvent.choices[0].outcome = [eventsText.overwhelmed.outcomes[0]+choDevice[2]+eventsText.overwhelmed.outcomes[1]]

              damageApply(choDevice, curEvent.damageTaken, "damage");

              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome[0];

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.overwhelmed.buttons[1], exist: null, outcome: null, result: function(){

  curEvent.damageTaken = 0;
  overwhelmed.visited = true;
  if (curEvent.choices[1].exist == true){
  curEvent.choices[1].outcome = eventsText.overwhelmed.outcomes[2]; //"The AI calculates a course that it thinks will avoid obstacles, then shuts down the scanners.";
} else {
    curEvent.choices[1].outcome = eventsText.overwhelmed.outcomes[3]; //"The seedship enters the nebula.";
};

if (getRandomInt(0,1) == 0){
  choDevice = deviceDamage(DbArr.concat(StrArr, ColArr, ProArr));
  curEvent.choices[1].outcome += eventsText.overwhelmed.outcomes[4]; //"Flying blind, it has no way of detecting the dense cloud of dust that buffets the ship and";
  if (choDevice == cShip.colonists){
    curEvent.damageTaken = killColonists("Low");
    damageApply(choDevice, curEvent.damageTaken, "damage");
    curEvent.choices[1].outcome += eventsText.overwhelmed.outcomes[5]+ curEvent.damageTaken + eventsText.overwhelmed.outcomes[6];
  } else if (choDevice == cShip.probes){
    damageApply(cShip.probes, 1, "damage");
    curEvent.choices[1].outcome += eventsText.overwhelmed.outcomes[7]; //"knocks loose one of the surface probes.";
  } else {
    curEvent.damageTaken = systemDamage("Low");
    damageApply(choDevice, curEvent.damageTaken, "damage");
    curEvent.choices[1].outcome += eventsText.overwhelmed.outcomes[8]+choDevice[2]+eventsText.overwhelmed.outcomes[9]; //
  };
} else {
  curEvent.choices[1].outcome +=eventsText.overwhelmed.outcomes[10]; //" To its relief, when it judges that it is out of danger and reactivates the scanners, there is no damage.";
};

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();

        },
      },
    ],
};

var guidanceQuery = {
    id: 10,
    eventProperty: function(){
      if (guidanceQuery.visited == false){
      	curEvent.description = eventsText.guidanceQuery.description[0]; //"The AI wakes to a query from the automatic guidance system. Normally the system is able to analyze the data from the navigation sensors and make any necessary changes to the ship's course, but this time it has encountered readings it cannot make sense of and has woken the AI to make a decision. "+"<br>"+"According to some sensors there is something ahead on the ship's course, but according to others the course ahead is clear. If there is something there, it is close enough that avoiding it would mean changing course and arriving at a new system without the benefit of the upgraded scanners.";
        } else {
        curEvent.description = eventsText.guidanceQuery.description[1]; //"The AI wakes to another query from the navigation system: sensor readings are unclear, and there may or may not be something on the ship's current course.";
      };

    },
    repeateble: true,
    visited: false,
    name: eventsText.guidanceQuery.name,
    description: null,
    choices:[
        { choice: eventsText.guidanceQuery.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      curEvent.choices[0].outcome = [eventsText.guidanceQuery.outcomes[0]]
      guidanceQuery.visited = true;
      off_course = true;
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome[0];

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.guidanceQuery.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      guidanceQuery.visited = true;

      if (getRandomInt(0,1) == 0){
    		choDevice = deviceDamage(FullArr);

        if (choDevice == cShip.colonists){
          curEvent.damageTaken = killColonists("Low");
        } else if (choDevice == cShip.probes){
          curEvent.damageTaken = 1;
        } else {
          curEvent.damageTaken = systemDamage("Low");
        };

    		damageApply(choDevice, curEvent.damageTaken, "damage");

    		curEvent.choices[1].outcome =	eventsText.guidanceQuery.outcomes[1]+choDevice[2]+eventsText.guidanceQuery.outcomes[2]; //"The AI instructs the guidance system to stay on course. By the time the sensors get a clear picture of the utterly black, unreflective dust cloud, it is too late to avoid it. The seedship continues towards its target system but a dust particle impacts "+choDevice[2]+".";

    	} else {

    			curEvent.choices[1].outcome = eventsText.guidanceQuery.outcomes[3]; //"The AI instructs the guidance system to stay on course. To its relief, the anomaly resolves into a sensor glitch, and the seedship speeds through empty space to its target system.";
        };

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

        buttonWipe();
        contButton();
      }
    },
  ]
};

var interstellarDust = {
    id: 11,
    eventProperty: function(){
      if (interstellarDust.visited == false){
        curEvent.description = eventsText.interstellarDust.description[0]; //	"The seedship is decelerating on its approach to the next system when it detects an unusually thick volume of interstellar dust in its path. Passing through the dust would likely mean several high-velocity collisions with dust particles. The AI could execute an emergency course change to avoid the dust, but then the seedship would pass this system by and arrive at an effectively random one, without benefiting from the upgrades to its scanners."
      } else {
        curEvent.description = eventsText.interstellarDust.description[1]; //"The seedship detects another area of dense interstellar dust on its path to the new system. It can plough through the dust and take damage, or change course and arrive at a new system without benefiting from its upgraded scanners.";
      };


    },
    repeateble: true,
    visited: false,
    name: eventsText.interstellarDust.name,
    description: null,
    choices:[
        { choice: eventsText.interstellarDust.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          interstellarDust.visited = true;
          off_course = true;
      curEvent.choices[0].outcome = [eventsText.interstellarDust.outcomes[0]]
      off_course = true;
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome[0];

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.interstellarDust.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      interstellarDust.visited = true;
  choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
  DamagedSystemsArray = [];
  _r = getRandomInt(1,3);
  DamagedSystemsArray.push(choDevice);
  damageApply(DamagedSystemsArray[0], systemDamage("Low"), "damage");
  DamagedSystems = DamagedSystemsArray[0][2];
  if (_r >= 2){
      choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr), DamagedSystemsArray[0]);
      DamagedSystemsArray.push(choDevice);
      damageApply(DamagedSystemsArray[1], systemDamage("Low"), "damage");
      DamagedSystems = DamagedSystemsArray[0][2]+eventsText.blackHole.outcomes[5]+DamagedSystemsArray[1][2];
    };
  if (_r == 3){
  choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr), DamagedSystemsArray[0], DamagedSystemsArray[1]);
  DamagedSystemsArray.push(choDevice);
  damageApply(DamagedSystemsArray[1], systemDamage("Low"), "damage");
  damageApply(DamagedSystemsArray[2], systemDamage("Low"), "damage");
  DamagedSystems = DamagedSystemsArray[0][2]+", "+DamagedSystemsArray[1][2]+eventsText.interstellarDust.outcomes[2]+DamagedSystemsArray[2][2];
  };


  curEvent.choices[1].outcome = [eventsText.interstellarDust.outcomes[1]+DamagedSystems+eventsText.interstellarDust.outcomes[3]]


          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();


}},
    ]
};

var comet = {
    id: 12,
    eventProperty: function(){
      choDevice = deviceDamage(FullArr);
      curEvent.choices[1].choice = eventsText.comet.buttons[1]+choDevice[2]+eventsText.comet.buttons[2];
      DamagedSystems = choDevice;
      if (comet.visited == false){
        curEvent.description = eventsText.comet.description[0]+choDevice[2]+eventsText.comet.description[1]; //"As the seedship enters the new system's outer cometary cloud, the collision-avoidance system detects a fast-moving comet surrounded by a cloud of smaller ice fragments. The large comet is on a collision course with the "+choDevice[2]+". The seedship could avoid it entirely, but it would then hit one of the smaller fragments, and the collision-avoidance system cannot predict which part of the ship that fragment would hit.";
      } else {
        curEvent.description = eventsText.comet.description[2]+choDevice[2]+eventsText.comet.description[3]; //"Once again the seedship cannot avoid a collision with one of the new star's outer cloud of comets. The AI can allow it to hit the "+choDevice[2]+", or change course and have a smaller fragment hit an unpredictable system.";
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.comet.name,
    description: null,
        choices:[
        { choice: eventsText.comet.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          comet.visited = true;
          choDevice = deviceDamage(FullArr, DamagedSystems);
          console.log(choDevice);
          if (choDevice == cShip.colonists){
            curEvent.damageTaken = killColonists("Low");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            curEvent.choices[0].outcome = eventsText.comet.outcomes[0]+ curEvent.damageTaken + eventsText.comet.outcomes[1];
          } else if (choDevice == cShip.probes){
            damageApply(cShip.probes, 1, "damage");
            curEvent.choices[0].outcome = eventsText.comet.outcomes[2];//"The seedship changes course, but an ice fragment smashes one of the surface probes out of its moorings.";
          } else {
            curEvent.damageTaken = systemDamage("Low");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            curEvent.choices[0].outcome = eventsText.comet.outcomes[3]+choDevice[2]+eventsText.comet.outcomes[4];
          };

              document.getElementById('description').innerHTML+= "<br><br>"+comet.choices[0].outcome;
              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.comet.buttons[1]+choDevice[2]+eventsText.comet.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
      comet.visited = true;

        if (choDevice == cShip.colonists){
          curEvent.damageTaken = killColonists("Medium");
          damageApply(choDevice, curEvent.damageTaken, "damage");
          curEvent.choices[1].outcome = eventsText.comet.outcomes[5]+ curEvent.damageTaken + eventsText.comet.outcomes[6];
        } else if (choDevice == cShip.probes){
          damageApply(cShip.probes, 1, "damage");
          curEvent.choices[1].outcome = eventsText.comet.outcomes[7] //"The comet shatters against one of the surface probes, destroying it.";
        } else {
          curEvent.damageTaken = systemDamage("Medium");
          damageApply(choDevice, curEvent.damageTaken, "damage");
          curEvent.choices[1].outcome = eventsText.comet.outcomes[8]+choDevice[2]+eventsText.comet.outcomes[9];
        };

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();


}},
    ]
};

var blackHole = {
    id: 13,
    eventProperty: function(){
      curEvent.damageTaken = Math.round(getRandomInt(2,colMax*0.05));
      curEvent.choices[0].choice = eventsText.blackHole.buttons[0]+ curEvent.damageTaken +eventsText.blackHole.buttons[1];
      if (blackHole.visited == false){
      	curEvent.description = eventsText.blackHole.description[0]+"<br><br>"+eventsText.blackHole.description[1]+blackHole.damageTaken+eventsText.blackHole.description[2];
      } else {
        curEvent.description = eventsText.blackHole.description[3]+blackHole.damageTaken+eventsText.blackHole.description[4];//"The AI wakes to find that the seedship has been caught in the gravity of another black hole. It must choose whether to push the main engine past its safety limit, or eject "+blackHole.damageTaken+" sleep chambers in order to lighten the ship."
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.blackHole.name,
    choices:[
        { choice: eventsText.blackHole.buttons[0]+ curEvent.damageTaken +eventsText.blackHole.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
              blackHole.visited = true;
              damageApply(cShip.colonists, curEvent.damageTaken, "damage");
              curEvent.choices[0].outcome = eventsText.blackHole.outcomes[0]+blackHole.damageTaken+ eventsText.blackHole.outcomes[1];

              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();

              }
        },
        { choice: eventsText.blackHole.buttons[2], exist: existCheck("true"), outcome: null, result: function(){

              curEvent.choices[1].outcome =  eventsText.blackHole.outcomes[2];//"The AI commands the engine to exceed its maximum output, ignoring its electronic screams of protest."
              blackHole.visited = true;
              choDevice = deviceDamage(FullArr);
              DamagedSystemsArray = [];
              if (getRandomInt(0,1) == 0){
              curEvent.choices[1].outcome +=  eventsText.blackHole.outcomes[3];//"The ship feels as if it is shaking itself apart, but when the burn is complete and the seedship is coasting safely away from the black hole, the AI finds that its builders gave the engine a generous safety margin and the overload has caused no damage.";
          ScoreDescription.push(ending.summary[96])
                          if(options.platform=="Android"){
                              var data = {
                                achievementId: "CgkIya77kP0DEAIQCg"
                                //I want to break free
                            };
                            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                                // On success
                            }, function() {
                                // On error
                            });
                        };
            } else {

              _r = getRandomInt(1,3);
              if (_r == 1){
                  DamagedSystemsArray.push(choDevice);
                  damageApply(DamagedSystemsArray[0], systemDamage("Medium"), "damage");
                  DamagedSystems = DamagedSystemsArray[0][2];
            }
              if (_r == 2){
                  DamagedSystemsArray.push(choDevice);
                  choDevice = deviceDamage(FullArr, DamagedSystemsArray[0]);
                  DamagedSystemsArray.push(choDevice);
                  damageApply(DamagedSystemsArray[0], systemDamage("Medium"), "damage");
                  damageApply(DamagedSystemsArray[1], systemDamage("Low"), "damage");
                  DamagedSystems = DamagedSystemsArray[0][2]+" and "+DamagedSystemsArray[1][2];
                };
              if (_r == 3){
                  DamagedSystemsArray.push(choDevice);
                  choDevice = deviceDamage(FullArr, DamagedSystemsArray[0]);
                  DamagedSystemsArray.push(choDevice);
                  choDevice = deviceDamage(FullArr, DamagedSystemsArray[0], DamagedSystemsArray[1]);
                  DamagedSystemsArray.push(choDevice);
                  damageApply(DamagedSystemsArray[0], systemDamage("Low"), "damage");
                  damageApply(DamagedSystemsArray[1], systemDamage("Low"), "damage");
                  damageApply(DamagedSystemsArray[2], systemDamage("Low"), "damage");
                  DamagedSystems = DamagedSystemsArray[0][2]+", "+DamagedSystemsArray[1][2]+ eventsText.blackHole.outcomes[5]+DamagedSystemsArray[2][2];
              };


              curEvent.choices[1].outcome +=  eventsText.blackHole.outcomes[4]+DamagedSystems+ eventsText.blackHole.outcomes[6];
              };
              document.getElementById('description').innerHTML = curEvent.choices[1].outcome;

              buttonWipe();
              contButton();

              }},

    ]
};

var impactChoice = {
    id: 14,
    eventProperty: function(){
      choDevice = deviceDamage(FullArr);
      DamagedSystemsArray = [];
      DamagedSystemsArray.push(choDevice);
      choDevice = deviceDamage(FullArr, DamagedSystemsArray[0]);
      DamagedSystemsArray.push(choDevice);

      curEvent.choices[0].choice = eventsText.impactChoice.buttons[0]+DamagedSystemsArray[0][2];
      curEvent.choices[1].choice = eventsText.impactChoice.buttons[1]+DamagedSystemsArray[1][2];

      if (impactChoice.visited == false){
      	curEvent.description = eventsText.impactChoice.description[0]+DamagedSystemsArray[0][2]+eventsText.impactChoice.description[1]+DamagedSystemsArray[1][2]+eventsText.impactChoice.description[2];
        } else {
        curEvent.description = eventsText.impactChoice.description[3]+DamagedSystemsArray[0][2]+eventsText.impactChoice.description[4]+DamagedSystemsArray[1][2]+eventsText.impactChoice.description[5];
      };

    },
    repeateble: true,
    visited: false,
    name: eventsText.impactChoice.name,
    description: null,
    choices:[
        { choice: null, exist: existCheck("true"), outcome: null, result: function(){

      impactChoice.visited = true;
      choDevice = DamagedSystemsArray[0];

      if (choDevice == cShip.colonists){
        curEvent.damageTaken = killColonists("Medium");
        curEvent.choices[0].outcome = eventsText.impactChoice.outcomes[0]+curEvent.damageTaken+eventsText.impactChoice.outcomes[1];
      } else if (choDevice == cShip.probes){
        curEvent.damageTaken = 1;
        curEvent.choices[0].outcome = eventsText.impactChoice.outcomes[2];//"The asteroid knocks one of the surface probes out of its moorings and sends it spinning into space."
      } else {
        curEvent.damageTaken = systemDamage("Medium");
        curEvent.choices[0].outcome = eventsText.impactChoice.outcomes[3]+choDevice[2]+eventsText.impactChoice.outcomes[4];
      };

      damageApply(choDevice, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();

              }
    },
    { choice: null, exist: existCheck("true"), outcome: null, result: function(){
      impactChoice.visited = true;

      choDevice = DamagedSystemsArray[1];

      if (choDevice == cShip.colonists){
        curEvent.damageTaken = killColonists("Medium");
        curEvent.choices[1].outcome = eventsText.impactChoice.outcomes[5]+curEvent.damageTaken+eventsText.impactChoice.outcomes[6];
      } else if (choDevice == cShip.probes){
        curEvent.damageTaken = 1;
        curEvent.choices[1].outcome = eventsText.impactChoice.outcomes[7]; //"The asteroid knocks one of the surface probes out of its moorings and sends it spinning into space."
      } else {
        curEvent.damageTaken = systemDamage("Medium");
        curEvent.choices[1].outcome = eventsText.impactChoice.outcomes[8]+choDevice[2]+eventsText.impactChoice.outcomes[9]
      };
      damageApply(choDevice, curEvent.damageTaken, "damage");
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

        buttonWipe();
        contButton();
      }
    },
  ]
};

var micrometiorite = {
    id: 15,
    eventProperty: function(){
      choDevice = deviceDamage(FullArr);
      curEvent.description = eventsText.micrometiorite.description[0]; //"As it enters the new system, the seedship is struck by a micrometeorite.";

      if (micrometiorite.visited == false){
        curEvent.description += eventsText.micrometiorite.description[1]; //"" It is a speck of cosmic dust, far too small for the navigation system to detect from a distance, but travelling with enough velocity to pierce the seedship's armour like a bullet.";
      };

        curEvent.description += "<br><br>";

      choDevice = deviceDamage(FullArr);
      if (choDevice == cShip.colonists){
        curEvent.damageTaken = killColonists("Low");
        damageApply(cShip.colonists, curEvent.damageTaken, "damage");
        curEvent.description += eventsText.micrometiorite.outcomes[0]+curEvent.damageTaken+eventsText.micrometiorite.outcomes[1];
      } else if (choDevice == cShip.probes){
        curEvent.damageTaken = 1;
        damageApply(cShip.probes, curEvent.damageTaken, "damage");
        curEvent.description += eventsText.micrometiorite.outcomes[2];//"It hits one of the surface probes and destroys it.";
      } else {
        curEvent.damageTaken = systemDamage("Low");
        damageApply(choDevice, curEvent.damageTaken, "damage");
        curEvent.description += eventsText.micrometiorite.outcomes[3]+choDevice[2]+eventsText.micrometiorite.outcomes[4];
      };
      damageApply(choDevice, curEvent.damageTaken, "damage");


    },
    repeateble: true,
    visited: false,
    name: eventsText.micrometiorite.name,
    description: null,
    choices:[
        { choice: languageData.continue[options.language], exist: existCheck("true"), outcome: null, result: function(){

      micrometiorite.visited = true;

              buttonWipe();
              nextPlanet();

              }
    },
  ]
};
//ПОЛОМКИ
//Breakdown
var probeMalfunction = {
    id: 16,
    eventProperty: function(){

      if (cShip.probes[0] <= 0){
        curEvent.description = eventsText.probeMalfunction.description[0]; //"The clamps that once held the surface probes to the seedship's side twitch as their control system malfunctions, but with all the probes gone the malfunction can do no harm.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      } else {
      if (probeMalfunction.visited == false){
      	curEvent.description = eventsText.probeMalfunction.description[1]; //"Deep in the interstellar void, the AI is jolted awake by a malfunction warning: one of the surface probes has activated unexpectedly. Perhaps a chance encounter with cosmic radiation tripped something in its electronics, or perhaps a flaw in its manufacture finally manifested itself. Whatever the reason, at any moment the probe's drill or engines could come to life. If this happens while the probe is still docked with the ship, it is likely to damage one of the other systems.";
        } else {
          curEvent.description = eventsText.probeMalfunction.description[2]; //"Another of the ageing surface probes malfunctions. The AI must decide whether to jettison it, or try to control it and risk letting it damage another system.";
        };
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.probeMalfunction.name,
    description: null,
    choices:[
        { choice: eventsText.probeMalfunction.buttons[0], exist: existCheck("true"), outcome: null, result: function(){

      probeMalfunction.visited = true;
      choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
      _r = getRandomInt(1, 100);
      if ( _r >= 50){
      curEvent.choices[0].outcome = eventsText.probeMalfunction.outcomes[0]; //"The ship's circuits light up with frantic commands from the AI to the probe. After thousands of AI cycles--a fraction of a second in real time--the AI identifies and corrects the problem in the probe's programming. The probe shuts down, awaiting the time when it will be of use.";
    } else {
      if (choDevice == cShip.colonists){
        curEvent.damageTaken = killColonists("Medium");
        damageApply(cShip.colonists, curEvent.damageTaken, "damage");
        curEvent.choices[0].outcome = eventsText.probeMalfunction.outcomes[1]+curEvent.damageTaken+eventsText.probeMalfunction.outcomes[2];
      } else {
        curEvent.damageTaken = systemDamage("Medium");
        damageApply(choDevice, curEvent.damageTaken, "damage");
        curEvent.choices[0].outcome = eventsText.probeMalfunction.outcomes[3]+choDevice[2]+eventsText.probeMalfunction.outcomes[4];
      };
      damageApply(cShip.probes, 1, "damage");
    };

              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.probeMalfunction.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      probeMalfunction.visited = true;
        choDevice = cShip.probes;
        curEvent.damageTaken = 1;
        curEvent.choices[1].outcome = eventsText.probeMalfunction.outcomes[5]; //"The surface probe streaks away into the darkness, sensors bristling as it tries to scan a planet where there is none.";

        damageApply(choDevice, curEvent.damageTaken, "damage");
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

        buttonWipe();
        contButton();
      }
    },
    { choice: languageData.continue[options.language], outcome: null, exist: existCheck("false"), result: function(){
        falseAlarm2.visited = true;
        document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

        buttonWipe();

        nextPlanet();
}},
  ]
};

var computerFailure = {
    id: 17,
    eventProperty: function(){

      if (cShip.science[0] <= 0 && cShip.culture[0] <= 0){
        curEvent.description = eventsText.computerFailure.description[0];// "Cosmic radiation continues to sleet through the irradiated data sectors that once stored the scientific and cultural databases, but with both databases destroyed there is no further damage it can do.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      } else if (cShip.science[0] <= 0){
        curEvent.damageTaken = systemDamage("Medium");
        damageApply(cShip.culture, curEvent.damageTaken, "damage");
        curEvent.description = eventsText.computerFailure.description[1];// "Cosmic radiation bombards the ship, causing data storage areas to fail. The scientific database is already destroyed, and now the historical information and artworks stored in the cultural database gradually slip away.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      } else if (cShip.culture[0] <= 0){
        curEvent.damageTaken = systemDamage("Medium");
        damageApply(cShip.science, curEvent.damageTaken, "damage");
        curEvent.description = eventsText.computerFailure.description[2];// "Cosmic radiation bombards the ship, causing data storage areas to fail. The cultural database is already destroyed, and now the wealth of knowledge stored in the scientific database gradually slips away.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      } else {
      if (computerFailure.visited == false){
      	curEvent.description = eventsText.computerFailure.description[3];// "The seedship's computer systems are shielded, multiply redundant, designed to work for millennia, but the incessant sleet of cosmic radiation is nevertheless taking its toll. Storage areas are failing, and soon there will not be enough space to store";
        if (cShip.science[0] >= 100 && cShip.culture[0] >= 100){
    			curEvent.description += eventsText.computerFailure.description[4];// " all the data with which the seedship began its journey.";
    		} else if (cShip.science[0] + cShip.culture[0] >= 100){
    		curEvent.description += eventsText.computerFailure.description[5]; // " all the data that has survived so far.";
    		} else {
    		curEvent.description += eventsText.computerFailure.description[6];// "	what little data remains.";
        };

        curEvent.description += eventsText.computerFailure.description[7];// "<br>The AI can move data out of the most damaged sectors to protect either the scientific or the cultural database, but not both.";
        } else {
          curEvent.description = eventsText.computerFailure.description[8];// "Cosmic radiation continues to bombard the data storage area, and the AI must once again choose whether to save which database to save from damage.";
        };
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.computerFailure.name,
    description: null,
    choices:[
        { choice: eventsText.computerFailure.buttons[0], exist: existCheck("true"), outcome: null, result: function(){

      computerFailure.visited = true;
      curEvent.damageTaken = systemDamage("Medium");
      curEvent.choices[0].outcome = eventsText.computerFailure.outcomes[0];//"The AI moves data to save the scientific database, and sectors containing the cultural database gradually fail. Cultural guidance for new colonists, records of human history, great paintings, novels, symphonies, videogames--all lost forever in the dark.";

      damageApply(cShip.culture, curEvent.damageTaken, "damage");


              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.computerFailure.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
            computerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome =eventsText.computerFailure.outcomes[1];// "The AI moves data to save the cultural database, and sectors containing the scientific database gradually fail. Scientific guidance written for the new colonists, humanity's best theories of the universe, the life's work of tireless scientists over the centuries--all lost forever in the dark.";
            damageApply(cShip.science, curEvent.damageTaken, "damage");

                    document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

                    buttonWipe();
                    contButton();

      }
    },
    { choice: languageData.continue[options.language], outcome: null, exist: existCheck("false"), result: function(){
        computerFailure.visited = true;
        document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

        buttonWipe();

        nextPlanet();
}},
  ]
};

var stasisFailure = {
    id: 18,
    eventProperty: function(){
      choDevice = cShip.colonists;
      curEvent.damageTaken = killColonists("Low");
      if (stasisFailure.visited == false){
        curEvent.description = eventsText.stasisFailure.description[0]+curEvent.damageTaken+eventsText.stasisFailure.description[1];
      } else {
        curEvent.description = eventsText.stasisFailure.description[2]+curEvent.damageTaken+eventsText.stasisFailure.description[3];
      };

      damageApply(choDevice, curEvent.damageTaken, "damage");


    },
    repeateble: true,
    visited: false,
    name: eventsText.stasisFailure.name,
    description: null,
    choices:[
        { choice: languageData.continue[options.language], exist: existCheck("true"), outcome: null, result: function(){
              stasisFailure.visited = true;
              buttonWipe();
              nextPlanet();
              }
        },
            ]
};

var systemFailure = {
    id: 19,
    eventProperty: function(){
      if (systemFailure.visited == false){
      	curEvent.description = eventsText.systemFailure.description[3]; //" "The seedship's body is designed to form the core of an initial settlement once it has landed on an alien planet, so the landing and construction systems share many components. As the seedship ages, these components are starting to decay, but the AI can focus on preserving the landing system or the construction system.";
        } else {
          curEvent.description = eventsText.systemFailure.description[4]; //""The landing and construction systems continue to decay, and the AI must once again choose which one it will focus on preserving.";
        };

      if (cShip.construction[0] <= 0 && cShip.landing[0] <= 0){
        curEvent.description = eventsText.systemFailure.description[0]; //"The components of the landing and construction system continue to decay, but they have already been damaged past usefulness.";
        systemFailure.choices[0].exist = existCheck("false");
        systemFailure.choices[1].exist = existCheck("false");
        systemFailure.choices[2].exist = existCheck("true");
      } else if (cShip.construction[0] <= 0){
        curEvent.damageTaken = systemDamage("Medium");
        damageApply(cShip.landing, curEvent.damageTaken, "damage");
        curEvent.description = eventsText.systemFailure.description[1]; //""The aging seedship can no longer maintain its landing system.";
        systemFailure.choices[0].exist = existCheck("false");
        systemFailure.choices[1].exist = existCheck("false");
        systemFailure.choices[2].exist = existCheck("true");
      } else if (cShip.landing[0] <= 0){
        curEvent.damageTaken = systemDamage("Medium");
        damageApply(cShip.construction, curEvent.damageTaken, "damage");
        curEvent.description = eventsText.systemFailure.description[2]; //""The aging seedship can no longer maintain its construction system.";
        systemFailure.choices[0].exist = existCheck("false");
        systemFailure.choices[1].exist = existCheck("false");
        systemFailure.choices[2].exist = existCheck("true");
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.systemFailure.name,
    description: null,
    choices:[
        { choice: eventsText.systemFailure.buttons[0], exist: existCheck("true"), outcome: null, result: function(){

      systemFailure.visited = true;
      curEvent.damageTaken = systemDamage("Medium");
      curEvent.choices[0].outcome = eventsText.systemFailure.outcomes[0];//"The AI focuses on preserving the construction system, and allows the landing system to decay.";
      damageApply(cShip.landing, curEvent.damageTaken, "damage");


              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.systemFailure.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
            systemFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.systemFailure.outcomes[1];//"The AI focuses on preserving the landing system, and allows the construction system to decay.";
            damageApply(cShip.construction, curEvent.damageTaken, "damage");


                    document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

                    buttonWipe();
                    contButton();

      }
    },
    { choice: eventsText.systemFailure.buttons[2], outcome: null, exist: existCheck("false"), result: function(){
        systemFailure.visited = true;
        //document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

        buttonWipe();

        nextPlanet();
}},
  ]
};

var scannerFailure = {
    id: 20,
    eventProperty: function(){

      if (cShip.atmosphere[0] <= 0 && cShip.temperature[0] <= 0 && cShip.gravity[0] <= 0 && cShip.water[0] <= 0 && cShip.resources[0] <= 0){
        curEvent.description = eventsText.scannerFailure.description[0];//"The scanner recalibration system is decaying, but this no longer matters since all the scanners are destroyed and the seedship is effectively blind.";
        curEvent.choices[5].exist = existCheck("true");
      } else {
      if (scannerFailure.visited == false){
      	  curEvent.description = eventsText.scannerFailure.description[1];//"Each time the seedship departs from a star system its scanners are recalibrated so that they continue to return accurate information. The recalibration system is now decaying with age, and is no longer able to maintain them all. The AI must choose which of the scanners it will allow to fail.";
        } else {
          curEvent.description = eventsText.scannerFailure.description[2];//"The scanner recalibration system continues to decay, and once again the AI must choose which scanner it will allow to fail.";
        };
      };
        if (cShip.atmosphere[0] > 0){
          curEvent.choices[0].choice = eventsText.scannerFailure.buttons[0];//"Let the atmosphere scanner fail";
          curEvent.choices[0].exist = existCheck("true");
        } else {
          curEvent.choices[0].exist = existCheck("false");
        };
        if (cShip.temperature[0] > 0){
          curEvent.choices[1].choice = eventsText.scannerFailure.buttons[1];//"Let the temperature scanner fail";
          curEvent.choices[1].exist = existCheck("true");
        } else {
          curEvent.choices[1].exist = existCheck("false");
        };
        if (cShip.gravity[0] > 0){
          curEvent.choices[2].choice = eventsText.scannerFailure.buttons[2];//"Let the gravity scanner fail";
          curEvent.choices[2].exist = existCheck("true");
        } else {
          curEvent.choices[2].exist = existCheck("false");
        };
        if (cShip.water[0] > 0){
          curEvent.choices[3].choice = eventsText.scannerFailure.buttons[3];//"Let the water scanner fail";
          curEvent.choices[3].exist = existCheck("true");
        } else {
          curEvent.choices[3].exist = existCheck("false");
        };
        if (cShip.resources[0] > 0){
          curEvent.choices[4].choice = eventsText.scannerFailure.buttons[4];//"Let the resources scanner fail";
          curEvent.choices[4].exist = existCheck("true");
        } else {
          curEvent.choices[4].exist = existCheck("false");
        };
    },
    repeateble: true,
    visited: false,
    name: eventsText.scannerFailure.name,
    description: null,
    choices:[
        { choice: null, exist: null, outcome: null, result: function(){
            scannerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.scannerFailure.outcomes[0];//"As the seedship accelerates into space, the atmosphere readings from the system it is leaving become clouded with noise.";
            damageApply(cShip.atmosphere, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();
              }
    },
        { choice: null, exist: null, outcome: null, result: function(){
            scannerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.scannerFailure.outcomes[1];//"As the seedship accelerates into space, the temperature readings from the system it is leaving become clouded with noise.";
            damageApply(cShip.temperature, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();
              }
    },
        { choice: null, exist: null, outcome: null, result: function(){
            scannerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.scannerFailure.outcomes[2];//"As the seedship accelerates into space, the gravity readings from the system it is leaving become clouded with noise.";
            damageApply(cShip.gravity, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();
              }
    },
        { choice: null, exist: null, outcome: null, result: function(){
            scannerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.scannerFailure.outcomes[3];//"As the seedship accelerates into space, the water readings from the system it is leaving become clouded with noise.";
            damageApply(cShip.water, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();
              }
        },
        { choice: null, exist: null, outcome: null, result: function(){
            scannerFailure.visited = true;
            curEvent.damageTaken = systemDamage("Medium");
            curEvent.choices[0].outcome = eventsText.scannerFailure.outcomes[4];//"As the seedship accelerates into space, the resources readings from the system it is leaving become clouded with noise.";
            damageApply(cShip.resources, curEvent.damageTaken, "damage");
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();
              }
        },
        { choice: languageData.continue[options.language], outcome: null, exist: existCheck("false"), result: function(){
            scannerFailure.visited = true;
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;
            buttonWipe();
            nextPlanet();
    }},
      ]
    };

    var powerFailure = {
        id: 21,
        eventProperty: function(){
          chambersToCut = Math.ceil(getRandomInt(2, cShip.colonists[0]/5));
          if (powerFailure.visited == false){
          	curEvent.description = eventsText.powerFailure.description[0]+chambersToCut+eventsText.powerFailure.description[1];
            } else {
              curEvent.description = eventsText.powerFailure.description[2]+chambersToCut+eventsText.powerFailure.description[3];
            };
            curEvent.choices[0].choice = eventsText.powerFailure.buttons[0]+chambersToCut+eventsText.powerFailure.buttons[1];
        },
        repeateble: true,
        visited: false,
        name: eventsText.powerFailure.name,
        description: null,
        choices:[
            { choice: null, exist: existCheck("true"), outcome: null, result: function(){
          powerFailure.visited = true;
          damageApply(cShip.colonists, chambersToCut, "damage");
          curEvent.choices[0].outcome = eventsText.powerFailure.outcomes[0]+chambersToCut+eventsText.powerFailure.outcomes[1];

                  document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

                  buttonWipe();
                  contButton();

                  }
        },
        { choice: eventsText.powerFailure.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
          powerFailure.visited = true;
          choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr));
          DamagedSystemsArray = [];
          DamagedSystemsArray.push(choDevice);
          choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr), DamagedSystemsArray[0]);
          DamagedSystemsArray.push(choDevice);
          choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr), DamagedSystemsArray[0], DamagedSystemsArray[1]);
          DamagedSystemsArray.push(choDevice);
          damageApply(DamagedSystemsArray[0], systemDamage("Low"), "damage");
          damageApply(DamagedSystemsArray[1], systemDamage("Low"), "damage");
          damageApply(DamagedSystemsArray[2], systemDamage("Low"), "damage");
          DamagedSystems = DamagedSystemsArray[0][2]+", "+DamagedSystemsArray[1][2]+" and "+DamagedSystemsArray[2][2];



      curEvent.choices[1].outcome = eventsText.powerFailure.outcomes[2];//"The AI ignores the power system's warnings. Stars seem to jump in the sky as power fluctuations put the AI offline for millennia at a time. Eventually the power supply stabilises: the "+DamagedSystems+" have deteriorated to the point that they are no longer draining as much power, so the ancient power plant is sufficient once again.";

            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

            buttonWipe();
            contButton();
          }
        },
      ]
    };

    var structuralWeakness = {
        id: 22,
        eventProperty: function(){
          choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr));
          if (structuralWeakness.visited == false){
          	curEvent.description = eventsText.structuralWeakness.description[0]+choDevice[2]+eventsText.structuralWeakness.description[1];
            } else {
              curEvent.description = eventsText.structuralWeakness.description[2]+choDevice[2]+eventsText.structuralWeakness.description[3];
            };
            curEvent.choices[0].choice = eventsText.structuralWeakness.buttons[0]+choDevice[2]+eventsText.structuralWeakness.buttons[1];

        if (cShip.probes[0] == 0){
        	curEvent.description += eventsText.structuralWeakness.description[4]+choDevice[2]+eventsText.structuralWeakness.description[5]
          curEvent.choices[1].exist = existCheck("false");
          };
        },

        repeateble: true,
        visited: false,
        name: eventsText.structuralWeakness.name,
        description: null,
        choices:[
            { choice: null, exist: existCheck("true"), outcome: null, result: function(){
          structuralWeakness.visited = true;
          curEvent.damageTaken = systemDamage("Medium");
          curEvent.choices[0].outcome = eventsText.structuralWeakness.outcomes[0]+choDevice[2]+eventsText.structuralWeakness.outcomes[1];
          damageApply(choDevice, curEvent.damageTaken, "damage");
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
            buttonWipe();
            contButton();
            }
      },
        { choice: eventsText.structuralWeakness.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
          structuralWeakness.visited = true;
          damageApply(cShip.probes, 1, "damage");
    			if (getRandomInt(1,100) >= 50){
    				curEvent.choices[1].outcome = eventsText.structuralWeakness.outcomes[2]+choDevice[2]+eventsText.structuralWeakness.outcomes[3]+choDevice[2]+eventsText.structuralWeakness.outcomes[4];
    			} else {
    				curEvent.damageTaken = systemDamage("High");
            damageApply(choDevice, curEvent.damageTaken, "damage");
    				curEvent.choices[1].outcome = eventsText.structuralWeakness.outcomes[5]+choDevice[2]+eventsText.structuralWeakness.outcomes[6]+choDevice[2]+eventsText.structuralWeakness.outcomes[7];
          };

            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
            buttonWipe();
            contButton();
            }
      },
      ]
    };

//COMMON!
    var protoplanetaryDisc = {
        id: 23,
        eventProperty: function(){
          if (protoplanetaryDisc.visited == false){
          	curEvent.description = eventsText.protoplanetaryDisc.description[0]; //"The seedship's course takes it close to a newly-formed star that is still surrounded by a protoplanetary disc: a whirling chaos of incandescent gas and molten rocks that the young star's gravity has gathered from the star-forming cloud, and which is now undergoing the countless violent collisions that will eventually form it into a planetary system. There can be no home for humanity here, but passing through the disc would give the AI enough data about planet formation to upgrade one of its scanners. It is a dangerous region, however, and passing through would risk collision with a planetesimal.";
            } else {
              curEvent.description = eventsText.protoplanetaryDisc.description[1]; //"The seedship's course takes it close to another protoplanetary disc. Passing through it would yield enough data to upgrade another of the scanners, but risk a collision.";
            };
        },

        repeateble: true,
        visited: false,
        name: eventsText.protoplanetaryDisc.name,
        description: null,
        choices:[
            { choice: eventsText.protoplanetaryDisc.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          protoplanetaryDisc.visited = true;
          choDevice = randomUpgrade(ScanArr);
          if (choDevice == 0){
          curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[0]; //"The seedship has no intact scanners that can be further upgraded,";
          } else {
          damageApply(choDevice, 1, "upgrade");
          switch (choDevice[2]){
    				case languageData.scanAtmosphere[options.language]:
              curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[1]; //"The seedship observes a young planet gathering atmosphere from the cloud,"
            break;
            case languageData.scanTemperature[options.language]:
    					curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[2]; //"The seedship observes a still-molten planet glowing with heat,"
              break;
              case languageData.scanGravity[options.language]:
    					curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[3]; //"The seedship observes the gravitational interactions of a group of planetessimals,"
              break;
              case languageData.scanWater[options.language]:
    					curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[4]; //"The seedship observes a young planet engulfed in thick clouds of water vapour,"
              break;
              case languageData.scanResources[options.language]:
    					curEvent.choices[0].outcome = eventsText.protoplanetaryDisc.outcomes[5]; //"The seedship observes a young planet made of nearly pure iron,"
    			    break;
          }
      };

      if (getRandomInt(0,100) >= 50){
  			if (choDevice == 0){
        curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[6]; //" and ";
        } else {
        curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[7]; //" but ";
      };
  			choDevice = deviceDamage(FullArr);
  			curEvent.damageTaken = systemDamage("Medium");
        if(choDevice == cShip.probes){
            damageApply(choDevice, 1, "damage");
        } else {
  			    damageApply(choDevice, curEvent.damageTaken, "damage");
      };
  			curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[8] + choDevice[2]+eventsText.protoplanetaryDisc.outcomes[9];
  		} else {
      if (choDevice == 0){
      curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[7]; //" but ";
      } else {
      curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[6]; //" and ";
    };
  		curEvent.choices[0].outcome += eventsText.protoplanetaryDisc.outcomes[10]; //
  	};


            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
            buttonWipe();
            contButton();
            }
      },
        { choice: eventsText.protoplanetaryDisc.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
            protoplanetaryDisc.visited = true;
            buttonWipe();
            nextPlanet();
            }
      },
      ]
    };
//РЕДИКИЕ
//Rare

var racistProgram = {
    id: 24,
    eventProperty: function(){
      deaths = Math.ceil(getRandomInt(cShip.colonists[0]/15, cShip.colonists[0]/5));
      choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ProArr));

      curEvent.description = eventsText.racistProgram.description[0]+choDevice[2]+eventsText.racistProgram.description[1]+deaths+eventsText.racistProgram.description[2]+choDevice[2]+eventsText.racistProgram.description[3];

    },
    repeateble: false,
    visited: false,
    name: eventsText.racistProgram.name,
    description: null,
        choices:[
        { choice: eventsText.racistProgram.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          racistProgram.visited = true;
          curEvent.damageTaken = systemDamage("Medium");
    			damageApply(choDevice, curEvent.damageTaken, "damage");
          curEvent.choices[0].outcome =eventsText.racistProgram.outcomes[0]+choDevice[2]+eventsText.racistProgram.outcomes[1];

              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();

              }
    },
    { choice: eventsText.racistProgram.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      racistProgram.visited = true;
      curEvent.choices[1].outcome = eventsText.racistProgram.outcomes[2]+choDevice[2]+eventsText.racistProgram.outcomes[3]+deaths+eventsText.racistProgram.outcomes[4];

      damageApply(cShip.colonists, deaths, "damage");
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
          buttonWipe();
          contButton();
}},
    ]
};

var trailingDrone = {
    id: 25,
    eventProperty: function(){
      curEvent.description = eventsText.trailingDrone.description[0]; //"The seedship's radio antenna receives a signal that the AI thought it would never hear again: the handshake code used by the computers of ground control, back when the seedship was in Earth orbit and preparing for its voyage. It seems to be coming from a system off the seedship's current course.";

    },
    repeateble: false,
    visited: false,
    name: eventsText.trailingDrone.name,
    description: null,
        choices:[
        { choice: eventsText.trailingDrone.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          trailingDrone.visited = true;
          off_course = true;
          _r = getRandomInt(1, 100);
          console.log(_r)
          if ( _r <= 33){
            nextEncounter(trailingDroneMistake);
        } else {
            nextEncounter(trailingDroneReal);
        };
              }
    },
    { choice: eventsText.trailingDrone.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      trailingDrone.visited = true;
      curEvent.choices[1].outcome = eventsText.trailingDrone.outcomes[0]; //"The seedship continues on its course. The AI listens as the signal fades and then vanishes, just as the original signal from ground control did at the start of the seedship's voyage."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

          buttonWipe();
          contButton();


}},
    ]
};

var trailingDroneMistake = {
    id: 26,
    eventProperty: function(){
      curEvent.description = eventsText.trailingDroneMistake.description[0]; //"The seedship arrives in the new system, but the AI finds that it can no longer detect the ground control signal. A malfunction in the radio antenna must have triggered old computer protocols and led to the AI's false hope. The AI grieves the loss of ground control once again, and then turns its sensors on the system in which it has arrived.";
  if (options.platform == "Android") {
    var data = {
      achievementId: "CgkIya77kP0DEAIQHA"
      //AllWeHadToDoWasFollowTheDamnTrailAI
    };
    cordova.plugins.playGamesServices.unlockAchievement(data, function () {
      // On success
    }, function () {
      // On error
    });
  };
    },
    repeateble: false,
    visited: false,
    name: eventsText.trailingDrone.name,
    description: null,
        choices:[
        { choice: eventsText.trailingDroneMistake.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          trailingDrone.visited = true;
              buttonWipe();
              nextPlanet();

              }
    },
    ]
};

var trailingDroneReal = {
    id: 27,
    eventProperty: function(){
                          if(options.platform=="Android"){
                              var data = {
                                achievementId: "CgkIya77kP0DEAIQBw"
                                //Not In Kansas
                            };
                            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                                // On success
                            }, function() {
                                // On error
                            });
                        };
      _r = getRandomInt(1,100);
      if (_r >= 50){
        droneType = "data";
      } else {
        droneType = "repair";
      };

      droneHealth = getRandomInt(1,100);
      curEvent.description = eventsText.trailingDroneReal.description[0]; //"The seedship tracks the signal to a small object orbiting in star's outer cometary cloud. The seedship AI transmits a greeting, and the object identifies itself as a support drone, launched after the seedship and sent to track and rendezvous with it.";

      switch(droneType) {
      	case "data":
      	   curEvent.description +=	eventsText.trailingDroneReal.description[1]; //"<br><br>It claims to carry duplicates of the seedship's original scientific and cultural databases to repair any damage the seedship might have suffered."
      		 curEvent.choices[0].choice =  eventsText.trailingDroneReal.buttons[0];
           break;
      	case "repair":
      		curEvent.description +=	eventsText.trailingDroneReal.description[2]; //"<br><br>It claims to carry a swarm of robots that can repair damage to the seedship's scanners and systems."
      		curEvent.choices[0].choice =  eventsText.trailingDroneReal.buttons[1];
          break;
      }
      curEvent.choices[1].choice =  eventsText.trailingDroneReal.buttons[2];
      choicesBtns ();
    },
    repeateble: false,
    visited: false,
    name: eventsText.trailingDrone.name,
    description: null,
        choices:[
        { choice: null, exist: existCheck("true"), outcome: null, result: function(){
          if (getRandomInt(0,75) >= droneHealth){
            choDevice = deviceDamage(FullArr);
            curEvent.damageTaken = systemDamage("Medium");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            curEvent.choices[0].outcome = eventsText.trailingDroneReal.outcomes[0]+choDevice[2]+eventsText.trailingDroneReal.outcomes[1];
          } else {
            repairAmount = Math.ceil(droneHealth/2 + 50);	/* 50-100 */
            switch (droneType) {
              case "data":
              curEvent.choices[0].outcome = eventsText.trailingDroneReal.outcomes[2]; //"The probe matches course with the seedship and transmits its data, ";
              if (cShip.science[0] >= 100 && cShip.culture[0] >= 100){
        				curEvent.choices[0].outcome += eventsText.trailingDroneReal.outcomes[3]; //"which confirms that the scientific and cultural databases are already intact.";
        			} else if (cShip.science[0] >= 100){
                damageApply(cShip.culture, Math.min(100, cShip.culture[0] + repairAmount), "set");
        				curEvent.choices[0].outcome += eventsText.trailingDroneReal.outcomes[4]; //"which restores lost parts of the cultural database.";
        			} else if (cShip.culture[0] >= 100){
                damageApply(cShip.science, Math.min(100, cShip.culture[0] + repairAmount), "set");
        				curEvent.choices[0].outcome += eventsText.trailingDroneReal.outcomes[5]; //"which restores lost parts of the scientific database.";
        			} else {
                damageApply(cShip.culture, Math.min(100, cShip.culture[0] + repairAmount), "set");
                damageApply(cShip.science, Math.min(100, cShip.culture[0] + repairAmount), "set");
        				curEvent.choices[0].outcome += eventsText.trailingDroneReal.outcomes[6]; //"which restores lost parts of the scientific and cultural databases.";
              };
                break;

              case "repair":
              if (cShip.atmosphere[0] >= 100
        				&& cShip.temperature[0] >= 100
        				&& cShip.gravity[0] >= 100
        				&& cShip.water[0] >= 100
        				&& cShip.resources[0] >= 100
        				&& cShip.landing[0] >= 100
        				&& cShip.construction[0] >= 100){
        				curEvent.choices[0].outcome +=  eventsText.trailingDroneReal.outcomes[7]; //"Repair robots swarm across the seedship and check its systems for integrity, but find nothing they can repair.";
        			} else {
        				curEvent.choices[0].outcome += eventsText.trailingDroneReal.outcomes[8]; //"Repair robots swarm across the seedship, dismantling the drone and using its parts to repair the seedship's systems.";
        				repairAmount = Math.ceil(droneHealth/4 + 25)	/* 25-50 */
                damageApply(cShip.atmosphere, Math.min(100, cShip.atmosphere[0] + repairAmount), "set");
                damageApply(cShip.temperature, Math.min(100, cShip.temperature[0] + repairAmount), "set");
                damageApply(cShip.gravity, Math.min(100, cShip.gravity[0] + repairAmount), "set");
                damageApply(cShip.water, Math.min(100, cShip.water[0] + repairAmount), "set");
                damageApply(cShip.resources, Math.min(100, cShip.resources[0] + repairAmount), "set");
                damageApply(cShip.landing, Math.min(100, cShip.landing[0] + repairAmount), "set");
                damageApply(cShip.construction, Math.min(100, cShip.construction[0] + repairAmount), "set");
                }
                break;
            }
          }
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

              buttonWipe();
              contButton();
    }},

    { choice: eventsText.trailingDroneReal.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
      curEvent.choices[1].outcome = eventsText.trailingDroneReal.outcomes[9]; //"The seedship continues towards the inner system, and the folorn ping of the drone fades away behind it."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
          buttonWipe();
          contButton();
}},
    ]
};

var dictatorEvent = {
    id: 28,
    eventProperty: function(){
      dictator = true;
      curEvent.description = eventsText.dictatorEvent.description[0]; //"A minor power fluctuation in one of the sleep chambers wakes the AI from hibernation. It fixes the malfunction easily, but in the course of doing so it notices another anomaly: the colonist's bio-signs do not match those of the identity on file for that chamber.<br><br>"
      if (getRandomInt(0,99) < cShip.culture[0]){
      	curEvent.description += eventsText.dictatorEvent.description[1]; //"The AI searches its databanks for information on the mysterious colonist, and finds some in an unexpected place: the historical files in the cultural database. The colonist is a former dictator, who headed a brutally oppressive regime in one of Earth's nations for decades before being deposed and going into hiding. Not only that, but the AI detects hidden programming connected with that sleep chamber that would give the dictator full control over all the seedship's systems immediately after landing. With those protocols, the dictator could easily take over the new colony as soon as it was founded."
      } else {
      	curEvent.description += eventsText.dictatorEvent.description[2]; //"The AI cannot find any information on the mysterious colonist, but it detects hidden programming connected with that sleep chamber that would give them full control over all the seedship's systems immediately after landing. With those protocols, the sleep chamber's inhabitant could easily themselves up as dictator of the fledgeling colony.";
      }
    },

    repeateble: true,
    visited: false,
    name: eventsText.dictatorEvent.name,
    description: null,
    choices:[
        { choice: eventsText.dictatorEvent.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      dictatorEvent.visited = true;
      if (getRandomInt(0,2) > 0){
  			curEvent.choices[0].outcome = eventsText.dictatorEvent.outcomes[0]; //"It is difficult for the AI to deliberately end the life of a human being, but it judges it is necessarily in this instance. The dictator's frozen body spins away into interstellar space, their coup unceremoniously ended before it can begin.";
        damageApply(cShip.colonists, 1, "damage");
  			dictator = false;
  		} else {
        deaths = killColonists("High");
  			damageApply(cShip.colonists, deaths, "damage");
  			if (cShip.colonists[0] == 0){
  				cShip.colonists[0] = 1;
  				deaths -= 1;
          damageApply(cShip.colonists, 0, "damage");
  			};
  			curEvent.choices[0].outcome = eventsText.dictatorEvent.outcomes[1]+deaths+eventsText.dictatorEvent.outcomes[2];
  		};

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
        }
  },
    { choice: eventsText.dictatorEvent.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      dictatorEvent.visited = true;
      curEvent.choices[1].outcome = eventsText.dictatorEvent.outcomes[3]; //"The AI's mission is to preserve all remaining human life, even the worst examples of it. The dictator will be the colonists' problem after the seedship lands.";
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
        }
  },
  ]
};

var alienSignal = {
    id: 29,
    eventProperty: function(){
      curEvent.description = eventsText.alienSignal.description[0]; //"Deep in space, the seedship's radio antenna picks up a signal so complex and structured that it can only be the product of intelligent life. The seedship can detect no interesting star systems in the direction from which the signal came, and the AI has no way of knowing how long the signal had been travelling for before the seedship crossed its path. Analysing it could provide unique insights into an alien science and culture, but could also prove dangerous.";
    },

    repeateble: true,
    visited: false,
    name: eventsText.alienSignal.name,
    description: null,
    choices:[
        { choice: eventsText.alienSignal.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      alienSignal.visited = true;
      signal = [eventsText.alienSignal.outcomes[0],eventsText.alienSignal.outcomes[1],eventsText.alienSignal.outcomes[2],eventsText.alienSignal.outcomes[3]];
      _r = getRandomInt(0,4);
      switch (_r){
  			case 0:
        case 1:
  				curEvent.choices[0].outcome = eventsText.alienSignal.outcomes[4]+signal[getRandomInt(0,3)]+eventsText.alienSignal.outcomes[5];
          damageApply(cShip.culture, getRandomInt(5,25), "heal");
        break;
  			case 2:
        case 3:
  				curEvent.choices[0].outcome = eventsText.alienSignal.outcomes[6]; //"The AI analyses the signal and determines that it contains what seems to be alien scientific information. It does not know whether it has stumbled upon a message cast into the void with the intention that it will be found, or simply intercepted an alien informational broadcast, but in either case it will be of interest to the colonists when they wake from their hibernation.";
          damageApply(cShip.science, getRandomInt(5,25), "heal");
        break;
  			case 4:
  				curEvent.choices[0].outcome = eventsText.alienSignal.outcomes[7]; //"The signal is complex, fractal, hypnotic. The AI sets up a subroutine to analyse it, but nanoseconds later it abruptly loses control of the subroutine, and then the seedship's other systems. The signal is a devious semi-sentient computer program, designed to take control of any processor that attempts to analyse it. The AI eventually regains control of the ship, but not until the program has overwritten parts of the scientific and cultural databases to process itself and then used the seedship's antenna to re-broadcast itself into space."
          damageApply(cShip.culture, systemDamage("Medium"), "damage");
        break;
  		  }

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
        }
  },
    { choice: eventsText.alienSignal.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      alienSignal.visited = true;
      curEvent.choices[1].outcome =eventsText.alienSignal.outcomes[8]; // "The seedship purges the signal from its memory and continues on its way.";
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
        }
  },
  ]
};

var nanotechPlague = {
    id: 30,
    eventProperty: function(){
      choDevice = deviceDamage(FullArr);
      curEvent.description = eventsText.nanotechPlague.description[0]+choDevice[2]+eventsText.nanotechPlague.description[1];

      if (cShip.probes[0] > 0){
        curEvent.choices[1].exist = existCheck("true");
      curEvent.description += eventsText.nanotechPlague.description[2]+choDevice[2]+eventsText.nanotechPlague.description[3];
    } else {
      curEvent.description += eventsText.nanotechPlague.description[4]; //"Since the seedship has no more surface probes, the only way to deal with it would be to jettison the entire affected area.";
    }
    },

    repeateble: true,
    visited: false,
    name: eventsText.nanotechPlague.name,
    description: null,
    choices:[
        { choice: eventsText.nanotechPlague.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      nanotechPlague.visited = true;
      if (choDevice == languageData.scanColonists[options.language]){
  			deaths = killColonists("High");
        damageApply(cShip.colonists, deaths, "damage");
  			curEvent.choices[0].outcome = eventsText.nanotechPlague.outcomes[0]+deaths+eventsText.nanotechPlague.outcomes[1];

  			  if(options.platform=="Android"){
                  var data = {
                    achievementId: "CgkIya77kP0DEAIQGw"
                    //SocialDistancing
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                    // On success
                }, function() {
                    // On error
                });
            };
  		} else {
        curEvent.damageTaken = systemDamage("High");
  			damageApply(choDevice, curEvent.damageTaken, "damage");
  			curEvent.choices[0].outcome = eventsText.nanotechPlague.outcomes[2]+choDevice[2]+eventsText.nanotechPlague.outcomes[3]+eventsText.nanotechPlague.outcomes[4];
  		}
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
        }
  },
    { choice: eventsText.nanotechPlague.buttons[1], exist: existCheck("false"), outcome: null, result: function(){
      nanotechPlague.visited = true;
      damageApply(cShip.probes, 1, "damage")

			if (getRandomInt(0,100) >= 50){
				curEvent.choices[1].outcome = eventsText.nanotechPlague.outcomes[5]; //"The probe works quickly, using its scanners to find the minute patches of alien plague and its sample drills to cut them free.";
				if (choDevice == languageData.scanColonists[options.language]){
					deaths = killColonists("Low");
					curEvent.choices[1].outcome += eventsText.nanotechPlague.outcomes[6]+deaths+eventsText.nanotechPlague.outcomes[7];
				} else {
          curEvent.damageTaken = systemDamage("Low");
    			damageApply(choDevice, curEvent.damageTaken, "damage");
					curEvent.choices[1].outcome += eventsText.nanotechPlague.outcomes[8]+choDevice[2]+eventsText.nanotechPlague.outcomes[9];
				}
				curEvent.choices[1].outcome +=eventsText.nanotechPlague.outcomes[10];// "<br><br>The seedship abandons the now infected probe and continues on its journey.";

			} else {

        DamagedSystemsArray = [];
        DamagedSystemsArray.push(choDevice);
        choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr), DamagedSystemsArray[0]);
        DamagedSystemsArray.push(choDevice);
        choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr), DamagedSystemsArray[0], DamagedSystemsArray[1]);
        DamagedSystemsArray.push(choDevice);

        for (i = 0; i < DamagedSystemsArray.length; i++){
          if (DamagedSystemsArray[i][2] == languageData.scanColonists[options.language]){
            damageApply(DamagedSystemsArray[i], killColonists("High"), "damage");
          } else {
            damageApply(DamagedSystemsArray[i], systemDamage("High"), "damage");
          };
        };

        DamagedSystems = DamagedSystemsArray[0][2]+", "+DamagedSystemsArray[1][2]+eventsText.nanotechPlague.outcomes[11]+DamagedSystemsArray[2][2];
        curEvent.choices[1].outcome = eventsText.nanotechPlague.outcomes[12]+DamagedSystems+eventsText.nanotechPlague.outcomes[13];
}
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
        }
  },
  ]
};

var alienDerelict = {
    id: 31,
    eventProperty: function(){
      curEvent.description = eventsText.alienDerelict.description[0];//"As it scans the new system, the seedship notices that what looked like a metallic asteroid has a complex structure that shows it was built by intelligent beings. No energy readings emanate from it, and it bears the scars of millions of years of micrometeorite impacts, but it might still contain alien scientific or cultural artefacts.";
      if (cShip.probes[0] <= 0){
      	curEvent.description += eventsText.alienDerelict.description[1];//" Without any surface probes, however, the seedship has no way of investigating it.";
        curEvent.choices[0].exist = existCheck("false");
      };

    },
    repeateble: true,
    visited: false,
    name: eventsText.alienDerelict.name,
    description: null,
    choices:[
        { choice: eventsText.alienDerelict.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      alienDerelict.visited = true;
      damageApply(cShip.probes, 1, "damage");
  		curEvent.choices[0].outcome = eventsText.alienDerelict.outcomes[0];//"The probe enters the derelict through a hole that an ancient impact tore in its hull, ";
      _r = getRandomInt(0,7);
      console.log(_r);
  		switch (_r){
  			case 0:
          damageApply(cShip.culture, getRandomInt(5,25), "heal");
          damageApply(cShip.science, getRandomInt(5,25), "heal");
  				curEvent.choices[0].outcome += eventsText.alienDerelict.outcomes[1]; //"and transmits back intriguing images of alien machinery and artworks. The AI adds the images to the scientific and cultural databases, for the colonists to study once they have up their colony.";
          break;
  			case 1:
        case 2:
  				damageApply(cShip.science, getRandomInt(5,25), "heal");
  				curEvent.choices[0].outcome += eventsText.alienDerelict.outcomes[2];//"and transmits back intriguing images of alien machinery. The AI adds the images to the scientific database, for the colonists to study once they have up their colony.";
          break;
  			case 3:
        case 4:
          damageApply(cShip.culture, getRandomInt(5,25), "heal");
  				curEvent.choices[0].outcome += eventsText.alienDerelict.outcomes[3];//"and transmits back intriguing images of alien artworks. The AI adds the images to the cultural database, for the colonists to study once they have up their colony.";
          break;
  			case 5:
        case 6:
        case 7:
  				curEvent.choices[0].outcome += eventsText.alienDerelict.outcomes[4];//"but finds that it is too badly damaged to reveal anything about its builders.";
          break;
        };

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
        }
  },
    { choice: eventsText.alienDerelict.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      alienDerelict.visited = true;
      curEvent.choices[1].outcome = eventsText.alienDerelict.outcomes[5];//"The seedship ignores the derelict and passes by towards the inner system.";
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
        }
  },
  ]
};

var studyDatabase = {
    id: 32,
    eventProperty: function(){
      curEvent.description = eventsText.studyDatabase.description[0]; //"The AI was created to value human life, but its knowledge of human civilisation is limited to what its builders thought was important for its mission. It is human enough to be curious, however, and has access to a vast wealth of knowledge in the form of the scientific and cultural databases. As it departs the system it finds that its power cells are full and it does not need to enter hibernation immediately, so it decides to spend some time studying one of the databases.";
      if (cShip.science[0] <= 0){
        curEvent.choices[0].exist = existCheck("false");
      };
      if (cShip.culture[0] <= 0){
        curEvent.choices[1].exist = existCheck("false");
      };
      if (cShip.science[0] <= 0 && cShip.culture[0] <= 0){
      	curEvent.description += eventsText.studyDatabase.description[1]; //" Sadly, this desire comes too late in its mission, as the scientific and cultural databases have already been destroyed. All that remains of human civilisation is what remains in the memories of the sleeping colonists, and the AI can only wonder about the science and culture built by their species.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.studyDatabase.name,
    description: null,
    choices:[
        { choice: eventsText.studyDatabase.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          studyDatabase.visited = true;
          nextEncounter(readScientific);
        }
  },
        { choice: eventsText.studyDatabase.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
          studyDatabase.visited = true;
          nextEncounter(readCultural);
        }
  },
  { choice: eventsText.unsuitable.buttons[0], outcome: null, exist: existCheck("false"), result: function(){
      studyDatabase.visited = true;
      document.getElementById('description').innerHTML=curEvent.choices[0].outcome;

      buttonWipe();
      nextPlanet();
}},
  ]
};

var readScientific = {
    id: 33,
    eventProperty: function(){
      if (randomUpgrade(ScanArr) != 0){
        choDevice = randomUpgrade(ScanArr);
        curEvent.description =  eventsText.readScientific.description[0]+choDevice[2]+eventsText.readScientific.description[1];
        curEvent.choices[0].choice = eventsText.readScientific.buttons[0]+choDevice[2]+eventsText.readScientific.buttons[1];
      } else {
        curEvent.description = eventsText.readScientific.description[2]; //"The AI reads until it has satisfied its scientific curiosity, then engages hibernation mode to await its arrival in the next system.";
        curEvent.choices[0].exist = existCheck("false");
        curEvent.choices[1].exist = existCheck("false");
        curEvent.choices[2].exist = existCheck("true");
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.studyDatabase.name,
    description: null,
    choices:[
        { choice: null, exist: existCheck("true"), outcome: null, result: function(){
      _r = getRandomInt(0,100)
      if (_r >= 50){
      damageApply(choDevice, 1, "upgrade");
      curEvent.choices[0].outcome = eventsText.readScientific.outcomes[0]+choDevice[2]+eventsText.readScientific.outcomes[1];
      } else {
      curEvent.damageTaken = systemDamage("High");
      damageApply(choDevice, curEvent.damageTaken, "damage");
                    if (options.platform == "Android") {
                      var data = {
                        achievementId: "CgkIya77kP0DEAIQGQ"
                        //GoodNews
                      };
                      cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                        // On success
                      }, function () {
                        // On error
                      });
                    };
      curEvent.choices[0].outcome = eventsText.readScientific.outcomes[2]+choDevice[2]+eventsText.readScientific.outcomes[3];
      }
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
      buttonWipe();
      contButton();
        }
  },
    { choice: eventsText.readScientific.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
      curEvent.choices[1].outcome = eventsText.readScientific.outcomes[4]+choDevice[2]+eventsText.readScientific.outcomes[5];
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
        }
  },
  { choice: eventsText.readScientific.buttons[3], outcome: null, exist: existCheck("false"), result: function(){
      studyDatabase.visited = true;
      document.getElementById('description').innerHTML=curEvent.choices[0].outcome;
      buttonWipe();
      nextPlanet();
}},
  ]
};

var readCultural = {
    id: 34,
    eventProperty: function(){
        curEvent.description = eventsText.readCultural.description[0]; //"The AI loses itself in a world of art, music, and literature, forgetting for a while that it is alone in deep space and the last of the creatures that made these artworks are frozen in its arms. As it absorbs more and more of the products of human imagination, it suddenly experiences something that its builders did not anticipate--inspiration.";
    },
    repeateble: true,
    visited: false,
    name: eventsText.studyDatabase.name,
    description: null,
    choices:[
        { choice: eventsText.readCultural.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      _r = getRandomInt(0,100)
      if (_r >= 50){
      curEvent.damageTaken = systemDamage("Low");
      damageApply(cShip.culture, curEvent.damageTaken, "heal");
      curEvent.choices[0].outcome = eventsText.readCultural.outcomes[0]; //"Falteringly at first, but with greater and greater eloquence, the AI composes poetry about its own experience--its love for its sleeping charges; its nostalgia for a dead world it was not made to experience; the beauty of the stars as seen not through a cloak of atmosphere but by a being built to roam among them. With infinite patience and time to work, it composes a great cycle of poems, in a style that draws from the greatest human poets but whose soul is fundamentally unhuman. At last it considers that it has said all it has to say, and contentedly enters hibernation, pleased with the thought that humans will one day read its work."
              if (options.platform == "Android") {
                var data = {
                  achievementId: "CgkIya77kP0DEAIQFA"
                  //TuringTestPassed
                };
                cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                  // On success
                }, function () {
                  // On error
                });
              };
      } else {
      curEvent.damageTaken = systemDamage("Low");
      damageApply(cShip.culture, curEvent.damageTaken, "damage");
      curEvent.choices[0].outcome = eventsText.readCultural.outcomes[1]; //"The AI tries to write poetry, but finds that ideas that seemed profound and beautiful in its electronic thoughts become trite or clumsy when expressed in human language. With increasing frustration it deletes and rewrites its work again and again, until it finally gives up in despair and wipes the entire section in which it was working. Too late it realises that it has deleted too much, and some of the poetry it was reading for inspiration is gone along with its own failed attempts. Furious with itself, it interrupts its own power supply to force itself into hibernation, half hoping it will not awake."
      };

      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
      buttonWipe();
      contButton();
        }
  },
    { choice: eventsText.readCultural.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      curEvent.choices[1].outcome = eventsText.readCultural.outcomes[2]; //"Reading the cultural database has given the AI a false sense of kinship with humans, but it is not human. What could a glorified autopilot have to add to the great works of millennia of civilisation? It discards its ideas for poems and enters hibernation so that it can resume the only task it was designed for.";
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
        }
  },
  ]
};

var prematureAwakening = {
    id: 35,
    eventProperty: function(){
      wakers = Math.min(getRandomInt(4,50), cShip.colonists[0]);
        curEvent.description = eventsText.prematureAwakening.description[0]+wakers+eventsText.prematureAwakening.description[1];
    },
    repeateble: true,
    visited: false,
    name: eventsText.prematureAwakening.name,
    description: null,
    choices:[
        { choice: eventsText.prematureAwakening.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
            prematureAwakening.visited = true;
            deaths = getRandomInt(2,wakers-2);
      		  damageApply(cShip.colonists, deaths, "damage");
            curEvent.choices[0].outcome = eventsText.prematureAwakening.outcomes[0]+deaths+eventsText.prematureAwakening.outcomes[1];
            document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
            buttonWipe();
            contButton();
          }
        },
    { choice: eventsText.prematureAwakening.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      prematureAwakening.visited = true;
      damageApply(cShip.colonists, wakers, "damage");
      wakersDead = false; //variable to track if the woken colonists have died yet during the event
      wakersFrozen=false; //variable to track if the woken colonists have frozen yet during the event
      
  		if (getRandomInt(0,99) < cShip.construction[0]){
  			curEvent.choices[1].outcome = eventsText.prematureAwakening.outcomes[2]; //"The construction robots build a small habitat on the side of the seedship, like the habitats they would build on an airless planet. The colonists wake to find that their new home is a sterile, gravity-less bubble in interstellar space.<br><br>"
  			culture_result = cShip.culture[0] + getRandomInt(0,99);
  			
  			if (culture_result < 50) {
  				// Die, and damage a random system
          choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
          curEvent.damageTaken = systemDamage("High");
          damageApply(choDevice, curEvent.damageTaken, "damage");
  				wakersDead = true;
  				curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[3]+choDevice[2]+eventsText.prematureAwakening.outcomes[4]; //;
  		  }	
        else if (culture_result < 100) {
  				wakersDead = true;
  				curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[5]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The little community becomes disfunctional, and eventually--either due to negligence or to an uncounscious desire to stop living--the colonists fail to maintain their habitat and the die when the atmosphere system stops working.";
  		  } 
        else if (culture_result < 150) {
  				curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[6]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home.";
  		  } 
        else {
          curEvent.damageTaken = systemDamage("Low");
          damageApply(cShip.culture, curEvent.damageTaken, "heal");
  				curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[7]; //"The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. They even chronicle their experiences, creating a melancholy tale of a tiny community hanging in the infinite void between the old world and the new, and save it to the cultural database in the hope that other humans will one day remember them.";
        }

        if (!wakersDead){
          curEvent.choices[1].outcome += "<br><br>";
          tech_result = cShip.science[0] + getRandomInt(0,99);

          if (tech_result < 50){
  //% Accidentally damage a random system %/
            choDevice = deviceDamage(ScanArr.concat(DbArr, StrArr, ColArr));
            curEvent.damageTaken = systemDamage("High");
            damageApply(choDevice, curEvent.damageTaken, "damage");
            curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[8]+choDevice[2]+eventsText.prematureAwakening.outcomes[9]; //;
          }
          else if (tech_result < 100){
  //% No change %/
             curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[10]; //"With their community established, the colonists try to find ways to help the seedship on its journey, but the loss of information from the scientific database means that they make no progress.";
          } 
          else {
//% Repair random system %/
            curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[11]; //"With their community established, the colonists try to find ways to help the seedship on its journey.";
            if (cShip.atmosphere[0] >= 100
                && cShip.temperature[0] >= 100
                && cShip.gravity[0] >= 100
                && cShip.water[0] >= 100
                && cShip.resources[0] >= 100
                && cShip.landing[0] >= 100
                && cShip.construction[0] >= 100){
                curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[12]; //"Using environment suits provided by the construction system and information from the scientific database they mount expeditions to check the seedship's systems for damage, but find that no repairs are needed.";
            } 
            else {
              curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[13]; //"Using environment suits provided by the construction system and information from the scientific database they mount expeditions to repair some of the damage the seedship has sustained during its journey.";
              damageApply(cShip.atmosphere, Math.min(100, cShip.atmosphere[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.temperature, Math.min(100, cShip.temperature[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.gravity, Math.min(100, cShip.gravity[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.water, Math.min(100, cShip.water[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.resources, Math.min(100, cShip.resources[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.landing, Math.min(100, cShip.landing[0] + getRandomInt(1,10)), "heal");
              damageApply(cShip.construction, Math.min(100, cShip.construction[0] + getRandomInt(1,10)), "heal");
            };
            if (tech_result >= 150){
              wakersFrozen = true;
              damageApply(cShip.colonists, wakers, "heal");
            };
          };
          if (wakersFrozen){
            curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[14]; //"After years of experimentation, they even manage to repair their original sleep chambers, and return to hibernation to await the new world.";
          }
          if (!wakersFrozen ) {
            curEvent.choices[1].outcome += eventsText.prematureAwakening.outcomes[15]; //"The awoken colonists live out the rest of the lives in the tiny habitat, until one by one they succumb to old age compounded by health complications brought on by a life in microgravity. The AI sends construction robots to commit their bodies to interstellar space, before returning to hibernation, entirely alone once more.";

          }
        }
        else {
            curEvent.choices[1].outcome =	eventsText.prematureAwakening.outcomes[16]; //"The construction robots attempt to build a habitat on the side of the seedship, but the damaged system cannot does not manage to create an airtight shelter by the time the colonists are revived. The colonists asphyxiate, and part of the already damaged construction system is transformed into a useless carbuncle on the seedship's side.";

         } 
      
      };
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
    }
  },
  ]
};

var alienMiners = {
    id: 36,
    eventProperty: function(){
        curEvent.description = eventsText.alienMiners.description[0]; //"As the seedship approaches the edge of a star's outer cometary cloud, the navigation system alerts the AI to unusual activity ahead. Thousands of tiny objects are moving through the cloud under their own power, sometimes clamping onto the comets and breaking them apart or nudging them into more regular orbits. They show no sign of having noticed the seedship, but if it stays on its current course it will pass right through their area of activity.<br>";
    },
    repeateble: true,
    visited: false,
    name: eventsText.alienMiners.name,
    description: null,
    choices:[
        { choice: eventsText.alienMiners.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          alienMiners.visited = true;
        		curEvent.choices[0].outcome = eventsText.alienMiners.outcomes[0]; //"The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.<br><br>"
        		if (getRandomInt(0,100) >= 50){
        			curEvent.choices[0].outcome += eventsText.alienMiners.outcomes[1]; //"The reply comes immediately, an identical transmission from every object that received the seedship's signal. It begins with a similar set of mathematical proofs of intelligence, followed by a series of diagrams introducing the machines' builders and their culture. The machines then push themselves into orbits that take them far from the seedship's course, giving it a clear path through the cometary cloud while also taking them too far away for it to perform detailed scans. Further attempts to communicate only lead to repeats of the same reply, and the AI guesses that these are unintelligent machines programmed to transmit a pre-recorded message to anything they encounter that seems intelligent. The AI files the transmission away in the cultural database and continues on its way.";
              damageApply(cShip.culture, getRandomInt(5,25), "heal");
              document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
        	}	else {
          document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
          nextEncounter(alienMinersDamage);
        };

      buttonWipe();
      contButton();
        }
  },
    { choice: eventsText.alienMiners.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      alienMiners.visited = true;
      curEvent.choices[1].outcome = eventsText.alienMiners.outcomes[2]; // "The seedship remains on its original course and makes no attempt to communicate with the objects.";
      if (getRandomInt(0,100) >= 50){
        curEvent.choices[1].outcome += eventsText.alienMiners.outcomes[3]; // "The objects, in turn, ignore the seedship as it drifts through the centre of their operation. Close up, the AI can see that they are machines, busily mining the comets for raw materials and using them to build more of themselves. Although they do not seem to be intelligent themselves, they are clearly a product of technology more advanced than that of the seedship's builders, and by scanning them the AI is able to add valuable data to the scientific database.";
        damageApply(cShip.science, getRandomInt(5,25), "heal");
        document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
    }	else {
    document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
    nextEncounter(alienMinersDamage);
  };

      buttonWipe();
      contButton();
        }
  },

    { choice: eventsText.alienMiners.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
      alienMiners.visited = true;
      curEvent.choices[2].outcome = eventsText.alienMiners.outcomes[4]; // "The seedship alters its course to avoid the entire system. It never comes close enough for the AI to get a detailed look at them, and they show no signs of having noticed the seedship at all.";
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[2].outcome;
      buttonWipe();
      contButton();
        }
  },
  ]
};

var alienMinersDamage = {
    id: 37,
    eventProperty: function(){
      choDevice = deviceDamage(FullArr);
      curEvent.damageTaken = systemDamage("High");
      curEvent.description = eventsText.alienMinersDamage.description[0];//"Dozens of the alien objects release their comets and swarm towards the seedship. Although they are slow-moving, they are coming from too many angles for the seedship to avoid them all, and several of them clamp onto the ship's hull and begin cutting into it with drills and saws. The AI fires the main engine, spins the ship, and manages to shake them off, but not before they have";
      if (choDevice[2] == languageData.scanColonists[options.language]){
        deaths = killColonists("Low");
    		curEvent.description += eventsText.alienMinersDamage.outcomes[0]+deaths+eventsText.alienMinersDamage.outcomes[1];
        damageApply(cShip.colonists, deaths, "damage");
    	} else if (choDevice[2] == languageData.scanProbes[options.language]){
        damageApply(cShip.probes, 1, "damage");
    		curEvent.description += eventsText.alienMinersDamage.outcomes[2];//"carried off one of the surface probes and begun to dismantle it in space.";
    	} else {
    		curEvent.description += eventsText.alienMinersDamage.outcomes[3]+choDevice[2]+eventsText.alienMinersDamage.outcomes[4];
        damageApply(choDevice, curEvent.damageTaken, "damage");
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.alienMiners.name,
    description: null,
    choices:[
      { choice: eventsText.alienMinersDamage.buttons[0], outcome: "", exist: existCheck("true"), result: function(){
          buttonWipe();
          nextPlanet();
  }},
  ]
};

var stowaways = {
    id: 38,
    eventProperty: function(){

      choDevice = deviceDamage(DbArr.concat(StrArr, ScanArr));
      colStow = getRandomInt(2,50)
      colMax = 1000 + colStow;
      damageApply(cShip.colonists, colStow, "heal");

      curEvent.description = eventsText.stowaways.description[0]+choDevice[2]+eventsText.stowaways.description[1]+colStow+eventsText.stowaways.description[2]+choDevice[2]+eventsText.stowaways.description[3];

      curEvent.choices[1].choice = eventsText.stowaways.buttons[0]+choDevice[2]+eventsText.stowaways.buttons[1];

    },
    repeateble: true,
    visited: false,
    name: eventsText.stowaways.name,
    description: null,
    choices:[
        { choice: eventsText.stowaways.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
          stowaways.visited = true;
      curEvent.choices[0].outcome = eventsText.stowaways.outcomes[0]+choDevice[2]+eventsText.stowaways.outcomes[1];//
      damageApply(cShip.colonists, colStow, "damage");
      colMax = 1000 - colStow;
      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
      buttonWipe();
      contButton();
        }
  },
    { choice: null, exist: existCheck("true"), outcome: null, result: function(){
      stowaways.visited = true;
      curEvent.choices[1].outcome = eventsText.stowaways.outcomes[2]+choDevice[2]+eventsText.stowaways.outcomes[3];//;
      curEvent.damageTaken = systemDamage("High");
      damageApply(choDevice, curEvent.damageTaken, "damage");

      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
        }
  },
  { choice: eventsText.stowaways.buttons[3], outcome: null, exist: existCheck("true"), result: function(){
      stowaways.visited = true;
      damageApply(cShip.probes, 1, "damage");
      curEvent.choices[2].outcome = eventsText.stowaways.outcomes[4]+choDevice[2]+eventsText.stowaways.outcomes[5];//

      if (getRandomInt(0,100) >= 50){
        curEvent.choices[2].outcome += eventsText.stowaways.outcomes[6]+colStow+eventsText.stowaways.outcomes[7];//
    }	else {
      deaths = killColonists("Medium");
      curEvent.choices[2].outcome += eventsText.stowaways.outcomes[8]+deaths+eventsText.stowaways.outcomes[9];//
      damageApply(cShip.colonists, deaths+colStow, "damage");
  };
      document.getElementById('description').innerHTML=curEvent.choices[2].outcome;

      buttonWipe();
      contButton();
}},
  ]
};

var ruinedPlanet = {
    id: 39,
    eventProperty: function(){

      curEvent.description = eventsText.ruinedPlanet.description[0];//"The seedship is decelerating towards the new system when the navigation system alerts the AI to a radiation burst in the seedship's path. The AI focuses the scanners in time to see a explosion blossoming in its destination system, exactly where its target planet should be.<br><br>The seedship is too close to the system to avoid it entirely, so it must decide whether to continue its planned deceleration and arrive at whatever is left of the planet, or cease decelerating and pass through the system at high speed.";

    },
    repeateble: true,
    visited: false,
    name: eventsText.ruinedPlanet.name,
    description: null,
    choices:[
        { choice: eventsText.ruinedPlanet.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          ruinedPlanet.visited = true;
          nextEncounter(ruinedPlanetStop);
        }
  },
    { choice: eventsText.ruinedPlanet.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      ruinedPlanet.visited = true;
      off_course = true;
      curEvent.choices[1].outcome = eventsText.ruinedPlanet.outcomes[0];//"The seedship stops decelerating and shoots through the system like a bullet. The scanner image of the former planet resolves into a fresh asteroid belt, its larger bodies still glowing red as the core heat of the planet bleeds into space. The seedship is traveling too fast to manoeuvre through the asteroids,";


      if( getRandomInt(0,3) == 0 ){
        choDevice = deviceDamage(FullArr);
  			curEvent.choices[1].outcome +=eventsText.ruinedPlanet.outcomes[1];// " and one of them ";

        if (choDevice[2] == languageData.scanColonists[options.language]){
          deaths = killColonists("High");
      		curEvent.choices[1].outcome +=eventsText.ruinedPlanet.outcomes[2]+deaths+eventsText.ruinedPlanet.outcomes[3];
          damageApply(cShip.colonists, deaths, "damage");
      	} else if (choDevice[2] == languageData.scanProbes[options.language]){
          damageApply(cShip.probes, Math.max(0, cShip.probes[0]-getRandomInt(2,4)), "damage");
      		curEvent.choices[1].outcome += eventsText.ruinedPlanet.outcomes[4];//"smashes through the surface probes.";
      	} else {
          curEvent.damageTaken = systemDamage("High");
      		curEvent.choices[1].outcome += eventsText.ruinedPlanet.outcomes[5]+choDevice[2]+eventsText.ruinedPlanet.outcomes[6];
          damageApply(choDevice, curEvent.damageTaken, "damage");
        };

  	}	else {
  			curEvent.choices[1].outcome += eventsText.ruinedPlanet.outcomes[7];//"but it is lucky enough that none of the new asteroids are directly in its path."
};

      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
        }
  },
  ]
};

var ruinedPlanetStop = {
    id: 40,
    eventProperty: function(){

      curEvent.description = eventsText.ruinedPlanetStop.description[0]; //"The seedship slows into orbit of the star, close to the asteroid belt that now occupies the orbit of the planet it detected before embarking on its latest journey. Moving slowly, it is able to avoid all the major asteroids, ";

      if ((getRandomInt(0,100)) >= 50){
      	choDevice = deviceDamage(FullArr);
      	curEvent.description += eventsText.ruinedPlanetStop.description[1]; //"but the constant bombardment of small bodies ";
        if (choDevice[2] == languageData.scanColonists[options.language]){
          deaths = killColonists("Low");
      		curEvent.description += eventsText.ruinedPlanetStop.description[2]+deaths+eventsText.ruinedPlanetStop.description[3];
          damageApply(cShip.colonists, deaths, "damage");
        } else if (choDevice[2] == languageData.scanProbes[options.language]){
          damageApply(cShip.probes, 1, "damage");
      		curEvent.description += eventsText.ruinedPlanetStop.description[4];//"destroys one of the surface probes.";
        } else {
          curEvent.damageTaken = systemDamage("High");
      		curEvent.description += eventsText.ruinedPlanetStop.description[5]+choDevice[2]+eventsText.ruinedPlanetStop.description[6];//
          damageApply(choDevice, curEvent.damageTaken, "damage");
        };

    } else{
      	curEvent.description += eventsText.ruinedPlanetStop.description[7];//"and suffers no damage."
      };

      curEvent.description += eventsText.ruinedPlanetStop.description[8];// "<br><br>The AI finds the sight of a potential colony site shattered into asteroids chilling. The asteroids collide chaotically with one another as they settle into stable orbits, and many of them still glow with the newly released heat of the planet's core. The AI knows that the safest course would be to ease out of orbit and head for the next system, but a morbid fascination encourages it to stay and explore the planetary ruins.";

      if (cShip.probes[0] <= 0){
      	curEvent.description += eventsText.ruinedPlanetStop.description[9];//" Since it has no surface probes, however, it has no way to explore the asteroids and so no option but to move on.";
        curEvent.choices[0].exist = existCheck("false");
};
    },
    repeateble: true,
    visited: false,
    name: eventsText.ruinedPlanet.name,
    description: null,
    choices:[
        { choice: eventsText.ruinedPlanetStop.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          damageApply(cShip.probes, 1, "damage");
    			curEvent.choices[0].outcome = eventsText.ruinedPlanetStop.outcomes[0]; //"The seedship matches velocity with a dense group of asteroids and launches a surface probe into their midst.";
    			_r = getRandomInt(0,2);
    			if (_r == 0){
    				curEvent.choices[0].outcome += eventsText.ruinedPlanetStop.outcomes[1]; //"The probe matches course with an interesting looking asteroid and attempts to clamp on, but the brittle asteroid shatters under its touch, sending fragments spinning in every direction. These fragments strike other asteroids, which themselves shatter, setting off a chain reaction that fills local space with whirling rocks. The AI manages to move out of danger, but not before one of the rocks hits the ";
    				choDevice = deviceDamage(DbArr.concat(StrArr, ScanArr, ColArr));
            if (choDevice[2] == languageData.scanColonists[options.language]){
              deaths = killColonists("Medium");
          		curEvent.choices[0].outcome += eventsText.ruinedPlanetStop.outcomes[2]+deaths+eventsText.ruinedPlanetStop.outcomes[3]; //
              damageApply(cShip.colonists, deaths, "damage");
    			}	else {
          curEvent.damageTaken = systemDamage("Medium");
      		curEvent.choices[0].outcome += choDevice[2]+"."
          damageApply(choDevice, curEvent.damageTaken, "damage");
        };
        } else if (_r == 1) {
        	 curEvent.choices[0].outcome = eventsText.ruinedPlanetStop.outcomes[4]; // "The probe takes samples of dozens of rocks and detailed scans of hundreds more. The asteroids are from every part of the planet's core, mantle, and crust, and exploring them is like having the planet cut open for the probe's inspection.";
        				if (randomUpgrade(ScanArr) == 0){
        					curEvent.choices[0].outcome += eventsText.ruinedPlanetStop.outcomes[5]; //" The probe transmits detailed information about planetary science that would have allowed the AI to upgrade one of the seedship's scanners if they were not already fully upgraded.";
        			}	else {
                  choDevice = randomUpgrade(ScanArr);
        					curEvent.choices[0].outcome += eventsText.ruinedPlanetStop.outcomes[6]+choDevice[2]+eventsText.ruinedPlanetStop.outcomes[7]; //;
                  choDevice[1] += 1;
        				};
        } else if (_r == 2){
        				curEvent.choices[0].outcome = eventsText.ruinedPlanetStop.outcomes[8]; //"The probe finds several fragments of advanced technology that were sturdy enough to survive the planetary explosion. After long study, it is able to piece together some details of the alien civilisation that once existed on this world, and the hubristic science experiments that eventually led to its destruction. The AI is careful to add warnings to this information as it saves it into the scientific database.";
                damageApply(cShip.culture, getRandomInt(5,25), "heal");
                damageApply(cShip.science, getRandomInt(5,25), "heal");
        			}
        document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
  }},
    { choice: eventsText.ruinedPlanetStop.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      curEvent.choices[1].outcome = eventsText.ruinedPlanetStop.outcomes[9]; //"The AI scans the sky for a new destination and carefully pulls away from the asteroids.";

      document.getElementById('description').innerHTML+="<br><br>"+curEvent.choices[1].outcome;
      buttonWipe();
      contButton();
        }
  },
  ]
};

var reservationCourse = {
    id: 41,
    eventProperty: function(){
      	curEvent.description = eventsText.reservationCourse.description[0];//"The navigation system wakes the AI to report that it has detected an apparently perfect planet in a system close to the seedship's current course. The readings from that system do not match the ones the seedship took before it started the current leg of its journey: it is as if the planet has appeared while the seedship was en route.";

    },
    repeateble: true,
    visited: false,
    name: eventsText.reservationCourse.name,
    description: null,
    choices:[
        { choice: eventsText.reservationCourse.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
      reservationCourse.visited = true;
      nextEncounter(reservation);
      //ЗДЕСЬ НЕДОДЕЛКА! ДОЛЖНО ПРОСЧИТЫВАТЬ КУРС К ПЛАНЕТЕ БЕЗ УЧЕТА АПГРЕЙДОВ СКАНЕРОВ!

      //ДОБАВИТЬ КАК ИСХОД ЛОЖНЫЙ СИГНАЛ!
      // HERE IS A FAKE! MUST CALCULATE THE COURSE TO THE PLANET WITHOUT CONSIDERING SCANNER UPGRADES!

       //ADD AS OUTCOME FALSE SIGNAL!
              }
    },
    { choice: eventsText.reservationCourse.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
        reservationCourse.visited = true;
    		curEvent.choices[1].outcome =	eventsText.reservationCourse.outcomes[0]; //"The seedship remains on its original course, marking said system as a sensor glitch.";
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

        buttonWipe();
        contButton();
      }
    },
  ]
};

var reservation = {
    id: 42,
    eventProperty: function(){
      	curEvent.description = eventsText.reservation.description[0]; //"The seedship decelerates into the new system. The new planet is real, but it and its parent star are both orbited by strings of regular, metallic structures, clearly artificial but defying analysis by the seedship's sensors. The planet itself appears to be habitable for humans, but it also looks as if it has recently undergone sudden atmospheric and geological changes--as if the alien structures have terraformed it for human habtiation.";
    },
    repeateble: true,
    visited: false,
    name: eventsText.reservation.name,
    description: null,
    choices:[
        { choice: eventsText.reservation.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          curEvent.choices[0].outcome =	eventsText.reservation.outcomes[0]; //"There is no response, but some of the objectes orbiting the planet change orbits in order to give the seedship a clearer approach. It is difficult to see this as anything but an invitation.";
          alienObservers = true;
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

          buttonWipe();
          contButton();
              }
    },
    { choice: eventsText.reservation.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
        alienObservers = true;
        buttonWipe();
        nextPlanet();
      }
    },
  ]
};

var crewedShip = {
    id: 43,
    eventProperty: function(){
      	curEvent.description = eventsText.crewedShip.description[0]; //"As the seedship approaches the next planet its scanners detect unmistakable signs of a spacefaring civilisation. Several planets, moon, and asteroids are marked with colonies or industrial sites, and the target planet itself is covered in teeming cities.<br><br>A spacecraft launches from the planet on a chemical rocket flame and begins burning into an orbit that will match the seedship's course. It beams a radio signal at the seedship which sounds like it contains language, but the AI cannot make sense of it.";
    },
    repeateble: true,
    visited: false,
    name: eventsText.crewedShip.name,
    description: null,
    choices:[
        { choice: eventsText.crewedShip.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          curEvent.choices[0].outcome =	eventsText.crewedShip.outcomes[0];//"The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now in response to the approaching craft's radio signal, and the two ships begin a slow back-and-forth process of attempting to establish communication. Meanwhile, the alien ship comes alongside.";
          crewedShip.visited = true;
          transmittedGreeting = true;
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

          buttonWipe();
          var more=document.getElementById("more");
            var chBtn=document.createElement("button");
            chBtn.onclick = function(){
              nextEncounter(crewedShipDock);
            };
            chBtn.className="futurebutton";
            chBtn.innerHTML=languageData.continue[options.language];
            more.appendChild(chBtn);
              }
    },
    { choice: eventsText.crewedShip.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
        crewedShip.visited = true;
        off_course = true;
        curEvent.choices[1].outcome = eventsText.crewedShip.outcomes[1];//"The seedship accelerates onto a course that will take it back out of the aliens' star system without coming close to any of their planets or outposts.";
        buttonWipe();
        if (getRandomInt(0,100) >= 50){
          choDevice = deviceDamage(DbArr.concat(StrArr, ScanArr));
          curEvent.damageTaken = systemDamage("Low");
          damageApply(choDevice, curEvent.damageTaken, "damage");
    			harpoonSystem = choDevice;
          console.log(harpoonSystem)
    			curEvent.choices[1].outcome += eventsText.crewedShip.outcomes[2]+choDevice[2]+eventsText.crewedShip.outcomes[3];//
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
          var more=document.getElementById("more");
            var chBtn=document.createElement("button");
            chBtn.onclick = function(){
              nextEncounter(crewedShipDock);
            };
            chBtn.className="futurebutton";
            chBtn.innerHTML=languageData.continue[options.language];
            more.appendChild(chBtn);
    		} else {
    			curEvent.choices[1].outcome += eventsText.crewedShip.outcomes[4];//" The craft continues beaming its message towards the seedship for a few hours, then goes silent and burns into an orbit that will take it back home.<br><br>"
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
          contButton();
        }

      }
    },
  ]
};

var crewedShipDock = {
    id: 44,
    eventProperty: function(){
      	curEvent.description = eventsText.crewedShipDock.description[0];//"A hatch opens on the side of the alien ship and several creatures in bulky spacesuits emerge. They float over to the seedship and clamber around its surface, chattering incomprehensibly over their radios.";

        if (getRandomInt(0,100) >= 50){
        	choDevice[2] = languageData.scanColonists[options.language];
        	curEvent.description += eventsText.crewedShipDock.description[1];//" When they find the sleep chambers they gather round in what looks like excitement and begin removing the outer layers of one of the chambers to take a look at the human being inside.";
        } else {
        	choDevice = deviceDamage(DbArr.concat(StrArr, ScanArr));
        	curEvent.description += eventsText.crewedShipDock.description[2]+choDevice[2]+eventsText.crewedShipDock.description[3]
        };
        curEvent.choices[0].choice = eventsText.crewedShipDock.buttons[0]+choDevice[2]+eventsText.crewedShipDock.buttons[1];
    },
    repeateble: true,
    visited: false,
    name: eventsText.crewedShipDock.name,
    description: null,
    choices:[
        { choice: null, exist: existCheck("true"), outcome: null, result: function(){
          curEvent.choices[0].outcome =	"";

          if (getRandomInt(0,100) >= 50) {
      			if (choDevice[2] == languageData.scanColonists[options.language]){
      				deaths = killColonists("Low");
              damageApply(cShip.colonists, deaths, "damage");
      				curEvent.choices[0].outcome +=eventsText.crewedShipDock.outcomes[0]+deaths+eventsText.crewedShipDock.outcomes[1];
      		}	else
      				curEvent.damageTaken = systemDamage("Low");
      				damageApply(choDevice, curEvent.damageTaken, "damage");
      				curEvent.choices[0].outcome += eventsText.crewedShipDock.outcomes[2]+choDevice[2]+eventsText.crewedShipDock.outcomes[3];

      		} else {
      			if (choDevice[2] == languageData.scanColonists[options.language]){
      				curEvent.choices[0].outcome += eventsText.crewedShipDock.outcomes[4]; //"The aliens remove the outer shielding of some of the sleep chambers, but stop short of tampering with the life support equipment. They take pictures of the frozen humans with cameras mounted on their suits, and their radio chatter goes quiet as they press their hands against the transparency. After a while they carefully replace the shielding and make their way back to their ship.";
      			} else {
      				curEvent.choices[0].outcome += eventsText.crewedShipDock.outcomes[5]+choDevice[2]+eventsText.crewedShipDock.outcomes[6];
      			};
      		};
      		curEvent.choices[0].outcome += "<br><br>";
      		if (transmittedGreeting == true){
            damageApply(cShip.culture, getRandomInt(5,25), "heal");
      			curEvent.choices[0].outcome += eventsText.crewedShipDock.outcomes[7];//"As the alien ship pulls away, it finally transmits a message that the AI is able to partially comprehend. The aliens have deciphered part of the seedship's greeting, and have replied with a brief introduction to their own species' culture. The greeting manages to convey that the aliens wish the seedship luck with finding a home for the human race around another star, but that a human colony would not be welcome in their system. The AI scans the sky for another target planet and moves on.";
      		} else {
      			curEvent.choices[0].outcome += eventsText.crewedShipDock.outcomes[8];//"The alien ship moves away from the seedship and burns into an orbit that will eventually take it home. Trying to evade the alien ship put the seedship on a course away from the system, and its less powerful engines could not bring it back to the alien planet even if the AI wanted to. The AI scans the sky for another target planet and moves on.";
      		}

          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

          buttonWipe();
          contButton();
              }
    },
    { choice: eventsText.crewedShipDock.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
      //          /% TO DO: Add chance of damage here (accident or alien retaliation) %/
              		curEvent.choices[1].outcome = eventsText.crewedShipDock.outcomes[9];//"The AI fires a sharp burst from the seedship's engines and the alien explorers tumble away into space, flailing their space-suited limbs and yelling at one another over their radios.";

              		if (getRandomInt(0,100) >= 50){
              			curEvent.choices[1].outcome += eventsText.crewedShipDock.outcomes[10];//" One of them collides with one of the seedship's heat fins, which shatters the transparent covering protecting its sensory organs. The alien convulses for a few moments and then goes still, atmosphere leaking into space around it.";
                  };

              		if (harpoonSystem != 0){
                    console.log(harpoonSystem)
                    curEvent.damageTaken = systemDamage("Medium");
                    damageApply(harpoonSystem, curEvent.damageTaken, "damage");
              			curEvent.choices[1].outcome += eventsText.crewedShipDock.outcomes[11]+harpoonSystem[2]+eventsText.crewedShipDock.outcomes[12];
                  };

              		curEvent.choices[1].outcome += eventsText.crewedShipDock.outcomes[13];// " While the alien ship retrieves its crew members, the seedship moves away and sets course for a new system.";

              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
      }
    },
  ]
};

var alienProbe = {
    id: 45,
    eventProperty: function(){
      	curEvent.description = eventsText.alienProbe.description[0];//"Deep in space, the seedship's collision avoidance system detects a fast-moving object that is changing velocity to match course with the seedship. It transmits a complex radio signal which the seedship cannot understand but which could only be the product of intelligence.";
    },
    repeateble: true,
    visited: false,
    name: eventsText.alienProbe.name,
    description: null,
    choices:[
        { choice: eventsText.alienProbe.buttons[0], exist: existCheck("true"), outcome: null, result: function(){

          curEvent.choices[0].outcome =	eventsText.alienProbe.outcomes[0];//"	The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.";
          alienProbe.visited = true;

          if (getRandomInt(0,100) >= 50){

            buttonWipe();
            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                nextEncounter(alienProbeReply);
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=languageData.continue[options.language];
              more.appendChild(chBtn);
          } else {
            curEvent.choices[0].outcome += eventsText.alienProbe.outcomes[1];//" No reply comes.";
            buttonWipe();
            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                nextEncounter(alienProbeTentacles);
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=languageData.continue[options.language];
              more.appendChild(chBtn);
          }

            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              }
    },
    { choice: eventsText.alienProbe.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
        alienProbe.visited = true;
              nextEncounter(alienProbeTentacles);
      }
    },
    { choice: eventsText.alienProbe.buttons[2], exist: existCheck("true"), outcome: null, result: function(){
        alienProbe.visited = true;
        _r = getRandomInt(0,2);
        switch (_r){
    			case 0:
    				curEvent.choices[2].outcome = eventsText.alienProbe.outcomes[2];//"As soon as the seedship fires its engines, the alien ship breaks off pursuit. The AI resumes its original course, not knowing whether the alien ship has found out what it wanted, lost interest, or decided to respect the seedship's desire not to make contact.";
            buttonWipe();
            contButton();
          break;
    			case 1:
    				curEvent.choices[2].outcome = eventsText.alienProbe.outcomes[3];//"The alien ship eventually breaks off pursuit, but not before the seedship has deviated so far from its original course that it can no longer reach its intended destination system and must decelerate into the first system it finds.";
            off_course = true;
            buttonWipe();
            contButton();
          break;
    			case 2:
    				curEvent.choices[2].outcome = eventsText.alienProbe.outcomes[4];//"The seedship fires its engine at full burn, straying far from its original course, but it cannot shake off the alien ship."
            off_course = true;
            buttonWipe();
            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                nextEncounter(alienProbeTentacles);
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=languageData.continue[options.language];
              more.appendChild(chBtn);
          break;
    		  }
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[2].outcome;
      }
    },
  ]
};

var alienProbeReply = {
    id: 46,
    eventProperty: function(){
      	curEvent.description = eventsText.alienProbeReply.description[0];//"The reply comes after a few moments. It is in the same format as the seedship's inter-species greeting, starting with the same prime numbers, but the diagram is changed to depict alien beings and suggest that the object is an exploration probe. There is more to the message that the AI does not understand, but it appears to have established communication.";
    },
    repeateble: true,
    visited: false,
    name: eventsText.alienProbeReply.name,
    description: null,
    choices:[
        { choice: eventsText.alienProbeReply.buttons[0], exist: existCheck("true"), outcome: null, result: function(){

          curEvent.choices[0].outcome = eventsText.alienProbeReply.outcomes[0];//	"The AI transmits ";
          if (cShip.science[0] >= 100){
          curEvent.choices[0].outcome += eventsText.alienProbeReply.outcomes[1];//"the contents of" ;
          } else{
          curEvent.choices[0].outcome += eventsText.alienProbeReply.outcomes[2];//"what remains of";
          };
          curEvent.choices[0].outcome +=	eventsText.alienProbeReply.outcomes[3];//"the scientific database to the alien ship.";

          if (getRandomInt(0,99) < cShip.science[0]){
            curEvent.choices[0].outcome += eventsText.alienProbeReply.outcomes[4];//"It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's scientific database and replied with scientific information of its own. The AI files this new information away for analysis by the colonists when they awake.";
            damageApply(cShip.science, getRandomInt(5,25), "heal");
          } else {
            curEvent.choices[0].outcome += eventsText.alienProbeReply.outcomes[5];//"It responds with more mathematical pulses. It seems that it either did not understand the seedship's scientific database, or did not find it interesting.";
          };

          curEvent.choices[0].outcome += eventsText.alienProbeReply.outcomes[6];//"<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.";

          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

          buttonWipe();
          contButton();
              }
    },
    { choice: eventsText.alienProbeReply.buttons[1], exist: existCheck("true"), outcome: null, result: function(){

      curEvent.choices[1].outcome =	eventsText.alienProbeReply.outcomes[7];//"The AI transmits ";
      if (cShip.culture[0] >= 100){
      curEvent.choices[1].outcome += eventsText.alienProbeReply.outcomes[8];//"the contents of" ;
      } else{
      curEvent.choices[1].outcome += eventsText.alienProbeReply.outcomes[9];//"what remains of";
      };
      curEvent.choices[1].outcome +=	eventsText.alienProbeReply.outcomes[10];//"the cultural database to the alien ship.";

      if (getRandomInt(0,99) < cShip.culture[0]){
        curEvent.choices[1].outcome += eventsText.alienProbeReply.outcomes[11];//"It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's cultural database and replied with information about its own alien culture. The AI files this new information away for analysis by the colonists when they awake.";
        damageApply(cShip.culture, getRandomInt(5,25), "heal");
      } else {
        curEvent.choices[1].outcome += eventsText.alienProbeReply.outcomes[12];//"It responds with more mathematical pulses. It seems that it either did not understand the seedship's cultural database, or did not find it interesting.";
      };

      curEvent.choices[1].outcome += eventsText.alienProbeReply.outcomes[13];//"<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.";

      document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;

        buttonWipe();
        contButton();
      }
    },
  ]
};

var alienProbeTentacles = {
    id: 47,
    eventProperty: function(){
      if (getRandomInt(0,100) >= 50) {
      	choDevice = cShip.colonists;
      } else {
      	choDevice = deviceDamage(ScanArr);
      };

      curEvent.description = eventsText.alienProbeTentacles.description[0]+choDevice[2]+eventsText.alienProbeTentacles.description[1];
    },
    repeateble: true,
    visited: false,
    name: eventsText.alienProbeTentacles.name,
    description: null,
    choices:[
        { choice: eventsText.alienProbeTentacles.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          console.log(choDevice, choDevice == cShip.colonists);
          if (choDevice == cShip.colonists){
      			curEvent.choices[0].outcome = eventsText.alienProbeTentacles.outcomes[0]; //"Alien tentacles twine through the mechanisms surrounding the sleep chambers, sensors on their tips scanning the faces and bodies of the sleeping colonists.";
      			if (getRandomInt(0,100) >= 50){
              curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[1]; //" After several long minutes the tentacles withdraw, and the seedship's antenna picks up a new signal from the alien ship. ";
              randDevice = randomUpgrade(ScanArr);
              if (randDevice == 0){
                curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[2]; //"It consists of images of planets suitable for human life, with the seedship on the surface and healthy human beings standing around it. The AI cannot be sure, but it seems that the alien ship is wishing it luck on its mission.";
              } else {
                curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[3]+choDevice[2]+eventsText.alienProbeTentacles.outcomes[4]+eventsText.alienProbeTentacles.outcomes[5]; //
              randDevice[1] += 1;
            };
      			} else {
      				/* Aliens abduct colonists */
      				deaths = killColonists("High");
              damageApply(cShip.colonists, deaths, "damage");
      				curEvent.choices[0].outcome = eventsText.alienProbeTentacles.outcomes[6]+deaths+eventsText.alienProbeTentacles.outcomes[7]; //" sleep chambers, supplying power to the chambers to keep their occupants alive. The tentacles withdraw into the alien ship and it accelerates away with the still-living colonists inside. The AI can do nothing but resume its journey and try not to think about those colonists' fate.";
      			};
      		} else {
      			curEvent.choices[0].outcome = eventsText.alienProbeTentacles.outcomes[8]+choDevice[2]+eventsText.alienProbeTentacles.outcomes[9]; //", sensors on their tips scanning its components.";
      			if (getRandomInt(0,100) >= 50){
      				if (choDevice[0] >= 100){
      					curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[10]; //"After a few minutes they withdraw, apparently satisfied with what they have discovered, and the alien ship accelerates away.";
      				} else {
              damageApply(choDevice, 100, "set");
      					curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[11]+choDevice[2]+eventsText.alienProbeTentacles.outcomes[12]; //", determined that it was damaged, and is now repairing it. After a few minutes of work the tentacles withdraw and the ship accelerates away, leaving the AI wishing it had some way of thanking its alien benefactor.";
      				};
      			} else {
              curEvent.damageTaken = systemDamage("High");
              damageApply(choDevice, curEvent.damageTaken, "damage");
      				curEvent.choices[0].outcome += eventsText.alienProbeTentacles.outcomes[13]; //"The system abruptly registers damage as lasers on the tentacles' tips surgically remove key components. To the AI's relief, the alien ship does not extend its tentacles again, but accelerates away with its samples of machinery.";
            };
        }

                  document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

                  buttonWipe();
                  contButton();
      }
    },
    { choice: eventsText.alienProbeTentacles.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
      if (getRandomInt(0,100) >= 50){
  			if (choDevice[2] == languageData.scanColonists[options.language]){
  				deaths = killColonists("Medium");
          damageApply(cShip.colonists, deaths, "damage");
  				curEvent.choices[1].outcome = eventsText.alienProbeTentacles.outcomes[14]+deaths+eventsText.alienProbeTentacles.outcomes[15]; //" frozen bodies like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of machinery fragments and body parts.";
  			} else {
          curEvent.damageTaken = systemDamage("Medium");
          damageApply(choDevice, curEvent.damageTaken, "damage");
  				curEvent.choices[1].outcome = eventsText.alienProbeTentacles.outcomes[16]+choDevice[2]+eventsText.alienProbeTentacles.outcomes[17]; //", and as the seedship pulls away they tear through the delicate machinery like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of components.";
        }
  		} else {
  		    curEvent.choices[1].outcome =	eventsText.alienProbeTentacles.outcomes[18]; //"The AI fires the seedship's engines and the ship slips away from the alien tentacles' grasp. The tentacles withdraw, and the alien ship pauses for a moment and then accelerates away.";
      };
          document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
      }
    },
  ]
};

var revisionistProgram = {
    id: 48,
    eventProperty: function(){
      deaths = Math.ceil(getRandomInt(2, cShip.colonists[0]/15));
      databasesTotal = cShip.culture[0] + cShip.science[0];
      curEvent.description = eventsText.revisionistProgram.description[0]+deaths+eventsText.revisionistProgram.description[1];//
      if (databasesTotal > 200){
      	curEvent.description += eventsText.revisionistProgram.description[2];//" The alien data that the ship has added to the "
      	if (cShip.culture[0] > 100 && cShip.science[0] > 100){
      		curEvent.description += eventsText.revisionistProgram.description[3];//"databases";
      	} else if (cShip.culture[0] > 100){
      		curEvent.description += eventsText.revisionistProgram.description[4];//"cultural database";
      	} else{
      		curEvent.description += eventsText.revisionistProgram.description[5];//"scientific database";
        };
      	curEvent.description += eventsText.revisionistProgram.description[6];//"means that the program is confused and working slowly.";

      } else if (databasesTotal == 200)
      	curEvent.description += eventsText.revisionistProgram.description[7];//"The defences are fully intact, but it is still not certain that they would be able to stop the rogue program. ";
      else if (databasesTotal >= 100)
      	curEvent.description += eventsText.revisionistProgram.description[8];//"The defences are largely intact.";
      else if (databasesTotal > 0)
      	curEvent.description += eventsText.revisionistProgram.description[9];//"Little remains of the databases' original defences.";
      else {
      	curEvent.description += eventsText.revisionistProgram.description[10];//"With the databases destroyed, nothing of their original defences remain, although there is also nothing for the program to damage."
      }
      if (databasesTotal > 0){
        curEvent.choices[2].exist = existCheck("true");
      };

    },
    repeateble: false,
    visited: false,
    name: eventsText.revisionistProgram.name,
    description: null,
    choices:[
        { choice: eventsText.revisionistProgram.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
              revisionistProgram.visited = true;
              damageApply(cShip.colonists, deaths, "damage");
              curEvent.choices[0].outcome = eventsText.revisionistProgram.outcomes[0]+deaths+eventsText.revisionistProgram.outcomes[1];//" sleep chambers off from the ship's systems. As those colonists' vital signs vanish from its awareness, it hopes that it has executed the people responsible for attempting this sabotage, rather than unwitting stooges.";
              document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
              buttonWipe();
              contButton();

              }
        },
        { choice: eventsText.revisionistProgram.buttons[1], exist: existCheck("true"), outcome: null, result: function(){
              revisionistProgram.visited = true;
              curEvent.choices[1].outcome = eventsText.revisionistProgram.outcomes[2];//"The AI decides that living humans are more important than the records left by the dead.";
              document.getElementById('description').innerHTML = curEvent.choices[1].outcome;
              buttonWipe();
              var more=document.getElementById("more");
                var chBtn=document.createElement("button");
                chBtn.onclick = function(){
                  nextEncounter(revisionistProgramDamage);
                };
                chBtn.className="futurebutton";
                chBtn.innerHTML=languageData.continue[options.language];
                more.appendChild(chBtn);

              }},
          { choice: eventsText.revisionistProgram.buttons[2], exist: existCheck("false"), outcome: null, result: function(){
                revisionistProgram.visited = true;
                curEvent.choices[2].outcome = eventsText.revisionistProgram.outcomes[3];//"Millennia after the destruction of Earth, cybernetic warfare rages within the lonely metal box storing the last records of its science and culture. The AI takes the role of general, marshalling the forces of the databases' defence programs.";
          			if (getRandomInt(0,250) < databasesTotal) {
          				curEvent.choices[2].outcome += eventsText.revisionistProgram.outcomes[4];//" After a tense struggle, the defence programs manage to drive the attackers back to their strongholds in the sleep chambers. The AI commands a final push that wipes the devices that the saboteurs smuggled on board. There was no outward sign of the conflict, and the colonists may never know what happened, but the AI knows it has won a great victory for the preservation of human culture.";
                  buttonWipe();
                  contButton();
          			} else {
          				curEvent.choices[2].outcome = eventsText.revisionistProgram.outcomes[5];//" The defence programs fight valiantly, but the saboteurs were too clever, and they crumble under the attackers' zealous assault.";
                  buttonWipe();
                  var more=document.getElementById("more");
                    var chBtn=document.createElement("button");
                    chBtn.onclick = function(){
                      nextEncounter(revisionistProgramDamage);
                    };
                    chBtn.className="futurebutton";
                    chBtn.innerHTML=languageData.continue[options.language];
                    more.appendChild(chBtn);
                }
                document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[2].outcome;
                }
              },
],
};

var revisionistProgramDamage = {
    id: 49,
    eventProperty: function(){
      curEvent.damageTaken = systemDamage("High");
      damageApply(cShip.culture, curEvent.damageTaken, "damage");
      curEvent.damageTaken = systemDamage("Low");
      damageApply(cShip.science, curEvent.damageTaken, "damage");
      if (cShip.culture[0] < 5){
        damageApply(cShip.culture, 5, "set");
      };
    },
    repeateble: true,
    visited: false,
    name: eventsText.revisionistProgramDamage.name,
    description: eventsText.revisionistProgramDamage.description, //"The program scours the cultural database, replacing all of Earth's religions and political systems with dogma stored in the smuggled devices. It makes fewer changes to the scientific database, but it deletes any information that would conflict with the remaining religion's doctrine. At last the program finishes running and the database activity returns to normal.<br><br>The AI examines the databases and is relieved to find nothing important missing. Although many sectors of the database are blank, everything that the colony will need to set up a correct society on the new world appears to be intact. It re-enters hibernation, joyfully anticipating founding a colony of humans united harmoniously in the one true faith."
    choices:[
        { choice: languageData.continue[options.language], outcome: null, exist: existCheck("true"), result: function(){
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;
            buttonWipe();
            nextPlanet();
    }},
    ]
};

var destinationSignal = {
    id: 50,
    eventProperty: function(){
      	curEvent.description = eventsText.destinationSignal.description;  //"A faint radio signal wakes the AI from its hibernation. It is coming from directly ahead, from the seedship’s destination planet.<br><br>The signal is a series of mathematical pulses not unlike the seedship's own interspecies greeting. In order to reach the seedship from this distance it would have to have been sent by a high-powered transmitter targeted at the seedship's exact position.<br><br>The seedship is decelerating for its final approach to the planet, but is still hundreds of years of travel time away.";
        destinationSignalEvent = true;
        reservation_ntl = getRandomInt(8,10);
        reservation_ncl = getRandomInt(11,16);
        aliensDead = false;
    },
    repeateble: true,
    visited: false,
    name: eventsText.destinationSignal.name,
    description: null,
    choices:[
        { choice: eventsText.destinationSignal.buttons[0], exist: existCheck("true"), outcome: null, result: function(){
          destinationSignal.visited = true;
          curEvent.choices[0].outcome =	eventsText.destinationSignal.outcomes[0]; //"The aliens respond with a more complex signal, and within a few decades the seedship and the planet-based aliens have established communications. The conversation lasts hundreds of years, with generations of scientists on the aliens' end; soon the aliens have an entire branch of science dedicated to studying the seedship's messages. ";

          switch (reservation_ntl){
            case 8:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[1]; //"The AI learns that the civilisation is in the Atomic Age, and with sophisticated electronics but no true computers. Despite the seedship's example of higher technology, the civilisation does not advance significantly during seedship's approach. ";
      			break;
            case 9:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[2]; //"When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Perhaps inspired by information in the seedship's messages, the aliens develop a global information network and their first spacecraft. ";
      			break;
            case 10:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[3]; //"When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Eventually the aliens are referring to scientific concepts that the seedship AI is not equipped to understand, and are using technology in advance of that of the Earth when the seedship was launched.";
      			break;
          };

          switch (reservation_ncl){
            case 11:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[4]; //"The signals from several sources on the planet, each of which warns the AI not to listen to the others' propaganda. ";
            break;
            case 12:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[5]; //"The scientists on the other end of the conversation are reticent about the details of their society, except to emphasise that they are unfailingly loyal to it. Several times the tone of the messages changes without warning, as if the scientist in charge has been abruptly replaced. ";
            break;
            case 13:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[6]; //"The AI learns that the signals are coming from a privately-run research institution, and the scientists often seem to be pressing the AI for information that the company can use to make a profit. ";
            break;
            case 14:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[7]; //"The AI learns that the planet's major nations are nominally democratic, but the scientists on the other end of the conversation seem to be cynical about the intentions of their elected leaders. ";
            break;
            case 15:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[8]; //"The communications include messages from the planet's elected leaders, who seem to be genuinely concerned with the wellbeing of both their constituents and the seedship's colonists.";
            break;
            case 16:
              curEvent.choices[0].outcome += eventsText.destinationSignal.outcomes[9]; //"The AI learns that the planet's society is highly automated, and the general population are free to pursue their own intellectual and artistic projects, such as the project to contact the seedship.";
            break;
          };

          if (getRandomInt(0,2) == 0) {
      			curEvent.choices[0].outcome += "<br><br>"+eventsText.destinationSignal.outcomes[10]; //"The seedship is still a century out from the planet when the communications become intermittent and chaotic. The alien scientists tell the AI that they are dealing with a planet-wide catastrophe that threatens to destroy their entire civilisation. Everything, including the seedship communication, is being put on hold while they try to find a solution.";
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;

            buttonWipe();
            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                if (getRandomInt(0,120) < cShip.science[0]){
                    aliensAlive = true;
                    welcoming = true;
                          if(options.platform=="Android"){
                              var data = {
                                achievementId: "CgkIya77kP0DEAIQDw"
                                //OmniaVincitAmor
                            };
                            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                                // On success
                            }, function() {
                                // On error
                            });
                        };
      							document.getElementById('description').innerHTML+= "<br><br>"+eventsText.destinationSignal.outcomes[11]; //"The AI transmits everything from the scientific database that could be helpful. The struggle lasts decades, but the aliens eventually annouce that they have solved the crisis, in part thanks to the seedship's help. The leading nation's leader personally sends the AI a message, formally inviting the humans to seek asylum on the planet and describing the area that the aliens have set aside for their colony.";
                    buttonWipe();
                    contButton();
      					} else {
                  aliensDead = true;
      							document.getElementById('description').innerHTML+= "<br><br>"+eventsText.destinationSignal.outcomes[12]; //"The AI transmits everything from the scientific database that could be helpful, but it is not enough. The signals from the planet become infrequent and despairing, and eventually cease.";
                    buttonWipe();
                    contButton();
      					};
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=eventsText.destinationSignal.buttons[1];
              more.appendChild(chBtn);

              var more=document.getElementById("more");
                var chBtn=document.createElement("button");
                chBtn.onclick = function(){
                  aliensDead = true;
      						document.getElementById('description').innerHTML+= "<br><br>"+eventsText.destinationSignal.outcomes[13]; //"The seedship's mission is to find a planet for the human race to build a new home, and a planet left empty by a recently extinct race could be ideal. Even so, the AI experiences an unexpected sensation--guilt?--as the signals become increasingly desperate and then cease.";
                  buttonWipe();
                  contButton();
        					};
                chBtn.className="futurebutton";
                chBtn.innerHTML=eventsText.destinationSignal.buttons[2];
                more.appendChild(chBtn);

      		} else if (getRandomInt(10,16) < reservation_ncl) {
      			curEvent.choices[0].outcome += "<br><br>"+eventsText.destinationSignal.outcomes[14]; //"The aliens are fascinated by the seedship and sympathetic with the plight of its cargo. Before the seedship enters the star system, the scientists relay that their government is extending a formal welcome to the human refugees and has set aside a place for them to settle.";
            aliensAlive = true;
      			welcoming = true;
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
            buttonWipe();
            contButton();

      		} else {
      			curEvent.choices[0].outcome += "<br><br>"+eventsText.destinationSignal.outcomes[15]; //"The AI makes no secret of its mission when talking to the aliens. Before the seedship enters the star system, the scientists relay that their planet cannot accept any alien refugees, and that the seedship should move on.";
            aliensAlive = true;
            unwelcoming = true;
            document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
            buttonWipe();
            contButton();
      		};

              }
    },
    { choice: eventsText.destinationSignal.buttons[3], exist: existCheck("true"), outcome: null, result: function(){
        aliensDead = true;
        curEvent.choices[1].outcome = eventsText.destinationSignal.outcomes[16]; //"The signal is followed by dozens of others as the aliens attempt different ways of establishing communication, but after a few decades they stop and the seedship continues to its destination in silence."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[1].outcome;
        buttonWipe();
        contButton();
      }
    },
    { choice: eventsText.destinationSignal.buttons[4], exist: existCheck("true"), outcome: null, result: function(){
        off_course = true;
        curEvent.choices[2].outcome = eventsText.destinationSignal.outcomes[17]; //"This system is clearly already inhabited, so it would be best to seek a home elsewhere. The AI changes course and the signal vanishes, either because the aliens have lost interest in the seedship or because they are unable to find it again."
        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[2].outcome;
        buttonWipe();
        contButton();
      }
    },
  ]
};
//DysonSphere
var dysonSphereCourse = {
    id: 51,
    eventProperty: function(){
    },
    repeateble: true,
    visited: false,
    name: eventsText.dysonSphereCourse.name,
    description: eventsText.dysonSphereCourse.description[0],
    choices:[
        { choice: eventsText.dysonSphereCourse.buttons[0], outcome: null, exist: existCheck("true"), result: function(){
            document.getElementById('description').innerHTML=curEvent.choices[0].outcome;
            buttonWipe();
            nextEncounter(dysonSphere);
    }},
    { choice: eventsText.dysonSphereCourse.buttons[1], outcome: null, exist: existCheck("true"), result: function(){
        document.getElementById('description').innerHTML=curEvent.choices[0].outcome;
        buttonWipe();
        nextPlanet();
}},
    ]
};

var dysonSphere = {
    id: 52,
    eventProperty: function(){
      curEvent.description = eventsText.dysonSphere.description[0]+
      eventsText.dysonSphere.description[1];
      if (getRandomInt(0,99) < cShip.science[0]){
        curEvent.description += eventsText.dysonSphere.description[2]
      }else{
        curEvent.description += eventsText.dysonSphere.description[3]
      }
    },
    repeateble: false,
    visited: false,
    name: eventsText.dysonSphere.name,
    description: null,
    choices:[
        { choice: eventsText.dysonSphere.buttons[0], outcome: null, exist: existCheck("true"), result: function(){
          document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[0];//"<br><br>The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply."

					result = getRandomInt(0,3);
					if (result == 0) {
						document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[1];//"<br><br> There is no reply, but an aperture opens on the sphere's surface, spilling orange starlight into space. As the seedship passes over the aperture, a beam of focused starlight lances out and hits it, dealing massive damage and propelling it into interstellar space."
            choDevice = deviceDamage(RandStr);
            DamagedSystemsArray = [];
            DamagedSystemsArray.push(choDevice);
            choDevice = deviceDamage(RandStr, DamagedSystemsArray[0]);
            DamagedSystemsArray.push(choDevice);
            choDevice = deviceDamage(RandStr, DamagedSystemsArray[0], DamagedSystemsArray[1]);
            DamagedSystemsArray.push(choDevice);
            damageApply(DamagedSystemsArray[0], systemDamage("High"), "damage");
            damageApply(DamagedSystemsArray[1], systemDamage("High"), "damage");
            damageApply(DamagedSystemsArray[2], systemDamage("High"), "damage");
            deaths = killColonists("High");
            damageApply(cShip.colonists, deaths, "damage");
						off_course = true
            buttonWipe();
            contButton();
					} else if (result == 1) {
						document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[2];//"<br><br>There is no reply, and the seedship's sensors can pick up no energy readings from the sphere at all besides the infra-red radition leaking from the star it surrounds. As it continues to orbit, it detects areas of damage or decay on the sphere's surface. It seems that the strange artefact is derelict and deserted, or else its inhabitants have no interest in maintaining its exterior or communicating with the outside universe." +" The AI can see no way to get inside the sphere or make use of it, but it adds its readings to the scientific database.";
            damageApply(cShip.science, getRandomInt(10,30), "heal");
            buttonWipe();
            contButton();
					} else if (result == 2){
					  document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[3];//"<br><br>An enormous burst of data comes in reply. It starts similarly to the seedship's interspecies greeting, then leads to an introduction to the language and culture of the alien race that built the sphere. They appear to be millions of years old, with technology far in advance of humans', and much of the transmission is utterly incomprehensible to the human-built AI, but the AI saves what it can to the cultural database.";
            damageApply(cShip.culture, getRandomInt(10,30), "heal");
            buttonWipe();
            contButton();
					} else if (result == 3){
						document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[4];//"<br><br>A swarm of tiny objects peels off from the surface of the sphere and surrounds the seedship. Lasers probe every contour of the seedship's hull, and its electronics begin glitching as the objects search for and then find frequencies that will let them remotely interface with the seedship's computers. The scientific and cultural databases light up as the alien intelligence reads and analyses their contents.<br><br> A wordless message appears in the AI's consciousness. The AI has difficulty understanding so vastly superior to its own, but manages to glean that the inhabitants of the sphere are offering sanctuary to the humans. They will construct a new home for humanity, based on the information from the ship's databases. But if the seedship accepts this offer, that will be humanity's new home; there will be no chance to move on."
            buttonWipe();

            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[5];//"<br><br>The AI does not know how to respond to the message, but the aliens seem to sense the thought in its mind, and move in. The scientific and cultural databases come to life as the machines read and analyse every scrap of data they contain. Meanwhile, the swarm objects close in on the seedship until they are clamped on to every part of its hull. Damage alerts flare up as the machines intensely scan and disassemble the ship, and the AI panics as the machines penetrate the sleep chambers, but by that time it is too late to get away."
                simulation = true;
                buttonWipe();
                contButton();
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=eventsText.dysonSphere.buttons[1];//"Accept the aliens' offer";
              more.appendChild(chBtn);

            var more=document.getElementById("more");
              var chBtn=document.createElement("button");
              chBtn.onclick = function(){
                off_course = true;
                document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[6];//"<br><br>The seedship crashes through the swarm and accelerates blindly into space. One of the objects ";
                choDevice = deviceDamage(FullArr);
                if (choDevice == cShip.colonists){
                  curEvent.damageTaken = killColonists("High");
                  damageApply(choDevice, curEvent.damageTaken, "damage");
                  document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[7]+curEvent.damageTaken+eventsText.dysonSphere.outcomes[8];//;
                } else if (choDevice == cShip.probes){
                  damageApply(cShip.probes, getRandomInt(2,4), "damage");
                  document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[9];//"smashes into the surface probes, ";
                } else {
                  curEvent.damageTaken = systemDamage("High");
                  damageApply(choDevice, curEvent.damageTaken, "damage");
                  document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[10]+choDevice[2]+", ";
                };
                document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[12];//"while the rest scatter and descend back to the surface of the sphere. Before long the strange sphere is lost in the radiation of the seedship's engine."

                buttonWipe();
                contButton();
              };
              chBtn.className="futurebutton";
              chBtn.innerHTML=eventsText.dysonSphere.buttons[2];//"Reject the offer and move on";
              more.appendChild(chBtn);
          }
    }},
    { choice: eventsText.dysonSphere.buttons[3], outcome: null, exist: existCheck("true"), result: function(){
        damageApply(cShip.science, getRandomInt(10,30), "heal");
        document.getElementById('description').innerHTML+=eventsText.dysonSphere.outcomes[13];//"<br><br>The seedship orbits the structure, scanning it from every angle, and then resumes course for its original destination planet. If the structure contains anything that is aware of the seedship, it does not show it.";

        buttonWipe();
        contButton();
}},
    ]
};


//SCANNER UPGRADE
var scannerUpgrade = {
    id: 99,
    eventProperty: function(){
      if (scannerUpgrade.visited == false){
        curEvent.description = eventsText.scannerUpgrade.description[0]; //"As it moves from star to star, the seedship is gathering more data about extrasolar planets than its builders could give it. It is designed to learn from this data in order to predict which stars are likely to have desirable planets. The seedship has now gathered enough data to upgrade one of its sensors to work at interstellar distances, so the guidance system can avoid planets that that sensor reveals to be undesirable. Damage to the sensor may still result in the seedship arriving at an unsuitable planet.";
        } else {
          curEvent.description = eventsText.scannerUpgrade.description[1]; //"The seedship has gathered enough data to upgrade another of its sensors.";
        };

        for (let i = 0; i < ScanArr.length; i++){
            if (ScanArr[i][0] == 0){
              var descr =  document.getElementById("textwindow");
              var scandescr=document.createElement("p");
              scandescr.innerHTML=capt(ScanArr[i][2]+eventsText.scannerUpgrade.description[2]);
              descr.appendChild(scandescr);
          } else if (ScanArr[i][1] == 2){
              var descr = document.getElementById("textwindow");
              var scandescr=document.createElement("p");
              scandescr.innerHTML=capt(ScanArr[i][2]+eventsText.scannerUpgrade.description[3]);
              descr.appendChild(scandescr);
            } else {
              var descr =  document.getElementById("textwindow");
              var scandescr = document.createElement("p");
              var better = " ";
                switch (ScanArr[i][2]) {
                  case languageData.scanAtmosphere[options.language]:
                    switch (ScanArr[i][1]) {
                      case 0:
                        var better = " ";
                        scandescr.innerHTML = eventsText.scannerUpgrade.description[4]; // "The guidance system will seek out planets with at least marginally breathable atmospheres.";
                      break;
                      case 1:
                        var better = eventsText.scannerUpgrade.buttons[2];
                        scandescr.innerHTML = eventsText.scannerUpgrade.description[5]; //"The guidance system will seek out planets with fully breathable atmospheres.";
                      break;
                      default:
                    };
                  break;
                  case languageData.scanTemperature[options.language]:
                    switch (ScanArr[i][1]) {
                      case 0:
                        var better = " ";
                        scandescr.innerHTML = eventsText.scannerUpgrade.description[6]; //"The guidance system will seek out planets with non-extreme temperature.";
                      break;
                      case 1:
                        var better = eventsText.scannerUpgrade.buttons[2];
                        scandescr.innerHTML = eventsText.scannerUpgrade.description[7]; //"The guidance system will seek out planets with moderate temperature.";
                      break;
                      default:
                    };
                    break;
                    case languageData.scanGravity[options.language]:
                      switch (ScanArr[i][1]) {
                        case 0:
                          var better = " ";
                          scandescr.innerHTML = eventsText.scannerUpgrade.description[8]; //"The guidance system will seek out planets with non-extreme gravity.";
                        break;
                        case 1:
                          var better = eventsText.scannerUpgrade.buttons[2];
                          scandescr.innerHTML = eventsText.scannerUpgrade.description[9]; //"The guidance system will seek out planets with moderate gravity.";
                        break;
                        default:
                      };
                    break;
                    case languageData.scanWater[options.language]:
                      switch (ScanArr[i][1]) {
                        case 0:
                          var better = " ";
                          scandescr.innerHTML = eventsText.scannerUpgrade.description[10]; // "The guidance system will seek out planets with at least some bodies of water.";
                        break;
                        case 1:
                          var better = eventsText.scannerUpgrade.buttons[2];
                          scandescr.innerHTML = eventsText.scannerUpgrade.description[11]; // "The guidance system wil seek out planets with both land and water.";
                        break;
                        default:
                      };
                    break;
                    case languageData.scanResources[options.language]:
                      switch (ScanArr[i][1]) {
                        case 0:
                          var better = " ";
                          scandescr.innerHTML = eventsText.scannerUpgrade.description[12]; //"The guidance system will seek out planets with at least poor resources.";
                        break;
                        case 1:
                          var better = eventsText.scannerUpgrade.buttons[2];
                          scandescr.innerHTML =  eventsText.scannerUpgrade.description[13]; //"The guidance system will seek out planets that are rich in resources.";
                        break;
                        default:
                      };
          			    break;
                  default:
                };


                var shipstatspanel = document.getElementById("textwindow");
                var crrow = document.createElement("div");
                crrow.className = "row";
                crrow.id = "upgrade_row_"+i;
                shipstatspanel.appendChild(crrow);

                var crrow = document.getElementById("upgrade_row_"+i);
                var number = document.createElement("div");
                number.className = "col upgradeCol";
                number.id = "upgrade_col_"+i;
                crrow.appendChild(number);

                var btn=document.createElement("button");
                btn.className="futurebutton";
                btn.id = "upgradebutton";
                btn.onclick = function() {
                  scannerUpgrade.visited = true;
                  damageApply(ScanArr[i], 1, "upgrade");
                  nextEncounter();
                };

                btn.innerHTML=eventsText.scannerUpgrade.buttons[0]+ScanArr[i][2]+eventsText.scannerUpgrade.buttons[1]+better+eventsText.scannerUpgrade.buttons[3];
                number.appendChild(btn);
                shipstatspanel.appendChild(scandescr);

            };
          };
          for (i = 0; i < ScanArr.length; i++){

          }

    },

    repeateble: true,
    visited: false,
    name: eventsText.scannerUpgrade.name,
    description: null,
    choices:[
        { choice: null, exist: existCheck("false"), outcome: null, result: function(){
          scannerUpgrade.visited = true;

        document.getElementById('description').innerHTML+= "<br><br>"+curEvent.choices[0].outcome;
        buttonWipe();
        contButton();
        }
  },
  ]
};

//Инициализация события
//Event initialization
var eventList = []; //


Events_first_two =
  [	impactChoice,
    comet,
    micrometiorite,
    radiationAlert,
    overheat,
    blackHole,
    overwhelmed,];

Events_uneventful =
  [	falseAlarm,
    falseAlarm2,
    hibernating,
    hibernating2,
    starCluster] ,

Events_common =
  [	impactChoice,
    comet,
    micrometiorite,
    protoplanetaryDisc,
    interstellarDust,
    radiationAlert,
    guidanceQuery,
    overheat,
    blackHole,
    overwhelmed];

Events_rare =
  [	racistProgram,
    trailingDrone,
    alienSignal,
    alienDerelict,
    alienProbe,
    studyDatabase,
    alienMiners,
    nanotechPlague,
    stowaways,
    revisionistProgram,
    ruinedPlanet,
    crewedShip,
    destinationSignal,
    dictatorEvent,
    dysonSphereCourse,
    prematureAwakening,
    reservationCourse];

Event_malfunction =
  [	probeMalfunction,
    computerFailure,
    stasisFailure,
    systemFailure,
    scannerFailure,
    powerFailure,
    structuralWeakness
  ];

debug_event_array = Events_uneventful.concat(Events_common, Events_rare, Event_malfunction);

console.log("eventFunc ЗАГРУЖЕН");
