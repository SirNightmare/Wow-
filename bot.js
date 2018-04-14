const Discord = require("discord.js");
const commando = require("discord.js-commando");
const settings = require("./settings.json");
const fs = require("fs");

let bot = new Discord.Client();
bot.commands =  new Discord.Collection();
bot.mutes = require("./mutes.json");

const prefix = settings.prefix;

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!")
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
    console.log("Bot Ready!");
    console.log("Settings:")
    console.log(`Name: ${bot.user.username}#${bot.user.discriminator}`);
    console.log("Token: " + settings.token);
    console.log("Prefix: " + settings.prefix);
    console.log(bot.commands);
});

bot.on("message", async message => {
    if(message.content.bot) return;

    let messsageArray = message.content.split(" ");
    let command = messsageArray[0];
    let args = messsageArray.slice(1);

    if(!command.startsWith(settings.prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
      });
bot.login(settings.token);
