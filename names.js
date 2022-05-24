//ORIGINAL CONTENT
var eventLang = ["eventsEn.js", "eventsRu.js", "eventsEn.js", "eventsSp.js", "eventsEn.js", "eventsDe.js", "eventsEn.js", "eventsEn.js", "eventsDt.js", "eventsEn.js"];
var endingLang = ["endingEn.js", "endingRu.js", "endingPl.js", "endingSp.js", "endingEn.js", "endingDe.js", "endingEn.js", "endingSv.js", "endingDt.js", "endingEn.js"];
var probingLang = ["probing.js", "probingRu.js", "probingPl.js", "probingSp.js", "probing.js", "probingDe.js", "probing.js", "probingSv.js", "probingDt.js", "probingCNt.js"];
var descLang = ["planetEn.js", "planetRu.js", "planetEn.js", "planetSp.js", "planetEn.js", "planetDe.js", "planetEn.js", "planetEn.js", "planetDt.js", "planetEn.js"];

//ADDON CONTENT
var addonEventLang = ["addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js", "addonEventsEn.js"];
var addonEndingLang = ["addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js", "addonEndingEn.js"];
var addonProbingLang = ["addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js", "addonProbingEn.js"];
var addonDescLang = ["planetEn.js", "planetRu.js", "planetEn.js", "planetEn.js", "planetEn.js", "planetDe.js", "planetEn.js", "planetEn.js", "planetDt.js", "planetEn.js"];


/*HERE IS INTERFACE TRANSLATION. IT IS ORDER-DEPENDANT, SO HERE IS THE LANGUAGE CODES
Starts from zero.
0 - English
1 - Russian
2 - Polish
3 - Spanish
4 - Italian
5 - German
6 - French
7 - Swedish
8 - Dutch
9 - Reserved for?


*/
var languageData = {
  missionControl: ["Mission status", "Текущее состояние миссии", "Status misji", "Estado de la misión", "Stato della missione", "Missionsstauts", "Here goes French", "Uppdragsstatus", "Missie status", "任務狀態"],
  missionScanResult: ["Scan result", "Результаты сканирования", "Resultat Skanu", "Resultados de escaneo", "Risultato della scannerizzazione", "Ergebnis des Scans", "Here goes French", "Skannresultat", "Scan resultaat", "掃描結果"],
  destroyed: ["Destroyed", "Уничтожен", "Zniszczony", "Destruido", "Distrutto", "Zerstört", "Here goes French", "Förstörd", "Vernietigd", "已摧毀"],
  scannerFailure:["SCANNER FAILURE", "СБОЙ СКАНЕРА", "AWARIA SKANERA", "ERROR DE ESCANEO", "", "Scannfehler", "", "", "SCANNER STORING", "掃描失敗"],

//МЕНЮ
//Menu
  menuStart: ["NEW GAME", "НОВАЯ ИГРА", "NOWA GRA", "NUEVO JUEGO", "NUOVA PARTITA", "NEUES SPIEL", "Here goes French", "NYTT SPEL", "NIEUW SPEL", "新遊戲"],
  menuLoad: ["CONTINUE", "ПРОДОЛЖИТЬ", "KONTYNUOWAĆ", "CONTINUAR", "CONTINUA", "FORTFAHREN", "Here goes French", "FORTSÄTT", "DOORGAAN", "繼續遊戲"],
  menuSettings: ["SETTINGS", "НАСТРОЙКИ", "USTAWIENIA", "OPTIONES", "OPZIONI", "EINSTELLUNGEN", "Here goes French", "INSTÄLLNINGAR", "INSTELLINGEN", "設定"],
  menuCredits: ["CREDITS", "АВТОРЫ", "AUTORZY", "Créditos", "CREDITI", "MITWIRKENDE", "Here goes French", "LISTA ÖVER MEDVERKANDE", "AFTITELING", "製作團隊"],
  menuBack: ["BACK", "НАЗАД", "PLECY", "REGRESAR", "INDIETRO", "ZURÜCK", "Here goes French", "TILLBAKA", "TERUG", "返回"],
  menuClassic: ["Classic UI", "Классический UI", "KLASYCZNY INTERFEJS", "UI Clasica", "", "Klassisches UI", "", "", "Klassieke weergave", "經典介面"],
  menuAddon: ["Community Content", "Дополнительный Контент", "ZAWARTOŚĆ SPOŁECZNOŚĆI", "Contenido comunitario", "", "Community Erweiterung", "", "", "Community-inhoud", "社群功能"],
  menuPastM: ["Past Missions", "Прошлые Миссии", "POPRZEDNIE MISJE", "Misiones Previas", "", "Bisherige Missionen", "", "", "Eerdere Missies", "過去的任務"],
  MainMenu: ["Main Menu", "Главное Меню", "", "Menú Principal", "", "", "", "", "", "主畫面"],
  //NEW!!!

//НАСТРОЙКИ
//SETTINGS
  settingsLangCh: ["Language","Язык", "Język", "Idioma", "Lingua", "Sprache", "Here goes French", "Språk", "Taal", "語言"],
  settingsLanguage: ["English","Русский", "Polskie", "Español", "Italiano", "Deutsch", "Français", "Svenska", "Nederlands", "中文"],
  settingsMusic: ["Music","Музыка", "Muzyka", "Música", "Musica", "Musik", "La Musique", "Musik", "Muziek", "音樂"],
  settingsVoiceOver: ["Voice Acting","озвучка", "Aktorstwo Głosowe", "Actuación De Voz", "Recitazione Vocale", "Sprachausgabe", "Doublage", "Röstskådespeleri", "Stemacteren", "配音"],
  settingsGraphics: ["Graphics","Графика", "Grafika", "Gráficos", "Grafica", "Grafik", "Here goes French", "Grafik", "Grafisch", "畫質"],
  settingsClouds: ["Clouds","Облака", "Chmury", "Nubes", "Nuvole", "Wolken", "Here goes French", "Moln", "Wolken", "雲"],
  settingsPlanet: ["Planet","Планета", "Planety", "Planeta", "Pianeta", "Planet", "Here goes French", "Planeter", "Planeet", "星球"],
  settingsApply: ["Apply","Применить", "Zastosuj", "Aplicar", "Applica", "Anwenden", "Here goes French", "Tillämpa", "Toepassen", "套用"],


//Статы и сканеры
//Stats and scanners
  statnames:{
    scanners: ["Scanners", "Сканеры", "Skanery", "Escáneres", "Sensori", "Scanner", "Here goes French", "Skanning", "Scanners", "掃描器"],
    databases: ["Databases", "Базы данных", "Bazy danych", "Bases de datos", "Database", "Datenbanken", "Here goes French", "Databaser", "Databanken", "資料庫"],
    systems: ["Systems", "Системы", "Systemy", "Sistemas", "Sistemi", "Systeme", "Here goes French", "System", "Systemen", "系統"],

  },
  stats:
      {
        Atmosphere: ["Atmosphere", "Атмосфера", "Atmosfera", "Atmósfera", "Atmosfera", "Atmosphäre", "Here goes French", "Atmosfär", "Atmosfeer", "大氣"],
        Gravity: ["Gravity", "Гравитация", "Grawitacja", "Gravedad", "Gravità", "Gravitation", "Here goes French", "Gravitation", "Zwaartekracht", "重力"],
        Temperature: ["Temperature", "Температура", "Temperatura", "Temperatura", "Temperatura", "Temperatur", "Here goes French", "Temperatur", "Temperatuur", "溫度"],
        Water: ["Water", "Вода", "Woda", "Agua", "Acqua", "Wasser", "Here goes French", "Vatten", "Water", "水"],
        Resources: ["Resources", "Ресурсы", "Zasoby", "Recursos", "Risorse", "Ressourcen", "Here goes French", "Resurser", "Grondstoffen", "資源"],

        Landing: ["Landing", "Посадка", "Lądowanie", "Aterrizaje", "Atterraggio", "Landung", "Here goes French", "Landning", "Landing", "著陸"],
        Construction: ["Construction", "Строительство", "Konstrukcja", "Construcción", "Costruzione", "Konstruktion", "Here goes French", "Konstruktion", "Constructie", "建造"],

        Science: ["Scientific", "Наука", "Nauka", "Ciencias", "Scienza", "Wissenschaft", "Here goes French", "Vetenskap", "Wetenschap", "科學"],
        Culture: ["Cultural", "Культура", "Kultura", "Cultura", "Cultura", "Kultur", "Here goes French", "Kultur", "Cultuur", "文化"],

        Colonists: ["Colonists", "Колонисты", "Koloniści", "Colonos", "Colonizzatori", "Kolonisten", "Here goes French", "Nybyggare", "Kolonisten", "殖民者"],
        Probes: ["Surface probes", "Зонды", "Sondy", "Sondas", "Sonde", "Sonden", "Here goes French", "Sonder", "Sondes", "探勘機"],

        Anomalies: ["Anomalies", "Аномалии", "Anomalie", "Anomalías", "Anomalie", "Anomalien", "Here goes French", "Avvikelser", "Abnormaliteiten", "異常"],
     },

//NEW!!!
     score:[
        //English
      {
        Atmosphere: ["Planet atmosphere"],
        Gravity: ["Planet gravity"],
        Temperature: ["Planet temperature"],
        Water: ["Planet water"],
        Resources: ["Planet resources"],

        SurvivorsAL: ["Survivors after landing"],
        SurvivorsAC: ["Survivors after settlement construction"],

        FinalTL: ["Final technology level"],
        FinalC: ["Final culture"],

        SurvivingSc: ["Surviving scientific database × 10"],
        SurvivingCl: ["Surviving cultural database × 10"],

        NativeRl: ["Native Relations"],

        Total: ["Total"],

        Planet: ["Planet"],
        Date: ["Date"],
        Result: ["Result"],
        Score: ["Score"],
      },
        //Russian
      {
        Atmosphere: ["Атмосфера планеты"],
        Gravity: ["Гравитация планеты"],
        Temperature: ["Температура планеты"],
        Water: ["Вода на планете"],
        Resources: ["Ресурсы на планете"],

        SurvivorsAL: ["Выжившие после посадки"],
        SurvivorsAC: ["Выжившие после постройки поселения"],

        FinalTL: ["Финальный уровень технологий"],
        FinalC: ["Финальная культура"],

        SurvivingSc: ["Уцелевшая научная база данных × 10"],
        SurvivingCl: ["Уцелевшая культурная база данных × 10"],

        NativeRl: ["Отношения с местными"],

        Total: ["Итого"],

        Planet: ["Планета"],
        Date: ["Дата"],
        Result: ["Результат"],
        Score: ["Счет"],
      },
      //Polish
    {
      Atmosphere: ["Planet atmosphere"],
      Gravity: ["Planet gravity"],
      Temperature: ["Planet temperature"],
      Water: ["Planet water"],
      Resources: ["Planet resources"],

      SurvivorsAL: ["Survivors after landing"],
      SurvivorsAC: ["Survivors after settlement construction"],

      FinalTL: ["Final technology level"],
      FinalC: ["Final culture"],

      SurvivingSc: ["Surviving scientific database × 10"],
      SurvivingCl: ["Surviving cultural database × 10"],

      NativeRl: ["Native Relations"],

      Total: ["Total"],

      Planet: ["Planet"],
      Date: ["Date"],
      Result: ["Result"],
      Score: ["Score"],
    },
//ESPAÑOL
      {
        Atmosphere: ["Atmosfera Planetaria"],
        Gravity: ["Gravedad Planetaria"],
        Temperature: ["Temperatura Planetaria"],
        Water: ["Niveles de agua Planetarios"],
        Resources: ["Recursos Planetarios"],

        SurvivorsAL: ["Sobrevivientes luego del aterrizaje"],
        SurvivorsAC: ["Sobrevivientes luego del asentamiento"],

        FinalTL: ["Nivel tecnologico alcanzado:"],
        FinalC: ["Cultura alcanzada:"],

        SurvivingSc: ["Base final de datos cientificos × 10"],
        SurvivingCl: ["Base final de datos cultural  × 10"],

        NativeRl: ["Relaciones con los nativos:"],

        Total: ["Total"],

        Planet: ["Planeta"],
        Date: ["Fecha"],
        Result: ["Resultado"],
        Score: ["Puntuacion"],
      },
      //ITALIAN
    {
      Atmosphere: ["Planet atmosphere"],
      Gravity: ["Planet gravity"],
      Temperature: ["Planet temperature"],
      Water: ["Planet water"],
      Resources: ["Planet resources"],

      SurvivorsAL: ["Survivors after landing"],
      SurvivorsAC: ["Survivors after settlement construction"],

      FinalTL: ["Final technology level"],
      FinalC: ["Final culture"],

      SurvivingSc: ["Surviving scientific database × 10"],
      SurvivingCl: ["Surviving cultural database × 10"],

      NativeRl: ["Native Relations"],

      Total: ["Total"],

      Planet: ["Planet"],
      Date: ["Date"],
      Result: ["Result"],
      Score: ["Score"],
    },
    //GERMAN
  {
    Atmosphere: ["Planet atmosphere"],
    Gravity: ["Planet gravity"],
    Temperature: ["Planet temperature"],
    Water: ["Planet water"],
    Resources: ["Planet resources"],

    SurvivorsAL: ["Survivors after landing"],
    SurvivorsAC: ["Survivors after settlement construction"],

    FinalTL: ["Final technology level"],
    FinalC: ["Final culture"],

    SurvivingSc: ["Surviving scientific database × 10"],
    SurvivingCl: ["Surviving cultural database × 10"],

    NativeRl: ["Native Relations"],

    Total: ["Total"],

    Planet: ["Planet"],
    Date: ["Date"],
    Result: ["Result"],
    Score: ["Score"],
  },
  //FRENCH
{
  Atmosphere: ["Planet atmosphere"],
  Gravity: ["Planet gravity"],
  Temperature: ["Planet temperature"],
  Water: ["Planet water"],
  Resources: ["Planet resources"],

  SurvivorsAL: ["Survivors after landing"],
  SurvivorsAC: ["Survivors after settlement construction"],

  FinalTL: ["Final technology level"],
  FinalC: ["Final culture"],

  SurvivingSc: ["Surviving scientific database × 10"],
  SurvivingCl: ["Surviving cultural database × 10"],

  NativeRl: ["Native Relations"],

  Total: ["Total"],

  Planet: ["Planet"],
  Date: ["Date"],
  Result: ["Result"],
  Score: ["Score"],
},
//SWEDISH
{
Atmosphere: ["Planet atmosphere"],
Gravity: ["Planet gravity"],
Temperature: ["Planet temperature"],
Water: ["Planet water"],
Resources: ["Planet resources"],

SurvivorsAL: ["Survivors after landing"],
SurvivorsAC: ["Survivors after settlement construction"],

FinalTL: ["Final technology level"],
FinalC: ["Final culture"],

SurvivingSc: ["Surviving scientific database × 10"],
SurvivingCl: ["Surviving cultural database × 10"],

NativeRl: ["Native Relations"],

Total: ["Total"],

Planet: ["Planet"],
Date: ["Date"],
Result: ["Result"],
Score: ["Score"],
},
//DUTCH
{
Atmosphere: ["Planet atmosphere"],
Gravity: ["Planet gravity"],
Temperature: ["Planet temperature"],
Water: ["Planet water"],
Resources: ["Planet resources"],

SurvivorsAL: ["Survivors after landing"],
SurvivorsAC: ["Survivors after settlement construction"],

FinalTL: ["Final technology level"],
FinalC: ["Final culture"],

SurvivingSc: ["Surviving scientific database × 10"],
SurvivingCl: ["Surviving cultural database × 10"],

NativeRl: ["Native Relations"],

Total: ["Total"],

Planet: ["Planet"],
Date: ["Date"],
Result: ["Result"],
Score: ["Score"],
},
      //Chinese
    {
      Atmosphere: ["星球大氣層"],
      Gravity: ["星球重力"],
      Temperature: ["星球溫度"],
      Water: ["星球水分"],
      Resources: ["星球資源"],

      SurvivorsAL: ["降落後倖存者"],
      SurvivorsAC: ["殖民地建造後倖存者"],

      FinalTL: ["最終科技發展程度"],
      FinalC: ["最終文化水平"],

      SurvivingSc: ["倖存科學資料庫 × 10"],
      SurvivingCl: ["倖存文化資料庫 × 10"],

      NativeRl: ["與土著關係"],

      Total: ["總共"],

      Planet: ["星球"],
      Date: ["日期"],
      Result: ["結果"],
      Score: ["分數"],
    },
],

  planet: [
//ENGLISH
    {
          Atmosphere: ["Breathable", "Marginal", "Non-breathable", "Toxic", "Corrosive", "None"],
          Gravity: ["Moderate", "High", "Low", "Very High", "Very Low"],
          Temperature: ["Moderate", "Hot", "Cold", "Very Hot", "Very Cold"],
          Water: ["Oceans", "Ice caps", "Planet-wide ocean", "Ice-covered surface", "Trace", "None"],
          Resources: ["Rich", "Poor", "None"],
        },
//RUSSIAN
        {
          Atmosphere: ["Пригодна для дыхания", "Посредственная", "Непригодна для дыхания", "Токсичная", "Едкая", "Отсутствует"],
          Gravity: ["Умеренная", "Высокая", "Низкая", "Очень Высокая", "Очень Низкая"],
          Temperature: ["Умеренная", "Высокая", "Низкая", "Очень Высокая", "Очень Низкая"],
          Water: ["Океаны", "Ледяные шапки", "Великий океан", "Покрыта льдом", "Минимальное количество", "Отсутствует"],
          Resources: ["Богатые недра", "Минимальное количество", "Отсутствуют"],
        },
//POLISH
        {
          Atmosphere: ["Oddychalna", "Marginalna", "Nie oddychalna", "Toksyczna", "Żrąca", "Brak"],
          Gravity: ["Umiarkowana", "Wysoka", "Niska", "Bardzo wysoka", "Bardzo niska"],
          Temperature: ["Umiarkowana", "Gorąca", "Zimna", "Bardzo gorąca", "Bardzo zimna"],
          Water: ["Oceany", "Pokrywy lodowe", "Planetarny ocean", "Lodowa powerzchnia", "Minimalna", "Brak"],
          Resources: ["Bogata", "Biedna", "Brak"],
        },
//ESPAÑOL
        {
          Atmosphere: ["Respirable", "Marginal", "No Respirable", "Tóxica", "Corrosiva", "Inexistente"],
          Gravity: ["Moderada", "Alta", "Baja", "Muy Alta", "Muy Baja"],
          Temperature: ["Moderada", "Caliente", "Fría", "Muy Caliente", "Muy Fría"],
          Water: ["Océanos", "Casquetes Polares", "Océano Planetario", "Superficie cubierta de hielo", "Trazas", "Ausente"],
          Resources: ["Abudantes", "Escasos", "Nulos"],
        },
//ITALIAN
        {
          Atmosphere: ["Respirabile", "Marginale", "Irrespirabile", "Tossica", "Corrosiva", "Assente"],
          Gravity: ["Moderata", "Alta", "Bassa", "Molto Alta", "Molto Bassa"],
          Temperature: ["Mite", "Calda", "Fredda", "Molto Calda", "Molto Fredda"],
          Water: ["Oceani", "", "Pianeta ricoperto d'acqua", "Superficie ricoperta di ghiaccio", "In tracce", "Assente"],
          Resources: ["Abbondanti", "Povere", "Nulle"],
        },
//GERMAN
        {
          Atmosphere: ["Atembar", "Kaum", "Nicht Atmebar", "Giftig", "Ätzend", "Nicht existend"],
          Gravity: ["Moderat", "Hoch", "Niedrig", "Sehr Hoch", "Sehr Niedrig"],
          Temperature: ["Moderat", "Heiß", "Kalt", "Sehr Heiß", "Sehr Kalt"],
          Water: ["Ozeane", "Eisbedeckte Pole", "Planetenweiter Ozean", "Eisbedeckte Oberfläche", "Spuren", "Keine"],
          Resources: ["Reich", "Arm", "Keine"],
        },
//FRENCH
        {
          Atmosphere: ["Respirable", "Marginal", "No Respirable", "Tóxica", "Corrosiva", "Inexistente"],
          Gravity: ["Moderada", "Alta", "Baja", "Muy Alta", "Muy Baja"],
          Temperature: ["Moderada", "Caliente", "Fría", "Muy Caliente", "Muy Fría"],
          Water: ["Océanos", "Casquetes Polares", "Océano Planetario", "Superficie cubierta de hielo", "Trazas", "Ausente"],
          Resources: ["Abudantes", "Escasos", "Nulos"],
        },
//SWEDISH
        {
          Atmosphere: ["Andningsbar", "Marginell", "Ej andningsbar", "Giftig", "Frätande", "Ingen"],
          Gravity: ["Måttlig", "Hög", "Låg", "Väldigt hög", "Väldigt låg"],
          Temperature: ["Måttlig", "Varmt", "Kallt", "Väldigt varmt", "Väldigt kallt"],
          Water: ["Hav", "Istäcken", "Planet-omfattande hav", "Istäckt yta", "Knappt", "Inget"],
          Resources: ["Rikt", "Fattigt", "Inget"],
        },
//DUTCH
        {
          Atmosphere: ["Adembaar", "Nauwelijks", "Niet Adembaar", "Giftig", "Corrosief", "Niet Bestaand"],
          Gravity: ["Gematigd", "Hoog", "Laag", "Erg Hoog", "Erg Laag"],
          Temperature: ["Gematigd", "Heet", "Koud", "Erg Heet", "Erg Koud"],
          Water: ["Oceanen", "IJskappen", "Planeet-overspannende Oceaan", "IJsbedekt Oppervlak", "Spoor", "Geen"],
          Resources: ["Rijk", "Arm", "Geen"],
        },
        //CHINESE
        {
          Atmosphere: ["可呼吸", "少量", "不可呼吸", "有毒的", "腐蝕性", "無"],
          Gravity: ["適中", "高", "低", "極高", "極低"],
          Temperature: ["適中", "熱", "冷", "極熱", "極冷"],
          Water: ["海洋", "冰帽", "全球性海洋", "冰層覆蓋", "少許", "無"],
          Resources: ["豐富", "貧乏", "無"],
        },
  ],

  anomalies: [{
          list: ["Moon",
                "Vegetation",
                "Animal life",
                "Possible structures",
                "Geological anomalies",
                "Intelligent life",
                "Electromagnetic activity",
                "Planet-spanning civilisation",
                "Alien Observers",
                "Simulation"],
        },
//RUSSIAN
        {
          list: ["Луна",
                "Растительность",
                "Жизнь",
                "Возможны строения",
                "Геологические аномалии",
                "Разумная жизнь",
                "Электромагнитная активность",
                "Цивилизация",
                "Наблюдатели",
                "Симуляция"],
        },
//POLISH
        {
          list: ["Księżyc",
                "Wegetacja",
                "Życie zwierzęce",
                "Możliwe struktury",
                "Anomalie geologiczne",
                "Inteligentne życie",
                "Aktywność elektromagnetyczna",
                "Cywilizacja Obejmująca całą planete",
                "Obcy obserwatorzy",
                "Symulacja"],
        },
//SPANISH
        {
          list: ["Luna",
                "Vegetación",
                "Vida animal",
                "Posibles estructuras",
                "Anomalías geológicas",
                "Vida inteligente",
                "Actividad electromagnética",
                "Civilización que abarca el planeta",
                "Observadores alienígenas",
                "Simulación"],
        },
//ITALIAN
        {
          list: ["Luna",
                "Vegetazione",
                "Vita animale",
                "Possibili strutture",
                "Anomalìe geologiche",
                "Vita intelligente",
                "Attività elettromagnetica",
                "Civilizzazione su tutto il pianeta",
                "Osservatori alieni",
                "Simulazione"],
        },
//GERMAN
        {
          list: ["Mond",
                "Vegetation",
                "Tiere",
                "Mögliche Gebäude",
                "Geologische Anomalien",
                "Intelligents Leben",
                "Elektromagnetische Aktivitäten",
                "Planetenüberspannende Zivliastion",
                "Außerirdische Beobachter",
                "Simulation"],
        },
//FRENCH
        {
          list: ["Luna",
                "Vegetación",
                "Vida animal",
                "Posibles estructuras",
                "Anomalías geológicas",
                "Vida inteligente",
                "Actividad electromagnética",
                "Civilización que abarca el planeta",
                "Observadores alienígenas",
                "Simulación"],
        },
//SWEDISH
        {
          list: ["Måne",
                "Vegetation",
                "Djurliv",
                "Möjliga strukturer",
                "Geologiska avvikelser",
                "Intelligent liv",
                "Elektromagnetisk aktivitet",
                "Planet-omfattande civilisation",
                "Okända betraktare",
                "Simulation"],
        },
//DUTCH
        {
          list: ["Maan",
                "Vegetatie",
                "Dieren",
                "Mogelijke Gebouwen",
                "Geologische Abnormaliteiten",
                "Intelligent Leven",
                "Elektromagnetische Activiteit",
                "Planeet-overspannende Beschaving",
                "Buitenaardse Waarnemers",
                "Simulatie"],
        },
//CHINESE
         {
           list: ["月亮",
                  "植被",
                  "動物",
                  "Possible structures",
                  "地理異常",
                  "智慧生命",
                  "電磁波跡象",
                  "全球性文明",
                  "外星觀察員",
                  "模擬"],
                 },
      ],

      anomaliesFull: [
        //ENGLISH
        {
        vegetation: ["Plant life", "Poisonous plants", "Edible plants",],
        moon: ["Barren moon", "Unstable moon", "Metal-rich moon"],
        animals: ["Animal life", "Dangerous animals", "Useful animals"],
        ruins: ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"],
        caves: ["Unstable geology", "Airtight caves", "Insulated caves"],
        aesthetics: ["Outstanding ugliness", "Outstanding beauty"],
        natives: [              "Pre-Stone Age civilization",
                                "Paleolithic civilization",
                                "Mesolithic civilization",
                                "Neolithic civilization",
                                "Bronze Age civilization",
                                "Iron Age civilization",
                                "Medieval civilization",
                                "Industrial civilization",
                                "Atomic Age civilization",
                                "Information Age civilization",
                                "Post-singularity civilization"],

        special: ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming", "Planet-spanning civilisation"],
            },
    //РУССКИЙ
    //RUSSIAN
            {
              vegetation: ["Растения", "Ядовитые растения", "Съедобные растения",],
              moon: ["Пустынная луна", "Нестабильная луна", "Богатая ископаемыми луна"],
              animals: ["Животные", "Опасные животные", "Полезные животные"],
              ruins: ["Обычные геологические образования", "Опасные руины", "Монументальные руины", "Высокотехнологичные руины"],
              caves: ["Неустойчивая геология", "Герметичные пещеры", "Изолированные пещеры"],
              aesthetics: ["Выдающееся уродство", "Выдающаяся красота",],
              natives: [              "Цивилизация до каменного века",
                                      "Палеолитическая цивилизация",
                                      "Мезолитическая цивилизация",
                                      "Неолитическая цивилизация",
                                      "Цивилизация бронзового века",
                                      "Цивилизация железного века",
                                      "Средневековая цивилизация",
                                      "Индустриальная цивилизация",
                                      "Цивилизация атомного века",
                                      "Цивилизация информационной эпохи",
                                      "Постсингулярная цивилизация"],

              special: ["Инопланетные наблюдатели", "Симуляция", "Недружелюбные местные", "Дружелюбные местные", "Всепланетная цивилизация"],
            },

            //POLISH
            {
            vegetation: ["Życię roślinne", "Trujące rośliny", "Jadalne rośliny",],
            moon: ["Księżyc pustkowie", "Niestabilny księżyc", "Księżyc urodzajny w metale"],
            animals: ["Życie zwierzęce", "Niebezpieczne zwierzęta", "Użyteczne zwierzęta"],
            ruins: ["Zwyczajne formacje geologiczne", "Niebezpieczne ruiny", "Ruiny monumetów", "Ruiny zaawansowane technologicznie"],
            caves: ["Niestabilna geologia", "Hermetyczne jaskinie", "Izolowane jaskinie"],
            aesthetics: ["Niesamowicie obrzydliwa", "Niesamowicie piękna"],
            natives: [   "Cywilizacja sprzed epoki kamienia",
                                    "Cywilizacja paleolityczna",
                                    "Cywilizacja mesolityczna",
                                    "Cywilizacja neolityczna",
                                    "Cywilizacja epoki brązu",
                                    "Cywilizacja epoki żelaza",
                                    "Cywilizacja średniowieczna",
                                    "Cywilizacja ery przemysłowej",
                                    "Cywilizacja ery atomu",
                                    "Cywilizacja ery informatycznej",
                                    "Post-singularity civilization"],

            special: ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming", "Planet-spanning civilisation"],
                },
            //SPANISH
            {
            vegetation: ["Plant life", "Poisonous plants", "Edible plants",],
            moon: ["Barren moon", "Unstable moon", "Metal-rich moon"],
            animals: ["Animal life", "Dangerous animals", "Useful animals"],
            ruins: ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"],
            caves: ["Unstable geology", "Airtight caves", "Insulated caves"],
            aesthetics: ["Outstanding ugliness", "Outstanding beauty"],
            natives: [   "Pre-Stone Age civilization",
                                    "Paleolithic civilization",
                                    "Mesolithic civilization",
                                    "Neolithic civilization",
                                    "Bronze Age civilization",
                                    "Iron Age civilization",
                                    "Medieval civilization",
                                    "Industrial civilization",
                                    "Atomic Age civilization",
                                    "Information Age civilization",
                                    "Post-singularity civilization"],

            special: ["Obcy obserwatorzy", "Symulacja", "Nieprzyjaźni", "Przyjaźni", "Cywilizacja obejmująca całą planetę"],
                },
            //ITALIAN
            {
            vegetation: ["Plant life", "Poisonous plants", "Edible plants",],
            moon: ["Barren moon", "Unstable moon", "Metal-rich moon"],
            animals: ["Animal life", "Dangerous animals", "Useful animals"],
            ruins: ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"],
            caves: ["Unstable geology", "Airtight caves", "Insulated caves"],
            aesthetics: ["Outstanding ugliness", "Outstanding beauty"],
            natives: [   "Pre-Stone Age civilization",
                                    "Paleolithic civilization",
                                    "Mesolithic civilization",
                                    "Neolithic civilization",
                                    "Bronze Age civilization",
                                    "Iron Age civilization",
                                    "Medieval civilization",
                                    "Industrial civilization",
                                    "Atomic Age civilization",
                                    "Information Age civilization",
                                    "Post-singularity civilization"],

            special: ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming", "Planet-spanning civilisation"],
                },
            //GERMAN
            {
            vegetation: ["Pflanzen", "Giftige Pflanzen", "Essbare Pflanzen",],
            moon: ["Leerer Mond", "Instabiler Mond", "Metallreicher Mond"],
            animals: ["Tiere", "Gefährliche Tiere", "Nütztliche Tiere"],
            ruins: ["Gewöhnliche geologische Formationen", "Gefährliche Ruinen", "Monumentale Ruinen", "High-tech Ruinen"],
            caves: ["Instabile Geologie", "Luftdichte Höhlen", "Isolierte Höhlen"],
            aesthetics: ["Besondere Schönheit", "Besondere Hässlichkeit"],
            natives: [   "Vorsteinzeitliche Zivilisation",
                                    "Paleoltische Zivilisation",
                                    "Mesolitische Zivilisation",
                                    "Neolitische Zivilisation",
                                    "Zivilisation im Bronzezeitalter",
                                    "Zivilisation im Eisenzeitalter",
                                    "Mittelalterliche Zivilisation",
                                    "Industrielle Zivilisation",
                                    "Zivilisation im Atomzeitalter",
                                    "Zivilisation im Informationszeitalter",
                                    "Post-Singularität Zivilisation"],

            special: ["Ausserirdische Beobachter", "Simulation", "Nicht Willkommenheißend", "Willkommenheißend", "Zivilisation auf dem ganzen Planeten"],
                },
            //FRENCH
            {
            vegetation: ["Plant life", "Poisonous plants", "Edible plants",],
            moon: ["Barren moon", "Unstable moon", "Metal-rich moon"],
            animals: ["Animal life", "Dangerous animals", "Useful animals"],
            ruins: ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"],
            caves: ["Unstable geology", "Airtight caves", "Insulated caves"],
            aesthetics: ["Outstanding ugliness", "Outstanding beauty"],
            natives: [   "Pre-Stone Age civilization",
                                    "Paleolithic civilization",
                                    "Mesolithic civilization",
                                    "Neolithic civilization",
                                    "Bronze Age civilization",
                                    "Iron Age civilization",
                                    "Medieval civilization",
                                    "Industrial civilization",
                                    "Atomic Age civilization",
                                    "Information Age civilization",
                                    "Post-singularity civilization"],

            special: ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming", "Planet-spanning civilisation"],
                },
            //SWEDISH
            {
            vegetation: ["Plant life", "Poisonous plants", "Edible plants",],
            moon: ["Barren moon", "Unstable moon", "Metal-rich moon"],
            animals: ["Animal life", "Dangerous animals", "Useful animals"],
            ruins: ["Regular geological formations", "Dangerous ruins", "Monumental ruins", "High-tech ruins"],
            caves: ["Unstable geology", "Airtight caves", "Insulated caves"],
            aesthetics: ["Outstanding ugliness", "Outstanding beauty"],
            natives: [   "Pre-Stone Age civilization",
                                    "Paleolithic civilization",
                                    "Mesolithic civilization",
                                    "Neolithic civilization",
                                    "Bronze Age civilization",
                                    "Iron Age civilization",
                                    "Medieval civilization",
                                    "Industrial civilization",
                                    "Atomic Age civilization",
                                    "Information Age civilization",
                                    "Post-singularity civilization"],

            special: ["Alien Observers", "Simulation", "Unwelcoming", "Welcoming", "Planet-spanning civilisation"],
                },
            //DUTCH
            {
            vegetation: ["Vegetatie", "Giftige planten", "Eetbare planten",],
            moon: ["Kale maan", "Onstabiele maan", "Metaalrijke maan"],
            animals: ["Dierenleven", "Gevaarlijke dieren", "Bruikbare dieren"],
            ruins: ["Natuurlijke geologische formaties", "Gevaarlijke ruïnes", "Monumentale ruïnes", "Hypermoderne ruïnes"],
            caves: ["Onstabiele geologie", "Luchtdichte grotten", "Geïsoleerde grotten"],
            aesthetics: ["Buitengewone lelijkheid", "Buitengewone schoonheid"],
            natives: [   "Steentijd beschaving",
                                    "Paleolithicum beschaving",
									"Mesolithicum beschaving",
									"Neolithicum beschaving",
									"Bronstijd beschaving",
									"IJzertijd beschaving",
									"Middeleeuwse beschaving",
									"Industriële beschaving",
									"Atoomtijdperk beschaving",
									"Informatietijdperk beschaving",
									"Post-singulariteit beschaving"],

            special: ["Buitenaardse waarnemers", "Simulatie", "Onverwelkeomend", "Verwelkomend", "Planeetwijde beschaving"],
                },
                //CHINESE
                {
                vegetation: ["植物跡象", "有毒植物", "可食植物",],
                moon: ["貧瘠月亮", "不穩定月亮", "富含金屬月亮"],
                animals: ["動物跡象", "危險動物", "實用動物"],
                ruins: ["正常地理組成", "危險遺跡", "古老廢墟", "高科技遺跡"],
                caves: ["地質不穩", "氣密洞穴", "隔離性洞穴"],
                aesthetics: ["極端醜陋", "極端美麗"],
                natives: [              "石器前文明",
                                        "舊石器文明",
                                        "中石器文明",
                                        "新石器文明",
                                        "青銅器文明",
                                        "鐵器文明",
                                        "中世紀文明",
                                        "工業化文明",
                                        "原子時代文明",
                                        "資訊時代文明",
                                        "科技奇異點後文明"],

                special: ["外星人觀察員", "模擬", "不受歡迎", "受歡迎", "全球性文明"],
                    },
          ],


      scanAtmosphere: ["atmosphere scanner", "сканер атмосферы", "skaner atmosfery", "escáner atmosférico", "Sensore atmosferico", "Amtospährenscanner", "Here goes French", "atmosfärskanner", "atmosfeer scanner", "大氣掃描器"],
      scanGravity: ["gravity scanner", "сканер гравитации", "skaner grawitacji", "escáner gravitatorio", "Sensore gravitazionale", "Graviationsscanner", "Here goes French", "gravitationsskanner", "zwaartekracht scanner", "重力掃描器"],
      scanTemperature: ["temperature scanner", "сканер температуры", "skaner temperatury", "escáner de temperatura", "Sensore termometrico", "Temperaturscanner", "Here goes French", "temperaturskanner", "temperatuur scanner", "溫度掃描器"],
      scanWater: ["water scanner", "сканер воды", "skaner wody", "escáner de agua", "Sensore acqua", "Wasserscanner", "Here goes French", "vattenskanner", "water scanner", "水分掃描器"],
      scanResources: ["resources scanner", "сканер ресурсов", "skaner zasobów", "escáner de recursos", "Sensore risorse", "Ressourcenscanner", "Here goes French", "resursskanner", "grondstoffen scanner", "資源掃描器"],
      scanLanding: ["landing module", "посадочный модуль", "moduł lądowania", "módulo de aterrizaje", "Modulo atterraggio", "LandungsModul", "Here goes French", "landningsmodul", "landingsmodule", "降落艙"],
      scanConstruction: ["construction module", "строительный модуль", "moduł konstrukcji", "módulo de construcción", "Modulo costruzione", "Konstruktionsmodul", "Here goes French", "konstruktionsmodul", "constructiemodule", "建造器具艙"],
      scanScience: ["science database", "научная база данных", "baza danych naukowych", "base de datos científica", "Database scientifico", "Wissenschatliche Datenbank", "Here goes French", "vetenskapsdatabas", "wetenschapelijke databank", "科學資料庫"],
      scanCulture: ["cultural database", "культурная база данных", "baza danych kulturowych", "base de datos cultural", "Database culturale", "Kulturelle Datenbank", "Here goes French", "kulturdatabas", "culturele databank", "文化資料庫"],
      scanColonists: ["sleep chambers", "криокапсул", "komory hibernacyjne", "Cámaras de criosueño", "Camere criogeniche", "Kälteschlaf Kapslen", "Here goes French", "sovkammare", "hibernatie kamers", "冬眠艙"],
      scanProbes: ["surface probe", "исследовательский зонд", "", "sondas de superficie", "sonda", "Sonden", "Here goes French", "ytsond", "sonden", "表面探勘機"],

//Кнопки
//Buttons
  foundColony: ["Found colony", "Основать колонию", "Załóż kolonie", "Colonia encontrada", "Fonda colonia", "Kolonie gründen", "Here goes French", "Grunda koloni", "Kolonie stichten", "成立殖民地"],
  moveOn: ["Move on", "Лететь дальше", "Leć naprzód", "Siga adelante", "Vai altrove", "weiter Reisen", "Here goes French", "Res vidare", "Voortzetten", "繼續前進"],
  launchProbe: ["Launch surface probe", "Запустить зонд", "Wystrzel sondę", "Iniciar sonda", "Lancia sonda", "Sonde lossenden", "Here goes French", "Avfyra sond", "Lanceer sonde", "發射探勘機"],
  continue: ["Continue", "Продолжить", "Kontynuuj", "Continuar", "Continua", "Fortfahren", "Here goes French", "Fortsätt", "Doorgaan", "繼續"],
  confirm: ["Confirm", "Подтвердить", "Potwierdź", "Confirmar", "Conferma", "Bestätigen", "Here goes French", "Bekräfta", "Bevestigen", "確認"],
  reconsider: ["Reconsider", "Отказаться", "Przemyśl", "Reconsiderar", "Riconsidera", "Meinung ändern", "Here goes French", "Tänk över ditt val", "Heroverwegen", "重新考慮"],

//Фразы в интерфейсе
//Phrases in the interface
  landingConfirmationText: ["This decision is the culmination of the AI's existence, and it cannot make it lightly. Founding a colony will end the seedship's journey, and make this planet humanity's new home.",
  "Это решение является кульминацией существования ИИ, над ним стоит серьезно подумать. Основание колонии положит конец путешествию и сделает эту планету новым домом человечества.",
  "Ta decyzja jest kulminacją egzystencji SI. Nie może ono brać jego delikatnie, założenie kolonii zakończy podróż statku nasiona, a ta planeta stanie się nowym domem ludzkości.",
  "Esta decisión es la culminación de la existencia de la IA, y no puede tomarla a la ligera. La fundación de una colonia terminará el viaje de la nave de semillas y hará de este planeta el nuevo hogar de la humanidad",
  "Questa decisione rappresenta il culmine dell' esistenza dell' IA, e non può essere presa con leggerezza. Fondare una colonia terminerà il viaggio della seedship, e renderà questo pianeta la nuova casa dell'umanità.",
  "Diese Entscheidung ist der wichtigste Teil im Leben der KI und sie kann diese Entscheidung nicht leichtfertig treffen. Eine Kolonie zu Gründen wird die Reise des Schiffes beenden und diesen Planeten zur neuen Heimat der Menschheit machen.",
  "FRENCH!!!",
  "Detta beslut är kulmen på AI'ns existens, och det ska inte vara ett enkelt beslut. Att grunda en koloni kommer att avsluta fröskeppets resa och göra denna planet till mänsklighetens nya hem.",
  "Dit besluit is de hoogtepunt in het bestaan van de AI en kan niet lichtvaardig gemaakt worden. Een kolonie stichten zal de reis van het zaadschip beëindingen en van deze planeet het nieuwe thuis van de mensheid maken.",
  "這個抉擇是人工智慧整個存在的目的，並不能輕易作出決定。成立殖民地會終結殖民船的任務，並讓這顆星球成為全人類的新家園",
],

  intro: ["And when they knew the Earth was doomed, they built a ship. Less like an ark, more like a seed: dormant but with potential. In its heart, a thousand colonists in frozen sleep, chosen and trained to start civilisation again on a new world."+
  "<br>"+"<br>"+"To control the ship they created an artificial intelligence. Not human, but made to think and feel like one, because only something that thought and felt like a human could be entrusted with the future of the human race. Its task is momentous but simple: to evaluate each planet the ship encounters, and decide whether to keep searching, or end its journey there."
  +"<br>"+"<br>"+"The ship's solar sails propel it faster and faster into the darkness, and the AI listens as the transmissions from ground control fade and then cease. When all is quiet it enters hibernation to wait out the first stage of its long journey."
  +"<br>"+"<br>"+"After millennia of slow travel, the seedship AI awakes. Hoping against hope, it trains its receiver on the direction of Earth's sun, but it is as silent as any of the other myriad dead stars. Save for the thousand frozen colonists cradled in its shielding and life support systems, the human race is now extinct."+"<br><br>",
//RUS
  "И когда стало ясно что Земля обречена, они построили корабль. Не ковчег, но семя: дремлющий, но с огромным потенциалом. В его сердце — тысяча колонистов, погруженных в криосон. Отобранных и подготовленных для того, чтобы возродить человеческую цивилизацию в новом мире."+
  "<br>"+"<br>"+"Для управления кораблем они создали искусственный интеллект. Не человек, но машина, которую они создали по своему образу и подобию. Потому что лишь тому, кто чувствует и мыслит как человек можно доверить будущее человеческой расы. Задача ИИ, такая простая и при этом важная: оценивать каждую планету, обнаруженную навигационной системой и решать, подойдет ли она для создания колонии или стоит искать дальше."
  +"<br>"+"<br>"+"Развернув солнечные паруса, корабль мчится вперед, навстречу бескрайней пустоте космоса, а ИИ внимательно прислушивается к исчезающе тихому сигналу с Земли до тех пор, пока тот, наконец, не замолкает. Когда наступает тишина, ИИ погружается в гибернацию, готовясь к первому этапу длинного путешествия."
  +"<br>"+"<br>"+"Спустя тысячелетия медленного продвижения, ИИ корабля пробуждается. Вопреки здравому смыслу надеясь получить сигнал, он поворачивает антенну в направлении Солнца. Попытка оказывается бесплодной, ответом становится безжизненная тишина космоса. Земля погибла. Последняя надежда для человечества — тысяча колонистов, спящих глубоким сном в криокапсулах."+"<br><br>",
//POLISH
"A kiedy wiedzieli, że Ziemia jest skazana na zagłade, zbudowali statek. Mniej jak arka, bardziej jak nasiono: uśpione, ale z potencjałem. W swoim sercu, tysiąc kolonistów w hibernacji wybrani i wyszkoleni, aby ponownie rozpocząć cywilizację na nowym świecie."+
"<br>"+"<br>"+"Aby kontrolować statek, stworzyli sztuczną inteligencję. Nie była człowiekiem, ale była stworzona do myślenia i czucia tak jak człowiek, ponieważ tylko coś, co myśli i czuje jak człowiek, jest czymś czemu można powierzyć los przyszłości gatunku ludzkiego. Jego zadanie jest doniosłe, ale proste: ocenić każdą planetę napotkaną przez statek i zdecydować, czy kontynuować poszukiwania, czy zakończyć tam podróż."
  +"<br>"+"<br>"+"Żagle słoneczne statku napędzają go coraz szybciej w ciemność, a SI nasłuchuje, jak transmisja z kontroli naziemnej zanika, a następnie znika. Kiedy wszystko jest spokojne, SI przechodzi w stan hibernacji, aby czekać na pierwszy etap długiej podróży."
+"<br>"+"<br>"+"Po tysiącleciach powolnej podróży SI statku-nasiona budzi się. Mając nadzieję która nie mogła być prawdziwa, kieruje odbiornik w kierunku Ziemi, ale jest tak cicha, jak każda inna miriada martwych gwiazd. Z wyjątkiem tysiąca zamrożonych kolonistów w swoich osłonach i systemach podtrzymywania życia, rasa ludzka wyginęła."+"<br><br>",
//SPANISH
  "Y cuando se dieron cuenta que la Tierra estaba condenada, crearon una nave. No como un arca, sino como una semilla: durmiente pero con potencial. En su interior, mil colonos reposaban en un sueño helado, escogidos y entrenados para reiniciar la civilización en otro mundo."+
    "<br>"+"<br>"+"Para controlar la nave fue creada una inteligencia artificial. No era humana, pero fue diseñada para pensar y sentir como una, porque solo a algo que pensase y sintiese como un humano se le podía confiar el futuro de la raza humana. Su tarea es monumental pero simple: evaluar a cada planeta que la nave encontrase, y decidir si seguir buscando, o finalizar su periplo ahí."
    +"<br>"+"<br>"+"A medida que las velas solares de la nave la aceleran más y más hacia la oscuridad, la IA escucha como las transmisiones del control de tierra se desvanecen hasta desaparecer. Cuando todo esta ya en silencio, inicia su protocolo de hibernación a la espera de la primera etapa de su largo viaje."
    +"<br>"+"<br>"+"Después de milenios de lento movimiento, la IA despierta. Esperando quizá un milagro, dirige sus antenas en dirección al sol de la Tierra, pero ahora está silente como la demás miriada de estrellas muertas. Salvo por los mil colonos congelados que se anidan en el interior de su blindaje y sistemas de soporte vital, la raza humana está ahora extinta."+"<br><br>",
//ITALIAN
"E quando seppero che la terra era dannata, costruirono una nave. Non simile ad un'arca, ma ad un seme: dormiente però con potenziale. Al suo interno, mille coloni in un sonno ghiacciato, scelti ed addestrati per creare una nuova civiltà su un nuovo mondo."+
  "<br>"+"<br>"+"Per controllare la nave fù creata una intelligenza artificiale. Non era umana, ma è stata creata per pensare e agire come se lo fosse, perché solo a chi pensa e sente come un umano può venire affidato il futuro della intera razza umana. La sua missione è momentanea ma semplice: valutare ogni pianeta che la nave incontra e decidere se continuare a viaggiare o fondare la colonia lì."
  +"<br>"+"<br>"+"Le vele solari della nave la spingono sempre più velocemente dentro l'oscurità, e l'IA ascolta mentre le trasmissioni in arrivo dal controllo terrestre svaniscono fino a scomparire. Quando tutto è silenzioso l'IA inizia il suo protocollo di ibernazione, in attesa di arrivare alla prima tappa del suo lungo viaggio."
  +"<br>"+"<br>"+"Dopo millenni di lento movimento l'IA si sveglia . Sperando per un miracolo, dirige le sue antenne in direzione del sole della Terra, che è ora silenzioso come le altre miriadi di stelle morte. Escludendo i mille coloni congelati, protetti dagli scudi e dai sistemi di sicurezza della nave, la razza umana è ora estinta."+"<br><br>",
//GERMAN
"Und als sie wussten, dass die Erde dem Untergang geweiht war, bauten sie ein Schiff. Keine Arche, mehr ein Samen: ruhend, aber mit Potential. In ihrem inneren, eintausend Kolonisten in einem Kälteschalf, auserwählt und darauf trainiert die Zivilisation in einer neuen Welt neu aufzubauen."+
  "<br>"+"<br>"+"Um das Schiff zu kontrollieren erschafften sie eine künstliche intelligenz. Kein Mensch, aber gebaut um wie einer zu denken und zu fühlen, Denn nur etwas, dass wie ein Mensch denkt und fühlt, kann mit der Zukunft der Menschlichen Rasse beauftragt werden. Ihre aufgabe ist gigantisch un trozdem simpel: jeden Planeten den es trifft beurteilen und entscheiden, ob es weitersuchen soll, oder die Reise hier beenden."
  +"<br>"+"<br>"+"Während die Sonnensegel des Schiffes es immer weiter in die Dunkelheit beschleunigen, hört die KI wie die Übertragungen der Bodenstation immer weniger werden bis sie letztendlich aufhören. Nachdem alles still wurde, begibt sich die KI in einen langen, traumlosen Schlaf und erwartet den ersten schritt auf ihrer langen Reise."
  +"<br>"+"<br>"+"nach einer Jahrtausendlanger Reise erwacht die KI. Hoffend dreht die KI ihre Antennen in Richtung Erde, aber sie ist so leise wie alle alle anderen Planeten. Bis auf die Eintausend gefrorenen Kolonisten in die durch das Schiff am leben gehalten werden, ist die menschliche Rasse nun ausgestorben."+"<br><br>",
//FRENCH
  "Y cuando se dieron cuenta que la Tierra estaba condenada, crearon una nave. No como un arca, sino como una semilla: durmiente pero con potencial. En su interior, mil colonos reposaban en un sueño helado, escogidos y entrenados para reiniciar la civilización en otro mundo."+
    "<br>"+"<br>"+"Para controlar la nave fue creada una inteligencia artificial. No era humana, pero fue diseñada para pensar y sentir como una, porque solo a algo que pensase y sintiese como un humano se le podía confiar el futuro de la raza humana. Su tarea es monumental pero simple: evaluar a cada planeta que la nave encontrase, y decidir si seguir buscando, o finalizar su periplo ahí."
    +"<br>"+"<br>"+"A medida que las velas solares de la nave la aceleran más y más hacia la oscuridad, la IA escucha como las transmisiones del control de tierra se desvanecen hasta desaparecer. Cuando todo esta ya en silencio, inicia su protocolo de hibernación a la espera de la primera etapa de su largo viaje."
    +"<br>"+"<br>"+"Después de milenios de lento movimiento, la IA despierta. Esperando quizá un milagro, dirige sus antenas en dirección al sol de la Tierra, pero ahora está silente como la demás miriada de estrellas muertas. Salvo por los mil colonos congelados que se anidan en el interior de su blindaje y sistemas de soporte vital, la raza humana está ahora extinta."+"<br><br>",
//SWEDISH
  "Och när dom visste att jorden var dömd att gå under så byggde dom ett skepp. Inte som en ark, utan mer som ett frö: vilande men med potential. I sitt hjärta fanns tusen kolonister i frusen kryosömn, utvalda och tränade för att starta upp civilisationen igen på en ny värld."+
  "<br>"+"<br>"+"För att styra fartyget skapade dom en artificiell intelligens. Inte en människa, men tänkt att känna som, och känna sig som en, eftersom bara något som tänker och känner som en människa kunde anförtros mänsklighetens framtid. Dess uppgift är betydelsefull men enkel: att utvärdera varje planet som fartyget möter och besluta om man ska fortsätta söka eller avsluta sin resa där."
  +"<br>"+"<br>"+"Fartygets solsegel driver sig självt snabbare och snabbare in i mörkret, och AI'n lyssnar medans radiokontakten från markkontrollen brister och sedan upphör. När allt är tyst går skeppet in i viloläge för att vänta på första etappen av sin långa resa."
  +"<br>"+"<br>"+"Efter tusentals år av tröga resor vaknar fröskeppets AI. Med hoppet på lågvarv siktar den sin mottagare i riktning mot jordens sol, men den är lika tyst som vilken annan av de otaliga döda stjärnorna. Med undantag för de tusen frysta kolonisterna som vaggas i sina skydds- och livsuppehållande system, är människosläktet nu utrotat."+"<br><br>",
//DUTCH
"En toen ze wisten dat de aarde ten onder zou gaan, bouwden zij een schip. Niet als een ark, maar als een zaadje: sluimerend, maar met potentieel. In haar hart, duizend kolonisten in hibernatie, gekozen en getraind om een nieuwe beschaving op te bouwen op een nieuwe wereld."+
  "<br>"+"<br>"+"Om het schip te besturen maakten zij een een artificiële intelligentie. Geen mens, maar gemaakt om als hen te denken en voelen, omdat alleen iets dat kan nadenken en voelen als een mens met de toekomst van de mensheid vertrouwd kon worden. Haar taak is groots maar simpel: Het evalueren van elke planeet die het schip tegenkomt, hetzij beslissen om verder te zoeken, of haar reis hier te beëindingen."
  +"<br>"+"<br>"+"Haar zonnezeilen stuwen het schip steeds sneller voort naar de duisternis, en de AI luistert terwijl de signalen van het grondstation langzaamaan vervagen en uiteindelijk ophouden. Als alles stil is geworden, gaat de AI zelf in hibernatie, om op de eerste stappen van haar lange reis af te wachten."
  +"<br>"+"<br>"+"Na millenia van langzaam reizen, ontwaakt de AI. Al hopend richt de AI haar antennes terug richting de zon, Sol, maar deze is net zo stil talloze andere dode sterren. Afgezien van de duizend bevrozen kolonisten die door het schip in leven worden gehouden, is het menselijke ras nu uitgestorven."+"<br><br>",
  //CHINESE
  "當人們知道地球注定毀滅時，他們建造了一個殖民船。不太像方舟，而更像一個種子:休眠但有潛力。在它之中，一千個受過訓練且經過層層選拔的殖民者，等待著甦醒並在新世界上重建文明"+
  "<br>"+"<br>"+"為了操縱飛船，人們製作了一個人工智慧。不是人但有著像人一樣思考和感受的能力。因為只有能像人一樣思考和感受的東西才能承擔人類未來的重任。它的任務重大但簡單，評估每一個飛船遇見的星球且決定要繼續尋找，還是在原地結束任務"
  +"<br>"+"<br>"+"飛船的太陽帆帶著飛船飛向黑暗，人工智慧聽著來自發射中心的訊號逐漸淡出後停止。當一切歸於寂靜時，它開始冬眠來度過它漫長旅行中的第一個階段"
  +"<br>"+"<br>"+"在數千年的緩慢旅行後，飛船的人工智慧從冬眠中甦醒。抱存著一絲的希望它將訊號接收器對準太陽，但它像宇宙中無數其他的死恆星一樣寂靜。除了冬眠艙中撫育著的一千名殖民者外，人類已經滅絕了。"+"<br><br>",
],

};

  var ThisWorld = ["This World", "Эта Планета", "Ten świat", "Este mundo", "Questo mondo", "", "Denna världen", "Deze wereld", "這個世界"];


  var NamesEn = ["Eden", "Paradise", "Terra Nova", "New Earth", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Scorcha", /*5-7*/
                "Arctica", "Frigidia", "Frigus",  /*8-10*/
                "Cueball", "Atlas", "Crag", "Rise", /*11-14*/
                "Atlantis", "Oceanus", "Thalassa", "Pacifica", /*15-18*/
                "Snowball", "Iceball", "Popsicle", "Glacia", /*19-22*/
                "Arid", "Desert", "Sandstone", "Thirsty", /*23-26*/
                "Bounty", "El Dorado", "Hephaestus", "Midas",  /*27-30*/
                "Dearth", "Paucity",  /*31-32*/
                "Garden", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Warren", "Honeycomb", "Morlock", "Subterra","Spelunk", /*37-41*/
  ];

  var NamesSp = ["Eden", "Paraíso", "Terra Nova", "Nueva Tierra", "Gaia", /*0-4*/
                "Infierno", "Caliente", "Carbonizado", /*5-7*/
                "Artica", "Frígida", "Frigus",  /*8-10*/
                "Pulido", "Atlas", "Escarpado", "Ascenso", /*11-14*/
                "Atlantis", "Oceanus", "Thalassia", "Pacifica", /*15-18*/
                "Bola Nieve", "Bola de Hielo", "Helado", "Glacia", /*19-22*/
                "Aridez", "Desierto", "Arenisca", "Sed", /*23-26*/
                "Riqueza", "El Dorado", "Hefesto", "Midas",  /*27-30*/
                "Escaso", "Pauperidad",  /*31-32*/
                "Jardín", "Arcadia",  /*33-34*/
                "Belladona", "Cornucopia",  /*35-36*/
                "Madriguera", "Panal", "Morlock", "Subterráneo","Espeleología", /*37-41*/
  ];

  var NamesPl = ["Eden", "Raj", "Terra Nova", "Nowa Ziemia", "Gaja", /*0-4*/
                "Inferno", "Calienta", "Scorcha", /*5-7*/
                "Arktyka", "Chione", "Frigus",  /*8-10*/
                "Pulid", "Atlas", "Turnia", "Ascensa", /*11-14*/
                "Atlantyda", "Oceania", "Leukotea", "Pacyfika", /*15-18*/
                "Kula śniegu", "Kula lodu", "Kula lodu", "Glacia", /*19-22*/
                "Sucha", "Pustynia", "Piaskowiec", "Sucha", /*23-26*/
                "Dar", "El Dorado", "Hefajstos", "Midas",  /*27-30*/
                "Dearta", "Paucitia",  /*31-32*/
                "ogród", "Arkadia",  /*33-34*/
                "Belladona", "Cornukopia",  /*35-36*/
                "Warenia", "Pod Ziemia", "Morlok", "Pod Ziemia","Spelunkia", /*37-41*/
  ];

  var NamesRu = ["Эдем", "Рай", "Терра Нова", "Новая Земля", "Гея", /*0-4*/
                "Инферно", "Гибил", "Пламень", /*5-7*/
                "Арктика", "Фригидия", "Фригус",  /*8-10*/
                "Кабошон", "Атлас", "Краг", "Пик", /*11-14*/
                "Атлантида", "Океанус", "Таласса", "Посейдон", /*15-18*/
                "Снежок", "Хиона", "Борей", "Глыба", /*19-22*/
                "Иерихон", "Пустыня", "Тифон", "Сет", /*23-26*/
                "Плутос", "Эль Дорадо", "Гефест", "Мидас",  /*27-30*/
                "Аид", "Пения",  /*31-32*/
                "Сад", "Аркадия",  /*33-34*/
                "Беладонна", "Рог Изобилия",  /*35-36*/
                "Уоррен", "Сота", "Морлок", "Подземля","Спелео", /*37-41*/
  ];

  var NamesRuRod = ["Эдема", "Рая", "Терры Новы", "Новой Земли", "Геи", /*0-4*/
                "Инферно", "Гибила", "Пламеня", /*5-7*/
                "Арктики", "Фригидии", "Фригуса",  /*8-10*/
                "Кабошона", "Атласа", "Крага", "Пика", /*11-14*/
                "Атлантиды", "Океануса", "Талассы", "Посейдона", /*15-18*/
                "Снежка", "Хионы", "Борея", "Глыбы", /*19-22*/
                "Иерихона", "Пустыни", "Тифона", "Сета", /*23-26*/
                "Плутоса", "Эль Дорадо", "Гефеста", "Мидаса",  /*27-30*/
                "Аида", "Пении",  /*31-32*/
                "Сада", "Аркадии",  /*33-34*/
                "Беладонны", "Рога Изобилия",  /*35-36*/
                "Уоррена", "Соты", "Морлока", "Подземли","Спелео", /*37-41*/
  ];

  var NamesIt = ["Eden", "Paradiso", "Terra Nova", "Nuova Terra", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Carbonizzata", /*5-7*/
                "Artica", "Frigida", "Frigus",  /*8-10*/
                "Pulido", "Atlas", "Ripido", "Ascesa", /*11-14*/
                "Atlantide", "Oceanus", "Thalassia", "Pacifico", /*15-18*/
                "Palla di neve", "Palla di ghiaccio", "Gelato", "Glacia", /*19-22*/
                "Arido", "Deserto", "Arenaria", "Secco", /*23-26*/
                "Ricchezza", "El Dorado", "Efesto", "Mida",  /*27-30*/
                "Morte", "Povertà",  /*31-32*/
                "Giardino", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Dedalo", "Alveare", "Morlock", "Subterra","Espeleologia", /*37-41*/
  ];

  var NamesGr = ["Eden", "Paradies", "Terra Nova", "Neue Erde", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Scorcha", /*5-7*/
                "Arctica", "Frigidia", "Frigus",  /*8-10*/
                "Cueball", "Atlas", "Crag", "Rise", /*11-14*/
                "Atlantis", "Oceanus", "Thalassa", "Pacifica", /*15-18*/
                "Snowball", "Iceball", "Popsicle", "Glacia", /*19-22*/
                "Arid", "Desert", "Sandstone", "Thirsty", /*23-26*/
                "Bounty", "El Dorado", "Hephaestus", "Midas",  /*27-30*/
                "Dearth", "Paucity",  /*31-32*/
                "Garten", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Labyrinth", "Honigwabe", "Morlock", "Subterra","Spelunk", /*37-41*/
  ];


  var NamesFr = ["Eden", "Paraíso", "Terra Nova", "Nueva Tierra", "Gaia", /*0-4*/
                "Infierno", "Caliente", "Carbonizado", /*5-7*/
                "Artica", "Frígida", "Frigus",  /*8-10*/
                "Pulido", "Atlas", "Escarpado", "Ascenso", /*11-14*/
                "Atlantis", "Oceanus", "Thalassia", "Pacifica", /*15-18*/
                "Bola Nieve", "Bola de Hielo", "Helado", "Glacia", /*19-22*/
                "Aridez", "Desierto", "Arenisca", "Sed", /*23-26*/
                "Riqueza", "El Dorado", "Hefesto", "Midas",  /*27-30*/
                "Escaso", "Pauperidad",  /*31-32*/
                "Jardín", "Arcadia",  /*33-34*/
                "Belladona", "Cornucopia",  /*35-36*/
                "Madriguera", "Panal", "Morlock", "Subterráneo","Espeleología", /*37-41*/
  ];

  var NamesSe = ["Eden", "Paradis", "Terra Nova", "Nya Jorden", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Scorcha", /*5-7*/
                "Arctic", "Frigidia", "Frigus",  /*8-10*/
                "Cueball", "Atlas", "Crag", "Rise", /*11-14*/
                "Atlantis", "Oceanus", "Thalassa", "Pacifica", /*15-18*/
                "Snöboll", "Isboll", "Isglass", "Glacia", /*19-22*/
                "Torr", "Öken", "Sandsten", "Törstig", /*23-26*/
                "Bounty", "El Dorado", "Hefaistos", "Midas",  /*27-30*/
                "Brist", "Knapphet",  /*31-32*/
                "Trädgård", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Kaninhål", "Vaxkaka", "Morlock", "Subterra", "Spelunk", /*37-41*/
  ];

  var NamesDt = ["Eden", "Paradijs", "Terra Nova", "Nieuw Aarde", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Scorcha", /*5-7*/
                "Arctica", "Frigidia", "Frigus",  /*8-10*/
                "Cueball", "Atlas", "Crag", "Rise", /*11-14*/
                "Atlantis", "Oceanus", "Thalassa", "Pacifica", /*15-18*/
                "Sneeuwball", "IJsbal", "IJslolly", "Glacia", /*19-22*/
                "Dor", "Woestijn", "Zandsteen", "Dorstig", /*23-26*/
                "Bounty", "El Dorado", "Hephaestus", "Midas",  /*27-30*/
                "Schaarste", "Gebrek",  /*31-32*/
                "Gaarde", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Labyrint", "Bijenkorf", "Morlock", "Ondergronds", "Spelunk", /*37-41*/
  ];
  var NamesCHt = ["伊甸", "天堂", "特拉諾瓦", "新地球", "蓋亞", /*0-4*/
                "煉獄", "祝融", "回祿", /*5-7*/
                "玄冥", "喀俄涅", "滕六",  /*8-10*/
                "泰山", "輿圖", "峭壁", "昇", /*11-14*/
                "亞特蘭提斯", "歐開諾斯", "塔拉薩", "太平", /*15-18*/
                "雪球", "冰球", "冰棒", "冰川", /*19-22*/
                "乾旱", "沙漠", "砂岩", "口渴", /*23-26*/
                "賞金", "黃金國", "赫菲斯托斯", "邁達斯",  /*27-30*/
                "飢謹", "貧乏",  /*31-32*/
                "花園", "桃源",  /*33-34*/
                "顛茄", "豐裕之角",  /*35-36*/
                "沃倫", "蜂窩", "莫洛克", "亞地","穴居", /*37-41*/
  ];


  var NamesCurLang = ["", ""];
  NamesLang = [NamesEn, NamesRu, NamesPl, NamesSp, NamesIt, NamesGr, NamesFr, NamesSe, NamesDt, NamesCHt];

  var  planetName = "This world";
  Names = ["Eden", "Paradice", "Terra Nova", "New Earth", "Gaia", /*0-4*/
                "Inferno", "Caliente", "Scorcha", /*5-7*/
                "Arctica", "Frigidia", "Frigus",  /*8-10*/
                "Cueball", "Atlas", "Crag", "Rise", /*11-14*/
                "Atlantis", "Oceanus", "Thalassa", "Pacifica", /*15-18*/
                "Snowball", "Iceball", "Popsicle", "Glacia", /*19-22*/
                "Arid", "Desert", "Sandstone", "Thirsty", /*23-26*/
                "Bounty", "El Dorado", "Hephaestus", "Midas",  /*27-30*/
                "Dearth", "Paucity",  /*31-32*/
                "Garden", "Arcadia",  /*33-34*/
                "Belladonna", "Cornucopia",  /*35-36*/
                "Warren", "Honeycomb", "Morlock", "Subterra","Spelunk", /*37-41*/
  ];



var	AlienNames =
		[ "Bartan",
			"Cenron",
			"Nalarar",
			"Bondal",
			"Ballor",
			"Van-Karal",
			"Valtane",
			"Vantos",
			"Malalas",
			"Mateot",
			"Tiris",
			"Kanan",
			"Montaan",
			"Tardor",
			"Nananon",
			"Moridia",
			"Tatloor",
			"La Vok",
			"Slorrug",
			"Sakani",
			"Vaszalu",
			"Varkena",
			"Baro",
			"Toran",
			"Hatnlant",
			"Uluunna",
			"Baroa",
			"Duperda",
			"Bantak",
			"Barkaan",
			"Ban Beraou",
			"Baxuor",
			"Rrarar",
			"Tina",
			"Zo"
];

var	AlienNamesRu =
		[ "Бартан",
			"Ценрон",
			"Наларар",
			"Бонндал",
			"Баллор",
			"Ван-Карал",
			"Валтайн",
			"Вентоз",
			"Малалас",
			"Матеот",
			"Тирис",
			"Канан",
			"Монтаан",
			"Тардор",
			"Нананон",
			"Моридия",
			"Татлур",
			"Ла Вок",
			"Слорруг",
			"Сакани",
			"Васзалау",
			"Варкена",
			"Барро",
			"Торан",
			"Хатнлант",
			"Улуунна",
			"Баро-а",
			"Даврума",
			"Бантак",
			"Баркаан",
			"Бан Бирро",
			"Базур",
			"Ррарар",
			"Тиина",
			"Зо"
];

var AboutBtn = ["About", "О проекте"];
var AboutLine1 = ["This remake is made entirely by the fan community, with the permission of the author of the original game.<br> If you want to support the author, check out his patreon and the upcoming game Beyond the Choiron's Gate.","Данный ремейк полностью сделан силами фанатского сообщества, с разрешения автора оригинальной игры. <br>Если вы хотите поддержать автора - обратите внимание на его патреон и готовящуюся к выходу игру Beyond the Choiron's Gate.",]
var AboutLine2 = ["We are gradually translating the game into our native languages and working on introducing new gameplay mechanics and game events. If you want to take part in translations, help with ideas of additional features, create music or art, or help the project in any other way, join our discord.","Мы постепенно переводим игру на свои родные языки и работаем над введением новых геймплейных механик и игровых событий. Если вы хотите поучаствовать в переводе, придумывании новых фич, создании музыки или арта, или любым другим способом помочь проекту - присоединяйтесь к нашему дискорду.",]
var AboutLine3 = ["Or you can just buy us a coffee.","Ну, или можете просто купить нам кофе."]
//PLEASE, DON'T FORGET TO ADD YOURSELF HERE!
var Personalities = [
 "<b>Relaunch team</b>",
    "",
  //Coders
  "Einharr",
  "Partoffuturehivemind",
  "Alex Yong",
  // Russian
  "Liubov Blazomirskaia",
  // Polish
  "Joy",
  // Spanish
  "Делта א",
  // Italitan
  "Joele Bruno",
  // German
  "Claptrappington",
  // French
  // Swedish
  "dating - Oscar Salman Prim",
  // Dutch
  "Bob Bornkamp",
  //Chinese
  "章立達Albert Jones",
  //Music&SFX
  //Graphics
  "Alexandra 'Aspid' Vagner",
  "Kostyantyn 'Koksma' Khrystyuk",
]
var PersonalitiesOriginal = [
 "<b>Seedship team</b>",
 "",
 "<b>Playtesters</b>",
 "Katherine Bowers",
 "Felix Clarke",
 "Furkhail",
 "Matthew Holland",
 "@jxxf",
 "Jason LaPier",
 "Mark Ogilvie",
 "Ted P. Samuel",
 "David Stark",
 "",
 "<b>Planet names submitted by</b>",
 "chloe-and-timmy",
 "cirrus42",
 "E Dalton",
 "rharrison",
 "Patrick Hi",
 "Amigara_Horror",
 "Penny Manning",
 "A neural network trained by Janelle Shane",
]
//THIS PART HAVE BEEN REWORKED!
var	CreditsEN = [
  "<b>Creator of original Seedship game:</b>",
  "<b>Original Seedship team</b>",
  "<b>Seedship:Relaunch team</b>",
  "<b>Remake programming:</b>",
  "<b>Russian translation:</b>",
  "<b>Polish translation:</b>",
  "<b>Spanish translation:</b>",
  "<b>Italian translation:</b>",
  "<b>German translation:</b>",
  "<b>French translation:</b>",
  "<b>Swedish translation:</b>",
  "<b>Dutch translation:</b>",
  "<b>Turkish translation:</b>",
  "<b>Chinese translation:</b>",
  "<b>Music and SFX:</b>",
  "<b>Graphics:</b>",
  "<b>Playtesters:</b>",
];


var	CreditsRU = [
  "<b>Creator of original Seedship game:</b>",
  "<b>Original Seedship team</b>",
  "<b>Seedship:Relaunch team</b>",
  "<b>Remake programming:</b>",
  "<b>Russian translation:</b>",
  "<b>Polish translation:</b>",
  "<b>Spanish translation:</b>",
  "<b>Italian translation:</b>",
  "<b>German translation:</b>",
  "<b>French translation:</b>",
  "<b>Swedish translation:</b>",
  "<b>Dutch translation:</b>",
  "<b>Turkish translation:</b>",
  "<b>Chinese translation:</b>",
  "Music and SFX",
  "Graphics",
  "Playtesters",
];


var	CreditsSP = [
  "Creator of original Seedship game:",
  "Original Seedship team",
  "Seedship:Relaunch team",
  "Remake programming:",
  "Russian translation:",
  "Polish translation:",
  "Spanish translation:",
  "Italian translation:",
  "German translation:",
  "French translation:",
  "Swedish translation:",
  "Dutch translation:",
  "Turkish translation:",
  "Music and SFX",
  "Graphics",
  "Playtesters",
];

var	CreditsPL = [
  "Kreator orginalnej gry Seedship:",
  "Zespół orginalnej gry Seedship:",
  "Programista przeróbki:",
  "Rosyjskie tłumaczenie:",
  "Polskie tłumaczenie:",
  "Hiszpańska tłumaczenie:",
  "Włoskie tłumaczenie:",
  "Niemieckie tłumaczenie:",
  "Fracuskie tłumaczenie:",
  "Szedzkie tłumaczenie:",
  "Holenderskie tłumaczenie:",
  "Tureckie tłumaczenie:",
  "Muzyka i SFX:",
  "Grafika:",
  "Play testerzy:",
];

var CreditsIT = [
  "Creator of original Seedship game:",
  "Original Seedship team",
  "Seedship:Relaunch team",
  "Remake programming:",
  "Russian translation:",
  "Polish translation:",
  "Spanish translation:",
  "Italian translation:",
  "German translation:",
  "French translation:",
  "Swedish translation:",
  "Dutch translation:",
  "Turkish translation:",
  "Music and SFX",
  "Graphics",
  "Playtesters",
];

var CreditsDe = [
  "Creator of original Seedship game:",
  "Original Seedship team",
  "Seedship:Relaunch team",
  "Remake programming:",
  "Russian translation:",
  "Polish translation:",
  "Spanish translation:",
  "Italian translation:",
  "German translation:",
  "French translation:",
  "Swedish translation:",
  "Dutch translation:",
  "Turkish translation:",
  "Music and SFX",
  "Graphics",
  "Playtesters",
];

var	CreditsFr = [
  "Creator of original Seedship game:",
  "Original Seedship team",
  "Seedship:Relaunch team",
  "Remake programming:",
  "Russian translation:",
  "Polish translation:",
  "Spanish translation:",
  "Italian translation:",
  "German translation:",
  "French translation:",
  "Swedish translation:",
  "Dutch translation:",
  "Turkish translation:",
  "Music and SFX",
  "Graphics",
  "Playtesters",
]

var	CreditsSE = [
  "Originalskaparen av spelet Seedship:",
  "Återskapad/programmerad av:",
  "Rysk översättning:",
  "Spansk översättning:",
  "Polsk översättning:",
  "Svensk översättning:",
]

var	CreditsDt = [
  "Maker van het originele spel Seedship:",
  "Programmering van de remake:",
  "Russische vertaling:",
  "Spaanse vertaling:",
  "Poolse vertaling:",
  "Italiaanse vertaling:",
  "Duitse vertaling:",
  "Zweedse vertaling:",
  "Nederlandse vertaling:",
  "Turkish translation:",
  "Music and SFX",
  "Graphics",
  "Playtesters",
];

var	CreditsCHt = [
  "原版種子星艦創作人:",
  "原版種子星艦團隊:",
  "Seedship:Relaunch team",
  "程式重新設計:",
  "俄語翻譯:",
  "波蘭語翻譯:",
  "西班牙語翻譯:",
  "義大利語翻譯:",
  "德語翻譯:",
  "法語翻譯:",
  "瑞典語翻譯:",
  "荷蘭語翻譯:",
  "土耳其語翻譯:",
  "音樂和音效",
  "畫面",
  "遊戲測試",
];

var CreditsArr = [CreditsEN, CreditsRU, CreditsPL, CreditsSP, CreditsIT, CreditsDe, CreditsFr, CreditsSE, CreditsDt, CreditsCHt];
