//Этот скрипт отвечает за загрузку скриптов в правильном порядке

function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
}
//addScript("./howler.js"); // Howler.js
//addScript("./index.js"); // Howler.js
addScript("./core.js"); // Typewriter.js
addScript("./data/base.js"); // Core mechanics loading
addScript("./data/endingFunc.js"); // Ending mechanics loading


addScript('./data/lang/events/'+eventLang[options.language]); // Language file loading
addScript("./data/eventsFunc.js"); // Event mechanics loading
if(options.language == 0 && options.addOnFeatures == true){
  addScript("./data/addonEventsFunc.js"); // Event mechanics loading
};

  if(options.addOnFeatures){
      addScript("./data/addonProbingFunc.js");
  //    addScript("./data/addonEndingFunc.js");
      addScript("./data/lang/addon/probing/" + addonProbingLang[options.language]);
      addScript("./data/lang/addon/ending/" + addonEndingLang[options.language]);
  } else {
      addScript("./data/probingFunc.js");
      addScript("./data/lang/probing/" + probingLang[options.language]);
  };

  addScript('./data/lang/ending/' + endingLang[options.language]);
  addScript('./data/lang/description/' + descLang[options.language]);

  addScript("./data/planetGraphicsFunc.js");
  addScript("./data/planetDescription.js");
  addScript("./data/hiscoreFunc.js");
//  addScript("./TextEffects.js");
