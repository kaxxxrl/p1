const { Client, Intents, MessageEmbed } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const PORT = 8080;

// Tworzenie instancji klienta Discord
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES],
  checkUpdate: false // Aby wyłączyć automatyczne sprawdzanie aktualizacji bota
});

// Logowanie bota za pomocą tokenu z zmiennych środowiskowych Render
client.login(process.env.DISCORD_TOKEN)  // Token jest teraz wczytywany z Render

// Kiedy bot jest gotowy
client.once('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}`);
});

// Odpowiedzi na wiadomości
client.on('message', (message) => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Tworzymy prosty serwer Express
app.get('/', (req, res) => {
  res.send('Serwer działa!');
});

// Uruchamiamy serwer Express na porcie 8080
app.listen(PORT, () => {
  console.log(`Serwer Express działa na porcie ${PORT}`);
});

