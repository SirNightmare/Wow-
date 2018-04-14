const Discord = require("discord.js");
const prefix = "?"
const fs = require("fs");
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("`You do not have the permission MUTE_MEMBERS`");
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("`You did not specify a user mention or identification (ID)!`")

    if(toMute.id === message.author.id) return message.channel.send("`You cannot mute yourself!`");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("`You cannot mute a member that has the same rank as you or is a higher rank than you!`");

    let role = message.guild.roles.find(r => r.name == "Sylveon Muted");
    if(!role) {
      try{
        role = await message.guild.createRole({
          name: "Sylveon Muted",
          color: "#7300ff",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch(e) {
      console.log(e.stack)
      }
    }
      if(toMute.roles.has(role.id)) return message.channel.send("`This user is already muted!`");
      await toMute.addRole(role);
      message.channel.send("`I have muted this user!`");

      }

  
  

module.exports.help = {
    name: "mute"
}