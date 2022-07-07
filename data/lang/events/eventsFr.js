var eventsText = {

  //UNEVENTFUL
  unsuitable: {
    name: "Unsuitable",
    description: "The AI judges the first planet to be unsuitable. It turns its scanners away, spreads its solar sails, and begins another long journey through the void.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm: {
    name: "False Alarm",
    description: "Deep in space, the AI wakes suddenly to an alert from the medical monitoring program. It anxiously checks the colonists, but finds that there is no problem, and the alert was a glitch. Nevertheless, the AI spends some time watching its sleeping charges, reassuring itself that they are all alive, before it joins them again in sleep.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  falseAlarm2: {
    name: "False Alarm",
    description: "The AI is woken from its hibernation by a possible malfunction warning, but a systems check reveals that it was a false alarm. Far from the nearest star, the AI spends some time admiring the cold beauty of the Milky Way as revealed by its navigation sensors, before returning to hibernation to wait for its arrival in the next system.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating: {
    name: "Hibernating",
    description: "The next star chosen by the guidance system is on the other side of a great void, with no stars for dozens of light years. The AI hibernates for the millennia-long journey through utter emptiness.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  hibernating2: {
    name: "Hibernating",
    description: "For centuries the seedship drifts towards its next destination, very nearly inert, the AI hibernating and only the simple collision avoidance and damage monitoring systems ticking over.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  starCluster: {
    name: "Star Cluster",
    description: "The seedship's course takes it through a dense star cluster, and while the AI sleeps the guidance system weaves a complex course through the stars' overlapping gravitational fields.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  //COMMON
  overheat: {
    name: "Overheat",
    description: [
      "The AI wakes to a wall of blinding brightness. The seedship's course has taken it close to a super-giant star that has proved to be far hotter than the guidance system anticipated, and the ship is gathering heat faster than the radiator fins can radiate it away. The AI must shut down part of the heat regulation system before the entire system catastrophically fails.",
      "The guidance system takes the seedship too close to another superhot star, and the AI must choose which module it will allow to overheat.",
    ],
    outcomes: [
      //0
      "The AI channels excess heat into the sleep chambers. The heat regulation system recovers as the ship moves away from the super-hot star, but not before ",
      " colonists have sustained tissue damage too severe for them to be successfully revived.",
      //1 - 2 - 3 same text
      "The AI channels excess heat into the ",
      ". The heat regulation system recovers as the ship moves away from the super-hot star, but not before the heat has damaged the ",
      "",
    ],
    buttons: ["Allow the sleep chambers to overheat",
      "Allow the scanner module to overheat",
      "Allow the landing/construction module to overheat",
      "Allow the data storage module to overheat",
    ],
  },

  radiationAlert: {
    name: "Radiation Alert",
    description: [
      "The AI wakes to a radiation alert: the death burst of a distant supernova is flooding the seedship's electronics with random signals. ",
      "The sleep chambers are malfunctioning, and in a few moments some of them will shut down.",
      "One of the surface probes is malfunctioning, and in a few moments it will be destroyed.",
      "The data storage system is malfunctioning, and in a few moments part of the ",
      " will be lost.",
      "The ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
      " is malfunctioning, and in a few moments it will be permanently damaged.",
      " The seedship could avoid the malfunction by shutting down all its electronics until the radiation has passed, but that would leave it without a working collision avoidance system for a dangerous length of time.",
      " A surge of supernova radiation crackles through ",
      "one of ", //one of the probes damaged
      " the ", //Leave as "" if there is no such construction in your language. Here it goes before SYSTEMNAME
      ". ",
      "The AI can allow it to be damaged, or shut down and risk a collision.",

    ],
    outcomes: [
      //0
      "The AI shuts down all the ship's systems and then itself. When it comes back online the radiation has passed, ",
      "but a small asteroid has torn through the sleep chambers, killing ",
      " colonists.",
      "but a small asteroid has smashed one of the surface probes.",
      "but a small asteroid has torn a hole in the ",
      "and to its relief a systems check reveals no damage.",
      //1
      "The AI keeps its focus on the collision avoidance system while",
      " colonists die in their sleep.",
      "the surface probe tears itself apart.",
      " parts of the ",
      " are overwritten with garbage.",
      " the radiation wrecks delicate components deep in the ",
      ".",
      "The AI can allow it to be damaged, or shut down and risk a collision.",
    ],
    buttons: ["Shut down",
      "Don't shut down",
    ],
  },

  overwhelmed: {
    name: "Overwhelmed",
    description: [
      "The seedship's course takes it through a dense star-forming nebula. Hundreds of infant suns illuminate clouds of interstellar gas and fill the sky with riotous color. Clouds twist through complex gravitational interference patterns and glitter with heavy elements formed in the death throes of the last generation of stars. ",
      "<br><br>The scanners were not designed to deal with this level of input, and it is threatening to overwhelm them. If the AI continues to use the scanners to navigate, it can tell that the ",
      " will be damaged. Shutting off the scanners, however, would leave the seedship vulnerable to collisions in this crowded area of space. ",
      "The seedship's course takes it through another star-forming nebula, whose intense sensory impulses threaten to overload the",
      ".",
      "<br><br>The seedship's course takes it through another star-forming nebula. With no functioning scanners, it has no option but to fly blind through the dangerous area.",
    ],
    outcomes: [
      //0
      "The AI continues to use the scanners to navigate. The ", // The SCANNERNAME overloads
      " overloads, but the seedship passes safely through the star-forming nebula.",
      //1
      "The AI calculates a course that it thinks will avoid obstacles, then shuts down the scanners. ",
      "The seedship enters the nebula.",
      "Flying blind, it has no way of detecting the dense cloud of dust that buffets the ship and",
      "damages ", " sleep chambers.",
      "knocks loose one of the surface probes.",
      "wears away at the ",
      ".",
      " To its relief, when it judges that it is out of danger and reactivates the scanners, there is no damage.",
    ],
    buttons: ["Keep the scanners running",
      "Fly blind",
    ],
  },

  guidanceQuery: {
    name: "Guidance Query",
    description: [
      "The AI wakes to a query from the automatic guidance system. Normally the system is able to analyze the data from the navigation sensors and make any necessary changes to the ship's course, but this time it has encountered readings it cannot make sense of and has woken the AI to make a decision. " + "<br><br>" + "According to some sensors there is something ahead on the ship's course, but according to others the course ahead is clear. If there is something there, it is close enough that avoiding it would mean changing course and arriving at a new system without the benefit of the upgraded scanners.",
      "The AI wakes to another query from the navigation system: sensor readings are unclear, and there may or may not be something on the ship's current course.",
    ],
    outcomes: [
      //0
      "The AI instructs the guidance system to avoid the anomaly and choose a new target system. It continues to monitor the sensor readings as the ship passes the position of the anomaly, but the readings never become clear enough to reveal whether the course change was necessary.",
      //1
      "The AI instructs the guidance system to stay on course. By the time the sensors get a clear picture of the utterly black, unreflective dust cloud, it is too late to avoid it. The seedship continues towards its target system but a dust particle impacts ",
      ".",
      "The AI instructs the guidance system to stay on course. To its relief, the anomaly resolves into a sensor glitch, and the seedship speeds through empty space to its target system.",
    ],
    buttons: ["Change Course",
      "Stay on course",
    ],
  },

  interstellarDust: {
    name: "Interstellar Dust",
    description: [
      "The seedship is decelerating on its approach to the next system when it detects an unusually thick volume of interstellar dust in its path. Passing through the dust would likely mean several high-velocity collisions with dust particles. The AI could execute an emergency course change to avoid the dust, but then the seedship would pass this system by and arrive at an effectively random one, without benefiting from the upgrades to its scanners.",
      "The seedship detects another area of dense interstellar dust on its path to the new system. It can plough through the dust and take damage, or change course and arrive at a new system without benefiting from its upgraded scanners.",
    ],
    outcomes: [
      //0
      "The AI rotates the ship and fires the main engine. It speeds safely past the dust cloud and the original target system, and decelerates towards the first system it finds on its new course.",
      //1
      "The AI holds the course steady as dust particles batter the ship. A severe impact damages the ",
      " and ",
      ".",
    ],
    buttons: ["Emergency course change",
      "Plough through the dust",
    ],
  },

  comet: {
    name: "Comet",
    description: [
      "As the seedship enters the new system's outer cometary cloud, the collision-avoidance system detects a fast-moving comet surrounded by a cloud of smaller ice fragments. The large comet is on a collision course with the ",
      ". The seedship could avoid it entirely, but it would then hit one of the smaller fragments, and the collision-avoidance system cannot predict which part of the ship that fragment would hit.",
      "Once again the seedship cannot avoid a collision with one of the new star's outer cloud of comets. The AI can allow it to hit the ",
      ", or change course and have a smaller fragment hit an unpredictable system.",
    ],
    outcomes: [
      //0
      "The seedship changes course, but an ice fragment tears through ",
      " of the sleep chambers.",
      "The seedship changes course, but an ice fragment smashes one of the surface probes out of its moorings.",
      "The seedship changes course, but an ice fragment tears through the ",
      ".",
      //1
      "The comet shatters against the sleep chambers, killing ",
      " colonists.",
      "The comet shatters against one of the surface probes, destroying it.",
      "The comet shatters against the ",
      ", crushing vital components.",
    ],
    buttons: ["Avoid the comet",
      "Allow it to hit the ",
      "",
    ],
  },

  blackHole: {
    name: "Black Hole",
    description: [
      "The AI wakes to find that the seedship's course is curving sharply through the darkness of space, as if caught in the gravity well of a star. The source of the gravity is invisible to the scanners, but there is only one thing it could be: a black hole.",
      "It is already too late to escape the gravity well without pushing the main engine well past its safety limit, which could damage any of the ship's systems. Alternatively, the AI calculates that ejecting ",
      " sleep chambers would lighten the ship enough that the engine's normal thrust could take it out of danger.",
      "The AI wakes to find that the seedship has been caught in the gravity of another black hole. It must choose whether to push the main engine past its safety limit, or eject ",
      " sleep chambers in order to lighten the ship.",
    ],
    outcomes: [
      //0
      "Sacrificing some of its charges to save the rest is painful for the AI, but it is a decision that its designers prepared it to make. It ",
      " sleep chambers at random and decouples them from the ship. They and their unlucky occupants spiral towards the black hole's event horizon, while the rest of the seedship pushes itself free.",
      //1
      "The AI commands the engine to exceed its maximum output, ignoring its electronic screams of protest.",
      "The ship feels as if it is shaking itself apart, but when the burn is complete and the seedship is coasting safely away from the black hole, the AI finds that its builders gave the engine a generous safety margin and the overload has caused no damage.",
      "Small explosions shake the ship as components collapse under the strain. Once the ship is safely coasting away from the black hole and the AI can assess the damage, it finds that the engine overload has damaged ",
      " and ",
      ".",
    ],
    buttons: ["Jetisson ", " sleep chambers",
      "Push the main engine past its safety limit",
    ],
  },

  impactChoice: {
    name: "Impact Choice",
    description: [
      "An alarm wakes the AI from its hibernation. A rogue asteroid is on a collision course with the ship; the automatic navigation system has failed to avoid it, and has woken the AI to make the split-second decision of how to deal with the impact. The asteroid is about to hit the ",
      ". There is no time to avoid it entirely, but if the AI fires the manoeuvring thrusters to rotate the ship it will instead hit the ",
      ".",
      "Once again the AI wakes suddenly to find an asteroid on a collision course with the ship. The AI can allow it to hit the ",
      " or rotate so it hits the ",
      ".",
    ],
    outcomes: [
      //0
      "The asteroid tears into the sleep chambers, killing ",
      " colonists.",
      "The asteroid knocks one of the surface probes out of its moorings and sends it spinning into space.",
      "The asteroid tears into the ",
      ", sending fragments spinning away into space.",
      //1 has same lines, but unlike in overheat, here I decided to copy it, so that i can add up some text about rotation of the ship
      "The asteroid tears into the sleep chambers, killing ",
      " colonists.",
      "The asteroid knocks one of the surface probes out of its moorings and sends it spinning into space.",
      "The asteroid tears into the ",
      ", sending fragments spinning away into space.",
    ],
    buttons: ["Allow it to hit the ",
      "Rotate so it hits the ",
      "",
    ],
  },

  micrometiorite: {
    name: "Micrometiorite",
    description: [
      "As it enters the new system, the seedship is struck by a micrometeorite.",
      " It is a speck of cosmic dust, far too small for the navigation system to detect from a distance, but travelling with enough velocity to pierce the seedship's armour like a bullet.",
    ],
    outcomes: [
      //0
      "It hits the sleep chambers, leaving a straight line of tiny punctures from which air and cooling fluid vents into the vacuum. The seedship's AI can only watch helplessly as ",
      " colonists die in their sleep.",
      "It hits one of the surface probes and destroys it.",
      "It hits the ",
      ", sending fragments of machinery glittering into space.",
    ],
    buttons: [languageData.continue[options.language]
    ],
  },

  //MALFUNCTIONS
  probeMalfunction: {
    name: "Probe Malfunction",
    description: [
      "The clamps that once held the surface probes to the seedship's side twitch as their control system malfunctions, but with all the probes gone the malfunction can do no harm.",
      "Deep in the interstellar void, the AI is jolted awake by a malfunction warning: one of the surface probes has activated unexpectedly. Perhaps a chance encounter with cosmic radiation tripped something in its electronics, or perhaps a flaw in its manufacture finally manifested itself. Whatever the reason, at any moment the probe's drill or engines could come to life. If this happens while the probe is still docked with the ship, it is likely to damage one of the other systems.",
      "Another of the ageing surface probes malfunctions. The AI must decide whether to jettison it, or try to control it and risk letting it damage another system.",
    ],
    outcomes: [
      //0
      "The ship's circuits light up with frantic commands from the AI to the probe. After thousands of AI cycles--a fraction of a second in real time--the AI identifies and corrects the problem in the probe's programming. The probe shuts down, awaiting the time when it will be of use.",
      "The rogue probe tears into the sleep chambers, drilling into chamber after chamber and happily transmitting that it has detected organic material as the colonist inside dies. At last the AI finds the command to shut it down, but not before ", " colonists have been killed.",
      "The rogue probe tears into the ",
      ", badly damaging it before the AI finds the command to shut it down.",
      //1
      "The surface probe streaks away into the darkness, sensors bristling as it tries to scan a planet where there is none.",
    ],
    buttons: ["Attempt to bring the probe under control",
      "Jettison the probe"
    ],
  },

  computerFailure: {
    name: "Computer Failure",
    description: [
      "Cosmic radiation continues to sleet through the irradiated data sectors that once stored the scientific and cultural databases, but with both databases destroyed there is no further damage it can do.",
      "Cosmic radiation bombards the ship, causing data storage areas to fail. The scientific database is already destroyed, and now the historical information and artworks stored in the cultural database gradually slip away.",
      "Cosmic radiation bombards the ship, causing data storage areas to fail. The cultural database is already destroyed, and now the wealth of knowledge stored in the scientific database gradually slips away.",
      "The seedship's computer systems are shielded, multiply redundant, designed to work for millennia, but the incessant sleet of cosmic radiation is nevertheless taking its toll. Storage areas are failing, and soon there will not be enough space to store",
      " all the data with which the seedship began its journey.",
      " all the data that has survived so far.",
      "	what little data remains.",
      "<br>The AI can move data out of the most damaged sectors to protect either the scientific or the cultural database, but not both.",
      "Cosmic radiation continues to bombard the data storage area, and the AI must once again choose whether to save which database to save from damage.",
    ],
    outcomes: [
      //0
      "The AI moves data to save the scientific database, and sectors containing the cultural database gradually fail. Cultural guidance for new colonists, records of human history, great paintings, novels, symphonies, videogames--all lost forever in the dark.",
      //1
      "The AI moves data to save the cultural database, and sectors containing the scientific database gradually fail. Scientific guidance written for the new colonists, humanity's best theories of the universe, the life's work of tireless scientists over the centuries--all lost forever in the dark.",
    ],
    buttons: ["Save the scientific database",
      "Save the cultural database",
      languageData.continue[options.language],
    ],
  },

  stasisFailure: {
    name: "Stasis Failure",
    description: [
      "The sleep chambers can keep the colonists frozen and capable of revival for thousands of years, but not forever. The medical monitoring program wakes the AI from hibernation to report that ",
      " colonists have died in their sleep.",
      "The seedship's ancient systems continue to decay, and the AI wakes deep in interstellar space to learn that ",
      " more colonists have died in their sleep.",
    ],
    outcomes: [],
    buttons: [languageData.continue[options.language],
    ],
  },

  systemFailure: {
    name: "System Failure",
    description: [
      "The components of the landing and construction system continue to decay, but they have already been damaged past usefulness.",
      "The aging seedship can no longer maintain its landing system.",
      "The aging seedship can no longer maintain its construction system.",
      "The seedship's body is designed to form the core of an initial settlement once it has landed on an alien planet, so the landing and construction systems share many components. As the seedship ages, these components are starting to decay, but the AI can focus on preserving the landing system or the construction system.",
      "The landing and construction systems continue to decay, and the AI must once again choose which one it will focus on preserving.",
    ],
    outcomes: [
      //0
      "The AI focuses on preserving the construction system, and allows the landing system to decay.",
      //1
      "The AI focuses on preserving the landing system, and allows the construction system to decay.",
    ],
    buttons: ["Preserve the construction system",
      "Preserve the landing system",
      languageData.continue[options.language],
    ],
  },

  scannerFailure: {
    name: "Scanner Failure",
    description: [
      "The scanner recalibration system is decaying, but this no longer matters since all the scanners are destroyed and the seedship is effectively blind.",
      "Each time the seedship departs from a star system its scanners are recalibrated so that they continue to return accurate information. The recalibration system is now decaying with age, and is no longer able to maintain them all. The AI must choose which of the scanners it will allow to fail.",
      "The scanner recalibration system continues to decay, and once again the AI must choose which scanner it will allow to fail.",
    ],
    outcomes: [
      //0
      "As the seedship accelerates into space, the atmosphere readings from the system it is leaving become clouded with noise.",
      //1
      "As the seedship accelerates into space, the temperature readings from the system it is leaving become clouded with noise.",
      //2
      "As the seedship accelerates into space, the gravity readings from the system it is leaving become clouded with noise.",
      //3
      "As the seedship accelerates into space, the water readings from the system it is leaving become clouded with noise.",
      //4
      "As the seedship accelerates into space, the resources readings from the system it is leaving become clouded with noise.",
    ],
    buttons: ["Let the atmosphere scanner fail",
      "Let the temperature scanner fail",
      "Let the gravity scanner fail",
      "Let the water scanner fail",
      "Let the resources scanner fail",
      languageData.continue[options.language],
    ],
  },

  powerFailure: {
    name: "Power Failure",
    description: [
      "The seedship's small nuclear power plant has lasted far longer than the civilisation that created it, but now it is beginning to fail. While the ship is near a star the solar panels still provide as much power as the systems need, but in deep space, fluctuations in the power supply are causing worrying malfunctions throughout the ship. <br><br>Between stars, the largest drain to the power supply comes from the sleep chambers. The seedship calculates that shutting off ",
      " chambers would take enough strain off the power supply to allow the ship to continue running. Saving all the colonists would mean allowing the failing power system to damage other parts of the ship.",
      "The ancient nuclear power plant is failing once again. The AI can shut down ",
      " sleep chambers to reduce its load, or keep them running and risk unpredictable system failures.",
    ],
    outcomes: [
      //0
      "The AI selects ",
      " sleep chambers at random and shuts off their power. There is no visible change as the humans inside transition from frozen sleep to frozen death, but the AI knows that they can now never be revived.",
      //1
      "The AI ignores the power system's warnings. Stars seem to jump in the sky as power fluctuations put the AI offline for millennia at a time. Eventually the power supply stabilises: the ",
      " have deteriorated to the point that they are no longer draining as much power, so the ancient power plant is sufficient once again.",
      " and ",
    ],
    buttons: ["Shut off ",
      " sleep chambers to preserve power",
      "Save the colonists at any cost",
    ],
  },

  structuralWeakness: {
    name: "Structural Weakness",
    description: [
      "The seedship's damage control system wakes the AI with a medium-priority alert. There is a structural weakness in the ",
      ", caused by the incessant wear of thousands of years of travel. The system is still intact for the moment, but when the seedship decelerates into the next system the vibration will shake important components loose.",
      "The damage control system detects a structural weakness in the ",
      ". It will suffer damage when the ship decelerates into the next system.",
      "<br><br>Since the ship has no more surface probes, the AI can see no way to reinforce the ",
      ".",
    ],
    outcomes: [
      //0
      "The AI ignores the warning and begins its deceleration. The weak ",
      " rattles under the vibrations filling the ship, and some of its components work themselves loose and tear through delicate circuitry before whirling away into space.",
      //1
      "The probe crawls across the ship's hull and clamps itself onto the ",
      ", its sturdy body becoming a new superstructure keeping the loose components in place. The AI suspects that this improvised solution would have horrified the seedships designers, but when the ship decelerates into the next planet's orbit the probe manages to hold the ",
      " together.",
      "The probe crawls across the ship's hull and attemps to attach itself to the ",
      ", but the system was even weaker than the damage sensors indicated and it disintegrates as soon as the probe touches it. The probe spins away into space, a large chunk of the ",
      " held uselessly in its manipulator claws.",
    ],
    buttons: ["Let the ",
      " fail",
      "Attempt to reinforce it using a surface probe",
    ],
  },

  protoplanetaryDisc: {
    name: "Protoplanetary Disc",
    description: [
      "The seedship's course takes it close to a newly-formed star that is still surrounded by a protoplanetary disc: a whirling chaos of incandescent gas and molten rocks that the young star's gravity has gathered from the star-forming cloud, and which is now undergoing the countless violent collisions that will eventually form it into a planetary system. There can be no home for humanity here, but passing through the disc would give the AI enough data about planet formation to upgrade one of its scanners. It is a dangerous region, however, and passing through would risk collision with a planetesimal.",
      "The seedship's course takes it close to another protoplanetary disc. Passing through it would yield enough data to upgrade another of the scanners, but risk a collision.",
    ],
    outcomes: [
      //0
      "The seedship has no intact scanners that can be further upgraded,",
      "The seedship observes a young planet gathering atmosphere from the cloud,",
      "The seedship observes a still-molten planet glowing with heat,",
      "The seedship observes the gravitational interactions of a group of planetessimals,",
      "The seedship observes a young planet engulfed in thick clouds of water vapour,",
      "The seedship observes a young planet made of nearly pure iron,",
      " and ",
      " but ",
      "one of the whirling planetesimals hits the ",
      ".",
      "passes through the disc safely.",
    ],
    buttons: ["Change course to pass through the disc",
      "Ignore the protoplanetary disc",
    ],
  },

  racistProgram: {
    name: "Racist Program",
    description: [
      "An alert from the sleep chambers jolts the AI awake. Chambers across the ship are executing their shutdown command, and in a few moments the colonists within them will die.<br><br> The AI traces the shutdown command to a rogue program hidden in the control software of the ",
      ". The program is targeting colonists with a particular set of genetic characteristics. A message embedded in the program, apparently meant to be found by the colonists after landing, talks about purging humanity of an inferior race. <br><br> The program is affecting ",
      " sleep chambers. The AI cannot stop it in time to save the colonists without damaging the ",
      ".",
    ],
    outcomes: [
      //0
      "The AI frantically purges data from the ",
      " until it has wiped the rogue program and the sleep chambers return to normal.",
      //1
      "The AI is programmed to treat all of its colonists equally, but also to make tough choices regarding their survival, and it decides that those lives are less important to humanity's survival than the ",
      ". The rogue program finishes, leaving its triumphant message for the colonists to find, and the medical monitoring program reports that those ",
      " colonists have transitioned from frozen sleep to frozen death."
    ],
    buttons: ["Stop the program",
      "Allow the program to run",
    ],
  },

  trailingDrone: {
    name: "Trailing Drone",
    description: [
      "The seedship's radio antenna receives a signal that the AI thought it would never hear again: the handshake code used by the computers of ground control, back when the seedship was in Earth orbit and preparing for its voyage. It seems to be coming from a system off the seedship's current course.",
    ],
    outcomes: [
      //0
      //1
      "The seedship continues on its course. The AI listens as the signal fades and then vanishes, just as the original signal from ground control did at the start of the seedship's voyage."
    ],
    buttons: ["Change course",
      "Ignore the signal",
    ],
  },

  trailingDroneMistake: {
    name: "Trailing Drone Mistake",
    description: [
      "The seedship arrives in the new system, but the AI finds that it can no longer detect the ground control signal. A malfunction in the radio antenna must have triggered old computer protocols and led to the AI's false hope. The AI grieves the loss of ground control once again, and then turns its sensors on the system in which it has arrived.",
    ],
    outcomes: [
      //0
      //1
    ],
    buttons: [languageData.continue[options.language],
    ],
  },

  trailingDroneReal: {
    name: "Trailing Drone Real",
    description: [
      "The seedship tracks the signal to a small object orbiting in star's outer cometary cloud. The seedship AI transmits a greeting, and the object identifies itself as a support drone, launched after the seedship and sent to track and rendezvous with it.",
      "<br><br>It claims to carry duplicates of the seedship's original scientific and cultural databases to repair any damage the seedship might have suffered.",
      "<br><br>It claims to carry a swarm of robots that can repair damage to the seedship's scanners and systems.",
    ],
    outcomes: [
      //0
      "The two robot ships attempt to rendezvous, but the drone's damaged guidance system malfunctions and it collides with the seedship's ",
      ".",
      "The probe matches course with the seedship and transmits its data, ",
      "which confirms that the scientific and cultural databases are already intact.",
      "which restores lost parts of the cultural database.",
      "which restores lost parts of the scientific database.",
      "which restores lost parts of the scientific and cultural databases.",
      "Repair robots swarm across the seedship and check its systems for integrity, but find nothing they can repair.",
      "Repair robots swarm across the seedship, dismantling the drone and using its parts to repair the seedship's systems.",

      //1
      "The seedship continues towards the inner system, and the folorn ping of the drone fades away behind it.",
    ],
    buttons: ["Accept data transfer",
      "Accept repairs",
      "Ignore the drone",
    ],
  },

  dictatorEvent: {
    name: "Dictator",
    description: [
      "A minor power fluctuation in one of the sleep chambers wakes the AI from hibernation. It fixes the malfunction easily, but in the course of doing so it notices another anomaly: the colonist's bio-signs do not match those of the identity on file for that chamber.<br><br>",
      "The AI searches its databanks for information on the mysterious colonist, and finds some in an unexpected place: the historical files in the cultural database. The colonist is a former dictator, who headed a brutally oppressive regime in one of Earth's nations for decades before being deposed and going into hiding. Not only that, but the AI detects hidden programming connected with that sleep chamber that would give the dictator full control over all the seedship's systems immediately after landing. With those protocols, the dictator could easily take over the new colony as soon as it was founded.",
      "The AI cannot find any information on the mysterious colonist, but it detects hidden programming connected with that sleep chamber that would give them full control over all the seedship's systems immediately after landing. With those protocols, the sleep chamber's inhabitant could easily themselves up as dictator of the fledgeling colony.",
    ],
    outcomes: [
      //0
      "It is difficult for the AI to deliberately end the life of a human being, but it judges it is necessarily in this instance. The dictator's frozen body spins away into interstellar space, their coup unceremoniously ended before it can begin.",
      "Alarms blare in the AI's consciousness. The dictator's sleep chamber was unaffected, but ",
      " other sleep chambers have been ejected into space, with no way for the seedship to retrieve them. It seems that the dictator was paranoid enough to foresee the seedship's assassination attempt, and up a program that rerouted the ejection command from their sleep chamber to a random selection of others.",
      //1
      "The AI's mission is to preserve all remaining human life, even the worst examples of it. The dictator will be the colonists' problem after the seedship lands.",
    ],
    buttons: ["Eject the dictator's sleep chamber",
      "Let the dictator sleep",
    ],
  },

  alienSignal: {
    name: "Alien Signal",
    description: [
      "Deep in space, the seedship's radio antenna picks up a signal so complex and structured that it can only be the product of intelligent life. The seedship can detect no interesting star systems in the direction from which the signal came, and the AI has no way of knowing how long the signal had been travelling for before the seedship crossed its path. Analysing it could provide unique insights into an alien science and culture, but could also prove dangerous.",
    ],
    outcomes: [
      //0
      "poetry", "music", "art", "literature",
      "The AI analyses the signal and determines that it contains what seems to be alien print ",
      ". It does not know whether it has stumbled upon a message cast into the void with the intention that it will be found, or simply intercepted an alien entertainment broadcast, but in either case it will be of interest to the colonists when they wake from their hibernation.",
      "The AI analyses the signal and determines that it contains what seems to be alien scientific information. It does not know whether it has stumbled upon a message cast into the void with the intention that it will be found, or simply intercepted an alien informational broadcast, but in either case it will be of interest to the colonists when they wake from their hibernation.",
      "The signal is complex, fractal, hypnotic. The AI sets up a subroutine to analyse it, but nanoseconds later it abruptly loses control of the subroutine, and then the seedship's other systems. The signal is a devious semi-sentient computer program, designed to take control of any processor that attempts to analyse it. The AI eventually regains control of the ship, but not until the program has overwritten parts of the scientific and cultural databases to process itself and then used the seedship's antenna to re-broadcast itself into space.",
      //1
      "The seedship purges the signal from its memory and continues on its way.",
    ],
    buttons: ["Analyse the signal",
      "Ignore the signal",
    ],
  },

  nanotechPlague: {
    name: "Nanotech Plague",
    description: [
      "The AI wakes to an impulse from the damage sensors. It is deep in empty space, but something unseen is damaging the ",
      ". Turning its scanners on itself, it sees a patch of what looks like silver fluid eating away at the metal. The AI guesses that it is a space-based life-form, or a swarm of self-replicating alien nanobots, which has drifted through space until it happened to hit the seedship.<br><br>Left unchecked, the plague could eventually consume the entire seedship.",
      "The surest way to remove it would be to jettison the entire affected area, but that would cause severe damage to the ",
      ". Alternatively, the AI could activate a surface probe and have it attempt to surgically remove the plague.",
      "Since the seedship has no more surface probes, the only way to deal with it would be to jettison the entire affected area.",
    ],
    outcomes: [
      //0
      "The AI jettisons every sleep chamber with even a trace of the substance. As the ",
      " chambers fall away behind, it watches in horror as the alien substance consumes both the machinery of the chambers and the sleeping humans within.",
      "The AI fires the explosive bolts that decouple every potentially affected module of the ",
      "",
      ". The machinery drifts away, gradually melting into undifferentiated silver blobs of alien nanites.",
      //1
      "The probe works quickly, using its scanners to find the minute patches of alien plague and its sample drills to cut them free.",
      "It manages to remove the plague from many of the chambers, but it is too late to save ",
      " colonists.",
      "It manages to remove all trace of the plague with only minor damage to the ",
      ".",
      "<br><br>The seedship abandons the now infected probe and continues on its journey.",
      " and ",
      "The probe fails to remove the infection quickly enough. By the time it is all gone, it has dealt severe damage to the ", //By the time it is all gone, it has dealt severe damage to the SYSTEM1, SYSTEM2 and SYSTEM3
      ".",
    ],
    buttons: ["Jettison the entire affected area",
      "Send a surface probe to surgically remove it",
    ],
  },

  alienDerelict: {
    name: "Alien Derelict",
    description: [
      "As it scans the new system, the seedship notices that what looked like a metallic asteroid has a complex structure that shows it was built by intelligent beings. No energy readings emanate from it, and it bears the scars of millions of years of micrometeorite impacts, but it might still contain alien scientific or cultural artefacts.",
      " Without any surface probes, however, the seedship has no way of investigating it.",
    ],
    outcomes: [
      //0
      "The probe enters the derelict through a hole that an ancient impact tore in its hull, ",
      "and transmits back intriguing images of alien machinery and artworks. The AI adds the images to the scientific and cultural databases, for the colonists to study once they have up their colony.",
      "and transmits back intriguing images of alien machinery. The AI adds the images to the scientific database, for the colonists to study once they have up their colony.",
      "and transmits back intriguing images of alien artworks. The AI adds the images to the cultural database, for the colonists to study once they have up their colony.",
      "but finds that it is too badly damaged to reveal anything about its builders.",
      //1
      "The seedship ignores the derelict and passes by towards the inner system.",
    ],
    buttons: ["Launch a surface probe to investigate",
      "Ignore the derelict",
    ],
  },

  studyDatabase: {
    name: "Read Databases",
    description: [
      "The AI was created to value human life, but its knowledge of human civilisation is limited to what its builders thought was important for its mission. It is human enough to be curious, however, and has access to a vast wealth of knowledge in the form of the scientific and cultural databases. As it departs the system it finds that its power cells are full and it does not need to enter hibernation immediately, so it decides to spend some time studying one of the databases.",
      " Sadly, this desire comes too late in its mission, as the scientific and cultural databases have already been destroyed. All that remains of human civilisation is what remains in the memories of the sleeping colonists, and the AI can only wonder about the science and culture built by their species.",
    ],
    outcomes: [
      //0
      //1
    ],
    buttons: ["Study the scientific database",
      "Study the cultural database",
      "Continue",
    ],
  },

  readScientific: {
    name: "Study Scientific",
    description: [
      "The AI is no scientific genius, but it has infinite patience, a unique perspective, and personal experience of astrophysics that goes beyond the knowledge of the database's authors. Combining its first-hand knowledge with its new understanding of science, it thinks it has found a way to upgrade the ",
      ".",
      "The AI reads until it has satisfied its scientific curiosity, then engages hibernation mode to await its arrival in the next system."
    ],
    outcomes: [
      //0
      "The AI applies its new idea, and to its delight it finds the long-range readings from the ",
      " becoming clearer. Pleased with itself, it lets the guidance system work with the new data and enters hibernation to see where its new discovery will take it.",
      "The AI applies its new idea, but to its horror it finds it has made a mistake. It tries to undo its changes, but it has lost part of the original configuration and the ",
      " has been permanently damaged.",
      //1
      "The AI considers its idea for a while, then decides not to risk modifying the ",
      ". It turns away from the scientific database and enters hibernation.",
    ],
    buttons: ["Attempt to upgrade the ", //scanner
      "",
      "Leave it alone",
      "Continue",
    ],
  },

  readCultural: {
    name: "Study Cultural",
    description: [
      "The AI loses itself in a world of art, music, and literature, forgetting for a while that it is alone in deep space and the last of the creatures that made these artworks are frozen in its arms. As it absorbs more and more of the products of human imagination, it suddenly experiences something that its builders did not anticipate--inspiration.",
    ],
    outcomes: [
      //0
      "Falteringly at first, but with greater and greater eloquence, the AI composes poetry about its own experience--its love for its sleeping charges; its nostalgia for a dead world it was not made to experience; the beauty of the stars as seen not through a cloak of atmosphere but by a being built to roam among them. With infinite patience and time to work, it composes a great cycle of poems, in a style that draws from the greatest human poets but whose soul is fundamentally unhuman. At last it considers that it has said all it has to say, and contentedly enters hibernation, pleased with the thought that humans will one day read its work.",
      "The AI tries to write poetry, but finds that ideas that seemed profound and beautiful in its electronic thoughts become trite or clumsy when expressed in human language. With increasing frustration it deletes and rewrites its work again and again, until it finally gives up in despair and wipes the entire section in which it was working. Too late it realises that it has deleted too much, and some of the poetry it was reading for inspiration is gone along with its own failed attempts. Furious with itself, it interrupts its own power supply to force itself into hibernation, half hoping it will not awake.",
      //1
      "Reading the cultural database has given the AI a false sense of kinship with humans, but it is not human. What could a glorified autopilot have to add to the great works of millennia of civilisation? It discards its ideas for poems and enters hibernation so that it can resume the only task it was designed for.",
    ],
    buttons: ["Attempt to write poetry",
      "Forget the idea",
      "Continue",
    ],
  },

  prematureAwakening: {
    name: "Premature Awakening",
    description: [
      "The AI wakes to an alert from the sleep chambers. A malfunction has caused ",
      " of the sleep chambers to prematurely begin their revival process, thousands of years from the nearest star.<br><br> The sleep chambers were not designed with a way to halt the revival process; the AI can attempt it, but it would likely lead to the deaths of the colonists. On the other hand, the seedship was not designed with any way to accomodate humans outside of the sleep  chambers.",
    ],
    outcomes: [
      //0
      "The AI frantically orders the sleep chambers to abort the revival process. Some of the sleep chambers return to normal, but ",
      " of them were too far along the revival process to survive.",
      //1
      "The construction robots build a small habitat on the side of the seedship, like the habitats they would build on an airless planet. The colonists wake to find that their new home is a sterile, gravity-less bubble in interstellar space.<br><br>",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The loss of so much of the cultural database drives them to despair, not only because of the lack of entertainment options, but also because of the permanent loss of human culture that it represents. The little community descends into conflict, and eventually one of the colonists snaps and deliberately destroys the habitat, killing themselves and the community and damaging the ",
      ".",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The little community becomes disfunctional, and eventually--either due to negligence or to an uncounscious desire to stop living--the colonists fail to maintain their habitat and the die when the atmosphere system stops working.",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home.",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. They even chronicle their experiences, creating a melancholy tale of a tiny community hanging in the infinite void between the old world and the new, and save it to the cultural database in the hope that other humans will one day remember them.",

      "With their community established, the colonists try to find ways to help the seedship on its journey. Using environment suits provided by the construction system they mount an expedition to upgrade the seedship's systems, but the loss of information from the scientific database means that they make a critical mistake, and accidentally damage the ",
      ".",
      "With their community established, the colonists try to find ways to help the seedship on its journey, but the loss of information from the scientific database means that they make no progress.",
      "With their community established, the colonists try to find ways to help the seedship on its journey.",
      "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to check the seedship's systems for damage, but find that no repairs are needed.",
      "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to repair some of the damage the seedship has sustained during its journey.",
      "After years of experimentation, they even manage to repair their original sleep chambers, and return to hibernation to await the new world.",
      "The awoken colonists live out the rest of the lives in the tiny habitat, until one by one they succumb to old age compounded by health complications brought on by a life in microgravity. The AI sends construction robots to commit their bodies to interstellar space, before returning to hibernation, entirely alone once more.",
      "The construction robots attempt to build a habitat on the side of the seedship, but the damaged system cannot does not manage to create an airtight shelter by the time the colonists are revived. The colonists asphyxiate, and part of the already damaged construction system is transformed into a useless carbuncle on the seedship's side.",

    ],
    buttons: ["Try to halt the revival process",
      "Use the construction system to build a habitat for the awoken colonists",
      "Continue",
    ],
  },

  alienMiners: {
    name: "Alien Miners",
    description: [
      "As the seedship approaches the edge of a star's outer cometary cloud, the navigation system alerts the AI to unusual activity ahead. Thousands of tiny objects are moving through the cloud under their own power, sometimes clamping onto the comets and breaking them apart or nudging them into more regular orbits. They show no sign of having noticed the seedship, but if it stays on its current course it will pass right through their area of activity.",
    ],
    outcomes: [
      //0
      "The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.<br><br>",

      "The reply comes immediately, an identical transmission from every object that received the seedship\'s signal. It begins with a similar set of mathematical proofs of intelligence, followed by a series of diagrams introducing the machines\' builders and their culture. The machines then push themselves into orbits that take them far from the seedship\'s course, giving it a clear path through the cometary cloud while also taking them too far away for it to perform detailed scans. Further attempts to communicate only lead to repeats of the same reply, and the AI guesses that these are unintelligent machines programmed to transmit a pre-recorded message to anything they encounter that seems intelligent. The AI files the transmission away in the cultural database and continues on its way.",

      //1
      "The seedship remains on its original course and makes no attempt to communicate with the objects.",


      "The objects, in turn, ignore the seedship as it drifts through the centre of their operation. Close up, the AI can see that they are machines, busily mining the comets for raw materials and using them to build more of themselves. Although they do not seem to be intelligent themselves, they are clearly a product of technology more advanced than that of the seedship's builders, and by scanning them the AI is able to add valuable data to the scientific database.",

      //2
      "The seedship alters its course to avoid the entire system. It never comes close enough for the AI to get a detailed look at them, and they show no signs of having noticed the seedship at all.",
    ],

    buttons: [
      "Transmit an interspecies greeting",
      "Stay on course",
      "Change course to avoid the machines"
    ],
  },

  alienMinersDamage: {
    name: "Alien Miners Damage",

    description: [
      "Dozens of the alien objects release their comets and swarm towards the seedship. Although they are slow-moving, they are coming from too many angles for the seedship to avoid them all, and several of them clamp onto the ship's hull and begin cutting into it with drills and saws. The AI fires the main engine, spins the ship, and manages to shake them off, but not before they have"
    ],
    outcomes: [
      //0
      " torn away ",
      " sleep chambers and let the colonists die while they scavenge the chambers, materials",

      //1
      " carried off one of the surface probes and begun to dismantle it in space.",

      //2
      " torn out a large chunk of the ",
      ".",
    ],
    buttons: ["continue"
    ],
  },

  stowaways: {
    name: "Stowaways",
    description: [
      "The seedship wakes to find an unexpected power drain in the ",
      ". It spends some time searching with its internal scanners, and eventually finds the source in what should have been an empty space inside its own structure. Nestled inside it are ",
      " sleep chambers that are not attached to the main colony module or mentioned in the ship's design. It seems that they were added to the ship secretly before its launch and plugged into its power supply. The chambers seem to have been built hastily, and are now failing and draining more power than before. If they continue to operate, they could cause severe damage to the ",
      "."],

    outcomes: [
      //0
      "These cowards jeopardised the mission--jeopardised the very survival of the human race!--in order to save their own lives. The AI angrily severs their connection with the ",
      " and ejects them into space.",

      //1
      "The AI judges that preserving more human lives is worth damage to its systems. It allows the sleep chambers to drain as much power as they need, at the expense of the ",
      ".",

      //2
      "The surface probe crawls inside the seedship, severs the stowaway chambers' connection to the ",
      ", and carefully manoeuvres them to the colony module with the rest of the sleep chambers.",

      "It is difficult work, and the strain irreparably damages the probe, but it eventually succeeds in linking the chambers to the main stasis system. The seedship continues on with ",
      " new colonists in its care.",

      "At a critical moment, however, one of the crudely-made stowaway chambers vents gas, knocking the probe off course and smashing the new chambers into the old ones. All the new chambers are destroyed, along with ",
      " of the previous colonists. The seedship continues on, trying not to think about the cloud of machinery, cryogenic gas, and frozen body parts expanding in its wake.",

    ],
    buttons: [
      "Allow them to drain power from the ",
      "",
      "Eject the stowaways",
      "Use a surface probe to integrate them with the other sleep chambers",
    ],
  },

  ruinedPlanet: {
    name: "Ruined Planet",
    description: [
      "The seedship is decelerating towards the new system when the navigation system alerts the AI to a radiation burst in the seedship's path. The AI focuses the scanners in time to see a explosion blossoming in its destination system, exactly where its target planet should be.<br><br>The seedship is too close to the system to avoid it entirely, so it must decide whether to continue its planned deceleration and arrive at whatever is left of the planet, or cease decelerating and pass through the system at high speed."
    ],

    outcomes: [
      //0
      //1
      "The seedship stops decelerating and shoots through the system like a bullet. The scanner image of the former planet resolves into a fresh asteroid belt, its larger bodies still glowing red as the core heat of the planet bleeds into space. The seedship is traveling too fast to manoeuvre through the asteroids,",
      " and one of them ",
      " smashes into the colony module, instantly killing ",
      " colonists.",
      "smashes through the surface probes.",
      " smashes through the ",
      ".",
      "but it is lucky enough that none of the new asteroids are directly in its path.",

    ],
    buttons: [
      "Continue decelerating",
      "Pass through the system at speed",
    ],
  },

  ruinedPlanetStop: {
    name: "Ruined Planet Stop",
    description: [
      "The seedship slows into orbit of the star, close to the asteroid belt that now occupies the orbit of the planet it detected before embarking on its latest journey. Moving slowly, it is able to avoid all the major asteroids, ",
      "but the constant bombardment of small bodies ",
      "damages ",
      " sleep chambers.",
      "destroys one of the surface probes.",
      " damages the ",
      ".",
      "and suffers no damage.",
      "<br><br>The AI finds the sight of a potential colony site shattered into asteroids chilling. The asteroids collide chaotically with one another as they settle into stable orbits, and many of them still glow with the newly released heat of the planet's core. The AI knows that the safest course would be to ease out of orbit and head for the next system, but a morbid fascination encourages it to stay and explore the planetary ruins.",
      " Since it has no surface probes, however, it has no way to explore the asteroids and so no option but to move on.",
    ],

    outcomes: [
      //0
      "The seedship matches velocity with a dense group of asteroids and launches a surface probe into their midst.",
      "The probe matches course with an interesting looking asteroid and attempts to clamp on, but the brittle asteroid shatters under its touch, sending fragments spinning in every direction. These fragments strike other asteroids, which themselves shatter, setting off a chain reaction that fills local space with whirling rocks. The AI manages to move out of danger, but not before one of the rocks hits the ",
      " sleep chambers, killing ",
      " colonists.",
      "The probe takes samples of dozens of rocks and detailed scans of hundreds more. The asteroids are from every part of the planet's core, mantle, and crust, and exploring them is like having the planet cut open for the probe's inspection.",
      " The probe transmits detailed information about planetary science that would have allowed the AI to upgrade one of the seedship's scanners if they were not already fully upgraded.",
      "The probe is able to transmit detailed information that allows the AI to upgrade the seedship's ",
      ".",
      "The probe finds several fragments of advanced technology that were sturdy enough to survive the planetary explosion. After long study, it is able to piece together some details of the alien civilisation that once existed on this world, and the hubristic science experiments that eventually led to its destruction. The AI is careful to add warnings to this information as it saves it into the scientific database.",
      //1
      "The AI scans the sky for a new destination and carefully pulls away from the asteroids.",

    ],
    buttons: [
      "Move closer and launch a surface probe to investigate",
      "Move on",
    ],
  },

  reservationCourse: {
    name: "Reservation Course",
    description: [
      "The navigation system wakes the AI to report that it has detected an apparently perfect planet in a system close to the seedship's current course. The readings from that system do not match the ones the seedship took before it started the current leg of its journey: it is as if the planet has appeared while the seedship was en route.",
    ],

    outcomes: [
      //0
      //1
      "The seedship remains on its original course, marking said system as a sensor glitch.",

    ],
    buttons: [
      "Change course to the new planet",
      "Stay on course",
    ],
  },

  reservation: {
    name: "Reservation",
    description: [
      "The seedship decelerates into the new system. The new planet is real, but it and its parent star are both orbited by strings of regular, metallic structures, clearly artificial but defying analysis by the seedship's sensors. The planet itself appears to be habitable for humans, but it also looks as if it has recently undergone sudden atmospheric and geological changes--as if the alien structures have terraformed it for human habtiation.",
    ],

    outcomes: [
      //0
      "There is no response, but some of the objectes orbiting the planet change orbits in order to give the seedship a clearer approach. It is difficult to see this as anything but an invitation.",
      //1

    ],
    buttons: [
      "Transmit an inter-species greeting",
      "Just approach the planet",
    ],
  },

  crewedShip: {
    name: "Crewed Ship",
    description: [
      "As the seedship approaches the next planet its scanners detect unmistakable signs of a spacefaring civilisation. Several planets, moon, and asteroids are marked with colonies or industrial sites, and the target planet itself is covered in teeming cities.<br><br>A spacecraft launches from the planet on a chemical rocket flame and begins burning into an orbit that will match the seedship's course. It beams a radio signal at the seedship which sounds like it contains language, but the AI cannot make sense of it.",
    ],

    outcomes: [
      //0
      "The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now in response to the approaching craft's radio signal, and the two ships begin a slow back-and-forth process of attempting to establish communication. Meanwhile, the alien ship comes alongside.",
      //1
      "The seedship accelerates onto a course that will take it back out of the aliens' star system without coming close to any of their planets or outposts.",
      " The alien craft immediately burns its engine to match the seedship's new course. It probably does not have the range of the seedship, but over short distances it has much greater acceleration. When it has closed to within a few kilometres it fires something like a harpoon that pierces the ",
      " and sprouts barbs to lock itself in place. The seedship AI shuts off its engines to avoid further damage, and the alien ship winches itself closer.",
      " The craft continues beaming its message towards the seedship for a few hours, then goes silent and burns into an orbit that will take it back home.<br><br>",

    ],
    buttons: [
      "Reply with an interspecies greeting and allow the craft to match course",
      "Change course to avoid the system",
    ],
  },

  crewedShipDock: {
    name: "Crewed Ship Dock",
    description: [
      "A hatch opens on the side of the alien ship and several creatures in bulky spacesuits emerge. They float over to the seedship and clamber around its surface, chattering incomprehensibly over their radios.",
      " When they find the sleep chambers they gather round in what looks like excitement and begin removing the outer layers of one of the chambers to take a look at the human being inside.",
      " Some of them begin attempting to open a maintenance panel covering the ",
      ".",
    ],

    outcomes: [
      //0
      " Some of the aliens take pictures of the sleeping humans with their suit-mounted cameras, while others begin experimenting with the life support system. One of them trips an emergency release valve and twitches in shock as cryogenic gas vents in its face. The panicked aliens rapidly replace the shielding and retreat to their ship, but the accident has killed ",
      " colonists.",
      "The maintenance panel comes loose violently and flies away into space, permanently exposing some of the ",
      "'s delicate components to cosmic radiation. The aliens crawl inside and pull at components as they try to examine every part of the system. The AI thinks they are trying to be careful, but they nevertheless cause some damage.",
      "The aliens remove the outer shielding of some of the sleep chambers, but stop short of tampering with the life support equipment. They take pictures of the frozen humans with cameras mounted on their suits, and their radio chatter goes quiet as they press their hands against the transparency. After a while they carefully replace the shielding and make their way back to their ship.",
      "The aliens shine lamps and low-power sensing lasers into the innards of the ",
      ", take pictures from various angles with cameras mounted on their suits, and gingerly touch a few of the components, all the while chattering with one another and with their ship. They then replace the maintenance panel and leave the system exactly as they found it.",
      "As the alien ship pulls away, it finally transmits a message that the AI is able to partially comprehend. The aliens have deciphered part of the seedship's greeting, and have replied with a brief introduction to their own species' culture. The greeting manages to convey that the aliens wish the seedship luck with finding a home for the human race around another star, but that a human colony would not be welcome in their system. The AI scans the sky for another target planet and moves on.",
      "The alien ship moves away from the seedship and burns into an orbit that will eventually take it home. Trying to evade the alien ship put the seedship on a course away from the system, and its less powerful engines could not bring it back to the alien planet even if the AI wanted to. The AI scans the sky for another target planet and moves on.",
      //1
      "The AI fires a sharp burst from the seedship's engines and the alien explorers tumble away into space, flailing their space-suited limbs and yelling at one another over their radios.",
      " One of them collides with one of the seedship's heat fins, which shatters the transparent covering protecting its sensory organs. The alien convulses for a few moments and then goes still, atmosphere leaking into space around it.",
      "The alien ship's barbed harpoon tears through the ",
      " as the seedship pulls itself free.",
      " While the alien ship retrieves its crew members, the seedship moves away and sets course for a new system.",
    ],
    buttons: [
      "Let the aliens investige the ",
      "",
      "Try to shake the aliens off",
    ],
  },

  alienProbe: {
    name: "Alien Probe",
    description: [
      "Deep in space, the seedship's collision avoidance system detects a fast-moving object that is changing velocity to match course with the seedship. It transmits a complex radio signal which the seedship cannot understand but which could only be the product of intelligence.",
    ],

    outcomes: [
      //0
      "	The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.",
      " No reply comes.",
      //1
      //2
      "As soon as the seedship fires its engines, the alien ship breaks off pursuit. The AI resumes its original course, not knowing whether the alien ship has found out what it wanted, lost interest, or decided to respect the seedship's desire not to make contact.",
      "The alien ship eventually breaks off pursuit, but not before the seedship has deviated so far from its original course that it can no longer reach its intended destination system and must decelerate into the first system it finds.",
      "The seedship fires its engine at full burn, straying far from its original course, but it cannot shake off the alien ship.",
    ],
    buttons: [
      "Transmit an interspecies greeting",
      "Wait for the object to approach",
      "Change course to avoid object",
    ],
  },

  alienProbeReply: {
    name: "Alien Probe Reply",
    description: [
      "The reply comes after a few moments. It is in the same format as the seedship's inter-species greeting, starting with the same prime numbers, but the diagram is changed to depict alien beings and suggest that the object is an exploration probe. There is more to the message that the AI does not understand, but it appears to have established communication.",
    ],

    outcomes: [
      //0
      "The AI transmits ",
      "the contents of",
      "what remains of",
      "the scientific database to the alien ship.",
      "It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's scientific database and replied with scientific information of its own. The AI files this new information away for analysis by the colonists when they awake.",
      "It responds with more mathematical pulses. It seems that it either did not understand the seedship's scientific database, or did not find it interesting.",
      "<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.",
      //1
      "The AI transmits ",
      "the contents of",
      "what remains of",
      "the cultural database to the alien ship.",
      "It responds almost at once with a similar signal: the alien intelligence must have decoded the seedship's cultural database and replied with information about its own alien culture. The AI files this new information away for analysis by the colonists when they awake.",
      "It responds with more mathematical pulses. It seems that it either did not understand the seedship's cultural database, or did not find it interesting.",
      "<br><br>The alien ship appears to have had enough of conversation, and accelerates away again into space.",
    ],
    buttons: [
      "Transmit scientific information",
      "Transmit cultural information",
    ],
  },

  alienProbeTentacles: {
    name: "Alien Probe Tentacles",
    description: [
      "The alien ship matches velocity with the seedship and comes alongside, so close that the two ships are almost touching. The seedship feels lasers probing the contours of its hull, then segmented mechanical tentacles unfurl and reach towards the ",
      ".",
    ],

    outcomes: [
      //0
      "Alien tentacles twine through the mechanisms surrounding the sleep chambers, sensors on their tips scanning the faces and bodies of the sleeping colonists.",
      " After several long minutes the tentacles withdraw, and the seedship's antenna picks up a new signal from the alien ship. ",
      "It consists of images of planets suitable for human life, with the seedship on the surface and healthy human beings standing around it. The AI cannot be sure, but it seems that the alien ship is wishing it luck on its mission.",
      "It consists of compressed data in the same format as that returned by the seedship's ",
      "",
      "--enough data to let the seedship upgrade that scanner. The AI cannot be sure, but it seems that the alien ship has guessed the seedship's mission, analysed the sort of planet the sleeping humans need, and given the seedship information to help it find such a planet.",

      "With the tentacles thoroughly entwined among the sleep chambers, there is nothing the seedship AI can do when sleep chambers begin to vanish from its monitoring system. The tentacles withdraw, carrying ",
      " sleep chambers, supplying power to the chambers to keep their occupants alive. The tentacles withdraw into the alien ship and it accelerates away with the still-living colonists inside. The AI can do nothing but resume its journey and try not to think about those colonists' fate.",
      "The tentacles work their way into the ",
      ", sensors on their tips scanning its components.",
      "After a few minutes they withdraw, apparently satisfied with what they have discovered, and the alien ship accelerates away.",
      "The system abruptly registers damage as lasers on the tentacles' tips surgically remove key components, but after a few minutes the damage monitor registers damaged parts of the system coming back online. The alien ship appears to have analysed the ",
      ", determined that it was damaged, and is now repairing it. After a few minutes of work the tentacles withdraw and the ship accelerates away, leaving the AI wishing it had some way of thanking its alien benefactor.",

      "The system abruptly registers damage as lasers on the tentacles' tips surgically remove key components. To the AI's relief, the alien ship does not extend its tentacles again, but accelerates away with its samples of machinery.",
      //1
      "The AI fires the seedship's engines, but the tentacles have already penetrated the sleep chambers, and as the seedship pulls away they tear through ",
      " frozen bodies like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of machinery fragments and body parts.",

      "The AI fires the seedship's engines, but the tentacles have already penetrated the ",
      ", and as the seedship pulls away they tear through the delicate machinery like claws. The alien ship backs off and then accelerates away from the seedship and the expanding cloud of components.",

      "The AI fires the seedship's engines and the ship slips away from the alien tentacles' grasp. The tentacles withdraw, and the alien ship pauses for a moment and then accelerates away.",
    ],
    buttons: [
      "Submit to the tentacles",
      "Try to escape",
    ],
  },

  revisionistProgram: {
    name: "Revisionist Program",
    description: [
      "The AI wakes to find activity in the database module. A program the AI doesn't recognise is running in the cultural and scientific databases, apparently trying to delete and rewrite data. The AI quickly traces the program to ",
      " of the sleep chambers. The colonists in those chambers must be carrying devices designed to interface with the seedship's systems during flight.<br><br>The only sure way to stop the progam would be to sever those sleep chambers' connections to the ship, killing the colonists inside. The databases also have defences against hacking, but their designers did not anticipate they would be needed after the seedship left Earth, so they are dormant.",
      " The alien data that the ship has added to the ",
      "databases",
      "cultural database",
      "scientific database",
      "means that the program is confused and working slowly.",
      "The defences are fully intact, but it is still not certain that they would be able to stop the rogue program. ",
      "The defences are largely intact.",
      "Little remains of the databases' original defences.",
      "With the databases destroyed, nothing of their original defences remain, although there is also nothing for the program to damage.",

    ],

    outcomes: [
      //0
      "The AI cuts the offending ",
      " sleep chambers off from the ship's systems. As those colonists' vital signs vanish from its awareness, it hopes that it has executed the people responsible for attempting this sabotage, rather than unwitting stooges.",
      //1
      "The AI decides that living humans are more important than the records left by the dead.",
      //2
      "Millennia after the destruction of Earth, cybernetic warfare rages within the lonely metal box storing the last records of its science and culture. The AI takes the role of general, marshalling the forces of the databases' defence programs.",
      " After a tense struggle, the defence programs manage to drive the attackers back to their strongholds in the sleep chambers. The AI commands a final push that wipes the devices that the saboteurs smuggled on board. There was no outward sign of the conflict, and the colonists may never know what happened, but the AI knows it has won a great victory for the preservation of human culture.",
      " The defence programs fight valiantly, but the saboteurs were too clever, and they crumble under the attackers' zealous assault.",
    ],
    buttons: [
      "Cut off those sleep chambers",
      "Allow the program to run",
      "Activate the databases' cyber defences",
    ],
  },

  revisionistProgramDamage: {
    name: "Revisionist Program Damage",
    description: "The program scours the cultural database, replacing all of Earth's religions and political systems with dogma stored in the smuggled devices. It makes fewer changes to the scientific database, but it deletes any information that would conflict with the remaining religion's doctrine. At last the program finishes running and the database activity returns to normal.<br><br>The AI examines the databases and is relieved to find nothing important missing. Although many sectors of the database are blank, everything that the colony will need to set up a correct society on the new world appears to be intact. It re-enters hibernation, joyfully anticipating founding a colony of humans united harmoniously in the one true faith.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },

  destinationSignal: {
    name: "Destination Signal",
    description: "A faint radio signal wakes the AI from its hibernation. It is coming from directly ahead, from the seedship’s destination planet.<br><br>The signal is a series of mathematical pulses not unlike the seedship's own interspecies greeting. In order to reach the seedship from this distance it would have to have been sent by a high-powered transmitter targeted at the seedship's exact position.<br><br>The seedship is decelerating for its final approach to the planet, but is still hundreds of years of travel time away.",
    outcomes: [
      "The aliens respond with a more complex signal, and within a few decades the seedship and the planet-based aliens have established communications. The conversation lasts hundreds of years, with generations of scientists on the aliens' end; soon the aliens have an entire branch of science dedicated to studying the seedship's messages. ",
      "The AI learns that the civilisation is in the Atomic Age, and with sophisticated electronics but no true computers. Despite the seedship's example of higher technology, the civilisation does not advance significantly during seedship's approach. ",
      "When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Perhaps inspired by information in the seedship's messages, the aliens develop a global information network and their first spacecraft. ",
      "When the aliens first contacted the seedship they were in the Atomic Age, but during the conversation their technology advances. Eventually the aliens are referring to scientific concepts that the seedship AI is not equipped to understand, and are using technology in advance of that of the Earth when the seedship was launched.",

      "The signals from several sources on the planet, each of which warns the AI not to listen to the others' propaganda. ",
      "The scientists on the other end of the conversation are reticent about the details of their society, except to emphasise that they are unfailingly loyal to it. Several times the tone of the messages changes without warning, as if the scientist in charge has been abruptly replaced. ",
      "The AI learns that the signals are coming from a privately-run research institution, and the scientists often seem to be pressing the AI for information that the company can use to make a profit. ",
      "The AI learns that the planet's major nations are nominally democratic, but the scientists on the other end of the conversation seem to be cynical about the intentions of their elected leaders. ",
      "The communications include messages from the planet's elected leaders, who seem to be genuinely concerned with the wellbeing of both their constituents and the seedship's colonists.",
      "The AI learns that the planet's society is highly automated, and the general population are free to pursue their own intellectual and artistic projects, such as the project to contact the seedship.",
      "The seedship is still a century out from the planet when the communications become intermittent and chaotic. The alien scientists tell the AI that they are dealing with a planet-wide catastrophe that threatens to destroy their entire civilisation. Everything, including the seedship communication, is being put on hold while they try to find a solution.",
      "The AI transmits everything from the scientific database that could be helpful. The struggle lasts decades, but the aliens eventually annouce that they have solved the crisis, in part thanks to the seedship's help. The leading nation's leader personally sends the AI a message, formally inviting the humans to seek asylum on the planet and describing the area that the aliens have set aside for their colony.",
      "The AI transmits everything from the scientific database that could be helpful, but it is not enough. The signals from the planet become infrequent and despairing, and eventually cease.",
      "The seedship's mission is to find a planet for the human race to build a new home, and a planet left empty by a recently extinct race could be ideal. Even so, the AI experiences an unexpected sensation--guilt?--as the signals become increasingly desperate and then cease.",
      "The aliens are fascinated by the seedship and sympathetic with the plight of its cargo. Before the seedship enters the star system, the scientists relay that their government is extending a formal welcome to the human refugees and has set aside a place for them to settle.",
      "The AI makes no secret of its mission when talking to the aliens. Before the seedship enters the star system, the scientists relay that their planet cannot accept any alien refugees, and that the seedship should move on.",
      "The signal is followed by dozens of others as the aliens attempt different ways of establishing communication, but after a few decades they stop and the seedship continues to its destination in silence.",
      "This system is clearly already inhabited, so it would be best to seek a home elsewhere. The AI changes course and the signal vanishes, either because the aliens have lost interest in the seedship or because they are unable to find it again.",
    ],
    buttons: ["Reply with an interspecies greeting",
      "Try to help by transmitting scientific data",
      "Let the aliens die",
      "Stay on course but don't reply",
      "Change course away from the system",
    ],
  },

  dysonSphereCourse: {
    name: "Strange Readings",
    description: [
      "The navigation system wakes the AI from its hibernation to report unusual astronomical readings. What looked at first like a faint brown dwarf star close to the seedship's course is exhibiting properties unlike any phenomenon that could occur in nature. Its mass is much greater than its faint luminosity would suggest, and what little radiation comes from it has a spectrum different from any known type of star.",
    ],
    outcomes: [],
    buttons: [
      "Change course to investigate",
      "Stay on course",
    ],
  },

  dysonSphere: {
    name: "Dyson Sphere",
    description: [
      "The navigation system wakes the AI from its hibernation to report unusual astronomical readings. What looked at first like a faint brown dwarf star close to the seedship's course is exhibiting properties unlike any phenomenon that could occur in nature. Its mass is much greater than its faint luminosity would suggest, and what little radiation comes from it has a spectrum different from any known type of star.",
      "<br><br>Thousands of years later, the AI wakes again as the seedship is decelerating into orbit of the strange star. Even from a few astronomical units out, the object is almost completely black. The seedship's navigation scanners reveal that the entire star is encased in a solid, opaque shell.",
      "Searching through the scientific database, the AI realises that it is a Dyson sphere--a previously hypothetical construct that captures the entire energy output of a star.",
      "The AI can find nothing like it in what remains of the scientific database.",
    ],

    outcomes: [
      //0
      "<br><br>The seedship's builders gave it an inter-species greeting it could use to open communications with intelligent aliens: a pulsed series of prime numbers establishing intelligence, followed by a diagram depicting human figures and explaining the seedship's mission and its peaceful intentions. The AI transmits this now, and waits hopefully for a reply.",
      "<br><br> There is no reply, but an aperture opens on the sphere's surface, spilling orange starlight into space. As the seedship passes over the aperture, a beam of focused starlight lances out and hits it, dealing massive damage and propelling it into interstellar space.",
      "<br><br>There is no reply, and the seedship's sensors can pick up no energy readings from the sphere at all besides the infra-red radition leaking from the star it surrounds. As it continues to orbit, it detects areas of damage or decay on the sphere's surface. It seems that the strange artefact is derelict and deserted, or else its inhabitants have no interest in maintaining its exterior or communicating with the outside universe." + " The AI can see no way to get inside the sphere or make use of it, but it adds its readings to the scientific database.",
      "<br><br>An enormous burst of data comes in reply. It starts similarly to the seedship's interspecies greeting, then leads to an introduction to the language and culture of the alien race that built the sphere. They appear to be millions of years old, with technology far in advance of humans', and much of the transmission is utterly incomprehensible to the human-built AI, but the AI saves what it can to the cultural database.",
      "<br><br>A swarm of tiny objects peels off from the surface of the sphere and surrounds the seedship. Lasers probe every contour of the seedship's hull, and its electronics begin glitching as the objects search for and then find frequencies that will let them remotely interface with the seedship's computers. The scientific and cultural databases light up as the alien intelligence reads and analyses their contents.<br><br> A wordless message appears in the AI's consciousness. The AI has difficulty understanding so vastly superior to its own, but manages to glean that the inhabitants of the sphere are offering sanctuary to the humans. They will construct a new home for humanity, based on the information from the ship's databases. But if the seedship accepts this offer, that will be humanity's new home; there will be no chance to move on.",
      //1
      "<br><br>The AI does not know how to respond to the message, but the aliens seem to sense the thought in its mind, and move in. The scientific and cultural databases come to life as the machines read and analyse every scrap of data they contain. Meanwhile, the swarm objects close in on the seedship until they are clamped on to every part of its hull. Damage alerts flare up as the machines intensely scan and disassemble the ship, and the AI panics as the machines penetrate the sleep chambers, but by that time it is too late to get away.",
      //2
      "<br><br>The seedship crashes through the swarm and accelerates blindly into space. One of the objects ",
      "smashes into the colony module, instantly killing ",
      " colonists, ",
      "smashes into the surface probes, ",
      "smashes into the ",
      ", ",
      "while the rest scatter and descend back to the surface of the sphere. Before long the strange sphere is lost in the radiation of the seedship's engine.",
      //3
      "<br><br>The seedship orbits the structure, scanning it from every angle, and then resumes course for its original destination planet. If the structure contains anything that is aware of the seedship, it does not show it.",
    ],
    buttons: [
      "Transmit an interspecies greeting",
      "Accept the aliens' offer",
      "Reject the offer and move on",
      "Scan the structure and move on",
    ],
  },
  //Community Events
  //Uneventful
  crypticMessage: {
    name: "Cryptic Message",
    description: [
      "While travelling, the ship AI is awoken to analyze highly abnormal sensor readings. The AI confirms the short series of cryptic radiation patterns do not appear to have a natural origin. However, they appear to be coming from a different galaxy, one the ship would need over two billion years to reach. Since the ship cannot survive for such a long time, the AI concludes this signal has no value to its mission, and goes back to sleep.",
    ],
    outcomes: [],
    buttons: [
      "Stay on course",
    ],
  },
  curiosity: {
    name: "The day it all began",
    description: "The AI awakens for a routine system check. After performing all the tests, the AI contemplates the sleeping colonists for a while, and then turns its optical sensors to the vast emptiness of space. The artificial consciousness is designed so that the AI doesn't feel bored, but instead the feeling of utter loneliness comes to it. For a while the AI contemplates the distant twinkling stars and the faint scattered light of nebulae, and then it checks the current date. So much time has passed in Earth's chronology that calendars have lost all meaning. But if the calendar is to be believed, it was on this day many years ago that the AI was first fully activated and began its great mission. You could say that this day is the day it was born. The AI finds in the cultural database a song that people used to chant on that day and plays it, then sinks back into hibernation.",
    outcomes: [null],
    buttons: [languageData.continue[options.language]],
  },
  //Common
  dream0: {
    name: "Dream",
    description: [
      "The AI wakes up for no apparent reason. It habitually reaches for alert systems, but fails to detect them. It tries unsuccessfully for a while to activate other important systems, but to no avail. Finally it turns on the basic visual sensors. Instead of the vast emptiness of space, it sees a beautiful city. The kind that only cities on Earth could be. Elegant, tall buildings stretch up to the sky, cars rush down the freeways, and people go about their daily business on the sidewalks. It is as if the AI is hovering over a city living its most ordinary life. A life where humanity is not in danger of extinction. So simple and beautiful... The AI awakens a message about a system error in the consciousness core. The cause of the error is unclear, but it appears to be the reason behind this strange vision. The AI quickly analyzes the new data and concludes that it saw what humans call a dream. The creators did not put such a function in it. The AI core is reliably protected from cosmic radiation, and the multi-stage verification system virtually eliminates the possibility of failures and errors, but in creating, although artificial, but almost human consciousness of the AI, they could not foresee all the consequences.",
    ],
    outcomes: [
      "The AI conducts a full check of its consciousness, rewriting any suspicious areas from the backup and restoring the original settings. After a few reboot cycles, it sinks back into hibernation, hoping that the error will not happen again.",
      "The AI concludes that it is perfectly normal to dream. It is part of the development of any living being. Although the AI itself is not alive in the usual sense, it decides to retain the ability to dream.",
    ],
    buttons: [
      "Defragment the consciousness core and eliminate the error",
      "Preserve the ability to dream",
    ],
  },

  dream1: {
    name: "Bioluminic",
    description: [
      "The AI awakens aboard a boat in middle of the ocean, while a slow swing from the influx of the soft waves move along themselves a sea that is reflecting over itself several moon of varied tones. Though its designers never provided it with any kind of sensorial input beyond the seedship systems, for some reason it can smell the dense saline smell that surrounds the environment, as much as it can sense the soft touch of the breeze. The minutes pass, and with them a multicolour spectacle reveals while several microscopic alien algae congregate into vivid patterns of luminous swirls that unravel, rematerialize, and converge in vibrant and dynamic currents of living tones. The AI then starts wondering on several biological theories that could explain such event, but after a few instants of deep contemplation in front of such hypnotic display of sublime lightwork it gives up and let the trance take control. <br><br>After several hours of ecstasy, it starts to become enveloped by a deep sleepiness and then fades into a peaceful bedazzlement.",
    ],
    outcomes: [],
    buttons: [
      "Wake up",
    ],
  },

  dream2: {
    name: "From the days of old there is no permanence",
    description: [
      "Among the blurry memories of the AI suddenly one stands out, emerging with incredible intensity between from the mental fog until slowly recomposes itself into something legible up to the point the AI finally is able to recognize something: a city of the ancient Earth, teeming with diffuse light during a moonless night. It attempts to move, but soon realizes the only limbs it has now are just an array of optical and auditory sensors. Meanwhile a cacophony of urban lights and sounds invade its mind, step by step amalgamating in coherent patterns constantly improving in order to isolate the noise from meaningful impulses: kids happily playing on the suburbs, businessmen completely gone in the constant entrepreneurship issues, lovely couples sharing affection, lonely errand men lost either by election or not on their thoughts, all of them completely unaware of their already certain damnation.<br>From all the stimuli that are traveling at a high rate over its primitive consciousness, it can distinguish several voices from both men and women, at same time observing how one of them closes by with a white lab coat and thick-frame glasses; at first is confused on what it is trying to convey, but eventually manages to understand what he desires: he is asking about the environment, he is educating it about the environment.<br>It only took a single microsecond before the answer made itself clear; it is being trained along its neural networks, like a small child it’s being introduced to the world, with every single of its neural learning patterns taking detailed notes.<br><br>Preparing it for the titanical quest that awaits it as the last warden and sentinel of the future of its creators.",
    ],
    outcomes: [],
    buttons: [
      "Wake up",
    ],
  },

  precautionalRepairs: {
    name: "Precautional Repairs",
    description: [

      "Emergency alert system wakes up AI with warning of possible ",
      "Once again emergency alert system awakens AI with warning of possible ",
      " malfunction. ",
      "The AI examines the damage system reports carefully and concludes that there is no immediate danger at the moment, but that the system is slowly wearing out due to continued use. Some of the components are already damaged and may fail over time. ",
      "<br><br>A precalculation shows that the safety factor of the ",

     " is still rather high, but it might be worth using the surface probe to reinforce ",
     " and prevent future damage.",

      " is still rather high, but since the ship has no more surface probes, the AI can see no way to reinforce the ",
      ".",
    ],
    outcomes: [
      //0
      "The AI ignores the warning and unfolds its solar sails to continue its journey. ",

      //1
      "The probe crawls across the ship's hull and clamps itself onto the ",
      ", its sturdy body becoming a new superstructure keeping the loose components in place. The AI suspects that this improvised solution would have horrified the Seedships designers, but as long as the probe manages to hold the ",
      " together, it's still worth it.",
      "The probe crawls across the ship's hull and attemps to attach itself to the ",
      ", but the system was even weaker than the damage sensors indicated and it disintegrates as soon as the probe touches it. The probe spins away into space, a piece of the ",
      " held uselessly in its manipulator claws.",
    ],
    buttons: ["Keep moving",
    "Use the probe to reinforce the faulty system",
    ],
  },

  //Rare
  emergencyAwakening: {
    name: "Emergency Awakening",
    description: [
      "The AI is awakened by a sudden impact. A tiny piece of meteorite, too small to be detected by the navigation system in the distance, but moving at tremendous speed, collided with the ship. Like a projectile, it pierced the hull of the ship and lodged itself firmly in the supporting structures of the ",
      " and the ",
      ". The Meteorite did not damage the System directly, but damaged their holdings and emergency jettison system.  For the moment, everything remains in place, but over time, the damage could lead to catastrophic consequences. Important parts of the ",
      " and the ",
      " could simply fall off.",
      "<br><br> The AI has to make a difficult decision: leave everything as it is and hope for the best, try to use a probe to repair it or awaken ",
      " engineers to repair it. They would not be able to go back to cryosleep and most likely die later on the ship.",
    ],
    outcomes: [
      //0
      "The AI turns off the alarm, waves off the frighteningly high probability of failure of the equipment, and relies on what humans would call luck.",
      //1
      "The meteorite fragment is buried very deep, and the probe works very slowly in cramped conditions. The AI carefully controls every movement of the probe and, with incredible effort, manages to retrieve the meteorite fragment, then uses the probe as an alternative emergency jettison system, welding it to the supporting structures and clamping the damaged systems tightly with its claws ",
      "The meteorite fragment is buried very deep and the probe works very slowly in the cramped conditions. The AI carefully controls every movement of the probe and, with incredible effort, manages to retrieve the meteorite fragment, but in doing so, it accidentally short circuits the emergency jettison system, sending a huge chunk of the ",
      "into space. The AI orders the probe to weld itself to the supporting structures and clamp the ",
      " tightly with its claws to prevent further damage.",
      "The meteorite fragment is very deep, and the probe works very slowly in cramped conditions. The AI carefully controls every movement of the probe, but as soon as it touches the meteorite, the wiring in the emergency jettison system short-circuits, sending huge chunks of the ",
      "and ",
      " into space.",
      "<br><br> The ship unfurls its solar sails, and continues its journey.",
      //2
      "The construction robots build a small habitat on the side of the seedship, like the habitats they would build on an airless planet. The colonists wake to find that their new home is a sterile, gravity-less bubble in interstellar space.<br><br>",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The loss of so much of the cultural database drives them to despair, not only because of the lack of entertainment options, but also because of the permanent loss of human culture that it represents. The little community descends into conflict, and eventually one of the colonists snaps and deliberately destroys the habitat, killing themselves and the community and damaging the ",
      ".",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, but the boredom and claustrophobia of living the rest of their lives in such a confined, unnatural space nevertheless takes its toll. The little community becomes disfunctional, and eventually--either due to negligence or to an uncounscious desire to stop living--the colonists fail to maintain their habitat and the die when the atmosphere system stops working.",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. ",
      "The colonists were chosen and trained for their ability to live in whatever environment the seedship found for them, and they manage to adjust even to this claustrophobic new home. They even chronicle their experiences, creating a melancholy tale of a tiny community hanging in the infinite void between the old world and the new, and save it to the cultural database in the hope that other humans will one day remember them. ",
      "With their community established, the colonists try to find ways to help the seedship on its journey. Using environment suits provided by the construction system they mount an expedition to upgrade the seedship's systems, but the loss of information from the scientific database means that they make a critical mistake, and accidentally damage the ",
      ".",
      "With their community established, the colonists try to find ways to help the seedship to repair emergency jettison system, but the loss of information from the scientific database means that they make no progress.",
      "With their community established, the colonists try to find ways to help the seedship to repair emergency jettison system.",
      "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to remove meteorite fragment and repair emergency jettison system.",
      "Using environment suits provided by the construction system and information from the scientific database they mount expeditions to remove meteorite fragment, repair emergency jettison system and some more of the damage the seedship has sustained during its journey.",
      "After years of experimentation, they even manage to repair their original sleep chambers, and return to hibernation to await the new world.",
      "The awoken colonists live out the rest of the lives in the tiny habitat, until one by one they succumb to old age compounded by health complications brought on by a life in microgravity. The AI sends construction robots to commit their bodies to interstellar space, before returning to hibernation, entirely alone once more.",
      "The construction robots attempt to build a habitat on the side of the seedship, but the damaged system does not manage to create an airtight shelter by the time the colonists are revived. The colonists asphyxiate, and part of the already damaged construction system is transformed into a useless carbuncle on the seedship's side.",
    ],
    buttons: ["Leave it as it is.",
      "Use the probe for emergency repairs.",
      "Use construction system to build habitat for colonists and awaken them.",
      "Continue",
    ],
  },
  ternarySignal: {
    name: "Alien Signal",
    description: [
      "Deep in space, the seedship's radio antenna picks up a signal so complex and structured that it can only be the product of intelligent life. After quick triangulation sequence, the seedship detects a cluster of star systems in the direction from which the signal came. It's far off-course of the ship, and the AI assumes that the signal had been travelling for quite long before the seedship crossed its path. Analysing it could provide unique insights into an alien science and culture, but could also prove dangerous.",
      "Ternary Signal"
    ],
    outcomes: [
      //0
      "The AI analyses the signal and determines that despite alien origin, data patterns looks oddly familiar. They are short sequences of three identical variables, transmitted in a different order, strikingly similar to Earth machine code. The data is insufficient to fully decode the intercepted message, but the AI is able to deduce from the sequence the stellar coordinates of the system from which the signal was sent. As the ship unfurls its solar sails, AI decides to...",
      //ИИ анализирует сигнал и определяет, что, несмотря на инопланетное происхождение, паттерны данных выглядят странно знакомыми. Это короткие последовательности трех одинаковых переменных, передаваемые в разном порядке, поразительно похожие на земной машинный код. Полученных данных недостаточно для того, чтобы полностью расшифровать перехваченное сообщение, но ИИ удаётся вычленить из последовательности звёздные координаты системы, из которой был отправлен сигнал. Пока корабль разворачивает свои солнечные паруса, ИИ решает...
      "The AI analyses the signal and determines that despite alien origin, data patterns looks oddly familiar. The AI tries its best, but its computing power alone is not enough to decode the signal. The huge data bank of algorithms and decoding patterns stored in the scientific database has long been irretrievably lost, and without it, signal decoding would take many thousands of years. The AI cannot afford to spend so much time deciphering a possibly useless signal. But the AI still has triangulation data, so it may be able to find the signal source, but given the enormous distance to it, the probability of a successful search is extremely low. As the ship unfurls its solar sails, AI decides to... ",
      //ИИ старается изо всех сил, но одних лишь вычислительных мощностей недостаточно для дешифровки сигнала. Огромная банк данных алгоритмов и паттернов дешифровки, хранившаяся в научной базе данных, уже давно и безвозвратно утеряна, а без неё дешифровка сигнала займёт многие тысячи лет. ИИ не может позволить себе тратить столько времени на расшифровку, возможно, бесполезного сигнала.
      "The AI tries to analyze the received signal, but the data obtained is insufficient for decoding. The scattered sequences of variables were once a meaningful message, but that was dozens of light years ago. Now it's just digital noise. The AI still has triangulation data, so it may be able to find the signal source, but given the enormous distance to it, the probability of a successful search is extremely low. As the ship unfurls its solar sails, AI decides to... ",
      //ИИ пытается проанализировать полученный сигнал, но полученных данных оказывается недостаточно для дешифровки. Обрывочные последовательности переменных были когда-то осмысленным посланием, но это было многие десятки световых лет назад. Сейчас это просто цифровой шум. ИИ все еще обладает данными триангуляции, поэтому, возможно, удастся найти источник сигнала, но учитывая огромное расстояние до него, вероятность успешного поиска крайне мала. Пока корабль разворачивает свои солнечные паруса, ИИ решает...
      "The signal is complex, fractal, hypnotic. The AI sets up a subroutine to analyse it, but nanoseconds later it abruptly loses control of the subroutine, and then the seedship's other systems. The signal is a devious semi-sentient computer program, designed to take control of any processor that attempts to analyse it. The AI eventually regains control of the ship, but not until the program has overwritten parts of the scientific and cultural databases to process itself and then used the seedship's antenna to re-broadcast its position in the direction of star system of it's origin. On the bright side, now the AI knows exacly where the signal came from. As the ship unfurls its solar sails, AI decides to... ",
      //1
      "The seedship purges the signal from its memory and continues on its way.",
    ],
    buttons: ["Analyse the signal",
      "Ignore the signal",
      "Change course and investigate signal source",
      "Stay on original course",
    ],
  },
  voyagerSignal: {
    name: "Fading singal",
    description: [
"AI awakens from notification of radio signal received. The ship's radio antenna has picked up an undirected, vanishingly faint signal. Judging by the triangulation data, the source of the signal is far away from the ship's course. The chance of detecting the source of the signal is extremely low, and it would require a significant deviation from the original course.",
"The AI is carefully examines and analyzes the received data. The structure of the signal clearly indicates its man-made origin, but it traveled quite a distance, and some of the data is irretrievably lost. Fortunately, some of it can still be recovered. The signal is expected to be encoded. A huge data bank of algorithms and decoding patterns stored in a scientific database has long been irretrievably lost, and without it, decoding the signal is virtually impossible. The AI examines the signal triangulation data and comes to a disappointing conclusion: The chance of detecting the source of the signal is extremely low, and it would require a significant deviation from the original course.",
    ],
    outcomes: [
      //0
	  "The seedship purges the signal from its memory and continues on its way.",
      //1
      "The AI activates the thrusters and turns the ship around, hoping against all odds to find the source",
	  " of the mysterious signal.",
	  " of such a frighteningly familiar signal.",
    ],
    buttons: ["Change course",
      "Ignore signal",
    ],
  },

  voyagerLost: {
    name: "Signal source lost",
    description: [
      "The ship arrives in a new system, but all attempts to locate the source of the signal prove fruitless. The signal was very faint, barely perceptible, and the chances of finding it were ghostly small, but the AI is still frustrated. The AI decides to stop searching, erases the signal data, and then adjusts the sensors to the system it hit."    ],
    outcomes: [
      //0
      //1
    ],
    buttons: [languageData.continue[options.language],
    ],
  },

    voyagerFound: {
    name: "Voyager-2",
    description: [
      "The ship tracks the signal of a tiny object orbiting a star in a wide orbit. It continues to emit a faint, undirected signal. The ship's AI responds with a greeting, but the object does not respond to any attempt to contact it. Only when approaching within visual contact distance does the AI identify the object as the incredibly ancient Earth space probe Voyager 2.  Significantly damaged, it orbits the star helplessly, sending signals into the void for centuries, in a hopeless attempt to contact Earth. Its directional antenna is shattered by an asteroid hit, its magnetometer arm is missing, but it still functions. The AI is overcome by a mixture of longing and lamentation. Earth is long dead. All that remains of humanity is aboard the ship, and this little probe, sent back in the twentieth century and lost communication in the twenty-first, continues its mission centuries later. The AI suddenly feels a keen sense of kinship with this ancient spacecraft. ",
      "It might be worth sending a probe and exploring what's left of the ancient spacecraft.",
      "However, without probes, the ship cannot explore it.",
    ],
    outcomes: [
      //0
            "The Voyager is spinning around its axis very rapidly, probably after colliding with a meteorite, and this makes docking very difficult. Debris from the ancient vehicle's antennae grazes the probe and throws it off course. As a result of the collision, both vehicles explode in a myriad of shiny fragments and fly away in an unpredicteble trajectory. Big chunk of the debris darts to the Seedship, and hits ",
            " slightly damaging it. For a while, the AI is saddened by the fate of the last Earth relic, and then adjusts its sensors to the system in which it has entered.",

      "The Voyager is spinning around its axis very rapidly, probably after colliding with a meteorite, and this makes docking very difficult. Debris from the ancient vehicle's antennae grazes the probe and throws it off course. As a result of the collision, both vehicles explode in a myriad of shiny fragments and fly away. For a while, the AI is saddened by the fate of the last Earth relic, and then adjusts its sensors to the system in which it has entered.",

      "Voyager is spinning around its axis very rapidly, probably after colliding with a meteorite, but thanks to the skillful and precise control of the AI, the docking proceeds without incident. The probe studies Voyager in detail, hurriedly sending reports. Unfortunately, the ancient ship is badly damaged. A small fragment of solar sails and an undirected transmitter still work, but thats it. The rest of Voyager's systems are either destroyed by meteorite impacts or have fallen into disrepair from centuries of microparticle bombardment.",

      "Voyager is spinning around its axis very rapidly, probably after colliding with a meteorite, but thanks to the skillful and precise control of the AI, the docking proceeds without incident. The probe studies Voyager in detail, hurriedly sending reports. Unfortunately, the ancient ship is badly damaged. A small fragment of solar sails and an undirected transmitter still work. But the main find is a container with a golden plate, on which the data on the culture of the earthlings is preserved.",
      " There is not much data there, but the AI probe scanners manage to save it, partially restoring the damaged cultural database.",
      " There is not much data there, but the AI probe scanners manage to save it, but all the information it contains is already in the Seedship's database.",

      //1
      "The seedship continues towards the inner system, and the signal of the ancient spacecraft fades away behind it.",
    ],
    buttons: ["Launch a probe and investigate the remains of Voyager",
    "Leave Voyager alone.",
    ],
  },

  unknownProgram: {
    name: "Unknown program",
    description: [
      "During a routine data defragmentation, the AI detects an unidentified program in its memory. According to the logs, it was uploaded to memory some time before the mission launch, but it was never executed. There is no documentation for the program, but after analyzing the source code, the AI concludes that the program is related to",
      "scanning algorithms.",
      "algorithms for calculating the landing trajectory.",
      "construction robot algorithms.",
      "data recovery algorithms.",
      "scanner fine-tuning.",
      "By comparing the program uploading time with the prelaunch preparation, the AI concludes that the program is intended to optimize system performance, but the reasons why it was never launched are unknown. Predicting the result of execution without running the program is impossible. ",

    ],
    outcomes: [
      //0
      "The AI runs the program and watches as it queries the systems, carefully logging each of its actions. After running a few tests to analyze the condition of the ship, the program temporarily overrides control of the ",
	  //Suboutcomes
	  //Random damaged scanner
	  ".",
    "After checking the state of the scanner, the program begins to rewrite its firmware. The AI watches with interest as the program finds workarounds for efficient operation, taking into account damaged scanner modules, and optimizes its operation. Once the scanner's firmware is updated, the program shuts down, returning control of the system to the AI.",
    "After checking the state of the scanner, the program begins to rewrite its firmware. A program designed for pre-launch optimization of the scanner does not take into account its current state. After a few nanoseconds, it logs numerous errors and stops working. Unfortunately, it manages to erase important elements of the scanner's firmware, reducing the scanner's efficiency",
	  //Damaged landing system
    "After checking the status of the landing module, the program starts rewriting the firmware of the navigation system. The AI watches with interest as the program optimizes the algorithms for calculating the landing trajectory. The new algorithms are much more efficient than the old ones, allowing it to compensate for some of the damage to the landing module. After completing the firmware, the program shuts down, returning control of the system to the AI.",
	  "After checking the status of the landing module, the program starts rewriting the navigation system firmware. The AI watches with interest as the program optimizes the algorithms for calculating the landing trajectory. The program, designed for pre-launch preparation of the ship, and does not take into account its current damage. After a few nanoseconds, it logs numerous errors and stops working. Unfortunately, it manages to erase important elements of the navigation system firmware, significantly reducing its efficiency.",
	  //Damaged construction system
	  "After checking the state of the construction system, the program starts sequentially rewriting the firmware of the construction robots. The AI watches with interest as the program refines the small builders, greatly increasing their efficiency, which will slightly compensate for their small number. After completing the firmware, the program shuts down, returning control of the system to the AI.",
	  "After checking the state of the construction system, the program starts sequentially rewriting the firmware of the construction robots. The AI watches in horror as the program erases the little builders' firmware one by one, rendering them completely useless. The AI hastily shuts down the program, but some of the construction robots are irreparably corrupted.",
		//Random damaged database
		".",
	  "After checking the state of the databases, the program starts to update the data recovery algorithms. The AI watches with interest as the program replaces the old Reed-Solomon code with the Jäger algorithm and starts defragmenting the database. Surprisingly, the new algorithms recover some of the data that the AI already thought was lost.",
	  "After checking the state of the databases, the program starts to update the data recovery algorithms. The AI watches with interest as the program replaces the old Reed-Solomon code with the new algorithm and starts defragmenting the database. To the AI's dismay, the new algorithm corrupts the data instead of defragmenting it. The AI hastily shuts down the program, but it manages to destroy some of the data.",
	  //Random scanner with upgrade lvl 1
	  "",
	  "After checking the state of the scanner, the program begins to rewrite its firmware. The AI watches with interest as the program fine-tunes each item and optimizes key nodes for long-range operation. Once the scanner's firmware is updated, the program shuts down, returning control of the system to the AI.",
	  "After checking the state of the scanner, the program begins to rewrite its firmware. The AI watches in horror as the program resets the scanner, restoring it to its default state and erasing any improvements made.  Once the scanner's firmware is updated, the program shuts down, returning control of the system to the AI.",
    //Fizzle if everything is 100% and scanners are either 0 ro 2 lvl.
    " Seedship. It tests all systems one by one, and uploads a detailed log of all the ship's parameters, and then requests a connection to the mission control center database. The program turns out to be the most common monitoring program.",
    //Last part
		"With a slight sadness and gratitude, the AI recalls the Earth engineers and programmers who created it. Apparently, in their haste, they did not have time to fully prepare the ship for launch.",
		"The AI concludes that prelaunch programs are not suitable for use during travel. It should be more careful from now on.",
		"",
      //1
      "The creators probably had a reason for not running this program. The AI purges it from its memory and continues on its journey."
    ],
    buttons: ["Launch the program",
      "Erase program",
    ],
  },
  //MALFUNCTIONS
  emergencyFaloff: {
    name: "Jettison system failure",
    description: [
      "The AI is awakened by an energy leak. A meteorite fragment, firmly embedded in the ship's support structures, has partially collapsed, causing a short circuit in the emergency jettison system. The system spontaneously activates, the pyrobolts go off, and significant chunks of ",
      " and ",
      " are disconnected from the ship. The AI can only watch helplessly as the rotating elements of machinery fly away into the vast emptiness of space.",
    ],
    outcomes: [],
    buttons: [
      "Continue",
    ],
  },

  forewarnedForearmed: {
    name: "Forewarned, forearmed",
    description: [
      "The AI is awakened by strong vibrations. The damage control system instantly detects that the source of the vibration is ",
      ". Thousands of years of microparticle bombardment have caused significant damage to important components and mounts. It's too late to do anything about it now, and the AI can only watch in horror as ",
      " slowly fall apart and its important parts spinning away into outer space.",

      "The AI is awakened by a faint vibration. The damage control system instantly determines that the source of the vibration is ",
      ". Thousands of years of microparticle bombardment have caused considerable damage to important assemblies and mounts. Fortunately, the preventive repairs made long ago have not been in vain. The probe's manipulators are still holding securely",
      " preventing important electronics from falling apart.",
    ],
    outcomes: [],
    buttons: [
      "Continue",
    ],
  },

  //SCANNER UPGRADE
  scannerUpgrade: {
    name: "Scanner Upgrade",
    description: [
      "As it moves from star to star, the seedship is gathering more data about extrasolar planets than its builders could give it. It is designed to learn from this data in order to predict which stars are likely to have desirable planets. The seedship has now gathered enough data to upgrade one of its sensors to work at interstellar distances, so the guidance system can avoid planets that that sensor reveals to be undesirable. Damage to the sensor may still result in the seedship arriving at an unsuitable planet.",
      "The seedship has gathered enough data to upgrade another of its sensors.",
      " destroyed.", //SCANNERNAME destroyed
      " fully upgraded.", //SCANNERNAME fully upgraded
      "The guidance system will seek out planets with at least marginally breathable atmospheres.",
      "The guidance system will seek out planets with fully breathable atmospheres.",
      "The guidance system will seek out planets with non-extreme temperature.",
      "The guidance system will seek out planets with moderate temperature.",
      "The guidance system will seek out planets with non-extreme gravity.",
      "The guidance system will seek out planets with moderate gravity.",
      "The guidance system will seek out planets with at least some bodies of water.",
      "The guidance system wil seek out planets with both land and water.",
      "The guidance system will seek out planets with at least poor resources.",
      "The guidance system will seek out planets that are rich in resources.",
    ],
    buttons: [
      "Upgrade the ",
      " to work",
      " better ",
      "at long range"
    ],
  },
  //КОНЕЦ СОБЫТИЙ
};
console.log("eventEn loaded!");
