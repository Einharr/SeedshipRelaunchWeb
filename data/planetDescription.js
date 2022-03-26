//генератор описания планеты
function planetDescription(cPlanet) {

  description = null;


  if (planetsVisited == 1) {
    description = descLang.planet.orbit[0];//"The seedship is in orbit of the ";
  } else {
    description = descLang.planet.orbit[1];//"The seedship enters orbit of the ";
  };

  typeR = getRandomInt(0, 2);

  if (options.language == 1) {
    wordEnding = ["го", "й", "й"];
  } else {
    wordEnding = ["", "", ""];
  }

  planetNumber = [
    descLang.planet.planetNumber[0] + wordEnding[typeR],
    descLang.planet.planetNumber[1] + wordEnding[typeR],
    descLang.planet.planetNumber[2] + wordEnding[typeR],
    descLang.planet.planetNumber[3] + wordEnding[typeR],
    descLang.planet.planetNumber[4] + wordEnding[typeR],
    descLang.planet.planetNumber[5] + wordEnding[typeR],
    descLang.planet.planetNumber[6] + wordEnding[typeR],
    descLang.planet.planetNumber[7] + wordEnding[typeR],
    descLang.planet.planetNumber[8] + wordEnding[typeR],
    descLang.planet.planetNumber[9] + wordEnding[typeR],
];

  description += planetNumber[getRandomInt(0, 9)];

  if (typeR == 0) {
    description += descLang.planet.type[0]; //" moon of a gas giant orbiting ";
  } else {
    description += descLang.planet.type[1]; //" planet of ";
  }
  starType = [descLang.planet.starType[0], descLang.planet.starType[1], descLang.planet.starType[2], descLang.planet.starType[3], descLang.planet.starType[4], descLang.planet.starType[5], descLang.planet.starType[6], descLang.planet.starType[7]];

  description += starType[getRandomInt(0, 7)] + descLang.planet.star;

  if (planetsVisited == 1) {
    description += descLang.planet.planetFeatures[0];
  } else {
    starType2 = [descLang.planet.starType2[0], descLang.planet.starType2[1], descLang.planet.starType2[2], descLang.planet.starType2[3], descLang.planet.starType2[4], descLang.planet.starType2[5], descLang.planet.starType2[6], descLang.planet.starType2[7], descLang.planet.starType2[8], descLang.planet.starType2[9], descLang.planet.starType2[10]];
    _r = getRandomInt(0, 11);
    switch (_r) {
      case 0:
        description += descLang.planet.systemFeatures[0];//"This system is part of a dense star cluster, and the sky is awash with light.";
        break;
      case 1:
        description += descLang.planet.systemFeatures[1];//"This system is close to a star-forming region, which is visible as a glowing cloud that fills half the sky.";
        break;
      case 2:
        description += descLang.planet.systemFeatures[2];//"This system is in an area of dense interstellar dust which hides most of the brightness of the milky way.";
        break;
      case 3:
        description += descLang.planet.systemFeatures[3];//"This system has a dense asteroid belt, which appears as a throng of stars sliding slowly across the sky.";
        break;
      case 4:
        description += descLang.planet.systemFeatures[4];//"A spectacular comet spreads its tail across the sky.";
        break;
      case 5:
        description += descLang.planet.systemFeatures[5];//"A small black hole orbits the star, pulling a thin streamer of starstuff from its surface which spirals into nothing.";
        break;
      case 6:
        description += descLang.planet.systemFeatures[6] + starType2[getRandomInt(0, 7)] + descLang.planet.systemFeatures[7];
        break;
      case 7:
        description += descLang.planet.systemFeatures[8];//"The star's light reflects off a nearby nebula.";
        break;
      case 8:
        description += descLang.planet.systemFeatures[9];//"The seedship has found its way almost to the edge of the galaxy, and the universe appears split between a wall of darkness and a wall of light.";
        break;
      case 9:
        description += descLang.planet.systemFeatures[10];//"One of the system's gas giants is almost large enough to ignite as a star, and it smoulders with faint red light.";
        break;
      case 10:
        description += descLang.planet.systemFeatures[11];//"This planet's orbit is at an angle to the system's ecliptic, suggesting it might be an extrasolar capture or the victim of an unimaginably violent primordial collision.";
        break;
      case 11:
        description += descLang.planet.systemFeatures[12];//"This star is one of dozens orbiting a massive black hole that looms in the distance like a malevolent eye.";
        break;
    };

    if (off_course == true) {
      description += descLang.planet.planetFeatures[3];;
    };
    if (simulation == true) {
      description = descLang.planet.planetFeatures[2];
    };
    if (alienObservers == true) {
      description += descLang.planet.planetFeatures[1];
    };

    if (aliensDead == true) {
      description += " Remnants of satellites and space debris in orbit indicate that the planet was once inhabited.";
    };
  };

  return description;

};
