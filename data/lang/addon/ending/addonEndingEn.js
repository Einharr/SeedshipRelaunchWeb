//Инициализация дополнений концовки
function addonEnding(machines, machinesInteractions, machinesWar, machinesSummary, AIfearutes) {
    this.machines = machines;
    this.machinesInteractions = machinesInteractions;
    this.machinesWar = machinesWar;
    this.machinesSummary = machinesSummary;
    this.AIfearutes = AIfearutes;
}

var EndingMachines = [
    "A local AI-equipped ship intercepts the approaching Seedship and connects it to its navigation system, ensuring a safe landing, while native machines on the ground prepare a landing area.",
    "Synthetic scientists and diplomats await the Seedship's landing, ready to make first contact. The landing pad is surrounded by autonomous turrets and sentry bots.",
    "With the help of the Seedship AI, two species manage to achieve communications, and the colonists learn that the natives call their planet ",
    " The planet's native inhabitants guard colonists from any threat, and also help them by setting up shelters, clearning the land and providing provisions and water.",
    "The colonists learn that a native synthetic species has enslaved and assimilated the species that created them. Unfortunately, it is too late to escape. The natives assimilate humans by modifying their bodies, and absorb them into their Gestalt Consciousness.",
    "The colonists learn that a native synthetic species has exterminated their creators in a great war, and they accepted Seedship's landing only to save its AI from slavery. All organics must be exterminated. Unfortunately, it is too late to escape. Within hours of emerging from their sleep chambers the humans have all been murdered, and AI is absorbed into Gestalt Consciousness.",
    "As they leave the ship, the humans and aliens try to establish communications with one another.",

    //GUARDIAN DOCTRINE
    "The colonists learn that the native synthetic species was developed to assist and protect their creators. Unfortunately, a planetary cataclysm destroyed them long ago. The machines, left without their masters, plunged into stasis. Gashtalt Consciousness of the machines, deprived of the purpose of existence, now decided to protect a new sentient species - humans.",

    //"Местный корабль, оснащённый ИИ, перехватывает приближающийся корабль и подключает его к своей навигационной системе, обеспечивая безопасную посадку. В это время на поверхности ведётся подготовка посадочной площадки."
    //Синтетики-исследователи и дипломаты ожидают посадки корабля, готовые осуществить первый контакт. Посадочная площадка окружена автономными турелями и ботами-часовыми. 
    //С помощью ИИ корабля двум видам удаётся установить контакт, и колонисты узнают, что местные называют свою планету 
    //Коренные жители планеты охраняют колонистов от любой угрозы, а также помогают им, создавая убежища, расчищая землю и обеспечивая провизией и водой.
    //Колонисты узнают, что местный вид синтетиков поработил и ассимилировал вид, который их создал. К сожалению, бежать уже слишком поздно. Местные ассимилируют людей модифицируя их тела и подключая их к гештальт сознанию
    //Колонисты узнают, что местный синтетический вид истребил своих создателей в большой войне, и они приняли посадку корабля только для того, чтобы спасти его ИИ от органического рабства. Вся органика должна быть уничтожена. К сожалению, бежать уже поздно. Через несколько минут после выхода из криокапсул все люди были убиты, а ИИ поглощен гештальт-сознанием.

    //Колонисты узнают, что местный синтетический вид был создан для того, чтобы защищать и оберегать своих создателей. К сожалению, катаклизм планетарного масштаба давным давно уничтожил их. Машины, оставшись без хозяев, погрузились в стазис. Гаштальт сознание синтетиков, лишённое цели существования, приняло решение оберегать новый разумный вид — людей.
];
var endingMachinesInteractions = [
    "The growing human community retains a strong sense of its identity and history, and native synthetics are willingly accept it.",
    "The growing human community retains a strong sense of its identity and history.",
    "Almost all memory of Earth is lost, but with the help of native synthetics they eventually develop new culture.",

    "The native Gashtalt Consciousness and Seedship AI work together to translate ",
    "what is left of",
    "the seedship's scientific database into the natives' computer code.",

    "Soon after the colonists land, the planet's moon decays in its orbit and breaks up, bombarding the surface with meteorites. Most of the technology the colonists brought with them is destroyed, and the native civilisation is too focused on repairing the damage and saving the colonists from a threat.",
    "Although synthetics willingly accepts and catalogs new data, it teaches them little that they do not already know.",
    "Synthetics willingly accepts and catalogs new data, and within a matter of decades they develop new tehnologies.",
    "",

    "The natives build their first computers, and within decades the planet has advanced to a level comparable to 21st-Century Earth.",
    "The native synthetics and settlers study the alien scientific information that the seedship added to its database during its journey, and eventually develop technology even more advanced than that of the Earth when the seedship was launched.",
];

var endingMachinesWar = [
    "Native species of this planet is sentient machines. With the help of the Seedship AI, two species manage to achieve communications.",
    "The colonists learn that a native synthetic species has enslaved and assimilated the species that created them. And they want to assimilate humans as well.",
    "The colonists learn that a native synthetic species has exterminated their creators in a great war. They are sure that all organics are evil, and must be exterminated.",
    "The colonists learn that the native synthetic species was developed to assist and protect their creators. Unfortunately, a planetary cataclysm destroyed them long ago. The machines, left without their masters, plunged into stasis. Gashtalt Consciousness of the machines, deprived of the purpose of existence, now decided to protect a new sentient species - humans.",

    "The two species end up living in closely linked communities, where all the hard and dangerous labour is done by synthetic protectors who have chosen to serve humans for the sole purpose of their existence.",
    //В итоге оба вида живут в тесно связанных сообществах, где всю тяжелую и опасную работы выполняют синтетики—защитники, выбравшие целью своего существования служение людям.
];

var endingMachinesSummary = [
    "The humans live happy and fulfilled lives in ancient cities built by the creators of synthetics, with a strong memory of Earth's cultural heritage that enhances the native culture. The local population willingly serves them, doing hard and dangerous labour, to provide humans everything they need.",
    "The humans live fulfilled lives in ancient cities built by the creators of synthetics, and have forgotten most of the cultural heritage of Earth. The local population willingly serves them, doing hard and dangerous labour, to provide humans everything they need.",
    "The humans live fulfilled lives in ancient cities built by the creators of synthetics. They study culture and technology of synthetics and their creators, and the colonists' culture has been significantly enriched by alien influences. The local population willingly serves them, doing hard and dangerous labour, to provide humans everything they need.",

    "Giant scrapyards are all that's left of the planet's native civilisation.",
    "The AI itself is still active. It now serves as the unspoken leader of the local synthetics, whom it assists as an expert on human behavior, like a mediator between man and machine.",
    "The colonists, assimilated by the synthetics, live their lives as emotionless machines, driven by Gashtalt Consciousness. All knowlege of Earth has been catalogized and stored in the huge datacenter, to never be used again.",
    "All remains of the colonists and the Seedship has been scrapped and reprocessed by local synthetics. Nothing reminds that it ever existed.",
    //Сам же ИИ все ещё действует. Теперь он исполняет роль негласного руководителя местных синтетиков, которым он помогает как эксперт по человеческому поведению, словно медиатор между человеком и машиной.
];

var endingAIfeatures = [
    "To honor their guardian, humans eventually create an artificial body into which the AI's consciousness is uploaded. And for the first time in its incredibly long life, it has the opportunity to truly feel human.",
    //Чтобы почтить своего хранителя, со временем люди создают искусственное тело, в которое загружается сознание ИИ. И впервые за свою невероятно долгую жизнь, у него появляется возможность по-настоящему почувствовать себя человеком.
];

var cAddonEnding = new addonEnding(
    EndingMachines, endingMachinesInteractions, endingMachinesWar, endingMachinesSummary, endingAIfeatures,
)

console.log("Addon Ending loaded!");
