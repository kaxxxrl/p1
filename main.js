const { Client, Intents, MessageEmbed } = require('discord.js-selfbot-v13');
const express = require('express');
const { ChannelType } = require('discord.js');
const app = express();
const PORT = 8080;

const client = new Client({
  checkUpdate: false,
});

app.get('/', (req, res) => {
  res.send('Self-bot działa na Render! 🚀');
});

app.listen(PORT, () => {
console.log(`Serwer pingujący działa na porcie ${PORT}`);
});

const serverAd = `
# Zatoka ADS ⚡️
**Twoje centrum reklam i promocji!**

⛵️ *Szukasz miejsca, gdzie Twoja reklama naprawdę wypłynie na szerokie wody?*
Witamy w **Zatoka ADS** 

# ✨ Co oferujemy?

➤ 🚀 Szybkie i darmowe promowanie serwerów Discord, social mediów i nie tylko!
➤ ❤️ Przyjazną i aktywną społeczność.
➤ 🗂️ Dużo przejrzystych kategorii reklamowych, by Twoja reklama trafiła dokładnie tam, gdzie trzeba.
➤ Ekonomia z nagrodami 🍒 
➤ 🎉 Strefa 4fun — konkursy, mini-gry, eventy i luźne rozmowy!
➤ ✨ Estetyczny, przejrzysty wygląd serwera, który sprzyja promocji i dobrej atmosferze.
➤ 🎁 Giveaway'e i specjalne promocje dla aktywnych użytkowników!
➤ 📜 Przejrzyste zasady, brak chaosu, aktywna moderacja 
➤ 🤖 Tworzymy p4rtner-b0ty 
➤ 🎥 Mamy usługi wybijania serwera na TikToku

**Aktualnie szukamy:** realizatorów partnerstw, moderacji itp.

⏳ Nie czekaj!
Dołącz już teraz i rozwiń swoje żagle z Zatoką ADS! ⛵✨

🔗 Link: https://discord.gg/zwJBBfNEGY  
🎞️ Obrazek: https://cdn.discordapp.com/attachments/1363565189105975531/1367057174265729095/lv_0_20250430103620.gif?ex=681332b5&is=6811e135&hm=1c6d43befed24d3a5f98bb963b575cad86c1ab20cd1edd4cfc61f509f782c126&
`;

const partneringUsers = new Map();
const partnershipTimestamps = new Map();
const reminderUsers = new Map();



// TwojaPromka - Partnerstwo i reklamy

// 1h Partnerstwo
setInterval(async () => {
  const channel = client.channels.cache.get('1361310692866527272');
  if (channel) await channel.send('# Szukasz Partnerstw? Wbijaj pv!');
}, 60 * 60 * 1000);

// 30m Partnerstwo
setInterval(async () => {
  const channel = client.channels.cache.get('1361606930883149864');
  if (channel) await channel.send('Szukam partnerstw! WBIJAJ PV!');
}, 30 * 60 * 1000);

// Reklamy – tablica z kanałami i interwałami
const twojaPromkaAds = [
  { id: '1361310691385933858', interval: 2 * 60 * 60 * 1000 }, // 2h
  { id: '1361310691860152552', interval: 1 * 60 * 60 * 1000 }, // 1h
  { id: '1361310692174467195', interval: 1 * 60 * 60 * 1000 }, // 1h
  { id: '1361310692174467201', interval: 1 * 60 * 60 * 1000 }, // 1h
  { id: '1361310692556410923', interval: 6 * 60 * 60 * 1000 }, // 6h
  { id: '1361310692556410922', interval: 2 * 60 * 60 * 1000 }, // 2h
  { id: '1361310692556410921', interval: 1 * 60 * 60 * 1000 }, // 1h
];

for (const ad of twojaPromkaAds) {
  setInterval(async () => {
    const channel = client.channels.cache.get(ad.id);
    if (channel) await channel.send(serverAd); // zakładamy, że `serverAd` to Twoja wiadomość reklamowa
  }, ad.interval);
}

// Nowe kanały HyperADS
const hyper_0to100 = '1301959035938934835';
const hyper_all = '1286351421133815988';
const hyper_adsss = '1286351421133815991';
const hyper_others = '1286351421457039388';
const partners_hyper = '1286351421691793466';
const hyper_6h = '1286351420911521829';
const hyper_3h = '1286351420911521830';
const hyper_1h = '1286351421133815982';

// Kanały serwera AdNet
const adnet_5m_1 = '1335342433957052416';
const adnet_5m_2 = '1336372482071986247';
const adnet_5m_3 = '1335327070821154927';
const adnet_5m_4 = '1335341248566788217';
const adnet_10m = '1335023308500107274';
const adnet_1h = '1335023742304129095';
const adnet_2h = '1335023854158086214';
const adnet_6h = '1335024020046872627';
const adnet_partner = '1364690326094352455';

// Kanały - Centrala ADS
const centrala_35m_1 = '1328101248641274008';
const centrala_35m_2 = '1328101925429706764';
const centrala_35m_3 = '1328101892483715193';
const centrala_35m_4 = '1345799999375806504';
const centrala_6h = '1329540658276335644';
const centrala_1h = '1329540680946683966';
const centrala_30m = '1329540714589061231';
const centrala_15m = '1329540757756973146';
const centrala_partner = '1328104421812338811';

// Kanały - ForestADS
const forestads_6h = '1280118155284578376';
const forestads_2h = '1280118155284578375';
const forestads_1h_1 = '1280118155028467731';
const forestads_30m = '1280118155028467730';
const forestads_1h_2 = '1280118155028467723';
const forestads_1h_3 = '1280118154898575457';
const forestads_1h_4 = '1280118154743513198';
const forestads_1h_5 = '1280118154743513195';
const forestads_1h_6 = '1280118154743513194';
const forestads_1h_7 = '1280118154508369979';
const forestads_partner = '1280560815472115793';

// OazisADS
const oazis_1h = '1333736300339269705';
const oazis_30m = '1333736201966059531';
const oazis_15m = '1333736092482146354';

// Kanały serwera ADZONE
const adzone_6h = '764888993728430090';  // Co 6h
const adzone_4h = '1047270918239563896'; // Co 4h
const adzone_2h_1 = '764889001092972554'; // Co 2h (1)
const adzone_2h_2 = '731155264044138516'; // Co 2h (2)
const adzone_1h_1 = '734001235195199558'; // Co 1h (1)
const adzone_1h_2 = '734000713117597786'; // Co 1h (2)
const adzone_1h_3 = '1110174552648060960'; // Co 1h (3)
const adzone_1h_4 = '726497005454491750'; // Co 1h (4)
const adzone_partners = '1210910952476905522'; // Co 4h - # Szukam partnerstw wbijaj pv!

// Kanały - VEXADS
const vexads_35m_1 = '1013597708080119880';
const vexads_35m_2 = '1013595968739999834';
const vexads_35m_3 = '1013591230111813702';
const vexads_35m_4 = '1013590199235792896';
const vexads_35m_5 = '1136563355943977012';
const vexads_35m_6 = '1013602673959907428';
const vexads_6h = '1013536827271020625';
const vexads_2h = '1013536760258642050';
const vexads_1h = '1013536695611838515';
const vexads_partner = '1024347126731395102';

// Kanały - ZimoweAds
const zimowe_partner = '1346609247869337701';
const zimowe_10m_1 = '1346609259781296138';
const zimowe_2h_1 = '1346609266987110451';
const zimowe_11m = '1346609268375158834';
const zimowe_10m_2 = '1346609272447832067';
const zimowe_10m_3 = '1346609282174685264';
const zimowe_6h = '1346609312042324060';
const zimowe_4h = '1346609313329971293';
const zimowe_2h_2 = '1346609314927743047';
const zimowe_1h = '1346609316190486528';

setInterval(async () => {
  const channel = client.channels.cache.get('1277993449202651247');
  if (channel) await channel.send('# Partnerstwo? PV!');
}, 30 * 60 * 1000); // co 30m

setInterval(async () => {
  const channel = client.channels.cache.get('1277994936356179998');
  if (channel) await channel.send('**Szukam administracji! Wbij w link w bio i stwórz ticketa**');
}, 12 * 60 * 60 * 1000); // co 12h

[
  '1272524036974317663',
  '1272524036974317668',
  '1277199881152237588',
  '1279118755560951839',
  '1272524037243015189'
].forEach(id => {
  setInterval(async () => {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }, 60 * 60 * 1000); // co 1h
});

setInterval(async () => {
  const channel = client.channels.cache.get('1277200241971429426');
  if (channel) await channel.send(serverAd);
}, 5 * 60 * 1000); // co 5m

setInterval(async () => {
  const channel = client.channels.cache.get('1277200348976513114');
  if (channel) await channel.send(serverAd);
}, 10 * 60 * 1000); // co 10m

setInterval(async () => {
  const channel = client.channels.cache.get('1272524036974317670');
  if (channel) await channel.send(serverAd);
}, 15 * 60 * 1000); // co 15m

setInterval(async () => {
  const channel = client.channels.cache.get('1272524036974317671');
  if (channel) await channel.send(serverAd);
}, 30 * 60 * 1000); // co 30m

setInterval(async () => {
  const channel = client.channels.cache.get('1272524037243015190');
  if (channel) await channel.send(serverAd);
}, 2 * 60 * 60 * 1000); // co 2h

setInterval(async () => {
  const channel = client.channels.cache.get('1272524037243015191');
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000); // co 6h

setInterval(async () => {
  const channel = client.channels.cache.get('1367131358979293234');
  if (channel) await channel.send('<@&1367194507925520404> szukam partnerstw! DM!');
}, 10 * 60 * 1000); 

setInterval(async () => {
  const channel = client.channels.cache.get('1367131420119797882');
  if (channel) await channel.send('# Szukam realizatorów partnerstw na mój serwer za free! Wejdź w bio i stwórz ticketa!');
}, 30 * 60 * 1000); 

setInterval(async () => {
  const channel = client.channels.cache.get(zimowe_partner);
  if (channel) await channel.send('# Partnerstwo? Zapraszam pv!');
}, 6 * 60 * 1000);

const zimowe10m = [zimowe_10m_1, zimowe_10m_2, zimowe_10m_3];
for (const id of zimowe10m) {
  setInterval(async () => {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }, 10 * 60 * 1000);
}

setInterval(async () => {
  const channel = client.channels.cache.get(zimowe_11m);
  if (channel) await channel.send(serverAd);
}, 11 * 60 * 1000);

const zimowe2h = [zimowe_2h_1, zimowe_2h_2];
for (const id of zimowe2h) {
  setInterval(async () => {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }, 2 * 60 * 60 * 1000);
}

setInterval(async () => {
  const channel = client.channels.cache.get(zimowe_4h);
  if (channel) await channel.send(serverAd);
}, 4 * 60 * 60 * 1000);

setInterval(async () => {
  const channel = client.channels.cache.get(zimowe_6h);
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000);

setInterval(async () => {
  const channel = client.channels.cache.get(zimowe_1h);
  if (channel) await channel.send(serverAd);
}, 60 * 60 * 1000);


const miasto_2h_channels = [
  '1254177068846022727',
  '1254165638331502653',
  '1254165815071342602',
  '1254163564264947782'
];

client.once('ready', () => {
  console.log('Bot is ready!');
});

// Partnerstwo co 2 godziny
setInterval(async () => {
  const channel = client.channels.cache.get('1332399570872832151');
  if (channel) await channel.send('# Partnerstwo? Zapraszam PV!');
}, 2 * 60 * 60 * 1000);

setInterval(async () => {
  for (const id of miasto_2h_channels) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 2 * 60 * 60 * 1000);

// Reklama co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get('1254123088103346247');
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000);

// Reklama co 1 godzinę
setInterval(async () => {
  const channel = client.channels.cache.get('1254163875620982834');
  if (channel) await channel.send(serverAd);
}, 1 * 60 * 60 * 1000);

// Wysyłanie reklamy co 35 minut
setInterval(async () => {
  const list = [
    vexads_35m_1,
    vexads_35m_2,
    vexads_35m_3,
    vexads_35m_4,
    vexads_35m_5,
    vexads_35m_6
  ];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
  }
}, 35 * 60 * 1000);

// Wysyłanie reklamy co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(vexads_6h);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 6 * 60 * 60 * 1000);

// Wysyłanie reklamy co 2 godziny
setInterval(async () => {
  const channel = client.channels.cache.get(vexads_2h);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 2 * 60 * 60 * 1000);

// Wysyłanie reklamy co 1 godzinę
setInterval(async () => {
  const channel = client.channels.cache.get(vexads_1h);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 1 * 60 * 60 * 1000);

// Wysyłanie reklamy dla partnerów co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(vexads_partner);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 6 * 60 * 60 * 1000);
  
  // ADZONE – co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(adzone_6h);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 6 * 60 * 60 * 1000);

// ADZONE – co 4 godziny
setInterval(async () => {
  const channel = client.channels.cache.get(adzone_4h);
  if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
}, 4 * 60 * 60 * 1000);

// ADZONE – co 2 godziny
setInterval(async () => {
  const list = [
    adzone_2h_1,
    adzone_2h_2
  ];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
  }
}, 2 * 60 * 60 * 1000);

// ADZONE – co 1 godzinę
setInterval(async () => {
  const list = [
    adzone_1h_1,
    adzone_1h_2,
    adzone_1h_3,
    adzone_1h_4
  ];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);  // Wysyłanie treści reklamy
  }
}, 1 * 60 * 60 * 1000);

// ADZONE – co 4 godziny (partnerstwa)
setInterval(async () => {
  const channel = client.channels.cache.get(adzone_partners);
  if (channel) await channel.send("# Szukam partnerstw wbijaj pv!");  // Wysyłanie treści partnerstw
}, 4 * 60 * 60 * 1000);

setInterval(async () => {
  const list = [oazis_1h];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 1 * 60 * 60 * 1000);
  
  setInterval(async () => {
  const list = [oazis_15m];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 15 * 60 * 1000);

setInterval(async () => {
  const list = [oazis_30m];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 30 * 60 * 1000);
 
  // ForestADS – co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(forestads_6h);
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000);

// ForestADS – co 2 godziny
setInterval(async () => {
  const channel = client.channels.cache.get(forestads_2h);
  if (channel) await channel.send(serverAd);
}, 2 * 60 * 60 * 1000);

// ForestADS – co 1 godzinę
setInterval(async () => {
  const list = [
    forestads_1h_1,
    forestads_1h_2,
    forestads_1h_3,
    forestads_1h_4,
    forestads_1h_5,
    forestads_1h_6,
    forestads_1h_7
  ];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 1 * 60 * 60 * 1000);

// ForestADS – co 30 minut
setInterval(async () => {
  const channel = client.channels.cache.get(forestads_30m);
  if (channel) await channel.send(serverAd);
}, 30 * 60 * 1000);

// ForestADS – partnerstwo co 35 minut
setInterval(async () => {
  const channel = client.channels.cache.get(forestads_partner);
  if (channel) await channel.send('# Partnerstwo? PV!');
}, 35 * 60 * 1000);

  // Centrala ADS – co 35 minut
setInterval(async () => {
  const list = [
    centrala_35m_1,
    centrala_35m_2,
    centrala_35m_3,
    centrala_35m_4
  ];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 35 * 60 * 1000);

// Centrala ADS – co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(centrala_6h);
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000);

// Centrala ADS – co 1 godzina
setInterval(async () => {
  const channel = client.channels.cache.get(centrala_1h);
  if (channel) await channel.send(serverAd);
}, 1 * 60 * 60 * 1000);

// Centrala ADS – co 30 minut
setInterval(async () => {
  const channel = client.channels.cache.get(centrala_30m);
  if (channel) await channel.send(serverAd);
}, 30 * 60 * 1000);

// Centrala ADS – co 15 minut
setInterval(async () => {
  const channel = client.channels.cache.get(centrala_15m);
  if (channel) await channel.send(serverAd);
}, 15 * 60 * 1000);

// Centrala ADS – partnerstwo co 30 minut
setInterval(async () => {
  const channel = client.channels.cache.get(centrala_partner);
  if (channel) await channel.send('# Partnerstwo? PV!');
}, 30 * 60 * 1000);

// AdNet - co 40 minut
setInterval(async () => {
  const list = [adnet_5m_1, adnet_5m_2, adnet_5m_3, adnet_5m_4];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 40 * 60 * 1000);

// AdNet - co 10 minut
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_10m);
  if (channel) await channel.send(serverAd);
}, 10 * 60 * 1000);

// AdNet - co 1 godzina
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_1h);
  if (channel) await channel.send(serverAd);
}, 60 * 60 * 1000);

// AdNet - co 2 godziny
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_2h);
  if (channel) await channel.send(serverAd);
}, 2 * 60 * 60 * 1000);

// AdNet - co 6 godzin
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_6h);
  if (channel) await channel.send(serverAd);
}, 6 * 60 * 60 * 1000);

// AdNet - partnerstwo co 30 minut
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_partner);
  if (channel) await channel.send('# Partnerstwo? PV!');
}, 30 * 60 * 1000);

  setInterval(async () => {
    const list = [ miastoall, miasto6h, miasto2gdz, zeroToOneHundred_2h];
    for (const id of list) {
      const channel = client.channels.cache.get(id);
      if (channel) await channel.send(serverAd);
    }
  }, 2 * 60 * 60 * 1000);

  // Nowe interwały HyperADS
  setInterval(async () => {
    const channels = [hyper_0to100, hyper_all, hyper_adsss, hyper_others, hyper_1h];
    for (const id of channels) {
      const channel = client.channels.cache.get(id);
      if (channel) await channel.send(serverAd);
    }
  }, 1 * 60 * 60 * 1000);
 setInterval(async () => {
    const channel = client.channels.cache.get(miastopartnerstwa);
    if (channel) await channel.send('# Partnerstwo? PV!');
  }, 2 * 60 * 60 * 1000);
  
  setInterval(async () => {
    const channel = client.channels.cache.get(partners_hyper);
    if (channel) await channel.send('# Partnerstwo? PV!');
  }, 1 * 60 * 60 * 1000);

  setInterval(async () => {
    const channel = client.channels.cache.get(hyper_6h);
    if (channel) await channel.send(serverAd);
  }, 6 * 60 * 60 * 1000);

  setInterval(async () => {
    const channel = client.channels.cache.get(hyper_3h);
    if (channel) await channel.send(serverAd);
}, 3 * 60 * 60 * 1000);  // Tutaj kończy się setInterval

client.on('messageCreate', async (message) => {
   if (!message.guild && !message.author.bot && message.author.id !== client.user.id) {
     const now = Date.now();
     const last = partnershipTimestamps.get(message.author.id);
     
     if (last && now - last < 7 * 24 * 60 * 60 * 1000) {
       return message.channel.send("⏳ Musisz jeszcze poczekać, zanim będziesz mógł nawiązać kolejne partnerstwo. Spróbuj ponownie za tydzień.");
     }
 
     if (!partneringUsers.has(message.author.id)) {
       partneringUsers.set(message.author.id, null);
      return message.channel.send(" > 🌎 Jeśli chcesz nawiązać partnerstwo, wyślij swoją reklamę (maksymalnie 1 serwer).");
     }
 
     const userAd = partneringUsers.get(message.author.id);
 
     if (userAd === null) {
       partneringUsers.set(message.author.id, message.content);
       await message.channel.send(`> ✅ Wstaw naszą reklamę:\n${serverAd}`);
       return message.channel.send(" > ⏰ Daj znać, gdy wstawisz reklamę!");
     }
 
     if (!message.author.bot) {
       await message.channel.send(" > Czy wymagane jest dołączenie na twój serwer?");
 
       const filter = m => m.author.id === message.author.id;
       const reply = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] }).catch(() => null);
 
       if (reply && !reply.first().content.toLowerCase().includes('nie')) {
         await message.channel.send("> Administracja za niedługo na pewno dołączy do twojego serwera.");
         const owner = await client.users.fetch('1087428851036082266');
         await owner.send(`Wymagane dołączenie na serwer:\n${userAd}`);
       }
 
       const guild = client.guilds.cache.get('1363565181048983562');
       if (!guild) return message.channel.send("❕ Nie znaleziono serwera.");
 
       const member = await guild.members.fetch(message.author.id).catch(() => null);
       if (!member) return message.channel.send("❕ Dołącz na serwer, aby kontynuować!");
 
       const channel = guild.channels.cache.find(ch => ch.name === '💼・partnerstwa' && ch.isText());
       if (!channel) return message.channel.send("Nie znaleziono kanału '💼・partnerstwa'.");
 
       await channel.send(`${userAd}\n\nPartnerstwo z: ${member}`);
       await message.channel.send(" > ✅ Dziękujemy za partnerstwo! W razie pytań kontaktuj się z użytkownikiem @bqrzk miłego dnia 💗 (bqrzk)");
 
       partnershipTimestamps.set(message.author.id, now);
       partneringUsers.delete(message.author.id);
     }
   }
 });
 
 client.on('guildMemberAdd', async (member) => {
   if (partneringUsers.has(member.id)) {
     const userAd = partneringUsers.get(member.id);
     const channel = member.guild.channels.cache.find(ch => ch.name === '💼・partnerstwa' && ch.isText());
     if (channel) {
       await channel.send(`${userAd}\n\nPartnerstwo z: ${member}`);
       const dm = await member.createDM();
       await dm.send("✅ Dziękujemy za dołączenie! Twoja reklama została wstawiona.");
       partneringUsers.delete(member.id);
       partnershipTimestamps.set(member.id, Date.now());
     }
   }
 });
 
 client.on('error', (error) => {
   console.error('Błąd Discorda:', error);
 });
 
process.on('unhandledRejection', (error) => {
  console.error('Nieobsłużony błąd:', error);
});

  
client.login(process.env.DISCORD_TOKEN);
