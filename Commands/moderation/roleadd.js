module.exports = {
    name: 'addRole1',
        execute(client, message, args) {
            
          
    if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("يا عمي توكل ماعندك بيرمشن وجاي تكلمني")
    
    let user = message.mentions.members.first();
    let role = message.mentions.roles.first();      
    if(!user) return message.reply("يا عمنا منشن الشخص يا عمنا")
    if(!role) return message.reply(" يا ابو الشيوخ لا تجلطني منشن الرتبه ")
    let role2 = message.guild.roles.cache.find(r => r == role)
    user.roles.add(role2)
    message.reply(`تم يا شيخنا الكبير اديته الرتبه ذي :${role} لعيونك ولعيون : ${user}`)
        }
    }