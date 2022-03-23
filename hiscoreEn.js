//Инициализация пробирования
function hiscoreText(GoTime, spaceGO, ) {
  this.GoTime = GoTime;
  this.spaceGO = spaceGO;

}


var SpaceGOTime = [

]

var SpaceGameOver = [
  "The ship drifts for",
  "of years, until",

  "the slow bombardment of cosmic dust wears it away to nothing.",
  "it becomes one more crater on the surface of a dead world.",
  "it is pulled in by the gravity of a gas giant and burns up in its atmosphere.",
  "it is pulled in by the gravity of a star and incinerated.",
  "it is pulled into a black hole and destroyed leaving no trace.",
  "alien explorers find it and add it to a museum of extinct species.",
  "eventually the ship crashes on a barren planet. Traces of organic matter and bacteria from colonist's remains eventually lead to the creation of new life.",
];

var cProbing = new probingText(
  SpaceGOTime,
  SpaceGameOver,
)





The ship drifts for print either("thousands", "tens of thousands", "hundreds of thousands", "millions") of years, until
	print either(
		"the slow bombardment of cosmic dust wears it away to nothing.",
		"it becomes one more crater on the surface of a dead world.",
		"it is pulled in by the gravity of a gas giant and burns up in its atmosphere.",
		"it is pulled in by the gravity of a star and incinerated.",
		"it is pulled into a black hole and destroyed leaving no trace.",
		"alien explorers find it and add it to a museum of extinct species." )
