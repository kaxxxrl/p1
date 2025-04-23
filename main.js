const { Client, Intents, MessageEmbed } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const PORT = 8080;
const client = new Client({
  checkUpdate: false,
});

// Serwer HTTP do utrzymania aktywności na Render (dla darmowego tieru)
app.get('/', (req, res) => {
  res.send('Self-bot działa na Render! 🚀');
});

app.listen(PORT, () => {
  console.log(`Serwer pingujący działa na porcie ${PORT}`);
});

// Reklama serwera
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

// Lista użytkowników partnerstwa i ich czas ostatniego partnerstwa
const partneringUsers = new Map();
const partnershipTimestamps = new Map();

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} jest gotowy.`);

  // Partnerstwa PV co 6 minut
  const channelId_partnerstwa = '1346609247869337701';
  setInterval(async () => {
    const channel = client.channels.cache.get(channelId_partnerstwa);
    if (channel) {
      await channel.send('# PARTNERSTWA PV');
    } else {
      console.error(`Nie znaleziono kanału o ID ${channelId_partnerstwa}`);
    }
  }, 6 * 60 * 1000);

  // Reklamowanie serwera co 11 minut
  const channelId_programming = '1346609272447832067'; // Advertising
  const channelId_global = '1348329636056268911';
  const zimoweall = '1346609268375158834';
  const fourhrs = '1346609313329971293'; // 4hrs
  const zeroToHundred = '1346609263681732710'; // 0-100
  const zimowe6h = '1346609312042324060';

  setInterval(async () => {
    const channel_global = client.channels.cache.get(channelId_global);
    const zimoweall1 = client.channels.cache.get(zimoweall);
    const fourhrs1 = client.channels.cache.get(fourhrs);
    const zeroToHundred1 = client.channels.cache.get(zeroToHundred);
    const zimowe6h1 = client.channels.cache.get(zimowe6h);

    if (channel_global && zimoweall1 && fourhrs1 && zeroToHundred1 && zimowe6h1) {
      await channel_global.send(serverAd);
      await zimoweall1.send(serverAd);
      await fourhrs1.send(serverAd);
      await zeroToHundred1.send(serverAd);
      await zimowe6h1.send(serverAd);
    } else {
      console.error(`Nie znaleziono któregoś z kanałów reklamowych.`);
    }
  }, 11 * 60 * 1000);
});

client.on('messageCreate', async (message) => {
  if (!message.guild && !message.author.bot && message.author.id !== client.user.id) {
    const now = Date.now();
    const lastPartnership = partnershipTimestamps.get(message.author.id);

    if (lastPartnership && now - lastPartnership < 7 * 24 * 60 * 60 * 1000) {
      await message.channel.send("⏳ Musisz jeszcze poczekać, zanim będziesz mógł nawiązać kolejne partnerstwo. Spróbuj ponownie za tydzień.");
      return;
    }

    if (!partneringUsers.has(message.author.id)) {
      partneringUsers.set(message.author.id, null);
      await message.channel.send("🌎 Jeśli chcesz nawiązać partnerstwo, wyślij swoją reklamę (maksymalnie 1 serwer).");
    } else {
      const userAd = partneringUsers.get(message.author.id);

      if (userAd === null) {
        partneringUsers.set(message.author.id, message.content);
        await message.channel.send(`✅ Wstaw naszą reklamę:\n${serverAd}`);
        await message.channel.send("⏰ Daj znać, gdy wstawisz reklamę!");
      } else if (message.content.toLowerCase().includes('wstawi') || message.content.toLowerCase().includes('już') || message.content.toLowerCase().includes('gotowe') || message.content.toLowerCase().includes('juz')) {
        await message.channel.send("Czy wymagane jest dołączenie na twój serwer?");
        const filter = m => m.author.id === message.author.id;
        const reply = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] }).catch(() => null);

        if (reply && !reply.first().content.toLowerCase().includes('nie')) {
          await message.channel.send("Mój właściciel @bqztk za niedługo na pewno dołączy do twojego serwera.");
          const notificationUser = await client.users.fetch('1087428851036082266');
          await notificationUser.send(`Wymagane dołączenie na serwer:\n${userAd}`);
        }

        const guild = client.guilds.cache.get('1363565181048983562');
        if (!guild) {
          await message.channel.send("❕ Nie znaleziono serwera.");
          return;
        }

        const member = await guild.members.fetch(message.author.id).catch(() => null);
        if (!member) {
          await message.channel.send("❕ Dołącz na serwer, aby kontynuować!");
          return;
        }

        const channel = guild.channels.cache.find(ch => ch.name === '💼・partnerstwa' && ch.isText());
        if (!channel) {
          await message.channel.send("Nie znaleziono kanału '💼・partnerstwa'.");
          return;
        }

        await channel.send(`${userAd}\n\nPartnerstwo z: ${member}`);
        await message.channel.send("✅ Dziękujemy za partnerstwo! W razie pytań kontaktuj się z użytkownikiem @bqrzk (bqrzk)");

        partnershipTimestamps.set(message.author.id, now);
        partneringUsers.delete(message.author.id);
      }
    }
  }
});

client.on('guildMemberAdd', async (member) => {
  if (partneringUsers.has(member.id)) {
    const userAd = partneringUsers.get(member.id);
    const channel = member.guild.channels.cache.find(ch => ch.name === '💼・partnerstwa' && ch.isText());
    if (channel) {
      await channel.send(`${userAd}\n\nPartnerstwo z: ${member}`);
      const dmChannel = await member.createDM();
      await dmChannel.send("✅ Dziękujemy za dołączenie! Twoja reklama została wstawiona.");
      partneringUsers.delete(member.id);
      partnershipTimestamps.set(member.id, Date.now());
    } else {
      console.error("Nie znaleziono kanału '💼・partnerstwa'.");
    }
  }
});

client.on('error', (error) => {
  console.error('Błąd Discorda:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Nieobsłużony błąd:', error);
});

// Logowanie do Discorda
client.login(process.env.DISCORD_TOKEN);