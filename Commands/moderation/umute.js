
const ms = require("ms");

module.exports = {
    name: "unmute",
 
    execute(client,Message,args){
         const target = Message.mentions.users.first();
         if(target){
             let mainrole= Message.guild.roles.cache.find(roles => roles.id === '798211676855599174');
      
             let muterole= Message.guild.roles.cache.find(roles => roles.id === '797857258847469609');

             let memberTarget = Message.guild.members.cache.get(target.id);

             if(!args[1]){
                memberTarget.roles.remove(mainrole.id);
              
                memberTarget.roles.add(muterole.id);
                Message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
                return;
             }
             memberTarget.roles.remove(mainrole.id);
             memberTarget.roles.add(muterole.id);
             Message.channel.send(`<@${memberTarget.user.id}> has been unmuted for ${ms(ms(args[1]))}`);

             setTimeout(function(){
                memberTarget.roles.remove(mainrole.id);
                memberTarget.roles.add(muterole.id);
                Message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
             },ms(args[1]));
         }else{
             Message.channel.send(`Can't find the member!`)
         }
    } 
}
