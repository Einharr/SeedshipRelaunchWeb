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
  "Araþtýrma sondasýnýn sensörleri",
  "geminin yörünge tarayýcýlarýnýn ölçümlerini onaylar.",
  "geminin yörüngeden toplayabileceði verilerdeki boþluklarý doldurur.",
  "Araþtýrma sensörünün görevi tamanlandý ve kapatýlýyor."
];

var ProbingMoon = [
  "Yüzey sondasý gezegene yaklaþtýkça gezegenin ayýný tarar, ancak ayýn yararlý minerallerden yoksun olduðunu bulur.",
  "Yüzey sondasý gezegene yaklaþtýkça gezegenin ayýný tarar ve ayýn metaller ve diðer yararlý kaynaklar açýsýndan zengin olduðunu bulur.",
  "Yüzey sondasý gezegene yaklaþtýkça, gezegenin ayýný tarar ve onun dengesiz bir yörüngede yakýn zamanda yakalanmýþ bir asteroid olduðunu bulur. Birkaç on yýl içinde, ay gezegene parçalanacak kadar yaklaþacak ve yüzey parçalarla bombardýmana tutulacak.",
];

var ProbingBeauty = [
  "Yapay zeka, sondanýn yüzeydeki görüntülerini estetik analiz rutini aracýlýðýyla çalýþtýrýyor ve insanlarýn gezegeni olaðanüstü güzel bulacaðýný tespit ediyor.",
  "Yapay zeka, sondanýn yüzey görüntülerini estetik analiz rutini aracýlýðýyla çalýþtýrýyor ve insanlarýn gezegeni son derece çirkin bulacaðýný tespit ediyor."
];

var ProbingCaves = [
  "Gezegenin kabuðu, hava geçirmez barýnaklar saðlamak için kolayca kapatýlabilen geniþ maðara sistemleriyle dolu.",
  "Gezegenin kabuðu, yüzeydeki sýcaklýktan izole edilmiþ geniþ maðara sistemleriyle dolu.",
  "Gezegen jeolojik olarak dengesiz ve yüzeyde her yerde tehlikeli depremler yaygýndýr.",
];

var ProbingPlants = [
  "Sonda yabancý bitkileri bulur. Bir örneði test eder ve bunlarýn insanlar için ne yenilebilir ne de zehirli olduðunu bulur.",
  "Sonda yabancý bitkileri bulur. Bir örneði test eder ve bazýlarýnýn insanlar için yenilebilir olduðunu bulur.",
  "Sonda yabancý bitkileri bulur. Bir örneði test eder ve hepsinin insanlar için son derece zehirli olacaðýný bulur.",
];

var ProbingAnimals = [
  "Sonda çok sayýda hayvanla karþýlaþýr. Davranýþlarýný analiz ettikten sonra, bunlarýn insanlara ne yararlý ne de zararlý olacaðý sonucuna varýr.",
  "Sonda çok sayýda hayvanla karþýlaþýr. Davranýþlarýný analiz ettikten sonra, bazý türlerin et kaynaðý veya yük hayvaný olarak insanlara faydalý olma potansiyeline sahip olduðu sonucuna varýr.",
  "Sonda çok sayýda hayvanla karþýlaþýr. Davranýþlarýný analiz ettikten sonra, insan kolonistleri için önemli bir tehdit oluþturduklarý sonucuna varýr.",
];

var ProbingSentients = [
  "", //THIS LINE IS IMPORTANT
  "Sonda, karmaþýk sosyal davranýþ sergileyen ve ilkel bir dili olan bir türü fark ediyor.",
  "Sonda, karmaþýk sosyal davranýþ sergileyen ve basit taþ aletler kullanan bir türü fark ediyor.",
  "Sonda, karmaþýk sosyal davranýþ sergileyen, geliþmiþ taþ aletler kullanan ve diðer hayvan ve bitki türlerini evcilleþtirmeye baþlayan bir türü fark ediyor.",
  "Sonda, düzenli olarak bitki büyüyen bir alaný araþtýrýyor ve bunun, geliþmiþ taþ aletler kullanýlarak bir tür tarafýndan kasýtlý olarak yetiþtirildiðini tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn taþ ve bronz aletler kullanan zeki bir türün yaþadýðý yerleþim yerleri olduðunu tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn demir aletler kullanan zeki bir türün yaþadýðý yerleþim yerleri olduðunu tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn, orta çað teknolojisine sahip zeki bir türün yaþadýðý yerleþim yerleri olduðunu tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve endüstriyel düzeyde teknolojiye sahip akýllý bir türün yaþadýðý þehirler olduðunu tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn Atom Çaðý teknolojisine sahip akýllý bir türün yaþadýðý þehirler olduðunu tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve Bilgi Çaðý teknolojisine sahip akýllý bir türün yaþadýðý þehirler olduklarýný tespit ediyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn, Tekillik sonrasý teknoloji seviyesine sahip akýllý bir türün yaþadýðý þehirler olduðunu tespit ediyor.",

];

var ProbingCulture = [
  "Yerliler, hiçbir sosyal örgütlenme olmadan, sürekli bir þiddet durumunda yaþarlar.",
  "Yerliler, birbirleriyle sürekli savaþ halinde olan sayýsýz küçük kabileye bölünmüþ durumda.",
  "Yerliler, çoðu acýmasýz reislerinden korkan sayýsýz küçük kabileye bölünmüþ durumda.",
  "Yerliler, çoðu yardýmsever þefler tarafýndan akýllýca yönetilen sayýsýz küçük kabileye bölünmüþtür.",
  "Yerliler, çoðu üyeleri tarafýndan toplu olarak yönetilen ve birbirleriyle barýþ içinde yaþayan sayýsýz küçük kabileye bölünmüþtür.",
  "Yerlilerin çoðu, kaynaklarýnýn çoðunu birbirleriyle savaþmaya ayýran küçük uluslarda yaþýyor.",
  "Nüfusun çoðu despotik imparatorlarýn egemenliði altýnda köle olarak yaþýyor.",
  "En güçlü uluslar, genel nüfusu cahil býrakarak bilgi akýþýný sýký bir þekilde kontrol eden rahip-krallar tarafýndan yönetilir.",
  "En geliþmiþ uluslar, tebaalarýnýn ihtiyaçlarýný görmeyi kendi görevleri olarak gören yardýmsever hükümdarlar tarafýndan yönetilir.",
  "En ileri milletler, kararlarýn yurttaþ meclisleri tarafýndan alýndýðý cumhuriyetlerdir.",
  "Medeniyet yakýn zamanda bir nükleer savaþa girdi ve yerliler bir zamanlar büyük þehirlerinin harabelerinde hayatlarýný sürdürüyorlar.",
  "Gezegenin çoðu, sürekli bir gerilim durumunda var olan birkaç süper güç arasýnda bölünmüþtür.",
  "En geliþmiþ ülkeler, nüfuslarýný ayný hizada tutmak için polis ve teknolojik gözetlemeden kapsamlý þekilde yararlanan diktatörlüklerdir.",
  "Gezegene, hükümetlerin rolünün yerini alan bir dizi çokuluslu þirket hakimdir.",
  "Gezegenin en güçlü uluslarý sözde demokratiktir, ancak liderler yozlaþmýþtýr ve genel nüfusun çoðunu iyileþtirmek için çok az þey yapýyorlar.",
  "Gezegenin en güçlü uluslarý iyi iþleyen demokrasilerdir ve nüfus genellikle yüksek bir yaþam kalitesine sahiptir.",
  "Nüfus, maddi ihtiyaçlarýný karþýlayan otomatik makinelerle kültür ve eðlence hayatlarýndan keyif alýyor.",
  "Sonda, Dünya'da hiç görülmemiþ politik ve felsefi ilkeleri kullanýyor gibi görünen yerlilerin kültürünü anlamlandýrmakta güçlük çekiyor.",
];

var ProbingCiv = [
  "Sonda, yüksek irtifa araþtýrmalarý yapýyor ve gördüðü her yerde yerleþimler ve akýllý faaliyet iþaretleri buluyor. Görünüþe göre gezegenin yerli medeniyetin dokunmadýðý bir parçasý yok.",
];

var ProbingRuins = [
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn kaybolan zeki bir tür tarafýndan býrakýlmýþ kalýntýlar olduðunu tespit ediyor. Kalýntýlar, yok olan uygarlýk hakkýnda çok þey ortaya çýkarabilecek büyük anýtlar ve kitabeler içeriyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn ortadan kaybolan zeki bir tür tarafýndan býrakýlmýþ kalýntýlar olduðunu tespit ediyor. Kalýntýlar, bazýlarý hala çalýþmakta olan ileri teknolojik eserler ve kodu çözülebilen bilimsel veri tabanlarý içeriyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlardan bazýlarýný araþtýrýyor ve bunlarýn ortadan kaybolan zeki bir tür tarafýndan býrakýlmýþ kalýntýlar olduðunu tespit ediyor. Kalýntýlar, çalýþan savunma sistemleri içeriyor ve sonda zar zor kaçýyor.",
  "Sonda, tohum gemisinin yörüngeden gözlemlediði olasý yapýlarý araþtýrýyor, ancak bunlarýn zeka ürünü deðil, normal doðal oluþumlar olduðunu tespit ediyor.",
];

var ProbingFeatures = [
  "Bu gezegenin yerlileri çoktan insan mültecilere sýðýnma teklifinde bulundular ve tohum gemisi yere indiðinde onlarý karþýlayacaklar.",
  "Bu gezegenin yerlileri, tohum gemisinin misyonunun farkýnda ve insan mültecilerin gezegenlerinde hoþ karþýlanmayacaðýný açýkça ortaya koydular.",
  "Bu gezegen, tohum gemisinin bilimsel ve kültürel veritabanlarýndaki verilere dayalý olarak olaðanüstü derecede geliþmiþ uzaylýlar tarafýndan oluþturulan mükemmel bir simülasyondur.",
  "Bu gezegen yakýn zamanda geliþmiþ uzaylýlar tarafýndan insan yaþamýna uygun olacak þekilde düzenlenmiþtir ve birçok yabancý yapý, yüzey üzerinde yörüngede oturmaktadýr.",
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