/* РЕФЕРЕНС

var PlanetAtmosphere = [0, "Breathable", "Marginal", "Non-breathable", "Toxic", "Corrosive", "None"];
var PlanetGravity = [0, "Very high", "High", "Moderate", "Low", "Very Low"];
var PlanetTemperature = [0, "Very hot", "Hot", "Moderate", "Cold", "Very Cold"];
var PlanetWater = [0, "Oceans", "Ice caps", "Planet-wide ocean", "Ice-covered surface", "Trace", "None"];
var PlanetResources = [0, "Rich", "Poor", "None"];

*/

function planetLooks(){
    document.getElementById("clouds").style.background = "url(assets/textures/Clouds"+getRandomInt(1,8).toString()+".jpg) repeat-x";

//Визуализация атмосферы
switch(cPlanet.atmosphere) {
  case 'Breathable':
     console.log(cPlanet.atmosphere);
   document.getElementById("clouds").style.opacity = "0.9";
    break;
  case 'Marginal':
     console.log(cPlanet.atmosphere);
   document.getElementById("clouds").style.opacity = "0.5";
    break;
    case 'None':
     console.log(cPlanet.atmosphere);
   document.getElementById("clouds").style.opacity = "0";
    break;

  default:
       console.log(cPlanet.atmosphere);
   document.getElementById("clouds").style.opacity = "0.3";
    break;
};



 if (cPlanet.water = "Oceans"){
   console.log(cPlanet.water);
   document.getElementById("planet").style.background = "url(assets/textures/terra2.jpg) repeat-x";
 } else if (cPlanet.water = "Ice-covered surface"){
   console.log(cPlanet.water);
   document.getElementById("planet").style.background = "url(assets/textures/eris.jpg) repeat-x";
 }else if (cPlanet.water = "None"){
   console.log(cPlanet.water);
   document.getElementById("planet").style.background = "url(assets/textures/ceres.jpg) repeat-x";
 } else {};

};
 //Визуализация воды
