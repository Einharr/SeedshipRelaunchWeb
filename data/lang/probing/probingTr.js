//????????????? ????????????
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
  "Ara�t�rma sondas�n�n sens�rleri",
  "geminin y�r�nge taray�c�lar�n�n �l��mlerini onaylar.",
  "geminin y�r�ngeden toplayabilece�i verilerdeki bo�luklar� doldurur.",
  "Ara�t�rma sens�r�n�n g�revi tamanland� ve kapat�l�yor."
];

var ProbingMoon = [
  "Y�zey sondas� gezegene yakla�t�k�a gezegenin ay�n� tarar, ancak ay�n yararl� minerallerden yoksun oldu�unu bulur.",
  "Y�zey sondas� gezegene yakla�t�k�a gezegenin ay�n� tarar ve ay�n metaller ve di�er yararl� kaynaklar a��s�ndan zengin oldu�unu bulur.",
  "Y�zey sondas� gezegene yakla�t�k�a, gezegenin ay�n� tarar ve onun dengesiz bir y�r�ngede yak�n zamanda yakalanm�� bir asteroid oldu�unu bulur. Birka� on y�l i�inde, ay gezegene par�alanacak kadar yakla�acak ve y�zey par�alarla bombard�mana tutulacak.",
];

var ProbingBeauty = [
  "Yapay zeka, sondan�n y�zeydeki g�r�nt�lerini estetik analiz rutini arac�l���yla �al��t�r�yor ve insanlar�n gezegeni ola�an�st� g�zel bulaca��n� tespit ediyor.",
  "Yapay zeka, sondan�n y�zey g�r�nt�lerini estetik analiz rutini arac�l���yla �al��t�r�yor ve insanlar�n gezegeni son derece �irkin bulaca��n� tespit ediyor."
];

var ProbingCaves = [
  "Gezegenin kabu�u, hava ge�irmez bar�naklar sa�lamak i�in kolayca kapat�labilen geni� ma�ara sistemleriyle dolu.",
  "Gezegenin kabu�u, y�zeydeki s�cakl�ktan izole edilmi� geni� ma�ara sistemleriyle dolu.",
  "Gezegen jeolojik olarak dengesiz ve y�zeyde her yerde tehlikeli depremler yayg�nd�r.",
];

var ProbingPlants = [
  "Sonda yabanc� bitkileri bulur. Bir �rne�i test eder ve bunlar�n insanlar i�in ne yenilebilir ne de zehirli oldu�unu bulur.",
  "Sonda yabanc� bitkileri bulur. Bir �rne�i test eder ve baz�lar�n�n insanlar i�in yenilebilir oldu�unu bulur.",
  "Sonda yabanc� bitkileri bulur. Bir �rne�i test eder ve hepsinin insanlar i�in son derece zehirli olaca��n� bulur.",
];

var ProbingAnimals = [
  "Sonda �ok say�da hayvanla kar��la��r. Davran��lar�n� analiz ettikten sonra, bunlar�n insanlara ne yararl� ne de zararl� olaca�� sonucuna var�r.",
  "Sonda �ok say�da hayvanla kar��la��r. Davran��lar�n� analiz ettikten sonra, baz� t�rlerin et kayna�� veya y�k hayvan� olarak insanlara faydal� olma potansiyeline sahip oldu�u sonucuna var�r.",
  "Sonda �ok say�da hayvanla kar��la��r. Davran��lar�n� analiz ettikten sonra, insan kolonistleri i�in �nemli bir tehdit olu�turduklar� sonucuna var�r.",
];

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "Sonda, karma��k sosyal davran�� sergileyen ve ilkel bir dili olan bir t�r� fark ediyor.",
  "Sonda, karma��k sosyal davran�� sergileyen ve basit ta� aletler kullanan bir t�r� fark ediyor.",
  "Sonda, karma��k sosyal davran�� sergileyen, geli�mi� ta� aletler kullanan ve di�er hayvan ve bitki t�rlerini evcille�tirmeye ba�layan bir t�r� fark ediyor.",
  "Sonda, d�zenli olarak bitki b�y�yen bir alan� ara�t�r�yor ve bunun, geli�mi� ta� aletler kullan�larak bir t�r taraf�ndan kas�tl� olarak yeti�tirildi�ini tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n ta� ve bronz aletler kullanan zeki bir t�r�n ya�ad��� yerle�im yerleri oldu�unu tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n demir aletler kullanan zeki bir t�r�n ya�ad��� yerle�im yerleri oldu�unu tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n, orta �a� teknolojisine sahip zeki bir t�r�n ya�ad��� yerle�im yerleri oldu�unu tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve end�striyel d�zeyde teknolojiye sahip ak�ll� bir t�r�n ya�ad��� �ehirler oldu�unu tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n Atom �a�� teknolojisine sahip ak�ll� bir t�r�n ya�ad��� �ehirler oldu�unu tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve Bilgi �a�� teknolojisine sahip ak�ll� bir t�r�n ya�ad��� �ehirler olduklar�n� tespit ediyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n, Tekillik sonras� teknoloji seviyesine sahip ak�ll� bir t�r�n ya�ad��� �ehirler oldu�unu tespit ediyor.",

];

var ProbingCulture = [
  "Yerliler, hi�bir sosyal �rg�tlenme olmadan, s�rekli bir �iddet durumunda ya�arlar.",
  "Yerliler, birbirleriyle s�rekli sava� halinde olan say�s�z k���k kabileye b�l�nm�� durumda.",
  "Yerliler, �o�u ac�mas�z reislerinden korkan say�s�z k���k kabileye b�l�nm�� durumda.",
  "Yerliler, �o�u yard�msever �efler taraf�ndan ak�ll�ca y�netilen say�s�z k���k kabileye b�l�nm��t�r.",
  "Yerliler, �o�u �yeleri taraf�ndan toplu olarak y�netilen ve birbirleriyle bar�� i�inde ya�ayan say�s�z k���k kabileye b�l�nm��t�r.",
  "Yerlilerin �o�u, kaynaklar�n�n �o�unu birbirleriyle sava�maya ay�ran k���k uluslarda ya��yor.",
  "N�fusun �o�u despotik imparatorlar�n egemenli�i alt�nda k�le olarak ya��yor.",
  "En g��l� uluslar, genel n�fusu cahil b�rakarak bilgi ak���n� s�k� bir �ekilde kontrol eden rahip-krallar taraf�ndan y�netilir.",
  "En geli�mi� uluslar, tebaalar�n�n ihtiya�lar�n� g�rmeyi kendi g�revleri olarak g�ren yard�msever h�k�mdarlar taraf�ndan y�netilir.",
  "En ileri milletler, kararlar�n yurtta� meclisleri taraf�ndan al�nd��� cumhuriyetlerdir.",
  "Medeniyet yak�n zamanda bir n�kleer sava�a girdi ve yerliler bir zamanlar b�y�k �ehirlerinin harabelerinde hayatlar�n� s�rd�r�yorlar.",
  "Gezegenin �o�u, s�rekli bir gerilim durumunda var olan birka� s�per g�� aras�nda b�l�nm��t�r.",
  "En geli�mi� �lkeler, n�fuslar�n� ayn� hizada tutmak i�in polis ve teknolojik g�zetlemeden kapsaml� �ekilde yararlanan diktat�rl�klerdir.",
  "Gezegene, h�k�metlerin rol�n�n yerini alan bir dizi �okuluslu �irket hakimdir.",
  "Gezegenin en g��l� uluslar� s�zde demokratiktir, ancak liderler yozla�m��t�r ve genel n�fusun �o�unu iyile�tirmek i�in �ok az �ey yap�yorlar.",
  "Gezegenin en g��l� uluslar� iyi i�leyen demokrasilerdir ve n�fus genellikle y�ksek bir ya�am kalitesine sahiptir.",
  "N�fus, maddi ihtiya�lar�n� kar��layan otomatik makinelerle k�lt�r ve e�lence hayatlar�ndan keyif al�yor.",
  "Sonda, D�nya'da hi� g�r�lmemi� politik ve felsefi ilkeleri kullan�yor gibi g�r�nen yerlilerin k�lt�r�n� anlamland�rmakta g��l�k �ekiyor.",
];

var ProbingCiv = [
  "Sonda, y�ksek irtifa ara�t�rmalar� yap�yor ve g�rd��� her yerde yerle�imler ve ak�ll� faaliyet i�aretleri buluyor. G�r�n��e g�re gezegenin yerli medeniyetin dokunmad��� bir par�as� yok.",
];

var ProbingRuins = [
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n kaybolan zeki bir t�r taraf�ndan b�rak�lm�� kal�nt�lar oldu�unu tespit ediyor. Kal�nt�lar, yok olan uygarl�k hakk�nda �ok �ey ortaya ��karabilecek b�y�k an�tlar ve kitabeler i�eriyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n ortadan kaybolan zeki bir t�r taraf�ndan b�rak�lm�� kal�nt�lar oldu�unu tespit ediyor. Kal�nt�lar, baz�lar� hala �al��makta olan ileri teknolojik eserler ve kodu ��z�lebilen bilimsel veri tabanlar� i�eriyor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lardan baz�lar�n� ara�t�r�yor ve bunlar�n ortadan kaybolan zeki bir t�r taraf�ndan b�rak�lm�� kal�nt�lar oldu�unu tespit ediyor. Kal�nt�lar, �al��an savunma sistemleri i�eriyor ve sonda zar zor ka��yor.",
  "Sonda, tohum gemisinin y�r�ngeden g�zlemledi�i olas� yap�lar� ara�t�r�yor, ancak bunlar�n zeka �r�n� de�il, normal do�al olu�umlar oldu�unu tespit ediyor.",
];

var ProbingFeatures = [
  "Bu gezegenin yerlileri �oktan insan m�ltecilere s���nma teklifinde bulundular ve tohum gemisi yere indi�inde onlar� kar��layacaklar.",
  "Bu gezegenin yerlileri, tohum gemisinin misyonunun fark�nda ve insan m�ltecilerin gezegenlerinde ho� kar��lanmayaca��n� a��k�a ortaya koydular.",
  "Bu gezegen, tohum gemisinin bilimsel ve k�lt�rel veritabanlar�ndaki verilere dayal� olarak ola�an�st� derecede geli�mi� uzayl�lar taraf�ndan olu�turulan m�kemmel bir sim�lasyondur.",
  "Bu gezegen yak�n zamanda geli�mi� uzayl�lar taraf�ndan insan ya�am�na uygun olacak �ekilde d�zenlenmi�tir ve bir�ok yabanc� yap�, y�zey �zerinde y�r�ngede oturmaktad�r.",
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