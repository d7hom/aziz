
const ms = require("ms");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mute",
  
    execute(client,Message,args){
       
         const target = Message.mentions.users.first();
         if(target){
             let mainrole= Message.guild.roles.cache.find(roles => roles.id === '797857258847469609');//هنا حط ايدي رتبة الميوت
            
             let muterole3= Message.guild.roles.cache.find(roles => roles.id === '798211676855599174');

             let memberTarget = Message.guild.members.cache.get(target.id);

             if(!args[1]){
                memberTarget.roles.remove(mainrole.id);
                memberTarget.roles.add(muterole3.id);
                Message.channel.send(`:white_check_mark: <@${memberTarget.user.id}> **has been Muted**`);
                return;
             }
             memberTarget.roles.remove(mainrole.id);
             memberTarget.roles.add(muterole3.id);
             Message.channel.send(`<@${memberTarget.user.id}> has been Muted for ${ms(ms(args[1]))}`);

             setTimeout(function(){
                memberTarget.roles.remove(muterole3.id);
                memberTarget.roles.add(mainrole.id);
                Message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
             },ms(args[1]));
         }else{
             Message.channel.send({ embeds: [new MessageEmbed().setDescription(`**Command: mute**\n\nMute a member from text/voice channels so they cannot type.\n\n**Usage:**\n\n\`#mute\` \`[user]\``)] })
         }
    } 
}