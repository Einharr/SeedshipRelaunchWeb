//ОТРИСОВКА ГРАФИКИ ПЛАНЕТЫ
//АТМОСФЕРА
//Выбираем случайные облака
document.getElementById("clouds").style.background = "url(assets/textures/atmosphere/atm"+getRandomInt(1,8).toString()+".png) repeat-x";
//
switch(cPlanet.atmosphere) {
  case 'Breathable':
  case 'Marginal':
  case 'Non-breathable':
    switch(cPlanet.water) {
      case 'Oceans':
      case 'Ice caps':
      case 'Ice-covered surface':
      case 'Planet-wide ocean':
        document.getElementById("clouds").style.opacity = getRandomInt(5,10)/10;
        document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(3, 172, 255, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Blue halo
        break;
        case 'Trace':
        case 'None':
        document.getElementById("clouds").style.opacity = 0;
        document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(255, 3, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Red halo
        break;
      default:
        break;
    };
   break;
   case 'Toxic':
   switch(cPlanet.water) {
     case 'Oceans':
     case 'Ice caps':
     case 'Ice-covered surface':
     case 'Planet-wide ocean':
       document.getElementById("clouds").style.opacity = getRandomInt(5,10)/10;
       document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(23, 255, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Green halo
       break;
       case 'Trace':
       case 'None':
       document.getElementById("clouds").style.opacity = 0;
       document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(23, 255, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Green halo
       break;
     default:
       break;
   };
   break;
   case 'Corrosive':
     switch(cPlanet.water) {
       case 'Oceans':
       case 'Ice caps':
       case 'Ice-covered surface':
       case 'Planet-wide ocean':
         document.getElementById("clouds").style.opacity = getRandomInt(5,10)/10;
         document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(255, 98, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Orange halo
         break;
         case 'Trace':
         case 'None':
         document.getElementById("clouds").style.opacity = 0;
         document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(255, 98, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //Orange halo
         break;
       default:
         break;
     };
   break;
    case 'None':
   document.getElementById("clouds").style.opacity = "0";
   document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(255, 255, 255, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //White halo
    break;
  default:
   document.getElementById("clouds").style.opacity = "0";
   document.getElementById("planetAnimation").style.boxShadow = "0 0 60px -20px rgba(255, 255, 255, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23)"; //White halo
    break;



/* OLD
  switch(cPlanet.atmosphere) {
    case 'Breathable':
     document.getElementById("clouds").style.opacity = "0.9";
      break;
    case 'Marginal':
     document.getElementById("clouds").style.opacity = "0.5";
      break;
      case 'None':
     document.getElementById("clouds").style.opacity = "0";
      break;
    default:
     document.getElementById("clouds").style.opacity = "0.3";
      break;
  };
*/
//ВОДА

switch(cPlanet.water) {
  case 'Oceans':
     document.getElementById("planet").style.background = "url(assets/textures/BarrenWintWater/BW"+getRandomInt(1,10).toString()+".png) repeat-x";
    break;
  case 'Ice caps':
     document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,1).toString()+".png) repeat-x";
      break;
  case 'Ice-covered surface':
      document.getElementById("planet").style.background = "url(assets/textures/Ice/Ice_"+getRandomInt(1,10).toString()+".png) repeat-x";
    break;
  case 'Planet-wide ocean':
      document.getElementById("planet").style.background = "url(assets/textures/Ocean/O"+getRandomInt(1,3).toString()+".png) repeat-x";
    break;
    case 'Trace':
     document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,1).toString()+".png) repeat-x";
    break;
    case 'None':
     document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,1).toString()+".png) repeat-x";
    break;
  default:
    break;
};

//ТЕМПЕРАТУРА
  switch(cPlanet.temperature) {
    case 'Moderate':
      break;
    case 'Hot':
      break;
    case 'Cold':
      break;
      case 'Very Hot':
        break;
      case 'Very Cold':
        break;
    default:
      break;
  };

//ГРАВИТАЦИЯ
  switch(cPlanet.gravity) {
    case 'Moderate':
      break;
    case 'High':
      break;
    case 'Low':
      break;
      case 'Very High':
        break;
      case 'Very Low':
        break;
    default:
      break;
  };

//РЕСУРСЫ
  switch(cPlanet.resources) {
    case 'Rich':
      break;
    case 'Poor':
      break;
      case 'None':
      break;

    default:
      break;
  };
