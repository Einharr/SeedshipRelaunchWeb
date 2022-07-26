  function planetGraphics(){

  //Генерируем новую планету

    document.getElementById('planetAnimation').style.transform = "scale("+planetScale+")";

    if (cPlanet.anomalies.includes("Moon")){
      document.getElementById('moon').style.opacity = 1;
      document.getElementById("moonBg").style.background = "url(assets/textures/Moon/M"+getRandomInt(1,4).toString()+".png) repeat-x";
    }
    else {
      document.getElementById('moon').style.opacity = 0;

    }


    //ОТРИСОВКА ГРАФИКИ ПЛАНЕТЫ

    //ВОДА

    switch(cPlanet.water) {
      case 'Oceans':
         if (cPlanet.anomalies.includes("Vegetation")){
           document.getElementById("planet").style.background = "url(assets/textures/Terrestrial/T"+getRandomInt(1,10).toString()+".png) repeat-x";
         }else{
           document.getElementById("planet").style.background = "url(assets/textures/BarrenWithWater/BW"+getRandomInt(1,10).toString()+".png) repeat-x";
         };
        break;
      case 'Ice caps':
          if (cPlanet.anomalies.includes("Vegetation")){
            document.getElementById("planet").style.background = "url(assets/textures/BarrenWithV/BWV"+getRandomInt(1,4).toString()+".png) repeat-x";
          }else{
            document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,2).toString()+".png) repeat-x";
          };
         document.getElementById("iceCaps").style.background = "url(assets/textures/IceCaps/IC"+getRandomInt(1,2).toString()+".png) repeat-x";
         document.getElementById("iceCaps").style.opacity = 0.7;
          break;
      case 'Ice-covered surface':
          document.getElementById("planet").style.background = "url(assets/textures/Ice/Ice_"+getRandomInt(1,10).toString()+".png) repeat-x";
        break;
      case 'Planet-wide ocean':
          document.getElementById("planet").style.background = "url(assets/textures/Ocean/O"+getRandomInt(1,3).toString()+".png) repeat-x";
        break;
        case 'Trace':
          if (cPlanet.anomalies.includes("Vegetation")){
            document.getElementById("planet").style.background = "url(assets/textures/BarrenWithV/BWV"+getRandomInt(1,4).toString()+".png) repeat-x";
          }else{
            document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,2).toString()+".png) repeat-x";
          };
        break;
        case 'None':
          if (cPlanet.anomalies.includes("Vegetation")){
            document.getElementById("planet").style.background = "url(assets/textures/BarrenWithV/BWV"+getRandomInt(1,4).toString()+".png) repeat-x";
          }else{
            document.getElementById("planet").style.background = "url(assets/textures/Barren/B"+getRandomInt(1,2).toString()+".png) repeat-x";
          };
        break;
      default:
        break;
    };

    //АТМОСФЕРА
    //Цикл дня и ночи
    document.getElementById("darkness").style.background = "url(assets/textures/Special/darkness.png) repeat-x";
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
            document.getElementById("clouds").style.opacity = getRandomInt(4,8)/10;
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
  };
};

