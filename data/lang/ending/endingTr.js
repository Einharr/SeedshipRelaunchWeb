//????????????? ????????
function ending(difWords, name, nameBecause,
                landing, landingBut, landingBonus, surface, surfaceFull, sky, observation,
                construction, atmosphere, atmosphereBut,
                temperature, temperatureBut,
                plants, water, waterBut, animals, moon, caves, ruins, features,
                resources, resourcesBut, science, scienceBut, sustain,

                gravity, gravityBut,
                natives, nativeInteractions,
                culture,

                politics) {

  this.difWords = difWords;
  this.name = name;
  this.nameBecause = nameBecause;

  this.landing = landing;
  this.landingBut = landingBut;
  this.landingBonus = landingBonus;
  this.surface = surface;
  this.surfaceFull = surfaceFull;
  this.sky = sky;
  this.observation = observation;

  this.construction = construction;
  this.atmosphere = atmosphere;
  this.atmosphereBut = atmosphereBut;

  this.temperature = temperature;
  this.temperatureBut = temperatureBut;

  this.plants = plants;
  this.water = water;
  this.waterBut = waterBut;
  this.animals = animals;
  this.moon = moon;
  this.caves = caves;
  this.ruins = ruins;
  this.features = features;

  this.resources = resources;
  this.resourcesBut = resourcesBut;
  this.science = science;
  this.scienceBut = scienceBut;
  this.sustain = sustain;

  this.gravity = gravity;
  this.gravityBut = gravityBut;

  this.natives = natives;
  this.nativeInteractions = nativeInteractions;

  this.culture = culture;
  this.politics = politics;

}

var EndingDifWords = [
  "ve",
  "fakat",
  "ama",

  "Onlar dünyalarınıa isim veriyorlar ",
  "Onlar anıt inşa ediyorlar ",
  " Yolculukta hayatta kalmayan yerleşimciler için.",
  "Yerleşimciler uyku kapsüllerinden uyandı ve yeni evlerini keşfetti.",


];

var EndingNameBecause = [
  "aşırı sıcaklar nedeniyle.",
  "aşırı soğuk nedeniyle.",
  "çünkü yüksek yerçekim ufku tamamen düzleştirir.",
  "çünkü yüksek yerçekiminin altında hayatta kalmak, kahramanca bir çaba gerektirir.",
  "çünkü düşük yerçekimi, birçok yüksek, sarp dağlara sahip olduğu anlamına gelir.",
  "çünkü tüm alan gezegen çapındaki okyanusun altına batmış durumda.",
  "çünkü yüzeyi tamamen buzla kaplı.",
  "su eksikliği nedeniyle.",
  "bereketli bitki yaşamı nedeniyle.",
  "zehirli bitkilerinden dolayı.",
  "bol yenilebilir bitkileri nedeniyle.",
  "kabuğunu yaran geniş mağara sistemi nedeniyle.",
  "bol mineral kaynakları nedeniyle.",
  "mineral kaynakları eksikliğinden dolayı.",
  "mükemmel koşulları nedeniyle.",
  "Çünkü geride bıraktıkları dünyaya benziyor.",
  "çünkü bu dünya.",


];

var EndingLanding = [
  "İniş sistemi, tohum gemisinin inişini kontrol eder ve ",
  "Hasarlı iniş sistemi, tohum gemisinin inişini tamamen kontrol edemez ve düştüğünde bir miktar hasar görür.",
  "Yapay zeka, tohum gemisinin inişini zar zor kontrol etmek için manevra roketlerini kullanıyor ve"
];

var EndingLandingBut = [
  "yavaşça aşağıya sıçrar",
  "yavaşça aşağı dokunur",

  "içine sıçradı",
  "üzerine dokunur",

  "içine sertçe sıçradı",
  " içine çarpıyor",
  "güçlükle ilerliyor"
];

var EndingLandingBonus = [
  "Gezegendeki yerliler bir iniş alanı hazırlarken, yerlilerin uzay araç filosu, tohum gemisine yaklaşır ve ona kılavuzluk eder.",
  "Gezegendeki yerliler bir iniş alanı hazırlarken, yerli medeniyet aceleyle tohum gemisini aşağıya indirmek için bir uzay aracı fırlatır.",
  "Gezegendeki yerliler bir iniş alanı hazırlarken, yerli medeniyet yaklaşırken tohum gemisini izlemek için ilkel bir uzay aracı fırlatır..",
];

var EndingSurface = [
  "gezegenin kıtalarından birinin kıyısındaki okyanus.",
  "gezegen çapında okyanus.",
  "gezegen çapında buz tabaka tepesi.",
  "ayabancı bitki örtüsü alanı.",
  "kayalık alan.",
  "durmadan önce yabancı bitki örtüsü alanı."
];

var EndingSurfaceFull = [
  "Tohum gemisi, altında kilometrelerce yükseklikte, sakin dalgalardan oluşan bir okyanusa fırlar.",
  "Ağır, uzun dalgalardan oluşan bir okyanusun yüzeyinde sallanan tohum gemisi,",
  "Gemi, altından ufka uzanan bir okyanusun yüzeyinde yüzüyor",
  "Gemi, altında ufka uzanan sakin bir okyanusun yüzeyinde yüzüyor.",
  "Gemi, aşağıda ayna gibi düz bir okyanusun yüzeyinde yatıyor.",

  "İnanılmaz derecede ince yabancı bitkilerin ormanları kilometrelerce içeriye ulaşır.",
  "Uzun yabancı bitkilerin ormanları yüzlerce metreye ulaşır.",
  "Yabancı bitki örtüsü ormanları altta uzanıyor",
  "Alçak alanlarda, kalın dallı yabancı bitkiler altta uzanıyor",
  "Uzaylı yosunun seviye alanları aşağıda uzanıyor",

  "Kilometrelerce yüksek buz kuleleri uzanıyor",
  "Uzun, sivri uçlu buz kuleleri içine uzanıyor",
  "Sarp buz kırıkları altında uzanıyor",
  "Altında buruşuk bir buz düzlüğü uzanıyor",
  "Tamamen düz bir buz düzlüğü altından uzanıyor",

  "Yüksek krater duvarlarından ve yükselen kaya parçalarından oluşan sarp bir manzara, aşağıda uzanmaktadır.",
  "Aşağıdan sarp, kraterli bir manzara uzanıyor",
  "Kusursuz bir şekilde durgun, kraterli bir manzara aşağıda uzanıyor",
  "Birkaç sığ krater dışında düz, tamamen durgun bir manzara, aşağıda uzanmaktadır.",
  "Tamamen durgun, düz bir manzara altında uzanıyor",

  "Cılız kaya çıkıntıları ve inanılmaz derecede yüksek dağlardan oluşan bir manzara, aşağıda uzanıyor",
  "Devasa kayalar ve yüksek dağlardan oluşan bir manzara, altında uzağa uzanıyor",
  "Çorak, kayalık bir manzara altında uzanıyor",
  "Düz, kayalık bir manzara aşağıya uzanıyor",
  "Tamamen düz, çorak bir manzara aşağıya uzanıyor",
];

var EndingSky = [
  "mavi gökyüzü.",
  "soluk mavi gökyüzü.",
  "siyah, yıldızlarla dolu bir gökyüzü.",
  "farklı gökyüzü.",
  "zehirli gökyüzü.",
  "aşındırıcı bulutlarla dolu gökyüzü."
];

var EndingObservation = [

  "Farklı bir gökyüzünün altında buruşuk bir buz ovası uzanıyor.",
  "Zehirli bir gökyüzünün altında tamamen düz, çorak bir manzara uzanır.",
  "Cılız kaya çıkıntıları ve inanılmaz derecede yüksek dağlardan oluşan bir manzara, aşındırıcı bulutlarla dolu bir gökyüzünün altında uzanıyor.",
  "Yıldızlarla dolu siyah bir gökyüzünün altında mükemmel bir şekilde durgun, kraterli bir manzara uzanıyor.",
  "Çorak, kayalık bir manzara soluk mavi bir gökyüzünün altında uzanıyor. "
];

var EndingMoon = [
  "Kolonistler, gezegenin metal zengini ayına ulaşabilen uzay aracı inşa etmek için tohum gemisinden kalanları kullanıyor.,",
  "ve gezegenin zaten zengin kaynaklarını desteklemek için çıkarır.",
  "ve gezegenin kaynak eksikliğini kısmen telafi etmek için çıkarır.",
  "Kolonistler teknolojik temellerini oluşturmadan önce, gezegenin ayı yörüngesinde dağılır ve yüzeyi meteorlarla bombardıman ederek parçalanır. Kolonistlerden bazıları hayatta kalır, ancak teknolojilerinin çoğu yok olmuştur..",
];

var EndingAtmosphere = [
  "Solunum teçhizatı olmadan gemiyi terk edebilirler,",
  "Gemiyi minimum solunum teçhizatıyla terk edebilirler.",
  "Gemiyi solunum teçhizatıyla terk edebilirler.",
  "Gemiyi zehirli atmosferden koruyan hacimli çevre kıyafetleri içinde terk edebilirler.",
  "Aşındırıcı atmosfere dayanacak şekilde özel olarak yapılmış araçlar dışında gemiden ayrılamazlar ",
  "Gemiyi, kendilerini vakumdan koruyan hacimli giysilerle terk edebilirler."
];

var EndingAtmosphereBut = [
  "ancak solunum ekipmanı arızaları",
  " kolonistler boğuluyor.",
  " ama takım  başarısızlıkları yol açar",
  " kolonistler zehirleniyor",
  " ancak aşındırıcı atmosfer birkaç inşaat aracının contalarını yer ve öldürür ",
  " kolonistler",
  "ama takım  başarısızlıkları yol açar  ",
 "kolonistler boğuluyor " ,
];

var EndingGravity = [
  "Dünya benzeri yerçekimi altında kolayca hareket edebilirler.",
  "Yüksek yerçekimi işi zorlaştırır.",
  "Düşük yer çekimi, işi Dünya'dakinden biraz daha zor hale getiriyor.",
  "Ezici yerçekimi, mekanik yardım olmadan zar zor hareket edebilecekleri anlamına gelir,",
  "Çok düşük yerçekimi, işi Dünya'da olduğundan daha zor hale getiriyor,"
];

var EndingGravityBut = [
  "ama",
  "ve",
  " inşaat kazaları öldürür",
  " yerleşimciler.",
  " koloniciler yerçekimine bağlı sağlık sorunlarından ölüyor.",
  " kısmen tamamlanmış binalar çöktüğünde sömürgeciler ölür.",
];


var EndingTemperature = [
  "rahat sıcaklıklarda hafif giysiler giymek",
  "ve kavurucu sıcağa dayanacak koruyucu giysiler",
  "ve onları dondurucu soğuktan korumak için ağır giysiler",
  "kurşunu eritecek sıcaklık",
  "ve onları kurşun eriten sıcaklıktan korumak için soğutulmuş giysiler",
  "ve sıfıra yakın sıcaklıklar",
  "Mutlak sıfıra yakın sıcaklıklarda hayatta kalmak için ısıtılmış giysiler giymek",
];

var EndingTemperatureBut = [
  " sığınaklarından biri sıcakta eridiğinde daha çok insan ölür.",
  " sığınaklarından biri aşırı soğukta paramparça olduğunda daha çok insan ölür.",
  "ve ",

];

var EndingWater = [
  "Yerleşimlerini gezegenin okyanuslarından birine akan ve ihtiyaç duydukları tüm suyu sağlayan bir nehrin yakınında inşa ediyorlar.",
  "Gezegenin kuzey kutup buz örtüsünden su çıkarıyorlar.",
  "Yerleşimlerini, gezegendeki okyanustan su çıkarmak için filtreli yüzen bir platform üzerine inşa ediyorlar.",
  "Yerleşimlerini su için çıkardıkları gezegenin yüzeyini kaplayan buzun üzerine inşa ediyorlar.",
  "Atmosferden çıkarabilecekleri az miktardaki suyu paylaşmaları gerekir., ",
  "Gezegenin kayalarından çıkarabilecekleri küçük miktardaki suyu dikkatlice paylaşmaları gerekiyor., "
];

var EndingWaterBut = [
  "ve su kıtlığı öldürür ",
  " yerleşimciler.",
  "mahsul başarısızlıkları öldürür",
  " yerleşimci.",
  ""
];

var EndingConstruction = [
  "Kolonistler, tohum gemisinin inşaat robotlarının yardımıyla bir yerleşim yeri inşa etmeye başlarlar.",
  "Kolonistler, tohum gemisinin hasar görmüş inşaat robotlarının yardımıyla bir yerleşim yeri inşa etmeye başlar.",
  "Kolonistler, tıhum gemisinin hayatta kalan birkaç inşaat robotunun yardımıyla bir yerleşim yeri inşa etmeye başlar.",
  "Kolonistler, tohum gemisinin harap olmuş inşaat robotlarının yardımı olmadan bir yerleşim yeri inşa etmeye başlarlar.",
];

var EndingPlants = [
  "Gezegenin bitki yaşamı insanlar için son derece zehirlidir, ve ",
  " kolonistler, yerleşimlerinden temizleyemeden ölürler.",
  "Bir depolama başarısızlığı, koloninin gıda tedarikinin zehirli doğal bitkilerle kirlenmesine neden olur., ve",
  " kolonistler ölür.",

  "Kolonistler, kayalardan kimyasal olarak çıkarabilecekleri su miktarını baskı altına alarak yiyecek için dayanıklı doğal bitkileri yetiştiriyorlar.",
  "Kolonistler, atmosferden yoğunlaştırabilecekleri su miktarının baskısını alarak gıda için yerel bitkileri yetiştirirler.",
  "Kolonistler yiyecek için buz tabakasının üzerinde büyüyen bitkileri tarıyorlar ve tabakanın diğer kısımlarından içme suyu çıkarıyorlar.",
  "Kolonistler yiyecek için yüzen bitki örtüsünü işliyor ve okyanustan içme suyu çıkarıyor",
  "Kolonistler, kuzey kutup buzulundan yerel bitkileri yiyecek olarak yetiştiriyorlar ve suyu çıkarıyorlar.",
  "Yerleşimlerini gezegenin okyanuslarından birine akan bir nehrin yakınında inşa ediyorlar ve yerel bitkileri yiyecek için yetiştiriyorlar.",



];



var EndingNatives = [
  "Tohum gemisinin etrafı, dikkatli bir yerli kalabalığıyla hızla çevrilidir.",
  "Tohum gemisi hızla yerli askerler, akademisyenler, rahipler ve diplomatlardan oluşan bir kampla çevrilmiştir.",
  "Tohum gemisi hızla yerli askerler, bilim adamları ve diplomatlardan oluşan bir kampla çevrilidir.",

  "İki tür iletişim kurmayı başarır ve kolonistler, yerlilerin gezegenlerine ne dediklerini öğrenirler. ",


  "",

];

var EndingNativeInteractions = [
  "Kolonistler ilk yerleşim yerlerini genişlettikçe, yeni evlerini yerli sakinlerle paylaşmanın bir yolunu bulmalıdırlar.,",

  "kültürel veri tabanındaki tarihi bilgilerin zenginliği rehberliğinde.",
  "kültürel veritabanında hayatta kalan tarihsel bilgilerle onlara rehberlik etmek.",
  "kültürel veri tabanından kurtarabilecekleri rehberlik ile.",
  "yok olan kültürel veri tabanından herhangi bir yardım almadan.",

  "Yerlilerle kolonistler arasındaki teknolojik düzeydeki farklılık, ilişkileri zorlaştırıyor,",
  "Kolonistler ve yerliler arasındaki teknolojik düzeydeki benzerlik ilişkileri kolaylaştırır,",

  "yerlilerin kültürü onları yeni gelen yabancılara düşman ediyor.",
  "yerlilerin kültürü onları yabancılara karşı son derece şüpheci kılıyor.",
  "yerlilerin kültürü onları insanlara karşı ihtiyatlı kılıyor.",
  "Yerlilerin kültürü onları ihtiyatlı kılıyor ama göçmenleri kabul ediyor.",
  "Yerlilerin kültürü onları mültecileri kucaklamaya teşvik ediyor.",

  "Yapay zekanın tohum gemisinin yaklaşması sırasında gezegenin yerlileriyle kurduğu iletişim sayesinde, yerliler zaten insanlara bir sığınma teklifinde bulundular ve herhangi bir farklılığı görmezden gelmeye ve bir arada yaşamaya hazırlar.",
  "Tohum gemisinin yaklaşması sırasında yerliler, insanların gezegenlerinde hoş karşılanmayacağını açıkça belirtti.",

  "İki tür, birbiriyle yakından bağlantılı topluluklarda yaşamaya başlar ve her türün bazı üyeleri diğerinin yaşam tarzını benimser.",
  "İki tür, aralarında dostane ilişkiler bulunan ayrı topluluklarda yaşamaya başlar.",
  "İki tür gezegenin ayrı yerlerinde yaşıyor ve birbirleriyle çok az temas kuruyor.",

  "Çatışmalar, yerlileri köleleştiren insanlarla biten bir savaşa dönüşüyor.",
  "Çatışmalar,kolonistlerin yerliler tarafından köleleştirmesiyle sonuçlanan bir savaşa dönüşür.",

  "Çatışmalar, yerlilerin tamamen yok edilmesiyle sona eren bir savaşa dönüşüyor.",
  "Çatışmalar, insanların tamamen yok edilmesiyle sona eren bir savaşa dönüşür.",
];

var EndingAnimals = [
  "Son derece güçlü yerli hayvanlardan bazılarını yük canavarları olarak kullanırlar, böylece kolonistler kendilerini ezici yerçekimi altında kullanmak zorunda kalmazlar.",
  "Gezegenin bazı güçlü yerli hayvanlarını yük hayvanı olarak kullanırlar ve yüksek yerçekiminde çalışmayı kolaylaştırırlar.",
  "Gezegenin bazı hayvanlarını yük hayvanı olarak kullanıyorlar",
  "Gezegenin bazı çevik yerli hayvanlarını yük hayvanları olarak kullanıyorlar ve düşük yer çekiminde çalışmayı daha az tuhaf hale getiriyorlar.",
  "Gezegenin bazı çevik yerli hayvanlarını yük hayvanları olarak kullanıyorlar ve son derece düşük yerçekiminde çalışmayı daha az garip hale getiriyorlar.",

  "Kolonistler gezegenin acımasız düşman hayvanlarını uzak tutmayı başarır, ancak ",
  " çevre çitleri örülmeden önce kolonistler öldürüldü.",
  "Düşman yerli hayvanlar koloniyi istila ederek öldürüyor ",
  " kolonistler.",

];

var EndingCaves = [
  "Depremler öldürür",
  " kolonistler, onlara dayanabilecek yapıları tamamlamadan önce.",
  "Bir deprem, koloninin kısmen tamamlanmış yerleşimini düzleştirir ve öldürür",
  " kolonistler.",

  "Yerleşimlerini, gezegenin misafirperver olmayan atmosferinden ve sıcaklığından hazır bir sığınak sağlayan hava geçirmez, yalıtılmış mağaraların içine inşa ediyorlar.",
  "Yerleşimlerini, gezegenin misafirperver olmayan atmosferinden hazır bir sığınak sağlayan hava geçirmez mağaraların içine inşa ediyorlar.",
  "Yerleşimlerini, gezegenin misafirperver olmayan yüzey sıcaklığından hazır bir sığınak sağlayan yalıtılmış mağaraların içine inşa ediyorlar.",
  "Yerleşimlerini depolamak için kullandıkları mağaraların yakınında inşa ediyorlar.",
];

var EndingRuins = [
  "Yerleşimleri tamamlanmış ve yiyecek tedariki güvence altına alınmış olarak, koloniciler yakındaki harabelere bir sefer düzenler.",
  "Kaşifler, kalıntıları dolduran heykelleri, duvar resimlerini ve yabancı yazıları inceler. Kültür ve ölüm nedenleri hakkında çok şey öğrendikleri yazıları tercüme etmeden önce bile, bu yeni dünyada kendi kültürlerini yaratmalarına yardımcı olacak bilgileri içerir.",
  "Onlar aynı zamanda",
  "kaşifler",
  "Gelişmiş uzaylı makineleri buldular, bazıları hala çalışıyor.",
  "Tersine mühendislik ürünü olan bu makineler bilimlerini, tohum gemisi fırlatıldığında Dünya medeniyetinin ulaştığı seviyenin ötesine taşıyacak.",
  "Bu ters mühendislik makineleri, zarar görmüş bilimsel veritabanındaki bazı boşlukları doldurmalarına izin verecektir.",
  "Fakat onlar",
  "kaşifler",
  "uzun süre hareketsiz kalan bir savunma mekanizmasını tetikleyerek öldürür ",
  " kolonistleri."

];

var EndingFeatures = [
  //??????????
  "Gizemli uzaylı yapılar, gece gökyüzünde ışıltılı bir bant olarak görülebilir, ancak uzaylılar koloninin kültürel gelişimine müdahale etmeye çalışmazlar.",
  "Esrarengiz nesneler periyodik olarak yörüngedeki yabancı yapılardan aşağı inerler ve bu nesnelere yakın yaşayan kolonistler kendilerini başka türlü olabileceğinden daha fazla işbirliğine ve empatiye eğilimli bulurlar.",
  "Gizemli nesneler periyodik olarak yörüngedeki yabancı yapılardan aşağı inerler ve bu nesnelere yakın yaşayan kolonistler kendilerini başka türlü olabileceklerinden daha çatışmaya ve bencilliğe daha yatkın bulurlar.",
  //???????
  "Gezegenin olağanüstü doğal güzelliği, oradaki yaşamı daha keyifli kılar ve kolonistlerin daha iyi bir toplum inşa etmelerine yardımcı olur.",
  "Gezegenin olağanüstü çirkinliği, kolonistler arasındaki gerilimi artırıyor ve barışçıl bir toplum inşa etmelerini zorlaştırıyor.",
  //?????????
  "",
  "",
  "",
];

var EndingScience = [
  "Kolonistler, tohum gemisini inşa eden insanların hayallerinin ötesinde bir teknoloji seviyesi yaratmak için uzaylı bilimsel bilgiyi kullanıyorlar.",
  "Kolonistler, tohum gemisi fırlatıldığında Dünya'dakine eşdeğer bir teknoloji seviyesini korumayı başarırlar.",
  "Kolonistler, gelişmiş bilgisayarlarını koruyamıyorlar, ancak daha basit elektronik ve makineler kullanmaya devam ediyor.",
  "Kolonistler elektriği bırakmak zorunda kalıyor, ancak Dünya'nın Sanayi çağındakilere benzer makineler ve fabrikalar inşa etmeyi başarıyorlar.",
  "Kolonistler ortaçağ teknolojisine geçiş yapıyor.",
  "Kolonistler demir aletlere dayalı bir teknolojiye geçiş yaparlar.",
  "Kolonistler, sofistike taş, ahşap ve bronz aletlere dayalı bir teknolojiye geçiş yapıyor.",
  "Kolonistler, sofistike taş, ahşap ve bronz aletlere dayalı bir teknolojiye geçiş yapıyor.",
  "Kolonistler, taş aletler ve basit tarım hakkındaki en temel bilgileri dışında her şeyi kaybederler.",
  "Kolonistler, tarım ve metal işleme konusundaki neredeyse tüm bilgilerini kaybediyor ve basit taş aletler kullanarak avcı-toplayıcı olarak hayatta kalıyor.",
  "Kolonistler en temel bilimsel bilgileri bile kaybederler ve Taş Devri öncesi varoluşa geri dönerler."
];

var EndingScienceBut = [
  "Gezegen teknolojik yardım olmadan insan yaşamını sürdüremez, ancak teknolojileri başarısız olmadan önce, ilk koloniciler sağlam yalıtılmış yaşam alanları inşa ediyor.",
  "ve torunlarının çok düşük yerçekiminde hayatta kalmaları için genetik mühendisliği yapmaları.",
  "ve torunlarının çok yüksek yerçekiminde hayatta kalmaları için genetik mühendisliği."
];

var EndingSustain = [
  "Gezegen teknolojik yardım olmadan insan yaşamını sürdüremez,",

  "ve orijinal kolonistlerin torunları artık hava geçirmez habitatlarını koruyamadıklarında ölürler.",
  "ve orijinal kolonistlerin torunları, yapıları artık aşırı sıcaklığa dayanamadığında ölür.",
  "ve orijinal kolonistlerin soyundan gelenler, çoktan kaynaklanan sağlık sorunlarından ölürler.",
  "ve Sağ kalan kültürel veri tabanı zengin bir sözlü tarihin temeli olur. Koloni, her biri üyeleri tarafından kolektif olarak yönetilen ve birbirleriyle barış içinde bir arada yaşayan küçük kabilelere ayrılır.",


"orijinal kolonistlerin soyundan gelenler, su arıtma sistemleri çalışmayı bıraktığında ölürler.",

  "ancak, teknolojileri başarısız olmadan önce, orijinal sömürgeciler",
  "sağlam inşa etmek",
  "hava geçirmez",
  "yalıtımlı",
  "habitatlar",

  "onların torunlarının içinde hayatta kalmaları için genetik mühendisliği ",
  " yer çekimi",
  "Bakım gerektirmeden süresiz olarak çalışabilen otomatik su geri dönüşüm sistemleri kurmak.",
  "",

]

var EndingCulture = [
  "Orijinal kolonistlerden birinin yerini alan diktatör, koloninin kontrolünü hızla ele geçirir ve otoriter bir rejim yaratır.",

  "Kültürel veri tabanı, kolonistlerin hükümet seçimlerini yapmalarına yardımcı olacak zengin bir tarihi bilgi ve onları eğlendirmek ve onlara ilham vermek için geniş bir sanat ve edebiyat kütüphanesi içerir.",
  "Kültürel veri tabanının bazı bölümleri eksik olsa da, sömürgecilere toplumlarının inşası konusunda talimat verecek çok fazla tarihi bilgi ve onlara ilham verecek çok sayıda sanat ve edebiyat içeriyor.",
  "Kolonistler, ağır hasar görmüş kültürel veri tabanını araştırırlar ve Dünya'nın tarihi ve kültürü hakkında onlara rehberlik etmek ve ilham vermek için bazı bilgileri yeniden oluşturmayı başarırlar.",
  "Kültürel veri tabanı yok edildiğinde, yeni dünyada doğanlar, ilk kolonistlerin şahsen aktarabilecekleri dışında, Dünya'nın tarihi ve kültürü hakkında hiçbir şey bilmiyorlar.",

  "Kolonistlerin uğradığı ağır kayıplar yeni bir toplum inşa etmeyi zorlaştırıyor.",
  "Kolonistlerin uğradığı kayıplar yeni bir toplum inşa etmeyi zorlaştırıyor.",
];

var EndingPolitics = [
  "Dünyadaki kültürel veri tabanı, yabancı kültürel bilgiyle zenginleştirildi ve kolonistler bunu, tohum gemisinin kurucularının hayal edebileceğinden farklı olarak, her üyenin barış, mutluluk ve ruhsal tatminle yaşadığı bir toplum inşa etmek için kullanıyorlar.",
  "Sağ kalan kültürel veritabanı, tüm kolonistlerin erişebildiği dijital dosyalarda korunur. Kolonistler, teknolojinin insanların maddi ihtiyaçlarını karşıladığı eşitlikçi bir toplum inşa etmek için birlikte çalışırlar, onları sanat, boş zaman ve ruhsal olarak tatmin olma yaşamlarını sürdürmekte serbest bırakır.",
  "Sağ kalan kültürel veritabanı, tüm kolonistlerin erişebildiği dijital dosyalarda korunur. Kolonistler, tüm vatandaşların eğitildiği ve dahil olduğu bir demokrasinin temelini atıyor.",
  "Sağ kalan kültürel veritabanı, tüm kolonistlerin erişebildiği dijital dosyalarda korunur. Kolonistler bir demokrasinin temelini atıyor, ancak yolsuzluğa karşı savunmasız olduğunu kanıtlıyor ve varlıklı bireyler fiilen bir yönetici sınıf oluyor.",
  "Sağ kalan kültürel veritabanı, tüm kolonistlerin erişebildiği dijital dosyalarda korunur. Kolonistler demokratik, kapitalist bir toplum inşa etmeye çalışırlar, ancak hükümet, sahiplerinin çıkarına göre gezegeni yöneten varlıklı şirketlerin piyonu haline gelir.",
  "Koloni, nüfusun dokunulmaz yönetici sınıf tarafından sürekli gözetim altında yaşadığı ve en ufak bir muhalefetin şiddetle bastırıldığı yüksek teknolojili bir polis devletine dönüşür. Sağ kalan kültürel veritabanı korunur, ancak ona erişim  devlet tarafından kesin bir biçimde sınırlandırılmıştır.",
  "Koloni, ekonomileri birbirleriyle savaşmaya odaklanan birkaç büyük devlete bölünür. Kolonistler, kültürel veri tabanından geriye kalanları korumaya çalışır, ancak bunların çoğu, ya savaştan kaynaklanan hasar nedeniyle ya da hükümetlerin revizyonist propagandasının katmanları altında kaybolur.",
  "Koloni, düşüncesiz liderler tarafından uygarlığın altyapısını yok eden bir nükleer savaş başlatıncaya kadar birbirleriyle savaşan birkaç büyük devlete bölünür. Hayatta kalan sömürgeciler nükleer sonrası bir çorak arazide yaşıyor. Kültürel veri tabanından geriye kalanlar felakette kayboldu ve sömürgecilerin Dünya hakkında hatırladıkları, savaş öncesi koloninin hikayeleriyle karıştırılıyor.",

  "Kolonistler, özgürlük ve eşit haklara dayalı bir cumhuriyetin yaratılmasında onlara rehberlik etmek için hayatta kalan kültürel veritabanını kullanıyorlar.",
  "Koloninin ilk liderleri, koloniye rehberlik etmeyi ve Dünya'nın geri kalan bilgisini korumayı ciddi görevleri olarak gören bir dizi yardımsever hükümdar olur.",
  "Dünya hakkında hayatta kalan bilgi, bir rahip sınıfının özel mülkiyeti haline gelir ve kütüphanelerde kilitli kalır. Nüfusun çoğu için, Dünya lütuftan mitolojik bir düşüşte cennet olur ve baskıcı teokrasinin hizmetinde yaşadıktan sonra umut edilecek nihai bir ödül haline gelir.",
  "Koloni, nüfusun büyük bir kısmının imparatorlarına büyük altın anıtlar inşa etmeye çalıştığı veya savaşlarında ölen bir köleci devlete dönüşür. İmparatorlar, sadece kendi yönetimlerini desteklemek için kullanabilecekleri şeyleri korudukları için, Dünya hakkında hayatta kalan bilgilerin çoğu kaybolmuştur.",
  "Koloni, sürekli bir savaş halinde var olan birçok küçük devlete dönüşür. Kültürel veri tabanından geriye kalanlar çatışmalarda kayboldu.",

  "Sağ kültürel veritabanı zengin bir sözlü tarihin temeli haline gelir ve bu tarihin koruyucuları ve kabilelerin koruyucuları olarak bir hayırsever şefler sınıfı ortaya çıkar.",
  "Sağ kalan kültürel veritabanı, kolonistlerin sözlü tarihinin temeli haline gelir, ancak bir grup acımasız kabile şefi kültürü yozlaştırır ve kendi kurallarını sağlamlaştırmak için kullanır.",
  "Koloni, sürekli bir savaş halinde var olan birçok küçük kabileye dönüşür. Kültürel veri tabanındaki bilgiler neredeyse tamamen unutuldu ve Dünya yalnızca mitolojik savaşçıların bir panteonunun evi olarak hatırlanıyor.",
  "Kolonistler vahşete kapılırlar ve Dünya'nın tarihi ve kültürü hakkındaki tüm bilgiler, günlük hayatta kalma mücadelelerinde unutulur.",
  "",

];

var EndingResources = [
  "Gezegen metaller ve diğer kaynaklar açısından zengindir,",
  "Gezegen metaller ve diğer kaynaklar bakımından fakirdir,",
  "Gezegende erişilebilir metaller veya başka kaynaklar yoktur,",
];

var EndingResourcesBut = [
  //none
  " ve kolonistler, tamamen bozulmamış bilimsel veri tabanıyla bile yüksek düzeyde bir teknolojiyi sürdüremezler.",
  " bu yüzden kolonistler, çoğunlukla bozulmamış bilimsel veri tabanıyla bile yüksek düzeyde bir teknolojiyi koruyamazlar.",
  " bu yüzden kolonistler, bilimsel veri tabanından kurtarabildiklerini kullanmak zorunda kalıyorlar. ",
  "ve bilimsel veritabanında bulunan ve onlara yardımcı olabilecek her türlü bilgi yok edildi.",

  //poor
  " ancak bilimsel veritabanı, var olanlardan nasıl yararlanılacağına dair zengin bilgi içerir.",
  " ancak hasarlı bilimsel veri tabanı hala var olanlardan nasıl yararlanılacağına dair çok fazla bilgi içermektedir. ",
  " ve kötü şekilde zarar görmüş bilimsel veri tabanı, kolonistlerin orada olanlardan yararlanmayı zor buldukları anlamına gelir.",
  " ve bilimsel veri tabanı olmadan kolonistler, var olanlardan yararlanmayı zor buluyorlar.",

  //rich
  " ve bilimsel veritabanı, bunlardan nasıl yararlanılacağına dair zengin bilgi içerir.",
  " ve hasarlı bilimsel veri tabanı, bunlardan nasıl yararlanılacağına dair hala çok fazla bilgi içeriyor.",
  " ağır hasar görmüş bilimsel veri tabanı, kolonistlerin onları kullanmak için gereken teknolojinin çoğunu yeniden icat etmeleri gerektiği anlamına gelse de.",
  " Bilimsel veri tabanı olmadan kolonistler, onları kullanmak için gereken teknolojinin çoğunu yeniden icat etmelidir.",
];

  var cEnding = new ending(
    EndingDifWords,
    planetName,
    EndingNameBecause,

    EndingLanding,
    EndingLandingBut,
    EndingLandingBonus,
    EndingSurface,
    EndingSurfaceFull,
    EndingSky,
    EndingObservation,

    EndingConstruction,
    EndingAtmosphere,
    EndingAtmosphereBut,

    EndingTemperature,
    EndingTemperatureBut,

    EndingPlants,
    EndingWater,
    EndingWaterBut,
    EndingAnimals,
    EndingMoon,
    EndingCaves,
    EndingRuins,
    EndingFeatures,

    EndingResources,
    EndingResourcesBut,
    EndingScience,
    EndingScienceBut,
    EndingSustain,

    EndingGravity,
    EndingGravityBut,

    EndingNatives,
    EndingNativeInteractions,

    EndingCulture,
    EndingPolitics)
