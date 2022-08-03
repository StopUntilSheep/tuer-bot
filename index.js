// importing discord and its relevant classes
const { Client, IntentsBitField } = require('discord.js');

const myIntents = new IntentsBitField(3276799); // 3276799

const client = new Client({ intents: myIntents });


// listening for event to notify progress
client.on('ready', () => {
  console.log("Connected as " + client.user.tag);
})


client.on("messageCreate", (message) => {

  if (message.author.bot) return false;

  /*   if (message.content.toLowerCase().includes("tuer")) {
      const channel = client.channels.cache.get('377557702219661315');
      channel.send(`Arse.`);
    } */

  /*   if (message.content.toLowerCase().includes("vape")) {
      const channel = client.channels.cache.get('377557702219661315');
      channel.send(`I like to vape. I'm Tuer.`);
    }
    
    */



  if (message.content.toLowerCase().includes("chicken")) {
    const channel = client.channels.cache.get('377557702219661315');
    channel.send(`I like chicken nuggets. I'm Tuer.`);
  }



  if (message.content.toLowerCase().includes("big blind")) {
    const channel = client.channels.cache.get('377557702219661315');
    channel.send(`Let's make... a humming sound... mmMMMMMmmmmMMmmmmMMmmmmmMMMMMmmmMmmmmMMmmmmmmmmmmmmmmmmMMMMmmmmmMMmmMmMMMMmmmmmmmm.`);
  }



  if (message.content.toLowerCase().includes("tit")) {
    const channel = client.channels.cache.get('377557702219661315');
    channel.send(`I love big tits. I'm Tuer.`);
  }

  if (Math.random() < 0.01) {
    message.react('😂');
  }



  if (message.content.toLowerCase().includes("poker")) {
    message.react('💰');
  }


  function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }


  // if message length > 10 & more vowels than non-vowels
  if (message.content.toLowerCase().length > 10 && getVowels(message.content.toLowerCase()) > (message.content.toLowerCase().length - getVowels(message.content.toLowerCase()))) {
    message.react('❤️');
  }


  /*

  if (message.content.toLowerCase().includes("wtf")) {
    message.reply(`Fuck you ${message.author.username} ey. I'm Tuer.`);
  }

  if (message.content.toLowerCase().includes("lol")) {
    message.reply(`Not funny ${message.author.username} ey. I'm Tuer.`);
  }

  if (message.content.toLowerCase().includes("fuck")) {
    message.reply(`Watch your language ${message.author.username} ey. I'm Tuer.`);
  }

  if (message.content.toLowerCase().includes("gay")) {
    message.reply(`You want to get gay with me, ${message.author.username}? I'm Tuer.`);
  }

  if (message.content.toLowerCase().includes("david")) {
    message.reply(`Don't you ever disrespect the king ${message.author.username}. I'm Tuer.`);
  }
*/
  if (message.content.toLowerCase().includes("tuna")) {
    message.reply(`Tuna!`);
  }
  /*
    if (message.content.toLowerCase().includes("neo")) {
      message.reply(`Watch yourself. I'm Tuer.`);
    }
  
    if (message.content.toLowerCase().includes("lmao")) {
      message.reply(`That's funny ey. I'm Tuer.`);
    } */

});

// message.reply(`Fuck you ${message.author.username}!`);
// const channel = client.channels.cache.get('969578595573989469');
// channel.send("That's me! I'm Tuer!");


// paste your bot secret token here
bot_secret_token = "MTAwNDMyNDYwNTY3NjIyNDYyMg.GBljBL.3M1PKY9-iF0yqwwlt7G4AjBEzW9AoTuky4tTBg";


client.login(bot_secret_token);