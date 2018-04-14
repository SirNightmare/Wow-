const Discord = require("discord.js");
const prefix = "?"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: `Available Commands!`,
        fields: [{
            name: "?mute (Mention or id of a user)",
            value: `Mutes the given user!-- To use this command you need the MUTE_MEMBERS Permission!`
          },
          {
            name: "?unmute (Mention or id of a user)",
            value: `Unmutes the given user!-- To use this command you need the MUTE_MEMBERS Permission!`
          },
          {
            name: "?userinfo",
            value: `Sends you info about your Discord account!`
          },
          {
            name: "?dex (Pokemon name)",
            value: "Sends you info and dex entry of the given pokemon!"
          },
          {
            name: "?ability (pokemon ability)",
            value: "Sends you info about the given pokemon ability!"
          },
          {
            name: "?move (Pokemon move name)",
            value: "Sends you info about the given pokemon ability!"
          },
          {
            name: "?convert",
            value: "Converts a mesure to a different mesurement eg. ?convert 6 km to mi   that would convert 6km to miles!"
          }, 
          {
            name: "?item (Pokemon item)",
            value: "Sends you info about the given pokemon item"
          },
          {
            name: "?play (song name)",
            value: "Plays the given song!"
          },
          {
            name: "?skip",
            value: "Skips the playing song!"
          },
          {
            name: "?pause",
            value: "Pauses the playing song!"
          },
          {
            name: "?resume",
            value: "Resumes the paused song"
          },
          {
            name: "?search",
            value: "Searches the top 10 results of the mentioned song!"
          },
          {
            name: "?invite",
            value: "Sends you the invite to the support server!"
          },
          {
            name: "?type (pokemon type) eg. ?type water",
            value: "Sends you info about the pokemon type!"
          },
          {
            name: "?roll",
            value: "Rolls a 6 sided dice!"
          },
          {
            name: "?purge (amount)",
            value: "Deletes the amount of messages provided in that channel! a role named Staff is needed to use this command!"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: `${message.author.username}#${message.author.discriminator}`
        }
      }       
    });
  }

module.exports.help = {
    name: "help"
}