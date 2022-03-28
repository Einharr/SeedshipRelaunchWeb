//Опции
var options = {
  firstStart: true,
  language: 0,
  soundEnabled: false,
  music: 100,
  graphics: true,
  clouds: true,
  planet: true,
  original: false,
  addOnFeatures: false,
  debug: false,
  platform: "",
};
var state = "none";


var userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
  {device: 'Symbian', platform: /Symbian/},
  {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Tablet OS', platform: /Tablet OS/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
  {device: 'Macintosh', platform: /Macintosh/}
];
var platform = navigator.userAgent;
function getPlatform() {
  for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
          return userDeviceArray[i].device;
      }
  }
  return 'Неизвестная платформа!' + platform;
}
options.platform=getPlatform();
console.log('Ваша платформа: ' + getPlatform());
console.log('Платформа в опциях: ' + options.platform);

loading = false;

var curVersion = "0.9.3";

if (localStorage.getItem("Options") !== null) {
  options = gameload("Options");
}

//google autologin
if (options.autoLogin == true) {
} else if (options.autoLogin == false) {
};
//Classic UI switch
if (options.original == true) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = './classic.css';
  link.media = 'all';
  head.appendChild(link);
} else if (options.original == false) {
};

var myAudio = document.getElementById("TitleAudio");
document.getElementById("TitleAudio").loop = true;
var isPlaying = false;
//window.plugins.NativeAudio.loop( 'music' );

function togglePlay() {
//  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};

function play(audioSrc) {
  var audio = new Audio(audioSrc);
  audio.play();
  return audio;
}


//Сохранение и загрузка
////Save and load
function gamesave(obj, name) {
  var savedata = JSON.stringify(obj); //сериализуем переменную serialize the variable
  localStorage.setItem(name, savedata); //пишем ее в хранилище write it to the repository
};

function gameload(name) {
  var loaddata = JSON.parse(localStorage.getItem(name)) //парсим его обратно объект parse it back as an object
  return loaddata;
};


//HISCORE REFRESH
function pastMissionsRefresh(obj) {
  if (localStorage.getItem("Hiscore") !== null) {
    var loaddata = JSON.parse(localStorage.getItem("Hiscore"))
  } else {
    var loaddata = [];
  };
  obj[0] = loaddata.length + 1;
  loaddata.push(obj);

  var savedata = JSON.stringify(loaddata); //сериализуем переменную
  localStorage.setItem("Hiscore", savedata); //пишем ее в хранилище
};

//Функция загрузки настроек
//Settings load function
function gameinitialize() {

  //Музыка
  //Music
/*  if (options.soundEnabled == true) {
    //togglePlay()
    //window.plugins.NativeAudio.loop( 'music' );
    setTimeout(() => {  window.plugins.NativeAudio.loop( 'music' ); }, 2000);
  } else if (options.soundEnabled == false) {

        setTimeout(() => {  window.plugins.NativeAudio.stop( 'music' ); }, 2000);

  }; */

  if (options.firstStart == true) {
    //Инициализация языка пользователя
    //User language initialization
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);

    if (userLang == "ru-RU") {
      options.language = 1;
    } else if (userLang == "en-US") {
      options.language = 0;
    } else if (userLang == "es-ES") {
      options.language = 3;
    } else {
      options.language = 0;
    };
    options.firstStart = false;

  } else if (options.firstStart == false) {
  };

  //Рисуем облака
  //Draw clouds
  if (options.clouds == true) {
    document.getElementById('ClBg').style.background = "transparent url(assets/clouds3.png) repeat top center";
  } else if (options.clouds == false) {
    document.getElementById('ClBg').style.background = "transparent url() repeat top center";
  };

  //Рисуем планету
  //Draw the planet
  if (options.planet == true) {
    document.getElementById('planetAnimation').style.display = "";
    document.getElementById('moonAnimation').style.display = "";
  } else if (options.planet == false) {
    document.getElementById('planetAnimation').style.display = "none";
    document.getElementById('moonAnimation').style.display = "none";
  };

  //Рисуем окно дебага
  //Draw a debug window
  if (options.debug == true) {
    document.getElementById('debugSwitch').style.visibility = "Visible";
  } else if (options.debug == false) {
    document.getElementById('debugSwitch').style.visibility = "Hidden";
  };



};
//Функции листов выдачи текста
//Text output sheet functions
function arrList(Arr) {
  //  console.log(Arr);
  return Arr.join('<br>');
}
function endList(Arr) {
  // console.log(Arr);
  return Arr.join(' ');
}
//Версия в правом нижнем углу
//Version in the lower right corner
var version = document.getElementById("version");
version.innerHTML = curVersion;
//
function menuWipe() {
  //Очищаем стартовое меню
  //Cleaning up the start menu
  const myNode = document.getElementById("ShipState");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
};

function langWipe() {
  //удаляем ноду с языком
  //remove node with language
  document.getElementById("endingLg").remove();
};

//ABOUT
function about() {
  menuWipe();

  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  crcol.className = "col futurepanel";
  crcol.id = "About";
  ShipState.appendChild(crcol);

  var more = document.getElementById("About");
  var para = document.createElement("p");
  para.id = "About1";
  para.innerHTML = AboutBtn[options.language].toUpperCase()+'<br>'+AboutLine1[options.language];
  more.appendChild(para);



  var more = document.getElementById("About");
  var para = document.createElement("p");
  para.id = "About2";
  para.innerHTML = '<br>'+AboutLine2[options.language];
  more.appendChild(para);



  var more = document.getElementById("About");
  var para = document.createElement("p");
  para.id = "About2";
  para.innerHTML = '<br>'+AboutLine3[options.language];
  more.appendChild(para);



  var backRow = document.createElement("div");
  backRow.className = "row";
  backRow.id = "backRow";
  ShipState.after(backRow);

  var more = document.getElementById("credits");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function() {
  backRow.remove();
  createMenu();
  }
  btn.innerHTML = languageData.menuBack[options.language];
  backRow.appendChild(btn);
};
//ТИТРЫ
//TITLES
function credits() {
  menuWipe();

  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  crcol.className = "col";
  crcol.id = "creditsJohn";
  ShipState.appendChild(crcol);


  var more = document.getElementById("creditsJohn");
  var para = document.createElement("p");
  para.id = "credits";
  //  para.innerHTML=arrList(CreditsArr[options.language]) + "<br>" + "<br>";
  para.innerHTML = "Seedship created by" + "<br>" + "John Ayliff";
  more.appendChild(para);

  var creditRow = document.createElement("div");
  creditRow.className = "row";
  creditRow.id = "creditRow";
  ShipState.after(creditRow);

  var creditCol1 = document.createElement("div");
  creditCol1.className = "col";
  creditCol1.id = "creditCol1";
  creditRow.appendChild(creditCol1);

  var more = document.getElementById("menu");
  var para = document.createElement("p");
  para.id = "originalCredits";
  para.innerHTML=arrList(PersonalitiesOriginal) + "<br>" + "<br>";
  creditCol1.appendChild(para);

  var creditCol2 = document.createElement("div");
  creditCol2.className = "col";
  creditCol2.id = "creditCol2";
  creditRow.appendChild(creditCol2);

  var more = document.getElementById("menu");
  var para = document.createElement("p");
  para.id = "remakeCredits";
  para.innerHTML=arrList(Personalities) + "<br>" + "<br>";
  creditCol2.appendChild(para);

  var backRow = document.createElement("div");
  backRow.className = "row";
  backRow.id = "backRow";
  creditRow.after(backRow);

  var more = document.getElementById("credits");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function() {
   creditRow.remove();
   backRow.remove();
  createMenu();
  }
  btn.innerHTML = languageData.menuBack[options.language];
  backRow.appendChild(btn);
};
//ОТРИСОВКА МЕНЮ
//DRAWING THE MENU
function createMenu() {
  state = "menu";
  menuWipe();
  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  crcol.className = "col";
  crcol.id = "menu";
  ShipState.appendChild(crcol);

  var btcg = document.createElement("div");
  btcg.className = "futurepanel";
  btcg.id = "BTCG";
  ShipState.appendChild(btcg);

  document.getElementById('BTCG').addEventListener('click', function() {
      location.href = 'https://johnayliff.itch.io/beyond-the-chiron-gate'
  }, false);

  var btcgText = document.createElement("p");
  btcgText.innerHTML = "<b>COMING SOON!</b>";
  btcg.appendChild(btcgText);

  var btcgImage = document.createElement('img');
  btcgImage.id = "btcgImage";
  btcgImage.src = "assets/btcg.png";
  btcg.appendChild(btcgImage);

  var btcgText = document.createElement("p");
  btcgText.innerHTML = "<b>by John Ayliff</b>";
  btcg.appendChild(btcgText);

  var more = document.getElementById("menu");
  var para = document.createElement("h1");
  para.className = "title";
  para.id = "gametitle";
  para.innerHTML = "SEEDSHIP";
  more.appendChild(para);

  var more = document.getElementById("menu");
  var para = document.createElement("p");
  para.className = "subtitle";
  para.id = "gametitle";
  para.innerHTML = "RELAUNCH";
  more.appendChild(para);

  var more = document.getElementById("menu");
  var para = document.createElement("br");
  more.appendChild(para);

  //Добавляем новые кнопки

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_NG";
  more.appendChild(row);

  var more = document.getElementById("row_NG");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = intro;
  btn.innerHTML = languageData.menuStart[options.language];
  more.appendChild(btn);

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_CT";
  more.appendChild(row);

  var more = document.getElementById("row_CT");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "loadbutton";
  btn.onclick = "";
  btn.innerHTML = languageData.menuLoad[options.language];
  more.appendChild(btn);

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_PM";
  more.appendChild(row);

  var more = document.getElementById("row_PM");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = menuPastMissions;
  btn.innerHTML = languageData.menuPastM[options.language];
  more.appendChild(btn);

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_ST";
  more.appendChild(row);

  var more = document.getElementById("row_ST");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = menuSettings;
  btn.innerHTML = languageData.menuSettings[options.language];
  more.appendChild(btn);

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_AB";
  more.appendChild(row);

  var more = document.getElementById("row_AB");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = about;
  btn.innerHTML = "ABOUT";
  more.appendChild(btn);

  var more = document.getElementById("menu");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_CR";
  more.appendChild(row);

  var more = document.getElementById("row_CR");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = credits;
  btn.innerHTML = languageData.menuCredits[options.language];
  more.appendChild(btn);

  //Подготовка к загрузке игровых данных
  //Preparing to download game data
  if (localStorage.getItem("Savedata") !== null) {
    document.getElementById("loadbutton").style.backgroundColor = "rgba(120, 200, 255, 0.6)";
    document.getElementById("loadbutton").onclick = function () {
      loading = true;
      gameStart();
    };
  } else {
    document.getElementById("loadbutton").style.backgroundColor = "rgba(199, 211, 219, 0.2)";
    document.getElementById("loadbutton").onclick = "";
  }
  //

};
//МЕНЮ НАСТРОЕК
//Menu Settings
function menuSettings() {
  //Очищаем стартовое меню
  // Cleaning up the start menu
  menuWipe();
  //Рисуем меню настроек
  //// Draw the settings menu
  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  crcol.className = "futurepanel";
  crcol.id = "settings";
  ShipState.appendChild(crcol);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Title";
  more.appendChild(row);

  var more = document.getElementById("row_Title");
  var para = document.createElement("h4");
  para.id = "settingsTitle";
  para.innerHTML = languageData.menuSettings[options.language] + "<br>";
  more.appendChild(para);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Lang";
  more.appendChild(row);

  var more = document.getElementById("row_Lang");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_Lang";
  more.appendChild(row);

  var more = document.getElementById("col1_Lang");
  var para = document.createElement("h6");
  para.id = "language";
  para.innerHTML = languageData.settingsLangCh[options.language] + ": " + languageData.settingsLanguage[options.language];
  more.appendChild(para);


  var more = document.getElementById("row_Lang");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_Lang";
  more.appendChild(row);

  // ЯЗЫКОВОЙ ДРОПДАУН
 //LANGUAGE DROPDOWN

  function langSwitch() {

    var selected = document.getElementById("l1").value;
    selectedLang = languageData.settingsLanguage.indexOf(selected);
    console.log(selectedLang, selected);
    options.language = selectedLang;
    menuSettings();
  };

  //List of completed languages, ready for prod
  var readyLang = [0, 1, 3, 5, 8, 9];

  function addSelect(divname, lang) {
    var newDiv = document.createElement('div');
    //    var html = '<select id="l1">', data = ["English","Русский"], i;
    var html = '<select id="l1">', data = languageData.settingsLanguage, i;
    for (i = 0; i < readyLang.length; i++) {
      html += "<option value='" + data[readyLang[i]] + "'>" + data[readyLang[i]] + "</option>";
    }
    html += '</select>';
    newDiv.id = "languageData";
    newDiv.innerHTML = html + "<br>";
    document.getElementById("col2_Lang").appendChild(newDiv);
  }

  addSelect('language', options.language);
  document.getElementById("l1").value = languageData.settingsLanguage[options.language];
  var selected = document.getElementById("l1");
  selected.addEventListener('change', langSwitch);

  //
  //Google Sign in
  console.log(options.platform)
   if(options.platform=="Android"){
    var more = document.getElementById("settings");
    var row = document.createElement("div");
    row.className = "row menuItem";
    row.id = "row_google";
    more.appendChild(row);

    var more = document.getElementById("row_google");
    var row = document.createElement("div");
    row.className = "col";
    row.id = "col1_GUI";
    more.appendChild(row);

    var more = document.getElementById("col1_GUI");
    var para = document.createElement("h6");
    para.id = "GoogleStr";
    para.innerHTML = "Google Sign-in";
    more.appendChild(para);

    var more = document.getElementById("row_google");
    var row = document.createElement("div");
    row.className = "col";
    row.id = "col2_GUI";
    more.appendChild(row);


    var more = document.getElementById("col2_GUI");
    var btn = document.createElement("div");
    btn.className = "google-btn";
    btn.id = "googlebutton";
    more.appendChild(btn);

    var gglWrapper = document.createElement("div");
    gglWrapper.className = "google-icon-wrapper";
    btn.appendChild(gglWrapper);

    var gglIcon = document.createElement("img");
    gglIcon.setAttribute('src', 'assets/google-logo.png');
    gglIcon.className = "google-icon";
    gglWrapper.appendChild(gglIcon);

    var gglTxt = document.createElement("p");
    gglTxt.className = "btn-text";
    gglTxt.innerHTML = "SIGN IN";
    btn.appendChild(gglTxt);

  //Google logging functions

  function googleSignIn(){
          cordova.plugins.playGamesServices.auth(function() {
            // On logged in
                    options.autoLogin = true;
                    gglTxt.innerHTML = "SIGN OUT";
                    var btn = document.getElementById("googlebutton");
                    btn.onclick = function () {
                        googleSignOut();
                    };
        });
        };
  function googleSignOut(){
            cordova.plugins.playGamesServices.signOut(function() {
              // On logged out
                    options.autoLogin = false;
                    gglTxt.innerHTML = "SIGN IN";
                    var btn = document.getElementById("googlebutton");
                    btn.onclick = function () {
                          googleSignIn();
                    };
          });
          };

      cordova.plugins.playGamesServices.isSignedIn(function (result) {
      if(result.isSignedIn) {
          gglTxt.innerHTML = "SIGN OUT";
          var btn = document.getElementById("googlebutton");
          btn.onclick = function () {
              googleSignOut();
          };
      } else {
        gglTxt.innerHTML = "SIGN IN";
        var btn = document.getElementById("googlebutton");
        btn.onclick = function () {
              googleSignIn();
        };
      }
      }, function() {
          // On error: Auth check could not be done
      });
  };
  //
  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Mus";
  more.appendChild(row);

  var more = document.getElementById("row_Mus");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_Mus";
  more.appendChild(row);

  var more = document.getElementById("col1_Mus");
  var para = document.createElement("h6");
  para.id = "music";
  para.innerHTML = languageData.settingsMusic[options.language];
  more.appendChild(para);

  var more = document.getElementById("row_Mus");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_Mus";
  more.appendChild(row);

  var music = document.getElementById("col2_Mus");
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "toggle";
  checkbox.name = "name";
  checkbox.checked = options.soundEnabled;
  checkbox.onclick = function () {
    if (checkbox.checked == true) {
      options.soundEnabled = true;
    } else if (checkbox.checked == false) {
      options.soundEnabled = false;
    };
  };
  checkbox.id = "musicToggle";
  music.appendChild(checkbox);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Graph";
  more.appendChild(row);

  var more = document.getElementById("row_Graph");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col_Graph";
  more.appendChild(row);

  var more = document.getElementById("col_Graph");
  var para = document.createElement("h4");
  para.id = "graphics";
  para.innerHTML = languageData.settingsGraphics[options.language];
  more.appendChild(para);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Clo";
  more.appendChild(row);

  var more = document.getElementById("row_Clo");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_Clo";
  more.appendChild(row);

  var more = document.getElementById("col1_Clo");
  var para = document.createElement("h6");
  para.id = "cloudsSt";
  para.innerHTML = languageData.settingsClouds[options.language];
  more.appendChild(para);

  var more = document.getElementById("row_Clo");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_Clo";
  more.appendChild(row);

  var clouds = document.getElementById("col2_Clo");
  var checkboxCl = document.createElement('input');
  checkboxCl.type = "checkbox";
  checkboxCl.className = "toggle";
  checkboxCl.name = "name2";
  checkboxCl.checked = options.clouds;
  checkboxCl.id = "cloudsToggle";
  checkboxCl.onclick = function () {
    if (checkboxCl.checked == true) {
      options.clouds = true;
    } else if (checkboxCl.checked == false) {
      options.clouds = false;
    };
  };
  clouds.appendChild(checkboxCl);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Pla";
  more.appendChild(row);

  var more = document.getElementById("row_Pla");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_Pla";
  more.appendChild(row);

  var more = document.getElementById("col1_Pla");
  var para = document.createElement("h6");
  para.id = "planetSt";
  para.innerHTML = languageData.settingsPlanet[options.language];
  more.appendChild(para);

  var more = document.getElementById("row_Pla");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_Pla";
  more.appendChild(row);

  var planet = document.getElementById("col2_Pla");
  var checkboxPl = document.createElement('input');
  checkboxPl.type = "checkbox";
  checkboxPl.className = "toggle";
  checkboxPl.name = "name3";
  checkboxPl.checked = options.planet;
  checkboxPl.id = "planetToggle";
  checkboxPl.onclick = function () {
    if (checkboxPl.checked == true) {
      options.planet = true;
    } else if (checkboxPl.checked == false) {
      options.planet = false;
    };
  };
  planet.appendChild(checkboxPl);

  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_Add";
  more.appendChild(row);

  var more = document.getElementById("row_Add");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_Add";
  more.appendChild(row);

  var more = document.getElementById("col1_Add");
  var para = document.createElement("h6");
  para.id = "addonSt";
  para.innerHTML = languageData.menuAddon[options.language];
  more.appendChild(para);

  var more = document.getElementById("row_Add");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_Add";
  more.appendChild(row);

  var addon = document.getElementById("col2_Add");
  var checkboxAl = document.createElement('input');
  checkboxAl.type = "checkbox";
  checkboxAl.className = "toggle";
  checkboxAl.name = "name4";
  checkboxAl.checked = options.addOnFeatures;
  checkboxAl.id = "addonToggle";
  checkboxAl.onclick = function () {
    if (checkboxAl.checked == true) {
      options.addOnFeatures = true;
    } else if (checkboxAl.checked == false) {
      options.addOnFeatures = false;
    };
  };
  addon.appendChild(checkboxAl);

  //Classic UI
  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_CUI";
  more.appendChild(row);

  var more = document.getElementById("row_CUI");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_CUI";
  more.appendChild(row);

  var more = document.getElementById("col1_CUI");
  var para = document.createElement("h6");
  para.id = "UIStr";
  para.innerHTML = "Classic UI";
  more.appendChild(para);

  var more = document.getElementById("row_CUI");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_CUI";
  more.appendChild(row);

  var addon = document.getElementById("col2_CUI");
  var checkboxA2 = document.createElement('input');
  checkboxA2.type = "checkbox";
  checkboxA2.className = "toggle";
  checkboxA2.name = "name5";
  checkboxA2.checked = options.original;
  checkboxA2.id = "UIToggle";
        checkboxA2.onclick = function(){
          if (checkboxA2.checked == true){
            options.original = true;
                          if (options.platform == "Android") {
                            var data = {
                              achievementId: "CgkIya77kP0DEAIQFQ"
                              //OriginalGameWasBetter
                            };
                            cordova.plugins.playGamesServices.unlockAchievement(data, function () {
                              // On success
                            }, function () {
                              // On error
                            });
                          };
          } else if (checkboxA2.checked == false){
            options.original = false;
          };
        };
  addon.appendChild(checkboxA2);

  //Debug Functionality
  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_dbg";
  more.appendChild(row);

  var more = document.getElementById("row_dbg");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col1_dbg";
  more.appendChild(row);

  var more = document.getElementById("col1_dbg");
  var para = document.createElement("h6");
  para.id = "DebugStr";
  para.innerHTML = "Debug Window";
  more.appendChild(para);

  var more = document.getElementById("row_dbg");
  var row = document.createElement("div");
  row.className = "col";
  row.id = "col2_dbg";
  more.appendChild(row);

  var addon = document.getElementById("col2_dbg");
  var checkboxA3 = document.createElement('input');
  checkboxA3.type = "checkbox";
  checkboxA3.className = "toggle";
  checkboxA3.name = "name6";
  checkboxA3.checked = options.debug;
  checkboxA3.id = "dabugToggle";
  checkboxA3.onclick = function () {
    if (checkboxA3.checked == true) {
      options.debug = true;
    } else if (checkboxA3.checked == false) {
      options.debug = false;
    };
  };
  addon.appendChild(checkboxA3);
  //
  var more = document.getElementById("settings");
  var row = document.createElement("div");
  row.className = "row menuItem";
  row.id = "row_bck";
  more.appendChild(row);

  var more = document.getElementById("row_bck");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function () {
    gamesave(options, "Options");
    window.location.reload(true);

  };
  btn.innerHTML = languageData.menuBack[options.language];
  more.appendChild(btn);

  /*
    var more=document.getElementById("settings");
      var btn=document.createElement("button");
      btn.className="futurebutton";
      btn.id = "menubutton";
      btn.onclick = saveData;
      btn.innerHTML=languageData.settingsApply[options.language];
      more.appendChild(btn);

  */
};
//Past Missions Menu
function menuPastMissions() {
  //Очищаем стартовое меню
  menuWipe();
  //Рисуем блок со статами корабля
  var ShipState = document.getElementById("ShipState");
  ShipState.style.maxHeight = "80vh";
  var crcol = document.createElement("div");
  crcol.className = "futurepanel col center-block";
  crcol.id = "shipstatspanel";
  ShipState.appendChild(crcol);

  var shipstatspanel = document.getElementById("shipstatspanel");
  var crcol = document.createElement("div");
  crcol.className = "futurepanel__header";
  crcol.id = "shipstats_header";
  shipstatspanel.appendChild(crcol);

  var shipstats_header = document.getElementById("shipstats_header");
  var para = document.createElement("h4");
  para.innerHTML = languageData.menuPastM[options.language];
  shipstats_header.appendChild(para);

  var shipstatspanel = document.getElementById("shipstatspanel");
  var crrow = document.createElement("div");
  crrow.className = "row";
  crrow.id = "header_row";
  shipstatspanel.appendChild(crrow);

  //COLS!
  //COL NUM#
  var crrow = document.getElementById("header_row");
  var number = document.createElement("div");
  number.className = "col-1";
  number.id = "col_number";
  crrow.appendChild(number);

  var crrow = document.getElementById("col_number");
  var text = document.createElement("p");
  text.id = "col_number_text";
  text.innerHTML = "#";
  crrow.appendChild(text);

  //COL DATE
  var crrow = document.getElementById("header_row");
  var number = document.createElement("div");
  number.className = "col-3";
  number.id = "col_date";
  crrow.appendChild(number);

  var crrow = document.getElementById("col_date");
  var text = document.createElement("p");
  text.id = "col_date_text";
  text.innerHTML = languageData.score[options.language].Date[0];
  crrow.appendChild(text);

  //COL PLANET
  var crrow = document.getElementById("header_row");
  var number = document.createElement("div");
  number.className = "col-3";
  number.id = "col_planet";
  crrow.appendChild(number);

  var crrow = document.getElementById("col_planet");
  var text = document.createElement("p");
  text.id = "col_planet_text";
  text.innerHTML = languageData.score[options.language].Planet[0];
  crrow.appendChild(text);

  //COL RESULT
  var crrow = document.getElementById("header_row");
  var number = document.createElement("div");
  number.className = "col-3";
  number.id = "col_result";
  crrow.appendChild(number);

  var crrow = document.getElementById("col_result");
  var text = document.createElement("p");
  text.id = "col_result_text";
  text.innerHTML = languageData.score[options.language].Result[0];
  crrow.appendChild(text);

  //COL SCORE
  var crrow = document.getElementById("header_row");
  var number = document.createElement("div");
  number.className = "col-2";
  number.id = "col_score";
  crrow.appendChild(number);

  var crrow = document.getElementById("col_score");
  var text = document.createElement("p");
  text.id = "col_score_text";
  text.innerHTML = languageData.score[options.language].Score[0];
  crrow.appendChild(text);

  //End of utilitary row
  //Draw rows for saved data
  scoreLoad = gameload("Hiscore");
  let size = 10; //размер подмассива
  let scoreLoadPages = []; //массив в который будет выведен результат.
  if(scoreLoad != null){
    scoreLoad = scoreLoad.reverse();
  for (let i = 0; i < Math.ceil(scoreLoad.length / size); i++) {
    scoreLoadPages[i] = scoreLoad.slice((i * size), (i * size) + size);
  }

  if (scoreLoadPages.length > 10){
    scoreLoadPages.shift();
  };
}
  var curPage = 0;

  function choosePage(param){
    var el = document.getElementById('score_main');
    el.remove();
    drawScore(scoreLoadPages, param);
  };

  function drawScore(scoreLoadPages,page){
    var shipstatspanel = document.getElementById("shipstatspanel");
    var crrow = document.createElement("div");
    crrow.id = "score_main";
    shipstatspanel.appendChild(crrow);

      for (i = 0; i < scoreLoadPages[curPage].length; i++) {
        console.log(scoreLoadPages[curPage][i])
        var shipstatspanel = document.getElementById("score_main");
        var crrow = document.createElement("div");
        crrow.className = "row score_element";
        crrow.id = "score_row_" + i;
        shipstatspanel.appendChild(crrow);

        //COL NUM#
        var crrow = document.getElementById("score_row_" + i);
        var number = document.createElement("div");
        number.className = "col-1";
        number.id = "col_number_" + i;
        crrow.appendChild(number);

        var crrow = document.getElementById("col_number_" + i);
        var text = document.createElement("p");
        text.id = "col_number_text_" + i;
        text.innerHTML = (curPage*10) + (i + 1);
        crrow.appendChild(text);

        //COL DATE
        var crrow = document.getElementById("score_row_" + i);
        var number = document.createElement("div");
        number.className = "col-3";
        number.id = "col_date_" + i;
        crrow.appendChild(number);

        var crrow = document.getElementById("col_date_" + i);
        var text = document.createElement("p");
        text.id = "col_date_text_" + i;
        text.innerHTML = scoreLoadPages[curPage][i][1];
        crrow.appendChild(text);

        //COL PLANET
        var crrow = document.getElementById("score_row_" + i);
        var number = document.createElement("div");
        number.className = "col-3";
        number.id = "col_planet_" + i;
        crrow.appendChild(number);

        var crrow = document.getElementById("col_planet_" + i);
        var text = document.createElement("p");
        text.id = "col_planet_text_" + i;
        text.innerHTML = scoreLoadPages[curPage][i][2];
        crrow.appendChild(text);

        //COL RESULT
        var crrow = document.getElementById("score_row_" + i);
        var number = document.createElement("div");
        number.className = "col-3 score_result";
        number.id = "col_result_" + i;
        crrow.appendChild(number);

        var crrow = document.getElementById("col_result_" + i);
        var text = document.createElement("p");
        text.id = "col_result_text_" + i;
        text.innerHTML = scoreLoadPages[curPage][i][3];
        crrow.appendChild(text);

        //COL SCORE
        var crrow = document.getElementById("score_row_" + i);
        var number = document.createElement("div");
        number.className = "col-2";
        number.id = "col_score_" + i;
        crrow.appendChild(number);

        var crrow = document.getElementById("col_score_" + i);
        var text = document.createElement("p");
        text.id = "col_score_text_" + i;
        text.onclick = (function () {
          var currentI = i;
          return function () {
            scoreLoad = gameload("Hiscore");
            console.log("ТЫЦ:", currentI)
            singlePastMission(scoreLoad, currentI);
          }
        })();
        text.innerHTML = "<u>" + scoreLoadPages[curPage][i][4] + "</u>";
        crrow.appendChild(text);
      }

      var shipstatspanel = document.getElementById("score_main");
      var crrow = document.createElement("div");
      crrow.className = "row score_element";
      crrow.id = "pagination_row";
      shipstatspanel.appendChild(crrow);

      var crrow = document.getElementById("pagination_row");
      var number = document.createElement("div");
      number.className = "col";
      number.id = "pagination_col";
      crrow.appendChild(number);

      for (z = 0; z < scoreLoadPages.length; z++) {
        var more = document.getElementById("pagination_col");
        var btn = document.createElement("button");
        btn.className = "futurebutton pagination";
        btn.originalindex = z;
        btn.onclick = function () {
          curPage = this.originalindex;
          choosePage(curPage);
        };
        btn.innerHTML = z+1;
        more.appendChild(btn);
      };
    }
    if (localStorage.getItem("Hiscore") !== null) {
    drawScore(scoreLoadPages, curPage);
  };

  //
  function singlePastMission(score, i) {
    console.log(score[i]);
    cPlanet = score[i][5];
    finalDesc = score[i][6];
    final_score = score[i][7];
    colStow = score[i][8][0]
    journeyDeaths = score[i][8][1]
    constructionDeaths = score[i][8][2]

    var ScoreRes = [
      final_score.atmosphere,
      final_score.gravity,
      final_score.temperature,
      final_score.water,
      final_score.resources,
      (1000 + colStow) - journeyDeaths,
      (1000 + colStow) - (journeyDeaths + constructionDeaths),
      final_score.score_technology,
      final_score.score_culture,
      final_score.scienceDB,
      final_score.cultureDB,
      final_score.native_relations,
      final_score.overall,
    ]

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
    //Очищаем стартовое меню
    menuWipe();
    //Рисуем блок со статами планеты
    var ShipState = document.getElementById("ShipState");
    var crcol = document.createElement("div");
    crcol.className = "futurepanel col center-block";
    crcol.id = "shipstatspanel";
    ShipState.appendChild(crcol);

    var shipstatspanel = document.getElementById("shipstatspanel");
    var crcol = document.createElement("div");
    crcol.className = "futurepanel__header";
    crcol.id = "shipstats_header";
    shipstatspanel.appendChild(crcol);

    var shipstats_header = document.getElementById("shipstats_header");
    var para = document.createElement("h4");
    para.innerHTML = score[i][2];
    shipstats_header.appendChild(para);

    var shipstatspanel = document.getElementById("shipstatspanel");
    var crrow = document.createElement("div");
    crrow.className = "row";
    crrow.id = "header_row";
    shipstatspanel.appendChild(crrow);

    //Отрисовываем новые элементы
    var textwindow = document.getElementById("header_row");

    var scanlist = document.getElementById("header_row");
    var crcol = document.createElement("div");
    crcol.className = "col-5";
    crcol.id = "ScanNames";
    scanlist.appendChild(crcol);

    var crcol = document.createElement("div");
    crcol.className = "col-7";
    crcol.id = "ScanRes";
    scanlist.appendChild(crcol);

    var scannames = document.getElementById("ScanNames");
    for (var i = 0; i < ResNames.length; i++) {
      var parag = document.createElement("p");
      parag.className = "stats";
      parag.innerHTML = ResNames[i] + ":";
      scannames.appendChild(parag);
    };

    var scanres = document.getElementById("ScanRes");
    for (var i = 0; i < ResRes.length; i++) {
      var parag = document.createElement("p");
      parag.className = "stats";
      parag.id = ResRes[i];
      parag.innerHTML = "0";
      scanres.appendChild(parag);
    };


    var AnomaliesFullLanguageOutput = anomaliesLangFull(cPlanet.anomalies, cPlanet.anomaliesFull, languageData);
    document.getElementById('cPlanet.atmosphere').innerHTML = languageData.planet[options.language].Atmosphere[planetStatsTranslate(PlanetAtmosphere, cPlanet.atmosphere)];
    document.getElementById('cPlanet.gravity').innerHTML = languageData.planet[options.language].Gravity[planetStatsTranslate(PlanetGravity, cPlanet.gravity)]; //cPlanet.gravity;
    document.getElementById('cPlanet.temperature').innerHTML = languageData.planet[options.language].Temperature[planetStatsTranslate(PlanetTemperature, cPlanet.temperature)]; //cPlanet.temperature;
    document.getElementById('cPlanet.water').innerHTML = languageData.planet[options.language].Water[planetStatsTranslate(PlanetWater, cPlanet.water)]; //cPlanet.water;
    document.getElementById('cPlanet.resources').innerHTML = languageData.planet[options.language].Resources[planetStatsTranslate(PlanetResources, cPlanet.resources)];//cPlanet.resources;
    document.getElementById('cPlanet.anomalies').innerHTML = arrList(AnomaliesFullLanguageOutput);
    attributeColor(ResRes);

    //Рисуем блок с описанием

    var shipstatspanel = document.getElementById("ShipState");
    var crrow = document.createElement("div");
    crrow.className = "row";
    crrow.id = "desc_row";
    shipstatspanel.after(crrow);

    var ShipState = document.getElementById("desc_row");
    var crcol = document.createElement("div");
    crcol.className = "futurepanel col center-block";
    crcol.id = "finaldescription";
    ShipState.appendChild(crcol);

    var textwindow = document.getElementById("finaldescription");
    var para = document.createElement("p");
    para.id = "description";
    para.innerHTML = endList(finalDesc);
    textwindow.appendChild(para);

    var textwindow = document.getElementById("finaldescription");

    var crrow = document.createElement("div");
    crrow.className = "row";
    crrow.id = "ScoreList";
    textwindow.appendChild(crrow);

    var scanlist = document.getElementById("ScoreList");
    var crcol = document.createElement("div");
    crcol.className = "col-10";
    crcol.id = "ScoreNames";
    scanlist.appendChild(crcol);

    var crcol = document.createElement("div");
    crcol.className = "col-2";
    crcol.id = "ScoreRes";
    scanlist.appendChild(crcol);

    var scannames = document.getElementById("ScoreNames");
    for (var i = 0; i < ScoreNames.length; i++) {
      var parag = document.createElement("p");
      parag.className = "score";
      parag.innerHTML = ScoreNames[i] + ":";
      scannames.appendChild(parag);
    };

    var scanres = document.getElementById("ScoreRes");
    for (var i = 0; i < ScoreRes.length; i++) {
      var parag = document.createElement("p");
      parag.className = "score";
      parag.id = ScoreIDs[i];
      parag.innerHTML = ScoreRes[i];
      scanres.appendChild(parag);
    };

  };
  //

  var more = document.getElementById("more");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "menubutton";
  btn.onclick = function () {
    window.location.reload(true);

  };
  btn.innerHTML = languageData.menuBack[options.language];
  more.appendChild(btn);

  document.getElementById('shipstatspanel').style.opacity = 1;
  document.getElementById('EventWindow').style.opacity = 1;
  document.getElementById('more').style.opacity = 1;
};
//ИНТРОХА


function intro() {
  menuWipe();
  var audio = play("./assets/music/Intro.mp3");
    //window.plugins.NativeAudio.play( 'intro' );
    console.log('intro');

  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  //crcol.className = "futurepanel";
  crcol.id = "intro";
  ShipState.appendChild(crcol);

  var more = document.getElementById("intro");
  var para = document.createElement("p");
  para.className = "glowIn";
  para.id = "introtext";
  //para.innerHTML = languageData.intro[options.language];
  more.appendChild(para);


var textTW = document.getElementById("introtext");
var TypedText = languageData.intro[options.language];

  var typewriter = new Typewriter(textTW, {
      loop: false,
      delay: 59,
      cursor: "",
  });
  typewriter.typeString(TypedText)
    .start();
//typeWriter(0, languageData.intro[options.language], "introtext");

  var more = document.getElementById("container");
  var btn = document.createElement("button");
  btn.className = "futurebutton";
  btn.id = "introbutton";
  btn.onclick = function(){
    audio.pause();
    //window.plugins.NativeAudio.stop( 'intro' );

    var el = document.getElementById('introbutton');
    el.remove();
    gameStart();
  }

  btn.innerHTML = languageData.continue[options.language];
  more.appendChild(btn);


};
//ФУНКЦИЯ НАЧАЛА ИГРЫ
var ResNames = [languageData.stats.Atmosphere[options.language], languageData.stats.Gravity[options.language], languageData.stats.Temperature[options.language], languageData.stats.Water[options.language], languageData.stats.Resources[options.language], languageData.stats.Anomalies[options.language]];
var DBNames = [languageData.stats.Science[options.language], languageData.stats.Culture[options.language],];
var SysNames = [languageData.stats.Landing[options.language], languageData.stats.Construction[options.language]];
var ResIDs = ["cShip.atmosphere", "cShip.gravity", "cShip.temperature", "cShip.water", "cShip.resources", "cShip.probes"];
var DBIDs = ["cShip.science", "cShip.culture"];
var SysIDs = ["cShip.landing", "cShip.construction"];

var StatIDs = ResIDs.concat(DBIDs, SysIDs);

var StatResNames = [languageData.stats.Atmosphere[options.language], languageData.stats.Gravity[options.language], languageData.stats.Temperature[options.language], languageData.stats.Water[options.language], languageData.stats.Resources[options.language], languageData.stats.Probes[options.language], languageData.stats.Anomalies[options.language]];
var SystemNames = ["<b>" + languageData.statnames.systems[options.language] + "</b>", languageData.stats.Landing[options.language] + ":", languageData.stats.Construction[options.language] + ":",
 "<b>Empty row</b>", "<b>" + languageData.statnames.databases[options.language] + "</b>", languageData.stats.Science[options.language] + ":", languageData.stats.Culture[options.language] + ":",];
var SystemIDs = ["", "cShip.landing", "cShip.construction", "","", "cShip.science", "cShip.culture"]

function gameStart() {
  if(options.platform=="Android"){
      var data = {
        achievementId: "CgkIya77kP0DEAIQAQ"
        //NewBeginning
    };
    cordova.plugins.playGamesServices.unlockAchievement(data, function () {
        // On success
    }, function() {
        // On error
    });
};
  menuWipe();
    state = "game";

  //Рисуем блок со статами корабля
  var ShipState = document.getElementById("ShipState");
  var crcol = document.createElement("div");
  crcol.className = "futurepanel col center-block";
  crcol.id = "shipstatspanel";
  ShipState.appendChild(crcol);

  var shipstatspanel = document.getElementById("shipstatspanel");
  var crcol = document.createElement("div");
  crcol.className = "futurepanel__header";
  crcol.id = "shipstats_header";
  shipstatspanel.appendChild(crcol);

  var shipstats_header = document.getElementById("shipstats_header");
  var para = document.createElement("h4");
  para.innerHTML = languageData.missionControl[options.language];
  shipstats_header.appendChild(para);

  //Ряд с колонистами
  var shipstatspanel = document.getElementById("shipstatspanel");
  var crrow = document.createElement("div");
  crrow.className = "row mb-1";
  crrow.id = "colonists_row";
  shipstatspanel.appendChild(crrow);

  var statnames_row = document.getElementById("colonists_row");
  var crcol = document.createElement("div");
  crcol.className = "col";
  crcol.id = "colonists_col_1";
  statnames_row.appendChild(crcol);

  var parag = document.createElement("p");
  para.id = "colName";
  parag.className = "stats fontClass";
  parag.innerHTML = languageData.stats.Colonists[options.language] + ":";
  crcol.appendChild(parag);

  var statnames_row = document.getElementById("colonists_row");
  var crcol = document.createElement("div");
  crcol.className = "col";
  crcol.id = "colonists_col_2";
  statnames_row.appendChild(crcol);

  var statnames_row = document.getElementById("colonists_col_2");
  var crcol = document.createElement("div");
  crcol.className = "row";
  crcol.id = "colonists_subrow";
  statnames_row.appendChild(crcol);

  var statnames_row = document.getElementById("colonists_subrow");
  var crcol = document.createElement("div");
  crcol.className = "col-7";
  crcol.id = "colonists_subcol_1";
  statnames_row.appendChild(crcol);



  var crcol = document.createElement("div");
  crcol.className = "col-5";
  crcol.id = "colonists_subcol_2";
  statnames_row.appendChild(crcol);

  var parag = document.createElement("p");
  parag.className = "stats fontClass popup";
  parag.id = "cShip.colonists";
  parag.innerHTML = "Loading";
  crcol.appendChild(parag);

  //

  var shipstatspanel = document.getElementById("shipstatspanel");
  var crrow = document.createElement("div");
  crrow.className = "row";
  crrow.id = "statnames_row";
  shipstatspanel.appendChild(crrow);


  //ПЕРВАЯ КОЛОНКА

  var statnames_row = document.getElementById("statnames_row");
  var crcol1 = document.createElement("div");
  crcol1.className = "col";
  crcol1.id = "statnames_col1";
  statnames_row.appendChild(crcol1);

  var crcol2 = document.createElement("div");
  crcol2.className = "col";
  crcol2.id = "statnames_col2";
  statnames_row.appendChild(crcol2);


  var statnames_col1 = document.getElementById("statnames_col1");
  var para = document.createElement("p");
  para.className = "stats fontClass";
  para.innerHTML = "<b>" + languageData.statnames.scanners[options.language] + "</b>";
  statnames_col1.appendChild(para);

  var statnames_col1 = document.getElementById("statnames_col1");
  for (var i = 0; i < ResIDs.length; i++) {

    var crrow = document.createElement("div");
    crrow.className = "row";
    crrow.id = "scanners_row_"+i;
    statnames_col1.appendChild(crrow);

    var statnames_row = document.getElementById("scanners_row_"+i);
    var crcol = document.createElement("div");
    crcol.className = "col-8";
    crcol.id = "statnames_col_"+i;
    statnames_row.appendChild(crcol);

    var parag = document.createElement("p");
    parag.id = "statName_" + StatResNames.indexOf(StatResNames[i]);
    parag.className = "stats fontClass";
    parag.innerHTML = StatResNames[i] + ":";
    crcol.appendChild(parag);

    var statnames_row = document.getElementById("scanners_row_"+i);
    var crcol = document.createElement("div");
    crcol.className = "col-4";
    crcol.id = "stats_col"+i;
    statnames_row.appendChild(crcol);

    var parag = document.createElement("p");
    parag.className = "stats fontClass popup";
    parag.id = ResIDs[i];
    parag.innerHTML = "Loading";
    crcol.appendChild(parag);
  };

  //ВТОРАЯ КОЛОНКА
  var statnames_col2 = document.getElementById("statnames_col2");
  for (var i = 0; i < SystemNames.length; i++) {

    var crrow = document.createElement("div");
    crrow.className = "row";
    crrow.id = "systems_row_"+i;
    statnames_col2.appendChild(crrow);

    var statnames_row = document.getElementById("systems_row_"+i);
    var crcol = document.createElement("div");
    crcol.className = "col-7";
    crcol.id = "systemnames_col"+i;
    statnames_row.appendChild(crcol);

    var parag = document.createElement("p");
    parag.id = "statName" + SystemNames.indexOf(SystemNames[i]);
    parag.className = "stats fontClass";
    parag.innerHTML = SystemNames[i];
    crcol.appendChild(parag);

    var statnames_row = document.getElementById("systems_row_"+i);
    var crcol = document.createElement("div");
    crcol.className = "col-5";
    crcol.id = "systems_col"+i;
    statnames_row.appendChild(crcol);

    var parag = document.createElement("p");
    parag.className = "stats fontClass popup";
    parag.id = SystemIDs[i];
    parag.innerHTML = "";
    crcol.appendChild(parag);
  };
  //Включаем инициализацию статов
  statsRefresh();

  //Блок описания

  var textBlock = document.getElementById("textBlock");
  var crcol = document.createElement("div");
  crcol.className = "futurepanel";
  crcol.id = "textwindow";
  textBlock.appendChild(crcol);

  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "name";
  para.innerHTML = "";
  textwindow.appendChild(para);

  var textwindow = document.getElementById("textwindow");
  var para = document.createElement("p");
  para.id = "description";
  para.innerHTML = "";
  textwindow.appendChild(para);


  //Рисуем планету и подключаем механики

  document.getElementById('planetAnimation').style.top = '75%';

  if (loading) {
    nextPlanet(true);
  } else {
    nextPlanet();
  };

  document.getElementById('shipstatspanel').style.opacity = 1;
  document.getElementById('EventWindow').style.opacity = 1;
  document.getElementById('more').style.opacity = 1;
};

//Функция отрисовки окошка выхода

function gameQuitMenu(){
  var anchor = document.getElementById("container");
  var quitPanel = document.createElement("div");
  quitPanel.id = "gameQuit";
  quitPanel.className = "futurepanel gameQuit";
  anchor.appendChild(quitPanel);

  var anchor = document.getElementById("gameQuit");
  var topRow = document.createElement("row");
  topRow.id = "quitTopRow";
  anchor.appendChild(topRow);

  var anchor = document.getElementById("quitTopRow");
  var para = document.createElement("p");
  para.id = "quitText";
  para.innerHTML = "Do you really want to quit?";
  anchor.appendChild(para);

  var anchor = document.getElementById("gameQuit");
  var bottomRow = document.createElement("row");
  bottomRow.id = "quitBottomRow";
  anchor.appendChild(bottomRow);

  var anchor = document.getElementById("quitBottomRow");
  var btn = document.createElement("button");
  btn.className = "futurebutton quitBtn";
  btn.id = "quitBtnYes";
  btn.onclick = "";
  btn.innerHTML = "YES";//languageData.menuBack[options.language];
  anchor.appendChild(btn);

  var anchor = document.getElementById("quitBottomRow");
  var btn = document.createElement("button");
  btn.className = "futurebutton quitBtn";
  btn.id = "quitBtnNo";
  btn.onclick = function(){
  var quitMenu = document.getElementById("gameQuit");
  quitMenu.style.visibility = "hidden";
  };
  btn.innerHTML = "NO";//languageData.menuBack[options.language];
  anchor.appendChild(btn);
};



//ЗАГРУЗКА ИНТЕРФЕЙСА
(function () {
  gameinitialize(options);
  gameQuitMenu();
  createMenu();
})();
console.log("menu ЗАГРУЖЕН");
