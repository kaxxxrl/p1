const { Client, Intents, MessageEmbed } = require('discord.js-selfbot-v13');
const express = require('express');
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
Twoje centrum reklamy i promocji!

⛵️ Szukasz miejsca, gdzie Twoja reklama naprawdę wypłynie na szerokie wody?
Witamy w Zatoce ADS  

✨ Co oferujemy?
➤ 🚀 Szybkie i darmowe promowanie serwerów Discord, social mediów i nie tylko!
➤ ❤️ Przyjazną i aktywną społeczność.
➤ 🗂️ Dużo przejrzystych kategorii reklamowych, by Twoja reklama trafiła dokładnie tam, gdzie trzeba.
➤ 🎉 Strefa 4fun — konkursy, mini-gry, eventy i luźne rozmowy!
➤ ✨ Estetyczny, przejrzysty wygląd serwera, który sprzyja promocji i dobrej atmosferze.
➤ 🎁 Giveaway'e i specjalne promocje dla aktywnych użytkowników!

⚓ Dlaczego właśnie Zatoka ADS?
➤ 📜 Przejrzyste zasady, brak chaosu, aktywna moderacja 

⏳ Nie czekaj!
Dołącz już teraz i rozwiń swoje żagle z Zatoką ADS! ⛵✨

link🔗: || https://discord.gg/zwJBBfNEGY ||  || https://cdn.discordapp.com/attachments/1363565188833349881/1363750526906269776/lv_0_20250421073621.gif?ex=68072b26&is=6805d9a6&hm=fc37457f754af9286bce2bca92f9a28481e3d10a69687f1d95585e10cb62a1fd& ||
`;

const partneringUsers = new Map();
const partnershipTimestamps = new Map();

// Istniejące kanały
const channelId_partnerstwa = '1346609247869337701';
const channelId_global = '1348329636056268911';
const zimoweall = '1346609268375158834';
const fourhrs = '1346609313329971293';
const zeroToHundred = '1346609263681732710';
const zimowe6h = '1346609312042324060';
const twohrs = '1346609314927743047';
const onehr = '1346609316190486528';
const thirtymin = '1346609317335531632';
const fifteenmin = '1346609318476255293';
const onemin = '1346609319877279794';
const miastoAds = '1254165815071342602';
const miastopartnerstwa = '1332399570872832151';
const miastoall = '1254165638331502653';
const miasto6h = '1254123088103346247';
const miasto2gdz = '1254163564264947782';
const zeroToOneHundred_2h = '1254162168899960883';

// Nowe kanały HyperADS
const hyper_0to100 = '1295166655415980072';
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
const adnet_5m_4 = '1335340565369327650';
const adnet_10m = '1335023308500107274';
const adnet_1h = '1335023742304129095';
const adnet_2h = '1335023854158086214';
const adnet_6h = '1335024020046872627';
const adnet_partner = '1364690326094352455';

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} jest gotowy.`);

  // AdNet - co 5 minut
setInterval(async () => {
  const list = [adnet_5m_1, adnet_5m_2, adnet_5m_3, adnet_5m_4];
  for (const id of list) {
    const channel = client.channels.cache.get(id);
    if (channel) await channel.send(serverAd);
  }
}, 5 * 60 * 1000);

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

// AdNet - partnerstwo co 10 minut
setInterval(async () => {
  const channel = client.channels.cache.get(adnet_partner);
  if (channel) await channel.send('# Partnerstwo? PV!');
}, 10 * 60 * 1000);
  
  // Reklama partnerstw
  setInterval(async () => {
    const channel = client.channels.cache.get(channelId_partnerstwa);
    if (channel) await channel.send('# Szukam partnerstw dowolne serwery! Zapraszam pv');
  }, 5 * 60 * 1000);

  // Wysyłanie reklam w różnych odstępach czasu
  setInterval(async () => {
    const channel = client.channels.cache.get(onemin);
    if (channel) await channel.send(serverAd);
  }, 2.5 * 60 * 1000);

  setInterval(async () => {
    const g = client.channels.cache.get(channelId_global);
    const z = client.channels.cache.get(zimoweall);
    const zth = client.channels.cache.get(zeroToHundred);
    if (g && z && zth) {
      await g.send(serverAd);
      await z.send(serverAd);
      await zth.send(serverAd);
    }
  }, 10 * 60 * 1000);

  setInterval(async () => {
    const list = [fifteenmin, thirtymin, onehr, twohrs, fourhrs];
    for (const id of list) {
      const channel = client.channels.cache.get(id);
      if (channel) await channel.send(serverAd);
    }
  }, 15 * 60 * 1000);

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
  }, 3 * 60 * 60 * 1000);
});

client.on('messageCreate', async (message) => {
  if (!message.guild && !message.author.bot && message.author.id !== client.user.id) {
    const now = Date.now();
    const last = partnershipTimestamps.get(message.author.id);

    if (last && now - last < 7 * 24 * 60 * 60 * 1000) {
      return message.channel.send("⏳ Musisz jeszcze poczekać, zanim będziesz mógł nawiązać kolejne partnerstwo. Spróbuj ponownie za tydzień.");
    }

    if (!partneringUsers.has(message.author.id)) {
      partneringUsers.set(message.author.id, null);
     return message.channel.send("🌎 Jeśli chcesz nawiązać partnerstwo, wyślij swoją reklamę (maksymalnie 1 serwer).");
    }

    const userAd = partneringUsers.get(message.author.id);

    if (userAd === null) {
      partneringUsers.set(message.author.id, message.content);
      await message.channel.send(`✅ Wstaw naszą reklamę:\n${serverAd}`);
      return message.channel.send("⏰ Daj znać, gdy wstawisz reklamę!");
    }

    if (message.content.toLowerCase().includes('wstawi') || message.content.toLowerCase().includes('już') || message.content.toLowerCase().includes('gotowe') || message.content.toLowerCase().includes('juz')) {
      await message.channel.send("Czy wymagane jest dołączenie na twój serwer?");

      const filter = m => m.author.id === message.author.id;
      const reply = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] }).catch(() => null);

      if (reply && !reply.first().content.toLowerCase().includes('nie')) {
        await message.channel.send("Mój właściciel @bqztk za niedługo na pewno dołączy do twojego serwera.");
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
      await message.channel.send("✅ Dziękujemy za partnerstwo! W razie pytań kontaktuj się z użytkownikiem @bqrzk (bqrzk)");

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
