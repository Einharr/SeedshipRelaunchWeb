//Инициализация пробирования
function probingText(start, moon, beauty, caves, plants, animals, sentients, culture, civ, ruins, features) {
  this.start = start;
  this.moon = moon;
  this.beauty = beauty;
  this.caves = caves;
  this.plants = plants;
  this.animals = animals;
  this.sentients = sentients;
  this.culture = culture;
  this.civ = civ;
  this.ruins = ruins;
  this.features = features;
}

var ProbingStart = [
  "Sensory spondy powierzchniowej",
  "potwierdzają odczyty skanerów orbitalnych statku-nasiona.",
  "uzupełniają luki w odczytach sensorów statku-nasiona.",
  "Misja sondy powierchniowej jest ukończona i następnie wyłącza się."
];

var ProbingMoon = [
  "Gdy sonda powierzchniowa zbliża się do planety, skanuje ona księżyc planety, ale stwierdza, że ​​jest pozbawiona użytecznych minerałów.",
  "Gdy sonda powierzchniowa zbliża się do planety, skanuje ona księżyc planety i stwierdza, że ​​jest bogata w metale i inne przydatne zasoby.",
  "Gdy sonda powierzchniowa zbliża się do planety, skanuje ona księżyc planety i stwierdza, że ​​jest to niedawno uchwycona asteroida na niestabilnej orbicie. Za kilka dziesięcioleci księżyc zbliży się wystarczająco blisko planety, aby się rozpadać, a powierzchnia będzie zbombardowana fragmentami.",
];

var ProbingBeauty = [
  "SI przeprowadza zdjęcia powierzchni sondy poprzez rutynową analizę estetyczną i określa, że ​​ludzie uznaliby planetę za wyjątkowo piękną.",
  "SI przeprowadza zdjęcia powierzchni sondy za pomocą rutynowej analizy estetycznej i stwierdza, że ​​ludzie uznaliby planetę za wyjątkowo brzydką."
];

var ProbingCaves = [
  "Skorupa planety jest pełna rozległych systemów jaskiń, które można łatwo uszczelnić, aby zapewnić szczelne schronienia.",
  "Skorupa planety jest pełna rozległych systemów jaskiń, które są izolowane od temperatury na powierzchni.",
  "Planeta jest niestabilna geologicznie, a niebezpieczne trzęsienia ziemi występują wszędzie na powierzchni.",
];

var ProbingPlants = [
  "Sonda znajduje obce rośliny. Testuje próbkę i stwierdza, że ​​nie będą one ani jadalne, ani trujące dla ludzi.",
  "Sonda znajduje obce rośliny. Testuje próbkę i stwierdza, że ​​niektóre z nich byłyby jadalne dla ludzi.",
  "Sonda znajduje obce rośliny. Testuje próbkę i stwierdza, że ​​wszystkie byłyby bardzo trujące dla ludzi.",
];

var ProbingAnimals = [
  "Sonda spotyka liczne zwierzęta. Po przeanalizowaniu ich zachowania stwierdziła, że nie będą one ani użyteczne, ani szkodliwe dla ludzi.",
  "Sonda spotyka liczne zwierzęta. Po przeanalizowaniu ich zachowania stwierdziła, że niektóre gatunki mogą być przydatne dla ludzi jako źródła mięsa lub zwięrzęta ciągnikowe.",
  "Sonda spotyka liczne zwierzęta. Po przeanalizowaniu ich zachowania stwierdziła, że stanowią one poważne zagrożenie dla ludzkich kolonistów.",
];

var ProbingSentients = [
  "Sonda zauważa jeden gatunek, który wykazuje złożone zachowania społeczne i posiada podstawy języka.",
  "Sonda zauważa jeden gatunek, który wykazuje złożone zachowania społeczne i używa prostych kamiennych narzędzi.",
  "Sonda zauważa jeden gatunek, który wykazuje złożone zachowania społeczne, używa wyrafinowanych narzędzi kamiennych i zaczął udomawiać inne gatunki zwierząt i roślin.",
  "Sonda bada obszar regularnego wzrostu roślin i stwierdza, że ​​jest ono celowo uprawiane przez jeden gatunek przy użyciu wyrafinowanych narzędzi kamiennych.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez statek-nasiono z orbity i stwierdza, że ​​są to osady zamieszkane przez inteligentny gatunek, który używa narzędzi kamiennych i brązowych.",
  "Sonda bada niektóre możliwe struktury zaobserwowane przez statek-nasiono z orbity i stwierdza, że ​​są to osady zamieszkane przez inteligentny gatunek, który używa żelaznych narzędzi.",
  "Sonda bada niektóre możliwe struktury zaobserwowane przez orbitę z orbity i stwierdza, że ​​są to osady zamieszkane przez inteligentny gatunek o średniowiecznym poziomie technologii.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez orbitę i stwierdza, że ​​są to miasta zamieszkane przez inteligentny gatunek o poziomie technologii zbliżonym do ziemskiej ery uprzemysłowienia.",
  "Sonda bada niektóre możliwe struktury zaobserwowane przez orbitę na orbicie i stwierdza, że ​​są to miasta zamieszkane przez inteligentny gatunek z technologią na poziomie Ery Atomu.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez orbitę i stwierdza, że ​​są to miasta zamieszkane przez inteligentny gatunek o technologii zbliżonej do ziemkiej technologii kiedy statek-nasiono został wystrzelony.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez orbitę i stwierdza, że ​​są to miasta zamieszkane przez inteligentny gatunek o poziomie technologii która jest o wiele bardziej niż technologia jaką osiągneła ziemia.",
  "",

];

var ProbingCulture = [
  "Tubylcy żyją w stanie ciągłej przemocy, bez organizacji społecznej.",
  "Tubylcy dzielą się na niezliczone małe plemiona, które trwają ze sobą w stanie wojny.",
  "Tubylcy dzielą się na niezliczone małe plemiona, z których większość żyje w strachu przed bezwzględnymi wodzami.",
  "Tubylcy są podzieleni na niezliczone małe plemiona, z których większość jest mądrze rządzona przez życzliwych wodzów.",
  "Tubylcy są podzieleni na niezliczone małe plemiona, z których większość jest rządzona wspólnie przez swoich członków i żyją w pokoju ze sobą.",
  "Większość tubylców żyje w małych narodach, które większość swoich zasobów przeznaczają na walkę ze sobą.",
  "Większość populacji żyje jako niewolnicy pod rządami despotycznych cesarzy.",
  "Najpotężniejszymi narodami rządzą królowie kapłani, którzy ściśle kontrolują przepływ wiedzy, pozostawiając ogólną populację ignorancką i analfabetyczną.",
  "Najbardziej zaawansowanymi narodami rządzą życzliwi monarchowie, którzy uważają za swój obowiązek dbać o potrzeby swoich poddanych.",
  "Najbardziej zaawansowane narody to republiki, w których decyzje podejmowane są przez zgromadzenia obywateli.",
  "Cywilizacja niedawno przeszła wojnę nuklearną, a tubylcy walczą o swoje życie w ruinach swoich niegdyś wielkich miast.",
  "Większość planety jest podzielona między kilka supermocarstw, które istnieją w stanie ciągłego napięcia politycznego i militarnego.",
  "Najbardziej zaawansowane narody to dyktatury, które w szerokim zakresie korzystają z kontroli policyjnej i nadzoru technologicznego, aby utrzymać swoje populacje w ryzach.",
  "Planeta jest zdominowana przez wiele międzynarodowych korporacji, które zastąpiły rolę rządów.",
  "Najpotężniejsze narody planety są nominalnie demokratyczne, ale przywódcy są skorumpowani i niewiele robią, aby poprawić los całej populacji.",
  "Najpotężniejsze narody planety to dobrze funkcjonujące demokracje, a ludność ogólnie cieszy się wysoką jakością życia.",
  "Ludność cieszy się życiem kulturalnym i rekreacyjnym, a zautomatyzowane maszyny dbają o ich potrzeby materialne.",
  "Sonda ma trudności w zrozumieniu kultury tubylców, która zdaje się wykorzystywać zasady polityczne i filozoficzne, jakich nigdy nie widziano na Ziemi.",
];

var ProbingCiv = [
  "Sonda przeprowadza badania na dużych wysokościach i znajduje osady i oznaki inteligentnej aktywności wszędzie, gdzie spojrzy. Wygląda na to, że nie ma części planety nietkniętej przez rodzimą cywilizację.",
];

var ProbingRuins = [
  "Sonda bada niektóre z możliwych struktur obserwowanych przez statek-nasiono z orbity i stwierdza, że ​​są to ruiny pozostawione przez zaginiony inteligentny gatunek. W ruinach znajdują się wielkie zabytki i pisma, które mogą wiele powiedzieć o wymarłej cywilizacji.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez statel-nasiono z orbity i stwierdza, że ​​są to ruiny pozostawione przez zaginiony inteligentny gatunek. Ruiny zawierają zaawansowane artefakty technologiczne, z których niektóre nadal działają, oraz naukowe bazy danych, które można odkodować.",
  "Sonda bada niektóre z możliwych struktur obserwowanych przez statek-nasiono z orbity i stwierdza, że ​​są to ruiny pozostawione przez zaginiony inteligentny gatunek. Ruiny zawierają działające systemy obronne, a sonda ledwo ucieka.",
  "Sonda bada możliwe struktury obserwowane przez statek-nasiono z orbity, ale stwierdza, że ​​są to regularne naturalne formacje, a nie produkt inteligencji.",
];

var ProbingFeatures = [
  "Tubylcy z tej planety już złożyli ofertę azylu dla ludzkich uchodźców i powitają ich, jeśli statek-nasiono wyląduje.",
  "Tubylcy na tej planecie są świadomi misji statku-nasiona i dali jasno do zrozumienia, że ​​uchodźcy nie będą mile widziani.",
  "Ta planeta jest idealną symulacją stworzoną przez fantastycznie zaawansowane komputery kosmitów na podstawie danych z naukowych i kulturowych baz danych statku-nasiona.",
  "Ta planeta została niedawno poddana terraformacji przez zaawansowanych kosmitów, aby nadawałą się do życia ludzkiego, wiele obcych struktur znajduje się na orbicie i na powierzchni.",
];

var cProbing = new probingText(
  ProbingStart,
  ProbingMoon,
  ProbingBeauty,
  ProbingCaves,
  ProbingPlants,
  ProbingAnimals,
  ProbingSentients,
  ProbingCulture,
  ProbingCiv,
  ProbingRuins,
  ProbingFeatures,
)
